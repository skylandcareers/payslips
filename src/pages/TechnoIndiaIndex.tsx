import { Link } from "react-router-dom";
import { Mail, FileOutput, ArrowLeft, GraduationCap, Award, FileCheck } from "lucide-react";

const TechnoIndiaIndex = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 relative overflow-hidden flex flex-col justify-center items-center font-sans">

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-[#d9232a]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 w-full max-w-5xl px-6 py-12 flex flex-col items-center">

        {/* Top Navigation */}
        <div className="absolute top-6 left-6 z-20">
          <Link to="/" className="px-5 py-2 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow">
            <ArrowLeft className="w-4 h-4 text-[#d9232a]" /> Back to Portal
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12 mt-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm inline-block mb-6 border border-slate-200">
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white border border-slate-200 p-1 flex items-center justify-center overflow-hidden shadow-sm">
                <img src="/techno-india-logo.png" alt="Techno India University" className="w-full h-full object-contain" />
              </div>
              <div className="text-left">
                <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight uppercase">
                  TECHNO INDIA UNIVERSITY
                </h1>
                <p className="text-xs text-[#d9232a] font-bold tracking-widest uppercase">
                  WEST BENGAL • SALT LAKE, KOLKATA
                </p>
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
            Academic Document <span className="text-[#d9232a]">Generator</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-base font-medium">
            Generate official Techno India University letterheads, recommendation letters, provisional degree certificates, bonafide certificates, and NOCs.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 w-full max-w-md">

          {/* Generator Card */}
          <Link to="/techno-india/letterhead" className="group">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full transition-all duration-300 hover:border-[#d9232a]/50 hover:shadow-xl hover:-translate-y-1 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center mb-6 text-[#d9232a] group-hover:scale-110 group-hover:bg-[#d9232a] group-hover:text-white transition-all duration-300 shadow-sm">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold mb-3 text-slate-900">Official Letterhead & Certificate Suite</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                Generate Recommendation Letters, Provisional Degree Certificates, Bonafide Certificates, NOCs, and Official Department Correspondence with custom stamps and signatures.
              </p>
              <div className="mt-auto w-full flex items-center justify-center gap-2 text-[#d9232a] text-sm font-bold group-hover:gap-3 transition-all">
                Launch Document Generator <FileOutput className="w-4 h-4" />
              </div>
            </div>
          </Link>

        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 text-center text-slate-400 text-xs z-10 w-full font-medium">
        &copy; {new Date().getFullYear()} Techno India University, West Bengal. All rights reserved.
      </div>

    </div>
  );
};

export default TechnoIndiaIndex;
