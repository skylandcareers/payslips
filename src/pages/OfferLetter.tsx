import { useState } from "react";
import { Link } from "react-router-dom";
import { Download, Check, Settings2 } from "lucide-react";

const OfferLetter = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [activeTab, setActiveTab] = useState<"form" | "preview">("form");

  const [formData, setFormData] = useState({
    date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
    referenceNo: "AVS/HR/2026/042",
    candidateName: "Jane Doe",
    candidateAddress: "123 Tech Lane, Innovation City",
    cityStatePin: "Mumbai, Maharashtra, 400001",
    contactNumber: "+91 9876543210",
    emailId: "jane.doe@example.com",
    role: "Senior Software Engineer",
    department: "Engineering & Technology",
    reportsTo: "Anshuman Ghosh (Chief Technology Officer)",
    employmentType: "Full-time / Permanent",
    workLocation: "Hyderabad / Hybrid",
    joiningDate: "September 1, 2026",
    workingHours: "Monday to Friday, 9:30 AM to 6:30 PM",
    annualCTC: "30,00,000",
    annualCTCWords: "Thirty Lakhs",
    targetBonus: "10-20%",
    esops: "1,000",
    probationPeriod: "3",
    noticePeriodProbation: "15",
    noticePeriodConfirmed: "90",
    signatoryName: "John Smith",
    signatoryDesignation: "HR Head",
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
      {/* Top Bleed Bar - Fixed for print to appear on every page */}
      <div className={`absolute -top-10 md:-top-14 -left-10 md:-left-14 w-[calc(100%+80px)] md:w-[calc(100%+112px)] h-[6px] bg-[#E93D44] z-20 ${isPrintFixed ? 'hidden' : 'print:hidden'}`}></div>
      <div className={`${isPrintFixed ? 'block' : 'hidden print:block'} fixed top-0 left-0 w-full h-[6px] bg-[#E93D44] z-20`}></div>
      
      <div className="flex justify-between items-end pb-3 mb-6 border-b-[1.5px] border-black w-full bg-white">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <img src="https://media.licdn.com/dms/image/v2/D560BAQGREzSyNC8Gtw/company-logo_200_200/company-logo_200_200/0/1687330866404/aviso_inc_logo?e=2147483647&v=beta&t=8-c6FAeLmXM5IIbukECZ4W6vgIhc7bdaEYOWfOaMWYw" alt="aviso logo icon" className="h-9 w-auto object-contain" />
            <span className="text-[38px] leading-none tracking-tight text-[#E93D44] lowercase font-sans -mt-1 font-medium">aviso</span>
          </div>
          <div className="text-[10.5px] text-gray-800 font-medium tracking-wide">
            <p>Aviso AI | End-to-End AI Revenue Platform</p>
          </div>
        </div>
        <div className="text-right text-gray-600 text-[10px] leading-[1.4] font-sans">
          <p className="text-gray-900 text-[12px] mb-0.5 font-medium">Aviso Software India LLP</p>
          <p>4th Floor, Block B, Purva Summit</p>
          <p>Whitefield Road, Hitec City, Hyderabad - 500081</p>
          <p className="mt-0.5"><span className="text-[#E93D44]">Email:</span> hr@aviso.com | <span className="text-[#E93D44]">Web:</span> www.aviso.com</p>
        </div>
      </div>
    </div>
  );

  const PageFooter = ({ isPrintFixed = false }: { isPrintFixed?: boolean }) => (
    <div className={`w-full relative border-t border-gray-300 bg-white ${isPrintFixed ? 'pb-4 pt-4' : 'mt-8 pt-4 pb-10 md:pb-14 print:pb-4'}`}>
      <div className="text-center font-sans">
        <p className="text-[11px] font-bold text-gray-800 tracking-wider">AVISO SOFTWARE INDIA LLP</p>
        <p className="text-[9px] text-gray-500 mt-1">Regd Office: 4th Floor, Block B, Purva Summit, Whitefield Road, Hitec City, Hyderabad, Telangana - 500081</p>
        <p className="text-[9px] text-gray-500">LLPIN: AAL-4581</p>
      </div>
    </div>
  );

  const Th = ({children}: {children: React.ReactNode}) => <th className="py-2 px-3 border border-gray-300 bg-gray-50 text-gray-700 font-bold">{children}</th>;
  const Td = ({children}: {children: React.ReactNode}) => <td className="py-2 px-3 border border-gray-300 text-gray-800">{children}</td>;

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary/30 flex flex-col print:bg-transparent print:text-black">
      <style>
        {`
          @media print {
            @page { size: A4; margin: 10mm 0; }
            body { 
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
              opacity: 0.08;
              z-index: -1;
              pointer-events: none;
              width: 60%;
            }
          }
        `}
      </style>

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10 print:hidden">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4">
            <img src="https://media.licdn.com/dms/image/v2/D560BAQGREzSyNC8Gtw/company-logo_200_200/company-logo_200_200/0/1687330866404/aviso_inc_logo?e=2147483647&v=beta&t=8-c6FAeLmXM5IIbukECZ4W6vgIhc7bdaEYOWfOaMWYw" alt="Aviso" className="h-10 w-auto rounded" />
            <div className="hidden md:flex items-center gap-2 border-l border-white/20 pl-4 text-sm font-semibold tracking-wide">
              Document Generators
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <div className="md:hidden flex bg-white/10 rounded-md p-1">
              <button onClick={() => setActiveTab("form")} className={`px-3 py-1 text-sm rounded ${activeTab === "form" ? "bg-primary text-white" : "text-white/70"}`}>Form</button>
              <button onClick={() => setActiveTab("preview")} className={`px-3 py-1 text-sm rounded ${activeTab === "preview" ? "bg-primary text-white" : "text-white/70"}`}>Preview</button>
            </div>
            <button onClick={handleExportPDF} disabled={isExporting} className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 text-sm font-semibold transition-colors rounded">
              {isExporting ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />} Export PDF
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-24 pb-12 px-4 container mx-auto flex flex-col md:flex-row gap-8 justify-center print:block print:p-0 print:m-0 print:max-w-none">
        
        {/* Form Section */}
        <div className={`w-full md:w-[360px] bg-white/5 border border-white/10 rounded-xl p-6 flex-col gap-6 overflow-y-auto max-h-[calc(100vh-140px)] sticky top-28 print:hidden shrink-0 ${activeTab === "form" ? "flex" : "hidden md:flex"}`}>
          <div className="flex items-center gap-2 border-b border-white/10 pb-4">
            <Settings2 className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold">Offer Details</h2>
          </div>
          
          <div className="space-y-4">
            <div className="grid gap-4">
              <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest">Metadata</h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs mb-1 text-white/80">Date</label>
                  <input type="text" name="date" value={formData.date} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                </div>
                <div>
                  <label className="block text-xs mb-1 text-white/80">Reference No</label>
                  <input type="text" name="referenceNo" value={formData.referenceNo} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                </div>
              </div>
            </div>

            <div className="grid gap-4 pt-4 border-t border-white/10">
              <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest">Candidate</h3>
              <div>
                <label className="block text-xs mb-1 text-white/80">Full Name</label>
                <input type="text" name="candidateName" value={formData.candidateName} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
              </div>
              <div>
                <label className="block text-xs mb-1 text-white/80">Address Line 1</label>
                <textarea name="candidateAddress" value={formData.candidateAddress} onChange={handleChange} rows={2} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none resize-none" />
              </div>
              <div>
                <label className="block text-xs mb-1 text-white/80">City, State, PIN</label>
                <input type="text" name="cityStatePin" value={formData.cityStatePin} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs mb-1 text-white/80">Mobile / Contact</label>
                  <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                </div>
                <div>
                  <label className="block text-xs mb-1 text-white/80">Email ID</label>
                  <input type="text" name="emailId" value={formData.emailId} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                </div>
              </div>
            </div>

            <div className="grid gap-4 pt-4 border-t border-white/10">
              <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest">Job Details</h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs mb-1 text-white/80">Role / Position</label>
                  <input type="text" name="role" value={formData.role} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                </div>
                <div>
                  <label className="block text-xs mb-1 text-white/80">Department</label>
                  <input type="text" name="department" value={formData.department} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs mb-1 text-white/80">Joining Date</label>
                  <input type="text" name="joiningDate" value={formData.joiningDate} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                </div>
                <div>
                  <label className="block text-xs mb-1 text-white/80">Reports To</label>
                  <input type="text" name="reportsTo" value={formData.reportsTo} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs mb-1 text-white/80">Location</label>
                  <input type="text" name="workLocation" value={formData.workLocation} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                </div>
                <div>
                  <label className="block text-xs mb-1 text-white/80">Probation (Months)</label>
                  <input type="text" name="probationPeriod" value={formData.probationPeriod} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                </div>
              </div>
            </div>
            
            <div className="grid gap-4 pt-4 border-t border-white/10">
              <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest">Compensation</h3>
              
              <div className="bg-white/5 p-3 rounded-md border border-white/10 mb-4 space-y-3">
                <div>
                  <label className="block text-[10px] mb-1 text-white/70 font-semibold uppercase tracking-wider">Calculate from Annual CTC</label>
                  <div className="flex gap-2">
                    <input type="text" id="forwardCTC" placeholder="e.g. 30,00,000" className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none placeholder:text-white/20" />
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
                    }} className="bg-[#E93D44] text-white px-3 py-2 rounded text-xs font-bold shrink-0 hover:bg-[#E93D44]/90 transition-colors">
                      Apply
                    </button>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 mt-2">
                  <label className="block text-[10px] mb-1 text-[#E93D44] font-bold uppercase tracking-wider">Reverse Calc from Monthly Take-Home</label>
                  <div className="flex gap-2">
                    <input type="text" id="targetTakeHome" placeholder="e.g. 2,23,000" className="w-full bg-black/50 border border-[#E93D44]/30 rounded px-3 py-2 text-sm focus:border-[#E93D44] outline-none placeholder:text-[#E93D44]/30" />
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
                    }} className="bg-[#E93D44] text-white px-3 py-2 rounded text-xs font-bold shrink-0 hover:bg-[#E93D44]/90 transition-colors">
                      Reverse
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2">
                  <label className="block text-xs mb-1 text-white/80">Base Salary (Annual CTC)</label>
                  <input type="text" name="annualCTC" value={formData.annualCTC} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs mb-1 text-white/80">Annual CTC (in Words)</label>
                  <input type="text" name="annualCTCWords" value={formData.annualCTCWords} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                </div>
              </div>
            </div>

            <div className="grid gap-4 pt-4 border-t border-white/10">
              <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest">Signatory</h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs mb-1 text-white/80">Signatory Name</label>
                  <input type="text" name="signatoryName" value={formData.signatoryName} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                </div>
                <div>
                  <label className="block text-xs mb-1 text-white/80">Designation</label>
                  <input type="text" name="signatoryDesignation" value={formData.signatoryDesignation} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-Page WYSIWYG Preview Section */}
        <div className={`print-container flex-1 overflow-y-auto bg-gray-200 p-6 rounded-xl md:flex flex-col gap-10 items-center relative print:block print:bg-transparent print:rounded-none print:p-0 print:m-0 print:overflow-visible ${activeTab === "preview" ? "flex" : "hidden"}`}>
          
          {/* Print Watermark element (rendered once, fixed position in CSS handles printing on all pages) */}
          <img src="https://media.licdn.com/dms/image/v2/D560BAQGREzSyNC8Gtw/company-logo_200_200/company-logo_200_200/0/1687330866404/aviso_inc_logo?e=2147483647&v=beta&t=8-c6FAeLmXM5IIbukECZ4W6vgIhc7bdaEYOWfOaMWYw" alt="" className="hidden print:block watermark grayscale" />

          {/* Absolute fixed header and footer purely for print so they glue to the physical page edges */}
          <div className="hidden print:block fixed top-0 left-0 w-full z-50 bg-white">
            <div className="px-10">
              <PageHeader isPrintFixed={true} />
            </div>
          </div>
          <div className="hidden print:block fixed bottom-0 left-0 w-full z-50 bg-white">
            <div className="px-10">
              <PageFooter isPrintFixed={true} />
            </div>
          </div>

          <div className="w-full max-w-[210mm] bg-white text-black shadow-2xl relative print:shadow-none print:w-full print:max-w-none print:h-auto overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.08] pointer-events-none print:hidden w-[60%] flex justify-center z-0">
              <img src="https://media.licdn.com/dms/image/v2/D560BAQGREzSyNC8Gtw/company-logo_200_200/company-logo_200_200/0/1687330866404/aviso_inc_logo?e=2147483647&v=beta&t=8-c6FAeLmXM5IIbukECZ4W6vgIhc7bdaEYOWfOaMWYw" alt="" className="w-full h-auto object-contain grayscale" />
            </div>

            <table className="w-full relative z-10">
              <thead>
                <tr>
                  <td>
                    {/* Real header for web preview, invisible spacer for print to prevent content overlapping fixed header */}
                    <div className="px-10 md:px-14 pt-10 md:pt-14 print:pt-0 print:opacity-0">
                      <PageHeader />
                    </div>
                  </td>
                </tr>
              </thead>
              
              <tbody>
                <tr>
                  <td>
                    <div className="px-10 md:px-14 font-sans text-[11px] text-gray-800 leading-relaxed">
                      
                      {/* --- START OF CONTENT FLOW --- */}
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <p><strong>Date:</strong> {formData.date}</p>
                          <p><strong>Offer Letter No:</strong> {formData.referenceNo}</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <p><strong>To,</strong></p>
                        <p>{formData.candidateName}</p>
                        <p>{formData.candidateAddress}</p>
                        <p>{formData.cityStatePin}</p>
                        <p>{formData.contactNumber}</p>
                        <p>{formData.emailId}</p>
                      </div>

                      <div className="mb-6">
                        <p><strong>Subject: Offer of Employment for the Position of {formData.role}</strong></p>
                        <p className="mt-2">Dear {formData.candidateName.split(' ')[0]},</p>
                      </div>

                      <div className="space-y-3 text-justify">
                        <p>We are pleased to inform you that after a thorough evaluation of your skills, experience, and potential, the Management of Aviso AI has decided to offer you the position of <span className="font-bold">{formData.role}</span>. We were impressed by your technical expertise and your alignment with our mission to build tomorrow's AI workforce and help Modern GTM Teams predict, guide, and simplify every revenue action.</p>
                        
                        <p>We believe your contributions will be invaluable in building our unified Revenue Operating System—featuring capabilities like Conversation Intelligence, Revenue Forecasting, Pipeline Inspection, Deal Acceleration, and our No-Code GTM Agent Studio. You will play a critical role in advancing <span className="font-bold">MIKI</span>, our AI assistant, and supporting enterprise clients like Honeywell, New Relic, Elastic, Armis, and RingCentral.</p>

                        <p>This offer letter is a comprehensive document outlining the terms and conditions of your employment. Please read it carefully.</p>

                        <div className="font-bold text-primary text-[12px] uppercase mt-6 mb-2 border-b border-gray-900 pb-1">PART A: JOB DESCRIPTION</div>
                        
                        <p className="font-bold">1. Position Details</p>
                        <table className="w-full text-[10px] mb-4 border-collapse">
                          <tbody>
                            <tr><Th>Position Title</Th><Td>{formData.role}</Td></tr>
                            <tr><Th>Department</Th><Td>{formData.department}</Td></tr>
                            <tr><Th>Reports To</Th><Td>{formData.reportsTo}</Td></tr>
                            <tr><Th>Employment Type</Th><Td>{formData.employmentType}</Td></tr>
                            <tr><Th>Work Location</Th><Td>{formData.workLocation}</Td></tr>
                            <tr><Th>Date of Joining</Th><Td>{formData.joiningDate}</Td></tr>
                            <tr><Th>Working Hours</Th><Td>{formData.workingHours} (Flexible as per business needs)</Td></tr>
                          </tbody>
                        </table>

                        <p className="font-bold mt-4">2. Role Overview</p>
                        <p>As a <span className="font-bold">{formData.role}</span> at Aviso AI, you will be responsible for architecting, developing, and deploying scalable, AI-driven solutions within our end-to-end platform. You will work on products that handle high-volume time-series data, real-time voice intelligence, state-of-the-art LLMs, and 360° product integrations. You will collaborate with cross-functional teams, mentor junior developers, and ensure our Agentic Workflows automatically adapt to real-time signals and org changes.</p>

                        <p className="font-bold mt-6">3. Key Responsibilities</p>
                        <table className="w-full text-[10px] mb-4 border-collapse">
                          <tbody>
                            <tr><Th>Architecture & Development</Th><Td>Design and develop robust backend systems, microservices, and APIs for Aviso's forecasting and revenue products.</Td></tr>
                            <tr><Th>Agentic AI Integration</Th><Td>Implement task-based multi-agents, Agent Studio capabilities, and real-time AI Avatars for revenue execution.</Td></tr>
                            <tr><Th>Performance Optimization</Th><Td>Optimize applications for speed and scalability using our proprietary Time-Series Database architectures.</Td></tr>
                            <tr><Th>Data Management</Th><Td>Build and maintain data pipelines for Marketing, Sales, and Success Intelligence.</Td></tr>
                            <tr><Th>Cloud & DevOps</Th><Td>Deploy and manage applications on AWS/GCP/Azure using Docker, Kubernetes, and CI/CD.</Td></tr>
                          </tbody>
                        </table>

                        <p className="font-bold mt-4">4. Technical Competencies (Qualifications & Skills)</p>
                        <table className="w-full text-[10px] mb-4 border-collapse">
                          <tbody>
                            <tr><Th>Experience</Th><Td>5+ years of professional software development experience.</Td></tr>
                            <tr><Th>Backend Languages</Th><Td>Strong proficiency in Python (Django/FastAPI) or Node.js (Express).</Td></tr>
                            <tr><Th>Cloud Platforms</Th><Td>Hands-on experience with AWS, GCP, or Azure services.</Td></tr>
                            <tr><Th>AI/ML Integration</Th><Td>Experience integrating State-of-the-Art LLMs, LangChain, and advanced reasoning models.</Td></tr>
                          </tbody>
                        </table>

                        <div className="font-bold text-primary text-[12px] uppercase mt-6 mb-2 border-b border-gray-900 pb-1">PART B: TERMS OF EMPLOYMENT</div>
                        
                        <p className="font-bold">5. Compensation & Benefits</p>
                        <table className="w-full text-[10px] mb-4 border-collapse">
                          <tbody>
                            <tr><Th>Annual CTC</Th><Td><span className="font-bold">INR {formData.annualCTC}</span> per annum (<span className="font-bold">Rupees {formData.annualCTCWords} only</span>).</Td></tr>
                            <tr><Th>Salary Breakup</Th><Td>As per the attached Annexure A – Salary Structure.</Td></tr>
                            <tr><Th>Performance Bonus</Th><Td><span className="font-bold">Up to {formData.targetBonus}</span> of annual CTC, payable annually.</Td></tr>
                            <tr><Th>ESOPs</Th><Td>Eligible for <span className="font-bold">{formData.esops} stock options</span> under Aviso Software ESOP 2026 Plan.</Td></tr>
                            <tr><Th>Medical Insurance</Th><Td>Family floater health insurance coverage of INR 5-10 Lakhs.</Td></tr>
                          </tbody>
                        </table>

                        <p className="font-bold mt-6">6. Probation Period</p>
                        <p>You shall be on probation for a period of <span className="font-bold">{formData.probationPeriod} months</span> from the date of joining. Upon successful completion, you will be confirmed in writing. The company reserves the right to extend probation or terminate with <span className="font-bold">{formData.noticePeriodProbation} days'</span> notice.</p>
                        
                        <p className="font-bold mt-4">7. Notice Period</p>
                        <p>During Probation: <span className="font-bold">{formData.noticePeriodProbation} days</span>. Post-Confirmation: <span className="font-bold">{formData.noticePeriodConfirmed} days</span> or salary in lieu thereof.</p>
                        
                        <p className="font-bold mt-4">8. Termination</p>
                        <p>Either party may terminate by serving notice. Immediate termination applies in cases of gross misconduct or fraud.</p>

                        <div className="font-bold text-primary text-[12px] uppercase mt-6 mb-2 border-b border-gray-900 pb-1">PART C: CONFIDENTIALITY & NDA</div>
                        
                        <p className="font-bold">9. Confidential Information</p>
                        <p>Includes source code, AI models, MIKI reasoning capabilities, Agent Studio frameworks, trade secrets, client data, and proprietary algorithms of Aviso AI.</p>

                        <p className="font-bold mt-4">10. Non-Disclosure Obligations</p>
                        <p>You shall not disclose any Confidential Information to third parties and use it solely for Company duties.</p>

                        <p className="font-bold mt-4">11. Intellectual Property (IP) Assignment</p>
                        <p>All IP created by you during employment shall be the sole property of Aviso Software India LLP. Works are deemed "works made for hire".</p>

                        <div className="font-bold text-primary text-[12px] uppercase mt-6 mb-2 border-b border-gray-900 pb-1">PART D: PRIVACY POLICY</div>
                        <p>Aviso AI complies with SOC2, ISO 27001:2022 and DPDPA 2023. Your personal data is processed solely for employment purposes.</p>

                        <div className="font-bold text-primary text-[12px] uppercase mt-6 mb-2 border-b border-gray-900 pb-1">PART E: CODE OF CONDUCT & POLICIES</div>
                        <p>You agree to adhere to all policies including ISO 9001, POSH, and the Information Security Policy. Employment is subject to background verification.</p>

                        <div className="font-bold text-primary text-[12px] uppercase mt-6 mb-2 border-b border-gray-900 pb-1">PART F: ACCEPTANCE & ACKNOWLEDGEMENT</div>
                        <p>This offer and employment shall be governed by the laws of India, subject to exclusive jurisdiction in {formData.cityStatePin.split(',')[0]}.</p>
                        
                        <div className="font-bold text-primary text-[12px] uppercase mt-6 mb-2 border-b border-gray-900 pb-1">PART G: SIGNATURES</div>
                        <div className="mt-8 pt-4 grid grid-cols-2 gap-8 mb-10" style={{ pageBreakInside: 'avoid' }}>
                          <div>
                            <p className="font-bold mb-8">For Aviso Software India LLP</p>
                            <p className="font-bold text-gray-900 border-t border-gray-400 pt-1 w-48">{formData.signatoryName}</p>
                            <p>{formData.signatoryDesignation}</p>
                          </div>
                          <div>
                            <p className="font-bold mb-8">Employee Acceptance</p>
                            <p className="font-bold text-gray-900 border-t border-gray-400 pt-1 w-48">{formData.candidateName}</p>
                            <p>Date: ________________</p>
                          </div>
                        </div>

                        {/* Force page break before Annexure A */}
                        <div style={{ pageBreakBefore: 'always' }}></div>

                        <div className="font-bold text-primary text-[14px] uppercase mb-4 text-center mt-6">ANNEXURE A – SALARY STRUCTURE</div>
                        <p className="mb-4"><strong>Employee Name:</strong> {formData.candidateName}<br/><strong>Annual CTC:</strong> INR {formData.annualCTC}</p>
                        
                        <table className="w-full text-[10px] mb-4 border border-gray-300 border-collapse bg-white/90">
                          <thead className="bg-[#E93D44] text-white">
                            <tr><th className="py-2 px-3 text-left border border-[#E93D44]">Salary Component</th><th className="py-2 px-3 text-right border border-[#E93D44]">Monthly (INR)</th><th className="py-2 px-3 text-right border border-[#E93D44]">Annual (INR)</th></tr>
                          </thead>
                          {(() => {
                            const parseNumber = (val: string) => parseInt(val.replace(/,/g, "")) || 0;
                            const formatNumber = (num: number) => Math.round(num).toLocaleString('en-IN');
                            const annual = parseNumber(formData.annualCTC);
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
                              <tbody>
                                <tr className="bg-gray-100"><td colSpan={3} className="py-1.5 px-3 font-bold border border-gray-300 text-gray-800 uppercase text-[9px]">Earnings</td></tr>
                                <tr><Td>Basic Salary</Td><Td><div className="text-right">{formatNumber(basicA / 12)}</div></Td><Td><div className="text-right">{formatNumber(basicA)}</div></Td></tr>
                                <tr><Td>House Rent Allowance (HRA)</Td><Td><div className="text-right">{formatNumber(hraA / 12)}</div></Td><Td><div className="text-right">{formatNumber(hraA)}</div></Td></tr>
                                <tr><Td>Special Allowance</Td><Td><div className="text-right">{formatNumber(specialA / 12)}</div></Td><Td><div className="text-right">{formatNumber(specialA)}</div></Td></tr>
                                <tr className="bg-gray-50 font-bold"><Td>Gross Salary (A)</Td><Td><div className="text-right text-gray-900">{formatNumber(annual / 12)}</div></Td><Td><div className="text-right text-gray-900">{formatNumber(annual)}</div></Td></tr>
                                
                                <tr className="bg-gray-100"><td colSpan={3} className="py-1.5 px-3 font-bold border border-gray-300 text-gray-800 uppercase text-[9px]">Deductions</td></tr>
                                <tr><Td>Provident Fund (PF)</Td><Td><div className="text-right">{formatNumber(pfM)}</div></Td><Td><div className="text-right">{formatNumber(pfA)}</div></Td></tr>
                                <tr><Td>Professional Tax (PT)</Td><Td><div className="text-right">{formatNumber(ptM)}</div></Td><Td><div className="text-right">{formatNumber(ptA)}</div></Td></tr>
                                <tr><Td>Income Tax (TDS @ 10%)</Td><Td><div className="text-right">{formatNumber(tdsM)}</div></Td><Td><div className="text-right">{formatNumber(tdsA)}</div></Td></tr>
                                <tr className="bg-gray-50 font-bold"><Td>Total Deductions (B)</Td><Td><div className="text-right text-gray-900">{formatNumber(pfM + ptM + tdsM)}</div></Td><Td><div className="text-right text-gray-900">{formatNumber(deductionsA)}</div></Td></tr>
                                
                                <tr className="bg-gray-200 font-bold"><Td>Net Take Home (A - B)</Td><Td><div className="text-right text-black text-[11px]">{formatNumber((annual / 12) - (pfM + ptM + tdsM))}</div></Td><Td><div className="text-right text-black text-[11px]">{formatNumber(netA)}</div></Td></tr>
                              </tbody>
                            );
                          })()}
                        </table>
                        <p className="text-[9px] text-gray-500 italic mb-8">* Note: Income Tax (TDS) has been calculated at a flat 10% rate. Final tax liability may vary based on actual investment declarations.</p>
                        <div className="mt-16 mb-4">
                          <p className="font-bold text-gray-900 border-t border-gray-400 pt-1 w-48 inline-block">Employee Signature</p>
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
                    {/* Real footer for web preview, invisible spacer for print to prevent content overlapping fixed footer */}
                    <div className="px-10 md:px-14 print:opacity-0">
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

export default OfferLetter;
