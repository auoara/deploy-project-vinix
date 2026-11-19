import React from 'react';
import { AlertTriangle, BookMarked, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WeakTopicsList({ weakTopics = [], courseId }) {
  if (!weakTopics || weakTopics.length === 0) {
    return (
      <div className="bg-emerald-950/60 border border-emerald-800/80 rounded-2xl p-6 text-emerald-200 flex items-start gap-3 shadow-lg">
        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
        <div>
          <h4 className="text-sm font-bold text-white">Penguasaan Topik Merata!</h4>
          <p className="text-xs text-emerald-300/90 mt-1">
            Tidak terdeteksi topik yang memiliki kelemahan signifikan. Anda menguasai seluruh konsep inti pada modul ini dengan solid.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#131D35] rounded-2xl border border-amber-900/50 shadow-xl overflow-hidden">
      <div className="p-5 bg-amber-950/40 border-b border-amber-900/50 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <AlertTriangle className="w-5 h-5 text-amber-400" />
          <h3 className="text-sm font-bold text-white">
            Analisis Topik yang Perlu Diperkuat (Weak Topics)
          </h3>
        </div>
        <span className="text-xs font-semibold px-2.5 py-0.5 bg-amber-950/80 text-amber-300 border border-amber-800 rounded-full">
          {weakTopics.length} Topik Lemah
        </span>
      </div>

      <div className="p-5 space-y-3">
        <p className="text-xs text-slate-300 leading-relaxed">
          Berdasarkan evaluasi sistem, persentase nilai Anda masih berada di bawah 70% pada topik-topik berikut. Sangat disarankan untuk meninjau materi terkait sebelum mengulang ujian:
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {weakTopics.map((topik, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0D152A] border border-amber-800/60 text-xs font-bold text-amber-200"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>{topik}</span>
            </div>
          ))}
        </div>

        {courseId && (
          <div className="pt-3">
            <Link
              to={`/courses/${courseId}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FBE156] hover:underline"
            >
              <BookMarked className="w-4 h-4" />
              <span>Buka kembali modul materi untuk membaca ulang topik ini &rarr;</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
