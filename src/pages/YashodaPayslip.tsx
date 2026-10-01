import { useState } from "react";
import { Link } from "react-router-dom";
import { Download, Settings2, Check } from "lucide-react";

const YASHODA_PRIMARY = "#34316E"; 
const YASHODA_ACCENT = "#F58634"; 

const YashodaPayslip = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [activeTab, setActiveTab] = useState<"form" | "preview">("form");

  const [formData, setFormData] = useState({
    payPeriod: "September 2026",
    employeeName: "Mr. Rohan Kumar",
    employeeId: "YH-2024-1042",
    designation: "Senior Staff Nurse",
    department: "Intensive Care Unit (ICU)",
    doj: "10-Oct-2024",
    location: "Secunderabad",
    bankName: "HDFC Bank",
    bankAccount: "XXXXXXXX6789",
    pan: "ABCDE1234F",
    uan: "100987654321",
    pfNumber: "AP/HYD/12345/678",
    totalDays: "30",
    lwp: "0",
    paidDays: "30",
    clBalance: "2.5",
    slBalance: "1.0",
    plBalance: "8.5",
    basic: "18,000",
    hra: "7,200",
    conveyance: "1,600",
    medicalAllowance: "1,250",
    specialAllowance: "6,950",
    totalEarnings: "35,000",
    pf: "1,800",
    pt: "200",
    tds: "1,000",
    totalDeductions: "3,000",
    netPay: "32,000",
    amountInWords: "Thirty Two Thousand Rupees Only",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleExportPDF = () => {
    setIsExporting(true);
    setTimeout(() => { window.print(); setIsExporting(false); }, 200);
  };

  const PageHeader = () => (
    <div className="w-full mb-6 relative">
      <div className="flex items-center justify-between pb-4">
        <div>
          <img src="/yashoda-logo.png" alt="Yashoda Hospitals" style={{ height: "55px", objectFit: "contain" }} />
        </div>
        <div className="text-right" style={{ fontSize: '10px', lineHeight: '1.4', color: '#475569', fontFamily: '"Arial", sans-serif' }}>
          <p style={{ color: YASHODA_PRIMARY, fontWeight: '900', fontSize: '12px', marginBottom: '2px', letterSpacing: '0.5px' }}>YASHODA HEALTHCARE SERVICES PVT. LTD.</p>
          <p>Yashoda House, Plot #64, Nagarjuna Hills,</p>
          <p>Punjagutta, Hyderabad, Telangana – 500082</p>
          <p>Ph: +91 40 4567 4567 | www.yashodahospitals.com</p>
        </div>
      </div>
      <div style={{ height: '3px', background: YASHODA_PRIMARY, width: '100%' }} />
      <div style={{ height: '1.5px', background: YASHODA_ACCENT, width: '100%', marginTop: '1px' }} />
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col print:bg-transparent print:text-black">
      <style>{`
        @media print { 
          @page { size: A4; margin: 0; } 
          body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; background: white !important; } 
          .no-print { display: none !important; } 
          .print-page { margin: 0 !important; box-shadow: none !important; padding: 15mm !important; position: relative; min-height: 297mm; overflow: hidden; } 
        }
      `}</style>
      
      <div className="no-print flex items-center justify-between px-6 py-4 bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link to="/yashoda" className="text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium">← Back to Dashboard</Link>
          <span className="text-slate-800 font-bold border-l border-slate-300 pl-4">Payslip Generator</span>
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
            <h2 className="text-xl font-bold mb-6 text-slate-800" style={{ color: YASHODA_PRIMARY }}>Payslip Details</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["Pay Period", "payPeriod"], ["Employee Name", "employeeName"],
                  ["Emp ID", "employeeId"], ["Designation", "designation"],
                  ["Department", "department"], ["Date of Joining", "doj"],
                  ["Location", "location"], ["PAN Number", "pan"],
                  ["UAN Number", "uan"], ["PF Number", "pfNumber"],
                  ["Bank Name", "bankName"], ["Bank Account No", "bankAccount"]
                ].map(([lbl, name]) => (
                  <div key={name}>
                    <label className="block text-xs font-bold text-slate-700 mb-1">{lbl}</label>
                    <input className="w-full p-2 text-sm border border-slate-300 rounded focus:border-blue-500" name={name} value={formData[name as keyof typeof formData]} onChange={handleChange} />
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-200 pt-4 mt-2">
                <h3 className="text-sm font-bold text-slate-800 mb-3">Attendance & Leaves</h3>
                <div className="grid grid-cols-3 gap-4 mb-3">
                  {[
                    ["Total Days", "totalDays"], ["LWP", "lwp"], ["Paid Days", "paidDays"],
                    ["CL Bal", "clBalance"], ["SL Bal", "slBalance"], ["PL Bal", "plBalance"]
                  ].map(([lbl, name]) => (
                    <div key={name}>
                      <label className="block text-xs font-bold text-slate-700 mb-1">{lbl}</label>
                      <input className="w-full p-2 text-sm border border-slate-300 rounded focus:border-blue-500" name={name} value={formData[name as keyof typeof formData]} onChange={handleChange} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-200 pt-4 mt-2 pb-8">
                <h3 className="text-sm font-bold text-slate-800 mb-3">Salary Breakup</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    ["Basic Pay", "basic"], ["HRA", "hra"],
                    ["Conveyance", "conveyance"], ["Medical", "medicalAllowance"],
                    ["Special Allowance", "specialAllowance"], ["Total Earnings", "totalEarnings"],
                    ["PF Deduction", "pf"], ["PT Deduction", "pt"], ["TDS", "tds"],
                    ["Total Deductions", "totalDeductions"], ["Net Pay", "netPay"]
                  ].map(([lbl, name]) => (
                    <div key={name}>
                      <label className="block text-xs font-bold text-slate-700 mb-1">{lbl}</label>
                      <input className="w-full p-2 text-sm border border-slate-300 rounded focus:border-blue-500" name={name} value={formData[name as keyof typeof formData]} onChange={handleChange} />
                    </div>
                  ))}
                  <div className="col-span-2">
                    <label className="block text-xs font-bold text-slate-700 mb-1">Amount in Words</label>
                    <input className="w-full p-2 text-sm border border-slate-300 rounded focus:border-blue-500" name="amountInWords" value={formData.amountInWords} onChange={handleChange} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        
        <div className={`flex-1 overflow-y-auto bg-slate-200 flex flex-col items-center py-10 print:bg-white print:p-0 ${activeTab === "form" ? "hidden md:flex" : "flex"}`}>
          
          <div className="print-page bg-white shadow-2xl relative" style={{ width: '210mm', minHeight: '297mm', padding: '15mm', paddingBottom: '25mm', fontFamily: '"Arial", sans-serif', fontSize: '10pt', color: '#000' }}>
            
            {/* Watermark */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.08, zIndex: 0, pointerEvents: 'none' }}>
              <img src="/yashoda-icon.png" style={{ width: '150mm' }} />
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <PageHeader />
              
              <div style={{ textAlign: 'center', marginBottom: '24px', marginTop: '10px' }}>
                <p style={{ fontWeight: 'bold', fontSize: '14pt', textDecoration: 'underline', letterSpacing: '1px' }}>PAYSLIP FOR THE MONTH OF {formData.payPeriod.toUpperCase()}</p>
              </div>

              {/* Employee & Bank Details */}
              <div style={{ border: '1px solid #000', marginBottom: '20px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '9pt' }}>
                  <tbody>
                    <tr>
                      <td style={{ padding: '6px 10px', width: '20%' }}><strong>Employee Name</strong></td>
                      <td style={{ padding: '6px 10px', width: '30%', borderRight: '1px solid #000' }}>: {formData.employeeName}</td>
                      <td style={{ padding: '6px 10px', width: '20%' }}><strong>UAN Number</strong></td>
                      <td style={{ padding: '6px 10px', width: '30%' }}>: {formData.uan}</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '6px 10px' }}><strong>Employee Code</strong></td>
                      <td style={{ padding: '6px 10px', borderRight: '1px solid #000' }}>: {formData.employeeId}</td>
                      <td style={{ padding: '6px 10px' }}><strong>PF Number</strong></td>
                      <td style={{ padding: '6px 10px' }}>: {formData.pfNumber}</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '6px 10px' }}><strong>Designation</strong></td>
                      <td style={{ padding: '6px 10px', borderRight: '1px solid #000' }}>: {formData.designation}</td>
                      <td style={{ padding: '6px 10px' }}><strong>PAN Number</strong></td>
                      <td style={{ padding: '6px 10px' }}>: {formData.pan}</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '6px 10px' }}><strong>Department</strong></td>
                      <td style={{ padding: '6px 10px', borderRight: '1px solid #000' }}>: {formData.department}</td>
                      <td style={{ padding: '6px 10px' }}><strong>Bank Name</strong></td>
                      <td style={{ padding: '6px 10px' }}>: {formData.bankName}</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '6px 10px' }}><strong>Location</strong></td>
                      <td style={{ padding: '6px 10px', borderRight: '1px solid #000' }}>: {formData.location}</td>
                      <td style={{ padding: '6px 10px' }}><strong>Bank A/C No</strong></td>
                      <td style={{ padding: '6px 10px' }}>: {formData.bankAccount}</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '6px 10px', borderBottom: 'none' }}><strong>Date of Joining</strong></td>
                      <td style={{ padding: '6px 10px', borderRight: '1px solid #000', borderBottom: 'none' }}>: {formData.doj}</td>
                      <td style={{ padding: '6px 10px', borderBottom: 'none' }}><strong>Paid Days</strong></td>
                      <td style={{ padding: '6px 10px', borderBottom: 'none' }}>: {formData.paidDays} (Total: {formData.totalDays})</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Earnings and Deductions Table */}
              <div style={{ border: '1px solid #000', marginBottom: '24px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '10pt' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid #000' }}>
                      <th style={{ padding: '10px 12px', textAlign: 'left', width: '35%', borderRight: '1px solid #000' }}>EARNINGS</th>
                      <th style={{ padding: '10px 12px', textAlign: 'right', width: '15%', borderRight: '1px solid #000' }}>AMOUNT (Rs.)</th>
                      <th style={{ padding: '10px 12px', textAlign: 'left', width: '35%', borderRight: '1px solid #000' }}>DEDUCTIONS</th>
                      <th style={{ padding: '10px 12px', textAlign: 'right', width: '15%' }}>AMOUNT (Rs.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: '8px 12px', borderRight: '1px solid #000' }}>Basic Pay</td>
                      <td style={{ padding: '8px 12px', textAlign: 'right', borderRight: '1px solid #000' }}>{formData.basic}</td>
                      <td style={{ padding: '8px 12px', borderRight: '1px solid #000' }}>Provident Fund (PF)</td>
                      <td style={{ padding: '8px 12px', textAlign: 'right' }}>{formData.pf}</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '8px 12px', borderRight: '1px solid #000' }}>House Rent Allowance</td>
                      <td style={{ padding: '8px 12px', textAlign: 'right', borderRight: '1px solid #000' }}>{formData.hra}</td>
                      <td style={{ padding: '8px 12px', borderRight: '1px solid #000' }}>Professional Tax</td>
                      <td style={{ padding: '8px 12px', textAlign: 'right' }}>{formData.pt}</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '8px 12px', borderRight: '1px solid #000' }}>Conveyance Allowance</td>
                      <td style={{ padding: '8px 12px', textAlign: 'right', borderRight: '1px solid #000' }}>{formData.conveyance}</td>
                      <td style={{ padding: '8px 12px', borderRight: '1px solid #000' }}>Income Tax / TDS</td>
                      <td style={{ padding: '8px 12px', textAlign: 'right' }}>{formData.tds}</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '8px 12px', borderRight: '1px solid #000' }}>Medical Allowance</td>
                      <td style={{ padding: '8px 12px', textAlign: 'right', borderRight: '1px solid #000' }}>{formData.medicalAllowance}</td>
                      <td style={{ padding: '8px 12px', borderRight: '1px solid #000' }}></td>
                      <td style={{ padding: '8px 12px', textAlign: 'right' }}></td>
                    </tr>
                    <tr>
                      <td style={{ padding: '8px 12px', borderRight: '1px solid #000' }}>Special Allowance</td>
                      <td style={{ padding: '8px 12px', textAlign: 'right', borderRight: '1px solid #000' }}>{formData.specialAllowance}</td>
                      <td style={{ padding: '8px 12px', borderRight: '1px solid #000' }}></td>
                      <td style={{ padding: '8px 12px', textAlign: 'right' }}></td>
                    </tr>
                    <tr>
                      <td style={{ padding: '24px 12px', borderRight: '1px solid #000' }}></td>
                      <td style={{ padding: '24px 12px', borderRight: '1px solid #000' }}></td>
                      <td style={{ padding: '24px 12px', borderRight: '1px solid #000' }}></td>
                      <td style={{ padding: '24px 12px' }}></td>
                    </tr>
                    <tr style={{ borderTop: '1px solid #000', borderBottom: '1px solid #000' }}>
                      <td style={{ padding: '10px 12px', fontWeight: 'bold', borderRight: '1px solid #000' }}>TOTAL EARNINGS (A)</td>
                      <td style={{ padding: '10px 12px', textAlign: 'right', fontWeight: 'bold', borderRight: '1px solid #000' }}>{formData.totalEarnings}</td>
                      <td style={{ padding: '10px 12px', fontWeight: 'bold', borderRight: '1px solid #000' }}>TOTAL DEDUCTIONS (B)</td>
                      <td style={{ padding: '10px 12px', textAlign: 'right', fontWeight: 'bold' }}>{formData.totalDeductions}</td>
                    </tr>
                    <tr>
                      <td colSpan={2} style={{ padding: '15px 12px', borderRight: '1px solid #000' }}>
                        <p style={{ fontSize: '9pt', marginBottom: '4px' }}>Net Amount In Words:</p>
                        <p style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Rupees {formData.amountInWords}</p>
                      </td>
                      <td colSpan={2} style={{ padding: '15px 12px', textAlign: 'right' }}>
                        <p style={{ fontSize: '10pt', marginBottom: '4px' }}>NET TAKE HOME PAY (A - B)</p>
                        <p style={{ fontWeight: 'bold', fontSize: '16pt', color: YASHODA_PRIMARY }}>₹ {formData.netPay}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              {/* Leave Balances */}
              <div style={{ marginBottom: '40px' }}>
                <p style={{ fontWeight: 'bold', textDecoration: 'underline', marginBottom: '10px' }}>Leave Balances as of {formData.payPeriod}:</p>
                <table style={{ width: '50%', borderCollapse: 'collapse', fontSize: '9pt', border: '1px solid #000' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid #000' }}>
                      <th style={{ padding: '6px', textAlign: 'left', borderRight: '1px solid #000' }}>Leave Type</th>
                      <th style={{ padding: '6px', textAlign: 'center' }}>Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: '6px', borderRight: '1px solid #000' }}>Casual Leave (CL)</td>
                      <td style={{ padding: '6px', textAlign: 'center' }}>{formData.clBalance}</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '6px', borderRight: '1px solid #000' }}>Sick Leave (SL)</td>
                      <td style={{ padding: '6px', textAlign: 'center' }}>{formData.slBalance}</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '6px', borderRight: '1px solid #000' }}>Privilege Leave (PL)</td>
                      <td style={{ padding: '6px', textAlign: 'center' }}>{formData.plBalance}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style={{ marginTop: '50px', fontSize: '9pt', color: '#333' }}>
                <p style={{ marginBottom: '8px' }}><strong>Note:</strong></p>
                <p>1. This is a computer-generated payslip and does not require a physical signature.</p>
                <p>2. Income Tax rules and statutory guidelines apply as per the Government of India.</p>
                <p>3. For any payroll-related discrepancies, please contact the Human Resources Department within 7 days.</p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
export default YashodaPayslip;