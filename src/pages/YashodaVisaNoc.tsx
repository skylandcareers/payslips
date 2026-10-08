import { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Link } from "react-router-dom";
import { Download, Settings2, Check } from "lucide-react";

const YASHODA_PRIMARY = "#34316E";
const YASHODA_ACCENT = "#F58634";

const YashodaVisaNoc = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [activeTab, setActiveTab] = useState<"form" | "preview">("form");

  const [formData, setFormData] = useState({
    date: new Date().toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" }),
    referenceNo: "YH/HR/2026/NOC-1042",
    visaOffice: "Consulate General of France",
    visaCity: "Bengaluru",
    candidateName: "Irfan Shaik",
    designation: "Senior Lab Technician",
    department: "Pathology",
    joiningDate: "09-Oct-2023",
    passportNumber: "AG944613",
    country: "France",
    purpose: "attend the Journées de l'Innovation en Biologie (JIB 2026) conference in Paris",
    leaveStartDate: "17-Nov-2026",
    leaveEndDate: "22-Nov-2026",
    resumeDutyDate: "23-Nov-2026",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleExportPDF = async () => {
    try {
      setIsExporting(true);
      
      // Allow DOM to settle
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const pagesElements = document.querySelectorAll('.print-page');
      if (pagesElements.length === 0) throw new Error('Page elements not found');

      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      for (let i = 0; i < pagesElements.length; i++) {
        const pageEl = pagesElements[i] as HTMLElement;
        const canvas = await html2canvas(pageEl, {
          scale: 1.5,
          useCORS: true,
          logging: false,
          backgroundColor: '#ffffff'
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.9);
        
        if (i > 0) pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');
      }
      
      pdf.save(`Yashoda_Visa_NOC_${formData.candidateName ? formData.candidateName.replace(' ', '_') : 'Document'}.pdf`);
    } catch (error) {
      console.error('Export failed', error);
      alert('Failed to export PDF');
    } finally {
      setIsExporting(false);
    }
  };

  const PageHeader = () => (
    <div className="w-full mb-10 relative">
      <div className="flex items-center justify-between pb-4">
        <div>
          <img src="/yashoda-logo.png" alt="Yashoda Hospitals" style={{ height: "60px", objectFit: "contain" }} />
        </div>
        <div className="text-right" style={{ fontSize: '10px', lineHeight: '1.4', color: '#475569', fontFamily: '"Arial", sans-serif' }}>
          <p style={{ color: YASHODA_PRIMARY, fontWeight: '900', fontSize: '12px', marginBottom: '2px', letterSpacing: '0.5px' }}>YASHODA HEALTHCARE SERVICES PVT. LTD.</p>
          <p>CIN: U85110TG1999PTC031267</p>
          <p>Yashoda House, Plot #64, Nagarjuna Hills,</p>
          <p>Punjagutta, Hyderabad, Telangana – 500082</p>
          <p>Ph: +91 40 4567 4567 | www.yashodahospitals.com</p>
        </div>
      </div>
      <div style={{ height: '3px', background: YASHODA_PRIMARY, width: '100%' }} />
      <div style={{ height: '1.5px', background: YASHODA_ACCENT, width: '100%', marginTop: '1px' }} />
    </div>
  );

  const PageFooter = () => (
    <div className="w-full" style={{ position: 'absolute', bottom: '15mm', left: 0, right: 0, paddingLeft: '15mm', paddingRight: '15mm' }}>
      <div style={{ height: '1px', background: '#cbd5e1', width: '100%', marginBottom: '8px' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: '#64748b', fontFamily: 'Arial, sans-serif' }}>
        <span style={{ fontWeight: 'bold' }}>CIN: U85110TG1999PTC031267</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col print:bg-transparent print:text-black">
      <style>{`
        @media print { 
          @page { size: A4; margin: 0; } 
          body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; background: white !important; } 
          .no-print { display: none !important; } 
          .print-page { margin: 0 !important; box-shadow: none !important; position: relative; min-height: 297mm; page-break-after: always; overflow: hidden; } 
        }
      `}</style>

      <div className="no-print flex items-center justify-between px-6 py-4 bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link to="/yashoda" className="text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium">← Back to Dashboard</Link>
          <span className="text-slate-800 font-bold border-l border-slate-300 pl-4">Visa NOC Generator</span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setActiveTab(activeTab === "form" ? "preview" : "form")} className="px-4 py-2 rounded-lg text-sm font-medium border border-slate-300 hover:border-slate-400 bg-white text-slate-700 transition-colors flex items-center gap-2">
            <Settings2 className="w-4 h-4" /> {activeTab === "form" ? "Preview" : "Edit Details"}
          </button>
          <button onClick={handleExportPDF} disabled={isExporting} className="px-5 py-2 rounded-lg text-sm font-bold text-white flex items-center gap-2 transition-all shadow-md hover:opacity-90" style={{ background: YASHODA_PRIMARY }}>
            {isExporting ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />} Print / Export PDF
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {activeTab === "form" && (
          <div className="no-print w-full max-w-md bg-white overflow-y-auto p-6 border-r border-slate-200 flex-shrink-0 shadow-lg z-10">
            <h2 className="text-xl font-bold mb-6 text-slate-800" style={{ color: YASHODA_PRIMARY }}>NOC Details</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["Reference No", "referenceNo"], ["Date", "date"]
                ].map(([lbl, name]) => (
                  <div key={name}>
                    <label className="block text-xs font-bold text-slate-700 mb-1">{lbl}</label>
                    <input className="w-full p-2 text-sm border border-slate-300 rounded focus:border-blue-500" name={name} value={formData[name as keyof typeof formData]} onChange={handleChange} />
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-200 pt-4 mt-2">
                <h3 className="text-sm font-bold text-slate-800 mb-3">Visa Office</h3>
                <div className="grid grid-cols-2 gap-4 mb-3">
                  {[
                    ["Visa Office (e.g. Consulate)", "visaOffice"], ["City", "visaCity"]
                  ].map(([lbl, name]) => (
                    <div key={name}>
                      <label className="block text-xs font-bold text-slate-700 mb-1">{lbl}</label>
                      <input className="w-full p-2 text-sm border border-slate-300 rounded focus:border-blue-500" name={name} value={formData[name as keyof typeof formData]} onChange={handleChange} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-200 pt-4 mt-2">
                <h3 className="text-sm font-bold text-slate-800 mb-3">Employee Info</h3>
                <div className="grid grid-cols-2 gap-4 mb-3">
                  {[
                    ["Employee Name", "candidateName"], ["Passport Number", "passportNumber"],
                    ["Designation", "designation"], ["Department", "department"],
                    ["Date of Joining", "joiningDate"]
                  ].map(([lbl, name]) => (
                    <div key={name}>
                      <label className="block text-xs font-bold text-slate-700 mb-1">{lbl}</label>
                      <input className="w-full p-2 text-sm border border-slate-300 rounded focus:border-blue-500" name={name} value={formData[name as keyof typeof formData]} onChange={handleChange} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-200 pt-4 mt-2 pb-8">
                <h3 className="text-sm font-bold text-slate-800 mb-3">Travel & Leave Info</h3>
                <div className="mb-3">
                  <label className="block text-xs font-bold text-slate-700 mb-1">Destination Country</label>
                  <input className="w-full p-2 text-sm border border-slate-300 rounded focus:border-blue-500" name="country" value={formData.country} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="block text-xs font-bold text-slate-700 mb-1">Purpose of Visit</label>
                  <input className="w-full p-2 text-sm border border-slate-300 rounded focus:border-blue-500" name="purpose" value={formData.purpose} onChange={handleChange} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    ["Leave Start Date", "leaveStartDate"], ["Leave End Date", "leaveEndDate"],
                    ["Resume Duty Date", "resumeDutyDate"]
                  ].map(([lbl, name]) => (
                    <div key={name}>
                      <label className="block text-xs font-bold text-slate-700 mb-1">{lbl}</label>
                      <input className="w-full p-2 text-sm border border-slate-300 rounded focus:border-blue-500" name={name} value={formData[name as keyof typeof formData]} onChange={handleChange} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className={`flex-1 overflow-y-auto bg-slate-200 flex flex-col items-center py-10 print:bg-white print:p-0 gap-10 print:gap-0 ${activeTab === "form" ? "hidden md:flex" : "flex"}`}>

          <div className="print-page bg-white shadow-2xl relative" style={{ width: '210mm', minHeight: '297mm', padding: '15mm', paddingBottom: '25mm', fontFamily: '"Arial", sans-serif', fontSize: '11pt', color: '#111' }}>

            {/* Watermark */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.08, zIndex: 0, pointerEvents: 'none' }}>
              <img src="/yashoda-icon.png" style={{ width: '120mm' }} />
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <PageHeader />

              <div className="flex justify-between mb-10" style={{ fontSize: '10pt' }}>
                <div>
                  <p><strong>Ref:</strong> {formData.referenceNo}</p>
                </div>
                <div>
                  <p><strong>Date:</strong> {formData.date}</p>
                </div>
              </div>

              <div className="mb-8">
                <p style={{ fontWeight: 'bold' }}>To,</p>
                <p style={{ fontWeight: 'bold' }}>The Visa Officer,</p>
                <p>{formData.visaOffice},</p>
                <p>{formData.visaCity}.</p>
              </div>

              <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <p style={{ fontWeight: 'bold', fontSize: '13pt', color: '#000', textDecoration: 'underline' }}>
                  SUBJECT: NO OBJECTION CERTIFICATE & LEAVE SANCTION
                </p>
              </div>

              <p style={{ marginBottom: '20px' }}>Dear Sir/Madam,</p>

              <p style={{ marginBottom: '20px', textAlign: 'justify', lineHeight: '1.6' }}>
                This is to certify that <strong>{formData.candidateName}</strong> (Passport Number: <strong>{formData.passportNumber}</strong>) is a permanent employee of Yashoda Hospitals. They have been working with us since <strong>{formData.joiningDate}</strong> and are currently holding the position of <strong>{formData.designation}</strong> in the <strong>{formData.department}</strong> department.
              </p>

              <p style={{ marginBottom: '20px', textAlign: 'justify', lineHeight: '1.6' }}>
                We understand that {formData.candidateName} is applying for a visa to travel to <strong>{formData.country}</strong> to <strong>{formData.purpose}</strong>.
              </p>

              <p style={{ marginBottom: '20px', textAlign: 'justify', lineHeight: '1.6' }}>
                Please be informed that Yashoda Hospitals has <strong>No Objection</strong> to their travel to {formData.country}. We have officially sanctioned their approved leave from <strong>{formData.leaveStartDate}</strong> to <strong>{formData.leaveEndDate}</strong>.
              </p>

              <p style={{ marginBottom: '30px', textAlign: 'justify', lineHeight: '1.6' }}>
                {formData.candidateName} is expected to return to India and resume his/her normal duties on <strong>{formData.resumeDutyDate}</strong>. All expenses pertaining to this travel, including accommodation and medical insurance, will be borne by the employee.
              </p>

              <p style={{ marginBottom: '40px' }}>
                We kindly request you to grant him/her the necessary visa to facilitate this travel. Should you require any further information, please feel free to contact us.
              </p>

              <div style={{ marginTop: '50px' }}>
                <p>Yours faithfully,</p>
                <p style={{ fontWeight: 'bold', color: YASHODA_PRIMARY, marginTop: '4px' }}>For YASHODA HOSPITALS</p>
                <div style={{ height: '60px' }} />
                <p style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Authorized Signatory</p>
                <p>Human Resources</p>
              </div>
            </div>
            <PageFooter />
          </div>

        </div>
      </div>
    </div>
  );
};
export default YashodaVisaNoc;
