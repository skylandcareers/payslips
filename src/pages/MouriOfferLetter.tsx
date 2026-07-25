import { useState } from "react";
import { Link } from "react-router-dom";
import { Download, Check, Settings2 } from "lucide-react";

const MouriOfferLetter = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [activeTab, setActiveTab] = useState<"form" | "preview">("form");

  const [formData, setFormData] = useState({
    date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
    referenceNo: "MT/HR/2026/042",
    candidateName: "Jane Doe",
    candidateAddress: "123 Tech Lane, Innovation City",
    cityStatePin: "Mumbai, Maharashtra, 400001",
    contactNumber: "+91 9876543210",
    emailId: "jane.doe@example.com",
    role: "Senior Software Engineer",
    department: "Engineering & Technology",
    reportsTo: "Anshuman Ghosh (VP Engineering)",
    employmentType: "Full-time / Permanent",
    workLocation: "Visakhapatnam / Hybrid",
    joiningDate: "September 1, 2026",
    workingHours: "Monday to Friday, 9:30 AM to 6:30 PM",
    annualCTC: "30,00,000",
    annualCTCWords: "Thirty Lakhs",
    targetBonus: "10-20%",
    esops: "20,00,000",
    probationPeriod: "3",
    noticePeriodProbation: "15",
    noticePeriodConfirmed: "90",
    signatoryName: "John Smith",
    signatoryDesignation: "Director - Human Resources",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleExportPDF = () => {
    window.print();
  };

  const numberToWords = (num: number) => {
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

  const PageHeader = ({ isPrintFixed = false }: { isPrintFixed?: boolean }) => (
    <div className={`w-full relative ${isPrintFixed ? 'pt-6' : 'pt-2 print:pt-6'}`}>
      <div className={`${isPrintFixed ? 'block' : 'hidden print:block'} fixed top-0 left-0 w-full h-[8px] bg-[#005A9C] z-20`}></div>
      
      <div className="flex justify-between items-end pb-4 mb-6 border-b-[12px] border-[#005A9C] w-full bg-white mt-2 print:mt-6">
        <div>
          <img src="/mouri_logo_new.png" alt="MOURI Tech" className="h-14 w-auto object-contain mb-1" />
        </div>
        <div className="text-right text-gray-500 text-[10px] leading-[1.5] font-sans">
          <p className="text-[#005A9C] text-[13px] mb-1 font-bold tracking-wide uppercase">MOURI Tech Limited</p>
          <p>Survey No. 64, 4th Floor, SBR Surya Pearl Sector III</p>
          <p>Hitech City, Madhapur, Hyderabad, TS 500081, INDIA</p>
          <p className="mt-1">
            <span className="text-gray-400">P:</span> +91 40 67254100 &nbsp;|&nbsp; <span className="text-gray-400">E:</span> info@mouritech.org.in &nbsp;|&nbsp; <span className="text-gray-400">W:</span> mouritech.com
          </p>
          <p><span className="text-gray-400">CIN:</span> U72200TG2005PTC048486</p>
        </div>
      </div>
    </div>
  );

  const PageFooter = ({ isPrintFixed = false }: { isPrintFixed?: boolean }) => (
    <div className={`w-full relative bg-white ${isPrintFixed ? 'pb-6 pt-6' : 'mt-8 pt-6 pb-10 md:pb-14 print:pb-6'}`}>
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gray-200"></div>
      
      {/* Tech Dot Pattern */}
      <div 
        className="absolute top-1 left-0 w-48 h-10 opacity-[0.15]" 
        style={{ backgroundImage: 'radial-gradient(#005A9C 1px, transparent 1px)', backgroundSize: '8px 8px' }}
      ></div>
      
      {/* Geometric Accent Line */}
      <div className="absolute top-0 left-0 w-32 h-[3px] bg-[#005A9C]"></div>
      <div className="absolute top-0 left-32 w-16 h-[3px] bg-blue-300"></div>

      <div className="flex justify-between items-center font-sans text-[9px] text-gray-400 relative z-10 pl-2">
        <p className="font-semibold text-gray-500 tracking-wider">MOURI TECH LIMITED</p>
        <p>Regd Office: D1 IT Park Hill #2, Visakhapatnam, 530003, AP</p>
        <p>www.mouritech.com</p>
      </div>
    </div>
  );

  const Th = ({children}: {children: React.ReactNode}) => <th className="py-2.5 px-3 bg-[#005A9C]/5 text-[#005A9C] font-semibold text-left border-b border-gray-200">{children}</th>;
  const Td = ({children}: {children: React.ReactNode}) => <td className="py-2.5 px-3 border-b border-gray-100 text-gray-700">{children}</td>;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#005A9C]/30 flex flex-col print:bg-transparent print:text-black">
      <style>
        {`
          @media print {
            @page { size: A4; margin: 10mm 0; }
            body { 
              margin: 0 !important;
              padding: 0 !important;
              -webkit-print-color-adjust: exact !important; 
              print-color-adjust: exact !important; 
              background: transparent !important; 
            }
            table { page-break-inside: auto; }
            tr { page-break-inside: avoid; page-break-after: auto; }
            thead { display: table-header-group; }
            tfoot { display: table-footer-group; }
            
            /* Watermark for print */
            .watermark {
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              opacity: 0.04;
              z-index: -1;
              pointer-events: none;
              width: 70%;
            }
          }
        `}
      </style>

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 print:hidden shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/mouri" className="flex items-center gap-4">
            <img src="https://www.mouritech.com/wp-content/uploads/2021/10/MT-Home-Logo-1-1.png" alt="MOURI Tech" className="h-10 w-auto rounded" />
            <div className="hidden md:flex items-center gap-2 border-l border-slate-300 pl-4 text-sm font-semibold tracking-wide text-slate-700">
              Document Generators
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <div className="md:hidden flex bg-slate-100 rounded-md p-1 border border-slate-200">
              <button onClick={() => setActiveTab("form")} className={`px-3 py-1 text-sm rounded ${activeTab === "form" ? "bg-white shadow text-[#005A9C]" : "text-slate-500"}`}>Form</button>
              <button onClick={() => setActiveTab("preview")} className={`px-3 py-1 text-sm rounded ${activeTab === "preview" ? "bg-white shadow text-[#005A9C]" : "text-slate-500"}`}>Preview</button>
            </div>
            <button onClick={handleExportPDF} disabled={isExporting} className="inline-flex items-center gap-2 bg-[#005A9C] hover:bg-[#004a82] text-white px-5 py-2.5 text-sm font-semibold transition-colors rounded-lg shadow-sm hover:shadow">
              {isExporting ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />} Export PDF
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-24 pb-12 px-4 container mx-auto flex flex-col md:flex-row gap-8 justify-center print:block print:p-0 print:m-0 print:max-w-none">
        
        {/* Form Section */}
        <div className={`w-full md:w-[360px] bg-white border border-slate-200 rounded-xl shadow-sm p-6 flex-col gap-6 overflow-y-auto max-h-[calc(100vh-140px)] sticky top-28 print:hidden shrink-0 ${activeTab === "form" ? "flex" : "hidden md:flex"}`}>
          <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
            <Settings2 className="w-5 h-5 text-[#005A9C]" />
            <h2 className="text-lg font-semibold text-slate-800">Offer Details</h2>
          </div>
          
          <div className="space-y-4">
            {/* Same form inputs but styled lighter */}
            <div className="grid gap-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Metadata</h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs mb-1 text-slate-600 font-medium">Date</label>
                  <input type="text" name="date" value={formData.date} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#005A9C] focus:ring-1 focus:ring-[#005A9C] outline-none transition-all text-slate-800" />
                </div>
                <div>
                  <label className="block text-xs mb-1 text-slate-600 font-medium">Reference No</label>
                  <input type="text" name="referenceNo" value={formData.referenceNo} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#005A9C] focus:ring-1 focus:ring-[#005A9C] outline-none transition-all text-slate-800" />
                </div>
              </div>
            </div>

            <div className="grid gap-4 pt-4 border-t border-slate-100">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Candidate</h3>
              <div>
                <label className="block text-xs mb-1 text-slate-600 font-medium">Full Name</label>
                <input type="text" name="candidateName" value={formData.candidateName} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#005A9C] focus:ring-1 focus:ring-[#005A9C] outline-none transition-all text-slate-800" />
              </div>
              <div>
                <label className="block text-xs mb-1 text-slate-600 font-medium">Address Line 1</label>
                <textarea name="candidateAddress" value={formData.candidateAddress} onChange={handleChange} rows={2} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#005A9C] focus:ring-1 focus:ring-[#005A9C] outline-none resize-none transition-all text-slate-800" />
              </div>
              <div>
                <label className="block text-xs mb-1 text-slate-600 font-medium">City, State, PIN</label>
                <input type="text" name="cityStatePin" value={formData.cityStatePin} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#005A9C] focus:ring-1 focus:ring-[#005A9C] outline-none transition-all text-slate-800" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs mb-1 text-slate-600 font-medium">Mobile / Contact</label>
                  <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#005A9C] focus:ring-1 focus:ring-[#005A9C] outline-none transition-all text-slate-800" />
                </div>
                <div>
                  <label className="block text-xs mb-1 text-slate-600 font-medium">Email ID</label>
                  <input type="text" name="emailId" value={formData.emailId} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#005A9C] focus:ring-1 focus:ring-[#005A9C] outline-none transition-all text-slate-800" />
                </div>
              </div>
            </div>

            <div className="grid gap-4 pt-4 border-t border-slate-100">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Job Details</h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs mb-1 text-slate-600 font-medium">Role / Position</label>
                  <input type="text" name="role" value={formData.role} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#005A9C] focus:ring-1 focus:ring-[#005A9C] outline-none transition-all text-slate-800" />
                </div>
                <div>
                  <label className="block text-xs mb-1 text-slate-600 font-medium">Department</label>
                  <input type="text" name="department" value={formData.department} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#005A9C] focus:ring-1 focus:ring-[#005A9C] outline-none transition-all text-slate-800" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs mb-1 text-slate-600 font-medium">Joining Date</label>
                  <input type="text" name="joiningDate" value={formData.joiningDate} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#005A9C] focus:ring-1 focus:ring-[#005A9C] outline-none transition-all text-slate-800" />
                </div>
                <div>
                  <label className="block text-xs mb-1 text-slate-600 font-medium">Reports To</label>
                  <input type="text" name="reportsTo" value={formData.reportsTo} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#005A9C] focus:ring-1 focus:ring-[#005A9C] outline-none transition-all text-slate-800" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs mb-1 text-slate-600 font-medium">Location</label>
                  <input type="text" name="workLocation" value={formData.workLocation} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#005A9C] focus:ring-1 focus:ring-[#005A9C] outline-none transition-all text-slate-800" />
                </div>
                <div>
                  <label className="block text-xs mb-1 text-slate-600 font-medium">Probation (Months)</label>
                  <input type="text" name="probationPeriod" value={formData.probationPeriod} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#005A9C] focus:ring-1 focus:ring-[#005A9C] outline-none transition-all text-slate-800" />
                </div>
              </div>
            </div>
            
            <div className="grid gap-4 pt-4 border-t border-slate-100">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Compensation</h3>
              
              <div className="bg-[#005A9C]/5 p-4 rounded-xl border border-[#005A9C]/10 mb-2">
                <div className="text-[10px] font-bold text-[#005A9C] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  Quick Salary Calculators
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex gap-2 items-center">
                    <div className="flex-1 relative">
                      <span className="absolute left-3 top-2 text-slate-400 text-xs font-medium">₹</span>
                      <input type="text" id="forwardCTC" placeholder="Target Annual CTC (e.g. 30,00,000)" className="w-full pl-7 pr-3 py-1.5 bg-white border border-[#005A9C]/20 rounded-md text-xs focus:border-[#005A9C] outline-none transition-all shadow-sm" />
                    </div>
                    <button type="button" onClick={() => {
                      const input = document.getElementById('forwardCTC') as HTMLInputElement;
                      const annualCTC = parseInt(input.value.replace(/,/g, "")) || 0;
                      if (annualCTC > 0) {
                        const formatNumber = (num: number) => Math.round(num).toLocaleString('en-IN');
                        setFormData(prev => ({
                          ...prev,
                          annualCTC: formatNumber(annualCTC),
                          annualCTCWords: numberToWords(Math.round(annualCTC))
                        }));
                      }
                    }} className="bg-[#005A9C] text-white px-3 py-1.5 rounded-md text-xs font-semibold shrink-0 hover:bg-[#004a82] transition-colors shadow-sm">
                      Apply CTC
                    </button>
                  </div>
                  
                  <div className="flex gap-2 items-center">
                    <div className="flex-1 relative">
                      <span className="absolute left-3 top-2 text-slate-400 text-xs font-medium">₹</span>
                      <input type="text" id="targetTakeHome" placeholder="Target Monthly Take-Home (e.g. 2,23,000)" className="w-full pl-7 pr-3 py-1.5 bg-white border border-[#005A9C]/20 rounded-md text-xs focus:border-[#005A9C] outline-none transition-all shadow-sm" />
                    </div>
                    <button type="button" onClick={() => {
                      const input = document.getElementById('targetTakeHome') as HTMLInputElement;
                      const takeHome = parseInt(input.value.replace(/,/g, "")) || 0;
                      if (takeHome > 0) {
                        const calculatedCTC = ((takeHome + 200) * 12) / 0.84;
                        const ctcInput = document.getElementById('forwardCTC') as HTMLInputElement;
                        if (ctcInput) ctcInput.value = Math.round(calculatedCTC).toLocaleString('en-IN');
                        const formatNumber = (num: number) => Math.round(num).toLocaleString('en-IN');
                        setFormData(prev => ({
                          ...prev,
                          annualCTC: formatNumber(calculatedCTC),
                          annualCTCWords: numberToWords(Math.round(calculatedCTC))
                        }));
                      }
                    }} className="bg-slate-700 text-white px-3 py-1.5 rounded-md text-xs font-semibold shrink-0 hover:bg-slate-800 transition-colors shadow-sm">
                      Reverse Calc
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2">
                  <label className="block text-xs mb-1 text-slate-600 font-medium">Annual Cash CTC</label>
                  <input type="text" name="annualCTC" value={formData.annualCTC} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#005A9C] focus:ring-1 focus:ring-[#005A9C] outline-none transition-all text-slate-800" />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs mb-1 text-slate-600 font-medium">Annual CTC (in Words)</label>
                  <input type="text" name="annualCTCWords" value={formData.annualCTCWords} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#005A9C] focus:ring-1 focus:ring-[#005A9C] outline-none transition-all text-slate-800" />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs mb-1 text-slate-600 font-medium">ESOP Value (INR) - Optional</label>
                  <input type="text" name="esops" value={formData.esops} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#005A9C] focus:ring-1 focus:ring-[#005A9C] outline-none transition-all text-slate-800" placeholder="e.g. 20,00,000" />
                  {formData.esops && formData.annualCTC && (
                    <p className="text-[10px] text-emerald-600 mt-1.5 font-semibold">
                      Total Company Cost (Cash + ESOPs): ₹{Math.round((parseInt(formData.annualCTC.replace(/,/g, "")) || 0) + (parseInt(formData.esops.replace(/,/g, "")) || 0)).toLocaleString('en-IN')}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="grid gap-4 pt-4 border-t border-slate-100">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Signatory</h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs mb-1 text-slate-600 font-medium">Signatory Name</label>
                  <input type="text" name="signatoryName" value={formData.signatoryName} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#005A9C] focus:ring-1 focus:ring-[#005A9C] outline-none transition-all text-slate-800" />
                </div>
                <div>
                  <label className="block text-xs mb-1 text-slate-600 font-medium">Designation</label>
                  <input type="text" name="signatoryDesignation" value={formData.signatoryDesignation} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#005A9C] focus:ring-1 focus:ring-[#005A9C] outline-none transition-all text-slate-800" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-Page WYSIWYG Preview Section */}
        <div className={`print-container flex-1 overflow-y-auto bg-slate-200/50 p-4 md:p-8 rounded-2xl md:flex flex-col gap-10 items-center relative print:block print:bg-transparent print:rounded-none print:p-0 print:m-0 print:overflow-visible ${activeTab === "preview" ? "flex" : "hidden"}`}>
          
          {/* Print Watermark */}
          <img src="https://www.mouritech.com/wp-content/uploads/2021/10/MT-Home-Logo-1-1.png" alt="" className="hidden print:block watermark grayscale" />

          {/* Absolute fixed header and footer for print */}
          <div className="hidden print:block fixed top-0 left-0 w-full z-50 bg-white">
            <div className="px-14 md:px-20">
              <PageHeader isPrintFixed={true} />
            </div>
          </div>
          <div className="hidden print:block fixed bottom-0 left-0 w-full z-50 bg-white">
            <div className="px-14 md:px-20">
              <PageFooter isPrintFixed={true} />
            </div>
          </div>

          <div className="w-full max-w-[210mm] bg-white text-black shadow-lg rounded-md relative print:shadow-none print:rounded-none print:w-full print:max-w-none print:h-auto page-container">
            
            {/* Screen Preview Bleed Bar */}
            <div className="absolute top-0 left-0 w-full h-[8px] bg-[#005A9C] z-20 print:hidden rounded-t-md"></div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none print:hidden w-[70%] flex justify-center z-0">
              <img src="https://www.mouritech.com/wp-content/uploads/2021/10/MT-Home-Logo-1-1.png" alt="" className="w-full h-auto object-contain grayscale" />
            </div>

            <table className="w-full relative z-10 h-full border-collapse border-spacing-0">
              <thead>
                <tr>
                  <td>
                    {/* Spacer for header */}
                    <div className="px-14 md:px-20 pt-10 md:pt-14 print:pt-0 print:opacity-0">
                      <PageHeader />
                    </div>
                  </td>
                </tr>
              </thead>
              
              <tbody>
                <tr>
                  <td>
                    <div className="px-14 md:px-20 font-sans text-[11px] text-gray-700 leading-[1.6]">
                      
                      {/* --- START OF CONTENT FLOW --- */}
                      
                      {/* Traditional Corporate Letter Format */}
                      <div className="flex justify-between items-start mb-6 mt-4 text-gray-900">
                        <div>
                          <p><strong>Date:</strong> {formData.date}</p>
                          <p><strong>Offer Letter No:</strong> {formData.referenceNo}</p>
                        </div>
                      </div>

                      <div className="mb-6 text-gray-900 leading-relaxed">
                        <p><strong>To,</strong></p>
                        <p>{formData.candidateName}</p>
                        <p>{formData.candidateAddress}</p>
                        <p>{formData.cityStatePin}</p>
                        <p>Phone: {formData.contactNumber}</p>
                        <p>Email: {formData.emailId}</p>
                      </div>

                      <div className="mb-6 text-gray-900">
                        <p><strong>Subject: Offer of Employment for the Position of {formData.role}</strong></p>
                      </div>

                      <div className="space-y-4 text-justify text-[11.5px] text-gray-900">
                        <p className="mb-2">Dear <strong>{formData.candidateName.split(' ')[0]}</strong>,</p>
                        
                        <p>We are delighted to extend this offer of employment to you on behalf of MOURI Tech Limited. Following a comprehensive review of your qualifications, experience, and potential, we believe you will be an exceptional addition to our team as a <span className="font-bold text-gray-900">{formData.role}</span>.</p>
                        
                        <p>At MOURI Tech, we are driven by a mission to deliver cutting-edge enterprise IT solutions and empower global organizations through digital transformation, intelligent automation, and cloud innovation. We are confident that your technical expertise and vision will play a critical role in advancing our infrastructure, application development practices, and client-centric solutions.</p>

                        <p>This document outlines the detailed terms, conditions, and compensation structure associated with your new role. Please review it carefully.</p>

                        <div className="font-bold text-[#005A9C] text-[13px] uppercase mt-10 mb-3 border-b border-gray-200 pb-2 tracking-wide">PART A: ROLE & RESPONSIBILITIES</div>
                        
                        <p className="font-bold text-gray-900 mt-4 mb-2">1. Position Details</p>
                        <table className="w-full text-[11px] mb-6 border-collapse">
                          <tbody>
                            <tr><Th>Position Title</Th><Td><span className="font-bold text-gray-900">{formData.role}</span></Td></tr>
                            <tr><Th>Department</Th><Td>{formData.department}</Td></tr>
                            <tr><Th>Reporting Manager</Th><Td>{formData.reportsTo}</Td></tr>
                            <tr><Th>Employment Type</Th><Td>{formData.employmentType}</Td></tr>
                            <tr><Th>Base Location</Th><Td>{formData.workLocation}</Td></tr>
                            <tr><Th>Date of Joining</Th><Td><span className="font-bold text-[#005A9C]">{formData.joiningDate}</span></Td></tr>
                            <tr><Th>Standard Hours</Th><Td>{formData.workingHours} (Subject to business/client requirements)</Td></tr>
                          </tbody>
                        </table>

                        <p className="font-bold text-gray-900 mt-6 mb-2">2. Role Overview</p>
                        <p>As a <span className="font-bold text-gray-900">{formData.role}</span> at MOURI Tech, you will be responsible for architecting, deploying, and maintaining scalable enterprise solutions. You will collaborate with cross-functional teams across our global delivery centers, engaging directly with Fortune 500 clients to ensure the seamless execution of digital transformation initiatives.</p>

                        <p className="font-bold text-gray-900 mt-6 mb-2">3. Key Competencies</p>
                        <table className="w-full text-[11px] mb-6 border-collapse">
                          <tbody>
                            <tr><Th>Enterprise Architecture</Th><Td>Design and develop robust, high-availability backend systems, microservices, and APIs tailored for enterprise scale.</Td></tr>
                            <tr><Th>Cloud Integration</Th><Td>Implement and optimize secure cloud infrastructures across AWS, Azure, and Google Cloud Platform.</Td></tr>
                            <tr><Th>Client Delivery</Th><Td>Ensure on-time, high-quality delivery of technical milestones while adhering to strict SLA and compliance standards.</Td></tr>
                            <tr><Th>Technical Mentorship</Th><Td>Provide guidance and code reviews for junior developers, fostering a culture of continuous technical excellence.</Td></tr>
                          </tbody>
                        </table>

                        <div className="font-bold text-[#005A9C] text-[13px] uppercase mt-10 mb-3 border-b border-gray-200 pb-2 tracking-wide">PART B: TERMS OF EMPLOYMENT</div>
                        
                        <p className="font-bold text-gray-900 mt-4 mb-2">4. Compensation & Benefits</p>
                        <table className="w-full text-[11px] mb-6 border-collapse">
                          <tbody>
                            <tr><Th>Annual Cash CTC</Th><Td><span className="font-bold text-gray-900">INR {formData.annualCTC}</span> per annum (<span className="font-bold text-gray-900">Rupees {formData.annualCTCWords} only</span>).</Td></tr>
                            <tr><Th>Salary Breakup</Th><Td>Please refer to the attached Annexure A for a detailed component breakdown.</Td></tr>
                            <tr><Th>Performance Bonus</Th><Td><span className="font-bold text-gray-900">Up to {formData.targetBonus}</span> of annual CTC, tied to individual and company performance.</Td></tr>
                            {formData.esops && formData.esops !== "0" && (
                              <tr><Th>ESOPs</Th><Td>You will be granted Employee Stock Ownership Plans worth <span className="font-bold text-gray-900">INR {formData.esops}</span>, subject to the standard vesting schedule.</Td></tr>
                            )}
                            <tr><Th>Medical Insurance</Th><Td>Comprehensive family floater health insurance coverage.</Td></tr>
                          </tbody>
                        </table>

                        <p className="font-bold text-gray-900 mt-6 mb-2">5. Probation & Confirmation</p>
                        <p>You shall be on probation for a period of <span className="font-bold text-gray-900">{formData.probationPeriod} months</span> from your date of joining. Upon successful completion of this period, your employment will be confirmed in writing. MOURI Tech reserves the right to extend the probation period based on performance assessments.</p>
                        
                        <p className="font-bold text-gray-900 mt-4 mb-2">6. Notice Period & Separation</p>
                        <p>During your probation period, the notice period shall be <span className="font-bold text-gray-900">{formData.noticePeriodProbation} days</span>. Following confirmation, the notice period required from either party will be <span className="font-bold text-gray-900">{formData.noticePeriodConfirmed} days</span>, or salary in lieu thereof, subject to project transition requirements.</p>

                        <div className="font-bold text-[#005A9C] text-[13px] uppercase mt-10 mb-3 border-b border-gray-200 pb-2 tracking-wide">PART C: COMPLIANCE & POLICIES</div>
                        
                        <p className="font-bold text-gray-900 mt-4 mb-2">7. Confidentiality & Intellectual Property</p>
                        <p>You acknowledge that all source code, architectures, client data, trade secrets, and proprietary algorithms you encounter or create during your employment are the exclusive Intellectual Property (IP) of MOURI Tech Limited. You agree to strictly adhere to our Non-Disclosure Agreement (NDA).</p>

                        <p className="font-bold text-gray-900 mt-4 mb-2">8. Data Privacy & Security</p>
                        <p>MOURI Tech strictly complies with ISO 27001:2022 and global data protection regulations (e.g., GDPR, DPDPA). You are required to maintain the highest standards of information security at all times.</p>

                        <div className="font-bold text-[#005A9C] text-[13px] uppercase mt-10 mb-3 border-b border-gray-200 pb-2 tracking-wide">PART D: ACCEPTANCE</div>
                        <p>This offer is contingent upon successful background verification and reference checks. The terms herein shall be governed by the laws of India.</p>
                        
                        <div className="mt-12 grid grid-cols-2 gap-12 mb-10" style={{ pageBreakInside: 'avoid' }}>
                          <div>
                            <p className="font-bold text-gray-900 mb-10 uppercase tracking-wide text-[10px]">For MOURI Tech Limited</p>
                            <p className="font-bold text-gray-900 border-t-2 border-gray-200 pt-3 w-56 text-[12px]">{formData.signatoryName}</p>
                            <p className="text-gray-500 mt-0.5">{formData.signatoryDesignation}</p>
                          </div>
                          <div>
                            <p className="font-bold text-[#005A9C] mb-10 uppercase tracking-wide text-[10px]">Employee Acceptance</p>
                            <p className="font-bold text-gray-900 border-t-2 border-gray-200 pt-3 w-56 text-[12px]">{formData.candidateName}</p>
                            <p className="text-gray-500 mt-0.5">Date: ________________</p>
                          </div>
                        </div>

                        {/* Force page break before Annexure A */}
                        <div style={{ pageBreakBefore: 'always' }}></div>

                        <div className="mb-8 mt-6">
                          <h3 className="font-bold text-[#005A9C] text-[16px] uppercase tracking-wide">Annexure A</h3>
                          <h4 className="text-[13px] text-gray-500 font-medium">Detailed Salary Structure</h4>
                        </div>
                        
                        {(() => {
                          const parseNumber = (val: string) => parseInt(val.replace(/,/g, "")) || 0;
                          const formatNumber = (num: number) => Math.round(num).toLocaleString('en-IN');
                          const annual = parseNumber(formData.annualCTC);
                          const esops = parseNumber(formData.esops);
                          const hasEsops = formData.esops && formData.esops !== "0";
                          const basicA = annual * 0.5;
                          const hraA = basicA * 0.4;
                          const specialA = annual - basicA - hraA;
                          const pfM = (basicA / 12) * 0.12;
                          const pfA = pfM * 12;
                          const ptM = 200;
                          const ptA = ptM * 12;
                          const tdsA = annual * 0.10;
                          const tdsM = tdsA / 12;
                          const deductionsA = pfA + ptA + tdsA;
                          const netA = annual - deductionsA;
                          
                          return (
                            <>
                              <div className="flex justify-between items-end mb-6 bg-slate-50 p-4 rounded border border-slate-200">
                                <div>
                                  <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Employee Name</p>
                                  <p className="font-bold text-gray-900 text-[13px]">{formData.candidateName}</p>
                                </div>
                                <div className="text-right">
                                  <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">
                                    {hasEsops ? "Total Package Value (CTC + ESOPs)" : "Total Annual CTC"}
                                  </p>
                                  <p className="font-extrabold text-[#005A9C] text-[16px]">
                                    INR {hasEsops ? formatNumber(annual + esops) : formData.annualCTC}
                                  </p>
                                </div>
                              </div>
                              
                              <table className="w-full text-[11px] mb-8 border-collapse">
                                <thead>
                                  <tr>
                                    <th className="py-3 px-4 text-left border-b-2 border-[#005A9C] bg-white text-gray-400 uppercase tracking-wider text-[10px]">Salary Component</th>
                                    <th className="py-3 px-4 text-right border-b-2 border-[#005A9C] bg-white text-gray-400 uppercase tracking-wider text-[10px]">Monthly (INR)</th>
                                    <th className="py-3 px-4 text-right border-b-2 border-[#005A9C] bg-white text-gray-400 uppercase tracking-wider text-[10px]">Annual (INR)</th>
                                  </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                <tr>
                                  <td colSpan={3} className="py-3 px-4 font-bold text-[#005A9C] bg-[#005A9C]/5 uppercase text-[10px] tracking-wide">Earnings</td>
                                </tr>
                                <tr>
                                  <td className="py-2.5 px-4 border-b border-gray-100">Basic Salary</td>
                                  <td className="py-2.5 px-4 border-b border-gray-100 text-right">{formatNumber(basicA / 12)}</td>
                                  <td className="py-2.5 px-4 border-b border-gray-100 text-right">{formatNumber(basicA)}</td>
                                </tr>
                                <tr>
                                  <td className="py-2.5 px-4 border-b border-gray-100">House Rent Allowance (HRA)</td>
                                  <td className="py-2.5 px-4 border-b border-gray-100 text-right">{formatNumber(hraA / 12)}</td>
                                  <td className="py-2.5 px-4 border-b border-gray-100 text-right">{formatNumber(hraA)}</td>
                                </tr>
                                <tr>
                                  <td className="py-2.5 px-4 border-b border-gray-100">Special Allowance</td>
                                  <td className="py-2.5 px-4 border-b border-gray-100 text-right">{formatNumber(specialA / 12)}</td>
                                  <td className="py-2.5 px-4 border-b border-gray-100 text-right">{formatNumber(specialA)}</td>
                                </tr>
                                <tr className="bg-slate-50 font-bold text-gray-900 border-t border-b border-gray-200">
                                  <td className="py-3 px-4">Gross Salary (A)</td>
                                  <td className="py-3 px-4 text-right">{formatNumber(annual / 12)}</td>
                                  <td className="py-3 px-4 text-right">{formatNumber(annual)}</td>
                                </tr>
                                
                                
                                {formData.esops && formData.esops !== "0" && (
                                  <>
                                    <tr>
                                      <td colSpan={3} className="py-3 px-4 font-bold text-[#005A9C] bg-[#005A9C]/5 uppercase text-[10px] tracking-wide border-t border-gray-200 mt-4">Long-Term Incentives</td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                      <td className="py-2.5 px-4">Employee Stock Ownership Plan (ESOPs)</td>
                                      <td className="py-2.5 px-4 text-right">--</td>
                                      <td className="py-2.5 px-4 text-right">{formData.esops}</td>
                                    </tr>
                                    <tr className="bg-slate-50 font-bold text-gray-900 border-b border-gray-200">
                                      <td className="py-3 px-4">Total Cost to Company (CTC + ESOPs)</td>
                                      <td className="py-3 px-4 text-right">--</td>
                                      <td className="py-3 px-4 text-right">{formatNumber(annual + parseNumber(formData.esops))}</td>
                                    </tr>
                                  </>
                                )}

                                <tr>
                                  <td colSpan={3} className="py-3 px-4 font-bold text-[#005A9C] bg-[#005A9C]/5 uppercase text-[10px] tracking-wide border-t border-gray-200 mt-4">Deductions</td>
                                </tr>
                                <tr>
                                  <td className="py-2.5 px-4 border-b border-gray-100">Provident Fund (PF)</td>
                                  <td className="py-2.5 px-4 border-b border-gray-100 text-right">{formatNumber(pfM)}</td>
                                  <td className="py-2.5 px-4 border-b border-gray-100 text-right">{formatNumber(pfA)}</td>
                                </tr>
                                <tr>
                                  <td className="py-2.5 px-4 border-b border-gray-100">Professional Tax (PT)</td>
                                  <td className="py-2.5 px-4 border-b border-gray-100 text-right">{formatNumber(ptM)}</td>
                                  <td className="py-2.5 px-4 border-b border-gray-100 text-right">{formatNumber(ptA)}</td>
                                </tr>
                                <tr>
                                  <td className="py-2.5 px-4 border-b border-gray-100">Income Tax (TDS @ 10%)</td>
                                  <td className="py-2.5 px-4 border-b border-gray-100 text-right">{formatNumber(tdsM)}</td>
                                  <td className="py-2.5 px-4 border-b border-gray-100 text-right">{formatNumber(tdsA)}</td>
                                </tr>
                                <tr className="bg-slate-50 font-bold text-gray-900 border-t border-b border-gray-200">
                                  <td className="py-3 px-4">Total Deductions (B)</td>
                                  <td className="py-3 px-4 text-right">{formatNumber(pfM + ptM + tdsM)}</td>
                                  <td className="py-3 px-4 text-right">{formatNumber(deductionsA)}</td>
                                </tr>
                                
                                <tr className="bg-[#005A9C]/10 font-bold border-b border-[#005A9C]/20">
                                  <td className="py-4 px-4 text-[#005A9C] text-[12px]">Net Take Home (A - B)</td>
                                  <td className="py-4 px-4 text-right text-gray-900 text-[12px]">{formatNumber((annual / 12) - (pfM + ptM + tdsM))}</td>
                                  <td className="py-4 px-4 text-right text-gray-900 text-[12px]">{formatNumber(netA)}</td>
                                </tr>
                              </tbody>
                              </table>
                            </>
                          );
                        })()}
                        <p className="text-[9px] text-gray-500 italic mb-12">* Note: Income Tax (TDS) has been calculated at a flat 10% rate. Final tax liability may vary based on actual investment declarations.</p>
                        
                        <div className="mt-8 mb-4">
                          <p className="font-bold text-gray-900 border-t-2 border-gray-200 pt-3 w-56 inline-block text-[12px]">Employee Signature</p>
                        </div>
                      </div>
                      {/* --- END OF CONTENT FLOW --- */}

                    </div>
                  </td>
                </tr>
              </tbody>
              
              <tfoot>
                <tr>
                  <td>
                    {/* Spacer for footer */}
                    <div className="px-14 md:px-20 print:opacity-0">
                      <PageFooter />
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

        </div>
      </main>
    </div>
  );
};

export default MouriOfferLetter;
