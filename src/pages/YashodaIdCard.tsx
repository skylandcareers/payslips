import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Download, Settings2, Check, Upload, X, Printer, Image as ImageIcon } from "lucide-react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import QRCode from "react-qr-code";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const YASHODA_PRIMARY = "#34316E"; 
const YASHODA_ACCENT = "#F58634"; 

const YashodaIdCard = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [activeTab, setActiveTab] = useState<"form" | "preview">("form");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    employeeName: "Rohan Kumar",
    employeeId: "YH-2024-1042",
    designation: "Senior Staff Nurse",
    department: "Intensive Care Unit",
    bloodGroup: "O+",
    contactNumber: "+91 98765 12345",
    emergencyContact: "+91 90123 45678",
    validUpto: "December 2027",
    photoDataUrl: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setFormData(prev => ({ ...prev, photoDataUrl: reader.result as string }));
    reader.readAsDataURL(file);
  };

  const handleExportPDF = async () => {
    setIsExporting(true);
    try {
      const front = document.getElementById('id-card-front');
      const back = document.getElementById('id-card-back');
      if (!front || !back) return;
      
      const canvasFront = await html2canvas(front, { scale: 3, useCORS: true, backgroundColor: '#ffffff' });
      const canvasBack = await html2canvas(back, { scale: 3, useCORS: true, backgroundColor: '#ffffff' });
      
      // Create A4 PDF (210 x 297 mm)
      const pdf = new jsPDF({ format: 'a4', unit: 'mm' });
      
      // ID Card dims: 54 x 85.6 mm
      const cardW = 54;
      const cardH = 85.6;
      
      // Output exactly 1 copy (Front and Back side-by-side)
      const startX = (210 - (cardW * 2 + 10)) / 2; // Center on A4
      const startY = 40;
      pdf.addImage(canvasFront.toDataURL("image/jpeg", 1.0), 'JPEG', startX, startY, cardW, cardH);
      pdf.addImage(canvasBack.toDataURL("image/jpeg", 1.0), 'JPEG', startX + cardW + 10, startY, cardW, cardH);
      
      pdf.save("Yashoda_ID_Cards.pdf");
    } catch (err) {
      console.error(err);
    } finally {
      setIsExporting(false);
    }
  };

  const handleExportImage = async (elementId: string, filename: string) => {
    const element = document.getElementById(elementId);
    if (!element) return;
    try {
      const canvas = await html2canvas(element, { scale: 3, useCORS: true, backgroundColor: null });
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = filename;
      link.click();
    } catch (err) { console.error(err); }
  };

  const IdCardFront = () => (
    <div style={{
      width: '54mm', height: '85.6mm', borderRadius: '8px', overflow: 'hidden',
      fontFamily: '"Arial", sans-serif', background: '#ffffff',
      boxShadow: '0 8px 32px rgba(52, 49, 110, 0.2)', border: `1px solid #cbd5e1`,
      display: 'flex', flexDirection: 'column', flexShrink: 0, position: 'relative',
    }}>
      {/* Lanyard Hole Punch Marker */}
      <div style={{ position: 'absolute', top: '3mm', left: '50%', transform: 'translateX(-50%)', width: '13mm', height: '3mm', border: '1px solid #cbd5e1', borderRadius: '1.5mm', zIndex: 10, background: '#f8fafc', opacity: 0.8 }} />
      
      {/* Decorative Bottom Shape (Accurate Downward Swoosh) */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '24mm', zIndex: 0 }}>
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M 0,0 C 20,85 45,85 100,85 L 100,100 L 0,100 Z" fill={YASHODA_ACCENT} />
          <path d="M 0,0 C 20,85 45,85 100,85" fill="none" stroke={YASHODA_PRIMARY} strokeWidth="2" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '14px 12px 8px 12px', zIndex: 2 }}>
        
        {/* Logo */}
        <div style={{ marginBottom: '6px', display: 'flex', justifyContent: 'center', width: '100%' }}>
          <img src="/yashoda-logo.png" alt="Yashoda Logo" style={{ height: "36px", objectFit: "contain", maxWidth: "100%" }} />
        </div>

        {/* Photo Container (Large, Edge-to-Edge feel) */}
        <div style={{ width: '30mm', height: '36mm', overflow: 'hidden', flexShrink: 0, background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px', border: '1px solid #e2e8f0' }}>
          {formData.photoDataUrl ? (
            <img src={formData.photoDataUrl} alt="Employee" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <p style={{ fontSize: '5px', color: '#94a3b8', margin: 0, fontWeight: 'bold' }}>PHOTO</p>
          )}
        </div>

        {/* Name (Red Title Case) */}
        <p style={{ fontSize: '12px', fontWeight: 'bold', color: '#d92727', margin: '0 0 5px 0', textAlign: 'center', lineHeight: '1.1' }}>
          {formData.employeeName}
        </p>

        {/* Designation & Department (Black Title Case) */}
        <p style={{ fontSize: '9px', color: '#111', fontWeight: 'bold', margin: '0 0 2px 0', textAlign: 'center' }}>
          {formData.designation}
        </p>
        <p style={{ fontSize: '9px', color: '#111', fontWeight: 'bold', margin: '0 0 4px 0', textAlign: 'center' }}>
          {formData.department}
        </p>

        {/* Bottom Section (Emergency Oval + Signature) */}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 'auto', paddingBottom: '2px', zIndex: 10 }}>
          
          {/* Emergency Graphic (HTML/CSS for perfect html2canvas export) */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '22mm', marginLeft: '-2mm', position: 'relative', zIndex: 5 }}>
            <div style={{ width: '6px', height: '4px', background: '#dc2626', borderTopLeftRadius: '3px', borderTopRightRadius: '3px', zIndex: 2, display: 'flex', justifyContent: 'center' }}>
               <div style={{ width: '2px', height: '2px', background: '#fff', borderRadius: '50%', marginTop: '1px' }} />
            </div>
            <div style={{ width: '23mm', height: '14mm', border: `1.5px solid ${YASHODA_PRIMARY}`, borderRadius: '50%', background: '#fff', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '-1px', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
              <p style={{ fontSize: '4.5px', color: '#dc2626', margin: 0, fontWeight: 'bold', lineHeight: '1' }}>Call</p>
              <p style={{ fontSize: '11px', color: '#dc2626', fontWeight: '900', margin: '-1px 0', letterSpacing: '-0.2px', lineHeight: '1' }}>105910</p>
              <p style={{ fontSize: '3.5px', color: YASHODA_PRIMARY, fontWeight: 'bold', margin: 0, lineHeight: '1' }}>YASHODA</p>
            </div>
            <p style={{ fontSize: '4px', color: '#991b1b', fontWeight: 'bold', margin: '1.5px 0 0 0', textShadow: '0 0 1px #fff' }}>24Hrs EMERGENCY</p>
          </div>

          {/* Issuing Authority (SVG signature for PDF export reliability) */}
          <div style={{ width: '20mm', textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '4px', zIndex: 5 }}>
            <div style={{ height: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1px' }}>
              <svg viewBox="0 0 100 40" width="16mm" height="10mm" style={{ transform: 'rotate(-5deg)', opacity: 0.8 }}>
                 <path d="M 10,25 C 15,10 20,10 25,25 S 35,15 40,25 S 50,15 55,25 S 70,5 80,15" fill="none" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                 <path d="M 45,20 L 55,15" fill="none" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <p style={{ fontSize: '5.5px', color: '#111', fontWeight: 'bold', margin: 0 }}>Issuing Authority</p>
          </div>
        </div>

      </div>
    </div>
  );

  const IdCardBack = () => (
    <div style={{
      width: '54mm', height: '85.6mm', borderRadius: '8px', overflow: 'hidden',
      fontFamily: '"Arial", sans-serif', background: '#ffffff',
      boxShadow: '0 8px 32px rgba(52, 49, 110, 0.2)', border: `1.5px solid #cbd5e1`,
      display: 'flex', flexDirection: 'column', flexShrink: 0,
      position: 'relative'
    }}>
      {/* Lanyard Hole Punch Marker */}
      <div style={{ position: 'absolute', top: '3mm', left: '50%', transform: 'translateX(-50%)', width: '13mm', height: '3mm', border: '1px solid #cbd5e1', borderRadius: '1.5mm', zIndex: 10, background: '#ffffff', opacity: 0.8 }} />
      <div style={{ background: YASHODA_PRIMARY, height: '4px', width: '100%' }} />
      <div style={{ background: YASHODA_ACCENT, height: '2px', width: '100%' }} />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '10px', alignItems: 'center' }}>
        
        {/* Terms and Conditions */}
        <div style={{ width: '100%', marginBottom: '8px' }}>
          <p style={{ fontSize: '5.5px', color: YASHODA_PRIMARY, fontWeight: 'bold', margin: '0 0 4px 0', textTransform: 'uppercase', textAlign: 'center', borderBottom: '1px solid #e2e8f0', paddingBottom: '2px' }}>Terms & Conditions</p>
          <div style={{ textAlign: 'center', margin: 0, fontSize: '4.5px', color: '#475569', lineHeight: 1.4 }}>
            <p style={{ marginBottom: '2px' }}>This card is the property of Yashoda Hospitals.</p>
            <p style={{ marginBottom: '2px' }}>It is non-transferable and must be worn visibly at all times within hospital premises.</p>
            <p style={{ marginBottom: '2px' }}>Loss of this card must be reported immediately to HR.</p>
            <p>Must be surrendered upon resignation or termination of employment.</p>
          </div>
        </div>

        {/* Real QR Code */}
        <div style={{
          background: '#fff', border: '1px solid #e2e8f0', borderRadius: '4px',
          padding: '4px', display: 'flex', flexDirection: 'column', alignItems: 'center',
          marginTop: 'auto', marginBottom: 'auto'
        }}>
          <QRCode
            value={`EMP:${formData.employeeId}|NAME:${formData.employeeName}|DEPT:${formData.department}`}
            size={48}
            bgColor="#ffffff"
            fgColor={YASHODA_PRIMARY}
            level="L"
          />
          <p style={{ fontSize: '4px', color: '#64748b', margin: '3px 0 0 0', fontWeight: 'bold', letterSpacing: '0.5px' }}>SCAN TO VERIFY</p>
        </div>

        {/* Emergency Contact */}
        <div style={{ width: '100%', border: '1px solid #fed7aa', padding: '4px', borderRadius: '4px', background: '#fff7ed', marginTop: '6px', textAlign: 'center' }}>
          <p style={{ fontSize: '4.5px', color: YASHODA_ACCENT, margin: '0 0 1px 0', fontWeight: 'bold' }}>Emergency Contact No.</p>
          <p style={{ fontSize: '6px', color: YASHODA_ACCENT, margin: 0, fontWeight: 'bold' }}>{formData.emergencyContact}</p>
        </div>

      </div>

      {/* Return Address & Issuing Authority */}
      <div style={{ background: '#f8fafc', padding: '8px', borderTop: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
        
        <div style={{ width: '100%', textAlign: 'center', marginBottom: '6px' }}>
          <p style={{ fontSize: '4.5px', color: '#0f172a', margin: '0 0 2px 0', fontWeight: 'bold' }}>If found, please return to:</p>
          <p style={{ fontSize: '4.5px', color: '#475569', margin: 0, lineHeight: 1.3 }}>
            HR Department, Yashoda Hospitals<br/>
            Yashoda House, Plot #64, Nagarjuna Hills<br/>
            Punjagutta, Hyderabad, TS - 500082<br/>
            Phone: +91 40 4567 4567
          </p>
        </div>

        <div style={{ width: '100%', textAlign: 'center', marginTop: '4px' }}>
          <div style={{ borderBottom: `1px solid ${YASHODA_PRIMARY}`, width: '22mm', margin: '0 auto 2px auto' }} />
          <p style={{ fontSize: '4.5px', color: YASHODA_PRIMARY, margin: 0, fontWeight: 'bold' }}>Issuing Authority</p>
        </div>

      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col print:bg-transparent print:text-black">
      <style>{`@media print { @page { size: A4; margin: 10mm; } body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; background: white !important; } .no-print { display: none !important; } .print-cards { display: flex !important; flex-wrap: wrap; gap: 6mm; align-items: flex-start; } } .upload-btn { width: 100%; padding: 10px; border-radius: 8px; border: 2px dashed #cbd5e1; background: #f8fafc; color: #64748b; font-size: 13px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.2s; } .upload-btn:hover { border-color: ${YASHODA_PRIMARY}; color: #334155; background: #f1f5f9; }`}</style>
      
      <div className="no-print flex items-center justify-between px-6 py-4 bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link to="/yashoda" className="text-slate-500 hover:text-slate-900 transition-colors text-sm">← Back</Link>
          <span className="text-slate-800 font-semibold">ID Card Generator</span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setActiveTab(activeTab === "form" ? "preview" : "form")} className="px-4 py-2 rounded-lg text-sm font-medium border border-slate-300 hover:border-slate-400 bg-white text-slate-700 transition-colors flex items-center gap-2">
            <Settings2 className="w-4 h-4" /> {activeTab === "form" ? "Preview" : "Edit Form"}
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button disabled={isExporting} className="px-5 py-2 rounded-lg text-sm font-semibold text-white flex items-center gap-2 transition-all" style={{ background: YASHODA_ACCENT }}>
                {isExporting ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />} Export Options
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem onClick={() => { setIsExporting(true); setTimeout(() => { window.print(); setIsExporting(false); }, 200); }} className="cursor-pointer font-medium py-3 border-b border-slate-100">
                <Printer className="mr-2 h-4 w-4" /> <span>Print (Browser Dialog)</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleExportPDF} className="cursor-pointer font-medium py-3 border-b border-slate-100 text-indigo-700">
                <Download className="mr-2 h-4 w-4" /> <span>Export as PDF File</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleExportImage('id-card-front', 'Yashoda_ID_Front.png')} className="cursor-pointer py-3">
                <ImageIcon className="mr-2 h-4 w-4" /> <span>Save Front as PNG</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleExportImage('id-card-back', 'Yashoda_ID_Back.png')} className="cursor-pointer py-3">
                <ImageIcon className="mr-2 h-4 w-4" /> <span>Save Back as PNG</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {activeTab === "form" && (
          <div className="no-print w-full max-w-sm bg-white overflow-y-auto p-6 border-r border-slate-200 flex-shrink-0">
            <h2 className="text-lg font-bold mb-6 text-slate-800 flex items-center gap-2">Employee Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-2">Employee Photo</label>
                {formData.photoDataUrl ? (
                  <div className="relative">
                    <img src={formData.photoDataUrl} alt="Preview" className="w-full h-40 object-cover rounded-lg border border-slate-200" />
                    <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 hover:opacity-100 transition-opacity bg-slate-900/60 rounded-lg">
                      <button onClick={() => fileInputRef.current?.click()} className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white flex items-center gap-1" style={{ background: YASHODA_PRIMARY }}>
                        <Upload className="w-3 h-3" /> Replace
                      </button>
                      <button onClick={() => { setFormData(prev => ({...prev, photoDataUrl: ""})); if(fileInputRef.current) fileInputRef.current.value = ""; }} className="px-3 py-1.5 bg-red-600 rounded-lg text-xs font-semibold text-white flex items-center gap-1">
                        <X className="w-3 h-3" /> Remove
                      </button>
                    </div>
                  </div>
                ) : (
                  <button className="upload-btn" onClick={() => fileInputRef.current?.click()}><Upload className="w-4 h-4" /><span>Click to Upload Photo</span></button>
                )}
                <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} />
              </div>
              {[
                ["Employee Name", "employeeName"], ["Employee ID", "employeeId"], ["Designation", "designation"],
                ["Department", "department"], ["Blood Group", "bloodGroup"], ["Contact Number", "contactNumber"],
                ["Emergency Contact", "emergencyContact"], ["Valid Upto", "validUpto"]
              ].map(([lbl, name]) => (
                <div key={name}>
                  <label className="block text-xs font-medium text-slate-600 mb-1">{lbl}</label>
                  <input className="w-full p-2 border border-slate-300 rounded" name={name} value={formData[name as keyof typeof formData]} onChange={handleChange} />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className={`flex-1 overflow-y-auto bg-slate-100 flex flex-col items-center py-10 print:bg-white print:p-0 ${activeTab === "form" ? "hidden md:flex" : "flex"}`}>
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
          <div className="hidden print:block" style={{ width: '190mm' }}>
            <div style={{ display: 'flex', gap: '6mm', justifyContent: 'center', marginTop: '20mm' }}>
              <IdCardFront />
              <IdCardBack />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default YashodaIdCard;
