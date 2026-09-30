import { useState } from "react";
import { Link } from "react-router-dom";
import { Download, Settings2, Check } from "lucide-react";

const YASHODA_PRIMARY = "#34316E"; // India Blue
const YASHODA_ACCENT = "#F58634"; // Uplifting Orange

const YashodaOfferLetter = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [activeTab, setActiveTab] = useState<"form" | "preview">("form");

  const [formData, setFormData] = useState({
    date: new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" }),
    referenceNo: "YH/HR/2026/102",
    candidateName: "Rohan Kumar",
    candidateAddress: "Plot 45, Jubilee Hills",
    cityStatePin: "Hyderabad, Telangana - 500033",
    contactNumber: "+91 98765 12345",
    emailId: "rohan.kumar@email.com",
    designation: "Senior Staff Nurse",
    department: "Intensive Care Unit (ICU)",
    joiningDate: "October 10, 2026",
    location: "Yashoda Hospitals, Secunderabad",
    probationPeriod: "6",
    basic: "18,000",
    hra: "7,200",
    da: "3,600",
    specialAllowance: "8,500",
    pfDeduction: "1,800",
    ptDeduction: "200"
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
      <style>{`@media print { @page { size: A4; margin: 0; } body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; background: white !important; } .no-print { display: none !important; } .print-page { margin: 0 !important; box-shadow: none !important; padding: 15mm !important; position: relative; min-height: 297mm; page-break-after: always; } }`}</style>
      
      <div className="no-print flex items-center justify-between px-6 py-4 bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link to="/yashoda" className="text-slate-500 hover:text-slate-900 transition-colors text-sm">← Back</Link>
          <span className="text-slate-800 font-semibold">Offer Letter Generator</span>
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
            <h2 className="text-lg font-bold mb-6 text-slate-800 flex items-center gap-2">Offer Details</h2>
            <div className="space-y-4">
              {[
                ["Ref No", "referenceNo"], ["Date", "date"], ["Candidate Name", "candidateName"],
                ["Address", "candidateAddress"], ["City/State/Pin", "cityStatePin"],
                ["Designation", "designation"], ["Department", "department"], ["Location", "location"],
                ["Joining Date", "joiningDate"], ["Basic Pay", "basic"], ["HRA", "hra"],
                ["Special Allowance", "specialAllowance"]
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
          <div className="print-page bg-white shadow-xl" style={{ width: '210mm', minHeight: '297mm', padding: '15mm', fontFamily: '"Arial", sans-serif', fontSize: '11px', color: '#111' }}>
            <PageHeader />
            <div style={{ textAlign: 'center', marginBottom: '14px' }}>
              <p style={{ fontWeight: 'bold', fontSize: '13px', color: YASHODA_PRIMARY, textDecoration: 'underline', letterSpacing: '1px' }}>OFFER OF EMPLOYMENT</p>
              <p style={{ fontSize: '9px', color: '#666', marginTop: '2px' }}>Ref: {formData.referenceNo} &nbsp;|&nbsp; Date: {formData.date}</p>
            </div>

            <p style={{ lineHeight: '1.7' }}>Dear <strong>{formData.candidateName}</strong>,</p>
            <p style={{ lineHeight: '1.7', marginTop: '8px' }}>
              We are pleased to extend this offer of employment to you at <strong>Yashoda Hospitals</strong>. We believe your skills and experience will be a valuable asset to our institution.
            </p>

            <div style={{ marginTop: '12px', marginBottom: '10px', borderRadius: '4px', overflow: 'hidden', border: `1px solid #cbd5e1` }}>
              <div style={{ background: '#f8fafc', color: YASHODA_PRIMARY, padding: '6px 12px', fontWeight: 'bold', borderBottom: `1px solid #cbd5e1` }}>EMPLOYMENT DETAILS</div>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  {[
                    ["Designation", formData.designation], ["Department", formData.department],
                    ["Location", formData.location], ["Date of Joining", formData.joiningDate],
                  ].map(([k, v]) => (
                    <tr key={k} style={{ borderBottom: '1px solid #f0f0f0' }}>
                      <td style={{ padding: '5px 12px', width: '35%', color: '#555', fontWeight: '600' }}>{k}</td>
                      <td style={{ padding: '5px 12px' }}>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={{ lineHeight: '1.7', marginTop: '10px' }}>
              Your compensation details are provided in Annexure A. Please sign and return a copy of this letter as a token of your acceptance.
            </p>

            <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontWeight: 'bold', color: YASHODA_PRIMARY }}>For Yashoda Hospitals</p>
                <div style={{ height: '40px' }} />
                <p style={{ fontSize: '10px', color: '#555' }}>Authorized Signatory<br/>Human Resources</p>
              </div>
              <div>
                <p style={{ fontWeight: 'bold', color: YASHODA_PRIMARY }}>Accepted By</p>
                <div style={{ height: '40px' }} />
                <p style={{ fontSize: '10px', color: '#555' }}>Signature: ________________<br/>Date: ________________</p>
              </div>
            </div>
            <PageFooter />
          </div>
        </div>
      </div>
    </div>
  );
};
export default YashodaOfferLetter;
