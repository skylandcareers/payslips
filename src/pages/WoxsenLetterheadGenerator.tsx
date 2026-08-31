import React, { useState } from 'react';
import { Settings2, Download, Printer, FileText } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const templates = [
  {
    id: 'sanction',
    name: '1. Sanction Letter - Financial & Academic Leave Approval (BIOSPAIN 2026)',
    data: {
      referenceNumber: 'WOU/2026/PHD/EVEN&CONF/135',
      date: '21/08/2026',
      documentTitle: '**SANCTION LETTER**',
      bodyText: `To  
**Mr. DINESH KUMAR MUSKU**  
**Ph.D. Scholar, School of Biotechnology**  
**Student ID: 24WU02647887**

**Subject: Financial Sanction and Academic Leave Approval for International Conference – Spain**

This is to certify that **Mr. DINESH KUMAR MUSKU**, holding **Student ID.: 24WU02647887**, is a bonafide **Ph.D. Scholar in the School of Biotechnology** at **Woxsen University**, Hyderabad, India.

The University hereby sanctions a **financial assistance of ₹2,10,000/- (Rupees Two Lakhs Ten Thousand Only)** in favor of Mr. Dinesh Kumar Musku to support his academic travel and related expenses for attending the **BIOSPAIN 2026 Conference** in **Spain**.

The conference is scheduled to be held from **September 29, 2026, to October 1, 2026**, in **Bilbao, Spain**.

He has been granted **leave** for the period from **27th September 2026 to 5th October 2026** and is required to **return and resume his Ph.D. studies** at Woxsen University.

The above financial sanction and leave approval have been granted after due consideration. The University has **no objection** to his participation in the above-mentioned academic event.

This letter is issued at the request of the student for **visa and other official purposes**.

**Place:** Hyderabad, India  
**Date:** 21-08-2026

&nbsp;
&nbsp;
&nbsp;
&nbsp;

*(Registrar / Dean / Director – Research)*  
**Woxsen University**`,
      footerAddress: 'Campus Address:Woxsen University, Kamkole, Sadasivpet, Sangareddy District, Hyderabad - 502345, Telangana, India.',
    }
  },
  {
    id: 'noc',
    name: '2. No Objection Certificate (NOC) - BIOSPAIN 2026, Spain',
    data: {
      referenceNumber: 'WOU/2026/PHD/REG/103',
      date: '21/08/2026',
      documentTitle: '**NO OBJECTION CERTIFICATE (NOC)**',
      bodyText: `To  
**The Consulate General of Spain**  
**Mumbai, India**

**Subject: No Objection Certificate for Academic Conference Attendance in Spain**

This is to certify that **Mr. DINESH KUMAR MUSKU** is a bonafide **Ph.D. Scholar** at the **School of Biotechnology, Woxsen University**.

He is pursuing his **Doctor of Philosophy (Ph.D.) in Biotechnology**, with **Admission No.: 24WU02647887** and **Passport No.: Y5326556**. His doctoral research is related to the poster presentation titled **“Advanced Biotechnological Applications in Crop Genetics and Biochemical Engineering.”**

The University has **no objection to his travel to Spain** to attend the **BIOSPAIN 2026 Conference**, scheduled from **29 September – 01 October 2026** in **Bilbao, Spain**. His participation is purely academic and will not affect his Ph.D. programme. He is expected to **resume his research at Woxsen University upon completion of the conference**.

This certificate is issued at his request for **visa and official purposes**.

**Place:** Hyderabad, India  
**Date:** 21-08-2026

&nbsp;
&nbsp;
&nbsp;
&nbsp;

*(Registrar / Dean)*  
**Woxsen University**`,
      footerAddress: 'Campus Address:Woxsen University, Kamkole, Sadasivpet, Sangareddy District, Hyderabad - 502345, Telangana, India.',
    }
  },
  {
    id: 'bonafide',
    name: '3. Bonafide Student Certificate - Ph.D Scholar',
    data: {
      referenceNumber: 'WOU/2026/PHD/REG/118',
      date: '21/08/2026',
      documentTitle: '**BONAFIDE CERTIFICATE**',
      bodyText: `**To Whomsoever It May Concern**

This is to certify that **Mr. DINESH KUMAR MUSKU**, bearing **Admission No.: 24WU02647887** is a bonafide **Ph.D. Scholar in the School of Biotechnology** at **Woxsen University**.

He is a regular research scholar of the University and is currently in the **3rd year of his doctoral program** during the academic year **2026–2027**.

The student is provided **hostel accommodation within the University campus**, and his stay is officially recognized and permitted by the University for the duration of his Ph.D. program.

This bonafide certificate is issued upon his request for **official purposes**, including **conference participation, accommodation confirmation, visa processing, and other academic requirements.**

**Place:** Hyderabad, India  
**Date:** 21-08-2026

&nbsp;
&nbsp;
&nbsp;
&nbsp;

*(Registrar / Dean / Director – Research)*  
**Woxsen University**`,
      footerAddress: 'Campus Address:Woxsen University, Kamkole, Sadasivpet, Sangareddy District, Hyderabad - 502345, Telangana, India.',
    }
  },
  {
    id: 'hotel',
    name: 'Hotel / Accommodation Confirmation - Dinesh Kumar Musku',
    data: {
      referenceNumber: 'WOU/2026/PHD/HOSTEL/108',
      date: '21/08/2026',
      documentTitle: '**ACCOMMODATION CONFIRMATION**',
      bodyText: `**To Whomsoever It May Concern**

This is to certify that **Mr. DINESH KUMAR MUSKU**, holding **Admission No.: 24WU02647887**, is a bonafide Ph.D. Scholar in the School of Biotechnology at Woxsen University, Hyderabad, India.

He is a regular research scholar of the University and is currently in the **3rd year of his doctoral program** during the academic year **2026–2027**.

This is to officially confirm that the student is provided with **hostel accommodation within the University campus**, and his stay is officially recognized and permitted by the University for the entire duration of his Ph.D. program.

This certificate is issued upon his request for official purposes, including visa processing for attending BIOSPAIN 2026 (Bilbao, Spain) and other academic requirements.

**Place:** Hyderabad, India  
**Date:** 21-08-2026

&nbsp;
&nbsp;
&nbsp;
&nbsp;

*(Registrar / Dean / Director – Research)*  
**Woxsen University**`,
      footerAddress: 'Campus Address:Woxsen University, Kamkole, Sadasivpet, Sangareddy District, Hyderabad - 502345, Telangana, India.',
    }
  },
  {
    id: 'receipt',
    name: 'Fee Receipt (Student Copy) - Dinesh Kumar Musku',
    data: {
      isHTML: true,
      referenceNumber: '',
      date: '',
      documentTitle: '',
      bodyText: `<div class="w-full text-[12px] font-sans text-black -mt-6">
  <div class="font-semibold mb-1 text-[13px]">Hostel Fee Receipt (Student Copy)</div>
  <div class="border-b-[1.5px] border-dashed border-black/70 mb-2"></div>
  
  <table class="w-full mb-3 table-fixed">
    <tbody>
      <tr class="h-6 align-top">
        <td class="w-[100px]">Receipt No.</td>
        <td class="w-3">:</td>
        <td class="font-bold">WU/2026-2027/2589</td>
        <td class="w-[100px]">Receipt Date</td>
        <td class="w-3">:</td>
        <td>June 12, 2026</td>
      </tr>
      <tr class="h-6 align-top">
        <td>Student Name</td>
        <td>:</td>
        <td class="font-bold">DINESH KUMAR MUSKU</td>
        <td>Student UID</td>
        <td>:</td>
        <td>24WU02647887</td>
      </tr>
      <tr class="h-6 align-top">
        <td>Class</td>
        <td>:</td>
        <td class="font-bold">Ph.D.</td>
        <td>Father / Guardian</td>
        <td>:</td>
        <td class="font-bold">NARSAIAH MUSKU</td>
      </tr>
    </tbody>
  </table>

  <table class="w-full border-collapse border-[1.5px] border-black mb-2">
    <thead>
      <tr class="bg-[#d9edf7] border-b-[1.5px] border-black text-[12px]">
        <th class="border-r-[1.5px] border-black p-1.5 text-center w-14 font-bold">S No.</th>
        <th class="border-r-[1.5px] border-black p-1.5 text-center font-bold">Particulars</th>
        <th class="p-1.5 text-center w-40 font-bold">Total (in Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border-r-[1.5px] border-black p-1.5 text-right font-normal">1</td>
        <td class="border-r-[1.5px] border-black p-1.5 font-normal">University Hostel Fee </td>
        <td class="p-1.5 text-right font-normal">1,05,000.00</td>
      </tr>
      <tr class="border-t-[1.5px] border-black">
        <td colspan="2" class="border-r-[1.5px] border-black p-1.5 text-center">Total Amount</td>
        <td class="p-1.5 text-right font-normal">1,05,000.00</td>
      </tr>
    </tbody>
  </table>
  
  <div class="mt-2 text-[12px]">Amt. in words: Rupees One Lakh Five Thousand Only</div>
  
  <div class="border-b-[1.5px] border-dashed border-black/70 mt-[40px]"></div>
</div>`,
      footerAddress: '',
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

  const PageFooter = () => {
    if (!formData.footerAddress) return null;
    return (
      <div className="w-full relative px-[20mm] pb-[15mm] mt-8 text-[#ff0000] text-[13px] font-sans text-center">
        <div className="w-full h-[1.5px] bg-[#ff0000] mb-2.5"></div>
        <div className="whitespace-pre-wrap prose-strong:font-bold prose-strong:text-[#ff0000]">
          <ReactMarkdown components={{ p: React.Fragment }}>{formData.footerAddress}</ReactMarkdown>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-50 to-slate-100/80 flex flex-col font-sans selection:bg-red-500/20 selection:text-red-900">
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
      <div className="bg-white/80 backdrop-blur-xl border-b border-slate-200/60 px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-[0_4px_30px_rgba(0,0,0,0.03)] print:hidden">
        <div className="flex items-center gap-4">
          <a href="/woxsen" className="text-slate-500 hover:text-slate-800 transition-colors font-medium text-sm flex items-center gap-1">
            ← Back
          </a>
          <div className="w-px h-6 bg-slate-200"></div>
          <h1 className="text-xl font-bold text-slate-800 flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-tr from-red-700 to-red-500 text-white rounded-lg flex items-center justify-center shadow-md ring-4 ring-red-50">
              W
            </div>
            Woxsen Letterhead Generator
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleExportPDF}
            disabled={isExporting}
            className={`px-5 py-2.5 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700 text-white rounded-xl font-medium transition-all shadow-[0_4px_14px_0_rgba(220,38,38,0.25)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.23)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 ${isExporting ? 'opacity-70 cursor-not-allowed transform-none hover:shadow-none' : ''}`}
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
        <div className={`${activeTab === 'form' ? 'flex' : 'hidden'} md:flex w-full md:w-[400px] lg:w-[450px] bg-white/60 backdrop-blur-3xl border-r border-slate-200/60 flex-col h-full overflow-y-auto print:hidden z-10 shadow-[4px_0_24px_rgba(0,0,0,0.02)] relative`}>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-6 text-slate-800">
              <Settings2 className="w-5 h-5 text-red-600" />
              <h2 className="text-lg font-bold">Document Details</h2>
            </div>

            <div className="mb-6 bg-gradient-to-br from-red-50/50 to-red-50 p-5 rounded-2xl border border-red-100/60 shadow-sm">
              <label className="flex items-center gap-2 text-sm font-semibold text-red-900 mb-3">
                <FileText className="w-4 h-4 text-red-600" />
                Quick Templates
              </label>
              <select
                onChange={handleTemplateChange}
                className="w-full p-3 border border-red-200/80 rounded-xl outline-none transition-all bg-white text-sm font-medium text-slate-800 hover:border-red-300 focus:ring-4 focus:ring-red-500/10 focus:border-red-500 shadow-sm appearance-none cursor-pointer"
                style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23b91c1c%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem top 50%', backgroundSize: '0.65rem auto' }}
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
                    className="w-full p-3 border border-slate-200/60 rounded-xl focus:ring-4 focus:ring-red-500/10 focus:border-red-500 hover:border-slate-300 outline-none transition-all bg-white text-sm text-slate-900 shadow-sm placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-1.5 col-span-2 md:col-span-1">
                  <label className="text-sm font-semibold text-slate-700">Date</label>
                  <input
                    type="text"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full p-3 border border-slate-200/60 rounded-xl focus:ring-4 focus:ring-red-500/10 focus:border-red-500 hover:border-slate-300 outline-none transition-all bg-white text-sm text-slate-900 shadow-sm placeholder:text-slate-400"
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
                  className="w-full p-3 border border-slate-200/60 rounded-xl focus:ring-4 focus:ring-red-500/10 focus:border-red-500 hover:border-slate-300 outline-none transition-all bg-white text-sm text-slate-900 shadow-sm placeholder:text-slate-400"
                />
              </div>

              <div className="space-y-1.5 group">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-slate-700">Body Content</label>
                  <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200">Markdown</span>
                </div>
                <p className="text-xs text-slate-500 mb-2">Everything else goes here (To, Subject, Salutation, Signature). Use **bold** where needed.</p>
                <textarea
                  name="bodyText"
                  value={formData.bodyText}
                  onChange={handleChange}
                  rows={15}
                  className="w-full p-4 border border-slate-200/60 rounded-xl focus:ring-4 focus:ring-red-500/10 focus:border-red-500 hover:border-slate-300 outline-none transition-all bg-white text-sm text-slate-800 font-mono leading-[1.5] resize-none mt-2 shadow-inner placeholder:text-slate-300"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700">Footer Address</label>
                <textarea
                  name="footerAddress"
                  value={formData.footerAddress}
                  onChange={handleChange}
                  rows={2}
                  className="w-full p-3 border border-slate-200/60 rounded-xl focus:ring-4 focus:ring-red-500/10 focus:border-red-500 hover:border-slate-300 outline-none transition-all bg-white text-sm text-slate-900 resize-none shadow-sm placeholder:text-slate-400"
                />
              </div>

            </div>
          </div>
        </div>

        {/* Right Preview Area */}
        <div className={`${activeTab === 'preview' ? 'flex' : 'hidden'} md:flex flex-1 bg-slate-100/50 overflow-y-auto print:overflow-visible p-4 md:p-8 justify-center print:p-0 print:bg-white print:block print:!flex relative`}>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 pointer-events-none print:hidden"></div>

          <div className="w-full max-w-[210mm] bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1),0_0_20px_rgba(0,0,0,0.02)] print:shadow-none print-content-container relative print:max-w-none page-container transition-transform duration-300 hover:scale-[1.002]" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
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
                    <div className="h-full block min-h-[600px] relative text-black text-[13.5px] font-sans leading-[1.5]">

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
                        <div className="mb-6 prose prose-p:mt-0 prose-p:mb-[0.65rem] max-w-none leading-[1.5] prose-strong:font-bold prose-strong:text-black text-black text-[13.5px] text-left font-sans">
                          {(formData as { isHTML?: boolean }).isHTML ? (
                            <div dangerouslySetInnerHTML={{ __html: formData.bodyText }} />
                          ) : (
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{formData.bodyText.replace(/\n/g, '  \n')}</ReactMarkdown>
                          )}
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
