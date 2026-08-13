import { useState } from "react";
import { Link } from "react-router-dom";
import { Download, Check, Settings2 } from "lucide-react";

const HR_LOGO = "https://cdn.highradius.com/wp-content/uploads/2024/06/HighRadius-Updated.svg";
const HR_COLOR = "#0047AB";

const HighradiusPayslipGenerator = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [activeTab, setActiveTab] = useState<"form" | "preview">("form");
  const [selectedFont, setSelectedFont] = useState("Calibri, Arial, sans-serif");

  const [formData, setFormData] = useState({
    payPeriod: "July 2026",
    employeeName: "Jinkal Patwari",
    employeeId: "HRC-0042",
    designation: "Director - Consulting",
    department: "Consulting",
    doj: "October 2, 2026",
    location: "Hyderabad",
    bankName: "HDFC Bank",
    bankAccount: "XXXXXXXX1234",
    panNo: "ABCDE1234F",
    pfNo: "TS/HYD/12345/678",
    uan: "100000000000",
    totalDays: "31",
    lwp: "0",
    paidDays: "31",
    basic: "2,18,023",
    hra: "87,209",
    lta: "21,802",
    telephone: "2,500",
    vehicle: "2,700",
    specialAllowance: "1,03,812",
    pf: "1,800",
    professionalTax: "200",
    tds: "25,000",
    otherDeductions: "0",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleExportPDF = () => { window.print(); };

  const parseNumber = (val: string) => parseInt(val.replace(/,/g, "")) || 0;

  const basic = parseNumber(formData.basic);
  const hra = parseNumber(formData.hra);
  const lta = parseNumber(formData.lta);
  const tele = parseNumber(formData.telephone);
  const vehicle = parseNumber(formData.vehicle);
  const special = parseNumber(formData.specialAllowance);
  const totalEarnings = basic + hra + lta + tele + vehicle + special;

  const pf = parseNumber(formData.pf);
  const pt = parseNumber(formData.professionalTax);
  const tds = parseNumber(formData.tds);
  const otherDed = parseNumber(formData.otherDeductions);
  const totalDeductions = pf + pt + tds + otherDed;
  const netPay = totalEarnings - totalDeductions;

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

  const PageHeader = () => (
    <div className="w-full flex justify-start items-center pt-4 pb-2 bg-white">
      <img
        src={HR_LOGO}
        alt="HighRadius"
        className="h-10 w-auto object-contain"
      />
    </div>
  );

  const PageFooter = () => (
    <div className="w-full text-center py-3 bg-white font-sans text-[9px] leading-tight text-gray-700 border-t border-gray-100">
      <p className="font-semibold text-gray-900">HighRadius Technologies Pvt. Ltd.</p>
      <p>Unit-1, 5th Floor, Block-3, DLF Cyber City, Plot No.129 to 132, Gachibowli, Hyderabad, Telangana-500019</p>
      <p><a href="https://www.highradius.com" target="_blank" rel="noreferrer" style={{ color: HR_COLOR }} className="underline font-medium">www.highradius.com</a></p>
    </div>
  );

  const inputCls = "w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-sky-400 outline-none";
  const labelCls = "block text-xs mb-1 text-white/80";

  return (
    <div className="min-h-screen bg-[#080C1A] text-white flex flex-col print:bg-transparent print:text-black">
      <style>
        {`
          @media print {
            @page { size: A4; margin: 0mm; }
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
              position: relative;
            }
          }
        `}
      </style>

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#080C1A]/95 backdrop-blur-md border-b border-white/10 print:hidden">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/highradius" className="flex items-center gap-4">
            <img src={HR_LOGO} alt="HighRadius" className="h-9 w-auto brightness-200 invert" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            <div className="hidden md:flex items-center gap-2 border-l border-white/20 pl-4 text-sm font-semibold tracking-wide text-white/80">
              Official Payslip Generator
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <div className="md:hidden flex bg-white/10 rounded-md p-1">
              <button onClick={() => setActiveTab("form")} className={`px-3 py-1 text-sm rounded ${activeTab === "form" ? "text-white" : "text-white/70"}`} style={activeTab === "form" ? { background: HR_COLOR } : {}}>Form</button>
              <button onClick={() => setActiveTab("preview")} className={`px-3 py-1 text-sm rounded ${activeTab === "preview" ? "text-white" : "text-white/70"}`} style={activeTab === "preview" ? { background: HR_COLOR } : {}}>Preview</button>
            </div>
            <button onClick={handleExportPDF} disabled={isExporting} className="inline-flex items-center gap-2 text-white px-5 py-2.5 text-sm font-semibold transition-opacity rounded hover:opacity-90" style={{ background: HR_COLOR }}>
              {isExporting ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />} Export PDF
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-24 pb-12 px-4 container mx-auto flex flex-col md:flex-row gap-8 justify-center print:block print:p-0 print:m-0 print:max-w-none">

        {/* Form Controls */}
        <div className={`w-full md:w-[360px] bg-white/5 border border-white/10 rounded-xl p-6 flex-col gap-6 overflow-y-auto max-h-[calc(100vh-140px)] sticky top-28 print:hidden shrink-0 ${activeTab === "form" ? "flex" : "hidden md:flex"}`}>
          <div className="flex items-center gap-2 border-b border-white/10 pb-4">
            <Settings2 className="w-5 h-5 text-sky-400" />
            <h2 className="text-lg font-semibold">Payslip Details</h2>
          </div>

          <div className="space-y-4">
            <div className="grid gap-4">
              <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest">Metadata</h3>
              <div>
                <label className={labelCls}>Document Font</label>
                <select
                  value={selectedFont}
                  onChange={(e) => setSelectedFont(e.target.value)}
                  className={`${inputCls} cursor-pointer font-medium text-white`}
                >
                  <option value="Calibri, Arial, sans-serif" className="bg-slate-900 text-white">Calibri / Arial (Official HighRadius PDF)</option>
                  <option value="'Times New Roman', Times, serif" className="bg-slate-900 text-white">Times New Roman (Serif)</option>
                  <option value="Inter, system-ui, sans-serif" className="bg-slate-900 text-white">Inter / Modern Sans</option>
                  <option value="'Courier New', Courier, monospace" className="bg-slate-900 text-white">Courier (Monospace)</option>
                </select>
              </div>
              <div><label className={labelCls}>Pay Period</label><input type="text" name="payPeriod" value={formData.payPeriod} onChange={handleChange} className={inputCls} /></div>
            </div>

            <div className="grid gap-4 pt-4 border-t border-white/10">
              <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest">Employee Profile</h3>
              <div><label className={labelCls}>Employee Name</label><input type="text" name="employeeName" value={formData.employeeName} onChange={handleChange} className={inputCls} /></div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className={labelCls}>Employee ID</label><input type="text" name="employeeId" value={formData.employeeId} onChange={handleChange} className={inputCls} /></div>
                <div><label className={labelCls}>Date of Joining</label><input type="text" name="doj" value={formData.doj} onChange={handleChange} className={inputCls} /></div>
                <div><label className={labelCls}>Designation</label><input type="text" name="designation" value={formData.designation} onChange={handleChange} className={inputCls} /></div>
                <div><label className={labelCls}>Department</label><input type="text" name="department" value={formData.department} onChange={handleChange} className={inputCls} /></div>
              </div>
            </div>

            <div className="grid gap-4 pt-4 border-t border-white/10">
              <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest">Tax & Bank</h3>
              <div className="grid grid-cols-2 gap-3">
                <div><label className={labelCls}>PAN No.</label><input type="text" name="panNo" value={formData.panNo} onChange={handleChange} className={inputCls} /></div>
                <div><label className={labelCls}>UAN</label><input type="text" name="uan" value={formData.uan} onChange={handleChange} className={inputCls} /></div>
                <div><label className={labelCls}>PF No.</label><input type="text" name="pfNo" value={formData.pfNo} onChange={handleChange} className={inputCls} /></div>
                <div><label className={labelCls}>Location</label><input type="text" name="location" value={formData.location} onChange={handleChange} className={inputCls} /></div>
                <div><label className={labelCls}>Bank Name</label><input type="text" name="bankName" value={formData.bankName} onChange={handleChange} className={inputCls} /></div>
                <div><label className={labelCls}>Bank A/C No.</label><input type="text" name="bankAccount" value={formData.bankAccount} onChange={handleChange} className={inputCls} /></div>
              </div>
            </div>

            <div className="grid gap-4 pt-4 border-t border-white/10">
              <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest">Attendance</h3>
              <div className="grid grid-cols-3 gap-3">
                <div><label className={labelCls}>Total Days</label><input type="text" name="totalDays" value={formData.totalDays} onChange={handleChange} className={inputCls} /></div>
                <div><label className={labelCls}>LWP</label><input type="text" name="lwp" value={formData.lwp} onChange={handleChange} className={inputCls} /></div>
                <div><label className={labelCls}>Paid Days</label><input type="text" name="paidDays" value={formData.paidDays} onChange={handleChange} className={inputCls} /></div>
              </div>
            </div>

            <div className="grid gap-4 pt-4 border-t border-white/10">
              <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest">Earnings</h3>
              <div className="grid grid-cols-2 gap-3">
                <div><label className={labelCls}>Basic</label><input type="text" name="basic" value={formData.basic} onChange={handleChange} className={inputCls} /></div>
                <div><label className={labelCls}>HRA</label><input type="text" name="hra" value={formData.hra} onChange={handleChange} className={inputCls} /></div>
                <div><label className={labelCls}>LTA</label><input type="text" name="lta" value={formData.lta} onChange={handleChange} className={inputCls} /></div>
                <div><label className={labelCls}>Telephone</label><input type="text" name="telephone" value={formData.telephone} onChange={handleChange} className={inputCls} /></div>
                <div><label className={labelCls}>Vehicle</label><input type="text" name="vehicle" value={formData.vehicle} onChange={handleChange} className={inputCls} /></div>
                <div><label className={labelCls}>Special Allowance</label><input type="text" name="specialAllowance" value={formData.specialAllowance} onChange={handleChange} className={inputCls} /></div>
              </div>
            </div>

            <div className="grid gap-4 pt-4 border-t border-white/10">
              <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest">Deductions</h3>
              <div className="grid grid-cols-2 gap-3">
                <div><label className={labelCls}>PF</label><input type="text" name="pf" value={formData.pf} onChange={handleChange} className={inputCls} /></div>
                <div><label className={labelCls}>Prof. Tax</label><input type="text" name="professionalTax" value={formData.professionalTax} onChange={handleChange} className={inputCls} /></div>
                <div><label className={labelCls}>TDS</label><input type="text" name="tds" value={formData.tds} onChange={handleChange} className={inputCls} /></div>
                <div><label className={labelCls}>Other Deductions</label><input type="text" name="otherDeductions" value={formData.otherDeductions} onChange={handleChange} className={inputCls} /></div>
              </div>
            </div>
          </div>
        </div>

        {/* WYSIWYG Preview */}
        <div className={`print-container flex-1 overflow-y-auto bg-gray-200 p-6 rounded-xl md:flex flex-col gap-10 items-center relative print:block print:bg-transparent print:rounded-none print:p-0 print:m-0 print:overflow-visible ${activeTab === "preview" ? "flex" : "hidden"}`} style={{ fontFamily: selectedFont }}>

          <div className="page-container w-full max-w-[210mm] min-h-[297mm] bg-white text-black shadow-2xl p-12 md:p-14 relative flex flex-col justify-between print:shadow-none print:w-full print:max-w-none font-sans">
            <div>
              <PageHeader />

              <div className="text-center mb-6 py-2 border-y border-gray-900 mt-4 bg-gray-50">
                <h2 className="text-[13px] font-bold text-gray-900 uppercase tracking-widest">
                  Payslip for the Month of {formData.payPeriod}
                </h2>
              </div>

              {/* Employee Details Table */}
              <div className="mb-6">
                <table className="w-full text-[11px] border border-gray-900 border-collapse bg-white">
                  <tbody>
                    <tr>
                      <td className="border border-gray-900 p-1.5 bg-gray-50 text-gray-700 font-semibold w-1/4">Employee Name</td>
                      <td className="border border-gray-900 p-1.5 font-bold text-gray-900 w-1/4">{formData.employeeName}</td>
                      <td className="border border-gray-900 p-1.5 bg-gray-50 text-gray-700 font-semibold w-1/4">UAN</td>
                      <td className="border border-gray-900 p-1.5 text-gray-900 w-1/4">{formData.uan}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-900 p-1.5 bg-gray-50 text-gray-700 font-semibold">Employee ID</td>
                      <td className="border border-gray-900 p-1.5 text-gray-900">{formData.employeeId}</td>
                      <td className="border border-gray-900 p-1.5 bg-gray-50 text-gray-700 font-semibold">PF No.</td>
                      <td className="border border-gray-900 p-1.5 text-gray-900">{formData.pfNo}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-900 p-1.5 bg-gray-50 text-gray-700 font-semibold">Designation</td>
                      <td className="border border-gray-900 p-1.5 text-gray-900">{formData.designation}</td>
                      <td className="border border-gray-900 p-1.5 bg-gray-50 text-gray-700 font-semibold">PAN</td>
                      <td className="border border-gray-900 p-1.5 text-gray-900">{formData.panNo}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-900 p-1.5 bg-gray-50 text-gray-700 font-semibold">Department</td>
                      <td className="border border-gray-900 p-1.5 text-gray-900">{formData.department}</td>
                      <td className="border border-gray-900 p-1.5 bg-gray-50 text-gray-700 font-semibold">Bank Name</td>
                      <td className="border border-gray-900 p-1.5 text-gray-900">{formData.bankName}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-900 p-1.5 bg-gray-50 text-gray-700 font-semibold">Date of Joining</td>
                      <td className="border border-gray-900 p-1.5 text-gray-900">{formData.doj}</td>
                      <td className="border border-gray-900 p-1.5 bg-gray-50 text-gray-700 font-semibold">Bank A/C No.</td>
                      <td className="border border-gray-900 p-1.5 text-gray-900">{formData.bankAccount}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-900 p-1.5 bg-gray-50 text-gray-700 font-semibold">Location</td>
                      <td className="border border-gray-900 p-1.5 text-gray-900">{formData.location}</td>
                      <td className="border border-gray-900 p-1.5 bg-gray-50 text-gray-700 font-semibold">Total / LWP / Paid Days</td>
                      <td className="border border-gray-900 p-1.5 text-gray-900">{formData.totalDays} / {formData.lwp} / {formData.paidDays}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Earnings & Deductions Table */}
              <div className="mb-6">
                <table className="w-full text-[11px] border border-gray-900 border-collapse bg-white">
                  <thead>
                    <tr className="bg-gray-100 text-gray-900 uppercase tracking-wider text-[10px] font-bold">
                      <th className="border border-gray-900 p-2 text-left w-[35%]">Earnings</th>
                      <th className="border border-gray-900 p-2 text-right w-[15%]">Amount (₹)</th>
                      <th className="border border-gray-900 p-2 text-left w-[35%]">Deductions</th>
                      <th className="border border-gray-900 p-2 text-right w-[15%]">Amount (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-900 p-1.5 text-gray-900">Basic Salary</td>
                      <td className="border border-gray-900 p-1.5 text-right font-medium">{basic.toLocaleString('en-IN')}</td>
                      <td className="border border-gray-900 p-1.5 text-gray-900">Provident Fund</td>
                      <td className="border border-gray-900 p-1.5 text-right font-medium">{pf.toLocaleString('en-IN')}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-900 p-1.5 text-gray-900">House Rent Allowance</td>
                      <td className="border border-gray-900 p-1.5 text-right font-medium">{hra.toLocaleString('en-IN')}</td>
                      <td className="border border-gray-900 p-1.5 text-gray-900">Professional Tax</td>
                      <td className="border border-gray-900 p-1.5 text-right font-medium">{pt.toLocaleString('en-IN')}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-900 p-1.5 text-gray-900">Leave Travel Allowance</td>
                      <td className="border border-gray-900 p-1.5 text-right font-medium">{lta.toLocaleString('en-IN')}</td>
                      <td className="border border-gray-900 p-1.5 text-gray-900">Income Tax (TDS)</td>
                      <td className="border border-gray-900 p-1.5 text-right font-medium">{tds.toLocaleString('en-IN')}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-900 p-1.5 text-gray-900">Telephone Reimbursement</td>
                      <td className="border border-gray-900 p-1.5 text-right font-medium">{tele.toLocaleString('en-IN')}</td>
                      <td className="border border-gray-900 p-1.5 text-gray-900">Other Deductions</td>
                      <td className="border border-gray-900 p-1.5 text-right font-medium">{otherDed.toLocaleString('en-IN')}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-900 p-1.5 text-gray-900">Vehicle maintenance reimbursement</td>
                      <td className="border border-gray-900 p-1.5 text-right font-medium">{vehicle.toLocaleString('en-IN')}</td>
                      <td className="border border-gray-900 p-1.5"></td>
                      <td className="border border-gray-900 p-1.5"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-900 p-1.5 text-gray-900">Special Allowance</td>
                      <td className="border border-gray-900 p-1.5 text-right font-medium">{special.toLocaleString('en-IN')}</td>
                      <td className="border border-gray-900 p-1.5"></td>
                      <td className="border border-gray-900 p-1.5"></td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className="bg-gray-50 font-bold border border-gray-900">
                      <td className="p-2 font-bold text-gray-900 uppercase text-[10px] border border-gray-900">Total Earnings (A)</td>
                      <td className="p-2 text-right font-bold text-gray-900 border border-gray-900">{totalEarnings.toLocaleString('en-IN')}</td>
                      <td className="p-2 font-bold text-gray-900 uppercase text-[10px] border border-gray-900">Total Deductions (B)</td>
                      <td className="p-2 text-right font-bold text-gray-900 border border-gray-900">{totalDeductions.toLocaleString('en-IN')}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* Net Pay */}
              <div className="mb-10 flex justify-between items-center border border-gray-900 p-3 bg-gray-50">
                <div className="text-[11px] text-gray-900">
                  <span className="font-bold block mb-0.5">Net Pay in Words:</span>
                  <span className="italic">{numberToWords(netPay)}</span>
                </div>
                <div className="text-right shrink-0">
                  <span className="uppercase font-bold text-gray-600 text-[10px] block mb-0.5">Net Pay (A - B)</span>
                  <span className="font-bold text-lg text-gray-900 tracking-tight">₹ {netPay.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="mt-8 text-center border-t border-gray-300 pt-3">
                <p className="text-gray-500 italic text-[9px]">* This is a computer-generated payslip and does not require a physical signature.</p>
              </div>
            </div>

            <PageFooter />
          </div>

        </div>
      </main>
    </div>
  );
};

export default HighradiusPayslipGenerator;
