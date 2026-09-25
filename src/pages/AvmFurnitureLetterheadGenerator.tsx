import React, { useState } from 'react';
import { Settings2, Printer, FileText, Sparkles, Building2, Sofa } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const templateOptions = [
  {
    id: "visa-sponsorship",
    name: "1. Visa Sponsorship Declaration (South Korea BIOINFO 2026)",
    isHTML: false,
    data: {
      referenceNo: "AVM/VISA/2026/092",
      date: "25/09/2026",
      recipientName: "The Visa Officer",
      recipientAddress: "The Consulate General of the Republic of Korea\nMumbai, India",
      subject: "SPONSORSHIP DECLARATION & FINANCIAL GUARANTEE UNDERTAKING FOR SOUTH KOREA VISA (BIOINFO/GIW ISCB-ASIA 2026, SEOUL, KOREA)",
      salutation: "Dear Sir/Madam,",
      bodyText: `I, **Mr. RAJALINGAM K**, an Indian citizen residing at 122/P, Trichy Main Road, Angarai, Lalgudi, Tiruchirappalli, Tamil Nadu, 621703, hereby confirm that I am the biological father and sole financial sponsor of my son, **Mr. RAJALINGAM ARUNKUMAR** (Passport No.: **C9304303**, Admission No.: **24WU02647932**), who is a bonafide Ph.D. Research Scholar in the School of Technology at **Woxsen University**, Hyderabad, India.

I am the Proprietor of **AVM FURNITURE**, an active registered commercial enterprise in Tamil Nadu, India (GSTIN: **33DFTPK5651E1Z9**). My business operations are in good standing, generating a steady income, and I regularly file my Income Tax Returns with the Government of India.

My son has been invited as a **Presenting Author** to participate in the prestigious International Conference **BIOINFO/GIW ISCB-Asia 2026**, organized by the BIOINFO/GIW ISCB-Asia 2026 Committee and the **Korean Society for Bioinformatics and System Biology (사단법인 한국생명정보학회)**, scheduled to be held at **Centennial Hall, Yonsei University, Seoul, Republic of Korea** from **17th November 2026 to 20th November 2026**.

His doctoral research presentation is titled:
**“AI-Driven Structural Biology: Deep Learning Approaches for Protein Structure Prediction and Functional Analysis.”**

I hereby undertake **full and unconditional financial responsibility** for my son's entire visit to the Republic of Korea, covering his round-trip international airfares, conference registration fees, accommodation, daily living expenses, meals, local transit within Seoul, comprehensive overseas travel/health insurance, and any emergency contingencies during his stay from **15th November 2026 to 22nd November 2026**.

His travel is purely academic. He is a regular 3rd-year Ph.D. scholar with recognized campus accommodation and research commitments at Woxsen University. He will return to India immediately upon the conclusion of the conference to resume his doctoral research.

I respectfully request you to kindly grant him the required visa.

Thanking you.`,
      signatoryName: "RAJALINGAM K",
      signatoryTitle: "Proprietor",
      signatoryFirm: "AVM FURNITURE",
    },
  },
  {
    id: "gst-declaration",
    name: "2. GST Registration & Business Profile Declaration",
    isHTML: false,
    data: {
      referenceNo: "AVM/GST/2026/012",
      date: "25/09/2026",
      recipientName: "To Whomsoever It May Concern",
      recipientAddress: "Verification / Banking / Regulatory Authority",
      subject: "DECLARATION OF GST REGISTRATION DETAILS & BUSINESS CREDENTIALS",
      salutation: "Dear Sir/Madam,",
      bodyText: `This is to officially declare and certify the statutory Goods & Services Tax (GST) registration credentials and operating profile of **M/s. AVM FURNITURE**:

**1. General Business Particulars:**
- **GSTIN / UIN:** 33DFTPK5651E1Z9
- **Legal Name of Business:** Rajalingam K
- **Trade Name:** AVM FURNITURE
- **Effective Date of Registration:** 01/07/2017
- **Constitution of Business:** Proprietorship
- **GSTIN / UIN Status:** Active (Taxpayer Type: Regular)
- **Aadhaar Authenticated:** No | **e-KYC Verified:** No
- **Nature of Core Business Activity:** Trader - Retailer (Retail Business, Administrative Office)

**2. Jurisdictional Details:**
- **Center Jurisdiction:** CBIC, CHENNAI Zone, TIRUCHIRAPALLI Commissionerate, TIRICHIRAPALLI - II Division, LALGUDI RANGE
- **State Jurisdiction:** Tamil Nadu, Ariyalur Zone, TRICHY Division, LALGUDI Circle

**3. Principal Place of Business:**
122/P, Trichy Main Road, Angarai, Lalgudi, Lalgudi, Tiruchirappalli, Tamil Nadu, 621703

**4. Goods Dealing In (HSN Codes):**
- **HSN 39:** Plastics and articles thereof
- **HSN 7321:** Stoves, ranges, grates, cookers, plate warmers and non-electric domestic appliances of iron/steel
- **HSN 120710:** Palm nuts and kernels
- **HSN 94033010:** Cabinetware

We confirm that the above information is accurate and extracted from the official GST portal of the Government of India.`,
      signatoryName: "RAJALINGAM K",
      signatoryTitle: "Proprietor",
      signatoryFirm: "AVM FURNITURE",
    },
  },
  {
    id: "quotation",
    name: "3. Quotation / Estimate",
    isHTML: false,
    data: {
      referenceNo: "AVM/QTN/2026/042",
      date: "25/09/2026",
      recipientName: "Customer Name",
      recipientAddress: "Customer Address, Tiruchirappalli",
      subject: "Quotation for Supply of Wooden Cabinetware & Household Goods",
      salutation: "Dear Sir/Madam,",
      bodyText: `We are pleased to submit our best competitive rates for the supply of quality furniture and appliances:

| # | HSN | Description of Goods | Qty | Unit Rate (₹) | Amount (₹) |
|---|---|---|---|---|---|
| 1 | 94033010 | Premium Wooden Cabinetware / Cupboard | 3 | 16,000.00 | 48,000 |
| 2 | 940330 | Executive Office Desk (4×2 ft) | 4 | 9,500.00 | 38,000 |
| 3 | 39 | Heavy-Duty Molded Plastic Chairs | 15 | 1,200.00 | 18,000 |
| 4 | 7321 | Domestic Gas Stove / Burner Unit | 2 | 4,500.00 | 9,000 |
| | | **Subtotal** | | | **1,13,000** |
| | | CGST @ 9% | | | 10,170 |
| | | SGST @ 9% | | | 10,170 |
| | | **Grand Total** | | | **₹1,33,340** |

**Terms & Conditions:**
- **Validity:** Prices valid for 30 days from quotation date.
- **Delivery:** Within 7 working days from confirmation.
- **Warranty:** 1 year against manufacturing defects.

We look forward to receiving your valued order.`,
      signatoryName: "RAJALINGAM K",
      signatoryTitle: "Proprietor",
      signatoryFirm: "AVM FURNITURE",
    },
  },
  {
    id: "tax-invoice",
    name: "4. Tax Invoice (Regular GST)",
    isHTML: false,
    data: {
      referenceNo: "AVM/INV/2026/088",
      date: "25/09/2026",
      recipientName: "M/s. Royal Living Interiors & Enterprises\nGSTIN: 33AAAAA0000A1Z5",
      recipientAddress: "Trichy Road, Lalgudi, Tiruchirappalli",
      subject: "TAX INVOICE",
      salutation: "",
      bodyText: `| # | HSN | Description of Goods | Qty | Rate (₹) | Tax % | Amount (₹) |
|---|---|---|---|---|---|---|
| 1 | 94033010 | Wooden Cabinetware Units | 3 Nos | 16,000.00 | 18% | 48,000 |
| 2 | 940330 | Modular Wooden Tables | 4 Nos | 9,500.00 | 18% | 38,000 |
| 3 | 39 | Molded Plastic Chairs | 12 Nos | 1,200.00 | 18% | 14,400 |
| | | | | | **Subtotal** | **₹1,00,400** |
| | | | | | CGST (9%) | 9,036 |
| | | | | | SGST (9%) | 9,036 |
| | | | | | **Total** | **₹1,18,472** |

**Amount in Words:** One Lakh Eighteen Thousand Four Hundred Seventy-Two Rupees Only

**Bank Account Details:**
- **Bank Name:** State Bank of India, Lalgudi Branch
- **Account Name:** AVM FURNITURE
- **GSTIN:** 33DFTPK5651E1Z9

**Declaration:** We declare that this invoice shows the actual price of the goods described and that all particulars are true and correct.`,
      signatoryName: "RAJALINGAM K",
      signatoryTitle: "Proprietor",
      signatoryFirm: "AVM FURNITURE",
    },
  },
  {
    id: "delivery-challan",
    name: "5. Delivery Challan",
    isHTML: false,
    data: {
      referenceNo: "AVM/DC/2026/045",
      date: "25/09/2026",
      recipientName: "Customer Name",
      recipientAddress: "Delivery Site Address\nContact Ph: +91 94431 XXXXX",
      subject: "DELIVERY CHALLAN",
      salutation: "",
      bodyText: `**Dispatch From:** 122/P, Trichy Main Road, Angarai, Lalgudi, Tiruchirappalli, Tamil Nadu – 621 703

| # | HSN | Description of Goods | Qty | Remarks |
|---|---|---|---|---|
| 1 | 94033010 | Wooden Cabinetware Units | 3 Nos | Factory Inspected |
| 2 | 940330 | Modular Wooden Desks | 4 Nos | Box Packed |
| 3 | 39 | Premium Molded Plastic Chairs | 12 Nos | Good Condition |

**Transport Details:**
- **Vehicle No.:** TN-48-AZ-5651
- **Driver Name:** K. Murugan

*Goods received in good order and condition.*

&nbsp;
**Receiver's Signature / Seal:** ________________________`,
      signatoryName: "RAJALINGAM K",
      signatoryTitle: "Proprietor",
      signatoryFirm: "AVM FURNITURE",
    },
  },
  {
    id: "warranty",
    name: "6. Official Warranty Certificate",
    isHTML: false,
    data: {
      referenceNo: "AVM/WC/2026/012",
      date: "25/09/2026",
      recipientName: "Valued Customer",
      recipientAddress: "Customer Address\nInvoice No.: AVM/INV/2026/088",
      subject: "WARRANTY CERTIFICATE",
      salutation: "Dear Customer,",
      bodyText: `This certificate confirms that the furniture items supplied by **AVM FURNITURE** are covered under warranty as specified:

| Item Description | HSN Code | Warranty Period |
|---|---|---|
| Cabinetware & Wooden Office Furniture | 94033010 / 940330 | 1 Year from purchase date |
| Domestic Appliances & Kitchen Stoves | 7321 | 1 Year Manufacturer Warranty |

**Warranty Terms:**
- Covers manufacturing defects and structural timber integrity.
- Does not cover damage due to misuse, fire, water seepage, or unauthorized alteration.
- Present this certificate with original bill for service requests.`,
      signatoryName: "RAJALINGAM K",
      signatoryTitle: "Proprietor",
      signatoryFirm: "AVM FURNITURE",
    },
  }
];

const AvmFurnitureLetterheadGenerator = () => {
  const [activeTab, setActiveTab] = useState<'form' | 'preview'>('form');
  const [selectedFont, setSelectedFont] = useState("Calibri, Arial, sans-serif");

  const [headerData, setHeaderData] = useState({
    firmName: 'AVM FURNITURE',
    tagline: 'Retailer of Furniture, Cabinetware & Kitchen Appliances',
    proprietor: 'RAJALINGAM K',
    gstin: '33DFTPK5651E1Z9',
    hsnCode: 'HSN: 94033010 (Cabinetware) | 7321 | 39 | 120710',
    regType: 'REGULAR TAXPAYER (PROPRIETORSHIP)',
    address: '122/P, Angarai, Lalgudi, Tiruchirappalli, Tamil Nadu, 621703',
    phone: '+91 94431 56510',
    email: 'info@avmfurniture.in',
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

  const inputCls = "w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs outline-none transition-all text-slate-800 focus:border-blue-900";
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
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-900 to-indigo-950 flex items-center justify-center text-amber-300 font-bold text-xl shadow border border-blue-800">
              <Sofa className="w-6 h-6 text-amber-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-slate-900 tracking-tight leading-none">AVM FURNITURE</span>
              <span className="text-xs text-blue-900 font-semibold uppercase tracking-wider">GSTIN: {headerData.gstin} • Official Generator</span>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <div className="md:hidden flex bg-slate-100 rounded-md p-1 border border-slate-200">
              <button onClick={() => setActiveTab("form")} className={`px-3 py-1 text-xs rounded font-bold ${activeTab === "form" ? "bg-white shadow text-blue-950" : "text-slate-500"}`}>Form</button>
              <button onClick={() => setActiveTab("preview")} className={`px-3 py-1 text-xs rounded font-bold ${activeTab === "preview" ? "bg-white shadow text-blue-950" : "text-slate-500"}`}>Preview</button>
            </div>
            <button onClick={() => window.print()} className="inline-flex items-center gap-2 text-white px-5 py-2.5 text-xs font-bold rounded-lg shadow hover:bg-blue-950 transition-colors bg-blue-900">
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

          {/* Typography */}
          <div className="pt-2 border-t border-slate-100 space-y-3">
            <div>
              <label className={labelCls}>Document Typography</label>
              <select
                value={selectedFont}
                onChange={(e) => setSelectedFont(e.target.value)}
                className={`${inputCls} cursor-pointer font-medium`}
              >
                <option value="Calibri, Arial, sans-serif">Calibri / Arial (Official Standard)</option>
                <option value="'Times New Roman', Times, serif">Times New Roman (Formal Legal)</option>
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
            <div className="grid grid-cols-2 gap-3">
              <div><label className={labelCls}>Contact Phone</label><input type="text" name="phone" value={headerData.phone} onChange={handleHeaderChange} className={inputCls} /></div>
              <div><label className={labelCls}>Email Address</label><input type="text" name="email" value={headerData.email} onChange={handleHeaderChange} className={inputCls} /></div>
            </div>
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
        <div className={`print-container flex-1 overflow-y-auto bg-slate-200/50 p-4 md:p-8 rounded-2xl md:flex flex-col gap-10 items-center relative print:block print:bg-transparent print:rounded-none print:p-0 print:m-0 ${activeTab === "preview" ? "flex" : "hidden"}`}>

          {/* A4 Page */}
          <div className="page-container page w-full max-w-[210mm] min-h-[297mm] bg-white text-black shadow-2xl px-8 py-8 md:px-12 md:py-10 relative flex flex-col justify-between print:shadow-none print:w-full print:max-w-none" style={{ fontFamily: selectedFont }}>

            <div className="w-full flex flex-col flex-1">

              {/* CORPORATE LETTERHEAD HEADER WITH OFFICIAL AVM LOGO */}
              <div className="w-full pb-4 mb-4 relative flex items-center justify-between">

                {/* Official Logo Block */}
                <div className="flex-shrink-0 flex items-center justify-center">
                  <img
                    src="/avm-furniture-logo.png"
                    alt="AVM FURNITURE"
                    className="h-20 w-auto object-contain"
                  />
                </div>

                {/* Visible Vertical Separator */}
                <div className="w-[1.5px] h-20 bg-slate-300 mx-5 shrink-0 self-center"></div>

                {/* Right Info Block */}
                <div className="flex flex-col justify-center items-start text-left flex-1">
                  {/* Address */}
                  <div className="text-[11.5px] font-medium text-slate-700 leading-snug w-full mb-1.5">
                    <span className="text-slate-900 font-bold mr-1">Address:</span> {headerData.address}
                  </div>

                  {/* Contact Row (GSTIN, Email, Phone) */}
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-[11px] font-medium text-slate-600 w-full mb-1">
                    <div className="flex items-center"><span className="text-slate-900 mr-1.5 font-bold">GSTIN:</span> <span className="font-bold text-blue-950">{headerData.gstin}</span></div>
                    <div className="flex items-center"><span className="text-slate-900 mr-1.5 font-bold">Email:</span> {headerData.email}</div>
                    <div className="flex items-center"><span className="text-slate-900 mr-1.5 font-bold">Ph:</span> {headerData.phone}</div>
                  </div>

                  {/* Proprietor & Status */}
                  <div className="text-[10.5px] font-semibold text-slate-600 mt-0.5">
                    <span className="text-slate-900 font-bold">Proprietor:</span> {headerData.proprietor} <span className="mx-1 text-slate-300">•</span> <span className="text-blue-900 font-bold">{headerData.regType}</span>
                  </div>
                </div>

                {/* Corporate Bottom Border */}
                <div className="absolute bottom-0 left-0 right-0">
                  <div className="h-[2.5px] w-full bg-blue-900 mb-[1.5px]"></div>
                  <div className="h-[1px] w-full bg-slate-900"></div>
                </div>
              </div>

              {/* Reference & Date */}
              <div className="flex justify-between items-center text-[9.5pt] mb-2.5 text-slate-800">
                <div>
                  {formData.referenceNo && <span><strong>Ref:</strong> {formData.referenceNo}</span>}
                </div>
                <div>
                  {formData.date && <span><strong>Date:</strong> {formData.date}</span>}
                </div>
              </div>

              {/* Recipient */}
              {formData.recipientName && (
                <div className="text-[9.5pt] leading-tight mb-2.5 text-slate-900">
                  <strong>To</strong><br />
                  <span className="font-bold text-blue-950">{formData.recipientName}</span><br />
                  <span className="whitespace-pre-line text-slate-700">{formData.recipientAddress}</span>
                </div>
              )}

              {/* Subject */}
              {formData.subject && (
                <div className="border-l-[3.5px] border-amber-500 bg-blue-50/60 p-2.5 mb-2.5 font-sans text-[9.2pt] leading-snug font-bold text-blue-950">
                  Subject: {formData.subject}
                </div>
              )}

              {/* Salutation */}
              {formData.salutation && (
                <p className="text-[9.5pt] leading-[1.5] text-justify mb-2 text-slate-900 font-medium">{formData.salutation}</p>
              )}

              {/* Body Content */}
              <div className="w-full text-[9.5pt] leading-[1.55] text-justify text-slate-900 mb-1.5 [&_p]:mb-2.5 [&_p:last-child]:mb-1.5 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-2.5 [&_ol]:space-y-1 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-2.5 [&_ul]:space-y-1 [&_li]:text-slate-900 prose-strong:font-bold prose-strong:text-blue-950 [&_table]:w-full [&_table]:border-collapse [&_table]:my-2 [&_th]:border [&_th]:border-slate-300 [&_th]:bg-slate-50 [&_th]:p-1.5 [&_th]:text-[9pt] [&_td]:border [&_td]:border-slate-300 [&_td]:p-1.5 [&_td]:text-[9pt]">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {formData.bodyText || ''}
                </ReactMarkdown>
              </div>

              {/* Signature Block (Left Aligned - Sri Saravana Style) */}
              <div className="w-full mt-1 flex flex-col items-start text-left font-sans">
                <div className="text-[9.5pt] text-slate-900 font-medium leading-tight">Yours faithfully,</div>
                <div className="text-[9.2pt] font-bold text-blue-950 leading-tight mt-0.5">For {formData.signatoryFirm || headerData.firmName}</div>

                {/* Blank vertical space for physical signing & stamping */}
                <div className="h-16 w-48" />

                <div className="text-[10.5pt] font-bold text-blue-950 uppercase leading-none mb-0.5">{formData.signatoryName || headerData.proprietor}</div>
                <div className="text-[9pt] font-semibold text-slate-700 leading-none">{formData.signatoryTitle || 'Proprietor'}</div>
              </div>

            </div>

            {/* Centered Page Footer */}
            <footer className="print-fixed-footer w-full font-sans mt-auto pt-3 pb-1 border-t-2 border-blue-900 bg-white text-center text-[9px] text-slate-900 leading-snug">
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

export default AvmFurnitureLetterheadGenerator;
