import React, { useState } from 'react';
import { Settings2, Printer, FileText, Sparkles, Sofa } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const templateOptions = [
  {
    id: "gst-details",
    name: "1. GST Registration & Business Profile Declaration",
    isHTML: false,
    data: {
      referenceNo: "AVM/GST/2026/01",
      date: "25/09/2026",
      recipientName: "To Whomsoever It May Concern",
      recipientAddress: "Verification / Banking / Official Authority",
      subject: "DECLARATION OF GST REGISTRATION DETAILS & BUSINESS CREDENTIALS (AVM FURNITURE)",
      salutation: "Dear Sir/Madam,",
      bodyText: `This is to certify and declare the official Goods & Services Tax (GST) registration credentials and core business profile of **M/s. AVM FURNITURE** as registered under the Goods and Services Tax Act, 2017:

| Field | Details |
|---|---|
| **GSTIN / UIN** | **33DFTPK5651E1Z9** |
| **Legal Name of Business** | **Rajalingam K** |
| **Trade Name** | **AVM FURNITURE** |
| **Effective Date of Registration** | **01/07/2017** |
| **Constitution of Business** | **Proprietorship** |
| **GSTIN / UIN Status** | **Active** |
| **Taxpayer Type** | **Regular** |
| **Aadhaar Authenticated?** | **No** |
| **e-KYC Verified?** | **No** |
| **Nature of Core Business Activity** | **Trader - Retailer** |
| **Nature of Business Activities** | **1. Retail Business, Administrative Office** |

### Jurisdictional Office Details

| Jurisdiction Type | State | Zone | Commissionerate / Division | Range / Circle |
|---|---|---|---|---|
| **Center Jurisdiction** | CBIC | CHENNAI | TIRUCHIRAPALLI / TIRICHIRAPALLI - II | LALGUDI RANGE |
| **State Jurisdiction** | Tamil Nadu | Ariyalur | TRICHY | LALGUDI |

### Principal Place of Business
**122/P, Trichy Main Road, Angarai, Lalgudi, Lalgudi, Tiruchirappalli, Tamil Nadu, 621703**

### Goods Dealing In (HSN Code & Description)

| HSN Code | Description of Goods |
|---|---|
| **39** | Plastics and articles thereof |
| **7321** | Stoves, ranges, grates, cookers (including those with subsidiary boilers for central heating), barbecues, braziers, gas-rings, plate warmers and similar non-electric domestic appliances, and parts thereof, of iron or steel |
| **120710** | Palm nuts and kernels |
| **94033010** | Cabinetware |

We hereby declare and confirm that the above particulars are true, accurate, and extracted from the official GST portal records of the Government of India.

Thanking you.`,
      signatoryName: "Rajalingam K",
      signatoryTitle: "Proprietor",
      signatoryFirm: "AVM FURNITURE",
    },
  },
  {
    id: "quotation",
    name: "2. Quotation / Estimate",
    isHTML: false,
    data: {
      referenceNo: "AVM/QTN/2026/001",
      date: "25/09/2026",
      recipientName: "Customer Name",
      recipientAddress: "Customer Address",
      subject: "Quotation for Furniture Supply & Cabinetware",
      salutation: "Dear Sir/Madam,",
      bodyText: `We are pleased to submit our quotation for the supply of furniture and cabinetware as detailed below:

| # | HSN | Description | Qty | Unit Price (₹) | Amount (₹) |
|---|---|---|---|---|---|
| 1 | 94033010 | Wooden Cabinetware / Cupboard | 4 | 14,500 | 58,000 |
| 2 | 940330 | Wooden Office Table (4×2 ft) | 5 | 8,500 | 42,500 |
| 3 | 39 | Premium Molded Plastic Chairs | 15 | 1,200 | 18,000 |
| 4 | 7321 | Domestic Gas Stove / Burner Unit | 2 | 4,500 | 9,000 |
| | | **Subtotal** | | | **1,27,500** |
| | | CGST @ 9% | | | **11,475** |
| | | SGST @ 9% | | | **11,475** |
| | | **Total Amount (Incl. GST)** | | | **₹1,50,450** |

**Terms & Conditions:**
- Delivery within 10 working days from order confirmation
- Payment: 50% advance, balance on delivery
- Warranty: 1 year against manufacturing defects

Thanking you.`,
      signatoryName: "Rajalingam K",
      signatoryTitle: "Proprietor",
      signatoryFirm: "AVM FURNITURE",
    },
  },
  {
    id: "tax-invoice",
    name: "3. Tax Invoice (Regular Taxpayer)",
    isHTML: false,
    data: {
      referenceNo: "AVM/INV/2026/089",
      date: "25/09/2026",
      recipientName: "M/s. Royal Interiors & Enterprises",
      recipientAddress: "Trichy Road, Lalgudi, Tiruchirappalli\nGSTIN: 33AAAAA0000A1Z5",
      subject: "TAX INVOICE",
      salutation: "",
      bodyText: `| # | HSN | Description of Goods | Qty | Rate (₹) | Taxable Value (₹) |
|---|---|---|---|---|---|
| 1 | 94033010 | Cabinetware (Wooden Wardrobe / Almirah) | 3 | 16,000 | 48,000 |
| 2 | 940330 | Modular Office Desk with Drawers | 4 | 9,500 | 38,000 |
| 3 | 39 | Heavy-Duty Plastic Storage Containers | 10 | 850 | 8,500 |
| | | **Subtotal** | | | **94,500** |
| | | CGST @ 9% | | | **8,505** |
| | | SGST @ 9% | | | **8,505** |
| | | **Total Invoice Value** | | | **₹1,11,510** |

**Amount in Words:** One Lakh Eleven Thousand Five Hundred and Ten Rupees Only

**Bank Account Details:**
- **Account Name:** AVM FURNITURE
- **Bank:** State Bank of India, Lalgudi Branch
- **GSTIN:** 33DFTPK5651E1Z9

**Declaration:** We declare that this invoice shows the actual price of the goods described and that all particulars are true and correct.`,
      signatoryName: "Rajalingam K",
      signatoryTitle: "Proprietor",
      signatoryFirm: "AVM FURNITURE",
    },
  },
  {
    id: "delivery-challan",
    name: "4. Delivery Challan",
    isHTML: false,
    data: {
      referenceNo: "AVM/DC/2026/045",
      date: "25/09/2026",
      recipientName: "Customer / Site Supervisor",
      recipientAddress: "Site Delivery Address\nPh: +91 94431 XXXXX",
      subject: "DELIVERY CHALLAN / DISPATCH NOTE",
      salutation: "",
      bodyText: `**Dispatch From:** 122/P, Trichy Main Road, Angarai, Lalgudi, Tiruchirappalli, Tamil Nadu – 621 703

| # | HSN Code | Description | Qty | Remarks |
|---|---|---|---|---|
| 1 | 94033010 | Cabinetware Units | 3 | Factory Assembled |
| 2 | 940330 | Modular Wooden Desks | 4 | Box Packed |
| 3 | 39 | Plastic Articles / Molded Chairs | 10 | Good Condition |

**Vehicle No.:** TN-48-AB-1234  
**Driver Name:** M. Subramanian  

*This challan is issued for delivery purposes. Tax Invoice attached.*

**Receiver Signature & Seal:** _______________  
**Date:** _______________`,
      signatoryName: "Rajalingam K",
      signatoryTitle: "Proprietor",
      signatoryFirm: "AVM FURNITURE",
    },
  },
  {
    id: "warranty",
    name: "5. Warranty Certificate",
    isHTML: false,
    data: {
      referenceNo: "AVM/WC/2026/012",
      date: "25/09/2026",
      recipientName: "Customer Name",
      recipientAddress: "Customer Address\nInvoice No.: AVM/INV/2026/089",
      subject: "OFFICIAL WARRANTY CERTIFICATE",
      salutation: "Dear Customer,",
      bodyText: `This is to certify that the furniture and cabinetware items supplied by **AVM FURNITURE** are covered under warranty as specified below:

| Item Description | HSN Code | Warranty Period |
|---|---|---|
| Wooden Cabinetware & Modular Office Tables | 94033010 / 940330 | 1 Year from Invoice Date |
| Domestic Appliances / Hardware | 7321 | 1 Year Manufacturer Warranty |

**Warranty Terms:**
- Covers manufacturing and structural timber defects
- Damage resulting from misuse, unauthorized modifications, or water damage is excluded
- Please preserve this certificate alongside the original tax invoice for service claims`,
      signatoryName: "Rajalingam K",
      signatoryTitle: "Proprietor",
      signatoryFirm: "AVM FURNITURE",
    },
  },
  {
    id: "sponsorship",
    name: "6. Visa Sponsorship Declaration (Rajalingam K)",
    isHTML: false,
    data: {
      referenceNo: "AVM/VISA/2026/SPONSOR",
      date: "25/09/2026",
      recipientName: "To\nThe Visa Officer",
      recipientAddress: "The Embassy / Consulate General\nVisa Processing Section",
      subject: "FINANCIAL SPONSORSHIP DECLARATION & UNDERTAKING",
      salutation: "Dear Sir / Madam,",
      bodyText: `I, **Rajalingam K**, an Indian citizen residing at **122/P, Trichy Main Road, Angarai, Lalgudi, Tiruchirappalli, Tamil Nadu – 621 703**, hereby confirm that I am the **Proprietor of AVM FURNITURE**, an active registered business entity in Tamil Nadu, India (**GSTIN: 33DFTPK5651E1Z9**).

Our business is engaged in the retail trade of furniture, cabinetware, and household merchandise since **01/07/2017**, operating under the jurisdiction of the Center (CBIC Chennai, Tiruchirappalli, Lalgudi Range) and State (Tamil Nadu, Trichy, Lalgudi Circle). The business maintains a steady and substantial turnover, and I regularly file my Goods & Services Tax (GST) Returns and Income Tax Returns (ITR).

I hereby undertake **full financial responsibility** for all associated travel, accommodation, daily living, health insurance, and incidental expenses during the proposed international visit.

All supporting documents - including our active GST Registration Certificate (GSTIN: 33DFTPK5651E1Z9), Income Tax Returns, Business Current Account Bank Statements, and Proof of Business Ownership - are enclosed herewith for your verification.

I kindly request you to consider the visa application favorably.

Thanking you.`,
      signatoryName: "Rajalingam K",
      signatoryTitle: "Proprietor",
      signatoryFirm: "AVM FURNITURE",
    },
  },
];

const HomeFurnitureLetterheadGenerator = () => {
  const [activeTab, setActiveTab] = useState<'form' | 'preview'>('form');
  const [selectedFont, setSelectedFont] = useState("Calibri, Arial, sans-serif");
  const [headerStyle, setHeaderStyle] = useState<'centered' | 'boxed' | 'modern'>('centered');

  const [headerData, setHeaderData] = useState({
    firmName: 'AVM FURNITURE',
    tagline: 'Premium Furniture & Household Goods | Retailer & Trader',
    proprietor: 'Rajalingam K',
    gstin: '33DFTPK5651E1Z9',
    hsnCode: 'HSN: 94033010 (Cabinetware) | 7321 | 39 | 120710',
    regType: 'REGULAR TAXPAYER (PROPRIETORSHIP)',
    address: '122/P, Trichy Main Road, Angarai, Lalgudi, Tiruchirappalli, Tamil Nadu – 621 703',
    phone: '+91 94431 56510',
    email: 'avmfurniture.trichy@gmail.com',
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
