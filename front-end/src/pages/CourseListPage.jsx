import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import CourseCard from '../components/CourseCard';
import { CourseCardSkeleton } from '../components/LoadingSkeleton';
import { BookOpen, Lock, Sparkles, CheckCircle2, Filter } from 'lucide-react';

export default function CourseListPage() {
  const { courses, loading } = useProgress();
  const [filter, setFilter] = useState('all'); // 'all', 'unlocked', 'passed', 'locked'

  const filteredCourses = courses.filter((course) => {
    if (filter === 'all') return true;
    return course.status === filter;
  });

  const countByStatus = {
    all: courses.length,
    unlocked: courses.filter(c => c.status === 'unlocked').length,
    passed: courses.filter(c => c.status === 'passed').length,
    locked: courses.filter(c => c.status === 'locked').length
  };

  return (
    <div className="space-y-8 pb-16">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider mb-2">
            <BookOpen className="w-4 h-4" />
            <span>Katalog Pembelajaran Berjenjang</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            10 Modul Web Development &amp; UI/UX
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
            Setiap modul dirancang saling berkesinambungan. Selesaikan materi dan raih skor minimal <strong className="text-[#FBE156]">80</strong> pada ujian akhir untuk membuka modul selanjutnya.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-[#0D152A] rounded-xl border border-slate-800 self-start md:self-auto overflow-x-auto">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
              filter === 'all'
                ? 'bg-[#FBE156] text-[#0A1124] shadow-sm font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Semua ({countByStatus.all})
          </button>
          <button
            onClick={() => setFilter('unlocked')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
              filter === 'unlocked'
                ? 'bg-[#0052CC] text-white shadow-sm'
                : 'text-slate-400 hover:text-sky-300'
            }`}
          >
            Terbuka ({countByStatus.unlocked})
          </button>
          <button
            onClick={() => setFilter('passed')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
              filter === 'passed'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-emerald-300'
            }`}
          >
            Lulus ({countByStatus.passed})
          </button>
          <button
            onClick={() => setFilter('locked')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
              filter === 'locked'
                ? 'bg-slate-700 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Terkunci ({countByStatus.locked})
          </button>
        </div>
      </div>

      {/* Courses Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map(n => (
            <CourseCardSkeleton key={n} />
          ))}
        </div>
      ) : filteredCourses.length === 0 ? (
        <div className="bg-[#131D35] rounded-2xl border border-slate-800 p-12 text-center max-w-md mx-auto shadow-xl">
          <div className="w-12 h-12 rounded-xl bg-[#0D152A] flex items-center justify-center text-slate-500 mx-auto mb-3 border border-slate-800">
            <Filter className="w-6 h-6" />
          </div>
          <h3 className="text-sm font-bold text-white">Tidak ada modul yang cocok</h3>
          <p className="text-xs text-slate-400 mt-1">
            Belum ada modul pada kategori filter ini. Pilih filter "Semua" untuk melihat seluruh kurikulum.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
}
