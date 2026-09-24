import { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, Loader2, Printer } from 'lucide-react';
import { toast } from 'sonner';
import { defaultTGBAccountDetails as account, tgbTransactions, type TGBTransaction } from '../data/tgbData';
import { tgbPageLayouts } from '../data/tgbLayout';

const pageCount = tgbPageLayouts.length;
const pages = (() => {
  let start = 0;
  return tgbPageLayouts.map((layout) => {
    const transactions = tgbTransactions.slice(start, start + layout.rowHeights.length);
    start += layout.rowHeights.length;
    return { ...layout, transactions };
  });
})();

function cents(value: string) {
  const numeric = value.replace(/[,\s]|Cr/g, '').replace(/^-/, '');
  return numeric && numeric !== '-' ? Math.round(Number(numeric) * 100) : 0;
}

const summary = tgbTransactions.reduce((result, row) => {
  if (cents(row.debit)) result.debitCount++;
  if (cents(row.credit)) result.creditCount++;
  result.debits += cents(row.debit);
  result.credits += cents(row.credit);
  return result;
}, { debitCount: 0, creditCount: 0, debits: 0, credits: 0 });

function Text({ x, y, children, bold = false, size = 10.67, mono = false }: {
  x: number; y: number; children: ReactNode; bold?: boolean; size?: number; mono?: boolean;
}) {
  return <span className="tgb-text" style={{
    transform: `translate(${x}px, ${y}px)`,
    fontSize: size,
    fontWeight: bold ? 700 : 400,
    fontFamily: mono ? '"Courier New", Courier, monospace' : 'Arial, Helvetica, sans-serif',
  }}>{children}</span>;
}

function Header({ pageNumber }: { pageNumber: number }) {
  const owner = `${account.accountName} PROP. ${account.proprietor}`;
  if (pageNumber !== 1) return <>
    <Text x={46.7} y={48.3} bold>{owner}</Text>
    <Text x={46.7} y={61.7} bold>Account No. :</Text>
    <Text x={120} y={61.7}>{account.accountNumber}</Text>
    <Text x={46.7} y={75} bold>Statement of Account From : :</Text>
    <Text x={226.7} y={75}>{account.periodFrom} To : {account.periodTo}</Text>
  </>;
  return <>
    <Text x={46.7} y={61.7} bold>{owner}</Text>
    {account.addressLines.map((line, i) => <Text key={i} x={46.7} y={75 + i * 13.33}>{line}</Text>)}
    <Text x={46.7} y={115} bold>CIF No. :</Text><Text x={93.3} y={115}>{account.cifNo}</Text>
    <Text x={46.7} y={128.3} bold>Email :</Text><Text x={93.3} y={128.3}>{account.email}</Text>
    <Text x={46.7} y={141.7} bold>Account No. :</Text><Text x={120} y={141.7}>{account.accountNumber}</Text>
    <Text x={46.7} y={155} bold>Second Holder Name :</Text><Text x={186.7} y={155}>{account.secondHolderName}</Text>
    <Text x={46.7} y={168.3} bold>Product:</Text><Text x={93.3} y={168.3}>{account.product}</Text>
    <Text x={46.7} y={181.7} bold>Cleared Balance :</Text><Text x={198.4} y={181.7}>{account.clearedBalance}</Text>
    <Text x={46.7} y={195} bold>Uncleared Amount :</Text><Text x={200} y={195}>{account.unclearedAmount}</Text>
    <Text x={46.7} y={208.3} bold>IFSC code :</Text><Text x={133.3} y={208.3}>{account.ifscCode}</Text>
    <Text x={46.7} y={221.7} bold>Statement of Account From : :</Text>
    <Text x={226.7} y={221.7}>{account.periodFrom} To : {account.periodTo}</Text>
    <Text x={533.3} y={61.7}>TELANGANA GRAMEENA BANK</Text>
    <Text x={533.3} y={75} bold>Your Branch :</Text><Text x={600} y={75}>{account.branchName}</Text>
    {account.branchAddress.map((line, i) => <Text key={i} x={533.3} y={88.3 + i * 13.33}>{line}</Text>)}
    <Text x={533.3} y={128.3} bold>Branch Code :</Text><Text x={626.7} y={128.3}>{account.branchCode}</Text>
    <Text x={533.3} y={141.7} bold>Date :</Text><Text x={600} y={141.7}>{account.statementDate}</Text>
    <Text x={533.3} y={155} bold>Time :</Text><Text x={600} y={155}>{account.statementTime}</Text>
    <Text x={533.3} y={168.3} bold>Limit :</Text><Text x={600} y={168.3}>{account.limit}</Text>
    <Text x={533.3} y={181.7} bold>Int. Rate :</Text><Text x={600} y={181.7}>{account.interestRate}</Text>
    <Text x={533.3} y={195} bold>Drawing Power :</Text><Text x={626.7} y={195}>{account.drawingPower}</Text>
    <Text x={533.3} y={208.3} bold>MICR Code :</Text><Text x={613.3} y={208.3}>{account.micrCode}</Text>
    <Text x={533.3} y={221.7} bold>CKYC Number :</Text><Text x={626.7} y={221.7}>{account.ckycNumber}</Text>
  </>;
}

function Table({ transactions, rowHeights, top }: {
  transactions: TGBTransaction[]; rowHeights: number[]; top: number;
}) {
  return <div className="tgb-table" style={{ top }}>
    <div className="tgb-row tgb-heading">
      <div>Post Date</div><div>Value Date</div><div>Narration</div>
      <div>Cheque<br />Details</div><div>Debit</div><div>Credit</div><div>Balance</div>
    </div>
    {transactions.map((row, i) => <div className="tgb-row tgb-transaction" style={{ height: rowHeights[i] }} key={row.id}>
      <div>{row.date}</div><div>{row.valueDate}</div>
      <div className="tgb-narration">{row.description}</div>
      <div>{row.chequeDetails}</div>
      <div>{row.debit === '-' ? '' : row.debit.replace(/^-/, '')}</div>
      <div>{row.credit === '-' ? '' : row.credit}</div>
      <div>{row.balance}</div>
    </div>)}
  </div>;
}

function FinalSummary() {
  return <div className="tgb-summary">
    <div>Open Bal</div><div>Dr count<br />{summary.debitCount}</div>
    <div>Cr count<br />{summary.creditCount}</div>
    <div>Debits<br />{(summary.debits / 100).toFixed(2)}</div>
    <div>Credits<br />{(summary.credits / 100).toFixed(2)}</div>
    <div>Clo Bal<br />{tgbTransactions[tgbTransactions.length - 1]?.balance}</div>
  </div>;
}

export default function TGBStatementGenerator() {
  const [isExporting, setIsExporting] = useState(false);
  const downloadPdf = async () => {
    try {
      setIsExporting(true);
      const response = await fetch('/api/export-pdf?path=/tgb&filename=Telangana_Grameena_Bank_Statement.pdf');
      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error || `Export failed with status ${response.status}`);
      }
      const url = URL.createObjectURL(await response.blob());
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Telangana_Grameena_Bank_Statement.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      toast.success('TGB statement PDF downloaded.');
    } catch (error) {
      toast.error(`Failed to download PDF: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsExporting(false);
    }
  };

  return <div className="tgb-viewer">
    <style>{`
      @page { size: 816px 1056px; margin: 0; }
      .tgb-viewer { min-height: 100vh; background: #e8e8e8; font-family: Arial, Helvetica, sans-serif; }
      .tgb-toolbar { position: sticky; top: 0; z-index: 10; background: white; border-bottom: 1px solid #ddd; }
      .tgb-toolbar-inner { max-width: 1200px; margin: auto; padding: 12px 16px; display: flex; justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap; }
      .tgb-toolbar-title, .tgb-toolbar-actions { display: flex; align-items: center; gap: 12px; }
      .tgb-toolbar button { cursor: pointer; }
      .tgb-pages { padding: 8px 0; }
      .tgb-page { width: 816px; height: 1056px; position: relative; box-sizing: border-box; overflow: hidden; background: white; margin: 8px auto; box-shadow: 0 1px 4px #0005; color: #000; }
      .tgb-text { position: absolute; left: 0; top: 0; display: inline-block; line-height: 1; white-space: pre; transform-origin: 0 0; }
      .tgb-logo { position: absolute; left: 26.67px; top: 2.67px; width: 140px; height: 53.33px; }
      .tgb-table { position: absolute; left: 46.7px; width: 722.6px; border-top: 1.33px solid #000; border-left: 1.33px solid #000; box-sizing: border-box; }
      .tgb-row { display: grid; grid-template-columns: 86.7px 86.7px 187.9px 79.5px 86.7px 86.7px 108.4px; width: 722.6px; border-bottom: 1.33px solid #000; box-sizing: border-box; }
      .tgb-row > div { border-right: 1.33px solid #000; box-sizing: border-box; overflow: hidden; text-align: center; }
      .tgb-heading { height: 36.9px; font-size: 12px; font-weight: 700; line-height: 11.1px; }
      .tgb-heading > div { padding-top: 7px; }
      .tgb-transaction { font-size: 9.33px; line-height: 8.63px; }
      .tgb-transaction > div { padding-top: 6px; white-space: pre; }
      .tgb-transaction .tgb-narration { text-align: left; padding-left: 6.67px; }
      .tgb-summary { position: absolute; left: 46.7px; top: 980px; width: 722.6px; display: grid; grid-template-columns: repeat(5, 126.6px) 89.6px; font-size: 10.67px; line-height: 13.33px; }
      @media (max-width: 832px) { .tgb-pages { overflow-x: auto; } .tgb-page { margin-left: 8px; margin-right: 8px; } }
      @media print { html, body { margin: 0 !important; padding: 0 !important; background: white !important; } .tgb-viewer { min-height: 0; background: white; } .tgb-toolbar { display: none !important; } .tgb-pages { padding: 0; overflow: visible; } .tgb-page { margin: 0; box-shadow: none; break-after: page; } .tgb-page:last-child { break-after: auto; } }
    `}</style>
    <header className="tgb-toolbar"><div className="tgb-toolbar-inner">
      <div className="tgb-toolbar-title">
        <Link to="/" className="inline-flex items-center gap-1.5 rounded border px-3 py-2 text-xs font-semibold text-slate-700"><ArrowLeft className="h-4 w-4" />Dashboard</Link>
        <strong className="text-sm text-slate-800">Telangana Grameena Bank Statement</strong>
      </div>
      <div className="tgb-toolbar-actions">
        <span className="text-xs text-slate-600">{tgbTransactions.length} transactions · {pageCount} pages</span>
        <button type="button" onClick={downloadPdf} disabled={isExporting} className="inline-flex items-center gap-2 rounded bg-orange-700 px-4 py-2 text-xs font-semibold text-white disabled:opacity-60">
          {isExporting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
          {isExporting ? 'Generating PDF...' : 'Download PDF'}
        </button>
        <button type="button" onClick={() => window.print()} className="inline-flex items-center gap-2 rounded border px-3 py-2 text-xs font-semibold text-slate-700"><Printer className="h-4 w-4" />Print</button>
      </div>
    </div></header>
    <main className="tgb-pages" aria-label="Telangana Grameena Bank statement">
      {pages.map((page, i) => <section className="tgb-page" aria-label={`Statement page ${i + 1} of ${pageCount}`} key={i}>
        <img className="tgb-logo" src="/tgb-logo.png" alt="Telangana Grameena Bank" />
        <Header pageNumber={i + 1} />
        <Text x={680} y={48.45} bold size={12} mono>Page {i + 1} of {pageCount}</Text>
        <Table transactions={page.transactions} rowHeights={page.rowHeights} top={page.tableTop} />
        {i === pageCount - 1 && <FinalSummary />}
        <Text x={266.7} y={1021.7}>This is a computer-generated document. No signature is required.</Text>
        <Text x={680} y={1021.79} bold size={12} mono>Page {i + 1} of {pageCount}</Text>
      </section>)}
    </main>
  </div>;
}
