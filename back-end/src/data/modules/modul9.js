/**
 * Bank Soal & Rubrik Penilaian – Modul 9: Usability Testing & Sprint Perbaikan
 * Total: 45 Soal (30 Pilihan Ganda + 15 Essay Studi Kasus) dibagi ke Set A, B, C.
 */

const COURSE_ID = 'c0000009-0000-0000-0000-000000000009';
const now = () => new Date().toISOString();

// ─── 1. QUESTIONS (30 PG + 15 Essay) ──────────────────────────────────────────
export const modul9Questions = [
  // ════════════ SET A – 10 PG (Nomor 1–10) ════════════
  {
    id: 'q9000001-0000-0000-0000-000000000001',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'Konsep Dasar Usability Testing',
    tipe: 'pilihan_ganda',
    teks: 'Usability Testing bertujuan untuk...',
    urutan: 1,
    created_at: now()
  },
  {
    id: 'q9000001-0000-0000-0000-000000000002',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'Perencanaan & Partisipan UT',
    tipe: 'pilihan_ganda',
    teks: 'Jumlah pengguna yang direkomendasikan dalam usability testing pada modul ini adalah...',
    urutan: 2,
    created_at: now()
  },
  {
    id: 'q9000001-0000-0000-0000-000000000003',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'Metode Think-Aloud & No Guidance',
    tipe: 'pilihan_ganda',
    teks: 'Metode Think-Aloud mengharuskan pengguna...',
    urutan: 3,
    created_at: now()
  },
  {
    id: 'q9000001-0000-0000-0000-000000000004',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'Metode Think-Aloud & No Guidance',
    tipe: 'pilihan_ganda',
    teks: 'Saat usability testing, fasilitator sebaiknya...',
    urutan: 4,
    created_at: now()
  },
  {
    id: 'q9000001-0000-0000-0000-000000000005',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'Metode Think-Aloud & No Guidance',
    tipe: 'pilihan_ganda',
    teks: 'Prinsip No Guidance berarti...',
    urutan: 5,
    created_at: now()
  },
  {
    id: 'q9000001-0000-0000-0000-000000000006',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'Analisis Perilaku (Microsoft Clarity)',
    tipe: 'pilihan_ganda',
    teks: 'Microsoft Clarity digunakan untuk...',
    urutan: 6,
    created_at: now()
  },
  {
    id: 'q9000001-0000-0000-0000-000000000007',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'Analisis Perilaku (Microsoft Clarity)',
    tipe: 'pilihan_ganda',
    teks: 'Session Replay memungkinkan tim untuk...',
    urutan: 7,
    created_at: now()
  },
  {
    id: 'q9000001-0000-0000-0000-000000000008',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'Analisis Perilaku (Microsoft Clarity)',
    tipe: 'pilihan_ganda',
    teks: 'Heatmap digunakan untuk melihat...',
    urutan: 8,
    created_at: now()
  },
  {
    id: 'q9000001-0000-0000-0000-000000000009',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'Analisis Perilaku (Microsoft Clarity)',
    tipe: 'pilihan_ganda',
    teks: 'Rage Click terjadi ketika pengguna...',
    urutan: 9,
    created_at: now()
  },
  {
    id: 'q9000001-0000-0000-0000-000000000010',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'Analisis Perilaku (Microsoft Clarity)',
    tipe: 'pilihan_ganda',
    teks: 'Dead Click adalah...',
    urutan: 10,
    created_at: now()
  },

  // ════════════ SET A – 5 Essay (Nomor 1–5) ════════════
  {
    id: 'q9000002-0000-0000-0000-000000000001',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'Konsep Dasar Usability Testing',
    tipe: 'essay',
    teks: 'Apa yang dimaksud dengan Usability Testing?',
    urutan: 11,
    created_at: now()
  },
  {
    id: 'q9000002-0000-0000-0000-000000000002',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'Konsep Dasar Usability Testing',
    tipe: 'essay',
    teks: 'Mengapa Usability Testing penting sebelum produk dirilis?',
    urutan: 12,
    created_at: now()
  },
  {
    id: 'q9000002-0000-0000-0000-000000000003',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'Metode Think-Aloud & No Guidance',
    tipe: 'essay',
    teks: 'Jelaskan metode Think-Aloud!',
    urutan: 13,
    created_at: now()
  },
  {
    id: 'q9000002-0000-0000-0000-000000000004',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'Metode Think-Aloud & No Guidance',
    tipe: 'essay',
    teks: 'Apa yang dimaksud dengan prinsip No Guidance?',
    urutan: 14,
    created_at: now()
  },
  {
    id: 'q9000002-0000-0000-0000-000000000005',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'Analisis Perilaku (Microsoft Clarity)',
    tipe: 'essay',
    teks: 'Jelaskan fungsi Microsoft Clarity!',
    urutan: 15,
    created_at: now()
  },

  // ════════════ SET B – 10 PG (Nomor 11–20) ════════════
  {
    id: 'q9000003-0000-0000-0000-000000000001',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Metrik Evaluasi Usability',
    tipe: 'pilihan_ganda',
    teks: 'Task Success Rate mengukur...',
    urutan: 1,
    created_at: now()
  },
  {
    id: 'q9000003-0000-0000-0000-000000000002',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Metrik Evaluasi Usability',
    tipe: 'pilihan_ganda',
    teks: 'Time-on-Task digunakan untuk mengukur...',
    urutan: 2,
    created_at: now()
  },
  {
    id: 'q9000003-0000-0000-0000-000000000003',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Metrik Evaluasi Usability (SEQ)',
    tipe: 'pilihan_ganda',
    teks: 'SEQ adalah singkatan dari...',
    urutan: 3,
    created_at: now()
  },
  {
    id: 'q9000003-0000-0000-0000-000000000004',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Metrik Evaluasi Usability (SEQ)',
    tipe: 'pilihan_ganda',
    teks: 'Skala SEQ digunakan untuk mengukur...',
    urutan: 4,
    created_at: now()
  },
  {
    id: 'q9000003-0000-0000-0000-000000000005',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Metrik Evaluasi Usability (SEQ)',
    tipe: 'pilihan_ganda',
    teks: 'Dalam modul ini, rentang nilai SEQ adalah...',
    urutan: 5,
    created_at: now()
  },
  {
    id: 'q9000003-0000-0000-0000-000000000006',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Perencanaan & Partisipan UT',
    tipe: 'pilihan_ganda',
    teks: 'Skenario tugas usability testing sebaiknya...',
    urutan: 6,
    created_at: now()
  },
  {
    id: 'q9000003-0000-0000-0000-000000000007',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Triase & Prioritas Masalah',
    tipe: 'pilihan_ganda',
    teks: 'Prioritas masalah dengan tingkat urgensi tertinggi adalah...',
    urutan: 7,
    created_at: now()
  },
  {
    id: 'q9000003-0000-0000-0000-000000000008',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Triase & Prioritas Masalah',
    tipe: 'pilihan_ganda',
    teks: 'Masalah yang menghambat tugas utama pengguna termasuk kategori...',
    urutan: 8,
    created_at: now()
  },
  {
    id: 'q9000003-0000-0000-0000-000000000009',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Triase & Prioritas Masalah',
    tipe: 'pilihan_ganda',
    teks: 'Masalah Minor adalah...',
    urutan: 9,
    created_at: now()
  },
  {
    id: 'q9000003-0000-0000-0000-000000000010',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Triase & Prioritas Masalah',
    tipe: 'pilihan_ganda',
    teks: 'Masalah Kosmetik biasanya terkait dengan...',
    urutan: 10,
    created_at: now()
  },

  // ════════════ SET B – 5 Essay (Nomor 6–10) ════════════
  {
    id: 'q9000004-0000-0000-0000-000000000001',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Analisis Perilaku (Microsoft Clarity)',
    tipe: 'essay',
    teks: 'Apa manfaat Session Replay?',
    urutan: 11,
    created_at: now()
  },
  {
    id: 'q9000004-0000-0000-0000-000000000002',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Analisis Perilaku (Microsoft Clarity)',
    tipe: 'essay',
    teks: 'Jelaskan fungsi Heatmap!',
    urutan: 12,
    created_at: now()
  },
  {
    id: 'q9000004-0000-0000-0000-000000000003',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Analisis Perilaku (Microsoft Clarity)',
    tipe: 'essay',
    teks: 'Apa yang dimaksud dengan Rage Click?',
    urutan: 13,
    created_at: now()
  },
  {
    id: 'q9000004-0000-0000-0000-000000000004',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Analisis Perilaku (Microsoft Clarity)',
    tipe: 'essay',
    teks: 'Apa yang dimaksud dengan Dead Click?',
    urutan: 14,
    created_at: now()
  },
  {
    id: 'q9000004-0000-0000-0000-000000000005',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Metrik Evaluasi Usability',
    tipe: 'essay',
    teks: 'Jelaskan Task Success Rate!',
    urutan: 15,
    created_at: now()
  },

  // ════════════ SET C – 10 PG (Nomor 21–30) ════════════
  {
    id: 'q9000005-0000-0000-0000-000000000001',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'Sprint Perbaikan & GitHub Workflow',
    tipe: 'pilihan_ganda',
    teks: 'GitHub Issue digunakan untuk...',
    urutan: 1,
    created_at: now()
  },
  {
    id: 'q9000005-0000-0000-0000-000000000002',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'Sprint Perbaikan & GitHub Workflow',
    tipe: 'pilihan_ganda',
    teks: 'Setiap perbaikan sebaiknya dilakukan pada...',
    urutan: 2,
    created_at: now()
  },
  {
    id: 'q9000005-0000-0000-0000-000000000003',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'Sprint Perbaikan & GitHub Workflow',
    tipe: 'pilihan_ganda',
    teks: 'Pull Request berfungsi untuk...',
    urutan: 3,
    created_at: now()
  },
  {
    id: 'q9000005-0000-0000-0000-000000000004',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'Sprint Perbaikan & GitHub Workflow',
    tipe: 'pilihan_ganda',
    teks: 'Code Review membantu...',
    urutan: 4,
    created_at: now()
  },
  {
    id: 'q9000005-0000-0000-0000-000000000005',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'Sprint Perbaikan & GitHub Workflow',
    tipe: 'pilihan_ganda',
    teks: 'Sintaks "Fixes #1" pada Pull Request digunakan untuk...',
    urutan: 5,
    created_at: now()
  },
  {
    id: 'q9000005-0000-0000-0000-000000000006',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'AI-Assisted Bug Fixing',
    tipe: 'pilihan_ganda',
    teks: 'AI-Assisted Bug Fixing berarti...',
    urutan: 6,
    created_at: now()
  },
  {
    id: 'q9000005-0000-0000-0000-000000000007',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'AI-Assisted Bug Fixing',
    tipe: 'pilihan_ganda',
    teks: 'Prompt AI yang baik untuk perbaikan bug harus...',
    urutan: 7,
    created_at: now()
  },
  {
    id: 'q9000005-0000-0000-0000-000000000008',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'Sprint Perbaikan & GitHub Workflow',
    tipe: 'pilihan_ganda',
    teks: 'Saat memperbaiki bug UI, pengembang harus berusaha untuk...',
    urutan: 8,
    created_at: now()
  },
  {
    id: 'q9000005-0000-0000-0000-000000000009',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'Konsep Dasar Usability Testing',
    tipe: 'pilihan_ganda',
    teks: 'Output utama dari usability testing adalah...',
    urutan: 9,
    created_at: now()
  },
  {
    id: 'q9000005-0000-0000-0000-000000000010',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'Sprint Perbaikan & GitHub Workflow',
    tipe: 'pilihan_ganda',
    teks: 'Tujuan sprint perbaikan kode setelah usability testing adalah...',
    urutan: 10,
    created_at: now()
  },

  // ════════════ SET C – 5 Essay (Nomor 11–15) ════════════
  {
    id: 'q9000006-0000-0000-0000-000000000001',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'Metrik Evaluasi Usability',
    tipe: 'essay',
    teks: 'Apa fungsi Time-on-Task?',
    urutan: 11,
    created_at: now()
  },
  {
    id: 'q9000006-0000-0000-0000-000000000002',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'Metrik Evaluasi Usability (SEQ)',
    tipe: 'essay',
    teks: 'Jelaskan Single Ease Question (SEQ)!',
    urutan: 12,
    created_at: now()
  },
  {
    id: 'q9000006-0000-0000-0000-000000000003',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'Triase & Prioritas Masalah',
    tipe: 'essay',
    teks: 'Mengapa triase masalah penting setelah usability testing?',
    urutan: 13,
    created_at: now()
  },
  {
    id: 'q9000006-0000-0000-0000-000000000004',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'Sprint Perbaikan & GitHub Workflow',
    tipe: 'essay',
    teks: 'Apa manfaat GitHub Issue dalam sprint perbaikan?',
    urutan: 14,
    created_at: now()
  },
  {
    id: 'q9000006-0000-0000-0000-000000000005',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'AI-Assisted Bug Fixing',
    tipe: 'essay',
    teks: 'Mengapa prompt AI harus spesifik saat melakukan AI-Assisted Bug Fixing?',
    urutan: 15,
    created_at: now()
  }
];

// ─── 2. OPTIONS (120 Opsi untuk 30 Soal PG) ───────────────────────────────────
export const modul9Options = [
  // ─── SET A OPTIONS ───
  // Q1-A (Jawaban: B)
  { id: 'o9-A1-1', question_id: 'q9000001-0000-0000-0000-000000000001', teks: 'Menambah fitur aplikasi', poin: 0, umpan_balik: 'Keliru. Menambah fitur bukan tujuan utama evaluasi kegunaan.', is_correct: false },
  { id: 'o9-A1-2', question_id: 'q9000001-0000-0000-0000-000000000001', teks: 'Menemukan masalah penggunaan produk', poin: 10, umpan_balik: 'Tepat! Usability Testing berfokus mengamati pengguna nyata untuk menemukan hambatan dan masalah saat memakai produk.', is_correct: true },
  { id: 'o9-A1-3', question_id: 'q9000001-0000-0000-0000-000000000001', teks: 'Mendesain logo', poin: 0, umpan_balik: 'Keliru. Mendesain logo masuk ke tahap perancangan identitas visual.', is_correct: false },
  { id: 'o9-A1-4', question_id: 'q9000001-0000-0000-0000-000000000001', teks: 'Mengelola server', poin: 0, umpan_balik: 'Keliru. Pengelolaan server termasuk ranah DevOps/infrastruktur.', is_correct: false },

  // Q2-A (Jawaban: B)
  { id: 'o9-A2-1', question_id: 'q9000001-0000-0000-0000-000000000002', teks: '1-2 orang', poin: 0, umpan_balik: 'Keliru. Jumlah 1-2 orang terlalu sedikit untuk menangkap pola masalah UX.', is_correct: false },
  { id: 'o9-A2-2', question_id: 'q9000001-0000-0000-0000-000000000002', teks: '3-5 orang', poin: 10, umpan_balik: 'Tepat! Mengacu pada aturan Nielsen, pengujian dengan 3-5 pengguna sudah mampu mengungkap sekitar 85% masalah usability utama.', is_correct: true },
  { id: 'o9-A2-3', question_id: 'q9000001-0000-0000-0000-000000000002', teks: '10-15 orang', poin: 0, umpan_balik: 'Keliru. Jumlah terlalu besar menyebabkan pengulangan temuan yang sama dan pemborosan sumber daya.', is_correct: false },
  { id: 'o9-A2-4', question_id: 'q9000001-0000-0000-0000-000000000002', teks: '20 orang', poin: 0, umpan_balik: 'Keliru. 20 responden lebih cocok untuk survei kuantitatif, bukan sesi UT kualitatif.', is_correct: false },

  // Q3-A (Jawaban: B)
  { id: 'o9-A3-1', question_id: 'q9000001-0000-0000-0000-000000000003', teks: 'Diam selama pengujian', poin: 0, umpan_balik: 'Keliru. Jika pengguna diam, fasilitator tidak dapat mengetahui alasan di balik tindakan atau kebingungan mereka.', is_correct: false },
  { id: 'o9-A3-2', question_id: 'q9000001-0000-0000-0000-000000000003', teks: 'Menjelaskan apa yang dipikirkan saat menggunakan produk', poin: 10, umpan_balik: 'Tepat! Metode Think-Aloud meminta partisipan menyuarakan pikiran, ekspektasi, dan kebingungan secara langsung.', is_correct: true },
  { id: 'o9-A3-3', question_id: 'q9000001-0000-0000-0000-000000000003', teks: 'Mengisi survei tanpa mencoba produk', poin: 0, umpan_balik: 'Keliru. Usability Testing wajib melibatkan interaksi langsung dengan produk.', is_correct: false },
  { id: 'o9-A3-4', question_id: 'q9000001-0000-0000-0000-000000000003', teks: 'Menulis kode', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q4-A (Jawaban: C)
  { id: 'o9-A4-1', question_id: 'q9000001-0000-0000-0000-000000000004', teks: 'Memberikan petunjuk terus-menerus', poin: 0, umpan_balik: 'Keliru. Memberi petunjuk akan membiaskan hasil pengujian.', is_correct: false },
  { id: 'o9-A4-2', question_id: 'q9000001-0000-0000-0000-000000000004', teks: 'Membimbing setiap langkah pengguna', poin: 0, umpan_balik: 'Keliru. Bimbingan menutup celah desain yang seharusnya ditemukan saat pengguna kebingungan.', is_correct: false },
  { id: 'o9-A4-3', question_id: 'q9000001-0000-0000-0000-000000000004', teks: 'Mengamati tanpa banyak intervensi', poin: 10, umpan_balik: 'Tepat! Fasilitator berperan sebagai pengamat netral agar perilaku alami pengguna terlihat apa adanya.', is_correct: true },
  { id: 'o9-A4-4', question_id: 'q9000001-0000-0000-0000-000000000004', teks: 'Menjawab semua kesulitan pengguna', poin: 0, umpan_balik: 'Keliru. Fasilitator justru perlu mencatat di titik mana pengguna mengalami kesulitan.', is_correct: false },

  // Q5-A (Jawaban: B)
  { id: 'o9-A5-1', question_id: 'q9000001-0000-0000-0000-000000000005', teks: 'Tidak melakukan testing', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o9-A5-2', question_id: 'q9000001-0000-0000-0000-000000000005', teks: 'Tidak memberi arahan saat peserta menjalankan tugas', poin: 10, umpan_balik: 'Tepat! Prinsip No Guidance memastikan hasil pengujian objektif karena pengguna mengandalkan intuisi antarmuka sepenuhnya.', is_correct: true },
  { id: 'o9-A5-3', question_id: 'q9000001-0000-0000-0000-000000000005', teks: 'Tidak mencatat hasil testing', poin: 0, umpan_balik: 'Keliru. Dokumentasi temuan wajib dilakukan.', is_correct: false },
  { id: 'o9-A5-4', question_id: 'q9000001-0000-0000-0000-000000000005', teks: 'Tidak merekam sesi', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q6-A (Jawaban: B)
  { id: 'o9-A6-1', question_id: 'q9000001-0000-0000-0000-000000000006', teks: 'Mendesain UI', poin: 0, umpan_balik: 'Keliru. Desain UI dilakukan di Figma.', is_correct: false },
  { id: 'o9-A6-2', question_id: 'q9000001-0000-0000-0000-000000000006', teks: 'Menganalisis perilaku pengguna', poin: 10, umpan_balik: 'Tepat! Microsoft Clarity menyediakan rekaman sesi, heatmap, dan deteksi rage/dead click untuk memahami interaksi pengguna.', is_correct: true },
  { id: 'o9-A6-3', question_id: 'q9000001-0000-0000-0000-000000000006', teks: 'Membuat database', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o9-A6-4', question_id: 'q9000001-0000-0000-0000-000000000006', teks: 'Hosting aplikasi', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q7-A (Jawaban: A)
  { id: 'o9-A7-1', question_id: 'q9000001-0000-0000-0000-000000000007', teks: 'Melihat rekaman interaksi pengguna', poin: 10, umpan_balik: 'Tepat! Session Replay memutar ulang pergerakan kursor, guliran layar, dan klik pengguna saat menjelajahi aplikasi.', is_correct: true },
  { id: 'o9-A7-2', question_id: 'q9000001-0000-0000-0000-000000000007', teks: 'Mengedit video', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o9-A7-3', question_id: 'q9000001-0000-0000-0000-000000000007', teks: 'Membuat prototype', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o9-A7-4', question_id: 'q9000001-0000-0000-0000-000000000007', teks: 'Mengelola repository', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q8-A (Jawaban: B)
  { id: 'o9-A8-1', question_id: 'q9000001-0000-0000-0000-000000000008', teks: 'Struktur database', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o9-A8-2', question_id: 'q9000001-0000-0000-0000-000000000008', teks: 'Area yang sering berinteraksi dengan pengguna', poin: 10, umpan_balik: 'Tepat! Heatmap memvisualisasikan intensitas klik, gerakan, dan kedalaman scroll menggunakan gradasi warna.', is_correct: true },
  { id: 'o9-A8-3', question_id: 'q9000001-0000-0000-0000-000000000008', teks: 'Kecepatan server', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o9-A8-4', question_id: 'q9000001-0000-0000-0000-000000000008', teks: 'Aktivitas GitHub', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q9-A (Jawaban: B)
  { id: 'o9-A9-1', question_id: 'q9000001-0000-0000-0000-000000000009', teks: 'Menutup aplikasi', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o9-A9-2', question_id: 'q9000001-0000-0000-0000-000000000009', teks: 'Berkali-kali mengklik karena frustrasi', poin: 10, umpan_balik: 'Tepat! Rage Click menandakan elemen merespons lambat, macet, atau menipu ekspektasi pengguna sehingga diklik berulang kali.', is_correct: true },
  { id: 'o9-A9-3', question_id: 'q9000001-0000-0000-0000-000000000009', teks: 'Login berulang kali', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o9-A9-4', question_id: 'q9000001-0000-0000-0000-000000000009', teks: 'Menghapus akun', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q10-A (Jawaban: A)
  { id: 'o9-A10-1', question_id: 'q9000001-0000-0000-0000-000000000010', teks: 'Klik pada elemen yang tidak memberikan respons yang diharapkan', poin: 10, umpan_balik: 'Tepat! Dead Click terjadi saat pengguna mengira teks/gambar bisa diklik (seperti tombol/tautan), tetapi tidak ada aksi apa pun.', is_correct: true },
  { id: 'o9-A10-2', question_id: 'q9000001-0000-0000-0000-000000000010', teks: 'Klik kanan mouse', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o9-A10-3', question_id: 'q9000001-0000-0000-0000-000000000010', teks: 'Klik pada tombol logout', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o9-A10-4', question_id: 'q9000001-0000-0000-0000-000000000010', teks: 'Klik pada link aktif', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // ─── SET B OPTIONS ───
  // Q1-B / PG 11 (Jawaban: A)
  { id: 'o9-B1-1', question_id: 'q9000003-0000-0000-0000-000000000001', teks: 'Tingkat keberhasilan pengguna menyelesaikan tugas', poin: 10, umpan_balik: 'Tepat! Task Success Rate menghitung persentase skenario tugas yang berhasil diselesaikan secara tuntas oleh partisipan.', is_correct: true },
  { id: 'o9-B1-2', question_id: 'q9000003-0000-0000-0000-000000000001', teks: 'Jumlah pengguna baru', poin: 0, umpan_balik: 'Keliru. Jumlah pengguna baru merupakan metrik akuisisi (acquisition).', is_correct: false },
  { id: 'o9-B1-3', question_id: 'q9000003-0000-0000-0000-000000000001', teks: 'Durasi coding', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o9-B1-4', question_id: 'q9000003-0000-0000-0000-000000000001', teks: 'Kecepatan internet', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q2-B / PG 12 (Jawaban: B)
  { id: 'o9-B2-1', question_id: 'q9000003-0000-0000-0000-000000000002', teks: 'Kepuasan pengguna', poin: 0, umpan_balik: 'Keliru. Persepsi kemudahan/kepuasan diukur menggunakan metrik seperti SEQ atau SUS.', is_correct: false },
  { id: 'o9-B2-2', question_id: 'q9000003-0000-0000-0000-000000000002', teks: 'Waktu yang dibutuhkan menyelesaikan tugas', poin: 10, umpan_balik: 'Tepat! Time-on-Task mengukur efisiensi alur produk berdasarkan durasi penyelesaian skenario oleh pengguna.', is_correct: true },
  { id: 'o9-B2-3', question_id: 'q9000003-0000-0000-0000-000000000002', teks: 'Jumlah bug', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o9-B2-4', question_id: 'q9000003-0000-0000-0000-000000000002', teks: 'Jumlah klik', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q3-B / PG 13 (Jawaban: B)
  { id: 'o9-B3-1', question_id: 'q9000003-0000-0000-0000-000000000003', teks: 'System Evaluation Question', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o9-B3-2', question_id: 'q9000003-0000-0000-0000-000000000003', teks: 'Single Ease Question', poin: 10, umpan_balik: 'Tepat! SEQ (Single Ease Question) adalah pertanyaan tunggal pasca-tugas untuk menilai tingkat kemudahan skenario.', is_correct: true },
  { id: 'o9-B3-3', question_id: 'q9000003-0000-0000-0000-000000000003', teks: 'Simple Error Query', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o9-B3-4', question_id: 'q9000003-0000-0000-0000-000000000003', teks: 'Software Evaluation Quality', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q4-B / PG 14 (Jawaban: B)
  { id: 'o9-B4-1', question_id: 'q9000003-0000-0000-0000-000000000004', teks: 'Keuntungan produk', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o9-B4-2', question_id: 'q9000003-0000-0000-0000-000000000004', teks: 'Persepsi kemudahan tugas oleh pengguna', poin: 10, umpan_balik: 'Tepat! SEQ mengukur seberapa mudah atau sulit suatu tugas dirasakan langsung oleh partisipan setelah menyelesaikannya.', is_correct: true },
  { id: 'o9-B4-3', question_id: 'q9000003-0000-0000-0000-000000000004', teks: 'Jumlah klik', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o9-B4-4', question_id: 'q9000003-0000-0000-0000-000000000004', teks: 'Jumlah bug', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q5-B / PG 15 (Jawaban: B)
  { id: 'o9-B5-1', question_id: 'q9000003-0000-0000-0000-000000000005', teks: '1–5', poin: 0, umpan_balik: 'Keliru. Standar SEQ menggunakan skala Likert 7 poin.', is_correct: false },
  { id: 'o9-B5-2', question_id: 'q9000003-0000-0000-0000-000000000005', teks: '1–7', poin: 10, umpan_balik: 'Tepat! Rentang nilai SEQ adalah 1 (Sangat Sulit) hingga 7 (Sangat Mudah), dengan target rata-rata ideal >= 5.', is_correct: true },
  { id: 'o9-B5-3', question_id: 'q9000003-0000-0000-0000-000000000005', teks: '1–10', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o9-B5-4', question_id: 'q9000003-0000-0000-0000-000000000005', teks: '0–100', poin: 0, umpan_balik: 'Keliru. Skala 0-100 digunakan pada System Usability Scale (SUS).', is_correct: false },

  // Q6-B / PG 16 (Jawaban: A)
  { id: 'o9-B6-1', question_id: 'q9000003-0000-0000-0000-000000000006', teks: 'Jelas dan realistis', poin: 10, umpan_balik: 'Tepat! Skenario tugas harus menyerupai situasi nyata pengguna tanpa membocorkan langkah atau label tombol di UI.', is_correct: true },
  { id: 'o9-B6-2', question_id: 'q9000003-0000-0000-0000-000000000006', teks: 'Rumit dan ambigu', poin: 0, umpan_balik: 'Keliru. Skenario ambigu membuat pengujian tidak valid karena peserta bingung memahami instruksi.', is_correct: false },
  { id: 'o9-B6-3', question_id: 'q9000003-0000-0000-0000-000000000006', teks: 'Tanpa tujuan', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o9-B6-4', question_id: 'q9000003-0000-0000-0000-000000000006', teks: 'Menguji coding', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q7-B / PG 17 (Jawaban: D)
  { id: 'o9-B7-1', question_id: 'q9000003-0000-0000-0000-000000000007', teks: 'Kosmetik', poin: 0, umpan_balik: 'Keliru. Kosmetik memiliki tingkat urgensi paling rendah.', is_correct: false },
  { id: 'o9-B7-2', question_id: 'q9000003-0000-0000-0000-000000000007', teks: 'Minor', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o9-B7-3', question_id: 'q9000003-0000-0000-0000-000000000007', teks: 'Mayor', poin: 0, umpan_balik: 'Keliru. Mayor berada satu tingkat di bawah Kritis.', is_correct: false },
  { id: 'o9-B7-4', question_id: 'q9000003-0000-0000-0000-000000000007', teks: 'Kritis', poin: 10, umpan_balik: 'Tepat! Masalah Kritis (Critical) menghentikan pengguna menyelesaikan alur utama dan wajib segera diperbaiki.', is_correct: true },

  // Q8-B / PG 18 (Jawaban: A)
  { id: 'o9-B8-1', question_id: 'q9000003-0000-0000-0000-000000000008', teks: 'Kritis', poin: 10, umpan_balik: 'Tepat! Setiap kendala yang memblokir pengguna menuntaskan tugas inti diklasifikasikan sebagai masalah Kritis.', is_correct: true },
  { id: 'o9-B8-2', question_id: 'q9000003-0000-0000-0000-000000000008', teks: 'Kosmetik', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o9-B8-3', question_id: 'q9000003-0000-0000-0000-000000000008', teks: 'Minor', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o9-B8-4', question_id: 'q9000003-0000-0000-0000-000000000008', teks: 'Dokumentasi', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q9-B / PG 19 (Jawaban: B)
  { id: 'o9-B9-1', question_id: 'q9000003-0000-0000-0000-000000000009', teks: 'Tidak berpengaruh sama sekali', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o9-B9-2', question_id: 'q9000003-0000-0000-0000-000000000009', teks: 'Mengganggu namun pengguna masih bisa menyelesaikan tugas', poin: 10, umpan_balik: 'Tepat! Masalah Minor menimbulkan friksi ringan tetapi tidak menghalangi penyelesaian tugas.', is_correct: true },
  { id: 'o9-B9-3', question_id: 'q9000003-0000-0000-0000-000000000009', teks: 'Menyebabkan aplikasi crash total', poin: 0, umpan_balik: 'Keliru. Crash total termasuk masalah Kritis.', is_correct: false },
  { id: 'o9-B9-4', question_id: 'q9000003-0000-0000-0000-000000000009', teks: 'Berhubungan dengan server', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q10-B / PG 20 (Jawaban: A)
  { id: 'o9-B10-1', question_id: 'q9000003-0000-0000-0000-000000000010', teks: 'Tampilan visual yang tidak konsisten', poin: 10, umpan_balik: 'Tepat! Masalah Kosmetik berkaitan dengan detail estetika (misal spasi, perataan, atau warna) tanpa mengganggu fungsionalitas.', is_correct: true },
  { id: 'o9-B10-2', question_id: 'q9000003-0000-0000-0000-000000000010', teks: 'Kegagalan login total', poin: 0, umpan_balik: 'Keliru. Ini adalah masalah Kritis.', is_correct: false },
  { id: 'o9-B10-3', question_id: 'q9000003-0000-0000-0000-000000000010', teks: 'Kehilangan data', poin: 0, umpan_balik: 'Keliru. Ini adalah masalah Kritis.', is_correct: false },
  { id: 'o9-B10-4', question_id: 'q9000003-0000-0000-0000-000000000010', teks: 'Database rusak', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // ─── SET C OPTIONS ───
  // Q1-C / PG 21 (Jawaban: A)
  { id: 'o9-C1-1', question_id: 'q9000005-0000-0000-0000-000000000001', teks: 'Mencatat bug, tugas, atau perbaikan', poin: 10, umpan_balik: 'Tepat! GitHub Issue mendokumentasikan temuan bug hasil UT, tingkat prioritas, dan penanggung jawab perbaikan.', is_correct: true },
  { id: 'o9-C1-2', question_id: 'q9000005-0000-0000-0000-000000000001', teks: 'Mendesain logo', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o9-C1-3', question_id: 'q9000005-0000-0000-0000-000000000001', teks: 'Menjalankan server', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o9-C1-4', question_id: 'q9000005-0000-0000-0000-000000000001', teks: 'Membuat database', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q2-C / PG 22 (Jawaban: B)
  { id: 'o9-C2-1', question_id: 'q9000005-0000-0000-0000-000000000002', teks: 'Main branch langsung', poin: 0, umpan_balik: 'Keliru. Commit langsung ke main berisiko merusak versi produksi yang stabil.', is_correct: false },
  { id: 'o9-C2-2', question_id: 'q9000005-0000-0000-0000-000000000002', teks: 'Branch khusus perbaikan', poin: 10, umpan_balik: 'Tepat! Membuat branch terpisah (misal fix/issue-1) menjaga kestabilan branch utama sebelum kode di-review.', is_correct: true },
  { id: 'o9-C2-3', question_id: 'q9000005-0000-0000-0000-000000000002', teks: 'Database branch', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o9-C2-4', question_id: 'q9000005-0000-0000-0000-000000000002', teks: 'README branch', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q3-C / PG 23 (Jawaban: A)
  { id: 'o9-C3-1', question_id: 'q9000005-0000-0000-0000-000000000003', teks: 'Menggabungkan perubahan melalui proses review', poin: 10, umpan_balik: 'Tepat! Pull Request menjadi gerbang peninjauan kode (code review) sebelum perubahan di-merge ke branch utama.', is_correct: true },
  { id: 'o9-C3-2', question_id: 'q9000005-0000-0000-0000-000000000003', teks: 'Menghapus repository', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o9-C3-3', question_id: 'q9000005-0000-0000-0000-000000000003', teks: 'Membuat issue', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o9-C3-4', question_id: 'q9000005-0000-0000-0000-000000000003', teks: 'Menghapus branch utama', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q4-C / PG 24 (Jawaban: B)
  { id: 'o9-C4-1', question_id: 'q9000005-0000-0000-0000-000000000004', teks: 'Menurunkan kualitas kode', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o9-C4-2', question_id: 'q9000005-0000-0000-0000-000000000004', teks: 'Memastikan kualitas dan konsistensi perubahan', poin: 10, umpan_balik: 'Tepat! Code Review mendeteksi potensi bug baru (regresi) dan menjaga standar penulisan kode tim.', is_correct: true },
  { id: 'o9-C4-3', question_id: 'q9000005-0000-0000-0000-000000000004', teks: 'Menghapus histori Git', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o9-C4-4', question_id: 'q9000005-0000-0000-0000-000000000004', teks: 'Mengurangi fitur', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q5-C / PG 25 (Jawaban: A)
  { id: 'o9-C5-1', question_id: 'q9000005-0000-0000-0000-000000000005', teks: 'Menutup issue terkait secara otomatis setelah merge', poin: 10, umpan_balik: 'Tepat! Kata kunci "Fixes #nomor" menghubungkan PR dengan Issue sehingga Issue otomatis berstatus Closed saat PR di-merge.', is_correct: true },
  { id: 'o9-C5-2', question_id: 'q9000005-0000-0000-0000-000000000005', teks: 'Membuat branch baru', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o9-C5-3', question_id: 'q9000005-0000-0000-0000-000000000005', teks: 'Menjalankan testing', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o9-C5-4', question_id: 'q9000005-0000-0000-0000-000000000005', teks: 'Mengubah repository', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q6-C / PG 26 (Jawaban: B)
  { id: 'o9-C6-1', question_id: 'q9000005-0000-0000-0000-000000000006', teks: 'Menghapus programmer', poin: 0, umpan_balik: 'Keliru. AI adalah alat bantu, tetap membutuhkan validasi pengembang.', is_correct: false },
  { id: 'o9-C6-2', question_id: 'q9000005-0000-0000-0000-000000000006', teks: 'Memanfaatkan AI untuk membantu analisis dan perbaikan bug', poin: 10, umpan_balik: 'Tepat! AI-Assisted Bug Fixing mempercepat pelacakan akar error dan penyusunan solusi kode dengan konteks yang terarah.', is_correct: true },
  { id: 'o9-C6-3', question_id: 'q9000005-0000-0000-0000-000000000006', teks: 'Menjalankan website otomatis', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o9-C6-4', question_id: 'q9000005-0000-0000-0000-000000000006', teks: 'Membuat database', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q7-C / PG 27 (Jawaban: B)
  { id: 'o9-C7-1', question_id: 'q9000005-0000-0000-0000-000000000007', teks: 'Singkat tanpa konteks', poin: 0, umpan_balik: 'Keliru. Prompt tanpa konteks memicu jawaban AI yang tidak akurat atau melenceng dari struktur proyek.', is_correct: false },
  { id: 'o9-C7-2', question_id: 'q9000005-0000-0000-0000-000000000007', teks: 'Spesifik dan jelas mengenai masalah', poin: 10, umpan_balik: 'Tepat! Menyertakan potongan kode terkait, pesan error, dan perilaku yang diharapkan menghasilkan solusi perbaikan yang presisi.', is_correct: true },
  { id: 'o9-C7-3', question_id: 'q9000005-0000-0000-0000-000000000007', teks: 'Hanya berisi nama file', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o9-C7-4', question_id: 'q9000005-0000-0000-0000-000000000007', teks: 'Tidak menyebut error', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q8-C / PG 28 (Jawaban: B)
  { id: 'o9-C8-1', question_id: 'q9000005-0000-0000-0000-000000000008', teks: 'Mengubah seluruh desain', poin: 0, umpan_balik: 'Keliru. Mengubah seluruh desain dapat merusak konsistensi dan memunculkan masalah baru.', is_correct: false },
  { id: 'o9-C8-2', question_id: 'q9000005-0000-0000-0000-000000000008', teks: 'Memperbaiki bug tanpa merusak tema dan alur aplikasi', poin: 10, umpan_balik: 'Tepat! Perbaikan harus terisolasi sesuai ruang lingkup masalah dengan tetap mempertahankan design token dan alur yang sudah baik.', is_correct: true },
  { id: 'o9-C8-3', question_id: 'q9000005-0000-0000-0000-000000000008', teks: 'Menghapus fitur lama', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o9-C8-4', question_id: 'q9000005-0000-0000-0000-000000000008', teks: 'Mengganti framework', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q9-C / PG 29 (Jawaban: A)
  { id: 'o9-C9-1', question_id: 'q9000005-0000-0000-0000-000000000009', teks: 'Temuan masalah dan rekomendasi perbaikan', poin: 10, umpan_balik: 'Tepat! Hasil pengujian dirangkum menjadi daftar temuan terprioritas beserta rekomendasi solusinya untuk sprint perbaikan.', is_correct: true },
  { id: 'o9-C9-2', question_id: 'q9000005-0000-0000-0000-000000000009', teks: 'Source code baru', poin: 0, umpan_balik: 'Keliru. Source code baru merupakan hasil dari sprint perbaikan.', is_correct: false },
  { id: 'o9-C9-3', question_id: 'q9000005-0000-0000-0000-000000000009', teks: 'Database baru', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o9-C9-4', question_id: 'q9000005-0000-0000-0000-000000000009', teks: 'Wireframe baru', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q10-C / PG 30 (Jawaban: A)
  { id: 'o9-C10-1', question_id: 'q9000005-0000-0000-0000-000000000010', teks: 'Menindaklanjuti temuan dan meningkatkan kualitas aplikasi', poin: 10, umpan_balik: 'Tepat! Sprint perbaikan menutup siklus validasi dengan menyelesaikan hambatan nyata yang ditemukan pengguna.', is_correct: true },
  { id: 'o9-C10-2', question_id: 'q9000005-0000-0000-0000-000000000010', teks: 'Menghapus seluruh fitur', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o9-C10-3', question_id: 'q9000005-0000-0000-0000-000000000010', teks: 'Mengganti bahasa pemrograman', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o9-C10-4', question_id: 'q9000005-0000-0000-0000-000000000010', teks: 'Menambah biaya proyek', poin: 0, umpan_balik: 'Keliru.', is_correct: false }
];

// ─── 3. ESSAY RUBRICS (15 Rubrik Penilaian Essay) ────────────────────────────
export const modul9Rubrics = [
  // ─── SET A RUBRICS (Essay 1–5) ───
  {
    id: 'er-0000009-0000-0000-0000-000000000001',
    question_id: 'q9000002-0000-0000-0000-000000000001',
    kunci_jawaban: 'Usability Testing adalah metode evaluasi yang melibatkan pengguna nyata untuk menguji kemudahan penggunaan suatu produk dan menemukan masalah yang dialami saat menyelesaikan tugas tertentu.',
    kata_kunci: ['usability testing', 'pengguna nyata', 'evaluasi', 'kemudahan penggunaan', 'menemukan masalah'],
    rubrik_skor: {
      '10': '>= 80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'Pengujian produk kepada pengguna untuk menemukan masalah penggunaan',
      '8': 'Pengujian untuk melihat apakah aplikasi bisa digunakan (belum menjelaskan keterlibatan pengguna nyata dan tujuan evaluasi usability)',
      '7': 'Testing aplikasi kepada pengguna (terlalu umum)',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  },
  {
    id: 'er-0000009-0000-0000-0000-000000000002',
    question_id: 'q9000002-0000-0000-0000-000000000002',
    kunci_jawaban: 'Karena membantu menemukan hambatan penggunaan, memvalidasi desain, meningkatkan pengalaman pengguna, dan mengurangi risiko kegagalan produk setelah dirilis.',
    kata_kunci: ['validasi', 'pengalaman pengguna', 'hambatan', 'risiko'],
    rubrik_skor: {
      '10': '>= 80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'Membantu menemukan masalah sebelum produk digunakan banyak orang',
      '8': 'Membantu meningkatkan aplikasi (belum menjelaskan manfaat validasi dan pengurangan risiko)',
      '7': 'Dilakukan sebelum rilis (tidak menjelaskan alasannya)',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  },
  {
    id: 'er-0000009-0000-0000-0000-000000000003',
    question_id: 'q9000002-0000-0000-0000-000000000003',
    kunci_jawaban: 'Think-Aloud adalah metode usability testing di mana pengguna mengungkapkan pikiran, kebingungan, alasan, dan keputusan mereka secara verbal selama menjalankan tugas.',
    kata_kunci: ['think aloud', 'berbicara', 'pikiran pengguna', 'proses berpikir'],
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
    id: 'er-0000009-0000-0000-0000-000000000004',
    question_id: 'q9000002-0000-0000-0000-000000000004',
    kunci_jawaban: 'No Guidance berarti fasilitator tidak memberikan arahan atau bantuan selama tugas berlangsung agar hasil pengujian mencerminkan pengalaman pengguna yang sebenarnya.',
    kata_kunci: ['no guidance', 'tanpa arahan', 'objektif', 'pengalaman nyata'],
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
    id: 'er-0000009-0000-0000-0000-000000000005',
    question_id: 'q9000002-0000-0000-0000-000000000005',
    kunci_jawaban: 'Microsoft Clarity digunakan untuk menganalisis perilaku pengguna melalui heatmap, session replay, rage click, dan insight lainnya guna menemukan masalah UX.',
    kata_kunci: ['clarity', 'heatmap', 'replay', 'perilaku pengguna', 'ux'],
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
    id: 'er-0000009-0000-0000-0000-000000000006',
    question_id: 'q9000004-0000-0000-0000-000000000001',
    kunci_jawaban: 'Session Replay memungkinkan tim melihat kembali interaksi pengguna sehingga dapat memahami hambatan dan kesalahan yang terjadi selama penggunaan aplikasi.',
    kata_kunci: ['session replay', 'rekaman', 'interaksi pengguna', 'hambatan'],
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
    id: 'er-0000009-0000-0000-0000-000000000007',
    question_id: 'q9000004-0000-0000-0000-000000000002',
    kunci_jawaban: 'Heatmap menunjukkan area halaman yang paling sering diklik, dilihat, atau diinteraksikan oleh pengguna.',
    kata_kunci: ['heatmap', 'klik', 'interaksi', 'area populer'],
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
    id: 'er-0000009-0000-0000-0000-000000000008',
    question_id: 'q9000004-0000-0000-0000-000000000003',
    kunci_jawaban: 'Rage Click adalah perilaku pengguna yang mengklik berulang kali pada suatu elemen karena frustrasi atau ekspektasi yang tidak terpenuhi.',
    kata_kunci: ['rage click', 'klik berulang', 'frustrasi'],
    rubrik_skor: {
      '10': '>= 80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'Klik berkali-kali karena pengguna bingung atau kesal',
      '8': 'Klik berulang pada tombol (belum menjelaskan penyebab frustrasi pengguna)',
      '7': 'Pengguna sering klik (terlalu umum)',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  },
  {
    id: 'er-0000009-0000-0000-0000-000000000009',
    question_id: 'q9000004-0000-0000-0000-000000000004',
    kunci_jawaban: 'Dead Click terjadi ketika pengguna mengklik suatu elemen tetapi tidak mendapatkan respons yang diharapkan.',
    kata_kunci: ['dead click', 'tidak ada respons', 'ekspektasi pengguna'],
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
    id: 'er-0000009-0000-0000-0000-000000000010',
    question_id: 'q9000004-0000-0000-0000-000000000005',
    kunci_jawaban: 'Task Success Rate adalah metrik yang mengukur persentase pengguna yang berhasil menyelesaikan tugas yang diberikan.',
    kata_kunci: ['task success rate', 'persentase keberhasilan', 'tugas pengguna'],
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
    id: 'er-0000009-0000-0000-0000-000000000011',
    question_id: 'q9000006-0000-0000-0000-000000000001',
    kunci_jawaban: 'Time-on-Task digunakan untuk mengukur waktu yang dibutuhkan pengguna dalam menyelesaikan suatu tugas.',
    kata_kunci: ['time on task', 'waktu', 'menyelesaikan tugas'],
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
    id: 'er-0000009-0000-0000-0000-000000000012',
    question_id: 'q9000006-0000-0000-0000-000000000002',
    kunci_jawaban: 'SEQ adalah pertanyaan penilaian yang diberikan setelah tugas selesai untuk mengetahui seberapa mudah tugas tersebut menurut pengguna pada skala 1–7.',
    kata_kunci: ['seq', 'kemudahan', 'skala 1-7', 'persepsi pengguna'],
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
    id: 'er-0000009-0000-0000-0000-000000000013',
    question_id: 'q9000006-0000-0000-0000-000000000003',
    kunci_jawaban: 'Karena membantu tim mengurutkan prioritas perbaikan berdasarkan tingkat dampak dan urgensi sehingga sumber daya digunakan secara efektif.',
    kata_kunci: ['prioritas', 'dampak', 'urgensi', 'triase'],
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
    id: 'er-0000009-0000-0000-0000-000000000014',
    question_id: 'q9000006-0000-0000-0000-000000000004',
    kunci_jawaban: 'GitHub Issue digunakan untuk mendokumentasikan masalah, melacak progres perbaikan, dan memudahkan koordinasi tim.',
    kata_kunci: ['issue', 'dokumentasi', 'tracking', 'koordinasi'],
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
    id: 'er-0000009-0000-0000-0000-000000000015',
    question_id: 'q9000006-0000-0000-0000-000000000005',
    kunci_jawaban: 'Karena prompt yang spesifik memberikan konteks yang jelas sehingga AI dapat menghasilkan solusi yang lebih akurat, relevan, dan sesuai dengan masalah yang dihadapi.',
    kata_kunci: ['prompt spesifik', 'konteks', 'akurat', 'solusi relevan'],
    rubrik_skor: {
      '10': '>= 80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'Prompt spesifik membantu AI memberikan jawaban lebih tepat',
      '8': 'Prompt spesifik membuat AI lebih mudah memahami masalah (belum menjelaskan hubungan antara konteks dan kualitas solusi)',
      '7': 'Prompt harus jelas (terlalu umum dan tidak menjelaskan dampaknya terhadap hasil AI)',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  }
];