// back-end/src/data/modules/modul4.js
const now = () => new Date().toISOString();
const COURSE_ID = 'c0000004-0000-0000-0000-000000000004';

export const modul4Questions = [
  // ════════════ SET A – 10 PG (Nomor 1–10) ════════════
  { id: 'q4000001-0000-0000-0000-000000000001', course_id: COURSE_ID, set_paket: 'A', topik: 'Wireframe', tipe: 'pilihan_ganda', teks: 'Apa tujuan utama wireframe dalam proses desain?', urutan: 1, created_at: now() },
  { id: 'q4000001-0000-0000-0000-000000000002', course_id: COURSE_ID, set_paket: 'A', topik: 'Wireframe', tipe: 'pilihan_ganda', teks: 'Wireframe Low-Fidelity digunakan untuk...', urutan: 2, created_at: now() },
  { id: 'q4000001-0000-0000-0000-000000000003', course_id: COURSE_ID, set_paket: 'A', topik: 'Information Architecture', tipe: 'pilihan_ganda', teks: 'Information Architecture (IA) adalah...', urutan: 3, created_at: now() },
  { id: 'q4000001-0000-0000-0000-000000000004', course_id: COURSE_ID, set_paket: 'A', topik: 'Information Architecture', tipe: 'pilihan_ganda', teks: 'Manakah yang BUKAN termasuk pilar Information Architecture?', urutan: 4, created_at: now() },
  { id: 'q4000001-0000-0000-0000-000000000005', course_id: COURSE_ID, set_paket: 'A', topik: 'Information Architecture', tipe: 'pilihan_ganda', teks: 'Organization System berfungsi untuk...', urutan: 5, created_at: now() },
  { id: 'q4000001-0000-0000-0000-000000000006', course_id: COURSE_ID, set_paket: 'A', topik: 'Information Architecture', tipe: 'pilihan_ganda', teks: 'Labeling System bertujuan untuk...', urutan: 6, created_at: now() },
  { id: 'q4000001-0000-0000-0000-000000000007', course_id: COURSE_ID, set_paket: 'A', topik: 'Information Architecture', tipe: 'pilihan_ganda', teks: 'Navigation System membantu pengguna untuk...', urutan: 7, created_at: now() },
  { id: 'q4000001-0000-0000-0000-000000000008', course_id: COURSE_ID, set_paket: 'A', topik: 'Information Architecture', tipe: 'pilihan_ganda', teks: 'Search System digunakan agar pengguna dapat...', urutan: 8, created_at: now() },
  { id: 'q4000001-0000-0000-0000-000000000009', course_id: COURSE_ID, set_paket: 'A', topik: 'Struktur Halaman Web', tipe: 'pilihan_ganda', teks: 'Bagian website yang umumnya berisi logo dan menu adalah...', urutan: 9, created_at: now() },
  { id: 'q4000001-0000-0000-0000-000000000010', course_id: COURSE_ID, set_paket: 'A', topik: 'Struktur Halaman Web', tipe: 'pilihan_ganda', teks: 'Hero Section biasanya digunakan untuk...', urutan: 10, created_at: now() },
  // ════════════ SET A – 5 Essay (Nomor 1–5) ════════════
  { id: 'q4000002-0000-0000-0000-000000000001', course_id: COURSE_ID, set_paket: 'A', topik: 'Wireframe', tipe: 'essay', teks: 'Jelaskan pengertian Wireframe!', urutan: 11, created_at: now() },
  { id: 'q4000002-0000-0000-0000-000000000002', course_id: COURSE_ID, set_paket: 'A', topik: 'Wireframe', tipe: 'essay', teks: 'Mengapa wireframe penting dalam proses desain?', urutan: 12, created_at: now() },
  { id: 'q4000002-0000-0000-0000-000000000003', course_id: COURSE_ID, set_paket: 'A', topik: 'Information Architecture', tipe: 'essay', teks: 'Apa yang dimaksud dengan Information Architecture (IA)?', urutan: 13, created_at: now() },
  { id: 'q4000002-0000-0000-0000-000000000004', course_id: COURSE_ID, set_paket: 'A', topik: 'Information Architecture', tipe: 'essay', teks: 'Jelaskan empat pilar Information Architecture!', urutan: 14, created_at: now() },
  { id: 'q4000002-0000-0000-0000-000000000005', course_id: COURSE_ID, set_paket: 'A', topik: 'Struktur Halaman Web', tipe: 'essay', teks: 'Apa fungsi Header pada halaman web?', urutan: 15, created_at: now() },

  // ════════════ SET B – 10 PG (Nomor 11–20) ════════════
  { id: 'q4000003-0000-0000-0000-000000000001', course_id: COURSE_ID, set_paket: 'B', topik: 'Struktur Halaman Web', tipe: 'pilihan_ganda', teks: 'Main Content merupakan...', urutan: 1, created_at: now() },
  { id: 'q4000003-0000-0000-0000-000000000002', course_id: COURSE_ID, set_paket: 'B', topik: 'Struktur Halaman Web', tipe: 'pilihan_ganda', teks: 'Sidebar biasanya digunakan untuk...', urutan: 2, created_at: now() },
  { id: 'q4000003-0000-0000-0000-000000000003', course_id: COURSE_ID, set_paket: 'B', topik: 'Struktur Halaman Web', tipe: 'pilihan_ganda', teks: 'Footer terletak pada bagian...', urutan: 3, created_at: now() },
  { id: 'q4000003-0000-0000-0000-000000000004', course_id: COURSE_ID, set_paket: 'B', topik: 'Pola Baca & Prinsip Desain', tipe: 'pilihan_ganda', teks: 'F-Pattern menggambarkan...', urutan: 4, created_at: now() },
  { id: 'q4000003-0000-0000-0000-000000000005', course_id: COURSE_ID, set_paket: 'B', topik: 'Pola Baca & Prinsip Desain', tipe: 'pilihan_ganda', teks: 'F-Pattern paling sering ditemukan pada...', urutan: 5, created_at: now() },
  { id: 'q4000003-0000-0000-0000-000000000006', course_id: COURSE_ID, set_paket: 'B', topik: 'Pola Baca & Prinsip Desain', tipe: 'pilihan_ganda', teks: 'Z-Pattern cocok diterapkan pada...', urutan: 6, created_at: now() },
  { id: 'q4000003-0000-0000-0000-000000000007', course_id: COURSE_ID, set_paket: 'B', topik: 'Pola Baca & Prinsip Desain', tipe: 'pilihan_ganda', teks: 'Prinsip Proximity menyatakan bahwa...', urutan: 7, created_at: now() },
  { id: 'q4000003-0000-0000-0000-000000000008', course_id: COURSE_ID, set_paket: 'B', topik: 'Pola Baca & Prinsip Desain', tipe: 'pilihan_ganda', teks: 'Prinsip Contrast digunakan untuk...', urutan: 8, created_at: now() },
  { id: 'q4000003-0000-0000-0000-000000000009', course_id: COURSE_ID, set_paket: 'B', topik: 'Pola Baca & Prinsip Desain', tipe: 'pilihan_ganda', teks: 'Region dalam UI membantu pengguna...', urutan: 9, created_at: now() },
  { id: 'q4000003-0000-0000-0000-000000000010', course_id: COURSE_ID, set_paket: 'B', topik: 'User Flow & Flowchart', tipe: 'pilihan_ganda', teks: 'User Flow adalah...', urutan: 10, created_at: now() },
  // ════════════ SET B – 5 Essay (Nomor 6–10) ════════════
  { id: 'q4000004-0000-0000-0000-000000000001', course_id: COURSE_ID, set_paket: 'B', topik: 'Struktur Halaman Web', tipe: 'essay', teks: 'Apa tujuan Hero Section?', urutan: 11, created_at: now() },
  { id: 'q4000004-0000-0000-0000-000000000002', course_id: COURSE_ID, set_paket: 'B', topik: 'Pola Baca & Prinsip Desain', tipe: 'essay', teks: 'Jelaskan perbedaan F-Pattern dan Z-Pattern!', urutan: 12, created_at: now() },
  { id: 'q4000004-0000-0000-0000-000000000003', course_id: COURSE_ID, set_paket: 'B', topik: 'Pola Baca & Prinsip Desain', tipe: 'essay', teks: 'Apa yang dimaksud dengan Proximity dalam UI Design?', urutan: 13, created_at: now() },
  { id: 'q4000004-0000-0000-0000-000000000004', course_id: COURSE_ID, set_paket: 'B', topik: 'Pola Baca & Prinsip Desain', tipe: 'essay', teks: 'Mengapa Contrast penting dalam desain antarmuka?', urutan: 14, created_at: now() },
  { id: 'q4000004-0000-0000-0000-000000000005', course_id: COURSE_ID, set_paket: 'B', topik: 'User Flow & Flowchart', tipe: 'essay', teks: 'Apa yang dimaksud dengan User Flow?', urutan: 15, created_at: now() },

  // ════════════ SET C – 10 PG (Nomor 21–30) ════════════
  { id: 'q4000005-0000-0000-0000-000000000001', course_id: COURSE_ID, set_paket: 'C', topik: 'User Flow & Flowchart', tipe: 'pilihan_ganda', teks: 'Simbol Terminator pada flowchart digunakan untuk...', urutan: 1, created_at: now() },
  { id: 'q4000005-0000-0000-0000-000000000002', course_id: COURSE_ID, set_paket: 'C', topik: 'User Flow & Flowchart', tipe: 'pilihan_ganda', teks: 'Simbol Process menunjukkan...', urutan: 2, created_at: now() },
  { id: 'q4000005-0000-0000-0000-000000000003', course_id: COURSE_ID, set_paket: 'C', topik: 'User Flow & Flowchart', tipe: 'pilihan_ganda', teks: 'Simbol Decision digunakan ketika...', urutan: 3, created_at: now() },
  { id: 'q4000005-0000-0000-0000-000000000004', course_id: COURSE_ID, set_paket: 'C', topik: 'User Flow & Flowchart', tipe: 'pilihan_ganda', teks: 'Connector dalam flowchart berfungsi untuk...', urutan: 4, created_at: now() },
  { id: 'q4000005-0000-0000-0000-000000000005', course_id: COURSE_ID, set_paket: 'C', topik: 'Skenario Alur & Ideasi', tipe: 'pilihan_ganda', teks: 'Happy Path adalah...', urutan: 5, created_at: now() },
  { id: 'q4000005-0000-0000-0000-000000000006', course_id: COURSE_ID, set_paket: 'C', topik: 'Skenario Alur & Ideasi', tipe: 'pilihan_ganda', teks: 'Edge Case adalah...', urutan: 6, created_at: now() },
  { id: 'q4000005-0000-0000-0000-000000000007', course_id: COURSE_ID, set_paket: 'C', topik: 'Skenario Alur & Ideasi', tipe: 'pilihan_ganda', teks: 'Contoh Edge Case pada login adalah...', urutan: 7, created_at: now() },
  { id: 'q4000005-0000-0000-0000-000000000008', course_id: COURSE_ID, set_paket: 'C', topik: 'Skenario Alur & Ideasi', tipe: 'pilihan_ganda', teks: 'Dead End dalam User Flow berarti...', urutan: 8, created_at: now() },
  { id: 'q4000005-0000-0000-0000-000000000009', course_id: COURSE_ID, set_paket: 'C', topik: 'Skenario Alur & Ideasi', tipe: 'pilihan_ganda', teks: 'Cognitive Overload terjadi ketika...', urutan: 9, created_at: now() },
  { id: 'q4000005-0000-0000-0000-000000000010', course_id: COURSE_ID, set_paket: 'C', topik: 'Skenario Alur & Ideasi', tipe: 'pilihan_ganda', teks: "Metode Crazy 8's digunakan untuk...", urutan: 10, created_at: now() },
  // ════════════ SET C – 5 Essay (Nomor 11–15) ════════════
  { id: 'q4000006-0000-0000-0000-000000000001', course_id: COURSE_ID, set_paket: 'C', topik: 'User Flow & Flowchart', tipe: 'essay', teks: 'Jelaskan fungsi simbol Decision pada flowchart!', urutan: 11, created_at: now() },
  { id: 'q4000006-0000-0000-0000-000000000002', course_id: COURSE_ID, set_paket: 'C', topik: 'Skenario Alur & Ideasi', tipe: 'essay', teks: 'Apa yang dimaksud dengan Happy Path?', urutan: 12, created_at: now() },
  { id: 'q4000006-0000-0000-0000-000000000003', course_id: COURSE_ID, set_paket: 'C', topik: 'Skenario Alur & Ideasi', tipe: 'essay', teks: 'Apa yang dimaksud dengan Edge Case?', urutan: 13, created_at: now() },
  { id: 'q4000006-0000-0000-0000-000000000004', course_id: COURSE_ID, set_paket: 'C', topik: 'Skenario Alur & Ideasi', tipe: 'essay', teks: 'Mengapa Dead End harus dihindari dalam User Flow?', urutan: 14, created_at: now() },
  { id: 'q4000006-0000-0000-0000-000000000005', course_id: COURSE_ID, set_paket: 'C', topik: 'Skenario Alur & Ideasi', tipe: 'essay', teks: "Jelaskan manfaat metode Crazy 8's!", urutan: 15, created_at: now() }
];

export const modul4Options = [
  // SET A OPTIONS (Q1–Q10)
  { id: 'o4-A1-1', question_id: 'q4000001-0000-0000-0000-000000000001', teks: 'Membuat animasi aplikasi', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-A1-2', question_id: 'q4000001-0000-0000-0000-000000000001', teks: 'Membuat struktur dan tata letak halaman', poin: 10, umpan_balik: 'Tepat! Wireframe berfungsi sebagai kerangka struktur dan tata letak antarmuka sebelum tahap visual detail.', is_correct: true },
  { id: 'o4-A1-3', question_id: 'q4000001-0000-0000-0000-000000000001', teks: 'Membuat database aplikasi', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-A1-4', question_id: 'q4000001-0000-0000-0000-000000000001', teks: 'Mengoptimalkan server', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o4-A2-1', question_id: 'q4000001-0000-0000-0000-000000000002', teks: 'Desain akhir siap rilis', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-A2-2', question_id: 'q4000001-0000-0000-0000-000000000002', teks: 'Menentukan warna final aplikasi', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-A2-3', question_id: 'q4000001-0000-0000-0000-000000000002', teks: 'Memvalidasi struktur dan alur halaman', poin: 10, umpan_balik: 'Tepat! Low-Fidelity wireframe fokus pada pengujian tata letak dasar dan alur navigasi secara cepat.', is_correct: true },
  { id: 'o4-A2-4', question_id: 'q4000001-0000-0000-0000-000000000002', teks: 'Membuat logo', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o4-A3-1', question_id: 'q4000001-0000-0000-0000-000000000003', teks: 'Teknik pemrograman web', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-A3-2', question_id: 'q4000001-0000-0000-0000-000000000003', teks: 'Struktur pengorganisasian informasi dalam produk digital', poin: 10, umpan_balik: 'Tepat! Information Architecture mengatur pengelompokan dan struktur konten agar mudah ditemukan pengguna.', is_correct: true },
  { id: 'o4-A3-3', question_id: 'q4000001-0000-0000-0000-000000000003', teks: 'Sistem keamanan aplikasi', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-A3-4', question_id: 'q4000001-0000-0000-0000-000000000003', teks: 'Strategi pemasaran digital', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o4-A4-1', question_id: 'q4000001-0000-0000-0000-000000000004', teks: 'Organization System', poin: 0, umpan_balik: 'Keliru. Organization System adalah pilar IA.', is_correct: false },
  { id: 'o4-A4-2', question_id: 'q4000001-0000-0000-0000-000000000004', teks: 'Navigation System', poin: 0, umpan_balik: 'Keliru. Navigation System adalah pilar IA.', is_correct: false },
  { id: 'o4-A4-3', question_id: 'q4000001-0000-0000-0000-000000000004', teks: 'Search System', poin: 0, umpan_balik: 'Keliru. Search System adalah pilar IA.', is_correct: false },
  { id: 'o4-A4-4', question_id: 'q4000001-0000-0000-0000-000000000004', teks: 'Networking System', poin: 10, umpan_balik: 'Tepat! Empat pilar IA adalah Organization, Labeling, Navigation, dan Search System.', is_correct: true },

  { id: 'o4-A5-1', question_id: 'q4000001-0000-0000-0000-000000000005', teks: 'Menyusun informasi secara terstruktur', poin: 10, umpan_balik: 'Tepat! Organization System mengelompokkan dan mengurutkan informasi secara logis.', is_correct: true },
  { id: 'o4-A5-2', question_id: 'q4000001-0000-0000-0000-000000000005', teks: 'Mengelola server aplikasi', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-A5-3', question_id: 'q4000001-0000-0000-0000-000000000005', teks: 'Menentukan harga produk', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-A5-4', question_id: 'q4000001-0000-0000-0000-000000000005', teks: 'Menganalisis kompetitor', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o4-A6-1', question_id: 'q4000001-0000-0000-0000-000000000006', teks: 'Menamai kategori dan menu agar mudah dipahami pengguna', poin: 10, umpan_balik: 'Tepat! Labeling System memastikan istilah menu dan kategori jelas serta familier bagi pengguna.', is_correct: true },
  { id: 'o4-A6-2', question_id: 'q4000001-0000-0000-0000-000000000006', teks: 'Menentukan warna UI', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-A6-3', question_id: 'q4000001-0000-0000-0000-000000000006', teks: 'Mengatur database', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-A6-4', question_id: 'q4000001-0000-0000-0000-000000000006', teks: 'Menguji aplikasi', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o4-A7-1', question_id: 'q4000001-0000-0000-0000-000000000007', teks: 'Membayar tagihan', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-A7-2', question_id: 'q4000001-0000-0000-0000-000000000007', teks: 'Berpindah dari satu bagian ke bagian lain', poin: 10, umpan_balik: 'Tepat! Navigation System memandu perpindahan pengguna antar halaman atau bagian konten.', is_correct: true },
  { id: 'o4-A7-3', question_id: 'q4000001-0000-0000-0000-000000000007', teks: 'Mengubah warna aplikasi', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-A7-4', question_id: 'q4000001-0000-0000-0000-000000000007', teks: 'Meningkatkan kecepatan server', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o4-A8-1', question_id: 'q4000001-0000-0000-0000-000000000008', teks: 'Menemukan informasi dengan cepat', poin: 10, umpan_balik: 'Tepat! Search System memungkinkan pengguna langsung mencari item atau topik spesifik.', is_correct: true },
  { id: 'o4-A8-2', question_id: 'q4000001-0000-0000-0000-000000000008', teks: 'Memperbesar font aplikasi', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-A8-3', question_id: 'q4000001-0000-0000-0000-000000000008', teks: 'Membuat akun baru', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-A8-4', question_id: 'q4000001-0000-0000-0000-000000000008', teks: 'Mengubah layout', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o4-A9-1', question_id: 'q4000001-0000-0000-0000-000000000009', teks: 'Footer', poin: 0, umpan_balik: 'Keliru. Footer berada di bagian paling bawah halaman.', is_correct: false },
  { id: 'o4-A9-2', question_id: 'q4000001-0000-0000-0000-000000000009', teks: 'Sidebar', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-A9-3', question_id: 'q4000001-0000-0000-0000-000000000009', teks: 'Header', poin: 10, umpan_balik: 'Tepat! Header terletak di bagian atas dan memuat identitas situs serta navigasi utama.', is_correct: true },
  { id: 'o4-A9-4', question_id: 'q4000001-0000-0000-0000-000000000009', teks: 'Main Content', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o4-A10-1', question_id: 'q4000001-0000-0000-0000-000000000010', teks: 'Menampilkan pesan atau nilai utama halaman', poin: 10, umpan_balik: 'Tepat! Hero Section menjadi fokus pertama yang menyampaikan value proposition dan CTA utama.', is_correct: true },
  { id: 'o4-A10-2', question_id: 'q4000001-0000-0000-0000-000000000010', teks: 'Menampilkan footer', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-A10-3', question_id: 'q4000001-0000-0000-0000-000000000010', teks: 'Menyimpan data pengguna', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-A10-4', question_id: 'q4000001-0000-0000-0000-000000000010', teks: 'Membuat database', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // SET B OPTIONS (Q11–Q20)
  { id: 'o4-B1-1', question_id: 'q4000003-0000-0000-0000-000000000001', teks: 'Konten utama yang ingin dilihat pengguna', poin: 10, umpan_balik: 'Tepat! Main Content adalah area inti yang menyajikan informasi utama halaman.', is_correct: true },
  { id: 'o4-B1-2', question_id: 'q4000003-0000-0000-0000-000000000001', teks: 'Menu navigasi', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-B1-3', question_id: 'q4000003-0000-0000-0000-000000000001', teks: 'Bagian login admin', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-B1-4', question_id: 'q4000003-0000-0000-0000-000000000001', teks: 'Kode program', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o4-B2-1', question_id: 'q4000003-0000-0000-0000-000000000002', teks: 'Navigasi tambahan atau informasi pendukung', poin: 10, umpan_balik: 'Tepat! Sidebar mendampingi konten utama dengan filter, menu sekunder, atau widget.', is_correct: true },
  { id: 'o4-B2-2', question_id: 'q4000003-0000-0000-0000-000000000002', teks: 'Menyimpan source code', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-B2-3', question_id: 'q4000003-0000-0000-0000-000000000002', teks: 'Menampilkan database', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-B2-4', question_id: 'q4000003-0000-0000-0000-000000000002', teks: 'Menjalankan server', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o4-B3-1', question_id: 'q4000003-0000-0000-0000-000000000003', teks: 'Atas halaman', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-B3-2', question_id: 'q4000003-0000-0000-0000-000000000003', teks: 'Tengah halaman', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-B3-3', question_id: 'q4000003-0000-0000-0000-000000000003', teks: 'Samping halaman', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-B3-4', question_id: 'q4000003-0000-0000-0000-000000000003', teks: 'Bawah halaman', poin: 10, umpan_balik: 'Tepat! Footer berada di bagian bawah untuk informasi hak cipta, kontak, dan tautan sekunder.', is_correct: true },

  { id: 'o4-B4-1', question_id: 'q4000003-0000-0000-0000-000000000004', teks: 'Pola membaca pengguna yang menyerupai huruf F', poin: 10, umpan_balik: 'Tepat! Pengguna memindai baris atas secara horizontal lalu turun menyusuri sisi kiri.', is_correct: true },
  { id: 'o4-B4-2', question_id: 'q4000003-0000-0000-0000-000000000004', teks: 'Pola login pengguna', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-B4-3', question_id: 'q4000003-0000-0000-0000-000000000004', teks: 'Struktur database', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-B4-4', question_id: 'q4000003-0000-0000-0000-000000000004', teks: 'Bentuk wireframe', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o4-B5-1', question_id: 'q4000003-0000-0000-0000-000000000005', teks: 'Artikel dan halaman dengan banyak teks', poin: 10, umpan_balik: 'Tepat! Halaman padat teks seperti blog dan hasil pencarian umumnya dipindai dengan pola F.', is_correct: true },
  { id: 'o4-B5-2', question_id: 'q4000003-0000-0000-0000-000000000005', teks: 'Game mobile', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-B5-3', question_id: 'q4000003-0000-0000-0000-000000000005', teks: 'Dashboard server', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-B5-4', question_id: 'q4000003-0000-0000-0000-000000000005', teks: 'Aplikasi kamera', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o4-B6-1', question_id: 'q4000003-0000-0000-0000-000000000006', teks: 'Landing Page sederhana', poin: 10, umpan_balik: 'Tepat! Z-Pattern efektif mengarahkan pandangan mata pada halaman visual yang ringkas menuju CTA.', is_correct: true },
  { id: 'o4-B6-2', question_id: 'q4000003-0000-0000-0000-000000000006', teks: 'Database Management System', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-B6-3', question_id: 'q4000003-0000-0000-0000-000000000006', teks: 'Source Code Editor', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-B6-4', question_id: 'q4000003-0000-0000-0000-000000000006', teks: 'Sistem Operasi', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o4-B7-1', question_id: 'q4000003-0000-0000-0000-000000000007', teks: 'Elemen yang berhubungan harus ditempatkan berdekatan', poin: 10, umpan_balik: 'Tepat! Kedekatan jarak (Proximity) membantu otak mengelompokkan elemen terkait secara visual.', is_correct: true },
  { id: 'o4-B7-2', question_id: 'q4000003-0000-0000-0000-000000000007', teks: 'Semua elemen harus berwarna sama', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-B7-3', question_id: 'q4000003-0000-0000-0000-000000000007', teks: 'Semua teks harus besar', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-B7-4', question_id: 'q4000003-0000-0000-0000-000000000007', teks: 'Semua gambar harus sejajar', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o4-B8-1', question_id: 'q4000003-0000-0000-0000-000000000008', teks: 'Menonjolkan elemen penting', poin: 10, umpan_balik: 'Tepat! Contrast menciptakan perbedaan visual yang tegas agar elemen utama mudah dikenali.', is_correct: true },
  { id: 'o4-B8-2', question_id: 'q4000003-0000-0000-0000-000000000008', teks: 'Menambah jumlah fitur', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-B8-3', question_id: 'q4000003-0000-0000-0000-000000000008', teks: 'Mengurangi loading time', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-B8-4', question_id: 'q4000003-0000-0000-0000-000000000008', teks: 'Mengatur database', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o4-B9-1', question_id: 'q4000003-0000-0000-0000-000000000009', teks: 'Mengelompokkan informasi berdasarkan area tertentu', poin: 10, umpan_balik: 'Tepat! Pembagian region memperjelas batas dan fungsi tiap bagian antarmuka.', is_correct: true },
  { id: 'o4-B9-2', question_id: 'q4000003-0000-0000-0000-000000000009', teks: 'Menambah memori server', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-B9-3', question_id: 'q4000003-0000-0000-0000-000000000009', teks: 'Mengubah bahasa aplikasi', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-B9-4', question_id: 'q4000003-0000-0000-0000-000000000009', teks: 'Menghapus akun', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o4-B10-1', question_id: 'q4000003-0000-0000-0000-000000000010', teks: 'Alur perjalanan pengguna dalam menyelesaikan suatu tujuan', poin: 10, umpan_balik: 'Tepat! User Flow memetakan urutan langkah pengguna dari titik masuk hingga tujuan tercapai.', is_correct: true },
  { id: 'o4-B10-2', question_id: 'q4000003-0000-0000-0000-000000000010', teks: 'Struktur database aplikasi', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-B10-3', question_id: 'q4000003-0000-0000-0000-000000000010', teks: 'Teknik coding frontend', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-B10-4', question_id: 'q4000003-0000-0000-0000-000000000010', teks: 'Sistem keamanan aplikasi', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // SET C OPTIONS (Q21–Q30)
  { id: 'o4-C1-1', question_id: 'q4000005-0000-0000-0000-000000000001', teks: 'Input Data', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-C1-2', question_id: 'q4000005-0000-0000-0000-000000000001', teks: 'Awal dan akhir proses', poin: 10, umpan_balik: 'Tepat! Simbol Terminator (oval/kapsul) menandai titik Start dan End pada diagram alur.', is_correct: true },
  { id: 'o4-C1-3', question_id: 'q4000005-0000-0000-0000-000000000001', teks: 'Keputusan', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-C1-4', question_id: 'q4000005-0000-0000-0000-000000000001', teks: 'Koneksi', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o4-C2-1', question_id: 'q4000005-0000-0000-0000-000000000002', teks: 'Aktivitas atau langkah kerja', poin: 10, umpan_balik: 'Tepat! Simbol Process (persegi panjang) menggambarkan aksi atau tahapan yang dilakukan.', is_correct: true },
  { id: 'o4-C2-2', question_id: 'q4000005-0000-0000-0000-000000000002', teks: 'Login pengguna', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-C2-3', question_id: 'q4000005-0000-0000-0000-000000000002', teks: 'Penyimpanan data', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-C2-4', question_id: 'q4000005-0000-0000-0000-000000000002', teks: 'Akhir program', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o4-C3-1', question_id: 'q4000005-0000-0000-0000-000000000003', teks: 'Ada pilihan atau percabangan alur', poin: 10, umpan_balik: 'Tepat! Simbol Decision (belah ketupat) mengevaluasi kondisi Ya/Tidak yang memecah alur.', is_correct: true },
  { id: 'o4-C3-2', question_id: 'q4000005-0000-0000-0000-000000000003', teks: 'Membuat akun baru', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-C3-3', question_id: 'q4000005-0000-0000-0000-000000000003', teks: 'Menampilkan gambar', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-C3-4', question_id: 'q4000005-0000-0000-0000-000000000003', teks: 'Menghapus file', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o4-C4-1', question_id: 'q4000005-0000-0000-0000-000000000004', teks: 'Menghubungkan satu bagian alur dengan bagian lain', poin: 10, umpan_balik: 'Tepat! Connector menyambungkan aliran proses antar simbol atau antar halaman diagram.', is_correct: true },
  { id: 'o4-C4-2', question_id: 'q4000005-0000-0000-0000-000000000004', teks: 'Menyimpan data', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-C4-3', question_id: 'q4000005-0000-0000-0000-000000000004', teks: 'Menghapus proses', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-C4-4', question_id: 'q4000005-0000-0000-0000-000000000004', teks: 'Menampilkan menu', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o4-C5-1', question_id: 'q4000005-0000-0000-0000-000000000005', teks: 'Jalur ideal ketika pengguna berhasil mencapai tujuan', poin: 10, umpan_balik: 'Tepat! Happy Path adalah skenario mulus tanpa error maupun penyimpangan.', is_correct: true },
  { id: 'o4-C5-2', question_id: 'q4000005-0000-0000-0000-000000000005', teks: 'Jalur error aplikasi', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-C5-3', question_id: 'q4000005-0000-0000-0000-000000000005', teks: 'Jalur administrator', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-C5-4', question_id: 'q4000005-0000-0000-0000-000000000005', teks: 'Jalur database', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o4-C6-1', question_id: 'q4000005-0000-0000-0000-000000000006', teks: 'Kondisi khusus atau tidak umum yang dapat terjadi', poin: 10, umpan_balik: 'Tepat! Edge Case mencakup skenario ekstrem atau galat yang tetap harus ditangani sistem.', is_correct: true },
  { id: 'o4-C6-2', question_id: 'q4000005-0000-0000-0000-000000000006', teks: 'Jalur utama pengguna', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-C6-3', question_id: 'q4000005-0000-0000-0000-000000000006', teks: 'Layout halaman', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-C6-4', question_id: 'q4000005-0000-0000-0000-000000000006', teks: 'Desain visual', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o4-C7-1', question_id: 'q4000005-0000-0000-0000-000000000007', teks: 'Pengguna berhasil login', poin: 0, umpan_balik: 'Keliru. Itu adalah Happy Path.', is_correct: false },
  { id: 'o4-C7-2', question_id: 'q4000005-0000-0000-0000-000000000007', teks: 'Pengguna memasukkan password yang salah', poin: 10, umpan_balik: 'Tepat! Kesalahan input kredensial adalah contoh Edge Case yang memerlukan pesan umpan balik jelas.', is_correct: true },
  { id: 'o4-C7-3', question_id: 'q4000005-0000-0000-0000-000000000007', teks: 'Pengguna membuka homepage', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-C7-4', question_id: 'q4000005-0000-0000-0000-000000000007', teks: 'Pengguna melihat menu', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o4-C8-1', question_id: 'q4000005-0000-0000-0000-000000000008', teks: 'Pengguna tidak memiliki langkah lanjutan yang jelas', poin: 10, umpan_balik: 'Tepat! Dead End membuat pengguna terjebak tanpa opsi navigasi atau solusi berikutnya.', is_correct: true },
  { id: 'o4-C8-2', question_id: 'q4000005-0000-0000-0000-000000000008', teks: 'Pengguna berhasil checkout', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-C8-3', question_id: 'q4000005-0000-0000-0000-000000000008', teks: 'Aplikasi berjalan cepat', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-C8-4', question_id: 'q4000005-0000-0000-0000-000000000008', teks: 'Data berhasil disimpan', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o4-C9-1', question_id: 'q4000005-0000-0000-0000-000000000009', teks: 'Pengguna menerima terlalu banyak informasi atau pilihan sekaligus', poin: 10, umpan_balik: 'Tepat! Beban kognitif berlebih memperlambat pengambilan keputusan dan memicu frustrasi.', is_correct: true },
  { id: 'o4-C9-2', question_id: 'q4000005-0000-0000-0000-000000000009', teks: 'Aplikasi memiliki satu tombol', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-C9-3', question_id: 'q4000005-0000-0000-0000-000000000009', teks: 'Halaman kosong', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-C9-4', question_id: 'q4000005-0000-0000-0000-000000000009', teks: 'Layout sederhana', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o4-C10-1', question_id: 'q4000005-0000-0000-0000-000000000010', teks: 'Menghasilkan banyak ide desain dalam waktu singkat', poin: 10, umpan_balik: 'Tepat! Crazy 8\'s menantang desainer membuat 8 sketsa alternatif dalam 8 menit.', is_correct: true },
  { id: 'o4-C10-2', question_id: 'q4000005-0000-0000-0000-000000000010', teks: 'Menguji server', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-C10-3', question_id: 'q4000005-0000-0000-0000-000000000010', teks: 'Membuat database', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o4-C10-4', question_id: 'q4000005-0000-0000-0000-000000000010', teks: 'Menghitung keuntungan bisnis', poin: 0, umpan_balik: 'Keliru.', is_correct: false }
];

export const modul4Rubrics = [
  // SET A RUBRICS (Essay 1–5)
  { id: 'er-0000004-0000-0000-0000-000000000001', question_id: 'q4000002-0000-0000-0000-000000000001', kunci_jawaban: 'Wireframe adalah representasi visual sederhana yang menggambarkan struktur, tata letak, dan alur antarmuka suatu produk digital sebelum masuk ke tahap desain visual detail.', kata_kunci: ['wireframe', 'struktur', 'tata letak', 'blueprint', 'antarmuka'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },
  { id: 'er-0000004-0000-0000-0000-000000000002', question_id: 'q4000002-0000-0000-0000-000000000002', kunci_jawaban: 'Wireframe membantu tim memvalidasi struktur, navigasi, dan alur pengguna sejak awal sehingga kesalahan desain dapat ditemukan lebih cepat dan lebih murah untuk diperbaiki.', kata_kunci: ['validasi', 'struktur', 'alur pengguna', 'efisiensi', 'mengurangi kesalahan'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },
  { id: 'er-0000004-0000-0000-0000-000000000003', question_id: 'q4000002-0000-0000-0000-000000000003', kunci_jawaban: 'Information Architecture adalah proses mengorganisasi, menyusun, dan memberi struktur informasi agar mudah ditemukan, dipahami, dan digunakan oleh pengguna.', kata_kunci: ['information architecture', 'struktur informasi', 'organisasi informasi', 'navigasi', 'kemudahan pengguna'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },
  { id: 'er-0000004-0000-0000-0000-000000000004', question_id: 'q4000002-0000-0000-0000-000000000004', kunci_jawaban: '1. Organization System: mengelompokkan informasi. 2. Labeling System: memberi nama yang mudah dipahami. 3. Navigation System: membantu perpindahan antar halaman. 4. Search System: membantu pencarian informasi.', kata_kunci: ['organization', 'labeling', 'navigation', 'search'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },
  { id: 'er-0000004-0000-0000-0000-000000000005', question_id: 'q4000002-0000-0000-0000-000000000005', kunci_jawaban: 'Header berfungsi sebagai area utama yang biasanya berisi logo, identitas situs, dan navigasi untuk membantu pengguna berpindah halaman.', kata_kunci: ['header', 'logo', 'identitas', 'navigasi'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },

  // SET B RUBRICS (Essay 6–10)
  { id: 'er-0000004-0000-0000-0000-000000000006', question_id: 'q4000004-0000-0000-0000-000000000001', kunci_jawaban: 'Hero Section digunakan untuk menyampaikan pesan utama, nilai produk, atau ajakan tindakan pertama yang ingin dilihat pengguna saat membuka halaman.', kata_kunci: ['hero section', 'pesan utama', 'value proposition', 'cta'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },
  { id: 'er-0000004-0000-0000-0000-000000000007', question_id: 'q4000004-0000-0000-0000-000000000002', kunci_jawaban: 'F-Pattern umumnya digunakan pada halaman dengan banyak teks, sedangkan Z-Pattern lebih cocok untuk landing page sederhana yang mengarahkan perhatian pengguna mengikuti pola huruf Z.', kata_kunci: ['f-pattern', 'z-pattern', 'pola membaca', 'teks', 'landing page'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },
  { id: 'er-0000004-0000-0000-0000-000000000008', question_id: 'q4000004-0000-0000-0000-000000000003', kunci_jawaban: 'Proximity adalah prinsip desain yang menempatkan elemen yang saling berhubungan berdekatan agar mudah dipahami sebagai satu kelompok informasi.', kata_kunci: ['proximity', 'jarak', 'pengelompokan', 'keterkaitan'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },
  { id: 'er-0000004-0000-0000-0000-000000000009', question_id: 'q4000004-0000-0000-0000-000000000004', kunci_jawaban: 'Contrast membantu menciptakan hierarki visual sehingga elemen penting lebih mudah ditemukan dan mendapat perhatian pengguna.', kata_kunci: ['contrast', 'hierarki visual', 'perhatian pengguna', 'elemen penting'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },
  { id: 'er-0000004-0000-0000-0000-000000000010', question_id: 'q4000004-0000-0000-0000-000000000005', kunci_jawaban: 'User Flow adalah visualisasi langkah-langkah yang dilalui pengguna untuk mencapai tujuan tertentu saat menggunakan produk digital.', kata_kunci: ['user flow', 'langkah pengguna', 'tujuan', 'alur'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },

  // SET C RUBRICS (Essay 11–15)
  { id: 'er-0000004-0000-0000-0000-000000000011', question_id: 'q4000006-0000-0000-0000-000000000001', kunci_jawaban: 'Decision digunakan untuk menunjukkan titik pengambilan keputusan yang menghasilkan percabangan alur berdasarkan kondisi tertentu.', kata_kunci: ['decision', 'percabangan', 'kondisi', 'keputusan'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },
  { id: 'er-0000004-0000-0000-0000-000000000012', question_id: 'q4000006-0000-0000-0000-000000000002', kunci_jawaban: 'Happy Path adalah alur ideal ketika pengguna berhasil menyelesaikan tugas tanpa hambatan atau kesalahan.', kata_kunci: ['happy path', 'alur ideal', 'berhasil', 'tanpa hambatan'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },
  { id: 'er-0000004-0000-0000-0000-000000000013', question_id: 'q4000006-0000-0000-0000-000000000003', kunci_jawaban: 'Edge Case adalah kondisi khusus atau tidak umum yang tetap perlu dipertimbangkan karena dapat memengaruhi pengalaman pengguna.', kata_kunci: ['edge case', 'kondisi khusus', 'skenario tidak umum', 'pengalaman pengguna'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },
  { id: 'er-0000004-0000-0000-0000-000000000014', question_id: 'q4000006-0000-0000-0000-000000000004', kunci_jawaban: 'Karena Dead End membuat pengguna tidak mengetahui langkah selanjutnya sehingga dapat menyebabkan kebingungan, frustrasi, dan kegagalan menyelesaikan tujuan.', kata_kunci: ['dead end', 'kebingungan', 'frustrasi', 'langkah selanjutnya'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },
  { id: 'er-0000004-0000-0000-0000-000000000015', question_id: 'q4000006-0000-0000-0000-000000000005', kunci_jawaban: "Crazy 8's adalah metode ideasi cepat untuk menghasilkan banyak alternatif solusi atau sketsa desain dalam waktu singkat sehingga meningkatkan kreativitas dan eksplorasi ide.", kata_kunci: ["crazy 8's", 'ideasi', 'kreativitas', 'banyak ide', 'sketsa cepat'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() }
];