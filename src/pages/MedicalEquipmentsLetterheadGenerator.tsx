import React, { useState } from 'react';
import { Settings2, Download, FileText, Building2, ArrowLeft, Stethoscope, ShieldCheck, Files, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const fontOptions = [
  { name: 'Arial / Calibri (Clean Executive Sans)', value: 'Arial, Calibri, sans-serif' },
  { name: 'Times New Roman (Official Classic Serif)', value: '"Times New Roman", Times, serif' },
  { name: 'Georgia (Executive Editorial Serif)', value: 'Georgia, serif' },
  { name: 'Garamond / Cambria (Academic Serif)', value: 'Garamond, Cambria, serif' },
];

const templateOptions = [
  {
    id: 'general_correspondence',
    name: '1. General Official Correspondence / Business Letter',
    data: {
      referenceNo: 'MEIS/2026-27/LTR/104',
      date: '25 August 2026',
      recipientName: 'The Medical Superintendent / Procurement Officer',
      recipientAddress: 'Department of Health & Family Welfare\nSalt Lake Charge, 24 Parganas Circle, West Bengal',
      subject: 'SUBMISSION OF ANNUAL MEDICAL EQUIPMENT MAINTENANCE & CALIBRATION COMPLIANCE REPORT',
      salutation: 'Respected Sir/Madam,',
      bodyText: `We, **M/S. MEDICAL EQUIPMENTS & INSTRUMENT SERVICES** (GSTIN: **19AAKFM7205R1ZJ**), operating from **15th Floor, Suite 1512, P S Srijan Corporate Park, Tower 1, Block GP, Sector V, Salt Lake, Bidhannagar, Kolkata - 700091**, respectfully submit herewith our official correspondence regarding supply, installation, calibration, and maintenance of medical equipment and teaching demonstration instruments.

Our organization is registered as an active **Regular Taxpayer (Partnership Firm)** with active GST registration since **01/07/2017** and Aadhaar verification completed on **24/06/2023**. We specialize in medical instruments, laboratory teaching aids (HSN 90230010), polyethylene tubing (HSN 39172110), electronic educational kits (HSN 95030010), and hospital auxiliary maintenance services (SAC 00440245).

We confirm that all medical devices, diagnostic accessories, and technical calibration services supplied by our partnership firm strictly adhere to National Medical Device Regulatory Standards and GST compliance guidelines.

We request your office to kindly record this official communication and acknowledge receipt of the enclosed technical compliance documents.

Thanking you.`,
      signatoryName: 'AUTHORIZE PARTNER',
      signatoryTitle: 'Partner / Authorized Signatory',
      signatoryFirm: 'MEDICAL EQUIPMENTS & INSTRUMENT SERVICES',
    }
  },
  {
    id: 'medical_quotation',
    name: '2. Commercial Quotation - Medical Equipment & Teaching Aids',
    data: {
      referenceNo: 'MEIS/QT/2026-27/312',
      date: '25 August 2026',
      recipientName: 'The Director & Dean of Medical Education',
      recipientAddress: 'Institute of Postgraduate Medical Sciences & Research\nKolkata, West Bengal - 700020',
      subject: 'QUOTATION FOR SUPPLY, INSTALLATION, CALIBRATION & MAINTENANCE OF MEDICAL TEACHING AIDS & DEMONSTRATION INSTRUMENTS',
      salutation: 'Dear Sir,',
      bodyText: `With reference to your tender inquiry regarding the supply of specialized medical demonstration equipment, teaching aids, and laboratory tubing, we are pleased to submit our best competitive quotation:

| S.No | Description of Equipment & Services | HSN / SAC | Qty | Unit Rate (₹) | Total Amount (₹) |
| :---: | :--- | :---: | :---: | :---: | :---: |
| 1 | **Medical Demonstration Instruments & Anatomical Teaching Aids** | HSN 90230010 | 10 Sets | ₹ 42,500 | ₹ 4,25,000 |
| 2 | **High-Density Polyethylene Medical Grade Tubing** (Sterile) | HSN 39172110 | 500 Meters | ₹ 380 | ₹ 1,90,000 |
| 3 | **Electronic Educational & Diagnostic Demonstration Kits** | HSN 95030010 | 15 Units | ₹ 18,000 | ₹ 2,70,000 |
| 4 | **On-Site Installation, Calibration & Safety Testing Services** | SAC 00440233 | 1 Job | ₹ 65,000 | ₹ 65,000 |

### **Financial Summary:**
- **Sub Total Amount:** ₹ 9,50,000/-
- **Applicable CGST (9%):** ₹ 85,500/-
- **Applicable SGST (9%):** ₹ 85,500/-
- **Grand Total Amount:** **₹ 11,21,000/-** *(Rupees Eleven Lakh Twenty One Thousand Only)*

### **Terms & Conditions:**
1. **Warranty & Calibration:** 2 Years comprehensive manufacturer warranty and free annual calibration certificate included.
2. **Delivery & Installation Timeline:** Supply within 10 working days from receipt of confirmed Purchase Order.
3. **Payment Terms:** 80% upon delivery & successful installation, 20% after 30 days of satisfactory performance verification.`,
      signatoryName: 'AUTHORIZED PARTNER',
      signatoryTitle: 'Partner / Authorized Signatory',
      signatoryFirm: 'MEDICAL EQUIPMENTS & INSTRUMENT SERVICES',
    }
  },
  {
    id: 'installation_certificate',
    name: '3. Equipment Installation & Safety Calibration Certificate',
    data: {
      referenceNo: 'MEIS/CERT/2026-27/058',
      date: '25 August 2026',
      recipientName: 'To Whomsoever It May Concern',
      recipientAddress: 'Biomedical Engineering & Safety Clearance Committee\nKolkata South Commissionerate, West Bengal',
      subject: 'MEDICAL EQUIPMENT INSTALLATION, CALIBRATION AND SAFETY CLEARANCE CERTIFICATE',
      salutation: 'To Whom It May Concern,',
      bodyText: `This is to certify that **M/S. MEDICAL EQUIPMENTS & INSTRUMENT SERVICES** (GSTIN: **19AAKFM7205R1ZJ**), having its principal corporate office at **15th Floor, Suite 1512, P S Srijan Corporate Park, Tower 1, Block GP, Sector V, Salt Lake, Kolkata - 700091**, has successfully completed the installation, electrical safety testing, and precision calibration of diagnostic demonstration instruments and medical teaching aids.

### **Certification Details:**
- **Client Hospital / Institute Order No.:** PO/IPGMER/2026/9012
- **Scope of Supply:** Medical Teaching Aids (HSN 90230010) & Calibration Services (SAC 00440233)
- **Calibration Standards:** ISO / NABL Traceable Calibration Standards
- **Completion & Testing Date:** 24th August 2026
- **Safety Status:** PASSED - Approved for Clinical & Educational Use

All supplied equipment has been verified for electrical safety, operational accuracy, and zero leakage parameters.

This certificate is issued for official documentation, hospital accreditation, and audit clearance.

Thanking you.`,
      signatoryName: 'AUTHORIZED PARTNER',
      signatoryTitle: 'Partner / Authorized Signatory',
      signatoryFirm: 'MEDICAL EQUIPMENTS & INSTRUMENT SERVICES',
    }
  },
  {
    id: 'gst_declaration',
    name: '4. GST Statutory Compliance & Partnership Undertaking',
    data: {
      referenceNo: 'MEIS/GST/2026-27/019',
      date: '25 August 2026',
      recipientName: 'All Hospital Authorities, Vendors & Banking Partners',
      recipientAddress: 'Commercial Accounts & Vendor Onboarding Division\nWest Bengal & All India',
      subject: 'SELF-DECLARATION OF ACTIVE GSTIN & PARTNERSHIP REGISTRATION CREDENTIALS',
      salutation: 'Dear Partners,',
      bodyText: `We hereby declare and confirm the statutory GST credentials of our partnership firm for vendor registration, e-invoicing compliance, and Input Tax Credit (ITC) reconciliation:

### **Registered Taxpayer Credentials:**
- **Legal Name of Business:** MEDICAL EQUIPMENTS & INSTRUMENT SERVICES
- **Trade Name:** M/S. MEDICAL EQUIPMENTS & INSTRUMENT SERVICES.
- **GSTIN / UIN:** **19AAKFM7205R1ZJ**
- **Constitution of Business:** Partnership Firm
- **Effective Registration Date:** 01/07/2017 (Active & Regular Taxpayer)
- **Aadhaar Authentication:** Authenticated on 24/06/2023
- **Principal Place of Business:** 15th Floor, Suite 1512, P S Srijan Corporate Park, Tower 1, Block GP, Sector V, Salt Lake, Bidhannagar, North 24 Parganas, West Bengal - 700091
- **State Jurisdiction:** West Bengal | 24 Parganas Circle | Salt Lake Charge
- **Center Jurisdiction:** Kolkata Zone | Kolkata South Commissionerate | Rashbehari Division | Range IV

### **Core Activities & Authorized HSN / SAC Codes:**
- **Primary Activity:** Service Provider, Wholesale Supplier of Medical & Teaching Aids
- **Goods HSN:** 90230010 (Teaching Aids), 39172110 (Polyethylene Tubes), 95030010 (Electronic Educational Kits)
- **Services SAC:** 00440245 (Equipment Maintenance & Repair), 00440233 (Installation & Calibration), 00440225 (Auxiliary Services)

We confirm that our partnership firm regularly files GSTR-1 and GSTR-3B returns, ensuring full compliance for our esteemed healthcare clients.

Thanking you.`,
      signatoryName: 'AUTHORIZED PARTNER',
      signatoryTitle: 'Partner / Authorized Signatory',
      signatoryFirm: 'MEDICAL EQUIPMENTS & INSTRUMENT SERVICES',
    }
  }
];

const MedicalEquipmentsLetterheadGenerator = () => {
  const [activeTab, setActiveTab] = useState<'form' | 'preview'>('form');
  const [isExporting, setIsExporting] = useState(false);
  const [isExportingAll, setIsExportingAll] = useState(false);
  const [selectedFont, setSelectedFont] = useState(fontOptions[0].value);
  const [selectedTemplateId, setSelectedTemplateId] = useState('general_correspondence');
  const [headerTheme, setHeaderTheme] = useState<'teal' | 'navy' | 'emerald' | 'classic'>('teal');

  const [headerData, setHeaderData] = useState({
    firmName: 'MEDICAL EQUIPMENTS & INSTRUMENT SERVICES',
    tagline: 'Suppliers & Service Specialists of Medical Equipment, Teaching Aids & Laboratory Instruments',
    gstin: '19AAKFM7205R1ZJ',
    regDetails: 'REGULAR TAXPAYER (PARTNERSHIP FIRM) • REG: 01/07/2017',
    address: '15th Floor, 1512, P S Srijan Corporate Park, Tower 1, Block GP, Sector V, Salt Lake, Bidhannagar, Kolkata - 700091',
    phone: '+91 98300 12345 / +91 33 4000 5678',
    email: 'info@meisindia.in',
    website: 'www.meisindia.in',
    hsnSummary: 'HSN: 90230010, 39172110, 95030010 • SAC: 00440245, 00440233, 00440225',
  });

  const [formData, setFormData] = useState(templateOptions[0].data);

  const handleHeaderChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setHeaderData({ ...headerData, [e.target.name]: e.target.value });
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTemplateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const tId = e.target.value;
    setSelectedTemplateId(tId);
    const selected = templateOptions.find(t => t.id === tId);
    if (selected) {
      setFormData(selected.data);
    }
  };

  const handleExportPDF = () => {
    setIsExporting(true);
    setIsExportingAll(false);
    setTimeout(() => {
      window.print();
      setTimeout(() => setIsExporting(false), 1000);
    }, 100);
  };

  const handleExportAllPDF = () => {
    setIsExportingAll(true);
    setTimeout(() => {
      window.print();
      setTimeout(() => setIsExportingAll(false), 1000);
    }, 150);
  };
  const LogoEmblem = ({ theme = "teal" }: { theme?: string }) => {
    const bg = theme === 'emerald' ? 'bg-emerald-700' : theme === 'navy' ? 'bg-slate-900' : theme === 'classic' ? 'bg-slate-950' : 'bg-teal-700';
    return (
      <div className={`${bg} text-white w-16 h-16 rounded-xl flex flex-col items-center justify-center shadow-md border border-white/20 shrink-0`}>
        <Stethoscope className="w-8 h-8 opacity-90" />
        <span className="text-[9px] font-black tracking-widest mt-0.5">MEIS</span>
      </div>
    );
  };

  const renderHeaderLayout = () => {
    if (headerTheme === 'emerald') {
      return (
        <div className="w-full border-b border-emerald-600 pb-3.5 mb-5 shrink-0 px-[18mm] pt-[9mm]">
          <div className="flex justify-between items-end gap-6">
            <div className="flex items-center gap-4">
              <LogoEmblem theme="emerald" />
              <div className="border-l border-emerald-300 pl-4 py-0.5">
                <h1 className="text-[16.5pt] font-extrabold tracking-tight text-emerald-900 uppercase leading-tight font-sans">
                  {headerData.firmName}
                </h1>
                <p className="text-[8pt] font-semibold text-emerald-700 uppercase tracking-wide mt-0.5 leading-snug">
                  {headerData.tagline}
                </p>
              </div>
            </div>
            <div className="text-right flex flex-col items-end shrink-0 text-[8pt] leading-snug text-slate-600">
              <div className="font-mono text-[9pt] font-bold text-slate-900">
                GSTIN: <span className="font-extrabold text-emerald-800">{headerData.gstin}</span>
              </div>
              <div className="font-medium text-slate-700 mt-0.5">
                Partnership Firm
              </div>
              <div className="text-slate-500 font-medium text-[7.5pt]">
                {headerData.website}
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (headerTheme === 'navy') {
      return (
        <div className="w-full border-b-2 border-slate-900 pb-3 mb-4 shrink-0 px-[18mm] pt-[9mm]">
          <div className="flex justify-between items-end gap-6">
            <div className="flex items-center gap-4">
              <LogoEmblem theme="navy" />
              <div className="border-l-2 border-slate-900 pl-4 py-0.5">
                <h1 className="text-[17.5pt] font-black tracking-wider uppercase leading-tight text-slate-950">{headerData.firmName}</h1>
                <p className="text-[8pt] text-teal-800 font-bold tracking-wide uppercase leading-snug">{headerData.tagline}</p>
              </div>
            </div>
            <div className="text-right shrink-0 text-[8pt] leading-snug text-slate-800">
              <div className="font-mono text-[9pt] font-black text-slate-950">GSTIN: {headerData.gstin}</div>
              <div className="font-semibold text-slate-800 mt-0.5">Partnership Firm</div>
              <div className="text-slate-600 text-[7.5pt]">{headerData.website}</div>
            </div>
          </div>
        </div>
      );
    }

    if (headerTheme === 'classic') {
      return (
        <div className="w-full border-b border-slate-900 pb-3 mb-4 shrink-0 px-[18mm] pt-[9mm] text-center">
          <div className="flex items-center justify-center gap-4 mb-1">
            <LogoEmblem theme="classic" />
          </div>
          <div className="text-[18pt] font-black tracking-wide text-slate-950 uppercase font-serif leading-tight">
            {headerData.firmName}
          </div>
          <div className="text-[8.5pt] font-bold text-teal-800 uppercase tracking-widest mt-0.5">
            {headerData.tagline}
          </div>
          <div className="text-[8pt] text-slate-800 font-semibold mt-1.5 flex justify-center gap-3">
            <span>GSTIN: <strong className="text-slate-950 font-bold">{headerData.gstin}</strong></span>
            <span>|</span>
            <span>PARTNERSHIP FIRM</span>
            <span>|</span>
            <span>WEBSITE: <strong className="text-slate-950 font-bold">{headerData.website}</strong></span>
          </div>
        </div>
      );
    }

    return (
      <div className="w-full border-b border-slate-300 pb-3.5 mb-5 shrink-0 px-[18mm] pt-[9mm]">
        <div className="flex justify-between items-end gap-6">
          <div className="flex items-center gap-4">
            <LogoEmblem theme="teal" />
            <div className="border-l border-slate-300 pl-4 py-0.5">
              <h1 className="text-[16.5pt] font-extrabold tracking-tight text-teal-900 uppercase leading-tight font-sans">
                {headerData.firmName}
              </h1>
              <p className="text-[8pt] font-semibold text-teal-700 uppercase tracking-wide mt-0.5 leading-snug">
                {headerData.tagline}
              </p>
            </div>
          </div>
          <div className="text-right flex flex-col items-end shrink-0 text-[8pt] leading-snug text-slate-600">
            <div className="font-mono text-[9pt] font-bold text-slate-900">
              GSTIN: <span className="font-extrabold text-teal-800">{headerData.gstin}</span>
            </div>
            <div className="font-medium text-slate-700 mt-0.5">
              Partnership Firm
            </div>
            <div className="text-slate-500 font-medium text-[7.5pt]">
              {headerData.website}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderFooterLayout = () => {
    return (
      <div className="w-full shrink-0 px-[18mm] pb-[7mm] pt-2 text-slate-900 text-[8.5pt] font-sans bg-white z-20">
        <div className="w-full h-[2px] bg-teal-800 mb-0.5"></div>
        <div className="w-full h-[0.5px] bg-slate-300 mb-2"></div>
        <div className="grid grid-cols-3 gap-2 text-left leading-tight text-[8pt]">
          <div>
            <div className="font-extrabold text-slate-950 uppercase tracking-wider text-[7.5pt]">Corporate Office Address:</div>
            <div className="text-slate-700 mt-0.5 font-medium">{headerData.address}</div>
          </div>
          <div className="text-center">
            <div className="font-extrabold text-slate-950 uppercase tracking-wider text-[7.5pt]">Contact & Website:</div>
            <div className="text-slate-700 mt-0.5 font-medium">{headerData.phone}</div>
            <div className="text-teal-800 font-bold">{headerData.email} • {headerData.website}</div>
          </div>
          <div className="text-right">
            <div className="font-extrabold text-slate-950 uppercase tracking-wider text-[7.5pt]">GST Statutory Details:</div>
            <div className="text-slate-700 mt-0.5 font-medium">GSTIN: <strong className="text-slate-950 font-bold">{headerData.gstin}</strong></div>
            <div className="text-slate-500 font-mono text-[7pt]">{headerData.hsnSummary}</div>
          </div>
        </div>
      </div>
    );
  };

  const renderLetterCard = (itemData: typeof formData, keyId?: string) => {
    const rawText = itemData.bodyText || '';
    const match = rawText.match(/(\*\*Best Regards,\*\*|Best Regards,|&nbsp;|\*\*AUTHORIZE|\*\*For MEDICAL EQUIPMENTS)/i);

    let mainBody = rawText;
    let closingText = 'Yours faithfully,';
    let signatoryText = `For **MEDICAL EQUIPMENTS & INSTRUMENT SERVICES**\n\n\n**AUTHORIZED PARTNER**\nPartner / Authorized Signatory`;
    let hasSig = false;

    if (match && match.index !== undefined) {
      hasSig = true;
      mainBody = rawText.substring(0, match.index).trim();
      const sigRaw = rawText.substring(match.index).replace(/&nbsp;/g, '').trim();

      const sigMatch = sigRaw.match(/(\*\*AUTHORIZE|\*\*For MEDICAL|Yours faithfully)/i);
      if (sigMatch && sigMatch.index !== undefined) {
        closingText = sigRaw.substring(0, sigMatch.index).trim() || 'Yours faithfully,';
        signatoryText = sigRaw.substring(sigMatch.index).trim();
      } else {
        signatoryText = sigRaw;
      }
    }

    return (
      <div
        key={keyId}
        className="w-full max-w-[210mm] min-h-[297mm] h-[297mm] bg-white shadow-xl print:shadow-none relative print:max-w-none page-container page-card flex flex-col justify-between overflow-hidden mb-8 print:mb-0 border border-slate-200 print:border-none"
        style={{ fontFamily: selectedFont, breakAfter: 'page', pageBreakAfter: 'always' }}
      >
        {/* Subtle Corporate Watermark */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03] select-none z-0">
          <HeartPulse className="w-96 h-96 text-teal-900" />
        </div>

        {/* Top Header */}
        {renderHeaderLayout()}

        {/* Main Body Section */}
        <div className="flex-1 px-[18mm] py-1 relative z-10 text-slate-950 text-[10pt] leading-[1.55] text-left overflow-hidden flex flex-col justify-start" style={{ fontFamily: selectedFont }}>
          
          {/* Reference No & Date Line */}
          {(itemData.referenceNo || itemData.date) && (
            <div className="flex justify-between items-center mb-4 text-[9.5pt] font-semibold text-slate-800 border-b border-slate-200 pb-2" style={{ fontFamily: selectedFont }}>
              <div className="flex items-center gap-1.5">
                <span className="text-slate-500 font-bold uppercase text-[8pt] tracking-wider">Ref No:</span>
                <span className="font-extrabold text-slate-950"><ReactMarkdown components={{ p: React.Fragment }}>{(itemData.referenceNo || '').replace(/\n/g, '  \n')}</ReactMarkdown></span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-slate-500 font-bold uppercase text-[8pt] tracking-wider">Date:</span>
                <span className="font-extrabold text-slate-950"><ReactMarkdown components={{ p: React.Fragment }}>{(itemData.date || '').replace(/\n/g, '  \n')}</ReactMarkdown></span>
              </div>
            </div>
          )}

          {/* Recipient Address Block */}
          {itemData.recipientName && (
            <div className="mb-4 text-[10pt] text-slate-900 leading-snug">
              <div className="text-[8pt] font-extrabold uppercase tracking-wider text-slate-500 mb-0.5">To,</div>
              <div className="font-bold text-slate-950">{itemData.recipientName}</div>
              <div className="whitespace-pre-line text-slate-700 font-medium">{itemData.recipientAddress}</div>
            </div>
          )}

          {/* Document Subject Title */}
          {itemData.subject && (
            <div className="text-left my-4 text-[10pt] font-extrabold uppercase tracking-wide text-slate-950">
              <span className="underline underline-offset-4 decoration-teal-700 font-black">SUBJECT: {itemData.subject}</span>
            </div>
          )}

          {/* Salutation */}
          {itemData.salutation && (
            <div className="mb-2 text-[10pt] font-semibold text-slate-900">
              {itemData.salutation}
            </div>
          )}

          {/* Main Body Text & Custom Table Rendering */}
          {itemData.bodyText && (
            <div className="mb-4 max-w-none leading-[1.55] text-slate-950 text-[10pt]" style={{ fontFamily: selectedFont }}>
              {hasSig ? (
                <>
                  <div className="prose prose-p:mt-0 prose-p:mb-2.5 max-w-none text-justify text-slate-950 text-[10pt] prose-strong:font-bold prose-strong:text-black prose-table:border prose-table:border-slate-300 prose-th:bg-teal-900 prose-th:text-white prose-th:p-2 prose-td:p-2 prose-td:border prose-td:border-slate-200 leading-[1.55]" style={{ fontFamily: selectedFont }}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {mainBody.replace(/\n/g, '  \n')}
                    </ReactMarkdown>
                  </div>

                  {/* Salutation Closing */}
                  <div className="text-left w-full text-[10pt] font-bold text-slate-950 mt-4 mb-2">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {closingText.replace(/\n/g, '  \n')}
                    </ReactMarkdown>
                  </div>

                  {/* Blank space for physical signing & stamping */}
                  <div className="h-24 w-full" />

                  {/* Right-Aligned Signature Block */}
                  <div className="flex flex-col items-end text-right ml-auto w-max max-w-[340px] text-[10pt] text-slate-950 prose-strong:font-bold prose-strong:text-black leading-snug">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {signatoryText.replace(/\n/g, '  \n')}
                    </ReactMarkdown>
                  </div>
                </>
              ) : (
                <div className="prose prose-p:mt-0 prose-p:mb-2.5 max-w-none text-justify text-slate-950 text-[10pt] prose-strong:font-bold prose-strong:text-black prose-table:border prose-table:border-slate-300 prose-th:bg-teal-900 prose-th:text-white prose-th:p-2 prose-td:p-2 prose-td:border prose-td:border-slate-200 leading-[1.55]" style={{ fontFamily: selectedFont }}>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {rawText.replace(/\n/g, '  \n')}
                  </ReactMarkdown>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Bottom Pinned Footer */}
        {renderFooterLayout()}
      </div>
    );
  };

  const inputCls = "w-full p-2.5 border border-slate-200 rounded-xl focus:ring-4 focus:ring-teal-700/10 focus:border-teal-700 hover:border-slate-300 outline-none transition-all bg-white text-xs font-semibold text-slate-900 shadow-sm";
  const labelCls = "block text-xs font-semibold text-slate-700 mb-1";

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans selection:bg-teal-800 selection:text-white">
      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 0 !important;
          }
          html, body {
            margin: 0 !important;
            padding: 0 !important;
            background-color: white !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .page-card {
            width: 210mm !important;
            height: 297mm !important;
            min-height: 297mm !important;
            max-height: 297mm !important;
            page-break-after: always !important;
            break-after: page !important;
            position: relative !important;
            overflow: hidden !important;
            box-shadow: none !important;
            margin: 0 !important;
            padding: 0 !important;
            border: none !important;
          }
        }
      `}</style>

      {/* Top Navigation Bar */}
      <div className="bg-white/90 backdrop-blur-xl border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm print:hidden">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-slate-500 hover:text-slate-800 transition-colors font-medium text-xs flex items-center gap-1">
            <ArrowLeft className="w-4 h-4 text-teal-800" /> Home Portal
          </Link>
          <div className="w-px h-6 bg-slate-200"></div>
          <h1 className="text-lg font-bold text-slate-900 flex items-center gap-2.5">
            <div className="w-8 h-8 bg-teal-800 text-white rounded-lg flex items-center justify-center font-black shadow-md">
              MS
            </div>
            Medical Equipments & Instrument Services Letterhead Generator
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleExportPDF}
            disabled={isExporting || isExportingAll}
            className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 rounded-xl font-semibold transition-all shadow-sm flex items-center gap-2 text-xs"
          >
            {isExporting ? (
              <>
                <div className="w-3.5 h-3.5 border-2 border-teal-800/30 border-t-teal-800 rounded-full animate-spin" />
                Exporting...
              </>
            ) : (
              <>
                <Download className="w-4 h-4 text-teal-800" />
                Export Current PDF
              </>
            )}
          </button>

          <button
            onClick={handleExportAllPDF}
            disabled={isExporting || isExportingAll}
            className="px-5 py-2.5 bg-teal-800 hover:bg-teal-900 text-white rounded-xl font-semibold transition-all shadow-md hover:shadow-lg flex items-center gap-2 text-xs"
          >
            {isExportingAll ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Generating All PDFs...
              </>
            ) : (
              <>
                <Files className="w-4 h-4" />
                Export All Letters (Single PDF)
              </>
            )}
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden h-[calc(100vh-73px)] print:h-auto print:block print:overflow-visible">
        
        {/* Mobile Tabs */}
        <div className="md:hidden flex bg-white border-b border-slate-200 w-full shrink-0 print:hidden">
          <button
            className={`flex-1 py-3 text-xs font-semibold ${activeTab === 'form' ? 'text-teal-800 border-b-2 border-teal-800' : 'text-slate-500'}`}
            onClick={() => setActiveTab('form')}
          >
            Edit Details
          </button>
          <button
            className={`flex-1 py-3 text-xs font-semibold ${activeTab === 'preview' ? 'text-teal-800 border-b-2 border-teal-800' : 'text-slate-500'}`}
            onClick={() => setActiveTab('preview')}
          >
            Preview Document
          </button>
        </div>

        {/* Left Control Panel */}
        <div className={`${activeTab === 'form' ? 'flex' : 'hidden'} md:flex w-full md:w-[420px] bg-white border-r border-slate-200 flex-col h-full overflow-y-auto print:hidden z-10 shadow-sm relative`}>
          <div className="p-5 space-y-5">
            
            {/* Quick Templates Selector */}
            <div className="bg-teal-900 text-white p-4 rounded-2xl shadow-sm">
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-200 mb-2">
                <FileText className="w-4 h-4 text-teal-300" />
                Quick Templates
              </label>
              <select
                value={selectedTemplateId}
                onChange={handleTemplateChange}
                className="w-full p-2.5 bg-teal-800 border border-teal-700 rounded-xl text-xs font-semibold text-white focus:outline-none focus:ring-2 focus:ring-teal-300"
              >
                {templateOptions.map(t => (
                  <option key={t.id} value={t.id}>{t.name}</option>
                ))}
              </select>
            </div>

            {/* Header Theme / Design Selector */}
            <div className="space-y-2">
              <label className={labelCls}>Header Design Style</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setHeaderTheme('teal')}
                  className={`p-2 rounded-xl text-xs font-semibold border text-center transition-all ${headerTheme === 'teal' ? 'bg-teal-800 text-white border-teal-800 shadow-sm' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'}`}
                >
                  Clinical Teal
                </button>
                <button
                  type="button"
                  onClick={() => setHeaderTheme('navy')}
                  className={`p-2 rounded-xl text-xs font-semibold border text-center transition-all ${headerTheme === 'navy' ? 'bg-slate-900 text-white border-slate-900 shadow-sm' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'}`}
                >
                  Royal Navy
                </button>
                <button
                  type="button"
                  onClick={() => setHeaderTheme('emerald')}
                  className={`p-2 rounded-xl text-xs font-semibold border text-center transition-all ${headerTheme === 'emerald' ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'}`}
                >
                  Emerald Medical
                </button>
                <button
                  type="button"
                  onClick={() => setHeaderTheme('classic')}
                  className={`p-2 rounded-xl text-xs font-semibold border text-center transition-all ${headerTheme === 'classic' ? 'bg-slate-950 text-white border-slate-950 shadow-sm' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'}`}
                >
                  Classic Serif
                </button>
              </div>
            </div>

            {/* Typography Selector */}
            <div className="space-y-1">
              <label className={labelCls}>Font Style</label>
              <select
                value={selectedFont}
                onChange={(e) => setSelectedFont(e.target.value)}
                className={inputCls}
              >
                {fontOptions.map(f => (
                  <option key={f.value} value={f.value}>{f.name}</option>
                ))}
              </select>
            </div>

            <hr className="border-slate-200" />

            {/* Firm Header Details Accordion */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-slate-700" />
                Partnership Credentials
              </div>

              <div>
                <label className={labelCls}>Firm Name</label>
                <input type="text" name="firmName" value={headerData.firmName} onChange={handleHeaderChange} className={inputCls} />
              </div>

              <div>
                <label className={labelCls}>GSTIN / UIN</label>
                <input type="text" name="gstin" value={headerData.gstin} onChange={handleHeaderChange} className={inputCls} />
              </div>

              <div>
                <label className={labelCls}>Corporate Office Address</label>
                <textarea name="address" value={headerData.address} onChange={handleHeaderChange} rows={2} className={inputCls} />
              </div>

              <div>
                <label className={labelCls}>Contact Phone & Email</label>
                <input type="text" name="phone" value={headerData.phone} onChange={handleHeaderChange} className={inputCls} />
              </div>
            </div>

            <hr className="border-slate-200" />

            {/* Document Content Details */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <Settings2 className="w-3.5 h-3.5 text-slate-700" />
                Document Content
              </div>

              <div>
                <label className={labelCls}>Reference Number</label>
                <input type="text" name="referenceNo" value={formData.referenceNo} onChange={handleFormChange} className={inputCls} />
              </div>

              <div>
                <label className={labelCls}>Date</label>
                <input type="text" name="date" value={formData.date} onChange={handleFormChange} className={inputCls} />
              </div>

              <div>
                <label className={labelCls}>Recipient Name & Title</label>
                <input type="text" name="recipientName" value={formData.recipientName} onChange={handleFormChange} className={inputCls} />
              </div>

              <div>
                <label className={labelCls}>Recipient Address</label>
                <textarea name="recipientAddress" value={formData.recipientAddress} onChange={handleFormChange} rows={2} className={inputCls} />
              </div>

              <div>
                <label className={labelCls}>Subject / Document Title</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleFormChange} className={inputCls} />
              </div>

              <div>
                <label className={labelCls}>Salutation</label>
                <input type="text" name="salutation" value={formData.salutation} onChange={handleFormChange} className={inputCls} />
              </div>

              <div>
                <label className={labelCls}>Body Content (Supports Markdown & Tables)</label>
                <textarea
                  name="bodyText"
                  value={formData.bodyText}
                  onChange={handleFormChange}
                  rows={14}
                  className={`${inputCls} font-mono leading-relaxed resize-y`}
                />
              </div>
            </div>

          </div>
        </div>

        {/* Right Preview Area */}
        <div className={`${activeTab === 'preview' ? 'flex' : 'hidden'} md:flex flex-1 bg-slate-200/60 overflow-y-auto print:overflow-visible p-4 md:p-8 justify-center print:p-0 print:bg-white print:block print:!flex relative`}>
          {isExportingAll ? (
            <div className="w-full flex flex-col items-center gap-8 print:block print:gap-0">
              {templateOptions.map((tpl) => {
                const itemData = tpl.id === selectedTemplateId ? formData : tpl.data;
                return renderLetterCard(itemData, tpl.id);
              })}
            </div>
          ) : (
            renderLetterCard(formData, 'single-preview')
          )}
        </div>

      </div>
    </div>
  );
};

export default MedicalEquipmentsLetterheadGenerator;
