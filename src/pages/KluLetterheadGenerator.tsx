import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { Download, Check, Settings2 } from "lucide-react";

const KluLetterheadGenerator = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [activeTab, setActiveTab] = useState<"form" | "preview">("form");

  const [formData, setFormData] = useState({
    date: '13-03-2024',
    documentTitle: 'Advertisement for the post of JRF/Project Associate',
    description: 'Applications are invited for the post of Junior Research Fellow/Project Associate under DST (SERB-SRG) sponsored research project with Ref:.SRG/2023/001867. The details are mentioned below:',
    bodyText: '**Project Title:** "Development of low damping epitaxial spinel ferrite thin films: Advancement in the field of insulator spintronics"\n\n**Project Duration:** Till 02/2026. The initial appointment will be for one year, which is extendable up to the completion of the project, based on the performance and mutual agreement.\n\n**Post:** JRF/ Project Associate-1 (Total no. of Vacancy - 1)\n\n**Emolument-** Rs. 31000/- pm + HRA.\n\n**Essential Qualifications for JRF/Project/Associate:** M.Sc Physics with minimum of 55% marks +GATE/ NET/ SLET etc. Without GATE/ NET/ SLET, candidate can be appointed as Project Fellow.\n\n**Application Process:** Updated resume of the candidate should be mailed at ramesh.ade1983@gmail.com on or before **March 29th, 2024**. Short-listed candidates would be called for the interview.\n\nNo TA/DA will be paid to the candidates called for interview.\n\nFor any further information, please contact Principal Investigator (PI) of the project:\n\n**Dr. RAMESH ADE**\nAssistant Professor\nDepartment of Physics\nKoneru Lakshmaiah Education Foundation\n(Deemed to be University) Hyderabad, Telangana, India\nContact: +91 9000955238\nEmail: **ramesh.ade1983@gmail.com, ramesh.ade@klh.edu.in**',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleExportPDF = () => {
    setIsExporting(true);
    setTimeout(() => {
      window.print();
      setIsExporting(false);
    }, 100);
  };

  const PageHeader = () => {
    return (
      <div className="w-full relative shrink-0">
        <div className="flex flex-row items-center justify-start w-full px-12 md:px-16 print:px-0 pt-8 pb-6">
          <div className="w-[180px] print:w-[180px] shrink-0 -mt-10">
            <img src="https://klh.edu.in/wp-content/uploads/2024/08/Lg.png" alt="KLH Logo" className="w-full h-auto object-contain" />
          </div>
          <div className="w-[1.5px] bg-slate-700 h-[85px] mx-2 print:mx-2 shrink-0"></div>
          <div className="flex flex-col items-center justify-center flex-1 text-center overflow-visible">
            <h1 className="text-[#CC3B3A] text-[30px] print:text-[30px] font-bold whitespace-nowrap" style={{
              fontFamily: '"Arial Narrow", Arial, sans-serif', transformOrigin: 'center'
            }}>
              Koneru Lakshmaiah Education Foundation
            </h1>
            <p className="text-black text-[11px] md:text-[12px] print:text-[12px] font-sans font-medium whitespace-nowrap">
              (Deemed to be University estd. u/s. 3 of the UGC Act, 1956)
            </p>
            <p className="text-[#333] text-[9.5px] md:text-[10.5px] print:text-[10.5px] font-sans whitespace-nowrap">
              Off-Campus: Bachupally-Gandimaisamma Road, Bowrampet, Hyderabad, Telangana - 500 043.
            </p>
            <p className="text-[#333] text-[9.5px] md:text-[10.5px] print:text-[10.5px] font-sans whitespace-nowrap">
              Phone No: 7815926816, www.klh.edu.in
            </p>
          </div>
        </div>
      </div >
    );
  };

  const PageFooter = () => (
    <div className="w-full relative px-12 md:px-16 print:px-0 pb-2 print:pb-2 mt-8">
      <div className="pt-3 flex flex-col items-center justify-center w-full px-4">
        <div className="flex items-center justify-center text-[#d1232a] text-[11px] md:text-[12px] print:text-[12px] font-sans tracking-[0.3em] font-medium mb-3 w-full whitespace-nowrap">
          <span>EXALTING EDUCATION</span>
          <span className="text-[#333] font-normal tracking-normal mx-8">|</span>
          <span>EPITOMISING EXCELLENCE</span>
        </div>
        <p className="text-slate-800 text-[10.5px] md:text-[11px] print:text-[11.5px] text-center font-sans tracking-tight">
          <strong>Admin.Office:</strong> Parkview, Flat No.103, Ground Floor, H.No 8-2-293,82/W/103, Women's Co-operative Housing Society,
        </p>
        <p className="text-slate-800 text-[10.5px] md:text-[11px] print:text-[11.5px] text-center font-sans tracking-tight mt-0.5">
          Road No.70, Jubilee Hills, Hyderabad-500045 | Phone No: 040 23 542 127
        </p>
      </div>
      <div className="w-full h-px bg-gray-300 mt-4"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 15mm 15mm 15mm 15mm !important;
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
            position: relative;
            min-height: 100vh;
          }
          .watermark {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0.05 !important;
            z-index: -1 !important;
            pointer-events: none;
            width: 50%;
          }
        }
      `}</style>

      <nav className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-50 print:hidden shadow-sm">
        <div className="flex items-center gap-4">
          <Link to="/klu" className="text-slate-500 hover:text-slate-900 transition-colors">
            ← Back
          </Link>
          <div className="h-6 w-px bg-slate-200"></div>
          <h1 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            KL University Letterhead
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleExportPDF}
            disabled={isExporting}
            className="flex items-center gap-2 px-5 py-2.5 bg-red-700 hover:bg-red-800 text-white rounded-lg font-medium transition-all shadow-sm disabled:opacity-75"
          >
            {isExporting ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />}
            {isExporting ? "Exported!" : "Export PDF"}
          </button>
        </div>
      </nav>

      <div className="flex-1 flex flex-col md:flex-row overflow-hidden print:overflow-visible">
        <div className="flex md:hidden border-b border-slate-200 bg-white p-2 gap-2 print:hidden">
          <button
            className={`flex-1 py-2 px-4 rounded-md font-medium text-sm transition-colors ${activeTab === 'form' ? 'bg-red-50 text-red-700' : 'text-slate-600 hover:bg-slate-50'}`}
            onClick={() => setActiveTab('form')}
          >
            Edit Details
          </button>
          <button
            className={`flex-1 py-2 px-4 rounded-md font-medium text-sm transition-colors ${activeTab === 'preview' ? 'bg-red-50 text-red-700' : 'text-slate-600 hover:bg-slate-50'}`}
            onClick={() => setActiveTab('preview')}
          >
            Preview Document
          </button>
        </div>

        <div className={`${activeTab === 'form' ? 'flex' : 'hidden'} md:flex w-full md:w-[400px] lg:w-[450px] bg-white border-r border-slate-200 flex-col h-full overflow-y-auto print:hidden z-10 shadow-[4px_0_24px_rgba(0,0,0,0.02)] relative`}>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-6 text-slate-800">
              <Settings2 className="w-5 h-5 text-red-700" />
              <h2 className="text-lg font-bold">Document Details</h2>
            </div>

            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Document Description (Centered)</label>
                <textarea
                  className="w-full min-h-[80px] p-2 border border-slate-300 rounded-lg text-sm text-black bg-white focus:ring-2 focus:ring-red-500 outline-none"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Enter description text here..."
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700">Date</label>
                <input
                  type="text"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all bg-slate-50 focus:bg-white text-sm text-slate-900"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700">Document Title</label>
                <input
                  type="text"
                  name="documentTitle"
                  value={formData.documentTitle}
                  onChange={handleChange}
                  className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all bg-slate-50 focus:bg-white text-sm text-slate-900"
                  placeholder="e.g. Advertisement for the post of JRF..."
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-slate-700">Body Content (Markdown)</label>
                </div>
                <textarea
                  name="bodyText"
                  value={formData.bodyText}
                  onChange={handleChange}
                  rows={20}
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all bg-slate-50 focus:bg-white text-sm text-slate-900 font-mono leading-relaxed resize-none"
                  placeholder="Main body content..."
                />
              </div>
            </div>
          </div>
        </div>

        <div className={`${activeTab === 'preview' ? 'flex' : 'hidden'} md:flex flex-1 bg-slate-100 overflow-y-auto print:overflow-visible p-4 md:p-8 justify-center print:p-0 print:bg-white`}>

          <div className="w-full max-w-[210mm] bg-white shadow-[0_0_40px_rgba(0,0,0,0.1)] print:shadow-none print-content-container relative print:max-w-none page-container">
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
                  <td className="align-top relative px-12 md:px-16 print:px-0">
                    <div className="h-full block min-h-[500px] relative">

                      {/* Vertical KLEF text */}
                      <div className="absolute print:left-8 w-[40px] flex flex-col gap-1 items-center z-10 text-[#CC3B3A] text-[22px] md:text-[24px] print:text-[24px] font-bold leading-none -mt-4" style={{ fontFamily: '"Arial", sans-serif', transform: 'scale(1.05, 1.3)' }}>
                        <span>K</span>
                        <span>L</span>
                        <span>E</span>
                        <span>F</span>
                      </div>

                      {/* Date */}
                      <div className="text-right font-serif">
                        <span className="text-[14px] text-black font-bold">Date: {formData.date}</span>
                      </div>

                      {/* Document Title & Description */}
                      <div className="mb-6">
                        {formData.documentTitle && (
                          <h2 className="text-[16px] text-black font-bold font-serif underline underline-offset-4 mb-6 text-center">
                            {formData.documentTitle}
                          </h2>
                        )}
                        {formData.description && (
                          <p className="text-[13px] md:text-[14px] print:text-[14px] text-black font-serif leading-relaxed text-center px-[60px] md:px-[80px] print:px-[80px]">
                            {formData.description}
                          </p>
                        )}
                      </div>

                      {/* Main Content */}
                      <div className="text-justify text-[13px] md:text-[14px] print:text-[14px] text-black font-serif w-full break-words">
                        <ReactMarkdown
                          components={{
                            p: ({ node, ...props }) => <p className="mb-4 leading-relaxed" {...props} />,
                            strong: ({ node, ...props }) => <strong className="font-[700] text-black print:text-black" {...props} />,
                            ul: ({ node, ...props }) => <ul className="list-disc pl-5 mb-4 space-y-1" {...props} />,
                            ol: ({ node, ...props }) => <ol className="list-decimal pl-5 mb-4 space-y-1" {...props} />,
                            li: ({ node, ...props }) => <li className="leading-relaxed" {...props} />,
                          }}
                        >
                          {formData.bodyText}
                        </ReactMarkdown>
                      </div>

                    </div>
                  </td>
                </tr>
              </tbody>

              <tfoot>
                <tr>
                  <td>
                    <PageFooter />
                    <div className="h-[20px] print:h-0"></div>
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

export default KluLetterheadGenerator;
