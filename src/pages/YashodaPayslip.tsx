import { useState } from "react";
import { Link } from "react-router-dom";
import { Download, Settings2, Check } from "lucide-react";

const YASHODA_PRIMARY = "#34316E"; // India Blue
const YASHODA_ACCENT = "#F58634"; // Uplifting Orange

const YashodaPayslip = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [activeTab, setActiveTab] = useState<"form" | "preview">("form");

  const [formData, setFormData] = useState({
    payPeriod: "September 2026",
    employeeName: "Rohan Kumar",
    employeeId: "YH-2024-1042",
    designation: "Senior Staff Nurse",
    department: "Intensive Care Unit (ICU)",
    doj: "October 10, 2024",
    location: "Secunderabad",
    bankName: "HDFC Bank",
    bankAccount: "XXXXXXXX6789",
    totalDays: "30",
    lwp: "0",
    paidDays: "30",
    basic: "18,000",
    hra: "7,200",
    da: "3,600",
    specialAllowance: "8,500",
    pf: "1,800",
    pt: "200",
    tds: "1,000"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, [e.target.name]: e.target.value });

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

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col print:bg-transparent print:text-black">
      <style>{`@media print { @page { size: A4; margin: 0; } body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; background: white !important; } .no-print { display: none !important; } .print-page { margin: 0 !important; box-shadow: none !important; padding: 15mm !important; min-height: 297mm; } }`}</style>
      
      <div className="no-print flex items-center justify-between px-6 py-4 bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link to="/yashoda" className="text-slate-500 hover:text-slate-900 transition-colors text-sm">← Back</Link>
          <span className="text-slate-800 font-semibold">Payslip Generator</span>
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
            <h2 className="text-lg font-bold mb-6 text-slate-800 flex items-center gap-2">Payslip Details</h2>
            <div className="space-y-4">
              {[
                ["Pay Period", "payPeriod"], ["Employee Name", "employeeName"], ["Emp ID", "employeeId"],
                ["Basic", "basic"], ["HRA", "hra"], ["PF", "pf"], ["PT", "pt"], ["TDS", "tds"]
              ].map(([lbl, name]) => (
                <div key={name}>
                  <label className="block text-xs font-medium text-slate-600 mb-1">{lbl}</label>
                  <input className="w-full p-2 border border-slate-300 rounded" name={name} value={formData[name as keyof typeof formData]} onChange={handleChange} />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className={`flex-1 overflow-y-auto bg-slate-100 flex flex-col items-center py-10 print:bg-white print:p-0 ${activeTab === "form" ? "hidden md:flex" : "flex"}`}>
          <div className="print-page bg-white shadow-xl" style={{ width: '210mm', minHeight: '297mm', padding: '15mm', fontFamily: '"Arial", sans-serif', fontSize: '10px', color: '#111' }}>
            <PageHeader />
            <div style={{ textAlign: 'center', marginBottom: '16px' }}>
              <p style={{ fontWeight: 'bold', fontSize: '13px', color: YASHODA_PRIMARY, textDecoration: 'underline' }}>PAYSLIP FOR THE MONTH OF {formData.payPeriod.toUpperCase()}</p>
            </div>

            <div style={{ border: '1px solid #cbd5e1', marginBottom: '16px', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <div style={{ padding: '8px', borderRight: '1px solid #cbd5e1' }}>
                <p style={{ marginBottom: '4px' }}><strong>Emp Name:</strong> {formData.employeeName}</p>
                <p style={{ marginBottom: '4px' }}><strong>Emp ID:</strong> {formData.employeeId}</p>
                <p><strong>Designation:</strong> {formData.designation}</p>
              </div>
              <div style={{ padding: '8px' }}>
                <p style={{ marginBottom: '4px' }}><strong>Bank:</strong> {formData.bankName}</p>
                <p style={{ marginBottom: '4px' }}><strong>A/C No:</strong> {formData.bankAccount}</p>
                <p><strong>Paid Days:</strong> {formData.paidDays}</p>
              </div>
            </div>

            <div style={{ display: 'flex', border: '1px solid #cbd5e1' }}>
              <div style={{ flex: 1, borderRight: '1px solid #cbd5e1' }}>
                <div style={{ background: '#f8fafc', padding: '6px 8px', fontWeight: 'bold', borderBottom: '1px solid #cbd5e1', color: YASHODA_PRIMARY }}>EARNINGS</div>
                <div style={{ padding: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Basic</span><span>{formData.basic}</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>HRA</span><span>{formData.hra}</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>DA</span><span>{formData.da}</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Special Allowance</span><span>{formData.specialAllowance}</span></div>
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ background: '#f8fafc', padding: '6px 8px', fontWeight: 'bold', borderBottom: '1px solid #cbd5e1', color: YASHODA_PRIMARY }}>DEDUCTIONS</div>
                <div style={{ padding: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>PF</span><span>{formData.pf}</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>PT</span><span>{formData.pt}</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>TDS</span><span>{formData.tds}</span></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
export default YashodaPayslip;
