import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { Download, Check, Settings2 } from "lucide-react";

const SathyabamaLetterheadGenerator = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [activeTab, setActiveTab] = useState<"form" | "preview">("form");

  const [formData, setFormData] = useState({
    documentTitle: "",
    date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
    referenceNo: "SU/ADMIN/2026/045",
    recipientName: "To Whomsoever It May Concern",
    recipientAddress: "",
    subject: "Bonafide Certificate",
    salutation: "To Whom It May Concern,",
    bodyText: "This is to certify that Mr. ARUNKUMAR RAJALINGAM, S/O Shri. RAJALINGAM, bearing Registration Number 19S915003, is a bonafide student of Sathyabama Institute of Science and Technology (Deemed to be University).\n\nHe is currently pursuing the M.E. Computer Science and Engineering program in the School of Computing - Department of Computer Science and Engineering.\n\nHe is presently in the Second Year (III Semester) of the program for the academic year 2026-2027.\n\nHis date of birth as per the institution records is 29/04/2002. He is a full-time student of the Institution and is residing in the Institution hostel during his studies. His academic performance and conduct have been found to be satisfactory.\n\nThis certificate is issued upon his request for official and visa purposes.",
    signatoryName: "Dr. T. Sasipraba",
    signatoryDesignation: "Vice Chancellor",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleExportPDF = () => {
    window.print();
  };

  const PageHeader = ({ isPrintFixed = false }: { isPrintFixed?: boolean }) => (
    <div className={`w-full relative ${isPrintFixed ? 'pt-6' : 'pt-4 print:pt-6'}`}>

      <div className="flex flex-col w-full bg-white mt-2 print:mt-2">

        {/* Top Section with Logo and Centered Text */}
        <div className="flex w-full mb-2 items-center justify-center gap-0 print:gap-0 pl-0 pr-[40px] md:pr-[60px] print:pr-[60px]">

          {/* Left Logo */}
          <div className="w-[180px] print:w-[180px] h-[150px] print:h-[150px] flex-shrink-0 flex items-center justify-center">
            <img src="/sathyabama_logo.jpg" alt="Sathyabama Logo" className="w-auto h-full object-contain" referrerPolicy="no-referrer" crossOrigin="anonymous" />
          </div>

          {/* Center Text */}
          <div className="flex flex-col items-center justify-center text-center font-sans">

            {/* Red Block Container */}
            <div className="flex flex-col items-center">
              <h1 className="text-[#bc1204] text-[46px] print:text-[46px] font-black leading-none tracking-tighter" style={{ fontFamily: 'Arial Black, Arial, Helvetica, sans-serif', transform: 'scaleX(1.15)', transformOrigin: 'center' }}>
                SATHYABAMA
              </h1>
              <div className="w-[105%] border-b-[1.5px] border-[#999999] mt-1.5 mb-1.5"></div>
              <h2 className="text-[#bc1204] text-[16px] print:text-[16px] font-black leading-none tracking-tighter" style={{ fontFamily: 'Arial Black, Arial, Helvetica, sans-serif', transform: 'scaleX(1.05)', transformOrigin: 'center' }}>
                INSTITUTE OF SCIENCE AND TECHNOLOGY
              </h2>
            </div>

            {/* Blue Block */}
            <h3 className="text-[#1a3b86] text-[12px] md:text-[14px] print:text-[14px] font-bold uppercase leading-none mt-1 mb-1 tracking-wide">(DEEMED TO BE UNIVERSITY)</h3>
            <h4 className="text-[#1a3b86] text-[14px] md:text-[16px] print:text-[16px] font-extrabold uppercase leading-none mb-1 tracking-wide">CATEGORY - 1 UNIVERSITY BY UGC</h4>
            <p className="text-[#1a3b86] text-[11px] md:text-[12px] print:text-[12px] font-bold tracking-wide leading-none mt-0.5">Accredited with 'A++' grade by NAAC | Approved by AICTE</p>
          </div>

        </div>

        {/* Website Divider */}
        <div className="-mx-14 md:-mx-20 print:-mx-20">
          <div className="w-full border-t-[0.5px] border-[#bc1204] py-1 text-center font-sans bg-white flex flex-col items-center justify-center">
            <p className="text-[#1a3b86] text-[13px] md:text-[15px] print:text-[15px] font-bold tracking-wider mt-0.5">
              www.sathyabama.ac.in
            </p>
          </div>
          <div className="w-full border-b-[0.5px] border-[#bc1204] mb-8"></div>
        </div>

      </div>
    </div>
  );

  const PageFooter = ({ isPrintFixed = false }: { isPrintFixed?: boolean }) => (
    <div className={`w-full relative bg-transparent ${isPrintFixed ? 'pb-6 pt-6' : 'mt-8 pt-6 pb-10 md:pb-14 print:pb-6'}`}>
      {/* Empty footer */}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#800000]/30 flex flex-col print:bg-transparent print:text-black">
      <style>
        {`
          @media print {
            @page { size: A4; margin: 0; }
            body { 
              margin: 0 !important;
              padding: 0 !important;
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
            /* Table trick to repeat headers and footers on every printed page */
            table.print-table { width: 100%; border-spacing: 0; }
            thead.print-header { display: table-header-group; }
            tfoot.print-footer { display: table-footer-group; }
            tbody.print-body { display: table-row-group; }
            
            /* Watermark for print */
            .watermark {
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              opacity: 0.04 !important;
              z-index: 1 !important;
              pointer-events: none;
              width: 55%;
              filter: grayscale(100%) sepia(100%) hue-rotate(320deg) saturate(1000%) brightness(150%) !important;
            }
          }
        `}
      </style>

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 print:hidden shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/sathyabama" className="flex items-center gap-4">
            <div className="text-xl font-extrabold text-[#800000]">SATHYABAMA</div>
            <div className="hidden md:flex items-center gap-2 border-l border-slate-300 pl-4 text-sm font-semibold tracking-wide text-slate-700">
              Document Generators
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <div className="md:hidden flex bg-slate-100 rounded-md p-1 border border-slate-200">
              <button onClick={() => setActiveTab("form")} className={`px-3 py-1 text-sm rounded ${activeTab === "form" ? "bg-white shadow text-[#800000]" : "text-slate-500"}`}>Form</button>
              <button onClick={() => setActiveTab("preview")} className={`px-3 py-1 text-sm rounded ${activeTab === "preview" ? "bg-white shadow text-[#800000]" : "text-slate-500"}`}>Preview</button>
            </div>
            <button onClick={handleExportPDF} disabled={isExporting} className="inline-flex items-center gap-2 bg-[#800000] hover:bg-[#004a82] text-white px-5 py-2.5 text-sm font-semibold transition-colors rounded-lg shadow-sm hover:shadow">
              {isExporting ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />} Export PDF
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-24 pb-12 px-4 container mx-auto flex flex-col md:flex-row gap-8 justify-center print:block print:p-0 print:m-0 print:max-w-none">

        {/* Form Section */}
        <div className={`w-full md:w-[400px] bg-white border border-slate-200 rounded-xl shadow-sm p-6 flex-col gap-6 overflow-y-auto max-h-[calc(100vh-140px)] sticky top-28 print:hidden shrink-0 ${activeTab === "form" ? "flex" : "hidden md:flex"}`}>
          <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
            <Settings2 className="w-5 h-5 text-[#800000]" />
            <h2 className="text-lg font-semibold text-slate-800">Letter Details</h2>
          </div>

          <div className="space-y-4">
            <div className="grid gap-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Metadata</h3>
              <div>
                <label className="block text-xs mb-1 text-slate-600 font-medium">Document Title (Optional)</label>
                <input type="text" name="documentTitle" placeholder="e.g. NO OBJECTION CERTIFICATE" value={formData.documentTitle} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#800000] focus:ring-1 focus:ring-[#800000] outline-none transition-all text-slate-800 font-semibold uppercase" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs mb-1 text-slate-600 font-medium">Date</label>
                  <input type="text" name="date" value={formData.date} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#800000] focus:ring-1 focus:ring-[#800000] outline-none transition-all text-slate-800" />
                </div>
                <div>
                  <label className="block text-xs mb-1 text-slate-600 font-medium">Ref No (Optional)</label>
                  <input type="text" name="referenceNo" value={formData.referenceNo} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#800000] focus:ring-1 focus:ring-[#800000] outline-none transition-all text-slate-800" />
                </div>
              </div>
            </div>

            <div className="grid gap-4 pt-4 border-t border-slate-100">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Recipient</h3>
              <div>
                <label className="block text-xs mb-1 text-slate-600 font-medium">Name / Title</label>
                <textarea name="recipientName" value={formData.recipientName} onChange={handleChange} rows={2} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#800000] focus:ring-1 focus:ring-[#800000] outline-none transition-all text-slate-800 resize-none" />
              </div>
              <div>
                <label className="block text-xs mb-1 text-slate-600 font-medium">Address (Optional)</label>
                <textarea name="recipientAddress" value={formData.recipientAddress} onChange={handleChange} rows={3} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#800000] focus:ring-1 focus:ring-[#800000] outline-none resize-none transition-all text-slate-800" placeholder="e.g. 123 Bank Street, Mumbai" />
              </div>
            </div>

            <div className="grid gap-4 pt-4 border-t border-slate-100">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Letter Content</h3>
              <div>
                <label className="block text-xs mb-1 text-slate-600 font-medium">Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#800000] focus:ring-1 focus:ring-[#800000] outline-none transition-all text-slate-800" />
              </div>
              <div>
                <label className="block text-xs mb-1 text-slate-600 font-medium">Salutation</label>
                <input type="text" name="salutation" value={formData.salutation} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#800000] focus:ring-1 focus:ring-[#800000] outline-none transition-all text-slate-800" />
              </div>
              <div>
                <label className="block text-xs mb-1 text-slate-600 font-medium">Body Text</label>
                <textarea name="bodyText" value={formData.bodyText} onChange={handleChange} rows={8} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#800000] focus:ring-1 focus:ring-[#800000] outline-none resize-none transition-all text-slate-800 font-mono" />
              </div>
            </div>

            <div className="grid gap-4 pt-4 border-t border-slate-100">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Signatory</h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs mb-1 text-slate-600 font-medium">Signatory Name</label>
                  <input type="text" name="signatoryName" value={formData.signatoryName} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#800000] focus:ring-1 focus:ring-[#800000] outline-none transition-all text-slate-800" />
                </div>
                <div>
                  <label className="block text-xs mb-1 text-slate-600 font-medium">Designation</label>
                  <input type="text" name="signatoryDesignation" value={formData.signatoryDesignation} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#800000] focus:ring-1 focus:ring-[#800000] outline-none transition-all text-slate-800" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-Page WYSIWYG Preview Section */}
        <div className={`print-container flex-1 overflow-y-auto bg-slate-200/50 p-4 md:p-8 rounded-2xl md:flex flex-col gap-10 items-center relative print:block print:bg-transparent print:rounded-none print:p-0 print:m-0 print:overflow-visible ${activeTab === "preview" ? "flex" : "hidden"}`}>

          <div className="hidden print:block fixed top-0 left-0 w-full z-50 bg-white">
            <div className="px-14 md:px-20">
              <PageHeader isPrintFixed={true} />
            </div>
          </div>
          <div className="hidden print:block fixed bottom-0 left-0 w-full z-50 bg-white">
            <div className="px-14 md:px-20">
              <PageFooter isPrintFixed={true} />
            </div>
          </div>

          <div className="w-full max-w-[210mm] min-h-[297mm] bg-white text-black shadow-lg rounded-md relative flex flex-col print:shadow-none print:rounded-none print:w-full print:max-w-none print:min-h-0 page-container">

            {/* Clean design, no bleed bar */}

            {/* Preview Watermark (Absolute) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none print:hidden w-[55%] flex justify-center items-center z-0">
              <img src="/sathyabama_logo.jpg" alt="" className="w-full h-auto object-contain" style={{ filter: 'grayscale(100%) sepia(100%) hue-rotate(320deg) saturate(1000%) brightness(150%)' }} />
            </div>

            {/* Print Watermark (Fixed to repeat on all pages) */}
            <img src="/sathyabama_logo.jpg" alt="" className="hidden print:block watermark" />

            <table className="w-full relative z-10 h-full border-collapse border-spacing-0">
              <thead>
                <tr>
                  <td>
                    <div className="px-14 md:px-20 pt-10 md:pt-14 print:pt-0 print:opacity-0">
                      <PageHeader />
                    </div>
                  </td>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="h-full align-top">
                    {/* Content padding */}
                    <div className="px-14 md:px-20 font-sans text-[13px] text-gray-700 leading-[1.6]">

                      <div className="flex justify-between items-start mb-6 mt-4 text-black font-bold text-[13px]">
                        {formData.referenceNo ? (
                          <div>Ref: {formData.referenceNo}</div>
                        ) : (
                          <div></div>
                        )}
                        {formData.date && (
                          <div className="text-right">
                            Dated {formData.date}
                          </div>
                        )}
                      </div>

                      {formData.documentTitle && (
                        <div className="mb-14 mt-6 text-center">
                          <h1 className="text-[16px] font-bold text-black uppercase underline underline-offset-4">
                            {formData.documentTitle}
                          </h1>
                        </div>
                      )}

                      {formData.recipientName && (
                        <div className="mb-6 text-gray-900 leading-relaxed text-[13.5px]">
                          <p><strong>To,</strong></p>
                          {formData.recipientName.split('\n').map((line, i) => (
                            line.trim() ? <p key={`name-${i}`}>{line}</p> : null
                          ))}
                          {formData.recipientAddress.split('\n').map((line, i) => (
                            line.trim() ? <p key={`addr-${i}`}>{line}</p> : null
                          ))}
                        </div>
                      )}

                      {formData.subject && (
                        <div className="mb-6 text-gray-900 text-[13.5px]">
                          <p><strong>Subject: {formData.subject}</strong></p>
                        </div>
                      )}

                      <div className="space-y-4 text-justify text-[13.5px] text-gray-900">
                        <p className="mb-2">{formData.salutation}</p>
                        <ReactMarkdown
                          components={{
                            p: ({ node, ...props }) => <p className="mb-4" {...props} />,
                            h1: ({ node, ...props }) => <h1 className="text-[16px] font-bold text-gray-900 uppercase tracking-widest text-center underline underline-offset-4 mb-6 mt-2" {...props} />,
                            h2: ({ node, ...props }) => <h2 className="text-[15px] font-bold text-gray-900 mb-4 mt-6" {...props} />,
                            h3: ({ node, ...props }) => <h3 className="text-[14px] font-bold text-gray-900 mb-3 mt-4" {...props} />,
                            ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-4 space-y-2 ml-4 marker:text-[#800000]" {...props} />,
                            li: ({ node, ...props }) => <li className="pl-2" {...props} />,
                            strong: ({ node, ...props }) => <strong className="font-[700] text-black print:text-black" {...props} />
                          }}
                        >
                          {formData.bodyText}
                        </ReactMarkdown>
                      </div>

                      <div className="mt-16 mb-10 flex justify-end">
                        <div className="text-center font-sans">
                          {/* Simulated signature image space */}
                          <div className="h-12 w-full"></div>

                          <p className="font-bold text-black text-[13px] uppercase">DIRECTOR</p>
                          <p className="font-bold text-black text-[13px] uppercase mb-8">(STUDENT ADMINISTRATION)</p>
                        </div>
                      </div>

                    </div>
                  </td>
                </tr>
              </tbody>

              <tfoot>
                <tr>
                  <td className="align-bottom">
                    <div className="px-14 md:px-20 print:opacity-0">
                      <PageFooter />
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>

          </div>

        </div>
      </main>
    </div>
  );
};

export default SathyabamaLetterheadGenerator;
