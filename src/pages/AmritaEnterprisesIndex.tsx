import React from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowLeft, Building2, FileCheck2, Award, UserCheck, ShieldCheck, ShoppingBag, FileText, Printer, CheckCircle } from "lucide-react";

export default function AmritaEnterprisesIndex() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 relative overflow-hidden flex flex-col justify-center items-center font-sans">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[130px] animate-pulse"
          style={{ animationDuration: '6s' }}
        />
        <div
          className="absolute bottom-[-10%] left-[-10%] w-[45%] h-[45%] bg-amber-600/10 rounded-full blur-[130px] animate-pulse"
          style={{ animationDuration: '8s', animationDelay: '2s' }}
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-6 py-12 flex flex-col items-center">
        {/* Top Back Navigation */}
        <div className="w-full flex justify-between items-center mb-8">
          <Link
            to="/"
            className="px-4 py-2 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 shadow-xs hover:shadow"
          >
            <ArrowLeft className="w-4 h-4 text-blue-900" /> Back to Dashboard
          </Link>

          <div className="flex items-center gap-2 text-[11px] font-bold text-slate-600 bg-white border border-slate-200 px-3 py-1.5 rounded-full shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            GSTIN: 19COVPS4539H1Z0 • Active
          </div>
        </div>

        {/* Header Hero */}
        <div className="text-center mb-10 max-w-2xl">
          <div className="bg-white p-5 rounded-2xl shadow-sm inline-block mb-5 border border-slate-200">
            <div className="flex items-center justify-center gap-4">
              <div className="shrink-0 flex items-center justify-center">
                <svg
                  width="68"
                  height="68"
                  viewBox="0 0 120 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-md"
                >
                  <circle cx="60" cy="60" r="56" stroke="#c59b27" strokeWidth="2.5" fill="#0f2b5c" />
                  <circle cx="60" cy="60" r="51" stroke="#e6c66e" strokeWidth="1" strokeDasharray="3 2" fill="none" opacity="0.85" />
                  <circle cx="60" cy="60" r="47" stroke="#0a1d3d" strokeWidth="1.5" fill="#0c234b" />
                  <g fill="#c59b27" opacity="0.85">
                    <path d="M30 65 C26 50 32 38 42 30 C38 38 35 48 37 62 Z" />
                    <path d="M28 55 C24 48 26 40 33 35 C30 42 29 48 31 54 Z" />
                    <path d="M90 65 C94 50 88 38 78 30 C82 38 85 48 83 62 Z" />
                    <path d="M92 55 C96 48 94 40 87 35 C90 42 91 48 89 54 Z" />
                  </g>
                  <path d="M50 33 L55 38 L60 30 L65 38 L70 33 L68 41 L52 41 Z" fill="#e6c66e" stroke="#c59b27" strokeWidth="0.8" />
                  <text x="60" y="71" textAnchor="middle" fontFamily="'Times New Roman', Georgia, serif" fontSize="31" fontWeight="900" fill="#ffffff" letterSpacing="1">AE</text>
                  <rect x="34" y="86" width="52" height="12" rx="3" fill="#c59b27" stroke="#e6c66e" strokeWidth="0.8" />
                  <text x="60" y="95" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="900" fill="#0c234b" letterSpacing="1">ESTD 2017</text>
                </svg>
              </div>
              <div className="text-left">
                <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight uppercase">
                  AMRITA <span className="text-[#0f2b5c]">ENTERPRISES</span>
                </h1>
                <p className="text-xs text-[#c59b27] font-extrabold tracking-widest uppercase">
                  Proprietor: SUKUMAR ROY • REGULAR TAXPAYER
                </p>
                <p className="text-[11px] text-slate-500 font-medium">
                  A1/100, Sri Krishna Market, Haringhata, Nadia, West Bengal - 741249
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
            Official Business & <span className="text-blue-900">Sponsorship Portal</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed">
            Generate verified Visa Sponsorship Letters for <strong className="text-slate-900">CHHOTON ROY</strong>, official GST business letterheads, commercial quotations, tax invoices, and Form GST REG-06 Registration Certificates.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {/* Card 1: Sponsorship Letter for Chhoton Roy */}
          <Link to="/amrita-enterprises/letterhead" className="group">
            <div className="bg-white border-2 border-blue-200/80 rounded-2xl p-7 h-full transition-all duration-300 hover:border-blue-900 hover:shadow-xl hover:-translate-y-1.5 flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-3 right-3 bg-blue-100 text-blue-900 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Featured
              </div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 flex items-center justify-center mb-5 text-blue-900 group-hover:scale-110 group-hover:bg-blue-900 group-hover:text-white transition-all duration-300 shadow-2xs">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-slate-900">
                Sponsorship Letter for Chhoton Roy
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-6 flex-1">
                Official Financial Sponsorship Undertaking & Visa Guarantee Letters for <strong>Chhoton Roy</strong> (South Korea BIOINFO 2026, Schengen, and Higher Education).
              </p>
              <div className="w-full flex items-center justify-center gap-2 text-blue-900 font-bold text-xs bg-blue-50 py-2.5 rounded-xl border border-blue-200 group-hover:bg-blue-900 group-hover:text-white transition-all">
                Open Sponsorship Letter <UserCheck className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Card 2: Official Letterhead Suite */}
          <Link to="/amrita-enterprises/letterhead" className="group">
            <div className="bg-white border border-slate-200 rounded-2xl p-7 h-full transition-all duration-300 hover:border-slate-800 hover:shadow-xl hover:-translate-y-1.5 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-5 text-slate-800 group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 shadow-2xs">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-slate-900">
                Official Letterhead Generator
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-6 flex-1">
                Customizable letterheads with 3 header styles, print layouts, Quotations, Tax Invoices, Delivery Challans, and Bank Verification Letters.
              </p>
              <div className="w-full flex items-center justify-center gap-2 text-slate-800 font-bold text-xs bg-slate-50 py-2.5 rounded-xl border border-slate-200 group-hover:bg-slate-900 group-hover:text-white transition-all">
                Open Letterhead Suite <Building2 className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Card 3: Form GST REG-06 Certificate */}
          <Link to="/amrita-enterprises/gst" className="group">
            <div className="bg-white border border-slate-200 rounded-2xl p-7 h-full transition-all duration-300 hover:border-emerald-700 hover:shadow-xl hover:-translate-y-1.5 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-5 text-emerald-800 group-hover:scale-110 group-hover:bg-emerald-800 group-hover:text-white transition-all duration-300 shadow-2xs">
                <FileCheck2 className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-slate-900">
                Form GST REG-06 Certificate
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-6 flex-1">
                Government of India Registration Certificate with Annexure A & B, West Bengal Center/State jurisdiction, and digital signature block.
              </p>
              <div className="w-full flex items-center justify-center gap-2 text-emerald-800 font-bold text-xs bg-emerald-50 py-2.5 rounded-xl border border-emerald-200 group-hover:bg-emerald-800 group-hover:text-white transition-all">
                Open GST Certificate <ShieldCheck className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>

        {/* Statutory Summary Strip */}
        <div className="mt-12 w-full max-w-4xl bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-900" />
            Amrita Enterprises • Statutory Registration Snapshot
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">GSTIN</span>
              <strong className="text-slate-900 font-mono text-[11px]">19COVPS4539H1Z0</strong>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Legal Name</span>
              <strong className="text-slate-900">SUKUMAR ROY</strong>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">HSN Codes</span>
              <strong className="text-slate-900">6109, 6403, 8471, 8523</strong>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Jurisdiction</span>
              <strong className="text-slate-900">CBIC Kolkata | WB Nadia</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
