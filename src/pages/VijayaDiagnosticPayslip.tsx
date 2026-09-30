import { useState } from "react";
import { Link } from "react-router-dom";
import { Download, Settings2, Check } from "lucide-react";

// Exact Vijaya Diagnostic Centre brand colors from official logo
const VDC_PRIMARY = "#312783"; // Indigo - text/headers
const VDC_SECONDARY = "#312783"; // Indigo - secondary
const VDC_ACCENT = "#e20714"; // Red - cross/highlights
const LOGO = "/vijaya-diagnostic-logo.webp";

const VijayaDiagnosticPayslip = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [activeTab, setActiveTab] = useState<"form" | "preview">("form");

  const [formData, setFormData] = useState({
    payPeriod: "September 2026",
    employeeName: "Irfan Shaik",
    employeeId: "VDC-2024-1042",
    designation: "Senior Lab Technician",
    department: "Radiology & Imaging",
    doj: "October 15, 2024",
    location: "Punjagutta, Hyderabad",
    bankName: "State Bank of India",
    bankAccount: "XXXXXXXX6789",
    ifscCode: "SBIN0020211",
    panNo: "ABCPS1234F",
    pfNo: "TSHY1234567890123",
    uan: "100456789012",
    totalDays: "30",
    lwp: "0",
    paidDays: "30",
    basic: "20,000",
    hra: "8,000",
    da: "4,000",
    specialAllowance: "10,000",
    medicalAllowance: "1,250",
    transportAllowance: "1,600",
    otherAllowances: "0",
    pf: "1,800",
    esi: "0",
    professionalTax: "200",
    tds: "2,000",
    otherDeductions: "0",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const p = (v: string) => parseInt(v.replace(/,/g, "")) || 0;
  const fmt = (n: number) => n.toLocaleString("en-IN");

  const basic = p(formData.basic);
  const hra = p(formData.hra);
  const da = p(formData.da);
  const special = p(formData.specialAllowance);
  const medical = p(formData.medicalAllowance);
  const transport = p(formData.transportAllowance);
  const otherEarnings = p(formData.otherAllowances);
  const grossEarnings = basic + hra + da + special + medical + transport + otherEarnings;

  const pf = p(formData.pf);
  const esi = p(formData.esi);
  const pt = p(formData.professionalTax);
  const tds = p(formData.tds);
  const otherDed = p(formData.otherDeductions);
  const totalDeductions = pf + esi + pt + tds + otherDed;
  const netPay = grossEarnings - totalDeductions;

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
    return convert(num) + " Rupees Only";
  };

  const handleExportPDF = () => {
    setIsExporting(true);
    setTimeout(() => {
      window.print();
      setIsExporting(false);
    }, 200);
  };

  const earningsRows = [
    ["Basic Salary", fmt(basic)],
    ["House Rent Allowance (HRA)", fmt(hra)],
    ["Dearness Allowance (DA)", fmt(da)],
    ["Special Allowance", fmt(special)],
    ["Medical Allowance", fmt(medical)],
    ["Transport Allowance", fmt(transport)],
    ...(otherEarnings > 0 ? [["Other Allowances", fmt(otherEarnings)]] : []),
  ];

  const deductionRows = [
    ["Provident Fund (PF)", fmt(pf)],
    ["ESI", fmt(esi)],
    ["Professional Tax", fmt(pt)],
    ["Tax Deducted at Source (TDS)", fmt(tds)],
    ...(otherDed > 0 ? [["Other Deductions", fmt(otherDed)]] : []),
  ];

  const maxRows = Math.max(earningsRows.length, deductionRows.length);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col print:bg-transparent print:text-black">
      <style>{`
        @media print {
          @page { size: A4; margin: 0; }
          body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; background: white !important; }
          .no-print { display: none !important; }
          .payslip-page {
            width: 210mm; min-height: 297mm; padding: 10mm 14mm;
            background: white !important; font-family: Arial, sans-serif;
            color: #111; box-sizing: border-box; display: flex; flex-direction: column;
          }
        }
        .form-input {
          width: 100%; padding: 7px 11px; border-radius: 7px; border: 1px solid #cbd5e1;
          background: #ffffff; color: #0f172a; font-size: 12.5px; outline: none;
          transition: border-color 0.2s;
        }
        .form-input:focus { border-color: ${VDC_ACCENT}; }
      `}</style>

      {/* Top Bar */}
      <div className="no-print flex items-center justify-between px-6 py-4 bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link to="/vijaya-diagnostic" className="text-slate-500 hover:text-slate-900 transition-colors text-sm">← Back</Link>
          <img src={LOGO} alt="VDC" className="h-8 w-auto object-contain" />
          <span className="text-slate-800 font-semibold">Payslip Generator</span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setActiveTab(activeTab === "form" ? "preview" : "form")}
            className="px-4 py-2 rounded-lg text-sm font-medium border border-slate-300 hover:border-slate-400 bg-white text-slate-700 transition-colors flex items-center gap-2">
            <Settings2 className="w-4 h-4" /> {activeTab === "form" ? "Preview" : "Edit Form"}
          </button>
          <button onClick={handleExportPDF} disabled={isExporting}
            className="px-5 py-2 rounded-lg text-sm font-semibold text-slate-800 flex items-center gap-2"
            style={{ background: VDC_ACCENT }}>
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
              <Settings2 className="w-5 h-5" style={{ color: VDC_ACCENT }} /> Edit Payslip
            </h2>
            <div className="space-y-3">
              {[
                ["Pay Period", "payPeriod"], ["Employee Name", "employeeName"],
                ["Employee ID", "employeeId"], ["Designation", "designation"],
                ["Department", "department"], ["Date of Joining", "doj"],
                ["Location", "location"], ["Bank Name", "bankName"],
                ["Bank Account", "bankAccount"], ["IFSC Code", "ifscCode"],
                ["PAN No.", "panNo"], ["PF No.", "pfNo"], ["UAN", "uan"],
                ["Total Days in Month", "totalDays"], ["Loss of Pay (Days)", "lwp"],
                ["Paid Days", "paidDays"],
              ].map(([label, name]) => (
                <div key={name}>
                  <label className="block text-xs font-medium text-slate-600 mb-1">{label}</label>
                  <input className="form-input" name={name} value={formData[name as keyof typeof formData]} onChange={handleChange} />
                </div>
              ))}
              <div className="pt-2 border-t border-slate-700">
                <p className="text-xs font-bold text-slate-300 mb-3 uppercase tracking-wider">Earnings (₹)</p>
                {[["Basic Salary", "basic"], ["HRA", "hra"], ["DA", "da"],
                ["Special Allowance", "specialAllowance"], ["Medical Allowance", "medicalAllowance"],
                ["Transport Allowance", "transportAllowance"], ["Other Allowances", "otherAllowances"]].map(([label, name]) => (
                  <div key={name} className="mb-2">
                    <label className="block text-xs font-medium text-slate-600 mb-1">{label}</label>
                    <input className="form-input" name={name} value={formData[name as keyof typeof formData]} onChange={handleChange} />
                  </div>
                ))}
              </div>
              <div className="pt-2 border-t border-slate-700">
                <p className="text-xs font-bold text-slate-300 mb-3 uppercase tracking-wider">Deductions (₹)</p>
                {[["Provident Fund", "pf"], ["ESI", "esi"], ["Professional Tax", "professionalTax"],
                ["TDS", "tds"], ["Other Deductions", "otherDeductions"]].map(([label, name]) => (
                  <div key={name} className="mb-2">
                    <label className="block text-xs font-medium text-slate-600 mb-1">{label}</label>
                    <input className="form-input" name={name} value={formData[name as keyof typeof formData]} onChange={handleChange} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Preview */}
        <div className={`flex-1 overflow-y-auto bg-slate-100 flex flex-col items-center py-8 print:bg-white print:p-0 ${activeTab === "form" ? "hidden md:flex" : "flex"}`}>
          <div className="payslip-page bg-white text-gray-900 shadow-2xl print:shadow-none"
            style={{ width: '210mm', minHeight: '297mm', padding: '10mm 14mm', fontFamily: 'Arial, sans-serif', fontSize: '9.5px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>

            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `4px solid ${VDC_ACCENT}`, paddingBottom: '10px', marginBottom: '12px' }}>
              <img src={LOGO} alt="Vijaya Diagnostic Centre" style={{ height: '56px', width: 'auto', objectFit: 'contain' }} />
              <div style={{ textAlign: 'right', fontSize: '8.5px', color: '#555' }}>
                <p style={{ color: VDC_SECONDARY, fontWeight: 'bold', fontSize: '11px', marginBottom: '2px' }}>VIJAYA DIAGNOSTIC CENTRE LIMITED</p>
                <p>6-3-883/F, FPAI Building, Punjagutta, Hyderabad – 500082</p>
                <p>Ph: 9240 222 222 | www.vijayadiagnostic.com</p>
              </div>
            </div>

            {/* Payslip Title */}
            <div style={{ textAlign: 'center', marginBottom: '10px' }}>
              <div style={{ display: 'inline-block', background: '#f8fafc', color: VDC_SECONDARY, borderBottom: `2px solid ${VDC_ACCENT}`, padding: '4px 24px', borderRadius: '4px', fontWeight: 'bold', fontSize: '11px', letterSpacing: '1px' }}>
                SALARY SLIP – {formData.payPeriod.toUpperCase()}
              </div>
            </div>

            {/* Employee Info Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', border: `1px solid #cbd5e1`, borderRadius: '6px', overflow: 'hidden', marginBottom: '10px' }}>
              {[
                ["Employee Name", formData.employeeName], ["Employee ID", formData.employeeId],
                ["Designation", formData.designation], ["Department", formData.department],
                ["Date of Joining", formData.doj], ["Work Location", formData.location],
                ["PAN No.", formData.panNo], ["UAN", formData.uan],
                ["PF No.", formData.pfNo], ["Bank / A/C No.", `${formData.bankName} / ${formData.bankAccount}`],
                ["IFSC Code", formData.ifscCode], ["Paid Days", `${formData.paidDays} / ${formData.totalDays} (LWP: ${formData.lwp})`],
              ].map(([k, v], i) => (
                <div key={k} style={{ display: 'flex', borderBottom: '1px solid #eee', background: i % 4 < 2 ? '#fff' : '#fafafa' }}>
                  <div style={{ minWidth: '120px', padding: '5px 10px', color: '#555', fontWeight: '600', borderRight: '1px solid #eee', fontSize: '8.5px' }}>{k}</div>
                  <div style={{ padding: '5px 10px', color: '#111', fontSize: '8.5px', flex: 1 }}>{v}</div>
                </div>
              ))}
            </div>

            {/* Earnings & Deductions Table */}
            <div style={{ border: `1px solid #cbd5e1`, borderRadius: '6px', overflow: 'hidden', marginBottom: '10px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                {/* Earnings Header */}
                <div style={{ background: '#f8fafc', color: VDC_SECONDARY, borderBottom: `2px solid ${VDC_ACCENT}`, padding: '6px 10px', fontWeight: 'bold', fontSize: '9.5px', display: 'flex', justifyContent: 'space-between', borderRight: '1px solid rgba(255,255,255,0.2)' }}>
                  <span>EARNINGS</span><span>AMOUNT (₹)</span>
                </div>
                {/* Deductions Header */}
                <div style={{ background: VDC_ACCENT, color: '#fff', padding: '6px 10px', fontWeight: 'bold', fontSize: '9.5px', display: 'flex', justifyContent: 'space-between' }}>
                  <span>DEDUCTIONS</span><span>AMOUNT (₹)</span>
                </div>
              </div>

              {/* Rows */}
              {Array.from({ length: maxRows }).map((_, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: '1px solid #f0f0f0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 10px', borderRight: '1px solid #eee', background: '#fff' }}>
                    <span style={{ color: '#333' }}>{earningsRows[i]?.[0] ?? ""}</span>
                    <span style={{ color: '#111', fontWeight: earningsRows[i] ? '500' : 'normal' }}>{earningsRows[i]?.[1] ?? ""}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 10px', background: '#fff' }}>
                    <span style={{ color: '#333' }}>{deductionRows[i]?.[0] ?? ""}</span>
                    <span style={{ color: VDC_ACCENT, fontWeight: deductionRows[i] ? '500' : 'normal' }}>{deductionRows[i]?.[1] ?? ""}</span>
                  </div>
                </div>
              ))}

              {/* Totals Row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: `2px solid ${VDC_SECONDARY}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 10px', background: '#f0f4ff', fontWeight: 'bold', borderRight: '1px solid #dde' }}>
                  <span style={{ color: VDC_SECONDARY }}>Total Earnings</span>
                  <span style={{ color: VDC_SECONDARY }}>₹ {fmt(grossEarnings)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 10px', background: '#fff5f5', fontWeight: 'bold' }}>
                  <span style={{ color: VDC_ACCENT }}>Total Deductions</span>
                  <span style={{ color: VDC_ACCENT }}>₹ {fmt(totalDeductions)}</span>
                </div>
              </div>
            </div>

            {/* Net Pay */}
            <div style={{ background: '#f8fafc', color: VDC_SECONDARY, borderBottom: `2px solid ${VDC_ACCENT}`, borderRadius: '8px', padding: '10px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <div>
                <p style={{ fontSize: '8px', opacity: 0.75, marginBottom: '2px' }}>NET PAY (Take Home)</p>
                <p style={{ fontSize: '10px' }}>Rupees {numberToWords(netPay)}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: '22px', fontWeight: 'bold', lineHeight: 1 }}>₹ {fmt(netPay)}</p>
              </div>
            </div>

            {/* Note */}
            <div style={{ fontSize: '8px', color: '#777', background: '#f9f9f9', borderRadius: '6px', padding: '8px 12px', marginBottom: '12px' }}>
              <strong>Note:</strong> This is a computer-generated payslip and does not require a physical signature. For any discrepancies, please contact the HR department at hr@vijayadiagnostic.in within 7 days of receipt.
            </div>

            {/* Signatures */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '24px' }}>
              <div style={{ borderTop: `1px solid #bbb`, paddingTop: '6px', width: '160px' }}>
                <p style={{ fontSize: '8.5px', color: '#555', fontWeight: '600' }}>Employee Signature</p>
                <p style={{ fontSize: '8px', color: '#888' }}>{formData.employeeName}</p>
              </div>
              <div style={{ borderTop: `1px solid #bbb`, paddingTop: '6px', width: '160px', textAlign: 'right' }}>
                <p style={{ fontSize: '8.5px', color: '#555', fontWeight: '600' }}>Authorised Signatory</p>
                <p style={{ fontSize: '8px', color: '#888' }}>HR Department, VDC</p>
              </div>
            </div>

            {/* Footer */}
            <div style={{ borderTop: '1px solid #eee', marginTop: '16px', paddingTop: '6px', display: 'flex', justifyContent: 'space-between', fontSize: '7.5px', color: '#aaa' }}>
              <span style={{ color: VDC_SECONDARY, fontWeight: 'bold' }}>VIJAYA DIAGNOSTIC CENTRE LIMITED</span>
              <span>6-3-883/F, Punjagutta, Hyderabad – 500082</span>
              <span>www.vijayadiagnostic.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VijayaDiagnosticPayslip;
