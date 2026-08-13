import { Link } from "react-router-dom";
import { Mail, FileOutput, ArrowLeft, Sparkles } from "lucide-react";

const MaruthiGlassIndex = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 relative overflow-hidden flex flex-col justify-center items-center font-sans">

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-[#F97316]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#EA580C]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 w-full max-w-5xl px-6 py-12 flex flex-col items-center">

        {/* Top Navigation */}
        <div className="absolute top-6 left-6 z-20">
          <Link to="/" className="px-5 py-2 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow">
            <ArrowLeft className="w-4 h-4 text-[#F97316]" /> Back to Portal
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16 mt-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm inline-block mb-6 border border-slate-200">
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F97316] to-[#EA580C] flex items-center justify-center text-white font-black text-lg shadow">
                M
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">
                MARUTHI <span className="text-[#F97316]">GLASS MART</span>
              </h1>
            </div>
            <p className="text-xs text-orange-600 font-bold tracking-widest uppercase mt-2">
              Architecture • Glass • Mirrors • Hardware
            </p>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
            Business Document <span className="text-[#F97316]">Generator</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-base font-medium">
            Create professional letterheads, price quotations, estimates, quality guarantee certificates, and official correspondence for Maruthi Glass Mart.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 w-full max-w-md">

          {/* Letterhead Generator Card */}
          <Link to="/maruthi-glass/letterhead" className="group">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full transition-all duration-300 hover:border-[#F97316]/50 hover:shadow-xl hover:-translate-y-1 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center mb-6 text-[#F97316] group-hover:scale-110 group-hover:bg-[#F97316] group-hover:text-white transition-all duration-300 shadow-sm">
                <Mail className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold mb-3 text-slate-900">Official Company Letterhead</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                Draft quotations, glass supply estimates, quality certificates, and business letters on Maruthi Glass Mart letterheads.
              </p>
              <div className="mt-auto w-full flex items-center justify-center gap-2 text-[#F97316] text-sm font-bold group-hover:gap-3 transition-all">
                Launch Letterhead Generator <FileOutput className="w-4 h-4" />
              </div>
            </div>
          </Link>

        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 text-center text-slate-400 text-xs z-10 w-full font-medium">
        &copy; {new Date().getFullYear()} Maruthi Glass Mart. All rights reserved.
      </div>

    </div>
  );
};

export default MaruthiGlassIndex;
