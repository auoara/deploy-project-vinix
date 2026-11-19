// back-end/src/data/modules/modul2.js
const now = () => new Date().toISOString();
const COURSE_ID = 'c0000002-0000-0000-0000-000000000002';

export const modul2Questions = [
  // ════════════ SET A – 10 PG (Nomor 1–10) ════════════
  { id: 'q2000001-0000-0000-0000-000000000001', course_id: COURSE_ID, set_paket: 'A', topik: 'Konsep UI & UX', tipe: 'pilihan_ganda', teks: 'UI merupakan singkatan dari...', urutan: 1, created_at: now() },
  { id: 'q2000001-0000-0000-0000-000000000002', course_id: COURSE_ID, set_paket: 'A', topik: 'Konsep UI & UX', tipe: 'pilihan_ganda', teks: 'UX merupakan singkatan dari...', urutan: 2, created_at: now() },
  { id: 'q2000001-0000-0000-0000-000000000003', course_id: COURSE_ID, set_paket: 'A', topik: 'Konsep UI & UX', tipe: 'pilihan_ganda', teks: 'Yang paling tepat menggambarkan UI adalah...', urutan: 3, created_at: now() },
  { id: 'q2000001-0000-0000-0000-000000000004', course_id: COURSE_ID, set_paket: 'A', topik: 'Konsep UI & UX', tipe: 'pilihan_ganda', teks: 'UX berfokus pada...', urutan: 4, created_at: now() },
  { id: 'q2000001-0000-0000-0000-000000000005', course_id: COURSE_ID, set_paket: 'A', topik: 'Design Thinking', tipe: 'pilihan_ganda', teks: 'Tujuan utama Design Thinking adalah...', urutan: 5, created_at: now() },
  { id: 'q2000001-0000-0000-0000-000000000006', course_id: COURSE_ID, set_paket: 'A', topik: 'Design Thinking', tipe: 'pilihan_ganda', teks: 'Tahap pertama dalam Design Thinking adalah...', urutan: 6, created_at: now() },
  { id: 'q2000001-0000-0000-0000-000000000007', course_id: COURSE_ID, set_paket: 'A', topik: 'Design Thinking', tipe: 'pilihan_ganda', teks: 'Pada tahap Empathize, aktivitas yang dilakukan adalah...', urutan: 7, created_at: now() },
  { id: 'q2000001-0000-0000-0000-000000000008', course_id: COURSE_ID, set_paket: 'A', topik: 'Design Thinking', tipe: 'pilihan_ganda', teks: 'Tujuan tahap Define adalah...', urutan: 8, created_at: now() },
  { id: 'q2000001-0000-0000-0000-000000000009', course_id: COURSE_ID, set_paket: 'A', topik: 'Design Thinking', tipe: 'pilihan_ganda', teks: 'Tahap Ideate digunakan untuk...', urutan: 9, created_at: now() },
  { id: 'q2000001-0000-0000-0000-000000000010', course_id: COURSE_ID, set_paket: 'A', topik: 'Design Thinking', tipe: 'pilihan_ganda', teks: 'Brainstorming paling sering dilakukan pada tahap...', urutan: 10, created_at: now() },
  // ════════════ SET A – 5 Essay (Nomor 1–5) ════════════
  { id: 'q2000002-0000-0000-0000-000000000001', course_id: COURSE_ID, set_paket: 'A', topik: 'Konsep UI & UX', tipe: 'essay', teks: 'Jelaskan perbedaan UI dan UX!', urutan: 11, created_at: now() },
  { id: 'q2000002-0000-0000-0000-000000000002', course_id: COURSE_ID, set_paket: 'A', topik: 'Design Thinking', tipe: 'essay', teks: 'Apa tujuan utama Design Thinking?', urutan: 12, created_at: now() },
  { id: 'q2000002-0000-0000-0000-000000000003', course_id: COURSE_ID, set_paket: 'A', topik: 'Design Thinking', tipe: 'essay', teks: 'Jelaskan tahap Empathize dalam Design Thinking!', urutan: 13, created_at: now() },
  { id: 'q2000002-0000-0000-0000-000000000004', course_id: COURSE_ID, set_paket: 'A', topik: 'Design Thinking', tipe: 'essay', teks: 'Jelaskan tahap Define!', urutan: 14, created_at: now() },
  { id: 'q2000002-0000-0000-0000-000000000005', course_id: COURSE_ID, set_paket: 'A', topik: 'Design Thinking', tipe: 'essay', teks: 'Jelaskan tahap Ideate!', urutan: 15, created_at: now() },

  // ════════════ SET B – 10 PG (Nomor 11–20) ════════════
  { id: 'q2000003-0000-0000-0000-000000000001', course_id: COURSE_ID, set_paket: 'B', topik: 'Prototyping & Testing', tipe: 'pilihan_ganda', teks: 'Prototype adalah...', urutan: 1, created_at: now() },
  { id: 'q2000003-0000-0000-0000-000000000002', course_id: COURSE_ID, set_paket: 'B', topik: 'Prototyping & Testing', tipe: 'pilihan_ganda', teks: 'Tujuan utama prototype adalah...', urutan: 2, created_at: now() },
  { id: 'q2000003-0000-0000-0000-000000000003', course_id: COURSE_ID, set_paket: 'B', topik: 'Prototyping & Testing', tipe: 'pilihan_ganda', teks: 'Tahap Test bertujuan untuk...', urutan: 3, created_at: now() },
  { id: 'q2000003-0000-0000-0000-000000000004', course_id: COURSE_ID, set_paket: 'B', topik: 'Empathy & Riset', tipe: 'pilihan_ganda', teks: 'Empathy Map digunakan untuk...', urutan: 4, created_at: now() },
  { id: 'q2000003-0000-0000-0000-000000000005', course_id: COURSE_ID, set_paket: 'B', topik: 'Empathy & Riset', tipe: 'pilihan_ganda', teks: 'Komponen Empathy Map yang menggambarkan apa yang diucapkan pengguna adalah...', urutan: 5, created_at: now() },
  { id: 'q2000003-0000-0000-0000-000000000006', course_id: COURSE_ID, set_paket: 'B', topik: 'Empathy & Riset', tipe: 'pilihan_ganda', teks: 'Komponen "Does" dalam Empathy Map menjelaskan...', urutan: 6, created_at: now() },
  { id: 'q2000003-0000-0000-0000-000000000007', course_id: COURSE_ID, set_paket: 'B', topik: 'Empathy & Riset', tipe: 'pilihan_ganda', teks: 'User Research dilakukan agar keputusan desain berdasarkan...', urutan: 7, created_at: now() },
  { id: 'q2000003-0000-0000-0000-000000000008', course_id: COURSE_ID, set_paket: 'B', topik: 'Wireframe & Usability', tipe: 'pilihan_ganda', teks: 'Wireframe dapat diibaratkan sebagai...', urutan: 8, created_at: now() },
  { id: 'q2000003-0000-0000-0000-000000000009', course_id: COURSE_ID, set_paket: 'B', topik: 'Wireframe & Usability', tipe: 'pilihan_ganda', teks: 'Wireframe biasanya dibuat sebelum...', urutan: 9, created_at: now() },
  { id: 'q2000003-0000-0000-0000-000000000010', course_id: COURSE_ID, set_paket: 'B', topik: 'Wireframe & Usability', tipe: 'pilihan_ganda', teks: 'Usability mengukur...', urutan: 10, created_at: now() },
  // ════════════ SET B – 5 Essay (Nomor 6–10) ════════════
  { id: 'q2000004-0000-0000-0000-000000000001', course_id: COURSE_ID, set_paket: 'B', topik: 'Prototyping & Testing', tipe: 'essay', teks: 'Apa fungsi Prototype dalam Design Thinking?', urutan: 11, created_at: now() },
  { id: 'q2000004-0000-0000-0000-000000000002', course_id: COURSE_ID, set_paket: 'B', topik: 'Prototyping & Testing', tipe: 'essay', teks: 'Mengapa tahap Test penting dalam Design Thinking?', urutan: 12, created_at: now() },
  { id: 'q2000004-0000-0000-0000-000000000003', course_id: COURSE_ID, set_paket: 'B', topik: 'Empathy & Riset', tipe: 'essay', teks: 'Jelaskan apa itu Empathy Map!', urutan: 13, created_at: now() },
  { id: 'q2000004-0000-0000-0000-000000000004', course_id: COURSE_ID, set_paket: 'B', topik: 'Empathy & Riset', tipe: 'essay', teks: 'Apa manfaat User Research dalam proses desain?', urutan: 14, created_at: now() },
  { id: 'q2000004-0000-0000-0000-000000000005', course_id: COURSE_ID, set_paket: 'B', topik: 'Wireframe & Usability', tipe: 'essay', teks: 'Jelaskan pengertian Wireframe!', urutan: 15, created_at: now() },

  // ════════════ SET C – 10 PG (Nomor 21–30) ════════════
  { id: 'q2000005-0000-0000-0000-000000000001', course_id: COURSE_ID, set_paket: 'C', topik: 'Wireframe & Usability', tipe: 'pilihan_ganda', teks: 'Produk dengan usability yang baik adalah produk yang...', urutan: 1, created_at: now() },
  { id: 'q2000005-0000-0000-0000-000000000002', course_id: COURSE_ID, set_paket: 'C', topik: 'Kurva Biaya Desain', tipe: 'pilihan_ganda', teks: 'Semakin lambat masalah desain ditemukan, maka...', urutan: 2, created_at: now() },
  { id: 'q2000005-0000-0000-0000-000000000003', course_id: COURSE_ID, set_paket: 'C', topik: 'Studi Kasus Produk Gagal', tipe: 'pilihan_ganda', teks: 'Salah satu pelajaran dari kasus Juicero adalah...', urutan: 3, created_at: now() },
  { id: 'q2000005-0000-0000-0000-000000000004', course_id: COURSE_ID, set_paket: 'C', topik: 'Studi Kasus Produk Gagal', tipe: 'pilihan_ganda', teks: 'Kasus Windows 8 menunjukkan bahwa...', urutan: 4, created_at: now() },
  { id: 'q2000005-0000-0000-0000-000000000005', course_id: COURSE_ID, set_paket: 'C', topik: 'Studi Kasus Produk Gagal', tipe: 'pilihan_ganda', teks: 'Kasus Google Glass mengajarkan bahwa...', urutan: 5, created_at: now() },
  { id: 'q2000005-0000-0000-0000-000000000006', course_id: COURSE_ID, set_paket: 'C', topik: 'User-Centered Design', tipe: 'pilihan_ganda', teks: 'Konsep User-Centered Design berarti...', urutan: 6, created_at: now() },
  { id: 'q2000005-0000-0000-0000-000000000007', course_id: COURSE_ID, set_paket: 'C', topik: 'Konsep UI & UX', tipe: 'pilihan_ganda', teks: 'Fokus utama UX Designer adalah...', urutan: 7, created_at: now() },
  { id: 'q2000005-0000-0000-0000-000000000008', course_id: COURSE_ID, set_paket: 'C', topik: 'Design Thinking', tipe: 'pilihan_ganda', teks: 'Hasil utama tahap Define adalah...', urutan: 8, created_at: now() },
  { id: 'q2000005-0000-0000-0000-000000000009', course_id: COURSE_ID, set_paket: 'C', topik: 'Design Thinking', tipe: 'pilihan_ganda', teks: 'Feedback pengguna digunakan untuk...', urutan: 9, created_at: now() },
  { id: 'q2000005-0000-0000-0000-000000000010', course_id: COURSE_ID, set_paket: 'C', topik: 'Design Thinking', tipe: 'pilihan_ganda', teks: 'Urutan Design Thinking yang benar adalah...', urutan: 10, created_at: now() },
  // ════════════ SET C – 5 Essay (Nomor 11–15) ════════════
  { id: 'q2000006-0000-0000-0000-000000000001', course_id: COURSE_ID, set_paket: 'C', topik: 'Wireframe & Usability', tipe: 'essay', teks: 'Apa yang dimaksud dengan Usability?', urutan: 11, created_at: now() },
  { id: 'q2000006-0000-0000-0000-000000000002', course_id: COURSE_ID, set_paket: 'C', topik: 'Kurva Biaya Desain', tipe: 'essay', teks: 'Mengapa perubahan desain lebih baik dilakukan sejak awal proses pengembangan?', urutan: 12, created_at: now() },
  { id: 'q2000006-0000-0000-0000-000000000003', course_id: COURSE_ID, set_paket: 'C', topik: 'Studi Kasus Produk Gagal', tipe: 'essay', teks: 'Apa pelajaran yang dapat diambil dari kasus Windows 8 dalam perspektif UX?', urutan: 13, created_at: now() },
  { id: 'q2000006-0000-0000-0000-000000000004', course_id: COURSE_ID, set_paket: 'C', topik: 'Studi Kasus Produk Gagal', tipe: 'essay', teks: 'Apa pelajaran yang dapat dipelajari dari kasus Google Glass?', urutan: 14, created_at: now() },
  { id: 'q2000006-0000-0000-0000-000000000005', course_id: COURSE_ID, set_paket: 'C', topik: 'User-Centered Design', tipe: 'essay', teks: 'Mengapa desain harus berpusat pada pengguna (User-Centered Design)?', urutan: 15, created_at: now() }
];

export const modul2Options = [
  // SET A OPTIONS (Q1–Q10)
  { id: 'o2-A1-1', question_id: 'q2000001-0000-0000-0000-000000000001', teks: 'User Integration', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-A1-2', question_id: 'q2000001-0000-0000-0000-000000000001', teks: 'User Innovation', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-A1-3', question_id: 'q2000001-0000-0000-0000-000000000001', teks: 'User Interface', poin: 10, umpan_balik: 'Tepat! UI adalah User Interface.', is_correct: true },
  { id: 'o2-A1-4', question_id: 'q2000001-0000-0000-0000-000000000001', teks: 'User Interaction', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o2-A2-1', question_id: 'q2000001-0000-0000-0000-000000000002', teks: 'User Experience', poin: 10, umpan_balik: 'Tepat! UX adalah User Experience.', is_correct: true },
  { id: 'o2-A2-2', question_id: 'q2000001-0000-0000-0000-000000000002', teks: 'User Experiment', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-A2-3', question_id: 'q2000001-0000-0000-0000-000000000002', teks: 'User Extension', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-A2-4', question_id: 'q2000001-0000-0000-0000-000000000002', teks: 'User Execution', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o2-A3-1', question_id: 'q2000001-0000-0000-0000-000000000003', teks: 'Pengalaman pengguna saat memakai produk', poin: 0, umpan_balik: 'Keliru. Itu adalah definisi UX.', is_correct: false },
  { id: 'o2-A3-2', question_id: 'q2000001-0000-0000-0000-000000000003', teks: 'Tampilan visual dan elemen interaksi produk', poin: 10, umpan_balik: 'Tepat! UI berfokus pada antarmuka visual dan elemen interaksi.', is_correct: true },
  { id: 'o2-A3-3', question_id: 'q2000001-0000-0000-0000-000000000003', teks: 'Strategi pemasaran produk', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-A3-4', question_id: 'q2000001-0000-0000-0000-000000000003', teks: 'Analisis kebutuhan bisnis', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o2-A4-1', question_id: 'q2000001-0000-0000-0000-000000000004', teks: 'Warna dan tipografi saja', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-A4-2', question_id: 'q2000001-0000-0000-0000-000000000004', teks: 'Logo aplikasi', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-A4-3', question_id: 'q2000001-0000-0000-0000-000000000004', teks: 'Pengalaman pengguna secara keseluruhan', poin: 10, umpan_balik: 'Tepat! UX mencakup keseluruhan kenyamanan dan pengalaman pengguna.', is_correct: true },
  { id: 'o2-A4-4', question_id: 'q2000001-0000-0000-0000-000000000004', teks: 'Coding aplikasi', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o2-A5-1', question_id: 'q2000001-0000-0000-0000-000000000005', teks: 'Membuat produk lebih mahal', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-A5-2', question_id: 'q2000001-0000-0000-0000-000000000005', teks: 'Membuat desain lebih rumit', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-A5-3', question_id: 'q2000001-0000-0000-0000-000000000005', teks: 'Menghasilkan solusi yang berpusat pada pengguna', poin: 10, umpan_balik: 'Tepat! Design Thinking adalah pendekatan human-centered.', is_correct: true },
  { id: 'o2-A5-4', question_id: 'q2000001-0000-0000-0000-000000000005', teks: 'Mengurangi jumlah pengguna', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o2-A6-1', question_id: 'q2000001-0000-0000-0000-000000000006', teks: 'Define', poin: 0, umpan_balik: 'Keliru. Define adalah tahap kedua.', is_correct: false },
  { id: 'o2-A6-2', question_id: 'q2000001-0000-0000-0000-000000000006', teks: 'Prototype', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-A6-3', question_id: 'q2000001-0000-0000-0000-000000000006', teks: 'Empathize', poin: 10, umpan_balik: 'Tepat! Empathize selalu menjadi langkah pertama memahami pengguna.', is_correct: true },
  { id: 'o2-A6-4', question_id: 'q2000001-0000-0000-0000-000000000006', teks: 'Test', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o2-A7-1', question_id: 'q2000001-0000-0000-0000-000000000007', teks: 'Membuat laporan keuangan', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-A7-2', question_id: 'q2000001-0000-0000-0000-000000000007', teks: 'Memahami pengguna melalui observasi dan wawancara', poin: 10, umpan_balik: 'Tepat! Empathize dilakukan dengan observasi dan wawancara mendalam.', is_correct: true },
  { id: 'o2-A7-3', question_id: 'q2000001-0000-0000-0000-000000000007', teks: 'Menjual produk', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-A7-4', question_id: 'q2000001-0000-0000-0000-000000000007', teks: 'Membuat kode program', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o2-A8-1', question_id: 'q2000001-0000-0000-0000-000000000008', teks: 'Membuat logo', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-A8-2', question_id: 'q2000001-0000-0000-0000-000000000008', teks: 'Menentukan harga jual', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-A8-3', question_id: 'q2000001-0000-0000-0000-000000000008', teks: 'Merumuskan masalah pengguna dengan jelas', poin: 10, umpan_balik: 'Tepat! Tahap Define menyintesis hasil empati menjadi rumusan masalah tajam.', is_correct: true },
  { id: 'o2-A8-4', question_id: 'q2000001-0000-0000-0000-000000000008', teks: 'Melakukan promosi', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o2-A9-1', question_id: 'q2000001-0000-0000-0000-000000000009', teks: 'Menghasilkan berbagai ide solusi', poin: 10, umpan_balik: 'Tepat! Ideate berfokus pada eksplorasi beragam alternatif ide solusi.', is_correct: true },
  { id: 'o2-A9-2', question_id: 'q2000001-0000-0000-0000-000000000009', teks: 'Menguji aplikasi', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-A9-3', question_id: 'q2000001-0000-0000-0000-000000000009', teks: 'Menjual produk', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-A9-4', question_id: 'q2000001-0000-0000-0000-000000000009', teks: 'Mencari investor', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o2-A10-1', question_id: 'q2000001-0000-0000-0000-000000000010', teks: 'Empathize', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-A10-2', question_id: 'q2000001-0000-0000-0000-000000000010', teks: 'Define', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-A10-3', question_id: 'q2000001-0000-0000-0000-000000000010', teks: 'Ideate', poin: 10, umpan_balik: 'Tepat! Brainstorming dilakukan pada fase Ideate.', is_correct: true },
  { id: 'o2-A10-4', question_id: 'q2000001-0000-0000-0000-000000000010', teks: 'Test', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // SET B OPTIONS (Q11–Q20)
  { id: 'o2-B1-1', question_id: 'q2000003-0000-0000-0000-000000000001', teks: 'Produk final yang siap dijual', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-B1-2', question_id: 'q2000003-0000-0000-0000-000000000001', teks: 'Representasi awal dari solusi yang akan diuji', poin: 10, umpan_balik: 'Tepat! Prototype adalah simulasi awal untuk pengujian.', is_correct: true },
  { id: 'o2-B1-3', question_id: 'q2000003-0000-0000-0000-000000000001', teks: 'Laporan riset pasar', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-B1-4', question_id: 'q2000003-0000-0000-0000-000000000001', teks: 'Strategi pemasaran', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o2-B2-1', question_id: 'q2000003-0000-0000-0000-000000000002', teks: 'Mengurangi biaya iklan', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-B2-2', question_id: 'q2000003-0000-0000-0000-000000000002', teks: 'Menguji ide sebelum produk dibuat sepenuhnya', poin: 10, umpan_balik: 'Tepat! Validasi awal melalui prototipe menghemat biaya pengembangan.', is_correct: true },
  { id: 'o2-B2-3', question_id: 'q2000003-0000-0000-0000-000000000002', teks: 'Menentukan harga produk', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-B2-4', question_id: 'q2000003-0000-0000-0000-000000000002', teks: 'Merekrut pengguna baru', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o2-B3-1', question_id: 'q2000003-0000-0000-0000-000000000003', teks: 'Mendapatkan feedback pengguna', poin: 10, umpan_balik: 'Tepat! Tahap Test mengumpulkan umpan balik nyata dari pengguna.', is_correct: true },
  { id: 'o2-B3-2', question_id: 'q2000003-0000-0000-0000-000000000003', teks: 'Menghitung keuntungan', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-B3-3', question_id: 'q2000003-0000-0000-0000-000000000003', teks: 'Melakukan branding', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-B3-4', question_id: 'q2000003-0000-0000-0000-000000000003', teks: 'Menentukan investor', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o2-B4-1', question_id: 'q2000003-0000-0000-0000-000000000004', teks: 'Menghitung pendapatan', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-B4-2', question_id: 'q2000003-0000-0000-0000-000000000004', teks: 'Memahami pengguna secara lebih mendalam', poin: 10, umpan_balik: 'Tepat! Empathy Map memetakan ucapan, pikiran, perasaan, dan tindakan pengguna.', is_correct: true },
  { id: 'o2-B4-3', question_id: 'q2000003-0000-0000-0000-000000000004', teks: 'Mendesain logo', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-B4-4', question_id: 'q2000003-0000-0000-0000-000000000004', teks: 'Membuat database', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o2-B5-1', question_id: 'q2000003-0000-0000-0000-000000000005', teks: 'Thinks', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-B5-2', question_id: 'q2000003-0000-0000-0000-000000000005', teks: 'Feels', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-B5-3', question_id: 'q2000003-0000-0000-0000-000000000005', teks: 'Says', poin: 10, umpan_balik: 'Tepat! Says mencatat kutipan langsung yang diucapkan pengguna.', is_correct: true },
  { id: 'o2-B5-4', question_id: 'q2000003-0000-0000-0000-000000000005', teks: 'Does', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o2-B6-1', question_id: 'q2000003-0000-0000-0000-000000000006', teks: 'Apa yang dilakukan pengguna', poin: 10, umpan_balik: 'Tepat! Does menggambarkan tindakan dan perilaku pengguna.', is_correct: true },
  { id: 'o2-B6-2', question_id: 'q2000003-0000-0000-0000-000000000006', teks: 'Apa yang dipikirkan pengguna', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-B6-3', question_id: 'q2000003-0000-0000-0000-000000000006', teks: 'Apa yang dirasakan pengguna', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-B6-4', question_id: 'q2000003-0000-0000-0000-000000000006', teks: 'Apa yang dikatakan pengguna', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o2-B7-1', question_id: 'q2000003-0000-0000-0000-000000000007', teks: 'Intuisi semata', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-B7-2', question_id: 'q2000003-0000-0000-0000-000000000007', teks: 'Tren semata', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-B7-3', question_id: 'q2000003-0000-0000-0000-000000000007', teks: 'Data dan kebutuhan pengguna', poin: 10, umpan_balik: 'Tepat! User Research memastikan keputusan desain berbasis bukti.', is_correct: true },
  { id: 'o2-B7-4', question_id: 'q2000003-0000-0000-0000-000000000007', teks: 'Keinginan developer', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o2-B8-1', question_id: 'q2000003-0000-0000-0000-000000000008', teks: 'Strategi pemasaran', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-B8-2', question_id: 'q2000003-0000-0000-0000-000000000008', teks: 'Kerangka atau blueprint tampilan aplikasi', poin: 10, umpan_balik: 'Tepat! Wireframe adalah cetak biru struktur halaman.', is_correct: true },
  { id: 'o2-B8-3', question_id: 'q2000003-0000-0000-0000-000000000008', teks: 'Produk final', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-B8-4', question_id: 'q2000003-0000-0000-0000-000000000008', teks: 'Database pengguna', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o2-B9-1', question_id: 'q2000003-0000-0000-0000-000000000009', teks: 'User Research', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-B9-2', question_id: 'q2000003-0000-0000-0000-000000000009', teks: 'Desain visual detail', poin: 10, umpan_balik: 'Tepat! Wireframe menyusun kerangka sebelum pewarnaan dan desain visual detail.', is_correct: true },
  { id: 'o2-B9-3', question_id: 'q2000003-0000-0000-0000-000000000009', teks: 'Observasi pengguna', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-B9-4', question_id: 'q2000003-0000-0000-0000-000000000009', teks: 'Pengumpulan data', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o2-B10-1', question_id: 'q2000003-0000-0000-0000-000000000010', teks: 'Keuntungan produk', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-B10-2', question_id: 'q2000003-0000-0000-0000-000000000010', teks: 'Kecepatan internet pengguna', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-B10-3', question_id: 'q2000003-0000-0000-0000-000000000010', teks: 'Kemudahan penggunaan produk', poin: 10, umpan_balik: 'Tepat! Usability mengukur seberapa mudah dan efisien produk digunakan.', is_correct: true },
  { id: 'o2-B10-4', question_id: 'q2000003-0000-0000-0000-000000000010', teks: 'Jumlah pengguna', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // SET C OPTIONS (Q21–Q30)
  { id: 'o2-C1-1', question_id: 'q2000005-0000-0000-0000-000000000001', teks: 'Sulit dipelajari', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-C1-2', question_id: 'q2000005-0000-0000-0000-000000000001', teks: 'Membingungkan pengguna', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-C1-3', question_id: 'q2000005-0000-0000-0000-000000000001', teks: 'Mudah digunakan dan dipahami', poin: 10, umpan_balik: 'Tepat! Usability yang baik membuat pengguna cepat paham tanpa hambatan.', is_correct: true },
  { id: 'o2-C1-4', question_id: 'q2000005-0000-0000-0000-000000000001', teks: 'Memiliki banyak fitur rumit', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o2-C2-1', question_id: 'q2000005-0000-0000-0000-000000000002', teks: 'Biaya perbaikan makin murah', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-C2-2', question_id: 'q2000005-0000-0000-0000-000000000002', teks: 'Biaya perbaikan makin mahal', poin: 10, umpan_balik: 'Tepat! Sesuai kurva biaya 1:10:100, perbaikan setelah rilis jauh lebih mahal.', is_correct: true },
  { id: 'o2-C2-3', question_id: 'q2000005-0000-0000-0000-000000000002', teks: 'Tidak berpengaruh', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-C2-4', question_id: 'q2000005-0000-0000-0000-000000000002', teks: 'Pengguna bertambah', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o2-C3-1', question_id: 'q2000005-0000-0000-0000-000000000003', teks: 'Teknologi canggih selalu berhasil', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-C3-2', question_id: 'q2000005-0000-0000-0000-000000000003', teks: 'Produk harus benar-benar memberikan nilai tambah yang nyata', poin: 10, umpan_balik: 'Tepat! Juicero gagal karena over-engineering tanpa nilai tambah nyata.', is_correct: true },
  { id: 'o2-C3-3', question_id: 'q2000005-0000-0000-0000-000000000003', teks: 'Harga mahal meningkatkan kesuksesan', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-C3-4', question_id: 'q2000005-0000-0000-0000-000000000003', teks: 'Semua inovasi pasti diterima pasar', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o2-C4-1', question_id: 'q2000005-0000-0000-0000-000000000004', teks: 'Perubahan antarmuka yang terlalu drastis dapat membingungkan pengguna', poin: 10, umpan_balik: 'Tepat! Menghapus tombol Start memicu disorientasi kebiasaan pengguna.', is_correct: true },
  { id: 'o2-C4-2', question_id: 'q2000005-0000-0000-0000-000000000004', teks: 'Pengguna menyukai semua perubahan', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-C4-3', question_id: 'q2000005-0000-0000-0000-000000000004', teks: 'UI tidak penting', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-C4-4', question_id: 'q2000005-0000-0000-0000-000000000004', teks: 'UX tidak berpengaruh', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o2-C5-1', question_id: 'q2000005-0000-0000-0000-000000000005', teks: 'Teknologi canggih saja cukup untuk sukses', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-C5-2', question_id: 'q2000005-0000-0000-0000-000000000005', teks: 'Privasi dan penerimaan pengguna sangat penting', poin: 10, umpan_balik: 'Tepat! Google Glass ditolak karena isu privasi dan norma sosial.', is_correct: true },
  { id: 'o2-C5-3', question_id: 'q2000005-0000-0000-0000-000000000005', teks: 'Harga mahal menjamin kesuksesan', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-C5-4', question_id: 'q2000005-0000-0000-0000-000000000005', teks: 'Desain tidak penting', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o2-C6-1', question_id: 'q2000005-0000-0000-0000-000000000006', teks: 'Desain dibuat berdasarkan kebutuhan pengguna', poin: 10, umpan_balik: 'Tepat! User-Centered Design menempatkan kebutuhan pengguna sebagai pusat keputusan.', is_correct: true },
  { id: 'o2-C6-2', question_id: 'q2000005-0000-0000-0000-000000000006', teks: 'Desain dibuat berdasarkan keinginan developer', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-C6-3', question_id: 'q2000005-0000-0000-0000-000000000006', teks: 'Desain mengikuti tren semata', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-C6-4', question_id: 'q2000005-0000-0000-0000-000000000006', teks: 'Desain dibuat berdasarkan teknologi terbaru', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o2-C7-1', question_id: 'q2000005-0000-0000-0000-000000000007', teks: 'Pengalaman pengguna', poin: 10, umpan_balik: 'Tepat! UX Designer fokus pada keseluruhan pengalaman pengguna.', is_correct: true },
  { id: 'o2-C7-2', question_id: 'q2000005-0000-0000-0000-000000000007', teks: 'Laporan keuangan', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-C7-3', question_id: 'q2000005-0000-0000-0000-000000000007', teks: 'Infrastruktur server', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-C7-4', question_id: 'q2000005-0000-0000-0000-000000000007', teks: 'Penjualan', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o2-C8-1', question_id: 'q2000005-0000-0000-0000-000000000008', teks: 'Rumusan masalah yang jelas', poin: 10, umpan_balik: 'Tepat! Output tahap Define adalah Problem Statement yang tajam.', is_correct: true },
  { id: 'o2-C8-2', question_id: 'q2000005-0000-0000-0000-000000000008', teks: 'Produk final', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-C8-3', question_id: 'q2000005-0000-0000-0000-000000000008', teks: 'Kampanye pemasaran', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-C8-4', question_id: 'q2000005-0000-0000-0000-000000000008', teks: 'Desain visual akhir', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o2-C9-1', question_id: 'q2000005-0000-0000-0000-000000000009', teks: 'Memvalidasi dan memperbaiki solusi', poin: 10, umpan_balik: 'Tepat! Feedback menjadi dasar iterasi perbaikan solusi.', is_correct: true },
  { id: 'o2-C9-2', question_id: 'q2000005-0000-0000-0000-000000000009', teks: 'Mengurangi jumlah fitur', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-C9-3', question_id: 'q2000005-0000-0000-0000-000000000009', teks: 'Menghilangkan proses riset', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-C9-4', question_id: 'q2000005-0000-0000-0000-000000000009', teks: 'Menggantikan wireframe', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o2-C10-1', question_id: 'q2000005-0000-0000-0000-000000000010', teks: 'Define → Empathize → Prototype → Ideate → Test', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-C10-2', question_id: 'q2000005-0000-0000-0000-000000000010', teks: 'Empathize → Define → Ideate → Prototype → Test', poin: 10, umpan_balik: 'Tepat! Urutan baku Design Thinking adalah Empathize, Define, Ideate, Prototype, Test.', is_correct: true },
  { id: 'o2-C10-3', question_id: 'q2000005-0000-0000-0000-000000000010', teks: 'Prototype → Test → Empathize → Define → Ideate', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o2-C10-4', question_id: 'q2000005-0000-0000-0000-000000000010', teks: 'Ideate → Define → Empathize → Test → Prototype', poin: 0, umpan_balik: 'Keliru.', is_correct: false }
];

export const modul2Rubrics = [
  // SET A RUBRICS (Essay 1–5)
  { id: 'er-0000002-0000-0000-0000-000000000001', question_id: 'q2000002-0000-0000-0000-000000000001', kunci_jawaban: 'UI (User Interface) adalah tampilan visual dan elemen interaksi yang digunakan pengguna untuk berinteraksi dengan produk, sedangkan UX (User Experience) adalah keseluruhan pengalaman pengguna saat menggunakan produk, termasuk kemudahan, kenyamanan, dan kepuasan.', kata_kunci: ['ui', 'tampilan visual', 'antarmuka', 'ux', 'pengalaman pengguna', 'kenyamanan'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },
  { id: 'er-0000002-0000-0000-0000-000000000002', question_id: 'q2000002-0000-0000-0000-000000000002', kunci_jawaban: 'Design Thinking bertujuan menghasilkan solusi inovatif yang berpusat pada kebutuhan pengguna melalui proses memahami masalah, menghasilkan ide, membuat prototipe, dan melakukan pengujian.', kata_kunci: ['solusi inovatif', 'kebutuhan pengguna', 'human centered', 'pemecahan masalah'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },
  { id: 'er-0000002-0000-0000-0000-000000000003', question_id: 'q2000002-0000-0000-0000-000000000003', kunci_jawaban: 'Empathize adalah tahap memahami pengguna secara mendalam melalui observasi, wawancara, dan riset untuk mengetahui kebutuhan, perilaku, masalah, serta motivasi mereka.', kata_kunci: ['memahami pengguna', 'observasi', 'wawancara', 'kebutuhan', 'masalah'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },
  { id: 'er-0000002-0000-0000-0000-000000000004', question_id: 'q2000002-0000-0000-0000-000000000004', kunci_jawaban: 'Define adalah tahap merumuskan masalah utama pengguna berdasarkan hasil riset dan empati sehingga tim memiliki fokus yang jelas dalam mencari solusi.', kata_kunci: ['merumuskan masalah', 'fokus', 'hasil riset', 'kebutuhan pengguna'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },
  { id: 'er-0000002-0000-0000-0000-000000000005', question_id: 'q2000002-0000-0000-0000-000000000005', kunci_jawaban: 'Ideate adalah proses menghasilkan sebanyak mungkin ide solusi melalui brainstorming dan kreativitas untuk menyelesaikan masalah pengguna.', kata_kunci: ['brainstorming', 'ide', 'solusi', 'kreativitas'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },

  // SET B RUBRICS (Essay 6–10)
  { id: 'er-0000002-0000-0000-0000-000000000006', question_id: 'q2000004-0000-0000-0000-000000000001', kunci_jawaban: 'Prototype digunakan untuk memvisualisasikan ide dalam bentuk sederhana agar dapat diuji, dievaluasi, dan diperbaiki sebelum dikembangkan menjadi produk sebenarnya.', kata_kunci: ['visualisasi ide', 'pengujian', 'evaluasi', 'perbaikan'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },
  { id: 'er-0000002-0000-0000-0000-000000000007', question_id: 'q2000004-0000-0000-0000-000000000002', kunci_jawaban: 'Karena tahap Test memberikan feedback nyata dari pengguna sehingga tim dapat mengetahui kelemahan solusi dan melakukan perbaikan berdasarkan kebutuhan pengguna.', kata_kunci: ['feedback', 'validasi', 'pengguna', 'perbaikan'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },
  { id: 'er-0000002-0000-0000-0000-000000000008', question_id: 'q2000004-0000-0000-0000-000000000003', kunci_jawaban: 'Empathy Map adalah alat untuk memahami pengguna melalui aspek Says, Thinks, Feels, dan Does sehingga tim dapat memahami perilaku dan kebutuhan pengguna secara lebih mendalam.', kata_kunci: ['empathy map', 'says', 'thinks', 'feels', 'does'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },
  { id: 'er-0000002-0000-0000-0000-000000000009', question_id: 'q2000004-0000-0000-0000-000000000004', kunci_jawaban: 'User Research membantu memahami kebutuhan, masalah, perilaku, dan ekspektasi pengguna sehingga keputusan desain didasarkan pada data, bukan asumsi.', kata_kunci: ['user research', 'kebutuhan', 'data', 'perilaku pengguna', 'bukan asumsi'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },
  { id: 'er-0000002-0000-0000-0000-000000000010', question_id: 'q2000004-0000-0000-0000-000000000005', kunci_jawaban: 'Wireframe adalah kerangka atau blueprint antarmuka yang menggambarkan struktur halaman, tata letak konten, dan navigasi sebelum desain visual dibuat.', kata_kunci: ['blueprint', 'struktur halaman', 'tata letak', 'wireframe'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },

  // SET C RUBRICS (Essay 11–15)
  { id: 'er-0000002-0000-0000-0000-000000000011', question_id: 'q2000006-0000-0000-0000-000000000001', kunci_jawaban: 'Usability adalah tingkat kemudahan pengguna dalam mempelajari, memahami, dan menggunakan suatu produk untuk mencapai tujuan mereka secara efektif dan efisien.', kata_kunci: ['kemudahan penggunaan', 'efektif', 'efisien', 'pengguna'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },
  { id: 'er-0000002-0000-0000-0000-000000000012', question_id: 'q2000006-0000-0000-0000-000000000002', kunci_jawaban: 'Karena biaya, waktu, dan risiko perubahan akan meningkat ketika produk sudah dikembangkan atau dirilis. Perbaikan sejak awal jauh lebih murah dan efisien.', kata_kunci: ['biaya', 'risiko', 'efisiensi', 'perubahan awal'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },
  { id: 'er-0000002-0000-0000-0000-000000000013', question_id: 'q2000006-0000-0000-0000-000000000003', kunci_jawaban: 'Perubahan antarmuka yang terlalu drastis tanpa mempertimbangkan kebiasaan pengguna dapat menimbulkan kebingungan dan menurunkan pengalaman pengguna.', kata_kunci: ['perubahan drastis', 'kebiasaan pengguna', 'kebingungan', 'ux'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },
  { id: 'er-0000002-0000-0000-0000-000000000014', question_id: 'q2000006-0000-0000-0000-000000000004', kunci_jawaban: 'Keberhasilan teknologi tidak hanya ditentukan oleh kecanggihan fitur, tetapi juga oleh penerimaan pengguna, kenyamanan penggunaan, privasi, dan kebutuhan pasar.', kata_kunci: ['penerimaan pengguna', 'privasi', 'kebutuhan pasar', 'teknologi'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },
  { id: 'er-0000002-0000-0000-0000-000000000015', question_id: 'q2000006-0000-0000-0000-000000000005', kunci_jawaban: 'Karena tujuan utama suatu produk adalah membantu pengguna mencapai kebutuhannya. Dengan memahami pengguna, produk menjadi lebih relevan, mudah digunakan, bermanfaat, dan memiliki peluang keberhasilan yang lebih tinggi.', kata_kunci: ['user-centered design', 'kebutuhan pengguna', 'relevan', 'mudah digunakan', 'manfaat'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() }
];