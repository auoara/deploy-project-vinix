import React from 'react';
import { HelpCircle, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';

export default function QuestionCard({
  question,
  answer,
  onAnswerChange,
  showResult = false,
  reviewData = null
}) {
  const isEssay = question.tipe === 'essay';

  return (
    <div className="bg-[#131D35] rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8 transition-all">
      
      {/* Top Header: Question Meta */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-[#0052CC]/20 border border-[#0052CC]/40 text-sky-400 font-extrabold text-xs flex items-center justify-center">
            {question.urutan}
          </span>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            {isEssay ? 'Soal Essay Studi Kasus' : 'Soal Pilihan Ganda'}
          </span>
        </div>

        {/* Topic Badge */}
        <span className="px-3 py-1 bg-[#0D152A] text-slate-300 text-xs font-semibold rounded-full border border-slate-800">
          Topik: {question.topik}
        </span>
      </div>

      {/* Question Text */}
      <div className="mb-6">
        <h3 className="text-base sm:text-lg font-bold text-white leading-relaxed">
          {question.teks}
        </h3>
      </div>

      {/* Answer Form */}
      {!showResult ? (
        <div className="space-y-3">
          {isEssay ? (
            <div>
              <label 
                htmlFor={`essay-${question.id}`} 
                className="block text-xs font-bold text-slate-300 mb-2"
              >
                Tulis Uraian Analisis Anda:
              </label>
              <textarea
                id={`essay-${question.id}`}
                rows={5}
                value={answer || ''}
                onChange={(e) => onAnswerChange(question.id, e.target.value)}
                placeholder="Tuliskan analisis komprehensif Anda di sini mengacu pada materi modul..."
                className="w-full p-4 rounded-xl bg-[#0D152A] border border-slate-700 text-sm text-white focus:outline-none focus:border-[#0052CC] focus:ring-2 focus:ring-[#0052CC]/30 leading-relaxed placeholder:text-slate-500"
              />
              <div className="flex items-center justify-between mt-2 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 text-[#FBE156]" />
                  Sertakan istilah kunci & konsep inti materi untuk skor maksimal (10 Poin).
                </span>
                <span>{(answer || '').length} Karakter</span>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-2.5">
              {question.options?.map((option, idx) => {
                const isSelected = answer === option.id;
                const optionLetters = ['A', 'B', 'C', 'D'];
                return (
                  <label
                    key={option.id}
                    className={`flex items-start gap-3.5 p-4 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-[#0052CC]/25 border-[#0052CC]/80 ring-2 ring-[#0052CC]/40 shadow-sm'
                        : 'bg-[#0D152A] border-slate-800 hover:bg-[#111c38] hover:border-slate-700'
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={option.id}
                      checked={isSelected}
                      onChange={() => onAnswerChange(question.id, option.id)}
                      className="sr-only"
                    />
                    <div
                      className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-[#FBE156] text-[#0A1124] font-black'
                          : 'bg-slate-800 text-slate-400 border border-slate-700'
                      }`}
                    >
                      {optionLetters[idx] || idx + 1}
                    </div>
                    <span className={`text-sm leading-snug pt-0.5 ${isSelected ? 'font-bold text-white' : 'text-slate-300'}`}>
                      {option.teks}
                    </span>
                  </label>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        /* Review / Result Mode */
        reviewData && (
          <div className="mt-4 pt-4 border-t border-slate-800 space-y-4">
            
            {/* Score pill */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400">Skor Diperoleh:</span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-extrabold border ${
                  reviewData.poin === 10
                    ? 'bg-emerald-950/80 text-emerald-300 border-emerald-800/80'
                    : reviewData.poin >= 7
                      ? 'bg-amber-950/80 text-amber-300 border-amber-800/80'
                      : 'bg-rose-950/80 text-rose-300 border-rose-800/80'
                }`}
              >
                {reviewData.poin} / 10 Poin ({reviewData.label})
              </span>
            </div>

            {/* User's Answer */}
            <div className="p-3.5 rounded-xl bg-[#0D152A] border border-slate-800 text-xs">
              <p className="font-bold text-slate-400 mb-1">Jawaban Anda:</p>
              <p className="text-white whitespace-pre-wrap">{reviewData.jawabanPengguna}</p>
            </div>

            {/* Explanation / Key Answer */}
            <div className="p-3.5 rounded-xl bg-[#0052CC]/15 border border-[#0052CC]/30 text-xs">
              <p className="font-bold text-sky-300 mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                Pembahasan &amp; Kunci Ideal:
              </p>
              <p className="text-slate-200 leading-relaxed whitespace-pre-wrap">
                {isEssay ? reviewData.kunciJawaban : reviewData.pembahasan}
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
}
