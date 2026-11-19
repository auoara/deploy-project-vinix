import React from 'react';

export default function ProgressBar({ current, total, percentage, label, showValue = true, size = 'md' }) {
  const calculatedPercent = percentage !== undefined 
    ? Math.min(100, Math.max(0, percentage))
    : total > 0 
      ? Math.min(100, Math.max(0, Math.round((current / total) * 100))) 
      : 0;

  const heightClass = size === 'sm' ? 'h-2' : size === 'lg' ? 'h-4' : 'h-2.5';

  return (
    <div className="w-full">
      {(label || showValue) && (
        <div className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-1.5">
          {label && <span>{label}</span>}
          {showValue && (
            <span className="text-[#FBE156] font-extrabold">
              {calculatedPercent}%
            </span>
          )}
        </div>
      )}
      <div 
        className={`w-full bg-[#0D152A] rounded-full overflow-hidden ${heightClass} border border-slate-800 shadow-inner`}
        role="progressbar"
        aria-valuenow={calculatedPercent}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className={`h-full rounded-full transition-all duration-500 ease-out ${
            calculatedPercent >= 80 
              ? 'bg-gradient-to-r from-emerald-500 to-teal-400' 
              : calculatedPercent > 0 
                ? 'bg-gradient-to-r from-[#0052CC] to-[#FBE156]' 
                : 'bg-transparent'
          }`}
          style={{ width: `${calculatedPercent}%` }}
        />
      </div>
    </div>
  );
}
