import React from "react";
import { Link } from "react-router-dom";
import { FileText, GraduationCap } from "lucide-react";

export default function SriBalajiIndex() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/" className="text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors">
            ← Home
          </Link>
          <span className="text-slate-300">/</span>
          <h1 className="text-2xl font-bold text-slate-800">Sri Balaji University, Pune (SBUP)</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            to="/sri-balaji/letterhead"
            className="flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-red-300 transition-all group"
          >
            <div className="w-16 h-16 bg-red-50 text-red-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FileText className="w-8 h-8" />
            </div>
            <h2 className="text-lg font-semibold text-slate-800 text-center">Letterhead Generator</h2>
            <p className="text-sm text-slate-500 text-center mt-2">Generate official Bonafide, NOC, and University letters</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
