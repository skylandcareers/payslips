import React, { useState } from 'react';
import { Settings2, Download, FileText } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const templates = [
  {
    id: 'sanction',
    name: '1. Sanction Letter - Financial & Academic Leave Approval (AMP 2026)',
    data: {
      referenceNumber: 'PU/2026/PHD/EVEN&CONF/148',
      date: '22/09/2026',
      documentTitle: '**SANCTION LETTER**',
      bodyText: `To  
**Mr. SUDHEER KUMAR SHAPURAM**  
**Ph.D. Scholar, Department of Microbiology**  
**Student ID: PU24010850**

**Subject: Financial Sanction and Academic Leave Approval for International Symposium – France**

This is to certify that **Mr. SUDHEER KUMAR SHAPURAM**, holding **Student ID: PU24010850**, is a bonafide **Ph.D. Scholar in the Department of Microbiology** at **Palamuru University**, Mahabubnagar, Telangana, India.

The University hereby sanctions a **financial assistance of ₹1,25,000/- (Rupees One Lakh Twenty-Five Thousand Only)** in favor of Mr. SUDHEER KUMAR SHAPURAM to support his academic travel and related expenses for attending the **9th International Symposium on Antimicrobial Peptides (AMP 2026)** in **Besançon, France**.

The symposium is scheduled to be held from **18th November 2026 to 20th November 2026**, in **Besançon, France**.

He has been granted **leave** for the period from **16th November 2026 to 22nd November 2026** and is required to **return and resume his Ph.D. studies** at Palamuru University.

The above financial sanction and leave approval have been granted after due consideration. The University has **no objection** to his participation in the above-mentioned academic event.

This letter is issued at the request of the student for **visa and other official purposes**.

**Place:** Mahabubnagar, Telangana, India  
**Date:** 22/09/2026

&nbsp;
&nbsp;
&nbsp;
&nbsp;

*(Registrar / Director – Research)*  
**Palamuru University**`,
      isHTML: false,
    }
  },
  {
    id: 'noc',
    name: '2. No Objection Certificate (NOC) - AMP 2026, France',
    data: {
      referenceNumber: 'PU/2026/PHD/REG/115',
      date: '22/09/2026',
      documentTitle: '**NO OBJECTION CERTIFICATE (NOC)**',
      bodyText: `To  
**The Consulate General of France**  
**Mumbai, India**

**Subject: No Objection Certificate for Academic Symposium Attendance in France**

This is to certify that **Mr. SUDHEER KUMAR SHAPURAM** is a bonafide **Ph.D. Scholar** at the **Department of Microbiology, Palamuru University**.

He is pursuing his **Doctor of Philosophy (Ph.D.) in the Department of Microbiology**, with **Student ID: PU24010850** and **Passport No.: U9813918**. His doctoral research is related to the presentation titled **“Isolation and Characterization of Antimicrobial Peptide-Producing Bacteria from Agricultural Soil for the Control of Multidrug-Resistant Pathogens.”**

The University has **no objection to his travel to France** to attend the **9th International Symposium on Antimicrobial Peptides (AMP 2026)**, scheduled from **18th November – 20th November 2026** in **Besançon, France**. His participation is purely academic and will not affect his Ph.D. programme. He is expected to **resume his research at Palamuru University upon completion of the symposium**.

This certificate is issued at his request for **visa and official purposes**.

**Place:** Mahabubnagar, Telangana, India  
**Date:** 22/09/2026

&nbsp;
&nbsp;
&nbsp;
&nbsp;

*(Registrar / Director - Research)*  
**Palamuru University**`,
      isHTML: false,
    }
  },
  {
    id: 'bonafide',
    name: '3. Bonafide Student Certificate - Ph.D Scholar',
    data: {
      referenceNumber: 'PU/2026/PHD/REG/118',
      date: '22/09/2026',
      documentTitle: '**BONAFIDE CERTIFICATE**',
      bodyText: `**To Whomsoever It May Concern**

This is to certify that **Mr. SUDHEER KUMAR SHAPURAM**, bearing **Student ID: PU24010850** is a bonafide **Ph.D. Scholar in the Department of Microbiology** at **Palamuru University**.

He is a regular research scholar of the University and is currently in the **3rd year of his doctoral program** during the academic year **2026–2027**.

The student is provided **hostel accommodation within the University campus**, and his stay is officially recognized and permitted by the University for the duration of his Ph.D. program.

This bonafide certificate is issued upon his request for **official purposes**, including **conference participation, accommodation confirmation, visa processing, and other academic requirements.**

**Place:** Mahabubnagar, Telangana, India  
**Date:** 22/09/2026

&nbsp;
&nbsp;
&nbsp;
&nbsp;

*(Registrar / Director – Research)*  
**Palamuru University**`,
      isHTML: false,
    }
  },
  {
    id: 'hotel',
    name: '4. Hotel / Accommodation Confirmation - SUDHEER KUMAR',
    data: {
      referenceNumber: 'PU/2026/PHD/HOSTEL/108',
      date: '22/09/2026',
      documentTitle: '**ACCOMMODATION CONFIRMATION**',
      bodyText: `**To Whomsoever It May Concern**

This is to certify that **Mr. SUDHEER KUMAR SHAPURAM**, holding **Student ID: PU24010850**, is a bonafide Ph.D. Scholar in the Department of Microbiology at Palamuru University, Mahabubnagar, Telangana, India.

He is a regular research scholar of the University and is currently in the **3rd year of his doctoral program** during the academic year **2026–2027**.

This is to officially confirm that the student is provided with **hostel accommodation within the University campus**, and his stay is officially recognized and permitted by the University for the entire duration of his Ph.D. program.

This certificate is issued upon his request for official purposes, including visa processing for attending AMP 2026 (Besançon, France) and other academic requirements.

**Place:** Mahabubnagar, Telangana, India  
**Date:** 22/09/2026

&nbsp;
&nbsp;
&nbsp;
&nbsp;

*(Registrar / Director – Research)*  
**Palamuru University**`,
      isHTML: false,
    }
  },
  {
    id: 'receipt',
    name: '5. Fee Receipt (Student Copy) - SUDHEER KUMAR',
    data: {
      isHTML: true,
      referenceNumber: '',
      date: '',
      documentTitle: '',
      bodyText: `<div class="w-full text-[12px] font-sans text-black -mt-2">
  <div class="font-bold mb-1 text-[15px] text-center tracking-wide underline">HOSTEL FEE RECEIPT</div>
  <div class="text-center text-[11px] text-slate-600 mb-8 font-bold">(Student Copy)</div>
  
  <table class="w-full mb-6 table-fixed text-[12.5px]">
    <tbody>
      <tr class="h-7 align-top">
        <td class="w-[130px] font-semibold text-slate-700">Receipt No.</td>
        <td class="w-3">:</td>
        <td class="font-bold text-slate-900">PU/HOSTEL/2026-27/0912</td>
        <td class="w-[110px] font-semibold text-slate-700">Date</td>
        <td class="w-3">:</td>
        <td class="font-bold text-slate-900">01/06/2026</td>
      </tr>
      <tr class="h-7 align-top">
        <td class="font-semibold text-slate-700">Student Name</td>
        <td>:</td>
        <td class="font-bold uppercase text-slate-900">SUDHEER KUMAR SHAPURAM</td>
        <td class="font-semibold text-slate-700">Student ID No.</td>
        <td>:</td>
        <td class="font-bold text-slate-900">PU24010850</td>
      </tr>
      <tr class="h-7 align-top">
        <td class="font-semibold text-slate-700">Father/Guardian</td>
        <td>:</td>
        <td class="font-bold uppercase text-slate-900">SHAPURAM RAMULU</td>
        <td class="font-semibold text-slate-700">Academic Year</td>
        <td>:</td>
        <td class="font-bold text-slate-900">2026-27</td>
      </tr>
      <tr class="h-7 align-top">
        <td class="font-semibold text-slate-700">Course / Branch</td>
        <td>:</td>
        <td class="font-bold text-slate-900" colspan="4">Ph.D. Department of Microbiology</td>
      </tr>
      <tr class="h-7 align-top">
        <td class="font-semibold text-slate-700">Hostel / Block</td>
        <td>:</td>
        <td class="font-bold text-slate-900" colspan="4">Research Scholars Block - Room No. 201</td>
      </tr>
    </tbody>
  </table>

  <table class="w-full mb-6 text-[12.5px] border-collapse border border-black/30">
    <thead>
      <tr class="bg-slate-100">
        <th class="border border-black/30 px-3 py-2 text-left w-12">S.No</th>
        <th class="border border-black/30 px-3 py-2 text-left">Fee Particulars</th>
        <th class="border border-black/30 px-3 py-2 text-right w-32">Amount (₹)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-black/30 px-3 py-2 text-center">1</td>
        <td class="border border-black/30 px-3 py-2 font-medium">Hostel Establishment Fee (Annual)</td>
        <td class="border border-black/30 px-3 py-2 text-right font-bold">50,000.00</td>
      </tr>
      <tr>
        <td class="border border-black/30 px-3 py-2 text-center">2</td>
        <td class="border border-black/30 px-3 py-2 font-medium">Mess Advance</td>
        <td class="border border-black/30 px-3 py-2 text-right font-bold">55,000.00</td>
      </tr>
      <tr>
        <td class="border border-black/30 px-3 py-2 text-center">3</td>
        <td class="border border-black/30 px-3 py-2 font-medium">Hostel Caution Deposit (Refundable)</td>
        <td class="border border-black/30 px-3 py-2 text-right font-bold">5,000.00</td>
      </tr>
      <tr class="font-bold bg-slate-50">
        <td class="border border-black/30 px-3 py-2 text-right" colspan="2">Total Amount Received</td>
        <td class="border border-black/30 px-3 py-2 text-right text-[13px]">₹1,10,000.00</td>
      </tr>
    </tbody>
  </table>

  <div class="mb-10 font-bold italic text-[12.5px] text-slate-800">
    Amount in Words: Rupees One Lakh Ten Thousand Only
  </div>

  <div class="flex justify-between items-end mt-16 px-2">
    <div class="text-[11.5px] text-slate-700">
      <div class="font-bold text-slate-800 mb-1">Payment Details:</div>
      <div>Mode: Online Transfer (NEFT/RTGS)</div>
      <div>Transaction ID: SBIN4398197654</div>
      <div class="mt-3 italic text-[10px] text-slate-500">This is a computer-generated receipt.</div>
    </div>
    <div class="text-center">
      <div class="border-t-[1.5px] border-black/80 w-48 pt-1.5 font-bold text-[13px]">Authorized Signatory</div>
    </div>
  </div>
</div>`,
    }
  }
  ,
  {
    id: 'hod-recommendation',
    name: '6. HOD Recommendation Letter - SUDHEER KUMAR',
    data: {
      referenceNumber: '**F.No.** PU/MICRO/REC/2026/188',
      date: '**Date:** 22/09/2026',
      documentTitle: '**RECOMMENDATION LETTER**',
      bodyText: `**To,**
**The Visa Officer,**
**Consulate General of France**

**Subject: Recommendation Letter for Mr. Sudheer Kumar Shapuram**

Dear Sir/Madam,

I am writing in strong support of **Mr. SUDHEER KUMAR SHAPURAM**, a dedicated Ph.D. Scholar in the Department of Microbiology at Palamuru University. I have closely supervised his doctoral research, specifically his work on the *"Isolation and Characterization of Antimicrobial Peptide-Producing Bacteria from Agricultural Soil,"* which demonstrates significant scientific merit and high technical competence.

His research abstract has been officially accepted for presentation at the **9th International Symposium on Antimicrobial Peptides (AMP 2026)**, scheduled from **18th to 20th November 2026** in **Besançon, France**. Participating in this prestigious global symposium is highly beneficial for his academic progression and our department's ongoing research objectives.

He is a scholar of high moral character and integrity. I strongly recommend him for the issuance of a Schengen Visa. We are fully confident that he will strictly adhere to his travel itinerary and promptly return to India to resume his doctoral studies at our university.

Please feel free to contact my office if you require any additional information.

Sincerely,

&nbsp;
&nbsp;
&nbsp;
&nbsp;

*(Head of the Department)*  
**Department of Microbiology**  
**Palamuru University**`,
      isHTML: false,
    }
  }

];

const PalamuruLetterheadGenerator = () => {
  const [activeTab, setActiveTab] = useState<'form' | 'preview'>('form');
  const [isExporting, setIsExporting] = useState(false);
  const [formData, setFormData] = useState(templates[0].data);
  const [selectedTemplateId, setSelectedTemplateId] = useState(templates[0].id);

  const handleTemplateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const template = templates.find(t => t.id === e.target.value);
    if (template) { setFormData(template.data); setSelectedTemplateId(template.id); }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleExportPDF = () => {
    setIsExporting(true);
    setTimeout(() => { window.print(); setTimeout(() => setIsExporting(false), 1000); }, 100);
  };

  const PageHeader = () => {
    if (selectedTemplateId === 'receipt' || selectedTemplateId === 'hod-recommendation') {
      return (
    <div style={{ padding: '30px 40px 10px 40px', fontFamily: 'Arial, Helvetica, sans-serif' }}>
      <div className="flex items-center justify-center gap-7 pb-2">
        <div className="flex-shrink-0">
          <img src="/palamuru-logo.png" alt="Palamuru University Logo" className="w-[125px] h-[125px] object-contain" />
        </div>
        <div className="flex flex-col items-start justify-center pt-1">
          <h1 className="text-[28px] font-black text-[#444444] leading-none tracking-wider mb-2.5 uppercase" style={{ fontFamily: '"Arial Black", Arial, sans-serif', transform: 'scaleY(1.05)', transformOrigin: 'left' }}>
            PALAMURU UNIVERSITY
          </h1>
          <h2 className="text-[18px] font-semibold text-[#10549c] leading-none tracking-wide mb-2.5">
            Mahbubnagar, Telangana State - 509 001
          </h2>
          <h3 className="text-[18px] font-medium text-[#444444] leading-none tracking-wide">
            Accredited by NAAC with 'B' Grade
          </h3>
        </div>
      </div>
      <div className="w-full h-[1.5px] bg-[#444444] mt-3" />
    </div>
      );
    }
    return (

    <div className="w-full text-gray-900 pt-8 px-[15mm]" style={{ fontFamily: 'Verdana, Tahoma, sans-serif' }}>
      <div className="flex items-center justify-center gap-4 pb-2 w-full">
        <div className="flex-shrink-0 flex items-center">
          <img src="/palamuru-logo.png" alt="Palamuru University Logo" className="w-[115px] h-[115px] object-contain" />
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-[26px] font-[800] tracking-wide leading-tight">
            OFFICE OF THE REGISTRAR
          </h2>
          <h1 className="text-[26px] font-[800] tracking-wider leading-tight">
            PALAMURU UNIVERSITY
          </h1>
          <h3 className="text-[14px] font-bold leading-tight my-[2px]">
            (Accredited with Grade 'B' by NAAC)
          </h3>
          <h2 className="text-[26px] font-[900] tracking-widest leading-tight">
            MAHABUBNAGAR
          </h2>
        </div>
      </div>
      <div className="w-full border-b-[3px] border-black mt-1"></div>
      <div className="w-full border-b border-black mt-[2px]"></div>
    </div>

    );
  };

  const PageFooter = () => (

    <div className="w-full px-[15mm] pb-[12mm] mt-8 text-black" style={{ fontFamily: 'Verdana, Tahoma, sans-serif' }}>
      <div className="w-full border-b border-black mb-[1.5px]"></div>
      <div className="w-full border-b-[2.5px] border-black mb-1.5"></div>
      <div className="flex flex-col items-center text-[12px] text-gray-900">
        <div className="tracking-wide text-center">
          Administrative Building, Palamuru University Campus, Raichur Road, Bandameedipally, Mahabubnagar - Telangana State - 509001 :: E-mail: <span className="underline">registrar@palamuruuniversity.ac.in</span>
        </div>
        <div className="tracking-wide mt-0.5 flex items-center justify-center gap-2">
          <span>☎ : 08542-277144</span>
          <span>::</span>
          <span>📱 : +91 9676150158</span>
          <span>::</span>
          <span>🌐 www.palamuruuniversity.ac.in</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-50 to-blue-50/30 flex flex-col font-sans">
      <style>{`
        @media print {
          @page { size: A4; margin: 0 !important; }
          body { background-color: white !important; margin: 0; padding: 0; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          .print-content-container { width: 100% !important; max-width: none !important; margin: 0 !important; padding: 0 !important; box-shadow: none !important; border: none !important; }
          .page-container { min-height: 100vh; }
          .print\\:hidden { display: none !important; }
        }
      `}</style>

      {/* Nav */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-slate-200/60 px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm print:hidden">
        <div className="flex items-center gap-4">
          <a href="/palamuru" className="text-slate-500 hover:text-slate-800 transition-colors font-medium text-sm">← Back</a>
          <div className="w-px h-6 bg-slate-200" />
          <h1 className="text-xl font-bold text-slate-800 flex items-center gap-3">
            <div className="w-8 h-8 bg-[#b31b1b] text-white rounded-lg flex items-center justify-center shadow-md font-black text-sm">S</div>
            Palamuru University Letterhead
          </h1>
        </div>
        <button
          onClick={handleExportPDF}
          disabled={isExporting}
          className={`px-5 py-2.5 bg-[#b31b1b] hover:bg-[#800000] text-white rounded-xl font-medium transition-all shadow-md flex items-center gap-2 ${isExporting ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {isExporting ? (<><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Exporting...</>) : (<><Download className="w-4 h-4" />Export PDF</>)}
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden h-[calc(100vh-73px)] print:h-auto print:block">

        {/* Mobile tabs */}
        <div className="md:hidden flex bg-white border-b border-slate-200 w-full shrink-0 print:hidden">
          <button className={`flex-1 py-3 text-sm font-medium ${activeTab === 'form' ? 'text-[#b31b1b] border-b-2 border-[#b31b1b]' : 'text-slate-500'}`} onClick={() => setActiveTab('form')}>Edit Details</button>
          <button className={`flex-1 py-3 text-sm font-medium ${activeTab === 'preview' ? 'text-[#b31b1b] border-b-2 border-[#b31b1b]' : 'text-slate-500'}`} onClick={() => setActiveTab('preview')}>Preview Document</button>
        </div>

        {/* Sidebar */}
        <div className={`${activeTab === 'form' ? 'flex' : 'hidden'} md:flex w-full md:w-[400px] lg:w-[450px] bg-white/60 backdrop-blur-3xl border-r border-slate-200/60 flex-col h-full overflow-y-auto print:hidden z-10`}>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-6 text-slate-800">
              <Settings2 className="w-5 h-5 text-[#b31b1b]" />
              <h2 className="text-lg font-bold">Document Details</h2>
            </div>

            <div className="mb-6 bg-blue-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
              <label className="flex items-center gap-2 text-sm font-semibold text-blue-900 mb-3">
                <FileText className="w-4 h-4 text-[#b31b1b]" />Quick Templates
              </label>
              <select
                onChange={handleTemplateChange}
                className="w-full p-3 border border-blue-200 rounded-xl outline-none bg-white text-sm font-medium text-slate-800 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 shadow-sm appearance-none cursor-pointer"
                style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg xmlns%3D%22http%3A//www.w3.org/2000/svg%22 width%3D%22292.4%22 height%3D%22292.4%22%3E%3Cpath fill%3D%22%23003087%22 d%3D%22M287 69.4a17.6 17.6 0 0 0-13-5.4H18.4c-5 0-9.3 1.8-12.9 5.4A17.6 17.6 0 0 0 0 82.2c0 5 1.8 9.3 5.4 12.9l128 127.9c3.6 3.6 7.8 5.4 12.8 5.4s9.2-1.8 12.8-5.4L287 95c3.5-3.5 5.4-7.8 5.4-12.8 0-5-1.9-9.2-5.5-12.8z%22/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem top 50%', backgroundSize: '0.65rem auto' }}
              >
                {templates.map(t => (<option key={t.id} value={t.id}>{t.name}</option>))}
              </select>
            </div>

            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5 col-span-2 md:col-span-1">
                  <label className="text-sm font-semibold text-slate-700">Reference Number</label>
                  <input type="text" name="referenceNumber" value={formData.referenceNumber} onChange={handleChange} className="w-full p-3 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none bg-white text-sm text-slate-900 shadow-sm" />
                </div>
                <div className="space-y-1.5 col-span-2 md:col-span-1">
                  <label className="text-sm font-semibold text-slate-700">Date</label>
                  <input type="text" name="date" value={formData.date} onChange={handleChange} className="w-full p-3 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none bg-white text-sm text-slate-900 shadow-sm" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700">Document Title</label>
                <input type="text" name="documentTitle" value={formData.documentTitle} onChange={handleChange} className="w-full p-3 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none bg-white text-sm text-slate-900 shadow-sm" />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-slate-700">Body Content</label>
                  <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200">Markdown</span>
                </div>
                <textarea name="bodyText" value={formData.bodyText} onChange={handleChange} rows={15} className="w-full p-4 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none bg-white text-sm text-slate-800 font-mono leading-[1.5] resize-none mt-2 shadow-inner" />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700">Footer Address</label>
                <textarea name="footerNote" value={formData.footerNote} onChange={handleChange} rows={2} className="w-full p-3 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none bg-white text-sm text-slate-900 resize-none shadow-sm" />
              </div>
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className={`${activeTab === 'preview' ? 'flex' : 'hidden'} md:flex flex-1 bg-slate-100/50 overflow-y-auto print:overflow-visible p-4 md:p-8 justify-center print:p-0 print:bg-white print:block print:!flex`}>
          <div className="w-full max-w-[210mm] bg-white shadow-xl print:shadow-none print-content-container print:max-w-none page-container relative overflow-hidden" style={{ fontFamily: 'Verdana, Tahoma, sans-serif' }}>
            {/* Background Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.08]">
              <img src="/palamuru-logo.png" alt="Watermark" className="w-[450px] h-[450px] object-contain" />
            </div>
            <table className="w-full h-full border-collapse border-spacing-0 table-fixed p-4 relative z-10">
              <thead><tr><td><PageHeader /></td></tr></thead>
              <tbody className="h-full align-top">
                <tr>
                  <td className="align-top px-[15mm] pt-6">
                    <div className="min-h-[600px] text-black text-[13.5px] font-sans leading-[1.5]">

                      {(formData.referenceNumber || formData.date) && (
                        <div className="flex justify-between items-start mb-10 text-[13.5px] font-bold" style={{ fontFamily: 'Verdana, Tahoma, sans-serif' }}>
                          <div><ReactMarkdown components={{ p: React.Fragment }}>{formData.referenceNumber.replace(/\n/g, '  \n')}</ReactMarkdown></div>
                          <div><ReactMarkdown components={{ p: React.Fragment }}>{formData.date.replace(/\n/g, '  \n')}</ReactMarkdown></div>
                        </div>
                      )}

                      {formData.documentTitle && (
                        <div className="text-center mb-8 text-[17px] underline font-bold">
                          <ReactMarkdown components={{ p: React.Fragment }}>{formData.documentTitle.replace(/\n/g, '  \n')}</ReactMarkdown>
                        </div>
                      )}

                      {formData.bodyText && (
                        <div className="mb-6 prose prose-p:mt-0 prose-p:mb-[0.65rem] max-w-none leading-[1.5] prose-strong:font-bold prose-strong:text-black text-black text-[14.5px] text-justify" style={{ fontFamily: 'Verdana, Tahoma, sans-serif' }}>
                          {(formData as { isHTML?: boolean }).isHTML ? (
                            <div dangerouslySetInnerHTML={{ __html: formData.bodyText }} />
                          ) : (
                            <div>
                              {(() => {
                                const sigMatch = formData.bodyText.match(/\n\s*\&nbsp;\s*\n[\s\S]*?\*\((Registrar|Head|Dean)/);
                                if (sigMatch) {
                                  const splitIndex = sigMatch.index;
                                  const mainBody = formData.bodyText.substring(0, splitIndex);
                                  const signature = formData.bodyText.substring(splitIndex).replace(/\n\s*\&nbsp;\s*\n[\s\S]*?\*\((Registrar|Head|Dean)/, '*($1'); // Clean up the raw spacing

                                  return (
                                    <>
                                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{mainBody.replace(/\n/g, '  \n')}</ReactMarkdown>
                                      <div className="flex justify-end mt-16">
                                        <div className="text-center">
                                          <ReactMarkdown remarkPlugins={[remarkGfm]}>{signature.replace(/\n/g, '  \n')}</ReactMarkdown>
                                        </div>
                                      </div>
                                    </>
                                  );
                                }
                                return <ReactMarkdown remarkPlugins={[remarkGfm]}>{formData.bodyText.replace(/\n/g, '  \n')}</ReactMarkdown>;
                              })()}
                            </div>
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

export default PalamuruLetterheadGenerator;
