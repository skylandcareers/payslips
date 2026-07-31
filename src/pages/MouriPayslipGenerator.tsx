import { useState } from "react";
import { Link } from "react-router-dom";
import { Download, Check, Settings2 } from "lucide-react";

const MouriPayslipGenerator = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [activeTab, setActiveTab] = useState<"form" | "preview">("form");

  const [formData, setFormData] = useState({
    payPeriod: "July 2026",
    employeeName: "John Doe",
    employeeId: "AVS-0042",
    designation: "Senior Software Engineer",
    department: "Engineering",
    doj: "August 1, 2026",
    location: "Hyderabad",
    bankName: "HDFC Bank",
    bankAccount: "XXXXXXXX1234",
    panNo: "ABCDE1234F",
    pfNo: "MH/BAN/12345/678",
    uan: "100000000000",
    totalDays: "31",
    lwp: "0",
    paidDays: "31",
    basic: "1,45,833",
    hra: "58,333",
    specialAllowance: "87,500",
    leaveTravelAllowance: "0",
    otherAllowances: "0",
    pf: "1,800",
    professionalTax: "200",
    tds: "25,000",
    otherDeductions: "0",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleExportPDF = () => {
    window.print();
  };

  const parseNumber = (val: string) => parseInt(val.replace(/,/g, "")) || 0;
  
  const basic = parseNumber(formData.basic);
  const hra = parseNumber(formData.hra);
  const special = parseNumber(formData.specialAllowance);
  const lta = parseNumber(formData.leaveTravelAllowance);
  const otherEarnings = parseNumber(formData.otherAllowances);
  const totalEarnings = basic + hra + special + lta + otherEarnings;

  const pf = parseNumber(formData.pf);
  const pt = parseNumber(formData.professionalTax);
  const tds = parseNumber(formData.tds);
  const otherDed = parseNumber(formData.otherDeductions);
  const totalDeductions = pf + pt + tds + otherDed;

  const netPay = totalEarnings - totalDeductions;

  // Simple number to words converter (for Indian Rupees)
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
    return convert(num) + " Rupees Only";
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary/30 flex flex-col print:bg-transparent print:text-black">
      <style>
        {`
          @media print {
            @page { size: A4; margin: 0; }
            body { 
              -webkit-print-color-adjust: exact !important; 
              print-color-adjust: exact !important; 
              background: transparent !important; 
            }
            .page-container {
              box-shadow: none !important;
              margin: 0 !important;
              width: 100% !important;
              max-width: none !important;
              min-height: 100vh !important;
              padding: 15mm 20mm !important;
              position: relative;
            }
            /* Watermark for print */
            .watermark {
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              opacity: 0.08;
              z-index: 20;
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
            <img src="https://www.mouritech.com/wp-content/uploads/2021/10/MT-Home-Logo-1-1.png" alt="MOURI Tech" className="h-10 w-auto rounded" />
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
            <h2 className="text-lg font-semibold">Payslip Details</h2>
          </div>
          
          <div className="space-y-4">
            <div className="grid gap-4">
              <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest">Metadata</h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs mb-1 text-white/80">Pay Period</label>
                  <input type="text" name="payPeriod" value={formData.payPeriod} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                </div>
              </div>
            </div>

            <div className="grid gap-4 pt-4 border-t border-white/10">
              <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest">Employee Profile</h3>
              <div>
                <label className="block text-xs mb-1 text-white/80">Employee Name</label>
                <input type="text" name="employeeName" value={formData.employeeName} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs mb-1 text-white/80">Employee ID</label>
                  <input type="text" name="employeeId" value={formData.employeeId} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                </div>
                <div>
                  <label className="block text-xs mb-1 text-white/80">Date of Joining</label>
                  <input type="text" name="doj" value={formData.doj} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs mb-1 text-white/80">Designation</label>
                  <input type="text" name="designation" value={formData.designation} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                </div>
                <div>
                  <label className="block text-xs mb-1 text-white/80">Department</label>
                  <input type="text" name="department" value={formData.department} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                </div>
              </div>
            </div>

            <div className="grid gap-4 pt-4 border-t border-white/10">
              <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest">Tax & Bank</h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs mb-1 text-white/80">PAN No.</label>
                  <input type="text" name="panNo" value={formData.panNo} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                </div>
                <div>
                  <label className="block text-xs mb-1 text-white/80">UAN</label>
                  <input type="text" name="uan" value={formData.uan} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs mb-1 text-white/80">PF No.</label>
                  <input type="text" name="pfNo" value={formData.pfNo} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                </div>
                <div>
                  <label className="block text-xs mb-1 text-white/80">Location</label>
                  <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs mb-1 text-white/80">Bank Name</label>
                  <input type="text" name="bankName" value={formData.bankName} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                </div>
                <div>
                  <label className="block text-xs mb-1 text-white/80">Bank A/C No.</label>
                  <input type="text" name="bankAccount" value={formData.bankAccount} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                </div>
              </div>
            </div>

            <div className="grid gap-4 pt-4 border-t border-white/10">
              <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest">Attendance</h3>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs mb-1 text-white/80">Total Days</label>
                  <input type="text" name="totalDays" value={formData.totalDays} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                </div>
                <div>
                  <label className="block text-xs mb-1 text-white/80">LWP</label>
                  <input type="text" name="lwp" value={formData.lwp} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                </div>
                <div>
                  <label className="block text-xs mb-1 text-white/80">Paid Days</label>
                  <input type="text" name="paidDays" value={formData.paidDays} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                </div>
              </div>
            </div>

            <div className="grid gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest">Earnings</h3>
              </div>
              <div className="bg-white/5 p-3 rounded-md border border-white/10 mb-4 space-y-3">
                <div>
                  <label className="block text-[10px] mb-1 text-white/70 font-semibold uppercase tracking-wider">Calculate from Annual CTC</label>
                  <div className="flex gap-2">
                    <input type="text" id="autoCTC" placeholder="e.g. 30,00,000" className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none placeholder:text-white/20" />
                    <button type="button" onClick={() => {
                      const input = document.getElementById('autoCTC') as HTMLInputElement;
                      const annualCTC = parseInt(input.value.replace(/,/g, "")) || 0;
                      if (annualCTC > 0) {
                        const basic = annualCTC * 0.5;
                        const hra = basic * 0.4;
                        const special = annualCTC - basic - hra;
                        const pf = (basic / 12) * 0.12;
                        const pt = 200;
                        const tds = annualCTC * 0.10;
                        
                        const formatNumber = (num: number) => Math.round(num).toLocaleString('en-IN');
                        
                        setFormData(prev => ({
                          ...prev,
                          basic: formatNumber(basic / 12),
                          hra: formatNumber(hra / 12),
                          specialAllowance: formatNumber(special / 12),
                          pf: formatNumber(pf),
                          professionalTax: formatNumber(pt),
                          tds: formatNumber(tds / 12)
                        }));
                      }
                    }} className="bg-[#005A9C] text-white px-3 py-2 rounded text-xs font-bold shrink-0 hover:bg-[#005A9C]/90 transition-colors">
                      Apply
                    </button>
                  </div>
                </div>
                
                <div className="pt-3 border-t border-white/10 mt-2">
                  <label className="block text-[10px] mb-1 text-[#005A9C] font-bold uppercase tracking-wider">Reverse Calc from Take-Home</label>
                  <div className="flex gap-2">
                    <input type="text" id="autoTakeHome" placeholder="e.g. 2,23,000" className="w-full bg-black/50 border border-[#005A9C]/30 rounded px-3 py-2 text-sm focus:border-[#005A9C] outline-none placeholder:text-[#005A9C]/30" />
                    <button type="button" onClick={() => {
                      const input = document.getElementById('autoTakeHome') as HTMLInputElement;
                      const takeHome = parseInt(input.value.replace(/,/g, "")) || 0;
                      if (takeHome > 0) {
                        // Math: net = (CTC/12) - (0.12*0.5*CTC/12) - 200 - (0.10*CTC/12) 
                        // net = (CTC/12) - (0.06*CTC/12) - (0.10*CTC/12) - 200
                        // net = (0.84*CTC/12) - 200 -> CTC = ((net + 200) * 12) / 0.84
                        const annualCTC = ((takeHome + 200) * 12) / 0.84;
                        
                        const ctcInput = document.getElementById('autoCTC') as HTMLInputElement;
                        if (ctcInput) ctcInput.value = Math.round(annualCTC).toLocaleString('en-IN');
                        
                        const basic = annualCTC * 0.5;
                        const hra = basic * 0.4;
                        const special = annualCTC - basic - hra;
                        const pf = (basic / 12) * 0.12;
                        const pt = 200;
                        const tds = annualCTC * 0.10;
                        
                        const formatNumber = (num: number) => Math.round(num).toLocaleString('en-IN');
                        
                        setFormData(prev => ({
                          ...prev,
                          basic: formatNumber(basic / 12),
                          hra: formatNumber(hra / 12),
                          specialAllowance: formatNumber(special / 12),
                          pf: formatNumber(pf),
                          professionalTax: formatNumber(pt),
                          tds: formatNumber(tds / 12)
                        }));
                      }
                    }} className="bg-[#005A9C] text-white px-3 py-2 rounded text-xs font-bold shrink-0 hover:bg-[#005A9C]/90 transition-colors">
                      Reverse
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs mb-1 text-white/80">Basic</label>
                  <input type="text" name="basic" value={formData.basic} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                </div>
                <div>
                  <label className="block text-xs mb-1 text-white/80">HRA</label>
                  <input type="text" name="hra" value={formData.hra} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                </div>
                <div>
                  <label className="block text-xs mb-1 text-white/80">Special Allowance</label>
                  <input type="text" name="specialAllowance" value={formData.specialAllowance} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                </div>
                <div>
                  <label className="block text-xs mb-1 text-white/80">LTA</label>
                  <input type="text" name="leaveTravelAllowance" value={formData.leaveTravelAllowance} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                </div>
              </div>
            </div>

            <div className="grid gap-4 pt-4 border-t border-white/10">
              <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest">Deductions</h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs mb-1 text-white/80">PF</label>
                  <input type="text" name="pf" value={formData.pf} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                </div>
                <div>
                  <label className="block text-xs mb-1 text-white/80">Prof. Tax</label>
                  <input type="text" name="professionalTax" value={formData.professionalTax} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                </div>
                <div>
                  <label className="block text-xs mb-1 text-white/80">TDS</label>
                  <input type="text" name="tds" value={formData.tds} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WYSIWYG Preview Section */}
        <div className={`print-container flex-1 overflow-y-auto bg-gray-200 p-6 rounded-xl md:flex flex-col gap-10 items-center relative print:block print:bg-transparent print:rounded-none print:p-0 print:m-0 print:overflow-visible ${activeTab === "preview" ? "flex" : "hidden"}`}>
          
          {/* Print Watermark element */}
          <img src="https://www.mouritech.com/wp-content/uploads/2021/10/MT-Home-Logo-1-1.png" alt="" className="hidden print:block watermark grayscale" />

          <div className="page-container w-full max-w-[210mm] min-h-[297mm] bg-white text-black shadow-2xl p-10 md:p-14 relative flex flex-col print:shadow-none print:w-full print:max-w-none print:h-auto font-sans overflow-hidden">
            
            {/* Subtle Screen Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.10] pointer-events-none print:hidden w-[60%] flex justify-center z-20">
              <img src="https://www.mouritech.com/wp-content/uploads/2021/10/MT-Home-Logo-1-1.png" alt="" className="w-full h-auto object-contain grayscale" />
            </div>

            <div className="relative z-10 flex flex-col h-full flex-1">
              
              {/* Corporate Payslip Header */}
              <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6 pt-2 bg-white">
                <div>
                  <img src="/mouri_logo_new.png" alt="mouri tech logo" className="h-16 w-auto object-contain" />
                </div>
                <div className="text-right">
                  <h1 className="text-[18px] font-extrabold text-[#005A9C] uppercase tracking-wider">MOURI Tech Limited</h1>
                  <p className="text-[10px] text-gray-600 mt-1 max-w-[280px] ml-auto leading-relaxed">
                    Survey No. 64, 4th Floor, SBR Surya Pearl Sector III, Hitech City, Madhapur, Hyderabad, TS 500081, INDIA<br/>
                    <span className="text-gray-400">P:</span> +91 40 67254100 &nbsp;|&nbsp; <span className="text-gray-400">CIN:</span> U72200TG2005PTC048486<br/>
                    <span className="text-gray-400">E:</span> info@mouritech.org.in &nbsp;|&nbsp; <span className="text-gray-400">W:</span> mouritech.com
                  </p>
                </div>
              </div>

              <div className="text-center mb-6 bg-gray-100/80 py-2.5 border-y border-gray-300">
                <h2 className="text-[13px] font-bold text-gray-900 uppercase tracking-widest">Payslip for the month of {formData.payPeriod}</h2>
              </div>

              {/* Employee Details Grid - Compact Table */}
              <div className="mb-6 relative z-10">
                <table className="w-full text-[11px] border border-gray-300 border-collapse bg-white/90">
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-1.5 bg-gray-50 text-gray-600 font-semibold w-1/4">Employee Name</td>
                      <td className="border border-gray-300 p-1.5 font-bold text-gray-900 w-1/4">{formData.employeeName}</td>
                      <td className="border border-gray-300 p-1.5 bg-gray-50 text-gray-600 font-semibold w-1/4">UAN</td>
                      <td className="border border-gray-300 p-1.5 text-gray-900 w-1/4">{formData.uan}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-1.5 bg-gray-50 text-gray-600 font-semibold">Employee ID</td>
                      <td className="border border-gray-300 p-1.5 text-gray-900">{formData.employeeId}</td>
                      <td className="border border-gray-300 p-1.5 bg-gray-50 text-gray-600 font-semibold">PF No.</td>
                      <td className="border border-gray-300 p-1.5 text-gray-900">{formData.pfNo}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-1.5 bg-gray-50 text-gray-600 font-semibold">Designation</td>
                      <td className="border border-gray-300 p-1.5 text-gray-900">{formData.designation}</td>
                      <td className="border border-gray-300 p-1.5 bg-gray-50 text-gray-600 font-semibold">PAN</td>
                      <td className="border border-gray-300 p-1.5 text-gray-900">{formData.panNo}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-1.5 bg-gray-50 text-gray-600 font-semibold">Department</td>
                      <td className="border border-gray-300 p-1.5 text-gray-900">{formData.department}</td>
                      <td className="border border-gray-300 p-1.5 bg-gray-50 text-gray-600 font-semibold">Bank Name</td>
                      <td className="border border-gray-300 p-1.5 text-gray-900">{formData.bankName}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-1.5 bg-gray-50 text-gray-600 font-semibold">Date of Joining</td>
                      <td className="border border-gray-300 p-1.5 text-gray-900">{formData.doj}</td>
                      <td className="border border-gray-300 p-1.5 bg-gray-50 text-gray-600 font-semibold">Bank A/C No.</td>
                      <td className="border border-gray-300 p-1.5 text-gray-900">{formData.bankAccount}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-1.5 bg-gray-50 text-gray-600 font-semibold">Location</td>
                      <td className="border border-gray-300 p-1.5 text-gray-900">{formData.location}</td>
                      <td className="border border-gray-300 p-1.5 bg-gray-50 text-gray-600 font-semibold">Total / LWP / Paid Days</td>
                      <td className="border border-gray-300 p-1.5 text-gray-900">{formData.totalDays} / {formData.lwp} / {formData.paidDays}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Earnings & Deductions - Compact Table */}
              <div className="mb-6 relative z-10">
                <table className="w-full text-[11px] border border-gray-300 border-collapse bg-white/90">
                  <thead>
                    <tr className="bg-gray-100 text-gray-900 uppercase tracking-wider text-[10px]">
                      <th className="border border-gray-300 p-2 text-left w-[35%]">Earnings</th>
                      <th className="border border-gray-300 p-2 text-right w-[15%]">Amount (₹)</th>
                      <th className="border border-gray-300 p-2 text-left w-[35%]">Deductions</th>
                      <th className="border border-gray-300 p-2 text-right w-[15%]">Amount (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-l border-r border-gray-300 p-1.5 text-gray-800">Basic Salary</td>
                      <td className="border-r border-gray-300 p-1.5 text-right font-medium">{basic.toLocaleString('en-IN')}</td>
                      <td className="border-r border-gray-300 p-1.5 text-gray-800">Provident Fund</td>
                      <td className="border-r border-gray-300 p-1.5 text-right font-medium">{pf.toLocaleString('en-IN')}</td>
                    </tr>
                    <tr>
                      <td className="border-l border-r border-gray-300 p-1.5 text-gray-800">House Rent Allowance</td>
                      <td className="border-r border-gray-300 p-1.5 text-right font-medium">{hra.toLocaleString('en-IN')}</td>
                      <td className="border-r border-gray-300 p-1.5 text-gray-800">Professional Tax</td>
                      <td className="border-r border-gray-300 p-1.5 text-right font-medium">{pt.toLocaleString('en-IN')}</td>
                    </tr>
                    <tr>
                      <td className="border-l border-r border-gray-300 p-1.5 text-gray-800">Special Allowance</td>
                      <td className="border-r border-gray-300 p-1.5 text-right font-medium">{special.toLocaleString('en-IN')}</td>
                      <td className="border-r border-gray-300 p-1.5 text-gray-800">Income Tax (TDS)</td>
                      <td className="border-r border-gray-300 p-1.5 text-right font-medium">{tds.toLocaleString('en-IN')}</td>
                    </tr>
                    <tr>
                      <td className="border-l border-r border-gray-300 p-1.5 text-gray-800">Leave Travel Allowance</td>
                      <td className="border-r border-gray-300 p-1.5 text-right font-medium">{lta.toLocaleString('en-IN')}</td>
                      <td className="border-r border-gray-300 p-1.5 text-gray-800">Other Deductions</td>
                      <td className="border-r border-gray-300 p-1.5 text-right font-medium">{otherDed.toLocaleString('en-IN')}</td>
                    </tr>
                    <tr>
                      <td className="border-l border-r border-gray-300 p-1.5 text-gray-800">Other Allowances</td>
                      <td className="border-r border-gray-300 p-1.5 text-right font-medium">{otherEarnings.toLocaleString('en-IN')}</td>
                      <td className="border-r border-gray-300 p-1.5 text-gray-800"></td>
                      <td className="border-r border-gray-300 p-1.5 text-right font-medium"></td>
                    </tr>
                    {/* Empty rows to pad space if needed */}
                    <tr>
                      <td className="border-l border-r border-gray-300 p-1.5">&nbsp;</td>
                      <td className="border-r border-gray-300 p-1.5"></td>
                      <td className="border-r border-gray-300 p-1.5"></td>
                      <td className="border-r border-gray-300 p-1.5"></td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className="bg-gray-100 border border-gray-300">
                      <td className="p-2 font-bold text-gray-900 uppercase text-[10px]">Total Earnings (A)</td>
                      <td className="p-2 text-right font-bold text-gray-900 border-r border-gray-300">{totalEarnings.toLocaleString('en-IN')}</td>
                      <td className="p-2 font-bold text-gray-900 uppercase text-[10px]">Total Deductions (B)</td>
                      <td className="p-2 text-right font-bold text-gray-900">{totalDeductions.toLocaleString('en-IN')}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* Net Pay */}
              <div className="mb-10 flex flex-col md:flex-row justify-between items-center bg-gray-50 border border-gray-300 p-3 rounded-sm gap-4 relative z-10">
                <div className="text-[11px] text-gray-700">
                  <span className="font-bold text-gray-900 block mb-0.5">Net Pay in Words:</span>
                  <span className="italic">{numberToWords(netPay)}</span>
                </div>
                <div className="text-right shrink-0">
                  <span className="uppercase font-bold text-gray-600 text-[10px] block mb-0.5">Net Pay (A - B)</span>
                  <span className="font-bold text-lg text-gray-900 tracking-tight">₹ {netPay.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Footer / Signature Area */}
              <div className="mt-8 text-center border-t border-gray-300 pt-3">
                <p className="text-gray-500 italic text-[9px]">* This is a computer-generated payslip and does not require a physical signature.</p>
              </div>
              {/* Subtle bottom padding */}
              <div className="pb-8"></div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MouriPayslipGenerator;
