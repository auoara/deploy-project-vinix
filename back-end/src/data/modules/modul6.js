/**
 * VINIX7 Bank Soal & Rubrik Penilaian – Modul 6
 * Topik: HTML Dasar & Semantik (Course ID: c0000006-0000-0000-0000-000000000006)
 * Pembagian Paket sesuai PRD Bagian 13:
 * - Set A: PG 1–10 & Essay 1–5
 * - Set B: PG 11–20 & Essay 6–10
 * - Set C: PG 21–30 & Essay 11–15
 */

const now = () => new Date().toISOString();
const COURSE_ID = 'c0000006-0000-0000-0000-000000000006';

// ─── QUESTIONS (30 PG + 15 Essay) ────────────────────────────────────────────
export const modul6Questions = [
  // ════════════ SET A – 10 PG (Nomor 1–10) ════════════
  { id: 'q6000001-0000-0000-0000-000000000001', course_id: COURSE_ID, set_paket: 'A', topik: 'Dasar HTML', tipe: 'pilihan_ganda', teks: 'HTML merupakan singkatan dari...', urutan: 1, created_at: now() },
  { id: 'q6000001-0000-0000-0000-000000000002', course_id: COURSE_ID, set_paket: 'A', topik: 'Dasar HTML', tipe: 'pilihan_ganda', teks: 'HTML digunakan untuk...', urutan: 2, created_at: now() },
  { id: 'q6000001-0000-0000-0000-000000000003', course_id: COURSE_ID, set_paket: 'A', topik: 'Dasar HTML', tipe: 'pilihan_ganda', teks: 'HTML termasuk kategori...', urutan: 3, created_at: now() },
  { id: 'q6000001-0000-0000-0000-000000000004', course_id: COURSE_ID, set_paket: 'A', topik: 'Struktur Dokumen HTML5', tipe: 'pilihan_ganda', teks: 'Tag yang menandakan dokumen HTML5 adalah...', urutan: 4, created_at: now() },
  { id: 'q6000001-0000-0000-0000-000000000005', course_id: COURSE_ID, set_paket: 'A', topik: 'Struktur Dokumen HTML5', tipe: 'pilihan_ganda', teks: 'Elemen root dari dokumen HTML adalah...', urutan: 5, created_at: now() },
  { id: 'q6000001-0000-0000-0000-000000000006', course_id: COURSE_ID, set_paket: 'A', topik: 'Struktur Dokumen HTML5', tipe: 'pilihan_ganda', teks: 'Bagian yang berisi metadata halaman adalah...', urutan: 6, created_at: now() },
  { id: 'q6000001-0000-0000-0000-000000000007', course_id: COURSE_ID, set_paket: 'A', topik: 'Struktur Dokumen HTML5', tipe: 'pilihan_ganda', teks: 'Bagian yang menampilkan konten kepada pengguna adalah...', urutan: 7, created_at: now() },
  { id: 'q6000001-0000-0000-0000-000000000008', course_id: COURSE_ID, set_paket: 'A', topik: 'Teks & Tipografi HTML', tipe: 'pilihan_ganda', teks: 'Tag untuk membuat paragraf adalah...', urutan: 8, created_at: now() },
  { id: 'q6000001-0000-0000-0000-000000000009', course_id: COURSE_ID, set_paket: 'A', topik: 'Teks & Tipografi HTML', tipe: 'pilihan_ganda', teks: 'Tag heading terbesar adalah...', urutan: 9, created_at: now() },
  { id: 'q6000001-0000-0000-0000-000000000010', course_id: COURSE_ID, set_paket: 'A', topik: 'Teks & Tipografi HTML', tipe: 'pilihan_ganda', teks: 'Tag heading terkecil adalah...', urutan: 10, created_at: now() },

  // ════════════ SET A – 5 Essay (Nomor 1–5) ════════════
  { id: 'q6000002-0000-0000-0000-000000000001', course_id: COURSE_ID, set_paket: 'A', topik: 'Dasar HTML', tipe: 'essay', teks: 'Apa yang dimaksud dengan HTML?', urutan: 11, created_at: now() },
  { id: 'q6000002-0000-0000-0000-000000000002', course_id: COURSE_ID, set_paket: 'A', topik: 'Dasar HTML', tipe: 'essay', teks: 'Mengapa HTML disebut bahasa markup, bukan bahasa pemrograman?', urutan: 12, created_at: now() },
  { id: 'q6000002-0000-0000-0000-000000000003', course_id: COURSE_ID, set_paket: 'A', topik: 'Struktur Dokumen HTML5', tipe: 'essay', teks: 'Jelaskan fungsi tag <html>!', urutan: 13, created_at: now() },
  { id: 'q6000002-0000-0000-0000-000000000004', course_id: COURSE_ID, set_paket: 'A', topik: 'Struktur Dokumen HTML5', tipe: 'essay', teks: 'Apa fungsi tag <head>?', urutan: 14, created_at: now() },
  { id: 'q6000002-0000-0000-0000-000000000005', course_id: COURSE_ID, set_paket: 'A', topik: 'Struktur Dokumen HTML5', tipe: 'essay', teks: 'Apa fungsi tag <body>?', urutan: 15, created_at: now() },

  // ════════════ SET B – 10 PG (Nomor 11–20) ════════════
  { id: 'q6000003-0000-0000-0000-000000000001', course_id: COURSE_ID, set_paket: 'B', topik: 'Hyperlink & Navigasi', tipe: 'pilihan_ganda', teks: 'Tag yang digunakan untuk membuat hyperlink adalah...', urutan: 1, created_at: now() },
  { id: 'q6000003-0000-0000-0000-000000000002', course_id: COURSE_ID, set_paket: 'B', topik: 'Hyperlink & Navigasi', tipe: 'pilihan_ganda', teks: 'Atribut yang digunakan pada tag <a> untuk menentukan tujuan link adalah...', urutan: 2, created_at: now() },
  { id: 'q6000003-0000-0000-0000-000000000003', course_id: COURSE_ID, set_paket: 'B', topik: 'Media & Aksesibilitas', tipe: 'pilihan_ganda', teks: 'Tag untuk menampilkan gambar adalah...', urutan: 3, created_at: now() },
  { id: 'q6000003-0000-0000-0000-000000000004', course_id: COURSE_ID, set_paket: 'B', topik: 'Media & Aksesibilitas', tipe: 'pilihan_ganda', teks: 'Atribut yang menunjukkan lokasi gambar adalah...', urutan: 4, created_at: now() },
  { id: 'q6000003-0000-0000-0000-000000000005', course_id: COURSE_ID, set_paket: 'B', topik: 'Media & Aksesibilitas', tipe: 'pilihan_ganda', teks: 'Fungsi atribut alt pada gambar adalah...', urutan: 5, created_at: now() },
  { id: 'q6000003-0000-0000-0000-000000000006', course_id: COURSE_ID, set_paket: 'B', topik: 'List & Tabel HTML', tipe: 'pilihan_ganda', teks: 'Tag untuk membuat daftar berurutan adalah...', urutan: 6, created_at: now() },
  { id: 'q6000003-0000-0000-0000-000000000007', course_id: COURSE_ID, set_paket: 'B', topik: 'List & Tabel HTML', tipe: 'pilihan_ganda', teks: 'Tag untuk membuat daftar tidak berurutan adalah...', urutan: 7, created_at: now() },
  { id: 'q6000003-0000-0000-0000-000000000008', course_id: COURSE_ID, set_paket: 'B', topik: 'List & Tabel HTML', tipe: 'pilihan_ganda', teks: 'Elemen daftar berada di dalam tag...', urutan: 8, created_at: now() },
  { id: 'q6000003-0000-0000-0000-000000000009', course_id: COURSE_ID, set_paket: 'B', topik: 'List & Tabel HTML', tipe: 'pilihan_ganda', teks: 'Tag untuk membuat tabel adalah...', urutan: 9, created_at: now() },
  { id: 'q6000003-0000-0000-0000-000000000010', course_id: COURSE_ID, set_paket: 'B', topik: 'List & Tabel HTML', tipe: 'pilihan_ganda', teks: 'Tag untuk membuat baris tabel adalah...', urutan: 10, created_at: now() },

  // ════════════ SET B – 5 Essay (Nomor 6–10) ════════════
  { id: 'q6000004-0000-0000-0000-000000000001', course_id: COURSE_ID, set_paket: 'B', topik: 'Teks & Tipografi HTML', tipe: 'essay', teks: 'Jelaskan perbedaan heading dan paragraf!', urutan: 11, created_at: now() },
  { id: 'q6000004-0000-0000-0000-000000000002', course_id: COURSE_ID, set_paket: 'B', topik: 'Hyperlink & Navigasi', tipe: 'essay', teks: 'Apa fungsi tag <a>?', urutan: 12, created_at: now() },
  { id: 'q6000004-0000-0000-0000-000000000003', course_id: COURSE_ID, set_paket: 'B', topik: 'Media & Aksesibilitas', tipe: 'essay', teks: 'Mengapa atribut alt penting pada gambar?', urutan: 13, created_at: now() },
  { id: 'q6000004-0000-0000-0000-000000000004', course_id: COURSE_ID, set_paket: 'B', topik: 'List & Tabel HTML', tipe: 'essay', teks: 'Jelaskan perbedaan <ol> dan <ul>!', urutan: 14, created_at: now() },
  { id: 'q6000004-0000-0000-0000-000000000005', course_id: COURSE_ID, set_paket: 'B', topik: 'List & Tabel HTML', tipe: 'essay', teks: 'Apa fungsi tabel dalam HTML?', urutan: 15, created_at: now() },

  // ════════════ SET C – 10 PG (Nomor 21–30) ════════════
  { id: 'q6000005-0000-0000-0000-000000000001', course_id: COURSE_ID, set_paket: 'C', topik: 'List & Tabel HTML', tipe: 'pilihan_ganda', teks: 'Tag untuk membuat sel data tabel adalah...', urutan: 1, created_at: now() },
  { id: 'q6000005-0000-0000-0000-000000000002', course_id: COURSE_ID, set_paket: 'C', topik: 'Form & Input HTML', tipe: 'pilihan_ganda', teks: 'Tag untuk membuat form adalah...', urutan: 2, created_at: now() },
  { id: 'q6000005-0000-0000-0000-000000000003', course_id: COURSE_ID, set_paket: 'C', topik: 'Form & Input HTML', tipe: 'pilihan_ganda', teks: 'Elemen yang digunakan untuk menerima input pengguna adalah...', urutan: 3, created_at: now() },
  { id: 'q6000005-0000-0000-0000-000000000004', course_id: COURSE_ID, set_paket: 'C', topik: 'Form & Input HTML', tipe: 'pilihan_ganda', teks: 'Tag untuk membuat tombol adalah...', urutan: 4, created_at: now() },
  { id: 'q6000005-0000-0000-0000-000000000005', course_id: COURSE_ID, set_paket: 'C', topik: 'HTML Semantik', tipe: 'pilihan_ganda', teks: 'HTML semantik digunakan untuk...', urutan: 5, created_at: now() },
  { id: 'q6000005-0000-0000-0000-000000000006', course_id: COURSE_ID, set_paket: 'C', topik: 'HTML Semantik', tipe: 'pilihan_ganda', teks: 'Manakah yang termasuk tag semantik?', urutan: 6, created_at: now() },
  { id: 'q6000005-0000-0000-0000-000000000007', course_id: COURSE_ID, set_paket: 'C', topik: 'HTML Semantik', tipe: 'pilihan_ganda', teks: 'Tag <header> biasanya digunakan untuk...', urutan: 7, created_at: now() },
  { id: 'q6000005-0000-0000-0000-000000000008', course_id: COURSE_ID, set_paket: 'C', topik: 'HTML Semantik', tipe: 'pilihan_ganda', teks: 'Tag <div> digunakan untuk...', urutan: 8, created_at: now() },
  { id: 'q6000005-0000-0000-0000-000000000009', course_id: COURSE_ID, set_paket: 'C', topik: 'Best Practice Web', tipe: 'pilihan_ganda', teks: 'Best practice HTML yang baik adalah...', urutan: 9, created_at: now() },
  { id: 'q6000005-0000-0000-0000-000000000010', course_id: COURSE_ID, set_paket: 'C', topik: 'Best Practice Web', tipe: 'pilihan_ganda', teks: 'Hubungan HTML, CSS, dan JavaScript yang benar adalah...', urutan: 10, created_at: now() },

  // ════════════ SET C – 5 Essay (Nomor 11–15) ════════════
  { id: 'q6000006-0000-0000-0000-000000000001', course_id: COURSE_ID, set_paket: 'C', topik: 'Form & Input HTML', tipe: 'essay', teks: 'Apa fungsi form dalam HTML?', urutan: 11, created_at: now() },
  { id: 'q6000006-0000-0000-0000-000000000002', course_id: COURSE_ID, set_paket: 'C', topik: 'HTML Semantik', tipe: 'essay', teks: 'Apa yang dimaksud HTML Semantik?', urutan: 12, created_at: now() },
  { id: 'q6000006-0000-0000-0000-000000000003', course_id: COURSE_ID, set_paket: 'C', topik: 'HTML Semantik', tipe: 'essay', teks: 'Jelaskan perbedaan <div> dan <article>!', urutan: 13, created_at: now() },
  { id: 'q6000006-0000-0000-0000-000000000004', course_id: COURSE_ID, set_paket: 'C', topik: 'Best Practice Web', tipe: 'essay', teks: 'Mengapa indentasi penting dalam HTML?', urutan: 14, created_at: now() },
  { id: 'q6000006-0000-0000-0000-000000000005', course_id: COURSE_ID, set_paket: 'C', topik: 'Best Practice Web', tipe: 'essay', teks: 'Jelaskan hubungan HTML, CSS, dan JavaScript!', urutan: 15, created_at: now() }
];

// ─── OPTIONS (120 Opsi untuk 30 PG) ───────────────────────────────────────────
export const modul6Options = [
  // ════════════ SET A OPTIONS ════════════
  // Q1-A
  { id: 'o6-A1-1', question_id: 'q6000001-0000-0000-0000-000000000001', teks: 'Hyper Text Markup Language', poin: 10, umpan_balik: 'Tepat! HTML adalah singkatan dari Hyper Text Markup Language.', is_correct: true },
  { id: 'o6-A1-2', question_id: 'q6000001-0000-0000-0000-000000000001', teks: 'Hyper Tool Markup Language', poin: 0, umpan_balik: 'Keliru. Huruf T pada HTML merujuk pada Text, bukan Tool.', is_correct: false },
  { id: 'o6-A1-3', question_id: 'q6000001-0000-0000-0000-000000000001', teks: 'High Text Modern Language', poin: 0, umpan_balik: 'Keliru. HTML adalah Hyper Text Markup Language.', is_correct: false },
  { id: 'o6-A1-4', question_id: 'q6000001-0000-0000-0000-000000000001', teks: 'Hyper Transfer Markup Language', poin: 0, umpan_balik: 'Keliru. Transfer adalah bagian dari protokol HTTP, bukan HTML.', is_correct: false },
  // Q2-A
  { id: 'o6-A2-1', question_id: 'q6000001-0000-0000-0000-000000000002', teks: 'Mengatur tampilan website', poin: 0, umpan_balik: 'Keliru. Mengatur tampilan visual adalah tugas CSS.', is_correct: false },
  { id: 'o6-A2-2', question_id: 'q6000001-0000-0000-0000-000000000002', teks: 'Membuat struktur dan konten website', poin: 10, umpan_balik: 'Tepat! HTML berfungsi menyusun kerangka struktur dan konten halaman web.', is_correct: true },
  { id: 'o6-A2-3', question_id: 'q6000001-0000-0000-0000-000000000002', teks: 'Mengelola database', poin: 0, umpan_balik: 'Keliru. Pengelolaan database dilakukan oleh DBMS seperti PostgreSQL/MySQL.', is_correct: false },
  { id: 'o6-A2-4', question_id: 'q6000001-0000-0000-0000-000000000002', teks: 'Membuat server', poin: 0, umpan_balik: 'Keliru. Server dibangun menggunakan runtime/bahasa backend, bukan HTML.', is_correct: false },
  // Q3-A
  { id: 'o6-A3-1', question_id: 'q6000001-0000-0000-0000-000000000003', teks: 'Bahasa Pemrograman', poin: 0, umpan_balik: 'Keliru. HTML tidak memiliki logika percabangan maupun perhitungan.', is_correct: false },
  { id: 'o6-A3-2', question_id: 'q6000001-0000-0000-0000-000000000003', teks: 'Database Language', poin: 0, umpan_balik: 'Keliru. HTML bukan bahasa basis data.', is_correct: false },
  { id: 'o6-A3-3', question_id: 'q6000001-0000-0000-0000-000000000003', teks: 'Markup Language', poin: 10, umpan_balik: 'Tepat! HTML adalah bahasa markah (Markup Language) untuk menandai struktur konten.', is_correct: true },
  { id: 'o6-A3-4', question_id: 'q6000001-0000-0000-0000-000000000003', teks: 'Query Language', poin: 0, umpan_balik: 'Keliru. Contoh query language adalah SQL.', is_correct: false },
  // Q4-A
  { id: 'o6-A4-1', question_id: 'q6000001-0000-0000-0000-000000000004', teks: '<html5>', poin: 0, umpan_balik: 'Keliru. Tidak ada tag <html5> dalam spesifikasi standar.', is_correct: false },
  { id: 'o6-A4-2', question_id: 'q6000001-0000-0000-0000-000000000004', teks: '<doctype>', poin: 0, umpan_balik: 'Keliru. Penulisan deklarasi dokumen HTML5 diawali tanda seru.', is_correct: false },
  { id: 'o6-A4-3', question_id: 'q6000001-0000-0000-0000-000000000004', teks: '<!DOCTYPE html>', poin: 10, umpan_balik: 'Tepat! <!DOCTYPE html> wajib diletakkan di baris paling atas dokumen HTML5.', is_correct: true },
  { id: 'o6-A4-4', question_id: 'q6000001-0000-0000-0000-000000000004', teks: '<document>', poin: 0, umpan_balik: 'Keliru. <document> bukan deklarasi dokumen HTML5.', is_correct: false },
  // Q5-A
  { id: 'o6-A5-1', question_id: 'q6000001-0000-0000-0000-000000000005', teks: '<body>', poin: 0, umpan_balik: 'Keliru. <body> adalah anak dari elemen root <html>.', is_correct: false },
  { id: 'o6-A5-2', question_id: 'q6000001-0000-0000-0000-000000000005', teks: '<head>', poin: 0, umpan_balik: 'Keliru. <head> berada di dalam elemen root <html>.', is_correct: false },
  { id: 'o6-A5-3', question_id: 'q6000001-0000-0000-0000-000000000005', teks: '<html>', poin: 10, umpan_balik: 'Tepat! <html> adalah elemen root yang membungkus seluruh isi dokumen.', is_correct: true },
  { id: 'o6-A5-4', question_id: 'q6000001-0000-0000-0000-000000000005', teks: '<title>', poin: 0, umpan_balik: 'Keliru. <title> berada di dalam <head>.', is_correct: false },
  // Q6-A
  { id: 'o6-A6-1', question_id: 'q6000001-0000-0000-0000-000000000006', teks: '<body>', poin: 0, umpan_balik: 'Keliru. <body> menyimpan konten visual yang tampil di layar.', is_correct: false },
  { id: 'o6-A6-2', question_id: 'q6000001-0000-0000-0000-000000000006', teks: '<head>', poin: 10, umpan_balik: 'Tepat! <head> memuat metadata halaman seperti title, charset, dan stylesheet.', is_correct: true },
  { id: 'o6-A6-3', question_id: 'q6000001-0000-0000-0000-000000000006', teks: '<footer>', poin: 0, umpan_balik: 'Keliru. <footer> adalah bagian bawah dari konten halaman.', is_correct: false },
  { id: 'o6-A6-4', question_id: 'q6000001-0000-0000-0000-000000000006', teks: '<section>', poin: 0, umpan_balik: 'Keliru. <section> mengelompokkan konten di dalam <body>.', is_correct: false },
  // Q7-A
  { id: 'o6-A7-1', question_id: 'q6000001-0000-0000-0000-000000000007', teks: '<head>', poin: 0, umpan_balik: 'Keliru. Isi <head> tidak ditampilkan langsung di area konten browser.', is_correct: false },
  { id: 'o6-A7-2', question_id: 'q6000001-0000-0000-0000-000000000007', teks: '<meta>', poin: 0, umpan_balik: 'Keliru. <meta> hanya menyimpan informasi metadata.', is_correct: false },
  { id: 'o6-A7-3', question_id: 'q6000001-0000-0000-0000-000000000007', teks: '<body>', poin: 10, umpan_balik: 'Tepat! Seluruh konten yang dilihat pengguna ditempatkan di dalam <body>.', is_correct: true },
  { id: 'o6-A7-4', question_id: 'q6000001-0000-0000-0000-000000000007', teks: '<title>', poin: 0, umpan_balik: 'Keliru. <title> hanya menentukan judul tab browser.', is_correct: false },
  // Q8-A
  { id: 'o6-A8-1', question_id: 'q6000001-0000-0000-0000-000000000008', teks: '<text>', poin: 0, umpan_balik: 'Keliru. <text> bukan tag paragraf HTML.', is_correct: false },
  { id: 'o6-A8-2', question_id: 'q6000001-0000-0000-0000-000000000008', teks: '<paragraph>', poin: 0, umpan_balik: 'Keliru. Tag paragraf ditulis singkat menjadi <p>.', is_correct: false },
  { id: 'o6-A8-3', question_id: 'q6000001-0000-0000-0000-000000000008', teks: '<p>', poin: 10, umpan_balik: 'Tepat! Tag <p> digunakan untuk mendefinisikan paragraf teks.', is_correct: true },
  { id: 'o6-A8-4', question_id: 'q6000001-0000-0000-0000-000000000008', teks: '<pg>', poin: 0, umpan_balik: 'Keliru. Tag yang valid adalah <p>.', is_correct: false },
  // Q9-A
  { id: 'o6-A9-1', question_id: 'q6000001-0000-0000-0000-000000000009', teks: '<h6>', poin: 0, umpan_balik: 'Keliru. <h6> justru merupakan tingkatan heading terkecil.', is_correct: false },
  { id: 'o6-A9-2', question_id: 'q6000001-0000-0000-0000-000000000009', teks: '<h4>', poin: 0, umpan_balik: 'Keliru. Masih ada heading tingkat lebih tinggi di atas <h4>.', is_correct: false },
  { id: 'o6-A9-3', question_id: 'q6000001-0000-0000-0000-000000000009', teks: '<head>', poin: 0, umpan_balik: 'Keliru. <head> adalah wadah metadata, bukan tag heading.', is_correct: false },
  { id: 'o6-A9-4', question_id: 'q6000001-0000-0000-0000-000000000009', teks: '<h1>', poin: 10, umpan_balik: 'Tepat! <h1> adalah heading utama dan memiliki ukuran/hierarki tertinggi.', is_correct: true },
  // Q10-A
  { id: 'o6-A10-1', question_id: 'q6000001-0000-0000-0000-000000000010', teks: '<h1>', poin: 0, umpan_balik: 'Keliru. <h1> adalah heading terbesar.', is_correct: false },
  { id: 'o6-A10-2', question_id: 'q6000001-0000-0000-0000-000000000010', teks: '<h6>', poin: 10, umpan_balik: 'Tepat! <h6> adalah tingkat heading terkecil dalam hierarki HTML (h1–h6).', is_correct: true },
  { id: 'o6-A10-3', question_id: 'q6000001-0000-0000-0000-000000000010', teks: '<small>', poin: 0, umpan_balik: 'Keliru. <small> adalah tag teks kecil (side-comment), bukan heading.', is_correct: false },
  { id: 'o6-A10-4', question_id: 'q6000001-0000-0000-0000-000000000010', teks: '<h5>', poin: 0, umpan_balik: 'Keliru. Masih ada <h6> yang lebih kecil dari <h5>.', is_correct: false },

  // ════════════ SET B OPTIONS ════════════
  // Q1-B (PG 11)
  { id: 'o6-B1-1', question_id: 'q6000003-0000-0000-0000-000000000001', teks: '<link>', poin: 0, umpan_balik: 'Keliru. <link> digunakan di dalam <head> untuk menghubungkan resource eksternal seperti CSS.', is_correct: false },
  { id: 'o6-B1-2', question_id: 'q6000003-0000-0000-0000-000000000001', teks: '<url>', poin: 0, umpan_balik: 'Keliru. Tidak ada tag <url> dalam HTML.', is_correct: false },
  { id: 'o6-B1-3', question_id: 'q6000003-0000-0000-0000-000000000001', teks: '<a>', poin: 10, umpan_balik: 'Tepat! Tag <a> (anchor) digunakan untuk membuat tautan/hyperlink.', is_correct: true },
  { id: 'o6-B1-4', question_id: 'q6000003-0000-0000-0000-000000000001', teks: '<href>', poin: 0, umpan_balik: 'Keliru. href adalah atribut dari tag <a>, bukan nama tag.', is_correct: false },
  // Q2-B (PG 12)
  { id: 'o6-B2-1', question_id: 'q6000003-0000-0000-0000-000000000002', teks: 'src', poin: 0, umpan_balik: 'Keliru. src digunakan pada tag seperti <img> atau <script>.', is_correct: false },
  { id: 'o6-B2-2', question_id: 'q6000003-0000-0000-0000-000000000002', teks: 'href', poin: 10, umpan_balik: 'Tepat! Atribut href (Hypertext Reference) menentukan URL tujuan tautan.', is_correct: true },
  { id: 'o6-B2-3', question_id: 'q6000003-0000-0000-0000-000000000002', teks: 'action', poin: 0, umpan_balik: 'Keliru. action digunakan pada tag <form> untuk tujuan pengiriman data.', is_correct: false },
  { id: 'o6-B2-4', question_id: 'q6000003-0000-0000-0000-000000000002', teks: 'target', poin: 0, umpan_balik: 'Keliru. target menentukan cara membuka link (misal _blank), bukan alamat tujuannya.', is_correct: false },
  // Q3-B (PG 13)
  { id: 'o6-B3-1', question_id: 'q6000003-0000-0000-0000-000000000003', teks: '<picture>', poin: 0, umpan_balik: 'Keliru. <picture> adalah wadah pembungkus sumber gambar responsif, sedangkan tag utama gambar adalah <img>.', is_correct: false },
  { id: 'o6-B3-2', question_id: 'q6000003-0000-0000-0000-000000000003', teks: '<image>', poin: 0, umpan_balik: 'Keliru. Tag HTML yang valid adalah <img>.', is_correct: false },
  { id: 'o6-B3-3', question_id: 'q6000003-0000-0000-0000-000000000003', teks: '<img>', poin: 10, umpan_balik: 'Tepat! Tag <img> digunakan untuk menyematkan gambar ke halaman HTML.', is_correct: true },
  { id: 'o6-B3-4', question_id: 'q6000003-0000-0000-0000-000000000003', teks: '<photo>', poin: 0, umpan_balik: 'Keliru. Tidak ada tag <photo> dalam HTML.', is_correct: false },
  // Q4-B (PG 14)
  { id: 'o6-B4-1', question_id: 'q6000003-0000-0000-0000-000000000004', teks: 'href', poin: 0, umpan_balik: 'Keliru. href digunakan pada hyperlink <a>.', is_correct: false },
  { id: 'o6-B4-2', question_id: 'q6000003-0000-0000-0000-000000000004', teks: 'src', poin: 10, umpan_balik: 'Tepat! Atribut src (source) menunjukkan path atau URL sumber gambar.', is_correct: true },
  { id: 'o6-B4-3', question_id: 'q6000003-0000-0000-0000-000000000004', teks: 'alt', poin: 0, umpan_balik: 'Keliru. alt berisi teks deskripsi alternatif gambar.', is_correct: false },
  { id: 'o6-B4-4', question_id: 'q6000003-0000-0000-0000-000000000004', teks: 'name', poin: 0, umpan_balik: 'Keliru. name biasa dipakai untuk menamai elemen form.', is_correct: false },
  // Q5-B (PG 15)
  { id: 'o6-B5-1', question_id: 'q6000003-0000-0000-0000-000000000005', teks: 'Mengubah ukuran gambar', poin: 0, umpan_balik: 'Keliru. Ukuran gambar diatur dengan width/height atau CSS.', is_correct: false },
  { id: 'o6-B5-2', question_id: 'q6000003-0000-0000-0000-000000000005', teks: 'Menentukan format gambar', poin: 0, umpan_balik: 'Keliru. Format gambar ditentukan oleh ekstensi/tipe file gambar.', is_correct: false },
  { id: 'o6-B5-3', question_id: 'q6000003-0000-0000-0000-000000000005', teks: 'Memberikan teks alternatif jika gambar gagal dimuat', poin: 10, umpan_balik: 'Tepat! Atribut alt menampilkan teks pengganti saat gambar gagal dimuat serta mendukung pembaca layar (screen reader).', is_correct: true },
  { id: 'o6-B5-4', question_id: 'q6000003-0000-0000-0000-000000000005', teks: 'Menyimpan gambar', poin: 0, umpan_balik: 'Keliru. alt adalah teks deskripsi, bukan penyimpanan file.', is_correct: false },
  // Q6-B (PG 16)
  { id: 'o6-B6-1', question_id: 'q6000003-0000-0000-0000-000000000006', teks: '<ul>', poin: 0, umpan_balik: 'Keliru. <ul> adalah unordered list (daftar tidak berurutan).', is_correct: false },
  { id: 'o6-B6-2', question_id: 'q6000003-0000-0000-0000-000000000006', teks: '<ol>', poin: 10, umpan_balik: 'Tepat! <ol> (ordered list) membuat daftar bernomor atau berurutan.', is_correct: true },
  { id: 'o6-B6-3', question_id: 'q6000003-0000-0000-0000-000000000006', teks: '<li>', poin: 0, umpan_balik: 'Keliru. <li> adalah elemen item di dalam <ol> atau <ul>.', is_correct: false },
  { id: 'o6-B6-4', question_id: 'q6000003-0000-0000-0000-000000000006', teks: '<dl>', poin: 0, umpan_balik: 'Keliru. <dl> adalah description list.', is_correct: false },
  // Q7-B (PG 17)
  { id: 'o6-B7-1', question_id: 'q6000003-0000-0000-0000-000000000007', teks: '<ul>', poin: 10, umpan_balik: 'Tepat! <ul> (unordered list) membuat daftar berpoin (bullet).', is_correct: true },
  { id: 'o6-B7-2', question_id: 'q6000003-0000-0000-0000-000000000007', teks: '<ol>', poin: 0, umpan_balik: 'Keliru. <ol> digunakan untuk daftar berurutan.', is_correct: false },
  { id: 'o6-B7-3', question_id: 'q6000003-0000-0000-0000-000000000007', teks: '<li>', poin: 0, umpan_balik: 'Keliru. <li> adalah item pembentuk daftar.', is_correct: false },
  { id: 'o6-B7-4', question_id: 'q6000003-0000-0000-0000-000000000007', teks: '<table>', poin: 0, umpan_balik: 'Keliru. <table> digunakan untuk membuat tabel.', is_correct: false },
  // Q8-B (PG 18)
  { id: 'o6-B8-1', question_id: 'q6000003-0000-0000-0000-000000000008', teks: '<list>', poin: 0, umpan_balik: 'Keliru. Tidak ada tag <list> dalam HTML.', is_correct: false },
  { id: 'o6-B8-2', question_id: 'q6000003-0000-0000-0000-000000000008', teks: '<item>', poin: 0, umpan_balik: 'Keliru. Tag item daftar adalah <li>.', is_correct: false },
  { id: 'o6-B8-3', question_id: 'q6000003-0000-0000-0000-000000000008', teks: '<li>', poin: 10, umpan_balik: 'Tepat! Setiap item dalam daftar <ol> maupun <ul> dibungkus tag <li> (list item).', is_correct: true },
  { id: 'o6-B8-4', question_id: 'q6000003-0000-0000-0000-000000000008', teks: '<content>', poin: 0, umpan_balik: 'Keliru. <content> bukan tag standar untuk elemen daftar.', is_correct: false },
  // Q9-B (PG 19)
  { id: 'o6-B9-1', question_id: 'q6000003-0000-0000-0000-000000000009', teks: '<tb>', poin: 0, umpan_balik: 'Keliru. Tag pembungkus tabel adalah <table>.', is_correct: false },
  { id: 'o6-B9-2', question_id: 'q6000003-0000-0000-0000-000000000009', teks: '<td>', poin: 0, umpan_balik: 'Keliru. <td> adalah sel data di dalam baris tabel.', is_correct: false },
  { id: 'o6-B9-3', question_id: 'q6000003-0000-0000-0000-000000000009', teks: '<table>', poin: 10, umpan_balik: 'Tepat! Tag <table> digunakan sebagai pembungkus utama struktur tabel.', is_correct: true },
  { id: 'o6-B9-4', question_id: 'q6000003-0000-0000-0000-000000000009', teks: '<tbl>', poin: 0, umpan_balik: 'Keliru. Tidak ada tag <tbl> dalam HTML.', is_correct: false },
  // Q10-B (PG 20)
  { id: 'o6-B10-1', question_id: 'q6000003-0000-0000-0000-000000000010', teks: '<td>', poin: 0, umpan_balik: 'Keliru. <td> adalah sel kolom data di dalam baris.', is_correct: false },
  { id: 'o6-B10-2', question_id: 'q6000003-0000-0000-0000-000000000010', teks: '<th>', poin: 0, umpan_balik: 'Keliru. <th> adalah sel header tabel.', is_correct: false },
  { id: 'o6-B10-3', question_id: 'q6000003-0000-0000-0000-000000000010', teks: '<row>', poin: 0, umpan_balik: 'Keliru. Tag baris tabel ditulis singkat menjadi <tr>.', is_correct: false },
  { id: 'o6-B10-4', question_id: 'q6000003-0000-0000-0000-000000000010', teks: '<tr>', poin: 10, umpan_balik: 'Tepat! <tr> (table row) mendefinisikan satu baris pada tabel HTML.', is_correct: true },

  // ════════════ SET C OPTIONS ════════════
  // Q1-C (PG 21)
  { id: 'o6-C1-1', question_id: 'q6000005-0000-0000-0000-000000000001', teks: '<td>', poin: 10, umpan_balik: 'Tepat! <td> (table data) digunakan untuk membuat sel isi data pada tabel.', is_correct: true },
  { id: 'o6-C1-2', question_id: 'q6000005-0000-0000-0000-000000000001', teks: '<tr>', poin: 0, umpan_balik: 'Keliru. <tr> mendefinisikan baris tabel, bukan sel data.', is_correct: false },
  { id: 'o6-C1-3', question_id: 'q6000005-0000-0000-0000-000000000001', teks: '<th>', poin: 0, umpan_balik: 'Keliru. <th> digunakan khusus untuk sel judul/header kolom.', is_correct: false },
  { id: 'o6-C1-4', question_id: 'q6000005-0000-0000-0000-000000000001', teks: '<cell>', poin: 0, umpan_balik: 'Keliru. Tidak ada tag <cell> dalam HTML.', is_correct: false },
  // Q2-C (PG 22)
  { id: 'o6-C2-1', question_id: 'q6000005-0000-0000-0000-000000000002', teks: '<input>', poin: 0, umpan_balik: 'Keliru. <input> adalah elemen isian di dalam formulir.', is_correct: false },
  { id: 'o6-C2-2', question_id: 'q6000005-0000-0000-0000-000000000002', teks: '<button>', poin: 0, umpan_balik: 'Keliru. <button> adalah tombol aksi di dalam formulir.', is_correct: false },
  { id: 'o6-C2-3', question_id: 'q6000005-0000-0000-0000-000000000002', teks: '<form>', poin: 10, umpan_balik: 'Tepat! Tag <form> menjadi wadah utama untuk formulir input pengguna.', is_correct: true },
  { id: 'o6-C2-4', question_id: 'q6000005-0000-0000-0000-000000000002', teks: '<fieldset>', poin: 0, umpan_balik: 'Keliru. <fieldset> hanya mengelompokkan beberapa kontrol di dalam <form>.', is_correct: false },
  // Q3-C (PG 23)
  { id: 'o6-C3-1', question_id: 'q6000005-0000-0000-0000-000000000003', teks: '<entry>', poin: 0, umpan_balik: 'Keliru. Tidak ada tag <entry> dalam HTML.', is_correct: false },
  { id: 'o6-C3-2', question_id: 'q6000005-0000-0000-0000-000000000003', teks: '<insert>', poin: 0, umpan_balik: 'Keliru. Tidak ada tag <insert> dalam HTML.', is_correct: false },
  { id: 'o6-C3-3', question_id: 'q6000005-0000-0000-0000-000000000003', teks: '<data>', poin: 0, umpan_balik: 'Keliru. <data> digunakan untuk mengaitkan nilai terjemahan mesin, bukan input pengguna.', is_correct: false },
  { id: 'o6-C3-4', question_id: 'q6000005-0000-0000-0000-000000000003', teks: '<input>', poin: 10, umpan_balik: 'Tepat! Elemen <input> menerima masukan data dari pengguna (teks, email, password, dll.).', is_correct: true },
  // Q4-C (PG 24)
  { id: 'o6-C4-1', question_id: 'q6000005-0000-0000-0000-000000000004', teks: '<btn>', poin: 0, umpan_balik: 'Keliru. btn umumnya hanya nama class CSS, bukan tag HTML.', is_correct: false },
  { id: 'o6-C4-2', question_id: 'q6000005-0000-0000-0000-000000000004', teks: '<button>', poin: 10, umpan_balik: 'Tepat! Tag <button> mendefinisikan tombol yang dapat diklik pengguna.', is_correct: true },
  { id: 'o6-C4-3', question_id: 'q6000005-0000-0000-0000-000000000004', teks: '<click>', poin: 0, umpan_balik: 'Keliru. Tidak ada tag <click> dalam HTML.', is_correct: false },
  { id: 'o6-C4-4', question_id: 'q6000005-0000-0000-0000-000000000004', teks: '<submitbtn>', poin: 0, umpan_balik: 'Keliru. Tidak ada tag <submitbtn> dalam HTML.', is_correct: false },
  // Q5-C (PG 25)
  { id: 'o6-C5-1', question_id: 'q6000005-0000-0000-0000-000000000005', teks: 'Mempercepat server', poin: 0, umpan_balik: 'Keliru. Tag semantik berkaitan dengan struktur dokumen di klien, bukan kecepatan server.', is_correct: false },
  { id: 'o6-C5-2', question_id: 'q6000005-0000-0000-0000-000000000005', teks: 'Memberikan makna pada struktur halaman', poin: 10, umpan_balik: 'Tepat! HTML semantik memberi arti jelas pada setiap bagian halaman bagi browser, mesin pencari (SEO), dan screen reader.', is_correct: true },
  { id: 'o6-C5-3', question_id: 'q6000005-0000-0000-0000-000000000005', teks: 'Menggantikan CSS', poin: 0, umpan_balik: 'Keliru. Styling tetap ditangani oleh CSS.', is_correct: false },
  { id: 'o6-C5-4', question_id: 'q6000005-0000-0000-0000-000000000005', teks: 'Menggantikan JavaScript', poin: 0, umpan_balik: 'Keliru. Interaktivitas dinamis tetap membutuhkan JavaScript.', is_correct: false },
  // Q6-C (PG 26)
  { id: 'o6-C6-1', question_id: 'q6000005-0000-0000-0000-000000000006', teks: '<div>', poin: 0, umpan_balik: 'Keliru. <div> adalah container non-semantik.', is_correct: false },
  { id: 'o6-C6-2', question_id: 'q6000005-0000-0000-0000-000000000006', teks: '<span>', poin: 0, umpan_balik: 'Keliru. <span> adalah pembungkus inline non-semantik.', is_correct: false },
  { id: 'o6-C6-3', question_id: 'q6000005-0000-0000-0000-000000000006', teks: '<article>', poin: 10, umpan_balik: 'Tepat! <article> adalah tag semantik HTML5 yang merepresentasikan konten mandiri.', is_correct: true },
  { id: 'o6-C6-4', question_id: 'q6000005-0000-0000-0000-000000000006', teks: '<font>', poin: 0, umpan_balik: 'Keliru. <font> adalah tag presentasional usang (deprecated) di HTML4.', is_correct: false },
  // Q7-C (PG 27)
  { id: 'o6-C7-1', question_id: 'q6000005-0000-0000-0000-000000000007', teks: 'Bagian awal halaman atau section', poin: 10, umpan_balik: 'Tepat! Tag <header> menandai area pengantar atau navigasi di bagian atas halaman/section.', is_correct: true },
  { id: 'o6-C7-2', question_id: 'q6000005-0000-0000-0000-000000000007', teks: 'Menampilkan gambar', poin: 0, umpan_balik: 'Keliru. Menampilkan gambar menggunakan tag <img>.', is_correct: false },
  { id: 'o6-C7-3', question_id: 'q6000005-0000-0000-0000-000000000007', teks: 'Menyimpan data', poin: 0, umpan_balik: 'Keliru. <header> adalah elemen struktur semantik.', is_correct: false },
  { id: 'o6-C7-4', question_id: 'q6000005-0000-0000-0000-000000000007', teks: 'Membuat form', poin: 0, umpan_balik: 'Keliru. Membuat form menggunakan tag <form>.', is_correct: false },
  // Q8-C (PG 28)
  { id: 'o6-C8-1', question_id: 'q6000005-0000-0000-0000-000000000008', teks: 'Membuat hyperlink', poin: 0, umpan_balik: 'Keliru. Hyperlink dibuat dengan tag <a>.', is_correct: false },
  { id: 'o6-C8-2', question_id: 'q6000005-0000-0000-0000-000000000008', teks: 'Wadah atau container umum', poin: 10, umpan_balik: 'Tepat! <div> digunakan sebagai wadah pengelompokan elemen secara umum untuk styling layout.', is_correct: true },
  { id: 'o6-C8-3', question_id: 'q6000005-0000-0000-0000-000000000008', teks: 'Membuat tabel', poin: 0, umpan_balik: 'Keliru. Tabel dibuat dengan tag <table>.', is_correct: false },
  { id: 'o6-C8-4', question_id: 'q6000005-0000-0000-0000-000000000008', teks: 'Membuat heading', poin: 0, umpan_balik: 'Keliru. Heading dibuat dengan tag <h1>–<h6>.', is_correct: false },
  // Q9-C (PG 29)
  { id: 'o6-C9-1', question_id: 'q6000005-0000-0000-0000-000000000009', teks: 'Tidak menutup tag', poin: 0, umpan_balik: 'Keliru. Tag berpasangan harus ditutup rapi agar struktur DOM tidak rusak.', is_correct: false },
  { id: 'o6-C9-2', question_id: 'q6000005-0000-0000-0000-000000000009', teks: 'Menulis semua kode dalam satu baris', poin: 0, umpan_balik: 'Keliru. Menulis semua kode dalam satu baris menyulitkan pembacaan dan debugging.', is_correct: false },
  { id: 'o6-C9-3', question_id: 'q6000005-0000-0000-0000-000000000009', teks: 'Menggunakan indentasi yang rapi', poin: 10, umpan_balik: 'Tepat! Indentasi konsisten mempermudah pembacaan hierarki elemen dan pemeliharaan kode.', is_correct: true },
  { id: 'o6-C9-4', question_id: 'q6000005-0000-0000-0000-000000000009', teks: 'Menghapus atribut penting', poin: 0, umpan_balik: 'Keliru. Atribut penting seperti alt, href, dan lang wajib dipertahankan.', is_correct: false },
  // Q10-C (PG 30)
  { id: 'o6-C10-1', question_id: 'q6000005-0000-0000-0000-000000000010', teks: 'HTML untuk struktur, CSS untuk tampilan, JavaScript untuk interaksi', poin: 10, umpan_balik: 'Tepat! Ketiganya saling melengkapi: HTML membangun kerangka struktur, CSS mempercantik tampilan, dan JavaScript mengatur logika interaktif.', is_correct: true },
  { id: 'o6-C10-2', question_id: 'q6000005-0000-0000-0000-000000000010', teks: 'HTML untuk tampilan, CSS untuk database, JavaScript untuk server', poin: 0, umpan_balik: 'Keliru. Peran HTML dan CSS tertukar, serta CSS bukan untuk database.', is_correct: false },
  { id: 'o6-C10-3', question_id: 'q6000005-0000-0000-0000-000000000010', teks: 'HTML untuk backend, CSS untuk frontend, JavaScript untuk database', poin: 0, umpan_balik: 'Keliru. HTML dan CSS berjalan di sisi klien (frontend).', is_correct: false },
  { id: 'o6-C10-4', question_id: 'q6000005-0000-0000-0000-000000000010', teks: 'Semua salah', poin: 0, umpan_balik: 'Keliru. Pilihan pertama menjelaskan pembagian peran yang benar.', is_correct: false }
];

// ─── ESSAY RUBRICS (15 Rubrik untuk Essay 1–15) ───────────────────────────────
// ⚠️ WAJIB DIJAGA DI SERVER — TIDAK PERNAH DIKIRIM KE CLIENT
export const modul6Rubrics = [
  // ════════════ SET A ESSAY RUBRICS (1–5) ════════════
  {
    id: 'er-0000006-0000-0000-0000-000000000001',
    question_id: 'q6000002-0000-0000-0000-000000000001',
    kunci_jawaban: 'HTML (HyperText Markup Language) adalah bahasa markup yang digunakan untuk menyusun struktur dan konten halaman web.',
    kata_kunci: ['html', 'hypertext markup language', 'bahasa markup', 'struktur web', 'konten'],
    rubrik_skor: {
      '10': '>=80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'Konsep inti benar, namun terdapat 1 unsur penjelas penting yang belum disebutkan',
      '8': 'Sekitar 60% konsep benar, namun penjelasan masih terlalu umum atau kurang lengkap',
      '7': 'Hanya menyebutkan ide umum tanpa kedalaman konsep sesuai materi',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  },
  {
    id: 'er-0000006-0000-0000-0000-000000000002',
    question_id: 'q6000002-0000-0000-0000-000000000002',
    kunci_jawaban: 'Karena HTML berfungsi memberi struktur dan makna pada konten, bukan menjalankan logika, perhitungan, atau proses pemrograman.',
    kata_kunci: ['struktur', 'markup', 'bukan logika', 'bukan perhitungan', 'makna'],
    rubrik_skor: {
      '10': '>=80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'Konsep inti benar, namun terdapat 1 unsur penjelas penting yang belum disebutkan',
      '8': 'Sekitar 60% konsep benar, namun penjelasan masih terlalu umum atau kurang lengkap',
      '7': 'Hanya menyebutkan ide umum tanpa kedalaman konsep sesuai materi',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  },
  {
    id: 'er-0000006-0000-0000-0000-000000000003',
    question_id: 'q6000002-0000-0000-0000-000000000003',
    kunci_jawaban: 'Tag <html> adalah elemen root yang membungkus seluruh isi dokumen HTML.',
    kata_kunci: ['root element', 'root', 'elemen utama', 'seluruh dokumen', 'membungkus'],
    rubrik_skor: {
      '10': '>=80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'Konsep inti benar, namun terdapat 1 unsur penjelas penting yang belum disebutkan',
      '8': 'Sekitar 60% konsep benar, namun penjelasan masih terlalu umum atau kurang lengkap',
      '7': 'Hanya menyebutkan ide umum tanpa kedalaman konsep sesuai materi',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  },
  {
    id: 'er-0000006-0000-0000-0000-000000000004',
    question_id: 'q6000002-0000-0000-0000-000000000004',
    kunci_jawaban: 'Tag <head> menyimpan metadata seperti title, charset, stylesheet, dan informasi yang tidak ditampilkan langsung ke pengguna.',
    kata_kunci: ['metadata', 'title', 'stylesheet', 'informasi halaman', 'charset'],
    rubrik_skor: {
      '10': '>=80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'Konsep inti benar, namun terdapat 1 unsur penjelas penting yang belum disebutkan',
      '8': 'Sekitar 60% konsep benar, namun penjelasan masih terlalu umum atau kurang lengkap',
      '7': 'Hanya menyebutkan ide umum tanpa kedalaman konsep sesuai materi',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  },
  {
    id: 'er-0000006-0000-0000-0000-000000000005',
    question_id: 'q6000002-0000-0000-0000-000000000005',
    kunci_jawaban: 'Tag <body> berisi seluruh konten yang ditampilkan kepada pengguna pada halaman web.',
    kata_kunci: ['konten', 'ditampilkan', 'pengguna', 'halaman web'],
    rubrik_skor: {
      '10': '>=80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'Konsep inti benar, namun terdapat 1 unsur penjelas penting yang belum disebutkan',
      '8': 'Sekitar 60% konsep benar, namun penjelasan masih terlalu umum atau kurang lengkap',
      '7': 'Hanya menyebutkan ide umum tanpa kedalaman konsep sesuai materi',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  },

  // ════════════ SET B ESSAY RUBRICS (6–10) ════════════
  {
    id: 'er-0000006-0000-0000-0000-000000000006',
    question_id: 'q6000004-0000-0000-0000-000000000001',
    kunci_jawaban: 'Heading digunakan sebagai judul atau hierarki informasi, sedangkan paragraf digunakan untuk isi atau penjelasan teks.',
    kata_kunci: ['heading', 'judul', 'paragraf', 'isi teks', 'hierarki'],
    rubrik_skor: {
      '10': '>=80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'Konsep inti benar, namun terdapat 1 unsur penjelas penting yang belum disebutkan',
      '8': 'Sekitar 60% konsep benar, namun penjelasan masih terlalu umum atau kurang lengkap',
      '7': 'Hanya menyebutkan ide umum tanpa kedalaman konsep sesuai materi',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  },
  {
    id: 'er-0000006-0000-0000-0000-000000000007',
    question_id: 'q6000004-0000-0000-0000-000000000002',
    kunci_jawaban: 'Tag <a> digunakan untuk membuat hyperlink yang menghubungkan pengguna ke halaman atau sumber lain.',
    kata_kunci: ['hyperlink', 'navigasi', 'href', 'link', 'halaman lain'],
    rubrik_skor: {
      '10': '>=80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'Konsep inti benar, namun terdapat 1 unsur penjelas penting yang belum disebutkan',
      '8': 'Sekitar 60% konsep benar, namun penjelasan masih terlalu umum atau kurang lengkap',
      '7': 'Hanya menyebutkan ide umum tanpa kedalaman konsep sesuai materi',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  },
  {
    id: 'er-0000006-0000-0000-0000-000000000008',
    question_id: 'q6000004-0000-0000-0000-000000000003',
    kunci_jawaban: 'Alt memberikan teks alternatif saat gambar gagal dimuat dan membantu aksesibilitas bagi pengguna dengan kebutuhan khusus.',
    kata_kunci: ['alt', 'teks alternatif', 'aksesibilitas', 'screen reader', 'gagal dimuat'],
    rubrik_skor: {
      '10': '>=80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'Konsep inti benar, namun terdapat 1 unsur penjelas penting yang belum disebutkan',
      '8': 'Sekitar 60% konsep benar, namun penjelasan masih terlalu umum atau kurang lengkap',
      '7': 'Hanya menyebutkan ide umum tanpa kedalaman konsep sesuai materi',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  },
  {
    id: 'er-0000006-0000-0000-0000-000000000009',
    question_id: 'q6000004-0000-0000-0000-000000000004',
    kunci_jawaban: '<ol> membuat daftar berurutan (bernomor), sedangkan <ul> membuat daftar tidak berurutan (bullet).',
    kata_kunci: ['ol', 'ul', 'berurutan', 'tidak berurutan', 'bernomor', 'bullet'],
    rubrik_skor: {
      '10': '>=80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'Konsep inti benar, namun terdapat 1 unsur penjelas penting yang belum disebutkan',
      '8': 'Sekitar 60% konsep benar, namun penjelasan masih terlalu umum atau kurang lengkap',
      '7': 'Hanya menyebutkan ide umum tanpa kedalaman konsep sesuai materi',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  },
  {
    id: 'er-0000006-0000-0000-0000-000000000010',
    question_id: 'q6000004-0000-0000-0000-000000000005',
    kunci_jawaban: 'Tabel digunakan untuk menyajikan data dalam bentuk baris dan kolom agar mudah dibaca.',
    kata_kunci: ['tabel', 'baris', 'kolom', 'data'],
    rubrik_skor: {
      '10': '>=80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'Konsep inti benar, namun terdapat 1 unsur penjelas penting yang belum disebutkan',
      '8': 'Sekitar 60% konsep benar, namun penjelasan masih terlalu umum atau kurang lengkap',
      '7': 'Hanya menyebutkan ide umum tanpa kedalaman konsep sesuai materi',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  },

  // ════════════ SET C ESSAY RUBRICS (11–15) ════════════
  {
    id: 'er-0000006-0000-0000-0000-000000000011',
    question_id: 'q6000006-0000-0000-0000-000000000001',
    kunci_jawaban: 'Form digunakan untuk mengumpulkan data atau input dari pengguna.',
    kata_kunci: ['form', 'input', 'data pengguna', 'mengumpulkan data'],
    rubrik_skor: {
      '10': '>=80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'Konsep inti benar, namun terdapat 1 unsur penjelas penting yang belum disebutkan',
      '8': 'Sekitar 60% konsep benar, namun penjelasan masih terlalu umum atau kurang lengkap',
      '7': 'Hanya menyebutkan ide umum tanpa kedalaman konsep sesuai materi',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  },
  {
    id: 'er-0000006-0000-0000-0000-000000000012',
    question_id: 'q6000006-0000-0000-0000-000000000002',
    kunci_jawaban: 'HTML Semantik menggunakan elemen yang memiliki makna jelas sehingga struktur halaman lebih mudah dipahami oleh developer, browser, dan mesin pencari.',
    kata_kunci: ['semantik', 'makna', 'struktur', 'seo', 'mesin pencari'],
    rubrik_skor: {
      '10': '>=80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'Konsep inti benar, namun terdapat 1 unsur penjelas penting yang belum disebutkan',
      '8': 'Sekitar 60% konsep benar, namun penjelasan masih terlalu umum atau kurang lengkap',
      '7': 'Hanya menyebutkan ide umum tanpa kedalaman konsep sesuai materi',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  },
  {
    id: 'er-0000006-0000-0000-0000-000000000013',
    question_id: 'q6000006-0000-0000-0000-000000000003',
    kunci_jawaban: '<div> adalah container umum tanpa makna semantik, sedangkan <article> mewakili konten mandiri yang memiliki makna semantik.',
    kata_kunci: ['div', 'article', 'semantik', 'container', 'konten mandiri'],
    rubrik_skor: {
      '10': '>=80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'Konsep inti benar, namun terdapat 1 unsur penjelas penting yang belum disebutkan',
      '8': 'Sekitar 60% konsep benar, namun penjelasan masih terlalu umum atau kurang lengkap',
      '7': 'Hanya menyebutkan ide umum tanpa kedalaman konsep sesuai materi',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  },
  {
    id: 'er-0000006-0000-0000-0000-000000000014',
    question_id: 'q6000006-0000-0000-0000-000000000004',
    kunci_jawaban: 'Indentasi membuat kode lebih rapi, mudah dibaca, dipelihara, dan diperbaiki oleh developer.',
    kata_kunci: ['indentasi', 'rapi', 'mudah dibaca', 'maintenance', 'dipelihara'],
    rubrik_skor: {
      '10': '>=80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'Konsep inti benar, namun terdapat 1 unsur penjelas penting yang belum disebutkan',
      '8': 'Sekitar 60% konsep benar, namun penjelasan masih terlalu umum atau kurang lengkap',
      '7': 'Hanya menyebutkan ide umum tanpa kedalaman konsep sesuai materi',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  },
  {
    id: 'er-0000006-0000-0000-0000-000000000015',
    question_id: 'q6000006-0000-0000-0000-000000000005',
    kunci_jawaban: 'HTML membangun struktur halaman, CSS mengatur tampilan visual, dan JavaScript menambahkan interaktivitas serta perilaku dinamis pada website.',
    kata_kunci: ['html struktur', 'css tampilan', 'javascript interaktivitas', 'struktur', 'tampilan', 'interaktivitas'],
    rubrik_skor: {
      '10': '>=80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'Konsep inti benar, namun terdapat 1 unsur penjelas penting yang belum disebutkan',
      '8': 'Sekitar 60% konsep benar, namun penjelasan masih terlalu umum atau kurang lengkap',
      '7': 'Hanya menyebutkan ide umum tanpa kedalaman konsep sesuai materi',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  }
];