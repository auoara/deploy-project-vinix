import React from 'react';

export function CourseCardSkeleton() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-[#131D35] p-6 animate-pulse flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-slate-800/80" />
            <div className="space-y-1.5">
              <div className="w-16 h-3 bg-slate-800/80 rounded" />
              <div className="w-36 h-4 bg-slate-800/80 rounded" />
            </div>
          </div>
          <div className="w-20 h-6 bg-slate-800/80 rounded-full" />
        </div>
        <div className="space-y-2 mb-4">
          <div className="w-full h-3 bg-slate-800/80 rounded" />
          <div className="w-3/4 h-3 bg-slate-800/80 rounded" />
        </div>
        <div className="w-1/3 h-3 bg-slate-800/80 rounded mb-4" />
        <div className="w-full h-2 bg-slate-800/80 rounded-full" />
      </div>
      <div className="pt-4 border-t border-slate-800/80 flex justify-between items-center mt-4">
        <div className="w-24 h-3 bg-slate-800/80 rounded" />
        <div className="w-20 h-8 bg-slate-800/80 rounded-xl" />
      </div>
    </div>
  );
}

export function ExamSkeleton() {
  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-pulse">
      <div className="h-16 bg-[#131D35] rounded-2xl border border-slate-800 p-4 flex justify-between items-center">
        <div className="w-48 h-5 bg-slate-800/80 rounded" />
        <div className="w-24 h-8 bg-slate-800/80 rounded-lg" />
      </div>
      <div className="h-80 bg-[#131D35] rounded-2xl border border-slate-800 p-8 space-y-4">
        <div className="w-32 h-4 bg-slate-800/80 rounded" />
        <div className="w-full h-6 bg-slate-800/80 rounded" />
        <div className="w-5/6 h-6 bg-slate-800/80 rounded" />
        <div className="space-y-3 pt-6">
          <div className="w-full h-12 bg-slate-800/80 rounded-xl" />
          <div className="w-full h-12 bg-slate-800/80 rounded-xl" />
          <div className="w-full h-12 bg-slate-800/80 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
