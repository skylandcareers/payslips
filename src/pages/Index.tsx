import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FileText, Calculator, Landmark, GraduationCap, Building2, Search, Briefcase, Sprout } from "lucide-react";

const cardsData = [
  {
    name: "Telangana Grameena Bank",
    element: (
      <Link to="/tgb" className="group">
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 h-full transition-all duration-300 hover:border-orange-500 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
                    <div className="h-16 flex items-center justify-center mb-3">
                      <div className="text-orange-500 font-bold text-2xl group-hover:scale-105 transition-transform">TGB</div>
                    </div>
                    <h2 className="text-sm sm:text-base font-bold mb-3 leading-tight text-slate-800">Telangana Grameena Bank</h2>
                    <div className="mt-auto w-full flex items-center justify-center gap-2 text-orange-600 text-[11px] font-semibold bg-orange-50 py-1.5 rounded-md px-2 group-hover:bg-orange-600 group-hover:text-white transition-all">Open Portal <Landmark className="w-4 h-4" /></div>
                  </div>
                </Link>
    )
  },
  {
    name: "Kotak Mahindra Bank",
    element: (
      <Link to="/kotak" className="group">
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 h-full transition-all duration-300 hover:border-red-600 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
                    <div className="h-16 flex items-center justify-center mb-3">
                      <img src="/kotak-logo.jpg" alt="Kotak Mahindra Bank" className="h-8 max-w-[140px] object-contain group-hover:scale-105 transition-transform" />
                    </div>
                    <h2 className="text-sm sm:text-base font-bold mb-3 leading-tight text-slate-800">Kotak Mahindra Bank</h2>
                    <div className="mt-auto w-full flex items-center justify-center gap-2 text-red-600 text-[11px] font-semibold bg-red-50 py-1.5 rounded-md px-2 group-hover:bg-red-600 group-hover:text-white transition-all">Open Portal <Landmark className="w-4 h-4" /></div>
                  </div>
                </Link>
    )
  },
  {
    name: "Union Bank of India",
    element: (
      <Link to="/union-bank" className="group">
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 h-full transition-all duration-300 hover:border-[#0055b7] hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
                    <div className="h-16 flex items-center justify-center mb-3">
                      <img src="/union_bank_logo.png" alt="Union Bank of India" className="h-12 w-auto object-contain group-hover:scale-105 transition-transform" />
                    </div>
                    <h2 className="text-sm sm:text-base font-bold mb-3 leading-tight text-slate-800">Union Bank of India</h2>
                    <div className="mt-auto w-full flex items-center justify-center gap-2 text-[#0055b7] text-[11px] font-semibold bg-blue-50 py-1.5 rounded-md px-2 group-hover:bg-[#0055b7] group-hover:text-white transition-all">Open Portal <Landmark className="w-4 h-4" /></div>
                  </div>
                </Link>
    )
  },
  {
    name: "State Bank of India",
    element: (
      <Link to="/sbi" className="group">
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 h-full transition-all duration-300 hover:border-[#1a1f71] hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
                    <div className="h-16 flex items-center justify-center mb-3">
                      <img src="/sbi_logo.jpg" alt="State Bank of India" className="h-10 w-auto object-contain group-hover:scale-105 transition-transform" />
                    </div>
                    <h2 className="text-sm sm:text-base font-bold mb-3 leading-tight text-slate-800">State Bank of India</h2>
                    <div className="mt-auto w-full flex items-center justify-center gap-2 text-[#1a1f71] text-[11px] font-semibold bg-indigo-50 py-1.5 rounded-md px-2 group-hover:bg-[#1a1f71] group-hover:text-white transition-all">Open Portal <Landmark className="w-4 h-4" /></div>
                  </div>
                </Link>
    )
  },
  {
    name: "Palamuru University",
    element: (
      <Link to="/palamuru" className="group">
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 h-full transition-all duration-300 hover:border-[#b31b1b] hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
                    <div className="h-16 flex items-center justify-center mb-3">
                      <img src="/palamuru-logo.png" alt="Palamuru University" className="h-12 w-auto group-hover:scale-105 transition-transform" />
                    </div>
                    <h2 className="text-sm sm:text-base font-bold mb-3 leading-tight text-slate-800">Palamuru University</h2>
                    <div className="mt-auto w-full flex items-center justify-center gap-2 text-[#b31b1b] text-[11px] font-semibold bg-red-50 py-1.5 rounded-md px-2 group-hover:bg-[#b31b1b] group-hover:text-white transition-all">Open Portal <GraduationCap className="w-4 h-4" /></div>
                  </div>
                </Link>
    )
  },
  {
    name: "SASTRA University",
    element: (
      <Link to="/sastra" className="group">
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 h-full transition-all duration-300 hover:border-[#003087] hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
                    <div className="h-16 flex items-center justify-center mb-3">
                      <img src="/sastra-logo.png" alt="SASTRA University" className="h-16 w-auto object-contain group-hover:scale-105 transition-transform" />
                    </div>
                    <h2 className="text-sm sm:text-base font-bold mb-3 leading-tight text-slate-800">SASTRA University</h2>
                    <div className="mt-auto w-full flex items-center justify-center gap-2 text-[#003087] text-[11px] font-semibold bg-blue-50 py-1.5 rounded-md px-2 group-hover:bg-[#003087] group-hover:text-white transition-all">Open Portal <GraduationCap className="w-4 h-4" /></div>
                  </div>
                </Link>
    )
  },
  {
    name: "Woxsen University",
    element: (
      <Link to="/woxsen" className="group">
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 h-full transition-all duration-300 hover:border-red-700 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
                    <div className="h-16 flex items-center justify-center mb-3">
                      <img src="https://woxsen.edu.in/uploads/l20241112111757.webp" alt="Woxsen University" className="h-10 w-auto group-hover:scale-105 transition-transform" />
                    </div>
                    <h2 className="text-sm sm:text-base font-bold mb-3 leading-tight text-slate-800">Woxsen University</h2>
                    <div className="mt-auto w-full flex items-center justify-center gap-2 text-red-700 text-[11px] font-semibold bg-red-50 py-1.5 rounded-md px-2 group-hover:bg-red-700 group-hover:text-white transition-all">Open Portal <GraduationCap className="w-4 h-4" /></div>
                  </div>
                </Link>
    )
  },
  {
    name: "KL University",
    element: (
      <Link to="/klu" className="group">
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 h-full transition-all duration-300 hover:border-red-600 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
                    <div className="h-16 flex items-center justify-center mb-3">
                      <img src="/klu_logo.jpg" alt="KL University" className="h-16 w-auto group-hover:scale-105 transition-transform opacity-0"
                        onError={(e) => { const t = e.target as HTMLImageElement; t.style.display='none'; if(t.parentElement) t.parentElement.innerHTML='<div class="h-16 w-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-2xl">KLU</div>'; }}
                        onLoad={(e) => (e.target as HTMLImageElement).classList.remove('opacity-0')} />
                    </div>
                    <h2 className="text-sm sm:text-base font-bold mb-3 leading-tight text-slate-800">KL University</h2>
                    <div className="mt-auto w-full flex items-center justify-center gap-2 text-red-700 text-[11px] font-semibold bg-red-50 py-1.5 rounded-md px-2 group-hover:bg-red-700 group-hover:text-white transition-all">Open Portal <GraduationCap className="w-4 h-4" /></div>
                  </div>
                </Link>
    )
  },
  {
    name: "Sathyabama Univ.",
    element: (
      <Link to="/sathyabama" className="group">
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 h-full transition-all duration-300 hover:border-[#800000] hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
                    <div className="h-16 flex items-center justify-center mb-3">
                      <img src="/sathyabama_logo.jpg" alt="Sathyabama University" className="h-16 w-auto group-hover:scale-105 transition-transform" />
                    </div>
                    <h2 className="text-sm sm:text-base font-bold mb-3 leading-tight text-slate-800">Sathyabama Univ.</h2>
                    <div className="mt-auto w-full flex items-center justify-center gap-2 text-[#800000] text-[11px] font-semibold bg-[#800000]/10 py-1.5 rounded-md px-2 group-hover:bg-[#800000] group-hover:text-white transition-all">Open Portal <GraduationCap className="w-4 h-4" /></div>
                  </div>
                </Link>
    )
  },
  {
    name: "MOURI Tech",
    element: (
      <Link to="/mouri" className="group">
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 h-full transition-all duration-300 hover:border-[#005A9C] hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
                    <div className="h-16 flex items-center justify-center mb-3">
                      <img src="https://www.mouritech.com/wp-content/uploads/2021/10/MT-Home-Logo-1-1.png" alt="MOURI Tech" className="h-10 w-auto group-hover:scale-105 transition-transform" />
                    </div>
                    <h2 className="text-sm sm:text-base font-bold mb-3 leading-tight text-slate-800">MOURI Tech</h2>
                    <div className="mt-auto w-full flex items-center justify-center gap-2 text-[#005A9C] text-[11px] font-semibold bg-[#005A9C]/10 py-1.5 rounded-md px-2 group-hover:bg-[#005A9C] group-hover:text-white transition-all">Open Portal <Building2 className="w-4 h-4" /></div>
                  </div>
                </Link>
    )
  },
  {
    name: "Aviso Software",
    element: (
      
                <Link to="/aviso" className="group">
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 h-full transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
                    <div className="h-16 flex items-center justify-center mb-3">
                      <img src="https://media.licdn.com/dms/image/v2/D560BAQGREzSyNC8Gtw/company-logo_200_200/company-logo_200_200/0/1687330866404/aviso_inc_logo?e=2147483647&v=beta&t=8-c6FAeLmXM5IIbukECZ4W6vgIhc7bdaEYOWfOaMWYw" alt="Aviso Software" className="h-12 w-auto rounded-lg shadow-sm group-hover:scale-105 transition-transform" />
                    </div>
                    <h2 className="text-sm sm:text-base font-bold mb-3 leading-tight text-slate-800">Aviso Software</h2>
                    <div className="mt-auto w-full flex items-center justify-center gap-2 text-blue-600 text-[11px] font-semibold bg-blue-50 py-1.5 rounded-md px-2 group-hover:bg-blue-600 group-hover:text-white transition-all">Open Portal <Briefcase className="w-4 h-4" /></div>
                  </div>
                </Link>
    )
  },
  {
    name: "Sri Saravana Stores",
    element: (
      <Link to="/sri-saravana" className="group">
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 h-full transition-all duration-300 hover:border-blue-900 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
                    <div className="h-16 flex items-center justify-center mb-3">
                      <div className="h-14 w-14 bg-gradient-to-br from-blue-700 to-blue-900 rounded-full flex flex-col items-center justify-center text-white font-serif font-black shadow-md border-2 border-blue-100 group-hover:scale-105 transition-transform">
                        <span className="text-xl">SSS</span>
                      </div>
                    </div>
                    <h2 className="text-sm sm:text-base font-bold mb-3 leading-tight text-slate-800">Sri Saravana Stores</h2>
                    <div className="mt-auto w-full flex items-center justify-center gap-2 text-blue-800 text-[11px] font-semibold bg-blue-50 py-1.5 rounded-md px-2 group-hover:bg-blue-900 group-hover:text-white transition-all">Open Portal <Building2 className="w-4 h-4" /></div>
                  </div>
                </Link>
    )
  },
  {
    name: "M/S Raksha Global Enterprises",
    element: (
      <Link to="/raksha-global/letterhead" className="group">
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 h-full transition-all duration-300 hover:border-green-600 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
                    <div className="h-16 flex items-center justify-center mb-3">
                      <div className="h-14 w-14 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex flex-col items-center justify-center text-white font-serif font-black shadow-md border-2 border-green-100 group-hover:scale-105 transition-transform">
                        <span className="text-xl">RGE</span>
                      </div>
                    </div>
                    <h2 className="text-sm sm:text-base font-bold mb-3 leading-tight text-slate-800">M/S Raksha Global Enterprises</h2>
                    <div className="mt-auto w-full flex items-center justify-center gap-2 text-green-700 text-[11px] font-semibold bg-green-50 py-1.5 rounded-md px-2 group-hover:bg-green-600 group-hover:text-white transition-all">Open Portal <Building2 className="w-4 h-4" /></div>
                  </div>
                </Link>
    )
  },
  {
    name: "Home Furniture GST Certificate",
    element: (
      <Link to="/home-furniture/gst" className="group">
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 h-full transition-all duration-300 hover:border-blue-600 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
                    <div className="h-16 flex items-center justify-center mb-3">
                      <div className="h-14 w-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex flex-col items-center justify-center text-white font-serif font-black shadow-md border-2 border-blue-100 group-hover:scale-105 transition-transform">
                        <span className="text-xl">GST</span>
                      </div>
                    </div>
                    <h2 className="text-sm sm:text-base font-bold mb-3 leading-tight text-slate-800">Home Furniture GST Certificate</h2>
                    <div className="mt-auto w-full flex items-center justify-center gap-2 text-blue-700 text-[11px] font-semibold bg-blue-50 py-1.5 rounded-md px-2 group-hover:bg-blue-600 group-hover:text-white transition-all">Open Generator</div>
                  </div>
                </Link>
    )
  },
  {
    name: "Home Furniture & Enterprise",
    element: (
      <Link to="/home-furniture/letterhead" className="group">
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 h-full transition-all duration-300 hover:border-amber-700 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
                    <div className="h-16 flex items-center justify-center mb-3">
                      <div className="h-14 w-auto px-4 bg-amber-50 rounded-xl flex items-center justify-center text-amber-800 font-sans font-black text-base group-hover:scale-105 transition-transform text-center leading-tight border border-amber-200">🪑 HOME<br />FURNITURE</div>
                    </div>
                    <h2 className="text-sm sm:text-base font-bold mb-3 leading-tight text-slate-800">Home Furniture & Enterprise</h2>
                    <div className="mt-auto w-full flex items-center justify-center gap-2 text-amber-700 text-[11px] font-semibold bg-amber-50 py-1.5 rounded-md px-2 group-hover:bg-amber-700 group-hover:text-white transition-all">Open Portal <Building2 className="w-4 h-4" /></div>
                  </div>
                </Link>
    )
  },
  {
    name: "Medical Equipments & Instruments",
    element: (
      <Link to="/medical-equipments/letterhead" className="group">
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 h-full transition-all duration-300 hover:border-teal-700 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
                    <div className="h-16 flex items-center justify-center mb-3">
                      <div className="h-14 w-auto px-4 bg-teal-900 rounded-xl flex items-center justify-center text-teal-200 font-sans font-black text-lg group-hover:scale-105 transition-transform text-center leading-tight shadow-md border-2 border-teal-500">MEDICAL<br />EQUIPMENTS</div>
                    </div>
                    <h2 className="text-sm sm:text-base font-bold mb-3 leading-tight text-slate-800">Medical Equipments & Instruments</h2>
                    <div className="mt-auto w-full flex items-center justify-center gap-2 text-teal-800 text-[11px] font-semibold bg-teal-50 py-1.5 rounded-md px-2 group-hover:bg-teal-800 group-hover:text-white transition-all">Open Portal <Building2 className="w-4 h-4" /></div>
                  </div>
                </Link>
    )
  },
  {
    name: "Standard Engineering Service",
    element: (
      <Link to="/standard-engineering/letterhead" className="group">
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 h-full transition-all duration-300 hover:border-amber-700 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
                    <div className="h-16 flex items-center justify-center mb-3">
                      <div className="h-14 w-auto px-4 bg-slate-900 rounded-xl flex items-center justify-center text-amber-400 font-sans font-black text-lg group-hover:scale-105 transition-transform text-center leading-tight shadow-md border-2 border-amber-500">STANDARD<br />ENGINEERING</div>
                    </div>
                    <h2 className="text-sm sm:text-base font-bold mb-3 leading-tight text-slate-800">Standard Engineering Service</h2>
                    <div className="mt-auto w-full flex items-center justify-center gap-2 text-amber-700 text-[11px] font-semibold bg-amber-50 py-1.5 rounded-md px-2 group-hover:bg-amber-700 group-hover:text-white transition-all">Open Portal <Building2 className="w-4 h-4" /></div>
                  </div>
                </Link>
    )
  },
  {
    name: "Imperial Leather",
    element: (
      <Link to="/imperial-leather/letterhead" className="group">
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 h-full transition-all duration-300 hover:border-slate-800 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
                    <div className="h-16 flex items-center justify-center mb-3">
                      <div className="h-14 w-auto px-4 bg-slate-900 rounded-xl flex items-center justify-center text-white font-serif font-black text-lg group-hover:scale-105 transition-transform text-center leading-tight shadow-md">IMPERIAL<br />LEATHER</div>
                    </div>
                    <h2 className="text-sm sm:text-base font-bold mb-3 leading-tight text-slate-800">Imperial Leather</h2>
                    <div className="mt-auto w-full flex items-center justify-center gap-2 text-slate-900 text-[11px] font-semibold bg-slate-100 py-1.5 rounded-md px-2 group-hover:bg-slate-900 group-hover:text-white transition-all">Open Portal <Building2 className="w-4 h-4" /></div>
                  </div>
                </Link>
    )
  },
  {
    name: "Sri Yogeshwara Seeds & Pesticides",
    element: (
      <Link to="/sri-yogeshwara" className="group">
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 h-full transition-all duration-300 hover:border-green-700 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
                    <div className="h-16 flex items-center justify-center mb-3">
                      <div className="h-14 w-auto px-4 bg-gradient-to-br from-green-700 to-emerald-900 border-2 border-amber-400 rounded-xl flex items-center justify-center font-bold gap-2 group-hover:scale-105 transition-transform">
                        <Sprout className="w-6 h-6 text-amber-300" />
                        <span className="text-xs text-white uppercase tracking-wider font-extrabold">SRI YOGESHWARA</span>
                      </div>
                    </div>
                    <h2 className="text-sm sm:text-base font-bold mb-3 leading-tight text-slate-800">Sri Yogeshwara Seeds & Pesticides</h2>
                    <div className="mt-auto w-full flex items-center justify-center gap-2 text-green-700 text-[11px] font-semibold bg-green-50 py-1.5 rounded-md px-2 group-hover:bg-green-700 group-hover:text-white transition-all">Open Portal <Sprout className="w-4 h-4" /></div>
                  </div>
                </Link>
    )
  },
  {
    name: "Techno India University",
    element: (
      <Link to="/techno-india" className="group">
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 h-full transition-all duration-300 hover:border-red-600 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
                    <div className="h-16 flex items-center justify-center mb-3">
                      <img src="/techno-india-logo.png" alt="Techno India University" className="h-10 w-auto max-w-[200px] object-contain group-hover:scale-105 transition-transform" />
                    </div>
                    <h2 className="text-sm sm:text-base font-bold mb-3 leading-tight text-slate-800">Techno India University</h2>
                    <div className="mt-auto w-full flex items-center justify-center gap-2 text-red-600 text-[11px] font-semibold bg-red-50 py-1.5 rounded-md px-2 group-hover:bg-red-600 group-hover:text-white transition-all">Open Portal <GraduationCap className="w-4 h-4" /></div>
                  </div>
                </Link>
    )
  },
  {
    name: "Maruthi Glass Mart",
    element: (
      <Link to="/maruthi-glass" className="group">
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 h-full transition-all duration-300 hover:border-[#005691] hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
                    <div className="h-16 flex items-center justify-center mb-3">
                      <div className="h-14 w-auto px-4 bg-[#005691]/10 rounded-lg flex items-center justify-center text-[#005691] font-sans font-black text-lg group-hover:scale-105 transition-transform text-center leading-tight">MARUTHI<br />GLASS MART</div>
                    </div>
                    <h2 className="text-sm sm:text-base font-bold mb-3 leading-tight text-slate-800">Maruthi Glass Mart</h2>
                    <div className="mt-auto w-full flex items-center justify-center gap-2 text-[#005691] text-[11px] font-semibold bg-[#005691]/10 py-1.5 rounded-md px-2 group-hover:bg-[#005691] group-hover:text-white transition-all">Open Portal <Building2 className="w-4 h-4" /></div>
                  </div>
                </Link>
    )
  },
  {
    name: "HighRadius",
    element: (
      <Link to="/highradius" className="group">
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 h-full transition-all duration-300 hover:border-blue-700 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
                    <div className="h-16 flex items-center justify-center mb-3">
                      <img src="https://cdn.highradius.com/wp-content/uploads/2024/06/HighRadius-Updated.svg" alt="HighRadius" className="h-10 w-auto group-hover:scale-105 transition-transform" />
                    </div>
                    <h2 className="text-sm sm:text-base font-bold mb-3 leading-tight text-slate-800">HighRadius</h2>
                    <div className="mt-auto w-full flex items-center justify-center gap-2 text-[#0047AB] text-[11px] font-semibold bg-blue-50 py-1.5 rounded-md px-2 group-hover:bg-[#0047AB] group-hover:text-white transition-all">Open Portal <Briefcase className="w-4 h-4" /></div>
                  </div>
                </Link>
    )
  },
  {
    name: "Spoorthi Associates",
    element: (
      <Link to="/spoorthi" className="group">
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 h-full transition-all duration-300 hover:border-emerald-600 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
                    <div className="h-16 flex items-center justify-center mb-3">
                      <div className="h-14 w-auto px-4 bg-green-50 rounded-lg flex items-center justify-center text-green-700 font-sans font-bold text-xl group-hover:scale-105 transition-transform text-center leading-tight">SPOORTHI<br />ASSOCIATES</div>
                    </div>
                    <h2 className="text-sm sm:text-base font-bold mb-3 leading-tight text-slate-800">Spoorthi Associates</h2>
                    <div className="mt-auto w-full flex items-center justify-center gap-2 text-green-700 text-[11px] font-semibold bg-green-50 py-1.5 rounded-md px-2 group-hover:bg-emerald-600 group-hover:text-white transition-all">Open Portal <Building2 className="w-4 h-4" /></div>
                  </div>
                </Link>
    )
  },
  {
    name: "D. Raja Sekhar & Co.",
    element: (
      <Link to="/ca" className="group">
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 h-full transition-all duration-300 hover:border-indigo-600 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
                    <div className="h-16 flex items-center justify-center mb-3">
                      <div className="h-14 w-auto px-4 border-2 border-indigo-700 rounded-lg flex items-center justify-center text-indigo-700 font-serif font-bold text-2xl group-hover:scale-105 transition-transform">CA</div>
                    </div>
                    <h2 className="text-sm sm:text-base font-bold mb-3 leading-tight text-slate-800">D. Raja Sekhar & Co.</h2>
                    <div className="mt-auto w-full flex items-center justify-center gap-2 text-indigo-700 text-[11px] font-semibold bg-indigo-50 py-1.5 rounded-md px-2 group-hover:bg-indigo-700 group-hover:text-white transition-all">Open Portal <Briefcase className="w-4 h-4" /></div>
                  </div>
                </Link>
    )
  },
  {
    name: "ITR-2 Acknowledgement",
    element: (
      <Link to="/itr2-acknowledgement" className="group">
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 h-full transition-all duration-300 hover:border-green-600 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
                    <div className="h-16 flex items-center justify-center mb-3">
                      <div className="h-14 w-14 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex flex-col items-center justify-center text-white font-serif font-black shadow-md border-2 border-green-100 group-hover:scale-105 transition-transform">
                        <span className="text-xl">ITR</span>
                      </div>
                    </div>
                    <h2 className="text-sm sm:text-base font-bold mb-3 leading-tight text-slate-800">ITR-2 Acknowledgement</h2>
                    <div className="mt-auto w-full flex items-center justify-center gap-2 text-green-700 text-[11px] font-semibold bg-green-50 py-1.5 rounded-md px-2 group-hover:bg-green-600 group-hover:text-white transition-all">Open Generator</div>
                  </div>
                </Link>
    )
  }
];

const Index = () => {
  const [search, setSearch] = useState("");
  
  const filteredCards = cardsData.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-slate-50">
      
      <div className="flex flex-col items-center justify-center pt-16 pb-12 px-4 w-full">
        <div className="mb-10 text-center w-full max-w-2xl">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Document Generation Portal
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Select an institution or company below to generate official offer letters, payslips, bank statements, and letterheads.
          </p>
          
          <div className="relative w-full shadow-sm rounded-xl">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search documents and institutions..."
              className="block w-full pl-11 pr-4 py-4 border border-slate-300 rounded-xl leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-lg transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {filteredCards.length === 0 ? (
          <div className="text-center py-20 text-slate-500 text-lg">
            No templates found matching "{search}".
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full max-w-[90rem]">
            {filteredCards.map((card, idx) => (
              <React.Fragment key={idx}>
                {card.element}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
