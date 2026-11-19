import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { apiClient } from '../api/client';
import { useProgress } from '../context/ProgressContext';
import ResultPanel from '../components/ResultPanel';
import WeakTopicsList from '../components/WeakTopicsList';
import CooldownTimer from '../components/CooldownTimer';
import QuestionCard from '../components/QuestionCard';
import { 
  ArrowLeft, 
  RotateCcw, 
  BookOpen, 
  CheckCircle2, 
  ListFilter, 
  Award,
  Clock,
  Sparkles,
  HelpCircle,
  FileCheck
} from 'lucide-react';

export default function ResultPage() {
  const { attemptId } = useParams();
  const navigate = useNavigate();
  const { refreshProgress, courses } = useProgress();

  const [attempt, setAttempt] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filterMode, setFilterMode] = useState('all'); // 'all', 'wrong', 'essay'
  const [cooldownFinished, setCooldownFinished] = useState(false);

  useEffect(() => {
    async function loadResult() {
      try {
        setLoading(true);
        const data = await apiClient.getAttemptResult(attemptId);
        setAttempt(data);
        refreshProgress(); // Refresh overall user progress state
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadResult();
  }, [attemptId, refreshProgress]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto py-16 text-center animate-pulse space-y-6">
        <div className="w-1/3 h-8 bg-slate-800 rounded mx-auto" />
        <div className="h-64 bg-[#131D35] rounded-3xl border border-slate-800" />
        <div className="h-40 bg-[#131D35] rounded-2xl border border-slate-800" />
      </div>
    );
  }

  if (!attempt) {
    return (
      <div className="max-w-md mx-auto py-16 text-center">
        <h2 className="text-lg font-bold text-white">Hasil ujian tidak ditemukan</h2>
        <Link to="/courses" className="mt-4 inline-block text-xs font-bold text-[#FBE156]">
          &larr; Kembali ke daftar modul
        </Link>
      </div>
    );
  }

  const isPassed = attempt.nilai >= 80;
  const currentCourse = courses.find(c => c.id === attempt.courseId);
  const nextCourse = currentCourse 
    ? courses.find(c => c.urutan === currentCourse.urutan + 1)
    : null;

  const evaluatedQuestions = attempt.evaluatedQuestions || [];

  const filteredQuestions = evaluatedQuestions.filter(q => {
    if (filterMode === 'wrong') return q.poin < 10;
    if (filterMode === 'essay') return q.tipe === 'essay';
    return true;
  });

  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-24">
      
      {/* Top Breadcrumb */}
      <div className="flex items-center justify-between">
        <Link
          to={`/courses/${attempt.courseId}`}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-[#FBE156] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Modul {currentCourse?.urutan || ''}</span>
        </Link>

        <span className="text-xs font-semibold text-slate-400">
          Selesai pada: {new Date(attempt.selesai || Date.now()).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })} WIB
        </span>
      </div>

      {/* Main Score & Evaluation Panel */}
      <ResultPanel
        result={{
          finalScore: attempt.nilai,
          totalPG: attempt.totalPG,
          totalEssay: attempt.totalEssay,
          attemptNumber: attempt.attemptNumber,
          setPaket: attempt.setPaket
        }}
        courseId={attempt.courseId}
        nextCourseId={nextCourse?.id}
      />

      {/* Live Cooldown Timer (If failed & cooldown active) */}
      {!isPassed && attempt.cooldownUntil && (
        <CooldownTimer
          cooldownUntil={attempt.cooldownUntil}
          onComplete={() => setCooldownFinished(true)}
        />
      )}

      {/* Weak Topics Analysis Panel (PRD Feature F7) */}
      <WeakTopicsList
        weakTopics={attempt.weakTopics || []}
        courseId={attempt.courseId}
      />

      {/* Retake / Repeat CTA Card */}
      {!isPassed && (
        <div className="bg-[#131D35] rounded-3xl border border-slate-800 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-[#FBE156]" />
              Ingin Mengulang Ujian (Retake)?
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Percobaan berikutnya akan menyajikan variasi paket soal baru (Set B/C). Sistem mencatat skor tertinggi yang Anda peroleh.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              to={`/courses/${attempt.courseId}`}
              className="px-4 py-2.5 rounded-xl border border-slate-700 text-xs font-bold text-slate-300 hover:bg-[#0D152A] hover:text-white transition-colors"
            >
              Baca Materi
            </Link>
            <button
              onClick={() => navigate(`/exam/${attempt.courseId}`)}
              disabled={!cooldownFinished && Boolean(attempt.cooldownUntil && new Date(attempt.cooldownUntil) > new Date())}
              className={`px-5 py-2.5 rounded-xl text-xs font-black transition-all shadow-md flex items-center gap-2 ${
                !cooldownFinished && Boolean(attempt.cooldownUntil && new Date(attempt.cooldownUntil) > new Date())
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  : 'bg-[#FBE156] hover:bg-yellow-400 text-[#0A1124]'
              }`}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Ulangi Ujian Sekarang</span>
            </button>
          </div>
        </div>
      )}

      {/* Question Review & Explanations Header */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-800">
          <div>
            <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-sky-400" />
              Pembahasan &amp; Kunci Jawaban Lengkap (15 Soal)
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Tinjau jawaban Anda, skor per butir soal, dan ulasan konsep yang benar.
            </p>
          </div>

          {/* Filter Review Buttons */}
          <div className="flex items-center gap-1 bg-[#0D152A] p-1 rounded-xl self-start sm:self-auto border border-slate-800">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filterMode === 'all' ? 'bg-[#FBE156] text-[#0A1124] shadow-sm font-black' : 'text-slate-400 hover:text-white'
              }`}
            >
              Semua ({evaluatedQuestions.length})
            </button>
            <button
              onClick={() => setFilterMode('wrong')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filterMode === 'wrong' ? 'bg-rose-600 text-white shadow-sm' : 'text-slate-400 hover:text-rose-400'
              }`}
            >
              Kurang/Salah ({evaluatedQuestions.filter(q => q.poin < 10).length})
            </button>
            <button
              onClick={() => setFilterMode('essay')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filterMode === 'essay' ? 'bg-[#0052CC] text-white shadow-sm' : 'text-slate-400 hover:text-sky-300'
              }`}
            >
              Essay ({evaluatedQuestions.filter(q => q.tipe === 'essay').length})
            </button>
          </div>
        </div>

        {/* Question Cards in Review Mode */}
        <div className="space-y-6 pt-2">
          {filteredQuestions.map((q) => (
            <QuestionCard
              key={q.questionId}
              question={q}
              answer={q.jawabanPengguna}
              showResult={true}
              reviewData={q}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
