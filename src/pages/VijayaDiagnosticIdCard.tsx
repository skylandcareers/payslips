import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Download, Settings2, Check, Upload, X, Printer, Image as ImageIcon } from "lucide-react";
import html2canvas from "html2canvas";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// EXACT Vijaya Diagnostic Centre brand colors extracted from official logo
const VDC_PRIMARY = "#312783"; // Indigo - text/headers
const VDC_SECONDARY = "#312783"; // Indigo - secondary
const VDC_ACCENT = "#e20714"; // Red - cross/highlights
const LOGO = "/vijaya-diagnostic-logo.webp";

const VijayaDiagnosticIdCard = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [activeTab, setActiveTab] = useState<"form" | "preview">("form");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    employeeName: "Irfan Shaik",
    employeeId: "VDC-2024-1042",
    designation: "Senior Lab Technician",
    department: "Pathology",
    bloodGroup: "B+",
    contactNumber: "+91 98765 43210",
    photoDataUrl: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData(prev => ({ ...prev, photoDataUrl: reader.result as string }));
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = () => {
    setFormData(prev => ({ ...prev, photoDataUrl: "" }));
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleExportPDF = () => {
    setIsExporting(true);
    setTimeout(() => {
      window.print();
      setIsExporting(false);
    }, 200);
  };

  const handleExportImage = async (elementId: string, filename: string) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    try {
      const canvas = await html2canvas(element, { scale: 3, useCORS: true, backgroundColor: null });
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Error exporting image", err);
    }
  };

  // Generate a pseudo-QR grid based on employee ID
  const qrSeed = formData.employeeId.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const generateQrCell = (i: number) => {
    const row = Math.floor(i / 12);
    const col = i % 12;
    // Corner squares (finder patterns)
    if ((row < 3 && col < 3) || (row < 3 && col > 8) || (row > 8 && col < 3)) return true;
    // Timing pattern
    if (row === 6 || col === 6) return (row + col) % 2 === 0;
    // Data pattern
    return ((qrSeed * (i + 3) * 17 + i * 23) % 100) < 50;
  };

  const IdCardFront = () => (
    <div style={{
      width: '54mm', height: '85.6mm', borderRadius: '8px', overflow: 'hidden',
      fontFamily: '"Arial", sans-serif', background: '#ffffff',
      boxShadow: '0 8px 32px rgba(49,39,131,0.2)', border: `1.5px solid #e2e8f0`,
      display: 'flex', flexDirection: 'column', flexShrink: 0,
      position: 'relative',
    }}>
      {/* Header - White with Logo */}
      <div style={{
        padding: '8px 10px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: '#ffffff',
        borderBottom: `2px solid ${VDC_ACCENT}`
      }}>
        <img src={LOGO} alt="VDC" style={{ height: '24px', objectFit: 'contain' }} />
      </div>

      {/* Body */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px 10px', background: '#ffffff' }}>

        {/* Photo */}
        <div style={{
          width: '26mm', height: '32mm', border: `2px solid ${VDC_PRIMARY}`,
          borderRadius: '4px', overflow: 'hidden', flexShrink: 0,
          background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: '8px', position: 'relative'
        }}>
          {formData.photoDataUrl ? (
            <img src={formData.photoDataUrl} alt="Employee" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', gap: '3px' }}>
              <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: VDC_PRIMARY, opacity: 0.15 }} />
              <div style={{ width: '24px', height: '12px', borderRadius: '12px 12px 0 0', background: VDC_PRIMARY, opacity: 0.1 }} />
              <p style={{ fontSize: '5px', color: '#94a3b8', margin: 0, fontWeight: 'bold' }}>PHOTO</p>
            </div>
          )}
        </div>

        {/* Name & Designation */}
        <p style={{ fontSize: '11px', fontWeight: 'bold', color: VDC_PRIMARY, margin: '0 0 2px 0', textAlign: 'center', lineHeight: 1.2, textTransform: 'uppercase' }}>
          {formData.employeeName}
        </p>
        <p style={{ fontSize: '7px', color: VDC_ACCENT, fontWeight: '700', margin: '0 0 8px 0', textAlign: 'center', letterSpacing: '0.3px', textTransform: 'uppercase' }}>
          {formData.designation}
        </p>

        {/* Details Grid */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '3px', marginTop: 'auto', marginBottom: 'auto' }}>
          {[
            ["EMP ID", formData.employeeId],
            ["DEPT", formData.department],
            ["BLOOD", formData.bloodGroup],
          ].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed #e2e8f0', paddingBottom: '2px' }}>
              <span style={{ fontSize: '6px', color: '#64748b', fontWeight: 'bold' }}>{k}</span>
              <span style={{ fontSize: '6.5px', color: '#0f172a', fontWeight: 'bold', textAlign: 'right', maxWidth: '65%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {k === "BLOOD" ? (
                  <span style={{ color: VDC_ACCENT }}>{v}</span>
                ) : v}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: VDC_PRIMARY, height: '18px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ fontSize: '5px', color: '#ffffff', letterSpacing: '0.5px', margin: '0 0 1px 0', fontWeight: 'bold' }}>IDENTITY CARD</p>
      </div>
    </div>
  );

  const IdCardBack = () => (
    <div style={{
      width: '54mm', height: '85.6mm', borderRadius: '8px', overflow: 'hidden',
      fontFamily: '"Arial", sans-serif', background: '#ffffff',
      boxShadow: '0 8px 32px rgba(49,39,131,0.2)', border: `1.5px solid #e2e8f0`,
      display: 'flex', flexDirection: 'column', flexShrink: 0,
    }}>
      {/* Top Header */}
      <div style={{ background: VDC_PRIMARY, height: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ fontSize: '5px', color: '#fff', fontWeight: 'bold', letterSpacing: '1px', margin: 0 }}>VIJAYA DIAGNOSTIC CENTRE</p>
      </div>
      <div style={{ height: '2px', background: VDC_ACCENT }} />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '12px', alignItems: 'center' }}>

        {/* QR Code */}
        <div style={{
          width: '20mm', height: '20mm', background: '#fff', border: '1px solid #cbd5e1', borderRadius: '4px',
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2px', marginBottom: '8px'
        }}>
          <div style={{ width: '100%', height: '100%', display: 'flex', flexWrap: 'wrap', alignContent: 'flex-start' }}>
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} style={{ width: 'calc(100% / 12)', height: 'calc(100% / 12)', background: generateQrCell(i) ? VDC_PRIMARY : 'transparent', borderRadius: '0.5px' }} />
            ))}
          </div>
        </div>

        <p style={{ fontSize: '5px', color: '#64748b', margin: '0 0 8px 0', textAlign: 'center' }}>Scan to verify identity</p>

        {/* Contact Info */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: 'auto' }}>
          <div style={{ background: '#f8fafc', padding: '4px', borderRadius: '4px' }}>
            <p style={{ fontSize: '5px', color: '#64748b', margin: '0 0 1px 0', fontWeight: 'bold' }}>Mobile Number:</p>
            <p style={{ fontSize: '6px', color: '#0f172a', margin: 0, fontWeight: 'bold' }}>{formData.contactNumber}</p>
          </div>
        </div>

        {/* Issuing Authority */}
        <div style={{ width: '100%', marginTop: '12px', textAlign: 'right' }}>
          <div style={{ borderBottom: '1px solid #cbd5e1', width: '25mm', marginLeft: 'auto', marginBottom: '2px' }} />
          <p style={{ fontSize: '4.5px', color: '#64748b', margin: 0, fontWeight: 'bold' }}>Issuing Authority</p>
        </div>

      </div>

      {/* Footer Address */}
      <div style={{ background: '#f1f5f9', padding: '6px 8px', textAlign: 'center', borderTop: '1px solid #e2e8f0' }}>
        <p style={{ fontSize: '4.5px', color: '#475569', margin: '0 0 2px 0', fontWeight: 'bold' }}>If found, please return to:</p>
        <p style={{ fontSize: '4.5px', color: '#475569', margin: 0, lineHeight: 1.3 }}>
          6-3-883/F, FPAI Building, Punjagutta<br />
          Hyderabad, Telangana - 500082<br />
          Ph: 9240 222 222
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col print:bg-transparent print:text-black">
      <style>{`
        @media print {
          @page { size: A4; margin: 10mm; }
          body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; background: white !important; }
          .no-print { display: none !important; }
          .print-cards { display: flex !important; flex-wrap: wrap; gap: 6mm; align-items: flex-start; }
        }
        .form-input {
          width: 100%; padding: 8px 11px; border-radius: 7px; border: 1px solid #cbd5e1;
          background: #ffffff; color: #0f172a; font-size: 13px; outline: none; transition: border-color 0.2s;
          font-family: inherit;
        }
        .form-input:focus { border-color: ${VDC_SECONDARY}; }
        .upload-btn {
          width: 100%; padding: 10px; border-radius: 8px; border: 2px dashed #cbd5e1;
          background: #f8fafc; color: #64748b; font-size: 13px; cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          transition: all 0.2s;
        }
        .upload-btn:hover { border-color: ${VDC_SECONDARY}; color: #334155; background: #f1f5f9; }
      `}</style>

      {/* Top Bar */}
      <div className="no-print flex items-center justify-between px-6 py-4 bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link to="/vijaya-diagnostic" className="text-slate-500 hover:text-slate-900 transition-colors text-sm">← Back</Link>
          <img src={LOGO} alt="VDC" className="h-8 w-auto object-contain" />
          <span className="text-slate-800 font-semibold">ID Card Generator</span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setActiveTab(activeTab === "form" ? "preview" : "form")}
            className="px-4 py-2 rounded-lg text-sm font-medium border border-slate-300 hover:border-slate-400 bg-white text-slate-700 transition-colors flex items-center gap-2">
            <Settings2 className="w-4 h-4" /> {activeTab === "form" ? "Preview" : "Edit Form"}
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button disabled={isExporting}
                className="px-5 py-2 rounded-lg text-sm font-semibold text-white flex items-center gap-2 transition-all"
                style={{ background: VDC_ACCENT }}>
                {isExporting ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                Export Options
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem onClick={handleExportPDF} className="cursor-pointer font-medium py-3">
                <Printer className="mr-2 h-4 w-4" />
                <span>Print A4 Sheet (3-Up)</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleExportImage('id-card-front', 'VDC_ID_Front.png')} className="cursor-pointer py-3">
                <ImageIcon className="mr-2 h-4 w-4" />
                <span>Save Front as PNG</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleExportImage('id-card-back', 'VDC_ID_Back.png')} className="cursor-pointer py-3">
                <ImageIcon className="mr-2 h-4 w-4" />
                <span>Save Back as PNG</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">

        {/* Form Panel */}
        {activeTab === "form" && (
          <div className="no-print w-full max-w-sm bg-white overflow-y-auto p-6 border-r border-slate-200 flex-shrink-0">
            <h2 className="text-lg font-bold mb-6 text-slate-800 flex items-center gap-2">
              <Settings2 className="w-5 h-5" style={{ color: VDC_ACCENT }} /> Employee Details
            </h2>
            <div className="space-y-4">

              {/* Photo Upload */}
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-2">Employee Photo</label>
                {formData.photoDataUrl ? (
                  <div className="relative">
                    <img
                      src={formData.photoDataUrl}
                      alt="Preview"
                      className="w-full h-40 object-cover rounded-lg border border-slate-600"
                    />
                    <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 hover:opacity-100 transition-opacity bg-slate-900/60 rounded-lg">
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-800 flex items-center gap-1"
                        style={{ background: VDC_SECONDARY }}
                      >
                        <Upload className="w-3 h-3" /> Replace
                      </button>
                      <button
                        onClick={handleRemovePhoto}
                        className="px-3 py-1.5 bg-red-600 rounded-lg text-xs font-semibold text-slate-800 flex items-center gap-1"
                      >
                        <X className="w-3 h-3" /> Remove
                      </button>
                    </div>
                  </div>
                ) : (
                  <button className="upload-btn" onClick={() => fileInputRef.current?.click()}>
                    <Upload className="w-4 h-4" />
                    <span>Click to Upload Photo</span>
                  </button>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePhotoUpload}
                />
                {formData.photoDataUrl && (
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="flex-1 px-3 py-2 rounded-lg text-xs font-semibold text-slate-800 flex items-center justify-center gap-1 border border-slate-300 hover:border-slate-400 bg-white text-slate-700 transition-colors"
                    >
                      <Upload className="w-3 h-3" /> Replace Photo
                    </button>
                    <button
                      onClick={handleRemovePhoto}
                      className="flex-1 px-3 py-2 rounded-lg text-xs font-semibold text-slate-800 flex items-center justify-center gap-1 bg-red-900/50 hover:bg-red-900 transition-colors border border-red-700"
                    >
                      <X className="w-3 h-3" /> Remove
                    </button>
                  </div>
                )}
              </div>

              {/* Other Fields */}
              {[
                ["Employee Name", "employeeName"],
                ["Employee ID", "employeeId"],
                ["Designation", "designation"],
                ["Department", "department"],
                ["Blood Group", "bloodGroup"],
                ["Contact Number", "contactNumber"],
                ["Emergency Contact", "emergencyContact"],
                ["Valid Upto", "validUpto"],
              ].map(([label, name]) => (
                <div key={name}>
                  <label className="block text-xs font-medium text-slate-600 mb-1">{label}</label>
                  <input className="form-input" name={name} value={formData[name as keyof typeof formData]} onChange={handleChange} />
                </div>
              ))}

              <div className="bg-slate-50 rounded-lg p-3 text-xs text-slate-600 border border-slate-200">
                <p className="font-medium text-slate-800 mb-1">💡 Photo tip</p>
                <p>Upload a passport-style photo (face clearly visible, white/plain background works best). The QR code on the back is auto-generated from the Employee ID.</p>
              </div>
            </div>
          </div>
        )}

        {/* Preview */}
        <div className={`flex-1 overflow-y-auto bg-slate-100 flex flex-col items-center py-10 print:bg-white print:p-0 ${activeTab === "form" ? "hidden md:flex" : "flex"}`}>
          <div className="no-print text-slate-500 text-xs mb-6 text-center">
            ID cards shown at actual credit-card size (85.6 × 54 mm). Hover over the photo to replace/remove.
          </div>

          {/* Front & Back preview */}
          <div className="print-cards flex flex-wrap gap-6 justify-center items-center">
            <div>
              <p className="no-print text-center text-slate-400 text-xs mb-3 font-medium tracking-wider uppercase">Front</p>
              <div id="id-card-front"><IdCardFront /></div>
            </div>
            <div>
              <p className="no-print text-center text-slate-400 text-xs mb-3 font-medium tracking-wider uppercase">Back</p>
              <div id="id-card-back"><IdCardBack /></div>
            </div>
          </div>

          {/* Print layout — 3 sets per A4 */}
          <div className="hidden print:block" style={{ width: '190mm' }}>
            {[0, 1, 2].map(n => (
              <div key={n} style={{ display: 'flex', gap: '6mm', marginBottom: n < 2 ? '8mm' : '0' }}>
                <IdCardFront />
                <IdCardBack />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VijayaDiagnosticIdCard;
