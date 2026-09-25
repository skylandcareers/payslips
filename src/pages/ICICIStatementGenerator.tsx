import React, { useState, useMemo, useRef, useEffect, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { Download, ArrowLeft, Printer, Loader2, Upload, Trash2, RotateCcw, Building2, Search } from 'lucide-react';
import { toast } from 'sonner';
import {
  ICICITransaction,
  ICICIAccountDetails,
  defaultICICIAccountDetails,
  defaultICICITransactions,
  iciciLegends,
} from '../data/iciciData';
import { paginateByHeight } from '../lib/paginateByHeight';

// Page geometry in CSS px (A4 at 96 DPI), taken from public/icici/IciciBank.pdf
const PAGE_WIDTH = 793.33;
const PAGE_HEIGHT = 1122.67;
const MARGIN_TOP = 48;
const MARGIN_BOTTOM = 48;
const TABLE_LEFT = 48;
const TABLE_WIDTH = 697.33;
const PAGE1_TABLE_TOP = 443;

// Source PDF uses (non-embedded) Helvetica; Nimbus Sans is the metric-compatible Helvetica clone viewers substitute.
// Vertical metrics are overridden to Liberation Sans/Arial values so calibrated positions stay unchanged.
const FONT_FAMILY = "'ICICI Helvetica', Helvetica, Arial, sans-serif";
const FONT_FACES = [400, 700].map(weight => `
  @font-face {
    font-family: 'ICICI Helvetica';
    src: url('/icici/fonts/NimbusSans-${weight === 700 ? 'Bold' : 'Regular'}.woff') format('woff');
    font-weight: ${weight};
    font-style: normal;
    font-display: block;
    ascent-override: 90.5%;
    descent-override: 21.2%;
    line-gap-override: 3.3%;
  }`).join('');

const COLUMN_WIDTHS = [36.67, 73.5, 73.33, 110.17, 73.33, 110.17, 73.33, 73.5, 73.33];

const HEADER_LABELS: [string, string?][] = [
  ['Sr', 'No'],
  ['Tran', 'ID'],
  ['Value', 'Date'],
  ['Transaction', 'Date'],
  ['Cheque', 'no/\u00a0 RefNo'], // source has two spaces here
  ['Transaction', 'Remarks'],
  ['Withdrawl', '(Dr)'],
  ['Deposit', '(Cr)'],
  ['Balance'],
];

// Source header labels are top-aligned: first baseline 16px below the header rule, 13.33px line pitch
const headerCellStyle: React.CSSProperties = {
  border: '0.67px solid #000', padding: '4.4px 2px 0', fontSize: '13.33px', fontWeight: 700,
  textAlign: 'center', verticalAlign: 'top', lineHeight: '13.33px',
};

// Source PDF cells: 9pt (12px) Helvetica, 12px line pitch, top-aligned with the first baseline ~14.8px below the row rule
const cellStyle: React.CSSProperties = {
  border: '0.67px solid #000', padding: '4.1px 1.9px 0.25px', fontSize: '12px',
  textAlign: 'center', verticalAlign: 'top', lineHeight: '12px',
};

const wrapCellStyle: React.CSSProperties = { ...cellStyle, wordBreak: 'break-word', overflowWrap: 'break-word' };
const remarksCellStyle: React.CSSProperties = { ...wrapCellStyle, whiteSpace: 'pre-line' };
// Source wraps dd-Mon-yyyy value dates wider than ~68px (e.g. 04-Sep-2025) but not narrower ones (e.g. 23-Jan-2026);
// with the Helvetica-metric font that needs 2.0-2.3px side padding, while remarks segments need <= 2.0px to stay unbroken
const valueDateCellStyle: React.CSSProperties = { ...wrapCellStyle, paddingLeft: '2.15px', paddingRight: '2.15px' };

const StatementTable = React.forwardRef<HTMLTableElement, { rows: ICICITransaction[]; showHeader?: boolean }>(
  ({ rows, showHeader = false }, ref) => (
    <table ref={ref} style={{ width: `${TABLE_WIDTH}px`, borderCollapse: 'collapse', tableLayout: 'fixed', border: '0.67px solid #000' }}>
      <colgroup>
        {COLUMN_WIDTHS.map((w, i) => <col key={i} style={{ width: `${w}px` }} />)}
      </colgroup>
      {showHeader && (
        <thead>
          <tr style={{ height: '32px', backgroundColor: '#fff' }}>
            {HEADER_LABELS.map(([a, b], i) => (
              <th key={i} style={headerCellStyle}>
                {b ? <><div>{a}</div><div>{b}</div></> : a}
              </th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {rows.map((t, idx) => (
          <tr key={idx}>
            <td style={cellStyle}>{t.srNo}</td>
            <td style={cellStyle}>{t.tranId}</td>
            <td style={valueDateCellStyle}>{t.valueDate}</td>
            <td style={cellStyle}>{t.txnDate}</td>
            <td style={wrapCellStyle}>{t.chqRef || ''}</td>
            <td style={remarksCellStyle}>{t.remarks}</td>
            <td style={cellStyle}>{t.withdrawal}</td>
            <td style={cellStyle}>{t.deposit}</td>
            <td style={cellStyle}>{t.balance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
);
StatementTable.displayName = 'StatementTable';

export default function ICICIStatementGenerator() {
  const [activeTab, setActiveTab] = useState<'preview' | 'edit'>('preview');
  const [isExporting, setIsExporting] = useState(false);
  const [account, setAccount] = useState<ICICIAccountDetails>(defaultICICIAccountDetails);
  const [transactions, setTransactions] = useState<ICICITransaction[]>(defaultICICITransactions);
  const [searchTerm, setSearchTerm] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAccountChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = async () => {
    try {
      setIsExporting(true);
      toast.info('Generating exact statement PDF via Puppeteer...');

      const response = await fetch('/api/export-pdf?path=/icici&filename=ICICI_Bank_Statement.pdf');
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Export failed with status ${response.status}`);
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'ICICI_Bank_Statement.pdf';
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(downloadUrl);
      document.body.removeChild(link);

      toast.success('ICICI Bank Statement downloaded successfully!');
    } catch (err: any) {
      console.error('[PDF Download Error]:', err);
      toast.error('Failed to download PDF: ' + (err.message || 'Unknown error'));
    } finally {
      setIsExporting(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        const rows = text.split('\n').filter(row => row.trim().length > 0);
        
        let startIndex = 0;
        if (rows[0].toLowerCase().includes('date') || rows[0].toLowerCase().includes('balance') || rows[0].toLowerCase().includes('tran')) {
          startIndex = 1;
        }

        const newTransactions: ICICITransaction[] = [];
        
        for (let i = startIndex; i < rows.length; i++) {
          const cols = rows[i].match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || rows[i].split(',');
          
          if (cols.length >= 4) {
            newTransactions.push({
              srNo: (i).toString(),
              tranId: cols[1]?.replace(/"/g, '').trim() || `S${1000000 + i}`,
              valueDate: cols[2]?.replace(/"/g, '').trim() || cols[0]?.replace(/"/g, '').trim() || '',
              txnDate: cols[0]?.replace(/"/g, '').trim() || '',
              chqRef: cols[3]?.replace(/"/g, '').trim() || '',
              remarks: cols[4]?.replace(/"/g, '').trim() || '',
              withdrawal: cols[5]?.replace(/"/g, '').trim() || 'NA',
              deposit: cols[6]?.replace(/"/g, '').trim() || 'NA',
              balance: cols[7]?.replace(/"/g, '').trim() || '',
              page: Math.floor((i - startIndex) / 21) + 1
            });
          }
        }
        
        setTransactions(newTransactions);
        toast.success(`Successfully loaded ${newTransactions.length} transactions from CSV!`);
      } catch (err) {
        toast.error('Failed to parse CSV file. Please ensure proper CSV formatting.');
      }
    };
    reader.readAsText(file);
    if (fileInputRef.current) { fileInputRef.current.value = ''; }
  };

  const handleResetData = () => {
    if (window.confirm('Reset all transactions and account details to default official statement data?')) {
      setAccount(defaultICICIAccountDetails);
      setTransactions(defaultICICITransactions);
      toast.info('Statement data reset to defaults.');
    }
  };

  // Rows wrap to varying heights, so pages are cut by measured height rather than row count.
  // An off-screen copy of the table is measured, then rows are packed up to the bottom margin.
  const measureRef = useRef<HTMLTableElement>(null);
  const [fontsReady, setFontsReady] = useState(false);
  const [measurement, setMeasurement] = useState<{ rowBottoms: number[]; headerHeight: number } | null>(null);

  // window.print() uses document.title as the saved PDF's title and default filename
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'ICICI_Bank_Statement';
    return () => { document.title = previousTitle; };
  }, []);

  useEffect(() => {
    let cancelled = false;
    Promise.all([
      document.fonts.load("12px 'ICICI Helvetica'"),
      document.fonts.load("700 13.33px 'ICICI Helvetica'"),
    ])
      .catch(() => undefined)
      .then(() => document.fonts.ready)
      .then(() => { if (!cancelled) setFontsReady(true); });
    return () => { cancelled = true; };
  }, []);

  useLayoutEffect(() => {
    const table = measureRef.current;
    if (!table) return;
    const rows = Array.from(table.tBodies[0]?.rows ?? []);
    const origin = rows[0]?.getBoundingClientRect().top ?? 0;
    setMeasurement({
      rowBottoms: rows.map(r => r.getBoundingClientRect().bottom - origin),
      headerHeight: table.tHead?.getBoundingClientRect().height ?? 0,
    });
  }, [transactions, fontsReady]);

  const pagesData = useMemo(() => {
    if (!measurement || measurement.rowBottoms.length !== transactions.length) return [];
    const firstCapacity = PAGE_HEIGHT - MARGIN_BOTTOM - PAGE1_TABLE_TOP - measurement.headerHeight;
    const otherCapacity = PAGE_HEIGHT - MARGIN_BOTTOM - MARGIN_TOP;
    return paginateByHeight(measurement.rowBottoms, firstCapacity, otherCapacity).map((indices, p) => ({
      pageNum: p + 1,
      txns: indices.map(i => transactions[i]),
    }));
  }, [measurement, transactions]);

  const isPaginated = fontsReady && pagesData.length > 0;

  const filteredTransactions = useMemo(() => {
    if (!searchTerm.trim()) return transactions;
    const term = searchTerm.toLowerCase();
    return transactions.filter(t => 
      t.srNo.toLowerCase().includes(term) ||
      t.tranId.toLowerCase().includes(term) ||
      t.txnDate.toLowerCase().includes(term) ||
      t.remarks.toLowerCase().includes(term) ||
      t.withdrawal.toLowerCase().includes(term) ||
      t.deposit.toLowerCase().includes(term) ||
      t.balance.toLowerCase().includes(term)
    );
  }, [transactions, searchTerm]);

  return (
    <div
      className="min-h-screen bg-slate-200 text-slate-900 flex flex-col print:bg-white print:text-black"
      data-paginating={isPaginated ? undefined : 'true'}
    >
      {/* Off-screen measuring copy of the statement table; drives height-based pagination */}
      <div
        aria-hidden
        className="no-print"
        style={{ position: 'absolute', left: '-10000px', top: 0, width: `${TABLE_WIDTH}px`, visibility: 'hidden', pointerEvents: 'none', fontFamily: FONT_FAMILY }}
      >
        <StatementTable ref={measureRef} rows={transactions} showHeader />
      </div>

      <style>{`${FONT_FACES}
        @media print {
          @page {
            size: 793.33px 1122.67px;
            margin: 0;
          }
          body {
            margin: 0 !important;
            padding: 0 !important;
            background: #fff !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .no-print {
            display: none !important;
          }
          .page-break {
            page-break-after: always !important;
            break-after: page !important;
          }
          .icici-page {
            margin: 0 !important;
            box-shadow: none !important;
            width: 793.33px !important;
            min-height: 1122.67px !important;
            height: 1122.67px !important;
            max-height: 1122.67px !important;
            overflow: hidden !important;
            padding: 0 !important;
            position: relative !important;
          }
          .icici-page:last-child {
            page-break-after: auto !important;
            break-after: auto !important;
          }
        }
      `}</style>

      {/* Control Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm print:hidden">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="p-2 hover:bg-slate-100 rounded-lg text-slate-600 transition">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-orange-700 flex items-center justify-center text-white shadow-sm font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-sm font-bold text-slate-900 tracking-tight">ICICI Bank Statement Generator</h1>
                <p className="text-[11px] text-slate-500 font-medium">Account: {account.accountNumber} • CAA • {pagesData.length + 1} Pages</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-xs font-semibold">
              <button
                onClick={() => setActiveTab('preview')}
                className={`px-3 py-1.5 rounded-md transition ${activeTab === 'preview' ? 'bg-white text-orange-900 shadow-sm font-bold' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Statement View ({pagesData.length + 1} Pgs)
              </button>
              <button
                onClick={() => setActiveTab('edit')}
                className={`px-3 py-1.5 rounded-md transition ${activeTab === 'edit' ? 'bg-white text-orange-900 shadow-sm font-bold' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Data Editor
              </button>
            </div>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-xs font-semibold transition shadow-sm"
            >
              <Printer className="w-4 h-4" />
              <span>Print</span>
            </button>

            <button
              onClick={handleDownloadPdf}
              disabled={isExporting}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-orange-700 hover:bg-orange-800 text-white rounded-lg text-xs font-semibold transition shadow-sm disabled:opacity-50"
            >
              {isExporting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
              <span>PDF Export</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 pt-16 print:pt-0">
        {activeTab === 'edit' ? (
          /* Editor Pane */
          <div className="container mx-auto px-4 py-8 max-w-6xl">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-6">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <h2 className="text-base font-bold text-slate-800">Account Particulars</h2>
                <button
                  onClick={handleResetData}
                  className="flex items-center gap-1 text-xs text-rose-600 hover:text-rose-700 font-semibold"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Reset Defaults
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
                <div>
                  <label className="block text-slate-600 font-medium mb-1">Customer Name</label>
                  <input
                    type="text"
                    name="customerName"
                    value={account.customerName}
                    onChange={handleAccountChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-900 font-semibold focus:outline-none focus:border-orange-600"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-medium mb-1">Account Number</label>
                  <input
                    type="text"
                    name="accountNumber"
                    value={account.accountNumber}
                    onChange={handleAccountChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-900 font-semibold focus:outline-none focus:border-orange-600"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-medium mb-1">A/C Type</label>
                  <input
                    type="text"
                    name="accountType"
                    value={account.accountType}
                    onChange={handleAccountChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-orange-600"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-medium mb-1">Cust ID</label>
                  <input
                    type="text"
                    name="custId"
                    value={account.custId}
                    onChange={handleAccountChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-orange-600"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-medium mb-1">IFSC Code</label>
                  <input
                    type="text"
                    name="ifscCode"
                    value={account.ifscCode}
                    onChange={handleAccountChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-orange-600"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-medium mb-1">Transaction Period</label>
                  <input
                    type="text"
                    name="transactionPeriod"
                    value={account.transactionPeriod}
                    onChange={handleAccountChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-orange-600"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-medium mb-1">Download / Request Date</label>
                  <input
                    type="text"
                    name="downloadDate"
                    value={account.downloadDate}
                    onChange={handleAccountChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-orange-600"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-medium mb-1">Transaction Type</label>
                  <input
                    type="text"
                    name="transactionType"
                    value={account.transactionType}
                    onChange={handleAccountChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-orange-600"
                  />
                </div>
              </div>
            </div>

            {/* Transactions Editor */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-base font-bold text-slate-800">Transaction Rows ({transactions.length})</h2>
                  <p className="text-xs text-slate-500">Edit, add, search, or upload CSV transaction entries.</p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search transactions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="bg-slate-50 border border-slate-200 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:border-orange-600 w-48"
                    />
                  </div>

                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    accept=".csv,.txt"
                    className="hidden"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition"
                  >
                    <Upload className="w-3.5 h-3.5" /> Upload CSV
                  </button>
                </div>
              </div>

              {/* Transaction Table */}
              <div className="overflow-x-auto max-h-[500px] border border-slate-200 rounded-lg">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 sticky top-0 font-bold">
                    <tr>
                      <th className="p-2 w-12 text-center">#</th>
                      <th className="p-2 w-24">Tran ID</th>
                      <th className="p-2 w-24">Txn Date</th>
                      <th className="p-2 w-24">Value Date</th>
                      <th className="p-2">Transaction Remarks</th>
                      <th className="p-2 w-24 text-right">Withdrawal (Dr)</th>
                      <th className="p-2 w-24 text-right">Deposit (Cr)</th>
                      <th className="p-2 w-28 text-right">Balance</th>
                      <th className="p-2 w-12 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-sans">
                    {filteredTransactions.map((t, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80">
                        <td className="p-2 text-center text-slate-500">{t.srNo}</td>
                        <td className="p-2 font-mono text-[11px]">{t.tranId}</td>
                        <td className="p-2 whitespace-nowrap">{t.txnDate}</td>
                        <td className="p-2 whitespace-nowrap">{t.valueDate}</td>
                        <td className="p-2 text-slate-800 whitespace-pre-line text-[11px]">{t.remarks}</td>
                        <td className="p-2 text-right font-mono text-slate-800">{t.withdrawal}</td>
                        <td className="p-2 text-right font-mono text-slate-800">{t.deposit}</td>
                        <td className="p-2 text-right font-mono font-semibold text-slate-900">{t.balance}</td>
                        <td className="p-2 text-center">
                          <button
                            onClick={() => {
                              const updated = transactions.filter((_, i) => i !== idx);
                              setTransactions(updated);
                            }}
                            className="text-slate-400 hover:text-rose-600 transition"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          /* Live Printable A4 Statement Pages Matching the Exact Original PDF Design */
          <div className="py-8 flex flex-col items-center gap-8 bg-slate-300 print:bg-transparent print:p-0 print:gap-0">
            {pagesData.map(({ pageNum, txns }) => (
              <div
                key={pageNum}
                className="icici-page page-break bg-white text-black shadow-2xl relative print:shadow-none"
                style={{
                  width: '793.33px',
                  minHeight: '1122.67px',
                  height: '1122.67px',
                  boxSizing: 'border-box',
                  position: 'relative',
                  background: '#ffffff',
                  fontFamily: FONT_FAMILY
                }}
              >
                {/* PAGE 1 CONTENT */}
                {pageNum === 1 ? (
                  <div style={{ position: 'relative', width: '793.33px', height: '1122.67px' }}>
                    {/* Official ICICI Logo */}
                    <img
                      src="/icici-bank-logo.png"
                      alt="ICICI Bank"
                      style={{
                        position: 'absolute',
                        left: '48px',
                        top: '48px',
                        width: '136px',
                        height: '32.33px',
                        objectFit: 'contain'
                      }}
                    />

                    {/* Detailed Statement Title */}
                    <div style={{
                      position: 'absolute',
                      left: '48px',
                      top: '92.85px',
                      fontFamily: FONT_FAMILY,
                      fontSize: '16px',
                      fontWeight: 700,
                      color: '#000000'
                    }}>
                      Detailed Statement
                    </div>

                    {/* Left Column Particulars */}
                    <div style={{ position: 'absolute', left: '50.67px', top: '135.51px', fontSize: '16px', color: '#000000' }}>Name:</div>
                    <div style={{ position: 'absolute', left: '209.15px', top: '134.76px', fontSize: '13.33px', color: '#000000' }}>{account.customerName}</div>

                    <div style={{ position: 'absolute', left: '50.67px', top: '172.85px', fontSize: '16px', color: '#000000' }}>Address:</div>
                    <div style={{ position: 'absolute', left: '209.15px', top: '172.09px', fontSize: '13.33px', color: '#000000' }}>{account.address}</div>

                    <div style={{ position: 'absolute', left: '50.67px', top: '199.51px', fontSize: '16px', color: '#000000' }}>A/C No:</div>
                    <div style={{ position: 'absolute', left: '209.15px', top: '198.76px', fontSize: '13.33px', color: '#000000' }}>{account.accountNumber}</div>

                    <div style={{ position: 'absolute', left: '50.67px', top: '220.85px', fontSize: '16px', color: '#000000' }}>Transaction Period:</div>
                    <div style={{ position: 'absolute', left: '209.15px', top: '216.09px', fontSize: '13.33px', color: '#000000' }}>
                      {account.transactionPeriod.includes('To') ? (
                        <>
                          <div>{account.transactionPeriod.split('To')[0]}To</div>
                          <div>{account.transactionPeriod.split('To')[1]?.trim()}</div>
                        </>
                      ) : (
                        account.transactionPeriod
                      )}
                    </div>

                    {/* Right Column Particulars */}
                    <div style={{ position: 'absolute', left: '431.03px', top: '135.51px', fontSize: '16px', color: '#000000' }}>A/C Type:</div>
                    <div style={{ position: 'absolute', left: '589.52px', top: '134.76px', fontSize: '13.33px', color: '#000000' }}>{account.accountType}</div>

                    <div style={{ position: 'absolute', left: '431.03px', top: '172.85px', fontSize: '16px', color: '#000000' }}>Cust ID:</div>
                    <div style={{ position: 'absolute', left: '589.52px', top: '172.09px', fontSize: '13.33px', color: '#000000' }}>{account.custId}</div>

                    <div style={{ position: 'absolute', left: '431.03px', top: '199.51px', fontSize: '16px', color: '#000000' }}>IFSC Code:</div>
                    <div style={{ position: 'absolute', left: '589.52px', top: '198.76px', fontSize: '13.33px', color: '#000000' }}>{account.ifscCode}</div>

                    <div style={{ position: 'absolute', left: '431.03px', top: '220.85px', fontSize: '16px', color: '#000000', lineHeight: 1 }}>
                      <div>Statement</div>
                      <div style={{ marginTop: '3px' }}>Request/Download</div>
                      <div style={{ marginTop: '3px' }}>Date:</div>
                    </div>
                    <div style={{ position: 'absolute', left: '589.52px', top: '220.09px', fontSize: '13.33px', color: '#000000' }}>{account.downloadDate}</div>

                    {/* Advanced Search Header */}
                    <div style={{
                      position: 'absolute',
                      left: '48px',
                      top: '303.51px',
                      fontFamily: FONT_FAMILY,
                      fontSize: '16px',
                      fontWeight: 700,
                      color: '#000000'
                    }}>
                      Advanced Search
                    </div>

                    <div style={{ position: 'absolute', left: '50.67px', top: '346.18px', fontSize: '16px', color: '#000000' }}>Amount from:</div>
                    <div style={{ position: 'absolute', left: '205.63px', top: '345.43px', fontSize: '13.33px', color: '#000000' }}>{account.amountFrom}</div>

                    <div style={{ position: 'absolute', left: '50.67px', top: '367.51px', fontSize: '16px', color: '#000000', lineHeight: 1 }}>
                      <div>Cheque number</div>
                      <div style={{ marginTop: '3px' }}>from:</div>
                    </div>
                    <div style={{ position: 'absolute', left: '205.63px', top: '382.76px', fontSize: '13.33px', color: '#000000' }}>{account.chequeNumberFrom}</div>

                    <div style={{ position: 'absolute', left: '50.67px', top: '404.85px', fontSize: '16px', color: '#000000' }}>Transaction Type:</div>
                    <div style={{ position: 'absolute', left: '205.63px', top: '404.09px', fontSize: '13.33px', color: '#000000' }}>{account.transactionType}</div>

                    {/* Page 1 Table */}
                    <div style={{ position: 'absolute', left: `${TABLE_LEFT}px`, top: `${PAGE1_TABLE_TOP}px`, width: `${TABLE_WIDTH}px` }}>
                      <StatementTable rows={txns} showHeader />
                    </div>
                  </div>
                ) : (
                  /* SUBSEQUENT PAGES: table continues from the top margin */
                  <div style={{ position: 'relative', width: `${PAGE_WIDTH}px`, height: `${PAGE_HEIGHT}px` }}>
                    <div style={{ position: 'absolute', left: `${TABLE_LEFT}px`, top: `${MARGIN_TOP}px`, width: `${TABLE_WIDTH}px` }}>
                      <StatementTable rows={txns} />
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* PAGE 17: LEGENDS PAGE */}
            <div
              className="icici-page page-break bg-white text-black shadow-2xl relative print:shadow-none"
              style={{
                width: '793.33px',
                minHeight: '1122.67px',
                height: '1122.67px',
                boxSizing: 'border-box',
                position: 'relative',
                background: '#ffffff',
                fontFamily: FONT_FAMILY
              }}
            >
              <div style={{ position: 'relative', width: '793.33px', height: '1122.67px' }}>
                <div style={{
                  position: 'absolute',
                  left: '48px',
                  top: '108.51px',
                  fontFamily: FONT_FAMILY,
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#000000'
                }}>
                  Legends Used in Account Statement
                </div>

                {/* 30 Legends List Items positioned exactly */}
                {iciciLegends.map((legend, idx) => (
                  <div
                    key={idx}
                    style={{
                      position: 'absolute',
                      left: '48px',
                      top: `${154.43 + idx * 20}px`,
                      fontFamily: FONT_FAMILY,
                      fontSize: '13.33px',
                      color: '#000000',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {legend}
                  </div>
                ))}

                {/* Footnote note */}
                <div style={{
                  position: 'absolute',
                  left: '48px',
                  top: '802.43px',
                  fontFamily: FONT_FAMILY,
                  fontSize: '13.33px',
                  color: '#000000'
                }}>
                  *You can download maximum of 2000 Transaction.
                </div>

                {/* System Generated Disclaimer */}
                <div style={{
                  position: 'absolute',
                  left: '114.76px',
                  top: '872.51px',
                  fontFamily: FONT_FAMILY,
                  fontSize: '16px',
                  color: '#000000'
                }}>
                  This is a system-generated statement. Hence, it does not require any signature.
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
