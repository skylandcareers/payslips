import React, { useState, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Printer, Loader2, Upload } from 'lucide-react';
import { toast } from 'sonner';
import { tgbTransactions, TGBTransaction } from '../data/tgbData';

const PAGE_1_MAX = 20;
const MIDDLE_PAGE_MAX = 30;

export default function TGBStatementGenerator() {
  const [transactions, setTransactions] = useState(tgbTransactions);
  const [showConfig, setShowConfig] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const pages = useMemo(() => {
    const result = [];
    let currentTransIndex = 0;
    const page1Trans = transactions.slice(0, Math.min(transactions.length, PAGE_1_MAX));
    result.push({ isFirst: true, transactions: page1Trans });
    currentTransIndex += page1Trans.length;
    while (currentTransIndex < transactions.length) {
      const pageTrans = transactions.slice(currentTransIndex, currentTransIndex + MIDDLE_PAGE_MAX);
      result.push({ isFirst: false, transactions: pageTrans });
      currentTransIndex += pageTrans.length;
    }
    return result;
  }, [transactions]);

  const handlePrint = () => {
    window.print();
  };

  const handleTransactionChange = (index: number, field: keyof TGBTransaction, value: string) => {
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
        const newTransactions: TGBTransaction[] = [];
        for (let i = startIndex; i < rows.length; i++) {
          const cols = rows[i].match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || rows[i].split(',');
          if (cols.length >= 4) {
            newTransactions.push({
              id: (i).toString(),
              date: cols[0]?.replace(/"/g, '').trim() || '',
              valueDate: cols[0]?.replace(/"/g, '').trim() || '',
              description: cols[1]?.replace(/"/g, '').trim() || '',
              debit: cols[2]?.replace(/"/g, '').trim() || '',
              credit: cols[3]?.replace(/"/g, '').trim() || '',
              balance: cols[4]?.replace(/"/g, '').trim() || ''
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
          <div key={pageIndex} className="w-[210mm] min-h-[297mm] bg-white shadow-xl print:shadow-none print:break-after-page relative " style={{ fontFamily: 'Arial, sans-serif' }}>
            <div className="px-[12mm] py-[12mm] text-[#222]">
              {page.isFirst && (
                <>
                  <div className="mb-4">
                    <div className="text-base font-bold text-gray-800">TELANGANA GRAMEENA BANK</div>
                    <div className="text-sm">Your Branch : MUPKAL</div>
                    <div className="text-sm">H NO 2-83 NEAR BUS STAND MUPKAL BUSSTAND</div>
                    <div className="text-sm">Telangana Grameena Bank MUPKAL</div>
                    <div className="text-sm">Nizamabad, 503218,</div>
                  </div>
                  <div className="text-center font-bold text-base mb-4">Statement of Account From : 18/05/2026 To : 21/08/2026</div>
                  <div className="grid grid-cols-2 text-sm mb-6 border border-gray-300 p-2">
                    <div>
                      <div className="font-bold">SRI YOGESHWARA SEEDS PESTICIDES PROP. NARSAIAH MUSKU</div>
                      <div>2-79/3</div>
                      <div>MUPKAL</div>
                      <div>MUPKAL, MUPKAL NIZAMABAD, 503218</div>
                    </div>
                    <div>
                      <div><span className="font-bold">Account No. :</span> 0000079016219702</div>
                      <div><span className="font-bold">IFSC code :</span> TGRB0000222</div>
                      <div><span className="font-bold">CIF No. :</span> 29009029618</div>
                      <div><span className="font-bold">Product:</span> CA-RURAL-FIRM/TRUST/SOC</div>
                      <div><span className="font-bold">Branch Code :</span> 00222</div>
                    </div>
                  </div>
                </>
              )}
              <table className="w-full text-xs leading-tight border-collapse">
                <thead>
                  <tr className="border-y-2 border-black">
                    <th className="py-2 text-left w-16">Post Date</th>
                    <th className="py-2 text-left w-16">Value Date</th>
                    <th className="py-2 text-left">Narration</th>
                    <th className="py-2 text-left w-16">Cheque Details</th>
                    <th className="py-2 text-right w-20">Debit</th>
                    <th className="py-2 text-right w-20">Credit</th>
                    <th className="py-2 text-right w-24">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {page.transactions.map((t, idx) => (
                    <tr key={t.id} className="border-b border-gray-100">
                      <td className="py-1.5 align-top">{t.date}</td>
                      <td className="py-1.5 align-top">{t.valueDate}</td>
                      <td className="py-1.5 pr-2 align-top break-all font-medium text-gray-800">{t.description}</td>
                      <td className="py-1.5 align-top">-</td>
                      <td className="py-1.5 text-right align-top">{t.debit}</td>
                      <td className="py-1.5 text-right align-top">{t.credit}</td>
                      <td className="py-1.5 text-right align-top font-semibold">{t.balance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="absolute bottom-[10mm] w-full text-center text-xs text-gray-500 left-0">
                Page {pageIndex + 1}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
