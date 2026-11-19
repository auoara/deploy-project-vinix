// back-end/src/data/modules/modul3.js
const now = () => new Date().toISOString();
const COURSE_ID = 'c0000003-0000-0000-0000-000000000003';

export const modul3Questions = [
  // ════════════ SET A – 10 PG (Nomor 1–10) ════════════
  { id: 'q3000001-0000-0000-0000-000000000001', course_id: COURSE_ID, set_paket: 'A', topik: 'Konsep User Research', tipe: 'pilihan_ganda', teks: 'User Research adalah proses untuk...', urutan: 1, created_at: now() },
  { id: 'q3000001-0000-0000-0000-000000000002', course_id: COURSE_ID, set_paket: 'A', topik: 'Konsep User Research', tipe: 'pilihan_ganda', teks: 'Tujuan utama User Research adalah...', urutan: 2, created_at: now() },
  { id: 'q3000001-0000-0000-0000-000000000003', course_id: COURSE_ID, set_paket: 'A', topik: 'Metode Riset', tipe: 'pilihan_ganda', teks: 'Riset kualitatif berfokus pada...', urutan: 3, created_at: now() },
  { id: 'q3000001-0000-0000-0000-000000000004', course_id: COURSE_ID, set_paket: 'A', topik: 'Metode Riset', tipe: 'pilihan_ganda', teks: 'Contoh metode riset kualitatif adalah...', urutan: 4, created_at: now() },
  { id: 'q3000001-0000-0000-0000-000000000005', course_id: COURSE_ID, set_paket: 'A', topik: 'Metode Riset', tipe: 'pilihan_ganda', teks: 'Riset kuantitatif umumnya menghasilkan...', urutan: 5, created_at: now() },
  { id: 'q3000001-0000-0000-0000-000000000006', course_id: COURSE_ID, set_paket: 'A', topik: 'Teknik Wawancara', tipe: 'pilihan_ganda', teks: 'Dalam wawancara pengguna, tujuan utama adalah...', urutan: 6, created_at: now() },
  { id: 'q3000001-0000-0000-0000-000000000007', course_id: COURSE_ID, set_paket: 'A', topik: 'Teknik Wawancara', tipe: 'pilihan_ganda', teks: 'Leading Question adalah...', urutan: 7, created_at: now() },
  { id: 'q3000001-0000-0000-0000-000000000008', course_id: COURSE_ID, set_paket: 'A', topik: 'Teknik Wawancara', tipe: 'pilihan_ganda', teks: 'Contoh Leading Question adalah...', urutan: 8, created_at: now() },
  { id: 'q3000001-0000-0000-0000-000000000009', course_id: COURSE_ID, set_paket: 'A', topik: 'Teknik Wawancara', tipe: 'pilihan_ganda', teks: 'Mengapa Leading Question perlu dihindari?', urutan: 9, created_at: now() },
  { id: 'q3000001-0000-0000-0000-000000000010', course_id: COURSE_ID, set_paket: 'A', topik: 'Teknik 5 Whys', tipe: 'pilihan_ganda', teks: 'Metode 5 Whys digunakan untuk...', urutan: 10, created_at: now() },
  // ════════════ SET A – 5 Essay (Nomor 1–5) ════════════
  { id: 'q3000002-0000-0000-0000-000000000001', course_id: COURSE_ID, set_paket: 'A', topik: 'Konsep User Research', tipe: 'essay', teks: 'Jelaskan pengertian User Research!', urutan: 11, created_at: now() },
  { id: 'q3000002-0000-0000-0000-000000000002', course_id: COURSE_ID, set_paket: 'A', topik: 'Metode Riset', tipe: 'essay', teks: 'Apa perbedaan riset kualitatif dan kuantitatif?', urutan: 12, created_at: now() },
  { id: 'q3000002-0000-0000-0000-000000000003', course_id: COURSE_ID, set_paket: 'A', topik: 'Teknik Wawancara', tipe: 'essay', teks: 'Mengapa wawancara pengguna penting dalam User Research?', urutan: 13, created_at: now() },
  { id: 'q3000002-0000-0000-0000-000000000004', course_id: COURSE_ID, set_paket: 'A', topik: 'Teknik Wawancara', tipe: 'essay', teks: 'Apa yang dimaksud dengan Leading Question?', urutan: 14, created_at: now() },
  { id: 'q3000002-0000-0000-0000-000000000005', course_id: COURSE_ID, set_paket: 'A', topik: 'Teknik 5 Whys', tipe: 'essay', teks: 'Jelaskan fungsi metode 5 Whys!', urutan: 15, created_at: now() },

  // ════════════ SET B – 10 PG (Nomor 11–20) ════════════
  { id: 'q3000003-0000-0000-0000-000000000001', course_id: COURSE_ID, set_paket: 'B', topik: 'Teknik 5 Whys', tipe: 'pilihan_ganda', teks: 'Dalam metode 5 Whys, pertanyaan yang diulang adalah...', urutan: 1, created_at: now() },
  { id: 'q3000003-0000-0000-0000-000000000002', course_id: COURSE_ID, set_paket: 'B', topik: 'Empathy Map', tipe: 'pilihan_ganda', teks: 'Empathy Map digunakan untuk...', urutan: 2, created_at: now() },
  { id: 'q3000003-0000-0000-0000-000000000003', course_id: COURSE_ID, set_paket: 'B', topik: 'Empathy Map', tipe: 'pilihan_ganda', teks: 'Komponen yang menggambarkan apa yang dikatakan pengguna adalah...', urutan: 3, created_at: now() },
  { id: 'q3000003-0000-0000-0000-000000000004', course_id: COURSE_ID, set_paket: 'B', topik: 'Empathy Map', tipe: 'pilihan_ganda', teks: 'Komponen Thinks berisi...', urutan: 4, created_at: now() },
  { id: 'q3000003-0000-0000-0000-000000000005', course_id: COURSE_ID, set_paket: 'B', topik: 'Empathy Map', tipe: 'pilihan_ganda', teks: 'Komponen Feels menggambarkan...', urutan: 5, created_at: now() },
  { id: 'q3000003-0000-0000-0000-000000000006', course_id: COURSE_ID, set_paket: 'B', topik: 'Empathy Map', tipe: 'pilihan_ganda', teks: 'Komponen Does menjelaskan...', urutan: 6, created_at: now() },
  { id: 'q3000003-0000-0000-0000-000000000007', course_id: COURSE_ID, set_paket: 'B', topik: 'Empathy Map', tipe: 'pilihan_ganda', teks: 'Pain dalam Empathy Map berarti...', urutan: 7, created_at: now() },
  { id: 'q3000003-0000-0000-0000-000000000008', course_id: COURSE_ID, set_paket: 'B', topik: 'Empathy Map', tipe: 'pilihan_ganda', teks: 'Gain dalam Empathy Map berarti...', urutan: 8, created_at: now() },
  { id: 'q3000003-0000-0000-0000-000000000009', course_id: COURSE_ID, set_paket: 'B', topik: 'User Persona', tipe: 'pilihan_ganda', teks: 'User Persona adalah...', urutan: 9, created_at: now() },
  { id: 'q3000003-0000-0000-0000-000000000010', course_id: COURSE_ID, set_paket: 'B', topik: 'User Persona', tipe: 'pilihan_ganda', teks: 'User Persona dibuat berdasarkan...', urutan: 10, created_at: now() },
  // ════════════ SET B – 5 Essay (Nomor 6–10) ════════════
  { id: 'q3000004-0000-0000-0000-000000000001', course_id: COURSE_ID, set_paket: 'B', topik: 'Empathy Map', tipe: 'essay', teks: 'Apa tujuan penggunaan Empathy Map?', urutan: 11, created_at: now() },
  { id: 'q3000004-0000-0000-0000-000000000002', course_id: COURSE_ID, set_paket: 'B', topik: 'Empathy Map', tipe: 'essay', teks: 'Jelaskan komponen Says pada Empathy Map!', urutan: 12, created_at: now() },
  { id: 'q3000004-0000-0000-0000-000000000003', course_id: COURSE_ID, set_paket: 'B', topik: 'Empathy Map', tipe: 'essay', teks: 'Jelaskan perbedaan Thinks dan Feels dalam Empathy Map!', urutan: 13, created_at: now() },
  { id: 'q3000004-0000-0000-0000-000000000004', course_id: COURSE_ID, set_paket: 'B', topik: 'Empathy Map', tipe: 'essay', teks: 'Apa yang dimaksud dengan Pain dan Gain?', urutan: 14, created_at: now() },
  { id: 'q3000004-0000-0000-0000-000000000005', course_id: COURSE_ID, set_paket: 'B', topik: 'User Persona', tipe: 'essay', teks: 'Jelaskan pengertian User Persona!', urutan: 15, created_at: now() },

  // ════════════ SET C – 10 PG (Nomor 21–30) ════════════
  { id: 'q3000005-0000-0000-0000-000000000001', course_id: COURSE_ID, set_paket: 'C', topik: 'User Persona', tipe: 'pilihan_ganda', teks: 'Tujuan pembuatan User Persona adalah...', urutan: 1, created_at: now() },
  { id: 'q3000005-0000-0000-0000-000000000002', course_id: COURSE_ID, set_paket: 'C', topik: 'User Persona', tipe: 'pilihan_ganda', teks: 'Informasi yang biasanya terdapat dalam User Persona adalah...', urutan: 2, created_at: now() },
  { id: 'q3000005-0000-0000-0000-000000000003', course_id: COURSE_ID, set_paket: 'C', topik: 'User Journey Map', tipe: 'pilihan_ganda', teks: 'User Journey Map menggambarkan...', urutan: 3, created_at: now() },
  { id: 'q3000005-0000-0000-0000-000000000004', course_id: COURSE_ID, set_paket: 'C', topik: 'User Journey Map', tipe: 'pilihan_ganda', teks: 'Tujuan User Journey Map adalah...', urutan: 4, created_at: now() },
  { id: 'q3000005-0000-0000-0000-000000000005', course_id: COURSE_ID, set_paket: 'C', topik: 'User Journey Map', tipe: 'pilihan_ganda', teks: 'Pain Point pada User Journey Map adalah...', urutan: 5, created_at: now() },
  { id: 'q3000005-0000-0000-0000-000000000006', course_id: COURSE_ID, set_paket: 'C', topik: 'User Journey Map', tipe: 'pilihan_ganda', teks: 'Salah satu keuntungan User Journey Map adalah...', urutan: 6, created_at: now() },
  { id: 'q3000005-0000-0000-0000-000000000007', course_id: COURSE_ID, set_paket: 'C', topik: 'Observasi & Validasi', tipe: 'pilihan_ganda', teks: 'Observasi dalam User Research digunakan untuk...', urutan: 7, created_at: now() },
  { id: 'q3000005-0000-0000-0000-000000000008', course_id: COURSE_ID, set_paket: 'C', topik: 'Observasi & Validasi', tipe: 'pilihan_ganda', teks: 'Keputusan desain yang baik harus berdasarkan...', urutan: 8, created_at: now() },
  { id: 'q3000005-0000-0000-0000-000000000009', course_id: COURSE_ID, set_paket: 'C', topik: 'Teknik Wawancara', tipe: 'pilihan_ganda', teks: 'Jumlah responden yang direkomendasikan dalam praktik wawancara modul adalah...', urutan: 9, created_at: now() },
  { id: 'q3000005-0000-0000-0000-000000000010', course_id: COURSE_ID, set_paket: 'C', topik: 'Output User Research', tipe: 'pilihan_ganda', teks: 'Output utama dari proses User Research pada modul ini adalah...', urutan: 10, created_at: now() },
  // ════════════ SET C – 5 Essay (Nomor 11–15) ════════════
  { id: 'q3000006-0000-0000-0000-000000000001', course_id: COURSE_ID, set_paket: 'C', topik: 'User Persona', tipe: 'essay', teks: 'Mengapa User Persona harus dibuat berdasarkan hasil riset?', urutan: 11, created_at: now() },
  { id: 'q3000006-0000-0000-0000-000000000002', course_id: COURSE_ID, set_paket: 'C', topik: 'User Journey Map', tipe: 'essay', teks: 'Apa yang dimaksud dengan User Journey Map?', urutan: 12, created_at: now() },
  { id: 'q3000006-0000-0000-0000-000000000003', course_id: COURSE_ID, set_paket: 'C', topik: 'User Journey Map', tipe: 'essay', teks: 'Apa manfaat User Journey Map bagi tim produk?', urutan: 13, created_at: now() },
  { id: 'q3000006-0000-0000-0000-000000000004', course_id: COURSE_ID, set_paket: 'C', topik: 'Observasi & Validasi', tipe: 'essay', teks: 'Mengapa observasi penting dalam User Research?', urutan: 14, created_at: now() },
  { id: 'q3000006-0000-0000-0000-000000000005', course_id: COURSE_ID, set_paket: 'C', topik: 'Observasi & Validasi', tipe: 'essay', teks: 'Mengapa keputusan desain harus didasarkan pada data pengguna, bukan asumsi?', urutan: 15, created_at: now() }
];

export const modul3Options = [
  // SET A OPTIONS (Q1–Q10)
  { id: 'o3-A1-1', question_id: 'q3000001-0000-0000-0000-000000000001', teks: 'Membuat tampilan aplikasi', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-A1-2', question_id: 'q3000001-0000-0000-0000-000000000001', teks: 'Memahami pengguna melalui pengumpulan data', poin: 10, umpan_balik: 'Tepat! User Research bertujuan memahami pengguna lewat pengumpulan dan analisis data.', is_correct: true },
  { id: 'o3-A1-3', question_id: 'q3000001-0000-0000-0000-000000000001', teks: 'Menjual produk kepada pengguna', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-A1-4', question_id: 'q3000001-0000-0000-0000-000000000001', teks: 'Membuat kode program', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o3-A2-1', question_id: 'q3000001-0000-0000-0000-000000000002', teks: 'Menambah fitur sebanyak mungkin', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-A2-2', question_id: 'q3000001-0000-0000-0000-000000000002', teks: 'Memahami kebutuhan dan masalah pengguna', poin: 10, umpan_balik: 'Tepat! Riset berfokus menggali kebutuhan dan hambatan nyata pengguna.', is_correct: true },
  { id: 'o3-A2-3', question_id: 'q3000001-0000-0000-0000-000000000002', teks: 'Menentukan harga produk', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-A2-4', question_id: 'q3000001-0000-0000-0000-000000000002', teks: 'Membuat desain yang menarik', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o3-A3-1', question_id: 'q3000001-0000-0000-0000-000000000003', teks: 'Data statistik dan angka', poin: 0, umpan_balik: 'Keliru. Itu karakteristik riset kuantitatif.', is_correct: false },
  { id: 'o3-A3-2', question_id: 'q3000001-0000-0000-0000-000000000003', teks: 'Jumlah pengguna aplikasi', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-A3-3', question_id: 'q3000001-0000-0000-0000-000000000003', teks: 'Alasan, motivasi, dan perilaku pengguna', poin: 10, umpan_balik: 'Tepat! Riset kualitatif menggali alasan mendalam di balik perilaku pengguna.', is_correct: true },
  { id: 'o3-A3-4', question_id: 'q3000001-0000-0000-0000-000000000003', teks: 'Total penjualan', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o3-A4-1', question_id: 'q3000001-0000-0000-0000-000000000004', teks: 'Survei 10.000 responden', poin: 0, umpan_balik: 'Keliru. Survei skala besar termasuk kuantitatif.', is_correct: false },
  { id: 'o3-A4-2', question_id: 'q3000001-0000-0000-0000-000000000004', teks: 'Analisis penjualan', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-A4-3', question_id: 'q3000001-0000-0000-0000-000000000004', teks: 'Wawancara pengguna', poin: 10, umpan_balik: 'Tepat! Wawancara mendalam dan observasi adalah contoh metode kualitatif.', is_correct: true },
  { id: 'o3-A4-4', question_id: 'q3000001-0000-0000-0000-000000000004', teks: 'Perhitungan statistik', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o3-A5-1', question_id: 'q3000001-0000-0000-0000-000000000005', teks: 'Cerita pengguna', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-A5-2', question_id: 'q3000001-0000-0000-0000-000000000005', teks: 'Observasi perilaku', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-A5-3', question_id: 'q3000001-0000-0000-0000-000000000005', teks: 'Data numerik dan statistik', poin: 10, umpan_balik: 'Tepat! Riset kuantitatif mengukur fenomena dalam bentuk angka dan statistik.', is_correct: true },
  { id: 'o3-A5-4', question_id: 'q3000001-0000-0000-0000-000000000005', teks: 'Persona pengguna', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o3-A6-1', question_id: 'q3000001-0000-0000-0000-000000000006', teks: 'Meyakinkan pengguna membeli produk', poin: 0, umpan_balik: 'Keliru. Wawancara riset bukan sesi penjualan.', is_correct: false },
  { id: 'o3-A6-2', question_id: 'q3000001-0000-0000-0000-000000000006', teks: 'Memahami pengalaman dan kebutuhan pengguna', poin: 10, umpan_balik: 'Tepat! Fokus wawancara adalah mendengarkan pengalaman dan kebutuhan nyata responden.', is_correct: true },
  { id: 'o3-A6-3', question_id: 'q3000001-0000-0000-0000-000000000006', teks: 'Menjual ide startup', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-A6-4', question_id: 'q3000001-0000-0000-0000-000000000006', teks: 'Menguji kemampuan pengguna', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o3-A7-1', question_id: 'q3000001-0000-0000-0000-000000000007', teks: 'Pertanyaan terbuka', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-A7-2', question_id: 'q3000001-0000-0000-0000-000000000007', teks: 'Pertanyaan yang mengarahkan jawaban responden', poin: 10, umpan_balik: 'Tepat! Leading question menggiring responden ke jawaban tertentu yang diinginkan pewawancara.', is_correct: true },
  { id: 'o3-A7-3', question_id: 'q3000001-0000-0000-0000-000000000007', teks: 'Pertanyaan netral', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-A7-4', question_id: 'q3000001-0000-0000-0000-000000000007', teks: 'Pertanyaan penutup', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o3-A8-1', question_id: 'q3000001-0000-0000-0000-000000000008', teks: '"Bagaimana pengalaman Anda menggunakan aplikasi ini?"', poin: 0, umpan_balik: 'Keliru. Ini adalah pertanyaan terbuka dan netral.', is_correct: false },
  { id: 'o3-A8-2', question_id: 'q3000001-0000-0000-0000-000000000008', teks: '"Apa kesulitan yang Anda alami?"', poin: 0, umpan_balik: 'Keliru. Ini pertanyaan netral yang menggali masalah.', is_correct: false },
  { id: 'o3-A8-3', question_id: 'q3000001-0000-0000-0000-000000000008', teks: '"Aplikasi ini sangat mudah digunakan, bukan?"', poin: 10, umpan_balik: 'Tepat! Frasa "sangat mudah digunakan, bukan?" menggiring responden untuk menjawab setuju.', is_correct: true },
  { id: 'o3-A8-4', question_id: 'q3000001-0000-0000-0000-000000000008', teks: '"Bisakah Anda menjelaskan prosesnya?"', poin: 0, umpan_balik: 'Keliru. Ini pertanyaan eksploratif yang baik.', is_correct: false },

  { id: 'o3-A9-1', question_id: 'q3000001-0000-0000-0000-000000000009', teks: 'Membuat wawancara lebih lama', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-A9-2', question_id: 'q3000001-0000-0000-0000-000000000009', teks: 'Menimbulkan bias pada jawaban pengguna', poin: 10, umpan_balik: 'Tepat! Leading question merusak objektivitas dan memicu bias data riset.', is_correct: true },
  { id: 'o3-A9-3', question_id: 'q3000001-0000-0000-0000-000000000009', teks: 'Membutuhkan biaya lebih besar', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-A9-4', question_id: 'q3000001-0000-0000-0000-000000000009', teks: 'Mengurangi jumlah responden', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o3-A10-1', question_id: 'q3000001-0000-0000-0000-000000000010', teks: 'Mengukur kepuasan pengguna', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-A10-2', question_id: 'q3000001-0000-0000-0000-000000000010', teks: 'Mencari akar penyebab masalah', poin: 10, umpan_balik: 'Tepat! 5 Whys menggali hingga ke root cause masalah.', is_correct: true },
  { id: 'o3-A10-3', question_id: 'q3000001-0000-0000-0000-000000000010', teks: 'Menghitung jumlah pengguna', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-A10-4', question_id: 'q3000001-0000-0000-0000-000000000010', teks: 'Membuat wireframe', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // SET B OPTIONS (Q11–Q20)
  { id: 'o3-B1-1', question_id: 'q3000003-0000-0000-0000-000000000001', teks: 'Siapa?', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-B1-2', question_id: 'q3000003-0000-0000-0000-000000000001', teks: 'Kapan?', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-B1-3', question_id: 'q3000003-0000-0000-0000-000000000001', teks: 'Mengapa?', poin: 10, umpan_balik: 'Tepat! Pertanyaan "Mengapa?" diulang secara berjenjang hingga ditemukan akar masalah.', is_correct: true },
  { id: 'o3-B1-4', question_id: 'q3000003-0000-0000-0000-000000000001', teks: 'Di mana?', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o3-B2-1', question_id: 'q3000003-0000-0000-0000-000000000002', teks: 'Menghitung keuntungan bisnis', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-B2-2', question_id: 'q3000003-0000-0000-0000-000000000002', teks: 'Memahami pengguna secara mendalam', poin: 10, umpan_balik: 'Tepat! Empathy Map memetakan cara pandang, emosi, dan perilaku pengguna.', is_correct: true },
  { id: 'o3-B2-3', question_id: 'q3000003-0000-0000-0000-000000000002', teks: 'Menentukan harga produk', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-B2-4', question_id: 'q3000003-0000-0000-0000-000000000002', teks: 'Mendesain logo', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o3-B3-1', question_id: 'q3000003-0000-0000-0000-000000000003', teks: 'Thinks', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-B3-2', question_id: 'q3000003-0000-0000-0000-000000000003', teks: 'Feels', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-B3-3', question_id: 'q3000003-0000-0000-0000-000000000003', teks: 'Says', poin: 10, umpan_balik: 'Tepat! Says berisi kutipan langsung yang diucapkan pengguna.', is_correct: true },
  { id: 'o3-B3-4', question_id: 'q3000003-0000-0000-0000-000000000003', teks: 'Does', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o3-B4-1', question_id: 'q3000003-0000-0000-0000-000000000004', teks: 'Aktivitas pengguna', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-B4-2', question_id: 'q3000003-0000-0000-0000-000000000004', teks: 'Pikiran pengguna', poin: 10, umpan_balik: 'Tepat! Thinks mencerminkan apa yang ada di pikiran pengguna.', is_correct: true },
  { id: 'o3-B4-3', question_id: 'q3000003-0000-0000-0000-000000000004', teks: 'Keluhan pengguna', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-B4-4', question_id: 'q3000003-0000-0000-0000-000000000004', teks: 'Identitas pengguna', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o3-B5-1', question_id: 'q3000003-0000-0000-0000-000000000005', teks: 'Emosi yang dirasakan pengguna', poin: 10, umpan_balik: 'Tepat! Feels menggambarkan kondisi emosional pengguna.', is_correct: true },
  { id: 'o3-B5-2', question_id: 'q3000003-0000-0000-0000-000000000005', teks: 'Aktivitas yang dilakukan pengguna', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-B5-3', question_id: 'q3000003-0000-0000-0000-000000000005', teks: 'Pekerjaan pengguna', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-B5-4', question_id: 'q3000003-0000-0000-0000-000000000005', teks: 'Data demografi pengguna', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o3-B6-1', question_id: 'q3000003-0000-0000-0000-000000000006', teks: 'Apa yang dipikirkan pengguna', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-B6-2', question_id: 'q3000003-0000-0000-0000-000000000006', teks: 'Apa yang dirasakan pengguna', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-B6-3', question_id: 'q3000003-0000-0000-0000-000000000006', teks: 'Apa yang dilakukan pengguna', poin: 10, umpan_balik: 'Tepat! Does mencatat tindakan nyata yang dilakukan pengguna.', is_correct: true },
  { id: 'o3-B6-4', question_id: 'q3000003-0000-0000-0000-000000000006', teks: 'Apa yang diinginkan pengguna', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o3-B7-1', question_id: 'q3000003-0000-0000-0000-000000000007', teks: 'Tujuan pengguna', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-B7-2', question_id: 'q3000003-0000-0000-0000-000000000007', teks: 'Keuntungan pengguna', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-B7-3', question_id: 'q3000003-0000-0000-0000-000000000007', teks: 'Hambatan atau masalah yang dialami pengguna', poin: 10, umpan_balik: 'Tepat! Pain menggambarkan rasa frustrasi dan kesulitan pengguna.', is_correct: true },
  { id: 'o3-B7-4', question_id: 'q3000003-0000-0000-0000-000000000007', teks: 'Aktivitas pengguna', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o3-B8-1', question_id: 'q3000003-0000-0000-0000-000000000008', teks: 'Masalah pengguna', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-B8-2', question_id: 'q3000003-0000-0000-0000-000000000008', teks: 'Harapan atau manfaat yang diinginkan pengguna', poin: 10, umpan_balik: 'Tepat! Gain adalah nilai positif atau hasil ideal yang diharapkan pengguna.', is_correct: true },
  { id: 'o3-B8-3', question_id: 'q3000003-0000-0000-0000-000000000008', teks: 'Pendapatan perusahaan', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-B8-4', question_id: 'q3000003-0000-0000-0000-000000000008', teks: 'Jumlah pelanggan', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o3-B9-1', question_id: 'q3000003-0000-0000-0000-000000000009', teks: 'Profil fiktif yang mewakili kelompok pengguna berdasarkan riset', poin: 10, umpan_balik: 'Tepat! User Persona adalah arketipe fiktif berbasis data riset.', is_correct: true },
  { id: 'o3-B9-2', question_id: 'q3000003-0000-0000-0000-000000000009', teks: 'Data penjualan perusahaan', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-B9-3', question_id: 'q3000003-0000-0000-0000-000000000009', teks: 'Struktur organisasi startup', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-B9-4', question_id: 'q3000003-0000-0000-0000-000000000009', teks: 'Diagram alur aplikasi', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o3-B10-1', question_id: 'q3000003-0000-0000-0000-000000000010', teks: 'Asumsi desainer', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-B10-2', question_id: 'q3000003-0000-0000-0000-000000000010', teks: 'Pendapat investor', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-B10-3', question_id: 'q3000003-0000-0000-0000-000000000010', teks: 'Hasil riset pengguna', poin: 10, umpan_balik: 'Tepat! Persona harus disusun dari data empiris hasil riset.', is_correct: true },
  { id: 'o3-B10-4', question_id: 'q3000003-0000-0000-0000-000000000010', teks: 'Tren media sosial', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // SET C OPTIONS (Q21–Q30)
  { id: 'o3-C1-1', question_id: 'q3000005-0000-0000-0000-000000000001', teks: 'Menentukan harga jual', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-C1-2', question_id: 'q3000005-0000-0000-0000-000000000001', teks: 'Membantu tim memahami target pengguna', poin: 10, umpan_balik: 'Tepat! Persona menyelaraskan pemahaman seluruh tim mengenai siapa yang dilayani.', is_correct: true },
  { id: 'o3-C1-3', question_id: 'q3000005-0000-0000-0000-000000000001', teks: 'Menentukan modal usaha', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-C1-4', question_id: 'q3000005-0000-0000-0000-000000000001', teks: 'Membuat laporan keuangan', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o3-C2-1', question_id: 'q3000005-0000-0000-0000-000000000002', teks: 'Harga saham perusahaan', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-C2-2', question_id: 'q3000005-0000-0000-0000-000000000002', teks: 'Karakteristik, tujuan, dan kebutuhan pengguna', poin: 10, umpan_balik: 'Tepat! Persona memuat profil demografis/perilaku, goals, dan pain points pengguna.', is_correct: true },
  { id: 'o3-C2-3', question_id: 'q3000005-0000-0000-0000-000000000002', teks: 'Kode program aplikasi', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-C2-4', question_id: 'q3000005-0000-0000-0000-000000000002', teks: 'Struktur database', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o3-C3-1', question_id: 'q3000005-0000-0000-0000-000000000003', teks: 'Struktur organisasi perusahaan', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-C3-2', question_id: 'q3000005-0000-0000-0000-000000000003', teks: 'Perjalanan pengguna saat berinteraksi dengan produk', poin: 10, umpan_balik: 'Tepat! User Journey Map memvisualisasikan tahapan interaksi pengguna dari awal hingga akhir.', is_correct: true },
  { id: 'o3-C3-3', question_id: 'q3000005-0000-0000-0000-000000000003', teks: 'Alur keuangan startup', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-C3-4', question_id: 'q3000005-0000-0000-0000-000000000003', teks: 'Strategi pemasaran', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o3-C4-1', question_id: 'q3000005-0000-0000-0000-000000000004', teks: 'Mengetahui pengalaman pengguna dari awal hingga akhir', poin: 10, umpan_balik: 'Tepat! Journey Map memetakan titik sentuh dan emosi pengguna secara menyeluruh.', is_correct: true },
  { id: 'o3-C4-2', question_id: 'q3000005-0000-0000-0000-000000000004', teks: 'Menghitung keuntungan bisnis', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-C4-3', question_id: 'q3000005-0000-0000-0000-000000000004', teks: 'Membuat logo perusahaan', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-C4-4', question_id: 'q3000005-0000-0000-0000-000000000004', teks: 'Menentukan harga produk', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o3-C5-1', question_id: 'q3000005-0000-0000-0000-000000000005', teks: 'Momen ketika pengguna senang', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-C5-2', question_id: 'q3000005-0000-0000-0000-000000000005', teks: 'Hambatan atau masalah yang dialami pengguna', poin: 10, umpan_balik: 'Tepat! Pain point menandai titik friksi yang menghambat pengalaman pengguna.', is_correct: true },
  { id: 'o3-C5-3', question_id: 'q3000005-0000-0000-0000-000000000005', teks: 'Target bisnis perusahaan', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-C5-4', question_id: 'q3000005-0000-0000-0000-000000000005', teks: 'Jumlah pengguna aktif', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o3-C6-1', question_id: 'q3000005-0000-0000-0000-000000000006', teks: 'Membantu menemukan peluang perbaikan produk', poin: 10, umpan_balik: 'Tepat! Dari pain point di tiap tahapan, tim dapat merancang solusi perbaikan.', is_correct: true },
  { id: 'o3-C6-2', question_id: 'q3000005-0000-0000-0000-000000000006', teks: 'Menurunkan biaya server', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-C6-3', question_id: 'q3000005-0000-0000-0000-000000000006', teks: 'Mengurangi jumlah pengguna', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-C6-4', question_id: 'q3000005-0000-0000-0000-000000000006', teks: 'Menggantikan User Persona', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o3-C7-1', question_id: 'q3000005-0000-0000-0000-000000000007', teks: 'Melihat perilaku pengguna secara langsung', poin: 10, umpan_balik: 'Tepat! Observasi mengungkap apa yang benar-benar dilakukan pengguna, bukan hanya yang diucapkan.', is_correct: true },
  { id: 'o3-C7-2', question_id: 'q3000005-0000-0000-0000-000000000007', teks: 'Menjual produk kepada pengguna', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-C7-3', question_id: 'q3000005-0000-0000-0000-000000000007', teks: 'Membuat iklan', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-C7-4', question_id: 'q3000005-0000-0000-0000-000000000007', teks: 'Menentukan harga', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o3-C8-1', question_id: 'q3000005-0000-0000-0000-000000000008', teks: 'Tebakan desainer', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-C8-2', question_id: 'q3000005-0000-0000-0000-000000000008', teks: 'Pendapat teman', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-C8-3', question_id: 'q3000005-0000-0000-0000-000000000008', teks: 'Data dan hasil riset pengguna', poin: 10, umpan_balik: 'Tepat! Keputusan berbasis data mengurangi risiko produk gagal di pasar.', is_correct: true },
  { id: 'o3-C8-4', question_id: 'q3000005-0000-0000-0000-000000000008', teks: 'Tren sesaat', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o3-C9-1', question_id: 'q3000005-0000-0000-0000-000000000009', teks: '1 orang', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-C9-2', question_id: 'q3000005-0000-0000-0000-000000000009', teks: '2 orang', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-C9-3', question_id: 'q3000005-0000-0000-0000-000000000009', teks: '3-5 orang', poin: 10, umpan_balik: 'Tepat! Wawancara terhadap 3-5 responden relevan sudah cukup untuk menangkap pola masalah utama.', is_correct: true },
  { id: 'o3-C9-4', question_id: 'q3000005-0000-0000-0000-000000000009', teks: '20 orang', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  { id: 'o3-C10-1', question_id: 'q3000005-0000-0000-0000-000000000010', teks: 'User Persona dan User Journey Map', poin: 10, umpan_balik: 'Tepat! Kedua artefak tersebut menjadi panduan utama tahap perancangan berikutnya.', is_correct: true },
  { id: 'o3-C10-2', question_id: 'q3000005-0000-0000-0000-000000000010', teks: 'Source Code aplikasi', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-C10-3', question_id: 'q3000005-0000-0000-0000-000000000010', teks: 'Strategi investasi', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o3-C10-4', question_id: 'q3000005-0000-0000-0000-000000000010', teks: 'Laporan keuangan', poin: 0, umpan_balik: 'Keliru.', is_correct: false }
];

export const modul3Rubrics = [
  // SET A RUBRICS (Essay 1–5)
  { id: 'er-0000003-0000-0000-0000-000000000001', question_id: 'q3000002-0000-0000-0000-000000000001', kunci_jawaban: 'User Research adalah proses mengumpulkan dan menganalisis informasi tentang pengguna untuk memahami kebutuhan, perilaku, motivasi, serta masalah yang mereka alami sehingga keputusan desain dapat dibuat berdasarkan data, bukan asumsi.', kata_kunci: ['user research', 'memahami pengguna', 'kebutuhan', 'perilaku', 'data', 'bukan asumsi'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },
  { id: 'er-0000003-0000-0000-0000-000000000002', question_id: 'q3000002-0000-0000-0000-000000000002', kunci_jawaban: 'Riset kualitatif berfokus pada pemahaman mendalam tentang alasan, motivasi, dan perilaku pengguna melalui wawancara atau observasi, sedangkan riset kuantitatif berfokus pada data numerik, statistik, dan pengukuran dalam jumlah besar.', kata_kunci: ['kualitatif', 'alasan', 'motivasi', 'kuantitatif', 'angka', 'statistik'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },
  { id: 'er-0000003-0000-0000-0000-000000000003', question_id: 'q3000002-0000-0000-0000-000000000003', kunci_jawaban: 'Wawancara memungkinkan peneliti memahami kebutuhan, pengalaman, motivasi, dan masalah pengguna secara langsung sehingga menghasilkan insight yang mendalam untuk pengembangan solusi.', kata_kunci: ['wawancara', 'kebutuhan pengguna', 'motivasi', 'masalah', 'insight'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },
  { id: 'er-0000003-0000-0000-0000-000000000004', question_id: 'q3000002-0000-0000-0000-000000000004', kunci_jawaban: 'Leading Question adalah pertanyaan yang secara tidak langsung mengarahkan responden untuk memberikan jawaban tertentu sehingga dapat menimbulkan bias dan mengurangi objektivitas data.', kata_kunci: ['leading question', 'mengarahkan jawaban', 'bias', 'tidak objektif'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },
  { id: 'er-0000003-0000-0000-0000-000000000005', question_id: 'q3000002-0000-0000-0000-000000000005', kunci_jawaban: '5 Whys digunakan untuk menemukan akar penyebab suatu masalah dengan mengajukan pertanyaan "mengapa" secara berulang hingga penyebab mendasarnya ditemukan.', kata_kunci: ['5 whys', 'akar masalah', 'mengapa berulang', 'root cause'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },

  // SET B RUBRICS (Essay 6–10)
  { id: 'er-0000003-0000-0000-0000-000000000006', question_id: 'q3000004-0000-0000-0000-000000000001', kunci_jawaban: 'Empathy Map digunakan untuk memahami perspektif pengguna secara lebih mendalam melalui apa yang mereka katakan, pikirkan, rasakan, lakukan, serta pain dan gain yang mereka miliki.', kata_kunci: ['empathy map', 'memahami pengguna', 'says', 'thinks', 'feels', 'does'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },
  { id: 'er-0000003-0000-0000-0000-000000000007', question_id: 'q3000004-0000-0000-0000-000000000002', kunci_jawaban: 'Says berisi hal-hal yang diucapkan langsung oleh pengguna selama wawancara atau interaksi terkait pengalaman dan kebutuhan mereka.', kata_kunci: ['ucapan', 'pernyataan pengguna', 'hasil wawancara'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },
  { id: 'er-0000003-0000-0000-0000-000000000008', question_id: 'q3000004-0000-0000-0000-000000000003', kunci_jawaban: 'Thinks menggambarkan apa yang dipikirkan pengguna, sedangkan Feels menggambarkan emosi atau perasaan yang dirasakan pengguna terhadap suatu pengalaman atau situasi.', kata_kunci: ['thinks', 'pikiran', 'feels', 'emosi', 'perasaan'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },
  { id: 'er-0000003-0000-0000-0000-000000000009', question_id: 'q3000004-0000-0000-0000-000000000004', kunci_jawaban: 'Pain adalah hambatan, masalah, atau frustrasi yang dialami pengguna, sedangkan Gain adalah manfaat, harapan, atau hasil positif yang ingin dicapai pengguna.', kata_kunci: ['pain', 'masalah', 'hambatan', 'gain', 'manfaat', 'harapan'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },
  { id: 'er-0000003-0000-0000-0000-000000000010', question_id: 'q3000004-0000-0000-0000-000000000005', kunci_jawaban: 'User Persona adalah representasi fiktif dari kelompok pengguna berdasarkan hasil riset yang menggambarkan karakteristik, kebutuhan, tujuan, dan perilaku pengguna.', kata_kunci: ['user persona', 'representasi pengguna', 'fiktif', 'berdasarkan riset', 'karakteristik'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },

  // SET C RUBRICS (Essay 11–15)
  { id: 'er-0000003-0000-0000-0000-000000000011', question_id: 'q3000006-0000-0000-0000-000000000001', kunci_jawaban: 'Karena persona yang dibuat berdasarkan riset mencerminkan kondisi pengguna yang sebenarnya sehingga keputusan desain lebih akurat dan tidak hanya berdasarkan asumsi.', kata_kunci: ['hasil riset', 'akurat', 'bukan asumsi', 'pengguna nyata'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },
  { id: 'er-0000003-0000-0000-0000-000000000012', question_id: 'q3000006-0000-0000-0000-000000000002', kunci_jawaban: 'User Journey Map adalah visualisasi perjalanan pengguna ketika berinteraksi dengan produk atau layanan yang menunjukkan langkah, aktivitas, emosi, dan pain point yang dialami pengguna.', kata_kunci: ['user journey map', 'perjalanan pengguna', 'aktivitas', 'emosi', 'pain point'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },
  { id: 'er-0000003-0000-0000-0000-000000000013', question_id: 'q3000006-0000-0000-0000-000000000003', kunci_jawaban: 'User Journey Map membantu tim memahami pengalaman pengguna secara menyeluruh, menemukan pain point, serta mengidentifikasi peluang perbaikan dan inovasi.', kata_kunci: ['pengalaman pengguna', 'pain point', 'peluang perbaikan', 'inovasi'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },
  { id: 'er-0000003-0000-0000-0000-000000000014', question_id: 'q3000006-0000-0000-0000-000000000004', kunci_jawaban: 'Karena observasi memungkinkan peneliti melihat perilaku pengguna secara langsung sehingga dapat menemukan masalah yang mungkin tidak diungkapkan saat wawancara.', kata_kunci: ['observasi', 'perilaku nyata', 'melihat langsung', 'menemukan masalah'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() },
  { id: 'er-0000003-0000-0000-0000-000000000015', question_id: 'q3000006-0000-0000-0000-000000000005', kunci_jawaban: 'Karena data pengguna memberikan gambaran kebutuhan dan masalah yang nyata sehingga solusi yang dibuat lebih relevan, efektif, dan memiliki peluang keberhasilan yang lebih tinggi dibandingkan keputusan yang hanya berdasarkan asumsi.', kata_kunci: ['data pengguna', 'kebutuhan nyata', 'relevan', 'efektif', 'bukan asumsi'], rubrik_skor: { '10': '>=80% kata kunci', '9': 'Kurang 1 unsur', '8': '60% benar', '7': 'Ide umum', '0': 'Salah' }, created_at: now() }
];