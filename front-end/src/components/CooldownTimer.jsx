import React, { useState, useEffect } from 'react';
import { Timer, AlertCircle, RefreshCw } from 'lucide-react';

export default function CooldownTimer({ cooldownUntil, onComplete }) {
  const [remainingSeconds, setRemainingSeconds] = useState(0);

  useEffect(() => {
    if (!cooldownUntil) {
      setRemainingSeconds(0);
      return;
    }

    const calculateRemaining = () => {
      const now = Date.now();
      const target = new Date(cooldownUntil).getTime();
      const diffMs = target - now;

      if (diffMs <= 0) {
        setRemainingSeconds(0);
        if (onComplete) onComplete();
        return 0;
      }

      const seconds = Math.ceil(diffMs / 1000);
      setRemainingSeconds(seconds);
      return seconds;
    };

    calculateRemaining();
    const interval = setInterval(() => {
      const sec = calculateRemaining();
      if (sec <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [cooldownUntil, onComplete]);

  if (remainingSeconds <= 0) return null;

  const totalCooldown = 60; // 60 detik standar PRD
  const percentage = Math.round(((totalCooldown - remainingSeconds) / totalCooldown) * 100);

  return (
    <div className="bg-amber-950/40 border border-amber-800/60 rounded-2xl p-4 sm:p-5 text-amber-200 shadow-xl animate-in fade-in">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-amber-900/40 text-amber-400 flex items-center justify-center shrink-0 border border-amber-800/60">
          <Timer className="w-5 h-5 animate-pulse" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
              <span>Jeda Waktu Cooldown (1 Menit)</span>
            </h4>
            <span className="font-mono text-sm font-extrabold bg-[#0D152A] text-[#FBE156] px-2.5 py-0.5 rounded-lg border border-slate-800">
              00:{remainingSeconds.toString().padStart(2, '0')}
            </span>
          </div>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed">
            Sesuai aturan evaluasi PRD, Anda wajib menunggu jeda 1 menit sebelum tombol <strong>Ulangi Ujian</strong> aktif kembali. Gunakan waktu ini untuk mempelajari kembali topik yang masih lemah di bawah.
          </p>

          {/* Mini progress bar */}
          <div className="mt-3 w-full bg-[#0D152A] rounded-full h-1.5 overflow-hidden border border-slate-800">
            <div
              className="bg-[#FBE156] h-full rounded-full transition-all duration-1000"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
