import { Link } from "react-router-dom";
import { Mail, ArrowLeft, Sofa, FileCheck2, Building2 } from "lucide-react";

const AvmFurnitureIndex = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 relative overflow-hidden flex flex-col justify-center items-center font-sans">

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-amber-700/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-900/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 w-full max-w-5xl px-6 py-12 flex flex-col items-center">

        {/* Top Navigation */}
        <div className="absolute top-6 left-6 z-20">
          <Link to="/" className="px-5 py-2 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow">
            <ArrowLeft className="w-4 h-4 text-amber-800" /> Back to Portal
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12 mt-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm inline-block mb-6 border border-slate-200">
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-700 to-amber-900 border-2 border-amber-300 flex items-center justify-center text-white shadow-md">
                <Sofa className="w-9 h-9 text-amber-200" />
              </div>
              <div className="text-left">
                <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight uppercase">
                  AVM <span className="text-amber-800">FURNITURE</span>
                </h1>
                <p className="text-xs text-amber-700 font-bold tracking-widest uppercase">
                  GSTIN: 33DFTPK5651E1Z9 • LALGUDI, TIRUCHIRAPPALLI
                </p>
                <p className="text-[11px] text-slate-500 font-medium">
                  Proprietor: Rajalingam K • Regular Taxpayer
                </p>
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
            Business Document & GST <span className="text-amber-800">Portal</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-base font-medium">
            Generate official GST Registration Certificates, business letterheads, quotations, tax invoices, delivery challans, warranty certificates, and sponsorship declarations for AVM Furniture.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">

          {/* Letterhead Generator Card */}
          <Link to="/avm-furniture/letterhead" className="group">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full transition-all duration-300 hover:border-amber-700/50 hover:shadow-xl hover:-translate-y-1 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-6 text-amber-800 group-hover:scale-110 group-hover:bg-amber-800 group-hover:text-white transition-all duration-300 shadow-sm">
                <Mail className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold mb-3 text-slate-900">Official Letterhead Generator</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                Create official business letterheads, GST profile declarations, tax invoices, quotations, warranty certificates, and financial undertakings.
              </p>
              <div className="w-full flex items-center justify-center gap-2 text-amber-800 font-bold text-sm bg-amber-50 py-3 rounded-xl border border-amber-200/50 group-hover:bg-amber-800 group-hover:text-white transition-all">
                Open Letterhead Portal <Building2 className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* GST Certificate Card */}
          <Link to="/avm-furniture/gst" className="group">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full transition-all duration-300 hover:border-amber-700/50 hover:shadow-xl hover:-translate-y-1 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-6 text-amber-800 group-hover:scale-110 group-hover:bg-amber-800 group-hover:text-white transition-all duration-300 shadow-sm">
                <FileCheck2 className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold mb-3 text-slate-900">GST Registration Certificate</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                Official Form GST REG-06 Certificate of Registration with Annexure A & B, dynamic center/state details, and digital signature block.
              </p>
              <div className="w-full flex items-center justify-center gap-2 text-amber-800 font-bold text-sm bg-amber-50 py-3 rounded-xl border border-amber-200/50 group-hover:bg-amber-800 group-hover:text-white transition-all">
                Open GST Certificate <FileCheck2 className="w-4 h-4" />
              </div>
            </div>
          </Link>

        </div>

      </div>
    </div>
  );
};

export default AvmFurnitureIndex;
