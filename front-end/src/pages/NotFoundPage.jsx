import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Home, BookOpen } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="max-w-md mx-auto py-20 px-4 text-center">
      <div className="w-16 h-16 rounded-3xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center mx-auto mb-4">
        <AlertCircle className="w-8 h-8" />
      </div>
      <h1 className="text-4xl font-black text-slate-900 tracking-tight">404</h1>
      <h2 className="text-base font-bold text-slate-800 mt-2">Halaman Tidak Ditemukan</h2>
      <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto leading-relaxed">
        Tautan yang Anda tuju tidak tersedia atau telah dipindahkan dalam kurikulum sistem.
      </p>

      <div className="mt-8 flex items-center justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs shadow-sm hover:bg-indigo-700 transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Ke Beranda</span>
        </Link>
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-colors"
        >
          <BookOpen className="w-4 h-4" />
          <span>Katalog Modul</span>
        </Link>
      </div>
    </div>
  );
}
