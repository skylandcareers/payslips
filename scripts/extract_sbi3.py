import re
import json
import base64
from bs4 import BeautifulSoup

def main():
    print("Reading public/sbi3/sai-tarun-statement.html...")
    with open('public/sbi3/sai-tarun-statement.html', 'r', encoding='utf-8') as f:
        html = f.read()

    soup = BeautifulSoup(html, 'html.parser')
    pages = soup.find_all('div', class_='page')
    print(f"Total pages: {len(pages)}")

    # 1. Extract decorative SVG for Page 1
    p0 = pages[0]
    defs_tag = p0.find('svg', class_='cdefs')
    defs_content = ""
    if defs_tag:
        defs_inner = defs_tag.find('defs')
        if defs_inner:
            defs_content = str(defs_inner)

    decor_svgs = []
    for s in p0.find_all('svg', class_='vec'):
        style = s.get('style', '')
        m = re.search(r'top:([0-9.-]+)px', style)
        if m and float(m.group(1)) < 600:
            left_m = re.search(r'left:([0-9.-]+)px', style)
            top_val = float(m.group(1))
            left_val = float(left_m.group(1)) if left_m else 0.0
            w = s.get('width')
            h = s.get('height')
            vb = s.get('viewbox') or s.get('viewBox') or f"{left_val} {top_val} {w} {h}"
            inner_content = "".join([str(c) for c in s.children if c.name])
            decor_svgs.append(f'<svg x="{left_val}" y="{top_val}" width="{w}" height="{h}" viewBox="{vb}">{inner_content}</svg>')

    page_01_svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="793.33" height="1122.67" viewBox="0 0 793.33 1122.67">
  <defs>
    {defs_content}
  </defs>
  {"".join(decor_svgs)}
</svg>'''

    with open('public/sbi3/layout/page-01-bg.svg', 'w', encoding='utf-8') as f:
        f.write(page_01_svg)
    print("Saved public/sbi3/layout/page-01-bg.svg")

    # 2. Extract rupee image from page 59
    p59 = pages[59]
    img = p59.find('img')
    if img and img.get('src', '').startswith('data:image/png;base64,'):
        b64_data = img['src'].split('base64,')[1]
        with open('public/sbi3/layout/rupee.png', 'wb') as f:
            f.write(base64.b64decode(b64_data))
        print("Saved public/sbi3/layout/rupee.png")

    # 3. Extract Transactions and Layout
    all_transactions = []
    page_layouts = []
    global_id = 1

    for p_idx, page in enumerate(pages):
        page_num = p_idx + 1
        items = []
        for t in page.find_all('div', class_='t'):
            style = t.get('style', '')
            m = re.search(r'matrix\(1,0,0,1,([0-9.]+),([0-9.]+)\)', style)
            if m:
                x = float(m.group(1))
                y = float(m.group(2))
                items.append({
                    'x': x,
                    'y': y,
                    'text': t.text.strip()
                })

        # Locate transaction dates (column 1, x ~ 36.64)
        txn_dates = [it for it in items if abs(it['x'] - 36.64) < 2 and re.match(r'^\d{2}/\d{2}/\d{4}$', it['text'])]
        txn_dates.sort(key=lambda it: it['y'])

        row_heights = []
        page_txns = []

        for i in range(len(txn_dates)):
            curr_y = txn_dates[i]['y']
            next_y = txn_dates[i+1]['y'] if i + 1 < len(txn_dates) else None
            
            # Row height
            if next_y:
                h = round(next_y - curr_y, 2)
            else:
                # Default row height
                h = 66.67
            row_heights.append(h)

            # Row item bounds
            y_min = curr_y - 15.0
            y_max = next_y - 10.0 if next_y else (curr_y + 55.0)

            row_items = [it for it in items if y_min <= it['y'] < y_max]

            # Description (x around 184)
            desc_items = [it for it in row_items if abs(it['x'] - 184.0) < 5]
            desc_items.sort(key=lambda it: it['y'])
            desc = '\n'.join([it['text'] for it in desc_items])

            # Value date (x around 110)
            vdate_items = [it for it in row_items if abs(it['x'] - 109.97) < 5]
            vdate = vdate_items[0]['text'] if vdate_items else txn_dates[i]['text']

            # Ref No (x around 405)
            ref_items = [it for it in row_items if abs(it['x'] - 404.89) < 10]
            ref = ref_items[0]['text'] if ref_items else '-'

            # Debit (x around 438..520)
            dr_items = [it for it in row_items if 438 <= it['x'] <= 520]
            dr = dr_items[0]['text'] if dr_items else '-'

            # Credit (x around 545..640)
            cr_items = [it for it in row_items if 545 <= it['x'] <= 640]
            cr = cr_items[0]['text'] if cr_items else '-'

            # Balance (x around 650..750)
            bal_items = [it for it in row_items if 650 <= it['x'] <= 750]
            bal = bal_items[0]['text'] if bal_items else '-'

            tx = {
                'id': str(global_id),
                'page': page_num,
                'txnDate': txn_dates[i]['text'],
                'valueDate': vdate,
                'description': desc,
                'refNo': ref,
                'debit': dr,
                'credit': cr,
                'balance': bal
            }
            all_transactions.append(tx)
            page_txns.append(tx)
            global_id += 1

        table_top = 653.33 if page_num == 1 else 26.67
        page_layout = {
            'page': page_num,
            'tableTop': table_top,
            'rowCount': len(txn_dates),
            'rowHeights': row_heights
        }
        if page_num == 60:
            page_layout['summaryTop'] = 456.13
        page_layouts.append(page_layout)

    print(f"Total transactions extracted: {len(all_transactions)}")

    # 4. Generate src/data/sbi3Layout.ts
    layout_ts = f'''// Source PDF geometry: 793.33 × 1122.67 CSS px (A4). Content lives in sbi3Data.ts.
export interface SBI3PageLayout {{
  page: number;
  tableTop: number;
  rowCount: number;
  rowHeights: number[];
  summaryTop?: number;
}}

export const sbi3ColumnWidths = {{
  txnDate: 73.33,
  valueDate: 73.33,
  description: 200.67,
  refNo: 66.67,
  debit: 106.67,
  credit: 106.67,
  balance: 113.0,
}};

export const sbi3PageLayouts: SBI3PageLayout[] = {json.dumps(page_layouts, indent=2)};
'''
    with open('src/data/sbi3Layout.ts', 'w', encoding='utf-8') as f:
        f.write(layout_ts)
    print("Saved src/data/sbi3Layout.ts")

    # 5. Generate src/data/sbi3Data.ts
    account_details = {
        "customerName": "Mrs. UMADEVI  KANDUKURI",
        "email": "umadevikarthik555@gmail.com",
        "addressLines": [
            "1-7-107,PNR RESIDENCY,CHAITANYAPURI,",
            "HYDERABAD,RANGA REDDY,500060"
        ],
        "statementDate": "09-10-2026",
        "clearBalance": "558.98CR",
        "unclearedAmount": "0.00",
        "modBalance": "0.00",
        "lien": "354.0",
        "limit": "0.00",
        "monthlyAvgBalance": "0.00",
        "interestRate": "2.50 % p.a.",
        "drawingPower": "0.00",
        "accountOpenDate": "29/12/2015",
        "branchName": "CHAITANYAPURI",
        "branchCode": "20876",
        "branchAddress": [
            "DOOR NO 1 7 95 1, SHRI SHIVA",
            "KRISHNA,COMPLEX,",
            "COMPLEX, CHAITANYAPURI"
        ],
        "branchEmail": "SBI.20876@sbi.co.in",
        "branchPhone": "9063180480",
        "cifNumber": "72233658095",
        "accountNumber": "52210183318",
        "product": "REGULAR SB CHQ-INDIVIDUALS",
        "ifscCode": "SBIN0020876",
        "currency": "INR",
        "accountStatus": "OPEN",
        "ckycrNumber": "Not Available",
        "micrCode": "500002386",
        "nomineeName": "XXXXXXXXXXXXXXXXXXXXX",
        "periodFrom": "01-07-2026",
        "periodTo": "09-10-2026"
    }

    statement_summary = {
        "periodFrom": "01-07-2026",
        "periodTo": "09-10-2026",
        "broughtForward": "2,088.54CR",
        "drCount": 670,
        "crCount": 97,
        "totalDebits": "10,11,106.60",
        "totalCredits": "10,09,577.04",
        "closingBalance": "558.98CR"
    }

    data_ts = f'''export interface SBI3Transaction {{
  id: string;
  page: number;
  txnDate: string;
  valueDate: string;
  description: string;
  refNo: string;
  debit: string;
  credit: string;
  balance: string;
}}

export interface SBI3AccountDetails {{
  customerName: string;
  email: string;
  addressLines: string[];
  statementDate: string;
  clearBalance: string;
  unclearedAmount: string;
  modBalance: string;
  lien: string;
  limit: string;
  monthlyAvgBalance: string;
  interestRate: string;
  drawingPower: string;
  accountOpenDate: string;
  branchName: string;
  branchCode: string;
  branchAddress: string[];
  branchEmail: string;
  branchPhone: string;
  cifNumber: string;
  accountNumber: string;
  product: string;
  ifscCode: string;
  currency: string;
  accountStatus: string;
  ckycrNumber: string;
  micrCode: string;
  nomineeName: string;
  periodFrom: string;
  periodTo: string;
}}

export interface SBI3StatementSummary {{
  periodFrom: string;
  periodTo: string;
  broughtForward: string;
  drCount: number;
  crCount: number;
  totalDebits: string;
  totalCredits: string;
  closingBalance: string;
}}

export const defaultSBI3AccountDetails: SBI3AccountDetails = {json.dumps(account_details, indent=2)};

export const defaultSBI3StatementSummary: SBI3StatementSummary = {json.dumps(statement_summary, indent=2)};

export const sbi3Transactions: SBI3Transaction[] = {json.dumps(all_transactions, indent=2)};
'''
    with open('src/data/sbi3Data.ts', 'w', encoding='utf-8') as f:
        f.write(data_ts)
    print("Saved src/data/sbi3Data.ts")

if __name__ == '__main__':
    main()
