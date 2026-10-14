import React from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowLeft, Building2, FileCheck2, Award, UserCheck, ShieldCheck, ShoppingBag, FileText, Printer, CheckCircle } from "lucide-react";
import { SriAyyappaLogo } from "./SriAyyappaLetterheadGenerator";

export default function SriAyyappaEnterprisesIndex() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-slate-900 relative overflow-hidden flex flex-col justify-center items-center font-sans">
      {/* Background Ambience with Radiant Maroon & Amber-Gold Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#fdfbf7]">
        <div
          className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-rose-500/5 rounded-full blur-[140px]"
        />
        <div
          className="absolute bottom-[-10%] left-[-10%] w-[45%] h-[45%] bg-amber-500/5 rounded-full blur-[140px]"
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-6 py-12 flex flex-col items-center">
        {/* Top Back Navigation */}
        <div className="w-full flex justify-between items-center mb-8">
          <Link
            to="/"
            className="px-4 py-2 bg-white hover:bg-rose-50 border border-rose-200 text-stone-700 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 shadow-xs hover:shadow"
          >
            <ArrowLeft className="w-4 h-4 text-[#780016]" /> Back to Dashboard
          </Link>

          <div className="flex items-center gap-2 text-[11px] font-bold text-[#780016] bg-white border border-rose-300 px-3.5 py-1.5 rounded-full shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            GSTIN: 37ECUPP1064H1Z3 • Regular Taxpayer
          </div>
        </div>

        {/* Header Hero */}
        <div className="text-center mb-10 max-w-2xl">
          <div className="bg-white p-5 rounded-2xl shadow-sm inline-block mb-5 border border-rose-200">
            <div className="flex items-center justify-center gap-5">
              <div className="shrink-0 flex items-center justify-center">
                <SriAyyappaLogo size={78} />
              </div>
              <div className="text-left">
                <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight uppercase">
                  SRI AYYAPPA <span className="text-[#780016]">ENTERPRISES</span>
                </h1>
                <p className="text-xs text-amber-700 font-extrabold tracking-widest uppercase mt-0.5">
                  Proprietor: SRINIVASU MALLULA • ESTD 2024
                </p>
                <p className="text-[11px] text-stone-600 font-medium mt-0.5">
                  17-8-38/1A, Sambamurthy Nagar, Near Saibaba Temple, Kakinada, AP - 533001
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
            Official Business & <span className="text-[#780016]">Sponsorship Portal</span>
          </h2>
          <p className="text-stone-600 text-sm md:text-base font-medium leading-relaxed">
            Generate verified Visa Sponsorship Letters, official business letterheads, commercial quotations, tax invoices, and Form GST REG-06 Registration Certificates for <strong className="text-slate-900">SRI AYYAPPA ENTERPRISES</strong>.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {/* Card 1: Visa Sponsorship Letters */}
          <Link to="/sri-ayyappa-enterprises/letterhead" className="group">
            <div className="bg-white border-2 border-rose-300 rounded-2xl p-7 h-full transition-all duration-300 hover:border-[#780016] hover:shadow-xl hover:-translate-y-1.5 flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-3 right-3 bg-rose-100 text-[#780016] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Featured
              </div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-50 to-amber-50 border border-rose-200 flex items-center justify-center mb-5 text-[#780016] group-hover:scale-110 group-hover:bg-[#780016] group-hover:text-white transition-all duration-300 shadow-2xs">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-slate-900">
                Visa Sponsorship & Guarantee Letters
              </h3>
              <p className="text-stone-500 text-xs leading-relaxed mb-6 flex-1">
                Official Financial Sponsorship Undertaking & Visa Guarantee Letters by Proprietor <strong>Srinivasu Mallula</strong> for his son <strong>DURGAPRASAD MALLULA</strong> (Passport: <strong>AP541251</strong>, Student ID: <strong>SUB24M146</strong>, Ph.D. Scholar).
              </p>
              <div className="w-full flex items-center justify-center gap-2 text-white font-bold text-xs bg-[#780016] hover:bg-[#5c0011] py-2.5 rounded-xl border border-rose-900 transition-all shadow-xs">
                Open Sponsorship Letters <UserCheck className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Card 2: Official Letterhead Suite */}
          <Link to="/sri-ayyappa-enterprises/letterhead" className="group">
            <div className="bg-white border border-stone-200 rounded-2xl p-7 h-full transition-all duration-300 hover:border-[#780016] hover:shadow-xl hover:-translate-y-1.5 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-center mb-5 text-[#780016] group-hover:scale-110 group-hover:bg-[#780016] group-hover:text-white transition-all duration-300 shadow-2xs">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-slate-900">
                Official Letterhead Generator
              </h3>
              <p className="text-stone-500 text-xs leading-relaxed mb-6 flex-1">
                Customizable letterheads with 3 header styles, print layouts, Quotations, Tax Invoices, Delivery Challans, and Bank Verification Letters.
              </p>
              <div className="w-full flex items-center justify-center gap-2 text-[#780016] font-bold text-xs bg-rose-50 py-2.5 rounded-xl border border-rose-200 group-hover:bg-[#780016] group-hover:text-white transition-all">
                Open Letterhead Suite <Building2 className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Card 3: Form GST REG-06 Certificate */}
          <Link to="/sri-ayyappa-enterprises/gst" className="group">
            <div className="bg-white border border-stone-200 rounded-2xl p-7 h-full transition-all duration-300 hover:border-emerald-700 hover:shadow-xl hover:-translate-y-1.5 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-5 text-emerald-800 group-hover:scale-110 group-hover:bg-emerald-800 group-hover:text-white transition-all duration-300 shadow-2xs">
                <FileCheck2 className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-slate-900">
                Form GST REG-06 Certificate
              </h3>
              <p className="text-stone-500 text-xs leading-relaxed mb-6 flex-1">
                Government of India Registration Certificate with Annexure A & B, Andhra Pradesh Center/State jurisdiction, and digital signature block.
              </p>
              <div className="w-full flex items-center justify-center gap-2 text-emerald-800 font-bold text-xs bg-emerald-50 py-2.5 rounded-xl border border-emerald-200 group-hover:bg-emerald-800 group-hover:text-white transition-all">
                Open GST Certificate <ShieldCheck className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>

        {/* Statutory Summary Strip */}
        <div className="mt-12 w-full max-w-4xl bg-white border border-rose-200 rounded-2xl p-6 shadow-xs">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#780016] mb-4 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#780016]" />
            Sri Ayyappa Enterprises • Statutory Registration Snapshot
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
            <div className="bg-rose-50/40 p-3 rounded-xl border border-rose-200">
              <span className="block text-[10px] text-stone-500 font-bold uppercase">Trade Name</span>
              <span className="text-xs font-black text-slate-800">SRI AYYAPPA ENTERPRISES</span>
            </div>
            <div className="bg-rose-50/40 p-3 rounded-xl border border-rose-200">
              <span className="block text-[10px] text-stone-500 font-bold uppercase">Proprietor Name</span>
              <span className="text-xs font-bold text-slate-800">SRINIVASU MALLULA</span>
            </div>
            <div className="bg-rose-50/40 p-3 rounded-xl border border-rose-200">
              <span className="block text-[10px] text-stone-500 font-bold uppercase">GSTIN / UIN</span>
              <span className="text-xs font-mono font-bold text-[#780016]">37ECUPP1064H1Z3</span>
            </div>
            <div className="bg-rose-50/40 p-3 rounded-xl border border-rose-200">
              <span className="block text-[10px] text-stone-500 font-bold uppercase">Jurisdiction</span>
              <span className="text-xs font-bold text-slate-800">Andhra Pradesh (37)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
