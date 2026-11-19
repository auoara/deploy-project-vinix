/**
 * Bank Soal & Rubrik Penilaian — Modul 7: PRD, AI, Git Kolaborasi & Slicing Desain
 * ================================================================================
 * Total: 30 Pilihan Ganda (120 Opsi) + 15 Essay Studi Kasus (15 Rubrik)
 * Pembagian Paket sesuai PRD Bagian 13:
 *   - Set A: PG 1–10  & Essay 1–5
 *   - Set B: PG 11–20 & Essay 6–10
 *   - Set C: PG 21–30 & Essay 11–15
 */

const now = () => new Date().toISOString();
const COURSE_ID = 'c0000007-0000-0000-0000-000000000007';

// ─── QUESTIONS (30 PG + 15 Essay) ─────────────────────────────────────────────
export const modul7Questions = [
  // ════════════ SET A – 10 PG (Soal 1–10) ════════════
  { id: 'q7000001-0000-0000-0000-000000000001', course_id: COURSE_ID, set_paket: 'A', topik: 'Product Requirement Document', tipe: 'pilihan_ganda', teks: 'PRD merupakan singkatan dari...', urutan: 1, created_at: now() },
  { id: 'q7000001-0000-0000-0000-000000000002', course_id: COURSE_ID, set_paket: 'A', topik: 'Product Requirement Document', tipe: 'pilihan_ganda', teks: 'Tujuan utama PRD adalah...', urutan: 2, created_at: now() },
  { id: 'q7000001-0000-0000-0000-000000000003', course_id: COURSE_ID, set_paket: 'A', topik: 'Product Requirement Document', tipe: 'pilihan_ganda', teks: 'PRD membantu mengurangi...', urutan: 3, created_at: now() },
  { id: 'q7000001-0000-0000-0000-000000000004', course_id: COURSE_ID, set_paket: 'A', topik: 'User Story', tipe: 'pilihan_ganda', teks: 'User Story digunakan untuk...', urutan: 4, created_at: now() },
  { id: 'q7000001-0000-0000-0000-000000000005', course_id: COURSE_ID, set_paket: 'A', topik: 'User Story', tipe: 'pilihan_ganda', teks: 'Format User Story yang benar adalah...', urutan: 5, created_at: now() },
  { id: 'q7000001-0000-0000-0000-000000000006', course_id: COURSE_ID, set_paket: 'A', topik: 'Minimum Viable Product', tipe: 'pilihan_ganda', teks: 'MVP merupakan singkatan dari...', urutan: 6, created_at: now() },
  { id: 'q7000001-0000-0000-0000-000000000007', course_id: COURSE_ID, set_paket: 'A', topik: 'Minimum Viable Product', tipe: 'pilihan_ganda', teks: 'Tujuan MVP adalah...', urutan: 7, created_at: now() },
  { id: 'q7000001-0000-0000-0000-000000000008', course_id: COURSE_ID, set_paket: 'A', topik: 'Acceptance Criteria', tipe: 'pilihan_ganda', teks: 'Acceptance Criteria digunakan untuk...', urutan: 8, created_at: now() },
  { id: 'q7000001-0000-0000-0000-000000000009', course_id: COURSE_ID, set_paket: 'A', topik: 'AI dalam PRD', tipe: 'pilihan_ganda', teks: 'AI dapat membantu proses pembuatan PRD dengan cara...', urutan: 9, created_at: now() },
  { id: 'q7000001-0000-0000-0000-000000000010', course_id: COURSE_ID, set_paket: 'A', topik: 'Git Dasar', tipe: 'pilihan_ganda', teks: 'Git adalah...', urutan: 10, created_at: now() },

  // ════════════ SET A – 5 Essay (Essay 1–5) ════════════
  { id: 'q7000002-0000-0000-0000-000000000001', course_id: COURSE_ID, set_paket: 'A', topik: 'Product Requirement Document', tipe: 'essay', teks: 'Apa yang dimaksud dengan PRD (Product Requirement Document)?', urutan: 11, created_at: now() },
  { id: 'q7000002-0000-0000-0000-000000000002', course_id: COURSE_ID, set_paket: 'A', topik: 'Product Requirement Document', tipe: 'essay', teks: 'Mengapa PRD penting dalam pengembangan produk digital?', urutan: 12, created_at: now() },
  { id: 'q7000002-0000-0000-0000-000000000003', course_id: COURSE_ID, set_paket: 'A', topik: 'User Story', tipe: 'essay', teks: 'Apa yang dimaksud dengan User Story?', urutan: 13, created_at: now() },
  { id: 'q7000002-0000-0000-0000-000000000004', course_id: COURSE_ID, set_paket: 'A', topik: 'User Story', tipe: 'essay', teks: 'Tuliskan format umum User Story!', urutan: 14, created_at: now() },
  { id: 'q7000002-0000-0000-0000-000000000005', course_id: COURSE_ID, set_paket: 'A', topik: 'Minimum Viable Product', tipe: 'essay', teks: 'Apa yang dimaksud dengan MVP (Minimum Viable Product)?', urutan: 15, created_at: now() },

  // ════════════ SET B – 10 PG (Soal 11–20) ════════════
  { id: 'q7000003-0000-0000-0000-000000000001', course_id: COURSE_ID, set_paket: 'B', topik: 'Git Dasar', tipe: 'pilihan_ganda', teks: 'Fungsi utama Git adalah...', urutan: 1, created_at: now() },
  { id: 'q7000003-0000-0000-0000-000000000002', course_id: COURSE_ID, set_paket: 'B', topik: 'Git Kolaborasi', tipe: 'pilihan_ganda', teks: 'Platform yang umum digunakan untuk kolaborasi Git adalah...', urutan: 2, created_at: now() },
  { id: 'q7000003-0000-0000-0000-000000000003', course_id: COURSE_ID, set_paket: 'B', topik: 'Git Kolaborasi', tipe: 'pilihan_ganda', teks: 'Repository dalam Git berfungsi sebagai...', urutan: 3, created_at: now() },
  { id: 'q7000003-0000-0000-0000-000000000004', course_id: COURSE_ID, set_paket: 'B', topik: 'Git Kolaborasi', tipe: 'pilihan_ganda', teks: 'Clone Repository digunakan untuk...', urutan: 4, created_at: now() },
  { id: 'q7000003-0000-0000-0000-000000000005', course_id: COURSE_ID, set_paket: 'B', topik: 'Git Branching', tipe: 'pilihan_ganda', teks: 'Branch dalam Git digunakan untuk...', urutan: 5, created_at: now() },
  { id: 'q7000003-0000-0000-0000-000000000006', course_id: COURSE_ID, set_paket: 'B', topik: 'Git Branching', tipe: 'pilihan_ganda', teks: 'Keuntungan menggunakan branch adalah...', urutan: 6, created_at: now() },
  { id: 'q7000003-0000-0000-0000-000000000007', course_id: COURSE_ID, set_paket: 'B', topik: 'Pull Request & Code Review', tipe: 'pilihan_ganda', teks: 'Pull Request digunakan untuk...', urutan: 7, created_at: now() },
  { id: 'q7000003-0000-0000-0000-000000000008', course_id: COURSE_ID, set_paket: 'B', topik: 'Pull Request & Code Review', tipe: 'pilihan_ganda', teks: 'Sebelum melakukan merge sebaiknya dilakukan...', urutan: 8, created_at: now() },
  { id: 'q7000003-0000-0000-0000-000000000009', course_id: COURSE_ID, set_paket: 'B', topik: 'Pull Request & Code Review', tipe: 'pilihan_ganda', teks: 'Code Review bertujuan untuk...', urutan: 9, created_at: now() },
  { id: 'q7000003-0000-0000-0000-000000000010', course_id: COURSE_ID, set_paket: 'B', topik: 'Git Merge', tipe: 'pilihan_ganda', teks: 'Merge adalah proses...', urutan: 10, created_at: now() },

  // ════════════ SET B – 5 Essay (Essay 6–10) ════════════
  { id: 'q7000004-0000-0000-0000-000000000001', course_id: COURSE_ID, set_paket: 'B', topik: 'Acceptance Criteria', tipe: 'essay', teks: 'Apa fungsi Acceptance Criteria?', urutan: 11, created_at: now() },
  { id: 'q7000004-0000-0000-0000-000000000002', course_id: COURSE_ID, set_paket: 'B', topik: 'Git Dasar', tipe: 'essay', teks: 'Jelaskan fungsi Git dalam pengembangan perangkat lunak!', urutan: 12, created_at: now() },
  { id: 'q7000004-0000-0000-0000-000000000003', course_id: COURSE_ID, set_paket: 'B', topik: 'Git Kolaborasi', tipe: 'essay', teks: 'Apa manfaat menggunakan GitHub dalam proyek tim?', urutan: 13, created_at: now() },
  { id: 'q7000004-0000-0000-0000-000000000004', course_id: COURSE_ID, set_paket: 'B', topik: 'Git Branching', tipe: 'essay', teks: 'Jelaskan perbedaan Repository dan Branch!', urutan: 14, created_at: now() },
  { id: 'q7000004-0000-0000-0000-000000000005', course_id: COURSE_ID, set_paket: 'B', topik: 'Pull Request & Code Review', tipe: 'essay', teks: 'Apa tujuan Pull Request (PR)?', urutan: 15, created_at: now() },

  // ════════════ SET C – 10 PG (Soal 21–30) ════════════
  { id: 'q7000005-0000-0000-0000-000000000001', course_id: COURSE_ID, set_paket: 'C', topik: 'Git Merge', tipe: 'pilihan_ganda', teks: 'Merge Conflict terjadi ketika...', urutan: 1, created_at: now() },
  { id: 'q7000005-0000-0000-0000-000000000002', course_id: COURSE_ID, set_paket: 'C', topik: 'Git Kolaborasi', tipe: 'pilihan_ganda', teks: 'Perintah yang sering digunakan untuk mengambil update dari branch utama adalah...', urutan: 2, created_at: now() },
  { id: 'q7000005-0000-0000-0000-000000000003', course_id: COURSE_ID, set_paket: 'C', topik: 'Git Kolaborasi', tipe: 'pilihan_ganda', teks: 'Pada repository tim, penggunaan git push --force sebaiknya...', urutan: 3, created_at: now() },
  { id: 'q7000005-0000-0000-0000-000000000004', course_id: COURSE_ID, set_paket: 'C', topik: 'Slicing Design', tipe: 'pilihan_ganda', teks: 'Slicing Design adalah proses...', urutan: 4, created_at: now() },
  { id: 'q7000005-0000-0000-0000-000000000005', course_id: COURSE_ID, set_paket: 'C', topik: 'Slicing Design', tipe: 'pilihan_ganda', teks: 'Tool desain yang paling sering digunakan sebelum slicing adalah...', urutan: 5, created_at: now() },
  { id: 'q7000005-0000-0000-0000-000000000006', course_id: COURSE_ID, set_paket: 'C', topik: 'Slicing Design', tipe: 'pilihan_ganda', teks: 'HTML semantik penting saat slicing karena...', urutan: 6, created_at: now() },
  { id: 'q7000005-0000-0000-0000-000000000007', course_id: COURSE_ID, set_paket: 'C', topik: 'Design Token', tipe: 'pilihan_ganda', teks: 'Design Token digunakan untuk menjaga...', urutan: 7, created_at: now() },
  { id: 'q7000005-0000-0000-0000-000000000008', course_id: COURSE_ID, set_paket: 'C', topik: 'Mobile-First', tipe: 'pilihan_ganda', teks: 'Pendekatan Mobile-First berarti...', urutan: 8, created_at: now() },
  { id: 'q7000005-0000-0000-0000-000000000009', course_id: COURSE_ID, set_paket: 'C', topik: 'Modular Development', tipe: 'pilihan_ganda', teks: 'Prinsip modular development bertujuan untuk...', urutan: 9, created_at: now() },
  { id: 'q7000005-0000-0000-0000-000000000010', course_id: COURSE_ID, set_paket: 'C', topik: 'Deliverable Modul 7', tipe: 'pilihan_ganda', teks: 'Output akhir Modul 7 yang paling lengkap adalah...', urutan: 10, created_at: now() },

  // ════════════ SET C – 5 Essay (Essay 11–15) ════════════
  { id: 'q7000006-0000-0000-0000-000000000001', course_id: COURSE_ID, set_paket: 'C', topik: 'Pull Request & Code Review', tipe: 'essay', teks: 'Mengapa Code Review penting?', urutan: 11, created_at: now() },
  { id: 'q7000006-0000-0000-0000-000000000002', course_id: COURSE_ID, set_paket: 'C', topik: 'Git Merge', tipe: 'essay', teks: 'Apa yang dimaksud dengan Merge Conflict?', urutan: 12, created_at: now() },
  { id: 'q7000006-0000-0000-0000-000000000003', course_id: COURSE_ID, set_paket: 'C', topik: 'Slicing Design', tipe: 'essay', teks: 'Apa yang dimaksud dengan Slicing Design?', urutan: 13, created_at: now() },
  { id: 'q7000006-0000-0000-0000-000000000004', course_id: COURSE_ID, set_paket: 'C', topik: 'Design Token', tipe: 'essay', teks: 'Mengapa Design Token penting dalam pengembangan frontend?', urutan: 14, created_at: now() },
  { id: 'q7000006-0000-0000-0000-000000000005', course_id: COURSE_ID, set_paket: 'C', topik: 'Mobile-First', tipe: 'essay', teks: 'Jelaskan prinsip Mobile-First dalam pengembangan website!', urutan: 15, created_at: now() }
];

// ─── OPTIONS (120 Opsi untuk 30 Soal PG) ──────────────────────────────────────
export const modul7Options = [
  // ════════════ SET A OPTIONS ════════════
  // Q1-A
  { id: 'o7-A1-1', question_id: 'q7000001-0000-0000-0000-000000000001', teks: 'Product Release Document', poin: 0, umpan_balik: 'Keliru. PRD bukan dokumen rilis produk.', is_correct: false },
  { id: 'o7-A1-2', question_id: 'q7000001-0000-0000-0000-000000000001', teks: 'Product Requirement Document', poin: 10, umpan_balik: 'Tepat! PRD adalah singkatan dari Product Requirement Document.', is_correct: true },
  { id: 'o7-A1-3', question_id: 'q7000001-0000-0000-0000-000000000001', teks: 'Project Requirement Data', poin: 0, umpan_balik: 'Keliru. Kepanjangan yang benar adalah Product Requirement Document.', is_correct: false },
  { id: 'o7-A1-4', question_id: 'q7000001-0000-0000-0000-000000000001', teks: 'Product Research Document', poin: 0, umpan_balik: 'Keliru. Riset hanya salah satu bagian input untuk menyusun PRD.', is_correct: false },
  // Q2-A
  { id: 'o7-A2-1', question_id: 'q7000001-0000-0000-0000-000000000002', teks: 'Menyimpan source code', poin: 0, umpan_balik: 'Keliru. Penyimpanan source code dilakukan di repository seperti GitHub.', is_correct: false },
  { id: 'o7-A2-2', question_id: 'q7000001-0000-0000-0000-000000000002', teks: 'Menjadi acuan pengembangan produk bagi tim', poin: 10, umpan_balik: 'Tepat! PRD menyelaraskan spesifikasi, scope, dan fitur sebagai acuan kerja tim.', is_correct: true },
  { id: 'o7-A2-3', question_id: 'q7000001-0000-0000-0000-000000000002', teks: 'Mendesain logo aplikasi', poin: 0, umpan_balik: 'Keliru. Desain logo adalah ranah visual branding.', is_correct: false },
  { id: 'o7-A2-4', question_id: 'q7000001-0000-0000-0000-000000000002', teks: 'Mengelola database', poin: 0, umpan_balik: 'Keliru. Pengelolaan database dilakukan melalui DBMS.', is_correct: false },
  // Q3-A
  { id: 'o7-A3-1', question_id: 'q7000001-0000-0000-0000-000000000003', teks: 'Jumlah pengguna', poin: 0, umpan_balik: 'Keliru. PRD tidak bertujuan mengurangi pengguna.', is_correct: false },
  { id: 'o7-A3-2', question_id: 'q7000001-0000-0000-0000-000000000003', teks: 'Bug aplikasi', poin: 0, umpan_balik: 'Keliru. Bug dikurangi melalui testing dan code review, sedangkan PRD menyamakan persepsi kebutuhan.', is_correct: false },
  { id: 'o7-A3-3', question_id: 'q7000001-0000-0000-0000-000000000003', teks: 'Miskomunikasi antar tim', poin: 10, umpan_balik: 'Tepat! PRD memastikan PM, Desainer, Developer, dan QA memiliki pemahaman yang seragam.', is_correct: true },
  { id: 'o7-A3-4', question_id: 'q7000001-0000-0000-0000-000000000003', teks: 'Kecepatan internet', poin: 0, umpan_balik: 'Keliru. Tidak berhubungan dengan konektivitas jaringan.', is_correct: false },
  // Q4-A
  { id: 'o7-A4-1', question_id: 'q7000001-0000-0000-0000-000000000004', teks: 'Menjelaskan kebutuhan pengguna dari perspektif pengguna', poin: 10, umpan_balik: 'Tepat! User Story berfokus pada peran, kebutuhan, dan manfaat dari sudut pandang pengguna.', is_correct: true },
  { id: 'o7-A4-2', question_id: 'q7000001-0000-0000-0000-000000000004', teks: 'Menjelaskan struktur database', poin: 0, umpan_balik: 'Keliru. Struktur database dijelaskan lewat ERD atau schema.sql.', is_correct: false },
  { id: 'o7-A4-3', question_id: 'q7000001-0000-0000-0000-000000000004', teks: 'Menjelaskan desain UI', poin: 0, umpan_balik: 'Keliru. Desain UI divisualisasikan melalui wireframe atau mockup.', is_correct: false },
  { id: 'o7-A4-4', question_id: 'q7000001-0000-0000-0000-000000000004', teks: 'Menjelaskan arsitektur server', poin: 0, umpan_balik: 'Keliru. Arsitektur server masuk ke dokumentasi teknis infrastruktur.', is_correct: false },
  // Q5-A
  { id: 'o7-A5-1', question_id: 'q7000001-0000-0000-0000-000000000005', teks: 'Sebagai [user], saya ingin [fitur], sehingga saya dapat [manfaat]', poin: 10, umpan_balik: 'Tepat! Format baku User Story mencakup peran (who), keinginan (what), dan nilai manfaat (why).', is_correct: true },
  { id: 'o7-A5-2', question_id: 'q7000001-0000-0000-0000-000000000005', teks: 'Saya ingin fitur karena aplikasi harus bagus', poin: 0, umpan_balik: 'Keliru. Format tersebut tidak menyebutkan peran pengguna dan manfaat terukur.', is_correct: false },
  { id: 'o7-A5-3', question_id: 'q7000001-0000-0000-0000-000000000005', teks: 'Developer membuat fitur untuk pengguna', poin: 0, umpan_balik: 'Keliru. User Story ditulis dari sudut pandang pengguna, bukan developer.', is_correct: false },
  { id: 'o7-A5-4', question_id: 'q7000001-0000-0000-0000-000000000005', teks: 'Sistem harus berjalan cepat', poin: 0, umpan_balik: 'Keliru. Itu adalah contoh kebutuhan non-fungsional, bukan format User Story.', is_correct: false },
  // Q6-A
  { id: 'o7-A6-1', question_id: 'q7000001-0000-0000-0000-000000000006', teks: 'Most Valuable Product', poin: 0, umpan_balik: 'Keliru. Kepanjangan yang benar adalah Minimum Viable Product.', is_correct: false },
  { id: 'o7-A6-2', question_id: 'q7000001-0000-0000-0000-000000000006', teks: 'Minimum Viable Product', poin: 10, umpan_balik: 'Tepat! MVP adalah Minimum Viable Product.', is_correct: true },
  { id: 'o7-A6-3', question_id: 'q7000001-0000-0000-0000-000000000006', teks: 'Main Validation Product', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o7-A6-4', question_id: 'q7000001-0000-0000-0000-000000000006', teks: 'Modern Visual Product', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  // Q7-A
  { id: 'o7-A7-1', question_id: 'q7000001-0000-0000-0000-000000000007', teks: 'Merilis seluruh fitur sekaligus', poin: 0, umpan_balik: 'Keliru. Merilis semua fitur sekaligus justru bertentangan dengan prinsip MVP.', is_correct: false },
  { id: 'o7-A7-2', question_id: 'q7000001-0000-0000-0000-000000000007', teks: 'Validasi ide dengan fitur inti terlebih dahulu', poin: 10, umpan_balik: 'Tepat! MVP berfokus pada fitur inti terpenting untuk memvalidasi pasar secara cepat dan hemat biaya.', is_correct: true },
  { id: 'o7-A7-3', question_id: 'q7000001-0000-0000-0000-000000000007', teks: 'Menghindari testing', poin: 0, umpan_balik: 'Keliru. MVP justru dibuat agar produk bisa segera diuji ke pengguna nyata.', is_correct: false },
  { id: 'o7-A7-4', question_id: 'q7000001-0000-0000-0000-000000000007', teks: 'Menggantikan PRD', poin: 0, umpan_balik: 'Keliru. Ruang lingkup MVP justru dirumuskan di dalam PRD.', is_correct: false },
  // Q8-A
  { id: 'o7-A8-1', question_id: 'q7000001-0000-0000-0000-000000000008', teks: 'Menentukan harga produk', poin: 0, umpan_balik: 'Keliru. Penentuan harga merupakan strategi bisnis.', is_correct: false },
  { id: 'o7-A8-2', question_id: 'q7000001-0000-0000-0000-000000000008', teks: 'Menentukan apakah fitur dianggap selesai', poin: 10, umpan_balik: 'Tepat! Acceptance Criteria menjadi tolok ukur objektif (Definition of Done) suatu fitur.', is_correct: true },
  { id: 'o7-A8-3', question_id: 'q7000001-0000-0000-0000-000000000008', teks: 'Menentukan warna UI', poin: 0, umpan_balik: 'Keliru. Warna UI diatur dalam Design System / Design Token.', is_correct: false },
  { id: 'o7-A8-4', question_id: 'q7000001-0000-0000-0000-000000000008', teks: 'Menentukan branch Git', poin: 0, umpan_balik: 'Keliru. Penamaan branch mengikuti konvensi Git workflow tim.', is_correct: false },
  // Q9-A
  { id: 'o7-A9-1', question_id: 'q7000001-0000-0000-0000-000000000009', teks: 'Menghasilkan draft kebutuhan produk secara cepat', poin: 10, umpan_balik: 'Tepat! AI mempercepat penyusunan struktur, user story, dan edge cases untuk kemudian direview tim.', is_correct: true },
  { id: 'o7-A9-2', question_id: 'q7000001-0000-0000-0000-000000000009', teks: 'Menggantikan programmer sepenuhnya', poin: 0, umpan_balik: 'Keliru. AI adalah alat bantu (co-pilot), bukan pengganti keputusan teknis manusia.', is_correct: false },
  { id: 'o7-A9-3', question_id: 'q7000001-0000-0000-0000-000000000009', teks: 'Menjalankan website', poin: 0, umpan_balik: 'Keliru. Website dijalankan oleh web server / hosting.', is_correct: false },
  { id: 'o7-A9-4', question_id: 'q7000001-0000-0000-0000-000000000009', teks: 'Mengelola server', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  // Q10-A
  { id: 'o7-A10-1', question_id: 'q7000001-0000-0000-0000-000000000010', teks: 'Framework Frontend', poin: 0, umpan_balik: 'Keliru. Contoh framework frontend adalah React atau Vue.', is_correct: false },
  { id: 'o7-A10-2', question_id: 'q7000001-0000-0000-0000-000000000010', teks: 'Version Control System', poin: 10, umpan_balik: 'Tepat! Git adalah sistem pengontrol versi terdistribusi untuk melacak perubahan kode.', is_correct: true },
  { id: 'o7-A10-3', question_id: 'q7000001-0000-0000-0000-000000000010', teks: 'Database Management System', poin: 0, umpan_balik: 'Keliru. Contoh DBMS adalah PostgreSQL atau MySQL.', is_correct: false },
  { id: 'o7-A10-4', question_id: 'q7000001-0000-0000-0000-000000000010', teks: 'Operating System', poin: 0, umpan_balik: 'Keliru. Contoh OS adalah Linux, Windows, atau macOS.', is_correct: false },

  // ════════════ SET B OPTIONS ════════════
  // Q1-B (Soal 11)
  { id: 'o7-B1-1', question_id: 'q7000003-0000-0000-0000-000000000001', teks: 'Menyimpan riwayat perubahan kode', poin: 10, umpan_balik: 'Tepat! Git mencatat setiap riwayat commit sehingga kode dapat dilacak maupun dikembalikan.', is_correct: true },
  { id: 'o7-B1-2', question_id: 'q7000003-0000-0000-0000-000000000001', teks: 'Mendesain UI', poin: 0, umpan_balik: 'Keliru. Mendesain UI menggunakan Figma.', is_correct: false },
  { id: 'o7-B1-3', question_id: 'q7000003-0000-0000-0000-000000000001', teks: 'Menjalankan backend', poin: 0, umpan_balik: 'Keliru. Backend dijalankan oleh runtime seperti Node.js.', is_correct: false },
  { id: 'o7-B1-4', question_id: 'q7000003-0000-0000-0000-000000000001', teks: 'Membuat database', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  // Q2-B (Soal 12)
  { id: 'o7-B2-1', question_id: 'q7000003-0000-0000-0000-000000000002', teks: 'MySQL', poin: 0, umpan_balik: 'Keliru. MySQL adalah sistem basis data relasional.', is_correct: false },
  { id: 'o7-B2-2', question_id: 'q7000003-0000-0000-0000-000000000002', teks: 'GitHub', poin: 10, umpan_balik: 'Tepat! GitHub adalah platform cloud populer untuk hosting repository Git dan kolaborasi tim.', is_correct: true },
  { id: 'o7-B2-3', question_id: 'q7000003-0000-0000-0000-000000000002', teks: 'Figma', poin: 0, umpan_balik: 'Keliru. Figma digunakan untuk kolaborasi desain UI/UX.', is_correct: false },
  { id: 'o7-B2-4', question_id: 'q7000003-0000-0000-0000-000000000002', teks: 'Canva', poin: 0, umpan_balik: 'Keliru. Canva adalah alat desain grafis.', is_correct: false },
  // Q3-B (Soal 13)
  { id: 'o7-B3-1', question_id: 'q7000003-0000-0000-0000-000000000003', teks: 'Tempat menyimpan proyek dan riwayatnya', poin: 10, umpan_balik: 'Tepat! Repository menyimpan seluruh file proyek beserta log revisi perubahannya.', is_correct: true },
  { id: 'o7-B3-2', question_id: 'q7000003-0000-0000-0000-000000000003', teks: 'Tempat menyimpan desain Figma', poin: 0, umpan_balik: 'Keliru. File desain Figma disimpan di cloud Figma.', is_correct: false },
  { id: 'o7-B3-3', question_id: 'q7000003-0000-0000-0000-000000000003', teks: 'Tempat menyimpan database cloud', poin: 0, umpan_balik: 'Keliru. Database cloud dikelola oleh layanan seperti Supabase.', is_correct: false },
  { id: 'o7-B3-4', question_id: 'q7000003-0000-0000-0000-000000000003', teks: 'Tempat membuat wireframe', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  // Q4-B (Soal 14)
  { id: 'o7-B4-1', question_id: 'q7000003-0000-0000-0000-000000000004', teks: 'Menghapus repository', poin: 0, umpan_balik: 'Keliru. Clone tidak menghapus repository.', is_correct: false },
  { id: 'o7-B4-2', question_id: 'q7000003-0000-0000-0000-000000000004', teks: 'Menyalin repository ke komputer lokal', poin: 10, umpan_balik: 'Tepat! Perintah git clone mengunduh salinan lengkap repository beserta riwayatnya ke perangkat lokal.', is_correct: true },
  { id: 'o7-B4-3', question_id: 'q7000003-0000-0000-0000-000000000004', teks: 'Membuat website online', poin: 0, umpan_balik: 'Keliru. Membuat website online disebut deployment.', is_correct: false },
  { id: 'o7-B4-4', question_id: 'q7000003-0000-0000-0000-000000000004', teks: 'Mengubah branch utama', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  // Q5-B (Soal 15)
  { id: 'o7-B5-1', question_id: 'q7000003-0000-0000-0000-000000000005', teks: 'Membuat jalur pengembangan terpisah', poin: 10, umpan_balik: 'Tepat! Branch mengisolasi pengerjaan fitur atau perbaikan bug tanpa mengganggu branch utama.', is_correct: true },
  { id: 'o7-B5-2', question_id: 'q7000003-0000-0000-0000-000000000005', teks: 'Membuat database baru', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o7-B5-3', question_id: 'q7000003-0000-0000-0000-000000000005', teks: 'Menjalankan aplikasi', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o7-B5-4', question_id: 'q7000003-0000-0000-0000-000000000005', teks: 'Menyimpan gambar', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  // Q6-B (Soal 16)
  { id: 'o7-B6-1', question_id: 'q7000003-0000-0000-0000-000000000006', teks: 'Menghindari modifikasi langsung pada kode utama', poin: 10, umpan_balik: 'Tepat! Kode di branch main/production tetap stabil sementara fitur baru dikerjakan di branch terpisah.', is_correct: true },
  { id: 'o7-B6-2', question_id: 'q7000003-0000-0000-0000-000000000006', teks: 'Membuat internet lebih cepat', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o7-B6-3', question_id: 'q7000003-0000-0000-0000-000000000006', teks: 'Menghilangkan bug otomatis', poin: 0, umpan_balik: 'Keliru. Bug tetap harus diperbaiki oleh developer.', is_correct: false },
  { id: 'o7-B6-4', question_id: 'q7000003-0000-0000-0000-000000000006', teks: 'Mengurangi ukuran aplikasi', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  // Q7-B (Soal 17)
  { id: 'o7-B7-1', question_id: 'q7000003-0000-0000-0000-000000000007', teks: 'Menghapus branch', poin: 0, umpan_balik: 'Keliru. Penghapusan branch dilakukan setelah PR di-merge.', is_correct: false },
  { id: 'o7-B7-2', question_id: 'q7000003-0000-0000-0000-000000000007', teks: 'Meminta penggabungan dan review kode', poin: 10, umpan_balik: 'Tepat! Pull Request mengajukan perubahan dari feature branch agar ditinjau rekan tim sebelum di-merge.', is_correct: true },
  { id: 'o7-B7-3', question_id: 'q7000003-0000-0000-0000-000000000007', teks: 'Mengganti repository', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o7-B7-4', question_id: 'q7000003-0000-0000-0000-000000000007', teks: 'Menjalankan website', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  // Q8-B (Soal 18)
  { id: 'o7-B8-1', question_id: 'q7000003-0000-0000-0000-000000000008', teks: 'User Research', poin: 0, umpan_balik: 'Keliru. User research dilakukan sebelum fase pengembangan fitur.', is_correct: false },
  { id: 'o7-B8-2', question_id: 'q7000003-0000-0000-0000-000000000008', teks: 'Code Review', poin: 10, umpan_balik: 'Tepat! Code Review wajib dilakukan sebelum merge untuk memastikan kode bersih dan bebas bug.', is_correct: true },
  { id: 'o7-B8-3', question_id: 'q7000003-0000-0000-0000-000000000008', teks: 'UI Design', poin: 0, umpan_balik: 'Keliru. UI Design dibuat sebelum proses coding.', is_correct: false },
  { id: 'o7-B8-4', question_id: 'q7000003-0000-0000-0000-000000000008', teks: 'Deployment', poin: 0, umpan_balik: 'Keliru. Deployment umumnya berjalan setelah kode lolos review dan di-merge.', is_correct: false },
  // Q9-B (Soal 19)
  { id: 'o7-B9-1', question_id: 'q7000003-0000-0000-0000-000000000009', teks: 'Meningkatkan kualitas kode', poin: 10, umpan_balik: 'Tepat! Code Review menjaga kualitas kode, mendeteksi bug dini, dan menyamakan standar tim.', is_correct: true },
  { id: 'o7-B9-2', question_id: 'q7000003-0000-0000-0000-000000000009', teks: 'Mempercepat internet', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o7-B9-3', question_id: 'q7000003-0000-0000-0000-000000000009', teks: 'Mengurangi database', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o7-B9-4', question_id: 'q7000003-0000-0000-0000-000000000009', teks: 'Menghapus branch', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  // Q10-B (Soal 20)
  { id: 'o7-B10-1', question_id: 'q7000003-0000-0000-0000-000000000010', teks: 'Menghapus repository', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o7-B10-2', question_id: 'q7000003-0000-0000-0000-000000000010', teks: 'Menggabungkan perubahan dari branch lain', poin: 10, umpan_balik: 'Tepat! Merge menyatukan riwayat commit dari satu branch ke branch tujuan.', is_correct: true },
  { id: 'o7-B10-3', question_id: 'q7000003-0000-0000-0000-000000000010', teks: 'Menjalankan server', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o7-B10-4', question_id: 'q7000003-0000-0000-0000-000000000010', teks: 'Membuat akun GitHub', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // ════════════ SET C OPTIONS ════════════
  // Q1-C (Soal 21)
  { id: 'o7-C1-1', question_id: 'q7000005-0000-0000-0000-000000000001', teks: 'Dua perubahan kode bertabrakan', poin: 10, umpan_balik: 'Tepat! Merge Conflict muncul saat dua branch mengubah baris kode yang sama secara berbeda.', is_correct: true },
  { id: 'o7-C1-2', question_id: 'q7000005-0000-0000-0000-000000000001', teks: 'Koneksi internet lambat', poin: 0, umpan_balik: 'Keliru. Merge conflict terjadi pada level versi kode, bukan jaringan.', is_correct: false },
  { id: 'o7-C1-3', question_id: 'q7000005-0000-0000-0000-000000000001', teks: 'Repository kosong', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o7-C1-4', question_id: 'q7000005-0000-0000-0000-000000000001', teks: 'Tidak ada branch', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  // Q2-C (Soal 22)
  { id: 'o7-C2-1', question_id: 'q7000005-0000-0000-0000-000000000002', teks: 'git create main', poin: 0, umpan_balik: 'Keliru. Bukan perintah standar Git.', is_correct: false },
  { id: 'o7-C2-2', question_id: 'q7000005-0000-0000-0000-000000000002', teks: 'git run branch', poin: 0, umpan_balik: 'Keliru. Bukan perintah standar Git.', is_correct: false },
  { id: 'o7-C2-3', question_id: 'q7000005-0000-0000-0000-000000000002', teks: 'git pull origin main', poin: 10, umpan_balik: 'Tepat! git pull origin main mengambil sekaligus menggabungkan pembaruan terbaru dari remote main.', is_correct: true },
  { id: 'o7-C2-4', question_id: 'q7000005-0000-0000-0000-000000000002', teks: 'git start', poin: 0, umpan_balik: 'Keliru. Bukan perintah standar Git.', is_correct: false },
  // Q3-C (Soal 23)
  { id: 'o7-C3-1', question_id: 'q7000005-0000-0000-0000-000000000003', teks: 'Selalu digunakan', poin: 0, umpan_balik: 'Keliru. Penggunaan --force secara sembarangan sangat berbahaya pada repo bersama.', is_correct: false },
  { id: 'o7-C3-2', question_id: 'q7000005-0000-0000-0000-000000000003', teks: 'Dihindari karena dapat menimpa pekerjaan anggota lain', poin: 10, umpan_balik: 'Tepat! git push --force menulis ulang riwayat commit remote sehingga berisiko menghapus kerja tim.', is_correct: true },
  { id: 'o7-C3-3', question_id: 'q7000005-0000-0000-0000-000000000003', teks: 'Digunakan setiap hari', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o7-C3-4', question_id: 'q7000005-0000-0000-0000-000000000003', teks: 'Wajib dilakukan sebelum merge', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  // Q4-C (Soal 24)
  { id: 'o7-C4-1', question_id: 'q7000005-0000-0000-0000-000000000004', teks: 'Membagi database menjadi beberapa tabel', poin: 0, umpan_balik: 'Keliru. Itu disebut normalisasi atau partisi tabel database.', is_correct: false },
  { id: 'o7-C4-2', question_id: 'q7000005-0000-0000-0000-000000000004', teks: 'Mengubah desain menjadi kode frontend', poin: 10, umpan_balik: 'Tepat! Slicing Design menerjemahkan mockup UI (misal dari Figma) ke HTML, CSS, dan komponen frontend.', is_correct: true },
  { id: 'o7-C4-3', question_id: 'q7000005-0000-0000-0000-000000000004', teks: 'Menghapus komponen desain', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o7-C4-4', question_id: 'q7000005-0000-0000-0000-000000000004', teks: 'Menambahkan animasi', poin: 0, umpan_balik: 'Keliru. Animasi hanyalah salah satu detail interaktif, bukan definisi slicing.', is_correct: false },
  // Q5-C (Soal 25)
  { id: 'o7-C5-1', question_id: 'q7000005-0000-0000-0000-000000000005', teks: 'MySQL', poin: 0, umpan_balik: 'Keliru. MySQL adalah database.', is_correct: false },
  { id: 'o7-C5-2', question_id: 'q7000005-0000-0000-0000-000000000005', teks: 'Figma', poin: 10, umpan_balik: 'Tepat! Figma menyediakan fitur inspect properti CSS, ukuran, warna, dan ekspor aset untuk slicing.', is_correct: true },
  { id: 'o7-C5-3', question_id: 'q7000005-0000-0000-0000-000000000005', teks: 'PostgreSQL', poin: 0, umpan_balik: 'Keliru. PostgreSQL adalah database.', is_correct: false },
  { id: 'o7-C5-4', question_id: 'q7000005-0000-0000-0000-000000000005', teks: 'MongoDB', poin: 0, umpan_balik: 'Keliru. MongoDB adalah database NoSQL.', is_correct: false },
  // Q6-C (Soal 26)
  { id: 'o7-C6-1', question_id: 'q7000005-0000-0000-0000-000000000006', teks: 'Membuat struktur kode lebih bermakna dan mudah dipahami', poin: 10, umpan_balik: 'Tepat! Tag semantik meningkatkan keterbacaan kode, aksesibilitas screen reader, dan SEO.', is_correct: true },
  { id: 'o7-C6-2', question_id: 'q7000005-0000-0000-0000-000000000006', teks: 'Memperbesar ukuran file', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o7-C6-3', question_id: 'q7000005-0000-0000-0000-000000000006', teks: 'Mengurangi jumlah halaman', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o7-C6-4', question_id: 'q7000005-0000-0000-0000-000000000006', teks: 'Menggantikan CSS', poin: 0, umpan_balik: 'Keliru. CSS tetap diperlukan untuk mengatur tata letak dan tampilan visual.', is_correct: false },
  // Q7-C (Soal 27)
  { id: 'o7-C7-1', question_id: 'q7000005-0000-0000-0000-000000000007', teks: 'Konsistensi warna, font, dan spacing', poin: 10, umpan_balik: 'Tepat! Design Token menyimpan nilai desain dalam variabel terpusat agar UI konsisten.', is_correct: true },
  { id: 'o7-C7-2', question_id: 'q7000005-0000-0000-0000-000000000007', teks: 'Ukuran database', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o7-C7-3', question_id: 'q7000005-0000-0000-0000-000000000007', teks: 'Kecepatan server', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o7-C7-4', question_id: 'q7000005-0000-0000-0000-000000000007', teks: 'Jumlah pengguna', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  // Q8-C (Soal 28)
  { id: 'o7-C8-1', question_id: 'q7000005-0000-0000-0000-000000000008', teks: 'Mendesain untuk mobile terlebih dahulu sebelum desktop', poin: 10, umpan_balik: 'Tepat! Mobile-First memprioritaskan layar kecil terlebih dahulu lalu memperluas layout ke tablet dan desktop.', is_correct: true },
  { id: 'o7-C8-2', question_id: 'q7000005-0000-0000-0000-000000000008', teks: 'Hanya mendukung Android', poin: 0, umpan_balik: 'Keliru. Mobile-First berlaku lintas perangkat.', is_correct: false },
  { id: 'o7-C8-3', question_id: 'q7000005-0000-0000-0000-000000000008', teks: 'Mengabaikan desktop', poin: 0, umpan_balik: 'Keliru. Tampilan desktop tetap dioptimalkan melalui media query / breakpoint.', is_correct: false },
  { id: 'o7-C8-4', question_id: 'q7000005-0000-0000-0000-000000000008', teks: 'Membuat aplikasi mobile saja', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  // Q9-C (Soal 29)
  { id: 'o7-C9-1', question_id: 'q7000005-0000-0000-0000-000000000009', teks: 'Memecah aplikasi menjadi bagian-bagian yang mudah dikelola', poin: 10, umpan_balik: 'Tepat! Modular development memecah kode menjadi komponen kecil yang reusable dan mudah dirawat.', is_correct: true },
  { id: 'o7-C9-2', question_id: 'q7000005-0000-0000-0000-000000000009', teks: 'Membuat kode lebih panjang', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o7-C9-3', question_id: 'q7000005-0000-0000-0000-000000000009', teks: 'Mengurangi jumlah fitur', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o7-C9-4', question_id: 'q7000005-0000-0000-0000-000000000009', teks: 'Menghapus komponen UI', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  // Q10-C (Soal 30)
  { id: 'o7-C10-1', question_id: 'q7000005-0000-0000-0000-000000000010', teks: 'Logo dan poster aplikasi', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o7-C10-2', question_id: 'q7000005-0000-0000-0000-000000000010', teks: 'PRD, Repository GitHub Kolaboratif, dan Prototype Responsif', poin: 10, umpan_balik: 'Tepat! Output lengkap Modul 7 mencakup dokumen PRD, alur kolaborasi GitHub, dan hasil slicing responsif.', is_correct: true },
  { id: 'o7-C10-3', question_id: 'q7000005-0000-0000-0000-000000000010', teks: 'Database dan hosting', poin: 0, umpan_balik: 'Keliru. Integrasi database dan deploy dibahas pada Modul 8.', is_correct: false },
  { id: 'o7-C10-4', question_id: 'q7000005-0000-0000-0000-000000000010', teks: 'Landing page saja', poin: 0, umpan_balik: 'Keliru. Terlalu sempit dan tidak mencakup aspek PRD serta kolaborasi Git.', is_correct: false }
];

// ─── ESSAY RUBRICS (15 Rubrik Penilaian) ─────────────────────────────────────
export const modul7Rubrics = [
  // ════════════ SET A ESSAY RUBRICS (Essay 1–5) ════════════
  {
    id: 'er-7000001-0000-0000-0000-000000000001',
    question_id: 'q7000002-0000-0000-0000-000000000001',
    kunci_jawaban: 'PRD adalah dokumen yang menjelaskan kebutuhan, tujuan, fitur, ruang lingkup, dan spesifikasi suatu produk sehingga seluruh tim memiliki pemahaman yang sama dalam proses pengembangan.',
    kata_kunci: ['prd', 'kebutuhan produk', 'fitur', 'ruang lingkup', 'spesifikasi', 'acuan tim'],
    rubrik_skor: {
      '10': 'Menjelaskan definisi PRD beserta kebutuhan, fitur, ruang lingkup, dan fungsinya sebagai acuan tim',
      '9': 'PRD adalah dokumen yang menjelaskan kebutuhan dan fitur produk',
      '8': 'PRD adalah dokumen perencanaan produk (belum menjelaskan fungsi acuan bersama tim dan ruang lingkup)',
      '7': 'PRD adalah dokumen proyek (terlalu umum)',
      '0': 'Tidak relevan'
    },
    created_at: now()
  },
  {
    id: 'er-7000001-0000-0000-0000-000000000002',
    question_id: 'q7000002-0000-0000-0000-000000000002',
    kunci_jawaban: 'PRD penting karena menyelaraskan pemahaman seluruh tim, mengurangi miskomunikasi, menjadi acuan pengembangan, dan membantu memastikan produk dibangun sesuai kebutuhan pengguna dan bisnis.',
    kata_kunci: ['acuan tim', 'komunikasi', 'miskomunikasi', 'kebutuhan pengguna', 'pengembangan produk', 'sinkronisasi tim'],
    rubrik_skor: {
      '10': 'Menjelaskan penyelarasan tim, pengurangan miskomunikasi, dan acuan kebutuhan pengguna/bisnis',
      '9': 'PRD membantu tim memiliki tujuan yang sama',
      '8': 'PRD membantu proses pengembangan (belum menjelaskan komunikasi tim)',
      '7': 'PRD digunakan sebelum coding (hanya menjelaskan urutan proses)',
      '0': 'Tidak relevan'
    },
    created_at: now()
  },
  {
    id: 'er-7000001-0000-0000-0000-000000000003',
    question_id: 'q7000002-0000-0000-0000-000000000003',
    kunci_jawaban: 'User Story adalah deskripsi kebutuhan pengguna dari sudut pandang pengguna yang menjelaskan apa yang ingin dicapai dan manfaat yang diperoleh.',
    kata_kunci: ['user story', 'kebutuhan pengguna', 'perspektif pengguna', 'sudut pandang pengguna', 'manfaat'],
    rubrik_skor: {
      '10': 'Menjelaskan deskripsi kebutuhan dari perspektif pengguna beserta tujuan dan manfaatnya',
      '9': 'Konsep inti benar namun 1 unsur penjelas belum disebutkan',
      '8': 'Sekitar 60% konsep benar dan penjelasan masih umum',
      '7': 'Hanya menyebut ide umum tanpa kedalaman konsep',
      '0': 'Tidak relevan'
    },
    created_at: now()
  },
  {
    id: 'er-7000001-0000-0000-0000-000000000004',
    question_id: 'q7000002-0000-0000-0000-000000000004',
    kunci_jawaban: 'Sebagai [jenis pengguna], saya ingin [fitur/kebutuhan], sehingga saya dapat [manfaat/tujuan].',
    kata_kunci: ['sebagai pengguna', 'saya ingin', 'sehingga saya dapat'],
    rubrik_skor: {
      '10': 'Menuliskan format lengkap User Story (Sebagai pengguna, saya ingin fitur, sehingga saya dapat manfaat)',
      '9': 'Format inti benar namun kurang 1 bagian penjelas',
      '8': 'Menuliskan sebagian struktur User Story',
      '7': 'Hanya menjelaskan pengertian umum User Story tanpa format',
      '0': 'Tidak relevan'
    },
    created_at: now()
  },
  {
    id: 'er-7000001-0000-0000-0000-000000000005',
    question_id: 'q7000002-0000-0000-0000-000000000005',
    kunci_jawaban: 'MVP adalah versi awal produk yang hanya memiliki fitur inti yang cukup untuk memberikan nilai kepada pengguna dan memperoleh validasi pasar.',
    kata_kunci: ['mvp', 'fitur inti', 'validasi', 'pengguna', 'pasar'],
    rubrik_skor: {
      '10': 'Menjelaskan versi awal produk dengan fitur inti untuk memberikan nilai dan validasi pasar',
      '9': 'MVP adalah produk awal dengan fitur penting saja',
      '8': 'MVP adalah produk sederhana (belum menjelaskan tujuan validasi)',
      '7': 'MVP adalah produk pertama (tidak menjelaskan fokus fitur inti)',
      '0': 'Tidak relevan'
    },
    created_at: now()
  },

  // ════════════ SET B ESSAY RUBRICS (Essay 6–10) ════════════
  {
    id: 'er-7000001-0000-0000-0000-000000000006',
    question_id: 'q7000004-0000-0000-0000-000000000001',
    kunci_jawaban: 'Acceptance Criteria adalah kondisi atau standar yang harus terpenuhi agar suatu fitur dianggap selesai dan sesuai kebutuhan.',
    kata_kunci: ['acceptance criteria', 'standar', 'kondisi', 'fitur selesai', 'validasi'],
    rubrik_skor: {
      '10': 'Menjelaskan standar atau kondisi yang wajib terpenuhi agar fitur dianggap selesai dan valid',
      '9': 'Konsep inti benar namun kurang 1 unsur penting',
      '8': 'Penjelasan masih umum tentang syarat fitur',
      '7': 'Ide umum tanpa kedalaman konsep',
      '0': 'Tidak relevan'
    },
    created_at: now()
  },
  {
    id: 'er-7000001-0000-0000-0000-000000000007',
    question_id: 'q7000004-0000-0000-0000-000000000002',
    kunci_jawaban: 'Git adalah sistem version control yang digunakan untuk melacak perubahan kode, mendukung kolaborasi tim, dan mengelola riwayat pengembangan proyek.',
    kata_kunci: ['git', 'version control', 'riwayat perubahan', 'melacak perubahan', 'kolaborasi'],
    rubrik_skor: {
      '10': 'Menjelaskan Git sebagai version control untuk melacak riwayat perubahan dan mendukung kolaborasi tim',
      '9': 'Konsep inti benar namun kurang 1 unsur penting',
      '8': 'Penjelasan umum tentang penyimpanan kode di Git',
      '7': 'Ide umum tanpa kedalaman konsep',
      '0': 'Tidak relevan'
    },
    created_at: now()
  },
  {
    id: 'er-7000001-0000-0000-0000-000000000008',
    question_id: 'q7000004-0000-0000-0000-000000000003',
    kunci_jawaban: 'GitHub mempermudah penyimpanan kode, kolaborasi tim, code review, pengelolaan branch, dan integrasi pengembangan secara terpusat.',
    kata_kunci: ['github', 'repository', 'kolaborasi', 'code review', 'branch'],
    rubrik_skor: {
      '10': 'Menjelaskan penyimpanan repository terpusat, kolaborasi tim, code review, dan pengelolaan branch',
      '9': 'Konsep inti benar namun kurang 1 unsur penting',
      '8': 'Penjelasan umum tentang kerja sama tim di GitHub',
      '7': 'Ide umum tanpa kedalaman konsep',
      '0': 'Tidak relevan'
    },
    created_at: now()
  },
  {
    id: 'er-7000001-0000-0000-0000-000000000009',
    question_id: 'q7000004-0000-0000-0000-000000000004',
    kunci_jawaban: 'Repository adalah tempat penyimpanan seluruh proyek beserta riwayatnya, sedangkan Branch adalah cabang kerja terpisah yang digunakan untuk mengembangkan fitur atau perubahan tertentu.',
    kata_kunci: ['repository', 'branch', 'penyimpanan proyek', 'cabang kerja', 'terpisah'],
    rubrik_skor: {
      '10': 'Membedakan repository (penyimpanan seluruh proyek & riwayat) dengan branch (cabang kerja terpisah)',
      '9': 'Konsep inti benar namun kurang 1 unsur penting',
      '8': 'Menjelaskan definisi umum tanpa perbandingan yang tajam',
      '7': 'Ide umum tanpa kedalaman konsep',
      '0': 'Tidak relevan'
    },
    created_at: now()
  },
  {
    id: 'er-7000001-0000-0000-0000-000000000010',
    question_id: 'q7000004-0000-0000-0000-000000000005',
    kunci_jawaban: 'Pull Request digunakan untuk meminta peninjauan (review) dan penggabungan perubahan kode dari suatu branch ke branch lain.',
    kata_kunci: ['pull request', 'review', 'peninjauan', 'merge', 'penggabungan', 'branch'],
    rubrik_skor: {
      '10': 'Menjelaskan fungsi PR untuk meminta review dan penggabungan (merge) perubahan antar branch',
      '9': 'Konsep inti benar namun kurang 1 unsur penting',
      '8': 'Penjelasan umum tentang menggabungkan branch',
      '7': 'Ide umum tanpa kedalaman konsep',
      '0': 'Tidak relevan'
    },
    created_at: now()
  },

  // ════════════ SET C ESSAY RUBRICS (Essay 11–15) ════════════
  {
    id: 'er-7000001-0000-0000-0000-000000000011',
    question_id: 'q7000006-0000-0000-0000-000000000001',
    kunci_jawaban: 'Code Review membantu meningkatkan kualitas kode, menemukan bug lebih awal, menjaga konsistensi standar coding, dan mendukung pembelajaran antar anggota tim.',
    kata_kunci: ['code review', 'kualitas kode', 'bug', 'standar coding', 'kolaborasi'],
    rubrik_skor: {
      '10': 'Menjelaskan peningkatan kualitas kode, deteksi bug lebih awal, dan konsistensi standar coding tim',
      '9': 'Konsep inti benar namun kurang 1 unsur penting',
      '8': 'Penjelasan umum tentang memeriksa kode rekan',
      '7': 'Ide umum tanpa kedalaman konsep',
      '0': 'Tidak relevan'
    },
    created_at: now()
  },
  {
    id: 'er-7000001-0000-0000-0000-000000000012',
    question_id: 'q7000006-0000-0000-0000-000000000002',
    kunci_jawaban: 'Merge Conflict terjadi ketika Git tidak dapat menggabungkan perubahan secara otomatis karena terdapat perubahan yang saling bertabrakan pada bagian kode yang sama.',
    kata_kunci: ['merge conflict', 'konflik perubahan', 'kode bertabrakan', 'git', 'bagian kode yang sama'],
    rubrik_skor: {
      '10': 'Menjelaskan Git gagal merge otomatis karena ada perubahan bertabrakan pada bagian kode yang sama',
      '9': 'Merge Conflict terjadi ketika dua perubahan tidak bisa digabung otomatis',
      '8': 'Merge Conflict adalah error saat merge (belum menjelaskan penyebab konflik perubahan kode)',
      '7': 'Merge Conflict terjadi di Git (tidak menjelaskan definisinya)',
      '0': 'Tidak relevan'
    },
    created_at: now()
  },
  {
    id: 'er-7000001-0000-0000-0000-000000000013',
    question_id: 'q7000006-0000-0000-0000-000000000003',
    kunci_jawaban: 'Slicing Design adalah proses menerjemahkan desain UI dari tools seperti Figma menjadi kode frontend yang dapat dijalankan pada aplikasi atau website.',
    kata_kunci: ['slicing design', 'figma', 'frontend', 'implementasi kode', 'desain ui'],
    rubrik_skor: {
      '10': 'Menjelaskan proses menerjemahkan desain UI (seperti Figma) menjadi kode frontend web/aplikasi',
      '9': 'Konsep inti benar namun kurang 1 unsur penting',
      '8': 'Penjelasan umum mengubah desain menjadi tampilan web',
      '7': 'Ide umum tanpa kedalaman konsep',
      '0': 'Tidak relevan'
    },
    created_at: now()
  },
  {
    id: 'er-7000001-0000-0000-0000-000000000014',
    question_id: 'q7000006-0000-0000-0000-000000000004',
    kunci_jawaban: 'Design Token menjaga konsistensi warna, tipografi, spacing, dan elemen visual lainnya sehingga desain lebih mudah dikelola dan diimplementasikan.',
    kata_kunci: ['design token', 'konsistensi', 'warna', 'typography', 'tipografi', 'spacing'],
    rubrik_skor: {
      '10': 'Menjelaskan Design Token menjaga konsistensi warna, tipografi, dan spacing dalam implementasi frontend',
      '9': 'Design Token membantu menjaga konsistensi desain',
      '8': 'Design Token digunakan dalam desain (belum menjelaskan aspek konsistensi dan implementasi teknis)',
      '7': 'Design Token berkaitan dengan UI (terlalu umum)',
      '0': 'Tidak relevan'
    },
    created_at: now()
  },
  {
    id: 'er-7000001-0000-0000-0000-000000000015',
    question_id: 'q7000006-0000-0000-0000-000000000005',
    kunci_jawaban: 'Mobile-First adalah pendekatan desain dan pengembangan yang memulai perancangan dari layar perangkat mobile terlebih dahulu sebelum dikembangkan ke ukuran layar yang lebih besar.',
    kata_kunci: ['mobile-first', 'mobile', 'responsive', 'layar kecil', 'pengembangan bertahap', 'layar yang lebih besar'],
    rubrik_skor: {
      '10': 'Menjelaskan perancangan dimulai dari layar mobile terlebih dahulu sebelum ke layar yang lebih besar',
      '9': 'Desain dibuat untuk mobile terlebih dahulu sebelum desktop',
      '8': 'Mobile-First berarti mendukung tampilan mobile (belum menjelaskan urutan pengembangan)',
      '7': 'Website bisa dibuka di HP (tidak menjelaskan konsep Mobile-First)',
      '0': 'Tidak relevan'
    },
    created_at: now()
  }
];