import React, { useState } from 'react';
import { Settings2, Printer, FileText, Sparkles, Sofa } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const templateOptions = [
  {
    id: "quotation",
    name: "1. Quotation / Estimate",
    isHTML: false,
    data: {
      referenceNo: "HFE/QTN/2026/001",
      date: "11/09/2026",
      recipientName: "Customer Name",
      recipientAddress: "Customer Address",
      subject: "Quotation for Furniture Supply",
      salutation: "Dear Sir/Madam,",
      bodyText: `We are pleased to submit our quotation for the supply of furniture as detailed below:

| # | Description | Qty | Unit Price (₹) | Amount (₹) |
|---|---|---|---|---|
| 1 | Wooden Office Chair | 10 | 3,500 | 35,000 |
| 2 | Wooden Office Table (4×2 ft) | 5 | 8,500 | 42,500 |
| 3 | Wooden Bookshelf (6 shelf) | 3 | 12,000 | 36,000 |
| | **Subtotal** | | | **1,13,500** |
| | GST (Composition – Bill of Supply) | | | – |
| | **Total** | | | **₹1,13,500** |

**Note:** As per Composition Scheme under GST, tax is not collected separately. This is a Bill of Supply.

**Terms & Conditions:**
- Delivery within 15 working days from order confirmation
- 50% advance payment required
- Balance on delivery
- Warranty: 1 year against manufacturing defects

Thanking you.`,
      signatoryName: "POSHETTY KUDALA",
      signatoryTitle: "Proprietor",
      signatoryFirm: "Home Furniture and Enterprise",
    },
  },
  {
    id: "bill-of-supply",
    name: "2. Bill of Supply (Composition Dealer)",
    isHTML: false,
    data: {
      referenceNo: "HFE/BOS/2026/001",
      date: "11/09/2026",
      recipientName: "Customer Name",
      recipientAddress: "Customer Address\nGSTIN (if any): _______________",
      subject: "BILL OF SUPPLY – Composition taxable person, not eligible to collect tax on supplies",
      salutation: "",
      bodyText: `| # | HSN | Description of Goods | Qty | Rate (₹) | Amount (₹) |
|---|---|---|---|---|---|
| 1 | 940330 | Wooden Office Furniture | 5 | 8,500 | 42,500 |
| 2 | 940330 | Wooden Home Furniture | 3 | 12,000 | 36,000 |
| | | | | **Total** | **₹78,500** |

**Amount in Words:** Seventy Eight Thousand Five Hundred Rupees Only

**Mode of Payment:** Cash / Bank Transfer
**Delivery:** [Delivery Address]

**Declaration:** I/We hereby certify that the information given above is true, correct and complete in every respect.`,
      signatoryName: "POSHETTY KUDALA",
      signatoryTitle: "Proprietor",
      signatoryFirm: "Home Furniture and Enterprise",
    },
  },
  {
    id: "delivery-challan",
    name: "3. Delivery Challan",
    isHTML: false,
    data: {
      referenceNo: "HFE/DC/2026/001",
      date: "11/09/2026",
      recipientName: "Customer Name",
      recipientAddress: "Customer Address\nPh: _______________",
      subject: "DELIVERY CHALLAN",
      salutation: "",
      bodyText: `**Dispatch From:** Sy No.375/1, Panyam Road, Nandyal – 518 502

| # | Description | Qty | Remarks |
|---|---|---|---|
| 1 | Wooden Office Chair | 10 | Good Condition |
| 2 | Wooden Table (4×2 ft) | 5 | Good Condition |
| 3 | Wooden Bookshelf | 3 | Good Condition |

**Vehicle No.:** _______________
**Driver Name:** _______________

*This challan is for delivery purposes only. Invoice / Bill of Supply will follow.*

**Signature of Receiver:** _______________
**Date & Seal:** _______________`,
      signatoryName: "POSHETTY KUDALA",
      signatoryTitle: "Proprietor",
      signatoryFirm: "Home Furniture and Enterprise",
    },
  },
  {
    id: "warranty",
    name: "4. Warranty Certificate",
    isHTML: false,
    data: {
      referenceNo: "HFE/WC/2026/001",
      date: "11/09/2026",
      recipientName: "Customer Name",
      recipientAddress: "Customer Address\nBill No.: _______________   Bill Date: _______________",
      subject: "WARRANTY CERTIFICATE",
      salutation: "Dear Customer,",
      bodyText: `This is to certify that the furniture item(s) listed below have been purchased from **Home Furniture and Enterprise** and are covered under warranty as specified:

| Item Description | Serial / Batch No. | Warranty Period |
|---|---|---|
| [Item Description] | [Batch No.] | 1 Year from purchase |

**Warranty Terms:**
- Covers manufacturing defects only
- Damage due to misuse or accidents is NOT covered
- Warranty is non-transferable
- Present this certificate with original bill for claims`,
      signatoryName: "POSHETTY KUDALA",
      signatoryTitle: "Proprietor",
      signatoryFirm: "Home Furniture and Enterprise",
    },
  },
  {
    id: "spain-sponsorship",
    name: "5. Spain Visa Sponsorship – BioSpain 2026 (RAGHU KUDALA)",
    isHTML: false,
    data: {
      referenceNo: "HFE/VISA/2026/SPAIN",
      date: "11/09/2026",
      recipientName: "To\nThe Visa Officer",
      recipientAddress: "The Consulate General of Spain\nMumbai, India",
      subject: "SPONSORSHIP DECLARATION & FINANCIAL GUARANTEE FOR SCHENGEN VISA (BIOSPAIN 2026, BILBAO, SPAIN)",
      salutation: "Dear Sir / Madam,",
      bodyText: `I, **Mr. POSHETTY KUDALA**, an Indian citizen residing at **H.No: 3/535/J3, Byramal Street, Jillella, Nandyal, Andhra Pradesh – 518 501**, hereby confirm that I am the **biological father and financial sponsor** of **Mr. RAGHU KUDALA** (Student ID: **SU24010825**, Passport No: **AU931922**), who is a student at the **School of Chemical and Biotechnology (SCBT), SASTRA Deemed to be University**, Thirumalaisamudram, Thanjavur – 613 401, Tamil Nadu, India.

I am the **Proprietor of HOME FURNITURE AND ENTERPRISE**, a registered business in Nandyal, Andhra Pradesh, India (**GSTIN: 37COOPD8437E6ZK**, **PAN: CQLPR8612J**). My enterprise is active and generates a stable income, and I regularly file my Income Tax Returns.

My son, **Mr. RAGHU KUDALA**, has been accepted to attend **BIOSPAIN 2026** - one of the largest biotechnology trade fairs and conferences in Europe, organized by the Spanish national bioindustry association (AseBio):

- **Venue:** BILBAO EXHIBITION CENTRE
- **Address:** Azkue Kalea, 1, 48902 San Vicente de Barakaldo, Bizkaia. Spain
- **Dates:** 29 September – 1 October 2026

I hereby undertake **full and unconditional financial responsibility** for my son's entire visit to Spain and the Schengen territory, covering:

- Round-trip international airfare (India to Spain and back)
- Hotel accommodation in Bilbao for the duration of his stay
- Daily living expenses, meals, and local transportation
- Overseas travel health insurance
- Conference registration and academic event fees
- Any emergency contingency expenses during his stay

My son is traveling **strictly for academic and professional development purposes** and will **return to India on or before 06 October 2026** to resume his studies at SASTRA Deemed to be University.

All required supporting documents - including GST Registration Certificate, PAN Card, Bank Statements, Income Tax Returns, University Enrollment Certificate, and BioSpain Conference Registration - are enclosed herewith.

I kindly and respectfully request you to consider his Schengen Visa application **favorably**.

Thanking you.`,
      signatoryName: "POSHETTY KUDALA",
      signatoryTitle: "Proprietor",
      signatoryFirm: "Home Furniture and Enterprise",
    },
  },
];

const HomeFurnitureLetterheadGenerator = () => {
  const [activeTab, setActiveTab] = useState<'form' | 'preview'>('form');
  const [selectedFont, setSelectedFont] = useState("Calibri, Arial, sans-serif");
  const [headerStyle, setHeaderStyle] = useState<'centered' | 'boxed' | 'modern'>('centered');

  const [headerData, setHeaderData] = useState({
    firmName: 'HOME FURNITURE AND ENTERPRISE',
    tagline: 'Premium Luxury Furniture Mart | Manufacturer & Wholesale',
    proprietor: 'POSHETTY KUDALA',
    gstin: '37COOPD8437E6ZK',
    hsnCode: 'HSN: 940330 (Wooden Furniture)',
    regType: 'ACTIVE COMPOSITION DEALER',
    address: 'Sy No.375/1, Maruthi Oil Mill, Panyam Road, Udumalpuram, Nandyal, Andhra Pradesh – 518 502',
    phone: '+91 7428730894',
    email: 'info@homefurniture.in',
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
            body, html, #root, .min-h-screen, main, .page-container {
              display: block !important;
              position: static !important;
              transform: none !important;
              height: auto !important;
              min-height: 0 !important;
              margin: 0 !important;
              padding: 0 !important;
              box-shadow: none !important;
              background: white !important;
            }
            body {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            .page-container {
              width: 210mm !important;
              margin: 0 auto !important;
            }
            thead { display: table-header-group; }
            tfoot { display: table-footer-group; }
            tr { page-break-inside: avoid; }
            
            .print-fixed-footer {
              position: fixed !important;
              bottom: 0 !important;
              left: 0 !important;
              right: 0 !important;
              width: 210mm !important;
              margin: 0 auto !important;
              background: white !important;
              z-index: 9999 !important;
            }
          }
          }
        `}
      </style>

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 print:hidden shadow-sm">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1a3c6e] to-blue-900 flex items-center justify-center text-amber-500 font-black text-xl shadow border border-[#1a3c6e]">
              <Sofa className="w-6 h-6 text-amber-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-slate-900 tracking-tight leading-none">HOME FURNITURE & ENTERPRISE</span>
              <span className="text-xs text-[#1a3c6e] font-semibold uppercase tracking-wider">GSTIN: {headerData.gstin} • Official Generator</span>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <div className="md:hidden flex bg-slate-100 rounded-md p-1 border border-slate-200">
              <button onClick={() => setActiveTab("form")} className={`px-3 py-1 text-xs rounded font-bold ${activeTab === "form" ? "bg-white shadow text-[#1a3c6e]" : "text-slate-500"}`}>Form</button>
              <button onClick={() => setActiveTab("preview")} className={`px-3 py-1 text-xs rounded font-bold ${activeTab === "preview" ? "bg-white shadow text-[#1a3c6e]" : "text-slate-500"}`}>Preview</button>
            </div>
            <button onClick={() => window.print()} className="inline-flex items-center gap-2 text-white px-5 py-2.5 text-xs font-bold rounded-lg shadow hover:bg-blue-900 transition-colors bg-[#1a3c6e]">
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
              <Settings2 className="w-4 h-4 text-[#1a3c6e]" />
              <h2 className="text-base font-bold text-slate-900">Document Settings</h2>
            </div>
          </div>

          {/* Template Selectors */}
          <div>
            <label className="block text-[11px] mb-2 text-[#1a3c6e] font-extrabold uppercase tracking-wider flex items-center gap-1">
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
                  <FileText className="w-4 h-4 text-[#1a3c6e] group-hover:scale-110 transition-transform" />
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
                className={`${inputCls} cursor-pointer font-bold text-[#1a3c6e] bg-blue-50/60 border-blue-200`}
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
        <div className={`flex-1 flex justify-center ${activeTab === "preview" ? "flex" : "hidden md:flex"} print:block print:w-full`}>
          <div
            className="page-container bg-white shadow-2xl print:shadow-none mx-auto flex flex-col relative"
            style={{
              width: "210mm",
              minHeight: "297mm",
              fontFamily: selectedFont,
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <table style={{ width: "100%", height: "100%", flex: 1, borderCollapse: "collapse" }} className="flex-1">
              <thead className="print:table-header-group">
                <tr>
                  <td style={{ padding: "10mm 15mm 0 15mm" }}>
                    {/* HEADER STYLES */}
                    {headerStyle === 'centered' && (
                      <div className="pb-3 mb-5 pt-0 relative">
                        <div className="flex justify-start items-center gap-10 mb-1">
                          {/* Logo Bounding Box - Keeps layout tight while letting image scale */}
                          <div className="flex shrink-0 w-36 h-24 relative">
                            <img src="/home-furniture-corp-logo.jpg" alt="Logo" className="absolute top-1/2 left-[-15px] -translate-y-1/2 w-48 max-w-none" style={{ mixBlendMode: 'multiply', filter: 'contrast(1.1) brightness(1.05)' }} />
                          </div>

                          {/* Text Block */}
                          <div className="flex flex-col items-start z-10 pt-2">
                            <div className="text-left">
                              <h1 className="text-[24px] leading-none font-black text-[#0f2142] tracking-tighter uppercase mb-1" style={{ fontFamily: "Georgia, serif" }}>
                                {headerData.firmName}
                              </h1>

                              <p className="text-[10px] font-bold text-[#c39f55] tracking-[0.15em] uppercase mb-3">
                                {headerData.tagline}
                              </p>

                              <div className="text-[10px] font-bold text-slate-800 leading-snug">
                                {headerData.address}
                              </div>

                              <div className="text-[10px] font-bold text-slate-700 mt-1.5">
                                <span className="text-[#c39f55]">T:</span> {headerData.phone} <span className="mx-1 text-slate-300">|</span> <span className="text-[#c39f55]">E:</span> {headerData.email} <span className="mx-1 text-slate-300">|</span><span className="text-[#0f2142]">GSTIN:</span> {headerData.gstin} <span className="mx-1 text-slate-300"></span>
                              </div>

                              <div className="text-[10px] font-bold text-slate-700 mt-0.5">
                                <span className="text-[#0f2142]">PROPRIETOR:</span> {headerData.proprietor}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#0f2142]"></div>
                        <div className="absolute bottom-[3px] left-0 right-0 h-[1px] bg-[#c39f55]"></div>
                      </div>
                    )}

                    {headerStyle === 'boxed' && (
                      <div className="border-4 border-double border-[#1a3c6e] p-4 mb-8">
                        <div className="flex justify-between items-start mb-2">
                          <div className="text-[10px] font-bold">GSTIN: {headerData.gstin}</div>
                          <div className="text-[10px] font-bold">Prop: {headerData.proprietor}</div>
                        </div>
                        <div className="text-center">
                          <h1 className="text-3xl font-black text-[#1a3c6e] tracking-wide uppercase mb-1">{headerData.firmName}</h1>
                          <p className="text-xs font-semibold text-slate-700 italic mb-2">{headerData.tagline}</p>
                          <p className="text-[10px] text-slate-600">{headerData.regType} • {headerData.hsnCode}</p>
                        </div>
                      </div>
                    )}

                    {headerStyle === 'modern' && (
                      <div className="flex justify-between items-end border-b-4 border-[#1a3c6e] pb-4 mb-8">
                        <div>
                          <h1 className="text-3xl font-black text-[#1a3c6e] uppercase tracking-tight mb-1">{headerData.firmName}</h1>
                          <p className="text-sm font-bold text-amber-600 uppercase tracking-widest">{headerData.tagline}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-[10px] font-bold text-slate-500 uppercase">GSTIN</div>
                          <div className="text-sm font-black text-slate-800">{headerData.gstin}</div>
                          <div className="text-[10px] font-bold text-slate-500 uppercase mt-1">Proprietor</div>
                          <div className="text-xs font-bold text-slate-800">{headerData.proprietor}</div>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={{ padding: "0 15mm", verticalAlign: "top", position: "relative", height: "100%" }}>
                    {/* WATERMARK */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none z-0">
                      <img src="/home-furniture-corp-logo.jpg" alt="Watermark" className="w-[80%] max-w-md object-contain grayscale" />
                    </div>
                    {/* DOCUMENT BODY */}
                    <div className="px-6 relative z-10 flex-1 bg-white/40">
                      {/* Ref & Date */}
                      <div className="flex justify-between items-center text-sm font-semibold text-slate-800 mb-8">
                        <div>Ref: <span className="font-extrabold text-slate-950"><ReactMarkdown components={{ p: React.Fragment }}>{(formData.referenceNo || '').replace(/\n/g, '  \n')}</ReactMarkdown></span></div>
                        <div>Date: <span className="font-extrabold text-slate-950"><ReactMarkdown components={{ p: React.Fragment }}>{(formData.date || '').replace(/\n/g, '  \n')}</ReactMarkdown></span></div>
                      </div>

                      {/* Recipient */}
                      <div className="text-sm text-slate-900 leading-snug mb-8">
                        <div className="font-extrabold mb-1"><ReactMarkdown components={{ p: React.Fragment }}>{(formData.recipientName || '').replace(/\n/g, '  \n')}</ReactMarkdown></div>
                        <div><ReactMarkdown components={{ p: React.Fragment }}>{(formData.recipientAddress || '').replace(/\n/g, '  \n')}</ReactMarkdown></div>
                      </div>

                      {/* Subject */}
                      {formData.subject && (
                        <div className="text-sm mb-6 flex items-start gap-3 bg-slate-50 p-3 rounded-lg border border-slate-200">
                          <span className="font-extrabold uppercase shrink-0 text-slate-950">Subject:</span>
                          <span className="font-bold underline decoration-slate-400 underline-offset-4 text-slate-900 leading-snug">
                            <ReactMarkdown components={{ p: React.Fragment }}>{(formData.subject || '').replace(/\n/g, '  \n')}</ReactMarkdown>
                          </span>
                        </div>
                      )}

                      {/* Salutation */}
                      {formData.salutation && (
                        <div className="text-sm font-semibold text-slate-900 mb-4">
                          {formData.salutation}
                        </div>
                      )}

                      {/* Body Text */}
                      <div className="text-sm text-slate-800 leading-relaxed text-justify space-y-4">
                        <div className="prose prose-sm max-w-none">
                          <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {formData.bodyText || ''}
                          </ReactMarkdown>
                        </div>
                      </div>

                      {/* Signatory */}
                      <div className="mt-16 text-sm text-slate-900 text-right pr-4">
                        <div className="mb-10 font-medium">For <span className="font-extrabold">{formData.signatoryFirm}</span></div>
                        <div className="font-extrabold uppercase tracking-wide">{formData.signatoryName}</div>
                        <div className="text-slate-600 font-semibold">{formData.signatoryTitle}</div>
                      </div>
                    </div>

                    {/* FOOTER PLACEHOLDER (pushed to bottom) */}
                  </td>
                </tr>
              </tbody>

              <tfoot className="print:table-footer-group">
                <tr>
                  <td>
                    {/* SPACER FOR FIXED FOOTER */}
                    <div style={{ height: "25mm" }}></div>
                  </td>
                </tr>
              </tfoot>
            </table>

            {/* REAL FOOTER (Sticky to absolute bottom) */}
            <div className="absolute bottom-0 left-0 right-0 w-full z-50 bg-white print-fixed-footer">
              <div style={{ padding: "0 15mm 10mm 15mm" }}>
                <div className="pt-2 px-10 pb-4 relative bg-white">
                  <div className="h-[1.5px] bg-[#c39f55] w-full mb-[2px]"></div>
                  <div className="border-t-[4px] border-[#0f2142] pt-3 flex justify-between items-center text-[9px] uppercase tracking-wider">
                    <div className="font-black text-[#0f2142]">{headerData.firmName}</div>
                    <div className="font-black text-[#0f2142]">www.homefurniture.in</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default HomeFurnitureLetterheadGenerator;
