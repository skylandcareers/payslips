import { Link } from "react-router-dom";
import { FileText, Banknote, Mail, FileOutput } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col justify-center items-center">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
      </div>
      
      <div className="relative z-10 w-full max-w-6xl px-6 py-12 flex flex-col items-center">
        
        {/* Top Right Toggle */}
        <div className="absolute top-6 right-6 z-20">
          <Link to="/mouri" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2">
            Switch to MOURI Tech <span className="text-primary">→</span>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-20">
          <img 
            src="https://media.licdn.com/dms/image/v2/D560BAQGREzSyNC8Gtw/company-logo_200_200/company-logo_200_200/0/1687330866404/aviso_inc_logo?e=2147483647&v=beta&t=8-c6FAeLmXM5IIbukECZ4W6vgIhc7bdaEYOWfOaMWYw" 
            alt="Aviso Software India LLP" 
            className="h-20 w-auto rounded-lg mx-auto mb-8 shadow-2xl shadow-primary/20"
          />
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Document <span className="text-primary">Generators</span>
          </h1>
          <p className="text-white/60 max-w-xl mx-auto text-lg">
            Create professional, officially-branded documents in seconds. Select a generator below to get started.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          
          {/* Card 1: Offer Letter */}
          <Link to="/offer-letter" className="group">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full transition-all duration-300 hover:bg-white/10 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <FileText className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Offer Letter</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                Generate comprehensive, legally-sound offer letters with dynamic compensation details and IP clauses.
              </p>
              <div className="mt-auto w-full flex items-center justify-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
                Launch Generator <FileOutput className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Card 2: Payslips */}
          <Link to="/payslips" className="group">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full transition-all duration-300 hover:bg-white/10 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Banknote className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Payslip Generator</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                Create structured monthly salary slips with automated earnings, deductions, and Net Pay calculations.
              </p>
              <div className="mt-auto w-full flex items-center justify-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
                Launch Generator <FileOutput className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Card 3: Letterhead */}
          <Link to="/letterhead" className="group">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full transition-all duration-300 hover:bg-white/10 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Mail className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Company Letterhead</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                Draft general correspondence, NDAs, or employment verification letters on official company letterheads.
              </p>
              <div className="mt-auto w-full flex items-center justify-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
                Launch Generator <FileOutput className="w-4 h-4" />
              </div>
            </div>
          </Link>

        </div>
      </div>
      
      {/* Footer minimal */}
      <div className="absolute bottom-6 text-center text-white/30 text-xs z-10 w-full">
        &copy; {new Date().getFullYear()} Aviso Software India LLP. All rights reserved.
      </div>
      
    </div>
  );
};

export default Index;
