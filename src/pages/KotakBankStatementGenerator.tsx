import React, { useState, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Printer, Upload } from 'lucide-react';
import { toast } from 'sonner';
import { kotakTransactions, KotakTransaction } from '../data/kotakData';

const PAGE_1_MAX = 19;
const MIDDLE_PAGE_MAX = 32;

export default function KotakBankStatementGenerator() {
  const [transactions, setTransactions] = useState(kotakTransactions);
  const [showConfig, setShowConfig] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const pages = useMemo(() => {
    const result = [];
    let currentTransIndex = 0;
    const page1Trans = transactions.slice(0, Math.min(transactions.length, PAGE_1_MAX));
    result.push({ isFirst: true, isSummary: false, transactions: page1Trans });
    currentTransIndex += page1Trans.length;
    while (currentTransIndex < transactions.length) {
      const pageTrans = transactions.slice(currentTransIndex, currentTransIndex + MIDDLE_PAGE_MAX);
      result.push({ isFirst: false, isSummary: false, transactions: pageTrans });
      currentTransIndex += pageTrans.length;
    }
    result.push({ isFirst: false, isSummary: true, transactions: [] });
    return result;
  }, [transactions]);

  const handlePrint = () => {
    window.print();
  };

  const handleTransactionChange = (index: number, field: keyof KotakTransaction, value: string) => {
    const newTrans = [...transactions];
    newTrans[index] = { ...newTrans[index], [field]: value };
    setTransactions(newTrans);
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
        if (rows[0].toLowerCase().includes('date') || rows[0].toLowerCase().includes('balance')) {
          startIndex = 1;
        }
        const newTransactions: KotakTransaction[] = [];
        for (let i = startIndex; i < rows.length; i++) {
          const cols = rows[i].match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || rows[i].split(',');
          if (cols.length >= 4) {
            newTransactions.push({
              id: (i).toString(),
              date: cols[0]?.replace(/"/g, '').trim() || '',
              description: cols[1]?.replace(/"/g, '').trim() || '',
              refNo: cols[2]?.replace(/"/g, '').trim() || '',
              debit: cols[3]?.replace(/"/g, '').trim() || '',
              credit: cols[4]?.replace(/"/g, '').trim() || '',
              balance: cols[5]?.replace(/"/g, '').trim() || ''
            });
          }
        }
        setTransactions(newTransactions);
        toast.success(`Successfully loaded ${newTransactions.length} transactions from CSV!`);
      } catch (err) {
        toast.error('Failed to parse CSV file.');
      }
    };
    reader.readAsText(file);
    if (fileInputRef.current) { fileInputRef.current.value = ''; }
  };

  return (
    <div className="min-h-screen bg-slate-100 py-8 print:py-0 print:bg-white flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto px-4 mb-6 print:hidden flex flex-col md:flex-row justify-between items-center gap-4">
        <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
        </Link>
        <div className="flex gap-4">
          <input type="file" accept=".csv" ref={fileInputRef} onChange={handleFileUpload} className="hidden" />
          <button onClick={() => fileInputRef.current?.click()} className="flex items-center px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium shadow-sm">
            <Upload className="w-4 h-4 mr-2" /> Upload CSV
          </button>
          <button onClick={() => setShowConfig(!showConfig)} className="flex items-center px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium shadow-sm">
            Toggle Editor
          </button>
          <button onClick={handlePrint} className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm">
            <Printer className="w-4 h-4 mr-2" /> Print PDF
          </button>
        </div>
      </div>

      {showConfig && (
        <div className="w-full max-w-7xl mx-auto px-4 mb-8 print:hidden">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 h-[400px] overflow-y-auto">
            <h3 className="text-lg font-bold mb-4">Edit Transactions</h3>
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-2 text-left">Date</th>
                  <th className="p-2 text-left">Description</th>
                  <th className="p-2 text-left">Debit</th>
                  <th className="p-2 text-left">Credit</th>
                  <th className="p-2 text-left">Balance</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((t, i) => (
                  <tr key={i} className="border-t border-slate-100">
                    <td className="p-2"><input className="border p-1 w-24" value={t.date} onChange={e => handleTransactionChange(i, 'date', e.target.value)} /></td>
                    <td className="p-2"><input className="border p-1 w-full" value={t.description} onChange={e => handleTransactionChange(i, 'description', e.target.value)} /></td>
                    <td className="p-2"><input className="border p-1 w-24" value={t.debit} onChange={e => handleTransactionChange(i, 'debit', e.target.value)} /></td>
                    <td className="p-2"><input className="border p-1 w-24" value={t.credit} onChange={e => handleTransactionChange(i, 'credit', e.target.value)} /></td>
                    <td className="p-2"><input className="border p-1 w-28" value={t.balance} onChange={e => handleTransactionChange(i, 'balance', e.target.value)} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-8 print:gap-0">
        {pages.map((page, pageIndex) => (
          <div key={pageIndex} className="w-[210mm] min-h-[297mm] bg-white shadow-xl print:shadow-none print:break-after-page relative" style={{ fontFamily: 'Arial, Helvetica, sans-serif', boxSizing: 'border-box', WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
            
            {page.isFirst && (
              <img src="/kotak_img_0.jpg" alt="Kotak Mahindra Bank" className="w-full h-auto block" />
            )}

            <div className="px-[12mm] py-[8mm] text-[#222]">
              {page.isFirst ? (
                <>
                  <h1 className="text-[32px] font-bold leading-none mb-2 mt-2">Account Statement</h1>
                  <div className="text-[13px] mb-8">17 May 2026 - 21 Aug 2026</div>

                  <div className="flex justify-between text-[13px] mb-8 leading-[1.6]">
                    <div className="w-[55%]">
                      <div className="font-bold text-[16px] mb-1 leading-tight">Musku Dinesh Kumar</div>
                      <div className="text-[#888] mb-6">CRN xxxxxx030</div>
                      
                      <div>House Number 5-57 Mupkal Bal</div>
                      <div>Konda Mandal</div>
                      <div>Kisannagar</div>
                      <div>Hyderabad - 503218</div>
                      <div>Telangana - India</div>
                      
                      <div className="mt-8 flex gap-5 text-[13px]">
                        <div><span className="text-[#888]">MICR</span> <span className="font-semibold ml-1">503485622</span></div>
                        <div><span className="text-[#888]">IFSC Code</span> <span className="font-semibold ml-1">KKBK0008370</span></div>
                      </div>
                    </div>
                    <div className="w-[45%] flex justify-end">
                      <table className="text-[13px] leading-[1.7] w-auto ml-auto mr-0">
                        <tbody>
                          <tr><td className="text-[#888] pr-4">Account No.</td><td className="font-bold text-[#222]">2511836505</td></tr>
                          <tr><td className="text-[#888] pr-4">Account Type</td><td className="font-bold text-[#222]">Savings</td></tr>
                          <tr><td className="text-[#888] pr-4">Branch</td><td className="font-bold text-[#222]">Mupkal</td></tr>
                          <tr><td className="text-[#888] pr-4">Account Status</td><td className="font-bold text-[#222]">Active</td></tr>
                          <tr><td className="text-[#888] pr-4">Nominee Registered</td><td className="font-bold text-[#222]">Yes</td></tr>
                          <tr><td className="text-[#888] pr-4">Currency</td><td className="font-bold text-[#222]">INDIAN RUPEE</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
              ) : (
                <div className="mb-6 text-[#222]">
                  <div className="font-bold text-[13px] uppercase mb-1">MUSKU DINESH KUMAR</div>
                  <div className="text-[13px] text-[#888] mb-0.5">Account No. <span className="font-bold text-[#222]">2511836505</span></div>
                  <div className="text-[13px] text-[#888]">Account Statement <span className="font-bold text-[#222]">17 May 2026 - 21 Aug 2026</span></div>
                </div>
              )}

              <div className="w-full pb-[25mm]">
                {!page.isSummary && (
                  <>
                <div className="bg-[#ed1b24] text-white py-1.5 text-[15px] font-normal mb-0 w-full text-center">Savings Account Transactions</div>
                <table className="w-full text-[11px] border-collapse" style={{ tableLayout: 'fixed' }}>
                  <thead>
                    <tr className="bg-[#9fa0a2] text-white">
                      <th className="py-1 px-1 text-left font-normal border-r border-white" style={{ width: '4%' }}>#</th>
                      <th className="py-1 px-1 text-left font-normal border-r border-white" style={{ width: '11%' }}>Date</th>
                      <th className="py-1 px-1 text-left font-normal border-r border-white" style={{ width: '32%' }}>Description</th>
                      <th className="py-1 px-1 text-left font-normal border-r border-white" style={{ width: '17%' }}>Chq/Ref. No.</th>
                      <th className="py-1 px-1 text-right font-normal border-r border-white" style={{ width: '12%' }}>Withdrawal (Dr.)</th>
                      <th className="py-1 px-1 text-right font-normal border-r border-white" style={{ width: '12%' }}>Deposit (Cr.)</th>
                      <th className="py-1 px-2 text-right font-normal" style={{ width: '12%' }}>Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {page.isFirst && (
                      <tr className="border-b border-[#e5e7eb]">
                        <td className="py-1 px-1 text-center text-[#222]">-</td>
                        <td className="py-1 px-1 text-center text-[#222]">-</td>
                        <td className="py-1 px-1 text-[#222]">Opening Balance</td>
                        <td className="py-1 px-1 text-center text-[#222]">-</td>
                        <td className="py-1 px-1 text-center text-[#222]">-</td>
                        <td className="py-1 px-1 text-center text-[#222]">-</td>
                        <td className="py-1 px-2 text-right text-[#222]">7,49,725.57</td>
                      </tr>
                    )}
                    {page.transactions.map((t, idx) => (
                      <tr key={t.id} className="border-b border-[#e5e7eb] align-top">
                        <td className="py-1 px-1 text-[#222]">{pageIndex === 0 ? idx + 1 : idx + 1 + PAGE_1_MAX + (pageIndex - 1) * MIDDLE_PAGE_MAX}</td>
                        <td className="py-1 px-1 text-[#222] whitespace-nowrap">{t.date}</td>
                        <td className="py-1 px-1 text-[#222] break-all pr-1 leading-tight">{t.description}</td>
                        <td className="py-1 px-1 text-[#222] break-all">{t.refNo}</td>
                        <td className="py-1 px-1 text-right text-[#222] whitespace-nowrap">{t.debit}</td>
                        <td className="py-1 px-1 text-right text-[#222] whitespace-nowrap">{t.credit}</td>
                        <td className="py-1 px-2 text-right text-[#222] whitespace-nowrap">{t.balance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                  </>
                )}
              </div>

              {page.isSummary && (
                <div className="mt-8 text-center text-[12px] text-[#222]">
                  <div className="font-[600] text-[14px] mb-2">End of Statement</div>
                  <div className="mb-[2px]">Any discrepancy in the statement should be brought to the notice of Kotak Mahindra Bank Ltd. within</div>
                  <div className="mb-[2px]">one month from the date of receipt of the statement.</div>
                  <div className="mb-6">This is a system generated report and does not require signature and stamp.</div>
                  
                  <table className="w-full text-left text-[12px] mb-8 border-collapse">
                    <thead>
                      <tr>
                        <th colSpan={3} className="bg-[#ed1b24] text-white text-center py-2 font-normal text-[15px]">Account Summary</th>
                      </tr>
                      <tr className="bg-[#9fa0a2] text-white">
                        <th className="py-1.5 px-3 font-normal font-[13px] border-r border-white border-r w-[50%]">Particulars</th>
                        <th className="py-1.5 px-3 font-normal font-[13px] border-r border-white border-r w-[25%]">Opening Balance</th>
                        <th className="py-1.5 px-3 font-normal font-[13px] w-[25%]">Closing Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#e5e7eb]">
                        <td className="py-2 px-3 text-[#222]">Savings Account (SA):</td>
                        <td className="py-2 px-3 text-[#222]">7,49,725.57</td>
                        <td className="py-2 px-3 text-[#222]">9,83,404.47</td>
                      </tr>
                    </tbody>
                  </table>
                  
                  <div className="bg-[#ed1b24] text-white text-center py-2 text-[15px]">
                    For assistance, reach out to us at:
                  </div>
                  <div className="flex justify-between items-center px-8 py-5 border border-[#e5e7eb] text-[12px]">
                    <div className="text-center w-1/3 border-r border-[#e5e7eb]">
                      <div className="text-[#222] mb-1">Contact Us</div>
                      <div className="font-bold text-[#222]">1800 4100</div>
                      <div className="text-[#888] mt-1">(Toll-free number)</div>
                    </div>
                    <div className="text-center w-1/3 border-r border-[#e5e7eb] px-4">
                      <div className="text-[#222] mb-1">Branch Address</div>
                      <div className="text-[#222]">3-6 Main Road, Mupkal-503218, Telangana, India</div>
                    </div>
                    <div className="text-center w-1/3">
                      <div className="text-[#222] mb-1">Branch Phone Number</div>
                      <div className="text-[#222]">7337353738</div>
                    </div>
                  </div>
                </div>
              )}

              <div className="absolute bottom-[10mm] px-[12mm] left-0 w-full flex justify-between text-[#888] text-[11px]">
                <div>Statement Generated on 21 Aug 2026, 11:16</div>
                <div>Page {pageIndex + 1} of {pages.length}</div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
