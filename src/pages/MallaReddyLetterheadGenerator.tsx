import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { Download, Settings2, Printer, Loader2 } from "lucide-react";
import { toast } from "sonner";

const defaultFormData = {
  documentTitle: "BONAFIDE CERTIFICATE & NO OBJECTION CERTIFICATE",
  date: "02/06/2026",
  referenceNo: "MRU/Conference/CSE/2025-26/198",
  recipientName: "The Embassy of the Republic of Korea\nIndia",
  subject: "Bonafide Certificate & No Objection Certificate for Attending the 2026 IEEE 46th International Conference on Distributed Computing Systems (ICDCS 2026)",
  salutation: "Dear Sir/Madam,",
  bodyText: "This is to certify that **Mr. Saitarun Siri Giri** (S/o Venkateswarlu Siri Giri), **Roll No. 2321CS10255, Passport No. X2509507**, is a **bonafide B.Tech. Scholar** studying in the **Department of Computer Science and Engineering (CSE)** at **Malla Reddy University, Hyderabad, Telangana, India** for the Academic Year **2023–27**.\n\nThe University has no objection to his travel to **Seoul, Republic of Korea** for the purpose of attending and presenting his research work at the **2026 IEEE 46th International Conference on Distributed Computing Systems (ICDCS)** scheduled from 22 June 2026 to 25 June 2026.\n\nHe has been granted **academic leave from 20 June 2026 to 30 June 2026** for this purpose. He is expected to return to India on **01 July 2026** and resume his regular academic duties thereafter.\n\nThis certificate is issued upon his request for **visa processing purposes**.\n\nShould you require any further information, please feel free to contact us.",
  signatoryName: "",
  signatoryDesignation: "Head of Department\nDepartment of Computer Science and Engineering\nMalla Reddy University\nHyderabad, Telangana, India",
};

const MallaReddyLetterheadGenerator = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [activeTab, setActiveTab] = useState<"form" | "preview">("form");

  const [formData, setFormData] = useState(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const dataParam = params.get("data");
      if (dataParam) {
        return JSON.parse(decodeURIComponent(dataParam));
      }
    } catch (e) {
      console.error("Failed to parse URL form data", e);
    }
    return defaultFormData;
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleExportPDF = async () => {
    try {
      setIsExporting(true);
      toast.info("Generating PDF via Puppeteer in background...");

      const query = encodeURIComponent("/mallareddy/letterhead?data=" + encodeURIComponent(JSON.stringify(formData)));
      const response = await fetch(`/api/export-pdf?path=${query}&filename=MallaReddy_Document.pdf`);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Export failed with status ${response.status}`);
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = "MallaReddy_Document.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(downloadUrl);
      toast.success("Malla Reddy Letterhead PDF downloaded successfully.");
    } catch (error) {
      console.error("Export failed", error);
      toast.error(`Failed to export PDF: ${error instanceof Error ? error.message : "Unknown error"}`);
    } finally {
      setIsExporting(false);
    }
  };

  const PageHeader = ({ isPrintFixed = false }: { isPrintFixed?: boolean }) => (
    <div className={`w-full relative ${isPrintFixed ? 'pt-0' : 'pt-0 print:pt-0'} mb-[26px]`}>

      {/* Top horizontal graphic bar */}
      <div className="w-full flex justify-end h-[16px] mb-6">
        <div className="flex h-full">
          <div className="w-[328px] bg-[#ea6625]"></div>
          <div className="w-[5px]"></div>
          <div className="w-[150px] bg-[#2a3b82]"></div>
        </div>
      </div>

      <div className="flex w-full items-start justify-between px-0">

        {/* Left Logo */}
        <div className="w-[105px] print:w-[105px] h-[105px] print:h-[105px] flex-shrink-0 flex items-start justify-center">
          <img src="/mallareddy-logo.png" alt="Malla Reddy Logo" className="w-auto h-full object-contain" />
        </div>

        {/* Center Text */}
        <div className="flex-1 flex flex-col items-center justify-start text-center px-3 pt-[10px]">
          <h1
            className="text-[#2a3b82] text-[33px] print:text-[33px] font-black leading-none tracking-tighter whitespace-nowrap"
            style={{
              fontFamily: 'Arial, Helvetica, sans-serif',
              transform: 'scaleY(1.35) scaleX(0.85)',
              transformOrigin: 'center center'
            }}
          >
            MALLA REDDY UNIVERSITY
          </h1>
          <p
            className="text-black text-[12.5px] print:text-[12.5px] font-normal leading-tight mt-[14px] text-center"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
          >
            (Telangana State Private Universities Act No. 13 of 2020 &<br />G.O.Ms. No. 14, Higher Education (UE) Department)
          </p>
        </div>

        {/* Right Contact Info */}
        <div className="w-[160px] print:w-[160px] text-left font-sans flex-shrink-0 pt-[10px]">
          <p className="text-black text-[9.5px] print:text-[9.5px] leading-[1.45] text-left whitespace-nowrap">
            Maisammaguda, Kompally,<br />
            Medchal - Malkajgiri District<br />
            Hyderabad - 500100, Telangana.<br />
            mruh@mallareddyuniversity.ac.in<br />
            www.mallareddyuniversity.ac.in
          </p>
        </div>

      </div>
    </div>
  );

  const PageFooter = ({ isPrintFixed = false }: { isPrintFixed?: boolean }) => (
    <div className={`w-full relative bg-transparent ${isPrintFixed ? 'pb-0 pt-0' : 'pt-0 pb-0'}`}>
      <div className="flex w-full items-center justify-between">
        {/* Left graphic bar */}
        <div className="flex h-[18px]">
          <div className="w-[88px] bg-[#1b2b5d]"></div>
          <div className="w-[4.5px] bg-transparent"></div>
          <div className="w-[348.5px] bg-[#de5c2a]"></div>
        </div>
        {/* Right text */}
        <div className="flex-shrink-0 flex items-center">
          <p className="text-black text-[14.5px] print:text-[14.5px] font-sans font-bold tracking-tight leading-none">
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
          .print-page { margin: 0 !important; box-shadow: none !important; position: relative; width: 210mm !important; height: 297mm !important; min-height: 297mm !important; max-height: 297mm !important; page-break-after: always; overflow: hidden; background: white !important; } 
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
          <button onClick={() => window.print()} className="px-4 py-2 rounded-lg text-sm font-medium border border-slate-300 hover:border-slate-400 bg-white text-slate-700 transition-colors flex items-center gap-2">
            <Printer className="w-4 h-4" /> Print
          </button>
          <button onClick={handleExportPDF} disabled={isExporting} className="px-5 py-2 rounded-lg text-sm font-bold text-white flex items-center gap-2 transition-all shadow-md hover:opacity-90 bg-blue-700 disabled:opacity-60">
            {isExporting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
            {isExporting ? "Generating PDF..." : "Download PDF"}
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

          <div className="print-page bg-white shadow-2xl relative" style={{ width: '210mm', height: '297mm', minHeight: '297mm', maxHeight: '297mm', boxSizing: 'border-box', fontFamily: '"Times New Roman", Times, serif', fontSize: '11.5pt', color: '#000' }}>

            {/* Header */}
            <div className="px-14 pt-0">
              <PageHeader />
            </div>

            {/* Content Body */}
            <div className="px-14">

              <div className="flex justify-between items-start text-[12pt] mb-[26px]">
                <div className="font-bold">
                  {formData.referenceNo && `Ref No: ${formData.referenceNo}`}
                </div>
                <div className="font-normal">
                  {formData.date && `Date: ${formData.date}`}
                </div>
              </div>

              {formData.documentTitle && (
                <div className="text-center mb-[26px]">
                  <h2 className="text-[14pt] font-bold uppercase tracking-wide">{formData.documentTitle}</h2>
                </div>
              )}

              {formData.recipientName && (
                <div className="mb-[20px] leading-[1.35]">
                  <p>To</p>
                  {formData.recipientName.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              )}

              {formData.subject && (
                <div className="mb-[20px] leading-[1.35]">
                  <p><strong>Subject: {formData.subject}</strong></p>
                </div>
              )}

              {formData.salutation && (
                <div className="mb-[16px]">
                  <p>{formData.salutation}</p>
                </div>
              )}

              <div className="mb-[30px] leading-[1.4] text-justify space-y-[12px]">
                <ReactMarkdown
                  components={{
                    p: ({ node, ...props }) => <p {...props} />,
                    strong: ({ node, ...props }) => <strong className="font-bold" {...props} />
                  }}
                >
                  {formData.bodyText}
                </ReactMarkdown>
              </div>

              <div>
                <p className="mb-[28px]">Sincerely,</p>

                {formData.signatoryName && (
                  <p className="font-bold mb-1">{formData.signatoryName}</p>
                )}

                {formData.signatoryDesignation && formData.signatoryDesignation.split('\n').map((line, i) => (
                  <p key={i} className="leading-[1.35]">{line}</p>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 w-full px-14 pb-[40px]">
              <PageFooter />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MallaReddyLetterheadGenerator;
