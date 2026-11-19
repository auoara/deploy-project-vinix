/**
 * Progressive Gating & Cooldown Service (PRD Bagian 6, 7, 8)
 * Aturan:
 * 1. Modul 1 default 'unlocked'
 * 2. Modul N+1 terbuka otomatis jika Modul N lulus (nilai >= 80)
 * 3. Cooldown 1 menit (60 detik) wajib dipatuhi jika nilai < 80 sebelum bisa ujian lagi
 */

export function checkCooldownActive(cooldownUntil) {
  if (!cooldownUntil) return { active: false, remainingSeconds: 0 };

  const now = new Date().getTime();
  const target = new Date(cooldownUntil).getTime();
  const diffMs = target - now;

  if (diffMs > 0) {
    return {
      active: true,
      remainingSeconds: Math.ceil(diffMs / 1000)
    };
  }

  return { active: false, remainingSeconds: 0 };
}

export function computeCooldownDate() {
  const now = new Date();
  // 60 detik (1 menit) cooldown sesuai spesifikasi PRD
  return new Date(now.getTime() + 60 * 1000);
}
