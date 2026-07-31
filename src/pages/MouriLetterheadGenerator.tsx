import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { Download, Check, Settings2 } from "lucide-react";

const MouriLetterheadGenerator = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [activeTab, setActiveTab] = useState<"form" | "preview">("form");

  const [formData, setFormData] = useState({
    documentTitle: "",
    date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
    referenceNo: "MT/GEN/2026/102",
    recipientName: "To Whomsoever It May Concern",
    recipientAddress: "",
    subject: "Employment Verification",
    salutation: "Dear Sir/Madam,",
    bodyText: "This is to certify that Mr./Ms. Jane Doe is a bonafide employee of MOURI Tech Limited, working in the capacity of Senior Software Engineer since August 1, 2026.\n\nThis letter is issued at the request of the employee for the purpose of opening a bank account / visa application.\n\nPlease feel free to contact us for any further clarification.",
    signatoryName: "Jane Smith",
    signatoryDesignation: "Director - Human Resources",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleExportPDF = () => {
    window.print();
  };

  const PageHeader = ({ isPrintFixed = false }: { isPrintFixed?: boolean }) => (
    <div className={`w-full relative ${isPrintFixed ? 'pt-6' : 'pt-2 print:pt-6'}`}>
      
      <div className="flex justify-between items-end pb-4 mb-6 border-b-[12px] border-[#005A9C] w-full bg-white mt-2 print:mt-6">
        <div>
          <img src="/mouri_logo_new.png" alt="MOURI Tech" className="h-14 w-auto object-contain mb-1" />
        </div>
        <div className="text-right text-gray-500 text-[10px] leading-[1.5] font-sans">
          <p className="text-[#005A9C] text-[13px] mb-1 font-bold tracking-wide uppercase">MOURI Tech Limited</p>
          <p>Survey No. 64, 4th Floor, SBR Surya Pearl Sector III</p>
          <p>Hitech City, Madhapur, Hyderabad, TS 500081, INDIA</p>
          <p className="mt-1">
            <span className="text-gray-400">P:</span> +91 40 67254100 &nbsp;|&nbsp; <span className="text-gray-400">E:</span> info@mouritech.org.in &nbsp;|&nbsp; <span className="text-gray-400">W:</span> mouritech.com
          </p>
          <p><span className="text-gray-400">CIN:</span> U72200TG2005PTC048486</p>
        </div>
      </div>
    </div>
  );

  const PageFooter = ({ isPrintFixed = false }: { isPrintFixed?: boolean }) => (
    <div className={`w-full relative bg-white ${isPrintFixed ? 'pb-6 pt-6' : 'mt-8 pt-6 pb-10 md:pb-14 print:pb-6'}`}>
      
      {/* Tech Dot Pattern */}
      <div 
        className="absolute top-1 left-0 w-48 h-10 opacity-[0.15]" 
        style={{ backgroundImage: 'radial-gradient(#005A9C 1px, transparent 1px)', backgroundSize: '8px 8px' }}
      ></div>
      
      {/* Geometric Accent Line */}
      <div className="absolute top-0 left-0 w-32 h-[3px] bg-[#005A9C]"></div>
      <div className="absolute top-0 left-32 w-16 h-[3px] bg-blue-300"></div>

      <div className="flex justify-between items-center font-sans text-[9px] text-gray-400 relative z-10 pl-2">
        <p className="font-semibold text-gray-500 tracking-wider">MOURI TECH LIMITED</p>
        <p>Regd Office: D1 IT Park Hill #2, Visakhapatnam, 530003, AP</p>
        <p>www.mouritech.com</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#005A9C]/30 flex flex-col print:bg-transparent print:text-black">
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
              opacity: 0.04;
              z-index: -1;
              pointer-events: none;
              width: 70%;
            }
          }
        `}
      </style>

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 print:hidden shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/mouri" className="flex items-center gap-4">
            <img src="https://www.mouritech.com/wp-content/uploads/2021/10/MT-Home-Logo-1-1.png" alt="MOURI Tech" className="h-10 w-auto rounded" />
            <div className="hidden md:flex items-center gap-2 border-l border-slate-300 pl-4 text-sm font-semibold tracking-wide text-slate-700">
              Document Generators
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <div className="md:hidden flex bg-slate-100 rounded-md p-1 border border-slate-200">
              <button onClick={() => setActiveTab("form")} className={`px-3 py-1 text-sm rounded ${activeTab === "form" ? "bg-white shadow text-[#005A9C]" : "text-slate-500"}`}>Form</button>
              <button onClick={() => setActiveTab("preview")} className={`px-3 py-1 text-sm rounded ${activeTab === "preview" ? "bg-white shadow text-[#005A9C]" : "text-slate-500"}`}>Preview</button>
            </div>
            <button onClick={handleExportPDF} disabled={isExporting} className="inline-flex items-center gap-2 bg-[#005A9C] hover:bg-[#004a82] text-white px-5 py-2.5 text-sm font-semibold transition-colors rounded-lg shadow-sm hover:shadow">
              {isExporting ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />} Export PDF
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-24 pb-12 px-4 container mx-auto flex flex-col md:flex-row gap-8 justify-center print:block print:p-0 print:m-0 print:max-w-none">
        
        {/* Form Section */}
        <div className={`w-full md:w-[400px] bg-white border border-slate-200 rounded-xl shadow-sm p-6 flex-col gap-6 overflow-y-auto max-h-[calc(100vh-140px)] sticky top-28 print:hidden shrink-0 ${activeTab === "form" ? "flex" : "hidden md:flex"}`}>
          <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
            <Settings2 className="w-5 h-5 text-[#005A9C]" />
            <h2 className="text-lg font-semibold text-slate-800">Letter Details</h2>
          </div>
          
          <div className="space-y-4">
            <div className="grid gap-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Metadata</h3>
              <div>
                <label className="block text-xs mb-1 text-slate-600 font-medium">Document Title (Optional)</label>
                <input type="text" name="documentTitle" placeholder="e.g. NO OBJECTION CERTIFICATE" value={formData.documentTitle} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#005A9C] focus:ring-1 focus:ring-[#005A9C] outline-none transition-all text-slate-800 font-semibold uppercase" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs mb-1 text-slate-600 font-medium">Date</label>
                  <input type="text" name="date" value={formData.date} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#005A9C] focus:ring-1 focus:ring-[#005A9C] outline-none transition-all text-slate-800" />
                </div>
                <div>
                  <label className="block text-xs mb-1 text-slate-600 font-medium">Ref No (Optional)</label>
                  <input type="text" name="referenceNo" value={formData.referenceNo} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#005A9C] focus:ring-1 focus:ring-[#005A9C] outline-none transition-all text-slate-800" />
                </div>
              </div>
            </div>

            <div className="grid gap-4 pt-4 border-t border-slate-100">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Recipient</h3>
              <div>
                <label className="block text-xs mb-1 text-slate-600 font-medium">Name / Title</label>
                <textarea name="recipientName" value={formData.recipientName} onChange={handleChange} rows={2} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#005A9C] focus:ring-1 focus:ring-[#005A9C] outline-none transition-all text-slate-800 resize-none" />
              </div>
              <div>
                <label className="block text-xs mb-1 text-slate-600 font-medium">Address (Optional)</label>
                <textarea name="recipientAddress" value={formData.recipientAddress} onChange={handleChange} rows={3} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#005A9C] focus:ring-1 focus:ring-[#005A9C] outline-none resize-none transition-all text-slate-800" placeholder="e.g. 123 Bank Street, Mumbai" />
              </div>
            </div>

            <div className="grid gap-4 pt-4 border-t border-slate-100">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Letter Content</h3>
              <div>
                <label className="block text-xs mb-1 text-slate-600 font-medium">Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#005A9C] focus:ring-1 focus:ring-[#005A9C] outline-none transition-all text-slate-800" />
              </div>
              <div>
                <label className="block text-xs mb-1 text-slate-600 font-medium">Salutation</label>
                <input type="text" name="salutation" value={formData.salutation} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#005A9C] focus:ring-1 focus:ring-[#005A9C] outline-none transition-all text-slate-800" />
              </div>
              <div>
                <label className="block text-xs mb-1 text-slate-600 font-medium">Body Text</label>
                <textarea name="bodyText" value={formData.bodyText} onChange={handleChange} rows={8} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#005A9C] focus:ring-1 focus:ring-[#005A9C] outline-none resize-none transition-all text-slate-800 font-mono" />
              </div>
            </div>

            <div className="grid gap-4 pt-4 border-t border-slate-100">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Signatory</h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs mb-1 text-slate-600 font-medium">Signatory Name</label>
                  <input type="text" name="signatoryName" value={formData.signatoryName} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#005A9C] focus:ring-1 focus:ring-[#005A9C] outline-none transition-all text-slate-800" />
                </div>
                <div>
                  <label className="block text-xs mb-1 text-slate-600 font-medium">Designation</label>
                  <input type="text" name="signatoryDesignation" value={formData.signatoryDesignation} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#005A9C] focus:ring-1 focus:ring-[#005A9C] outline-none transition-all text-slate-800" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-Page WYSIWYG Preview Section */}
        <div className={`print-container flex-1 overflow-y-auto bg-slate-200/50 p-4 md:p-8 rounded-2xl md:flex flex-col gap-10 items-center relative print:block print:bg-transparent print:rounded-none print:p-0 print:m-0 print:overflow-visible ${activeTab === "preview" ? "flex" : "hidden"}`}>
          
          <img src="https://www.mouritech.com/wp-content/uploads/2021/10/MT-Home-Logo-1-1.png" alt="" className="hidden print:block watermark grayscale" />

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
            
            {/* Screen Preview Bleed Bar */}
            <div className="absolute top-0 left-0 w-full h-[8px] bg-[#005A9C] z-20 print:hidden rounded-t-md"></div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none print:hidden w-[70%] flex justify-center z-0">
              <img src="https://www.mouritech.com/wp-content/uploads/2021/10/MT-Home-Logo-1-1.png" alt="" className="w-full h-auto object-contain grayscale" />
            </div>

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
                    <div className="px-14 md:px-20 font-sans text-[11px] text-gray-700 leading-[1.6]">
                      
                      {formData.documentTitle && (
                        <div className="mt-8 mb-6 text-center">
                          <h1 className="text-[15px] font-bold text-gray-900 uppercase tracking-widest underline underline-offset-4">
                            {formData.documentTitle}
                          </h1>
                        </div>
                      )}

                      <div className="flex justify-between items-start mb-6 mt-4 text-gray-900">
                        <div>
                          <p><strong>Date:</strong> {formData.date}</p>
                        </div>
                        {formData.referenceNo && (
                          <div className="text-right text-gray-500 font-medium">
                            Ref: {formData.referenceNo}
                          </div>
                        )}
                      </div>

                      <div className="mb-6 text-gray-900 leading-relaxed">
                        <p><strong>To,</strong></p>
                        {formData.recipientName.split('\n').map((line, i) => (
                          line.trim() ? <p key={`name-${i}`}>{line}</p> : null
                        ))}
                        {formData.recipientAddress.split('\n').map((line, i) => (
                          line.trim() ? <p key={i}>{line}</p> : null
                        ))}
                      </div>

                      {formData.subject && (
                        <div className="mb-6 text-gray-900">
                          <p><strong>Subject: {formData.subject}</strong></p>
                        </div>
                      )}

                      <div className="space-y-4 text-justify text-[11.5px] text-gray-900">
                        <p className="mb-2">{formData.salutation}</p>
                        <ReactMarkdown 
                          components={{
                            p: ({node, ...props}) => <p className="mb-4" {...props} />,
                            h1: ({node, ...props}) => <h1 className="text-[14px] font-bold text-gray-900 uppercase tracking-widest text-center underline underline-offset-4 mb-6 mt-2" {...props} />,
                            h2: ({node, ...props}) => <h2 className="text-[13px] font-bold text-gray-900 mb-4 mt-6" {...props} />,
                            h3: ({node, ...props}) => <h3 className="text-[12px] font-bold text-gray-900 mb-3 mt-4" {...props} />,
                            ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-4 space-y-2 ml-4 marker:text-[#005A9C]" {...props} />,
                            li: ({node, ...props}) => <li className="pl-2" {...props} />,
                            strong: ({node, ...props}) => <strong className="font-[700] text-black print:text-black" {...props} />
                          }}
                        >
                          {formData.bodyText}
                        </ReactMarkdown>
                      </div>

                      <div className="mt-12 mb-10">
                        <p className="font-bold text-gray-900 mb-10 text-[10px] uppercase tracking-wide">For MOURI Tech Limited</p>
                        <p className="font-bold text-gray-900 border-t-2 border-gray-200 pt-3 w-56 text-[12px]">{formData.signatoryName}</p>
                        <p className="text-gray-500 mt-0.5">{formData.signatoryDesignation}</p>
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

export default MouriLetterheadGenerator;
