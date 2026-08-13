import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { Download, Check, Settings2 } from "lucide-react";

const HR_LOGO = "https://cdn.highradius.com/wp-content/uploads/2024/06/HighRadius-Updated.svg";
const HR_COLOR = "#0047AB";

const HighradiusLetterheadGenerator = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [activeTab, setActiveTab] = useState<"form" | "preview">("form");
  const [selectedFont, setSelectedFont] = useState("Calibri, Arial, sans-serif");

  const [formData, setFormData] = useState({
    documentTitle: "",
    date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
    referenceNo: "HRC/HR/2026/101",
    recipientName: "To Whomsoever It May Concern",
    recipientAddress: "",
    subject: "Employment Verification Letter",
    salutation: "Dear Sir/Madam,",
    bodyText: "This is to certify that Mr./Ms. Jinkal Patwari is a bonafide employee of HighRadius Technologies Pvt. Ltd., working in the capacity of Director - Consulting since October 2, 2026.\n\nThis letter is issued at the request of the employee for official verification / banking purposes.\n\nPlease feel free to contact us for any further clarification.",
    signatoryName: "Pooja Palviya",
    signatoryDesignation: "VP - People & Culture",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleExportPDF = () => { window.print(); };

  const PageHeader = () => (
    <div className="w-full flex justify-start items-center pt-4 pb-2 bg-white">
      <img
        src={HR_LOGO}
        alt="HighRadius"
        className="h-10 w-auto object-contain"
      />
    </div>
  );

  const PageFooter = () => (
    <div className="w-full text-center py-3 bg-white font-sans text-[9px] leading-tight text-gray-700 border-t border-gray-100">
      <p className="font-semibold text-gray-900">HighRadius Technologies Pvt. Ltd.</p>
      <p>Unit-1, 5th Floor, Block-3, DLF Cyber City, Plot No.129 to 132, Gachibowli, Hyderabad, Telangana-500019</p>
      <p><a href="https://www.highradius.com" target="_blank" rel="noreferrer" style={{ color: HR_COLOR }} className="underline font-medium">www.highradius.com</a></p>
    </div>
  );

  const inputCls = "w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none transition-all text-slate-800";
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
              width: 100% !important;
              max-width: none !important;
              min-height: 100vh !important;
              position: relative;
            }
          }
        `}
      </style>

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 print:hidden shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/highradius" className="flex items-center gap-4">
            <img src={HR_LOGO} alt="HighRadius" className="h-9 w-auto" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            <div className="hidden md:flex items-center gap-2 border-l border-slate-300 pl-4 text-sm font-semibold tracking-wide text-slate-700">
              Official Letterhead Generator
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <div className="md:hidden flex bg-slate-100 rounded-md p-1 border border-slate-200">
              <button onClick={() => setActiveTab("form")} className={`px-3 py-1 text-sm rounded ${activeTab === "form" ? "bg-white shadow" : "text-slate-500"}`} style={activeTab === "form" ? { color: HR_COLOR } : {}}>Form</button>
              <button onClick={() => setActiveTab("preview")} className={`px-3 py-1 text-sm rounded ${activeTab === "preview" ? "bg-white shadow" : "text-slate-500"}`} style={activeTab === "preview" ? { color: HR_COLOR } : {}}>Preview</button>
            </div>
            <button onClick={handleExportPDF} disabled={isExporting} className="inline-flex items-center gap-2 text-white px-5 py-2.5 text-sm font-semibold rounded-lg shadow-sm hover:opacity-90 transition-opacity" style={{ background: HR_COLOR }}>
              {isExporting ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />} Export PDF
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-24 pb-12 px-4 container mx-auto flex flex-col md:flex-row gap-8 justify-center print:block print:p-0 print:m-0 print:max-w-none">

        {/* Form Controls */}
        <div className={`w-full md:w-[360px] bg-white border border-slate-200 rounded-xl shadow-sm p-6 flex-col gap-6 overflow-y-auto max-h-[calc(100vh-140px)] sticky top-28 print:hidden shrink-0 ${activeTab === "form" ? "flex" : "hidden md:flex"}`}>
          <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
            <Settings2 className="w-5 h-5" style={{ color: HR_COLOR }} />
            <h2 className="text-lg font-semibold text-slate-800 font-sans">Letter Details</h2>
          </div>

          <div className="space-y-4">
            <div className="grid gap-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">General Info</h3>
              <div>
                <label className={labelCls}>Document Font</label>
                <select
                  value={selectedFont}
                  onChange={(e) => setSelectedFont(e.target.value)}
                  className={`${inputCls} cursor-pointer font-medium`}
                >
                  <option value="Calibri, Arial, sans-serif">Calibri / Arial (Official HighRadius PDF)</option>
                  <option value="'Times New Roman', Times, serif">Times New Roman (Serif)</option>
                  <option value="Inter, system-ui, sans-serif">Inter / Modern Sans</option>
                  <option value="'Courier New', Courier, monospace">Courier (Monospace)</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className={labelCls}>Date</label><input type="text" name="date" value={formData.date} onChange={handleChange} className={inputCls} /></div>
                <div><label className={labelCls}>Reference No</label><input type="text" name="referenceNo" value={formData.referenceNo} onChange={handleChange} className={inputCls} /></div>
              </div>
            </div>

            <div className="grid gap-4 pt-4 border-t border-slate-100">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Recipient</h3>
              <div><label className={labelCls}>Recipient Name</label><input type="text" name="recipientName" value={formData.recipientName} onChange={handleChange} className={inputCls} /></div>
              <div><label className={labelCls}>Address</label><textarea name="recipientAddress" value={formData.recipientAddress} onChange={handleChange} rows={2} className={`${inputCls} resize-none`} /></div>
            </div>

            <div className="grid gap-4 pt-4 border-t border-slate-100">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Content</h3>
              <div><label className={labelCls}>Subject</label><input type="text" name="subject" value={formData.subject} onChange={handleChange} className={inputCls} /></div>
              <div><label className={labelCls}>Salutation</label><input type="text" name="salutation" value={formData.salutation} onChange={handleChange} className={inputCls} /></div>
              <div><label className={labelCls}>Body Text (Markdown)</label><textarea name="bodyText" value={formData.bodyText} onChange={handleChange} rows={10} className={`${inputCls} resize-none font-mono`} /></div>
            </div>

            <div className="grid gap-4 pt-4 border-t border-slate-100">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Signatory</h3>
              <div><label className={labelCls}>Name</label><input type="text" name="signatoryName" value={formData.signatoryName} onChange={handleChange} className={inputCls} /></div>
              <div><label className={labelCls}>Designation</label><input type="text" name="signatoryDesignation" value={formData.signatoryDesignation} onChange={handleChange} className={inputCls} /></div>
            </div>
          </div>
        </div>

        {/* WYSIWYG Preview */}
        <div className={`print-container flex-1 overflow-y-auto bg-slate-200/50 p-4 md:p-8 rounded-2xl md:flex flex-col gap-10 items-center relative print:block print:bg-transparent print:rounded-none print:p-0 print:m-0 print:overflow-visible ${activeTab === "preview" ? "flex" : "hidden"}`} style={{ fontFamily: selectedFont }}>

          <div className="page-container w-full max-w-[210mm] min-h-[297mm] bg-white text-black shadow-lg p-12 md:p-14 relative flex flex-col justify-between print:shadow-none print:w-full print:max-w-none font-sans">
            <div>
              <PageHeader />

              <div className="flex justify-between items-start mb-6 mt-4 text-xs text-gray-900 font-semibold">
                <div>
                  {formData.referenceNo && <p>Ref: {formData.referenceNo}</p>}
                </div>
                <div>
                  <p>Date: {formData.date}</p>
                </div>
              </div>

              {formData.recipientName && (
                <div className="mb-5 text-xs text-gray-900 leading-relaxed font-semibold">
                  <p>To,</p>
                  <p>{formData.recipientName}</p>
                  {formData.recipientAddress && <p className="whitespace-pre-line font-normal">{formData.recipientAddress}</p>}
                </div>
              )}

              {formData.subject && (
                <div className="mb-5 text-xs font-bold text-gray-900">
                  <p>Subject: {formData.subject}</p>
                </div>
              )}

              <p className="mb-4 text-xs text-gray-900">{formData.salutation}</p>

              <div className="prose prose-sm max-w-none text-gray-900 leading-relaxed mb-10 text-[11.5px] text-justify font-sans">
                <ReactMarkdown>{formData.bodyText}</ReactMarkdown>
              </div>

              <div className="mt-12 text-xs">
                <p className="font-bold text-gray-900 mb-10 uppercase tracking-wide text-[10px]">For HighRadius Technologies Private Limited</p>
                <div className="w-56 border-t border-gray-900 pt-2 font-medium">
                  <p className="font-bold text-gray-900">{formData.signatoryName}</p>
                  <p className="text-gray-600">{formData.signatoryDesignation}</p>
                </div>
              </div>
            </div>

            <PageFooter />
          </div>

        </div>
      </main>
    </div>
  );
};

export default HighradiusLetterheadGenerator;
