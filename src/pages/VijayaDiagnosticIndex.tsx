import { Link } from "react-router-dom";
import { FileText, Banknote, CreditCard, FileOutput } from "lucide-react";

// Exact Vijaya Diagnostic Centre brand colors from official logo
const VDC_PRIMARY = "#312783"; // Indigo - text/headers
const VDC_SECONDARY = "#312783"; // Indigo - secondary
const VDC_ACCENT = "#e20714"; // Red - cross/highlights

const VijayaDiagnosticIndex = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 relative overflow-hidden flex flex-col justify-center items-center font-sans">

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full blur-[120px] animate-pulse" style={{ background: `${VDC_ACCENT}12`, animationDuration: '6s' }} />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] animate-pulse" style={{ background: `${VDC_SECONDARY}10`, animationDuration: '8s', animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-6 py-12 flex flex-col items-center">

        {/* Back button */}
        <div className="absolute top-6 left-6 z-20">
          <Link to="/" className="px-5 py-2 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md">
            <span style={{ color: VDC_ACCENT }}>←</span> Back to Portal
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16 mt-8">
          <div className="bg-white p-6 rounded-2xl shadow-md inline-block mb-8 border border-slate-100">
            <img
              src="/vijaya-diagnostic-logo.webp"
              alt="Vijaya Diagnostic Centre"
              className="h-16 w-auto mx-auto object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Document <span style={{ color: VDC_ACCENT }}>Generators</span>
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto text-lg">
            Create professional, officially-branded Vijaya Diagnostic Centre documents in seconds. Select a generator below.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">

          {/* Card 1: Offer Letter */}
          <Link to="/vijaya-diagnostic/offer-letter" className="group">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full transition-all duration-300 hover:border-red-300 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:text-white"
                style={{ background: `${VDC_ACCENT}12`, color: VDC_ACCENT }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = VDC_ACCENT; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = `${VDC_ACCENT}12`; }}
              >
                <FileText className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold mb-3 text-slate-900">Offer Letter</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                Generate comprehensive, professionally-branded offer letters with CTC breakdown, role details, and standard HR clauses.
              </p>
              <div className="mt-auto w-full flex items-center justify-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all" style={{ color: VDC_ACCENT }}>
                Launch Generator <FileOutput className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Card 2: Payslip */}
          <Link to="/vijaya-diagnostic/payslips" className="group">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full transition-all duration-300 hover:border-red-300 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:text-white"
                style={{ background: `${VDC_ACCENT}12`, color: VDC_ACCENT }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = VDC_ACCENT; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = `${VDC_ACCENT}12`; }}
              >
                <Banknote className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold mb-3 text-slate-900">Payslip Generator</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                Create structured monthly salary slips with automated earnings, deductions, PF, and Net Pay calculations.
              </p>
              <div className="mt-auto w-full flex items-center justify-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all" style={{ color: VDC_ACCENT }}>
                Launch Generator <FileOutput className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Card 3: ID Card */}
          <Link to="/vijaya-diagnostic/id-card" className="group">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full transition-all duration-300 hover:border-red-300 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:text-white"
                style={{ background: `${VDC_ACCENT}12`, color: VDC_ACCENT }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = VDC_ACCENT; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = `${VDC_ACCENT}12`; }}
              >
                <CreditCard className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold mb-3 text-slate-900">ID Card Generator</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                Design and print official employee identity cards with photo, designation, department, and QR code.
              </p>
              <div className="mt-auto w-full flex items-center justify-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all" style={{ color: VDC_ACCENT }}>
                Launch Generator <FileOutput className="w-4 h-4" />
              </div>
            </div>
          </Link>

        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 text-center text-slate-400 text-xs z-10 w-full font-medium">
        &copy; {new Date().getFullYear()} Vijaya Diagnostic Centre Limited. All rights reserved.
      </div>

    </div>
  );
};

export default VijayaDiagnosticIndex;
