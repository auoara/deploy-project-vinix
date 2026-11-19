import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { apiClient } from '../api/client';
import QuestionCard from '../components/QuestionCard';
import ConfirmModal from '../components/ConfirmModal';
import CooldownTimer from '../components/CooldownTimer';
import { ExamSkeleton } from '../components/LoadingSkeleton';
import { 
  ArrowLeft, 
  ArrowRight, 
  Send, 
  Award, 
  Clock, 
  CheckCircle2, 
  AlertTriangle,
  Layers,
  HelpCircle
} from 'lucide-react';

export default function ExamPage() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [attemptData, setAttemptData] = useState(null);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [cooldownError, setCooldownError] = useState(null);

  // Load or start exam attempt
  useEffect(() => {
    async function initExam() {
      try {
        setLoading(true);
        const res = await apiClient.startExam(courseId);

        if (res.error === 'COOLDOWN_ACTIVE') {
          setCooldownError(res);
          return;
        }

        setAttemptData(res);

        // Check if there is saved draft in localStorage
        const draftKey = `vinix7_exam_draft_${res.attemptId}`;
        const savedDraft = localStorage.getItem(draftKey);
        if (savedDraft) {
          try {
            setAnswers(JSON.parse(savedDraft));
          } catch (e) {
            console.error(e);
          }
        }
      } catch (err) {
        console.error('Failed to start exam', err);
      } finally {
        setLoading(false);
      }
    }
    initExam();
  }, [courseId]);

  // Handle single question answer change
  const handleAnswerChange = (questionId, value) => {
    setAnswers(prev => {
      const updated = { ...prev, [questionId]: value };
      if (attemptData?.attemptId) {
        localStorage.setItem(`vinix7_exam_draft_${attemptData.attemptId}`, JSON.stringify(updated));
      }
      return updated;
    });
  };

  // Submit Handler
  const handleConfirmSubmit = async () => {
    setConfirmModalOpen(false);
    try {
      setSubmitting(true);
      const res = await apiClient.submitExam(attemptData.attemptId, courseId, answers);

      // Clean draft
      localStorage.removeItem(`vinix7_exam_draft_${attemptData.attemptId}`);

      // Navigate to Result Page
      navigate(`/result/${res.attemptId}`);
    } catch (err) {
      console.error('Failed to submit exam', err);
      alert('Terjadi kesalahan saat mengirimkan jawaban. Silakan coba kembali.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="py-8">
        <ExamSkeleton />
      </div>
    );
  }

  // Active Cooldown Screen
  if (cooldownError) {
    return (
      <div className="max-w-xl mx-auto py-16 space-y-6 text-center">
        <div className="w-16 h-16 rounded-3xl bg-amber-950/60 border border-amber-800 text-amber-400 flex items-center justify-center mx-auto shadow-xl">
          <Clock className="w-8 h-8 animate-spin" />
        </div>
        <h2 className="text-2xl font-extrabold text-white">Jeda Cooldown Aktif</h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {cooldownError.message}
        </p>

        <CooldownTimer
          cooldownUntil={cooldownError.cooldownUntil}
          onComplete={() => {
            setCooldownError(null);
            window.location.reload();
          }}
        />

        <div className="pt-4">
          <Link
            to={`/courses/${courseId}`}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#FBE156] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Modul untuk Pelajari Ulang Materi</span>
          </Link>
        </div>
      </div>
    );
  }

  if (!attemptData || !attemptData.questions || attemptData.questions.length === 0) {
    return (
      <div className="max-w-md mx-auto py-16 text-center">
        <h2 className="text-lg font-bold text-white">Gagal memuat bank soal</h2>
        <Link to={`/courses/${courseId}`} className="mt-4 inline-block text-xs font-bold text-[#FBE156]">
          &larr; Kembali ke detail modul
        </Link>
      </div>
    );
  }

  const questions = attemptData.questions;
  const currentQuestion = questions[activeQuestionIndex];
  const totalQuestions = questions.length; // 15
  const answeredCount = Object.keys(answers).filter(k => answers[k] && answers[k].trim?.() !== '').length;
  const unansweredCount = totalQuestions - answeredCount;

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-24">
      
      {/* Top Header Workspace */}
      <div className="bg-[#131D35] rounded-3xl border border-slate-800 p-4 sm:p-6 shadow-xl flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            to={`/courses/${courseId}`}
            className="p-2 text-slate-400 hover:text-white hover:bg-[#0D152A] rounded-xl transition-colors border border-transparent hover:border-slate-800"
            title="Keluar dari ujian"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-sky-400 bg-[#0052CC]/20 px-2 py-0.5 rounded-md border border-[#0052CC]/40">
                Ujian Akhir Modul
              </span>
              <span className="text-xs font-bold text-slate-400">
                Paket {attemptData.setPaket} (Percobaan #{attemptData.attemptNumber})
              </span>
            </div>
            <h1 className="text-base sm:text-lg font-extrabold text-white mt-0.5">
              Evaluasi Pemahaman Berjenjang
            </h1>
          </div>
        </div>

        {/* Counter Badge */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-[11px] font-bold text-slate-400 uppercase">Terjawab</p>
            <p className="text-sm font-black text-white">
              <span className="text-emerald-400">{answeredCount}</span> / {totalQuestions} Soal
            </p>
          </div>
          <button
            onClick={() => setConfirmModalOpen(true)}
            disabled={submitting}
            className="px-5 py-2.5 rounded-xl bg-[#FBE156] hover:bg-yellow-400 text-[#0A1124] font-black text-xs shadow-md flex items-center gap-2 transition-all"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{submitting ? 'Menilai...' : 'Kirim Jawaban'}</span>
          </button>
        </div>
      </div>

      {/* Question Number Navigation Grid (1 to 15) */}
      <div className="bg-[#131D35] rounded-2xl border border-slate-800 p-4 shadow-xl">
        <div className="flex items-center justify-between mb-3 text-xs font-bold text-slate-300">
          <span>Navigasi Nomor Soal:</span>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1.5 text-slate-400">
              <span className="w-3 h-3 rounded-full bg-[#0D152A] border border-slate-700" />
              Kosong
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              Terisi
            </span>
            <span className="flex items-center gap-1.5 text-sky-400">
              <span className="w-3 h-3 rounded-full ring-2 ring-[#0052CC] bg-[#0052CC]/50" />
              Aktif
            </span>
          </div>
        </div>

        <div className="grid grid-cols-5 sm:grid-cols-15 gap-1.5">
          {questions.map((q, idx) => {
            const isAnswered = answers[q.id] && answers[q.id].trim?.() !== '';
            const isActive = activeQuestionIndex === idx;
            const isEssay = q.tipe === 'essay';

            return (
              <button
                key={q.id}
                onClick={() => setActiveQuestionIndex(idx)}
                className={`h-10 rounded-xl font-extrabold text-xs transition-all relative flex flex-col items-center justify-center ${
                  isActive
                    ? 'bg-[#0052CC] text-white ring-2 ring-[#FBE156] shadow-md'
                    : isAnswered
                      ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/80 hover:bg-emerald-900'
                      : 'bg-[#0D152A] text-slate-400 border border-slate-800 hover:bg-[#1a2747] hover:text-white'
                }`}
                title={`Soal ${idx + 1} (${isEssay ? 'Essay' : 'PG'} - ${q.topik})`}
              >
                <span>{idx + 1}</span>
                {isEssay && (
                  <span className={`text-[8px] uppercase tracking-tighter ${isActive ? 'text-sky-200' : 'text-slate-400'}`}>
                    Essay
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Question Card Component */}
      <QuestionCard
        question={currentQuestion}
        answer={answers[currentQuestion.id] || ''}
        onAnswerChange={handleAnswerChange}
      />

      {/* Bottom Prev / Next Navigation Controls */}
      <div className="flex items-center justify-between gap-4 pt-2">
        <button
          type="button"
          onClick={() => setActiveQuestionIndex(prev => Math.max(0, prev - 1))}
          disabled={activeQuestionIndex === 0}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl border text-xs font-bold transition-all ${
            activeQuestionIndex === 0
              ? 'opacity-40 cursor-not-allowed bg-[#0D152A] border-slate-800 text-slate-600'
              : 'bg-[#131D35] border-slate-700 text-slate-200 hover:bg-[#182542] hover:text-white'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Soal Sebelumnya</span>
        </button>

        <span className="text-xs font-bold text-slate-400">
          Soal {activeQuestionIndex + 1} dari {totalQuestions}
        </span>

        {activeQuestionIndex < totalQuestions - 1 ? (
          <button
            type="button"
            onClick={() => setActiveQuestionIndex(prev => Math.min(totalQuestions - 1, prev + 1))}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0052CC] hover:bg-blue-600 text-white text-xs font-bold transition-all shadow-md"
          >
            <span>Soal Selanjutnya</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setConfirmModalOpen(true)}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FBE156] hover:bg-yellow-400 text-[#0A1124] text-xs font-black transition-all shadow-md"
          >
            <Send className="w-4 h-4" />
            <span>Selesai &amp; Kirim Jawaban</span>
          </button>
        )}
      </div>

      {/* Confirmation Modal if empty questions exist */}
      <ConfirmModal
        isOpen={confirmModalOpen}
        unansweredCount={unansweredCount}
        onConfirm={handleConfirmSubmit}
        onCancel={() => setConfirmModalOpen(false)}
      />
    </div>
  );
}
