import React, { useState } from 'react';
import { Settings2, Download, FileText, RefreshCw, Sparkles, User, Briefcase, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const TEAL_PRIMARY = "#1e4652";
const TEAL_DARK = "#173f4b";
const GOLD_ACCENT = "#b18a4b";

const templateOptions = [
  {
    id: 'spain_sponsorship_dinesh',
    name: 'Spain Visa SPONSORSHIP LETTER - Dinesh Kumar (Maruthi Glass Mart)',
    data: {
      referenceNo: 'MGM/VISA/2026/SPAIN-01',
      date: '21 August 2026',
      recipientName: 'The Visa Officer',
      recipientAddress: 'Consulate General of Spain\nMumbai, India',
      subject: 'SPONSORSHIP DECLARATION & FINANCIAL GUARANTEE UNDERTAKING FOR SCHENGEN VISA (BIOSPAIN 2026, BILBAO, SPAIN)',
      salutation: 'Dear Sir/Madam,',
      page1Paragraphs: [
        `I, **Mr. Musku Narsaiah**, an Indian citizen, hereby confirm that I am the biological father and financial sponsor of **Mr. Dinesh Kumar Musku** (Passport No.: **Y5326556**, Student UID: **24WU02647887**), who is a full-time Ph.D. Research Scholar pursuing his doctoral degree in Biotechnology at **Woxsen University**, Telangana, India.`,
        `I am the proprietor of **M/s Maruthi Glass Mart**, a registered business in Telangana, India (GSTIN: **36ABHPL2882R1ZV**, PAN: **DIJPM0547Q**). My enterprise is active and generates a stable income, and I regularly file my Income Tax Returns.`,
        `My son, Mr. Dinesh Kumar Musku, has been accepted to present his doctoral research paper at the international biotechnology conference **BIOSPAIN 2026**, scheduled to take place in **Bilbao, Spain** from **September 29th to October 1st, 2026**.`,
        `I hereby undertake **full financial responsibility** for my son's entire trip to Spain and the Schengen territory, including his round-trip travel, accommodation, daily living expenses, meals, local transport, overseas health insurance, and any emergency contingencies that may arise during his stay from **27th September 2026 to 5th October 2026**.`,
        `My son is traveling strictly for academic purposes. He has strong academic commitments in India and will return immediately after completing his conference visit to resume his Ph.D. research at Woxsen University.`,
        `All necessary financial and business credentials, including GST registration certificate, PAN, bank statements, Income Tax Returns, certificates from Woxsen University, and BIOSPAIN 2026 receipts, are submitted in support of this application.`,
        `I fully support his participation in this international conference and assure you of my financial capability and commitment. I kindly request you to consider his visa application favorably.`,
        `Thanking you.`
      ],
      page2Paragraphs: [],
      signatoryName: 'MUSKU NARSAIAH',
      signatoryDesignation: 'Proprietor\nM/s Maruthi Glass Mart\nTelangana, India',
    }
  },
  {
    id: 'korea_visa_cover_letter',
    name: 'South Korea Visa SPONSORSHIP LETTER (2 Pages)',
    data: {
      referenceNo: '',
      date: '13 August 2026',
      recipientName: 'The Visa Officer',
      recipientAddress: 'Korea Visa Application Centre (VFS Global)\nHyderabad, Telangana, India',
      subject: 'Application for Short-Stay Visa to South Korea – Tourism and Professional Design Exposure',
      salutation: 'Dear Sir/Madam,',
      page1Paragraphs: [
        `I, **Ms. Kommula Pranathi**, an Indian passport holder bearing passport number **X7137188**, respectfully submit my application for a short-stay visa to visit South Korea from **27 September 2026 to 07 October 2026**. The proposed visit is primarily for tourism and personal travel, together with professional exposure relevant to my interior-design activities and client-oriented interior material supply business in India.`,
        `I am the **proprietor of M/s Maruthi Glass Mart**, a proprietorship business in Telangana engaged in the supply of glass and interior-related materials to clients. Alongside managing the business, I undertake interior-design-related activities, including discussions with clients regarding their interior requirements, design preferences, renovation concepts and suitable materials. My professional activities require me to remain familiar with contemporary interiors, architecture, materials, spatial presentation and design trends.`,
        `I have selected South Korea because of its distinctive combination of contemporary architecture, interior design, fashion, retail environments and traditional design. During my proposed visit, I intend to explore **Seoul, Jeju Island and Busan**, visiting architectural landmarks, cultural areas, design districts, retail environments, museums, markets, public spaces and other tourist attractions. I also wish to experience Korean culture, local food, shopping and everyday life as part of a genuine personal holiday.`,
        `As part of my professional interest, I would also like to observe how Korean cafés, hotels, retail stores, commercial buildings and public spaces use **glass, lighting, textures, finishes, spatial layouts, visual presentation and interior materials**. These observations are intended only as informal professional exposure and creative reference that may be useful in my ongoing interior-design activities and future client projects in India.`,
        `I have previously travelled to the **United Arab Emirates on three occasions** in connection with my professional interior-design activities and client consultations. During these temporary visits, I met with clients to understand their interior and renovation requirements, discuss design concepts, review preferences and discuss suitable materials. I stayed for approximately one month on each occasion. I complied with the conditions and permitted period of my respective UAE visas and returned to India within the stipulated period on every occasion. My previous international travel therefore demonstrates my genuine professional activities and consistent compliance with immigration and visa requirements.`,
        `My proposed visit to South Korea is similarly temporary and does not involve employment or unauthorized commercial activity in South Korea. I do not have a Korean employer, invitation or formal business appointment. The trip is intended for tourism, cultural exploration and informal professional observation connected with my existing work in India.`
      ],
      page2Paragraphs: [
        `As the proprietor of M/s Maruthi Glass Mart, I have continuing responsibilities in India, including managing client requirements, discussing interior and renovation needs, coordinating the supply of glass and interior-related materials, and overseeing ongoing business operations. I am required to return to India after the proposed visit to continue these professional and business responsibilities.`,
        `I will meet the expenses of my proposed trip from my available financial resources and business income. My financial capacity and business activities are supported by the relevant bank statements, Income Tax Returns, PAN, GST registration and other business documents enclosed with my application. I am also submitting my travel and accommodation arrangements in support of the proposed visit.`,
        `I respectfully request that my application be considered favorably. I confirm that I will comply with all applicable visa conditions, will not undertake employment or unauthorized commercial activity in South Korea, and will return to India on completion of my planned stay to resume my business and professional responsibilities.`,
        `Thank you for your time and consideration.`
      ],
      signatoryName: 'Ms. Kommula Pranathi',
      signatoryDesignation: 'Proprietor & Interior Design Professional\nM/s Maruthi Glass Mart\nTelangana, India',
    }
  },
  {
    id: 'quotation',
    name: 'Quotation / Interior Estimate',
    data: {
      referenceNo: 'MGM/QT/2026/408',
      date: '13 August 2026',
      recipientName: 'M/s. Apex Infrastructure Pvt. Ltd.',
      recipientAddress: 'Plot No. 42, Hitec City, Madhapur, Hyderabad, TS - 500081',
      subject: 'Quotation for Supply & Installation of 12mm Toughened Glass Partitions',
      salutation: 'Kind Attn: Project Manager,',
      page1Paragraphs: [
        `With reference to your inquiry regarding architectural glass and interior requirements for your office project, we are pleased to submit our best competitive rates as follows:

| S.No | Particulars / Item Description | Specs / Thickness | Qty / Sq.Ft | Rate (₹/Sq.Ft) | Amount (₹) |
| :---: | :--- | :---: | :---: | :---: | :---: |
| 1 | **Clear Toughened Glass** for office partitions | 12mm Clear | 450 Sq.Ft | ₹ 185 | ₹ 83,250 |
| 2 | **Frosted Design Film Glass** for cabin doors | 10mm Frosted | 180 Sq.Ft | ₹ 210 | ₹ 37,800 |
| 3 | **Belgian Mirror** with polished bevelled edges | 6mm Clear | 120 Sq.Ft | ₹ 145 | ₹ 17,400 |
| 4 | **Stainless Steel Hardware Fitting Set** | SS 304 Grade | 8 Sets | ₹ 4,500 | ₹ 36,000 |

### **Financial Summary:**
- **Sub Total:** ₹ 1,74,450/-
- **GST @ 18%:** ₹ 31,401/-
- **Net Payable Amount:** **₹ 2,05,851/-** *(Rupees Two Lakh Five Thousand Eight Hundred Fifty One Only)*`
      ],
      page2Paragraphs: [],
      signatoryName: 'Ms. Kommula Pranathi',
      signatoryDesignation: 'Proprietor\nM/s Maruthi Glass Mart',
    }
  }
];

const MaruthiGlassLetterheadGenerator = () => {
  const [activeTab, setActiveTab] = useState<'form' | 'preview'>('form');
  const [isExporting, setIsExporting] = useState(false);
  const [selectedFont, setSelectedFont] = useState("Georgia, 'Times New Roman', serif");

  const [headerData, setHeaderData] = useState({
    businessName: 'MARUTHI GLASS MART',
    tagline: 'Glass & Interior Materials Supply',
    proprietor: 'Musku Narsaiah',
    phone: '+91 96186 25279',
    gstin: '36ABHPL2882R1ZV',
    pan: 'DIJPM0547Q',
    entityType: 'PROPRIETORSHIP',
    address: '11/28/1, Kakatiya Autonagar, Warangal, Hanumakonda, Telangana – 506012',
  });

  const [formData, setFormData] = useState(templateOptions[0].data);

  const handleHeaderChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setHeaderData({ ...headerData, [e.target.name]: e.target.value });
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePage1ParagraphChange = (index: number, value: string) => {
    const updated = [...formData.page1Paragraphs];
    updated[index] = value;
    setFormData({ ...formData, page1Paragraphs: updated });
  };

  const handlePage2ParagraphChange = (index: number, value: string) => {
    const updated = [...formData.page2Paragraphs];
    updated[index] = value;
    setFormData({ ...formData, page2Paragraphs: updated });
  };

  const loadTemplate = (templateId: string) => {
    const selected = templateOptions.find(t => t.id === templateId);
    if (selected) {
      setFormData(selected.data);
      if (templateId === 'spain_sponsorship_dinesh') {
        setHeaderData(prev => ({ ...prev, proprietor: 'Musku Narsaiah' }));
      } else if (templateId === 'korea_visa_cover_letter') {
        setHeaderData(prev => ({ ...prev, proprietor: 'Ms. Kommula Pranathi' }));
      }
    }
  };

  const handleExportPDF = () => {
    window.print();
  };

  {/* Exact Header matching User's HTML */ }
  const HeaderDesign = () => (
    <header className="w-full pb-2 mb-3 border-b-4 border-[#1e4652] relative bg-white">
      <div className="flex justify-between items-start flex-wrap gap-4">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <div className="w-[45px] h-[45px] border-l-4 border-[#1e4652] border-t border-b border-[#b18a4b] relative shrink-0">
            <span className="absolute top-[6px] bottom-[6px] left-[13px] w-[1px] bg-[#c8d2d6]"></span>
            <span className="absolute top-[6px] bottom-[6px] left-[25px] w-[1px] bg-[#c8d2d6]"></span>
          </div>
          <div>
            <div className="font-sans text-[8px] text-[#7b858a] tracking-[2.2px] uppercase">M / S</div>
            <h1 className="font-sans text-[20px] font-bold text-[#173f4b] tracking-[1.45px] leading-tight">
              {headerData.businessName}
            </h1>
            <div className="font-sans text-[7.5px] text-[#68757a] tracking-[1px] uppercase mt-1">
              {headerData.tagline}
            </div>
          </div>
        </div>

        {/* Proprietor Meta */}
        <div className="text-right font-sans text-[7.4px] text-[#58666b] leading-tight">
          <strong className="text-[#173f4b] text-[8px] block uppercase">PROPRIETOR</strong>
          <div>{headerData.proprietor}</div>
          <div className="max-w-[200px] ml-auto">{headerData.address}</div>
        </div>
      </div>

      {/* Reg Sub-bar */}
      <div className="mt-2 pt-1 border-t border-[#d7dfe2] text-right font-sans text-[6.6px] text-[#667277]">
        <b className="text-[#173f4b]">PH</b> {headerData.phone} &nbsp; | &nbsp;
        <b className="text-[#173f4b]">GSTIN</b> {headerData.gstin} &nbsp; | &nbsp;
        <b className="text-[#173f4b]">PAN</b> {headerData.pan} &nbsp; | &nbsp;
        <b className="text-[#173f4b]">{headerData.entityType}</b>
      </div>

      {/* Golden accent bar line */}
      <div className="absolute left-0 -bottom-[4px] w-[55mm] h-[4px] bg-[#b18a4b]"></div>
    </header>
  );

  {/* Exact Footer matching User's HTML */ }
  const FooterDesign = ({ pageNum, totalPages }: { pageNum: number; totalPages: number }) => (
    <footer className="w-full font-sans mt-auto pt-4 relative bg-white">
      <div className="h-[1px] bg-[#c8d1d5] relative mb-1.5">
        <div className="absolute left-0 -top-[1px] w-[32mm] h-[2px] bg-[#b18a4b]"></div>
      </div>
      <div className="flex justify-between items-start gap-4 text-[6.7px] text-[#647076] leading-tight">
        <div>
          <strong className="text-[#173f4b] tracking-wider block">{headerData.businessName}</strong>
          GSTIN: {headerData.gstin} &nbsp; | &nbsp; PAN: {headerData.pan} &nbsp; | &nbsp; Ph: {headerData.phone}
        </div>
        <div className="text-right">
          {headerData.address}
        </div>
      </div>
    </footer>
  );

  const inputCls = "w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none transition-all text-slate-800 focus:border-[#1e4652]";
  const labelCls = "block text-xs mb-1 text-slate-600 font-medium";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col print:bg-transparent print:text-black">
      <style>
        {`
          @media print {
            @page { size: A4; margin: 0mm; }
            body {
              margin: 0 !important; padding: 0 !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              background: transparent !important;
            }
            .page-container {
              box-shadow: none !important;
              margin: 0 !important;
              width: 210mm !important;
              min-height: 297mm !important;
              padding: 10mm 18mm 18mm !important;
              position: relative;
              page-break-after: always;
            }
            .page-container:last-child {
              page-break-after: avoid;
            }
          }
        `}
      </style>

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 print:hidden shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#1e4652] flex items-center justify-center text-[#b18a4b] font-bold text-base shadow border border-[#b18a4b]">
              M
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-slate-900 tracking-tight leading-none">MARUTHI GLASS MART</span>
              <span className="text-xs text-[#1e4652] font-semibold">South Korea Visa SPONSORSHIP LETTER Generator</span>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <div className="md:hidden flex bg-slate-100 rounded-md p-1 border border-slate-200">
              <button onClick={() => setActiveTab("form")} className={`px-3 py-1 text-sm rounded ${activeTab === "form" ? "bg-white shadow text-[#1e4652] font-bold" : "text-slate-500"}`}>Form</button>
              <button onClick={() => setActiveTab("preview")} className={`px-3 py-1 text-sm rounded ${activeTab === "preview" ? "bg-white shadow text-[#1e4652] font-bold" : "text-slate-500"}`}>Preview</button>
            </div>
            <button onClick={handleExportPDF} disabled={isExporting} className="inline-flex items-center gap-2 text-white px-5 py-2.5 text-sm font-semibold rounded-lg shadow hover:opacity-90 transition-opacity bg-[#1e4652]">
              {isExporting ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />} Export PDF
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-24 pb-12 px-4 container mx-auto flex flex-col md:flex-row gap-8 justify-center print:block print:p-0 print:m-0 print:max-w-none">

        {/* Sidebar Controls */}
        <div className={`w-full md:w-[380px] bg-white border border-slate-200 rounded-xl shadow-sm p-6 flex-col gap-6 overflow-y-auto max-h-[calc(100vh-140px)] sticky top-28 print:hidden shrink-0 ${activeTab === "form" ? "flex" : "hidden md:flex"}`}>

          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <Settings2 className="w-5 h-5 text-[#1e4652]" />
              <h2 className="text-lg font-bold text-slate-900">SPONSORSHIP LETTER Controls</h2>
            </div>
          </div>

          {/* Preset Templates */}
          <div>
            <label className="block text-xs mb-2 text-[#1e4652] font-extrabold uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#b18a4b]" /> Select Template
            </label>
            <div className="grid grid-cols-1 gap-2">
              {templateOptions.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => loadTemplate(t.id)}
                  className="text-left px-3.5 py-2.5 bg-slate-50 hover:bg-[#1e4652]/10 border border-slate-200 rounded-lg text-xs font-bold text-slate-800 transition-all flex items-center justify-between group"
                >
                  <span>{t.name}</span>
                  <FileText className="w-4 h-4 text-[#b18a4b] group-hover:scale-110 transition-transform" />
                </button>
              ))}
            </div>
          </div>

          {/* Typography Selector */}
          <div className="pt-2 border-t border-slate-100">
            <label className={labelCls}>Document Font Family</label>
            <select
              value={selectedFont}
              onChange={(e) => setSelectedFont(e.target.value)}
              className={`${inputCls} cursor-pointer font-medium`}
            >
              <option value="Georgia, 'Times New Roman', serif">Georgia / Times New Roman (Official Visa Serif)</option>
              <option value="Calibri, Arial, sans-serif">Calibri / Arial (Sans-Serif)</option>
              <option value="Inter, system-ui, sans-serif">Inter (Modern Clean Sans)</option>
            </select>
          </div>

          {/* Proprietor & Business Meta */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Header Meta</h3>
            <div><label className={labelCls}>Business Name</label><input type="text" name="businessName" value={headerData.businessName} onChange={handleHeaderChange} className={inputCls} /></div>
            <div><label className={labelCls}>Proprietor Name</label><input type="text" name="proprietor" value={headerData.proprietor} onChange={handleHeaderChange} className={inputCls} /></div>
            <div className="grid grid-cols-2 gap-3">
              <div><label className={labelCls}>GSTIN</label><input type="text" name="gstin" value={headerData.gstin} onChange={handleHeaderChange} className={inputCls} /></div>
              <div><label className={labelCls}>PAN</label><input type="text" name="pan" value={headerData.pan} onChange={handleHeaderChange} className={inputCls} /></div>
            </div>
            <div><label className={labelCls}>Registered Address</label><textarea name="address" value={headerData.address} onChange={handleHeaderChange} rows={2} className={`${inputCls} resize-none`} /></div>
          </div>

          {/* Letter Metadata */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Letter Metadata</h3>
            <div><label className={labelCls}>Date</label><input type="text" name="date" value={formData.date} onChange={handleFormChange} className={inputCls} /></div>
            <div>
              <label className={labelCls}>Submission Location / Jurisdiction Preset</label>
              <select
                onChange={(e) => {
                  if (e.target.value) {
                    setFormData(prev => ({ ...prev, recipientAddress: e.target.value }));
                  }
                }}
                className={`${inputCls} cursor-pointer text-xs font-medium`}
              >
                <option value="">-- Quick Preset Options --</option>
                <option value="Korea Visa Application Centre (VFS Global)\nHyderabad, Telangana, India">VFS Global / KVAC, Hyderabad (Recommended)</option>
                <option value="Consulate General of the Republic of Korea\nChennai, India\n(Submitted via KVAC VFS Global, Hyderabad)">Consulate General of Korea, Chennai (via VFS Hyderabad)</option>
                <option value="Korea Visa Application Centre (VFS Global)\nUnit 1, 3rd Floor, Eighteen Building, Jubilee Hills,\nHyderabad, Telangana – 500033">KVAC Jubilee Hills, Hyderabad (Detailed VFS Address)</option>
                <option value="Consulate General of the Republic of Korea\nMumbai, India">Consulate General of Korea, Mumbai</option>
              </select>
            </div>
            <div><label className={labelCls}>Recipient Title & Address</label><textarea name="recipientAddress" value={formData.recipientAddress} onChange={handleFormChange} rows={3} className={`${inputCls} resize-none font-medium`} /></div>
            <div><label className={labelCls}>Subject Line</label><input type="text" name="subject" value={formData.subject} onChange={handleFormChange} className={inputCls} /></div>
          </div>

          {/* Edit Page 1 Paragraphs */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Page 1 Content</h3>
            {formData.page1Paragraphs.map((para, i) => (
              <div key={`p1-${i}`}>
                <label className="block text-[10px] text-slate-500 font-semibold mb-1">Paragraph {i + 1}</label>
                <textarea
                  value={para}
                  onChange={(e) => handlePage1ParagraphChange(i, e.target.value)}
                  rows={4}
                  className={`${inputCls} resize-none text-xs font-mono`}
                />
              </div>
            ))}
          </div>

          {/* Edit Page 2 Paragraphs */}
          {formData.page2Paragraphs.length > 0 && (
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Page 2 Content</h3>
              {formData.page2Paragraphs.map((para, i) => (
                <div key={`p2-${i}`}>
                  <label className="block text-[10px] text-slate-500 font-semibold mb-1">Page 2 - Paragraph {i + 1}</label>
                  <textarea
                    value={para}
                    onChange={(e) => handlePage2ParagraphChange(i, e.target.value)}
                    rows={4}
                    className={`${inputCls} resize-none text-xs font-mono`}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Signatory */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Signatory Details</h3>
            <div><label className={labelCls}>Signatory Name</label><input type="text" name="signatoryName" value={formData.signatoryName} onChange={handleFormChange} className={inputCls} /></div>
            <div><label className={labelCls}>Designation & Details</label><textarea name="signatoryDesignation" value={formData.signatoryDesignation} onChange={handleFormChange} rows={3} className={`${inputCls} resize-none`} /></div>
          </div>

        </div>

        {/* WYSIWYG Letterhead Preview (Exact HTML Page 1 & Page 2 Match) */}
        <div className={`print-container flex-1 overflow-y-auto bg-slate-200/50 p-4 md:p-8 rounded-2xl md:flex flex-col gap-10 items-center relative print:block print:bg-transparent print:rounded-none print:p-0 print:m-0 print:overflow-visible ${activeTab === "preview" ? "flex" : "hidden"}`}>

          {/* PAGE 1 */}
          <div className="page-container page w-full max-w-[210mm] min-h-[297mm] bg-white text-black shadow-2xl p-12 md:p-14 relative flex flex-col justify-between print:shadow-none print:w-full print:max-w-none" style={{ fontFamily: selectedFont }}>

            <div>
              {/* Header */}
              <HeaderDesign />

              {/* Title Block */}
              <div className="text-center my-3">
                <h2 className="font-sans text-[13px] font-bold text-[#173f4b] tracking-[1.5px] uppercase">SPONSORSHIP LETTER</h2>
                <div className="w-[40mm] h-[2px] bg-[#b18a4b] mx-auto my-1.5"></div>
                <div className="font-sans text-[7px] text-[#737e83] tracking-[0.8px] uppercase">South Korea Short-Stay Visa Application</div>
              </div>

              {/* Date */}
              <div className="text-right text-[10pt] mb-3">
                <strong>Date:</strong> {formData.date}
              </div>

              {/* Recipient */}
              <div className="text-[10pt] leading-tight mb-3">
                <strong>To</strong><br />
                {formData.recipientName}<br />
                <span className="whitespace-pre-line">{formData.recipientAddress}</span>
              </div>

              {/* Subject */}
              {formData.subject && (
                <div className="border-l-[3px] border-[#b18a4b] bg-[#f7f9fa] p-2.5 mb-3 font-sans text-[9.6pt] leading-snug font-bold text-[#173f4b]">
                  Subject: {formData.subject}
                </div>
              )}

              {/* Salutation */}
              <p className="text-[9.35pt] leading-[1.4] text-justify mb-2">{formData.salutation}</p>

              {/* Page 1 Body Paragraphs */}
              {formData.page1Paragraphs.map((para, idx) => (
                <div key={idx} className="text-[9.35pt] leading-[1.4] text-justify mb-2">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {para}
                  </ReactMarkdown>
                </div>
              ))}

              {/* Signature (If Single Page Document) */}
              {formData.page2Paragraphs.length === 0 && (
                <div className="mt-4 text-[9.8pt] leading-normal font-serif">
                  <p>Yours faithfully,</p>
                  <div className="h-[18mm]"></div>
                  <div className="font-bold text-[#173f4b] text-[10pt]">{formData.signatoryName}</div>
                  <div className="text-[9pt] text-slate-700 whitespace-pre-line">{formData.signatoryDesignation}</div>
                </div>
              )}
            </div>

            {/* Page 1 Footer */}
            <FooterDesign pageNum={1} totalPages={formData.page2Paragraphs.length > 0 ? 2 : 1} />

          </div>

          {/* PAGE 2 (If multi-page) */}
          {formData.page2Paragraphs.length > 0 && (
            <div className="page-container page page-break w-full max-w-[210mm] min-h-[297mm] bg-white text-black shadow-2xl p-12 md:p-14 relative flex flex-col justify-between print:shadow-none print:w-full print:max-w-none mt-8 print:mt-0" style={{ fontFamily: selectedFont }}>

              <div>
                {/* Header */}
                <HeaderDesign />

                {/* Continued Bar */}
                <div className="font-sans text-[7.5px] font-bold tracking-[1.15px] text-[#68757a] my-3 pb-1 border-b border-[#d7dfe2] uppercase">
                  SPONSORSHIP LETTER — CONTINUED
                </div>

                {/* Page 2 Body Paragraphs */}
                {formData.page2Paragraphs.map((para, idx) => (
                  <div key={idx} className="text-[9.35pt] leading-[1.4] text-justify mb-2">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {para}
                    </ReactMarkdown>
                  </div>
                ))}

                {/* Signature */}
                <div className="mt-4 text-[9.8pt] leading-normal font-serif">
                  <p>Yours faithfully,</p>
                  <div className="h-[22mm]"></div>
                  <div className="font-bold text-[#173f4b] text-[10pt]">{formData.signatoryName}</div>
                  <div className="text-[9pt] text-slate-700 whitespace-pre-line">{formData.signatoryDesignation}</div>
                </div>
              </div>

              {/* Page 2 Footer */}
              <FooterDesign pageNum={2} totalPages={2} />

            </div>
          )}

        </div>

      </main>
    </div>
  );
};

export default MaruthiGlassLetterheadGenerator;
