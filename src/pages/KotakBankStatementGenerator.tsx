import { Fragment, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, Loader2, Printer } from 'lucide-react';
import { toast } from 'sonner';
import {
  defaultKotakAccountDetails as account,
  kotakImportantInfo,
  kotakNarrationsPart1,
  kotakNarrationsPart2,
  kotakStatementDateOverrides,
  kotakTransactions,
} from '../data/kotakData';
import { kotakInfoTextYs, kotakOverflowDescription, kotakRowLayouts } from '../data/kotakLayout';

const PAGE_COUNT = 13;
const ASSET_ROOT = '/kotak/layout';

function Text({ x, y, children, size = 12, bold = false, color = '#000' }: {
  x: number; y: number; children: ReactNode; size?: number; bold?: boolean; color?: string;
}) {
  return <span className="kotak-text" style={{
    transform: `translate(${x}px, ${y}px)`,
    fontFamily: bold ? 'KotakBold, sans-serif' : 'KotakRegular, sans-serif',
    fontSize: size,
    color,
  }}>{children}</span>;
}

function Asset({ name, x, y, width, height }: {
  name: string; x: number; y: number; width: number; height: number;
}) {
  return <img className="kotak-asset" src={`${ASSET_ROOT}/${name}`} alt="" style={{
    left: x, top: y, width, height,
  }} />;
}

function Header({ pageNumber }: { pageNumber: number }) {
  if (pageNumber !== 1) return <>
    <Text x={48} y={16}>{account.customerName.toUpperCase()}</Text>
    <Text x={48} y={32} color="#9fa1a4">Account No.</Text>
    <Text x={112} y={32} bold>{account.accountNumber}</Text>
    <Text x={48} y={48} color="#9fa1a4">Account Statement</Text>
    <Text x={148} y={48} bold>{account.periodFrom} - {account.periodTo}</Text>
  </>;

  return <>
    <img className="kotak-banner" src="/kotak-logo.jpg" alt="Kotak Mahindra Bank" />
    <Text x={48} y={123.33} size={33.33} bold>Account Statement</Text>
    <Text x={48} y={164} size={14.67}>{account.periodFrom} - {account.periodTo}</Text>
    <Text x={50.67} y={224} size={18.67} bold>{account.customerName}</Text>
    <Text x={50.67} y={250} size={14.67} color="#9fa1a4">CRN {account.crn}</Text>
    {account.addressLines.map((line, i) => <Text key={i} x={50.67} y={296.67 + 20 * i}>{line}</Text>)}
    <Text x={50.67} y={411.33} color="#9fa1a4">MICR</Text>
    <Text x={78.6} y={411.33} bold>{account.micr}</Text>
    <Text x={141.2} y={411.33} color="#9fa1a4">IFSC Code</Text>
    <Text x={194.3} y={411.33} bold>{account.ifsc}</Text>
    <Text x={463.3} y={224} color="#9fa1a4">Account No.</Text>
    <Text x={526.5} y={224} bold>{account.accountNumber}</Text>
    <Text x={463.3} y={245.33} color="#9fa1a4">Account Type</Text>
    <Text x={536.3} y={245.33} bold>{account.accountType}</Text>
    <Text x={463.3} y={266.67} color="#9fa1a4">Branch</Text>
    <Text x={501.6} y={266.67} bold>{account.branch}</Text>
    <Text x={463.3} y={301.33} color="#9fa1a4">Account Status</Text>
    <Text x={541.4} y={301.33} bold>{account.accountStatus}</Text>
    <Text x={463.3} y={322.67} color="#9fa1a4">Nominee Registered</Text>
    <Text x={567.4} y={322.67} bold>{account.nomineeRegistered}</Text>
    <Text x={463.3} y={357.33} color="#9fa1a4">Currency</Text>
    <Text x={511} y={357.33} bold>{account.currency}</Text>
  </>;
}

function Footer({ pageNumber }: { pageNumber: number }) {
  return <>
    <Text x={48} y={1088.53} size={12.8} color="#9fa1a4">Statement Generated on {kotakStatementDateOverrides[pageNumber] ?? account.statementDate}</Text>
    <Text x={pageNumber < 10 ? 692 : 685.36} y={1088} size={13.33} color="#9fa1a4">Page {pageNumber} of {PAGE_COUNT}</Text>
  </>;
}

function FieldLines({ value, positions }: { value: string; positions?: number[][] }) {
  if (!value || !positions) return null;
  return <>{value.split('\n').map((line, i) => {
    const position = positions[i];
    return position && <Text key={i} x={position[0]} y={position[1]} size={10.24}>{line}</Text>;
  })}</>;
}

function TransactionPage({ pageNumber }: { pageNumber: number }) {
  const first = pageNumber === 1;
  const headingY = first ? 446.67 : 114;
  const columnY = first ? 483.33 : 150.67;
  return <>
    <Text x={297.05} y={headingY} size={16} color="#fff">Savings Account Transactions</Text>
    {([
      [58.67, '#'], [100.24, 'Date'], [165.59, 'Description'],
      [372.88, 'Chq/Ref. No.'], [473.13, 'Withdrawal (Dr.)'],
      [571.87, 'Deposit (Cr.)'], [663.93, 'Balance'],
    ] as const).map(([x, label]) => <Text key={label} x={x} y={columnY} color="#fff">{label}</Text>)}
    {first && <>
      <Text x={52} y={510} size={10.24}>-</Text>
      <Text x={93.57} y={510} size={10.24}>-</Text>
      <Text x={158.92} y={510} size={10.24}>Opening Balance</Text>
      <Text x={366.21} y={510} size={10.24}>-</Text>
      <Text x={554.01} y={510} size={10.24}>-</Text>
      <Text x={646.08} y={510} size={10.24}>-</Text>
      <Text x={692.97} y={510} size={10.24}>{account.openingBalance}</Text>
    </>}
    {kotakRowLayouts.map((layout, i) => layout.page === pageNumber && <div key={i}>
      <Text x={52} y={layout.date[0][1]} size={10.24}>{kotakTransactions[i].id}</Text>
      <FieldLines value={kotakTransactions[i].date} positions={layout.date} />
      <FieldLines value={kotakTransactions[i].description} positions={layout.description} />
      <FieldLines value={kotakTransactions[i].refNo} positions={layout.refNo} />
      <FieldLines value={kotakTransactions[i].debit} positions={layout.debit} />
      <FieldLines value={kotakTransactions[i].credit} positions={layout.credit} />
      <FieldLines value={kotakTransactions[i].balance} positions={layout.balance} />
    </div>)}
    {pageNumber === kotakOverflowDescription.page && <Text
      x={kotakOverflowDescription.x}
      y={kotakOverflowDescription.y}
      size={10.24}
    >{kotakTransactions[kotakOverflowDescription.rowIndex].description.split('\n')[kotakOverflowDescription.lineIndex]}</Text>}
  </>;
}

function SummaryPage() {
  const closingBalance = kotakTransactions[kotakTransactions.length - 1].balance;
  return <>
    <Text x={335.2} y={114} size={16} color="#fff">Account Summary</Text>
    <Text x={64} y={156} color="#fff">Particulars</Text>
    <Text x={381} y={156} color="#fff">Opening Balance</Text>
    <Text x={571.1} y={156} color="#fff">Closing Balance</Text>
    <Text x={52} y={188} size={10.24}>Savings Account (SA):</Text>
    <Text x={466.8} y={188} size={10.24}>{account.openingBalance}</Text>
    <Text x={657} y={188} size={10.24}>{closingBalance}</Text>
    <Text x={336.8} y={284.9} size={16}>End of Statement</Text>
    <Text x={139.4} y={310.1} size={12.16}>Any discrepancy in the statement should be brought to the notice of Kotak Mahindra Bank Ltd. within</Text>
    <Text x={261.7} y={331.4} size={12.16}>one month from the date of receipt of the statement.</Text>
    <Text x={202.7} y={352.8} size={12.16}>This is a system generated report and does not require signature and stamp.</Text>
    <Asset name="campaign.jpg" x={48} y={524.91} width={697.33} height={115.16} />
    <Text x={285.6} y={779.3} size={16} color="#fff">For assistance, reach out to us at:</Text>
    <Asset name="phone.png" x={111.48} y={821.33} width={28} height={28} />
    <Asset name="branch.png" x={382.67} y={821.33} width={28} height={28} />
    <Asset name="phone.png" x={653.85} y={821.33} width={28} height={28} />
    <Text x={97.8} y={853.2} size={12.16}>Contact Us</Text>
    <Text x={100.1} y={869.2} size={12.16}>{account.tollFree}</Text>
    <Text x={79} y={885.2} size={12.16}>(Toll-free number)</Text>
    <Text x={357.6} y={853.3}>Branch Address</Text>
    <Text x={275.9} y={869.3}>{account.branchAddress}</Text>
    <Text x={610.9} y={853.3}>Branch Phone Number</Text>
    <Text x={638} y={869.3}>{account.branchPhone}</Text>
    <Text x={68} y={929.3} size={16} bold color="#ed1c24">Remember!</Text>
    <Text x={68} y={953.3} size={16}>Never share personal/sensitive information like PIN, CVV, OTP</Text>
    <Text x={68} y={977.3} size={16}>or passwords with anyone.</Text>
    <Asset name="qr.jpg" x={533.12} y={930.67} width={60.8} height={60.8} />
    <Text x={611.5} y={937.3} size={13.33}>Scan for</Text>
    <Text x={611.5} y={950.7} size={13.33}>more safe</Text>
    <Text x={611.5} y={964} size={13.33}>banking tips</Text>
    <Text x={224.9} y={1029.2} size={12.16}>Kotak Mahindra Bank Ltd. | CIN: {account.cin}</Text>
    <Text x={85} y={1053.2} size={12.16}>Registered Office: {account.registeredOffice}</Text>
  </>;
}

function Narrations({ part }: { part: 1 | 2 }) {
  const entries = part === 1 ? kotakNarrationsPart1 : kotakNarrationsPart2;
  const half = entries.length / 2;
  const startY = part === 1 ? 930.1 : 110.67;
  return <>{entries.map((entry, i) => <Text
    key={entry.code}
    x={i < half ? 52 : 400.67}
    y={startY + (i % half) * 18.24}
    size={10.24}
  >{entry.code} - {entry.description}</Text>)}</>;
}

function InformationPage() {
  return <>
    <Text x={321} y={114} size={16} color="#fff">Important Information</Text>
    {kotakImportantInfo.map((item, i) => <Fragment key={i}>
      <Asset name="bullet.png" x={66.04} y={kotakInfoTextYs[i] + 6.67} width={5.33} height={5.33} />
      {item.split('\n').map((line, j) => <Text key={`item-${i}-line-${j}`} x={91.4} y={kotakInfoTextYs[i] + j * 10.24} size={10.24}>{line}</Text>)}
    </Fragment>)}
    <Text x={304.4} y={900.1} size={16} color="#fff">Commonly Used Narrations</Text>
    <Narrations part={1} />
  </>;
}

export default function KotakBankStatementGenerator() {
  const [isExporting, setIsExporting] = useState(false);
  const downloadPdf = async () => {
    try {
      setIsExporting(true);
      const response = await fetch('/api/export-pdf?path=/kotak&filename=Kotak_Mahindra_Bank_Statement.pdf');
      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error || `Export failed with status ${response.status}`);
      }
      const url = URL.createObjectURL(await response.blob());
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Kotak_Mahindra_Bank_Statement.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      toast.success('Kotak statement PDF downloaded.');
    } catch (error) {
      toast.error(`Failed to download PDF: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsExporting(false);
    }
  };

  return <div className="kotak-viewer">
    <style>{`
      @font-face { font-family: KotakRegular; src: url('/kotak/layout/f0.woff') format('woff'); ascent-override: 100%; descent-override: 0%; line-gap-override: 0%; }
      @font-face { font-family: KotakBold; src: url('/kotak/layout/f1.woff') format('woff'); ascent-override: 100%; descent-override: 0%; line-gap-override: 0%; }
      @page { size: 793.33px 1122.67px; margin: 0; }
      .kotak-viewer { min-height: 100vh; background: #e8e8e8; }
      .kotak-toolbar { position: sticky; top: 0; z-index: 10; background: white; border-bottom: 1px solid #ddd; }
      .kotak-toolbar-inner { max-width: 1200px; margin: auto; padding: 12px 16px; display: flex; justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap; }
      .kotak-toolbar-title, .kotak-toolbar-actions { display: flex; align-items: center; gap: 12px; }
      .kotak-toolbar button { cursor: pointer; }
      .kotak-pages { padding: 8px 0; }
      .kotak-page { width: 793.33px; height: 1122.67px; position: relative; overflow: hidden; background: white; margin: 8px auto; box-shadow: 0 1px 4px #0005; color: #000; }
      .kotak-vectors { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; }
      .kotak-banner { position: absolute; left: 0; top: 0; width: 793.33px; height: 99.8px; }
      .kotak-asset { position: absolute; display: block; }
      .kotak-text { position: absolute; left: 0; top: 0; z-index: 2; line-height: 1; white-space: pre; display: inline-block; transform-origin: 0 0; }
      @media (max-width: 809px) { .kotak-pages { overflow-x: auto; } .kotak-page { margin-left: 8px; margin-right: 8px; } }
      @media print { html, body { margin: 0 !important; padding: 0 !important; background: white !important; } .kotak-viewer { min-height: 0; background: white; } .kotak-toolbar { display: none !important; } .kotak-pages { padding: 0; overflow: visible; } .kotak-page { margin: 0; box-shadow: none; break-after: page; } .kotak-page:last-child { break-after: auto; } }
    `}</style>
    <header className="kotak-toolbar"><div className="kotak-toolbar-inner">
      <div className="kotak-toolbar-title">
        <Link to="/" className="inline-flex items-center gap-1.5 rounded border px-3 py-2 text-xs font-semibold text-slate-700"><ArrowLeft className="h-4 w-4" />Dashboard</Link>
        <strong className="text-sm text-slate-800">Kotak Mahindra Bank Statement</strong>
      </div>
      <div className="kotak-toolbar-actions">
        <span className="text-xs text-slate-600">{kotakTransactions.length} transactions · {PAGE_COUNT} pages</span>
        <button type="button" onClick={downloadPdf} disabled={isExporting} className="inline-flex items-center gap-2 rounded bg-red-600 px-4 py-2 text-xs font-semibold text-white disabled:opacity-60">
          {isExporting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
          {isExporting ? 'Generating PDF...' : 'Download PDF'}
        </button>
        <button type="button" onClick={() => window.print()} className="inline-flex items-center gap-2 rounded border px-3 py-2 text-xs font-semibold text-slate-700"><Printer className="h-4 w-4" />Print</button>
      </div>
    </div></header>
    <main className="kotak-pages" aria-label="Kotak Mahindra Bank statement">
      {Array.from({ length: PAGE_COUNT }, (_, i) => {
        const pageNumber = i + 1;
        return <section className="kotak-page" aria-label={`Statement page ${pageNumber} of ${PAGE_COUNT}`} key={pageNumber}>
          <img className="kotak-vectors" src={`${ASSET_ROOT}/page-${String(pageNumber).padStart(2, '0')}.svg`} alt="" />
          <Header pageNumber={pageNumber} />
          {pageNumber <= 10 && <TransactionPage pageNumber={pageNumber} />}
          {pageNumber === 11 && <SummaryPage />}
          {pageNumber === 12 && <InformationPage />}
          {pageNumber === 13 && <Narrations part={2} />}
          <Footer pageNumber={pageNumber} />
        </section>;
      })}
    </main>
  </div>;
}
