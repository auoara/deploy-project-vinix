import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { apiClient } from '../api/client';
import { INITIAL_COURSES } from '../api/mockData';
import { 
  History, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Clock, 
  BookOpen,
  Calendar
} from 'lucide-react';

export default function HistoryPage() {
  const [attempts, setAttempts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadHistory() {
      try {
        setLoading(true);
        const list = await apiClient.getUserAttempts();
        const completed = (list || []).filter(a => a.selesai);
        completed.sort((a, b) => new Date(b.selesai).getTime() - new Date(a.selesai).getTime());
        if (isMounted) {
          setAttempts(completed);
        }
      } catch (err) {
        console.error('Failed to load exam history', err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadHistory();
    return () => { isMounted = false; };
  }, []);

  const getCourseInfo = (att) => {
    if (att.courseJudul && att.courseUrutan) {
      return { judul: att.courseJudul, urutan: att.courseUrutan };
    }
    return INITIAL_COURSES.find(c => c.id === att.courseId) || { judul: 'Modul Pembelajaran', urutan: 1 };
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16">
      
      {/* Header */}
      <div className="pb-6 border-b border-slate-800">
        <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider mb-2">
          <History className="w-4 h-4" />
          <span>Jejak Pembelajaran &amp; Evaluasi</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Riwayat Percobaan Ujian Akhir
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Daftar seluruh sesi ujian yang pernah Anda tempuh beserta skor dan status kelulusan KKM 80.
        </p>
      </div>

      {loading ? (
        <div className="space-y-4 animate-pulse">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-28 bg-[#131D35] rounded-2xl border border-slate-800" />
          ))}
        </div>
      ) : attempts.length === 0 ? (
        <div className="bg-[#131D35] rounded-3xl border border-slate-800 p-12 text-center max-w-md mx-auto shadow-xl">
          <div className="w-14 h-14 rounded-2xl bg-[#0D152A] text-sky-400 border border-slate-800 flex items-center justify-center mx-auto mb-4">
            <History className="w-7 h-7" />
          </div>
          <h3 className="text-base font-bold text-white">Belum Ada Riwayat Ujian</h3>
          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
            Anda belum pernah menyelesaikan ujian modul. Mulailah membaca materi pada Modul 1 dan kerjakan ujian akhirnya!
          </p>
          <div className="mt-6">
            <Link
              to="/courses/c1"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FBE156] hover:bg-yellow-400 text-[#0A1124] font-black text-xs rounded-xl shadow-md transition-all"
            >
              <BookOpen className="w-4 h-4" />
              <span>Mulai Modul 1 Sekarang</span>
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {attempts.map((att) => {
            const course = getCourseInfo(att);
            const isPassed = att.nilai >= 80;

            return (
              <div
                key={att.id}
                className="bg-[#131D35] rounded-2xl border border-slate-800 p-5 sm:p-6 shadow-xl hover:border-[#0052CC]/60 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-base shrink-0 ${
                      isPassed
                        ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800'
                        : 'bg-rose-950/80 text-rose-300 border border-rose-800'
                    }`}
                  >
                    {att.nilai}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-[#0D152A] text-slate-300 border border-slate-800">
                        Modul {course.urutan}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">
                        Percobaan #{att.attemptNumber} (Set {att.setPaket})
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-white">
                      {course.judul}
                    </h3>

                    <div className="flex items-center gap-4 mt-2 text-xs text-slate-400 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(att.selesai).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {new Date(att.selesai).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })} WIB
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Status badge & View Result CTA */}
                <div className="flex items-center justify-between sm:justify-end gap-4 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-800">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold border ${
                      isPassed
                        ? 'bg-emerald-950/80 text-emerald-300 border-emerald-800'
                        : 'bg-rose-950/80 text-rose-300 border-rose-800'
                    }`}
                  >
                    {isPassed ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        Lulus (KKM 80)
                      </>
                    ) : (
                      <>
                        <XCircle className="w-3.5 h-3.5 text-rose-400" />
                        Belum Lulus
                      </>
                    )}
                  </span>

                  <Link
                    to={`/result/${att.id}`}
                    className="inline-flex items-center gap-1 px-4 py-2 bg-[#0D152A] hover:bg-[#0052CC] text-slate-300 hover:text-white rounded-xl text-xs font-bold border border-slate-800 transition-colors"
                  >
                    <span>Lihat Ulasan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}