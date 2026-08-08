import React, { useState } from 'react';
import { Settings2, Download, FileText } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const templates = [
  {
    id: 'certificate',
    name: 'Financial Data Certificate',
    data: {
      isHTML: true,
      referenceNumber: '',
      date: '',
      documentTitle: '',
      bodyText: `<div class="w-full text-[13px] font-sans text-black leading-relaxed mt-8">
  <div class="text-center font-bold underline mb-6">CERTIFICATE</div>
  
  <div class="text-center font-bold mb-8">
    FINANCIAL DATA QUESTIONNAIRE STUDENT VISA APPLICATION<br/>
    AMERICAN CONSULATE GENERAL, HYDERABAD
  </div>

  <p class="mb-8 text-justify">
    I, D. Raja Sekhar a fellow member of the Institute of Chartered Accountants of India, have reviewed the financial condition of Mr. <strong>Etikala Varun Reddy</strong> S/o Etikala Krishna Reddy, with the view of establishing his ability to pay the educational costs to do <strong>Master's in Computer Engineering, General Course</strong> at <strong>University of Houston-Clear Lake, Houston, TX 77058-1002, U.S.A.</strong> which have been estimated at US $ 27,509.
  </p>

  <table class="w-full mb-8">
    <thead>
      <tr class="font-bold underline">
        <th class="text-left pb-4">SOURCE OF FUNDS</th>
        <th class="text-right pb-4">INDIAN Rs.</th>
        <th class="text-right pb-4">EQUAL U S $</th>
        <th class="text-center pb-4">REFERENCE</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="pb-4">A. Savings in India</td>
        <td class="text-right pb-4">23,02,705</td>
        <td class="text-right pb-4">39,029</td>
        <td class="text-center pb-4">1.0</td>
      </tr>
      <tr>
        <td class="pb-4">B. Educational Loan</td>
        <td class="text-right pb-4">20,00,000</td>
        <td class="text-right pb-4">33,898</td>
        <td class="text-center pb-4">2.0</td>
      </tr>
      <tr>
        <td class="pb-4">C. Annual Income from India</td>
        <td class="text-right pb-4">12,20,148</td>
        <td class="text-right pb-4">20,680</td>
        <td class="text-center pb-4">3.0</td>
      </tr>
      <tr>
        <td class="pb-4">D. Immovable Properties in India</td>
        <td class="text-right pb-4">1,68,81,902</td>
        <td class="text-right pb-4">2,86,134</td>
        <td class="text-center pb-4">4.0</td>
      </tr>
      <tr>
        <td></td>
        <td class="border-b border-dashed border-black pt-2"></td>
        <td class="border-b border-dashed border-black pt-2"></td>
        <td></td>
      </tr>
      <tr class="font-bold">
        <td class="text-right pr-12 pt-2 pb-2">TOTAL</td>
        <td class="text-right pt-2 pb-2">2,24,04,755</td>
        <td class="text-right pt-2 pb-2">3,79,741</td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td class="border-b border-dashed border-black"></td>
        <td class="border-b border-dashed border-black"></td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <div class="mb-4">NOTE:</div>
  <ol class="list-decimal pl-5 space-y-4">
    <li>The amounts are rounded off to nearest Rupee or U S $ as the case may be.</li>
    <li>The U S $ exchange rate is taken at Rs. 59 for conversion.</li>
    <li>The applicant has been sponsored by his parents.</li>
    <li>In addition to documents verified this statement is based on the affidavits issued by the Parents of the visa applicant.</li>
  </ol>
</div>`,
      footerAddress: '',
    }
  },
  {
    id: 'signature_block',
    name: 'Signature Block (Page 3)',
    data: {
      isHTML: true,
      referenceNumber: '',
      date: '',
      documentTitle: '',
      bodyText: `<br/><br/><br/>
<table class="w-full text-[14px] font-sans text-black">
  <tr>
    <td class="w-1/2 align-bottom pb-2"></td>
    <td class="w-1/2 align-top pb-2">
      <span class="mr-2">SIGNATURE:</span><br/>
      <span>REGISTRATION NO: 205513</span>
    </td>
  </tr>
  <tr>
    <td class="w-1/2 align-top pt-4">
      PLACE: HYDERABAD<br/><br/>
      DATE: 26/05/2014
    </td>
    <td class="w-1/2 align-top pt-4">
      TRADE NAME: D. RAJA SEKHAR & CO
    </td>
  </tr>
</table>`,
      footerAddress: '',
    }
  }
];

const CaLetterheadGenerator = () => {
  const [activeTab, setActiveTab] = useState<'form' | 'preview'>('form');
  const [isExporting, setIsExporting] = useState(false);
  const [formData, setFormData] = useState(templates[0].data);

  const handleTemplateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const template = templates.find(t => t.id === e.target.value);
    if (template) {
      setFormData(template.data);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleExportPDF = () => {
    setIsExporting(true);
    setTimeout(() => {
      window.print();
      setTimeout(() => setIsExporting(false), 1000);
    }, 100);
  };

  const PageHeader = () => {
    return (
      <div className="w-full relative shrink-0 print:bg-white">
        <div className="flex flex-col w-full pt-[10mm] text-[#1a365d]">
          {/* Main Content Container */}
          <div className="w-full px-[20mm]">
            {/* Top Row: Logo and Name Lockup */}
            <div className="flex items-center justify-center w-full mb-3">
              {/* Logo Container with subtle border */}
              <div className="relative w-[120px] h-[90px] overflow-hidden mr-8 flex-shrink-0 rounded-lg border border-[#1a365d]/10 p-2 bg-white shadow-sm">
                <img 
                  src="/ca-logo.jpg" 
                  alt="CA India Logo" 
                  className="absolute top-1/2 left-1/2 w-[200px] max-w-none -translate-x-1/2 -translate-y-1/2 mix-blend-multiply object-contain" 
                />
              </div>
              
              {/* Firm Name and Designation */}
              <div className="text-left leading-tight py-1">
                <h1 className="font-serif font-bold text-[38px] tracking-wide text-[#1a365d] leading-none">
                  D. RAJA SEKHAR & CO.
                </h1>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-[15px] font-semibold tracking-[0.25em] text-[#1a365d]/80 uppercase">
                    Chartered Accountants
                  </span>
                  <span className="w-px h-6 bg-[#1a365d]/20"></span>
                  <span className="text-[12px] font-medium text-[#1a365d]/60 tracking-wide">
                    Since 1995
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Row: Contact Information with better structure */}
            <div className="text-center space-y-1.5 w-full">
              {/* Address Lines */}
              <div className="text-[12px] text-[#1a365d]/80 font-medium leading-relaxed tracking-wide">
                <span>Plot No. 5, Andhra Bank Colony, Near Konark Diagnostic Centre, Dilsukhnagar, Hyderabad - 500 036</span>
                <span className="mx-3 text-[#1a365d]/30">|</span>
                <span>Plot No. 162, BDL Colony, Baghva Latha, Vanasthalipuram, R.R. Dist. - 500 070</span>
              </div>
              
              {/* Contact Details with icons */}
              <div className="text-[13px] font-medium text-[#1a365d]/70 tracking-wide flex items-center justify-center gap-3 flex-nowrap whitespace-nowrap">
                <span className="flex items-center gap-1.5">
                  <span className="font-serif text-[16px] text-[#1a365d]/50 relative -top-[1px]">☎</span>
                  <span>+91 24161234</span>
                </span>
                <span className="w-px h-4 bg-[#1a365d]/20"></span>
                <span className="flex items-center gap-1.5">
                  <span className="font-serif text-[16px] text-[#1a365d]/50 relative -top-[1px]">✆</span>
                  <span>9848054900, 9392054900</span>
                </span>
                <span className="w-px h-4 bg-[#1a365d]/20"></span>
                <span className="flex items-center gap-1.5">
                  <span className="font-serif text-[16px] text-[#1a365d]/50 relative -top-[1px]">✉</span>
                  <span className="text-[#1a365d]/80">drs_co@yahoo.com</span>
                </span>
              </div>
            </div>
          </div>
          
          {/* Decorative Double Border */}
          <div className="w-full px-[20mm] mt-3 mb-1.5">
            <div className="relative">
              <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#1a365d] to-transparent"></div>
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#1a365d]/30 to-transparent mt-1"></div>
            </div>
          </div>
          
          {/* Optional: Subtle section indicator */}
          <div className="w-full px-[20mm] pb-2">
            <div className="text-[9px] text-[#1a365d]/30 tracking-[0.3em] uppercase text-center font-medium">
              — Professional • Trusted • Reliable —
            </div>
          </div>
        </div>
      </div>
    );
  };

  const PageFooter = () => {
    return (
      <div className="w-full relative px-[20mm] pb-[10mm] mt-8 text-black text-[14px] font-sans">
        
        {/* Signature Space */}
        <div className="w-full h-[40px] mb-4"></div>

        {formData.footerAddress && (
          <div className="text-center text-[12px]">
            <div className="w-full h-[1.5px] bg-[#1e3a8a] mb-2.5"></div>
            <div className="whitespace-pre-wrap">
              <ReactMarkdown components={{ p: React.Fragment }}>{formData.footerAddress}</ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-50 to-indigo-50/80 flex flex-col font-sans selection:bg-indigo-500/20 selection:text-indigo-900 print:block print:bg-white print:min-h-0">
      <style>{`
        @media print {
          @page { size: A4; margin: 0 !important; }
          body { background-color: white !important; margin: 0; padding: 0; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          .print-content-container { width: 100% !important; max-width: none !important; margin: 0 !important; padding: 0 !important; box-shadow: none !important; border: none !important; }
          .page-container { min-height: 100vh; }
        }
      `}</style>

      {/* Top Navigation */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-slate-200/60 px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-[0_4px_30px_rgba(0,0,0,0.03)] print:hidden">
        <div className="flex items-center gap-4">
          <a href="/ca" className="text-slate-500 hover:text-slate-800 transition-colors font-medium text-sm flex items-center gap-1">
            ← Back
          </a>
          <div className="w-px h-6 bg-slate-200"></div>
          <h1 className="text-xl font-bold text-slate-800 flex items-center gap-3">
            <div className="h-8 px-2 bg-gradient-to-tr from-indigo-700 to-indigo-500 text-white rounded flex items-center justify-center shadow-md font-serif italic text-lg">
              CA
            </div>
            D. Raja Sekhar Letterhead Generator
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleExportPDF}
            disabled={isExporting}
            className={`px-5 py-2.5 bg-gradient-to-r from-indigo-700 to-indigo-600 hover:from-indigo-800 hover:to-indigo-700 text-white rounded-xl font-medium transition-all shadow-[0_4px_14px_0_rgba(79,70,229,0.25)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.23)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 ${isExporting ? 'opacity-70 cursor-not-allowed transform-none hover:shadow-none' : ''}`}
          >
            {isExporting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Exporting...
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                Export PDF
              </>
            )}
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden h-[calc(100vh-73px)] print:h-auto print:block print:overflow-visible">
        
        {/* Mobile Tabs */}
        <div className="md:hidden flex bg-white border-b border-slate-200 w-full shrink-0 print:hidden">
          <button className={`flex-1 py-3 text-sm font-medium ${activeTab === 'form' ? 'text-indigo-700 border-b-2 border-indigo-700' : 'text-slate-500'}`} onClick={() => setActiveTab('form')}>Edit Details</button>
          <button className={`flex-1 py-3 text-sm font-medium ${activeTab === 'preview' ? 'text-indigo-700 border-b-2 border-indigo-700' : 'text-slate-500'}`} onClick={() => setActiveTab('preview')}>Preview</button>
        </div>

        {/* Left Form Sidebar */}
        <div className={`${activeTab === 'form' ? 'flex' : 'hidden'} md:flex w-full md:w-[400px] lg:w-[450px] bg-white/60 backdrop-blur-3xl border-r border-slate-200/60 flex-col h-full overflow-y-auto print:hidden z-10 shadow-[4px_0_24px_rgba(0,0,0,0.02)] relative`}>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-6 text-slate-800">
              <Settings2 className="w-5 h-5 text-indigo-600" />
              <h2 className="text-lg font-bold">Document Details</h2>
            </div>

            <div className="mb-6 bg-gradient-to-br from-indigo-50/50 to-indigo-50 p-5 rounded-2xl border border-indigo-100/60 shadow-sm">
              <label className="flex items-center gap-2 text-sm font-semibold text-indigo-900 mb-3">
                <FileText className="w-4 h-4 text-indigo-600" />
                Quick Templates
              </label>
              <select onChange={handleTemplateChange} className="w-full p-3 border border-indigo-200/80 rounded-xl outline-none transition-all bg-white text-sm font-medium text-slate-800 hover:border-indigo-300 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 shadow-sm">
                {templates.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
              </select>
            </div>

            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5 col-span-2 md:col-span-1">
                  <label className="text-sm font-semibold text-slate-700">Reference Number</label>
                  <input type="text" name="referenceNumber" value={formData.referenceNumber} onChange={handleChange} className="w-full p-3 border border-slate-200/60 rounded-xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 hover:border-slate-300 outline-none transition-all bg-white text-sm text-slate-900 shadow-sm placeholder:text-slate-400" />
                </div>
                <div className="space-y-1.5 col-span-2 md:col-span-1">
                  <label className="text-sm font-semibold text-slate-700">Date</label>
                  <input type="text" name="date" value={formData.date} onChange={handleChange} className="w-full p-3 border border-slate-200/60 rounded-xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 hover:border-slate-300 outline-none transition-all bg-white text-sm text-slate-900 shadow-sm placeholder:text-slate-400" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700">Document Title</label>
                <input type="text" name="documentTitle" value={formData.documentTitle} onChange={handleChange} className="w-full p-3 border border-slate-200/60 rounded-xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 hover:border-slate-300 outline-none transition-all bg-white text-sm text-slate-900 shadow-sm placeholder:text-slate-400" />
              </div>

              <div className="space-y-1.5 group">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-slate-700">Body Content</label>
                  <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200">HTML / Markdown</span>
                </div>
                <textarea name="bodyText" value={formData.bodyText} onChange={handleChange} rows={15} className="w-full p-4 border border-slate-200/60 rounded-xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 hover:border-slate-300 outline-none transition-all bg-white text-sm text-slate-800 font-mono leading-relaxed resize-none mt-2 shadow-inner placeholder:text-slate-300" />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700">Footer Address</label>
                <textarea name="footerAddress" value={formData.footerAddress} onChange={handleChange} rows={2} className="w-full p-3 border border-slate-200/60 rounded-xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 hover:border-slate-300 outline-none transition-all bg-white text-sm text-slate-900 resize-none shadow-sm placeholder:text-slate-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Preview Area */}
        <div className={`${activeTab === 'preview' ? 'flex' : 'hidden'} md:flex flex-1 bg-slate-100/50 overflow-y-auto print:overflow-visible p-4 md:p-8 justify-center print:p-0 print:bg-white print:block relative`}>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 pointer-events-none print:hidden"></div>
          
          <div className="w-full max-w-[210mm] bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1),0_0_20px_rgba(0,0,0,0.02)] print:shadow-none print-content-container relative print:max-w-none page-container print:transform-none" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
            
            {/* Watermark */}
            <div className="absolute print:fixed inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
              <div className="transform -rotate-45 text-center flex flex-col items-center justify-center w-[1200px]">
                <div className="font-serif font-bold text-[70px] tracking-widest whitespace-nowrap text-[#1a365d]">D. RAJA SEKHAR & CO.</div>
                <div className="font-sans font-bold text-[40px] tracking-[0.3em] mt-2 text-[#1a365d] uppercase">Chartered Accountants</div>
                <div className="font-sans font-medium text-[28px] tracking-[0.4em] mt-4 text-[#1a365d] uppercase">Since 1995</div>
              </div>
            </div>

            <table className="w-full relative z-10 h-full border-collapse border-spacing-0 table-fixed">
              <thead><tr><td><PageHeader /></td></tr></thead>
              <tbody className="h-full align-top">
                <tr>
                  <td className="align-top relative px-[20mm]">
                    <div className="h-full block min-h-[600px] relative text-black text-[13.5px] font-sans leading-relaxed">
                      
                      {(formData.referenceNumber || formData.date) && (
                        <div className="flex justify-between items-start mb-8 font-sans text-[14px]">
                          <div><ReactMarkdown components={{ p: React.Fragment }}>{formData.referenceNumber.replace(/\\n/g, '  \\n')}</ReactMarkdown></div>
                          <div><ReactMarkdown components={{ p: React.Fragment }}>{formData.date.replace(/\\n/g, '  \\n')}</ReactMarkdown></div>
                        </div>
                      )}

                      {formData.documentTitle && (
                        <div className="text-center mb-8 text-[17px] prose-strong:font-bold prose-strong:text-black">
                          <ReactMarkdown components={{ p: React.Fragment }}>{formData.documentTitle.replace(/\\n/g, '  \\n')}</ReactMarkdown>
                        </div>
                      )}

                      {formData.bodyText && (
                        <div className="mb-6 prose prose-p:mt-0 prose-p:mb-4 max-w-none leading-[1.6] prose-strong:font-bold prose-strong:text-black text-black text-[13.5px] text-left font-sans">
                          {(formData as any).isHTML ? (
                            <div dangerouslySetInnerHTML={{ __html: formData.bodyText }} />
                          ) : (
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{formData.bodyText.replace(/\\n/g, '  \\n')}</ReactMarkdown>
                          )}
                        </div>
                      )}

                    </div>
                  </td>
                </tr>
              </tbody>
              <tfoot><tr><td><PageFooter /></td></tr></tfoot>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CaLetterheadGenerator;
