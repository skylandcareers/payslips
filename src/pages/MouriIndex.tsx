import { Link } from "react-router-dom";
import { FileText, Banknote, Mail, FileOutput } from "lucide-react";

const MouriIndex = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 relative overflow-hidden flex flex-col justify-center items-center font-sans">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-[#005A9C]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }} />
      </div>
      
      <div className="relative z-10 w-full max-w-6xl px-6 py-12 flex flex-col items-center">
        
        {/* Top Right Toggle */}
        <div className="absolute top-6 right-6 z-20">
          <Link to="/" className="px-5 py-2 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md">
            Switch to Aviso <span className="text-[#005A9C]">→</span>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16 mt-8">
          <div className="bg-white p-4 rounded-xl shadow-sm inline-block mb-8 border border-slate-100">
            <img 
              src="https://www.mouritech.com/wp-content/uploads/2021/10/MT-Home-Logo-1-1.png" 
              alt="MOURI Tech" 
              className="h-14 w-auto mx-auto"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Document <span className="text-[#005A9C]">Generators</span>
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto text-lg">
            Create professional, officially-branded MOURI Tech documents in seconds. Select a generator below to get started.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          
          {/* Card 1: Offer Letter */}
          <Link to="/mouri/offer-letter" className="group">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full transition-all duration-300 hover:border-[#005A9C]/30 hover:shadow-xl hover:shadow-[#005A9C]/10 hover:-translate-y-2 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#005A9C]/10 flex items-center justify-center mb-6 text-[#005A9C] group-hover:scale-110 group-hover:bg-[#005A9C] group-hover:text-white transition-all duration-300">
                <FileText className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold mb-3 text-slate-900">Offer Letter</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                Generate comprehensive, legally-sound offer letters with dynamic compensation details and IP clauses.
              </p>
              <div className="mt-auto w-full flex items-center justify-center gap-2 text-[#005A9C] text-sm font-semibold group-hover:gap-3 transition-all">
                Launch Generator <FileOutput className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Card 2: Payslips */}
          <Link to="/mouri/payslips" className="group">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full transition-all duration-300 hover:border-[#005A9C]/30 hover:shadow-xl hover:shadow-[#005A9C]/10 hover:-translate-y-2 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#005A9C]/10 flex items-center justify-center mb-6 text-[#005A9C] group-hover:scale-110 group-hover:bg-[#005A9C] group-hover:text-white transition-all duration-300">
                <Banknote className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold mb-3 text-slate-900">Payslip Generator</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                Create structured monthly salary slips with automated earnings, deductions, and Net Pay calculations.
              </p>
              <div className="mt-auto w-full flex items-center justify-center gap-2 text-[#005A9C] text-sm font-semibold group-hover:gap-3 transition-all">
                Launch Generator <FileOutput className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Card 3: Letterhead */}
          <Link to="/mouri/letterhead" className="group">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full transition-all duration-300 hover:border-[#005A9C]/30 hover:shadow-xl hover:shadow-[#005A9C]/10 hover:-translate-y-2 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#005A9C]/10 flex items-center justify-center mb-6 text-[#005A9C] group-hover:scale-110 group-hover:bg-[#005A9C] group-hover:text-white transition-all duration-300">
                <Mail className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold mb-3 text-slate-900">Company Letterhead</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                Draft general correspondence, NDAs, or employment verification letters on official company letterheads.
              </p>
              <div className="mt-auto w-full flex items-center justify-center gap-2 text-[#005A9C] text-sm font-semibold group-hover:gap-3 transition-all">
                Launch Generator <FileOutput className="w-4 h-4" />
              </div>
            </div>
          </Link>

        </div>
      </div>
      
      {/* Footer minimal */}
      <div className="absolute bottom-6 text-center text-slate-400 text-xs z-10 w-full font-medium">
        &copy; {new Date().getFullYear()} MOURI Tech Limited. All rights reserved.
      </div>
      
    </div>
  );
};

export default MouriIndex;
