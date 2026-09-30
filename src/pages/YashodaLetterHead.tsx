import { useState } from "react";
import { Link } from "react-router-dom";
import { Download, Settings2, Check } from "lucide-react";

const YASHODA_PRIMARY = "#34316E"; // India Blue
const YASHODA_ACCENT = "#F58634"; // Uplifting Orange

const YashodaLetterHead = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [activeTab, setActiveTab] = useState<"form" | "preview">("form");

  const [formData, setFormData] = useState({
    content: "Type your official letter content here...",
    date: new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" }),
    refNo: "YH/HR/2026/101",
  });

  const handleExportPDF = () => {
    setIsExporting(true);
    setTimeout(() => { window.print(); setIsExporting(false); }, 200);
  };

  const PageHeader = () => (
    <div className="w-full flex items-center justify-between mb-8" style={{ borderBottom: `3px solid ${YASHODA_PRIMARY}`, paddingBottom: '16px' }}>
      <div style={{ flex: 1 }}>
        <img src="/yashoda-logo.png" alt="Yashoda Hospitals" style={{ height: "45px", objectFit: "contain" }} />
      </div>
      <div className="text-right" style={{ fontSize: '9px', lineHeight: '1.5', color: '#333', fontFamily: '"Arial", sans-serif' }}>
        <p style={{ color: YASHODA_PRIMARY, fontWeight: 'bold', fontSize: '11px', marginBottom: '2px', letterSpacing: '0.3px' }}>YASHODA HEALTHCARE SERVICES PVT. LTD.</p>
        <p>Yashoda House, Plot #64, Nagarjuna Hills,</p>
        <p>Punjagutta, Hyderabad, Telangana – 500082</p>
        <p style={{ marginTop: '2px' }}>
          <strong>T:</strong> +91 40 4567 4567 &nbsp;|&nbsp;
          <strong>W:</strong> www.yashodahospitals.com
        </p>
      </div>
    </div>
  );

  const PageFooter = () => (
    <div className="w-full" style={{ borderTop: `1px solid #cbd5e1`, marginTop: '24px', paddingTop: '8px', position: 'absolute', bottom: '10mm', left: 0, right: 0, paddingLeft: '15mm', paddingRight: '15mm' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8px', color: '#888', fontFamily: 'Arial, sans-serif' }}>
        <span style={{ color: YASHODA_PRIMARY, fontWeight: 'bold', letterSpacing: '0.5px' }}>YASHODA HEALTHCARE SERVICES PVT. LTD.</span>
        <span>CIN: U85110TG1999PTC031267</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col print:bg-transparent print:text-black">
      <style>{`@media print { @page { size: A4; margin: 0; } body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; background: white !important; } .no-print { display: none !important; } .print-page { margin: 0 !important; box-shadow: none !important; padding: 15mm !important; position: relative; min-height: 297mm; } }`}</style>
      
      <div className="no-print flex items-center justify-between px-6 py-4 bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link to="/yashoda" className="text-slate-500 hover:text-slate-900 transition-colors text-sm">← Back</Link>
          <span className="text-slate-800 font-semibold">Blank Letterhead</span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setActiveTab(activeTab === "form" ? "preview" : "form")} className="px-4 py-2 rounded-lg text-sm font-medium border border-slate-300 hover:border-slate-400 bg-white text-slate-700 transition-colors flex items-center gap-2">
            <Settings2 className="w-4 h-4" /> {activeTab === "form" ? "Preview" : "Edit Form"}
          </button>
          <button onClick={handleExportPDF} disabled={isExporting} className="px-5 py-2 rounded-lg text-sm font-semibold text-white flex items-center gap-2 transition-all" style={{ background: YASHODA_ACCENT }}>
            {isExporting ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />} Print / Export
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {activeTab === "form" && (
          <div className="no-print w-full max-w-sm bg-white overflow-y-auto p-6 border-r border-slate-200 flex-shrink-0">
            <h2 className="text-lg font-bold mb-6 text-slate-800 flex items-center gap-2">Letter Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Ref No</label>
                <input className="w-full p-2 border border-slate-300 rounded" value={formData.refNo} onChange={(e) => setFormData({...formData, refNo: e.target.value})} />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Date</label>
                <input className="w-full p-2 border border-slate-300 rounded" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Content</label>
                <textarea rows={10} className="w-full p-2 border border-slate-300 rounded" value={formData.content} onChange={(e) => setFormData({...formData, content: e.target.value})} />
              </div>
            </div>
          </div>
        )}

        <div className={`flex-1 overflow-y-auto bg-slate-100 flex flex-col items-center py-10 print:bg-white print:p-0 ${activeTab === "form" ? "hidden md:flex" : "flex"}`}>
          <div className="print-page bg-white shadow-xl" style={{ width: '210mm', minHeight: '297mm', padding: '15mm', fontFamily: '"Arial", sans-serif', position: 'relative' }}>
            <PageHeader />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', marginBottom: '20px' }}>
              <span><strong>Ref:</strong> {formData.refNo}</span>
              <span><strong>Date:</strong> {formData.date}</span>
            </div>
            <div style={{ fontSize: '11px', lineHeight: '1.6', whiteSpace: 'pre-wrap', color: '#111' }}>
              {formData.content}
            </div>
            <PageFooter />
          </div>
        </div>
      </div>
    </div>
  );
};
export default YashodaLetterHead;
