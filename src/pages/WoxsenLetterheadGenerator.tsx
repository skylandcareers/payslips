import React, { useState } from 'react';
import { Settings2, Download, Printer, FileText } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const templates = [
  {
    id: 'noc',
    name: 'No Objection Certificate (NOC)',
    data: {
      referenceNumber: 'WOU/2026/PHD/REG/013',
      date: '25/02/2026',
      documentTitle: '**NO OBJECTION CERTIFICATE (NOC)**',
      bodyText: `**To**
**The Consulate General of France**
**Bengaluru, India**

**Subject: No Objection Certificate for Attending 3rd International Conference on Biomolecules, France – PhD (Biotechnology)**

This is to certify that **Mr. PREM KUMAR REDDY ELETI** (Passport No.: B7596504) is a bonafide **Ph.D. Scholar** at the **School of Biotechnology, Woxsen University**. His doctoral research is related to the following poster presentation:

**Title of the Presentation:**
"Development of a Next-Generation Biomolecule-Driven Microbial Consortium Biofertilizer for Sustainable Rice Cultivation"

The University has no objection to him traveling to France to attend the **3rd International Conference on Biomolecules** from **September 16 to September 18, 2026**, at the University of Lorraine, Nancy, France.

His participation is purely academic and will not affect his Ph.D. progress. He is expected to resume his research at Woxsen University upon completion.

This certificate is issued at the student's request for a visa and official purposes.

**Place:** Hyderabad, India
**Date:** 25-02-2026
&nbsp;
&nbsp;
&nbsp;
**Registrar/Dean**
**Woxsen University**`,
      footerAddress: '**Campus Address:** Woxsen University, Kamkole, Sadasivpet, Sangareddy District, Hyderabad - 502345, Telangana, India.',
    }
  },
  {
    id: 'sanction',
    name: 'Sanction Letter',
    data: {
      referenceNumber: 'WOU/2026/PHD/EVEN&CONF/037',
      date: '25/02/2026',
      documentTitle: '**SANCTION LETTER**',
      bodyText: `**To**
**Mr. PREM KUMAR REDDY ELETI**
**Ph.D. Scholar, School of Biotechnology**

**Subject: Financial Sanction and Academic Leave Approval for International Conference – France**

This is to certify that **Mr. PREM KUMAR REDDY ELETI**, holding **Passport No.: B7596504**, is a bonafide **Ph.D. Scholar in the School of Biotechnology** at **Woxsen University**, Hyderabad, India.

The University hereby sanctions a **financial assistance of ₹2,60,000/- (Rupees Two Lakhs Sixty Thousand Only)** in favor of Mr. Prem Kumar Reddy Eleti to support his academic travel and related expenses for attending the **3rd International Conference on Biomolecules** in **France**.

The conference is scheduled to be held from **September 16, 2026, to September 18, 2026**, in Nancy, France.

He has been granted **official academic leave** for the period from **14th September 2026 to 21st September 2026** and is required to **return and resume his Ph.D. studies** at Woxsen University.

The above financial sanction and leave approval have been granted after due consideration. The University has **no objection** to his participation in the above-mentioned academic event.

This letter is issued at the request of the student for **visa and other official purposes**.

**Place:** Hyderabad, India
**Date:** 25-02-2026
&nbsp;
&nbsp;
&nbsp;
*(Registrar / Dean / Director – Research)*
**Woxsen University**`,
      footerAddress: '**Campus Address:** Woxsen University, Kamkole, Sadasivpet, Sangareddy District, Hyderabad - 502345, Telangana, India.',
    }
  },
  {
    id: 'bonafide',
    name: 'Bonafide Certificate',
    data: {
      referenceNumber: 'WOU/2026/PHD/REG/013',
      date: '25/02/2026',
      documentTitle: '**BONAFIDE CERTIFICATE**',
      bodyText: `**To Whomsoever It May Concern**

This is to certify that **Mr. PREM KUMAR REDDY ELETI**, bearing **Passport No.: B7596504** is a bonafide **Ph.D. Scholar in the School of Biotechnology** at **Woxsen University**.

He is a regular research scholar of the University and is currently in the **3rd year of his doctoral program** during the academic year **2026–2027**.

The student is provided **hostel accommodation within the University campus**, and his stay is officially recognized and permitted by the University for the duration of his Ph.D. program.

This bonafide certificate is issued upon his request for **official purposes**, including **conference participation, accommodation confirmation, visa processing, and other academic requirements.**

**Place:** Hyderabad, India
**Date:** 25-02-2026
&nbsp;
&nbsp;
&nbsp;
*(Registrar / Dean / Director – Research)*
**Woxsen University**`,
      footerAddress: '**Campus Address:** Woxsen University, Kamkole, Sadasivpet, Sangareddy District, Hyderabad - 502345, Telangana, India.',
    }
  },
  {
    id: 'hotel',
    name: 'Hotel / Accommodation Confirmation',
    data: {
      referenceNumber: 'WOU/2026/PHD/HOSTEL/046',
      date: '25/02/2026',
      documentTitle: '**ACCOMMODATION CONFIRMATION**',
      bodyText: `**To Whomsoever It May Concern**

This is to certify that **Mr. PREM KUMAR REDDY ELETI**, holding **Passport No.: B7596504**, is a bonafide Ph.D. Scholar in the School of Biotechnology at Woxsen University, Hyderabad, India.

He will be traveling to France to attend the **3rd International Conference on Biomolecules** from **September 16, 2026, to September 18, 2026**, in Nancy, France.

As part of his approved academic travel, his **accommodation expenses are fully covered and secured** by the University's sanctioned financial assistance. He has confirmed hotel reservations in Nancy, France for the entire duration of his stay.

This letter is issued upon his request to facilitate visa processing and confirm his accommodation arrangements during the conference.

**Place:** Hyderabad, India
**Date:** 25-02-2026
&nbsp;
&nbsp;
&nbsp;
*(Registrar / Dean / Director – Research)*
**Woxsen University**`,
      footerAddress: '**Campus Address:** Woxsen University, Kamkole, Sadasivpet, Sangareddy District, Hyderabad - 502345, Telangana, India.',
    }
  }
];

const WoxsenLetterheadGenerator = () => {
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
      <div className="w-full relative shrink-0">
        <div className="flex flex-col items-center justify-center w-full px-[20mm] pt-[15mm] pb-6">
          <div className="w-[198px] shrink-0 mb-4 self-end">
          <img src="https://woxsen.edu.in/uploads/l20241112111757.webp" alt="Woxsen Logo" className="w-full h-auto object-contain" />
        </div>
      </div>
      </div>
    );
  };

  const PageFooter = () => (
    <div className="w-full relative px-[20mm] pb-[15mm] mt-8 text-[#ff0000] text-[13px] font-sans text-center">
      <div className="w-full h-[1.5px] bg-[#ff0000] mb-2.5"></div>
      <div className="whitespace-pre-wrap prose-strong:font-bold prose-strong:text-[#ff0000]">
        <ReactMarkdown components={{ p: React.Fragment }}>{formData.footerAddress}</ReactMarkdown>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 0 !important;
          }
          body {
            background-color: white !important;
            margin: 0;
            padding: 0;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .print-content-container {
            width: 100% !important;
            max-width: none !important;
            margin: 0 !important;
            padding: 0 !important;
            box-shadow: none !important;
            border: none !important;
          }
          .page-container {
            min-height: 100vh;
          }
        }
        .watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0.05 !important;
          z-index: 0 !important;
          pointer-events: none;
          width: 50%;
        }
      `}</style>

      {/* Top Navigation */}
      <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm print:hidden">
        <div className="flex items-center gap-4">
          <a href="/woxsen" className="text-slate-500 hover:text-slate-800 transition-colors">
            ← Back
          </a>
          <div className="w-px h-6 bg-slate-200"></div>
          <h1 className="text-xl font-bold text-slate-800 flex items-center gap-3">
            <div className="w-8 h-8 bg-red-100 text-red-700 rounded-lg flex items-center justify-center">
              W
            </div>
            Woxsen Letterhead Generator
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleExportPDF}
            disabled={isExporting}
            className={`px-5 py-2.5 bg-red-700 hover:bg-red-800 text-white rounded-lg font-medium transition-all shadow-sm flex items-center gap-2 ${isExporting ? 'opacity-70 cursor-not-allowed' : ''}`}
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
          <button
            className={`flex-1 py-3 text-sm font-medium ${activeTab === 'form' ? 'text-red-700 border-b-2 border-red-700' : 'text-slate-500'}`}
            onClick={() => setActiveTab('form')}
          >
            Edit Details
          </button>
          <button
            className={`flex-1 py-3 text-sm font-medium ${activeTab === 'preview' ? 'text-red-700 border-b-2 border-red-700' : 'text-slate-500'}`}
            onClick={() => setActiveTab('preview')}
          >
            Preview Document
          </button>
        </div>

        {/* Left Form Sidebar */}
        <div className={`${activeTab === 'form' ? 'flex' : 'hidden'} md:flex w-full md:w-[400px] lg:w-[450px] bg-white border-r border-slate-200 flex-col h-full overflow-y-auto print:hidden z-10 shadow-[4px_0_24px_rgba(0,0,0,0.02)] relative`}>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-6 text-slate-800">
              <Settings2 className="w-5 h-5 text-red-700" />
              <h2 className="text-lg font-bold">Document Details</h2>
            </div>

            <div className="mb-6 bg-red-50 p-4 rounded-xl border border-red-100">
              <label className="flex items-center gap-2 text-sm font-semibold text-red-900 mb-2">
                <FileText className="w-4 h-4" />
                Quick Templates
              </label>
              <select 
                onChange={handleTemplateChange}
                className="w-full p-2.5 border border-red-200 rounded-lg outline-none transition-all bg-white text-sm text-slate-900 focus:ring-2 focus:ring-red-500 shadow-sm"
              >
                {templates.map(t => (
                  <option key={t.id} value={t.id}>{t.name}</option>
                ))}
              </select>
            </div>

            <div className="space-y-5">
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5 col-span-2 md:col-span-1">
                  <label className="text-sm font-semibold text-slate-700">Reference Number</label>
                  <input
                    type="text"
                    name="referenceNumber"
                    value={formData.referenceNumber}
                    onChange={handleChange}
                    className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all bg-slate-50 focus:bg-white text-sm text-slate-900"
                  />
                </div>
                <div className="space-y-1.5 col-span-2 md:col-span-1">
                  <label className="text-sm font-semibold text-slate-700">Date</label>
                  <input
                    type="text"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all bg-slate-50 focus:bg-white text-sm text-slate-900"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700">Document Title</label>
                <input
                  type="text"
                  name="documentTitle"
                  value={formData.documentTitle}
                  onChange={handleChange}
                  className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all bg-slate-50 focus:bg-white text-sm text-slate-900"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700">Body Content (Markdown)</label>
                <p className="text-xs text-slate-500">Everything else goes here (To, Subject, Salutation, Signature). Use **bold** where needed.</p>
                <textarea
                  name="bodyText"
                  value={formData.bodyText}
                  onChange={handleChange}
                  rows={15}
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all bg-slate-50 focus:bg-white text-sm text-slate-900 font-mono leading-relaxed resize-none mt-2"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700">Footer Address</label>
                <textarea
                  name="footerAddress"
                  value={formData.footerAddress}
                  onChange={handleChange}
                  rows={2}
                  className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all bg-slate-50 focus:bg-white text-sm text-slate-900 resize-none"
                />
              </div>

            </div>
          </div>
        </div>

        {/* Right Preview Area */}
        <div className={`${activeTab === 'preview' ? 'flex' : 'hidden'} md:flex flex-1 bg-slate-100 overflow-y-auto print:overflow-visible p-4 md:p-8 justify-center print:p-0 print:bg-white print:block print:!flex`}>
          
          <div className="w-full max-w-[210mm] bg-white shadow-[0_0_40px_rgba(0,0,0,0.1)] print:shadow-none print-content-container relative print:max-w-none page-container" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
            {/* Center Watermark */}
            <img 
              src="https://woxsen.edu.in/uploads/l20241112111757.webp" 
              alt="Watermark" 
              className="watermark" 
            />

            <table className="w-full relative z-10 h-full border-collapse border-spacing-0 table-fixed">
              <thead>
                <tr>
                  <td>
                    <PageHeader />
                  </td>
                </tr>
              </thead>

              <tbody className="h-full align-top">
                <tr>
                  <td className="align-top relative px-[20mm]">
                    <div className="h-full block min-h-[600px] relative text-black text-[13.5px] font-sans leading-relaxed">
                      
                      {(formData.referenceNumber || formData.date) && (
                        <div className="flex justify-between items-start mb-8 font-sans text-[14px]">
                          <div><ReactMarkdown components={{ p: React.Fragment }}>{formData.referenceNumber.replace(/\n/g, '  \n')}</ReactMarkdown></div>
                          <div><ReactMarkdown components={{ p: React.Fragment }}>{formData.date.replace(/\n/g, '  \n')}</ReactMarkdown></div>
                        </div>
                      )}

                      {formData.documentTitle && (
                        <div className="text-center mb-8 text-[17px] prose-strong:font-bold prose-strong:text-black">
                          <ReactMarkdown components={{ p: React.Fragment }}>{formData.documentTitle.replace(/\n/g, '  \n')}</ReactMarkdown>
                        </div>
                      )}

                      {formData.bodyText && (
                        <div className="mb-6 prose prose-p:mt-0 prose-p:mb-4 max-w-none leading-[1.6] prose-strong:font-bold prose-strong:text-black text-black text-[13.5px] text-left font-sans">
                          <ReactMarkdown remarkPlugins={[remarkGfm]}>{formData.bodyText.replace(/\n/g, '  \n')}</ReactMarkdown>
                        </div>
                      )}

                    </div>
                  </td>
                </tr>
              </tbody>

              <tfoot>
                <tr>
                  <td>
                    <PageFooter />
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WoxsenLetterheadGenerator;
