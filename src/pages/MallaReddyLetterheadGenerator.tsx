import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { Download, Check, Settings2 } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const MallaReddyLetterheadGenerator = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [activeTab, setActiveTab] = useState<"form" | "preview">("form");

  const [formData, setFormData] = useState({
    documentTitle: "NO OBJECTION CERTIFICATE",
    date: "02/06/2026",
    referenceNo: "MRU/Conference/CSE/2025-26/198",
    recipientName: "The Embassy of the Republic of Korea\nIndia",
    subject: "No Objection Certificate for Attending the 2026 IEEE 46th International Conference on Distributed Computing Systems (ICDCS 2026)",
    salutation: "Dear Sir/Madam,",
    bodyText: "This is to certify that **Mr. Raghu Kudala** (S/o Poshetty Kudala), **Roll No. 2321CS10245, Passport No. Y5540555**, is a **bonafide B.Tech. Scholar** in the **Department of Computer Science and Engineering (CSE)** at **Malla Reddy University, Hyderabad, Telangana, India** for the Academic Year **2023–27**.\n\nThe University has no objection to her travel to **Seoul, Republic of Korea** for the purpose of attending and presenting her research work at the **2026 IEEE 46th International Conference on Distributed Computing Systems (ICDCS)** scheduled from 22 June 2026 to 25 June 2026.\n\nHe has been granted **academic leave from 20 June 2026 to 30 June 2026** for this purpose. He is expected to return to India on **01 July 2026** and resume her academic/research duties thereafter.\n\nThis certificate is issued upon her request for **visa processing purposes**.\n\nShould you require any further information, please feel free to contact us.",
    signatoryName: "",
    signatoryDesignation: "Head of Department\nDepartment of Computer Science and Engineering\nMalla Reddy University\nHyderabad, Telangana, India",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleExportPDF = async () => {
    try {
      setIsExporting(true);
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const pagesElements = document.querySelectorAll('.print-page');
      if (pagesElements.length === 0) throw new Error('Page elements not found');

      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      for (let i = 0; i < pagesElements.length; i++) {
        const pageEl = pagesElements[i] as HTMLElement;
        const canvas = await html2canvas(pageEl, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: '#ffffff'
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.95);
        if (i > 0) pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');
      }
      
      pdf.save(`MallaReddy_Document.pdf`);
    } catch (error) {
      console.error('Export failed', error);
      alert('Failed to export PDF');
    } finally {
      setIsExporting(false);
    }
  };

  const PageHeader = ({ isPrintFixed = false }: { isPrintFixed?: boolean }) => (
    <div className={`w-full relative ${isPrintFixed ? 'pt-0' : 'pt-0 print:pt-0'} mb-8`}>
      
      {/* Top horizontal graphic bar (Not absolute anymore, properly stacked) */}
      <div className="w-full flex justify-end h-[14px] mb-4">
        <div className="w-[71%] flex">
          <div className="w-[68%] bg-[#ea6625]" style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 8px) 100%, 0% 100%)' }}></div>
          <div className="w-[4px]"></div>
          <div className="flex-1 bg-[#2a3b82]" style={{ clipPath: 'polygon(8px 0, 100% 0, 100% 100%, 0% 100%)' }}></div>
        </div>
      </div>

      <div className="flex w-full items-start justify-between px-0">
        
        {/* Left Logo */}
        <div className="w-[105px] print:w-[105px] h-[105px] print:h-[105px] flex-shrink-0 flex items-start justify-center mt-1">
          <img src="/mallareddy-logo.png" alt="Malla Reddy Logo" className="w-auto h-full object-contain" />
        </div>

        {/* Center Text */}
        <div className="flex-1 flex flex-col items-center justify-start text-center px-2">
          <h1 className="text-[#2a3b82] text-[34px] print:text-[34px] font-black leading-none tracking-tighter whitespace-nowrap" style={{ fontFamily: 'Arial, sans-serif', transform: 'scaleY(1.4) scaleX(0.85)' }}>
            MALLA REDDY UNIVERSITY
          </h1>
          <p className="text-black text-[12.5px] print:text-[12.5px] font-normal leading-tight mt-6 text-center" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
            (Telangana State Private Universities Act No. 13 of 2020 &<br/>G.O.Ms. No. 14, Higher Education (UE) Department)
          </p>
        </div>

        {/* Right Contact Info */}
        <div className="w-[160px] print:w-[160px] text-left font-sans flex-shrink-0 pt-2">
          <p className="text-black text-[9.5px] print:text-[9.5px] leading-[1.4] text-left">
            Maisammaguda, Kompally,<br/>
            Medchal - Malkajgiri District<br/>
            Hyderabad - 500100, Telangana State.<br/>
            mruh@mallareddyuniversity.ac.in<br/>
            www.mallareddyuniversity.ac.in
          </p>
        </div>

      </div>
    </div>
  );

  const PageFooter = ({ isPrintFixed = false }: { isPrintFixed?: boolean }) => (
    <div className={`w-full relative bg-transparent ${isPrintFixed ? 'pb-8 pt-4' : 'mt-8 pt-4 pb-12 print:pb-8'}`}>
      <div className="flex w-full items-center">
        {/* Left graphic bar */}
        <div className="flex h-[18px] flex-1">
          <div className="w-[20%] bg-[#1b2b5d]" style={{ clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0% 100%)' }}></div>
          <div className="w-[4px] bg-transparent"></div>
          <div className="flex-1 bg-[#de5c2a]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 2% 100%)' }}></div>
        </div>
        {/* Right text */}
        <div className="ml-4 flex-shrink-0">
          <p className="text-black text-[14px] print:text-[14px] font-sans font-medium tracking-wide">
            www.mallareddyuniversity.ac.in
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col print:bg-transparent print:text-black">
      <style>{`
        @media print { 
          @page { size: A4; margin: 0; } 
          body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; background: white !important; } 
          .no-print { display: none !important; } 
          .print-page { margin: 0 !important; box-shadow: none !important; position: relative; min-height: 297mm; page-break-after: always; overflow: hidden; background: white !important; } 
        }
      `}</style>

      {/* Toolbar */}
      <div className="no-print flex items-center justify-between px-6 py-4 bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium">← Back</Link>
          <span className="text-slate-800 font-bold border-l border-slate-300 pl-4">MRU Letterhead Generator</span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setActiveTab(activeTab === "form" ? "preview" : "form")} className="px-4 py-2 rounded-lg text-sm font-medium border border-slate-300 hover:border-slate-400 bg-white text-slate-700 transition-colors flex items-center gap-2">
            <Settings2 className="w-4 h-4" /> {activeTab === "form" ? "Preview" : "Edit Details"}
          </button>
          <button onClick={handleExportPDF} disabled={isExporting} className="px-5 py-2 rounded-lg text-sm font-bold text-white flex items-center gap-2 transition-all shadow-md hover:opacity-90 bg-blue-700">
            {isExporting ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />} Print / Export PDF
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Form Panel */}
        {activeTab === "form" && (
          <div className="no-print w-full max-w-md bg-white overflow-y-auto p-6 border-r border-slate-200 flex-shrink-0 shadow-lg z-10">
            <h2 className="text-xl font-bold mb-6 text-slate-800">Document Details</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Reference No</label>
                  <input className="w-full p-2 text-sm border border-slate-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500" name="referenceNo" value={formData.referenceNo} onChange={handleChange} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Date</label>
                  <input className="w-full p-2 text-sm border border-slate-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500" name="date" value={formData.date} onChange={handleChange} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Document Title (e.g. NOC)</label>
                <input className="w-full p-2 text-sm border border-slate-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500" name="documentTitle" value={formData.documentTitle} onChange={handleChange} />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Recipient Name / Address</label>
                <textarea className="w-full p-2 text-sm border border-slate-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 min-h-[80px]" name="recipientName" value={formData.recipientName} onChange={handleChange} />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Subject</label>
                <textarea className="w-full p-2 text-sm border border-slate-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 min-h-[60px]" name="subject" value={formData.subject} onChange={handleChange} />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Salutation</label>
                <input className="w-full p-2 text-sm border border-slate-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500" name="salutation" value={formData.salutation} onChange={handleChange} />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Body Text (Supports **bold**)</label>
                <textarea className="w-full p-2 text-sm border border-slate-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 min-h-[200px]" name="bodyText" value={formData.bodyText} onChange={handleChange} />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Signatory Name (Optional)</label>
                <input className="w-full p-2 text-sm border border-slate-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500" name="signatoryName" value={formData.signatoryName} onChange={handleChange} />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Signatory Designation & Dept</label>
                <textarea className="w-full p-2 text-sm border border-slate-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 min-h-[100px]" name="signatoryDesignation" value={formData.signatoryDesignation} onChange={handleChange} />
              </div>
            </div>
          </div>
        )}

        {/* Preview Panel */}
        <div className={`flex-1 overflow-y-auto bg-slate-200 flex flex-col items-center py-10 print:bg-white print:p-0 gap-10 print:gap-0 ${activeTab === "form" ? "hidden md:flex" : "flex"}`}>
          
          <div className="print-page bg-white shadow-2xl relative" style={{ width: '210mm', minHeight: '297mm', fontFamily: '"Times New Roman", Times, serif', fontSize: '11.5pt', color: '#000' }}>
            
            {/* Header */}
            <div className="px-14 pt-0">
              <PageHeader />
            </div>

            {/* Content Body */}
            <div className="px-14 pb-8 flex-1 flex flex-col min-h-[220mm]">
              
              <div className="flex justify-between items-start mb-10 text-[12pt]">
                <div className="font-bold">
                  {formData.referenceNo && `Ref No: ${formData.referenceNo}`}
                </div>
                <div className="font-normal">
                  {formData.date && `Date: ${formData.date}`}
                </div>
              </div>

              {formData.documentTitle && (
                <div className="mb-8 text-center">
                  <h2 className="text-[14pt] font-bold uppercase">{formData.documentTitle}</h2>
                </div>
              )}

              {formData.recipientName && (
                <div className="mb-6 leading-relaxed">
                  <p>To</p>
                  {formData.recipientName.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              )}

              {formData.subject && (
                <div className="mb-6 leading-relaxed">
                  <p><strong>Subject: {formData.subject}</strong></p>
                </div>
              )}

              {formData.salutation && (
                <div className="mb-4">
                  <p>{formData.salutation}</p>
                </div>
              )}

              <div className="mb-8 leading-[1.6] text-justify space-y-4">
                <ReactMarkdown
                  components={{
                    p: ({ node, ...props }) => <p className="mb-4" {...props} />,
                    strong: ({ node, ...props }) => <strong className="font-bold" {...props} />
                  }}
                >
                  {formData.bodyText}
                </ReactMarkdown>
              </div>

              <div className="mt-auto pt-8">
                <p className="mb-10">Sincerely,</p>
                
                {formData.signatoryName && (
                  <p className="font-bold mb-1">{formData.signatoryName}</p>
                )}
                
                {formData.signatoryDesignation && formData.signatoryDesignation.split('\n').map((line, i) => (
                  <p key={i} className="leading-snug">{line}</p>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 w-full px-14 pb-4">
              <PageFooter />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MallaReddyLetterheadGenerator;
