import React, { useState } from 'react';
import { Settings2, Download, Printer, FileText, Sparkles, ArrowLeft, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const templateOptions = [
  {
    id: 'recommendation',
    name: 'Recommendation & Character Certificate (Legal Science)',
    data: {
      serialNo: '',
      date: '11/July/2026',
      documentTitle: 'TO WHOMSOEVER IT MAY CONCERN',
      showDashedTitle: false,
      bodyText: `This is to certify that **Ms. Shibangi Bose**, a student of the **B.A. LL.B.** programme at **Techno India University, West Bengal**, served as the **Student Coordinator** of the **Techno Legal Aid Society** from **2022 to 2026**.

During her tenure, Ms. Bose demonstrated exceptional leadership, organizational ability, and a strong commitment to legal aid and community outreach. She played a pivotal role in planning and coordinating legal aid camps, legal awareness programmes, legal literacy initiatives, and other activities aimed at promoting access to justice and legal empowerment.

She worked effectively with students, faculty members, legal professionals, and other stakeholders, contributing significantly to the successful implementation of the Society's programmes and enhancing its outreach and impact.

Ms. Bose has consistently displayed diligence, responsibility, integrity, and a sincere commitment to the ideals of social justice and legal service. Her dedication and professionalism make her highly deserving of recognition.

I have no hesitation in recommending **Ms. Shibangi Bose** for any academic, professional, or leadership opportunity. I am confident that she will continue to uphold the highest standards of commitment and excellence in all her future endeavours.

Best regards,`,
      signatoryType: 'hod',
      signatoryName: 'Dr. Debashree Chakraborty',
      signatoryTitle: 'Head & Associate Professor, Department of Legal Science',
      signatoryDept: 'Dept. of Legal Science\nTechno India University, WB',
      location: '',
      issueDate: '',
    }
  },
  {
    id: 'provisional',
    name: 'Provisional Degree Certificate (B.Tech - ECE)',
    data: {
      serialNo: 'Serial No # 20/1001601601',
      date: '',
      documentTitle: 'PROVISIONAL CERTIFICATE',
      showDashedTitle: true,
      bodyText: `This is to certify that **ANIRBAN BHATTACHARYYA**, Father's Name - **PRAVAT KUMAR BHATTACHARYYA**, bearing ID No. **161001052001**, Registration No. **1001601601** of the Session **2016- 2017** has successfully completed **B.Tech-ECE** under **Techno India University, West Bengal** in the year **2020**. He / She has passed and secured CGPA= **9.13**.`,
      signatoryType: 'controller',
      signatoryName: '',
      signatoryTitle: 'Controller of Examinations',
      signatoryDept: 'Techno India University, West Bengal',
      location: 'Kolkata,WB',
      issueDate: '03-08-2020',
    }
  },
  {
    id: 'bonafide',
    name: 'Bonafide Student Certificate',
    data: {
      serialNo: 'Ref No: TIU/REG/BON/2026/089',
      date: '19/August/2026',
      documentTitle: 'BONAFIDE CERTIFICATE',
      showDashedTitle: false,
      bodyText: `This is to certify that **Mr. Rahul Sharma**, Son of **Mr. Alok Sharma**, bearing Student ID No. **221001041005** and Registration No. **1001602412** of the Session **2022-2026**, is a bonafide regular student of **Techno India University, West Bengal**, pursuing his **4-Year B.Tech in Computer Science & Engineering (CSE)**.

He is currently enrolled in the **7th Semester** during the academic year **2025-2026**.

To the best of our knowledge and records, he bears good moral character and exemplary conduct.

This certificate is issued upon his personal request for the official purpose of **Passport / Visa Application / Internship Processing / Educational Loan Formalities**.`,
      signatoryType: 'registrar',
      signatoryName: 'Prof. (Dr.) S. K. Mukherjee',
      signatoryTitle: 'Registrar',
      signatoryDept: 'Techno India University, West Bengal',
      location: 'Kolkata, WB',
      issueDate: '19-08-2026',
    }
  },
  {
    id: 'noc',
    name: 'No Objection Certificate (NOC) for Internship / Training',
    data: {
      serialNo: 'Ref No: TIU/NOC/2026/412',
      date: '19/August/2026',
      documentTitle: 'NO OBJECTION CERTIFICATE (NOC)',
      showDashedTitle: false,
      bodyText: `This is to certify that **Techno India University, West Bengal** has **No Objection** to **Ms. Ananya Roy** (ID No. **231001081012**, Registration No. **1001603519**), a regular student of **B.Tech in Information Technology (Session 2023-2027)**, undergoing an Industrial Internship / Training at **M/s Tata Consultancy Services (TCS), Salt Lake, Kolkata** for a duration of 8 weeks from **1st June 2026 to 31st July 2026**.

Her academic schedule permits participation in this training program without affecting her academic curriculum.

We wish her all success in her professional training endeavors.`,
      signatoryType: 'registrar',
      signatoryName: 'Prof. (Dr.) S. K. Mukherjee',
      signatoryTitle: 'Registrar / Dean Academics',
      signatoryDept: 'Techno India University, West Bengal',
      location: 'Kolkata, WB',
      issueDate: '19-08-2026',
    }
  }
];

const TechnoIndiaLetterheadGenerator = () => {
  const [activeTab, setActiveTab] = useState<'form' | 'preview'>('form');
  const [isExporting, setIsExporting] = useState(false);
  const [selectedFont, setSelectedFont] = useState("'Times New Roman', Times, serif");
  const [showStamp, setShowStamp] = useState(true);

  const [headerData, setHeaderData] = useState({
    universityName: 'TECHNO INDIA UNIVERSITY',
    stateText: 'WEST BENGAL',
    address: 'EM 4, Sector V, Salt Lake, Kolkata-700091, West Bengal, India',
    contact: 'Phone: +91 9836544416/17/18/19, Fax: +91 33 2357 1097',
  });

  const [formData, setFormData] = useState(templateOptions[0].data);

  const handleHeaderChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setHeaderData({ ...headerData, [e.target.name]: e.target.value });
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const loadTemplate = (templateId: string) => {
    const selected = templateOptions.find(t => t.id === templateId);
    if (selected) {
      setFormData(selected.data);
    }
  };

  const handleExportPDF = () => {
    window.print();
  };

  const inputCls = "w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs outline-none transition-all text-slate-800 focus:border-[#d9232a]";
  const labelCls = "block text-[11px] mb-1 text-slate-600 font-semibold";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col print:bg-white print:text-black">
      <style>
        {`
          @media print {
            @page { size: A4; margin: 0mm; }
            body {
              margin: 0 !important; padding: 0 !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              background: white !important;
            }
            .page-container {
              box-shadow: none !important;
              margin: 0 !important;
              width: 210mm !important;
              min-height: 297mm !important;
              padding: 12mm 18mm 18mm !important;
              position: relative;
              page-break-after: always;
            }
          }
        `}
      </style>

      {/* Top Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 print:hidden shadow-sm">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center p-1 overflow-hidden">
              <img src="/techno-india-logo.png" alt="Techno India Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-slate-900 tracking-tight leading-none">TECHNO INDIA UNIVERSITY</span>
              <span className="text-xs text-[#d9232a] font-semibold uppercase tracking-wider">West Bengal • Document Generator</span>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <div className="md:hidden flex bg-slate-100 rounded-md p-1 border border-slate-200">
              <button onClick={() => setActiveTab("form")} className={`px-3 py-1 text-xs rounded font-bold ${activeTab === "form" ? "bg-white shadow text-[#d9232a]" : "text-slate-500"}`}>Form</button>
              <button onClick={() => setActiveTab("preview")} className={`px-3 py-1 text-xs rounded font-bold ${activeTab === "preview" ? "bg-white shadow text-[#d9232a]" : "text-slate-500"}`}>Preview</button>
            </div>
            <button onClick={handleExportPDF} disabled={isExporting} className="inline-flex items-center gap-2 text-white px-5 py-2.5 text-xs font-bold rounded-lg shadow hover:bg-red-700 transition-colors bg-[#d9232a]">
              <Printer className="w-4 h-4" /> Print / Export PDF
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20 pb-12 px-4 container mx-auto flex flex-col md:flex-row gap-8 justify-center print:block print:p-0 print:m-0 print:max-w-none">

        {/* Sidebar Controls */}
        <div className={`w-full md:w-[380px] bg-white border border-slate-200 rounded-xl shadow-sm p-6 flex-col gap-6 overflow-y-auto max-h-[calc(100vh-120px)] sticky top-24 print:hidden shrink-0 ${activeTab === "form" ? "flex" : "hidden md:flex"}`}>

          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <Settings2 className="w-4 h-4 text-[#d9232a]" />
              <h2 className="text-base font-bold text-slate-900">Document Settings</h2>
            </div>
          </div>

          {/* Template Selectors */}
          <div>
            <label className="block text-[11px] mb-2 text-[#d9232a] font-extrabold uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#d9232a]" /> Select Document Template
            </label>
            <div className="grid grid-cols-1 gap-2">
              {templateOptions.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => loadTemplate(t.id)}
                  className="text-left px-3 py-2.5 bg-slate-50 hover:bg-red-50/60 border border-slate-200 rounded-lg text-xs font-bold text-slate-800 transition-all flex items-center justify-between group"
                >
                  <span>{t.name}</span>
                  <FileText className="w-4 h-4 text-[#d9232a] group-hover:scale-110 transition-transform" />
                </button>
              ))}
            </div>
          </div>

          {/* Font Selector */}
          <div className="pt-2 border-t border-slate-100">
            <label className={labelCls}>Document Typography</label>
            <select
              value={selectedFont}
              onChange={(e) => setSelectedFont(e.target.value)}
              className={`${inputCls} cursor-pointer font-medium`}
            >
              <option value="'Times New Roman', Times, serif">Times New Roman (Official University Serif)</option>
              <option value="Georgia, serif">Georgia (Classic Serif)</option>
              <option value="Calibri, Arial, sans-serif">Calibri / Arial (Clean Sans)</option>
            </select>
          </div>



          {/* Header Metadata */}
          <div className="space-y-3 pt-3 border-t border-slate-100">
            <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Header Address</h3>
            <div><label className={labelCls}>Address Line</label><input type="text" name="address" value={headerData.address} onChange={handleHeaderChange} className={inputCls} /></div>
            <div><label className={labelCls}>Contact Line</label><input type="text" name="contact" value={headerData.contact} onChange={handleHeaderChange} className={inputCls} /></div>
          </div>

          {/* Document Content Inputs */}
          <div className="space-y-3 pt-3 border-t border-slate-100">
            <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Document Content</h3>
            <div><label className={labelCls}>Serial / Ref Number</label><input type="text" name="serialNo" value={formData.serialNo} onChange={handleFormChange} className={inputCls} /></div>
            <div><label className={labelCls}>Document Title</label><input type="text" name="documentTitle" value={formData.documentTitle} onChange={handleFormChange} className={inputCls} /></div>
            <div className="grid grid-cols-2 gap-2">
              <div><label className={labelCls}>Date</label><input type="text" name="date" value={formData.date} onChange={handleFormChange} className={inputCls} /></div>
              <div><label className={labelCls}>Issue Date / Location</label><input type="text" name="location" value={formData.location} onChange={handleFormChange} className={inputCls} placeholder="e.g. Kolkata, WB" /></div>
            </div>
            <div>
              <label className={labelCls}>Body Content (Markdown Supported)</label>
              <textarea
                name="bodyText"
                value={formData.bodyText}
                onChange={handleFormChange}
                rows={10}
                className={`${inputCls} resize-none font-mono text-[11px]`}
              />
            </div>
          </div>

          {/* Signatory Details */}
          <div className="space-y-3 pt-3 border-t border-slate-100">
            <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Signatory Info</h3>
            <div><label className={labelCls}>Signatory Name</label><input type="text" name="signatoryName" value={formData.signatoryName} onChange={handleFormChange} className={inputCls} /></div>
            <div><label className={labelCls}>Signatory Title</label><input type="text" name="signatoryTitle" value={formData.signatoryTitle} onChange={handleFormChange} className={inputCls} /></div>
            <div><label className={labelCls}>Department / Stamp Text</label><textarea name="signatoryDept" value={formData.signatoryDept} onChange={handleFormChange} rows={2} className={`${inputCls} resize-none`} /></div>
          </div>

        </div>

        {/* Document WYSIWYG Preview Pane */}
        <div className={`print-container flex-1 overflow-y-auto bg-slate-200/50 p-4 md:p-8 rounded-2xl md:flex flex-col gap-10 items-center relative print:block print:bg-transparent print:rounded-none print:p-0 print:m-0 ${activeTab === "preview" ? "flex" : "hidden"}`}>

          {/* A4 Page Container */}
          <div className="page-container page w-full max-w-[210mm] min-h-[297mm] bg-white text-black shadow-2xl p-10 md:p-14 relative flex flex-col justify-between print:shadow-none print:w-full print:max-w-none" style={{ fontFamily: selectedFont }}>

            <div className="w-full flex flex-col">

              {/* Official Techno India University Header (Matching reference document) */}
              <header className="w-full flex flex-col items-center justify-center text-center pt-2 pb-1 mb-1">
                <div className="w-full mb-3 pb-1">
                  <img src="/techno-india-logo.png" alt="Techno India University West Bengal" className="w-full h-auto object-contain" />
                </div>
                <div className="text-[12.5px] text-gray-900 font-semibold tracking-normal leading-snug">
                  {headerData.address}
                </div>
                <div className="text-[12px] text-gray-900 font-semibold tracking-normal leading-snug mt-0.5">
                  {headerData.contact}
                </div>
              </header>

              {/* Serial / Ref Number */}
              {formData.serialNo && (
                <div className="w-full text-left text-[11pt] mb-4 text-gray-900" style={{ fontFamily: selectedFont }}>
                  {formData.serialNo}
                </div>
              )}

              {/* Document Title */}
              {formData.documentTitle && (
                <div className="w-full text-center mt-3 mb-5">
                  <h2 className="text-[13pt] font-bold text-black uppercase tracking-wider inline-block" style={{ fontFamily: selectedFont }}>
                    {formData.documentTitle}
                  </h2>
                  {formData.showDashedTitle && (
                    <div className="text-gray-600 font-mono text-[11px] leading-none mt-1 tracking-tighter">
                      ----------------------------------------------------------------------------------
                    </div>
                  )}
                </div>
              )}

              {/* Date */}
              {formData.date && (
                <div className="w-full text-right text-[11pt] mb-8 text-black" style={{ fontFamily: selectedFont }}>
                  <strong>Date:</strong> {formData.date}
                </div>
              )}

              {/* Body Text (Enforcing Times New Roman font size & line spacing) */}
              <div className="w-full text-[11pt] leading-[1.55] text-justify text-black my-1 whitespace-pre-line prose-strong:font-bold prose-strong:text-black" style={{ fontFamily: selectedFont }}>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {formData.bodyText ? formData.bodyText.replace(/\n/g, '  \n') : ''}
                </ReactMarkdown>
              </div>

              {/* Provisional Certificate Location & Date of Issue */}
              {formData.location && (
                <div className="w-full text-left text-[11pt] mt-8 space-y-1 text-black" style={{ fontFamily: selectedFont }}>
                  <div><strong>{formData.location}</strong></div>
                  {formData.issueDate && <div>Date of Issue: {formData.issueDate}</div>}
                </div>
              )}

            </div>

            {/* Signature & Stamp Block (Physical Signing & Stamping Space) */}
            <div className="w-full mt-6 pt-2 flex justify-between items-end" style={{ fontFamily: selectedFont }}>

              {/* Right Side: Physical Signature & Seal Space + Editable Designation */}
              <div className="flex flex-col items-center text-center">
                {/* Blank space for physical signing & stamping by HOD / Official */}
                <div className="h-24 w-56 flex items-center justify-center text-gray-300 text-[10px] italic print:text-transparent">

                </div>

                {formData.signatoryName && (
                  <div className="text-[11.5pt] font-bold text-black">{formData.signatoryName}</div>
                )}
                {formData.signatoryTitle && (
                  <div className="text-[10.5pt] font-bold text-gray-900 max-w-[340px]">{formData.signatoryTitle}</div>
                )}
                {formData.signatoryDept && (
                  <div className="text-[10.5pt] font-bold text-gray-900 whitespace-pre-line">{formData.signatoryDept}</div>
                )}
              </div>

            </div>

          </div>

        </div>

      </main>
    </div>
  );
};

export default TechnoIndiaLetterheadGenerator;
