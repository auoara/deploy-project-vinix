import React from 'react';
import { Link } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import CourseCard from '../components/CourseCard';
import ProgressBar from '../components/ProgressBar';
import { 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  Target,
  Zap,
  Play,
  Compass
} from 'lucide-react';

export default function DashboardPage() {
  const { user } = useAuth();
  const { courses, summary, loading } = useProgress();

  // Find the next active course to resume
  const activeCourse = courses.find(c => c.status === 'unlocked') || courses[0];

  return (
    <div className="space-y-12 pb-16">
      
      {/* Hero Banner - Resembling the official VINIX7 LMS Dashboard */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0052CC] via-[#0047BA] to-[#003399] text-white p-6 sm:p-10 shadow-2xl border border-blue-500/20">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
          
          {/* Left: User Welcome & CTA */}
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-slate-200 text-[#0B132B] font-black text-sm flex items-center justify-center shrink-0 ring-2 ring-white/20 shadow-md">
                {user?.nama ? user.nama.split(' ').map(n=>n[0]).slice(0,2).join('') : 'MF'}
              </div>
              <div>
                <p className="text-xs text-blue-200 font-medium flex items-center gap-1.5">
                  Selamat datang kembali 👋
                </p>
                <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {user?.nama || 'Muhammad Mirza Fatih'}
                </h1>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed">
              Pantau progress belajarmu, taklukkan 10 modul dengan KKM 80, dan raih sertifikasi kelulusan magang Web Development &amp; UI/UX!
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to={activeCourse ? `/courses/${activeCourse.id}` : '/courses'}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FBE156] hover:bg-[#F3D746] text-[#0A1124] font-black text-xs sm:text-sm shadow-lg shadow-black/20 transition-all hover:scale-102"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Lanjutkan Belajar</span>
              </Link>

              <Link
                to="/courses"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm border border-white/15 transition-colors"
              >
                <Compass className="w-4 h-4" />
                <span>Katalog Modul</span>
              </Link>
            </div>
          </div>

          {/* Right: Circular Progress Metric (Sesuai ring widget di dashboard resmi) */}
          <div className="flex items-center gap-5 p-5 bg-[#091024]/50 backdrop-blur-md rounded-2xl border border-white/10 self-start lg:self-auto shrink-0 shadow-lg">
            <div className="relative w-20 h-20 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-blue-950"
                  strokeWidth="3.5"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-[#FBE156] transition-all duration-1000 ease-out"
                  strokeDasharray={`${summary.percentage}, 100`}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center text-center">
                <span className="text-base font-black text-white">{summary.percentage}%</span>
                <span className="text-[9px] text-blue-200 uppercase font-bold">selesai</span>
              </div>
            </div>

            <div className="space-y-1.5 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FBE156]" />
                <span className="font-bold text-white">{summary.passedCount} Selesai</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                <span className="font-medium text-slate-300">{summary.totalCourses - summary.passedCount} Berjalan</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress & Quick Stats Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Modul Selesai */}
        <div className="bg-[#131D35] rounded-2xl p-5 border border-slate-800 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-950/70 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-800/60">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400">Modul Tuntas</p>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-2xl font-black text-white">{summary.passedCount}</span>
              <span className="text-xs font-bold text-slate-400">/ 10 Modul</span>
            </div>
          </div>
        </div>

        {/* Persentase Kelulusan */}
        <div className="bg-[#131D35] rounded-2xl p-5 border border-slate-800 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-950/70 text-[#FBE156] flex items-center justify-center shrink-0 border border-blue-800/60">
            <Target className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-slate-400">Progress Jalur</p>
              <span className="text-xs font-black text-[#FBE156]">{summary.percentage}%</span>
            </div>
            <div className="mt-2">
              <ProgressBar percentage={summary.percentage} showValue={false} size="sm" />
            </div>
          </div>
        </div>

        {/* Skor Rata-rata */}
        <div className="bg-[#131D35] rounded-2xl p-5 border border-slate-800 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-950/70 text-amber-400 flex items-center justify-center shrink-0 border border-amber-800/60">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400">Rerata Skor Terbaik</p>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-2xl font-black text-white">{summary.averageScore}</span>
              <span className="text-xs font-bold text-slate-400">/ 100 Poin</span>
            </div>
          </div>
        </div>

        {/* Total Percobaan Ujian */}
        <div className="bg-[#131D35] rounded-2xl p-5 border border-slate-800 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-sky-950/70 text-sky-400 flex items-center justify-center shrink-0 border border-sky-800/60">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400">Sesi Evaluasi</p>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-2xl font-black text-white">{summary.totalAttempts}</span>
              <span className="text-xs font-bold text-slate-400">Kali Ujian</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Rules Card (PRD Alignment) */}
      <section className="bg-[#131D35] rounded-3xl border border-slate-800 p-6 sm:p-8">
        <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#FBE156]" />
          Aturan Utama Progressive Gating (Sesuai PRD)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 rounded-2xl bg-[#0D152A] border border-slate-800">
            <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-black text-xs flex items-center justify-center mb-3">
              1
            </span>
            <h3 className="font-bold text-sm text-white mb-1">KKM Kelulusan 80</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Modul berikutnya hanya akan terbuka jika Anda mencapai nilai minimal 80 pada ujian akhir modul saat ini.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#0D152A] border border-slate-800">
            <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-black text-xs flex items-center justify-center mb-3">
              2
            </span>
            <h3 className="font-bold text-sm text-white mb-1">Evaluasi 60% PG + 40% Essay</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Ujian terdiri dari 10 soal Pilihan Ganda dan 5 soal Essay studi kasus dengan pencocokan kata kunci otomatis.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#0D152A] border border-slate-800">
            <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-black text-xs flex items-center justify-center mb-3">
              3
            </span>
            <h3 className="font-bold text-sm text-white mb-1">Cooldown 1 Menit &amp; Rotasi Soal</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Jika belum lulus, sistem memberlakukan jeda waktu 1 menit dan menyajikan paket soal rotasi berikutnya (Set A &rarr; B &rarr; C).
            </p>
          </div>
        </div>
      </section>

      {/* Featured Courses Overview */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-extrabold text-white tracking-tight">
              Kurikulum 10 Modul Berjenjang
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Dari Mindset Startup, UI/UX Design, HTML Semantik, hingga Integrasi Data &amp; Portofolio
            </p>
          </div>
          <Link
            to="/courses"
            className="text-xs font-bold text-[#FBE156] hover:text-yellow-300 flex items-center gap-1"
          >
            <span>Lihat Semua</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.slice(0, 6).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}
