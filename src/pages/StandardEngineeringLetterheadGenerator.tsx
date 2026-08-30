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
    id: 'schengen_visa_cover_letter',
    name: 'Sweden Schengen Visa Application Cover Letter - Debasish Biswas',
    data: {
      referenceNo: 'SES/VISA/2026/08',
      date: '27 August 2026',
      recipientName: 'The Visa Officer',
      recipientAddress: 'Embassy of Sweden\nNew Delhi, India',
      subject: 'Application for Short-Stay Schengen Visa – Tourism Visit to Sweden',
      salutation: 'Dear Sir/Madam,',
      bodyText: `I, **Mr. Debasish Biswas**, an Indian citizen holding Passport No. **X3007662**, respectfully submit my application for a Short-Stay Schengen Visa for Sweden for the purpose of tourism and sightseeing.

I intend to travel to Sweden from **10 October 2026 to 20 October 2026**. My international travel arrangements are confirmed, with my arrival in Stockholm on **11 October 2026** and departure from Stockholm on **19 October 2026**, followed by my arrival in India on **20 October 2026**.

During my stay, I plan to explore Sweden and visit **Stockholm, Gothenburg and Malmö**, along with nearby attractions and cultural destinations. The principal purpose of my journey is tourism, sightseeing and experiencing Swedish culture, architecture and local attractions.

### **Accommodation Details:**
My accommodation arrangements are confirmed as follows:
- **Stockholm:** Lilla Brunn — 11 to 15 October 2026
- **Gothenburg:** Hotell Gota Avenyn — 15 to 18 October 2026
- **Malmö:** Scandic Stortorget — 18 to 19 October 2026

All accommodation bookings are in my name and are submitted with my visa application.

### **Professional and Financial Background:**
I am a proprietor of **Standard Engineering Service**, an established business operating in India. My business is registered under GST and has been operating since 2017. I am actively involved in managing the business and have ongoing professional responsibilities in India.

I have enclosed my GST Registration Certificate, Income Tax Returns and bank statements as evidence of my professional and financial position. My latest Income Tax Return reflects a total income of approximately **₹15.76 lakh**, and my bank records demonstrate sufficient funds to independently finance my proposed trip.

I am financially capable of bearing all expenses related to my travel, including airfare, accommodation, transportation, food, sightseeing and other personal expenses. No financial sponsorship is being sought from any person or organization for this trip.

### **Purpose and Return to India:**
This is a temporary visit undertaken solely for tourism. I have strong professional and financial ties to India through my established business and will return to India after my visit to resume my business responsibilities.

I have no intention of overstaying my permitted period or undertaking any unauthorized employment in Sweden or elsewhere in the Schengen Area.

I have also obtained valid travel medical insurance covering my trip, and I have enclosed the relevant insurance certificate along with my other supporting documents.

I respectfully request you to consider my application and grant me the appropriate Schengen Short-Stay Visa for my planned visit to Sweden.

I confirm that all information and documents submitted with my application are genuine and accurate to the best of my knowledge.

Thank you for your time and consideration.`,
      signatoryName: 'DEBASISH BISWAS',
      signatoryTitle: 'Proprietor (Passport No.: X3007662)',
      signatoryFirm: 'Standard Engineering Service',
    }
  }
];

const StandardEngineeringLetterheadGenerator = () => {
  const [activeTab, setActiveTab] = useState<'form' | 'preview'>('form');
  const [isExporting, setIsExporting] = useState(false);
  const [isExportingAll, setIsExportingAll] = useState(false);
  const [selectedFont, setSelectedFont] = useState(fontOptions[0].value);
  const [selectedTemplateId, setSelectedTemplateId] = useState('schengen_visa_cover_letter');
  const [headerTheme, setHeaderTheme] = useState<'brand_blue' | 'navy' | 'amber' | 'classic'>('brand_blue');
  const [pageMode, setPageMode] = useState<'single' | 'multi' | 'auto'>('multi');

  const [headerData, setHeaderData] = useState({
    firmName: 'STANDARD ENGINEERING SERVICE',
    tagline: 'MANUFACTURERS, ENGINEERS, ERECTION & INDUSTRIAL MAINTENANCE SPECIALISTS',
    proprietor: 'DEBASISH BISWAS',
    gstin: '19AJJPS2891P1Z4',
    regDetails: 'REGULAR TAXPAYER (PROPRIETORSHIP) • REG: 01/07/2017',
    address: 'Holding No.12, Raja Road, Sukchar, North Twenty Four Parganas, West Bengal - 700115',
    phone: '+91 7815916787',
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

  const renderHeaderLayout = (pageNumber?: number) => {
    const themeStyles = {
      brand_blue: {
        title: "text-[#0052cc] font-sans font-black",
        tagline: "text-[#a81c1c]",
        accentPrimary: "bg-[#0052cc]",
        accentSecondary: "bg-[#a81c1c]",
      },
      amber: {
        title: "text-amber-900 font-sans font-black",
        tagline: "text-amber-700",
        accentPrimary: "bg-amber-800",
        accentSecondary: "bg-amber-600",
      },
      navy: {
        title: "text-slate-950 font-sans font-black",
        tagline: "text-slate-700",
        accentPrimary: "bg-slate-950",
        accentSecondary: "bg-blue-600",
      },
      classic: {
        title: "text-slate-950 font-serif font-black tracking-normal",
        tagline: "text-[#a81c1c]",
        accentPrimary: "bg-slate-900",
        accentSecondary: "bg-[#a81c1c]",
      }
    };

    const t = themeStyles[headerTheme as keyof typeof themeStyles] || themeStyles.brand_blue;

    return (
      <div className="w-full shrink-0 px-[18mm] pt-[5mm] pb-0 mb-0 bg-white">
        {/* Header: Logo | Firm Name & Tagline | Contact Block */}
        <div className="w-full flex items-center gap-4">

          {/* LEFT: Logo Emblem */}
          <div className="shrink-0">
            <LogoEmblem />
          </div>

          {/* CENTER: Firm Name, Tagline, Reg Details */}
          <div className="flex-1 text-left">
            <h1 className={`text-[14pt] tracking-tight uppercase leading-none font-sans ${t.title}`}>
              {headerData.firmName}
            </h1>
            <p className={`text-[7.5pt] font-bold uppercase tracking-wider mt-0.5 leading-snug ${t.tagline}`}>
              {headerData.tagline}
            </p>
            <div className="text-[6.5pt] font-extrabold text-slate-400 uppercase tracking-widest mt-1">
              PROPRIETORSHIP ENTERPRISE • REG: 01/07/2017 • GST VERIFIED
            </div>
          </div>

          {/* RIGHT: GSTIN, Phone, Email, Website */}
          <div className="shrink-0 text-right text-[7pt] text-slate-700 font-sans leading-snug space-y-0.5">
            <div>
              <span className="text-slate-400 font-bold uppercase text-[6pt] tracking-wider">GSTIN: </span>
              <span className="font-black font-mono text-slate-950 text-[7.5pt]">{headerData.gstin}</span>
            </div>
            <div>
              <span className="text-slate-400 font-bold uppercase text-[6pt] tracking-wider">Ph: </span>
              <span className="font-semibold text-slate-800">{headerData.phone}</span>
            </div>
            <div className="font-bold text-[#0052cc]">{headerData.email}</div>
            <div className="font-semibold text-slate-600">
              {headerData.website}{pageNumber && pageNumber > 1 ? ` (Page ${pageNumber})` : ''}
            </div>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="w-full flex h-[2.5px] mt-2.5 rounded-full overflow-hidden">
          <div className={`w-7/10 ${t.accentPrimary}`} />
          <div className={`w-3/10 ${t.accentSecondary}`} />
        </div>

        {/* Hairline border separator */}
        <div className="border-b border-slate-200 mt-0 mb-3" />
      </div>
    );
  };

  const renderFooterLayout = () => {
    return (
      <div className="w-full shrink-0 px-[18mm] pb-[5mm] pt-2 text-slate-800 font-sans bg-white border-t border-slate-200 z-20">
        {/* Top Accent Line for Footer Block */}
        <div className="w-full flex h-[2.5px] mb-2 rounded-full overflow-hidden">
          <div className="w-7/10 bg-[#0052cc]" />
          <div className="w-3/10 bg-[#a81c1c]" />
        </div>
        <div className="grid grid-cols-3 gap-3 text-left leading-tight text-[7pt]">
          <div>
            <div className="font-extrabold text-slate-950 uppercase tracking-wider text-[6.5pt] mb-0.5">Corporate Address:</div>
            <div className="text-slate-700 font-medium">{headerData.address}</div>
          </div>
          <div className="text-center">
            <div className="font-extrabold text-slate-950 uppercase tracking-wider text-[6.5pt] mb-0.5">Helpline & Website:</div>
            <div className="text-slate-700 font-medium">{headerData.phone}</div>
            <div className="text-[#0052cc] font-bold">{headerData.email} • {headerData.website}</div>
          </div>
          <div className="text-right">
            <div className="font-extrabold text-slate-950 uppercase tracking-wider text-[6.5pt] mb-0.5">Statutory Info:</div>
            <div className="text-slate-950 font-bold font-mono text-[7.5pt]">GSTIN: {headerData.gstin}</div>
            <div className="text-slate-500 text-[6.5pt] font-mono mt-0.5">{headerData.hsnSummary}</div>
          </div>
        </div>
      </div>
    );
  };

  const renderLetterCard = (itemData: typeof formData, keyId?: string) => {
    const rawText = itemData.bodyText || '';
    const paragraphs = rawText.split(/\n\n+/).filter(p => p.trim().length > 0);

    const isMultiPage = pageMode === 'multi' || (pageMode === 'auto' && paragraphs.length > 4);

    if (isMultiPage && paragraphs.length > 2) {
      // Include Purpose & Return to India paragraphs (0-9) on Page 1 as requested!
      const splitIndex = paragraphs.length >= 10 ? 10 : Math.ceil(paragraphs.length / 2);
      const page1Body = paragraphs.slice(0, splitIndex).join('\n\n');
      const page2Body = paragraphs.slice(splitIndex).join('\n\n');

      return (
        <div key={keyId} className="flex flex-col gap-8 print:gap-0">
          {/* PAGE 1 */}
          <div
            className="w-full max-w-[210mm] min-h-[297mm] h-[297mm] bg-white shadow-xl print:shadow-none relative print:max-w-none page-container page-card flex flex-col justify-between overflow-hidden mb-8 print:mb-0 border border-slate-200 print:border-none"
            style={{ fontFamily: selectedFont, breakAfter: 'page', pageBreakAfter: 'always' }}
          >
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03] select-none z-0">
              <Wrench className="w-96 h-96 text-slate-900" />
            </div>

            {renderHeaderLayout(1)}

            <div className="flex-1 px-[18mm] py-1.5 relative z-10 text-slate-950 text-[9.5pt] leading-[1.48] text-left overflow-hidden flex flex-col justify-start" style={{ fontFamily: selectedFont }}>
              {(itemData.referenceNo || itemData.date) && (
                <div className="flex justify-between items-center mb-2 text-[8.5pt] font-semibold text-slate-800 pb-0.5" style={{ fontFamily: selectedFont }}>
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

              {itemData.recipientName && (
                <div className="mb-2 text-[9.5pt] text-slate-900 leading-snug">
                  <div className="text-[7pt] font-extrabold uppercase tracking-wider text-slate-400 mb-0.5">To,</div>
                  <div className="font-bold text-slate-950">{itemData.recipientName}</div>
                  <div className="whitespace-pre-line text-slate-700 font-medium">{itemData.recipientAddress}</div>
                </div>
              )}

              {itemData.subject && (
                <div className="text-left my-2 pl-2.5 border-l-4 border-[#0052cc] bg-blue-50/60 py-1 text-[9.5pt] font-black uppercase tracking-wide text-slate-950 rounded-r-md">
                  <span>SUBJECT: {itemData.subject}</span>
                </div>
              )}

              {itemData.salutation && (
                <div className="mb-1.5 text-[9.5pt] font-semibold text-slate-900">
                  {itemData.salutation}
                </div>
              )}

              <div className="mb-2 max-w-none leading-[1.48] text-slate-950 text-[9.5pt]" style={{ fontFamily: selectedFont }}>
                <div className="prose prose-p:mt-0 prose-p:mb-2 prose-h3:mt-2 prose-h3:mb-1 max-w-none text-justify text-slate-950 text-[9.5pt] prose-strong:font-bold prose-strong:text-black prose-table:border prose-table:border-slate-300 prose-th:bg-[#0052cc] prose-th:text-white prose-th:p-1.5 prose-td:p-1.5 prose-td:border prose-td:border-slate-200 leading-[1.48]" style={{ fontFamily: selectedFont }}>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {page1Body.replace(/\n/g, '  \n')}
                  </ReactMarkdown>
                </div>
              </div>
            </div>

            {renderFooterLayout()}
          </div>

          {/* PAGE 2 */}
          <div
            className="w-full max-w-[210mm] min-h-[297mm] h-[297mm] bg-white shadow-xl print:shadow-none relative print:max-w-none page-container page-card flex flex-col justify-between overflow-hidden mb-8 print:mb-0 border border-slate-200 print:border-none"
            style={{ fontFamily: selectedFont, breakAfter: 'page', pageBreakAfter: 'always' }}
          >
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03] select-none z-0">
              <Wrench className="w-96 h-96 text-slate-900" />
            </div>

            {renderHeaderLayout(2)}

            <div className="flex-1 px-[18mm] py-2 relative z-10 text-slate-950 text-[10pt] leading-[1.55] text-left overflow-hidden flex flex-col justify-start" style={{ fontFamily: selectedFont }}>


              <div className="mb-4 max-w-none leading-[1.55] text-slate-950 text-[10pt]" style={{ fontFamily: selectedFont }}>
                <div className="prose prose-p:mt-0 prose-p:mb-3 max-w-none text-justify text-slate-950 text-[10pt] prose-strong:font-bold prose-strong:text-black prose-table:border prose-table:border-slate-300 prose-th:bg-[#0052cc] prose-th:text-white prose-th:p-2 prose-td:p-2 prose-td:border prose-td:border-slate-200 leading-[1.55]" style={{ fontFamily: selectedFont }}>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {page2Body.replace(/\n/g, '  \n')}
                  </ReactMarkdown>
                </div>

                <div className="w-full flex flex-col items-start text-left font-sans mt-3 mb-14">
                  <div className="text-[10pt] text-slate-900 font-medium leading-none">Yours faithfully,</div>

                  <div className="h-10 w-full" />

                  <div className="text-[10.5pt] font-extrabold text-slate-950 uppercase tracking-wide leading-tight">
                    {headerData.proprietor}
                  </div>
                  <div className="text-[8.5pt] font-semibold text-slate-600 leading-tight">
                    Proprietor
                  </div>
                </div>
              </div>
            </div>

            {renderFooterLayout()}
          </div>
        </div>
      );
    }

    return (
      <div
        key={keyId}
        className="w-full max-w-[210mm] min-h-[297mm] h-[297mm] bg-white shadow-xl print:shadow-none relative print:max-w-none page-container page-card flex flex-col justify-between overflow-hidden mb-8 print:mb-0 border border-slate-200 print:border-none"
        style={{ fontFamily: selectedFont, breakAfter: 'page', pageBreakAfter: 'always' }}
      >
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03] select-none z-0">
          <Wrench className="w-96 h-96 text-slate-900" />
        </div>

        {renderHeaderLayout(1)}

        <div className="flex-1 px-[18mm] py-1 relative z-10 text-slate-950 text-[8.5pt] leading-[1.42] text-left overflow-hidden flex flex-col justify-start" style={{ fontFamily: selectedFont }}>
          {(itemData.referenceNo || itemData.date) && (
            <div className="flex justify-between items-center mb-2 text-[8.5pt] font-semibold text-slate-800 pb-0.5" style={{ fontFamily: selectedFont }}>
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

          {itemData.recipientName && (
            <div className="mb-2.5 text-[8.5pt] text-slate-900 leading-snug">
              <div className="text-[7pt] font-extrabold uppercase tracking-wider text-slate-400 mb-0.5">To,</div>
              <div className="font-bold text-slate-950 text-[9pt]">{itemData.recipientName}</div>
              <div className="whitespace-pre-line text-slate-700 font-medium">{itemData.recipientAddress}</div>
            </div>
          )}

          {itemData.subject && (
            <div className="text-left my-2.5 pl-2.5 border-l-4 border-[#0052cc] bg-blue-50/60 py-1 text-[8.5pt] font-black uppercase tracking-wide text-slate-950 rounded-r-md">
              <span>SUBJECT: {itemData.subject}</span>
            </div>
          )}

          {itemData.salutation && (
            <div className="mb-1.5 text-[8.5pt] font-semibold text-slate-900">
              {itemData.salutation}
            </div>
          )}

          {itemData.bodyText && (
            <div className="mb-2 max-w-none leading-[1.42] text-slate-950 text-[8.5pt]" style={{ fontFamily: selectedFont }}>
              <div className="prose prose-p:mt-0 prose-p:mb-1.5 max-w-none text-justify text-slate-950 text-[8.5pt] prose-strong:font-bold prose-strong:text-black prose-table:border prose-table:border-slate-300 prose-th:bg-[#0052cc] prose-th:text-white prose-th:p-1.5 prose-td:p-1.5 prose-td:border prose-td:border-slate-200 leading-[1.42]" style={{ fontFamily: selectedFont }}>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {rawText.replace(/\n/g, '  \n')}
                </ReactMarkdown>
              </div>

              <div className="w-full flex flex-col items-start text-left font-sans mt-2 mb-10">
                <div className="text-[8.5pt] text-slate-900 font-medium leading-none">Yours faithfully,</div>
                <div className="h-9 w-full" />
                <div className="text-[9.5pt] font-extrabold text-slate-950 uppercase tracking-wide leading-tight">
                  {headerData.proprietor}
                </div>
                <div className="text-[8pt] font-semibold text-slate-600 leading-tight">
                  Proprietor
                </div>
              </div>
            </div>
          )}
        </div>

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
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
            <button
              onClick={() => setPageMode('single')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${pageMode === 'single'
                ? 'bg-white text-[#0052cc] shadow-xs border border-slate-200/60'
                : 'text-slate-600 hover:text-slate-900'
                }`}
            >
              📄 1-Page Smart Fit
            </button>
            <button
              onClick={() => setPageMode('multi')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${pageMode === 'multi'
                ? 'bg-white text-[#0052cc] shadow-xs border border-slate-200/60'
                : 'text-slate-600 hover:text-slate-900'
                }`}
            >
              📑 2-Page Multi-Page
            </button>
          </div>

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
