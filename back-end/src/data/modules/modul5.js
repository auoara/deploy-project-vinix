/**
 * Bank Soal & Rubrik Penilaian — Modul 5: UI & Prototyping
 * Total: 45 Soal (Set A: 10 PG + 5 Essay | Set B: 10 PG + 5 Essay | Set C: 10 PG + 5 Essay)
 * Course ID: c0000005-0000-0000-0000-000000000005
 */

const now = () => new Date().toISOString();
const COURSE_ID = 'c0000005-0000-0000-0000-000000000005';

// ─── 1. QUESTIONS (45 Soal) ───────────────────────────────────────────────────
export const modul5Questions = [
  // ════════════ SET A – 10 Pilihan Ganda ════════════
  { id: 'q5000001-0000-0000-0000-000000000001', course_id: COURSE_ID, set_paket: 'A', topik: 'Konsep Prototype', tipe: 'pilihan_ganda', teks: 'Apa yang dimaksud dengan prototype dalam UI/UX?', urutan: 1, created_at: now() },
  { id: 'q5000001-0000-0000-0000-000000000002', course_id: COURSE_ID, set_paket: 'A', topik: 'Tujuan Prototyping', tipe: 'pilihan_ganda', teks: 'Tujuan utama pembuatan prototype adalah...', urutan: 2, created_at: now() },
  { id: 'q5000001-0000-0000-0000-000000000003', course_id: COURSE_ID, set_paket: 'A', topik: 'Manfaat Prototyping', tipe: 'pilihan_ganda', teks: 'Prototype membantu tim untuk...', urutan: 3, created_at: now() },
  { id: 'q5000001-0000-0000-0000-000000000004', course_id: COURSE_ID, set_paket: 'A', topik: 'Low-Fidelity Prototype', tipe: 'pilihan_ganda', teks: 'Low-Fidelity Prototype biasanya dibuat dengan...', urutan: 4, created_at: now() },
  { id: 'q5000001-0000-0000-0000-000000000005', course_id: COURSE_ID, set_paket: 'A', topik: 'High-Fidelity Prototype', tipe: 'pilihan_ganda', teks: 'High-Fidelity Prototype memiliki karakteristik...', urutan: 5, created_at: now() },
  { id: 'q5000001-0000-0000-0000-000000000006', course_id: COURSE_ID, set_paket: 'A', topik: 'Manfaat Prototyping', tipe: 'pilihan_ganda', teks: 'Keuntungan menggunakan prototype sebelum coding adalah...', urutan: 6, created_at: now() },
  { id: 'q5000001-0000-0000-0000-000000000007', course_id: COURSE_ID, set_paket: 'A', topik: 'Tools Prototyping', tipe: 'pilihan_ganda', teks: 'Software yang paling sering digunakan untuk membuat prototype UI adalah...', urutan: 7, created_at: now() },
  { id: 'q5000001-0000-0000-0000-000000000008', course_id: COURSE_ID, set_paket: 'A', topik: 'Interaksi Prototype', tipe: 'pilihan_ganda', teks: 'Komponen yang menghubungkan satu layar ke layar lain pada prototype disebut...', urutan: 8, created_at: now() },
  { id: 'q5000001-0000-0000-0000-000000000009', course_id: COURSE_ID, set_paket: 'A', topik: 'Interaksi Prototype', tipe: 'pilihan_ganda', teks: 'Prototype interaktif digunakan untuk...', urutan: 9, created_at: now() },
  { id: 'q5000001-0000-0000-0000-000000000010', course_id: COURSE_ID, set_paket: 'A', topik: 'Komponen UI', tipe: 'pilihan_ganda', teks: 'Tombol (Button) dalam UI berfungsi untuk...', urutan: 10, created_at: now() },

  // ════════════ SET A – 5 Essay ════════════
  { id: 'q5000002-0000-0000-0000-000000000001', course_id: COURSE_ID, set_paket: 'A', topik: 'Konsep Prototype', tipe: 'essay', teks: 'Jelaskan pengertian prototype dalam UI/UX!', urutan: 11, created_at: now() },
  { id: 'q5000002-0000-0000-0000-000000000002', course_id: COURSE_ID, set_paket: 'A', topik: 'Tujuan Prototyping', tipe: 'essay', teks: 'Mengapa prototype penting dalam proses pengembangan produk?', urutan: 12, created_at: now() },
  { id: 'q5000002-0000-0000-0000-000000000003', course_id: COURSE_ID, set_paket: 'A', topik: 'Low-Fidelity vs High-Fidelity', tipe: 'essay', teks: 'Jelaskan perbedaan Low-Fidelity dan High-Fidelity Prototype!', urutan: 13, created_at: now() },
  { id: 'q5000002-0000-0000-0000-000000000004', course_id: COURSE_ID, set_paket: 'A', topik: 'Clickable Prototype', tipe: 'essay', teks: 'Apa manfaat clickable prototype?', urutan: 14, created_at: now() },
  { id: 'q5000002-0000-0000-0000-000000000005', course_id: COURSE_ID, set_paket: 'A', topik: 'Iterasi & Feedback', tipe: 'essay', teks: 'Mengapa feedback pengguna penting dalam prototyping?', urutan: 15, created_at: now() },

  // ════════════ SET B – 10 Pilihan Ganda ════════════
  { id: 'q5000003-0000-0000-0000-000000000001', course_id: COURSE_ID, set_paket: 'B', topik: 'Komponen Form', tipe: 'pilihan_ganda', teks: 'Input Field digunakan untuk...', urutan: 1, created_at: now() },
  { id: 'q5000003-0000-0000-0000-000000000002', course_id: COURSE_ID, set_paket: 'B', topik: 'Komponen Form', tipe: 'pilihan_ganda', teks: 'Dropdown digunakan ketika...', urutan: 2, created_at: now() },
  { id: 'q5000003-0000-0000-0000-000000000003', course_id: COURSE_ID, set_paket: 'B', topik: 'Komponen Form', tipe: 'pilihan_ganda', teks: 'Checkbox biasanya digunakan untuk...', urutan: 3, created_at: now() },
  { id: 'q5000003-0000-0000-0000-000000000004', course_id: COURSE_ID, set_paket: 'B', topik: 'Komponen Form', tipe: 'pilihan_ganda', teks: 'Radio Button digunakan untuk...', urutan: 4, created_at: now() },
  { id: 'q5000003-0000-0000-0000-000000000005', course_id: COURSE_ID, set_paket: 'B', topik: 'Komponen Form', tipe: 'pilihan_ganda', teks: 'Toggle Switch umumnya digunakan untuk...', urutan: 5, created_at: now() },
  { id: 'q5000003-0000-0000-0000-000000000006', course_id: COURSE_ID, set_paket: 'B', topik: 'Konsistensi UI', tipe: 'pilihan_ganda', teks: 'Konsistensi dalam prototyping penting karena...', urutan: 6, created_at: now() },
  { id: 'q5000003-0000-0000-0000-000000000007', course_id: COURSE_ID, set_paket: 'B', topik: 'User Testing', tipe: 'pilihan_ganda', teks: 'User Testing dilakukan untuk...', urutan: 7, created_at: now() },
  { id: 'q5000003-0000-0000-0000-000000000008', course_id: COURSE_ID, set_paket: 'B', topik: 'Iterasi & Feedback', tipe: 'pilihan_ganda', teks: 'Feedback pengguna digunakan untuk...', urutan: 8, created_at: now() },
  { id: 'q5000003-0000-0000-0000-000000000009', course_id: COURSE_ID, set_paket: 'B', topik: 'Call To Action (CTA)', tipe: 'pilihan_ganda', teks: 'Call To Action (CTA) adalah...', urutan: 9, created_at: now() },
  { id: 'q5000003-0000-0000-0000-000000000010', course_id: COURSE_ID, set_paket: 'B', topik: 'Landing Page & CTA', tipe: 'pilihan_ganda', teks: 'Landing Page yang baik harus memiliki...', urutan: 10, created_at: now() },

  // ════════════ SET B – 5 Essay ════════════
  { id: 'q5000004-0000-0000-0000-000000000001', course_id: COURSE_ID, set_paket: 'B', topik: 'Komponen UI', tipe: 'essay', teks: 'Jelaskan fungsi Button dalam antarmuka pengguna!', urutan: 11, created_at: now() },
  { id: 'q5000004-0000-0000-0000-000000000002', course_id: COURSE_ID, set_paket: 'B', topik: 'Komponen Form', tipe: 'essay', teks: 'Apa fungsi Input Field?', urutan: 12, created_at: now() },
  { id: 'q5000004-0000-0000-0000-000000000003', course_id: COURSE_ID, set_paket: 'B', topik: 'Komponen Form', tipe: 'essay', teks: 'Kapan Dropdown lebih baik digunakan dibandingkan Radio Button?', urutan: 13, created_at: now() },
  { id: 'q5000004-0000-0000-0000-000000000004', course_id: COURSE_ID, set_paket: 'B', topik: 'Konsistensi UI', tipe: 'essay', teks: 'Jelaskan pentingnya konsistensi dalam desain UI!', urutan: 14, created_at: now() },
  { id: 'q5000004-0000-0000-0000-000000000005', course_id: COURSE_ID, set_paket: 'B', topik: 'User Testing', tipe: 'essay', teks: 'Apa yang dimaksud dengan User Testing?', urutan: 15, created_at: now() },

  // ════════════ SET C – 10 Pilihan Ganda ════════════
  { id: 'q5000005-0000-0000-0000-000000000001', course_id: COURSE_ID, set_paket: 'C', topik: 'Tahapan Prototyping', tipe: 'pilihan_ganda', teks: 'Prototype paling efektif digunakan sebelum...', urutan: 1, created_at: now() },
  { id: 'q5000005-0000-0000-0000-000000000002', course_id: COURSE_ID, set_paket: 'C', topik: 'Navigasi UI', tipe: 'pilihan_ganda', teks: 'Navigasi yang baik harus...', urutan: 2, created_at: now() },
  { id: 'q5000005-0000-0000-0000-000000000003', course_id: COURSE_ID, set_paket: 'C', topik: 'Clickable Prototype', tipe: 'pilihan_ganda', teks: 'Clickable Prototype berarti...', urutan: 3, created_at: now() },
  { id: 'q5000005-0000-0000-0000-000000000004', course_id: COURSE_ID, set_paket: 'C', topik: 'High-Fidelity Prototype', tipe: 'pilihan_ganda', teks: 'Manfaat utama High-Fidelity Prototype adalah...', urutan: 4, created_at: now() },
  { id: 'q5000005-0000-0000-0000-000000000005', course_id: COURSE_ID, set_paket: 'C', topik: 'Kualitas Prototype', tipe: 'pilihan_ganda', teks: 'Salah satu indikator prototype yang baik adalah...', urutan: 5, created_at: now() },
  { id: 'q5000005-0000-0000-0000-000000000006', course_id: COURSE_ID, set_paket: 'C', topik: 'Alur Proses Desain', tipe: 'pilihan_ganda', teks: 'Dalam proses desain, prototype berada setelah tahap...', urutan: 6, created_at: now() },
  { id: 'q5000005-0000-0000-0000-000000000007', course_id: COURSE_ID, set_paket: 'C', topik: 'User Flow pada Prototype', tipe: 'pilihan_ganda', teks: 'Tujuan utama user flow pada prototype adalah...', urutan: 7, created_at: now() },
  { id: 'q5000005-0000-0000-0000-000000000008', course_id: COURSE_ID, set_paket: 'C', topik: 'Kesalahan Prototyping', tipe: 'pilihan_ganda', teks: 'Kesalahan umum saat membuat prototype adalah...', urutan: 8, created_at: now() },
  { id: 'q5000005-0000-0000-0000-000000000009', course_id: COURSE_ID, set_paket: 'C', topik: 'Iterasi Desain', tipe: 'pilihan_ganda', teks: 'Iterasi dalam prototyping berarti...', urutan: 9, created_at: now() },
  { id: 'q5000005-0000-0000-0000-000000000010', course_id: COURSE_ID, set_paket: 'C', topik: 'Prinsip Prototyping', tipe: 'pilihan_ganda', teks: 'Prinsip utama prototyping adalah...', urutan: 10, created_at: now() },

  // ════════════ SET C – 5 Essay ════════════
  { id: 'q5000006-0000-0000-0000-000000000001', course_id: COURSE_ID, set_paket: 'C', topik: 'Call To Action (CTA)', tipe: 'essay', teks: 'Apa fungsi CTA (Call To Action)?', urutan: 11, created_at: now() },
  { id: 'q5000006-0000-0000-0000-000000000002', course_id: COURSE_ID, set_paket: 'C', topik: 'User Flow pada Prototype', tipe: 'essay', teks: 'Mengapa user flow perlu diuji melalui prototype?', urutan: 12, created_at: now() },
  { id: 'q5000006-0000-0000-0000-000000000003', course_id: COURSE_ID, set_paket: 'C', topik: 'Iterasi Desain', tipe: 'essay', teks: 'Apa yang dimaksud dengan iterasi desain?', urutan: 13, created_at: now() },
  { id: 'q5000006-0000-0000-0000-000000000004', course_id: COURSE_ID, set_paket: 'C', topik: 'Manfaat Prototyping', tipe: 'essay', teks: 'Mengapa prototype dapat menghemat biaya pengembangan?', urutan: 14, created_at: now() },
  { id: 'q5000006-0000-0000-0000-000000000005', course_id: COURSE_ID, set_paket: 'C', topik: 'Prinsip Prototyping', tipe: 'essay', teks: 'Jelaskan prinsip "Test Early, Learn Fast" dalam prototyping!', urutan: 15, created_at: now() }
];

// ─── 2. OPTIONS (120 Opsi Jawaban PG) ─────────────────────────────────────────
export const modul5Options = [
  // ─── SET A ───
  // Q1-A
  { id: 'o5-A1-1', question_id: 'q5000001-0000-0000-0000-000000000001', teks: 'Produk yang sudah dirilis ke pengguna', poin: 0, umpan_balik: 'Keliru. Produk yang sudah dirilis adalah versi produksi (live product), bukan prototype.', is_correct: false },
  { id: 'o5-A1-2', question_id: 'q5000001-0000-0000-0000-000000000001', teks: 'Representasi awal produk untuk diuji dan divalidasi', poin: 10, umpan_balik: 'Tepat! Prototype adalah simulasi atau representasi awal produk guna menguji alur serta memvalidasi desain.', is_correct: true },
  { id: 'o5-A1-3', question_id: 'q5000001-0000-0000-0000-000000000001', teks: 'Dokumen kebutuhan sistem', poin: 0, umpan_balik: 'Keliru. Dokumen kebutuhan sistem adalah PRD atau SRS, bukan prototype.', is_correct: false },
  { id: 'o5-A1-4', question_id: 'q5000001-0000-0000-0000-000000000001', teks: 'Struktur database', poin: 0, umpan_balik: 'Keliru. Struktur database merupakan skema penyimpanan data di sisi back-end.', is_correct: false },
  // Q2-A
  { id: 'o5-A2-1', question_id: 'q5000001-0000-0000-0000-000000000002', teks: 'Menentukan harga produk', poin: 0, umpan_balik: 'Keliru. Penentuan harga termasuk strategi monetisasi/bisnis.', is_correct: false },
  { id: 'o5-A2-2', question_id: 'q5000001-0000-0000-0000-000000000002', teks: 'Menguji ide dan mendapatkan feedback pengguna', poin: 10, umpan_balik: 'Tepat! Tujuan utama prototype adalah memvalidasi ide dan mengumpulkan umpan balik nyata dari pengguna.', is_correct: true },
  { id: 'o5-A2-3', question_id: 'q5000001-0000-0000-0000-000000000002', teks: 'Membuat server aplikasi', poin: 0, umpan_balik: 'Keliru. Pembuatan server termasuk ranah DevOps dan back-end engineering.', is_correct: false },
  { id: 'o5-A2-4', question_id: 'q5000001-0000-0000-0000-000000000002', teks: 'Mencari investor', poin: 0, umpan_balik: 'Keliru. Mencari investor adalah tujuan pitching bisnis, bukan tujuan utama pembuatan prototype.', is_correct: false },
  // Q3-A
  { id: 'o5-A3-1', question_id: 'q5000001-0000-0000-0000-000000000003', teks: 'Mengurangi biaya validasi desain', poin: 10, umpan_balik: 'Tepat! Prototype memungkinkan tim menguji konsep jauh lebih murah sebelum menulis kode program.', is_correct: true },
  { id: 'o5-A3-2', question_id: 'q5000001-0000-0000-0000-000000000003', teks: 'Menghilangkan kebutuhan pengguna', poin: 0, umpan_balik: 'Keliru. Prototype justru dibuat untuk menguji kesesuaian produk dengan kebutuhan pengguna.', is_correct: false },
  { id: 'o5-A3-3', question_id: 'q5000001-0000-0000-0000-000000000003', teks: 'Meningkatkan ukuran file aplikasi', poin: 0, umpan_balik: 'Keliru. Ukuran file aplikasi tidak berkaitan dengan fungsi prototype.', is_correct: false },
  { id: 'o5-A3-4', question_id: 'q5000001-0000-0000-0000-000000000003', teks: 'Mengganti proses coding', poin: 0, umpan_balik: 'Keliru. Prototype adalah acuan sebelum proses coding, bukan pengganti pengembangan produk.', is_correct: false },
  // Q4-A
  { id: 'o5-A4-1', question_id: 'q5000001-0000-0000-0000-000000000004', teks: 'Struktur sederhana dan detail minimal', poin: 10, umpan_balik: 'Tepat! Low-Fidelity Prototype berfokus pada struktur dasar, tata letak, dan alur tanpa detail visual rumit.', is_correct: true },
  { id: 'o5-A4-2', question_id: 'q5000001-0000-0000-0000-000000000004', teks: 'Animasi lengkap', poin: 0, umpan_balik: 'Keliru. Animasi lengkap merupakan ciri High-Fidelity Prototype.', is_correct: false },
  { id: 'o5-A4-3', question_id: 'q5000001-0000-0000-0000-000000000004', teks: 'Warna final produk', poin: 0, umpan_balik: 'Keliru. Low-Fidelity umumnya menggunakan skala abu-abu (grayscale) atau sketsa kasar.', is_correct: false },
  { id: 'o5-A4-4', question_id: 'q5000001-0000-0000-0000-000000000004', teks: 'Database lengkap', poin: 0, umpan_balik: 'Keliru. Prototype tidak terhubung dengan database produksi.', is_correct: false },
  // Q5-A
  { id: 'o5-A5-1', question_id: 'q5000001-0000-0000-0000-000000000005', teks: 'Sangat sederhana dan tanpa interaksi', poin: 0, umpan_balik: 'Keliru. Itu adalah karakteristik sketsa kasar atau wireframe statis.', is_correct: false },
  { id: 'o5-A5-2', question_id: 'q5000001-0000-0000-0000-000000000005', teks: 'Menyerupai produk akhir secara visual dan interaksi', poin: 10, umpan_balik: 'Tepat! High-Fidelity Prototype sudah menggunakan warna, tipografi, komponen UI, dan transisi yang mendekati aplikasi asli.', is_correct: true },
  { id: 'o5-A5-3', question_id: 'q5000001-0000-0000-0000-000000000005', teks: 'Hanya berupa tulisan', poin: 0, umpan_balik: 'Keliru. Prototype berwujud visual antarmuka, bukan dokumen teks saja.', is_correct: false },
  { id: 'o5-A5-4', question_id: 'q5000001-0000-0000-0000-000000000005', teks: 'Tidak dapat diuji', poin: 0, umpan_balik: 'Keliru. High-Fidelity Prototype sangat ideal untuk diuji dalam sesi Usability Testing.', is_correct: false },
  // Q6-A
  { id: 'o5-A6-1', question_id: 'q5000001-0000-0000-0000-000000000006', teks: 'Mengurangi risiko kesalahan desain', poin: 10, umpan_balik: 'Tepat! Masalah alur dan antarmuka dapat dideteksi serta diperbaiki sebelum developer menulis kode.', is_correct: true },
  { id: 'o5-A6-2', question_id: 'q5000001-0000-0000-0000-000000000006', teks: 'Menambah bug aplikasi', poin: 0, umpan_balik: 'Keliru. Prototype justru mencegah bug desain dan miskomunikasi spesifikasi.', is_correct: false },
  { id: 'o5-A6-3', question_id: 'q5000001-0000-0000-0000-000000000006', teks: 'Menghilangkan kebutuhan testing', poin: 0, umpan_balik: 'Keliru. Pengujian tetap wajib dilakukan pada tahap pengembangan maupun pasca-integrasi.', is_correct: false },
  { id: 'o5-A6-4', question_id: 'q5000001-0000-0000-0000-000000000006', teks: 'Mengurangi jumlah pengguna', poin: 0, umpan_balik: 'Keliru. Validasi prototype membantu meningkatkan kepuasan dan retensi pengguna.', is_correct: false },
  // Q7-A
  { id: 'o5-A7-1', question_id: 'q5000001-0000-0000-0000-000000000007', teks: 'Figma', poin: 10, umpan_balik: 'Tepat! Figma adalah standar industri untuk merancang UI dan membuat clickable prototype kolaboratif.', is_correct: true },
  { id: 'o5-A7-2', question_id: 'q5000001-0000-0000-0000-000000000007', teks: 'MySQL', poin: 0, umpan_balik: 'Keliru. MySQL adalah sistem manajemen basis data relasional (RDBMS).', is_correct: false },
  { id: 'o5-A7-3', question_id: 'q5000001-0000-0000-0000-000000000007', teks: 'PostgreSQL', poin: 0, umpan_balik: 'Keliru. PostgreSQL adalah sistem database relasional, bukan alat desain UI.', is_correct: false },
  { id: 'o5-A7-4', question_id: 'q5000001-0000-0000-0000-000000000007', teks: 'VS Code', poin: 0, umpan_balik: 'Keliru. VS Code adalah code editor untuk menulis kode program.', is_correct: false },
  // Q8-A
  { id: 'o5-A8-1', question_id: 'q5000001-0000-0000-0000-000000000008', teks: 'Flow Connection', poin: 0, umpan_balik: 'Keliru. Istilah baku yang digunakan adalah Interaction Link.', is_correct: false },
  { id: 'o5-A8-2', question_id: 'q5000001-0000-0000-0000-000000000008', teks: 'Trigger Link', poin: 0, umpan_balik: 'Keliru. Trigger adalah pemicu aksi (seperti On Click), sedangkan penghubung antar layarnya disebut Interaction Link.', is_correct: false },
  { id: 'o5-A8-3', question_id: 'q5000001-0000-0000-0000-000000000008', teks: 'Interaction Link', poin: 10, umpan_balik: 'Tepat! Interaction Link menghubungkan elemen pemicu pada satu layar ke layar tujuan pada prototype.', is_correct: true },
  { id: 'o5-A8-4', question_id: 'q5000001-0000-0000-0000-000000000008', teks: 'Navigation Connection', poin: 0, umpan_balik: 'Keliru. Istilah yang tepat sesuai materi adalah Interaction Link.', is_correct: false },
  // Q9-A
  { id: 'o5-A9-1', question_id: 'q5000001-0000-0000-0000-000000000009', teks: 'Mensimulasikan pengalaman pengguna', poin: 10, umpan_balik: 'Tepat! Prototype interaktif memberi gambaran nyata bagaimana pengguna bernavigasi dan berinteraksi.', is_correct: true },
  { id: 'o5-A9-2', question_id: 'q5000001-0000-0000-0000-000000000009', teks: 'Menjalankan backend', poin: 0, umpan_balik: 'Keliru. Prototype hanya mensimulasikan sisi antarmuka tanpa logika server sungguhan.', is_correct: false },
  { id: 'o5-A9-3', question_id: 'q5000001-0000-0000-0000-000000000009', teks: 'Menyimpan data pengguna', poin: 0, umpan_balik: 'Keliru. Penyimpanan data permanen membutuhkan database di back-end.', is_correct: false },
  { id: 'o5-A9-4', question_id: 'q5000001-0000-0000-0000-000000000009', teks: 'Mengelola server', poin: 0, umpan_balik: 'Keliru. Pengelolaan server bukan fungsi dari prototype.', is_correct: false },
  // Q10-A
  { id: 'o5-A10-1', question_id: 'q5000001-0000-0000-0000-000000000010', teks: 'Menampilkan database', poin: 0, umpan_balik: 'Keliru. Tabel atau daftar lebih tepat untuk menampilkan kumpulan data.', is_correct: false },
  { id: 'o5-A10-2', question_id: 'q5000001-0000-0000-0000-000000000010', teks: 'Memicu suatu aksi atau navigasi', poin: 10, umpan_balik: 'Tepat! Button adalah elemen interaktif utama untuk menjalankan perintah (submit, simpan) atau berpindah halaman.', is_correct: true },
  { id: 'o5-A10-3', question_id: 'q5000001-0000-0000-0000-000000000010', teks: 'Menyimpan source code', poin: 0, umpan_balik: 'Keliru. Source code disimpan di repository seperti GitHub.', is_correct: false },
  { id: 'o5-A10-4', question_id: 'q5000001-0000-0000-0000-000000000010', teks: 'Menjalankan server', poin: 0, umpan_balik: 'Keliru. Menjalankan server dilakukan melalui terminal/infrastruktur hosting.', is_correct: false },

  // ─── SET B ───
  // Q1-B
  { id: 'o5-B1-1', question_id: 'q5000003-0000-0000-0000-000000000001', teks: 'Menampilkan gambar', poin: 0, umpan_balik: 'Keliru. Komponen gambar menggunakan Image container/tag <img>.', is_correct: false },
  { id: 'o5-B1-2', question_id: 'q5000003-0000-0000-0000-000000000001', teks: 'Memasukkan data oleh pengguna', poin: 10, umpan_balik: 'Tepat! Input Field memungkinkan pengguna mengetikkan teks, angka, email, atau kata sandi ke dalam sistem.', is_correct: true },
  { id: 'o5-B1-3', question_id: 'q5000003-0000-0000-0000-000000000001', teks: 'Menyimpan database', poin: 0, umpan_balik: 'Keliru. Input field hanya menerima masukan di sisi antarmuka.', is_correct: false },
  { id: 'o5-B1-4', question_id: 'q5000003-0000-0000-0000-000000000001', teks: 'Menghubungkan jaringan', poin: 0, umpan_balik: 'Keliru. Koneksi jaringan tidak diatur oleh komponen form UI.', is_correct: false },
  // Q2-B
  { id: 'o5-B2-1', question_id: 'q5000003-0000-0000-0000-000000000002', teks: 'Hanya ada satu pilihan', poin: 0, umpan_balik: 'Keliru. Jika hanya satu opsi konfirmasi, cukup gunakan checkbox tunggal atau tombol.', is_correct: false },
  { id: 'o5-B2-2', question_id: 'q5000003-0000-0000-0000-000000000002', teks: 'Pengguna perlu memilih dari beberapa opsi', poin: 10, umpan_balik: 'Tepat! Dropdown menyajikan daftar pilihan secara ringkas dan menghemat ruang layar saat opsi cukup banyak.', is_correct: true },
  { id: 'o5-B2-3', question_id: 'q5000003-0000-0000-0000-000000000002', teks: 'Menampilkan video', poin: 0, umpan_balik: 'Keliru. Pemutar video menggunakan komponen media/video player.', is_correct: false },
  { id: 'o5-B2-4', question_id: 'q5000003-0000-0000-0000-000000000002', teks: 'Membuka aplikasi', poin: 0, umpan_balik: 'Keliru. Dropdown adalah komponen pemilihan opsi di dalam formulir atau menu.', is_correct: false },
  // Q3-B
  { id: 'o5-B3-1', question_id: 'q5000003-0000-0000-0000-000000000003', teks: 'Memilih satu pilihan saja', poin: 0, umpan_balik: 'Keliru. Memilih satu opsi dari beberapa pilihan adalah fungsi Radio Button.', is_correct: false },
  { id: 'o5-B3-2', question_id: 'q5000003-0000-0000-0000-000000000003', teks: 'Memilih lebih dari satu pilihan', poin: 10, umpan_balik: 'Tepat! Checkbox memungkinkan pengguna mencentang nol, satu, atau beberapa opsi sekaligus.', is_correct: true },
  { id: 'o5-B3-3', question_id: 'q5000003-0000-0000-0000-000000000003', teks: 'Menampilkan halaman baru', poin: 0, umpan_balik: 'Keliru. Navigasi ke halaman baru menggunakan tautan (link) atau tombol.', is_correct: false },
  { id: 'o5-B3-4', question_id: 'q5000003-0000-0000-0000-000000000003', teks: 'Menghapus data', poin: 0, umpan_balik: 'Keliru. Aksi menghapus data menggunakan tombol aksi (action button).', is_correct: false },
  // Q4-B
  { id: 'o5-B4-1', question_id: 'q5000003-0000-0000-0000-000000000004', teks: 'Memilih beberapa opsi sekaligus', poin: 0, umpan_balik: 'Keliru. Memilih beberapa opsi sekaligus adalah fungsi Checkbox.', is_correct: false },
  { id: 'o5-B4-2', question_id: 'q5000003-0000-0000-0000-000000000004', teks: 'Memilih satu opsi dari beberapa pilihan', poin: 10, umpan_balik: 'Tepat! Radio Button bersifat mutually exclusive (hanya satu opsi yang dapat dipilih dalam satu grup).', is_correct: true },
  { id: 'o5-B4-3', question_id: 'q5000003-0000-0000-0000-000000000004', teks: 'Menampilkan gambar', poin: 0, umpan_balik: 'Keliru. Radio button adalah komponen input pilihan pada formulir.', is_correct: false },
  { id: 'o5-B4-4', question_id: 'q5000003-0000-0000-0000-000000000004', teks: 'Membuat akun', poin: 0, umpan_balik: 'Keliru. Pembuatan akun dipicu oleh tombol submit pada form registrasi.', is_correct: false },
  // Q5-B
  { id: 'o5-B5-1', question_id: 'q5000003-0000-0000-0000-000000000005', teks: 'Mengaktifkan atau menonaktifkan suatu fitur', poin: 10, umpan_balik: 'Tepat! Toggle Switch merepresentasikan dua kondisi biner (ON/OFF) yang langsung berlaku.', is_correct: true },
  { id: 'o5-B5-2', question_id: 'q5000003-0000-0000-0000-000000000005', teks: 'Menghapus akun', poin: 0, umpan_balik: 'Keliru. Aksi destruktif seperti menghapus akun memerlukan tombol konfirmasi eksplisit.', is_correct: false },
  { id: 'o5-B5-3', question_id: 'q5000003-0000-0000-0000-000000000005', teks: 'Menutup aplikasi', poin: 0, umpan_balik: 'Keliru. Menutup tampilan biasanya menggunakan tombol Close (X).', is_correct: false },
  { id: 'o5-B5-4', question_id: 'q5000003-0000-0000-0000-000000000005', teks: 'Menyimpan data', poin: 0, umpan_balik: 'Keliru. Menyimpan formulir menggunakan tombol Simpan/Submit.', is_correct: false },
  // Q6-B
  { id: 'o5-B6-1', question_id: 'q5000003-0000-0000-0000-000000000006', teks: 'Membuat pengguna lebih mudah memahami antarmuka', poin: 10, umpan_balik: 'Tepat! Konsistensi pola komponen, warna, dan penempatan menurunkan beban kognitif pengguna.', is_correct: true },
  { id: 'o5-B6-2', question_id: 'q5000003-0000-0000-0000-000000000006', teks: 'Membuat file lebih besar', poin: 0, umpan_balik: 'Keliru. Komponen yang konsisten justru membuat desain lebih efisien dan terstruktur.', is_correct: false },
  { id: 'o5-B6-3', question_id: 'q5000003-0000-0000-0000-000000000006', teks: 'Mengurangi fitur', poin: 0, umpan_balik: 'Keliru. Konsistensi mengatur keseragaman desain, bukan pemangkasan fitur.', is_correct: false },
  { id: 'o5-B6-4', question_id: 'q5000003-0000-0000-0000-000000000006', teks: 'Menambah kompleksitas', poin: 0, umpan_balik: 'Keliru. Konsistensi justru menyederhanakan kurva belajar pengguna.', is_correct: false },
  // Q7-B
  { id: 'o5-B7-1', question_id: 'q5000003-0000-0000-0000-000000000007', teks: 'Memvalidasi desain dengan pengguna nyata', poin: 10, umpan_balik: 'Tepat! User Testing menguji apakah target pengguna benar-benar dapat menggunakan desain dengan lancar.', is_correct: true },
  { id: 'o5-B7-2', question_id: 'q5000003-0000-0000-0000-000000000007', teks: 'Menjual produk', poin: 0, umpan_balik: 'Keliru. Penjualan adalah aktivitas komersial/marketing, bukan tujuan User Testing.', is_correct: false },
  { id: 'o5-B7-3', question_id: 'q5000003-0000-0000-0000-000000000007', teks: 'Menentukan harga', poin: 0, umpan_balik: 'Keliru. Penentuan harga termasuk riset pasar dan model bisnis.', is_correct: false },
  { id: 'o5-B7-4', question_id: 'q5000003-0000-0000-0000-000000000007', teks: 'Mengatur server', poin: 0, umpan_balik: 'Keliru. Pengaturan server merupakan tugas teknis infrastruktur.', is_correct: false },
  // Q8-B
  { id: 'o5-B8-1', question_id: 'q5000003-0000-0000-0000-000000000008', teks: 'Memperbaiki prototype', poin: 10, umpan_balik: 'Tepat! Setiap temuan dan masukan pengguna dijadikan dasar iterasi penyempurnaan prototype.', is_correct: true },
  { id: 'o5-B8-2', question_id: 'q5000003-0000-0000-0000-000000000008', teks: 'Menghapus seluruh desain', poin: 0, umpan_balik: 'Keliru. Feedback digunakan untuk mengevaluasi dan memperbaiki bagian yang bermasalah.', is_correct: false },
  { id: 'o5-B8-3', question_id: 'q5000003-0000-0000-0000-000000000008', teks: 'Menentukan gaji tim', poin: 0, umpan_balik: 'Keliru. Umpan balik UX tidak berkaitan dengan penggajian tim.', is_correct: false },
  { id: 'o5-B8-4', question_id: 'q5000003-0000-0000-0000-000000000008', teks: 'Mengurangi kualitas produk', poin: 0, umpan_balik: 'Keliru. Feedback justru meningkatkan kualitas dan kegunaan produk.', is_correct: false },
  // Q9-B
  { id: 'o5-B9-1', question_id: 'q5000003-0000-0000-0000-000000000009', teks: 'Elemen yang mengarahkan pengguna melakukan tindakan tertentu', poin: 10, umpan_balik: 'Tepat! Call To Action (CTA) mendorong pengguna mengambil langkah utama seperti Daftar, Mulai Belajar, atau Beli.', is_correct: true },
  { id: 'o5-B9-2', question_id: 'q5000003-0000-0000-0000-000000000009', teks: 'Database aplikasi', poin: 0, umpan_balik: 'Keliru. CTA adalah elemen antarmuka pengguna, bukan penyimpanan data.', is_correct: false },
  { id: 'o5-B9-3', question_id: 'q5000003-0000-0000-0000-000000000009', teks: 'Struktur navigasi', poin: 0, umpan_balik: 'Keliru. Struktur navigasi mengatur perpindahan antar halaman secara keseluruhan.', is_correct: false },
  { id: 'o5-B9-4', question_id: 'q5000003-0000-0000-0000-000000000009', teks: 'Jenis wireframe', poin: 0, umpan_balik: 'Keliru. CTA adalah komponen interaktif di dalam layar, bukan jenis wireframe.', is_correct: false },
  // Q10-B
  { id: 'o5-B10-1', question_id: 'q5000003-0000-0000-0000-000000000010', teks: 'Tujuan dan CTA yang jelas', poin: 10, umpan_balik: 'Tepat! Landing page yang efektif langsung menyampaikan nilai utama dan mengarahkan pengunjung pada satu CTA jelas.', is_correct: true },
  { id: 'o5-B10-2', question_id: 'q5000003-0000-0000-0000-000000000010', teks: 'Banyak warna acak', poin: 0, umpan_balik: 'Keliru. Warna acak merusak hierarki visual dan identitas merek.', is_correct: false },
  { id: 'o5-B10-3', question_id: 'q5000003-0000-0000-0000-000000000010', teks: 'Banyak pop-up', poin: 0, umpan_balik: 'Keliru. Terlalu banyak pop-up mengganggu pengalaman pengguna.', is_correct: false },
  { id: 'o5-B10-4', question_id: 'q5000003-0000-0000-0000-000000000010', teks: 'Navigasi yang membingungkan', poin: 0, umpan_balik: 'Keliru. Navigasi landing page harus sederhana dan terarah.', is_correct: false },

  // ─── SET C ───
  // Q1-C
  { id: 'o5-C1-1', question_id: 'q5000005-0000-0000-0000-000000000001', teks: 'Tahap coding penuh', poin: 10, umpan_balik: 'Tepat! Menguji prototype sebelum coding penuh menghemat biaya dan waktu rekayasa perangkat lunak.', is_correct: true },
  { id: 'o5-C1-2', question_id: 'q5000005-0000-0000-0000-000000000001', teks: 'Ide ditemukan', poin: 0, umpan_balik: 'Keliru. Ide dan rumusan masalah harus ada terlebih dahulu sebelum membuat prototype.', is_correct: false },
  { id: 'o5-C1-3', question_id: 'q5000005-0000-0000-0000-000000000001', teks: 'Riset pengguna', poin: 0, umpan_balik: 'Keliru. Riset pengguna dilakukan di awal untuk memahami masalah sebelum merancang solusi.', is_correct: false },
  { id: 'o5-C1-4', question_id: 'q5000005-0000-0000-0000-000000000001', teks: 'Pembuatan wireframe', poin: 0, umpan_balik: 'Keliru. Wireframe dibuat terlebih dahulu sebagai kerangka sebelum prototype.', is_correct: false },
  // Q2-C
  { id: 'o5-C2-1', question_id: 'q5000005-0000-0000-0000-000000000002', teks: 'Konsisten dan mudah dipahami', poin: 10, umpan_balik: 'Tepat! Navigasi yang konsisten membuat pengguna selalu tahu posisi mereka dan ke mana harus melangkah.', is_correct: true },
  { id: 'o5-C2-2', question_id: 'q5000005-0000-0000-0000-000000000002', teks: 'Rumit dan kompleks', poin: 0, umpan_balik: 'Keliru. Navigasi yang rumit memicu frustrasi dan membuat pengguna meninggalkan aplikasi.', is_correct: false },
  { id: 'o5-C2-3', question_id: 'q5000005-0000-0000-0000-000000000002', teks: 'Berubah pada setiap halaman', poin: 0, umpan_balik: 'Keliru. Menu navigasi yang berubah-ubah merusak konsistensi dan membingungkan pengguna.', is_correct: false },
  { id: 'o5-C2-4', question_id: 'q5000005-0000-0000-0000-000000000002', teks: 'Memiliki banyak cabang tidak perlu', poin: 0, umpan_balik: 'Keliru. Cabang menu berlebihan menyebabkan cognitive overload.', is_correct: false },
  // Q3-C
  { id: 'o5-C3-1', question_id: 'q5000005-0000-0000-0000-000000000003', teks: 'Prototype yang dapat diklik dan diuji alurnya', poin: 10, umpan_balik: 'Tepat! Clickable prototype memungkinkan penguji berinteraksi langsung dengan tombol dan tautan antar layar.', is_correct: true },
  { id: 'o5-C3-2', question_id: 'q5000005-0000-0000-0000-000000000003', teks: 'Produk yang sudah dijual', poin: 0, umpan_balik: 'Keliru. Clickable prototype masih berupa simulasi desain, bukan produk komersial.', is_correct: false },
  { id: 'o5-C3-3', question_id: 'q5000005-0000-0000-0000-000000000003', teks: 'Aplikasi yang sudah online', poin: 0, umpan_balik: 'Keliru. Aplikasi online adalah produk yang sudah dideploy ke server produksi.', is_correct: false },
  { id: 'o5-C3-4', question_id: 'q5000005-0000-0000-0000-000000000003', teks: 'Sistem yang sudah memiliki database', poin: 0, umpan_balik: 'Keliru. Clickable prototype tidak memerlukan database sungguhan.', is_correct: false },
  // Q4-C
  { id: 'o5-C4-1', question_id: 'q5000005-0000-0000-0000-000000000004', teks: 'Memberikan simulasi yang mendekati produk akhir', poin: 10, umpan_balik: 'Tepat! High-Fidelity Prototype menghadirkan visual, micro-interaction, dan alur yang sangat realistis.', is_correct: true },
  { id: 'o5-C4-2', question_id: 'q5000005-0000-0000-0000-000000000004', teks: 'Menghilangkan testing', poin: 0, umpan_balik: 'Keliru. Justru High-Fidelity Prototype dibuat agar testing terasa lebih realistis.', is_correct: false },
  { id: 'o5-C4-3', question_id: 'q5000005-0000-0000-0000-000000000004', teks: 'Mengganti coding sepenuhnya', poin: 0, umpan_balik: 'Keliru. Desain tetap perlu diterjemahkan ke kode front-end dan back-end.', is_correct: false },
  { id: 'o5-C4-4', question_id: 'q5000005-0000-0000-0000-000000000004', teks: 'Mengurangi jumlah pengguna', poin: 0, umpan_balik: 'Keliru. High-Fidelity membantu memastikan produk mudah dipakai oleh target pengguna.', is_correct: false },
  // Q5-C
  { id: 'o5-C5-1', question_id: 'q5000005-0000-0000-0000-000000000005', teks: 'Sulit digunakan pengguna', poin: 0, umpan_balik: 'Keliru. Prototype yang baik harus intuitif dan mudah diuji.', is_correct: false },
  { id: 'o5-C5-2', question_id: 'q5000005-0000-0000-0000-000000000005', teks: 'Mampu mendukung pengujian kebutuhan pengguna', poin: 10, umpan_balik: 'Tepat! Indikator utama prototype yang baik adalah kemampuannya memvalidasi alur penyelesaian masalah pengguna.', is_correct: true },
  { id: 'o5-C5-3', question_id: 'q5000005-0000-0000-0000-000000000005', teks: 'Memiliki ukuran file besar', poin: 0, umpan_balik: 'Keliru. Ukuran file besar bukan ukuran kualitas UX.', is_correct: false },
  { id: 'o5-C5-4', question_id: 'q5000005-0000-0000-0000-000000000005', teks: 'Menggunakan banyak warna', poin: 0, umpan_balik: 'Keliru. Penggunaan banyak warna tanpa hierarki justru mengganggu fokus pengguna.', is_correct: false },
  // Q6-C
  { id: 'o5-C6-1', question_id: 'q5000005-0000-0000-0000-000000000006', teks: 'Wireframing', poin: 10, umpan_balik: 'Tepat! Setelah kerangka tata letak (wireframe) tersusun, desain ditingkatkan menjadi prototype interaktif.', is_correct: true },
  { id: 'o5-C6-2', question_id: 'q5000005-0000-0000-0000-000000000006', teks: 'Deployment', poin: 0, umpan_balik: 'Keliru. Deployment adalah tahap merilis aplikasi yang sudah selesai dikodekan.', is_correct: false },
  { id: 'o5-C6-3', question_id: 'q5000005-0000-0000-0000-000000000006', teks: 'Maintenance', poin: 0, umpan_balik: 'Keliru. Maintenance adalah pemeliharaan sistem setelah dirilis.', is_correct: false },
  { id: 'o5-C6-4', question_id: 'q5000005-0000-0000-0000-000000000006', teks: 'Hosting', poin: 0, umpan_balik: 'Keliru. Hosting adalah penyediaan server untuk menjalankan website.', is_correct: false },
  // Q7-C
  { id: 'o5-C7-1', question_id: 'q5000005-0000-0000-0000-000000000007', teks: 'Menunjukkan alur interaksi pengguna', poin: 10, umpan_balik: 'Tepat! User flow pada prototype memetakan langkah demi langkah interaksi pengguna dari awal hingga tujuan tercapai.', is_correct: true },
  { id: 'o5-C7-2', question_id: 'q5000005-0000-0000-0000-000000000007', teks: 'Menyimpan kode program', poin: 0, umpan_balik: 'Keliru. Penyimpanan kode program dilakukan di repository Git.', is_correct: false },
  { id: 'o5-C7-3', question_id: 'q5000005-0000-0000-0000-000000000007', teks: 'Membuat database', poin: 0, umpan_balik: 'Keliru. User flow tidak membuat skema database.', is_correct: false },
  { id: 'o5-C7-4', question_id: 'q5000005-0000-0000-0000-000000000007', teks: 'Menentukan harga', poin: 0, umpan_balik: 'Keliru. User flow berfokus pada pengalaman navigasi pengguna.', is_correct: false },
  // Q8-C
  { id: 'o5-C8-1', question_id: 'q5000005-0000-0000-0000-000000000008', teks: 'Mengabaikan kebutuhan pengguna', poin: 10, umpan_balik: 'Tepat! Desain yang hanya mengejar estetika tanpa menjawab kebutuhan pengguna akan gagal saat diuji.', is_correct: true },
  { id: 'o5-C8-2', question_id: 'q5000005-0000-0000-0000-000000000008', teks: 'Menguji desain ke pengguna', poin: 0, umpan_balik: 'Keliru. Menguji desain ke pengguna justru praktik terbaik yang wajib dilakukan.', is_correct: false },
  { id: 'o5-C8-3', question_id: 'q5000005-0000-0000-0000-000000000008', teks: 'Membuat alur sederhana', poin: 0, umpan_balik: 'Keliru. Alur yang sederhana dan jelas memudahkan pengguna mencapai tujuan.', is_correct: false },
  { id: 'o5-C8-4', question_id: 'q5000005-0000-0000-0000-000000000008', teks: 'Melakukan validasi', poin: 0, umpan_balik: 'Keliru. Validasi adalah langkah penting untuk memastikan solusi tepat sasaran.', is_correct: false },
  // Q9-C
  { id: 'o5-C9-1', question_id: 'q5000005-0000-0000-0000-000000000009', teks: 'Perbaikan desain secara berulang berdasarkan feedback', poin: 10, umpan_balik: 'Tepat! Iterasi adalah siklus uji, evaluasi masukan, dan penyempurnaan desain secara bertahap.', is_correct: true },
  { id: 'o5-C9-2', question_id: 'q5000005-0000-0000-0000-000000000009', teks: 'Menghapus desain lama', poin: 0, umpan_balik: 'Keliru. Iterasi memperbaiki dan menyempurnakan desain berdasarkan data, bukan membuang tanpa analisis.', is_correct: false },
  { id: 'o5-C9-3', question_id: 'q5000005-0000-0000-0000-000000000009', teks: 'Membuat database baru', poin: 0, umpan_balik: 'Keliru. Iterasi desain berfokus pada penyempurnaan antarmuka dan pengalaman pengguna.', is_correct: false },
  { id: 'o5-C9-4', question_id: 'q5000005-0000-0000-0000-000000000009', teks: 'Menambah biaya proyek', poin: 0, umpan_balik: 'Keliru. Iterasi di tahap prototype justru menekan biaya perbaikan di tahap produksi.', is_correct: false },
  // Q10-C
  { id: 'o5-C10-1', question_id: 'q5000005-0000-0000-0000-000000000010', teks: 'Test Early, Learn Fast', poin: 10, umpan_balik: 'Tepat! Prinsip "Test Early, Learn Fast" mendorong pengujian sedini mungkin agar tim cepat belajar dan beradaptasi.', is_correct: true },
  { id: 'o5-C10-2', question_id: 'q5000005-0000-0000-0000-000000000010', teks: 'Build Fast, Ignore Users', poin: 0, umpan_balik: 'Keliru. Mengabaikan pengguna bertentangan dengan prinsip User-Centered Design.', is_correct: false },
  { id: 'o5-C10-3', question_id: 'q5000005-0000-0000-0000-000000000010', teks: 'Launch First, Fix Later', poin: 0, umpan_balik: 'Keliru. Merilis produk tanpa validasi prototype membuat biaya perbaikan membengkak.', is_correct: false },
  { id: 'o5-C10-4', question_id: 'q5000005-0000-0000-0000-000000000010', teks: 'Design Without Research', poin: 0, umpan_balik: 'Keliru. Desain tanpa riset hanya menghasilkan solusi berbasis asumsi.', is_correct: false }
];

// ─── 3. ESSAY RUBRICS (15 Rubrik Penilaian) ───────────────────────────────────
export const modul5Rubrics = [
  // ─── Set A Essay Rubrics (1–5) ───
  {
    id: 'er-0000005-0000-0000-0000-000000000001',
    question_id: 'q5000002-0000-0000-0000-000000000001',
    kunci_jawaban: 'Prototype adalah representasi atau simulasi produk digital yang digunakan untuk menguji ide, alur, dan interaksi pengguna sebelum produk dikembangkan sepenuhnya.',
    kata_kunci: ['prototype', 'simulasi', 'representasi produk', 'pengujian', 'interaksi pengguna', 'representasi', 'uji'],
    rubrik_skor: {
      '10': 'Menjelaskan representasi/simulasi produk untuk pengujian ide, alur, dan interaksi pengguna',
      '9': 'Prototype adalah contoh awal produk untuk diuji',
      '8': 'Prototype adalah desain awal aplikasi (belum menjelaskan fungsi simulasi dan pengujian)',
      '7': 'Prototype adalah desain aplikasi (terlalu umum dan tidak menjelaskan tujuan prototype)',
      '0': 'Tidak relevan'
    },
    created_at: now()
  },
  {
    id: 'er-0000005-0000-0000-0000-000000000002',
    question_id: 'q5000002-0000-0000-0000-000000000002',
    kunci_jawaban: 'Prototype membantu memvalidasi ide, menemukan masalah usability lebih awal, mengurangi risiko kesalahan, dan memperoleh feedback pengguna sebelum pengembangan dilakukan.',
    kata_kunci: ['validasi', 'feedback', 'usability', 'risiko', 'perbaikan', 'masalah'],
    rubrik_skor: {
      '10': 'Menjelaskan validasi ide, penemuan masalah usability lebih awal, pengurangan risiko, dan feedback pengguna',
      '9': 'Prototype membantu menemukan masalah sebelum produk dibuat',
      '8': 'Prototype membantu desainer bekerja lebih mudah (belum menjelaskan validasi dan pengurangan risiko)',
      '7': 'Prototype dibuat sebelum coding (menjelaskan urutan, bukan manfaat)',
      '0': 'Tidak relevan'
    },
    created_at: now()
  },
  {
    id: 'er-0000005-0000-0000-0000-000000000003',
    question_id: 'q5000002-0000-0000-0000-000000000003',
    kunci_jawaban: 'Low-Fidelity Prototype memiliki detail rendah dan digunakan untuk menguji struktur serta alur. High-Fidelity Prototype memiliki tampilan dan interaksi yang mendekati produk akhir.',
    kata_kunci: ['low fidelity', 'high fidelity', 'detail rendah', 'produk akhir', 'interaksi', 'struktur'],
    rubrik_skor: {
      '10': 'Menjelaskan perbedaan tingkat detail, tampilan, interaksi, dan fungsi pengujian kedua jenis prototype',
      '8': 'Menjelaskan salah satu jenis atau perbedaan secara umum',
      '0': 'Tidak relevan'
    },
    created_at: now()
  },
  {
    id: 'er-0000005-0000-0000-0000-000000000004',
    question_id: 'q5000002-0000-0000-0000-000000000004',
    kunci_jawaban: 'Clickable prototype memungkinkan pengguna mencoba alur interaksi secara nyata sehingga feedback yang diperoleh lebih akurat.',
    kata_kunci: ['clickable', 'interaksi', 'simulasi', 'feedback', 'alur', 'nyata'],
    rubrik_skor: {
      '10': 'Menjelaskan kemampuan pengguna mensimulasikan alur interaksi secara nyata sehingga menghasilkan feedback akurat',
      '8': 'Menjelaskan bahwa prototype dapat diklik secara umum',
      '0': 'Tidak relevan'
    },
    created_at: now()
  },
  {
    id: 'er-0000005-0000-0000-0000-000000000005',
    question_id: 'q5000002-0000-0000-0000-000000000005',
    kunci_jawaban: 'Feedback membantu mengidentifikasi kekurangan desain, memvalidasi asumsi, dan meningkatkan kualitas solusi sesuai kebutuhan pengguna.',
    kata_kunci: ['feedback', 'validasi', 'kebutuhan pengguna', 'perbaikan desain', 'kekurangan', 'asumsi'],
    rubrik_skor: {
      '10': 'Menjelaskan peran feedback dalam mengidentifikasi kekurangan desain, memvalidasi asumsi, dan meningkatkan solusi',
      '8': 'Menjelaskan bahwa feedback membantu memperbaiki desain secara umum',
      '0': 'Tidak relevan'
    },
    created_at: now()
  },

  // ─── Set B Essay Rubrics (6–10) ───
  {
    id: 'er-0000005-0000-0000-0000-000000000006',
    question_id: 'q5000004-0000-0000-0000-000000000001',
    kunci_jawaban: 'Button berfungsi sebagai elemen interaktif yang digunakan pengguna untuk menjalankan suatu aksi atau berpindah ke proses berikutnya.',
    kata_kunci: ['button', 'aksi', 'interaksi', 'navigasi', 'elemen interaktif', 'proses'],
    rubrik_skor: {
      '10': 'Menjelaskan button sebagai elemen interaktif pemicu aksi atau navigasi proses',
      '8': 'Menjelaskan fungsi tombol untuk diklik secara umum',
      '0': 'Tidak relevan'
    },
    created_at: now()
  },
  {
    id: 'er-0000005-0000-0000-0000-000000000007',
    question_id: 'q5000004-0000-0000-0000-000000000002',
    kunci_jawaban: 'Input Field digunakan untuk menerima data atau informasi yang dimasukkan oleh pengguna.',
    kata_kunci: ['input field', 'memasukkan data', 'pengguna', 'data', 'informasi'],
    rubrik_skor: {
      '10': 'Menjelaskan fungsi input field untuk menerima data atau informasi dari pengguna',
      '8': 'Menjelaskan tempat mengetik teks secara umum',
      '0': 'Tidak relevan'
    },
    created_at: now()
  },
  {
    id: 'er-0000005-0000-0000-0000-000000000008',
    question_id: 'q5000004-0000-0000-0000-000000000003',
    kunci_jawaban: 'Dropdown lebih cocok ketika pilihan cukup banyak dan perlu menghemat ruang layar, sedangkan Radio Button cocok untuk pilihan yang jumlahnya sedikit.',
    kata_kunci: ['dropdown', 'banyak pilihan', 'hemat ruang', 'radio button', 'sedikit'],
    rubrik_skor: {
      '10': 'Membandingkan penggunaan dropdown (banyak pilihan dan hemat ruang layar) dengan radio button (pilihan sedikit)',
      '8': 'Menyebutkan salah satu kondisi penggunaan dropdown atau radio button',
      '0': 'Tidak relevan'
    },
    created_at: now()
  },
  {
    id: 'er-0000005-0000-0000-0000-000000000009',
    question_id: 'q5000004-0000-0000-0000-000000000004',
    kunci_jawaban: 'Konsistensi membantu pengguna memahami antarmuka lebih cepat, mengurangi kebingungan, dan meningkatkan pengalaman penggunaan.',
    kata_kunci: ['konsistensi', 'pengalaman pengguna', 'kemudahan', 'mengurangi kebingungan', 'cepat'],
    rubrik_skor: {
      '10': 'Menjelaskan manfaat konsistensi dalam mempercepat pemahaman antarmuka, mengurangi kebingungan, dan meningkatkan UX',
      '8': 'Menyebutkan desain terlihat rapi dan seragam secara umum',
      '0': 'Tidak relevan'
    },
    created_at: now()
  },
  {
    id: 'er-0000005-0000-0000-0000-000000000010',
    question_id: 'q5000004-0000-0000-0000-000000000005',
    kunci_jawaban: 'User Testing adalah proses menguji prototype kepada pengguna nyata untuk mengevaluasi kemudahan penggunaan serta menemukan masalah yang perlu diperbaiki.',
    kata_kunci: ['user testing', 'pengguna nyata', 'evaluasi', 'usability', 'masalah', 'kemudahan'],
    rubrik_skor: {
      '10': 'Menjelaskan pengujian prototype pada pengguna nyata untuk mengevaluasi kemudahan penggunaan dan menemukan masalah',
      '8': 'Menjelaskan pengujian aplikasi kepada pengguna secara umum',
      '0': 'Tidak relevan'
    },
    created_at: now()
  },

  // ─── Set C Essay Rubrics (11–15) ───
  {
    id: 'er-0000005-0000-0000-0000-000000000011',
    question_id: 'q5000006-0000-0000-0000-000000000001',
    kunci_jawaban: 'CTA berfungsi mengarahkan pengguna untuk melakukan tindakan tertentu seperti mendaftar, membeli, atau menghubungi layanan.',
    kata_kunci: ['cta', 'tindakan', 'konversi', 'pengguna', 'mengarahkan'],
    rubrik_skor: {
      '10': 'Menjelaskan fungsi CTA dalam mengarahkan pengguna melakukan tindakan spesifik atau konversi beserta contoh',
      '8': 'Menyebutkan tombol ajakan secara umum',
      '0': 'Tidak relevan'
    },
    created_at: now()
  },
  {
    id: 'er-0000005-0000-0000-0000-000000000012',
    question_id: 'q5000006-0000-0000-0000-000000000002',
    kunci_jawaban: 'Agar dapat diketahui apakah pengguna mampu menyelesaikan tugasnya dengan mudah dan tanpa hambatan.',
    kata_kunci: ['user flow', 'tugas pengguna', 'kemudahan', 'hambatan', 'menyelesaikan tugas'],
    rubrik_skor: {
      '10': 'Menjelaskan tujuan pengujian alur untuk memastikan pengguna mampu menyelesaikan tugas dengan mudah tanpa hambatan',
      '8': 'Menyebutkan untuk mengecek alur halaman secara umum',
      '0': 'Tidak relevan'
    },
    created_at: now()
  },
  {
    id: 'er-0000005-0000-0000-0000-000000000013',
    question_id: 'q5000006-0000-0000-0000-000000000003',
    kunci_jawaban: 'Iterasi desain adalah proses memperbaiki dan menyempurnakan desain secara berulang berdasarkan hasil evaluasi dan feedback.',
    kata_kunci: ['iterasi', 'perbaikan berulang', 'feedback', 'evaluasi', 'menyempurnakan'],
    rubrik_skor: {
      '10': 'Menjelaskan proses perbaikan dan penyempurnaan desain secara berulang berdasarkan hasil evaluasi dan feedback',
      '8': 'Menyebutkan perbaikan desain secara umum',
      '0': 'Tidak relevan'
    },
    created_at: now()
  },
  {
    id: 'er-0000005-0000-0000-0000-000000000014',
    question_id: 'q5000006-0000-0000-0000-000000000004',
    kunci_jawaban: 'Karena masalah dapat ditemukan dan diperbaiki sebelum masuk tahap coding yang lebih mahal dan kompleks.',
    kata_kunci: ['biaya', 'menemukan masalah lebih awal', 'coding', 'efisiensi', 'mahal'],
    rubrik_skor: {
      '10': 'Menjelaskan bahwa masalah dapat ditemukan dan diperbaiki lebih awal sebelum tahap coding yang mahal dan kompleks',
      '8': 'Menyebutkan menghemat biaya pengembangan secara umum',
      '0': 'Tidak relevan'
    },
    created_at: now()
  },
  {
    id: 'er-0000005-0000-0000-0000-000000000015',
    question_id: 'q5000006-0000-0000-0000-000000000005',
    kunci_jawaban: 'Prinsip ini menekankan pentingnya menguji desain sedini mungkin agar tim dapat belajar dari feedback pengguna dan melakukan perbaikan lebih cepat.',
    kata_kunci: ['test early', 'learn fast', 'feedback', 'perbaikan cepat', 'validasi pengguna', 'sedini mungkin'],
    rubrik_skor: {
      '10': 'Menjelaskan pengujian desain sedini mungkin agar tim belajar dari feedback pengguna dan melakukan perbaikan lebih cepat',
      '9': 'Menguji desain lebih awal untuk mendapatkan masukan',
      '8': 'Melakukan testing sejak awal proyek (belum menjelaskan proses pembelajaran dan iterasi berdasarkan feedback)',
      '7': 'Testing dilakukan sebelum produk selesai (terlalu umum)',
      '0': 'Tidak relevan'
    },
    created_at: now()
  }
];