import React from "react";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

export default function MallaReddyIndex() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-800 mb-8">Malla Reddy University Tools</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            to="/mallareddy/letterhead"
            className="flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-300 transition-all group"
          >
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FileText className="w-8 h-8" />
            </div>
            <h2 className="text-lg font-semibold text-slate-800 text-center">Letterhead Generator</h2>
            <p className="text-sm text-slate-500 text-center mt-2">Generate official NOCs and letters</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
