import { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Link } from "react-router-dom";
import { Download, Settings2, Check } from "lucide-react";

const YASHODA_PRIMARY = "#34316E";
const YASHODA_ACCENT = "#F58634";

const YashodaOfferLetter = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [activeTab, setActiveTab] = useState<"form" | "preview">("form");

  const [formData, setFormData] = useState({
    date: "15-Sep-2023",
    referenceNo: "YH/HR/2023/1084",
    candidateName: "Mr. Irfan Shaik",
    candidateAddress: "202, Avalon Apartments, Nanal Nagar",
    cityStatePin: "Hyderabad, Telangana - 500028",
    designation: "Senior Lab Technician",
    department: "Pathology Laboratory",
    joiningDate: "09-Oct-2023",
    location: "Somajiguda, Hyderabad",
    probationPeriod: "Six (6)",
    basic: "40,000",
    hra: "20,000",
    conveyance: "1,600",
    medicalAllowance: "1,250",
    specialAllowance: "24,350",
    grossSalary: "87,200",
    pfDeduction: "1,800",
    ptDeduction: "200",
    totalDeductions: "2,000",
    netSalary: "85,200",
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
      
      pdf.save(`Yashoda_Offer_Letter_${formData.candidateName ? formData.candidateName.replace(' ', '_') : 'Document'}.pdf`);
    } catch (error) {
      console.error('Export failed', error);
      alert('Failed to export PDF');
    } finally {
      setIsExporting(false);
    }
  };

  const PageHeader = () => (
    <div className="w-full mb-8 relative">
      <div className="flex items-center justify-between pb-4">
        <div>
          <img src="/yashoda-logo.png" alt="Yashoda Hospitals" style={{ height: "55px", objectFit: "contain" }} />
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

  const PageFooter = ({ pageNumber }: { pageNumber: string }) => (
    <div className="w-full" style={{ position: 'absolute', bottom: '15mm', left: 0, right: 0, paddingLeft: '15mm', paddingRight: '15mm' }}>
      <div style={{ height: '1px', background: '#cbd5e1', width: '100%', marginBottom: '8px' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: '#64748b', fontFamily: 'Arial, sans-serif' }}>
        <span style={{ fontWeight: 'bold' }}>CIN: U85110TG1999PTC031267</span>
        <span>Page {pageNumber} of 2</span>
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
          <span className="text-slate-800 font-bold border-l border-slate-300 pl-4">Offer Letter Generator</span>
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
            <h2 className="text-xl font-bold mb-6 text-slate-800" style={{ color: YASHODA_PRIMARY }}>Offer Details</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["Reference No", "referenceNo"], ["Date", "date"]
                ].map(([lbl, name]) => (
                  <div key={name}>
                    <label className="block text-xs font-bold text-slate-700 mb-1">{lbl}</label>
                    <input className="w-full p-2 text-sm border border-slate-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500" name={name} value={formData[name as keyof typeof formData]} onChange={handleChange} />
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-200 pt-4 mt-2">
                <h3 className="text-sm font-bold text-slate-800 mb-3">Candidate Info</h3>
                {[
                  ["Candidate Name (with salutation)", "candidateName"], ["Address Line 1", "candidateAddress"], ["City, State, Pincode", "cityStatePin"]
                ].map(([lbl, name]) => (
                  <div key={name} className="mb-3">
                    <label className="block text-xs font-bold text-slate-700 mb-1">{lbl}</label>
                    <input className="w-full p-2 text-sm border border-slate-300 rounded focus:border-blue-500" name={name} value={formData[name as keyof typeof formData]} onChange={handleChange} />
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-200 pt-4 mt-2">
                <h3 className="text-sm font-bold text-slate-800 mb-3">Employment Info</h3>
                <div className="grid grid-cols-2 gap-4 mb-3">
                  {[
                    ["Designation", "designation"], ["Department", "department"],
                    ["Location", "location"], ["Joining Date", "joiningDate"]
                  ].map(([lbl, name]) => (
                    <div key={name}>
                      <label className="block text-xs font-bold text-slate-700 mb-1">{lbl}</label>
                      <input className="w-full p-2 text-sm border border-slate-300 rounded focus:border-blue-500" name={name} value={formData[name as keyof typeof formData]} onChange={handleChange} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-200 pt-4 mt-2 pb-8">
                <h3 className="text-sm font-bold text-slate-800 mb-3">Salary Breakup (Monthly)</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    ["Basic Pay", "basic"], ["HRA", "hra"],
                    ["Conveyance", "conveyance"], ["Medical", "medicalAllowance"],
                    ["Special Allowance", "specialAllowance"], ["Gross Salary", "grossSalary"],
                    ["PF Deduction", "pfDeduction"], ["PT Deduction", "ptDeduction"],
                    ["Total Deductions", "totalDeductions"], ["Net Salary", "netSalary"]
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

          {/* PAGE 1: Offer Letter & Core Terms */}
          <div className="print-page bg-white shadow-2xl relative" style={{ width: '210mm', minHeight: '297mm', padding: '15mm', paddingBottom: '25mm', fontFamily: '"Arial", sans-serif', fontSize: '10.5pt', color: '#111' }}>
            {/* Watermark */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.12, zIndex: 0, pointerEvents: 'none' }}>
              <img src="/yashoda-icon.png" style={{ width: '120mm' }} />
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <PageHeader />

              <div className="flex justify-between mb-8" style={{ fontSize: '10pt' }}>
                <div>
                  <p><strong>Ref:</strong> {formData.referenceNo}</p>
                  <p><strong>Date:</strong> {formData.date}</p>
                </div>
              </div>

              <div className="mb-6">
                <p style={{ fontWeight: 'bold' }}>To,</p>
                <p style={{ fontWeight: 'bold' }}>{formData.candidateName},</p>
                <p>{formData.candidateAddress},</p>
                <p>{formData.cityStatePin}.</p>
              </div>

              <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                <p style={{ fontWeight: 'bold', fontSize: '13pt', color: '#000', textDecoration: 'underline' }}>SUBJECT: APPOINTMENT LETTER</p>
              </div>

              <p style={{ marginBottom: '16px' }}>Dear <strong>{formData.candidateName}</strong>,</p>

              <p style={{ marginBottom: '16px', textAlign: 'justify', lineHeight: '1.6' }}>
                With reference to your application and the subsequent interviews you had with our management, we are pleased to appoint you as <strong>"{formData.designation}"</strong> in the <strong>{formData.department}</strong> department at <strong>{formData.location}</strong>.
              </p>

              <p style={{ marginBottom: '16px', textAlign: 'justify', lineHeight: '1.6' }}>
                We are delighted to welcome you to the Yashoda Hospitals family. Your employment with us will be governed by the following terms and conditions:
              </p>

              <div style={{ paddingLeft: '10px' }}>
                <h4 style={{ fontWeight: 'bold', marginBottom: '4px', color: YASHODA_PRIMARY }}>1. Date of Joining & Posting</h4>
                <p style={{ marginBottom: '16px', textAlign: 'justify', lineHeight: '1.6' }}>
                  You are required to report for duty on or before <strong>{formData.joiningDate}</strong>. Your initial place of posting will be at our Secunderabad facility. However, your services are transferable to any of the branches, clinics, or subsidiary units of Yashoda Healthcare Services Pvt. Ltd. based on organizational requirements.
                </p>

                <h4 style={{ fontWeight: 'bold', marginBottom: '4px', color: YASHODA_PRIMARY }}>2. Probation & Confirmation</h4>
                <p style={{ marginBottom: '16px', textAlign: 'justify', lineHeight: '1.6' }}>
                  You will be on probation for a period of <strong>{formData.probationPeriod} months</strong> from your date of joining. During this period, your performance will be closely evaluated. Upon satisfactory completion of your probation, your services will be confirmed in writing. Unless explicitly confirmed in writing, you will continue to be on probation.
                </p>

                <h4 style={{ fontWeight: 'bold', marginBottom: '4px', color: YASHODA_PRIMARY }}>3. Remuneration</h4>
                <p style={{ marginBottom: '16px', textAlign: 'justify', lineHeight: '1.6' }}>
                  Your Monthly Gross Salary will be <strong>Rs. {formData.grossSalary}/-</strong>. A detailed breakup of your compensation, including statutory deductions, is enclosed in <strong>Annexure A</strong>. Your salary is strictly confidential and should not be discussed with anyone other than the Human Resources department.
                </p>

                <h4 style={{ fontWeight: 'bold', marginBottom: '4px', color: YASHODA_PRIMARY }}>4. Medical Fitness</h4>
                <p style={{ marginBottom: '16px', textAlign: 'justify', lineHeight: '1.6' }}>
                  This appointment is subject to you being found medically, physically, and mentally fit by the Medical Board of Yashoda Hospitals. If any discrepancies are found in your health declaration, the management reserves the right to terminate your employment.
                </p>
              </div>
            </div>
            <PageFooter pageNumber="1" />
          </div>

          {/* PAGE 2: Terms & Conditions Continued */}
          <div className="print-page bg-white shadow-2xl relative" style={{ width: '210mm', minHeight: '297mm', padding: '15mm', paddingBottom: '25mm', fontFamily: '"Arial", sans-serif', fontSize: '10.5pt', color: '#111' }}>
            {/* Watermark */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.12, zIndex: 0, pointerEvents: 'none' }}>
              <img src="/yashoda-icon.png" style={{ width: '120mm' }} />
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <PageHeader />

              <div style={{ paddingLeft: '10px', marginTop: '20px' }}>
                <h4 style={{ fontWeight: 'bold', marginBottom: '4px', color: YASHODA_PRIMARY }}>5. Working Hours & Shifts</h4>
                <p style={{ marginBottom: '16px', textAlign: 'justify', lineHeight: '1.6' }}>
                  Given the nature of the healthcare industry, you will be required to work in shifts (including night shifts) as per the duty roster prepared by your departmental head. You may also be required to work extended hours, on public holidays, or on your weekly off days to manage patient care emergencies.
                </p>

                <h4 style={{ fontWeight: 'bold', marginBottom: '4px', color: YASHODA_PRIMARY }}>6. Confidentiality & Code of Conduct</h4>
                <p style={{ marginBottom: '16px', textAlign: 'justify', lineHeight: '1.6' }}>
                  You shall maintain absolute secrecy and confidentiality regarding all patient records, medical histories, hospital data, and business strategies. You are strictly bound by the NABH & HIPAA compliance standards followed by the hospital. Any breach of confidentiality will lead to immediate termination and legal action.
                </p>

                <h4 style={{ fontWeight: 'bold', marginBottom: '4px', color: YASHODA_PRIMARY }}>7. Background Verification</h4>
                <p style={{ marginBottom: '16px', textAlign: 'justify', lineHeight: '1.6' }}>
                  The hospital reserves the right to conduct a comprehensive background check of your educational credentials, previous employment history, and criminal records. If any information provided by you is found to be false or misrepresented, this appointment shall be deemed null and void.
                </p>

                <h4 style={{ fontWeight: 'bold', marginBottom: '4px', color: YASHODA_PRIMARY }}>8. Notice Period & Termination</h4>
                <p style={{ marginBottom: '16px', textAlign: 'justify', lineHeight: '1.6' }}>
                  During your probationary period, either party may terminate this employment contract by providing <strong>15 days' notice</strong> in writing or salary in lieu thereof. Post confirmation, the notice period shall be <strong>30 days</strong>. The management reserves the right to terminate your employment immediately without notice in cases involving gross misconduct, negligence of duty, or insubordination.
                </p>
              </div>

              <p style={{ marginBottom: '24px', marginTop: '40px', textAlign: 'justify', lineHeight: '1.6' }}>
                Please return the duplicate copy of this letter, duly signed on all pages, as a token of your acceptance of this offer and the terms and conditions mentioned herein.
              </p>

              <p style={{ marginBottom: '40px' }}>We welcome you to Yashoda Hospitals and look forward to a long and mutually beneficial association.</p>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
                <div>
                  <p>Yours Sincerely,</p>
                  <p style={{ fontWeight: 'bold', color: YASHODA_PRIMARY, marginTop: '4px' }}>For YASHODA HOSPITALS</p>
                  <div style={{ height: '50px' }} />
                  <p style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Authorized Signatory</p>
                  <p>Human Resources</p>
                </div>
                <div style={{ textAlign: 'center', marginRight: '20px' }}>
                  <p style={{ fontWeight: 'bold' }}>Accepted By</p>
                  <div style={{ height: '50px' }} />
                  <p style={{ fontWeight: 'bold', borderTop: '1px solid #000', paddingTop: '4px' }}>Signature & Date</p>
                </div>
              </div>
            </div>
            <PageFooter pageNumber="2" />
          </div>


          {/* PAGE 3: Annexure A */}
          <div className="print-page bg-white shadow-2xl relative" style={{ width: '210mm', minHeight: '297mm', padding: '15mm', paddingBottom: '25mm', fontFamily: '"Arial", sans-serif', fontSize: '11pt', color: '#111' }}>
            {/* Watermark */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.12, zIndex: 0, pointerEvents: 'none' }}>
              <img src="/yashoda-icon.png" style={{ width: '120mm' }} />
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <PageHeader />

              <div style={{ textAlign: 'center', marginBottom: '24px', marginTop: '20px' }}>
                <p style={{ fontWeight: 'bold', fontSize: '14pt', color: YASHODA_PRIMARY, textDecoration: 'underline' }}>ANNEXURE - A</p>
                <p style={{ fontSize: '11pt', marginTop: '8px', fontWeight: 'bold' }}>COMPENSATION & BENEFITS</p>
              </div>

              <div style={{ marginBottom: '24px', background: '#f8fafc', padding: '15px', border: '1px solid #e2e8f0', borderRadius: '4px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '25%', padding: '4px 0', fontWeight: 'bold', color: '#475569' }}>Name</td>
                      <td style={{ width: '75%', padding: '4px 0', fontWeight: 'bold' }}>: {formData.candidateName}</td>
                    </tr>
                    <tr>
                      <td style={{ width: '25%', padding: '4px 0', fontWeight: 'bold', color: '#475569' }}>Designation</td>
                      <td style={{ width: '75%', padding: '4px 0', fontWeight: 'bold' }}>: {formData.designation}</td>
                    </tr>
                    <tr>
                      <td style={{ width: '25%', padding: '4px 0', fontWeight: 'bold', color: '#475569' }}>Department</td>
                      <td style={{ width: '75%', padding: '4px 0', fontWeight: 'bold' }}>: {formData.department}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #cbd5e1', fontSize: '10pt' }}>
                <thead>
                  <tr>
                    <th style={{ border: '1px solid #cbd5e1', padding: '12px', textAlign: 'left', backgroundColor: YASHODA_PRIMARY, color: 'white', width: '60%' }}>SALARY COMPONENTS</th>
                    <th style={{ border: '1px solid #cbd5e1', padding: '12px', textAlign: 'right', backgroundColor: YASHODA_PRIMARY, color: 'white', width: '40%' }}>AMOUNT (RS. PER MONTH)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ backgroundColor: '#f1f5f9' }}>
                    <td colSpan={2} style={{ border: '1px solid #cbd5e1', padding: '8px 12px', fontWeight: 'bold', color: YASHODA_ACCENT }}>EARNINGS</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', paddingLeft: '20px' }}>Basic Pay</td>
                    <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', textAlign: 'right', fontWeight: '500' }}>{formData.basic}</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', paddingLeft: '20px' }}>House Rent Allowance (HRA)</td>
                    <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', textAlign: 'right', fontWeight: '500' }}>{formData.hra}</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', paddingLeft: '20px' }}>Conveyance Allowance</td>
                    <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', textAlign: 'right', fontWeight: '500' }}>{formData.conveyance}</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', paddingLeft: '20px' }}>Medical Allowance</td>
                    <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', textAlign: 'right', fontWeight: '500' }}>{formData.medicalAllowance}</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', paddingLeft: '20px' }}>Special Allowance</td>
                    <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', textAlign: 'right', fontWeight: '500' }}>{formData.specialAllowance}</td>
                  </tr>
                  <tr style={{ backgroundColor: '#e2e8f0' }}>
                    <td style={{ border: '1px solid #cbd5e1', padding: '10px 12px', fontWeight: 'bold' }}>A. GROSS SALARY</td>
                    <td style={{ border: '1px solid #cbd5e1', padding: '10px 12px', textAlign: 'right', fontWeight: 'bold' }}>{formData.grossSalary}</td>
                  </tr>

                  <tr style={{ backgroundColor: '#f1f5f9' }}>
                    <td colSpan={2} style={{ border: '1px solid #cbd5e1', padding: '8px 12px', fontWeight: 'bold', color: '#ef4444' }}>DEDUCTIONS</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', paddingLeft: '20px' }}>Provident Fund (Employee Share)</td>
                    <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', textAlign: 'right', fontWeight: '500' }}>{formData.pfDeduction}</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', paddingLeft: '20px' }}>Professional Tax</td>
                    <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', textAlign: 'right', fontWeight: '500' }}>{formData.ptDeduction}</td>
                  </tr>
                  <tr style={{ backgroundColor: '#e2e8f0' }}>
                    <td style={{ border: '1px solid #cbd5e1', padding: '10px 12px', fontWeight: 'bold' }}>B. TOTAL DEDUCTIONS</td>
                    <td style={{ border: '1px solid #cbd5e1', padding: '10px 12px', textAlign: 'right', fontWeight: 'bold' }}>{formData.totalDeductions}</td>
                  </tr>
                  <tr style={{ borderTop: `2px solid ${YASHODA_PRIMARY}` }}>
                    <td style={{ border: '1px solid #cbd5e1', padding: '14px 12px', fontWeight: 'bold', color: YASHODA_PRIMARY, fontSize: '12pt' }}>NET TAKE HOME SALARY (A - B)</td>
                    <td style={{ border: '1px solid #cbd5e1', padding: '14px 12px', textAlign: 'right', fontWeight: '900', color: YASHODA_PRIMARY, fontSize: '13pt' }}>{formData.netSalary}</td>
                  </tr>
                </tbody>
              </table>

              <div style={{ marginTop: '20px', fontSize: '9pt', color: '#64748b' }}>
                <p>* Note: Income Tax, TDS, and other statutory deductions will be applicable as per Government of India rules.</p>
                <p>* Your salary structure is strictly confidential.</p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '60px' }}>
                <div>
                  <p style={{ fontWeight: 'bold', color: YASHODA_PRIMARY }}>For YASHODA HOSPITALS</p>
                  <div style={{ height: '40px' }} />
                  <p style={{ fontWeight: 'bold' }}>Authorized Signatory</p>
                </div>
                <div style={{ textAlign: 'center', marginRight: '20px' }}>
                  <div style={{ height: '60px' }} />
                  <p style={{ fontWeight: 'bold', borderTop: '1px solid #000', paddingTop: '4px' }}>Candidate Signature</p>
                </div>
              </div>
            </div>
            <PageFooter pageNumber="3" />
          </div>

        </div>
      </div>
    </div>
  );
};
export default YashodaOfferLetter;
