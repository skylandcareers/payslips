import { Link } from "react-router-dom";
import { Mail, FileOutput } from "lucide-react";

const SpoorthiIndex = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-50 to-emerald-50/30 text-slate-900 relative overflow-hidden flex flex-col justify-center items-center font-sans selection:bg-emerald-500/20">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-emerald-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '7s' }} />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-teal-400/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '9s', animationDelay: '2s' }} />
      </div>
      
      <div className="relative z-10 w-full max-w-6xl px-6 py-12 flex flex-col items-center">
        
        {/* Top Right Toggle */}
        <div className="absolute top-6 left-6 z-20">
          <Link to="/" className="px-5 py-2 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md">
            <span className="text-emerald-700">←</span> Back to Portal
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16 mt-8 relative">
          <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] inline-block mb-10 border border-white/60 min-w-[140px] min-h-[140px] flex items-center justify-center transition-transform hover:scale-105 duration-500 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="h-16 w-auto px-4 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-700 font-sans font-bold text-2xl relative z-10 text-center leading-tight">
              SPOORTHI<br/>ASSOCIATES
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-slate-800">
            Spoorthi Associates <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-700 to-teal-500">Generators</span>
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto text-lg leading-relaxed">
            Create professional valuation certificates and engineering reports on official Spoorthi Associates letterheads.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="flex justify-center w-full max-w-lg relative z-20">
          
          {/* Letterhead Card */}
          <Link to="/spoorthi/letterhead" className="group w-full block">
            <div className="bg-white/70 backdrop-blur-2xl border border-white/60 rounded-[2rem] p-10 h-full transition-all duration-500 hover:border-emerald-300 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)] hover:-translate-y-2 flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-emerald-50 to-emerald-100/50 flex items-center justify-center mb-8 text-emerald-600 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-emerald-500/20 group-hover:from-emerald-600 group-hover:to-emerald-500 group-hover:text-white transition-all duration-500 relative z-10 border border-emerald-100 group-hover:border-transparent">
                <Mail className="w-9 h-9" />
              </div>
              
              <h2 className="text-2xl font-bold mb-4 text-slate-800 relative z-10 group-hover:text-emerald-950 transition-colors">Official Letterhead</h2>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-8 flex-1 relative z-10">
                Draft valuation certificates, property reports, and official engineering documents.
              </p>
              
              <div className="mt-auto w-full flex items-center justify-center gap-2 text-emerald-700 text-sm font-bold tracking-wide uppercase bg-emerald-50/80 py-4 rounded-xl group-hover:bg-gradient-to-r group-hover:from-emerald-700 group-hover:to-emerald-600 group-hover:text-white group-hover:gap-4 transition-all duration-300 relative z-10 shadow-sm group-hover:shadow-md">
                Launch Generator <FileOutput className="w-4 h-4" />
              </div>
            </div>
          </Link>

        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-6 text-center text-slate-400 text-xs z-10 w-full font-medium">
        &copy; {new Date().getFullYear()} Spoorthi Associates. All rights reserved.
      </div>
      
    </div>
  );
};

export default SpoorthiIndex;
