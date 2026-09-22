import React, { useState } from 'react';
import { Settings2, Printer, FileText, Sparkles, Sofa, Leaf, Sprout, Store } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const templateOptions = [
  {
    id: "quotation",
    name: "1. Quotation / Proforma Invoice",
    isHTML: false,
    data: {
      referenceNo: "RGE/QTN/2026/042",
      date: "11/09/2026",
      recipientName: "Customer Name",
      recipientAddress: "Customer Address",
      subject: "Quotation for Supply of Dehydrated Vegetables and Spices",
      salutation: "Dear Sir/Madam,",
      bodyText: `We are pleased to submit our best competitive rates for the bulk supply of dehydrated agricultural products as requested.

| # | HSN | Description of Goods | Qty (KG) | Unit Rate (₹) | Amount (₹) |
|---|---|---|---|---|---|
| 1 | 07129020 | Premium Dehydrated Garlic Powder (A-Grade) | 500 | 185.00 | 92,500 |
| 2 | 09041150 | Green Pepper, Dehydrated (Whole) | 200 | 450.00 | 90,000 |
| 3 | 0712 | Dried Mixed Vegetables (Standard Cut) | 150 | 120.00 | 18,000 |
| | | **Subtotal** | | | **2,00,500** |
| | | CGST @ 2.5% | | | 5,012.50 |
| | | SGST @ 2.5% | | | 5,012.50 |
| | | **Grand Total** | | | **₹2,10,525** |

**Terms & Conditions:**
- **Validity:** Prices are valid for 15 days from the date of quotation.
- **Payment Terms:** 30% advance with Purchase Order, remaining 70% against dispatch.
- **Delivery:** Ex-Warehouse, Adilabad. Freight charges extra at actuals.
- **Quality Assurance:** FSSAI standard compliant. Moisture content < 6%.

We look forward to receiving your valuable order.`,
      signatoryName: "ANANDHARAMAN",
      signatoryTitle: "Partner",
      signatoryFirm: "SRI SARAVANA STORES",
    },
  },
  {
    id: "tax-invoice",
    name: "2. Tax Invoice (Regular GST)",
    isHTML: false,
    data: {
      referenceNo: "RGE/INV/2026/088",
      date: "11/09/2026",
      recipientName: `Customer Name\nCustomer GSTIN: _______________`,
      recipientAddress: "Customer Address",
      subject: "TAX INVOICE",
      salutation: "",
      bodyText: `| # | HSN | Description of Goods | Qty | Rate (₹) | Tax % | Amount (₹) |
|---|---|---|---|---|---|---|
| 1 | 07129020 | Dehydrated Garlic Powder (25kg Bags) | 20 Bags | 4,625.00 | 5% | 92,500 |
| 2 | 09041150 | Green Pepper, Dehydrated (10kg Bags) | 10 Bags | 4,500.00 | 5% | 45,000 |
| | | | | | **Subtotal** | **₹1,37,500** |
| | | | | | CGST (2.5%) | 3,437.50 |
| | | | | | SGST (2.5%) | 3,437.50 |
| | | | | | **Total** | **₹1,44,375** |

**Amount in Words:** One Lakh Forty-Four Thousand Three Hundred Seventy-Five Rupees Only

**Bank Account Details:**
**Bank Name:** State Bank of India
**A/C No:** 0000003456789123
**IFSC Code:** SBIN0001234
**Branch:** Adilabad Main Branch

**Declaration:** We declare that this invoice shows the actual price of the goods described and that all particulars are true and correct.`,
      signatoryName: "ANANDHARAMAN",
      signatoryTitle: "Partner",
      signatoryFirm: "SRI SARAVANA STORES",
    },
  },
  {
    id: "delivery-challan",
    name: "3. Delivery Challan",
    isHTML: false,
    data: {
      referenceNo: "RGE/DC/2026/045",
      date: "11/09/2026",
      recipientName: "Customer Name",
      recipientAddress: `Customer Address\nContact Ph: _______________`,
      subject: "DELIVERY CHALLAN",
      salutation: "",
      bodyText: `**Dispatch From:** 4-5-24/439, Sundaraiah Nagar, Adilabad, Telangana – 504001

| # | HSN | Description of Goods | Qty | Gross Wt. | Remarks |
|---|---|---|---|---|---|
| 1 | 07129020 | Dehydrated Garlic Powder | 20 Bags | 505 KG | QC Passed |
| 2 | 09041150 | Green Pepper, Dehydrated | 10 Bags | 102 KG | QC Passed |

**Transport Details:**
**Transporter Name:** _______________
**Vehicle No.:** _______________
**Driver Contact:** _______________
**E-Way Bill No.:** _______________

*Goods received in good order and condition.*

&nbsp;
**Receiver's Signature / Seal:** ________________________`,
      signatoryName: "ANANDHARAMAN",
      signatoryTitle: "Partner / Authorized Signatory",
      signatoryFirm: "SRI SARAVANA STORES",
    },
  },
  {
    id: "cover-letter",
    name: "4. Official Business Cover Letter",
    isHTML: false,
    data: {
      referenceNo: "RGE/ADMIN/2026/012",
      date: "11/09/2026",
      recipientName: "The Assistant Commissioner of State Tax",
      recipientAddress: `Adilabad Circle,\nCommercial Taxes Department,\nTelangana`,
      subject: "Submission of Monthly GST Returns & ITC Reconciliation",
      salutation: "Respected Sir/Madam,",
      bodyText: `With reference to the subject cited above, we, **SRI SARAVANA STORES** (GSTIN: 33DPPPS7852B1ZJ), a registered partnership firm operating in the wholesale and retail trade of agricultural products, are hereby submitting our required documents.

Enclosed herewith, please find the detailed reconciliation statement of our Input Tax Credit (ITC) for the recent quarter, along with copies of the GSTR-1 and GSTR-3B filings. 

As an active regular taxpayer, we are fully committed to statutory compliance and prompt tax filings. Should you require any further clarifications or supporting ledgers, please let us know. 

Thank you for your continued support and cooperation.

**Enclosures:**
1. ITC Reconciliation Statement
2. Copies of GSTR-3B
3. Purchase Registers

Yours faithfully,`,
      signatoryName: "ANANDHARAMAN",
      signatoryTitle: "Partner",
      signatoryFirm: "SRI SARAVANA STORES",
    },
  },
  {
    id: "visa-sponsorship",
    name: "5. Visa Sponsorship Letter (Student/Dependent)",
    isHTML: false,
    data: {
      referenceNo: "SSS/VISA/2026/089",
      date: "12/09/2026",
      recipientName: "The Visa Officer",
      recipientAddress: "The Consulate General of South Korea\nMumbai, India",
      subject: "SPONSORSHIP DECLARATION & FINANCIAL GUARANTEE UNDERTAKING FOR SOUTH KOREA VISA (AI4Sci Korea 2026, SEOUL)",
      salutation: "Dear Sir/Madam,",
      bodyText: `I, **Mr. ANANDHARAMAN GOVINDASAMY**, an Indian citizen, hereby confirm that I am the biological father and financial sponsor of **Mr. HARISH ANANDHARAMAN** (Passport No.: T5527535, Student UID: 24WU02647876), who is currently pursuing his doctoral degree as a 3rd Year Ph.D. Scholar in the COMPUTER SCIENCE Department, School of Technology, WOXSEN University, India..

I am the Proprietor of **SRI SARAVANA STORES**, a registered retail business in Tamil Nadu, India (GSTIN: 33DPPPS7852B1ZJ). My enterprise is active, generates a stable income, and I regularly file my Income Tax Returns.

My son, Mr. HARISH ANANDHARAMAN, has been accepted to present his doctoral research paper titled "Self-Improving AI Agents for Automated Scientific Discovery" at the International Conference on AI for Science - AI4Sci Korea 2026, scheduled to take place in Seoul, South Korea from 28th September 2026 to 1st October 2026.

I hereby undertake full financial responsibility for his entire trip to South Korea, including his round-trip travel, accommodation, daily living expenses, meals, local transport, overseas health insurance, and any emergency contingencies that may arise during his stay from 26th September 2026 to 5th October 2026.

He is traveling strictly for academic purposes. He has strong academic commitments in India and will return immediately after completing his conference visit to resume his Ph.D. research at Woxsen University.

All necessary financial and business credentials, including GST registration certificate, PAN, bank statements, Income Tax Returns, Woxsen University NOC, and AI4Sci conference registration receipts, are submitted in support of this application.

I fully support his participation in this international conference and assure you of my financial capability and commitment. I kindly request you to consider his visa application favorably.

Thanking you.`,
      signatoryName: "ANANDHARAMAN GOVINDASAMY",
      signatoryTitle: "Proprietor",
      signatoryFirm: "SRI SARAVANA STORES",
    },
  }
];

const SriSaravanaLetterheadGenerator = () => {
  const [activeTab, setActiveTab] = useState<'form' | 'preview'>('form');
  const [selectedFont, setSelectedFont] = useState("Calibri, Arial, sans-serif");
  const [headerStyle, setHeaderStyle] = useState<'centered' | 'boxed' | 'modern'>('centered');

  const [headerData, setHeaderData] = useState({
    firmName: 'SRI SARAVANA STORES',
    tagline: 'Trader - Retailer | Retail Business',
    proprietor: 'ANANDHARAMAN',
    gstin: '33DPPPS7852B1ZJ',
    hsnCode: 'HSN: 73211110 (Kitchen Stoves) | 73231000 (Steel Household Articles)',
    regType: 'COMPOSITION TAXPAYER (PROPRIETORSHIP)',
    address: '2, 923, Sri Saravana Store, East Gate, Thanjavur, Tamil Nadu, 613001',
    phone: '+91 8125588816',
    email: 'info@srisaravanastores.in',
  });

  const [formData, setFormData] = useState(templateOptions[0].data);

  const handleHeaderChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setHeaderData({ ...headerData, [e.target.name]: e.target.value });
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const loadTemplate = (templateId: string) => {
    const selected = templateOptions.find(t => t.id === templateId);
    if (selected) {
      setFormData(selected.data);
    }
  };

  const inputCls = "w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs outline-none transition-all text-slate-800 focus:border-amber-700";
  const labelCls = "block text-[11px] mb-1 text-slate-600 font-semibold";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col print:bg-white print:text-black">
      <style>
        {`
          @media print {
            @page { size: A4; margin: 0mm; }
            body {
              margin: 0 !important; padding: 0 !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              background: white !important;
            }
            .page-container {
              box-shadow: none !important;
              margin: 0 !important;
              width: 210mm !important;
              min-height: 100vh !important;
              padding: 10mm 12.7mm 30mm !important;
              position: relative;
              page-break-inside: avoid !important;
              page-break-after: avoid !important;
              overflow: hidden !important;
              display: flex !important;
            }
            .print-fixed-footer {
              position: fixed !important;
              bottom: 15mm !important;
              left: 0 !important;
              right: 0 !important;
              width: 100% !important;
              padding-left: 12.7mm !important; padding-right: 12.7mm !important;
              background: transparent !important;
              z-index: 1000;
            }

          }
        `}
      </style>

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 print:hidden shadow-sm">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-800 to-blue-900 flex items-center justify-center text-amber-500 font-black text-xl shadow border border-blue-900">
              <Sprout className="w-6 h-6 text-amber-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-slate-900 tracking-tight leading-none">SRI SARAVANA STORES</span>
              <span className="text-xs text-blue-900 font-semibold uppercase tracking-wider">GSTIN: {headerData.gstin} • Official Generator</span>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <div className="md:hidden flex bg-slate-100 rounded-md p-1 border border-slate-200">
              <button onClick={() => setActiveTab("form")} className={`px-3 py-1 text-xs rounded font-bold ${activeTab === "form" ? "bg-white shadow text-blue-900" : "text-slate-500"}`}>Form</button>
              <button onClick={() => setActiveTab("preview")} className={`px-3 py-1 text-xs rounded font-bold ${activeTab === "preview" ? "bg-white shadow text-blue-900" : "text-slate-500"}`}>Preview</button>
            </div>
            <button onClick={() => window.print()} className="inline-flex items-center gap-2 text-white px-5 py-2.5 text-xs font-bold rounded-lg shadow hover:bg-blue-900 transition-colors bg-blue-900">
              <Printer className="w-4 h-4" /> Print / Export PDF
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 pt-20 pb-12 px-4 container mx-auto flex flex-col md:flex-row gap-8 justify-center print:block print:p-0 print:m-0 print:max-w-none">

        {/* Sidebar Controls */}
        <div className={`w-full md:w-[380px] bg-white border border-slate-200 rounded-xl shadow-sm p-6 flex-col gap-6 overflow-y-auto max-h-[calc(100vh-120px)] sticky top-24 print:hidden shrink-0 ${activeTab === "form" ? "flex" : "hidden md:flex"}`}>

          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <Settings2 className="w-4 h-4 text-blue-900" />
              <h2 className="text-base font-bold text-slate-900">Document Settings</h2>
            </div>
          </div>

          {/* Template Selectors */}
          <div>
            <label className="block text-[11px] mb-2 text-blue-900 font-extrabold uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Select Document Template
            </label>
            <div className="grid grid-cols-1 gap-2">
              {templateOptions.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => loadTemplate(t.id)}
                  className="text-left px-3 py-2.5 bg-slate-50 hover:bg-blue-50/70 border border-slate-200 rounded-lg text-xs font-bold text-slate-800 transition-all flex items-center justify-between group"
                >
                  <span>{t.name}</span>
                  <FileText className="w-4 h-4 text-blue-900 group-hover:scale-110 transition-transform" />
                </button>
              ))}
            </div>
          </div>

          {/* Typography & Header Layout */}
          <div className="pt-2 border-t border-slate-100 space-y-3">
            <div>
              <label className={labelCls}>Header Design Style</label>
              <select
                value={headerStyle}
                onChange={(e) => setHeaderStyle(e.target.value as any)}
                className={`${inputCls} cursor-pointer font-bold text-blue-900 bg-blue-50/60 border-blue-200`}
              >
                <option value="centered">★ Official Embassy / Corporate (Logo)</option>
                <option value="boxed">Boxed Traditional Border Banner</option>
                <option value="modern">Modern Left-Aligned Brand Header</option>
              </select>
            </div>
            <div>
              <label className={labelCls}>Document Typography</label>
              <select
                value={selectedFont}
                onChange={(e) => setSelectedFont(e.target.value)}
                className={`${inputCls} cursor-pointer font-medium`}
              >
                <option value="Calibri, Arial, sans-serif">Calibri / Arial (Clean Modern)</option>
                <option value="'Times New Roman', Times, serif">Times New Roman (Formal Serif)</option>
                <option value="Georgia, serif">Georgia (Classic Serif)</option>
              </select>
            </div>
          </div>

          {/* Header Metadata */}
          <div className="space-y-3 pt-3 border-t border-slate-100">
            <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Firm Info & Header</h3>
            <div><label className={labelCls}>Firm Name</label><input type="text" name="firmName" value={headerData.firmName} onChange={handleHeaderChange} className={inputCls} /></div>
            <div><label className={labelCls}>Tagline</label><input type="text" name="tagline" value={headerData.tagline} onChange={handleHeaderChange} className={inputCls} /></div>
            <div className="grid grid-cols-2 gap-3">
              <div><label className={labelCls}>Proprietor</label><input type="text" name="proprietor" value={headerData.proprietor} onChange={handleHeaderChange} className={inputCls} /></div>
              <div><label className={labelCls}>GSTIN</label><input type="text" name="gstin" value={headerData.gstin} onChange={handleHeaderChange} className={inputCls} /></div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div><label className={labelCls}>HSN Codes</label><input type="text" name="hsnCode" value={headerData.hsnCode} onChange={handleHeaderChange} className={inputCls} /></div>
              <div><label className={labelCls}>Registration Type</label><input type="text" name="regType" value={headerData.regType} onChange={handleHeaderChange} className={inputCls} /></div>
            </div>
            <div><label className={labelCls}>Registered Address</label><textarea name="address" value={headerData.address} onChange={handleHeaderChange} className={inputCls} rows={2} /></div>
            <div><label className={labelCls}>Contact Numbers</label><input type="text" name="phone" value={headerData.phone} onChange={handleHeaderChange} className={inputCls} /></div>
          </div>

          {/* Letter Content */}
          <div className="space-y-3 pt-3 border-t border-slate-100">
            <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Letter Content</h3>
            <div className="grid grid-cols-2 gap-3">
              <div><label className={labelCls}>Reference No.</label><input type="text" name="referenceNo" value={formData.referenceNo} onChange={handleFormChange} className={inputCls} /></div>
              <div><label className={labelCls}>Date</label><input type="text" name="date" value={formData.date} onChange={handleFormChange} className={inputCls} /></div>
            </div>
            <div><label className={labelCls}>Recipient Name / Dept</label><textarea name="recipientName" value={formData.recipientName} onChange={handleFormChange} className={`${inputCls} resize-none`} rows={2} /></div>
            <div><label className={labelCls}>Recipient Address</label><textarea name="recipientAddress" value={formData.recipientAddress} onChange={handleFormChange} className={inputCls} rows={2} /></div>
            <div><label className={labelCls}>Subject Line</label><textarea name="subject" value={formData.subject} onChange={handleFormChange} className={inputCls} rows={2} /></div>
            <div><label className={labelCls}>Salutation</label><input type="text" name="salutation" value={formData.salutation} onChange={handleFormChange} className={inputCls} /></div>
            <div><label className={labelCls}>Body Content (Markdown)</label><textarea name="bodyText" value={formData.bodyText} onChange={handleFormChange} className={`${inputCls} font-mono leading-relaxed`} rows={10} /></div>
          </div>

          {/* Signatory */}
          <div className="space-y-3 pt-3 border-t border-slate-100">
            <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Signatory Details</h3>
            <div className="grid grid-cols-2 gap-3">
              <div><label className={labelCls}>Signatory Name</label><input type="text" name="signatoryName" value={formData.signatoryName} onChange={handleFormChange} className={inputCls} /></div>
              <div><label className={labelCls}>Signatory Title</label><input type="text" name="signatoryTitle" value={formData.signatoryTitle} onChange={handleFormChange} className={inputCls} /></div>
            </div>
            <div><label className={labelCls}>Signatory Firm / Seal</label><input type="text" name="signatoryFirm" value={formData.signatoryFirm} onChange={handleFormChange} className={inputCls} /></div>
          </div>

        </div>

        {/* Live Preview Pane */}
        {/* WYSIWYG Letterhead Preview */}
        <div className={`print-container flex-1 overflow-y-auto bg-slate-200/50 p-4 md:p-8 rounded-2xl md:flex flex-col gap-10 items-center relative print:block print:bg-transparent print:rounded-none print:p-0 print:m-0 ${activeTab === "preview" ? "flex" : "hidden"}`}>

          {/* A4 Page */}
          <div className="page-container page w-full max-w-[210mm] min-h-[297mm] bg-white text-black shadow-2xl px-8 py-8 md:px-12 md:py-10 relative flex flex-col print:shadow-none print:w-full print:max-w-none" style={{ fontFamily: selectedFont }}>

            <div className="w-full flex flex-col">

              {/* RESTORED CORPORATE LETTERHEAD HEADER (Raksha Style) */}
              <div className="w-full pb-5 mb-5 relative flex items-start justify-between">

                {/* Sleek Corporate Logo Block */}
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-24 h-24 bg-blue-800 rounded-sm flex flex-col items-center justify-center relative overflow-hidden shadow-sm">
                    <div className="absolute top-0 left-0 w-full h-2 bg-slate-900/30"></div>
                    <span className="text-[40px] font-black text-white tracking-widest leading-none font-serif mt-2 ml-1.5 drop-shadow-sm">SSS</span>
                    <span className="text-[8px] font-extrabold text-blue-100 uppercase tracking-[0.4em] mt-1 ml-1">Stores</span>
                  </div>
                </div>

                {/* Subtle Vertical Divider */}
                <div className="w-[1px] h-24 bg-slate-200 mx-6 mt-1.5"></div>

                {/* Content Block */}
                <div className="flex flex-col items-start text-left flex-1 pt-0">
                  {/* Firm Name */}
                  <h1 className="text-[30px] whitespace-nowrap leading-none font-black text-slate-900 tracking-tight uppercase mb-2 font-serif w-full">
                    {headerData.firmName}
                  </h1>

                  {/* Tagline */}
                  <p className="text-[12px] font-bold text-blue-800 tracking-[0.2em] uppercase mb-3.5">
                    Retailer of Steel Furniture & Kitchen Stoves
                  </p>

                  {/* Address */}
                  <div className="text-[12px] font-medium text-slate-600 leading-snug w-full mb-2.5">
                    <span className="text-slate-900 font-bold mr-1">Address:</span> {headerData.address}
                  </div>

                  {/* Contact Row 1 (GSTIN, Email, Phone) */}
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-[11.5px] font-medium text-slate-600 w-full mb-1">
                    <div className="flex items-center"><span className="text-slate-900 mr-1.5 font-bold">GSTIN:</span> {headerData.gstin}</div>
                    <div className="flex items-center"><span className="text-slate-900 mr-1.5 font-bold">Email:</span> {headerData.email}</div>
                    <div className="flex items-center"><span className="text-slate-900 mr-1.5 font-bold">Ph:</span> {headerData.phone}</div>
                  </div>
                </div>

                {/* Corporate Bottom Border */}
                <div className="absolute bottom-0 left-0 right-0">
                  <div className="h-[2px] w-full bg-blue-800 mb-[2px]"></div>
                  <div className="h-[1px] w-full bg-slate-900"></div>
                </div>
              </div>

              {/* Reference & Date */}
              <div className="flex justify-between items-center text-[9.5pt] mb-2 text-slate-800">
                <div>
                  {formData.referenceNo && <span><strong>Ref:</strong> {formData.referenceNo}</span>}
                </div>
                <div>
                  {formData.date && <span><strong>Date:</strong> {formData.date}</span>}
                </div>
              </div>

              {/* Recipient */}
              {formData.recipientName && (
                <div className="text-[9.5pt] leading-tight mb-2 text-slate-900">
                  <strong>To</strong><br />
                  <span className="font-bold text-blue-950">{formData.recipientName}</span><br />
                  <span className="whitespace-pre-line text-slate-700">{formData.recipientAddress}</span>
                </div>
              )}

              {/* Subject */}
              {formData.subject && (
                <div className="border-l-[3.5px] border-amber-500 bg-blue-50/60 p-2 mb-2 font-sans text-[9.2pt] leading-snug font-bold text-blue-950">
                  Subject: {formData.subject}
                </div>
              )}

              {/* Salutation */}
              {formData.salutation && (
                <p className="text-[9.5pt] leading-[1.5] text-justify mb-1.5 text-slate-900 font-medium">{formData.salutation}</p>
              )}

              {/* Body Content */}
              <div className="w-full text-[9.6pt] leading-[1.6] text-justify text-slate-900 mb-2 [&_p]:mb-3 prose-strong:font-bold prose-strong:text-blue-950">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {formData.bodyText || ''}
                </ReactMarkdown>
              </div>

            </div>

            {/* Signature Block (Left Aligned) */}
            <div className="w-full mt-1 pt-1 flex flex-col items-start text-left font-sans">
              <div className="text-[9.5pt] text-slate-900 font-medium">Yours faithfully,</div>
              <div className="text-[9.2pt] font-bold text-blue-950 mt-0.5">For {formData.signatoryFirm || headerData.firmName}</div>

              {/* Blank vertical space for physical signing & stamping */}
              <div className="h-8 w-48" />

              <div className="text-[10.5pt] font-bold text-blue-950 uppercase">{formData.signatoryName || headerData.proprietor}</div>
              <div className="text-[9pt] font-semibold text-slate-700">{formData.signatoryTitle || 'Partner'}</div>
            </div>

            {/* Centered Page Footer */}
            <footer className="print-fixed-footer w-full font-sans mt-auto pt-3.5 pb-1.5 border-t-2 border-blue-900 bg-white text-center text-[9px] text-slate-900 leading-snug">
              <div className="font-semibold text-slate-900 flex items-center justify-center flex-wrap gap-2">
                <span>GSTIN: <strong className="text-blue-950 font-black">{headerData.gstin}</strong></span>
                <span className="text-blue-900 font-bold">•</span>
                <span>{headerData.hsnCode}</span>
                <span className="text-blue-900 font-bold">•</span>
                <span>{headerData.regType}</span>
              </div>
            </footer>

          </div>

        </div>


      </main>
    </div>
  );
};

export default SriSaravanaLetterheadGenerator;
