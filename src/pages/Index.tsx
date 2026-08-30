import { Link } from "react-router-dom";
import { Building2, GraduationCap, Briefcase, Sprout } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 relative overflow-hidden flex flex-col justify-center items-center font-sans">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-6 py-12 flex flex-col items-center">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-800">
            Document <span className="text-blue-600">Generators</span>
          </h1>
          <p className="text-slate-500 max-w-lg mx-auto text-base">
            Select an enterprise or institutional portal below to generate verified offer letters, payslips, and official letterheads.
          </p>
        </div>

        {/* Cards Grid — sorted alphabetically */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">

          {/* Aviso Software */}
          <Link to="/aviso" className="group">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
              <div className="h-16 flex items-center justify-center mb-6">
                <img src="https://media.licdn.com/dms/image/v2/D560BAQGREzSyNC8Gtw/company-logo_200_200/company-logo_200_200/0/1687330866404/aviso_inc_logo?e=2147483647&v=beta&t=8-c6FAeLmXM5IIbukECZ4W6vgIhc7bdaEYOWfOaMWYw" alt="Aviso Software" className="h-12 w-auto rounded-lg shadow-sm group-hover:scale-105 transition-transform" />
              </div>
              <h2 className="text-xl font-bold mb-3 text-slate-800">Aviso Software</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">Generate offer letters, payslips, and official letterheads for Aviso Software India LLP.</p>
              <div className="mt-auto w-full flex items-center justify-center gap-2 text-blue-600 text-sm font-semibold bg-blue-50 py-2 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all">Open Portal <Briefcase className="w-4 h-4" /></div>
            </div>
          </Link>

          {/* D. Raja Sekhar & Co. */}
          <Link to="/ca" className="group">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full transition-all duration-300 hover:border-indigo-600 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
              <div className="h-16 flex items-center justify-center mb-6">
                <div className="h-14 w-auto px-4 border-2 border-indigo-700 rounded-lg flex items-center justify-center text-indigo-700 font-serif font-bold text-2xl group-hover:scale-105 transition-transform">CA</div>
              </div>
              <h2 className="text-xl font-bold mb-3 text-slate-800">D. Raja Sekhar & Co.</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">Chartered Accountants letterhead generator for financial certificates and declarations.</p>
              <div className="mt-auto w-full flex items-center justify-center gap-2 text-indigo-700 text-sm font-semibold bg-indigo-50 py-2 rounded-lg group-hover:bg-indigo-700 group-hover:text-white transition-all">Open Portal <Briefcase className="w-4 h-4" /></div>
            </div>
          </Link>

          {/* HighRadius */}
          <Link to="/highradius" className="group">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full transition-all duration-300 hover:border-blue-700 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
              <div className="h-16 flex items-center justify-center mb-6">
                <img src="https://cdn.highradius.com/wp-content/uploads/2024/06/HighRadius-Updated.svg" alt="HighRadius" className="h-10 w-auto group-hover:scale-105 transition-transform" />
              </div>
              <h2 className="text-xl font-bold mb-3 text-slate-800">HighRadius</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">Generate offer letters, payslips, and official letterheads for HighRadius Technologies.</p>
              <div className="mt-auto w-full flex items-center justify-center gap-2 text-[#0047AB] text-sm font-semibold bg-blue-50 py-2 rounded-lg group-hover:bg-[#0047AB] group-hover:text-white transition-all">Open Portal <Briefcase className="w-4 h-4" /></div>
            </div>
          </Link>

          {/* Home Furniture and Enterprise */}
          <Link to="/home-furniture/letterhead" className="group">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full transition-all duration-300 hover:border-amber-700 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
              <div className="h-16 flex items-center justify-center mb-6">
                <div className="h-14 w-auto px-4 bg-amber-50 rounded-xl flex items-center justify-center text-amber-800 font-sans font-black text-base group-hover:scale-105 transition-transform text-center leading-tight border border-amber-200">🪑 HOME<br />FURNITURE</div>
              </div>
              <h2 className="text-xl font-bold mb-3 text-slate-800">Home Furniture & Enterprise</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">GST Composition Dealer (GSTIN: 37COOPD8437E6ZK) — Quotations, Bills of Supply, Delivery Challans & Warranty Certificates.</p>
              <div className="mt-auto w-full flex items-center justify-center gap-2 text-amber-700 text-sm font-semibold bg-amber-50 py-2 rounded-lg group-hover:bg-amber-700 group-hover:text-white transition-all">Open Portal <Building2 className="w-4 h-4" /></div>
            </div>
          </Link>

          {/* Imperial Leather */}
          <Link to="/imperial-leather/letterhead" className="group">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full transition-all duration-300 hover:border-slate-800 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
              <div className="h-16 flex items-center justify-center mb-6">
                <div className="h-14 w-auto px-4 bg-slate-900 rounded-xl flex items-center justify-center text-white font-serif font-black text-lg group-hover:scale-105 transition-transform text-center leading-tight shadow-md">IMPERIAL<br />LEATHER</div>
              </div>
              <h2 className="text-xl font-bold mb-3 text-slate-800">Imperial Leather</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">GST registered Proprietorship (Sagar Debnath) Sponsorship Letterhead Generator & Visa Financial Guarantee.</p>
              <div className="mt-auto w-full flex items-center justify-center gap-2 text-slate-900 text-sm font-semibold bg-slate-100 py-2 rounded-lg group-hover:bg-slate-900 group-hover:text-white transition-all">Open Portal <Building2 className="w-4 h-4" /></div>
            </div>
          </Link>

          {/* KL University */}
          <Link to="/klu" className="group">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full transition-all duration-300 hover:border-red-600 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
              <div className="h-16 flex items-center justify-center mb-6">
                <img src="/klu_logo.jpg" alt="KL University" className="h-16 w-auto group-hover:scale-105 transition-transform opacity-0"
                  onError={(e) => { const t = e.target as HTMLImageElement; t.style.display='none'; if(t.parentElement) t.parentElement.innerHTML='<div class="h-16 w-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-2xl">KLU</div>'; }}
                  onLoad={(e) => (e.target as HTMLImageElement).classList.remove('opacity-0')} />
              </div>
              <h2 className="text-xl font-bold mb-3 text-slate-800">KL University</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">Create official academic and administrative documents on KL University letterheads.</p>
              <div className="mt-auto w-full flex items-center justify-center gap-2 text-red-700 text-sm font-semibold bg-red-50 py-2 rounded-lg group-hover:bg-red-700 group-hover:text-white transition-all">Open Portal <GraduationCap className="w-4 h-4" /></div>
            </div>
          </Link>

          {/* Maruthi Glass Mart */}
          <Link to="/maruthi-glass" className="group">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full transition-all duration-300 hover:border-[#005691] hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
              <div className="h-16 flex items-center justify-center mb-6">
                <div className="h-14 w-auto px-4 bg-[#005691]/10 rounded-lg flex items-center justify-center text-[#005691] font-sans font-black text-lg group-hover:scale-105 transition-transform text-center leading-tight">MARUTHI<br />GLASS MART</div>
              </div>
              <h2 className="text-xl font-bold mb-3 text-slate-800">Maruthi Glass Mart</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">Generate official letterheads, price quotations, estimates, and warranty certificates.</p>
              <div className="mt-auto w-full flex items-center justify-center gap-2 text-[#005691] text-sm font-semibold bg-[#005691]/10 py-2 rounded-lg group-hover:bg-[#005691] group-hover:text-white transition-all">Open Portal <Building2 className="w-4 h-4" /></div>
            </div>
          </Link>

          {/* Medical Equipments & Instruments */}
          <Link to="/medical-equipments/letterhead" className="group">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full transition-all duration-300 hover:border-teal-700 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
              <div className="h-16 flex items-center justify-center mb-6">
                <div className="h-14 w-auto px-4 bg-teal-900 rounded-xl flex items-center justify-center text-teal-200 font-sans font-black text-lg group-hover:scale-105 transition-transform text-center leading-tight shadow-md border-2 border-teal-500">MEDICAL<br />EQUIPMENTS</div>
              </div>
              <h2 className="text-xl font-bold mb-3 text-slate-800">Medical Equipments & Instruments</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">GST registered Partnership Firm (meisindia.in) Medical Equipment, Teaching Aids & Calibration letterhead generator.</p>
              <div className="mt-auto w-full flex items-center justify-center gap-2 text-teal-800 text-sm font-semibold bg-teal-50 py-2 rounded-lg group-hover:bg-teal-800 group-hover:text-white transition-all">Open Portal <Building2 className="w-4 h-4" /></div>
            </div>
          </Link>

          {/* MOURI Tech */}
          <Link to="/mouri" className="group">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full transition-all duration-300 hover:border-[#005A9C] hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
              <div className="h-16 flex items-center justify-center mb-6">
                <img src="https://www.mouritech.com/wp-content/uploads/2021/10/MT-Home-Logo-1-1.png" alt="MOURI Tech" className="h-10 w-auto group-hover:scale-105 transition-transform" />
              </div>
              <h2 className="text-xl font-bold mb-3 text-slate-800">MOURI Tech</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">Access official document generators for MOURI Tech Limited, including NOCs and employment letters.</p>
              <div className="mt-auto w-full flex items-center justify-center gap-2 text-[#005A9C] text-sm font-semibold bg-[#005A9C]/10 py-2 rounded-lg group-hover:bg-[#005A9C] group-hover:text-white transition-all">Open Portal <Building2 className="w-4 h-4" /></div>
            </div>
          </Link>

          {/* SASTRA University */}
          <Link to="/sastra" className="group">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full transition-all duration-300 hover:border-[#003087] hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
              <div className="h-16 flex items-center justify-center mb-6">
                <img src="/sastra-logo.png" alt="SASTRA University" className="h-16 w-auto object-contain group-hover:scale-105 transition-transform" />
              </div>
              <h2 className="text-xl font-bold mb-3 text-slate-800">SASTRA University</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">Generate Sanction Letters, NOCs, Bonafide and Hostel Fee Receipts on SASTRA Deemed to be University letterheads.</p>
              <div className="mt-auto w-full flex items-center justify-center gap-2 text-[#003087] text-sm font-semibold bg-blue-50 py-2 rounded-lg group-hover:bg-[#003087] group-hover:text-white transition-all">Open Portal <GraduationCap className="w-4 h-4" /></div>
            </div>
          </Link>

          {/* Sathyabama University */}
          <Link to="/sathyabama" className="group">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full transition-all duration-300 hover:border-[#800000] hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
              <div className="h-16 flex items-center justify-center mb-6">
                <img src="/sathyabama_logo.jpg" alt="Sathyabama University" className="h-16 w-auto group-hover:scale-105 transition-transform" />
              </div>
              <h2 className="text-xl font-bold mb-3 text-slate-800">Sathyabama Univ.</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">Create official academic and administrative documents on Sathyabama University letterheads.</p>
              <div className="mt-auto w-full flex items-center justify-center gap-2 text-[#800000] text-sm font-semibold bg-[#800000]/10 py-2 rounded-lg group-hover:bg-[#800000] group-hover:text-white transition-all">Open Portal <GraduationCap className="w-4 h-4" /></div>
            </div>
          </Link>

          {/* Spoorthi Associates */}
          <Link to="/spoorthi" className="group">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full transition-all duration-300 hover:border-emerald-600 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
              <div className="h-16 flex items-center justify-center mb-6">
                <div className="h-14 w-auto px-4 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-700 font-sans font-bold text-xl group-hover:scale-105 transition-transform text-center leading-tight">SPOORTHI<br />ASSOCIATES</div>
              </div>
              <h2 className="text-xl font-bold mb-3 text-slate-800">Spoorthi Associates</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">Engineers & Architects letterhead generator for valuation certificates and reports.</p>
              <div className="mt-auto w-full flex items-center justify-center gap-2 text-emerald-700 text-sm font-semibold bg-emerald-50 py-2 rounded-lg group-hover:bg-emerald-600 group-hover:text-white transition-all">Open Portal <Building2 className="w-4 h-4" /></div>
            </div>
          </Link>

          {/* Sri Yogeshwara Seeds & Pesticides */}
          <Link to="/sri-yogeshwara" className="group">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full transition-all duration-300 hover:border-green-700 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
              <div className="h-16 flex items-center justify-center mb-6">
                <div className="h-14 w-auto px-4 bg-gradient-to-br from-green-700 to-emerald-900 border-2 border-amber-400 rounded-xl flex items-center justify-center font-bold gap-2 group-hover:scale-105 transition-transform">
                  <Sprout className="w-6 h-6 text-amber-300" />
                  <span className="text-xs text-white uppercase tracking-wider font-extrabold">SRI YOGESHWARA</span>
                </div>
              </div>
              <h2 className="text-xl font-bold mb-3 text-slate-800">Sri Yogeshwara Seeds & Pesticides</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">GST registered Seeds, Fertilizers & Pesticides letterhead generator with price quotations and certificates.</p>
              <div className="mt-auto w-full flex items-center justify-center gap-2 text-green-700 text-sm font-semibold bg-green-50 py-2 rounded-lg group-hover:bg-green-700 group-hover:text-white transition-all">Open Portal <Sprout className="w-4 h-4" /></div>
            </div>
          </Link>

          {/* Standard Engineering Service */}
          <Link to="/standard-engineering/letterhead" className="group">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full transition-all duration-300 hover:border-amber-700 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
              <div className="h-16 flex items-center justify-center mb-6">
                <div className="h-14 w-auto px-4 bg-slate-900 rounded-xl flex items-center justify-center text-amber-400 font-sans font-black text-lg group-hover:scale-105 transition-transform text-center leading-tight shadow-md border-2 border-amber-500">STANDARD<br />ENGINEERING</div>
              </div>
              <h2 className="text-xl font-bold mb-3 text-slate-800">Standard Engineering Service</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">GST registered Proprietorship (Baidyanath Seth) Engineers, Manufacturers & Erection Service letterhead generator.</p>
              <div className="mt-auto w-full flex items-center justify-center gap-2 text-amber-700 text-sm font-semibold bg-amber-50 py-2 rounded-lg group-hover:bg-amber-700 group-hover:text-white transition-all">Open Portal <Building2 className="w-4 h-4" /></div>
            </div>
          </Link>

          {/* Techno India University */}
          <Link to="/techno-india" className="group">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full transition-all duration-300 hover:border-red-600 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
              <div className="h-16 flex items-center justify-center mb-6">
                <img src="/techno-india-logo.png" alt="Techno India University" className="h-10 w-auto max-w-[200px] object-contain group-hover:scale-105 transition-transform" />
              </div>
              <h2 className="text-xl font-bold mb-3 text-slate-800">Techno India University</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">Generate Recommendation Letters, Provisional Degree Certificates, Bonafide Certificates, and NOCs.</p>
              <div className="mt-auto w-full flex items-center justify-center gap-2 text-red-600 text-sm font-semibold bg-red-50 py-2 rounded-lg group-hover:bg-red-600 group-hover:text-white transition-all">Open Portal <GraduationCap className="w-4 h-4" /></div>
            </div>
          </Link>

          {/* Woxsen University */}
          <Link to="/woxsen" className="group">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full transition-all duration-300 hover:border-red-700 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
              <div className="h-16 flex items-center justify-center mb-6">
                <img src="https://woxsen.edu.in/uploads/l20241112111757.webp" alt="Woxsen University" className="h-10 w-auto group-hover:scale-105 transition-transform" />
              </div>
              <h2 className="text-xl font-bold mb-3 text-slate-800">Woxsen University</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">Create official academic and administrative documents on Woxsen University letterheads.</p>
              <div className="mt-auto w-full flex items-center justify-center gap-2 text-red-700 text-sm font-semibold bg-red-50 py-2 rounded-lg group-hover:bg-red-700 group-hover:text-white transition-all">Open Portal <GraduationCap className="w-4 h-4" /></div>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Index;
