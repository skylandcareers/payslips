import { Link } from "react-router-dom";
import { Mail, FileOutput } from "lucide-react";

const SathyabamaIndex = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 relative overflow-hidden flex flex-col justify-center items-center font-sans">

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-[#800000]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-6 py-12 flex flex-col items-center">

        {/* Top Right Toggle */}
        <div className="absolute top-6 left-6 z-20">
          <Link to="/" className="px-5 py-2 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md">
            <span className="text-[#800000]">←</span> Back to Portal
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16 mt-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm inline-block mb-8 border border-slate-100">
            <img
              src="/sathyabama_logo.jpg"
              alt="Sathyabama University"
              className="h-20 w-auto mx-auto"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-800">
            Document <span className="text-[#800000]">Generators</span>
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">
            Create professional academic and administrative documents on official Sathyabama University letterheads.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="flex justify-center w-full max-w-lg">

          {/* Letterhead Card */}
          <Link to="/sathyabama/letterhead" className="group w-full">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full transition-all duration-300 hover:border-[#800000] hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#800000]/10 flex items-center justify-center mb-6 text-[#800000] group-hover:scale-110 group-hover:bg-[#800000] group-hover:text-white transition-all duration-300">
                <Mail className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-3 text-slate-800">University Letterhead</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                Draft general correspondence, bonafide certificates, or official university letters on Sathyabama letterheads.
              </p>
              <div className="mt-auto w-full flex items-center justify-center gap-2 text-[#800000] text-sm font-semibold bg-[#800000]/5 py-3 rounded-lg group-hover:bg-[#800000] group-hover:text-white group-hover:gap-3 transition-all">
                Launch Generator <FileOutput className="w-4 h-4" />
              </div>
            </div>
          </Link>

        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 text-center text-slate-400 text-xs z-10 w-full font-medium">
        &copy; {new Date().getFullYear()} Sathyabama Institute of Science and Technology.
      </div>

    </div>
  );
};

export default SathyabamaIndex;
