import { useState } from "react";
import { Link } from "react-router-dom";
import { Download, Check, Settings2 } from "lucide-react";

const LetterheadGenerator = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [activeTab, setActiveTab] = useState<"form" | "preview">("form");

  const [formData, setFormData] = useState({
    date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
    referenceNo: "AVS/GEN/2026/102",
    recipientName: "To Whomsoever It May Concern",
    recipientAddress: "",
    subject: "Employment Verification",
    salutation: "Dear Sir/Madam,",
    bodyText: "This is to certify that Mr./Ms. John Doe is a bonafide employee of Aviso Software India LLP, working in the capacity of Senior Software Engineer since August 1, 2026.\n\nThis letter is issued at the request of the employee for the purpose of opening a bank account / visa application.\n\nPlease feel free to contact us for any further clarification.",
    signatoryName: "Jane Smith",
    signatoryDesignation: "Director - Human Resources",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleExportPDF = () => {
    window.print();
  };

  const PageHeader = () => (
    <div className="w-full relative">
      {/* Top Bleed Bar */}
      <div className="absolute -top-10 md:-top-14 -left-10 md:-left-14 w-[calc(100%+80px)] md:w-[calc(100%+112px)] h-[6px] bg-[#E93D44] print:-top-0 print:-left-0 print:w-full z-20"></div>
      
      <div className="flex justify-between items-end pb-3 mb-8 border-b-[1.5px] border-black w-full mt-2 print:mt-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <img src="https://media.licdn.com/dms/image/v2/D560BAQGREzSyNC8Gtw/company-logo_200_200/company-logo_200_200/0/1687330866404/aviso_inc_logo?e=2147483647&v=beta&t=8-c6FAeLmXM5IIbukECZ4W6vgIhc7bdaEYOWfOaMWYw" alt="aviso logo icon" className="h-9 w-auto object-contain" />
            <span className="text-[38px] leading-none tracking-tight text-[#E93D44] lowercase font-sans -mt-1 font-medium">aviso</span>
          </div>
          <div className="text-[10.5px] text-gray-800 font-medium tracking-wide">
            <p>Aviso AI | End-to-End AI Revenue Platform</p>
          </div>
        </div>
        <div className="text-right text-gray-600 text-[10px] leading-[1.4] font-sans">
          <p className="text-gray-900 text-[12px] mb-0.5 font-medium">Aviso Software India LLP</p>
          <p>4th Floor, Block B, Purva Summit</p>
          <p>Whitefield Road, Hitec City, Hyderabad - 500081</p>
          <p className="mt-0.5"><span className="text-[#E93D44]">Email:</span> hr@aviso.com | <span className="text-[#E93D44]">Web:</span> www.aviso.com</p>
        </div>
      </div>
    </div>
  );

  const PageFooter = () => (
    <div className="w-full relative mt-16 pt-4 border-t border-gray-300">
      <div className="text-center font-sans">
        <p className="text-[11px] font-bold text-gray-800 tracking-wider">AVISO SOFTWARE INDIA LLP</p>
        <p className="text-[9px] text-gray-500 mt-1">Regd Office: 4th Floor, Block B, Purva Summit, Whitefield Road, Hitec City, Hyderabad, Telangana - 500081</p>
        <p className="text-[9px] text-gray-500">LLPIN: AAL-4581</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary/30 flex flex-col print:bg-transparent print:text-black">
      <style>
        {`
          @media print {
            @page { size: A4; margin: 0; }
            body { 
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
              padding: 15mm 20mm !important;
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
              opacity: 0.08;
              z-index: -1;
              pointer-events: none;
              width: 60%;
            }
          }
        `}
      </style>

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10 print:hidden">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4">
            <img src="https://media.licdn.com/dms/image/v2/D560BAQGREzSyNC8Gtw/company-logo_200_200/company-logo_200_200/0/1687330866404/aviso_inc_logo?e=2147483647&v=beta&t=8-c6FAeLmXM5IIbukECZ4W6vgIhc7bdaEYOWfOaMWYw" alt="Aviso" className="h-10 w-auto rounded" />
            <div className="hidden md:flex items-center gap-2 border-l border-white/20 pl-4 text-sm font-semibold tracking-wide">
              Document Generators
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <div className="md:hidden flex bg-white/10 rounded-md p-1">
              <button onClick={() => setActiveTab("form")} className={`px-3 py-1 text-sm rounded ${activeTab === "form" ? "bg-primary text-white" : "text-white/70"}`}>Form</button>
              <button onClick={() => setActiveTab("preview")} className={`px-3 py-1 text-sm rounded ${activeTab === "preview" ? "bg-primary text-white" : "text-white/70"}`}>Preview</button>
            </div>
            <button onClick={handleExportPDF} disabled={isExporting} className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 text-sm font-semibold transition-colors rounded">
              {isExporting ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />} Export PDF
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-24 pb-12 px-4 container mx-auto flex flex-col md:flex-row gap-8 justify-center print:block print:p-0 print:m-0 print:max-w-none">
        
        {/* Form Section */}
        <div className={`w-full md:w-[400px] bg-white/5 border border-white/10 rounded-xl p-6 flex-col gap-6 overflow-y-auto max-h-[calc(100vh-140px)] sticky top-28 print:hidden shrink-0 ${activeTab === "form" ? "flex" : "hidden md:flex"}`}>
          <div className="flex items-center gap-2 border-b border-white/10 pb-4">
            <Settings2 className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold">Letterhead Details</h2>
          </div>
          
          <div className="space-y-4">
            <div className="grid gap-4">
              <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest">Metadata</h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs mb-1 text-white/80">Date</label>
                  <input type="text" name="date" value={formData.date} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                </div>
                <div>
                  <label className="block text-xs mb-1 text-white/80">Reference No.</label>
                  <input type="text" name="referenceNo" value={formData.referenceNo} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                </div>
              </div>
            </div>

            <div className="grid gap-4 pt-4 border-t border-white/10">
              <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest">Recipient</h3>
              <div>
                <label className="block text-xs mb-1 text-white/80">Name / Title</label>
                <input type="text" name="recipientName" value={formData.recipientName} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
              </div>
              <div>
                <label className="block text-xs mb-1 text-white/80">Address (Optional)</label>
                <textarea name="recipientAddress" value={formData.recipientAddress} onChange={handleChange} rows={2} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none resize-none" />
              </div>
            </div>

            <div className="grid gap-4 pt-4 border-t border-white/10">
              <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest">Content</h3>
              <div>
                <label className="block text-xs mb-1 text-white/80">Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
              </div>
              <div>
                <label className="block text-xs mb-1 text-white/80">Salutation</label>
                <input type="text" name="salutation" value={formData.salutation} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
              </div>
              <div>
                <label className="block text-xs mb-1 text-white/80">Body</label>
                <textarea name="bodyText" value={formData.bodyText} onChange={handleChange} rows={12} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none resize-y" />
              </div>
            </div>

            <div className="grid gap-4 pt-4 border-t border-white/10">
              <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest">Signatory</h3>
              <div>
                <label className="block text-xs mb-1 text-white/80">Name</label>
                <input type="text" name="signatoryName" value={formData.signatoryName} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
              </div>
              <div>
                <label className="block text-xs mb-1 text-white/80">Designation</label>
                <input type="text" name="signatoryDesignation" value={formData.signatoryDesignation} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Preview Section */}
        <div className={`print-container flex-1 overflow-y-auto bg-gray-200 p-6 rounded-xl md:flex flex-col gap-10 items-center relative print:block print:bg-transparent print:rounded-none print:p-0 print:m-0 print:overflow-visible ${activeTab === "preview" ? "flex" : "hidden"}`}>
          
          <div className="page-container w-full max-w-[210mm] min-h-[297mm] bg-white text-black shadow-2xl p-10 md:p-14 relative print:p-0 overflow-hidden">
            
            {/* Screen Watermark (Print watermark is handled by CSS) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.08] pointer-events-none print:hidden w-[60%] flex justify-center">
              <img src="https://media.licdn.com/dms/image/v2/D560BAQGREzSyNC8Gtw/company-logo_200_200/company-logo_200_200/0/1687330866404/aviso_inc_logo?e=2147483647&v=beta&t=8-c6FAeLmXM5IIbukECZ4W6vgIhc7bdaEYOWfOaMWYw" alt="" className="w-full h-auto object-contain grayscale" />
            </div>

            {/* Print Watermark element */}
            <img src="https://media.licdn.com/dms/image/v2/D560BAQGREzSyNC8Gtw/company-logo_200_200/company-logo_200_200/0/1687330866404/aviso_inc_logo?e=2147483647&v=beta&t=8-c6FAeLmXM5IIbukECZ4W6vgIhc7bdaEYOWfOaMWYw" alt="" className="hidden print:block watermark grayscale" />

            {/* The Print Table Wrapper */}
            <table className="print-table border-none w-full h-full relative z-10">
              <thead className="print-header">
                <tr>
                  <td>
                    <PageHeader />
                  </td>
                </tr>
              </thead>
              
              <tbody className="print-body">
                <tr>
                  <td className="align-top py-4 h-full">
                    <div className="min-h-[500px] flex flex-col font-sans">
                      <div className="flex justify-between items-start mb-12 text-[12px] text-gray-900 tracking-wide">
                        <div className="font-semibold">
                          <p>Ref: {formData.referenceNo}</p>
                        </div>
                        <div className="font-semibold">
                          <p>Date: {formData.date}</p>
                        </div>
                      </div>

                      <div className="mb-10 text-[12px] text-gray-900 leading-relaxed font-semibold">
                        <p>{formData.recipientName}</p>
                        {formData.recipientAddress && (
                          <p className="whitespace-pre-line">{formData.recipientAddress}</p>
                        )}
                      </div>

                      <div className="mb-10 text-center">
                        <h1 className="text-[14px] font-bold text-gray-900 uppercase tracking-widest underline underline-offset-4">
                          SUBJECT: {formData.subject}
                        </h1>
                      </div>
                      
                      <div className="space-y-6 text-gray-900 text-[12px] leading-[1.8] font-serif text-justify mb-20 flex-1">
                        <p>{formData.salutation}</p>
                        <div className="whitespace-pre-wrap">{formData.bodyText}</div>
                      </div>

                      {/* Signature Area */}
                      <div className="mt-auto font-sans pt-12">
                        <p className="text-[12px] text-gray-900 mb-12">For <span className="font-bold">Aviso Software India LLP</span>,</p>
                        
                        <div>
                          <p className="font-bold text-gray-900 text-[14px] mb-1">{formData.signatoryName}</p>
                          <p className="text-[11px] text-gray-700 font-semibold">{formData.signatoryDesignation}</p>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>

              <tfoot className="print-footer">
                <tr>
                  <td>
                    <PageFooter />
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

export default LetterheadGenerator;
