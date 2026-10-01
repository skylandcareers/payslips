import { Link } from "react-router-dom";
import { FileText, Banknote, CreditCard, Mail, Plane } from "lucide-react";

const YASHODA_PRIMARY = "#34316E"; // India Blue
const YASHODA_ACCENT = "#F58634"; // Uplifting Orange

const YashodaIndex = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 relative overflow-hidden flex flex-col justify-center items-center font-sans">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full blur-[120px] animate-pulse" style={{ background: `${YASHODA_ACCENT}15`, animationDuration: '6s' }} />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] animate-pulse" style={{ background: `${YASHODA_PRIMARY}10`, animationDuration: '8s', animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-6 py-12 flex flex-col items-center">
        <div className="absolute top-6 left-6 z-20">
          <Link to="/" className="px-5 py-2 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md">
            <span style={{ color: YASHODA_ACCENT }}>←</span> Back to Portal
          </Link>
        </div>

        <div className="text-center mb-16 mt-8">
          <div className="bg-white p-6 rounded-2xl shadow-md inline-block mb-8 border border-slate-100">
             <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                {/* Fallback CSS Logo */}
                <img src="/yashoda-logo.png" alt="Yashoda Hospitals" style={{ height: "40px", objectFit: "contain" }} />
             </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-slate-800">
            Yashoda Hospitals Portal
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
            Generate and manage official documents, offer letters, payslips, and ID cards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {[
            { title: "Blank Letterhead", icon: Mail, path: "/yashoda/letterhead", desc: "Generate blank official letterhead", delay: 0 },
            { title: "Offer Letter", icon: FileText, path: "/yashoda/offer-letter", desc: "Generate official offer letters", delay: 100 },
            { title: "Payslips", icon: Banknote, path: "/yashoda/payslips", desc: "Generate monthly payslips", delay: 200 },
            { title: "ID Card", icon: CreditCard, path: "/yashoda/id-card", desc: "Create employee ID cards", delay: 300 },
            { title: "Visa NOC / Leave Letter", icon: Plane, path: "/yashoda/visa-noc", desc: "Generate NOC for Schengen/Travel Visas", delay: 400 }
          ].map((item, idx) => (
            <Link key={idx} to={item.path} className="group relative bg-white border border-slate-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden flex flex-col h-full" style={{ animationDelay: `${item.delay}ms` }}>
              <div className="absolute top-0 left-0 w-full h-1 transition-all duration-300" style={{ background: YASHODA_ACCENT, transform: 'scaleX(0)', transformOrigin: 'left' }} />
              <style>{`.group:hover .absolute.top-0 { transform: scaleX(1) !important; }`}</style>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300" style={{ background: `${YASHODA_PRIMARY}10`, color: YASHODA_PRIMARY }}>
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 mb-6 flex-grow">{item.desc}</p>
              <div className="mt-auto flex items-center text-sm font-semibold transition-colors duration-300" style={{ color: YASHODA_ACCENT }}>
                Open Generator <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default YashodaIndex;
