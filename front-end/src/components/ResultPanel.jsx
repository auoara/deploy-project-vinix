import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  Layers, 
  Calculator,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ResultPanel({ result, courseId, nextCourseId }) {
  const isPassed = result.finalScore >= 80;

  useEffect(() => {
    if (isPassed) {
      // Trigger festive celebration confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // ignore in non-browser env
      }
    }
  }, [isPassed]);

  return (
    <div
      className={`rounded-3xl border p-6 sm:p-10 shadow-2xl transition-all ${
        isPassed
          ? 'bg-gradient-to-br from-[#131D35] via-[#10243E] to-[#0D1B2A] border-emerald-500/40'
          : 'bg-gradient-to-br from-[#131D35] via-[#241726] to-[#1F131D] border-rose-500/40'
      }`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: Badge & Pass Status */}
        <div className="flex items-center gap-6 text-center md:text-left">
          <div
            className={`w-24 h-24 rounded-3xl flex items-center justify-center font-black text-3xl shadow-inner shrink-0 ${
              isPassed
                ? 'bg-emerald-500 text-white ring-8 ring-emerald-950/80 shadow-emerald-900'
                : 'bg-rose-500 text-white ring-8 ring-rose-950/80 shadow-rose-900'
            }`}
          >
            {result.finalScore}
          </div>

          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${
                  isPassed
                    ? 'bg-emerald-950/80 text-emerald-300 border-emerald-800'
                    : 'bg-rose-950/80 text-rose-300 border-rose-800'
                }`}
              >
                {isPassed ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Lulus Evaluasi (KKM 80)
                  </>
                ) : (
                  <>
                    <XCircle className="w-3.5 h-3.5" />
                    Belum Memenuhi KKM 80
                  </>
                )}
              </span>
              <span className="text-xs text-slate-400 font-semibold">
                Percobaan #{result.attemptNumber || 1} (Set {result.setPaket || 'A'})
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {isPassed ? 'Selamat, Anda Berhasil Lulus!' : 'Tetap Semangat, Evaluasi Mandiri'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              {isPassed
                ? 'Pemahaman fondasi Anda telah tervalidasi. Modul berikutnya dalam kurikulum berjenjang telah otomatis terbuka!'
                : 'Anda belum mencapai syarat skor kelulusan minimal 80. Tinjau pembahasan dan analisis topik lemah sebelum mengulang.'}
            </p>
          </div>
        </div>

        {/* Right CTA */}
        <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
          {isPassed && nextCourseId ? (
            <Link
              to={`/courses/${nextCourseId}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FBE156] hover:bg-yellow-400 text-[#0A1124] font-black text-sm rounded-xl shadow-lg transition-all hover:scale-102"
            >
              <span>Lanjut ke Modul Berikutnya</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <Link
              to={`/courses/${courseId}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-sm rounded-xl shadow-sm transition-all"
            >
              <BookOpen className="w-4 h-4 text-[#FBE156]" />
              <span>Pelajari Ulang Materi Modul</span>
            </Link>
          )}
        </div>
      </div>

      {/* Breakdown Score Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-800">
        
        {/* Pilihan Ganda */}
        <div className="bg-[#0D152A] rounded-2xl p-4 border border-slate-800 shadow-sm">
          <p className="text-xs font-semibold text-slate-400">Poin Pilihan Ganda (Bobot 60%)</p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-black text-white">{result.totalPG || 0}</span>
            <span className="text-xs font-bold text-slate-500">/ 100 Poin</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            Kontribusi: {((0.60 * ((result.totalPG || 0) / 100)) * 100).toFixed(1)} Poin
          </p>
        </div>

        {/* Essay Studi Kasus */}
        <div className="bg-[#0D152A] rounded-2xl p-4 border border-slate-800 shadow-sm">
          <p className="text-xs font-semibold text-slate-400">Poin Essay Studi Kasus (Bobot 40%)</p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-black text-white">{result.totalEssay || 0}</span>
            <span className="text-xs font-bold text-slate-500">/ 50 Poin</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            Kontribusi: {((0.40 * ((result.totalEssay || 0) / 50)) * 100).toFixed(1)} Poin
          </p>
        </div>

        {/* Rumus Penilaian PRD */}
        <div className="bg-[#0D152A] rounded-2xl p-4 border border-slate-800 shadow-sm">
          <p className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
            <Calculator className="w-3.5 h-3.5 text-sky-400" />
            Formula Nilai Akhir PRD
          </p>
          <div className="mt-1.5 text-[11px] font-mono text-slate-300 bg-[#090E20] p-2 rounded-lg border border-slate-800 leading-relaxed">
            [0.60 &times; (PG/100) + 0.40 &times; (Essay/50)] &times; 100
          </div>
        </div>
      </div>
    </div>
  );
}
