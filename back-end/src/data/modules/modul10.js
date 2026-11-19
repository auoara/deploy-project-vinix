/**
 * Bank Soal & Rubrik Penilaian – Modul 10: Audit Kualitas Web & Showcase Portofolio
 * Total: 45 Soal (30 Pilihan Ganda + 15 Essay Studi Kasus) dibagi ke Set A, B, C.
 */

const COURSE_ID = 'c0000010-0000-0000-0000-000000000010';
const now = () => new Date().toISOString();

// ─── 1. QUESTIONS (30 PG + 15 Essay) ──────────────────────────────────────────
export const modul10Questions = [
  // ════════════ SET A – 10 PG (Nomor 1–10) ════════════
  {
    id: 'q0100001-0000-0000-0000-000000000001',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'Konsep Dasar Audit Kualitas Web',
    tipe: 'pilihan_ganda',
    teks: 'Tujuan utama audit kualitas web adalah...',
    urutan: 1,
    created_at: now()
  },
  {
    id: 'q0100001-0000-0000-0000-000000000002',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'Audit Google Lighthouse',
    tipe: 'pilihan_ganda',
    teks: 'Tool yang digunakan pada modul ini untuk audit kualitas web adalah...',
    urutan: 2,
    created_at: now()
  },
  {
    id: 'q0100001-0000-0000-0000-000000000003',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'Audit Google Lighthouse',
    tipe: 'pilihan_ganda',
    teks: 'Lighthouse merupakan tools yang dikembangkan oleh...',
    urutan: 3,
    created_at: now()
  },
  {
    id: 'q0100001-0000-0000-0000-000000000004',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'Audit Google Lighthouse',
    tipe: 'pilihan_ganda',
    teks: 'Manakah yang termasuk kategori penilaian Lighthouse?',
    urutan: 4,
    created_at: now()
  },
  {
    id: 'q0100001-0000-0000-0000-000000000005',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'Audit Google Lighthouse',
    tipe: 'pilihan_ganda',
    teks: 'Performance dalam Lighthouse mengukur...',
    urutan: 5,
    created_at: now()
  },
  {
    id: 'q0100001-0000-0000-0000-000000000006',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'Aksesibilitas & SEO',
    tipe: 'pilihan_ganda',
    teks: 'Accessibility berfokus pada...',
    urutan: 6,
    created_at: now()
  },
  {
    id: 'q0100001-0000-0000-0000-000000000007',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'Audit Google Lighthouse',
    tipe: 'pilihan_ganda',
    teks: 'Best Practices dalam audit web bertujuan untuk...',
    urutan: 7,
    created_at: now()
  },
  {
    id: 'q0100001-0000-0000-0000-000000000008',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'Aksesibilitas & SEO',
    tipe: 'pilihan_ganda',
    teks: 'SEO pada Lighthouse bertujuan untuk...',
    urutan: 8,
    created_at: now()
  },
  {
    id: 'q0100001-0000-0000-0000-000000000009',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'Core Web Vitals',
    tipe: 'pilihan_ganda',
    teks: 'LCP merupakan singkatan dari...',
    urutan: 9,
    created_at: now()
  },
  {
    id: 'q0100001-0000-0000-0000-000000000010',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'Core Web Vitals',
    tipe: 'pilihan_ganda',
    teks: 'Target nilai LCP yang baik adalah...',
    urutan: 10,
    created_at: now()
  },

  // ════════════ SET A – 5 Essay (Nomor 1–5) ════════════
  {
    id: 'q0100002-0000-0000-0000-000000000001',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'Konsep Dasar Audit Kualitas Web',
    tipe: 'essay',
    teks: 'Apa yang dimaksud dengan audit kualitas web?',
    urutan: 11,
    created_at: now()
  },
  {
    id: 'q0100002-0000-0000-0000-000000000002',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'Audit Google Lighthouse',
    tipe: 'essay',
    teks: 'Apa fungsi Lighthouse dalam pengembangan web?',
    urutan: 12,
    created_at: now()
  },
  {
    id: 'q0100002-0000-0000-0000-000000000003',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'Audit Google Lighthouse',
    tipe: 'essay',
    teks: 'Jelaskan apa yang dimaksud dengan Performance pada Lighthouse!',
    urutan: 13,
    created_at: now()
  },
  {
    id: 'q0100002-0000-0000-0000-000000000004',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'Aksesibilitas & SEO',
    tipe: 'essay',
    teks: 'Apa yang dimaksud dengan Accessibility dan mengapa penting?',
    urutan: 14,
    created_at: now()
  },
  {
    id: 'q0100002-0000-0000-0000-000000000005',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'Audit Google Lighthouse',
    tipe: 'essay',
    teks: 'Jelaskan fungsi Best Practices dalam audit web!',
    urutan: 15,
    created_at: now()
  },

  // ════════════ SET B – 10 PG (Nomor 11–20) ════════════
  {
    id: 'q0100003-0000-0000-0000-000000000001',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Core Web Vitals',
    tipe: 'pilihan_ganda',
    teks: 'INP merupakan singkatan dari...',
    urutan: 1,
    created_at: now()
  },
  {
    id: 'q0100003-0000-0000-0000-000000000002',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Core Web Vitals',
    tipe: 'pilihan_ganda',
    teks: 'Nilai INP yang baik adalah...',
    urutan: 2,
    created_at: now()
  },
  {
    id: 'q0100003-0000-0000-0000-000000000003',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Core Web Vitals',
    tipe: 'pilihan_ganda',
    teks: 'CLS merupakan singkatan dari...',
    urutan: 3,
    created_at: now()
  },
  {
    id: 'q0100003-0000-0000-0000-000000000004',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Core Web Vitals',
    tipe: 'pilihan_ganda',
    teks: 'CLS digunakan untuk mengukur...',
    urutan: 4,
    created_at: now()
  },
  {
    id: 'q0100003-0000-0000-0000-000000000005',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Core Web Vitals',
    tipe: 'pilihan_ganda',
    teks: 'Nilai CLS yang baik adalah...',
    urutan: 5,
    created_at: now()
  },
  {
    id: 'q0100003-0000-0000-0000-000000000006',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Aksesibilitas & SEO',
    tipe: 'pilihan_ganda',
    teks: 'Alt Text pada gambar penting untuk...',
    urutan: 6,
    created_at: now()
  },
  {
    id: 'q0100003-0000-0000-0000-000000000007',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Aksesibilitas & SEO',
    tipe: 'pilihan_ganda',
    teks: 'Kontras warna yang baik diperlukan agar...',
    urutan: 7,
    created_at: now()
  },
  {
    id: 'q0100003-0000-0000-0000-000000000008',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Aksesibilitas & SEO',
    tipe: 'pilihan_ganda',
    teks: 'Label Form digunakan untuk...',
    urutan: 8,
    created_at: now()
  },
  {
    id: 'q0100003-0000-0000-0000-000000000009',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Aksesibilitas & SEO',
    tipe: 'pilihan_ganda',
    teks: 'Meta Title berfungsi untuk...',
    urutan: 9,
    created_at: now()
  },
  {
    id: 'q0100003-0000-0000-0000-000000000010',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Aksesibilitas & SEO',
    tipe: 'pilihan_ganda',
    teks: 'Meta Description digunakan untuk...',
    urutan: 10,
    created_at: now()
  },

  // ════════════ SET B – 5 Essay (Nomor 6–10) ════════════
  {
    id: 'q0100004-0000-0000-0000-000000000001',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Aksesibilitas & SEO',
    tipe: 'essay',
    teks: 'Apa manfaat SEO pada sebuah website?',
    urutan: 11,
    created_at: now()
  },
  {
    id: 'q0100004-0000-0000-0000-000000000002',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Core Web Vitals',
    tipe: 'essay',
    teks: 'Jelaskan Largest Contentful Paint (LCP)!',
    urutan: 12,
    created_at: now()
  },
  {
    id: 'q0100004-0000-0000-0000-000000000003',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Core Web Vitals',
    tipe: 'essay',
    teks: 'Apa yang dimaksud dengan INP?',
    urutan: 13,
    created_at: now()
  },
  {
    id: 'q0100004-0000-0000-0000-000000000004',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Core Web Vitals',
    tipe: 'essay',
    teks: 'Jelaskan fungsi CLS dalam Core Web Vitals!',
    urutan: 14,
    created_at: now()
  },
  {
    id: 'q0100004-0000-0000-0000-000000000005',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Aksesibilitas & SEO',
    tipe: 'essay',
    teks: 'Mengapa Alt Text penting untuk website?',
    urutan: 15,
    created_at: now()
  },

  // ════════════ SET C – 10 PG (Nomor 21–30) ════════════
  {
    id: 'q0100005-0000-0000-0000-000000000001',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'Aksesibilitas & SEO',
    tipe: 'pilihan_ganda',
    teks: 'Struktur heading yang baik umumnya dimulai dari...',
    urutan: 1,
    created_at: now()
  },
  {
    id: 'q0100005-0000-0000-0000-000000000002',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'Aksesibilitas & SEO',
    tipe: 'pilihan_ganda',
    teks: 'Open Graph Tag digunakan untuk...',
    urutan: 2,
    created_at: now()
  },
  {
    id: 'q0100005-0000-0000-0000-000000000003',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'Keamanan Dasar Web',
    tipe: 'pilihan_ganda',
    teks: 'HTTPS digunakan untuk...',
    urutan: 3,
    created_at: now()
  },
  {
    id: 'q0100005-0000-0000-0000-000000000004',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'Keamanan Dasar Web',
    tipe: 'pilihan_ganda',
    teks: 'File .env digunakan untuk...',
    urutan: 4,
    created_at: now()
  },
  {
    id: 'q0100005-0000-0000-0000-000000000005',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'Keamanan Dasar Web',
    tipe: 'pilihan_ganda',
    teks: 'Tujuan sanitasi input adalah...',
    urutan: 5,
    created_at: now()
  },
  {
    id: 'q0100005-0000-0000-0000-000000000006',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'Keamanan Dasar Web',
    tipe: 'pilihan_ganda',
    teks: 'XSS merupakan singkatan dari...',
    urutan: 6,
    created_at: now()
  },
  {
    id: 'q0100005-0000-0000-0000-000000000007',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'Showcase Portofolio & Case Study',
    tipe: 'pilihan_ganda',
    teks: 'Dalam portofolio digital, rekruter lebih tertarik pada...',
    urutan: 7,
    created_at: now()
  },
  {
    id: 'q0100005-0000-0000-0000-000000000008',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'Showcase Portofolio & Case Study',
    tipe: 'pilihan_ganda',
    teks: 'Bagian pertama dalam struktur Case Study portofolio adalah...',
    urutan: 8,
    created_at: now()
  },
  {
    id: 'q0100005-0000-0000-0000-000000000009',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'Showcase Portofolio & Case Study',
    tipe: 'pilihan_ganda',
    teks: 'Bagian Impact pada Case Study berisi...',
    urutan: 9,
    created_at: now()
  },
  {
    id: 'q0100005-0000-0000-0000-000000000010',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'Showcase Portofolio & Case Study',
    tipe: 'pilihan_ganda',
    teks: 'Tujuan utama showcase portofolio adalah...',
    urutan: 10,
    created_at: now()
  },

  // ════════════ SET C – 5 Essay (Nomor 11–15) ════════════
  {
    id: 'q0100006-0000-0000-0000-000000000001',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'Keamanan Dasar Web',
    tipe: 'essay',
    teks: 'Apa fungsi HTTPS pada website?',
    urutan: 11,
    created_at: now()
  },
  {
    id: 'q0100006-0000-0000-0000-000000000002',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'Keamanan Dasar Web',
    tipe: 'essay',
    teks: 'Mengapa file .env penting dalam proyek web?',
    urutan: 12,
    created_at: now()
  },
  {
    id: 'q0100006-0000-0000-0000-000000000003',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'Keamanan Dasar Web',
    tipe: 'essay',
    teks: 'Apa yang dimaksud dengan XSS?',
    urutan: 13,
    created_at: now()
  },
  {
    id: 'q0100006-0000-0000-0000-000000000004',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'Showcase Portofolio & Case Study',
    tipe: 'essay',
    teks: 'Mengapa portofolio berbasis case study lebih menarik bagi rekruter?',
    urutan: 14,
    created_at: now()
  },
  {
    id: 'q0100006-0000-0000-0000-000000000005',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'Showcase Portofolio & Case Study',
    tipe: 'essay',
    teks: 'Jelaskan lima bagian utama case study profesional!',
    urutan: 15,
    created_at: now()
  }
];

// ─── 2. OPTIONS (120 Opsi untuk 30 Soal PG) ───────────────────────────────────
export const modul10Options = [
  // ─── SET A OPTIONS ───
  // Q1-A (Jawaban: B)
  { id: 'o10-A1-1', question_id: 'q0100001-0000-0000-0000-000000000001', teks: 'Memperbanyak jumlah halaman website', poin: 0, umpan_balik: 'Keliru. Menambah halaman tanpa evaluasi justru berpotensi memperlambat performa dan membingungkan navigasi.', is_correct: false },
  { id: 'o10-A1-2', question_id: 'q0100001-0000-0000-0000-000000000001', teks: 'Menilai dan meningkatkan kualitas website dari berbagai aspek', poin: 10, umpan_balik: 'Tepat! Audit kualitas web mengevaluasi performa, aksesibilitas, SEO, dan praktik terbaik guna menyempurnakan pengalaman pengguna.', is_correct: true },
  { id: 'o10-A1-3', question_id: 'q0100001-0000-0000-0000-000000000001', teks: 'Mengganti framework website', poin: 0, umpan_balik: 'Keliru. Audit bertujuan mengevaluasi kualitas aplikasi saat ini, bukan serta-merta mengganti framework.', is_correct: false },
  { id: 'o10-A1-4', question_id: 'q0100001-0000-0000-0000-000000000001', teks: 'Menambah jumlah gambar', poin: 0, umpan_balik: 'Keliru. Gambar berlebihan tanpa optimasi justru menurunkan skor kecepatan halaman.', is_correct: false },

  // Q2-A (Jawaban: C)
  { id: 'o10-A2-1', question_id: 'q0100001-0000-0000-0000-000000000002', teks: 'Figma', poin: 0, umpan_balik: 'Keliru. Figma adalah tools untuk perancangan UI/UX dan prototyping.', is_correct: false },
  { id: 'o10-A2-2', question_id: 'q0100001-0000-0000-0000-000000000002', teks: 'GitHub', poin: 0, umpan_balik: 'Keliru. GitHub adalah platform kolaborasi repository kode.', is_correct: false },
  { id: 'o10-A2-3', question_id: 'q0100001-0000-0000-0000-000000000002', teks: 'Lighthouse', poin: 10, umpan_balik: 'Tepat! Google Lighthouse digunakan untuk mengaudit Performance, Accessibility, Best Practices, dan SEO.', is_correct: true },
  { id: 'o10-A2-4', question_id: 'q0100001-0000-0000-0000-000000000002', teks: 'Canva', poin: 0, umpan_balik: 'Keliru. Canva adalah alat desain grafis, bukan tool audit teknis web.', is_correct: false },

  // Q3-A (Jawaban: B)
  { id: 'o10-A3-1', question_id: 'q0100001-0000-0000-0000-000000000003', teks: 'Microsoft', poin: 0, umpan_balik: 'Keliru. Microsoft mengembangkan Microsoft Clarity dan Playwright.', is_correct: false },
  { id: 'o10-A3-2', question_id: 'q0100001-0000-0000-0000-000000000003', teks: 'Google', poin: 10, umpan_balik: 'Tepat! Lighthouse merupakan alat audit open-source besutan Google yang terintegrasi di Chrome DevTools.', is_correct: true },
  { id: 'o10-A3-3', question_id: 'q0100001-0000-0000-0000-000000000003', teks: 'Meta', poin: 0, umpan_balik: 'Keliru. Meta mengembangkan React.', is_correct: false },
  { id: 'o10-A3-4', question_id: 'q0100001-0000-0000-0000-000000000003', teks: 'Mozilla', poin: 0, umpan_balik: 'Keliru. Mozilla mengembangkan Firefox dan MDN Web Docs.', is_correct: false },

  // Q4-A (Jawaban: D)
  { id: 'o10-A4-1', question_id: 'q0100001-0000-0000-0000-000000000004', teks: 'Performance', poin: 0, umpan_balik: 'Kurang lengkap. Performance memang kategori Lighthouse, namun Accessibility dan SEO juga termasuk.', is_correct: false },
  { id: 'o10-A4-2', question_id: 'q0100001-0000-0000-0000-000000000004', teks: 'Accessibility', poin: 0, umpan_balik: 'Kurang lengkap. Accessibility termasuk, bersama Performance, Best Practices, dan SEO.', is_correct: false },
  { id: 'o10-A4-3', question_id: 'q0100001-0000-0000-0000-000000000004', teks: 'SEO', poin: 0, umpan_balik: 'Kurang lengkap. SEO termasuk salah satu dari empat pilar audit utama Lighthouse.', is_correct: false },
  { id: 'o10-A4-4', question_id: 'q0100001-0000-0000-0000-000000000004', teks: 'Semua benar', poin: 10, umpan_balik: 'Tepat! Empat kategori penilaian Lighthouse adalah Performance, Accessibility, Best Practices, dan SEO.', is_correct: true },

  // Q5-A (Jawaban: B)
  { id: 'o10-A5-1', question_id: 'q0100001-0000-0000-0000-000000000005', teks: 'Kualitas desain visual', poin: 0, umpan_balik: 'Keliru. Estetika visual dievaluasi melalui design review dan usability testing.', is_correct: false },
  { id: 'o10-A5-2', question_id: 'q0100001-0000-0000-0000-000000000005', teks: 'Kecepatan dan efisiensi website', poin: 10, umpan_balik: 'Tepat! Kategori Performance menilai seberapa cepat halaman dimuat, dirender, dan merespons interaksi pengguna.', is_correct: true },
  { id: 'o10-A5-3', question_id: 'q0100001-0000-0000-0000-000000000005', teks: 'Jumlah pengguna website', poin: 0, umpan_balik: 'Keliru. Jumlah pengguna dipantau melalui tools analitik trafik.', is_correct: false },
  { id: 'o10-A5-4', question_id: 'q0100001-0000-0000-0000-000000000005', teks: 'Banyaknya halaman website', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q6-A (Jawaban: A)
  { id: 'o10-A6-1', question_id: 'q0100001-0000-0000-0000-000000000006', teks: 'Kemudahan website diakses semua pengguna termasuk penyandang disabilitas', poin: 10, umpan_balik: 'Tepat! Accessibility memastikan aplikasi inklusif bagi pengguna screen reader, navigasi keyboard, maupun keterbatasan penglihatan.', is_correct: true },
  { id: 'o10-A6-2', question_id: 'q0100001-0000-0000-0000-000000000006', teks: 'Kecepatan database', poin: 0, umpan_balik: 'Keliru. Kecepatan query masuk ranah optimasi backend/database.', is_correct: false },
  { id: 'o10-A6-3', question_id: 'q0100001-0000-0000-0000-000000000006', teks: 'Tampilan animasi', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o10-A6-4', question_id: 'q0100001-0000-0000-0000-000000000006', teks: 'Struktur folder proyek', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q7-A (Jawaban: A)
  { id: 'o10-A7-1', question_id: 'q0100001-0000-0000-0000-000000000007', teks: 'Memastikan website mengikuti standar pengembangan yang baik', poin: 10, umpan_balik: 'Tepat! Best Practices memeriksa aspek keamanan browser, penggunaan HTTPS, bebas error console, dan API modern.', is_correct: true },
  { id: 'o10-A7-2', question_id: 'q0100001-0000-0000-0000-000000000007', teks: 'Menambah fitur website', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o10-A7-3', question_id: 'q0100001-0000-0000-0000-000000000007', teks: 'Mengurangi ukuran monitor', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o10-A7-4', question_id: 'q0100001-0000-0000-0000-000000000007', teks: 'Mengubah domain', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q8-A (Jawaban: B)
  { id: 'o10-A8-1', question_id: 'q0100001-0000-0000-0000-000000000008', teks: 'Memperindah tampilan website', poin: 0, umpan_balik: 'Keliru. Tampilan diatur melalui CSS dan sistem desain.', is_correct: false },
  { id: 'o10-A8-2', question_id: 'q0100001-0000-0000-0000-000000000008', teks: 'Membantu website lebih mudah ditemukan mesin pencari', poin: 10, umpan_balik: 'Tepat! Audit SEO memastikan halaman dapat diindeks dan dipahami dengan baik oleh crawler mesin pencari.', is_correct: true },
  { id: 'o10-A8-3', question_id: 'q0100001-0000-0000-0000-000000000008', teks: 'Mengurangi ukuran gambar', poin: 0, umpan_balik: 'Keliru. Kompresi gambar termasuk optimasi Performance.', is_correct: false },
  { id: 'o10-A8-4', question_id: 'q0100001-0000-0000-0000-000000000008', teks: 'Menambah plugin', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q9-A (Jawaban: B)
  { id: 'o10-A9-1', question_id: 'q0100001-0000-0000-0000-000000000009', teks: 'Largest Component Paint', poin: 0, umpan_balik: 'Keliru. Kata keduanya adalah Contentful, bukan Component.', is_correct: false },
  { id: 'o10-A9-2', question_id: 'q0100001-0000-0000-0000-000000000009', teks: 'Largest Contentful Paint', poin: 10, umpan_balik: 'Tepat! Largest Contentful Paint (LCP) mengukur waktu render elemen konten terbesar di viewport.', is_correct: true },
  { id: 'o10-A9-3', question_id: 'q0100001-0000-0000-0000-000000000009', teks: 'Long Content Process', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o10-A9-4', question_id: 'q0100001-0000-0000-0000-000000000009', teks: 'Layout Content Paint', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q10-A (Jawaban: A)
  { id: 'o10-A10-1', question_id: 'q0100001-0000-0000-0000-000000000010', teks: '≤ 2,5 detik', poin: 10, umpan_balik: 'Tepat! Standar Core Web Vitals menetapkan skor LCP yang baik berada di angka 2,5 detik atau lebih cepat.', is_correct: true },
  { id: 'o10-A10-2', question_id: 'q0100001-0000-0000-0000-000000000010', teks: '≤ 5 detik', poin: 0, umpan_balik: 'Keliru. Angka di atas 4 detik sudah masuk kategori Poor (buruk).', is_correct: false },
  { id: 'o10-A10-3', question_id: 'q0100001-0000-0000-0000-000000000010', teks: '≤ 10 detik', poin: 0, umpan_balik: 'Keliru. 10 detik sangat lambat dan memicu bounce rate tinggi.', is_correct: false },
  { id: 'o10-A10-4', question_id: 'q0100001-0000-0000-0000-000000000010', teks: '≤ 15 detik', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // ─── SET B OPTIONS ───
  // Q1-B / PG 11 (Jawaban: B)
  { id: 'o10-B1-1', question_id: 'q0100003-0000-0000-0000-000000000001', teks: 'Internal Navigation Page', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o10-B1-2', question_id: 'q0100003-0000-0000-0000-000000000001', teks: 'Interaction to Next Paint', poin: 10, umpan_balik: 'Tepat! Interaction to Next Paint (INP) menggantikan FID sebagai metrik responsivitas interaksi Core Web Vitals.', is_correct: true },
  { id: 'o10-B1-3', question_id: 'q0100003-0000-0000-0000-000000000001', teks: 'Interactive New Process', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o10-B1-4', question_id: 'q0100003-0000-0000-0000-000000000001', teks: 'Internet Navigation Point', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q2-B / PG 12 (Jawaban: A)
  { id: 'o10-B2-1', question_id: 'q0100003-0000-0000-0000-000000000002', teks: '≤ 200 ms', poin: 10, umpan_balik: 'Tepat! Latensi interaksi ≤ 200 milidetik membuat antarmuka terasa instan dan responsif bagi pengguna.', is_correct: true },
  { id: 'o10-B2-2', question_id: 'q0100003-0000-0000-0000-000000000002', teks: '≤ 2 detik', poin: 0, umpan_balik: 'Keliru. 2 detik (2000 ms) jauh melampaui ambang batas responsivitas yang baik.', is_correct: false },
  { id: 'o10-B2-3', question_id: 'q0100003-0000-0000-0000-000000000002', teks: '≤ 1 detik', poin: 0, umpan_balik: 'Keliru. 1 detik (1000 ms) sudah termasuk kategori Poor (> 500 ms).', is_correct: false },
  { id: 'o10-B2-4', question_id: 'q0100003-0000-0000-0000-000000000002', teks: '≤ 500 ms', poin: 0, umpan_balik: 'Keliru. Rentang 200–500 ms masih tergolong Needs Improvement.', is_correct: false },

  // Q3-B / PG 13 (Jawaban: A)
  { id: 'o10-B3-1', question_id: 'q0100003-0000-0000-0000-000000000003', teks: 'Cumulative Layout Shift', poin: 10, umpan_balik: 'Tepat! Cumulative Layout Shift (CLS) mengukur total pergeseran tata letak tak terduga selama siklus hidup halaman.', is_correct: true },
  { id: 'o10-B3-2', question_id: 'q0100003-0000-0000-0000-000000000003', teks: 'Content Layout Structure', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o10-B3-3', question_id: 'q0100003-0000-0000-0000-000000000003', teks: 'Component Loading Speed', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o10-B3-4', question_id: 'q0100003-0000-0000-0000-000000000003', teks: 'Client Layout Scale', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q4-B / PG 14 (Jawaban: A)
  { id: 'o10-B4-1', question_id: 'q0100003-0000-0000-0000-000000000004', teks: 'Stabilitas tata letak halaman', poin: 10, umpan_balik: 'Tepat! CLS mendeteksi elemen yang melompat tiba-tiba saat gambar atau font selesai dimuat sehingga mencegah salah klik.', is_correct: true },
  { id: 'o10-B4-2', question_id: 'q0100003-0000-0000-0000-000000000004', teks: 'Kecepatan server', poin: 0, umpan_balik: 'Keliru. Kecepatan respons awal server diukur oleh Time to First Byte (TTFB).', is_correct: false },
  { id: 'o10-B4-3', question_id: 'q0100003-0000-0000-0000-000000000004', teks: 'Jumlah konten website', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o10-B4-4', question_id: 'q0100003-0000-0000-0000-000000000004', teks: 'Ukuran file JavaScript', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q5-B / PG 15 (Jawaban: C)
  { id: 'o10-B5-1', question_id: 'q0100003-0000-0000-0000-000000000005', teks: '≤ 1.0', poin: 0, umpan_balik: 'Keliru. Nilai 1.0 menunjukkan pergeseran layout yang sangat parah.', is_correct: false },
  { id: 'o10-B5-2', question_id: 'q0100003-0000-0000-0000-000000000005', teks: '≤ 0.5', poin: 0, umpan_balik: 'Keliru. Skor > 0.25 sudah tergolong Poor.', is_correct: false },
  { id: 'o10-B5-3', question_id: 'q0100003-0000-0000-0000-000000000005', teks: '≤ 0.1', poin: 10, umpan_balik: 'Tepat! Nilai CLS ≤ 0.1 menjamin tata letak halaman tetap stabil selama proses pemuatan.', is_correct: true },
  { id: 'o10-B5-4', question_id: 'q0100003-0000-0000-0000-000000000005', teks: '≤ 2.0', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q6-B / PG 16 (Jawaban: A)
  { id: 'o10-B6-1', question_id: 'q0100003-0000-0000-0000-000000000006', teks: 'SEO dan aksesibilitas', poin: 10, umpan_balik: 'Tepat! Atribut alt dibaca oleh screen reader bagi pengguna tunanetra sekaligus membantu mesin pencari memahami konteks gambar.', is_correct: true },
  { id: 'o10-B6-2', question_id: 'q0100003-0000-0000-0000-000000000006', teks: 'Menambah ukuran gambar', poin: 0, umpan_balik: 'Keliru. Alt text hanya berupa teks deskriptif ringan.', is_correct: false },
  { id: 'o10-B6-3', question_id: 'q0100003-0000-0000-0000-000000000006', teks: 'Menambah warna gambar', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o10-B6-4', question_id: 'q0100003-0000-0000-0000-000000000006', teks: 'Mempercepat hosting', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q7-B / PG 17 (Jawaban: B)
  { id: 'o10-B7-1', question_id: 'q0100003-0000-0000-0000-000000000007', teks: 'Website terlihat lebih mahal', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o10-B7-2', question_id: 'q0100003-0000-0000-0000-000000000007', teks: 'Teks mudah dibaca oleh pengguna', poin: 10, umpan_balik: 'Tepat! Rasio kontras minimal 4,5:1 (WCAG AA) memastikan teks terbaca jelas di berbagai kondisi layar dan penglihatan.', is_correct: true },
  { id: 'o10-B7-3', question_id: 'q0100003-0000-0000-0000-000000000007', teks: 'File CSS lebih kecil', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o10-B7-4', question_id: 'q0100003-0000-0000-0000-000000000007', teks: 'Gambar menjadi HD', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q8-B / PG 18 (Jawaban: A)
  { id: 'o10-B8-1', question_id: 'q0100003-0000-0000-0000-000000000008', teks: 'Memberikan konteks dan aksesibilitas pada input formulir', poin: 10, umpan_balik: 'Tepat! Tag <label> yang terhubung dengan <input> memperluas area klik dan membantu screen reader membacakan fungsi kolom.', is_correct: true },
  { id: 'o10-B8-2', question_id: 'q0100003-0000-0000-0000-000000000008', teks: 'Menambah data database', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o10-B8-3', question_id: 'q0100003-0000-0000-0000-000000000008', teks: 'Menghubungkan API', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o10-B8-4', question_id: 'q0100003-0000-0000-0000-000000000008', teks: 'Membuat animasi', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q9-B / PG 19 (Jawaban: A)
  { id: 'o10-B9-1', question_id: 'q0100003-0000-0000-0000-000000000009', teks: 'Menampilkan judul halaman pada browser dan mesin pencari', poin: 10, umpan_balik: 'Tepat! Tag <title> muncul di tab browser serta menjadi judul utama tautan pada halaman hasil pencarian (SERP).', is_correct: true },
  { id: 'o10-B9-2', question_id: 'q0100003-0000-0000-0000-000000000009', teks: 'Menyimpan data pengguna', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o10-B9-3', question_id: 'q0100003-0000-0000-0000-000000000009', teks: 'Menjalankan JavaScript', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o10-B9-4', question_id: 'q0100003-0000-0000-0000-000000000009', teks: 'Mengubah warna website', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q10-B / PG 20 (Jawaban: B)
  { id: 'o10-B10-1', question_id: 'q0100003-0000-0000-0000-000000000010', teks: 'Menyimpan password pengguna', poin: 0, umpan_balik: 'Keliru. Password tidak pernah disimpan di tag HTML.', is_correct: false },
  { id: 'o10-B10-2', question_id: 'q0100003-0000-0000-0000-000000000010', teks: 'Memberikan ringkasan isi halaman kepada mesin pencari', poin: 10, umpan_balik: 'Tepat! Meta description menyediakan cuplikan ringkas halaman di bawah judul pada hasil pencarian untuk meningkatkan rasio klik.', is_correct: true },
  { id: 'o10-B10-3', question_id: 'q0100003-0000-0000-0000-000000000010', teks: 'Membuat database', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o10-B10-4', question_id: 'q0100003-0000-0000-0000-000000000010', teks: 'Mengubah layout', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // ─── SET C OPTIONS ───
  // Q1-C / PG 21 (Jawaban: D)
  { id: 'o10-C1-1', question_id: 'q0100005-0000-0000-0000-000000000001', teks: 'h6', poin: 0, umpan_balik: 'Keliru. h6 adalah tingkatan heading paling kecil.', is_correct: false },
  { id: 'o10-C1-2', question_id: 'q0100005-0000-0000-0000-000000000001', teks: 'h5', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o10-C1-3', question_id: 'q0100005-0000-0000-0000-000000000001', teks: 'h3', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o10-C1-4', question_id: 'q0100005-0000-0000-0000-000000000001', teks: 'h1', poin: 10, umpan_balik: 'Tepat! Hierarki heading semantik dimulai dari satu <h1> utama lalu turun berurutan ke <h2>, <h3>, dan seterusnya.', is_correct: true },

  // Q2-C / PG 22 (Jawaban: A)
  { id: 'o10-C2-1', question_id: 'q0100005-0000-0000-0000-000000000002', teks: 'Mengatur tampilan website saat dibagikan ke media sosial', poin: 10, umpan_balik: 'Tepat! Tag Open Graph (og:title, og:description, og:image) mengontrol kartu pratinjau tautan saat dibagikan di media sosial.', is_correct: true },
  { id: 'o10-C2-2', question_id: 'q0100005-0000-0000-0000-000000000002', teks: 'Mengoptimalkan database', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o10-C2-3', question_id: 'q0100005-0000-0000-0000-000000000002', teks: 'Menambah fitur login', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o10-C2-4', question_id: 'q0100005-0000-0000-0000-000000000002', teks: 'Membuat wireframe', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q3-C / PG 23 (Jawaban: A)
  { id: 'o10-C3-1', question_id: 'q0100005-0000-0000-0000-000000000003', teks: 'Mengenkripsi komunikasi antara pengguna dan server', poin: 10, umpan_balik: 'Tepat! HTTPS menggunakan enkripsi TLS untuk mencegah penyadapan (MITM) dan menjaga integritas data selama transmisi.', is_correct: true },
  { id: 'o10-C3-2', question_id: 'q0100005-0000-0000-0000-000000000003', teks: 'Membuat website lebih berwarna', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o10-C3-3', question_id: 'q0100005-0000-0000-0000-000000000003', teks: 'Mengurangi jumlah halaman', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o10-C3-4', question_id: 'q0100005-0000-0000-0000-000000000003', teks: 'Menambah ukuran file', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q4-C / PG 24 (Jawaban: A)
  { id: 'o10-C4-1', question_id: 'q0100005-0000-0000-0000-000000000004', teks: 'Menyimpan konfigurasi sensitif seperti API Key', poin: 10, umpan_balik: 'Tepat! File .env memisahkan rahasia konfigurasi dari repositori Git publik agar tidak bocor.', is_correct: true },
  { id: 'o10-C4-2', question_id: 'q0100005-0000-0000-0000-000000000004', teks: 'Menyimpan gambar website', poin: 0, umpan_balik: 'Keliru. Aset gambar disimpan di folder public/ atau assets/.', is_correct: false },
  { id: 'o10-C4-3', question_id: 'q0100005-0000-0000-0000-000000000004', teks: 'Menyimpan CSS', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o10-C4-4', question_id: 'q0100005-0000-0000-0000-000000000004', teks: 'Menyimpan wireframe', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q5-C / PG 25 (Jawaban: A)
  { id: 'o10-C5-1', question_id: 'q0100005-0000-0000-0000-000000000005', teks: 'Membersihkan input dari potensi data berbahaya', poin: 10, umpan_balik: 'Tepat! Sanitasi menyaring karakter atau tag skrip berbahaya sebelum data diproses atau dirender ke DOM.', is_correct: true },
  { id: 'o10-C5-2', question_id: 'q0100005-0000-0000-0000-000000000005', teks: 'Menambah jumlah data', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o10-C5-3', question_id: 'q0100005-0000-0000-0000-000000000005', teks: 'Mempercepat monitor', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o10-C5-4', question_id: 'q0100005-0000-0000-0000-000000000005', teks: 'Menambah warna halaman', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q6-C / PG 26 (Jawaban: B)
  { id: 'o10-C6-1', question_id: 'q0100005-0000-0000-0000-000000000006', teks: 'Extended Server Storage', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o10-C6-2', question_id: 'q0100005-0000-0000-0000-000000000006', teks: 'Cross-Site Scripting', poin: 10, umpan_balik: 'Tepat! Cross-Site Scripting (XSS) adalah celah injeksi skrip berbahaya ke halaman web yang dilihat pengguna lain.', is_correct: true },
  { id: 'o10-C6-3', question_id: 'q0100005-0000-0000-0000-000000000006', teks: 'Cross System Security', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o10-C6-4', question_id: 'q0100005-0000-0000-0000-000000000006', teks: 'External Site Sharing', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q7-C / PG 27 (Jawaban: B)
  { id: 'o10-C7-1', question_id: 'q0100005-0000-0000-0000-000000000007', teks: 'Banyaknya warna yang digunakan', poin: 0, umpan_balik: 'Keliru. Penggunaan terlalu banyak warna justru melanggar konsistensi visual.', is_correct: false },
  { id: 'o10-C7-2', question_id: 'q0100005-0000-0000-0000-000000000007', teks: 'Proses pemecahan masalah dan dampak proyek', poin: 10, umpan_balik: 'Tepat! Rekruter menilai cara berpikir terstruktur, keputusan teknis/desain, serta hasil nyata yang terukur dari studi kasus.', is_correct: true },
  { id: 'o10-C7-3', question_id: 'q0100005-0000-0000-0000-000000000007', teks: 'Ukuran font website', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o10-C7-4', question_id: 'q0100005-0000-0000-0000-000000000007', teks: 'Jumlah animasi', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q8-C / PG 28 (Jawaban: C)
  { id: 'o10-C8-1', question_id: 'q0100005-0000-0000-0000-000000000008', teks: 'Discovery', poin: 0, umpan_balik: 'Keliru. Discovery adalah bagian kedua setelah Overview.', is_correct: false },
  { id: 'o10-C8-2', question_id: 'q0100005-0000-0000-0000-000000000008', teks: 'Engineering', poin: 0, umpan_balik: 'Keliru. Engineering adalah bagian ketiga.', is_correct: false },
  { id: 'o10-C8-3', question_id: 'q0100005-0000-0000-0000-000000000008', teks: 'Overview', poin: 10, umpan_balik: 'Tepat! Urutan struktur Case Study profesional adalah Overview → Discovery → Engineering → Testing → Impact.', is_correct: true },
  { id: 'o10-C8-4', question_id: 'q0100005-0000-0000-0000-000000000008', teks: 'Impact', poin: 0, umpan_balik: 'Keliru. Impact adalah bagian penutup (kelima).', is_correct: false },

  // Q9-C / PG 29 (Jawaban: B)
  { id: 'o10-C9-1', question_id: 'q0100005-0000-0000-0000-000000000009', teks: 'Struktur database', poin: 0, umpan_balik: 'Keliru. Struktur database dijelaskan pada bagian Engineering.', is_correct: false },
  { id: 'o10-C9-2', question_id: 'q0100005-0000-0000-0000-000000000009', teks: 'Hasil dan dampak yang dicapai proyek', poin: 10, umpan_balik: 'Tepat! Bagian Impact menyajikan bukti pencapaian seperti skor Lighthouse, metrik SEQ, dan pembelajaran proyek.', is_correct: true },
  { id: 'o10-C9-3', question_id: 'q0100005-0000-0000-0000-000000000009', teks: 'Warna desain aplikasi', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o10-C9-4', question_id: 'q0100005-0000-0000-0000-000000000009', teks: 'Riwayat pendidikan', poin: 0, umpan_balik: 'Keliru. Riwayat pendidikan berada di halaman profil/CV, bukan di bagian Impact proyek.', is_correct: false },

  // Q10-C / PG 30 (Jawaban: A)
  { id: 'o10-C10-1', question_id: 'q0100005-0000-0000-0000-000000000010', teks: 'Menampilkan proses, kemampuan, dan hasil kerja secara profesional', poin: 10, umpan_balik: 'Tepat! Showcase portofolio membuktikan kompetensi nyata kandidat dari perumusan masalah hingga produk teruji.', is_correct: true },
  { id: 'o10-C10-2', question_id: 'q0100005-0000-0000-0000-000000000010', teks: 'Menampilkan semua screenshot proyek tanpa penjelasan', poin: 0, umpan_balik: 'Keliru. Galeri tanpa narasi proses tidak menunjukkan kemampuan problem solving.', is_correct: false },
  { id: 'o10-C10-3', question_id: 'q0100005-0000-0000-0000-000000000010', teks: 'Menambah jumlah halaman website', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o10-C10-4', question_id: 'q0100005-0000-0000-0000-000000000010', teks: 'Menggantikan CV sepenuhnya', poin: 0, umpan_balik: 'Keliru. Portofolio melengkapi CV dengan bukti karya mendalam.', is_correct: false }
];

// ─── 3. ESSAY RUBRICS (15 Rubrik Penilaian Essay) ────────────────────────────
export const modul10Rubrics = [
  // ─── SET A RUBRICS (Essay 1–5) ───
  {
    id: 'er-0000010-0000-0000-0000-000000000001',
    question_id: 'q0100002-0000-0000-0000-000000000001',
    kunci_jawaban: 'Audit kualitas web adalah proses evaluasi website berdasarkan aspek seperti performa, aksesibilitas, SEO, keamanan, dan best practices untuk meningkatkan kualitas pengalaman pengguna dan efektivitas website.',
    kata_kunci: ['audit web', 'evaluasi website', 'performa', 'aksesibilitas', 'seo', 'kualitas'],
    rubrik_skor: {
      '10': '>= 80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'Audit kualitas web adalah proses memeriksa kualitas website dari berbagai aspek',
      '8': 'Audit kualitas web digunakan untuk meningkatkan website (belum menjelaskan aspek yang dievaluasi seperti performa, aksesibilitas, dan SEO)',
      '7': 'Audit web adalah pengecekan website (terlalu umum dan tidak menjelaskan tujuan maupun aspek yang diuji)',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  },
  {
    id: 'er-0000010-0000-0000-0000-000000000002',
    question_id: 'q0100002-0000-0000-0000-000000000002',
    kunci_jawaban: 'Lighthouse adalah alat audit otomatis yang digunakan untuk menilai performa, accessibility, best practices, dan SEO pada website.',
    kata_kunci: ['lighthouse', 'audit', 'performance', 'accessibility', 'seo', 'best practices'],
    rubrik_skor: {
      '10': '>= 80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'Lighthouse digunakan untuk mengaudit kualitas website',
      '8': 'Lighthouse digunakan untuk mengecek website (belum menjelaskan kategori evaluasi yang diukur)',
      '7': 'Lighthouse adalah tools web (terlalu umum)',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  },
  {
    id: 'er-0000010-0000-0000-0000-000000000003',
    question_id: 'q0100002-0000-0000-0000-000000000003',
    kunci_jawaban: 'Performance mengukur kecepatan, efisiensi pemuatan halaman, serta responsivitas website ketika digunakan pengguna.',
    kata_kunci: ['performa', 'kecepatan', 'loading', 'responsivitas'],
    rubrik_skor: {
      '10': '>= 80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'Konsep inti benar, namun terdapat 1 unsur penjelas penting yang belum disebutkan',
      '8': 'Sekitar 60% konsep benar, namun penjelasan masih terlalu umum atau kurang lengkap',
      '7': 'Hanya menyebutkan ide umum tanpa kedalaman konsep sesuai materi',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  },
  {
    id: 'er-0000010-0000-0000-0000-000000000004',
    question_id: 'q0100002-0000-0000-0000-000000000004',
    kunci_jawaban: 'Accessibility adalah upaya membuat website dapat digunakan oleh semua pengguna termasuk penyandang disabilitas sehingga pengalaman penggunaan menjadi inklusif.',
    kata_kunci: ['accessibility', 'aksesibilitas', 'disabilitas', 'inklusif'],
    rubrik_skor: {
      '10': '>= 80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'Konsep inti benar, namun terdapat 1 unsur penjelas penting yang belum disebutkan',
      '8': 'Sekitar 60% konsep benar, namun penjelasan masih terlalu umum atau kurang lengkap',
      '7': 'Hanya menyebutkan ide umum tanpa kedalaman konsep sesuai materi',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  },
  {
    id: 'er-0000010-0000-0000-0000-000000000005',
    question_id: 'q0100002-0000-0000-0000-000000000005',
    kunci_jawaban: 'Best Practices memastikan website mengikuti standar pengembangan modern yang aman, stabil, dan dapat diandalkan.',
    kata_kunci: ['best practices', 'standar', 'keamanan', 'kualitas kode'],
    rubrik_skor: {
      '10': '>= 80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'Konsep inti benar, namun terdapat 1 unsur penjelas penting yang belum disebutkan',
      '8': 'Sekitar 60% konsep benar, namun penjelasan masih terlalu umum atau kurang lengkap',
      '7': 'Hanya menyebutkan ide umum tanpa kedalaman konsep sesuai materi',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  },

  // ─── SET B RUBRICS (Essay 6–10) ───
  {
    id: 'er-0000010-0000-0000-0000-000000000006',
    question_id: 'q0100004-0000-0000-0000-000000000001',
    kunci_jawaban: 'SEO membantu website lebih mudah ditemukan di mesin pencari sehingga dapat meningkatkan jumlah pengunjung organik.',
    kata_kunci: ['seo', 'mesin pencari', 'visibilitas', 'pengunjung'],
    rubrik_skor: {
      '10': '>= 80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'Konsep inti benar, namun terdapat 1 unsur penjelas penting yang belum disebutkan',
      '8': 'Sekitar 60% konsep benar, namun penjelasan masih terlalu umum atau kurang lengkap',
      '7': 'Hanya menyebutkan ide umum tanpa kedalaman konsep sesuai materi',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  },
  {
    id: 'er-0000010-0000-0000-0000-000000000007',
    question_id: 'q0100004-0000-0000-0000-000000000002',
    kunci_jawaban: 'LCP adalah metrik Core Web Vitals yang mengukur waktu yang dibutuhkan hingga elemen konten utama terbesar pada halaman berhasil ditampilkan.',
    kata_kunci: ['lcp', 'core web vitals', 'konten utama', 'loading'],
    rubrik_skor: {
      '10': '>= 80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'Konsep inti benar, namun terdapat 1 unsur penjelas penting yang belum disebutkan',
      '8': 'LCP mengukur kecepatan loading (belum menjelaskan bahwa yang diukur adalah elemen konten terbesar pada halaman)',
      '7': 'LCP adalah metrik website (terlalu umum)',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  },
  {
    id: 'er-0000010-0000-0000-0000-000000000008',
    question_id: 'q0100004-0000-0000-0000-000000000003',
    kunci_jawaban: 'INP (Interaction to Next Paint) mengukur respons aplikasi terhadap interaksi pengguna hingga perubahan visual berikutnya ditampilkan.',
    kata_kunci: ['inp', 'interaksi', 'responsivitas', 'core web vitals'],
    rubrik_skor: {
      '10': '>= 80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'Konsep inti benar, namun terdapat 1 unsur penjelas penting yang belum disebutkan',
      '8': 'Sekitar 60% konsep benar, namun penjelasan masih terlalu umum atau kurang lengkap',
      '7': 'Hanya menyebutkan ide umum tanpa kedalaman konsep sesuai materi',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  },
  {
    id: 'er-0000010-0000-0000-0000-000000000009',
    question_id: 'q0100004-0000-0000-0000-000000000004',
    kunci_jawaban: 'CLS mengukur stabilitas tata letak halaman dengan mengamati pergeseran elemen visual yang tidak diharapkan selama proses loading.',
    kata_kunci: ['cls', 'layout shift', 'stabilitas', 'loading'],
    rubrik_skor: {
      '10': '>= 80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'Konsep inti benar, namun terdapat 1 unsur penjelas penting yang belum disebutkan',
      '8': 'Sekitar 60% konsep benar, namun penjelasan masih terlalu umum atau kurang lengkap',
      '7': 'Hanya menyebutkan ide umum tanpa kedalaman konsep sesuai materi',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  },
  {
    id: 'er-0000010-0000-0000-0000-000000000010',
    question_id: 'q0100004-0000-0000-0000-000000000005',
    kunci_jawaban: 'Alt Text membantu aksesibilitas pengguna yang menggunakan screen reader dan memberikan informasi ketika gambar gagal dimuat.',
    kata_kunci: ['alt text', 'screen reader', 'aksesibilitas', 'gambar'],
    rubrik_skor: {
      '10': '>= 80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'Konsep inti benar, namun terdapat 1 unsur penjelas penting yang belum disebutkan',
      '8': 'Sekitar 60% konsep benar, namun penjelasan masih terlalu umum atau kurang lengkap',
      '7': 'Hanya menyebutkan ide umum tanpa kedalaman konsep sesuai materi',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  },

  // ─── SET C RUBRICS (Essay 11–15) ───
  {
    id: 'er-0000010-0000-0000-0000-000000000011',
    question_id: 'q0100006-0000-0000-0000-000000000001',
    kunci_jawaban: 'HTTPS mengenkripsi komunikasi antara browser dan server sehingga data pengguna lebih aman saat ditransmisikan.',
    kata_kunci: ['https', 'enkripsi', 'keamanan', 'komunikasi data'],
    rubrik_skor: {
      '10': '>= 80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'Konsep inti benar, namun terdapat 1 unsur penjelas penting yang belum disebutkan',
      '8': 'Sekitar 60% konsep benar, namun penjelasan masih terlalu umum atau kurang lengkap',
      '7': 'Hanya menyebutkan ide umum tanpa kedalaman konsep sesuai materi',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  },
  {
    id: 'er-0000010-0000-0000-0000-000000000012',
    question_id: 'q0100006-0000-0000-0000-000000000002',
    kunci_jawaban: 'File .env digunakan untuk menyimpan data sensitif seperti API key atau kredensial sehingga tidak ditulis langsung di source code.',
    kata_kunci: ['.env', 'api key', 'kredensial', 'keamanan'],
    rubrik_skor: {
      '10': '>= 80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'Konsep inti benar, namun terdapat 1 unsur penjelas penting yang belum disebutkan',
      '8': 'Sekitar 60% konsep benar, namun penjelasan masih terlalu umum atau kurang lengkap',
      '7': 'Hanya menyebutkan ide umum tanpa kedalaman konsep sesuai materi',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  },
  {
    id: 'er-0000010-0000-0000-0000-000000000013',
    question_id: 'q0100006-0000-0000-0000-000000000003',
    kunci_jawaban: 'XSS (Cross-Site Scripting) adalah serangan yang memanfaatkan input tidak aman untuk menjalankan script berbahaya pada browser pengguna.',
    kata_kunci: ['xss', 'cross-site scripting', 'script berbahaya', 'keamanan'],
    rubrik_skor: {
      '10': '>= 80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'Konsep inti benar, namun terdapat 1 unsur penjelas penting yang belum disebutkan',
      '8': 'Sekitar 60% konsep benar, namun penjelasan masih terlalu umum atau kurang lengkap',
      '7': 'Hanya menyebutkan ide umum tanpa kedalaman konsep sesuai materi',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  },
  {
    id: 'er-0000010-0000-0000-0000-000000000014',
    question_id: 'q0100006-0000-0000-0000-000000000004',
    kunci_jawaban: 'Karena menunjukkan proses berpikir, problem solving, keputusan teknis, proses pengujian, dan dampak nyata yang dihasilkan dari proyek.',
    kata_kunci: ['case study', 'problem solving', 'proses', 'dampak', 'keputusan teknis'],
    rubrik_skor: {
      '10': '>= 80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'Case study menunjukkan bagaimana proyek dikerjakan',
      '8': 'Case study membuat portofolio lebih menarik (belum menjelaskan aspek proses, keputusan, dan dampak yang dicari rekruter)',
      '7': 'Case study lebih baik daripada screenshot (terlalu umum)',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  },
  {
    id: 'er-0000010-0000-0000-0000-000000000015',
    question_id: 'q0100006-0000-0000-0000-000000000005',
    kunci_jawaban: '1. Overview – gambaran proyek. 2. Discovery – riset dan identifikasi masalah. 3. Engineering – proses implementasi teknis. 4. Testing – pengujian dan validasi. 5. Impact – hasil serta dampak proyek.',
    kata_kunci: ['overview', 'discovery', 'engineering', 'testing', 'impact'],
    rubrik_skor: {
      '10': '>= 80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'Menyebutkan kelima bagian dengan penjelasan singkat',
      '8': 'Menyebutkan sebagian besar bagian tetapi tidak lengkap (belum mencakup seluruh struktur case study profesional)',
      '7': 'Case study berisi penjelasan proyek (tidak menjelaskan struktur yang dimaksud)',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  }
];