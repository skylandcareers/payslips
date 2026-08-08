import React, { useState } from 'react';
import { Settings2, Download, FileText } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const templates = [
  {
    id: 'valuation',
    name: 'Valuation Certificate',
    data: {
      isHTML: true,
      referenceNumber: '',
      date: 'Date: 24-05-2014',
      documentTitle: '',
      bodyText: `<div class="w-full text-[14px] font-serif text-black leading-relaxed mt-4">
  <div class="text-center font-bold text-lg underline mb-6">VALUATION CERTIFICATE</div>
  
  <p class="mb-4 text-justify indent-8">
    Valuation Report on the Fair Market Value of the Properties situated at Andhra Pradesh belonging to <strong>Mr. Etikala Krishna Reddy</strong> (Father of the applicant) and <strong>Mrs. Etikala Sumathi</strong> (Mother of the applicant), as on date of 24-05-2014 for Visa Purpose
  </p>

  <p class="mb-8 text-justify indent-8">
    Under the Instructions from <strong>Mr. Etikala Varun Reddy</strong>, who desires to go abroad for Higher Studies, the below properties are inspected to assess its fair Market value as on 24-05-2014 for VISA Purpose. All relevant information is gathered and summarized as under.
  </p>

  <table class="w-full mb-8">
    <thead>
      <tr>
        <th colspan="3" class="text-center pb-1">SUMMARY</th>
      </tr>
      <tr class="border-y border-black font-serif">
        <th class="text-left py-1 w-24">PROPERTY</th>
        <th class="text-center py-1">DESCRIPTION</th>
        <th class="text-right py-1 w-32">AMOUNT</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="pt-6 align-top text-center">I</td>
        <td class="pt-6 pl-4 pr-4 text-justify">Residential house bearing Plot No.154, Sy. Nos. 144 to 153 & 156 to 159 situated at Sairamnagar Colony, Karmanghat, Ranga Reddy Dist, Andhra Pradesh.</td>
        <td class="pt-6 text-right align-bottom">1,02,71,902</td>
      </tr>
      <tr>
        <td class="pt-6 align-top text-center">II</td>
        <td class="pt-6 pl-4 pr-4 text-justify">Agricultural Property bearing Sy. No. 284/E, 1/A, 9/A, 10/2, 11/A, situated at Eddampally Village, Devarakonda Mandal, Nalgonda Dist, Andhra Pradesh</td>
        <td class="pt-6 text-right align-bottom">24,50,000</td>
      </tr>
      <tr>
        <td class="pt-6 align-top text-center">III</td>
        <td class="pt-6 pl-4 pr-4 text-justify">Agricultural Property bearing Sy. No. 269, 269/U, 270/A, 270/E, situated at Eddampally Village, Devarakonda Mandal, Nalgonda Dist, Andhra Pradesh</td>
        <td class="pt-6 text-right align-bottom">41,60,000</td>
      </tr>
      <tr>
        <td class="pt-12"></td>
        <td class="pt-12 text-right pr-4">TOTAL</td>
        <td class="pt-12 text-right border-b border-black font-bold">1,68,81,902</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td class="border-b border-dashed border-black pt-1"></td>
      </tr>
    </tbody>
  </table>

  <p class="mb-16 text-justify">
    The Fair Market Value of Immovable Properties Situated at Andhra Pradesh belonging to the applicant parents is assessed as Rs. <strong>1,68,81,902 /-</strong> (Rupees One Crore Sixty Eight Lakhs Eighty One Thousand Nine Hundred and Two Only.)
  </p>
  
</div>`,
      footerAddress: '',
    }
  },
  {
    id: 'signature_block',
    name: 'Signature Block',
    data: {
      isHTML: true,
      referenceNumber: '',
      date: '',
      documentTitle: '',
      bodyText: `<table class="w-full mt-12 text-[14px] font-sans">
  <tr>
    <td class="w-1/2"></td>
    <td class="w-1/2 text-center text-[#3B489E] font-bold leading-tight">
      <div class="italic text-[16px]">K. PRAMOD KUMAR</div>
      <div class="text-[12px] ml-16">B Tech.</div>
      <div class="text-black text-[13px] mt-1">Licenced Structural Engineer</div>
      <div class="text-black text-[13px]">M C No. 483/Strl. Engr/TP10/GHMC/2009</div>
    </td>
  </tr>
</table>`,
      footerAddress: '',
    }
  }
];

const SpoorthiLetterheadGenerator = () => {
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
      <div className="w-full relative shrink-0 pb-8">
        <div className="flex flex-col items-center justify-center w-full px-[20mm] pt-[10mm] pb-4 text-[#2563eb]">
          <div className="font-serif font-bold text-[34px] tracking-wide uppercase mb-1">
            SPOORTHI ASSOCIATES
          </div>
          <div className="font-sans font-bold text-[17px] tracking-wide text-[#334155] mb-1">
            ENGINEERS & ARCHITECTS
          </div>
          <div className="font-sans font-bold text-[14px] text-[#334155] mb-2">
            (Building Plans, Estimates, Valuation & Project Consultants)
          </div>
          <div className="font-sans text-[13px] text-[#475569] mb-1">
            Flat No. 303, Spoorthi Homes, Veera Reddy Colony, Nacharam, Hyderabad, A.P.
          </div>
          <div className="font-sans text-[13px] text-[#475569]">
            Ph : 040-27176642, Cell : 9866477111, E-mail : kpramod_k@yahoo.com
          </div>
        </div>
        <div className="w-full px-[20mm]">
          <div className="w-full h-0.5 bg-[#2563eb]"></div>
          <div className="w-full h-px bg-[#2563eb] mt-0.5"></div>
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
            <div className="w-full h-[1.5px] bg-[#2563eb] mb-2.5"></div>
            <div className="whitespace-pre-wrap">
              <ReactMarkdown components={{ p: React.Fragment }}>{formData.footerAddress}</ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-50 to-emerald-50/80 flex flex-col font-sans selection:bg-emerald-500/20 selection:text-emerald-900 print:block print:bg-white print:min-h-0">
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
          <a href="/spoorthi" className="text-slate-500 hover:text-slate-800 transition-colors font-medium text-sm flex items-center gap-1">
            ← Back
          </a>
          <div className="w-px h-6 bg-slate-200"></div>
          <h1 className="text-xl font-bold text-slate-800 flex items-center gap-3">
            <div className="h-8 px-2 bg-gradient-to-tr from-emerald-600 to-teal-500 text-white rounded flex items-center justify-center shadow-md font-sans font-bold text-sm">
              SA
            </div>
            Spoorthi Associates Letterhead Generator
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleExportPDF}
            disabled={isExporting}
            className={`px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl font-medium transition-all shadow-[0_4px_14px_0_rgba(16,185,129,0.25)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.23)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 ${isExporting ? 'opacity-70 cursor-not-allowed transform-none hover:shadow-none' : ''}`}
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
          <button className={`flex-1 py-3 text-sm font-medium ${activeTab === 'form' ? 'text-emerald-700 border-b-2 border-emerald-700' : 'text-slate-500'}`} onClick={() => setActiveTab('form')}>Edit Details</button>
          <button className={`flex-1 py-3 text-sm font-medium ${activeTab === 'preview' ? 'text-emerald-700 border-b-2 border-emerald-700' : 'text-slate-500'}`} onClick={() => setActiveTab('preview')}>Preview</button>
        </div>

        {/* Left Form Sidebar */}
        <div className={`${activeTab === 'form' ? 'flex' : 'hidden'} md:flex w-full md:w-[400px] lg:w-[450px] bg-white/60 backdrop-blur-3xl border-r border-slate-200/60 flex-col h-full overflow-y-auto print:hidden z-10 shadow-[4px_0_24px_rgba(0,0,0,0.02)] relative`}>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-6 text-slate-800">
              <Settings2 className="w-5 h-5 text-emerald-600" />
              <h2 className="text-lg font-bold">Document Details</h2>
            </div>

            <div className="mb-6 bg-gradient-to-br from-emerald-50/50 to-emerald-50 p-5 rounded-2xl border border-emerald-100/60 shadow-sm">
              <label className="flex items-center gap-2 text-sm font-semibold text-emerald-900 mb-3">
                <FileText className="w-4 h-4 text-emerald-600" />
                Quick Templates
              </label>
              <select onChange={handleTemplateChange} className="w-full p-3 border border-emerald-200/80 rounded-xl outline-none transition-all bg-white text-sm font-medium text-slate-800 hover:border-emerald-300 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 shadow-sm">
                {templates.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
              </select>
            </div>

            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5 col-span-2 md:col-span-1">
                  <label className="text-sm font-semibold text-slate-700">Reference Number</label>
                  <input type="text" name="referenceNumber" value={formData.referenceNumber} onChange={handleChange} className="w-full p-3 border border-slate-200/60 rounded-xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 hover:border-slate-300 outline-none transition-all bg-white text-sm text-slate-900 shadow-sm placeholder:text-slate-400" />
                </div>
                <div className="space-y-1.5 col-span-2 md:col-span-1">
                  <label className="text-sm font-semibold text-slate-700">Date</label>
                  <input type="text" name="date" value={formData.date} onChange={handleChange} className="w-full p-3 border border-slate-200/60 rounded-xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 hover:border-slate-300 outline-none transition-all bg-white text-sm text-slate-900 shadow-sm placeholder:text-slate-400" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700">Document Title</label>
                <input type="text" name="documentTitle" value={formData.documentTitle} onChange={handleChange} className="w-full p-3 border border-slate-200/60 rounded-xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 hover:border-slate-300 outline-none transition-all bg-white text-sm text-slate-900 shadow-sm placeholder:text-slate-400" />
              </div>

              <div className="space-y-1.5 group">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-slate-700">Body Content</label>
                  <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200">HTML / Markdown</span>
                </div>
                <textarea name="bodyText" value={formData.bodyText} onChange={handleChange} rows={15} className="w-full p-4 border border-slate-200/60 rounded-xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 hover:border-slate-300 outline-none transition-all bg-white text-sm text-slate-800 font-mono leading-relaxed resize-none mt-2 shadow-inner placeholder:text-slate-300" />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700">Footer Address</label>
                <textarea name="footerAddress" value={formData.footerAddress} onChange={handleChange} rows={2} className="w-full p-3 border border-slate-200/60 rounded-xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 hover:border-slate-300 outline-none transition-all bg-white text-sm text-slate-900 resize-none shadow-sm placeholder:text-slate-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Preview Area */}
        <div className={`${activeTab === 'preview' ? 'flex' : 'hidden'} md:flex flex-1 bg-slate-100/50 overflow-y-auto print:overflow-visible p-4 md:p-8 justify-center print:p-0 print:bg-white print:block relative`}>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 pointer-events-none print:hidden"></div>
          
          <div className="w-full max-w-[210mm] bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1),0_0_20px_rgba(0,0,0,0.02)] print:shadow-none print-content-container relative print:max-w-none page-container print:transform-none" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
            <table className="w-full relative z-10 h-full border-collapse border-spacing-0 table-fixed">
              <thead><tr><td><PageHeader /></td></tr></thead>
              <tbody className="h-full align-top">
                <tr>
                  <td className="align-top relative px-[20mm]">
                    <div className="h-full block min-h-[600px] relative text-black text-[14px] font-serif leading-relaxed mt-4">
                      
                      {(formData.referenceNumber || formData.date) && (
                        <div className="flex justify-between items-start mb-6 font-serif font-bold text-[15px]">
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
                        <div className="mb-6 prose prose-p:mt-0 prose-p:mb-4 max-w-none leading-[1.6] prose-strong:font-bold prose-strong:text-black text-black text-[14px] text-left font-serif">
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

export default SpoorthiLetterheadGenerator;
