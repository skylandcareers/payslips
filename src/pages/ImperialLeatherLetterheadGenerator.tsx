import React, { useState } from 'react';
import { Settings2, Download, Printer, FileText, Sparkles, Building2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const templateOptions = [
  {
    id: 'france_sponsorship',
    name: 'France Visa Sponsorship Letter - Tushar Debnath (Imperial Leather)',
    data: {
      referenceNo: 'IL/VISA/2026/FRANCE-01',
      date: '24 August 2026',
      recipientName: 'The Visa Officer',
      recipientAddress: 'Consulate General of France\nKolkata, India',
      subject: 'SPONSORSHIP DECLARATION & FINANCIAL GUARANTEE UNDERTAKING FOR SCHENGEN VISA (3rd International Conference on Biomolecules, Nancy, France)',
      salutation: 'Dear Sir/Madam,',
      bodyText: `I, **Mr. Sagar Debnath**, an Indian citizen, hereby confirm that I am the biological father and financial sponsor of **Mr. Tushar Debnath** (Passport No.: **S1148115**, Student UID: **24TIUBIO1245**), who is a full-time Ph.D. Research Scholar pursuing his doctoral degree in Biotechnology at **Techno India University**, West Bengal, India.

I am the proprietor of **IMPERIAL LEATHER**, a registered business in West Bengal, India (GSTIN: **19AAFFI6308A1ZP**). My enterprise is active and generates a stable income, and I regularly file my Income Tax Returns.

My son, **Mr. Tushar Debnath**, has been accepted to present his doctoral research paper (*“Plant-Derived Bioactive Molecules for Sustainable Crop Production and Climate-Resilient Agriculture”*) at the international conference **3rd International Conference on Biomolecules**, scheduled to take place in **Nancy, France** from **September 16th to September 18th, 2026**.

I hereby undertake **full financial responsibility** for my son's entire trip to France and the Schengen territory, including his round-trip travel, accommodation, daily living expenses, meals, local transport, overseas health insurance, and any emergency contingencies that may arise during his stay from **14th September 2026 to 22nd September 2026**.

My son is traveling strictly for academic purposes. He has strong academic commitments in India and will return immediately after completing his conference visit to resume his Ph.D. research at Techno India University.

All necessary financial and business credentials, including GST registration certificate, PAN, bank statements, Income Tax Returns, certificates from Techno India University, and conference receipts, are submitted in support of this application.

I fully support his participation in this international conference and assure you of my financial capability and commitment. I kindly request you to consider his visa application favorably.

Thanking you.`,
      signatoryName: 'SAGAR DEBNATH',
      signatoryTitle: 'Proprietor',
      signatoryFirm: 'Imperial Leather',
    }
  },
  {
    id: 'business_letter',
    name: 'General Business Correspondence / Letter',
    data: {
      referenceNo: 'IL/2026/LTR/108',
      date: '24 August 2026',
      recipientName: 'The Commercial Tax Officer',
      recipientAddress: 'Commercial Taxes Department, Large Taxpayer Unit\nKolkata, West Bengal – 700039',
      subject: 'Submission of Annual Business Statement & GST Compliance (2025–2026)',
      salutation: 'Respected Sir/Madam,',
      bodyText: `We, **Imperial Leather** (GSTIN: **19AAFFI6308A1ZP**), located at 62, Topsia Road, Kolkata, West Bengal, respectfully submit herewith our annual business turnover and GST compliance returns for the preceding financial period.

Our proprietorship firm strictly adheres to all regulatory standards mandated under the West Bengal Goods and Services Tax Act, 2017, ensuring that all finished leather goods, travel articles, and manufactured goods are duly accounted for with regular GST filings.

We request you to kindly acknowledge receipt of our compliance returns and update your official records accordingly.

Thanking you.`,
      signatoryName: 'SAGAR DEBNATH',
      signatoryTitle: 'Proprietor',
      signatoryFirm: 'Imperial Leather',
    }
  },
  {
    id: 'quotation',
    name: 'Price Quotation / Leather Goods Estimate',
    data: {
      referenceNo: 'IL/QT/2026/412',
      date: '24 August 2026',
      recipientName: 'M/s. Royal Leather Crafts LLC',
      recipientAddress: 'Park Street Commercial Complex, Kolkata, West Bengal – 700016',
      subject: 'Quotation for Supply of Premium Finished Leather Goods & Travel Accessories',
      salutation: 'Dear Sir,',
      bodyText: `With reference to your inquiry regarding bulk supply of premium finished leather goods, we are pleased to submit our best competitive quotation as follows:

| S.No | Item Description | HSN Code | Quantity | Rate (₹) | Total Amount (₹) |
| :---: | :--- | :---: | :---: | :---: | :---: |
| 1 | **Premium Finished Cow Grain Leather** (Grade A) | 41071100 | 500 Sq. Ft | ₹ 280 / sq ft | ₹ 1,40,000 |
| 2 | **Genuine Leather Executive Folio Portfolios** | 42021110 | 100 Pcs | ₹ 1,450 / pc | ₹ 1,45,000 |
| 3 | **Handcrafted Full-Grain Leather Travel Bags** | 42021220 | 30 Pcs | ₹ 3,850 / pc | ₹ 1,15,500 |

### **Financial Summary:**
- **Sub Total:** ₹ 4,00,500/-
- **Applicable GST (18% HSN 4202 / 4107):** ₹ 72,090/-
- **Grand Total Amount:** **₹ 4,72,590/-** *(Rupees Four Lakh Seventy Two Thousand Five Hundred Ninety Only)*

### **Terms & Conditions:**
1. All goods manufactured as per international export specifications.
2. Delivery timeline: 5 business days from order placement.`,
      signatoryName: 'SAGAR DEBNATH',
      signatoryTitle: 'Proprietor',
      signatoryFirm: 'Imperial Leather',
    }
  }
];

const ImperialLeatherLetterheadGenerator = () => {
  const [activeTab, setActiveTab] = useState<'form' | 'preview'>('form');
  const [isExporting, setIsExporting] = useState(false);
  const [selectedFont, setSelectedFont] = useState("Calibri, Arial, sans-serif");
  const [headerStyle, setHeaderStyle] = useState<'centered' | 'boxed' | 'modern'>('centered');

  const [headerData, setHeaderData] = useState({
    firmName: 'IMPERIAL LEATHER',
    tagline: 'Manufacturers & Exporters of Premium Leather Goods',
    proprietor: 'SAGAR DEBNATH',
    gstin: '19AAFFI6308A1ZP',
    hsnCode: 'HSN: 4202 (Leather Goods) | HSN: 4107 (Finished Leather)',
    regType: 'REGULAR TAXPAYER (PROPRIETORSHIP)',
    address: '62, TOPSIA ROAD, TOPSIA, Kolkata, West Bengal',
    phone: '+91 8125588816',
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

  const inputCls = "w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs outline-none transition-all text-slate-800 focus:border-slate-800";
  const labelCls = "block text-[11px] mb-1 text-slate-600 font-semibold";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col print:bg-white print:text-black font-sans">
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
            <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-amber-400 font-black text-xl shadow border border-amber-500/30">
              <Building2 className="w-5 h-5 text-amber-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-slate-900 tracking-tight leading-none">IMPERIAL LEATHER</span>
              <span className="text-xs text-red-700 font-semibold uppercase tracking-wider">GSTIN: {headerData.gstin} • Official Generator</span>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <div className="md:hidden flex bg-slate-100 rounded-md p-1 border border-slate-200">
              <button onClick={() => setActiveTab("form")} className={`px-3 py-1 text-xs rounded font-bold ${activeTab === "form" ? "bg-white shadow text-slate-900" : "text-slate-500"}`}>Form</button>
              <button onClick={() => setActiveTab("preview")} className={`px-3 py-1 text-xs rounded font-bold ${activeTab === "preview" ? "bg-white shadow text-slate-900" : "text-slate-500"}`}>Preview</button>
            </div>
            <button onClick={handleExportPDF} disabled={isExporting} className="inline-flex items-center gap-2 text-white px-5 py-2.5 text-xs font-bold rounded-lg shadow hover:bg-slate-950 transition-colors bg-slate-900">
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
              <Settings2 className="w-4 h-4 text-slate-800" />
              <h2 className="text-base font-bold text-slate-900">Document Settings</h2>
            </div>
          </div>

          {/* Template Selectors */}
          <div>
            <label className="block text-[11px] mb-2 text-red-700 font-extrabold uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Select Document Template
            </label>
            <div className="grid grid-cols-1 gap-2">
              {templateOptions.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => loadTemplate(t.id)}
                  className="text-left px-3 py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg text-xs font-bold text-slate-800 transition-all flex items-center justify-between group"
                >
                  <span>{t.name}</span>
                  <FileText className="w-4 h-4 text-slate-700 group-hover:scale-110 transition-transform" />
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
                className={`${inputCls} cursor-pointer font-bold text-slate-900 bg-slate-100/60 border-slate-300`}
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
            <div><label className={labelCls}>Recipient Name / Office</label><input type="text" name="recipientName" value={formData.recipientName} onChange={handleFormChange} className={inputCls} /></div>
            <div><label className={labelCls}>Recipient Address</label><textarea name="recipientAddress" value={formData.recipientAddress} onChange={handleFormChange} rows={2} className={`${inputCls} resize-none`} /></div>
            <div><label className={labelCls}>Subject Line</label><input type="text" name="subject" value={formData.subject} onChange={handleFormChange} className={inputCls} /></div>
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
          <div className="page-container page w-full max-w-[210mm] min-h-[297mm] bg-white text-black shadow-2xl p-8 md:p-10 px-[18mm] py-[12mm] relative flex flex-col justify-between print:shadow-none print:w-full print:max-w-none" style={{ fontFamily: selectedFont }}>

            <div className="w-full flex flex-col">

              {/* EXECUTIVE IMPERIAL LEATHER LETTERHEAD HEADER */}
              <header className="w-full pb-3 mb-4 bg-white flex flex-col">
                <div className="flex justify-between items-center w-full pb-3">

                  {/* Left Emblem & Firm Details */}
                  <div className="flex items-center gap-4">
                    <img
                      src="/imperial-leather-logo.jpg"
                      alt="Imperial Leather Logo"
                      className="h-16 w-auto object-contain shrink-0"
                    />
                    <div>
                      <h1 className="text-[26px] font-black text-[#0f172a] tracking-widest leading-none uppercase font-serif mb-1">
                        {headerData.firmName}
                      </h1>
                      <div className="text-[9px] font-bold text-[#b8860b] tracking-[0.15em] uppercase mb-0.5">
                        {headerData.tagline}
                      </div>
                      <div className="text-[9.5px] font-medium text-slate-600">
                        Proprietorship Enterprise • Proprietor: <strong className="text-slate-900 font-bold">{headerData.proprietor}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Right GST & Contact Info */}
                  <div className="text-right text-[10px] font-sans">
                    <div className="font-mono font-bold text-slate-900 text-[11.5px] mb-0.5 tracking-wider border-b border-amber-500/40 pb-0.5 inline-block">
                      <span className="text-[#b8860b] font-black">GSTIN:</span> {headerData.gstin}
                    </div>
                    <div className="text-slate-700 font-medium max-w-[240px] leading-tight mt-1">
                      {headerData.address}
                    </div>
                    <div className="text-slate-600 font-semibold mt-0.5">
                      Ph: {headerData.phone}
                    </div>
                  </div>

                </div>

                {/* Dual Accent Lines: Navy + Luxury Gold */}
                <div className="w-full">
                  <div className="w-full h-[2.5px] bg-[#0f172a]"></div>
                  <div className="w-full h-[1.5px] bg-[#b8860b] mt-[1.5px]"></div>
                </div>
              </header>

              {/* Document Body Area with Generous Internal Content Padding */}
              <div className="px-1 py-1 space-y-3.5">

                {/* Reference & Date */}
                <div className="flex justify-between items-center text-[9.5pt] mb-3 text-slate-800 border-b border-slate-100 pb-1.5">
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
                    <span className="font-bold text-[#0f172a] text-[10pt]">{formData.recipientName}</span><br />
                    <span className="whitespace-pre-line text-slate-700 leading-snug">{formData.recipientAddress}</span>
                  </div>
                )}

                {/* Subject */}
                {formData.subject && (
                  <div className="border-l-[4px] border-[#b8860b] bg-amber-50/40 p-3 mb-3 font-sans text-[9.2pt] leading-snug font-bold text-slate-950 shadow-2xs rounded-r-lg">
                    Subject: {formData.subject}
                  </div>
                )}

                {/* Salutation */}
                {formData.salutation && (
                  <p className="text-[9.5pt] leading-[1.5] text-justify mb-2.5 text-slate-900 font-semibold">{formData.salutation}</p>
                )}

                {/* Body Content */}
                <div className="w-full text-[9.6pt] leading-snug text-justify text-slate-900 [&_p]:mb-2.5 [&_p:last-child]:mb-0 prose-strong:font-bold prose-strong:text-[#0f172a]">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {formData.bodyText}
                  </ReactMarkdown>
                </div>

                {/* Sign-off Block: Yours faithfully, sits directly under Thanking you. */}
                <div className="w-full flex flex-col items-start text-left font-sans mt-0.5 mb-14">
                  <div className="text-[9.5pt] text-slate-900 font-medium leading-none">Yours faithfully,</div>

                  {/* 40px blank vertical space for physical ink signature & stamp seal */}
                  <div className="h-32 w-full" />

                  <div className="text-[10pt] font-extrabold text-slate-950 uppercase tracking-wide leading-tight">
                    {formData.signatoryName || headerData.proprietor}
                  </div>
                  <div className="text-[8.5pt] font-semibold text-slate-600 leading-tight">
                    {formData.signatoryTitle || 'Proprietor'}
                  </div>
                </div>

              </div>

            </div>

            {/* Centered Page Footer with Address */}
            <footer className="w-full font-sans absolute bottom-0 left-0 right-0 px-[18mm] pb-[7mm] bg-white text-center text-[8.5px] text-slate-900 leading-snug z-20">
              <div className="w-full h-[1.5px] bg-[#0f172a] mb-1.5"></div>
              <div className="font-semibold text-slate-900 flex items-center justify-center flex-wrap gap-2 text-[8.5px]">
                <span>GSTIN: <strong className="text-[#0f172a] font-black">{headerData.gstin}</strong></span>
                <span className="text-[#b8860b] font-bold">•</span>
                <span>{headerData.hsnCode}</span>
                <span className="text-[#b8860b] font-bold">•</span>
                <span>62, TOPSIA ROAD, TOPSIA, Kolkata, West Bengal - 700039</span>
              </div>
            </footer>

          </div>

        </div>

      </main>
    </div>
  );
};

export default ImperialLeatherLetterheadGenerator;
