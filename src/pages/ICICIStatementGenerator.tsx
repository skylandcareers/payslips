import React, { useState, useMemo, useRef } from 'react';
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

  // Group transactions by page exactly according to the 16 transaction pages
  const pageRowsConfig = [13, 21, 20, 21, 20, 21, 21, 21, 21, 21, 21, 19, 22, 21, 22, 20];

  const pagesData = useMemo(() => {
    const pagesArray: { pageNum: number; txns: ICICITransaction[] }[] = [];
    let startIdx = 0;

    for (let p = 0; p < pageRowsConfig.length; p++) {
      const count = pageRowsConfig[p];
      const slice = transactions.slice(startIdx, startIdx + count);
      if (slice.length > 0) {
        pagesArray.push({ pageNum: p + 1, txns: slice });
      }
      startIdx += count;
    }

    // If more rows were uploaded beyond 325, chunk them in groups of 21
    while (startIdx < transactions.length) {
      const slice = transactions.slice(startIdx, startIdx + 21);
      pagesArray.push({ pageNum: pagesArray.length + 1, txns: slice });
      startIdx += 21;
    }

    return pagesArray;
  }, [transactions]);

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
    <div className="min-h-screen bg-slate-200 text-slate-900 flex flex-col print:bg-white print:text-black">
      <style>{`
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
            padding: 0 !important;
            overflow: hidden !important;
            position: relative !important;
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
                <p className="text-[11px] text-slate-500 font-medium">Account: {account.accountNumber} • CAA • 17 Pages</p>
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
          /* Live Printable A4 Statement Pages Matching the Exact Original PDF/HTML Design */
          <div className="py-8 flex flex-col items-center gap-8 bg-slate-300 print:bg-transparent print:p-0 print:gap-0">
            {pagesData.map(({ pageNum, txns }) => (
              <div
                key={pageNum}
                className="icici-page page-break bg-white text-black shadow-2xl relative print:shadow-none"
                style={{
                  width: '793.33px',
                  height: '1122.67px',
                  minHeight: '1122.67px',
                  boxSizing: 'border-box',
                  position: 'relative',
                  overflow: 'hidden',
                  background: '#ffffff',
                  fontFamily: 'Arial, Helvetica, sans-serif'
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
                      fontFamily: 'Arial, Helvetica, sans-serif',
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
                      fontFamily: 'Arial, Helvetica, sans-serif',
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

                    {/* Page 1 Table (Top: 443px, Left: 48px) */}
                    <div style={{ position: 'absolute', left: '48px', top: '443px', width: '697.33px' }}>
                      <table style={{ width: '697.33px', borderCollapse: 'collapse', tableLayout: 'fixed', border: '0.67px solid #000' }}>
                        <colgroup>
                          <col style={{ width: '36.7px' }} />
                          <col style={{ width: '73.4px' }} />
                          <col style={{ width: '73.4px' }} />
                          <col style={{ width: '110.1px' }} />
                          <col style={{ width: '73.4px' }} />
                          <col style={{ width: '110.1px' }} />
                          <col style={{ width: '73.4px' }} />
                          <col style={{ width: '73.4px' }} />
                          <col style={{ width: '73.43px' }} />
                        </colgroup>
                        <thead>
                          <tr style={{ height: '32px', backgroundColor: '#fff' }}>
                            <th style={{ border: '0.67px solid #000', padding: '1px 2px', fontSize: '13.33px', fontWeight: 700, textAlign: 'center', verticalAlign: 'middle', lineHeight: 1 }}>
                              <div>Sr</div><div>No</div>
                            </th>
                            <th style={{ border: '0.67px solid #000', padding: '1px 2px', fontSize: '13.33px', fontWeight: 700, textAlign: 'center', verticalAlign: 'middle', lineHeight: 1 }}>
                              <div>Tran</div><div>ID</div>
                            </th>
                            <th style={{ border: '0.67px solid #000', padding: '1px 2px', fontSize: '13.33px', fontWeight: 700, textAlign: 'center', verticalAlign: 'middle', lineHeight: 1 }}>
                              <div>Value</div><div>Date</div>
                            </th>
                            <th style={{ border: '0.67px solid #000', padding: '1px 2px', fontSize: '13.33px', fontWeight: 700, textAlign: 'center', verticalAlign: 'middle', lineHeight: 1 }}>
                              <div>Transaction</div><div>Date</div>
                            </th>
                            <th style={{ border: '0.67px solid #000', padding: '1px 2px', fontSize: '13.33px', fontWeight: 700, textAlign: 'center', verticalAlign: 'middle', lineHeight: 1 }}>
                              <div>Cheque</div><div>no/ RefNo</div>
                            </th>
                            <th style={{ border: '0.67px solid #000', padding: '1px 2px', fontSize: '13.33px', fontWeight: 700, textAlign: 'center', verticalAlign: 'middle', lineHeight: 1 }}>
                              <div>Transaction</div><div>Remarks</div>
                            </th>
                            <th style={{ border: '0.67px solid #000', padding: '1px 2px', fontSize: '13.33px', fontWeight: 700, textAlign: 'center', verticalAlign: 'middle', lineHeight: 1 }}>
                              <div>Withdrawl</div><div>(Dr)</div>
                            </th>
                            <th style={{ border: '0.67px solid #000', padding: '1px 2px', fontSize: '13.33px', fontWeight: 700, textAlign: 'center', verticalAlign: 'middle', lineHeight: 1 }}>
                              <div>Deposit</div><div>(Cr)</div>
                            </th>
                            <th style={{ border: '0.67px solid #000', padding: '1px 2px', fontSize: '13.33px', fontWeight: 700, textAlign: 'center', verticalAlign: 'middle', lineHeight: 1 }}>
                              Balance
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {txns.map((t, idx) => (
                            <tr key={idx} style={{ minHeight: '41.33px' }}>
                              <td style={{ border: '0.67px solid #000', padding: '2px 2px', fontSize: '12px', textAlign: 'center', verticalAlign: 'middle', lineHeight: 1.15 }}>{t.srNo}</td>
                              <td style={{ border: '0.67px solid #000', padding: '2px 2px', fontSize: '12px', textAlign: 'center', verticalAlign: 'middle', lineHeight: 1.15 }}>{t.tranId}</td>
                              <td style={{ border: '0.67px solid #000', padding: '2px 2px', fontSize: '12px', textAlign: 'center', verticalAlign: 'middle', wordBreak: 'break-word', lineHeight: 1.15 }}>{t.valueDate}</td>
                              <td style={{ border: '0.67px solid #000', padding: '2px 2px', fontSize: '12px', textAlign: 'center', verticalAlign: 'middle', lineHeight: 1.15 }}>{t.txnDate}</td>
                              <td style={{ border: '0.67px solid #000', padding: '2px 2px', fontSize: '12px', textAlign: 'center', verticalAlign: 'middle', wordBreak: 'break-word', lineHeight: 1.15 }}>{t.chqRef || ''}</td>
                              <td style={{ border: '0.67px solid #000', padding: '2px 2px', fontSize: '12px', textAlign: 'center', verticalAlign: 'middle', wordBreak: 'break-word', overflowWrap: 'break-word', whiteSpace: 'pre-line', lineHeight: 1.15 }}>{t.remarks}</td>
                              <td style={{ border: '0.67px solid #000', padding: '2px 2px', fontSize: '12px', textAlign: 'center', verticalAlign: 'middle', lineHeight: 1.15 }}>{t.withdrawal}</td>
                              <td style={{ border: '0.67px solid #000', padding: '2px 2px', fontSize: '12px', textAlign: 'center', verticalAlign: 'middle', lineHeight: 1.15 }}>{t.deposit}</td>
                              <td style={{ border: '0.67px solid #000', padding: '2px 2px', fontSize: '12px', textAlign: 'center', verticalAlign: 'middle', lineHeight: 1.15 }}>{t.balance}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : (
                  /* SUBSEQUENT PAGES (Pages 2 to 16): Pure table continuing from top: 48px */
                  <div style={{ position: 'relative', width: '793.33px', height: '1122.67px' }}>
                    <div style={{ position: 'absolute', left: '48px', top: '48px', width: '697.33px' }}>
                      <table style={{ width: '697.33px', borderCollapse: 'collapse', tableLayout: 'fixed', border: '0.67px solid #000' }}>
                        <colgroup>
                          <col style={{ width: '36.7px' }} />
                          <col style={{ width: '73.4px' }} />
                          <col style={{ width: '73.4px' }} />
                          <col style={{ width: '110.1px' }} />
                          <col style={{ width: '73.4px' }} />
                          <col style={{ width: '110.1px' }} />
                          <col style={{ width: '73.4px' }} />
                          <col style={{ width: '73.4px' }} />
                          <col style={{ width: '73.43px' }} />
                        </colgroup>
                        <tbody>
                          {txns.map((t, idx) => (
                            <tr key={idx} style={{ minHeight: '41.33px' }}>
                              <td style={{ border: '0.67px solid #000', padding: '2px 2px', fontSize: '12px', textAlign: 'center', verticalAlign: 'middle', lineHeight: 1.15 }}>{t.srNo}</td>
                              <td style={{ border: '0.67px solid #000', padding: '2px 2px', fontSize: '12px', textAlign: 'center', verticalAlign: 'middle', lineHeight: 1.15 }}>{t.tranId}</td>
                              <td style={{ border: '0.67px solid #000', padding: '2px 2px', fontSize: '12px', textAlign: 'center', verticalAlign: 'middle', wordBreak: 'break-word', lineHeight: 1.15 }}>{t.valueDate}</td>
                              <td style={{ border: '0.67px solid #000', padding: '2px 2px', fontSize: '12px', textAlign: 'center', verticalAlign: 'middle', lineHeight: 1.15 }}>{t.txnDate}</td>
                              <td style={{ border: '0.67px solid #000', padding: '2px 2px', fontSize: '12px', textAlign: 'center', verticalAlign: 'middle', wordBreak: 'break-word', lineHeight: 1.15 }}>{t.chqRef || ''}</td>
                              <td style={{ border: '0.67px solid #000', padding: '2px 2px', fontSize: '12px', textAlign: 'center', verticalAlign: 'middle', wordBreak: 'break-word', overflowWrap: 'break-word', whiteSpace: 'pre-line', lineHeight: 1.15 }}>{t.remarks}</td>
                              <td style={{ border: '0.67px solid #000', padding: '2px 2px', fontSize: '12px', textAlign: 'center', verticalAlign: 'middle', lineHeight: 1.15 }}>{t.withdrawal}</td>
                              <td style={{ border: '0.67px solid #000', padding: '2px 2px', fontSize: '12px', textAlign: 'center', verticalAlign: 'middle', lineHeight: 1.15 }}>{t.deposit}</td>
                              <td style={{ border: '0.67px solid #000', padding: '2px 2px', fontSize: '12px', textAlign: 'center', verticalAlign: 'middle', lineHeight: 1.15 }}>{t.balance}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
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
                height: '1122.67px',
                minHeight: '1122.67px',
                boxSizing: 'border-box',
                position: 'relative',
                overflow: 'hidden',
                background: '#ffffff',
                fontFamily: 'Arial, Helvetica, sans-serif'
              }}
            >
              <div style={{ position: 'relative', width: '793.33px', height: '1122.67px' }}>
                <div style={{
                  position: 'absolute',
                  left: '48px',
                  top: '108.51px',
                  fontFamily: 'Arial, Helvetica, sans-serif',
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
                      fontFamily: 'Arial, Helvetica, sans-serif',
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
                  fontFamily: 'Arial, Helvetica, sans-serif',
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
                  fontFamily: 'Arial, Helvetica, sans-serif',
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
