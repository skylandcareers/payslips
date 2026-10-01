import React, { useMemo, useState, useRef, useLayoutEffect, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Download,
  ArrowLeft,
  Printer,
  Loader2,
  RotateCcw,
  Plus,
  Trash2,
  Search,
  Edit3,
  Eye,
} from 'lucide-react';
import { toast } from 'sonner';
import {
  SBI2Transaction,
  SBI2AccountDetails,
  defaultAccountDetails,
  defaultTransactions,
} from '../data/sbi2Data';
import { paginateByHeight } from '../lib/paginateByHeight';

const PAGE_1_MAX = 18;
const MIDDLE_PAGE_MAX = 26;
const LAST_PAGE_MAX = 25;

// Capacities calibrated for exact A4 (793.33px x 1122.67px at 96 DPI)
const PAGE_1_CAPACITY = 576.5; // fits 18 rows of 32px
const OTHER_CAPACITY = 832.5;  // fits 26 rows of 32px
const END_OF_STATEMENT_HEIGHT = 19; // height of End of Statement row

export default function SBI2StatementGenerator() {
  const [activeTab, setActiveTab] = useState<'preview' | 'edit'>('preview');
  const [isExporting, setIsExporting] = useState(false);
  const [accountDetails, setAccountDetails] = useState<SBI2AccountDetails>(defaultAccountDetails);
  const [transactions, setTransactions] = useState<SBI2Transaction[]>(defaultTransactions);
  const [searchTerm, setSearchTerm] = useState('');

  // Off-screen table measurement ref for dynamic height-based pagination
  const measureRef = useRef<HTMLTableElement>(null);
  const [measurement, setMeasurement] = useState<{ rowBottoms: number[] } | null>(null);

  // Set document title for window.print()
  useEffect(() => {
    const prev = document.title;
    document.title = 'SBI_WhatsApp_Statement';
    return () => {
      document.title = prev;
    };
  }, []);

  // Measure exact row bottom boundaries for dynamic content
  useLayoutEffect(() => {
    const table = measureRef.current;
    if (!table) return;
    const rows = Array.from(table.tBodies[0]?.rows ?? []);
    if (rows.length === 0) return;
    const origin = rows[0]?.getBoundingClientRect().top ?? 0;
    setMeasurement({
      rowBottoms: rows.map((r) => r.getBoundingClientRect().bottom - origin),
    });
  }, [transactions]);

  const handleAccountChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'addressLines') {
      setAccountDetails((prev) => ({
        ...prev,
        addressLines: value.split('\n'),
      }));
    } else {
      setAccountDetails((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleReset = () => {
    if (window.confirm('Reset all transactions and account details to official reference statement?')) {
      setAccountDetails(defaultAccountDetails);
      setTransactions(defaultTransactions);
      toast.success('Reset to default SBI WhatsApp statement data.');
    }
  };

  const handleAddTransaction = () => {
    const today = new Date().toLocaleDateString('en-GB');
    const newTx: SBI2Transaction = {
      date: today,
      valueDate: today,
      description: 'UPI/DR/NEW_PAYMENT/MERCHANT',
      debit: '100.00',
      credit: '',
      balance: accountDetails.balanceAsOn,
    };
    setTransactions([newTx, ...transactions]);
    toast.success('New transaction row added at top.');
  };

  const handleDeleteTransaction = (index: number) => {
    setTransactions(transactions.filter((_, i) => i !== index));
    toast.info('Transaction deleted.');
  };

  const handleTxChange = (index: number, field: keyof SBI2Transaction, value: string) => {
    const updated = [...transactions];
    updated[index] = { ...updated[index], [field]: value };
    setTransactions(updated);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = async () => {
    try {
      setIsExporting(true);
      toast.info('Generating accurate statement PDF via Puppeteer...');

      const response = await fetch('/api/export-pdf?path=/sbi2&filename=SBI_WhatsApp_Statement.pdf');
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Export failed with status ${response.status}`);
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'SBI_WhatsApp_Statement.pdf';
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(downloadUrl);
      document.body.removeChild(link);

      toast.success('SBI Statement downloaded successfully!');
    } catch (err: any) {
      console.error('[PDF Download Error]:', err);
      toast.error('Failed to download PDF: ' + (err.message || 'Unknown error'));
    } finally {
      setIsExporting(false);
    }
  };

  // Dynamic Pagination Engine:
  // Combines measured pixel heights (when available) with deterministic chunking fallback.
  // Guarantees zero page spillover on arbitrary dynamic transaction counts and varied line heights.
  const pages = useMemo(() => {
    if (transactions.length === 0) return [];

    // 1. Height-measured dynamic pagination (if measured DOM is available)
    if (measurement && measurement.rowBottoms.length === transactions.length) {
      const rawPages = paginateByHeight(
        measurement.rowBottoms,
        PAGE_1_CAPACITY,
        OTHER_CAPACITY,
        0.5
      );

      // Adjust last page for End of Statement row (19px) if it exceeds capacity
      const adjusted: number[][] = [];
      for (let p = 0; p < rawPages.length; p++) {
        const isLast = p === rawPages.length - 1;
        const indices = rawPages[p];

        if (isLast && indices.length > 0) {
          const pageTop = p === 0 ? 0 : measurement.rowBottoms[rawPages[p - 1].slice(-1)[0]];
          const pageHeight = measurement.rowBottoms[indices.slice(-1)[0]] - pageTop;
          const capacity = p === 0 ? PAGE_1_CAPACITY : OTHER_CAPACITY;

          if (pageHeight + END_OF_STATEMENT_HEIGHT > capacity && indices.length > 1) {
            // Push last row to a separate final page with the End of Statement banner
            adjusted.push(indices.slice(0, -1));
            adjusted.push([indices.slice(-1)[0]]);
          } else {
            adjusted.push(indices);
          }
        } else {
          adjusted.push(indices);
        }
      }

      return adjusted.map((indices, idx) => ({
        pageNum: idx + 1,
        rows: indices.map((i) => transactions[i]),
        isLast: idx === adjusted.length - 1,
      }));
    }

    // 2. Deterministic mathematical chunking fallback (instant before DOM measurement)
    const result: Array<{ pageNum: number; rows: SBI2Transaction[]; isLast: boolean }> = [];
    if (transactions.length <= PAGE_1_MAX) {
      result.push({ pageNum: 1, rows: transactions, isLast: true });
      return result;
    }

    result.push({ pageNum: 1, rows: transactions.slice(0, PAGE_1_MAX), isLast: false });
    let offset = PAGE_1_MAX;
    let pageNum = 2;

    while (offset < transactions.length) {
      const remaining = transactions.length - offset;
      if (remaining <= LAST_PAGE_MAX) {
        result.push({ pageNum, rows: transactions.slice(offset), isLast: true });
        break;
      } else if (remaining === MIDDLE_PAGE_MAX) {
        result.push({
          pageNum,
          rows: transactions.slice(offset, offset + LAST_PAGE_MAX),
          isLast: false,
        });
        offset += LAST_PAGE_MAX;
        pageNum++;
      } else {
        result.push({
          pageNum,
          rows: transactions.slice(offset, offset + MIDDLE_PAGE_MAX),
          isLast: false,
        });
        offset += MIDDLE_PAGE_MAX;
        pageNum++;
      }
    }
    return result;
  }, [transactions, measurement]);

  const filteredTransactions = useMemo(() => {
    if (!searchTerm.trim()) return transactions;
    const q = searchTerm.toLowerCase();
    return transactions.filter(
      (t) =>
        t.date.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.debit.toLowerCase().includes(q) ||
        t.credit.toLowerCase().includes(q) ||
        t.balance.toLowerCase().includes(q)
    );
  }, [transactions, searchTerm]);

  const renderTable = (rows: SBI2Transaction[], isLast: boolean) => (
    <table className="sbi2-table">
      <colgroup>
        <col style={{ width: '12.5%' }} />
        <col style={{ width: '12.5%' }} />
        <col style={{ width: '37.5%' }} />
        <col style={{ width: '12.5%' }} />
        <col style={{ width: '12.5%' }} />
        <col style={{ width: '12.5%' }} />
      </colgroup>
      <thead>
        <tr>
          <th>Txn Date</th>
          <th>Value Date</th>
          <th>Description</th>
          <th>Debit</th>
          <th>Credit</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((tx, idx) => (
          <tr key={idx}>
            <td className="data-cell">{tx.date}</td>
            <td className="data-cell">{tx.valueDate}</td>
            <td className="data-cell desc-cell">{tx.description}</td>
            <td className="data-cell">{tx.debit || ''}</td>
            <td className="data-cell">{tx.credit || ''}</td>
            <td className="data-cell">{tx.balance || ''}</td>
          </tr>
        ))}
        {isLast && (
          <tr>
            <td colSpan={6} className="end-of-statement">
              ********* End of Statement **********
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );

  return (
    <div
      className="sbi2-root min-h-screen bg-[#e8e8e8] print:bg-white print:min-h-0 text-black antialiased flex flex-col items-center"
      data-paginating={measurement ? undefined : 'true'}
    >
      {/* Off-screen table copy strictly used by useLayoutEffect to measure dynamic pixel heights */}
      <div
        aria-hidden
        className="print:hidden"
        style={{
          position: 'absolute',
          left: '-10000px',
          top: 0,
          width: '697.33px',
          visibility: 'hidden',
          pointerEvents: 'none',
          fontFamily: '"Times New Roman", Times, serif',
        }}
      >
        <table ref={measureRef} className="sbi2-table" style={{ width: '697.33px' }}>
          <colgroup>
            <col style={{ width: '12.5%' }} />
            <col style={{ width: '12.5%' }} />
            <col style={{ width: '37.5%' }} />
            <col style={{ width: '12.5%' }} />
            <col style={{ width: '12.5%' }} />
            <col style={{ width: '12.5%' }} />
          </colgroup>
          <thead>
            <tr>
              <th>Txn Date</th>
              <th>Value Date</th>
              <th>Description</th>
              <th>Debit</th>
              <th>Credit</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, idx) => (
              <tr key={idx}>
                <td className="data-cell">{tx.date}</td>
                <td className="data-cell">{tx.valueDate}</td>
                <td className="data-cell desc-cell">{tx.description}</td>
                <td className="data-cell">{tx.debit || ''}</td>
                <td className="data-cell">{tx.credit || ''}</td>
                <td className="data-cell">{tx.balance || ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Scoped CSS Isolation */}
      <style>{`
        .sbi2-scope,
        .sbi2-statement-page,
        .sbi2-statement-page * {
          font-family: "Times New Roman", Times, serif !important;
          box-sizing: border-box !important;
          color: #000000 !important;
        }

        .sbi2-statement-page {
          width: 793.33px;
          height: 1122.67px;
          min-height: 1122.67px;
          max-height: 1122.67px;
          background: #ffffff;
          margin: 20px auto;
          padding: 48px;
          box-shadow: 0 1px 14px rgba(0, 0, 0, 0.12);
          position: relative;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .sbi2-banner {
          width: 654.67px;
          height: 73.33px;
          display: block;
          align-self: flex-start;
          margin: 0 0 10px 0;
          object-fit: contain;
          object-position: left center;
        }

        /* Top Branch Row: 10.67px bold */
        .sbi2-branch-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 10.67px;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 12px;
        }

        /* Customer Address Block & Important Box: 10.67px regular */
        .sbi2-address-box-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 14px;
        }

        .sbi2-address-block {
          font-size: 10.67px;
          font-weight: 400;
          line-height: 1.15;
          max-width: 380px;
        }

        .sbi2-important-box {
          width: 232.4px;
          border: 0.67px solid #000000;
          padding: 4px 8px;
          text-align: center;
          font-size: 10.67px;
          font-weight: 400;
          line-height: 1.15;
          flex-shrink: 0;
        }

        .sbi2-important-title {
          font-weight: 400;
          font-size: 10.67px;
          margin-bottom: 2px;
          text-align: center;
        }

        /* Statement Subtitle: 13.33px bold */
        .sbi2-statement-subtitle {
          font-size: 13.33px;
          font-weight: 700;
          margin: 14px 0 10px 0;
          line-height: 1.2;
        }

        /* Account Information Block: 13.33px regular */
        .sbi2-account-info-block {
          font-size: 13.33px;
          font-weight: 400;
          line-height: 1.4;
          margin-bottom: 12px;
        }

        .sbi2-account-info-row {
          margin-bottom: 1px;
        }

        /* Ledger Table */
        .sbi2-table {
          width: 697.33px !important;
          border-collapse: collapse !important;
          border-spacing: 0 !important;
          table-layout: fixed !important;
          border: 0.67px solid #000000;
        }

        /* Table Headers: 13.33px bold, centered */
        .sbi2-table th {
          background-color: #c0c0c0;
          font-size: 13.33px;
          font-weight: 700;
          text-align: center;
          vertical-align: middle;
          height: 18.67px;
          padding: 1px 3px;
          border: 0.67px solid #000000;
          overflow: hidden;
          white-space: nowrap;
        }

        /* Table Cells: 13.33px regular, left-aligned, reduced padding */
        .sbi2-table td.data-cell {
          font-size: 13.33px;
          font-weight: 400;
          line-height: 13.33px;
          text-align: left;
          vertical-align: top;
          height: 32px;
          padding: 2px 3px 1px 3px;
          border: 0.67px solid #000000;
          overflow-wrap: break-word;
          word-break: break-word;
        }

        .sbi2-table td.desc-cell {
          white-space: pre-wrap;
        }

        /* End of Statement: 13.33px bold, centered, gray background */
        .sbi2-table td.end-of-statement {
          background-color: #c0c0c0;
          font-size: 13.33px;
          font-weight: 700;
          text-align: center;
          vertical-align: middle;
          height: 18.67px;
          padding: 1px 3px;
          border: 0.67px solid #000000;
        }

        /* Footer Disclaimer Note: 8px regular, centered */
        .sbi2-footer-note {
          margin-top: auto;
          padding-top: 8px;
          text-align: center;
          font-size: 8px;
          font-weight: 400;
          line-height: 1;
          color: #000000;
        }

        @media print {
          @page {
            size: 793.33px 1122.67px;
            margin: 0 !important;
          }
          html, body, .min-h-screen, .sbi2-root {
            margin: 0 !important;
            padding: 0 !important;
            background: #ffffff !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .print\\:hidden,
          header.nav-header {
            display: none !important;
          }
          .sbi2-statement-page {
            margin: 0 !important;
            box-shadow: none !important;
            height: 1122.67px !important;
            max-height: 1122.67px !important;
            overflow: hidden !important;
            page-break-after: always !important;
            break-after: page !important;
          }
          .sbi2-statement-page:last-child {
            page-break-after: auto !important;
            break-after: auto !important;
          }
        }
      `}</style>

      {/* Non-printable Interactive Navigation Toolbar */}
      <header className="nav-header sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm w-full print:hidden">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Dashboard
            </Link>
            <div className="h-4 w-px bg-slate-300" />
            <div className="flex items-center gap-2">
              <img src="/sbi_logo.jpg" alt="SBI Logo" className="h-6 w-auto object-contain" />
              <span className="font-bold text-slate-800 text-sm md:text-base hidden sm:inline">
                SBI Statement (Format 2 - WhatsApp Banking)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <div className="flex bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setActiveTab('preview')}
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-md transition cursor-pointer ${
                  activeTab === 'preview'
                    ? 'bg-white text-blue-900 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Statement ({pages.length} Pgs)</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('edit')}
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-md transition cursor-pointer ${
                  activeTab === 'edit'
                    ? 'bg-white text-blue-900 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Data Editor</span>
              </button>
            </div>

            <button
              type="button"
              onClick={handleReset}
              title="Reset to default reference transactions"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 px-3 py-2 rounded-lg transition-colors shadow-xs cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 text-slate-500" />
              <span className="hidden lg:inline">Reset</span>
            </button>

            <button
              type="button"
              onClick={handleDownloadPdf}
              disabled={isExporting}
              className="inline-flex items-center gap-2 bg-[#1a1f71] hover:bg-[#12153f] text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm transition-all hover:shadow disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
            >
              {isExporting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Generating PDF...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  Download PDF (Accurate)
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 px-3 py-2 rounded-lg transition-colors shadow-xs cursor-pointer"
            >
              <Printer className="w-4 h-4 text-slate-500" />
              Print Dialog
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      {activeTab === 'edit' ? (
        /* Data Editor View */
        <div className="w-full max-w-6xl mx-auto px-4 py-8 print:hidden">
          {/* Account Details Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-6">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
              <h2 className="text-base font-bold text-slate-800">Account Particulars</h2>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1 text-xs text-rose-600 hover:text-rose-700 font-semibold px-2 py-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset Defaults
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Customer Name</label>
                <input
                  type="text"
                  name="customerName"
                  value={accountDetails.customerName}
                  onChange={handleAccountChange}
                  className="w-full text-xs border border-slate-300 rounded-lg p-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Relation / Father</label>
                <input
                  type="text"
                  name="relation"
                  value={accountDetails.relation}
                  onChange={handleAccountChange}
                  className="w-full text-xs border border-slate-300 rounded-lg p-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Account Number</label>
                <input
                  type="text"
                  name="accountNumber"
                  value={accountDetails.accountNumber}
                  onChange={handleAccountChange}
                  className="w-full text-xs border border-slate-300 rounded-lg p-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Registered Branch Code</label>
                <input
                  type="text"
                  name="registeredBranchCode"
                  value={accountDetails.registeredBranchCode}
                  onChange={handleAccountChange}
                  className="w-full text-xs border border-slate-300 rounded-lg p-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Branch Code</label>
                <input
                  type="text"
                  name="branch"
                  value={accountDetails.branch}
                  onChange={handleAccountChange}
                  className="w-full text-xs border border-slate-300 rounded-lg p-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">CIF Number</label>
                <input
                  type="text"
                  name="cifNo"
                  value={accountDetails.cifNo}
                  onChange={handleAccountChange}
                  className="w-full text-xs border border-slate-300 rounded-lg p-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Interest Rate (%)</label>
                <input
                  type="text"
                  name="interestRate"
                  value={accountDetails.interestRate}
                  onChange={handleAccountChange}
                  className="w-full text-xs border border-slate-300 rounded-lg p-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Period From</label>
                <input
                  type="text"
                  name="periodFrom"
                  value={accountDetails.periodFrom}
                  onChange={handleAccountChange}
                  className="w-full text-xs border border-slate-300 rounded-lg p-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Period To</label>
                <input
                  type="text"
                  name="periodTo"
                  value={accountDetails.periodTo}
                  onChange={handleAccountChange}
                  className="w-full text-xs border border-slate-300 rounded-lg p-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Balance Date</label>
                <input
                  type="text"
                  name="balanceDate"
                  value={accountDetails.balanceDate}
                  onChange={handleAccountChange}
                  className="w-full text-xs border border-slate-300 rounded-lg p-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Balance Amount</label>
                <input
                  type="text"
                  name="balanceAsOn"
                  value={accountDetails.balanceAsOn}
                  onChange={handleAccountChange}
                  className="w-full text-xs border border-slate-300 rounded-lg p-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2 md:col-span-3">
                <label className="block text-xs font-semibold text-slate-600 mb-1">Address Lines (One per line)</label>
                <textarea
                  name="addressLines"
                  rows={3}
                  value={accountDetails.addressLines.join('\n')}
                  onChange={handleAccountChange}
                  className="w-full text-xs border border-slate-300 rounded-lg p-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Transactions List & Editor */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-100">
              <div>
                <h2 className="text-base font-bold text-slate-800">
                  Transaction Ledger ({transactions.length} Records)
                </h2>
                <p className="text-xs text-slate-500">
                  Edits apply dynamically. Pages recalculate automatically with zero overflow.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-2.5 top-2.5" />
                  <input
                    type="text"
                    placeholder="Search records..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-8 pr-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 w-48"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleAddTransaction}
                  className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-2 rounded-lg cursor-pointer transition shadow-xs"
                >
                  <Plus className="w-4 h-4" /> Add Row
                </button>
              </div>
            </div>

            <div className="overflow-x-auto max-h-[600px] border border-slate-200 rounded-lg">
              <table className="w-full text-xs text-left border-collapse">
                <thead className="bg-slate-50 sticky top-0 z-10 text-slate-600 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-2 w-12 text-center">#</th>
                    <th className="p-2 w-28">Txn Date</th>
                    <th className="p-2 w-28">Value Date</th>
                    <th className="p-2">Description</th>
                    <th className="p-2 w-28">Debit</th>
                    <th className="p-2 w-28">Credit</th>
                    <th className="p-2 w-28">Balance</th>
                    <th className="p-2 w-12 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredTransactions.map((tx, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/70 transition">
                      <td className="p-2 text-center text-slate-400 font-mono">{idx + 1}</td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={tx.date}
                          onChange={(e) => handleTxChange(idx, 'date', e.target.value)}
                          className="w-full p-1 border border-slate-200 rounded text-xs"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={tx.valueDate}
                          onChange={(e) => handleTxChange(idx, 'valueDate', e.target.value)}
                          className="w-full p-1 border border-slate-200 rounded text-xs"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={tx.description}
                          onChange={(e) => handleTxChange(idx, 'description', e.target.value)}
                          className="w-full p-1 border border-slate-200 rounded text-xs"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={tx.debit}
                          onChange={(e) => handleTxChange(idx, 'debit', e.target.value)}
                          className="w-full p-1 border border-slate-200 rounded text-xs font-mono"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={tx.credit}
                          onChange={(e) => handleTxChange(idx, 'credit', e.target.value)}
                          className="w-full p-1 border border-slate-200 rounded text-xs font-mono"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={tx.balance}
                          onChange={(e) => handleTxChange(idx, 'balance', e.target.value)}
                          className="w-full p-1 border border-slate-200 rounded text-xs font-mono"
                        />
                      </td>
                      <td className="p-2 text-center">
                        <button
                          type="button"
                          onClick={() => handleDeleteTransaction(idx)}
                          className="text-slate-400 hover:text-rose-600 p-1 rounded transition cursor-pointer"
                          title="Delete row"
                        >
                          <Trash2 className="w-4 h-4" />
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
        /* Statement Document Canvas View */
        <main className="sbi2-scope w-full flex flex-col items-center py-6 print:py-0 print:m-0">
          {pages.map(({ pageNum, rows, isLast }) => (
            <div key={pageNum} className="sbi2-statement-page">
              {/* Header Banner - Present on every page */}
              <img
                src="/sbi2/sbi2_banner.png"
                alt="State Bank of India"
                className="sbi2-banner"
              />

              {/* Page 1: Branch Code, Customer Details, Advisory Box, Account Metadata */}
              {pageNum === 1 ? (
                <>
                  <div className="sbi2-branch-row">
                    <div>Registered Branch Code: {accountDetails.registeredBranchCode}</div>
                    <div>Thank you for choosing WhatsApp Banking services of State Bank of India</div>
                  </div>

                  <div className="sbi2-address-box-row">
                    <div className="sbi2-address-block">
                      <div className="name">{accountDetails.customerName}</div>
                      <div>{accountDetails.relation}</div>
                      {accountDetails.addressLines.map((line, idx) => (
                        <div key={idx}>{line}</div>
                      ))}
                    </div>

                    <div className="sbi2-important-box">
                      <div className="sbi2-important-title">Important</div>
                      <div>
                        Dear Customer, as part of our green initiative, all statements of account will
                        be sent via e-mail. We request you to update your e-mail id at your home
                        branch.
                      </div>
                    </div>
                  </div>

                  <div className="sbi2-statement-subtitle">
                    Statement of {accountDetails.accountName} (A/c-{accountDetails.accountNumber})
                    between {accountDetails.periodFrom} to {accountDetails.periodTo}
                  </div>

                  <div className="sbi2-account-info-block">
                    <div className="sbi2-account-info-row">
                      Account Number : {accountDetails.accountNumber}
                    </div>
                    <div className="sbi2-account-info-row">Branch : {accountDetails.branch}</div>
                    <div className="sbi2-account-info-row">
                      Account Name : {accountDetails.accountName}
                    </div>
                    <div className="sbi2-account-info-row">
                      Interest Rate : {accountDetails.interestRate}
                    </div>
                    <div className="sbi2-account-info-row">CIF NO : {accountDetails.cifNo}</div>
                    <div className="sbi2-account-info-row">
                      Balance as on {accountDetails.balanceDate} : {accountDetails.balanceAsOn}
                    </div>
                  </div>

                  {renderTable(rows, isLast)}
                </>
              ) : (
                /* Middle / Subsequent Pages */
                <>
                  <div className="sbi2-statement-subtitle" style={{ marginTop: '4px' }}>
                    Statement of {accountDetails.accountName} (A/c-{accountDetails.accountNumber})
                    between {accountDetails.periodFrom} to {accountDetails.periodTo}
                  </div>

                  {renderTable(rows, isLast)}
                </>
              )}

              {/* Bottom Disclaimer Footer Note */}
              <div className="sbi2-footer-note">
                **This is computer generated statement and does not require a signature.**
              </div>
            </div>
          ))}
        </main>
      )}
    </div>
  );
}
