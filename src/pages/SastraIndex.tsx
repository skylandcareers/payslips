import { Link } from "react-router-dom";
import { Mail, FileOutput } from "lucide-react";

const SastraIndex = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-50 to-blue-50/30 text-slate-900 relative overflow-hidden flex flex-col justify-center items-center font-sans">

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#003087]/8 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '7s' }} />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-400/8 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '9s', animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 w-full max-w-5xl px-6 py-12 flex flex-col items-center">

        {/* Back link */}
        <div className="absolute top-6 left-6 z-20">
          <Link to="/" className="px-5 py-2 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-full text-sm font-medium transition-all flex items-center gap-2 shadow-sm hover:shadow-md">
            <span className="text-[#003087]">←</span> Back to Portal
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16 mt-8 relative">
          <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] inline-flex items-center justify-center mb-10 border border-white/60 min-w-[160px] min-h-[100px] transition-transform hover:scale-105 duration-500 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="text-[2.8rem] font-black text-[#003087] leading-none relative z-10" style={{ fontFamily: '"Arial Black", Arial, sans-serif' }}>
              SASTRA
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-slate-800">
            SASTRA University <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#003087] to-[#0052cc]">Generators</span>
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto text-lg leading-relaxed">
            Create professional academic and administrative documents on official SASTRA Deemed to be University letterheads.
          </p>
        </div>

        {/* Card */}
        <div className="flex justify-center w-full max-w-lg">
          <Link to="/sastra/letterhead" className="group w-full block">
            <div className="bg-white/70 backdrop-blur-2xl border border-white/60 rounded-[2rem] p-10 h-full transition-all duration-500 hover:border-blue-300 hover:shadow-[0_20px_40px_-15px_rgba(0,48,135,0.15)] hover:-translate-y-2 flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-50 to-blue-100/50 flex items-center justify-center mb-8 text-[#003087] group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/20 group-hover:from-[#003087] group-hover:to-[#0052cc] group-hover:text-white transition-all duration-500 relative z-10 border border-blue-100 group-hover:border-transparent">
                <Mail className="w-9 h-9" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-slate-800 relative z-10 group-hover:text-blue-950 transition-colors">University Letterhead</h2>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-8 flex-1 relative z-10">
                Draft Sanction Letters, No Objection Certificates, and Bonafide Certificates on official SASTRA University letterheads.
              </p>
              <div className="mt-auto w-full flex items-center justify-center gap-2 text-[#003087] text-sm font-bold tracking-wide uppercase bg-blue-50/80 py-4 rounded-xl group-hover:bg-gradient-to-r group-hover:from-[#003087] group-hover:to-[#0052cc] group-hover:text-white group-hover:gap-4 transition-all duration-300 relative z-10 shadow-sm">
                Launch Generator <FileOutput className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 text-center text-slate-400 text-xs z-10 w-full font-medium">
        &copy; {new Date().getFullYear()} SASTRA Deemed to be University. All rights reserved.
      </div>
    </div>
  );
};

export default SastraIndex;
