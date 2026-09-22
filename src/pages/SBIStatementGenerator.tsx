import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, ArrowLeft, Printer, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { SBITransaction, defaultAccountDetails, defaultTransactions } from '../data/sbiData';

export default function SBIStatementGenerator() {
  const [isExporting, setIsExporting] = useState(false);
  const accountDetails = defaultAccountDetails;
  const transactions = defaultTransactions;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = async () => {
    try {
      setIsExporting(true);
      toast.info('Generating accurate statement PDF via Puppeteer...');

      const response = await fetch('/api/export-pdf?path=/sbi&filename=SBI_Statement.pdf');
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Export failed with status ${response.status}`);
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'SBI_Statement.pdf';
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

  const { pages, totalPages } = useMemo(() => {
    const map = new Map<number, SBITransaction[]>();
    for (const t of transactions) {
      if (!map.has(t.page)) map.set(t.page, []);
      map.get(t.page)!.push(t);
    }
    const pageNums = Array.from(map.keys()).sort((a, b) => a - b);
    const result = pageNums.map((num) => ({ num, rows: map.get(num)! }));
    return { pages: result, totalPages: pageNums.length || 1 };
  }, [transactions]);

  const renderTable = (rows: SBITransaction[]) => (
    <div className="sbi-table-scroll">
      <table className="sbi-table">
        <colgroup>
          <col style={{ width: '10.13%' }} />
          <col style={{ width: '10.13%' }} />
          <col style={{ width: '15.30%' }} />
          <col style={{ width: '15.30%' }} />
          <col style={{ width: '13.00%' }} />
          <col style={{ width: '12.05%' }} />
          <col style={{ width: '12.05%' }} />
          <col style={{ width: '12.04%' }} />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" className="left">Txn Date</th>
            <th scope="col" className="left">Value Date</th>
            <th scope="col" className="left">Description</th>
            <th scope="col" className="left">Ref No./Cheque No.</th>
            <th scope="col" className="left">Branch Code</th>
            <th scope="col" className="right">Debit</th>
            <th scope="col" className="right">Credit</th>
            <th scope="col" className="right">Balance</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((t, i) => (
            <tr key={i}>
              <td className="left">{t.date}</td>
              <td className="left">{t.valueDate}</td>
              <td className="left">
                {t.descriptionLines.map((line, li) => (
                  <React.Fragment key={li}>
                    {li > 0 && <br />}
                    {line}
                  </React.Fragment>
                ))}
              </td>
              <td className="left">
                {t.refLines.map((line, li) => (
                  <React.Fragment key={li}>
                    {li > 0 && <br />}
                    {line}
                  </React.Fragment>
                ))}
              </td>
              <td className="left">{t.branchCode}</td>
              <td className="right">{t.debit}</td>
              <td className="right">{t.credit}</td>
              <td className="right">{t.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-100 print:bg-white print:min-h-0 text-black font-sans antialiased">
      {/* Faithful reproduction of public/sbi source statement (PDF + converted HTML) */}
      <style>{`
        .sbi-page-wrapper,
        .sbi-statement-page,
        .sbi-statement-page * {
          font-family: Arial, Helvetica, sans-serif !important;
          font-weight: 400 !important;
          color: #000000 !important;
          box-sizing: border-box !important;
        }
        .sbi-table,
        .sbi-table * {
          font-weight: 700 !important;
        }
        .sbi-statement-page {
          width: 794px; /* A4 @ 96dpi */
          min-height: 1123px;
          background: #fff;
          margin: 20px auto;
          padding: 48px;
          box-shadow: 0 1px 14px rgba(0,0,0,0.11);
          position: relative;
        }
        .sbi-brand {
          margin-bottom: 12px;
        }
        .sbi-brand img {
          display: block;
          width: 181pt;
          height: auto;
        }
        .sbi-info-row {
          display: flex;
          font-size: 12px;
          line-height: 1.55;
        }
        .sbi-info-label {
          min-width: 190px;
          flex: 0 0 auto;
          white-space: nowrap;
          padding-right: 12px;
        }
        .sbi-info-value {
          flex: 1 1 auto;
        }
        .sbi-info-block {
          margin-bottom: 16px;
        }
        .sbi-period {
          font-size: 13px;
          margin: 18px 0 10px;
        }
        .sbi-table-scroll {
          width: 100%;
          overflow-x: auto;
        }
        .sbi-table {
          border-collapse: collapse;
          width: 100%;
          table-layout: fixed;
          border: 1px solid #000;
          font-size: 10.5px;
          line-height: 1.25;
        }
        .sbi-table th,
        .sbi-table td {
          border: 1px solid #000;
          padding: 3px 5px;
          vertical-align: top;
          overflow-wrap: anywhere;
        }
        .sbi-table th {
          background: #fff;
          padding: 4px 5px;
        }
        .sbi-table th.left,
        .sbi-table td.left {
          text-align: left;
        }
        .sbi-table th.right,
        .sbi-table td.right {
          text-align: right;
          font-variant-numeric: tabular-nums;
          font-feature-settings: "tnum" 1;
        }
        .sbi-closing-note {
          margin-top: 16px;
          font-size: 11px;
        }
        @media screen and (max-width: 820px) {
          .sbi-statement-page {
            width: 100%;
            margin: 0 0 12px;
            padding: 24px 16px;
            min-height: auto;
          }
          .sbi-table {
            min-width: 720px;
          }
        }
        @media print {
          @page {
            size: 595pt 842pt;
            margin: 0;
          }
          html, body, .min-h-screen, main, .sbi-page-wrapper {
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
          .sbi-page-wrapper {
            padding: 0 !important;
            margin: 0 !important;
          }
          .sbi-statement-page {
            display: block !important;
            box-shadow: none !important;
            margin: 0 !important;
            width: 595pt !important;
            min-height: 842pt !important;
            padding: 36pt !important;
            position: relative !important;
            break-after: page !important;
            page-break-after: always !important;
          }
          .sbi-statement-page:last-child {
            break-after: auto !important;
            page-break-after: auto !important;
          }
          .sbi-brand img {
            width: 181pt !important;
          }
          .sbi-info-row {
            font-size: 12pt !important;
            line-height: 1.3 !important;
            margin-bottom: 2.4pt !important;
          }
          .sbi-info-label {
            min-width: 143pt !important;
            padding-right: 9pt !important;
          }
          .sbi-period {
            font-size: 12pt !important;
            margin: 14pt 0 8pt !important;
          }
          .sbi-table {
            font-size: 7.5pt !important;
            line-height: 7.8pt !important;
            width: 523pt !important;
          }
          .sbi-table th {
            font-size: 8.5pt !important;
            line-height: 1.1 !important;
          }
          .sbi-table th,
          .sbi-table td {
            padding: 1pt 3.5pt !important;
          }
          .sbi-closing-note {
            font-size: 8.5pt !important;
            margin-top: 12pt !important;
          }
        }
      `}</style>

      {/* Non-printable Interactive Navigation Toolbar */}
      <header className="nav-header sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm print:hidden">
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
                Account Statement
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
              {transactions.length} Transactions Loaded
            </span>

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
              title="Open browser print dialog (Ctrl+P)"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 px-3 py-2 rounded-lg transition-colors shadow-xs"
            >
              <Printer className="w-4 h-4 text-slate-500" />
              <span className="hidden md:inline">Print Dialog</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="py-6 print:py-0 print:m-0">
        <div className="sbi-page-wrapper">
          {pages.map(({ num, rows }) => (
            <article key={num} className="sbi-statement-page" aria-label={`Statement page ${num}`}>
              {num === 1 && (
                <>
                  <header className="sbi-brand">
                    <img alt="SBI" src="/sbi_logo.jpg" />
                  </header>

                  <div className="sbi-info-block">
                    <div className="sbi-info-row">
                      <div className="sbi-info-label">Account Name</div>
                      <div className="sbi-info-value">:{accountDetails.customerName}</div>
                    </div>
                    <div className="sbi-info-row">
                      <div className="sbi-info-label">Address</div>
                      <div className="sbi-info-value">
                        {accountDetails.addressLines.map((line, i) => (
                          <React.Fragment key={i}>
                            {i === 0 ? `:${line}` : line}
                            {i < accountDetails.addressLines.length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                    <div className="sbi-info-row">
                      <div className="sbi-info-label">Date</div>
                      <div className="sbi-info-value">:{accountDetails.statementDate}</div>
                    </div>
                    <div className="sbi-info-row">
                      <div className="sbi-info-label">Account Number</div>
                      <div className="sbi-info-value">:{accountDetails.accountNumber}</div>
                    </div>
                    <div className="sbi-info-row">
                      <div className="sbi-info-label">Account Description</div>
                      <div className="sbi-info-value">:{accountDetails.accountDescription}</div>
                    </div>
                    <div className="sbi-info-row">
                      <div className="sbi-info-label">Branch</div>
                      <div className="sbi-info-value">:{accountDetails.branch}</div>
                    </div>
                    <div className="sbi-info-row">
                      <div className="sbi-info-label">Drawing Power</div>
                      <div className="sbi-info-value">:{accountDetails.drawingPower}</div>
                    </div>
                    <div className="sbi-info-row">
                      <div className="sbi-info-label">Interest Rate(% p.a.)</div>
                      <div className="sbi-info-value">:{accountDetails.interestRate}</div>
                    </div>
                    <div className="sbi-info-row">
                      <div className="sbi-info-label">MOD Balance</div>
                      <div className="sbi-info-value">:{accountDetails.modBalance}</div>
                    </div>
                    <div className="sbi-info-row">
                      <div className="sbi-info-label">CIF No.</div>
                      <div className="sbi-info-value">:{accountDetails.cifNo}</div>
                    </div>
                    <div className="sbi-info-row">
                      <div className="sbi-info-label">IFS Code</div>
                      <div className="sbi-info-value">:{accountDetails.ifsCode}</div>
                    </div>
                    <div className="sbi-info-row">
                      <div className="sbi-info-label">MICR Code</div>
                      <div className="sbi-info-value">:{accountDetails.micrCode}</div>
                    </div>
                    <div className="sbi-info-row">
                      <div className="sbi-info-label">Opening Balance as on {accountDetails.openingBalanceDate}</div>
                      <div className="sbi-info-value">:{accountDetails.openingBalance}</div>
                    </div>
                  </div>

                  <h2 className="sbi-period">
                    Account Statement from {accountDetails.periodFrom} to {accountDetails.periodTo}
                  </h2>
                </>
              )}

              {renderTable(rows)}

              {num === totalPages && (
                <p className="sbi-closing-note">**This is a computer generated statement and does not require a signature.</p>
              )}
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
