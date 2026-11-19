/**
 * Service Rotasi Paket Soal (PRD Bagian 6 & Bagian 13)
 * Aturan Rotasi:
 * - Percobaan ke-1 -> Set A
 * - Percobaan ke-2 -> Set B
 * - Percobaan ke-3 -> Set C
 * - Percobaan ke-4 dst -> Rotasi Set A/B/C dengan urutan diacak
 */

export function determineSetPaket(attemptCount) {
  if (attemptCount === 1) return 'A';
  if (attemptCount === 2) return 'B';
  if (attemptCount === 3) return 'C';
  
  // Percobaan 4 dst: rotasi acak
  const sets = ['A', 'B', 'C'];
  const randomIndex = Math.floor(Math.random() * sets.length);
  return sets[randomIndex];
}

/**
 * Mengacak urutan array (Fisher-Yates Shuffle)
 */
export function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
