import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Lock, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  BookOpen, 
  Award,
  Sparkles,
  Lightbulb,
  Palette,
  Users,
  Layers,
  Smartphone,
  Code2,
  GitPullRequest,
  Database
} from 'lucide-react';
import ProgressBar from './ProgressBar';

const ICON_MAP = {
  Lightbulb,
  Palette,
  Users,
  Layers,
  Smartphone,
  Code2,
  GitPullRequest,
  Database,
  Sparkles,
  Award
};

export default function CourseCard({ course }) {
  const isLocked = course.status === 'locked';
  const isPassed = course.status === 'passed';
  const isUnlocked = course.status === 'unlocked';

  const IconComponent = ICON_MAP[course.icon] || BookOpen;
  const completedList = course.bagianSelesai || course.bagian_selesai || [];
  const sectionsRead = completedList.length;
  const totalSections = course.totalSections ?? course.total_sections ?? course.sections?.length ?? 3;

  return (
    <div
      className={`relative rounded-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden border ${
        isLocked
          ? 'bg-[#0D152A]/60 border-slate-800/80 opacity-70'
          : isPassed
            ? 'bg-[#131D35] border-emerald-500/30 shadow-lg shadow-black/20 hover:border-emerald-500/60'
            : 'bg-[#131D35] border-slate-800 hover:border-[#0052CC]/70 shadow-lg shadow-black/20 group'
      }`}
    >
      {/* Top Banner / Status Badge */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between gap-3 mb-4">
          
          {/* Module Number & Icon */}
          <div className="flex items-center gap-3">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center font-extrabold text-base transition-colors ${
                isLocked
                  ? 'bg-[#0D152A] text-slate-500 border border-slate-800'
                  : isPassed
                    ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/60'
                    : 'bg-[#0052CC]/20 text-sky-400 border border-[#0052CC]/40 group-hover:bg-[#0052CC] group-hover:text-white'
              }`}
            >
              <IconComponent className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Modul {course.urutan}
              </span>
              <h3 className="font-bold text-base text-white leading-snug line-clamp-1 group-hover:text-[#FBE156] transition-colors">
                {course.judul}
              </h3>
            </div>
          </div>

          {/* Gating Status Pill */}
          <div>
            {isLocked && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-800/80 text-slate-400 border border-slate-700/60">
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                Terkunci
              </span>
            )}
            {isPassed && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-800/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Lulus ({course.nilaiTerbaik ?? course.nilai_terbaik ?? 0} Poin)
              </span>
            )}
            {isUnlocked && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-950/80 text-sky-300 border border-blue-800/80">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                Terbuka
              </span>
            )}
          </div>
        </div>

        {/* Course Description */}
        <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 mb-4">
          {course.ringkasan}
        </p>

        {/* Meta Info: Time, Category */}
        <div className="flex items-center gap-4 text-[11px] font-medium text-slate-400 mb-4">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            {course.estimasiWaktu || course.estimasi_waktu || '45 Menit'}
          </span>
          <span className="px-2 py-0.5 bg-[#0D152A] border border-slate-800 rounded text-slate-300 font-semibold">
            {course.kategori}
          </span>
        </div>

        {/* Reading Progress */}
        <div className="pt-2 border-t border-slate-800/80">
          <ProgressBar
            current={sectionsRead}
            total={totalSections}
            label={`Materi Dibaca (${sectionsRead}/${totalSections})`}
            size="sm"
          />
        </div>
      </div>

      {/* Card Action Footer */}
      <div className={`p-4 px-6 border-t ${isLocked ? 'bg-[#0D152A]/60 border-slate-800/80' : 'bg-[#0D152A]/90 border-slate-800'}`}>
        {isLocked ? (
          <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-slate-500" />
              Syarat: Lulus Modul {course.urutan - 1} (KKM 80)
            </span>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 font-medium">
              {isPassed ? 'Ujian telah tuntas' : 'Ujian Akhir: 15 Soal'}
            </span>
            <Link
              to={`/courses/${course.id}`}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
                isPassed
                  ? 'bg-emerald-950/80 text-emerald-300 hover:bg-emerald-900/80 border border-emerald-700/60'
                  : 'bg-[#FBE156] text-[#0A1124] hover:bg-yellow-400 font-black'
              }`}
            >
              <span>{isPassed ? 'Buka Modul' : 'Mulai Belajar'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}