import React, { useState } from 'react';
import { Settings2, Download, FileText } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const templates = [
  {
    id: 'sanction',
    name: '1. Sanction Letter – Financial & Academic Leave Approval',
    data: {
      referenceNumber: 'SASTRA/2026/SCBT/CONF/001',
      date: '30/08/2026',
      documentTitle: '**SANCTION LETTER**',
      bodyText: `To\n**Shaik Munna Bhasha**\n**Student, School of Chemical and Biotechnology (SCBT)**\n**Student ID: 24SA13047**\n\n**Subject: Financial Sanction and Academic Leave Approval for International Conference**\n\nThis is to certify that **Shaik Munna Bhasha**, holding **Student ID: 24SA13047**, is a bonafide student of the **School of Chemical and Biotechnology (SCBT)** at **SASTRA Deemed to be University**, Thirumalaisamudram, Thanjavur – 613 401, Tamil Nadu, India.\n\nThe University hereby sanctions a **financial assistance of ₹[Amount]/- (Rupees [Amount in Words] Only)** in favor of Shaik Munna Bhasha to support his academic travel and related expenses for attending the **[Conference Name]** in **[Country]**.\n\nThe conference is scheduled to be held from **[Start Date] to [End Date]**, in **[City, Country]**.\n\nHe has been granted **leave** for the period from **[Leave Start Date] to [Leave End Date]** and is required to **return and resume his studies** at SASTRA Deemed to be University.\n\nThe above financial sanction and leave approval have been granted after due consideration. The University has **no objection** to his participation in the above-mentioned academic event.\n\nThis letter is issued at the request of the student for **visa and other official purposes**.\n\n**Place:** Thanjavur, Tamil Nadu, India\n**Date:** 30/08/2026\n\n&nbsp;\n&nbsp;\n&nbsp;\n&nbsp;\n&nbsp;\n\n*(Registrar / Dean of Research)*\n**SASTRA Deemed to be University**`,
      footerNote: 'SASTRA Deemed to be University, Thirumalaisamudram, Thanjavur – 613 401, Tamil Nadu, India.',
      isHTML: false,
    }
  },
  {
    id: 'hostel_receipt',
    name: '2. Hostel Fee Receipt – University Hostel',
    data: {
      referenceNumber: 'SASTRA/HOSTEL/2026-27/0892',
      date: '30/08/2026',
      documentTitle: '',
      bodyText: `<div class="w-full text-[12px] font-sans text-black -mt-4">
  <div class="font-bold mb-1 text-[14px] text-center underline">HOSTEL FEE RECEIPT</div>
  <div class="text-center text-[11px] text-slate-600 mb-3">(Student Copy)</div>
  <div class="border-b-[1.5px] border-dashed border-black/60 mb-4"></div>

  <table class="w-full mb-4 table-fixed text-[12.5px]">
    <tbody>
      <tr class="h-7 align-top">
        <td class="w-[130px] font-semibold text-slate-700">Receipt No.</td>
        <td class="w-3">:</td>
        <td class="font-bold">SASTRA/HOSTEL/2026-27/0892</td>
        <td class="w-[110px] font-semibold text-slate-700">Receipt Date</td>
        <td class="w-3">:</td>
        <td>30/08/2026</td>
      </tr>
      <tr class="h-7 align-top">
        <td class="font-semibold text-slate-700">Student Name</td>
        <td>:</td>
        <td class="font-bold">Shaik Munna Bhasha</td>
        <td class="font-semibold text-slate-700">Reg. No. / ID</td>
        <td>:</td>
        <td>24SA13047</td>
      </tr>
      <tr class="h-7 align-top">
        <td class="font-semibold text-slate-700">Programme</td>
        <td>:</td>
        <td class="font-bold">[Programme Name]</td>
        <td class="font-semibold text-slate-700">Year / Semester</td>
        <td>:</td>
        <td>[Year / Semester]</td>
      </tr>
      <tr class="h-7 align-top">
        <td class="font-semibold text-slate-700">School / Dept.</td>
        <td>:</td>
        <td>School of Chemical and Biotechnology (SCBT)</td>
        <td class="font-semibold text-slate-700">Father / Guardian</td>
        <td>:</td>
        <td class="font-bold">Rabbani Bhasha Nangar</td>
      </tr>
      <tr class="h-7 align-top">
        <td class="font-semibold text-slate-700">Hostel Block</td>
        <td>:</td>
        <td>[Hostel Block & Room No.]</td>
        <td class="font-semibold text-slate-700">Academic Year</td>
        <td>:</td>
        <td>2026 – 2027</td>
      </tr>
    </tbody>
  </table>

  <table class="w-full border-collapse border-[1.5px] border-black mb-3 text-[12.5px]">
    <thead>
      <tr class="bg-[#003087] text-white border-b-[1.5px] border-black">
        <th class="border-r-[1.5px] border-black p-2 text-center w-14 font-bold">S.No.</th>
        <th class="border-r-[1.5px] border-black p-2 text-left font-bold">Particulars</th>
        <th class="border-r-[1.5px] border-black p-2 text-center w-28 font-bold">Period</th>
        <th class="p-2 text-right w-36 font-bold">Amount (₹)</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-t border-black/20">
        <td class="border-r-[1.5px] border-black p-2 text-center">1</td>
        <td class="border-r-[1.5px] border-black p-2">Hostel Accommodation Fee</td>
        <td class="border-r-[1.5px] border-black p-2 text-center">Even Sem 2026-27</td>
        <td class="p-2 text-right">[Amount]</td>
      </tr>
      <tr class="border-t border-black/20">
        <td class="border-r-[1.5px] border-black p-2 text-center">2</td>
        <td class="border-r-[1.5px] border-black p-2">Mess / Catering Charges</td>
        <td class="border-r-[1.5px] border-black p-2 text-center">Even Sem 2026-27</td>
        <td class="p-2 text-right">[Amount]</td>
      </tr>
      <tr class="border-t border-black/20">
        <td class="border-r-[1.5px] border-black p-2 text-center">3</td>
        <td class="border-r-[1.5px] border-black p-2">Electricity / Maintenance Charges</td>
        <td class="border-r-[1.5px] border-black p-2 text-center">Even Sem 2026-27</td>
        <td class="p-2 text-right">[Amount]</td>
      </tr>
      <tr class="border-t-[1.5px] border-black bg-slate-50">
        <td colspan="3" class="border-r-[1.5px] border-black p-2 text-center font-bold">Total Amount</td>
        <td class="p-2 text-right font-bold">[Total]</td>
      </tr>
    </tbody>
  </table>

  <div class="mb-1 text-[12.5px]"><span class="font-semibold">Amount in Words:</span> Rupees [Total Amount in Words] Only</div>
  <div class="mb-1 text-[12.5px]"><span class="font-semibold">Mode of Payment:</span> [Online / DD / Cash] &nbsp;&nbsp; <span class="font-semibold">Transaction / DD No.:</span> [Transaction No.]</div>
  <div class="mb-4 text-[12.5px]"><span class="font-semibold">Remarks:</span> [Any remarks or NIL]</div>

  <div class="border-b-[1.5px] border-dashed border-black/60 mt-[60px] mb-3"></div>
  <div class="flex justify-between text-[12px]">
    <div><span class="font-semibold">Received by:</span> ___________________________</div>
    <div><span class="font-semibold">Authorised Signatory</span><br/><span class="text-slate-600">Warden / Hostel Office</span><br/><span class="text-slate-600">SASTRA Deemed to be University</span></div>
  </div>
</div>`,
      footerNote: 'SASTRA Deemed to be University, Thirumalaisamudram, Thanjavur – 613 401, Tamil Nadu, India.',
      isHTML: true,
    }
  },
  {
    id: 'noc',
    name: '3. No Objection Certificate (NOC) – International Conference',
    data: {
      referenceNumber: 'SASTRA/2026/SCBT/NOC/002',
      date: '30/08/2026',
      documentTitle: '**NO OBJECTION CERTIFICATE (NOC)**',
      bodyText: `To\n**The Embassy / Consulate General of [Country]**\n**[City], India**\n\n**Subject: No Objection Certificate for Academic Conference Attendance – [Country]**\n\nThis is to certify that **Shaik Munna Bhasha** is a bona fide student at the **School of Chemical and Biotechnology (SCBT), SASTRA Deemed to be University**, Thirumalaisamudram, Thanjavur – 613 401, Tamil Nadu, India, bearing **Student ID: 24SA13047**.\n\n**Personal Details:**\n- **Date of Birth:** 05 – 01 – 1992\n- **Father's Name:** Rabbani Bhasha Nangar\n- **Mother's Name:** Halima Bee Nangar\n- **Permanent Address:** H.No: 3/535/J3, Byramal Street, Jillella, Nandyal, Andhra Pradesh – 518 501\n- **Passport No.:** [Passport No.]\n\nHis studies are related to the paper/poster presentation titled **"[Presentation Title]."**\n\nThe University has **no objection to his travel to [Country]** to attend the **[Conference Name]**, scheduled from **[Start Date] – [End Date]** in **[City, Country]**. His participation is purely academic. He is expected to **resume his studies at SASTRA Deemed to be University upon completion of the conference**.\n\nThis certificate is issued at his request for **visa and official purposes**.\n\n**Place:** Thanjavur, Tamil Nadu, India\n**Date:** 30/08/2026\n\n&nbsp;\n&nbsp;\n&nbsp;\n\n*(Registrar / Dean)*\n**SASTRA Deemed to be University**`,
      footerNote: 'SASTRA Deemed to be University, Thirumalaisamudram, Thanjavur – 613 401, Tamil Nadu, India.',
      isHTML: false,
    }
  },
  {
    id: 'bonafide',
    name: '4. Bonafide Student Certificate',
    data: {
      referenceNumber: 'SASTRA/2026/SCBT/BON/003',
      date: '30/08/2026',
      documentTitle: '**BONAFIDE CERTIFICATE**',
      bodyText: `**To Whomsoever It May Concern**\n\nThis is to certify that **Shaik Munna Bhasha**, bearing **Student ID: 24SA13047**, is a bonafide student of the **School of Chemical and Biotechnology (SCBT)** at **SASTRA Deemed to be University**, Thirumalaisamudram, Thanjavur – 613 401, Tamil Nadu, India, during the academic year **2026–2027**.\n\n- **Date of Birth:** 05 – 01 – 1992\n- **Father's Name:** Rabbani Bhasha Nangar\n- **Mother's Name:** Halima Bee Nangar\n- **Permanent Address:** H.No: 3/535/J3, Byramal Street, Jillella, Nandyal, Andhra Pradesh – 518 501\n\nHe is pursuing his studies satisfactorily and his conduct and character are found to be **good**.\n\nThis bonafide certificate is issued upon his request for **official purposes**, including **conference participation, visa processing, and other academic requirements**.\n\n**Place:** Thanjavur, Tamil Nadu, India\n**Date:** 30/08/2026\n\n&nbsp;\n&nbsp;\n&nbsp;\n\n*(Registrar)*\n**SASTRA Deemed to be University**`,
      footerNote: 'SASTRA Deemed to be University, Thirumalaisamudram, Thanjavur – 613 401, Tamil Nadu, India.',
      isHTML: false,
    }
  },
  {
    id: 'bonafide_munna',
    name: '5. Bonafide Certificate – Shaik Munna Bhasha (24SA13047)',
    data: {
      referenceNumber: 'SASTRA/2026/UG/BON/047',
      date: '30/08/2026',
      documentTitle: '**BONAFIDE STUDENT CERTIFICATE**',
      bodyText: `**To Whomsoever It May Concern**

This is to certify that **SHAIK MUNNA BHASHA**, bearing **Student ID: 24SA13047**, is a bonafide student of the **School of Chemical and Biotechnology (SCBT)**, **SASTRA Deemed to be University**, Thirumalaisamudram, Thanjavur – 613 401, Tamil Nadu, India, during the academic year **2026–2027**.

The following are his personal and family details as per University records:

| Particulars | Details |
|---|---|
| **Student Name** | SHAIK MUNNA BHASHA |
| **Student ID** | 24SA13047 |
| **School / Department** | School of Chemical and Biotechnology (SCBT) |
| **University** | SASTRA Deemed to be University, Thanjavur, Tamil Nadu |
| **Date of Birth** | 05 – 01 – 1992 |
| **Father's Name** | Rabbani Bhasha Nangar |
| **Mother's Name** | Halima Bee Nangar |
| **Permanent Address** | H.No: 3/535/J3, Byramal Street, Jillella, Nandyal, Andhra Pradesh – 518 501 |
| **Father's PAN** | CQLPR8612J |

He is pursuing his studies at this University and his conduct and character are found to be **good**.

This certificate is issued upon his request for **official and academic purposes**.

**Place:** Thanjavur, Tamil Nadu, India
**Date:** 30/08/2026

&nbsp;
&nbsp;
&nbsp;
&nbsp;

*(Registrar)*
**SASTRA Deemed to be University**`,
      footerNote: 'SASTRA Deemed to be University, Thirumalaisamudram, Thanjavur – 613 401, Tamil Nadu, India.',
      isHTML: false,
    }
  }
];

const SastraLetterheadGenerator = () => {
  const [activeTab, setActiveTab] = useState<'form' | 'preview'>('form');
  const [isExporting, setIsExporting] = useState(false);
  const [formData, setFormData] = useState(templates[0].data);

  const handleTemplateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const template = templates.find(t => t.id === e.target.value);
    if (template) setFormData(template.data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleExportPDF = () => {
    setIsExporting(true);
    setTimeout(() => { window.print(); setTimeout(() => setIsExporting(false), 1000); }, 100);
  };

  const PageHeader = () => (
    <div style={{ padding: '70px 70px 20px 70px' }}>
      <img
        src="/sastra-header.jpg"
        alt="SASTRA University Letterhead Header"
        style={{ width: '100%', display: 'block' }}
      />
    </div>
  );


  const PageFooter = () => {
    if (!formData.footerNote) return null;
    return (
      <div className="w-full px-[20mm] pb-[12mm] mt-8 text-center font-sans">
        <div className="w-full h-[1.5px] bg-[#003087] mb-2" />
        <div className="text-[#003087] text-[11px] font-semibold">{formData.footerNote}</div>
      </div>
    );
  };

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
          <a href="/sastra" className="text-slate-500 hover:text-slate-800 transition-colors font-medium text-sm">← Back</a>
          <div className="w-px h-6 bg-slate-200" />
          <h1 className="text-xl font-bold text-slate-800 flex items-center gap-3">
            <div className="w-8 h-8 bg-[#003087] text-white rounded-lg flex items-center justify-center shadow-md font-black text-sm">S</div>
            SASTRA Letterhead Generator
          </h1>
        </div>
        <button
          onClick={handleExportPDF}
          disabled={isExporting}
          className={`px-5 py-2.5 bg-[#003087] hover:bg-[#002266] text-white rounded-xl font-medium transition-all shadow-md flex items-center gap-2 ${isExporting ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {isExporting ? (<><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Exporting...</>) : (<><Download className="w-4 h-4" />Export PDF</>)}
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden h-[calc(100vh-73px)] print:h-auto print:block">

        {/* Mobile tabs */}
        <div className="md:hidden flex bg-white border-b border-slate-200 w-full shrink-0 print:hidden">
          <button className={`flex-1 py-3 text-sm font-medium ${activeTab === 'form' ? 'text-[#003087] border-b-2 border-[#003087]' : 'text-slate-500'}`} onClick={() => setActiveTab('form')}>Edit Details</button>
          <button className={`flex-1 py-3 text-sm font-medium ${activeTab === 'preview' ? 'text-[#003087] border-b-2 border-[#003087]' : 'text-slate-500'}`} onClick={() => setActiveTab('preview')}>Preview Document</button>
        </div>

        {/* Sidebar */}
        <div className={`${activeTab === 'form' ? 'flex' : 'hidden'} md:flex w-full md:w-[400px] lg:w-[450px] bg-white/60 backdrop-blur-3xl border-r border-slate-200/60 flex-col h-full overflow-y-auto print:hidden z-10`}>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-6 text-slate-800">
              <Settings2 className="w-5 h-5 text-[#003087]" />
              <h2 className="text-lg font-bold">Document Details</h2>
            </div>

            <div className="mb-6 bg-blue-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
              <label className="flex items-center gap-2 text-sm font-semibold text-blue-900 mb-3">
                <FileText className="w-4 h-4 text-[#003087]" />Quick Templates
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
                <textarea name="bodyText" value={formData.bodyText} onChange={handleChange} rows={15} className="w-full p-4 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none bg-white text-sm text-slate-800 font-mono leading-relaxed resize-none mt-2 shadow-inner" />
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
          <div className="w-full max-w-[210mm] bg-white shadow-xl print:shadow-none print-content-container print:max-w-none page-container" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
            <table className="w-full h-full border-collapse border-spacing-0 table-fixed p-4">
              <thead><tr><td><PageHeader /></td></tr></thead>
              <tbody className="h-full align-top">
                <tr>
                  <td className="align-top px-[20mm] pt-6">
                    <div className="min-h-[600px] text-black text-[13.5px] font-sans leading-relaxed">

                      {(formData.referenceNumber || formData.date) && (
                        <div className="flex justify-between items-start mb-8 text-[14px]">
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
                        <div className="mb-6 prose prose-p:mt-0 prose-p:mb-4 max-w-none leading-[1.65] prose-strong:font-bold prose-strong:text-black text-black text-[13.5px] text-justify">
                          {(formData as { isHTML?: boolean }).isHTML ? (
                            <div dangerouslySetInnerHTML={{ __html: formData.bodyText }} />
                          ) : (
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{formData.bodyText}</ReactMarkdown>
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

export default SastraLetterheadGenerator;
