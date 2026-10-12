import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { Download, Settings2, Printer, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface BalajiFormData {
  instituteName: string;
  documentTitle: string;
  referenceNo: string;
  date: string;
  recipientName: string;
  subject: string;
  salutation: string;
  bodyText: string;
  signatoryName: string;
  signatoryDesignation: string;
}

const defaultFormData: BalajiFormData = {
  instituteName: "Balaji Institute of Technology and Management (BITM)",
  documentTitle: "BONAFIDE CERTIFICATE & NO OBJECTION CERTIFICATE",
  referenceNo: "SBUP/BITM/ADMIN/2026/0412",
  date: "12/10/2026",
  recipientName: "To Whomsoever It May Concern",
  subject: "Bonafide Certificate & No Objection for Academic Internship / Visa Processing",
  salutation: "Dear Sir/Madam,",
  bodyText: "This is to certify that **Mr. Saitarun Siri Giri** (S/o Mr. Venkateswarlu Siri Giri), bearing **PRN / Roll No: 2024BITM0429**, is a bonafide full-time postgraduate student of **Sri Balaji University, Pune (SBUP)** enrolled in the **Master of Business Administration (MBA)** program at **Balaji Institute of Technology and Management (BITM)** for the Academic Batch **2024–2026**.\n\nThe University has **No Objection** to his travel abroad / international conference attendance / industry internship during the sanctioned academic break period. He has consistently demonstrated sincere academic dedication, exemplary conduct, and high moral integrity throughout his tenure at the institution.\n\nHe is expected to return and resume his academic coursework in accordance with the university curriculum regulations. This certificate is granted upon his written request for **Visa Application / Official Documentation** purposes.",
  signatoryName: "Prof. (Dr.) Rajesh Sharma",
  signatoryDesignation: "Director & Head of Department\nBalaji Institute of Technology and Management (BITM)\nSri Balaji University, Pune (SBUP)",
};

const SriBalajiLetterheadGenerator = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [activeTab, setActiveTab] = useState<"form" | "preview">("form");

  const [formData, setFormData] = useState<BalajiFormData>(() => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleExportPDF = async () => {
    try {
      setIsExporting(true);
      toast.info("Generating PDF via Puppeteer in background...");

      const query = encodeURIComponent("/sri-balaji/letterhead?data=" + encodeURIComponent(JSON.stringify(formData)));
      const response = await fetch(`/api/export-pdf?path=${query}&filename=Sri_Balaji_University_Letterhead.pdf`);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Export failed with status ${response.status}`);
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = "Sri_Balaji_University_Letterhead.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(downloadUrl);
      toast.success("Sri Balaji University Letterhead PDF downloaded successfully.");
    } catch (error) {
      console.error("Export failed", error);
      toast.error(`Failed to export PDF: ${error instanceof Error ? error.message : "Unknown error"}`);
    } finally {
      setIsExporting(false);
    }
  };

  const PageHeader = () => (
    <div className="w-full relative pt-2">
      {/* Official Banner Header Image from Sri Balaji University */}
      <div className="w-full flex items-center justify-center pb-2">
        <img
          src="/sri-balaji-logo.png"
          alt="Sri Balaji University, Pune"
          className="w-[95%] max-w-[620px] h-auto object-contain"
        />
      </div>

      {/* Constituent Institute Line if selected */}
      {formData.instituteName && (
        <div className="w-full text-center mt-1">
          <p className="text-[#a11d22] font-serif font-bold text-[14px] uppercase tracking-wide">
            {formData.instituteName}
          </p>
        </div>
      )}

      {/* Campus Address & Contact Bar */}
      <div className="w-full text-center mt-1.5 pb-2 text-[9.5px] font-sans text-slate-700 leading-tight">
        <p>
          Survey No. 55/2-7, Tathawade, Off Mumbai-Bangalore Bypass, Pune – 411033, Maharashtra, India
        </p>
        <p className="mt-0.5 text-slate-600">
          Tel: +91 (020) 6674 1235 / 1223 &bull; Email: info@sbup.edu.in / admissions@sbup.edu.in &bull; Web: <span className="text-[#a11d22] font-semibold">www.sbup.edu.in</span>
        </p>
      </div>

      {/* Distinct Gold/Maroon dividing line */}
      <div className="w-full flex flex-col gap-[2px] mt-1 mb-6">
        <div className="w-full h-[2.5px] bg-[#a11d22]"></div>
        <div className="w-full h-[1.5px] bg-[#f2a900]"></div>
      </div>
    </div>
  );

  const PageFooter = () => (
    <div className="w-full relative bg-transparent">
      <div className="w-full flex flex-col gap-[2px] mb-2">
        <div className="w-full h-[1.5px] bg-[#f2a900]"></div>
        <div className="w-full h-[2px] bg-[#a11d22]"></div>
      </div>
      <div className="flex w-full items-center justify-between text-[9px] font-sans text-slate-600">
        <p>Survey No. 55/2-7, Tathawade, Pune – 411033</p>
        <p className="font-semibold text-[#a11d22] tracking-wider uppercase">Sri Balaji University, Pune</p>
        <p className="font-medium">www.sbup.edu.in</p>
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

      {/* Top Navigation Bar */}
      <div className="no-print flex items-center justify-between px-6 py-4 bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium">← Back to Home</Link>
          <span className="text-slate-300">|</span>
          <span className="text-slate-800 font-bold">Sri Balaji University, Pune Letterhead</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab(activeTab === "form" ? "preview" : "form")}
            className="px-4 py-2 rounded-lg text-sm font-medium border border-slate-300 hover:border-slate-400 bg-white text-slate-700 transition-colors flex items-center gap-2"
          >
            <Settings2 className="w-4 h-4" /> {activeTab === "form" ? "Preview" : "Edit Details"}
          </button>
          <button
            onClick={() => window.print()}
            className="px-4 py-2 rounded-lg text-sm font-medium border border-slate-300 hover:border-slate-400 bg-white text-slate-700 transition-colors flex items-center gap-2"
          >
            <Printer className="w-4 h-4" /> Print
          </button>
          <button
            onClick={handleExportPDF}
            disabled={isExporting}
            className="px-5 py-2 rounded-lg text-sm font-bold text-white flex items-center gap-2 transition-all shadow-md hover:opacity-90 bg-[#a11d22] disabled:opacity-60"
          >
            {isExporting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
            {isExporting ? "Generating PDF..." : "Download PDF"}
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Form Panel */}
        {activeTab === "form" && (
          <div className="no-print w-full max-w-md bg-white overflow-y-auto p-6 border-r border-slate-200 flex-shrink-0 shadow-lg z-10">
            <h2 className="text-xl font-bold mb-6 text-slate-800">Document Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Constituent Institute (Optional)</label>
                <select
                  name="instituteName"
                  value={formData.instituteName}
                  onChange={handleChange}
                  className="w-full p-2 text-sm border border-slate-300 rounded focus:border-[#a11d22] focus:ring-1 focus:ring-[#a11d22]"
                >
                  <option value="Balaji Institute of Technology and Management (BITM)">Balaji Institute of Technology and Management (BITM)</option>
                  <option value="Balaji Institute of Modern Management (BIMM)">Balaji Institute of Modern Management (BIMM)</option>
                  <option value="Balaji Institute of International Business (BIIB)">Balaji Institute of International Business (BIIB)</option>
                  <option value="Balaji Institute of Management & Human Resource Development (BIMHRD)">Balaji Institute of Management & Human Resource Development (BIMHRD)</option>
                  <option value="School of Computer Studies (SCS)">School of Computer Studies (SCS)</option>
                  <option value="Balaji Law College (BLC)">Balaji Law College (BLC)</option>
                  <option value="">None (University Level)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Reference No</label>
                  <input
                    className="w-full p-2 text-sm border border-slate-300 rounded focus:border-[#a11d22] focus:ring-1 focus:ring-[#a11d22]"
                    name="referenceNo"
                    value={formData.referenceNo}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Date</label>
                  <input
                    className="w-full p-2 text-sm border border-slate-300 rounded focus:border-[#a11d22] focus:ring-1 focus:ring-[#a11d22]"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Document Title</label>
                <input
                  className="w-full p-2 text-sm border border-slate-300 rounded focus:border-[#a11d22] focus:ring-1 focus:ring-[#a11d22]"
                  name="documentTitle"
                  value={formData.documentTitle}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Recipient Name / Address</label>
                <textarea
                  className="w-full p-2 text-sm border border-slate-300 rounded focus:border-[#a11d22] focus:ring-1 focus:ring-[#a11d22] min-h-[60px]"
                  name="recipientName"
                  value={formData.recipientName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Subject</label>
                <textarea
                  className="w-full p-2 text-sm border border-slate-300 rounded focus:border-[#a11d22] focus:ring-1 focus:ring-[#a11d22] min-h-[50px]"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Salutation</label>
                <input
                  className="w-full p-2 text-sm border border-slate-300 rounded focus:border-[#a11d22] focus:ring-1 focus:ring-[#a11d22]"
                  name="salutation"
                  value={formData.salutation}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Body Text (Supports **bold**)</label>
                <textarea
                  className="w-full p-2 text-sm border border-slate-300 rounded focus:border-[#a11d22] focus:ring-1 focus:ring-[#a11d22] min-h-[220px]"
                  name="bodyText"
                  value={formData.bodyText}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Signatory Name</label>
                <input
                  className="w-full p-2 text-sm border border-slate-300 rounded focus:border-[#a11d22] focus:ring-1 focus:ring-[#a11d22]"
                  name="signatoryName"
                  value={formData.signatoryName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Signatory Designation & Dept</label>
                <textarea
                  className="w-full p-2 text-sm border border-slate-300 rounded focus:border-[#a11d22] focus:ring-1 focus:ring-[#a11d22] min-h-[80px]"
                  name="signatoryDesignation"
                  value={formData.signatoryDesignation}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        )}

        {/* Preview Panel */}
        <div className={`flex-1 overflow-y-auto bg-slate-200 flex flex-col items-center py-10 print:bg-white print:p-0 gap-10 print:gap-0 ${activeTab === "form" ? "hidden md:flex" : "flex"}`}>
          <div
            className="print-page bg-white shadow-2xl relative"
            style={{
              width: "210mm",
              height: "297mm",
              minHeight: "297mm",
              maxHeight: "297mm",
              boxSizing: "border-box",
              fontFamily: '"Times New Roman", Times, serif',
              fontSize: "11.5pt",
              color: "#000",
            }}
          >
            {/* Header */}
            <div className="px-12 pt-6">
              <PageHeader />
            </div>

            {/* Content Body */}
            <div className="px-12">
              <div className="flex justify-between items-start text-[11.5pt] mb-6">
                <div>
                  {formData.referenceNo && (
                    <span>
                      <strong>Ref. No.:</strong> {formData.referenceNo}
                    </span>
                  )}
                </div>
                <div>
                  {formData.date && (
                    <span>
                      <strong>Date:</strong> {formData.date}
                    </span>
                  )}
                </div>
              </div>

              {formData.documentTitle && (
                <div className="text-center mb-6">
                  <h2 className="text-[13pt] font-bold uppercase tracking-wider underline underline-offset-4 font-serif">
                    {formData.documentTitle}
                  </h2>
                </div>
              )}

              {formData.recipientName && (
                <div className="mb-4 leading-snug">
                  <p className="font-semibold">To,</p>
                  {formData.recipientName.split("\n").map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              )}

              {formData.subject && (
                <div className="mb-4 leading-snug">
                  <p>
                    <strong>Subject:</strong> {formData.subject}
                  </p>
                </div>
              )}

              {formData.salutation && (
                <div className="mb-3">
                  <p>{formData.salutation}</p>
                </div>
              )}

              <div className="mb-8 leading-[1.45] text-justify space-y-3">
                <ReactMarkdown
                  components={{
                    p: ({ node, ...props }) => <p {...props} />,
                    strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
                  }}
                >
                  {formData.bodyText}
                </ReactMarkdown>
              </div>

              <div className="pt-2">
                <p className="mb-10">Yours faithfully,</p>

                {formData.signatoryName && (
                  <p className="font-bold mb-0.5">{formData.signatoryName}</p>
                )}

                {formData.signatoryDesignation &&
                  formData.signatoryDesignation.split("\n").map((line, i) => (
                    <p key={i} className="leading-snug text-[10.5pt]">
                      {line}
                    </p>
                  ))}
              </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 w-full px-12 pb-8">
              <PageFooter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SriBalajiLetterheadGenerator;
