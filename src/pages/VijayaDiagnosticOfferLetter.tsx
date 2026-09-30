import { useState } from "react";
import { Link } from "react-router-dom";
import { Download, Settings2, Check } from "lucide-react";

// Exact Vijaya Diagnostic Centre brand colors from official logo
const VDC_PRIMARY = "#312783"; // Indigo - text/headers
const VDC_SECONDARY = "#312783"; // Indigo - secondary
const VDC_ACCENT = "#e20714"; // Red - cross/highlights
const LOGO = "/vijaya-diagnostic-logo.webp";

const VijayaDiagnosticOfferLetter = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [activeTab, setActiveTab] = useState<"form" | "preview">("form");

  const [formData, setFormData] = useState({
    date: new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" }),
    referenceNo: "VDC/HR/2026/001",
    candidateName: "Irfan Shaik",
    candidateAddress: "Flat 4B, Sunrise Apartments, Banjara Hills",
    cityStatePin: "Hyderabad, Telangana – 500034",
    contactNumber: "+91 98765 43210",
    emailId: "priya.sharma@example.com",
    role: "Senior Lab Technician",
    department: "Radiology & Imaging",
    reportsTo: "Dr. Ravi Kumar (Head of Radiology)",
    employmentType: "Full-time / Permanent",
    workLocation: "Vijaya Diagnostic Centre, Punjagutta, Hyderabad",
    joiningDate: "October 15, 2026",
    workingHours: "Monday to Saturday, 8:00 AM to 5:00 PM",
    annualCTC: "6,00,000",
    annualCTCWords: "Six Lakhs",
    probationPeriod: "6",
    noticePeriodProbation: "30",
    noticePeriodConfirmed: "60",
    signatoryName: "K. Suresh Reddy",
    signatoryDesignation: "General Manager – Human Resources",
    companyReg: "L85110TG1981PLC003064",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleExportPDF = () => {
    setIsExporting(true);
    setTimeout(() => {
      window.print();
      setIsExporting(false);
    }, 200);
  };

  const numberToWords = (num: number): string => {
    if (num === 0) return "Zero";
    const a = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    const convert = (n: number): string => {
      if (n < 20) return a[n];
      if (n < 100) return b[Math.floor(n / 10)] + (n % 10 !== 0 ? " " + a[n % 10] : "");
      if (n < 1000) return a[Math.floor(n / 100)] + " Hundred" + (n % 100 !== 0 ? " and " + convert(n % 100) : "");
      if (n < 100000) return convert(Math.floor(n / 1000)) + " Thousand" + (n % 1000 !== 0 ? " " + convert(n % 1000) : "");
      if (n < 10000000) return convert(Math.floor(n / 100000)) + " Lakh" + (n % 100000 !== 0 ? " " + convert(n % 100000) : "");
      return convert(Math.floor(n / 10000000)) + " Crore" + (n % 10000000 !== 0 ? " " + convert(n % 10000000) : "");
    };
    return convert(num);
  };

  const ctcNum = parseInt(formData.annualCTC.replace(/,/g, "")) || 0;
  const fmt = (n: number) => Math.round(n).toLocaleString("en-IN");
  const basicMonthly = Math.round((ctcNum / 12) * 0.40);
  const hraMonthly = Math.round(basicMonthly * 0.40);
  const daMonthly = Math.round((ctcNum / 12) * 0.08);
  const specialMonthly = Math.round((ctcNum / 12) - basicMonthly - hraMonthly - daMonthly - 1800 - 200);
  const grossMonthly = basicMonthly + hraMonthly + daMonthly + specialMonthly;
  const pfMonthly = 1800;
  const ptMonthly = 200;
  const netMonthly = grossMonthly - pfMonthly - ptMonthly;

  const PageHeader = () => (
    <div className="w-full" style={{ borderBottom: `4px solid ${VDC_ACCENT}`, paddingBottom: '12px', marginBottom: '18px' }}>
      <div className="flex justify-between items-center">
        <img src={LOGO} alt="Vijaya Diagnostic Centre" style={{ height: '64px', width: 'auto', objectFit: 'contain' }} />
        <div className="text-right" style={{ fontSize: '9px', lineHeight: '1.6', color: '#555', fontFamily: 'Arial, sans-serif' }}>
          <p style={{ color: VDC_SECONDARY, fontWeight: 'bold', fontSize: '12px', marginBottom: '2px', letterSpacing: '0.5px' }}>VIJAYA DIAGNOSTIC CENTRE LIMITED</p>
          <p>6-3-883/F, Ground Floor, FPAI Building,</p>
          <p>Near Topaz Building, Punjagutta, Hyderabad – 500082</p>
          <p style={{ marginTop: '3px' }}>
            <span style={{ color: '#999' }}>Ph:</span> 9240 222 222 &nbsp;|&nbsp;
            <span style={{ color: '#999' }}>W:</span> www.vijayadiagnostic.com
          </p>
          <p><span style={{ color: '#999' }}>CIN:</span> {formData.companyReg}</p>
        </div>
      </div>
    </div>
  );

  const PageFooter = () => (
    <div className="w-full" style={{ borderTop: `1px solid #e0e0e0`, marginTop: '24px', paddingTop: '8px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8px', color: '#888', fontFamily: 'Arial, sans-serif' }}>
        <span style={{ color: VDC_SECONDARY, fontWeight: 'bold', letterSpacing: '0.5px' }}>VIJAYA DIAGNOSTIC CENTRE LIMITED</span>
        <span>6-3-883/F, Punjagutta, Hyderabad – 500082 | CIN: {formData.companyReg}</span>
        <span>www.vijayadiagnostic.com</span>
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
          .print-page {
            width: 210mm; min-height: 297mm; padding: 12mm 16mm; background: white !important;
            font-family: Arial, sans-serif; color: #111; page-break-after: always; box-sizing: border-box;
            display: flex; flex-direction: column;
          }
          .print-page:last-child { page-break-after: avoid; }
        }
        .form-input {
          width: 100%; padding: 8px 12px; border-radius: 8px; border: 1px solid #cbd5e1;
          background: #ffffff; color: #0f172a; font-size: 13px; outline: none;
          transition: border-color 0.2s;
        }
        .form-input:focus { border-color: ${VDC_ACCENT}; }
      `}</style>

      {/* Top Bar */}
      <div className="no-print flex items-center justify-between px-6 py-4 bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link to="/vijaya-diagnostic" className="text-slate-500 hover:text-slate-900 transition-colors text-sm flex items-center gap-1">
            ← Back
          </Link>
          <img src={LOGO} alt="VDC" className="h-8 w-auto object-contain" />
          <span className="text-slate-800 font-semibold">Offer Letter Generator</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab(activeTab === "form" ? "preview" : "form")}
            className="px-4 py-2 rounded-lg text-sm font-medium border border-slate-300 hover:border-slate-400 bg-white text-slate-700 transition-colors flex items-center gap-2"
          >
            <Settings2 className="w-4 h-4" />
            {activeTab === "form" ? "Preview" : "Edit Form"}
          </button>
          <button
            onClick={handleExportPDF}
            disabled={isExporting}
            className="px-5 py-2 rounded-lg text-sm font-semibold text-slate-800 flex items-center gap-2 transition-all"
            style={{ background: VDC_ACCENT }}
          >
            {isExporting ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />}
            {isExporting ? "Opening..." : "Export PDF"}
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">

        {/* Form Panel */}
        {activeTab === "form" && (
          <div className="no-print w-full max-w-lg bg-white overflow-y-auto p-6 border-r border-slate-200 flex-shrink-0">
            <h2 className="text-lg font-bold mb-6 text-slate-800 flex items-center gap-2">
              <Settings2 className="w-5 h-5" style={{ color: VDC_ACCENT }} /> Edit Details
            </h2>
            <div className="space-y-4">
              {[
                { label: "Date", name: "date" },
                { label: "Reference No.", name: "referenceNo" },
                { label: "Candidate Name", name: "candidateName" },
                { label: "Address Line", name: "candidateAddress" },
                { label: "City, State & PIN", name: "cityStatePin" },
                { label: "Contact Number", name: "contactNumber" },
                { label: "Email ID", name: "emailId" },
                { label: "Role / Designation", name: "role" },
                { label: "Department", name: "department" },
                { label: "Reports To", name: "reportsTo" },
                { label: "Employment Type", name: "employmentType" },
                { label: "Work Location", name: "workLocation" },
                { label: "Joining Date", name: "joiningDate" },
                { label: "Working Hours", name: "workingHours" },
                { label: "Annual CTC (₹)", name: "annualCTC" },
                { label: "Annual CTC (Words)", name: "annualCTCWords" },
                { label: "Probation Period (months)", name: "probationPeriod" },
                { label: "Notice Period – Probation (days)", name: "noticePeriodProbation" },
                { label: "Notice Period – Confirmed (days)", name: "noticePeriodConfirmed" },
                { label: "Signatory Name", name: "signatoryName" },
                { label: "Signatory Designation", name: "signatoryDesignation" },
                { label: "CIN", name: "companyReg" },
              ].map(({ label, name }) => (
                <div key={name}>
                  <label className="block text-xs font-medium text-slate-600 mb-1">{label}</label>
                  <input
                    className="form-input"
                    name={name}
                    value={formData[name as keyof typeof formData]}
                    onChange={handleChange}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Preview */}
        <div className={`flex-1 overflow-y-auto bg-slate-100 flex flex-col items-center py-8 print:bg-white print:p-0 ${activeTab === "form" ? "hidden md:flex" : "flex"}`}>
          {/* Page 1 */}
          <div className="print-page bg-white text-gray-900 shadow-2xl mb-6 print:mb-0 print:shadow-none"
            style={{ width: '210mm', minHeight: '297mm', padding: '12mm 16mm', fontFamily: 'Arial, sans-serif', fontSize: '10px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
            <PageHeader />

            <div style={{ textAlign: 'center', marginBottom: '14px' }}>
              <p style={{ fontWeight: 'bold', fontSize: '13px', color: VDC_SECONDARY, textDecoration: 'underline', letterSpacing: '1px' }}>OFFER LETTER</p>
              <p style={{ fontSize: '9px', color: '#666', marginTop: '2px' }}>Ref: {formData.referenceNo} &nbsp;|&nbsp; Date: {formData.date}</p>
            </div>

            <p style={{ lineHeight: '1.7' }}>Dear <strong>{formData.candidateName}</strong>,</p>
            <p style={{ lineHeight: '1.7', marginTop: '8px' }}>
              We are pleased to extend this offer of employment to you at <strong>Vijaya Diagnostic Centre Limited</strong>. After careful consideration of your qualifications and experience, we are delighted to welcome you as a valued member of our team.
            </p>

            {/* Candidate Details */}
            <div style={{ marginTop: '12px', marginBottom: '10px', borderRadius: '6px', overflow: 'hidden', border: `1px solid #cbd5e1` }}>
              <div style={{ background: '#f8fafc', color: '#1e293b', borderBottom: '1px solid #cbd5e1', padding: '6px 12px', fontWeight: 'bold', fontSize: '10px', letterSpacing: '0.5px' }}>CANDIDATE DETAILS</div>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                {[
                  ["Full Name", formData.candidateName],
                  ["Address", `${formData.candidateAddress}, ${formData.cityStatePin}`],
                  ["Contact", formData.contactNumber],
                  ["Email", formData.emailId],
                ].map(([k, v]) => (
                  <tr key={k} style={{ borderBottom: '1px solid #f0f0f0' }}>
                    <td style={{ padding: '5px 12px', width: '35%', color: '#555', fontWeight: '600' }}>{k}</td>
                    <td style={{ padding: '5px 12px', color: '#111' }}>{v}</td>
                  </tr>
                ))}
              </table>
            </div>

            {/* Employment Details */}
            <div style={{ marginBottom: '10px', borderRadius: '6px', overflow: 'hidden', border: `1px solid #cbd5e1` }}>
              <div style={{ background: '#f8fafc', color: '#1e293b', borderBottom: '1px solid #cbd5e1', padding: '6px 12px', fontWeight: 'bold', fontSize: '10px', letterSpacing: '0.5px' }}>EMPLOYMENT DETAILS</div>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                {[
                  ["Designation", formData.role],
                  ["Department", formData.department],
                  ["Reports To", formData.reportsTo],
                  ["Employment Type", formData.employmentType],
                  ["Work Location", formData.workLocation],
                  ["Date of Joining", formData.joiningDate],
                  ["Working Hours", formData.workingHours],
                ].map(([k, v]) => (
                  <tr key={k} style={{ borderBottom: '1px solid #f0f0f0' }}>
                    <td style={{ padding: '5px 12px', width: '35%', color: '#555', fontWeight: '600' }}>{k}</td>
                    <td style={{ padding: '5px 12px', color: '#111' }}>{v}</td>
                  </tr>
                ))}
              </table>
            </div>

            {/* Compensation */}
            <div style={{ marginBottom: '10px', borderRadius: '6px', overflow: 'hidden', border: `1px solid #cbd5e1` }}>
              <div style={{ background: VDC_ACCENT, color: '#fff', padding: '6px 12px', fontWeight: 'bold', fontSize: '10px', letterSpacing: '0.5px' }}>COMPENSATION STRUCTURE (Monthly)</div>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#f9f9f9' }}>
                    <th style={{ padding: '5px 12px', textAlign: 'left', fontWeight: '600', color: '#444', fontSize: '9px' }}>Component</th>
                    <th style={{ padding: '5px 12px', textAlign: 'right', fontWeight: '600', color: '#444', fontSize: '9px' }}>Amount (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Basic Salary", fmt(basicMonthly)],
                    ["House Rent Allowance (HRA)", fmt(hraMonthly)],
                    ["Dearness Allowance (DA)", fmt(daMonthly)],
                    ["Special Allowance", fmt(specialMonthly)],
                  ].map(([k, v]) => (
                    <tr key={k} style={{ borderBottom: '1px solid #f0f0f0' }}>
                      <td style={{ padding: '4px 12px', color: '#333' }}>{k}</td>
                      <td style={{ padding: '4px 12px', textAlign: 'right' }}>{v}</td>
                    </tr>
                  ))}
                  <tr style={{ background: '#f0f4ff', fontWeight: 'bold' }}>
                    <td style={{ padding: '5px 12px', color: VDC_SECONDARY }}>Gross Monthly Salary</td>
                    <td style={{ padding: '5px 12px', textAlign: 'right', color: VDC_SECONDARY }}>₹ {fmt(grossMonthly)}</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                    <td style={{ padding: '4px 12px', color: '#555' }}>Less: Provident Fund (Employer)</td>
                    <td style={{ padding: '4px 12px', textAlign: 'right', color: VDC_ACCENT }}>- ₹ {fmt(pfMonthly)}</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                    <td style={{ padding: '4px 12px', color: '#555' }}>Less: Professional Tax</td>
                    <td style={{ padding: '4px 12px', textAlign: 'right', color: VDC_ACCENT }}>- ₹ {fmt(ptMonthly)}</td>
                  </tr>
                  <tr style={{ background: '#fff5f5', fontWeight: 'bold' }}>
                    <td style={{ padding: '5px 12px', color: VDC_ACCENT }}>Net Monthly Take-Home</td>
                    <td style={{ padding: '5px 12px', textAlign: 'right', color: VDC_ACCENT }}>₹ {fmt(netMonthly)}</td>
                  </tr>
                  <tr style={{ borderTop: `2px solid ${VDC_SECONDARY}`, background: VDC_SECONDARY }}>
                    <td style={{ padding: '6px 12px', color: '#fff', fontWeight: 'bold' }}>Annual CTC</td>
                    <td style={{ padding: '6px 12px', textAlign: 'right', color: '#fff', fontWeight: 'bold' }}>₹ {formData.annualCTC}</td>
                  </tr>
                </tbody>
              </table>
              <div style={{ padding: '6px 12px', background: '#fffbf0', fontSize: '8.5px', color: '#666', borderTop: '1px solid #f0e0c0' }}>
                <strong>In Words:</strong> Rupees {formData.annualCTCWords} Only (per annum)
              </div>
            </div>

            <PageFooter />
          </div>

          {/* Page 2 – Terms & Conditions */}
          <div className="print-page bg-white text-gray-900 shadow-2xl mb-6 print:mb-0 print:shadow-none"
            style={{ width: '210mm', minHeight: '297mm', padding: '12mm 16mm', fontFamily: 'Arial, sans-serif', fontSize: '10px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
            <PageHeader />

            <div style={{ fontWeight: 'bold', fontSize: '11px', color: VDC_SECONDARY, marginBottom: '10px', textDecoration: 'underline' }}>TERMS & CONDITIONS OF EMPLOYMENT</div>

            <div style={{ lineHeight: '1.75', color: '#333' }}>
              <div style={{ marginBottom: '10px' }}>
                <p style={{ fontWeight: 'bold', color: VDC_SECONDARY, marginBottom: '3px' }}>1. Probation Period</p>
                <p>You will be on probation for an initial period of <strong>{formData.probationPeriod} months</strong> from your date of joining. During this period, either party may terminate employment with <strong>{formData.noticePeriodProbation} days</strong> written notice.</p>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <p style={{ fontWeight: 'bold', color: VDC_SECONDARY, marginBottom: '3px' }}>2. Notice Period (Post-Confirmation)</p>
                <p>Upon confirmation of employment, either party shall be required to give <strong>{formData.noticePeriodConfirmed} days</strong> written notice, or pay in lieu thereof, to terminate this employment agreement.</p>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <p style={{ fontWeight: 'bold', color: VDC_SECONDARY, marginBottom: '3px' }}>3. Confidentiality</p>
                <p>You shall maintain strict confidentiality of all patient data, diagnostic reports, proprietary processes, pricing, and business information of Vijaya Diagnostic Centre Limited, both during and after the term of employment. Disclosure of such information to any third party shall be treated as gross misconduct.</p>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <p style={{ fontWeight: 'bold', color: VDC_SECONDARY, marginBottom: '3px' }}>4. Intellectual Property</p>
                <p>Any inventions, discoveries, reports, methodologies, or other works created by you in the course of your employment shall be the sole and exclusive property of Vijaya Diagnostic Centre Limited.</p>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <p style={{ fontWeight: 'bold', color: VDC_SECONDARY, marginBottom: '3px' }}>5. Code of Conduct</p>
                <p>You are expected to adhere to the highest standards of professional ethics, patient care protocols, and the company's code of conduct. Any violation may result in disciplinary action, including termination.</p>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <p style={{ fontWeight: 'bold', color: VDC_SECONDARY, marginBottom: '3px' }}>6. Background Verification</p>
                <p>This offer is conditional upon satisfactory completion of background verification checks, including but not limited to educational qualifications, previous employment, and professional references.</p>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <p style={{ fontWeight: 'bold', color: VDC_SECONDARY, marginBottom: '3px' }}>7. Statutory Benefits</p>
                <p>You will be entitled to statutory benefits as per applicable laws, including Provident Fund (PF), Employee State Insurance (ESI) where applicable, Gratuity (after 5 years of service), and other applicable government-mandated benefits.</p>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <p style={{ fontWeight: 'bold', color: VDC_SECONDARY, marginBottom: '3px' }}>8. Acceptance of Offer</p>
                <p>Please sign and return a copy of this offer letter by <strong>{formData.joiningDate}</strong> to confirm your acceptance. Failure to do so may result in the offer being withdrawn.</p>
              </div>
            </div>

            {/* Signature Block */}
            <div style={{ marginTop: 'auto', paddingTop: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <p style={{ fontSize: '9px', color: '#666', marginBottom: '30px' }}>I accept the terms and conditions of this offer.</p>
                  <div style={{ borderTop: '1px solid #999', width: '180px', paddingTop: '4px' }}>
                    <p style={{ fontSize: '9px', color: '#444', fontWeight: '600' }}>{formData.candidateName}</p>
                    <p style={{ fontSize: '8px', color: '#777' }}>Signature & Date</p>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ height: '50px', display: 'flex', alignItems: 'flex-end' }}>
                    <div style={{ width: '120px', borderTop: '1px solid #999', paddingTop: '4px' }}>
                      <p style={{ fontSize: '9px', color: '#444', fontWeight: '600' }}>{formData.signatoryName}</p>
                      <p style={{ fontSize: '8px', color: '#777' }}>{formData.signatoryDesignation}</p>
                      <p style={{ fontSize: '8px', color: '#777' }}>Vijaya Diagnostic Centre Ltd.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <PageFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VijayaDiagnosticOfferLetter;
