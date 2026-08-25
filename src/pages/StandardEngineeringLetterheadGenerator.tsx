import React, { useState } from 'react';
import { Settings2, Download, FileText, Building2, ArrowLeft, Wrench, ShieldCheck, Files } from 'lucide-react';
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
    name: '1. General Business Correspondence / Official Letter',
    data: {
      referenceNo: 'SES/2026-27/LTR/084',
      date: '25 August 2026',
      recipientName: 'The Assistant Commissioner of Commercial Taxes',
      recipientAddress: '24 Parganas Charge, Barrackpore Circle\nCommissionerate - West Bengal',
      subject: 'SUBMISSION OF ANNUAL INDUSTRIAL RETURN & GST COMPLIANCE UNDERTAKING (FY 2025-26)',
      salutation: 'Respected Sir/Madam,',
      bodyText: `We, **STANDARD ENGINEERING SERVICE** (GSTIN: **19AJJPS2891P1Z4**), located at **Holding No.12, Raja Road, Sukchar, North 24 Parganas, West Bengal - 700115**, respectfully submit herewith our official correspondence regarding our ongoing manufacturing, erection, commissioning, and maintenance operations.

Our enterprise is registered as a **Regular Taxpayer (Proprietorship)** under the sole proprietorship of **Mr. Baidyanath Seth**, with active registration since **01/07/2017**. We specialize in industrial manufacturing, erection and installation of machinery, crane components, and road transport services.

We confirm that all goods (including Aluminium Waste & Scrap - HSN 7602, Crane Machinery Parts - HSN 8431, and Cast Iron Scrap - HSN 7204) and services (Maintenance & Repair - SAC 00440245, Erection & Commissioning - SAC 00440233) supplied by our organization strictly adhere to statutory GST standards.

We request your office to kindly record this official communication and acknowledge receipt of the attached statutory compliance documents.

Thanking you.`,
      signatoryName: 'BAIDYANATH SETH',
      signatoryTitle: 'Proprietor',
      signatoryFirm: 'STANDARD ENGINEERING SERVICE',
    }
  },
  {
    id: 'industrial_quotation',
    name: '2. Commercial Quotation - Erection, Maintenance & Fabrication',
    data: {
      referenceNo: 'SES/QT/2026-27/215',
      date: '25 August 2026',
      recipientName: 'M/s. Eastern Heavy Industries Private Limited',
      recipientAddress: 'Industrial Complex Sector 3, Khardah Division\nNorth 24 Parganas, West Bengal - 700118',
      subject: 'QUOTATION FOR ERECTION, COMMISSIONING, FABRICATION & REPAIR OF HEAVY MACHINERY & CRANE COMPONENTS',
      salutation: 'Dear Sir,',
      bodyText: `With reference to your technical inquiry and site inspection conducted at your Khardah plant, we are pleased to submit our best competitive quotation for manufacturing, erection, installation, and maintenance services:

| S.No | Description of Goods & Services | HSN / SAC | Qty | Unit Rate (₹) | Total Amount (₹) |
| :---: | :--- | :---: | :---: | :---: | :---: |
| 1 | **Erection, Commissioning & Installation** of Ships Derricks & Overhead Crane Assemblies | SAC 00440233 | 1 Job | ₹ 1,85,000 | ₹ 1,85,000 |
| 2 | **Heavy Industrial Equipment Maintenance & Repair Services** (Overhauling & Alignment) | SAC 00440245 | 1 Job | ₹ 95,000 | ₹ 95,000 |
| 3 | **Supply of Fabricated Crane Machinery Parts** & Derrick Components | HSN 84314920 | 12 Pcs | ₹ 12,500 | ₹ 1,50,000 |
| 4 | **Aluminium Scrap Processing & Industrial Auxiliaries** | HSN 7602 | 500 Kg | ₹ 180 | ₹ 90,000 |

### **Financial Breakdown:**
- **Sub Total Amount:** ₹ 5,20,000/-
- **Applicable CGST (9%):** ₹ 46,800/-
- **Applicable SGST (9%):** ₹ 46,800/-
- **Grand Total Amount:** **₹ 6,13,600/-** *(Rupees Six Lakh Thirteen Thousand Six Hundred Only)*

### **Terms & Conditions:**
1. **Delivery & Erection Schedule:** Work to be completed within 14 working days from receipt of confirmed Purchase Order.
2. **Warranty:** 12 Months comprehensive warranty on erection workmanship and fabricated parts.
3. **Payment Terms:** 30% advance with Purchase Order, 60% upon erection completion, and 10% after 30 days of successful trial run.`,
      signatoryName: 'BAIDYANATH SETH',
      signatoryTitle: 'Proprietor',
      signatoryFirm: 'STANDARD ENGINEERING SERVICE',
    }
  },
  {
    id: 'completion_certificate',
    name: '3. Work Execution & Commissioning Completion Certificate',
    data: {
      referenceNo: 'SES/CC/2026-27/042',
      date: '25 August 2026',
      recipientName: 'To Whomsoever It May Concern',
      recipientAddress: 'Official Project Clearance Division\nKolkata North Commissionerate, West Bengal',
      subject: 'WORK COMPLETION AND COMMISSIONING CERTIFICATE',
      salutation: 'To Whom It May Concern,',
      bodyText: `This is to certify that **STANDARD ENGINEERING SERVICE** (Proprietor: **Mr. Baidyanath Seth**, GSTIN: **19AJJPS2891P1Z4**), having its principal manufacturing unit at **Holding No.12, Raja Road, Sukchar, North 24 Parganas, West Bengal - 700115**, has successfully completed the erection, commissioning, and safety load-testing of heavy machinery crane components and auxiliary industrial systems.

### **Project Details:**
- **Contract Work Order No.:** PO/EHI/2026/8841
- **Nature of Work:** Erection, Commissioning & Installation Services (SAC 00440233)
- **Scope of Supply:** Parts of Ships Derricks & Heavy Cranes (HSN 84314920)
- **Completion Date:** 22nd August 2026
- **Work Quality & Performance:** Excellent & Satisfactory

The installed equipment and structural assemblies have undergone rigorous safety inspections and load testing in compliance with West Bengal Factory & Industrial Safety Standards.

This certificate is issued upon request for official documentation, client verification, and bank records.

Thanking you.`,
      signatoryName: 'BAIDYANATH SETH',
      signatoryTitle: 'Proprietor',
      signatoryFirm: 'STANDARD ENGINEERING SERVICE',
    }
  },
  {
    id: 'gst_declaration',
    name: '4. GST Compliance & Self-Declaration Undertaking',
    data: {
      referenceNo: 'SES/GST/2026-27/011',
      date: '25 August 2026',
      recipientName: 'All Esteemed Clients & Vendor Partners',
      recipientAddress: 'Commercial Operations & Accounts Division\nWest Bengal & All India',
      subject: 'SELF-DECLARATION OF ACTIVE GSTIN & STATUTORY COMPLIANCE UNDERTAKING',
      salutation: 'Dear Partners,',
      bodyText: `We hereby declare and confirm the statutory GST details of our proprietorship firm for the purpose of e-invoicing, vendor onboarding, and Input Tax Credit (ITC) reconciliation:

### **Registered Taxpayer Credentials:**
- **Legal Name of Business:** BAIDYANATH SETH
- **Trade Name:** STANDARD ENGINEERING SERVICE
- **GSTIN / UIN:** **19AJJPS2891P1Z4**
- **Constitution of Business:** Proprietorship
- **Effective Registration Date:** 01/07/2017 (Active & Regular)
- **Principal Place of Business:** Holding No.12, Raja Road, Sukchar, North 24 Parganas, West Bengal - 700115
- **State Jurisdiction:** West Bengal | 24 Parganas Circle | Barrackpore Charge
- **Center Jurisdiction:** Kolkata Zone | Kolkata North Commissionerate | Khardah Division | Range II

### **Core Activities & Authorized HSN / SAC Codes:**
- **Primary Activity:** Manufacturer & Technical Industrial Service Provider
- **Goods HSN:** 7602 (Aluminium Scrap), 84314920 / 84314990 (Crane & Derrick Parts), 72041000 (Cast Iron Scrap), 76012090 (Aluminium Alloys)
- **Services SAC:** 00440233 (Erection & Commissioning), 00440245 (Maintenance & Repair), 00440225 (Auxiliary Services), 00440262 (Goods Transport)

We confirm that all GST returns (GSTR-1 & GSTR-3B) are filed regularly on or before due dates, enabling seamless ITC credit reflection for our valued customers.

Thanking you.`,
      signatoryName: 'BAIDYANATH SETH',
      signatoryTitle: 'Proprietor',
      signatoryFirm: 'STANDARD ENGINEERING SERVICE',
    }
  }
];

const StandardEngineeringLetterheadGenerator = () => {
  const [activeTab, setActiveTab] = useState<'form' | 'preview'>('form');
  const [isExporting, setIsExporting] = useState(false);
  const [isExportingAll, setIsExportingAll] = useState(false);
  const [selectedFont, setSelectedFont] = useState(fontOptions[0].value);
  const [selectedTemplateId, setSelectedTemplateId] = useState('general_correspondence');
  const [headerTheme, setHeaderTheme] = useState<'brand_blue' | 'navy' | 'amber' | 'classic'>('brand_blue');

  const [headerData, setHeaderData] = useState({
    firmName: 'STANDARD ENGINEERING SERVICE',
    tagline: 'MANUFACTURERS, ENGINEERS, ERECTION & INDUSTRIAL MAINTENANCE SPECIALISTS',
    proprietor: 'BAIDYANATH SETH',
    gstin: '19AJJPS2891P1Z4',
    regDetails: 'REGULAR TAXPAYER (PROPRIETORSHIP) • REG: 01/07/2017',
    address: 'Holding No.12, Raja Road, Sukchar, North Twenty Four Parganas, West Bengal - 700115',
    phone: '+91 98310 12345 / +91 98300 67890',
    email: 'info@standardses.in',
    website: 'www.standardses.in',
    logoUrl: '/standard-engineering-logo.jpg',
    hsnSummary: 'HSN: 7602, 8431, 7204 • SAC: 00440233, 00440245, 00440262',
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

  const [logoType, setLogoType] = useState<'vector' | 'image'>('image');

  const LogoEmblem = () => {
    const [imgError, setImgError] = useState(false);

    if (!imgError && headerData.logoUrl) {
      return (
        <img
          src={headerData.logoUrl}
          alt="Standard Engineering Service Official Logo"
          className="max-h-10 w-auto max-w-[140px] object-contain shrink-0"
          onError={() => setImgError(true)}
        />
      );
    }

    return (
      <div className="h-10 w-10 bg-gradient-to-tr from-blue-900 via-blue-800 to-blue-700 text-white rounded-lg flex flex-col items-center justify-center border border-blue-600 shadow-xs shrink-0 p-0.5 relative overflow-hidden">
        <span className="text-[10pt] font-black tracking-tighter text-white leading-none">SES</span>
      </div>
    );
  };

  const renderHeaderLayout = () => {
    if (headerTheme === 'amber') {
      return (
        <div className="w-full border-b border-amber-500 pb-2 mb-3 shrink-0 px-[18mm] pt-[6mm]">
          <div className="flex justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <LogoEmblem />
              <div className="border-l border-amber-300 pl-3 py-0.5">
                <h1 className="text-[12.5pt] font-black tracking-tight text-slate-950 uppercase leading-tight font-sans">
                  {headerData.firmName}
                </h1>
                <p className="text-[7pt] font-bold text-amber-700 uppercase tracking-wider mt-0.5 leading-none">
                  {headerData.tagline}
                </p>
              </div>
            </div>
            <div className="text-right flex flex-col items-end shrink-0 text-[7.5pt] leading-tight text-slate-700">
              <div className="font-mono text-[8.5pt] font-bold text-slate-900">
                GSTIN: <span className="font-extrabold text-amber-800">{headerData.gstin}</span>
              </div>
              <div className="font-medium text-slate-700 text-[7pt] mt-0.5">
                Proprietor: <strong className="text-slate-900 font-semibold">{headerData.proprietor}</strong>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (headerTheme === 'navy') {
      return (
        <div className="w-full border-b-2 border-slate-900 pb-2 mb-3 shrink-0 px-[18mm] pt-[6mm]">
          <div className="flex justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <LogoEmblem />
              <div className="border-l-2 border-slate-900 pl-3 py-0.5">
                <h1 className="text-[13pt] font-black tracking-wider uppercase leading-tight text-slate-950">{headerData.firmName}</h1>
                <p className="text-[7pt] text-slate-700 font-bold tracking-wide uppercase leading-none">{headerData.tagline}</p>
              </div>
            </div>
            <div className="text-right shrink-0 text-[7.5pt] leading-tight text-slate-800">
              <div className="font-mono text-[8.5pt] font-black text-slate-950">GSTIN: {headerData.gstin}</div>
              <div className="font-semibold text-slate-700 text-[7pt] mt-0.5">Proprietor: {headerData.proprietor}</div>
            </div>
          </div>
        </div>
      );
    }

    if (headerTheme === 'classic') {
      return (
        <div className="w-full border-b border-slate-900 pb-2 mb-3 shrink-0 px-[18mm] pt-[6mm] text-center">
          <div className="flex items-center justify-center gap-3 mb-1">
            <LogoEmblem />
          </div>
          <div className="text-[13.5pt] font-black tracking-wide text-[#0052cc] uppercase font-serif leading-tight">
            {headerData.firmName}
          </div>
          <div className="text-[7pt] font-bold text-[#a81c1c] uppercase tracking-widest mt-0.5">
            {headerData.tagline}
          </div>
          <div className="text-[7.5pt] text-slate-800 font-semibold mt-1 flex justify-center gap-3">
            <span>GSTIN: <strong className="text-slate-950 font-bold">{headerData.gstin}</strong></span>
            <span>|</span>
            <span>PROPRIETOR: <strong className="text-slate-950 font-bold">{headerData.proprietor}</strong></span>
          </div>
        </div>
      );
    }

    // Default Ultra-Compact Corporate Minimal Theme (Royal Blue #0052cc + Maroon Red #a81c1c)
    return (
      <div className="w-full shrink-0 px-[18mm] pt-[6mm] pb-1 mb-3">
        <div className="flex justify-between items-center gap-4 mb-2">
          {/* Left Side: Logo + Vertical Divider + Compact Firm Identity */}
          <div className="flex items-center gap-3">
            <LogoEmblem />
            <div className="border-l border-slate-300 pl-3 py-0.5">
              <h1 className="text-[12.5pt] font-black tracking-tight text-[#0052cc] uppercase leading-tight font-sans">
                {headerData.firmName}
              </h1>
              <p className="text-[7pt] font-bold text-[#a81c1c] uppercase tracking-wider mt-0.5 leading-none">
                {headerData.tagline}
              </p>
            </div>
          </div>

          {/* Right Side: Ultra-Compact Corporate Credentials */}
          <div className="text-right flex flex-col items-end shrink-0 text-[7.5pt] leading-tight text-slate-600 font-sans">
            <div className="font-mono text-[8pt] font-bold text-slate-900">
              GSTIN: <span className="font-extrabold text-[#0052cc]">{headerData.gstin}</span>
            </div>
            <div className="text-[7pt] font-medium text-slate-600 mt-0.5">
              Proprietor: <strong className="text-slate-950 font-bold">{headerData.proprietor}</strong> • <span className="text-[#0052cc] font-semibold">{headerData.website}</span>
            </div>
          </div>
        </div>
        {/* Dual Brand Accent Rule: 70% Royal Blue + 30% Maroon Red */}
        <div className="w-full flex h-[2px]">
          <div className="w-7/10 bg-[#0052cc]" />
          <div className="w-3/10 bg-[#a81c1c]" />
        </div>
      </div>
    );
  };

  const renderFooterLayout = () => {
    return (
      <div className="w-full shrink-0 px-[18mm] pb-[4mm] pt-1 text-slate-700 font-sans bg-white z-20">
        <div className="w-full flex h-[1.5px] mb-1.5">
          <div className="w-7/10 bg-[#0052cc]" />
          <div className="w-3/10 bg-[#a81c1c]" />
        </div>
        <div className="grid grid-cols-3 gap-2 text-left leading-tight text-[6.5pt]">
          <div>
            <span className="font-extrabold text-slate-900 uppercase tracking-widest text-[6pt]">Address: </span>
            <span className="text-slate-600 font-medium">{headerData.address}</span>
          </div>
          <div className="text-center">
            <span className="font-extrabold text-slate-900 uppercase tracking-widest text-[6pt]">Contact: </span>
            <span className="text-slate-600 font-medium">{headerData.phone} • </span>
            <span className="text-[#0052cc] font-bold">{headerData.email}</span>
          </div>
          <div className="text-right">
            <span className="font-extrabold text-slate-900 uppercase tracking-widest text-[6pt]">GSTIN: </span>
            <span className="text-slate-900 font-bold font-mono">{headerData.gstin}</span>
            <span className="text-slate-500 block text-[6pt]">{headerData.hsnSummary}</span>
          </div>
        </div>
      </div>
    );
  };

  const renderLetterCard = (itemData: typeof formData, keyId?: string) => {
    const rawText = itemData.bodyText || '';
    const match = rawText.match(/(\*\*Best Regards,\*\*|Best Regards,|&nbsp;|\*\*BAIDYANATH SETH|\*\*For STANDARD ENGINEERING)/i);

    let mainBody = rawText;
    let closingText = 'Yours faithfully,';
    let signatoryText = `For **STANDARD ENGINEERING SERVICE**\n\n\n**BAIDYANATH SETH**\nProprietor`;
    let hasSig = false;

    if (match && match.index !== undefined) {
      hasSig = true;
      mainBody = rawText.substring(0, match.index).trim();
      const sigRaw = rawText.substring(match.index).replace(/&nbsp;/g, '').trim();

      const sigMatch = sigRaw.match(/(\*\*BAIDYANATH SETH|\*\*For STANDARD|Yours faithfully)/i);
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
          <Wrench className="w-96 h-96 text-slate-900" />
        </div>

        {/* Top Header */}
        {renderHeaderLayout()}

        {/* Main Body Section */}
        <div className="flex-1 px-[18mm] py-1 relative z-10 text-slate-950 text-[10pt] leading-[1.55] text-left overflow-hidden flex flex-col justify-start" style={{ fontFamily: selectedFont }}>
          
          {/* Reference No & Date Line */}
          {(itemData.referenceNo || itemData.date) && (
            <div className="flex justify-between items-center mb-3 text-[9pt] font-semibold text-slate-800 border-b border-slate-200 pb-1.5" style={{ fontFamily: selectedFont }}>
              <div className="flex items-center gap-1.5">
                <span className="text-slate-400 font-bold uppercase text-[7.5pt] tracking-wider">Ref No:</span>
                <span className="font-extrabold text-slate-950"><ReactMarkdown components={{ p: React.Fragment }}>{(itemData.referenceNo || '').replace(/\n/g, '  \n')}</ReactMarkdown></span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-slate-400 font-bold uppercase text-[7.5pt] tracking-wider">Date:</span>
                <span className="font-extrabold text-slate-950"><ReactMarkdown components={{ p: React.Fragment }}>{(itemData.date || '').replace(/\n/g, '  \n')}</ReactMarkdown></span>
              </div>
            </div>
          )}

          {/* Recipient Address Block */}
          {itemData.recipientName && (
            <div className="mb-3 text-[9.5pt] text-slate-900 leading-snug">
              <div className="text-[7.5pt] font-extrabold uppercase tracking-wider text-slate-400 mb-0.5">To,</div>
              <div className="font-bold text-slate-950">{itemData.recipientName}</div>
              <div className="whitespace-pre-line text-slate-700 font-medium">{itemData.recipientAddress}</div>
            </div>
          )}

          {/* Polished Document Subject Title */}
          {itemData.subject && (
            <div className="text-left my-3 pl-2.5 border-l-3 border-[#0052cc] text-[9.5pt] font-extrabold uppercase tracking-wide text-slate-950">
              <span>SUBJECT: {itemData.subject}</span>
            </div>
          )}

          {/* Salutation */}
          {itemData.salutation && (
            <div className="mb-2 text-[9.5pt] font-semibold text-slate-900">
              {itemData.salutation}
            </div>
          )}

          {/* Main Body Text & Custom Table Rendering */}
          {itemData.bodyText && (
            <div className="mb-4 max-w-none leading-[1.55] text-slate-950 text-[9.5pt]" style={{ fontFamily: selectedFont }}>
              {hasSig ? (
                <>
                  <div className="prose prose-p:mt-0 prose-p:mb-2 max-w-none text-justify text-slate-950 text-[9.5pt] prose-strong:font-bold prose-strong:text-black prose-table:border prose-table:border-slate-300 prose-th:bg-[#0052cc] prose-th:text-white prose-th:p-2 prose-td:p-2 prose-td:border prose-td:border-slate-200 leading-[1.55]" style={{ fontFamily: selectedFont }}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {mainBody.replace(/\n/g, '  \n')}
                    </ReactMarkdown>
                  </div>

                  {/* Sign-off Closing */}
                  <div className="text-left w-full text-[9.5pt] font-medium text-slate-950 mt-1.5 leading-none">
                    {closingText}
                  </div>

                  {/* Blank space after Yours faithfully for physical signing & stamping */}
                  <div className="h-14 w-full" />

                  {/* Signatory Name & Title */}
                  <div className="text-left w-full text-[9.5pt] text-slate-950 font-sans leading-tight">
                    <div className="font-black text-[10pt] uppercase tracking-wide">{headerData.proprietor}</div>
                    <div className="font-semibold text-[8.5pt] text-slate-600">Proprietor</div>
                  </div>
                </>
              ) : (
                <div className="prose prose-p:mt-0 prose-p:mb-2.5 max-w-none text-justify text-slate-950 text-[10pt] prose-strong:font-bold prose-strong:text-black prose-table:border prose-table:border-slate-300 prose-th:bg-slate-900 prose-th:text-white prose-th:p-2 prose-td:p-2 prose-td:border prose-td:border-slate-200 leading-[1.55]" style={{ fontFamily: selectedFont }}>
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

  const inputCls = "w-full p-2.5 border border-slate-200 rounded-xl focus:ring-4 focus:ring-slate-900/10 focus:border-slate-900 hover:border-slate-300 outline-none transition-all bg-white text-xs font-semibold text-slate-900 shadow-sm";
  const labelCls = "block text-xs font-semibold text-slate-700 mb-1";

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans selection:bg-slate-900 selection:text-white">
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
            <ArrowLeft className="w-4 h-4 text-slate-900" /> Home Portal
          </Link>
          <div className="w-px h-6 bg-slate-200"></div>
          <h1 className="text-lg font-bold text-slate-900 flex items-center gap-2.5">
            <div className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center font-black shadow-md">
              SE
            </div>
            Standard Engineering Service Letterhead Generator
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
                <div className="w-3.5 h-3.5 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin" />
                Exporting...
              </>
            ) : (
              <>
                <Download className="w-4 h-4 text-slate-900" />
                Export Current PDF
              </>
            )}
          </button>

          <button
            onClick={handleExportAllPDF}
            disabled={isExporting || isExportingAll}
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold transition-all shadow-md hover:shadow-lg flex items-center gap-2 text-xs"
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
            className={`flex-1 py-3 text-xs font-semibold ${activeTab === 'form' ? 'text-slate-900 border-b-2 border-slate-900' : 'text-slate-500'}`}
            onClick={() => setActiveTab('form')}
          >
            Edit Details
          </button>
          <button
            className={`flex-1 py-3 text-xs font-semibold ${activeTab === 'preview' ? 'text-slate-900 border-b-2 border-slate-900' : 'text-slate-500'}`}
            onClick={() => setActiveTab('preview')}
          >
            Preview Document
          </button>
        </div>

        {/* Left Control Panel */}
        <div className={`${activeTab === 'form' ? 'flex' : 'hidden'} md:flex w-full md:w-[420px] bg-white border-r border-slate-200 flex-col h-full overflow-y-auto print:hidden z-10 shadow-sm relative`}>
          <div className="p-5 space-y-5">
            
            {/* Quick Templates Selector */}
            <div className="bg-slate-900 text-white p-4 rounded-2xl shadow-sm">
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                <FileText className="w-4 h-4 text-amber-400" />
                Quick Templates
              </label>
              <select
                value={selectedTemplateId}
                onChange={handleTemplateChange}
                className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs font-semibold text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
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
                  onClick={() => setHeaderTheme('brand_blue')}
                  className={`p-2 rounded-xl text-xs font-semibold border text-center transition-all ${headerTheme === 'brand_blue' ? 'bg-[#0052cc] text-white border-[#0052cc] shadow-sm' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'}`}
                >
                  Official SES Brand
                </button>
                <button
                  type="button"
                  onClick={() => setHeaderTheme('navy')}
                  className={`p-2 rounded-xl text-xs font-semibold border text-center transition-all ${headerTheme === 'navy' ? 'bg-slate-900 text-white border-slate-900 shadow-sm' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'}`}
                >
                  Executive Dark
                </button>
                <button
                  type="button"
                  onClick={() => setHeaderTheme('amber')}
                  className={`p-2 rounded-xl text-xs font-semibold border text-center transition-all ${headerTheme === 'amber' ? 'bg-amber-700 text-white border-amber-700 shadow-sm' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'}`}
                >
                  Industrial Amber
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

            {/* Logo Display Mode Selector */}
            <div className="space-y-1">
              <label className={labelCls}>Logo Emblem Style</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setLogoType('vector')}
                  className={`p-2 rounded-xl text-xs font-semibold border text-center transition-all ${logoType === 'vector' ? 'bg-slate-900 text-white border-slate-900 shadow-sm' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'}`}
                >
                  Vector Crest
                </button>
                <button
                  type="button"
                  onClick={() => setLogoType('image')}
                  className={`p-2 rounded-xl text-xs font-semibold border text-center transition-all ${logoType === 'image' ? 'bg-slate-900 text-white border-slate-900 shadow-sm' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'}`}
                >
                  Website Image
                </button>
              </div>
            </div>

            <hr className="border-slate-200" />

            {/* Firm Header Details Accordion */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-slate-700" />
                Firm Registration Details
              </div>

              <div>
                <label className={labelCls}>Trade Name</label>
                <input type="text" name="firmName" value={headerData.firmName} onChange={handleHeaderChange} className={inputCls} />
              </div>

              <div>
                <label className={labelCls}>Proprietor (Legal Name)</label>
                <input type="text" name="proprietor" value={headerData.proprietor} onChange={handleHeaderChange} className={inputCls} />
              </div>

              <div>
                <label className={labelCls}>GSTIN / UIN</label>
                <input type="text" name="gstin" value={headerData.gstin} onChange={handleHeaderChange} className={inputCls} />
              </div>

              <div>
                <label className={labelCls}>Principal Place of Business</label>
                <textarea name="address" value={headerData.address} onChange={handleHeaderChange} rows={2} className={inputCls} />
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

export default StandardEngineeringLetterheadGenerator;
