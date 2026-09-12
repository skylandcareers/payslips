import React, { useState } from 'react';
import { Settings2, Download, Printer, FileText, Sparkles, Sprout, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const templateOptions = [
  {
    id: 'spain_sponsorship',
    name: 'Spain Visa Sponsorship Letter - Dinesh Kumar (Sri Yogeshwara Seeds)',
    data: {
      referenceNo: 'SYS/VISA/2026/SPAIN-01',
      date: '21 August 2026',
      recipientName: 'The Visa Officer',
      recipientAddress: 'Consulate General of Spain\nMumbai, India',
      subject: 'SPONSORSHIP DECLARATION & FINANCIAL GUARANTEE UNDERTAKING FOR SCHENGEN VISA (BIOSPAIN 2026, BILBAO, SPAIN)',
      salutation: 'Dear Sir/Madam,',
      bodyText: `I, **Mr. ANANDHARAMAN**, an Indian citizen, hereby confirm that I am the biological father and financial sponsor of **Mr. ANANDHARAMAN HARISH** (Passport No.: **Y5326556**, Student UID: **24WU02647876**), who is a full-time Ph.D. Research Scholar pursuing his doctoral degree in Biotechnology at **Woxsen University**, Telangana, India.

I am the proprietor of **SRI YOGESHWARA SEEDS & PESTICIDES**, a registered business in Telangana, India (GSTIN: **36ADFPN1935M1Z9**). My enterprise is active and generates a stable income, and I regularly file my Income Tax Returns.

My son, Mr. ANANDHARAMAN HARISH, has been accepted to present his doctoral research paper at the international biotechnology conference **BIOSPAIN 2026**, scheduled to take place in **Bilbao, Spain** from **September 29th to October 1st, 2026**.

I hereby undertake **full financial responsibility** for my son's entire trip to Spain and the Schengen territory, including his round-trip travel, accommodation, daily living expenses, meals, local transport, overseas health insurance, and any emergency contingencies that may arise during his stay from **27th September 2026 to 5th October 2026**.

My son is traveling strictly for academic purposes. He has strong academic commitments in India and will return immediately after completing his conference visit to resume his Ph.D. research at Woxsen University.

All necessary financial and business credentials, including GST registration certificate, PAN, bank statements, Income Tax Returns, certificates from Woxsen University, and BIOSPAIN 2026 receipts, are submitted in support of this application.

I fully support his participation in this international conference and assure you of my financial capability and commitment. I kindly request you to consider his visa application favorably.

Thanking you.`,
      signatoryName: 'ANANDHARAMAN',
      signatoryTitle: 'Proprietor',
      signatoryFirm: 'Sri Yogeshwara Seeds & Pesticides',
    }
  },
  {
    id: 'business_letter',
    name: 'General Business Correspondence / Letter',
    data: {
      referenceNo: 'SYS/2026/LTR/104',
      date: '21 August 2026',
      recipientName: 'The Assistant Director of Agriculture',
      recipientAddress: 'Department of Agriculture, Division Office\nArmoor, Nizamabad District, Telangana – 503224',
      subject: 'Submission of Annual Seed & Fertilizer Sales & Stock Returns (2025–2026)',
      salutation: 'Respected Sir/Madam,',
      bodyText: `We, **Sri Yogeshwara Seeds & Pesticides** (GSTIN: **36ADFPN1935M1Z9**), located at Mupkal, Balkonda, Nizamabad, respectfully submit herewith our annual sales and stock verification statement for certified hybrid crop seeds, nitrogenous fertilizers, and approved crop protection formulations for the preceding agricultural season.

Our retail establishment strictly adheres to all regulatory standards mandated by the Department of Agriculture, Government of Telangana, ensuring that all certified seeds, organic nutrients, and plant protection chemicals supplied to local farmers are sourced directly from authorized manufacturers and carrying valid batch testing certificates.

We request you to kindly acknowledge receipt of our stock returns and update your official records accordingly. Should any further documentation or physical inspection be required, we remain at your service.

Thanking you.`,
      signatoryName: 'ANANDHARAMAN',
      signatoryTitle: 'Proprietor',
      signatoryFirm: 'Sri Yogeshwara Seeds & Pesticides',
    }
  },
  {
    id: 'quotation',
    name: 'Price Quotation / Agri Supply Estimate',
    data: {
      referenceNo: 'SYS/QT/2026/389',
      date: '21 August 2026',
      recipientName: 'M/s. Sri Rama Farmers Cooperative Society',
      recipientAddress: 'Main Road, Balkonda Mandalam, Nizamabad, TS – 503218',
      subject: 'Quotation for Supply of Hybrid Paddy Seeds, Nitrogenous Urea & Micronutrient Fertilisers',
      salutation: 'Dear Sir,',
      bodyText: `With reference to your inquiry regarding bulk supply of high-yield hybrid seeds and crop nutrition fertilizers for the upcoming Kharif season, we are pleased to submit our best competitive rates as follows:

| S.No | Item Description | HSN Code | Pack Size / Qty | Rate (₹) | Total Amount (₹) |
| :---: | :--- | :---: | :---: | :---: | :---: |
| 1 | **Certified Hybrid Paddy Seeds** (High Yield Variety) | 12091000 | 150 Bags (10 kg ea) | ₹ 950 / bag | ₹ 1,42,500 |
| 2 | **Nitrogenous Urea Fertilisers** (46% N Grade) | 31021000 | 200 Bags (45 kg ea) | ₹ 268 / bag | ₹ 53,600 |
| 3 | **Complex NPK Fertilisers** (10-26-26 Grade) | 31021000 | 80 Bags (50 kg ea) | ₹ 1,470 / bag | ₹ 1,17,600 |
| 4 | **Systemic Insecticide / Plant Protection** | 38089190 | 50 Litres | ₹ 680 / Ltr | ₹ 34,000 |

### **Financial Summary:**
- **Sub Total:** ₹ 3,47,700/-
- **Applicable GST (5% / 18% as per HSN):** ₹ 21,435/-
- **Grand Total Amount:** **₹ 3,69,135/-** *(Rupees Three Lakh Sixty Nine Thousand One Hundred Thirty Five Only)*

### **Terms & Conditions:**
1. All seed batches are certified by the State Seed Testing Laboratory.
2. Payment terms: 50% advance upon order placement, balance upon doorstep delivery.
3. Delivery timeline: Within 3 business days from confirmation.`,
      signatoryName: 'ANANDHARAMAN',
      signatoryTitle: 'Proprietor',
      signatoryFirm: 'Sri Yogeshwara Seeds & Pesticides',
    }
  }
];

const SriYogeshwaraLetterheadGenerator = () => {
  const [activeTab, setActiveTab] = useState<'form' | 'preview'>('form');
  const [isExporting, setIsExporting] = useState(false);
  const [selectedFont, setSelectedFont] = useState("Calibri, Arial, sans-serif");
  const [headerStyle, setHeaderStyle] = useState<'centered' | 'boxed' | 'modern'>('centered');

  const [headerData, setHeaderData] = useState({
    firmName: 'SRI YOGESHWARA SEEDS & PESTICIDES',
    tagline: 'Dealers in: High-Yield Hybrid Seeds • Pesticides • Fertilisers',
    proprietor: 'ANANDHARAMAN',
    gstin: '36ADFPN1935M1Z9',
    hsnCode: 'HSN: 31021000 (Fertilisers) | HSN: 12091000 (Seeds)',
    regType: 'REGULAR TAXPAYER (PROPRIETORSHIP)',
    address: 'H.No. 4/13/3, Mupkal Village, Balkonda Mandalam, Nizamabad District, Telangana – 503218',
    phone: '+91 94400 12345 / +91 98490 67890',
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

  const handleExportPDF = () => {
    window.print();
  };

  const inputCls = "w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs outline-none transition-all text-slate-800 focus:border-green-700";
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
              max-height: 297mm !important;
              padding: 8mm 15mm 10mm !important;
              position: relative;
              page-break-inside: avoid !important;
              page-break-after: avoid !important;
              overflow: hidden !important;
            }
          }
        `}
      </style>

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 print:hidden shadow-sm">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-700 to-emerald-800 flex items-center justify-center text-amber-300 font-black text-xl shadow border border-amber-400">
              <Sprout className="w-6 h-6 text-amber-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-slate-900 tracking-tight leading-none">SRI YOGESHWARA SEEDS & PESTICIDES</span>
              <span className="text-xs text-green-700 font-semibold uppercase tracking-wider">GSTIN: {headerData.gstin} • Official Generator</span>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <div className="md:hidden flex bg-slate-100 rounded-md p-1 border border-slate-200">
              <button onClick={() => setActiveTab("form")} className={`px-3 py-1 text-xs rounded font-bold ${activeTab === "form" ? "bg-white shadow text-green-800" : "text-slate-500"}`}>Form</button>
              <button onClick={() => setActiveTab("preview")} className={`px-3 py-1 text-xs rounded font-bold ${activeTab === "preview" ? "bg-white shadow text-green-800" : "text-slate-500"}`}>Preview</button>
            </div>
            <button onClick={handleExportPDF} disabled={isExporting} className="inline-flex items-center gap-2 text-white px-5 py-2.5 text-xs font-bold rounded-lg shadow hover:bg-green-800 transition-colors bg-green-700">
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
              <Settings2 className="w-4 h-4 text-green-700" />
              <h2 className="text-base font-bold text-slate-900">Document Settings</h2>
            </div>
          </div>

          {/* Template Selectors */}
          <div>
            <label className="block text-[11px] mb-2 text-green-700 font-extrabold uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Select Document Template
            </label>
            <div className="grid grid-cols-1 gap-2">
              {templateOptions.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => loadTemplate(t.id)}
                  className="text-left px-3 py-2.5 bg-slate-50 hover:bg-green-50/70 border border-slate-200 rounded-lg text-xs font-bold text-slate-800 transition-all flex items-center justify-between group"
                >
                  <span>{t.name}</span>
                  <FileText className="w-4 h-4 text-green-700 group-hover:scale-110 transition-transform" />
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
                className={`${inputCls} cursor-pointer font-bold text-green-800 bg-green-50/60 border-green-200`}
              >
                <option value="centered">★ Centered Premium Letterhead (GST Top Corner Badges)</option>
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
            <div><label className={labelCls}>Firm Trade Name</label><input type="text" name="firmName" value={headerData.firmName} onChange={handleHeaderChange} className={inputCls} /></div>
            <div><label className={labelCls}>Business Tagline</label><input type="text" name="tagline" value={headerData.tagline} onChange={handleHeaderChange} className={inputCls} /></div>
            <div><label className={labelCls}>Proprietor Name</label><input type="text" name="proprietor" value={headerData.proprietor} onChange={handleHeaderChange} className={inputCls} /></div>
            <div className="grid grid-cols-2 gap-2">
              <div><label className={labelCls}>GSTIN</label><input type="text" name="gstin" value={headerData.gstin} onChange={handleHeaderChange} className={inputCls} /></div>
              <div><label className={labelCls}>Contact Phone</label><input type="text" name="phone" value={headerData.phone} onChange={handleHeaderChange} className={inputCls} /></div>
            </div>
            <div><label className={labelCls}>Principal Address</label><textarea name="address" value={headerData.address} onChange={handleHeaderChange} rows={2} className={`${inputCls} resize-none`} /></div>
            <div><label className={labelCls}>HSN Codes & Info</label><input type="text" name="hsnCode" value={headerData.hsnCode} onChange={handleHeaderChange} className={inputCls} /></div>
          </div>

          {/* Document Content Inputs */}
          <div className="space-y-3 pt-3 border-t border-slate-100">
            <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Document Content</h3>
            <div className="grid grid-cols-2 gap-2">
              <div><label className={labelCls}>Ref Number</label><input type="text" name="referenceNo" value={formData.referenceNo} onChange={handleFormChange} className={inputCls} /></div>
              <div><label className={labelCls}>Date</label><input type="text" name="date" value={formData.date} onChange={handleFormChange} className={inputCls} /></div>
            </div>
            <div><label className={labelCls}>Recipient Name / Office</label><textarea name="recipientName" value={formData.recipientName} onChange={handleFormChange} className={`${inputCls} resize-none`} rows={2} /></div>
            <div><label className={labelCls}>Recipient Address</label><textarea name="recipientAddress" value={formData.recipientAddress} onChange={handleFormChange} rows={2} className={`${inputCls} resize-none`} /></div>
            <div><label className={labelCls}>Subject Line</label><textarea name="subject" value={formData.subject} onChange={handleFormChange} className={`${inputCls} resize-none`} rows={2} /></div>
            <div>
              <label className={labelCls}>Body Content (Markdown Supported)</label>
              <textarea
                name="bodyText"
                value={formData.bodyText}
                onChange={handleFormChange}
                rows={10}
                className={`${inputCls} resize-none font-mono text-[11px]`}
              />
            </div>
          </div>

          {/* Signatory Details */}
          <div className="space-y-3 pt-3 border-t border-slate-100">
            <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Signatory Details</h3>
            <div><label className={labelCls}>Signatory Name</label><input type="text" name="signatoryName" value={formData.signatoryName} onChange={handleFormChange} className={inputCls} /></div>
            <div><label className={labelCls}>Designation</label><input type="text" name="signatoryTitle" value={formData.signatoryTitle} onChange={handleFormChange} className={inputCls} /></div>
            <div><label className={labelCls}>Firm Name</label><input type="text" name="signatoryFirm" value={formData.signatoryFirm} onChange={handleFormChange} className={inputCls} /></div>
          </div>

        </div>

        {/* WYSIWYG Letterhead Preview */}
        <div className={`print-container flex-1 overflow-y-auto bg-slate-200/50 p-4 md:p-8 rounded-2xl md:flex flex-col gap-10 items-center relative print:block print:bg-transparent print:rounded-none print:p-0 print:m-0 ${activeTab === "preview" ? "flex" : "hidden"}`}>

          {/* A4 Page */}
          <div className="page-container page w-full max-w-[210mm] min-h-[297mm] bg-white text-black shadow-2xl p-6 md:p-8 relative flex flex-col justify-between print:shadow-none print:w-full print:max-w-none" style={{ fontFamily: selectedFont }}>

            <div className="w-full flex flex-col">

              {/* RESTORED GREEN SRI YOGESHWARA LETTERHEAD HEADER */}
              <header className="w-full pb-2 mb-3 border-b-2 border-green-900 bg-white flex flex-col items-center justify-center text-center">

                {/* Single Line: Emblem Logo + Firm Title */}
                <div className="flex items-center justify-center gap-3 mb-1">
                  <div className="w-9 h-9 rounded-xl bg-green-900 flex items-center justify-center text-amber-300 shadow-sm shrink-0">
                    <Sprout className="w-5.5 h-5.5 text-amber-300" />
                  </div>
                  <h1 className="text-[23px] font-black text-green-950 tracking-tight leading-none uppercase">
                    {headerData.firmName}
                  </h1>
                </div>

                {/* Tagline */}
                <div className="text-[11.5px] font-black text-green-900 tracking-wide uppercase mb-1 max-w-[620px]">
                  {headerData.tagline}
                </div>

                {/* Principal Address Line */}
                <div className="text-[10.5px] font-semibold text-slate-800 mb-1 leading-snug">
                  {headerData.address}
                </div>

                {/* GSTIN & Contact Info */}
                <div className="text-[11px] font-extrabold text-slate-900 flex items-center justify-center flex-wrap gap-3">
                  <span><strong className="text-green-950 font-black">GSTIN:</strong> {headerData.gstin}</span>
                  <span className="text-green-800 font-black">•</span>
                  <span><strong className="text-green-950 font-black">Ph:</strong> {headerData.phone}</span>
                </div>

              </header>

              {/* Reference & Date */}
              <div className="flex justify-between items-center text-[9.5pt] mb-3 text-slate-800">
                <div>
                  {formData.referenceNo && <span><strong>Ref:</strong> {formData.referenceNo}</span>}
                </div>
                <div>
                  {formData.date && <span><strong>Date:</strong> {formData.date}</span>}
                </div>
              </div>

              {/* Recipient */}
              {formData.recipientName && (
                <div className="text-[9.5pt] leading-tight mb-3 text-slate-900">
                  <strong>To</strong><br />
                  <span className="font-bold text-green-950">{formData.recipientName}</span><br />
                  <span className="whitespace-pre-line text-slate-700">{formData.recipientAddress}</span>
                </div>
              )}

              {/* Subject */}
              {formData.subject && (
                <div className="border-l-[3.5px] border-amber-500 bg-green-50/60 p-2.5 mb-3 font-sans text-[9.2pt] leading-snug font-bold text-green-950">
                  Subject: {formData.subject}
                </div>
              )}

              {/* Salutation */}
              {formData.salutation && (
                <p className="text-[9.5pt] leading-[1.5] text-justify mb-2.5 text-slate-900 font-medium">{formData.salutation}</p>
              )}

              {/* Body Content */}
              <div className="w-full text-[9.6pt] leading-[1.6] text-justify text-slate-900 mb-3 [&_p]:mb-3.5 prose-strong:font-bold prose-strong:text-green-950">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {formData.bodyText || ''}
                </ReactMarkdown>
              </div>

            </div>

            {/* Signature Block (Left Aligned) */}
            <div className="w-full mt-3 pt-1 flex flex-col items-start text-left font-sans">
              <div className="text-[9.5pt] text-slate-900 font-medium">Yours faithfully,</div>
              <div className="text-[9.2pt] font-bold text-green-950 mt-0.5">For {formData.signatoryFirm || headerData.firmName}</div>

              {/* Blank vertical space for physical signing & stamping */}
              <div className="h-12 w-48" />

              <div className="text-[10.5pt] font-bold text-green-950 uppercase">{headerData.proprietor}</div>
              <div className="text-[9pt] font-semibold text-slate-700">Proprietor</div>
            </div>

            {/* Centered Page Footer */}
            <footer className="w-full font-sans mt-auto pt-2 border-t-2 border-green-900 bg-white text-center text-[9px] text-slate-900 leading-snug">
              <div className="font-semibold text-slate-900 flex items-center justify-center flex-wrap gap-2">
                <span>GSTIN: <strong className="text-green-950 font-black">{headerData.gstin}</strong></span>
                <span className="text-green-800 font-bold">•</span>
                <span>{headerData.hsnCode}</span>
                <span className="text-green-800 font-bold">•</span>
                <span>{headerData.regType}</span>
              </div>
            </footer>

          </div>

        </div>

      </main>
    </div>
  );
};

export default SriYogeshwaraLetterheadGenerator;
