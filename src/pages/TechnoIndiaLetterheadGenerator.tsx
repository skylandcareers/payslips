import React, { useState } from 'react';
import { Settings2, Download, FileText, ArrowLeft, Type, Files } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const fontOptions = [
  { label: 'Times New Roman (Official University Serif)', value: "'Times New Roman', Times, 'Liberation Serif', serif" },
  { label: 'Georgia (Executive Classic Serif)', value: "Georgia, 'Times New Roman', serif" },
  { label: 'Garamond / Cambria (Academic Editorial Serif)', value: "Garamond, Cambria, 'Times New Roman', serif" },
  { label: 'Arial / Calibri (Clean Executive Sans)', value: "Arial, Calibri, 'Helvetica Neue', sans-serif" },
];

const templates = [
  {
    id: 'sanction',
    name: '1. Sanction Letter - Financial & Academic Leave Approval (Nancy, France 2026)',
    data: {
      referenceNumber: 'TIU/2026/PHD/BIOTECH/SAN/135',
      date: '25/08/2026',
      documentTitle: '**SANCTION LETTER**',
      bodyText: `To  
**Mr. TUSHAR DEBNATH**  
**Ph.D. Scholar, Department of Biotechnology**  
**Techno India University, West Bengal**

**Subject: Financial Sanction and Academic Leave Approval for International Conference – France**

This is to certify that **Mr. TUSHAR DEBNATH**, holding **Admission No.: 24TIUBIO1245** and **Passport No.: S1148115**, Son of **Mr. Sagar Debnath**, is a bonafide **3rd-Year Ph.D. Scholar in the Department of Biotechnology** at **Techno India University**, Kolkata, West Bengal, India.

The University hereby sanctions a **financial assistance of ₹2,10,000/- (Rupees Two Lakhs Ten Thousand Only)** in favor of Mr. Tushar Debnath to support his academic travel, registration, and related research expenses for attending and presenting his research poster titled **“Plant-Derived Bioactive Molecules for Sustainable Crop Production and Climate-Resilient Agriculture”** at the **3rd International Conference on Biomolecules** in **Nancy, France**.

The conference is organized by **Université de Lorraine** and the regional research network **"The One Bioeconomy"**, in technical collaboration with the **Bioencapsulation Research Group (BRG)**, scheduled to be held from **September 16–18, 2026**, in **Nancy, France**.

He has been granted **leave** for the period from **14th September 2026 to 22nd September 2026** and is required to **return and resume his Ph.D. research** at Techno India University immediately upon completion of the conference.

The above financial sanction and leave approval have been granted after due consideration. The University has **no objection** to his participation in the above-mentioned academic event.

This letter is issued at the request of the student for **visa processing and official university records**.

**Best Regards,**

&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  

**Prof. (Dr.) Sujoy Biswas**  
**Registrar & Director**  
**Techno India University, West Bengal**`,
      footerAddress: 'Campus Address:Techno India University, EM-4, Sector V, Salt Lake, Kolkata - 700091, West Bengal, India  \nPhone: +91 8125588816 • www.technoindiauniversity.ac.in',
    }
  },
  {
    id: 'noc',
    name: '2. No Objection Certificate (NOC) & Leave Approval - Nancy, France 2026',
    data: {
      referenceNumber: 'TIU/2026/PHD/REG/NOC/103',
      date: '25/08/2026',
      documentTitle: '**NO OBJECTION CERTIFICATE & LEAVE APPROVAL**',
      bodyText: `To  
**The Consulate General of France**  
**Kolkata, India**

**Subject: No Objection Certificate and Leave Approval for International Conference in France**

This is to certify that **Mr. TUSHAR DEBNATH** is a bonafide **3rd-Year Ph.D. Scholar** at the **Department of Biotechnology, Techno India University, West Bengal**.

He is pursuing his **Doctor of Philosophy (Ph.D.) in Biotechnology**, with **Admission No.: 24TIUBIO1245** and **Passport No.: S1148115**, Son of **Mr. Sagar Debnath**. His doctoral research is related to the poster contribution titled **“Plant-Derived Bioactive Molecules for Sustainable Crop Production and Climate-Resilient Agriculture.”**

The University has **no objection to his travel to France** to attend and present his research poster at the **3rd International Conference on Biomolecules**, organized by **Université de Lorraine** and **Bioencapsulation Research Group (BRG)**, scheduled from **16th September to 18th September 2026** in **Nancy, France**.

The University **approved his Leave** for the period from **14th September 2026 to 22nd September 2026** to enable his travel and participation. His participation is purely academic and will not affect his Ph.D. programme. He is expected to **resume his doctoral research at Techno India University upon completion of the conference**.

This certificate is issued at his request for **Schengen Visa processing and official purposes**.

**Best Regards,**

&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  

**Prof. (Dr.) Sujoy Biswas**  
**Registrar & Director**  
**Techno India University, West Bengal**`,
      footerAddress: 'Campus Address:Techno India University, EM-4, Sector V, Salt Lake, Kolkata - 700091, West Bengal, India  \nPhone: +91 8125588816 • www.technoindiauniversity.ac.in',
    }
  },
  {
    id: 'bonafide',
    name: '3. Bonafide Student Certificate - Ph.D Scholar',
    data: {
      referenceNumber: 'TIU/2026/PHD/REG/BON/118',
      date: '25/08/2026',
      documentTitle: '**BONAFIDE CERTIFICATE**',
      bodyText: `**To Whomsoever It May Concern**

This is to certify that **Mr. TUSHAR DEBNATH**, Son of **Mr. Sagar Debnath**, bearing **Admission No.: 24TIUBIO1245** and **Passport No.: S1148115**, is a bonafide **Ph.D. Scholar in the Department of Biotechnology** at **Techno India University, West Bengal**.

He is a regular research scholar of the University and is currently in the **3rd year of his doctoral program** during the academic year **2026–2027**.

The student is provided **hostel accommodation within the University campus**, and his stay is officially recognized and permitted by the University for the duration of his Ph.D. program.

This bonafide certificate is issued upon his request for **official purposes**, including **conference participation, accommodation confirmation, visa processing, and other academic requirements.**

**Best Regards,**

&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  

**Prof. (Dr.) Sujoy Biswas**  
**Registrar & Director**  
**Techno India University, West Bengal**`,
      footerAddress: 'Campus Address:Techno India University, EM-4, Sector V, Salt Lake, Kolkata - 700091, West Bengal, India  \nPhone: +91 8125588816 • www.technoindiauniversity.ac.in',
    }
  },
  {
    id: 'recommendation',
    name: '4. Recommendation Certificate (Department of Biotechnology)',
    data: {
      referenceNumber: 'TIU/2026/BIOTECH/REC/045',
      date: '25/08/2026',
      documentTitle: '**RECOMMENDATION LETTER**',
      bodyText: `**To Whomsoever It May Concern**

This is to certify that **Mr. TUSHAR DEBNATH**, Son of **Mr. Sagar Debnath** (Admission No.: **24TIUBIO1245**, Passport No.: **S1148115**), is a 3rd-Year Ph.D. Scholar in the **Department of Biotechnology** at **Techno India University, West Bengal**.

During his Ph.D. research tenure, Mr. Debnath has demonstrated exceptional research aptitude, analytical capability, and technical proficiency in advanced biotechnology, plant biostimulants, and bioactive molecules (Research Title: **“Plant-Derived Bioactive Molecules for Sustainable Crop Production and Climate-Resilient Agriculture”**).

He is dedicated, diligent, and maintains high standards of academic integrity and scientific rigor.

I have no hesitation in recommending **Mr. Tushar Debnath** for academic research opportunities, international fellowship programs, conference presentations, or professional endeavors in biotechnology.

**Best Regards,**

&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  

**Dr. Debalina Mukherjee, Ph.D**  
**Head & Professor, Department of Biotechnology**  
**Techno India University, West Bengal**`,
      footerAddress: 'Campus Address:Techno India University, EM-4, Sector V, Salt Lake, Kolkata - 700091, West Bengal, India  \nPhone: +91 8125588816 • www.technoindiauniversity.ac.in',
    }
  },
  {
    id: 'hotel',
    name: '5. Hostel / Accommodation Confirmation Certificate',
    data: {
      referenceNumber: 'TIU/2026/PHD/HOSTEL/108',
      date: '25/08/2026',
      documentTitle: '**ACCOMMODATION CONFIRMATION**',
      bodyText: `**To Whomsoever It May Concern**

This is to certify that **Mr. TUSHAR DEBNATH**, Son of **Mr. Sagar Debnath** (Admission No.: **24TIUBIO1245**, Passport No.: **S1148115**), is a bonafide Ph.D. Scholar in the Department of Biotechnology at Techno India University, West Bengal, India.

He is a regular research scholar of the University and is currently in the **3rd year of his doctoral program** during the academic year **2026–2027**.

This is to officially confirm that the student is provided with **hostel accommodation within the University campus**, and his stay is officially recognized and permitted by the University for the entire duration of his Ph.D. program.

This certificate is issued upon his request for official purposes, including visa processing for attending the **3rd International Conference on Biomolecules** (September 16–18, 2026 in Nancy, France) organized by Université de Lorraine and other academic requirements.

**Best Regards,**

&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  

**Prof. (Dr.) Sujoy Biswas**  
**Registrar & Director**  
**Techno India University, West Bengal**`,
      footerAddress: 'Campus Address:Techno India University, EM-4, Sector V, Salt Lake, Kolkata - 700091, West Bengal, India  \nPhone: +91 8125588816 • www.technoindiauniversity.ac.in',
    }
  },
  {
    id: 'receipt',
    name: '6. Fee Receipt (Student Copy) - Tushar Debnath',
    data: {
      isHTML: true,
      referenceNumber: '',
      date: '',
      documentTitle: '',
      bodyText: `<div class="w-full text-[12px] font-sans text-black mt-2">
  <div class="font-semibold mb-2 text-[13.5px] pt-1">Hostel Fee Receipt (Student Copy)</div>
  <div class="border-b-[1.5px] border-dashed border-black/70 mb-3"></div>
  
  <table class="w-full mb-3 table-fixed">
    <tbody>
      <tr class="h-6 align-top">
        <td class="w-[100px]">Receipt No.</td>
        <td class="w-3">:</td>
        <td class="font-bold">TIU/2026-2027/HST-2589</td>
        <td class="w-[100px]">Receipt Date</td>
        <td class="w-3">:</td>
        <td>August 24, 2026</td>
      </tr>
      <tr class="h-6 align-top">
        <td>Student Name</td>
        <td>:</td>
        <td class="font-bold">TUSHAR DEBNATH</td>
        <td>Admission No.</td>
        <td>:</td>
        <td class="font-bold">24TIUBIO1245</td>
      </tr>
      <tr class="h-6 align-top">
        <td>Class / Stream</td>
        <td>:</td>
        <td class="font-bold">Ph.D. (Biotechnology, 3rd Year)</td>
        <td>Father / Guardian</td>
        <td>:</td>
        <td class="font-bold">SAGAR DEBNATH</td>
      </tr>
    </tbody>
  </table>

  <table class="w-full border-collapse border-[1.5px] border-black mb-2">
    <thead>
      <tr class="bg-[#fde8e8] border-b-[1.5px] border-black text-[12px]">
        <th class="border-r-[1.5px] border-black p-1.5 text-center w-14 font-bold">S No.</th>
        <th class="border-r-[1.5px] border-black p-1.5 text-center font-bold">Particulars</th>
        <th class="p-1.5 text-center w-40 font-bold">Total (in Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border-r-[1.5px] border-black p-1.5 text-right font-normal">1</td>
        <td class="border-r-[1.5px] border-black p-1.5 font-normal">University Hostel Accommodation & Mess Fee (Autumn 2026)</td>
        <td class="p-1.5 text-right font-normal">1,05,000.00</td>
      </tr>
      <tr class="border-t-[1.5px] border-black">
        <td colspan="2" class="border-r-[1.5px] border-black p-1.5 text-center font-bold">Total Amount Paid</td>
        <td class="p-1.5 text-right font-bold">1,05,000.00</td>
      </tr>
    </tbody>
  </table>
  
  <div class="mt-2 text-[12px] font-semibold">Amt. in words: Rupees One Lakh Five Thousand Only</div>
  <div class="mt-1 text-[11px] text-gray-700">Status: ALL HOSTEL DUES CLEARED for the Academic Session 2026-2027.</div>
  
  <div class="border-b-[1.5px] border-dashed border-black/70 mt-[30px]"></div>
</div>`,
      footerAddress: 'Campus Address:Techno India University, EM-4, Sector V, Salt Lake, Kolkata - 700091, West Bengal, India  \nPhone: +91 8125588816 • www.technoindiauniversity.ac.in',
    }
  }
];

const TechnoIndiaLetterheadGenerator = () => {
  const [activeTab, setActiveTab] = useState<'form' | 'preview'>('form');
  const [isExporting, setIsExporting] = useState(false);
  const [selectedFont, setSelectedFont] = useState(fontOptions[0].value);
  const [admissionNo, setAdmissionNo] = useState('24TIUBIO1245');
  const [selectedTemplateId, setSelectedTemplateId] = useState('sanction');
  const [formData, setFormData] = useState(templates[0].data);

  const handleTemplateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const tId = e.target.value;
    setSelectedTemplateId(tId);
    const template = templates.find(t => t.id === tId);
    if (template) {
      setFormData(template.data);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdmissionNoChange = (val: string) => {
    setAdmissionNo(val);
    if (formData.bodyText) {
      const updatedText = formData.bodyText.replace(/24TIUBIO\d+/g, val);
      setFormData(prev => ({ ...prev, bodyText: updatedText }));
    }
  };

  const generateNewAdmissionNo = () => {
    const randomSeq = Math.floor(1000 + Math.random() * 9000);
    const newId = `24TIUBIO${randomSeq}`;
    handleAdmissionNoChange(newId);
  };

  const [isExportingAll, setIsExportingAll] = useState(false);

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

  const PageHeader = () => {
    return (
      <div className="w-full relative shrink-0">
        <div className="flex flex-col items-center justify-center w-full px-[18mm] pt-[9mm] pb-3">
          <div className="w-[82%] shrink-0 mb-3 self-center">
            <img src="/techno-india-logo.png" alt="Techno India Logo" className="w-full h-auto object-contain" />
          </div>
          <div className="text-[11px] text-gray-700 font-sans tracking-wide text-center leading-normal font-medium mt-1">
            EM 4, Sector V, Salt Lake, Kolkata-700091, West Bengal, India
          </div>
          <div className="text-[10.5px] text-gray-700 font-sans tracking-wide text-center leading-normal mt-1 font-medium">
            Phone: +91 8125588816 • www.technoindiauniversity.ac.in
          </div>
        </div>
      </div>
    );
  };

  const PageFooter = ({ customAddress }: { customAddress?: string }) => {
    const addr = customAddress || formData.footerAddress;
    if (!addr) return null;
    return (
      <div className="w-full shrink-0 px-[18mm] pb-[8mm] pt-2 text-[#d9232a] text-[10.5px] font-sans text-center bg-white z-20">
        <div className="w-full h-[1.5px] bg-[#d9232a] mb-1.5"></div>
        <div
          className="leading-snug font-normal prose-strong:font-bold prose-strong:text-[#d9232a]"
          dangerouslySetInnerHTML={{ __html: addr.replace(/\n/g, '<br/>') }}
        />
      </div>
    );
  };

  const renderLetterCard = (itemData: typeof formData, keyId?: string) => {
    const rawText = itemData.bodyText || '';
    const match = rawText.match(/(\*\*Best Regards,\*\*|Best Regards,|&nbsp;|\*\*Prof\. \(Dr\.\) Sujoy|\*\*Dr\. Debalina)/i);

    let mainBody = rawText;
    let closingText = '**Best Regards,**';
    let signatoryText = '';
    let hasSig = false;

    if (match && match.index !== undefined) {
      hasSig = true;
      mainBody = rawText.substring(0, match.index).trim();
      const sigRaw = rawText.substring(match.index).replace(/&nbsp;/g, '').trim();

      const sigMatch = sigRaw.match(/(\*\*Prof\. \(Dr\.\)|\*\*Dr\. Debalina|Yours faithfully)/i);
      if (sigMatch && sigMatch.index !== undefined) {
        closingText = sigRaw.substring(0, sigMatch.index).trim() || '**Best Regards,**';
        signatoryText = sigRaw.substring(sigMatch.index).trim();
      } else {
        signatoryText = sigRaw;
      }
    }

    return (
      <div
        key={keyId}
        className="w-full max-w-[210mm] min-h-[297mm] h-[297mm] bg-white shadow-xl print:shadow-none relative print:max-w-none page-container page-card flex flex-col justify-between overflow-hidden mb-8 print:mb-0"
        style={{ fontFamily: selectedFont, breakAfter: 'page', pageBreakAfter: 'always' }}
      >
        {/* Center Watermark */}
        <img src="/techno-india-logo.png" alt="Watermark" className="watermark" />

        {/* Top Header */}
        <div className="shrink-0">
          <PageHeader />
        </div>

        {/* Main Body Section (Fills Middle Space) */}
        <div className="flex-1 px-[18mm] py-2 relative z-10 text-slate-950 text-[10pt] leading-[1.55] text-left overflow-hidden flex flex-col justify-start" style={{ fontFamily: selectedFont }}>
          {(itemData.referenceNumber || itemData.date) && (
            <div className="flex justify-between items-center mb-3 text-[10pt] font-semibold border-b border-slate-100 pb-1 text-slate-900" style={{ fontFamily: selectedFont }}>
              <div><ReactMarkdown components={{ p: React.Fragment }}>{(itemData.referenceNumber || '').replace(/\n/g, '  \n')}</ReactMarkdown></div>
              <div><ReactMarkdown components={{ p: React.Fragment }}>{(itemData.date || '').replace(/\n/g, '  \n')}</ReactMarkdown></div>
            </div>
          )}

          {itemData.documentTitle && (
            <div className="text-center mb-3.5 text-[13pt] font-bold uppercase tracking-wider text-black prose-strong:font-bold prose-strong:text-black">
              <ReactMarkdown components={{ p: React.Fragment }}>{(itemData.documentTitle || '').replace(/\n/g, '  \n')}</ReactMarkdown>
            </div>
          )}

          {itemData.bodyText && (
            <div className="mb-4 max-w-none leading-[1.55] text-slate-950 text-[10pt]" style={{ fontFamily: selectedFont }}>
              {(itemData as { isHTML?: boolean }).isHTML ? (
                <div dangerouslySetInnerHTML={{ __html: itemData.bodyText }} />
              ) : hasSig ? (
                <>
                  <div className="prose prose-p:mt-0 prose-p:mb-2.5 max-w-none text-justify text-slate-950 text-[10pt] prose-strong:font-bold prose-strong:text-black leading-[1.55]" style={{ fontFamily: selectedFont }}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {mainBody.replace(/\n/g, '  \n')}
                    </ReactMarkdown>
                  </div>

                  <div className="text-left w-full text-[10pt] font-bold text-slate-950 mt-4 mb-1">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {closingText.replace(/\n/g, '  \n')}
                    </ReactMarkdown>
                  </div>

                  <div className="h-24 w-full" />

                  <div className="flex flex-col items-end text-right ml-auto w-max max-w-[340px] text-[10pt] text-slate-950 prose-strong:font-bold prose-strong:text-black leading-snug">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {signatoryText.replace(/\n/g, '  \n')}
                    </ReactMarkdown>
                  </div>
                </>
              ) : (
                <div className="prose prose-p:mt-0 prose-p:mb-2.5 max-w-none text-justify text-slate-950 text-[10pt] prose-strong:font-bold prose-strong:text-black leading-[1.55]" style={{ fontFamily: selectedFont }}>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {rawText.replace(/\n/g, '  \n')}
                  </ReactMarkdown>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Pinned to Absolute Bottom via Flexbox shrink-0 */}
        <PageFooter customAddress={itemData.footerAddress} />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-50 to-slate-100/80 flex flex-col font-sans selection:bg-red-500/20 selection:text-red-900">
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
        .watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0.04 !important;
          z-index: 0 !important;
          pointer-events: none;
          width: 55%;
        }
      `}</style>

      {/* Top Navigation */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-slate-200/60 px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-[0_4px_30px_rgba(0,0,0,0.03)] print:hidden">
        <div className="flex items-center gap-4">
          <Link to="/techno-india" className="text-slate-500 hover:text-slate-800 transition-colors font-medium text-sm flex items-center gap-1">
            <ArrowLeft className="w-4 h-4 text-[#d9232a]" /> Back to Portal
          </Link>
          <div className="w-px h-6 bg-slate-200"></div>
          <h1 className="text-xl font-bold text-slate-800 flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-tr from-red-700 to-red-500 text-white rounded-lg flex items-center justify-center shadow-md ring-4 ring-red-50 font-bold">
              T
            </div>
            Techno India Letterhead Generator
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleExportPDF}
            disabled={isExporting || isExportingAll}
            className={`px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl font-medium transition-all shadow-sm flex items-center gap-2 text-sm ${isExporting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isExporting ? (
              <>
                <div className="w-3.5 h-3.5 border-2 border-red-600/30 border-t-red-600 rounded-full animate-spin" />
                Exporting...
              </>
            ) : (
              <>
                <Download className="w-4 h-4 text-red-600" />
                Export Current PDF
              </>
            )}
          </button>

          <button
            onClick={handleExportAllPDF}
            disabled={isExporting || isExportingAll}
            className={`px-5 py-2.5 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700 text-white rounded-xl font-medium transition-all shadow-[0_4px_14px_0_rgba(217,35,42,0.25)] hover:shadow-[0_6px_20px_rgba(217,35,42,0.23)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 text-sm ${isExportingAll ? 'opacity-70 cursor-not-allowed transform-none hover:shadow-none' : ''}`}
          >
            {isExportingAll ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Generating Multi-Page PDF...
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
                value={selectedTemplateId}
                onChange={handleTemplateChange}
                className="w-full p-3 bg-white border border-red-200/80 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500/20 shadow-sm"
              >
                {templates.map(t => (
                  <option key={t.id} value={t.id}>{t.name}</option>
                ))}
              </select>
            </div>

            {/* Typography Selector */}
            <div className="mb-6 space-y-1.5">
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Type className="w-4 h-4 text-red-600" />
                Document Typography / Font Style
              </label>
              <select
                value={selectedFont}
                onChange={(e) => setSelectedFont(e.target.value)}
                className="w-full p-3 border border-slate-200/60 rounded-xl focus:ring-4 focus:ring-red-500/10 focus:border-red-500 hover:border-slate-300 outline-none transition-all bg-white text-xs font-semibold text-slate-800 shadow-sm cursor-pointer"
              >
                {fontOptions.map(f => (
                  <option key={f.value} value={f.value}>{f.label}</option>
                ))}
              </select>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-slate-700 flex items-center justify-between mb-1">
                  <span>Student Admission / Roll Number</span>
                  <button
                    onClick={generateNewAdmissionNo}
                    type="button"
                    className="text-xs text-red-600 hover:text-red-700 font-bold hover:underline"
                  >
                    + Generate New
                  </button>
                </label>
                <input
                  type="text"
                  value={admissionNo}
                  onChange={(e) => handleAdmissionNoChange(e.target.value)}
                  className="w-full p-3 border border-slate-200/60 rounded-xl focus:ring-4 focus:ring-red-500/10 focus:border-red-500 hover:border-slate-300 outline-none transition-all bg-white text-sm font-bold text-slate-900 shadow-sm"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700">Reference Number</label>
                <input
                  type="text"
                  name="referenceNumber"
                  value={formData.referenceNumber}
                  onChange={handleChange}
                  className="w-full p-3 border border-slate-200/60 rounded-xl focus:ring-4 focus:ring-red-500/10 focus:border-red-500 hover:border-slate-300 outline-none transition-all bg-white text-sm text-slate-900 shadow-sm"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700">Date</label>
                <input
                  type="text"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-3 border border-slate-200/60 rounded-xl focus:ring-4 focus:ring-red-500/10 focus:border-red-500 hover:border-slate-300 outline-none transition-all bg-white text-sm text-slate-900 shadow-sm"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700">Document Title</label>
                <input
                  type="text"
                  name="documentTitle"
                  value={formData.documentTitle}
                  onChange={handleChange}
                  className="w-full p-3 border border-slate-200/60 rounded-xl focus:ring-4 focus:ring-red-500/10 focus:border-red-500 hover:border-slate-300 outline-none transition-all bg-white text-sm text-slate-900 shadow-sm"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700 flex items-center justify-between mb-1">
                  <span>Body Content</span>
                  <span className="text-xs text-slate-400 font-normal">Markdown / HTML</span>
                </label>
                <textarea
                  name="bodyText"
                  value={formData.bodyText}
                  onChange={handleChange}
                  rows={12}
                  className="w-full p-3 border border-slate-200/60 rounded-xl focus:ring-4 focus:ring-red-500/10 focus:border-red-500 hover:border-slate-300 outline-none transition-all bg-white text-sm text-slate-900 font-mono resize-y shadow-sm leading-relaxed"
                  placeholder="Everything else goes here (To, Subject, Salutation, Body, Signatory). Use **bold** where needed."
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700">Footer Address</label>
                <textarea
                  name="footerAddress"
                  value={formData.footerAddress}
                  onChange={handleChange}
                  rows={2}
                  className="w-full p-3 border border-slate-200/60 rounded-xl focus:ring-4 focus:ring-red-500/10 focus:border-red-500 hover:border-slate-300 outline-none transition-all bg-white text-sm text-slate-900 resize-none shadow-sm"
                />
              </div>

            </div>
          </div>
        </div>

        {/* Right Preview Area */}
        <div className={`${activeTab === 'preview' ? 'flex' : 'hidden'} md:flex flex-1 bg-slate-100/50 overflow-y-auto print:overflow-visible p-4 md:p-8 justify-center print:p-0 print:bg-white print:block print:!flex relative`}>
          {isExportingAll ? (
            <div className="w-full flex flex-col items-center gap-8 print:block print:gap-0">
              {templates.map((tpl) => {
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

export default TechnoIndiaLetterheadGenerator;
