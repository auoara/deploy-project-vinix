import React from 'react';
import { GraduationCap, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#090E20] border-t border-slate-800 mt-20 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#0052CC] to-[#003399] flex items-center justify-center text-white font-bold text-sm shadow-sm">
              <GraduationCap className="w-5 h-5 text-[#FBE156]" />
            </div>
            <div>
              <p className="text-sm font-extrabold text-white">
                <span className="text-blue-500 font-black">VINIX</span>
                <span className="text-[#FBE156] font-black">7</span> Mini-Course &amp; Assessment
              </p>
              <p className="text-xs text-slate-400">Tugas Akhir Magang Web Educational Technology</p>
            </div>
          </div>

          {/* Compliance & Standards Tags */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#131D35] rounded-md border border-slate-800 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Progressive Gating Engine
            </span>
            <span className="px-2.5 py-1 bg-[#131D35] rounded-md border border-slate-800 text-slate-300">
              KKM Lulus: 80 Poin
            </span>
            <span className="px-2.5 py-1 bg-[#131D35] rounded-md border border-slate-800 text-slate-300">
              WCAG 2.1 AA Compliant
            </span>
          </div>

          <p className="text-xs text-slate-500 text-center md:text-right">
            &copy; {new Date().getFullYear()} Tim Pengembang <span className="text-blue-400 font-bold">VINIX</span><span className="text-[#FBE156] font-bold">7</span>. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
