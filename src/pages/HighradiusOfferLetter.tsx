import { useState } from "react";
import { Link } from "react-router-dom";
import { Download, Check, Settings2 } from "lucide-react";

const HR_LOGO = "https://cdn.highradius.com/wp-content/uploads/2024/06/HighRadius-Updated.svg";
const HR_COLOR = "#0047AB";

const HighRadiusLogo = () => (
  <img
    src={HR_LOGO}
    alt="HighRadius"
    className="h-10 w-auto object-contain"
  />
);

const HighradiusOfferLetter = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [activeTab, setActiveTab] = useState<"form" | "preview">("form");

  const [selectedFont, setSelectedFont] = useState("Calibri, Arial, sans-serif");
  const [formData, setFormData] = useState({
    date: "July 7, 2023",
    candidateName: "Jinkal Patwari",
    city: "Hyderabad",
    role: "Director - Consulting",
    effectiveDate: "October 2, 2023",
    annualCTC: "6,000,000",
    annualCTCWords: "Rupees Sixty Lakhs",
    relocationBonus: "600,000",
    relocationBonusWords: "Rupees Six Lakhs",
    stockShares: "2,000",
    probationMonths: "Three (3)",
    joiningDate: "October 2, 2023",
    workLocation: "Hyderabad",
    signatoryName: "Pooja Palviya",
    signatoryTitle: "VP - People & Culture",
    employeeAddress: "",
    employeePhone: "",
    employeeEmail: "jinkal.patwari@example.com",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleExportPDF = () => { window.print(); };

  const parseNum = (val: string) => parseInt(val.replace(/,/g, "")) || 0;
  const fmt = (n: number) => Math.round(n).toLocaleString("en-IN");

  const ctcAnnual = parseNum(formData.annualCTC);
  
  // Exact HighRadius PDF proportional breakdown
  const basicAnnual = Math.round(ctcAnnual * 0.436046); // 2,616,276 for 60L
  const hraAnnual = Math.round(basicAnnual * 0.40);       // 1,046,508
  const ltaAnnual = 261624;
  const teleAnnual = 30000;
  const vehicleAnnual = 32400;
  const specialAllowanceAnnual = 1245744;
  const totalGrossPayAnnual = basicAnnual + hraAnnual + ltaAnnual + teleAnnual + vehicleAnnual + specialAllowanceAnnual; // 5,232,552

  const plvpAnnual = 600000;
  const insuranceAnnual = 20007;
  const gratuityAnnual = 125844;
  const pfAnnual = 21600;
  const esicAnnual = 0;
  const totalBenefitsAnnual = insuranceAnnual + gratuityAnnual + pfAnnual + esicAnnual; // 167,448

  const PageHeader = () => (
    <div className="w-full flex justify-start items-center pt-2 pb-4 bg-white">
      <HighRadiusLogo />
    </div>
  );

  const PageFooter = () => (
    <div className="w-full text-center py-2 bg-white font-sans text-[9px] leading-tight text-gray-800 border-t border-gray-100 mt-auto">
      <p className="font-semibold text-gray-900">HighRadius Technologies Pvt. Ltd.</p>
      <p>Unit-1, 5th Floor, Block-3, DLF Cyber City, Plot No.129 to 132, Gachibowli, Hyderabad, Telangana-500019</p>
      <p><a href="https://www.highradius.com" target="_blank" rel="noreferrer" className="text-[#005A9C] underline font-medium">www.highradius.com</a></p>
    </div>
  );

  const inputCls = "w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none transition-all text-slate-800";
  const labelCls = "block text-xs mb-1 text-slate-600 font-medium";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col print:bg-transparent print:text-black font-sans">
      <style>
        {`
          @media print {
            @page { size: A4; margin: 0mm; }
            body {
              margin: 0 !important; padding: 0 !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              background: transparent !important;
              font-family: Arial, Helvetica, sans-serif !important;
            }
            .page-container {
              box-shadow: none !important;
              margin: 0 !important;
              width: 100% !important;
              max-width: none !important;
              min-height: 100vh !important;
              padding: 10mm 15mm !important;
              position: relative;
              page-break-after: always;
            }
            .page-break {
              page-break-before: always;
            }
          }
        `}
      </style>

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 print:hidden shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/highradius" className="flex items-center gap-4">
            <HighRadiusLogo />
            <div className="hidden md:flex items-center gap-2 border-l border-slate-300 pl-4 text-sm font-semibold tracking-wide text-slate-700">
              Official Offer Letter Generator (18 Pages)
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <div className="md:hidden flex bg-slate-100 rounded-md p-1 border border-slate-200">
              <button onClick={() => setActiveTab("form")} className={`px-3 py-1 text-sm rounded ${activeTab === "form" ? "bg-white shadow text-[#0047AB]" : "text-slate-500"}`}>Form</button>
              <button onClick={() => setActiveTab("preview")} className={`px-3 py-1 text-sm rounded ${activeTab === "preview" ? "bg-white shadow text-[#0047AB]" : "text-slate-500"}`}>Preview</button>
            </div>
            <button onClick={handleExportPDF} disabled={isExporting} className="inline-flex items-center gap-2 bg-[#0047AB] text-white px-5 py-2.5 text-sm font-semibold rounded-lg shadow-sm hover:bg-[#003888] transition-colors">
              {isExporting ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />} Export PDF
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-24 pb-12 px-4 container mx-auto flex flex-col md:flex-row gap-8 justify-center print:block print:p-0 print:m-0 print:max-w-none">

        {/* Form Controls */}
        <div className={`w-full md:w-[360px] bg-white border border-slate-200 rounded-xl shadow-sm p-6 flex-col gap-6 overflow-y-auto max-h-[calc(100vh-140px)] sticky top-28 print:hidden shrink-0 ${activeTab === "form" ? "flex" : "hidden md:flex"}`}>
          <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
            <Settings2 className="w-5 h-5 text-[#0047AB]" />
            <h2 className="text-lg font-semibold text-slate-800">Offer Details</h2>
          </div>

          <div className="space-y-4">
            <div className="grid gap-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">General Info</h3>
              <div>
                <label className={labelCls}>Document Font</label>
                <select
                  value={selectedFont}
                  onChange={(e) => setSelectedFont(e.target.value)}
                  className={`${inputCls} cursor-pointer font-medium`}
                >
                  <option value="Calibri, Arial, sans-serif">Calibri / Arial (Official HighRadius PDF)</option>
                  <option value="'Times New Roman', Times, serif">Times New Roman (Serif)</option>
                  <option value="Inter, system-ui, sans-serif">Inter / Modern Sans</option>
                  <option value="'Courier New', Courier, monospace">Courier (Monospace)</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className={labelCls}>Offer Date</label><input type="text" name="date" value={formData.date} onChange={handleChange} className={inputCls} /></div>
                <div><label className={labelCls}>Location</label><input type="text" name="workLocation" value={formData.workLocation} onChange={handleChange} className={inputCls} /></div>
              </div>
            </div>

            <div className="grid gap-4 pt-4 border-t border-slate-100">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Candidate</h3>
              <div><label className={labelCls}>Candidate Name</label><input type="text" name="candidateName" value={formData.candidateName} onChange={handleChange} className={inputCls} /></div>
              <div><label className={labelCls}>City</label><input type="text" name="city" value={formData.city} onChange={handleChange} className={inputCls} /></div>
              <div><label className={labelCls}>Appointed Role</label><input type="text" name="role" value={formData.role} onChange={handleChange} className={inputCls} /></div>
              <div><label className={labelCls}>Effective / Joining Date</label><input type="text" name="joiningDate" value={formData.joiningDate} onChange={handleChange} className={inputCls} /></div>
            </div>

            <div className="grid gap-4 pt-4 border-t border-slate-100">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Compensation</h3>
              <div><label className={labelCls}>Total Annual CTC (INR)</label><input type="text" name="annualCTC" value={formData.annualCTC} onChange={handleChange} className={inputCls} /></div>
              <div><label className={labelCls}>Annual CTC in Words</label><input type="text" name="annualCTCWords" value={formData.annualCTCWords} onChange={handleChange} className={inputCls} /></div>
              <div><label className={labelCls}>Joining / Relocation Bonus (INR)</label><input type="text" name="relocationBonus" value={formData.relocationBonus} onChange={handleChange} className={inputCls} /></div>
              <div><label className={labelCls}>Relocation Bonus Words</label><input type="text" name="relocationBonusWords" value={formData.relocationBonusWords} onChange={handleChange} className={inputCls} /></div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className={labelCls}>Stock Shares</label><input type="text" name="stockShares" value={formData.stockShares} onChange={handleChange} className={inputCls} /></div>
                <div><label className={labelCls}>Probation</label><input type="text" name="probationMonths" value={formData.probationMonths} onChange={handleChange} className={inputCls} /></div>
              </div>
            </div>

            <div className="grid gap-4 pt-4 border-t border-slate-100">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Signatory</h3>
              <div><label className={labelCls}>Signatory Name</label><input type="text" name="signatoryName" value={formData.signatoryName} onChange={handleChange} className={inputCls} /></div>
              <div><label className={labelCls}>Signatory Title</label><input type="text" name="signatoryTitle" value={formData.signatoryTitle} onChange={handleChange} className={inputCls} /></div>
            </div>
          </div>
        </div>

        {/* Multi-Page Full Document Preview */}
        <div className={`print-container flex-1 overflow-y-auto bg-slate-200/50 p-4 md:p-8 rounded-2xl md:flex flex-col gap-10 items-center relative print:block print:bg-transparent print:rounded-none print:p-0 print:m-0 print:overflow-visible ${activeTab === "preview" ? "flex" : "hidden"}`} style={{ fontFamily: selectedFont }}>

          {/* PAGE 1: OFFER LETTER */}
          <div className="page-container w-full max-w-[210mm] min-h-[297mm] bg-white text-black shadow-lg p-12 md:p-14 relative flex flex-col justify-between print:shadow-none print:w-full print:max-w-none font-sans">
            <div>
              <PageHeader />

              <div className="text-center font-bold text-sm tracking-widest mb-6 mt-4 underline">
                OFFER LETTER
              </div>

              <div className="text-right font-bold text-xs mb-6">
                Date: {formData.date}
              </div>

              <div className="font-bold text-xs leading-tight mb-6">
                <p>Mr {formData.candidateName}</p>
                <p>{formData.city}</p>
              </div>

              <div className="font-bold text-xs mb-6">
                Subject: Offer of appointment for the position of “{formData.role}”
              </div>

              <div className="text-[11.5px] leading-[1.65] text-gray-900 space-y-4 text-justify font-sans">
                <p>Dear <strong>{formData.candidateName.split(' ')[0]}</strong>,</p>

                <p>With reference to your application and subsequent interviews you had with us, we are pleased to make you an offer of employment with HighRadius.</p>

                <p>You are appointed as <strong>“{formData.role}”</strong> effective <strong>{formData.joiningDate}</strong>, your CTC will be <strong>Rs. {formData.annualCTC}/- ({formData.annualCTCWords}) per annum</strong>, the breakup of which will be as provided in <strong>Annexure – A</strong>.</p>

                <p>You are eligible for the Relocation benefits as per HighRadius Relocation Policy and joining bonus of <strong>Rs. {formData.relocationBonus} ({formData.relocationBonusWords})</strong> along with the payroll.</p>

                <p>You will be granted an option to purchase <strong>{formData.stockShares} shares</strong> of outstanding Common Stock vesting over four years. The options will be subject to approval and grant by the Company's board of directors, which I expect will occur at the first regular board meeting following the commencement of your employment. You will be required to sign a separate Stock Option agreement that will govern the specifics of the stock option transaction.</p>

                <p>However, the structure of your compensation may be altered / changed from time to time in line with the compensation policy and practices of the Company. This offer is based on your being and remaining medically fit as required under Company’s policies.</p>

                <p>You will be on probation for a period of <strong>{formData.probationMonths} months</strong></p>

                <p>You are expected to perform your duties and responsibilities to the best of your abilities and in a professional and competent manner in compliance with applicable laws.</p>

                <p>Your place of work will be at <strong>{formData.workLocation}</strong> and we would request you to join on <strong>“{formData.joiningDate}”</strong> or sooner.</p>

                <p>If the terms and conditions as mentioned in <strong>Annexure - B</strong> and <strong>Annexure – C</strong> herein are acceptable to you, please acknowledge the letter with acceptance and return a signed copy of this letter as a token of your acceptance on or before tomorrow EoD and arrange to report for duty on or before the date mentioned above, failing which this offer shall automatically stand canceled without any further reference to you.</p>

                <p>With best wishes and looking forward to a mutually fruitful association.</p>

                <p className="pt-2">Yours sincerely,</p>
                <p className="font-bold">For HighRadius Technologies Private Limited</p>

                <div className="pt-6 flex justify-between items-end">
                  <div>
                    <p className="font-normal text-xs">Name: {formData.signatoryName}</p>
                    <p className="font-normal text-xs mt-1">Title: {formData.signatoryTitle}</p>
                  </div>
                  {/* Exact HighRadius Boxed Signature Table */}
                  <table className="border border-black border-collapse text-xs">
                    <tbody>
                      <tr>
                        <td className="border border-black px-2 py-1 font-normal">Employee signature:</td>
                        <td className="border border-black px-2 py-1 w-24"></td>
                      </tr>
                      <tr>
                        <td className="border border-black px-2 py-1 font-normal">Date :</td>
                        <td className="border border-black px-2 py-1 w-24"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <PageFooter />
          </div>

          {/* PAGE 2: ANNEXURE - A */}
          <div className="page-break page-container w-full max-w-[210mm] min-h-[297mm] bg-white text-black shadow-lg p-12 md:p-14 relative flex flex-col justify-between print:shadow-none print:w-full print:max-w-none font-sans mt-8 print:mt-0">
            <div>
              <PageHeader />

              <div className="text-center font-bold text-sm uppercase tracking-widest mb-6 mt-4 underline">
                ANNEXURE – A
              </div>

              <div className="font-bold text-xs mb-4 space-y-1 text-gray-900">
                <p>Name: {formData.candidateName}</p>
                <p>Designation: {formData.role}</p>
                <p>Location: {formData.workLocation}</p>
              </div>

              {/* Annexure A Table - Exact HighRadius Lines & Shading */}
              <table className="w-full text-[11px] border border-black border-collapse mb-4">
                <thead>
                  <tr className="font-bold border-b border-black bg-white">
                    <th className="border border-black p-1.5 text-left w-[8%]">S. No</th>
                    <th className="border border-black p-1.5 text-left w-[47%]">Particulars</th>
                    <th className="border border-black p-1.5 text-right w-[22%]">Monthly (Rs.)</th>
                    <th className="border border-black p-1.5 text-right w-[23%]">Annualized (Rs.)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-900">
                  <tr className="font-bold border-b border-black">
                    <td className="border border-black p-1.5">A</td>
                    <td className="border border-black p-1.5" colSpan={3}>Gross Salary</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-1.5 text-center">1</td>
                    <td className="border border-black p-1.5">Basic</td>
                    <td className="border border-black p-1.5 text-right">{fmt(basicAnnual / 12)}</td>
                    <td className="border border-black p-1.5 text-right">{fmt(basicAnnual)}</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-1.5 text-center">2</td>
                    <td className="border border-black p-1.5">House Rent Allowance</td>
                    <td className="border border-black p-1.5 text-right">{fmt(hraAnnual / 12)}</td>
                    <td className="border border-black p-1.5 text-right">{fmt(hraAnnual)}</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-1.5 text-center">3</td>
                    <td className="border border-black p-1.5">Leave Travel Allowance</td>
                    <td className="border border-black p-1.5 text-right">{fmt(ltaAnnual / 12)}</td>
                    <td className="border border-black p-1.5 text-right">{fmt(ltaAnnual)}</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-1.5 text-center">4</td>
                    <td className="border border-black p-1.5">Telephone Reimbursement</td>
                    <td className="border border-black p-1.5 text-right">{fmt(teleAnnual / 12)}</td>
                    <td className="border border-black p-1.5 text-right">{fmt(teleAnnual)}</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-1.5 text-center">5</td>
                    <td className="border border-black p-1.5">Vehicle maintenance reimbursement</td>
                    <td className="border border-black p-1.5 text-right">{fmt(vehicleAnnual / 12)}</td>
                    <td className="border border-black p-1.5 text-right">{fmt(vehicleAnnual)}</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-1.5 text-center">6</td>
                    <td className="border border-black p-1.5">Special Allowance</td>
                    <td className="border border-black p-1.5 text-right">{fmt(specialAllowanceAnnual / 12)}</td>
                    <td className="border border-black p-1.5 text-right">{fmt(specialAllowanceAnnual)}</td>
                  </tr>
                  <tr className="font-bold border-t border-b border-black">
                    <td className="border border-black p-1.5"></td>
                    <td className="border border-black p-1.5">Total Gross Pay</td>
                    <td className="border border-black p-1.5 text-right">{fmt(totalGrossPayAnnual / 12)}</td>
                    <td className="border border-black p-1.5 text-right">{fmt(totalGrossPayAnnual)}</td>
                  </tr>
                  <tr className="font-bold border-b border-black">
                    <td className="border border-black p-1.5">B</td>
                    <td className="border border-black p-1.5" colSpan={3}>Variable Pay</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-1.5 text-center">7</td>
                    <td className="border border-black p-1.5">Performance Linked Variable Pay (PLVP)*</td>
                    <td className="border border-black p-1.5 text-right">0</td>
                    <td className="border border-black p-1.5 text-right">{fmt(plvpAnnual)}</td>
                  </tr>
                  <tr className="font-bold border-t border-b border-black">
                    <td className="border border-black p-1.5"></td>
                    <td className="border border-black p-1.5">A+B</td>
                    <td className="border border-black p-1.5 text-right">{fmt(totalGrossPayAnnual / 12)}</td>
                    <td className="border border-black p-1.5 text-right">{fmt(totalGrossPayAnnual + plvpAnnual)}</td>
                  </tr>
                  <tr className="font-bold border-b border-black">
                    <td className="border border-black p-1.5">C</td>
                    <td className="border border-black p-1.5" colSpan={3}>Benefits</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-1.5 text-center">8</td>
                    <td className="border border-black p-1.5">Insurance (GMC,GPA,GTL)</td>
                    <td className="border border-black p-1.5 text-right">{fmt(insuranceAnnual / 12)}</td>
                    <td className="border border-black p-1.5 text-right">{fmt(insuranceAnnual)}</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-1.5 text-center">9</td>
                    <td className="border border-black p-1.5">Gratuity</td>
                    <td className="border border-black p-1.5 text-right">{fmt(gratuityAnnual / 12)}</td>
                    <td className="border border-black p-1.5 text-right">{fmt(gratuityAnnual)}</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-1.5 text-center">10</td>
                    <td className="border border-black p-1.5">Company's Contribution to PF</td>
                    <td className="border border-black p-1.5 text-right">{fmt(pfAnnual / 12)}</td>
                    <td className="border border-black p-1.5 text-right">{fmt(pfAnnual)}</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-1.5 text-center">11</td>
                    <td className="border border-black p-1.5">Company's Contribution to ESIC</td>
                    <td className="border border-black p-1.5 text-right">0</td>
                    <td className="border border-black p-1.5 text-right">0</td>
                  </tr>
                  <tr className="font-bold border-t border-b border-black">
                    <td className="border border-black p-1.5"></td>
                    <td className="border border-black p-1.5">Total Benefits</td>
                    <td className="border border-black p-1.5 text-right">{fmt(totalBenefitsAnnual / 12)}</td>
                    <td className="border border-black p-1.5 text-right">{fmt(totalBenefitsAnnual)}</td>
                  </tr>
                  <tr className="font-bold border-t-2 border-black bg-gray-200 text-[11.5px]">
                    <td className="border border-black p-1.5">D</td>
                    <td className="border border-black p-1.5">Total CTC(A+B+C=D)</td>
                    <td className="border border-black p-1.5 text-right">{fmt(ctcAnnual / 12)}</td>
                    <td className="border border-black p-1.5 text-right">{fmt(ctcAnnual)}</td>
                  </tr>
                </tbody>
              </table>

              <div className="text-[10.5px] leading-normal text-gray-900 space-y-2 mt-4 font-sans">
                <p><strong>Performance Linked Variable Pay (PLVP):</strong><br />You will be eligible for a performance linked variable pay, the amount will be paid out in the range of 0-100%, on the basis of your individual performance. It is prorated to the duration spent with HighRadius Technologies for a calendar year.</p>

                <p className="pt-1"><strong>Optional Benefits:</strong></p>
                <ol className="list-lower-roman pl-5 space-y-0.5">
                  <li>Parental Insurance for Rs 3 lakhs is an optional benefit and payable by self.</li>
                  <li>You can enroll for a Meal card as a tax benefit upon joining.</li>
                  <li>Car Lease Programme as per eligibility</li>
                  <li>National Pension Scheme.</li>
                </ol>

                <p className="pt-2"><strong>Note:</strong><br />All the above mentioned components are subject to changes based on the statutory regulations of the country and on the discretion of the management. All of the above is subject to withholding taxes, statutory deductions.</p>
              </div>
            </div>

            <PageFooter />
          </div>

          {/* PAGE 3: ANNEXURE - B */}
          <div className="page-break page-container w-full max-w-[210mm] min-h-[297mm] bg-white text-black shadow-lg p-12 md:p-14 relative flex flex-col justify-between print:shadow-none print:w-full print:max-w-none font-sans mt-8 print:mt-0">
            <div>
              <PageHeader />

              <div className="text-center font-bold text-sm uppercase tracking-widest mb-6 mt-4 underline">
                ANNEXURE – B
              </div>

              <div className="text-[11.5px] leading-[1.65] text-gray-900 space-y-4 font-sans">
                <p>The Employer & Employee agree as follows:</p>

                <ol className="list-lower-alpha pl-5 space-y-3 text-justify">
                  <li>To pay the Employee a salary at the rate of <strong>Rs. {fmt(totalGrossPayAnnual)}/- ({formData.annualCTCWords})</strong> per annum payable in accordance with the Employer’s regularly scheduled pay period, i.e. every month. The breakup is presented in <strong>Annexure A</strong>.</li>
                  <li>To pay the Performance Linked Incentive, targeted amount of <strong>Rs. {fmt(plvpAnnual)}/- (Rupees Six Lakhs)</strong> per annum payable as per Company Policy</li>
                  <li>That the employee shall be given <strong>24 Earned Leaves</strong> and <strong>10 National holidays</strong> as observed by the company. In addition, leaves greater than 4 days must be approved at least 15 days in advance by the Line Manager.</li>
                  <li>The Insurance coverage available to the employees of Highradius are:
                    <ol className="list-lower-roman pl-6 mt-1 space-y-1">
                      <li>Group Medical Coverage: Provided by company</li>
                      <li>Group Personal Accident: Provided by company</li>
                      <li>Group Term Life: Provided by company</li>
                      <li>Group Parental Insurance: Paid by Employee (Annually)</li>
                    </ol>
                  </li>
                </ol>

                <p className="pt-4">At the time of joining, you are requested to bring the following documents (Wherever applicable) in Original, along with a copy of each.</p>

                <ol className="list-lower-alpha pl-5 space-y-2">
                  <li>Certificates supporting your educational qualifications along with marks sheets</li>
                  <li>your latest salary slips or salary certificate</li>
                  <li>your relieving letter from the present Employer</li>
                  <li>Service certificate from the Present Employer</li>
                  <li>Form 16 or Taxable Income Statement duly certified by previous employer (Statement showing deductions & Taxable Income with break-up)</li>
                </ol>
              </div>
            </div>

            <PageFooter />
          </div>

          {/* PAGE 4: ANNEXURE - C (Agreement P1: Intro & Clause 1) */}
          <div className="page-break page-container w-full max-w-[210mm] min-h-[297mm] bg-white text-black shadow-lg p-12 md:p-14 relative flex flex-col justify-between print:shadow-none print:w-full print:max-w-none font-sans mt-8 print:mt-0">
            <div>
              <PageHeader />

              <div className="text-center font-bold text-sm uppercase tracking-widest mb-6 mt-4 underline">
                ANNEXURE – C
              </div>

              <div className="text-[11px] leading-[1.65] text-gray-900 space-y-3 text-justify font-sans">
                <p>This Employment Agreement (“Agreement”) is entered into <strong>{formData.date}</strong> (“Execution date”) and shall be effective from <strong>“{formData.joiningDate}”</strong> or sooner. (“Effective Date” / “Joining Date”) by and between</p>

                <p><strong>HighRadius Technologies Private Limited</strong> having its registered office at HighRadius Technologies Pvt. Ltd. Unit-1, 5th Floor, Block-3, DLF Cyber City, Plot No.129 to 132, Gachibowli, Hyderabad, Telangana-500019 (hereinafter referred to as “HighRadius” “Company” which expression shall, unless repugnant to the context or meaning thereof, be deemed to mean and include its subsidiaries, affiliates, successors and assigns) of the FIRST PART;</p>

                <p>and</p>

                <p><strong>Mr./Ms. {formData.candidateName}</strong>,referred to as the <strong>“Employee”</strong> which expression shall, unless it is repugnant to the context of meaning thereof, be deemed to mean and include his/her legal heirs, representatives, administrators, executors and assigns) of the SECOND PART. .</p>

                <p>The Company and the Employee may hereinafter be collectively referred to as the “Parties”, and individually as a “Party”.</p>

                <p>WHEREAS, the Company has engaged the Employee to perform services (“Services”) as he/she may be directed to perform for the Company or its client(s) (“Client”), from time to time;</p>

                <p>WHEREAS, Company’s engagement and continual employment of the Employee is conditioned upon the Employee’s express acceptance of and adherence to the terms set forth in this Agreement and any deviations from such terms or from the spirit of the Agreement shall be grounds for immediate and summary dismissal of the Employee and initiation of legal proceedings against Employee;</p>

                <p>NOW THEREFORE, in consideration of the mutual covenants herein contained, the adequacy and sufficiency of which are hereby acknowledged, the Parties agree as follows.</p>

                <p className="font-bold text-xs pt-2">1. Probation</p>
                <p>1.1. Employee shall be on probation for <strong>{formData.probationMonths} months</strong> from the effective date;</p>
                <p>1.2. Employee shall be confirmed, at the sole discretion of the Company, depending upon his/her performance and conduct during the probation period. Employee’s performance and conduct will be evaluated and assessed throughout the probation period as per Company’s guidelines. The Employee will be evaluated and assessed, among others, on his/her performance, attitude towards work, conduct, satisfactory reference and background checks;</p>
                <p>1.3. Employees shall be confirmed in writing upon successful completion of the said probationary period.</p>
                <p>1.4. If, during the probation period, Employee’s performance or conduct is not up to the standards set in these guidelines, Company may at its own discretion:</p>
              </div>
            </div>

            <PageFooter />
          </div>

          {/* PAGES 5 TO 18: REMAINING FULL CLAUSES */}
          {/* PAGE 5 */}
          <div className="page-break page-container w-full max-w-[210mm] min-h-[297mm] bg-white text-black shadow-lg p-12 md:p-14 relative flex flex-col justify-between print:shadow-none print:w-full print:max-w-none font-sans mt-8 print:mt-0">
            <div>
              <PageHeader />
              <div className="text-[11px] leading-[1.65] text-gray-900 space-y-3 text-justify mt-2 font-sans">
                <ol className="list-lower-roman pl-6 space-y-1">
                  <li>Extend the probation term to provide the Employee opportunity to show improvement;</li>
                  <li>If at the end of probation period, if no confirmation is made, you are deemed to have been confirmed even though no intimation is given to you in writing to that effect.</li>
                </ol>
                <p>1.5. Upon confirmation, the Employee shall be eligible for performance reviews in accordance with the Company policies and to be considered for increments and promotions.</p>
                <p className="font-bold text-xs pt-2">2. Employment</p>
                <p>2.1. During the “Term” (as defined below), Employee agrees to perform such duties and responsibilities under this Agreement as his/her supervisor(s) may, from time to time, request, which duties and responsibilities will be commensurate with Employee’s position with the Company. Employee agrees to devote his/her full business time, attention, energy and best efforts to fully and prudently perform such duties and responsibilities in good faith;</p>
                <p>2.2. During the Term, Employee agrees not to engage in any other business activity, regardless of whether such activity is pursued for profit, gain or other pecuniary advantage, without the prior written consent of the Board or the senior management of the Company, which may be granted or withheld in its sole and absolute discretion;</p>
                <p>2.3. During the Term, except with the prior written permission of the Company, the Employee hereby agrees and accepts not to belong to or have any financial interest in any business or organization, which gives rise or may give rise to conflict of interest. The Employee shall notify the Company as soon as possible if aware that such a conflict exists or may exist or if there is any potential for a conflict of interest arising.</p>
                <p>2.4. The Employee shall serve the Company or any of its subsidiaries, associates or affiliates or Clients in India or abroad (as the case may be) to which Employee may be deputed to, for a fixed period of time; and</p>
                <p>2.5. The Employee may be required to work in shifts and/or in extended working hours as permitted by law. The Employee may be required to work beyond his/her existing working hours depending upon the business requirements/exigencies from time to time.</p>
                <p>2.6. The Employee shall be strictly bound by the Company’s Policies, service rules and regulations and all other policies and procedures of the Company, which may change from time to time, subject to such changes being notified to the Employee.</p>
                <p>2.7. The Employee represents that the Employee is not a party to any agreement that restricts his/her right or ability to freely carry out the Employee’s duties hereunder.</p>
                <p className="font-bold text-xs pt-2">3. Performance of Duties:</p>
                <p>3.1 The Employee shall submit all the original documents to the Company which shall be verified by the Company and shall be returned by the Company to the Employee upon the completion of such verification of the documents. If any documents were found</p>
              </div>
            </div>
            <PageFooter />
          </div>

          {/* PAGE 6 */}
          <div className="page-break page-container w-full max-w-[210mm] min-h-[297mm] bg-white text-black shadow-lg p-12 md:p-14 relative flex flex-col justify-between print:shadow-none print:w-full print:max-w-none font-sans mt-8 print:mt-0">
            <div>
              <PageHeader />
              <div className="text-[11px] leading-[1.65] text-gray-900 space-y-3 text-justify mt-2 font-sans">
                <p>false in the background check at any time, the amount paid during the course of employment and losses will be recovered from the Employee.</p>
                <p>3.2 The Company at its sole discretion has the right to change duties, responsibilities, roles/s, location of the Employee and the Employee shall abide by such changes as intimated to him/her by the Company from time to time. Further to this Employment, the Employee is governed by this Agreement.</p>
                <p>3.3 The Employee shall provide, at all times, to the Company and/or any person to whom the Employee reports, all such information, explanations and assistance as may be required in connection with his duties under this Agreement and shall not do anything which may be prejudicial to the interests of the Company.</p>
                <p>3.4 The Employee shall perform his/her duties and responsibilities to the best of his/her abilities and in a professional and competent manner in compliance with the applicable laws.</p>
                <p className="font-bold text-xs pt-2">4. Compensation and Other Employee Benefits</p>
                <p>4.1. The salary shall be paid in accordance with the Company’s regular payroll practices, as modified from time to time. The performance and compensation review of the Employee shall be done as per the existing policies of the Company.</p>
                <p>4.2. The Employee will be expected to work for such time and hours as may prescribed under the Policies of the Company or may be reasonably required to complete his/her duties.</p>
                <p>4.3. The Employee shall be entitled to leaves and vacations as per the Company Policies. Vacation days can be taken only after completing the probation period. However, management of the Company shall review any specific requirement of leave for emergency, medical or other necessity during probation.</p>
                <p>4.4. The Company shall withhold all such applicable taxes under Indian laws and also make such deductions as required to be made under applicable laws from any amounts payable to the Employee under the Agreement. The Employee shall be solely responsible with respect to any tax liabilities with respect to the salary and the perks provided to the Employee by the Company.</p>
                <p>4.5. Employee will be entitled to participate in the Company’s employee benefit plans and programs in effect from time to time, as and when appropriate, including, without limitation, employee stock option plans, medical reimbursement plans and group life, health, long-term and short-term disability and other insurance programs, if any, as applicable to the Employee; provided, however, the Company will be under no obligation to adopt or maintain any fringe benefit program, whether or not such fringe benefit program is in existence as of the Joining Date or whether Employee is eligible to participate therein.</p>
                <p className="font-bold text-xs pt-2">5. Reimbursement of Costs Received</p>
                <p>5.1. If the Employee avails any relocation benefits prior or post joining and/or paid either in the form of Sign-on Bonus, Joining Bonus, pays for the earlier employee notice period, the employee undertakes to work for a minimum period of 24 months. However, in case his/her employment comes to an end before completion of a period of 24 months from the date of joining, for any reason whatsoever, including resignation or termination, you shall be liable to pay back to the company the entire sum that has been claimed. The</p>
              </div>
            </div>
            <PageFooter />
          </div>

          {/* PAGE 7 */}
          <div className="page-break page-container w-full max-w-[210mm] min-h-[297mm] bg-white text-black shadow-lg p-12 md:p-14 relative flex flex-col justify-between print:shadow-none print:w-full print:max-w-none font-sans mt-8 print:mt-0">
            <div>
              <PageHeader />
              <div className="text-[11px] leading-[1.65] text-gray-900 space-y-3 text-justify mt-2 font-sans">
                <p>company reserves the right to withhold such amounts payable to the employee and employee shall not have any right to contest or protest against the same.</p>
                <p className="font-bold text-xs pt-2">6. Retirement</p>
                <p>6.1. The Employee will automatically retire on attaining the age of 60 years or as per the Company rules and regulations.</p>
                <p className="font-bold text-xs pt-2">7. Appraisal/Assessment</p>
                <p>7.1. The Company believes in excellence and for its promotion has a strong assessment and appraisal system in place. This system of half yearly appraisal/assessment will provide the Employee adequate opportunity for continual improvement.</p>
                <p>7.2. In case of either party terminate this Agreement for any reason including resignation, termination, or serving notice period of resignation etc Employee will cease to be part of appraisal process and will not be eligible for any payment due under Incentive Plan, variable pay or any kind of bonus.</p>
                <p>7.3. Company may have or may launch, from time to time, performance improvement initiatives and plans and may require the Employee to join the same. The Company reserves the right and discretion to instruct an Employee whose assessment/appraisal is not positive to join and attend such initiatives/plans to enable the Employee to improve his/her performance and to enable the Company to reassess the Employee’s performance.</p>
                <p>Your salary will be reviewed periodically as per HighRadius Compensation Committee at the sole discretion of the Company. Changes in your compensation are subject to the discretion of HighRadius and will be based on your effective performance and results during your employment and other relevant criteria.</p>
                <p className="font-bold text-xs pt-2">8. Code of Conduct</p>
                <p>During the period of employment:</p>
                <p>8.1. The Employee will serve honestly, faithfully, diligently and efficiently for the growth of the Company;</p>
                <p>8.2. The Employee’s conduct shall be in conformity with the code of conduct, as in force from time to time;</p>
                <p>8.3. Further, the Employee shall carry out the instruction in letter & spirit, given by his/her superiors and shall not disobey any instructions given;</p>
                <p>8.4. The Employee shall not indulge in any unethical practices like “go slow” or non-cooperation, etc.; and</p>
                <p>8.5. The Employee would be required to apply & maintain the highest standards of professional and personal conduct and integrity and comply with all the policies and procedures of the Company with punctuality.</p>
              </div>
            </div>
            <PageFooter />
          </div>

          {/* PAGE 8 */}
          <div className="page-break page-container w-full max-w-[210mm] min-h-[297mm] bg-white text-black shadow-lg p-12 md:p-14 relative flex flex-col justify-between print:shadow-none print:w-full print:max-w-none font-sans mt-8 print:mt-0">
            <div>
              <PageHeader />
              <div className="text-[11px] leading-[1.65] text-gray-900 space-y-3 text-justify mt-2 font-sans">
                <p>8.6. The compensation details are highly-confidential and the offer letter is an agreement between the Employee and the Employer. The compensation and benefits must not be discussed / compared with co-employees. Failure to adhere to this compliance will result in termination.</p>
                <p className="font-bold text-xs pt-2">9. Confidential Information and Non-Disclosure</p>
                <p>9.1. Employee is aware that, during the course of his/her employment with Company, information related to the Company or its Client may be disclosed to him and all such information as used in this Agreement, including, without limitation, information relating to Company’s or it Client’s products and services or to its research and development projects or plans, information relating to Company’s or it Client’s business, marketing and sales plans, strategies, operations, finances, plans or opportunities, including the identity of, or particulars about Company’s or it Client’s employees, contractors, customers or suppliers information not limited to technology, tools, processes, methods, business, data, pricing methods, software code, vendor and customer information and lists, employee lists, data handling methodology and processes, and research processes and strategies, business process and any other information related to any project information marked or otherwise identified as confidential, restricted, secret, or proprietary, including information acquired by inspection or oral or visual disclosure or disclosure through electronic media, any other information disclosed under circumstances in which a reasonable person would understand that such information is confidential and proprietary to the disclosing party (“Confidential Information”).</p>
                <p>9.2. In addition to this, Confidential Information includes all Work Products (as defined below), the affairs of the Company and any and all information, whether written or oral, which directly or indirectly relates to internal controls, computer or data processing programs, algorithms, electronic data processing applications, techniques or systems, or information concerning the business or financial affairs and methods of operation or proposed methods of operation, accounts transactions, proposed transactions, security procedures, trade secrets, R&D activities, know-how, or inventions of the Company or/and its subsidiaries/affiliates/associate companies or any Client, agent, contractor or vendor, or any other information that comes to Employee’s knowledge by reasons of his/her employment with the Company.</p>
                <p>9.3. Company may disclose its own Confidential Information as well as that of its affiliated companies. All such information shall be protected by this section.</p>
                <p>9.4. Confidential Information is the sole and exclusive property of the Company or its Client and shall be used only as expressly permitted in this Agreement and for the purposes of rendering Services to the Company or its Clients. Confidential information shall not be disclosed or revealed by the Employee to any third party at any time without the express written consent of the Company.</p>
                <p>9.5. The contractual obligation of this contract is valid for the entire service period of the employee and includes all formal designated locations and roles of work approved by High Radius</p>
                <p>9.6. Employee is aware that, during the course of his/her Employment with Company, Confidential Information, as defined above, related to the Company or its Client would be disclosed to him. The Employee agrees:</p>
              </div>
            </div>
            <PageFooter />
          </div>

          {/* PAGE 9 */}
          <div className="page-break page-container w-full max-w-[210mm] min-h-[297mm] bg-white text-black shadow-lg p-12 md:p-14 relative flex flex-col justify-between print:shadow-none print:w-full print:max-w-none font-sans mt-8 print:mt-0">
            <div>
              <PageHeader />
              <div className="text-[11px] leading-[1.65] text-gray-900 space-y-3 text-justify mt-2 font-sans">
                <p>9.7. that any Confidential Information, including but not limited to, written, audio, electronic or visual embodiments thereof, is the property of Company or its Client and is to be held by him in trust solely for the benefit of the Company and shall not be used or copied for purposes not specifically provided herein or disclosed to others at any time;</p>
                <p>9.8. that all original material including programs, disks, cards, decks, tapes, listings, including notes, extracts, copies, summaries or other reproductions of any kind and other programming documentation originated and prepared for or by the Company or its Client is material deemed to contain Confidential Information;</p>
                <p>9.9. that he/she shall undertake to protect the Confidential Information disclosed to him/her, using the same degree of care as the Employee uses to protect his/her own comparable confidential and proprietary information to prevent its unauthorized use, disclosure, dissemination or publication, but no less than a reasonable degree of care;</p>
                <p>9.10. that the Employee may disclose Confidential Information only to authorized persons who have a need to know and are bound by obligations of confidentiality;</p>
                <p>9.11. that any permitted reproduction of Confidential Information shall contain all confidential or proprietary legends which appear on the original;</p>
                <p>9.12. that upon the termination of his/her services with Company or request by the Company, whichever is earlier, Employee shall return to the Company all documents and property of the Company or its Client, including but not limited to: drawings, blueprints, reports, manuals, correspondence, customer lists, computer programs, and all other materials and all copies thereof relating in any way to Company's or its Client’s business, or in any way obtained by him during the course of his/her Employment. Employee further agrees that the Employee shall not retain copies, notes or abstracts of the foregoing;</p>
                <p>9.13. that Employee shall not during or any time after the termination of his/her services with Company, use for himself or others, or disclose or divulge to others any trade secrets, confidential information, or any other proprietary data of the Company in violation of the confidentiality obligations of this Agreement; and</p>
                <p>9.14. That the Employee shall promptly advise the Company in writing of any unauthorized use or disclosure of Confidential Information of which the Employee becomes aware and shall provide reasonable assistance to Company India to bring about the cessation of such unauthorized use or disclosure.</p>
                <p>9.15. Breach of this provision shall be treated as a gross violation of the terms stipulated herein and may be treated as a serious offense resulting in prosecution, in addition to his/her services being liable to be terminated without notice as provided in Section 15.</p>
                <p>9.16. In the event that disclosure of any Confidential Information is required under any applicable laws or directions or order of any statutory/regulatory authority or of any Court of competent jurisdiction, the Employee shall, upon becoming aware of such requirement, direction or order, promptly inform the Company of the same.</p>
                <p>9.17. Presumption of Breach: In the event of the possession, access and or use of the confidential or proprietary technical, financial, marketing, manufacturing, distribution or other technical or business information or trade secrets of the Company, including without limitation, concepts, technique’s processes, methods, systems, designs, clients, cost data, computer programs, formulae, development or experimental work, work-in-</p>
              </div>
            </div>
            <PageFooter />
          </div>

          {/* PAGE 10 */}
          <div className="page-break page-container w-full max-w-[210mm] min-h-[297mm] bg-white text-black shadow-lg p-12 md:p-14 relative flex flex-col justify-between print:shadow-none print:w-full print:max-w-none font-sans mt-8 print:mt-0">
            <div>
              <PageHeader />
              <div className="text-[11px] leading-[1.65] text-gray-900 space-y-3 text-justify mt-2 font-sans">
                <p>progress, customers and suppliers as well as software for business and professional use, application programs, internet websites, e-commerce solutions, books, hardware and information for the microcomputer and internet marketplace by any other third party with whom I may have a nexus, it shall be presumed, unless proved to the contrary, that such information has so come to the possession of the third party on account of breach of this clause of this Agreement by the Employee.</p>
                <p className="font-bold text-xs pt-2">10. Ownership of Intellectual Property:</p>
                <p>Any work done or created in the course of or as a result of the Employee’s employment with the Company (“Work Product”) and all such Work Product that is reduced to fixed form or otherwise capable of protection under the applicable intellectual property laws will be deemed to be “work made for hire” and will be the sole and exclusive property of the Company. All letters patent or copyrights mask work rights, exhibition rights, registration rights and other proprietary rights thereto, and any and all renewals thereof and that may be obtained therefore, shall be the property of the Company. Employee agrees to do every act and thing requisite to vest such rights in the Company without any consideration to the Employee other than or in addition to the consideration provided herein.</p>
                <p>Employee will, during his/her relationship and at any time thereafter, at the request and cost of the Company, promptly sign, execute, make and do all such deeds, documents, acts and things as the Company and its duly authorized agents may reasonably require: (I) to apply for, obtain, register and vest in the name of Company alone (unless Company otherwise directs) letters patent, copyrights, trademarks or other analogous protection in any country throughout the world to any such Work Product and when so obtained or vested to renew and restore the same; and (ii) to defend any judicial, opposition or other proceeding in respect of such applications and any judicial, opposition or other proceeding or petitions or applications for revocation of such letters patent, copyright, trademark or other analogous protection.</p>
                <p>In the event Company is unable, after reasonable effort, to secure Employee’s signature on any application for letters patent, copyright or trademark registration or other documents regarding any legal protection relating to a Work Product, whether because of Employee’s physical or mental incapacity or for any other reason whatsoever, Employee hereby irrevocably designates and appoints the Company and its duly authorized officers and agents as Employee’s agent and attorney-in-fact, to act for and in Employee’s behalf and stead to execute and file any such application or applications or other documents and to do all other lawfully permitted acts to further the prosecution and issuance of letters patent, copyright or trademark registrations or any other legal protection thereon with the same legal force and effect as if executed by Employee.</p>
                <p className="font-bold text-xs pt-2">11. Non-compete</p>
                <p>During the Term and for a period of one year following the effective date of the termination of Employee’s employment for any reason whatsoever, Employee will not, directly or indirectly, individually or in combination or association with any other person or entity, whether as an officer, director, employee, shareholder, member, partner, joint venture, sole proprietor, agent, independent contractor, consultant, advisor or otherwise, whether or not for pecuniary benefit, engage in or own (in whole or in part), manage, loan money to, operate or otherwise carry on any business which directly competes with the business of the Company.</p>
              </div>
            </div>
            <PageFooter />
          </div>

          {/* PAGE 11 */}
          <div className="page-break page-container w-full max-w-[210mm] min-h-[297mm] bg-white text-black shadow-lg p-12 md:p-14 relative flex flex-col justify-between print:shadow-none print:w-full print:max-w-none font-sans mt-8 print:mt-0">
            <div>
              <PageHeader />
              <div className="text-[11px] leading-[1.65] text-gray-900 space-y-3 text-justify mt-2 font-sans">
                <p className="font-bold text-xs pt-2">12. Non-Solicitation of Clients and Prospects</p>
                <p>During the Term of Employment and for a period of one year following the effective date of the termination of Employee’s employment with the Company for any reason whatsoever, Employee will not, directly or indirectly, for his own benefit or the benefit of any third party (a) hire or contract for the services of any employee of Company, (b) call upon any Company’s Clients for the purpose of soliciting, selling, or both, any product or service that can or may be used in substitution for or replacement of services or products offered by Company, (c) solicit or have any discussion with Company’s Clients or any employee of the Company concerning any assignment or independent contracting with any other entity, and/or (b) induce or attempt to influence the Company’s Clients or any employee or any other person working for the Company to terminate any assignment or other contractual arrangement with the Company.</p>
                <p className="font-bold text-xs pt-2">13. Representations of the Employee</p>
                <p>Employee represents to the company that:</p>
                <p>13.1. All information and documents furnished by the Employee in support of his educational qualifications and professional experience are correct and true.</p>
                <p>13.2. The Employee has been provided with a copy of this Agreement for review prior to signing it.</p>
                <p>13.3. The Employee has reviewed the Agreement and that he/she understands the terms, purposes and effects of this Agreement.</p>
                <p>13.4. The Employee has signed the Agreement only after having had the opportunity to seek clarifications from the Company and his/her legal advisors.</p>
                <p>13.5. The Employee has been given a signed copy of this Agreement for his/her own records.</p>
                <p>13.6. The Employee has not been subjected to undue influence of any kind to execute this Agreement and this Agreement will not impose an undue hardship upon him/her.</p>
                <p>13.7. The Employee has executed this Agreement of his/her own free will and without relying upon any statements made by the Company or any of its representatives, agents or employees.</p>
                <p>13.8. This Agreement is in all respects reasonable and necessary to protect the legitimate business interests of the Company.</p>
                <p>13.9. Employee has never been convicted of any offence.</p>
                <p>13.10. The Employee has never, at any time in the past, been found to have indulged in any act of moral turpitude by any of his/her previous employers, statutory/regulatory authority or court. There are no pending inquiries or proceedings by previous employers or any statutory/regulatory authorities or in any court.</p>
              </div>
            </div>
            <PageFooter />
          </div>

          {/* PAGE 12 */}
          <div className="page-break page-container w-full max-w-[210mm] min-h-[297mm] bg-white text-black shadow-lg p-12 md:p-14 relative flex flex-col justify-between print:shadow-none print:w-full print:max-w-none font-sans mt-8 print:mt-0">
            <div>
              <PageHeader />
              <div className="text-[11px] leading-[1.65] text-gray-900 space-y-3 text-justify mt-2 font-sans">
                <p>13.11. Taking employment with the Company will not result in any conflict with existing statutory or contractual obligations of the Employee.</p>
                <p>13.12. The Employee has all requisite power and authority, and does not require the consent of any third party to enter into this Agreement and grant the rights provided herein.</p>
                <p className="font-bold text-xs pt-2">14. Data Protection</p>
                <p>The Employee hereby confirms that the Employee consents to the Employee’s personal data being collected, used, processed and held by the Company in its relevant manual and automated filing systems. The Employee also consents to the processing and disclosure of such data internally, and, so far as is reasonably necessary, externally in pursuance of the performance of his employment, for the purpose of enabling decisions to be made regarding his employment.</p>
                <p className="font-bold text-xs pt-2">15. Term and Termination</p>
                <p>15.1. Employee’s employment with the Company commences from the effective date and will continue until terminated by the Company or by Employee in accordance with this Agreement. The period of time commencing from the effective date and concluding with the termination of this Agreement shall be referred to as the “Term”.</p>
                <p>15.2. This contract of employment is terminable, without reasons, by either party giving one month's prior written notice during probationary period and three month's prior written notice on confirmation of employment. Company reserves the right to pay or recover salary in lieu of notice period. Further, Company may at its discretion relieve you from such date as it may deem fit even prior to the expiry of the notice period. However, if the management desires the employee to continue the employment during the notice period, the employee shall do so.</p>
                <p>15.3. Termination by the Company due to Employee’s misconduct (“Termination for Cause”): Notwithstanding anything mentioned in the Clause mentioned above, the Company may terminate Employee’s employment under this Agreement during the Term, with immediate effect by a notice and without providing the Notice Period, for any Cause event. “Cause” shall include, but is not limited to:</p>
                <ol className="list-lower-alpha pl-6 space-y-1">
                  <li>Misconduct, fraudulent, dishonest, insobriety or undisciplined conduct of the Employee, or breach of integrity, or embezzlement, or misappropriation or misuse or causing damage to the Company’s property.</li>
                  <li>Insubordination or failure to comply with the directions given to the Employee by persons so authorized.</li>
                  <li>The Employee’s work or conduct is found not satisfactory to the Company, the decision of the Company shall be conclusive and binding on the Employee.</li>
                  <li>The Employee commits a breach of the terms and conditions as laid down in the Agreement.</li>
                </ol>
              </div>
            </div>
            <PageFooter />
          </div>

          {/* PAGE 13 */}
          <div className="page-break page-container w-full max-w-[210mm] min-h-[297mm] bg-white text-black shadow-lg p-12 md:p-14 relative flex flex-col justify-between print:shadow-none print:w-full print:max-w-none font-sans mt-8 print:mt-0">
            <div>
              <PageHeader />
              <div className="text-[11px] leading-[1.65] text-gray-900 space-y-3 text-justify mt-2 font-sans">
                <ol className="list-lower-alpha pl-6 space-y-2">
                  <li>Commits any act or omits the performance of any action which would be prejudicial to the interests of the Company.</li>
                  <li>If the Employee becomes physically or mentally incapable of performing his/her duties.</li>
                  <li>If the Employee makes a deliberate attempt to injure the Company or conduct that discredits the Company or is detrimental to its reputation or committing any criminal offence involving moral turpitude.</li>
                  <li>The Employee’s insolvency or conviction for any offence involving moral turpitude, or breach by the Employee of any of the terms of this Agreement or of the Company’s Policies or other documents or directions of Company, or his/her unauthorized or unapproved absence from the place of work for more than 5 (five) consecutive working days (including overstay of leave), and shall give the Company the right to terminate the Employee without notice or explanation. There shall not be any notice period or notice pay for termination of employment in this situation.</li>
                  <li>Any act which constitutes unlawful discrimination or harassment, whether on the grounds of sex, sexual orientation, race, caste, ethnicity, origin, nationality, disability, age, religion or beliefs.</li>
                  <li>Knowingly providing information or documentation which is false or amounts to the misrepresentation of facts or suppressing material information which is critical to the Company.</li>
                  <li>Violent, abusive and intimidating behavior either physical or verbal.</li>
                  <li>Gross negligence and interference with the safety equipment if any, in the Company.</li>
                  <li>Unauthorized access to or inappropriate use of Company’s computer, email and internet systems or use of unapproved software.</li>
                  <li>The Employee conducting himself / herself in a manner which is prejudicial to the interests of the Company or to the interests of its clients.</li>
                  <li>The Employee will be governed by the Company’s code of conduct/policies and if there is any breach committed, or non-performance of contractual obligations on the part of the Employee, including but not limited to the obligations relating to Confidentiality (Section 9) and Non-Compete (Section 11) of this Agreement or as stated in any other agreement executed between the Employee and the Company.</li>
                </ol>
              </div>
            </div>
            <PageFooter />
          </div>

          {/* PAGE 14 */}
          <div className="page-break page-container w-full max-w-[210mm] min-h-[297mm] bg-white text-black shadow-lg p-12 md:p-14 relative flex flex-col justify-between print:shadow-none print:w-full print:max-w-none font-sans mt-8 print:mt-0">
            <div>
              <PageHeader />
              <div className="text-[11px] leading-[1.65] text-gray-900 space-y-3 text-justify mt-2 font-sans">
                <p className="pl-6">p. Employee may also be liable for termination forthwith if it is found that the Employee had indulged or has been indulging in drugs and narcotics abuse or in any criminal activities or had any criminal record.</p>
                <p className="font-bold text-xs pt-2">15.4. Termination by Employee</p>
                <p>If the Employee misuses his/her position or absconds from the Company during the tenure of his/her employment, the Employee hereby agrees to pay the Company an amount determined by the Company as liquidated damages calculated on the basis of the last drawn salary by the Employee.</p>
                <p>This Agreement stands terminated immediately in case of non-compliance by the Employee of any of the terms of this Agreement. The Employee agrees and acknowledges that the terms of this Agreement are of paramount importance and non-compliance of the same shall terminate this Agreement immediately with no costs to the Company. The Employee will be liable to pay damages proportional to the damage/injury caused to the running of business and reputation of the Company due to such non-compliance.</p>
                <p className="font-bold text-xs pt-2">15.5. Consequences of Termination</p>
                <ol className="list-lower-alpha pl-6 space-y-2">
                  <li>Employee will return all assets of the Company in his/her possession within [ten (10)] calendar days after the termination of this Agreement. In case of damage, other than normal wear and tear, to or loss of any asset of the Company in the possession of the Employee, the Employee shall be liable to replace such asset or refund the cost of the same to the Company.</li>
                  <li>Upon separation from the Company on account of either resignation or termination, Employee shall be issued a relieving letter only on returning all the assets and properties of the Company, including but not limited to documents, files, books, papers and memos in the possession or custody of the Employee and obtaining appropriate acknowledgements. Thereon the Employee’s accounts will be settled accordingly.</li>
                  <li>Without prejudice to the Company’s other rights and remedies under law or equity, the Company shall be entitled to deduct from Employee’s remuneration, the amount of any settled monetary claims, if any, which the Company may have against the Employee.</li>
                  <li>The termination of the Employee shall not affect those provisions in this Agreement which shall survive the termination or expiry of this agreement.</li>
                </ol>
                <p className="font-bold text-xs pt-2">16. General Provisions:</p>
                <p><strong>a. Waiver:</strong> The failure to exercise any right provided in the Employment Agreement or any other amendments shall not be a waiver of prior or subsequent rights for the Company.</p>
                <p><strong>b. Binding Nature:</strong> Employee acknowledges that the services to be rendered by him/her are unique and personal. Accordingly, he/she may not assign any of his/her rights or delegate any of his/her duties or obligations under the Employment Agreement or any other amendments. In the event that the Company shall be merged with, or consolidated into,</p>
              </div>
            </div>
            <PageFooter />
          </div>

          {/* PAGE 15 */}
          <div className="page-break page-container w-full max-w-[210mm] min-h-[297mm] bg-white text-black shadow-lg p-12 md:p-14 relative flex flex-col justify-between print:shadow-none print:w-full print:max-w-none font-sans mt-8 print:mt-0">
            <div>
              <PageHeader />
              <div className="text-[11px] leading-[1.65] text-gray-900 space-y-3 text-justify mt-2 font-sans">
                <p>any other corporation or entity, or in the event that the Company shall sell or transfer substantially all of its assets to another corporation or entity, the terms of the Employment Agreement or any other amendments shall inure to the benefit of, and be assumed by, such corporation or entity.</p>
                <p><strong>c. Acknowledgement:</strong> Employee hereby acknowledges that he/she had the opportunity to discuss the terms of this Employment Agreement with and obtain advice of counsel and ask questions to the Company, which questions were answered to his/her satisfaction. Employee also acknowledges that he/she had sufficient time to and have carefully read and fully understood the terms of this Employment Agreement and is knowingly and voluntarily entering and accepting this Employment Agreement.</p>
                <p><strong>d. Modification of Agreement by Parties:</strong> Employee agrees that the Employment Agreement or any Amendment may not be changed, modified, released, discharged, abandoned, or otherwise terminated, in whole or in part, except by an instrument in writing, by both parties.</p>
                <p><strong>e. Indemnity:</strong> Employee agrees and acknowledges indemnifying Company against any and all losses, damages, consequential damages, claims, or expenses incurred or suffered by Company as a result of his/her breach of the Employment Agreement or any other amendments or any fraud, misconduct or negligence on his/her part in the course of employment with the Company.</p>
                <p><strong>f. Non-Disparagement:</strong> The Employee shall not disparage the Company or its Affiliates at any time whether during or after the termination of Employee's employment with the Company. The Employee further agrees that he/she will not make or publish any derogatory or disparaging statement about the Company or its Affiliates, whether oral or in writing, which is intended to, or which may be reasonably expected to damage or lower the Company’s or its Affiliates’ reputation or bring them into disrepute or ridicule.</p>
                <p><strong>g. Survival:</strong> The Employee’s obligations under this Agreement, unless provided otherwise, shall continue for a period of one year after Termination of his/her Employment.</p>
                <p><strong>h. Assignments/Transfer/Deputation:</strong></p>
                <ol className="list-lower-roman pl-6 space-y-2">
                  <li>The initial place of work of the Employee will be at <strong>{formData.workLocation}</strong>. However, Employee services are transferable, and the Employee may be assigned, after reasonable notice and mutual consultation, to any location in India or abroad where the Company or any of its subsidiaries conduct business;</li>
                  <li>Company also reserves its right to assign the Employee on training/deputation/secondment/transfer/assignment to its subsidiaries, affiliates or associate companies, to its sub-contractors, and its Client’s locations, and the Employee shall have no objection to the same;</li>
                </ol>
              </div>
            </div>
            <PageFooter />
          </div>

          {/* PAGE 16 */}
          <div className="page-break page-container w-full max-w-[210mm] min-h-[297mm] bg-white text-black shadow-lg p-12 md:p-14 relative flex flex-col justify-between print:shadow-none print:w-full print:max-w-none font-sans mt-8 print:mt-0">
            <div>
              <PageHeader />
              <div className="text-[11px] leading-[1.65] text-gray-900 space-y-3 text-justify mt-2 font-sans">
                <p className="pl-6">iii. The Employee shall, only at the request of the Company, enter into a direct agreement or undertaking with any Client to whom his/her services are to be rendered, thereby accepting the restrictions of the Client, which may reasonably require imposing such restriction for the protection of its legitimate interests. Employee would be governed by the terms & conditions of service applicable to the new assignment, without any financial loss.</p>
                <p className="font-bold text-xs pt-2">17. Notices and Communication:</p>
                <p>17.1. All communications between the Parties hereto shall be deemed to have been effectively served if addressed to the following address as:</p>

                <div className="grid grid-cols-2 gap-6 my-3 p-4 border border-gray-300 rounded text-xs font-sans">
                  <div>
                    <p className="font-bold underline mb-1">Company:</p>
                    <p>Name: Ms. Pooja Palviya</p>
                    <p>Title: VP - People & Culture</p>
                    <p>Address: 5th Floor, Block-3, DLF Cyber City</p>
                    <p>Plot No 129 to 132</p>
                    <p>Gachibowli, Hyderabad, Telangana-500019</p>
                    <p>E-mail: hr_india@highradius.com</p>
                  </div>
                  <div>
                    <p className="font-bold underline mb-1">Employee:</p>
                    <p>Name: Mr. /Ms. {formData.candidateName}</p>
                    <p>Address: {formData.employeeAddress || "_____________________"}</p>
                    <p>Phone: {formData.employeePhone || "_____________________"}</p>
                    <p>Personal E-mail: {formData.employeeEmail || "_____________________"}</p>
                  </div>
                </div>

                <p>17.2. Any change in the above addresses of any of the concerned Parties i.e., the Company and the Employee, shall be intimated to the other Party by the concerned within a period of 7 (seven) days of such change and in the absence of such intimation, the addresses mentioned above shall be deemed to be the addresses of the concerned Parties;</p>
                <p>17.3. All notices and other communications required or permitted to be given under the provisions of this Agreement shall be in writing in English and shall be deemed given upon the earlier of delivery, if by hand, upon receipt, if sent by mail (certified or registered mail, return receipt requested, postage prepaid) or by an internationally recognized courier service or by telecopy or facsimile transmission (with request of assurance of receipt in a manner customary for communication of such type) and immediately, if sent by email.</p>
                <p className="font-bold text-xs pt-2">18. Company Policies</p>
                <p>18.1. The terms and conditions of this Agreement are based on Company policies, procedures and other rules currently applicable and are subject to amendments from time to time.</p>
              </div>
            </div>
            <PageFooter />
          </div>

          {/* PAGE 17 */}
          <div className="page-break page-container w-full max-w-[210mm] min-h-[297mm] bg-white text-black shadow-lg p-12 md:p-14 relative flex flex-col justify-between print:shadow-none print:w-full print:max-w-none font-sans mt-8 print:mt-0">
            <div>
              <PageHeader />
              <div className="text-[11px] leading-[1.65] text-gray-900 space-y-3 text-justify mt-2 font-sans">
                <p className="pl-6">The Employee shall abide by other rules and regulations of the Company as shall be in force from time to time;</p>
                <p>18.2. In all matters, including those not specifically covered herein, such as travelling, leave, insider trading policy, etc., the Employee will be governed by the rules of the Company as may be framed from time to time.</p>
                <p className="font-bold text-xs pt-2">19. Successors and Assigns</p>
                <p>This Agreement shall be binding on the successors and permitted assigns of the Company and shall inure to the benefit of and be enforceable by and against its successors and permitted assigns. This Agreement is personal in nature and the Employee cannot assign this Agreement without the prior written consent of Company. The Employee however agrees that the Company may assign all rights under the Agreement along with the sale of all or substantially all of the assets of the business, or merger, or a change of control.</p>
                <p className="font-bold text-xs pt-2">20. Entire Agreement</p>
                <p>This instrument contains the entire understanding and agreement between the Parties relating to the subject matter hereof and all prior oral and written agreements are extinguished, and neither this Agreement nor any provision hereof may be waived, modified, amended, changed, discharged or terminated, except by an agreement in writing signed by the party against whom enforcement of any waiver, modification, change, amendment, discharge or termination is sought.</p>
                <p className="font-bold text-xs pt-2">21. Counterparts</p>
                <p>This Agreement may be executed simultaneously in counterparts, each of which shall be deemed an original, and both of which counterparts shall together constitute a single agreement. The Employee shall be provided a certified photocopy of this Agreement or any subsequent agreement between the Parties.</p>
                <p className="font-bold text-xs pt-2">22. Severability</p>
                <p>If any one or more of the provisions of this Agreement shall be invalid, illegal, or unenforceable in any respect, the validity, legality and enforceability of the remaining provisions contained herein shall not in any way be affected or impaired thereby. There shall be substituted for any such Provision held invalid, illegal or unenforceable, a provision of similar import reflecting the original intent of the Parties to the extent permissible under law.</p>
                <p className="font-bold text-xs pt-2">23. Remedies</p>
                <p>The Employee acknowledges that Company will suffer immediate, material, immeasurable, continuing and irreparable damage and will not have an adequate remedy at law in the event of a breach by the Employee of any of his/her obligations under this Agreement. The Employee acknowledges that Company will be entitled to institute and prosecute proceedings in any court of competent jurisdiction to enjoin the Employee from violating any contractual or legal obligation or to compel performance of the Employee’s obligations hereunder. Injunctive relief shall be in addition to any remedy to which Company may be entitled, at law or in equity (including, but not limited to, an action and judgment for damages and recovery of costs, including but not</p>
              </div>
            </div>
            <PageFooter />
          </div>

          {/* PAGE 18 */}
          <div className="page-break page-container w-full max-w-[210mm] min-h-[297mm] bg-white text-black shadow-lg p-12 md:p-14 relative flex flex-col justify-between print:shadow-none print:w-full print:max-w-none font-sans mt-8 print:mt-0">
            <div>
              <PageHeader />
              <div className="text-[11px] leading-[1.65] text-gray-900 space-y-4 text-justify mt-2 font-sans">
                <p>limited to attorney fees). No failure or delay by either Party in exercising any right, power or privilege, partial or otherwise, shall operate as a waiver there.</p>
                <p className="font-bold text-xs pt-2">24. Governing Law and Jurisdiction</p>
                <p>It is hereby agreed between the Parties that this Agreement shall be governed by, construed in accordance with and interpreted under and consistent with the laws of India without regard to the choice of law provisions thereof. In the event of any claim or liability arising out of the terms and conditions herein above contained, the Courts at Hyderabad, Telangana shall have jurisdiction to the exclusion of all the other courts.</p>
                <p className="font-bold pt-4">IN WITNESS WHEREOF the Company and the Employee have executed this Agreement as on the date first written above.</p>

                <div className="pt-12 flex justify-between items-start font-sans text-xs">
                  <div>
                    <p className="font-bold text-gray-900 mb-10 uppercase tracking-wide">HighRadius Technologies Private Limited</p>
                    <p className="font-normal text-xs pt-2">Employer Signature: ____________________</p>
                    <p className="mt-2 text-xs font-normal">Name: {formData.signatoryName}</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-10 uppercase tracking-wide">Employee</p>
                    <p className="font-normal text-xs pt-2">Employee Signature: ____________________</p>
                    <p className="mt-2 text-xs font-normal">Name: {formData.candidateName}</p>
                  </div>
                </div>
              </div>
            </div>
            <PageFooter />
          </div>

        </div>
      </main>
    </div>
  );
};

export default HighradiusOfferLetter;
