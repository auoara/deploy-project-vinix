/**
 * Bank Soal & Rubrik Penilaian – Modul 8: Integrasi Data Dinamis
 * Total: 45 Soal (30 Pilihan Ganda + 15 Essay Studi Kasus) dibagi ke Set A, B, C.
 */

const COURSE_ID = 'c0000008-0000-0000-0000-000000000008';
const now = () => new Date().toISOString();

// ─── 1. QUESTIONS (30 PG + 15 Essay) ──────────────────────────────────────────
export const modul8Questions = [
  // ════════════ SET A – 10 PG (Nomor 1–10) ════════════
  {
    id: 'q8000001-0000-0000-0000-000000000001',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'Integrasi Data Dinamis',
    tipe: 'pilihan_ganda',
    teks: 'Tujuan utama integrasi data dinamis adalah...',
    urutan: 1,
    created_at: now()
  },
  {
    id: 'q8000001-0000-0000-0000-000000000002',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'Operasi CRUD (Read & Write)',
    tipe: 'pilihan_ganda',
    teks: 'Read dalam aplikasi berarti...',
    urutan: 2,
    created_at: now()
  },
  {
    id: 'q8000001-0000-0000-0000-000000000003',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'Operasi CRUD (Read & Write)',
    tipe: 'pilihan_ganda',
    teks: 'Write dalam aplikasi berarti...',
    urutan: 3,
    created_at: now()
  },
  {
    id: 'q8000001-0000-0000-0000-000000000004',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'Backend as a Service (Supabase)',
    tipe: 'pilihan_ganda',
    teks: 'Supabase menggunakan database...',
    urutan: 4,
    created_at: now()
  },
  {
    id: 'q8000001-0000-0000-0000-000000000005',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'Backend as a Service (BaaS)',
    tipe: 'pilihan_ganda',
    teks: 'BaaS merupakan singkatan dari...',
    urutan: 5,
    created_at: now()
  },
  {
    id: 'q8000001-0000-0000-0000-000000000006',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'UI States',
    tipe: 'pilihan_ganda',
    teks: 'State awal sebelum proses berjalan disebut...',
    urutan: 6,
    created_at: now()
  },
  {
    id: 'q8000001-0000-0000-0000-000000000007',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'UI States',
    tipe: 'pilihan_ganda',
    teks: 'Loading State menunjukkan bahwa...',
    urutan: 7,
    created_at: now()
  },
  {
    id: 'q8000001-0000-0000-0000-000000000008',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'UI States',
    tipe: 'pilihan_ganda',
    teks: 'Success State muncul ketika...',
    urutan: 8,
    created_at: now()
  },
  {
    id: 'q8000001-0000-0000-0000-000000000009',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'UI States',
    tipe: 'pilihan_ganda',
    teks: 'Error State digunakan ketika...',
    urutan: 9,
    created_at: now()
  },
  {
    id: 'q8000001-0000-0000-0000-000000000010',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'UI States',
    tipe: 'pilihan_ganda',
    teks: 'Empty State digunakan ketika...',
    urutan: 10,
    created_at: now()
  },

  // ════════════ SET A – 5 Essay (Nomor 1–5) ════════════
  {
    id: 'q8000002-0000-0000-0000-000000000001',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'Integrasi Data Dinamis',
    tipe: 'essay',
    teks: 'Apa yang dimaksud dengan integrasi data dinamis pada aplikasi web?',
    urutan: 11,
    created_at: now()
  },
  {
    id: 'q8000002-0000-0000-0000-000000000002',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'Operasi CRUD (Read & Write)',
    tipe: 'essay',
    teks: 'Jelaskan perbedaan Read dan Write dalam aplikasi!',
    urutan: 12,
    created_at: now()
  },
  {
    id: 'q8000002-0000-0000-0000-000000000003',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'Backend as a Service (BaaS)',
    tipe: 'essay',
    teks: 'Apa yang dimaksud dengan Backend as a Service (BaaS)?',
    urutan: 13,
    created_at: now()
  },
  {
    id: 'q8000002-0000-0000-0000-000000000004',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'Backend as a Service (Supabase)',
    tipe: 'essay',
    teks: 'Mengapa Supabase disebut Backend as a Service?',
    urutan: 14,
    created_at: now()
  },
  {
    id: 'q8000002-0000-0000-0000-000000000005',
    course_id: COURSE_ID,
    set_paket: 'A',
    topik: 'UI States',
    tipe: 'essay',
    teks: 'Jelaskan fungsi UI State dalam aplikasi!',
    urutan: 15,
    created_at: now()
  },

  // ════════════ SET B – 10 PG (Nomor 11–20) ════════════
  {
    id: 'q8000003-0000-0000-0000-000000000001',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Optimasi Request (Debounce)',
    tipe: 'pilihan_ganda',
    teks: 'Fungsi utama Debounce adalah...',
    urutan: 1,
    created_at: now()
  },
  {
    id: 'q8000003-0000-0000-0000-000000000002',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Optimasi Request (Debounce)',
    tipe: 'pilihan_ganda',
    teks: 'Debounce paling sering digunakan pada fitur...',
    urutan: 2,
    created_at: now()
  },
  {
    id: 'q8000003-0000-0000-0000-000000000003',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Optimasi Request (AbortController)',
    tipe: 'pilihan_ganda',
    teks: 'AbortController digunakan untuk...',
    urutan: 3,
    created_at: now()
  },
  {
    id: 'q8000003-0000-0000-0000-000000000004',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Optimasi Request (AbortController)',
    tipe: 'pilihan_ganda',
    teks: 'AbortController membantu mencegah...',
    urutan: 4,
    created_at: now()
  },
  {
    id: 'q8000003-0000-0000-0000-000000000005',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Dasar SQL & PostgreSQL',
    tipe: 'pilihan_ganda',
    teks: 'Perintah SQL untuk membaca data adalah...',
    urutan: 5,
    created_at: now()
  },
  {
    id: 'q8000003-0000-0000-0000-000000000006',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Dasar SQL & PostgreSQL',
    tipe: 'pilihan_ganda',
    teks: 'Perintah SQL untuk menambahkan data adalah...',
    urutan: 6,
    created_at: now()
  },
  {
    id: 'q8000003-0000-0000-0000-000000000007',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Keamanan Data (RLS)',
    tipe: 'pilihan_ganda',
    teks: 'RLS merupakan singkatan dari...',
    urutan: 7,
    created_at: now()
  },
  {
    id: 'q8000003-0000-0000-0000-000000000008',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Keamanan Data (RLS)',
    tipe: 'pilihan_ganda',
    teks: 'Tujuan utama RLS adalah...',
    urutan: 8,
    created_at: now()
  },
  {
    id: 'q8000003-0000-0000-0000-000000000009',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Validasi & Sanitasi Input',
    tipe: 'pilihan_ganda',
    teks: 'Validasi data dilakukan untuk...',
    urutan: 9,
    created_at: now()
  },
  {
    id: 'q8000003-0000-0000-0000-000000000010',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Validasi & Sanitasi Input',
    tipe: 'pilihan_ganda',
    teks: 'Sanitasi data bertujuan untuk...',
    urutan: 10,
    created_at: now()
  },

  // ════════════ SET B – 5 Essay (Nomor 6–10) ════════════
  {
    id: 'q8000004-0000-0000-0000-000000000001',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'UI States',
    tipe: 'essay',
    teks: 'Apa yang dimaksud dengan Loading State?',
    urutan: 11,
    created_at: now()
  },
  {
    id: 'q8000004-0000-0000-0000-000000000002',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'UI States',
    tipe: 'essay',
    teks: 'Mengapa Empty State penting dalam desain aplikasi?',
    urutan: 12,
    created_at: now()
  },
  {
    id: 'q8000004-0000-0000-0000-000000000003',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Optimasi Request (Debounce)',
    tipe: 'essay',
    teks: 'Jelaskan fungsi Debounce pada fitur pencarian!',
    urutan: 13,
    created_at: now()
  },
  {
    id: 'q8000004-0000-0000-0000-000000000004',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Optimasi Request (AbortController)',
    tipe: 'essay',
    teks: 'Apa fungsi AbortController?',
    urutan: 14,
    created_at: now()
  },
  {
    id: 'q8000004-0000-0000-0000-000000000005',
    course_id: COURSE_ID,
    set_paket: 'B',
    topik: 'Keamanan Data (RLS)',
    tipe: 'essay',
    teks: 'Jelaskan apa yang dimaksud dengan Row Level Security (RLS)!',
    urutan: 15,
    created_at: now()
  },

  // ════════════ SET C – 10 PG (Nomor 21–30) ════════════
  {
    id: 'q8000005-0000-0000-0000-000000000001',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'Keamanan XSS & DOMPurify',
    tipe: 'pilihan_ganda',
    teks: 'DOMPurify digunakan untuk...',
    urutan: 1,
    created_at: now()
  },
  {
    id: 'q8000005-0000-0000-0000-000000000002',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'Keamanan XSS & DOMPurify',
    tipe: 'pilihan_ganda',
    teks: 'DOMPurify membantu mencegah serangan...',
    urutan: 2,
    created_at: now()
  },
  {
    id: 'q8000005-0000-0000-0000-000000000003',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'Keamanan XSS & DOMPurify',
    tipe: 'pilihan_ganda',
    teks: 'Metode yang lebih aman untuk menampilkan teks pengguna adalah...',
    urutan: 3,
    created_at: now()
  },
  {
    id: 'q8000005-0000-0000-0000-000000000004',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'UX Umpan Balik (Skeleton & Toast)',
    tipe: 'pilihan_ganda',
    teks: 'Skeleton Loading berfungsi sebagai...',
    urutan: 4,
    created_at: now()
  },
  {
    id: 'q8000005-0000-0000-0000-000000000005',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'UX Umpan Balik (Skeleton & Toast)',
    tipe: 'pilihan_ganda',
    teks: 'Toast Notification digunakan untuk...',
    urutan: 5,
    created_at: now()
  },
  {
    id: 'q8000005-0000-0000-0000-000000000006',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'Dokumentasi & Skema Proyek',
    tipe: 'pilihan_ganda',
    teks: 'README digunakan untuk...',
    urutan: 6,
    created_at: now()
  },
  {
    id: 'q8000005-0000-0000-0000-000000000007',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'Dokumentasi & Skema Proyek',
    tipe: 'pilihan_ganda',
    teks: 'schema.sql berisi...',
    urutan: 7,
    created_at: now()
  },
  {
    id: 'q8000005-0000-0000-0000-000000000008',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'Penyimpanan & Pertukaran Data',
    tipe: 'pilihan_ganda',
    teks: 'localStorage digunakan untuk...',
    urutan: 8,
    created_at: now()
  },
  {
    id: 'q8000005-0000-0000-0000-000000000009',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'Penyimpanan & Pertukaran Data',
    tipe: 'pilihan_ganda',
    teks: 'JSON sering digunakan sebagai...',
    urutan: 9,
    created_at: now()
  },
  {
    id: 'q8000005-0000-0000-0000-000000000010',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'Integrasi Data Dinamis',
    tipe: 'pilihan_ganda',
    teks: 'Output akhir Modul 8 adalah...',
    urutan: 10,
    created_at: now()
  },

  // ════════════ SET C – 5 Essay (Nomor 11–15) ════════════
  {
    id: 'q8000006-0000-0000-0000-000000000001',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'Validasi & Sanitasi Input',
    tipe: 'essay',
    teks: 'Mengapa validasi input penting?',
    urutan: 11,
    created_at: now()
  },
  {
    id: 'q8000006-0000-0000-0000-000000000002',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'Validasi & Sanitasi Input',
    tipe: 'essay',
    teks: 'Apa perbedaan validasi dan sanitasi?',
    urutan: 12,
    created_at: now()
  },
  {
    id: 'q8000006-0000-0000-0000-000000000003',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'Keamanan XSS & DOMPurify',
    tipe: 'essay',
    teks: 'Bagaimana DOMPurify membantu keamanan aplikasi?',
    urutan: 13,
    created_at: now()
  },
  {
    id: 'q8000006-0000-0000-0000-000000000004',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'UX Umpan Balik (Skeleton & Toast)',
    tipe: 'essay',
    teks: 'Jelaskan fungsi Skeleton Loading!',
    urutan: 14,
    created_at: now()
  },
  {
    id: 'q8000006-0000-0000-0000-000000000005',
    course_id: COURSE_ID,
    set_paket: 'C',
    topik: 'Dokumentasi & Skema Proyek',
    tipe: 'essay',
    teks: 'Mengapa README dan schema.sql menjadi deliverable penting pada Modul 8?',
    urutan: 15,
    created_at: now()
  }
];

// ─── 2. OPTIONS (120 Opsi untuk 30 Soal PG) ───────────────────────────────────
export const modul8Options = [
  // ─── SET A OPTIONS ───
  // Q1-A (Jawaban: B)
  { id: 'o8-A1-1', question_id: 'q8000001-0000-0000-0000-000000000001', teks: 'Membuat website statis', poin: 0, umpan_balik: 'Keliru. Website statis hanya menampilkan konten tetap tanpa pembaruan dari sumber data eksternal.', is_correct: false },
  { id: 'o8-A1-2', question_id: 'q8000001-0000-0000-0000-000000000001', teks: 'Menghubungkan aplikasi dengan data yang terus berubah', poin: 10, umpan_balik: 'Tepat! Integrasi data dinamis menghubungkan antarmuka aplikasi dengan database/API sehingga data dapat berubah secara dinamis.', is_correct: true },
  { id: 'o8-A1-3', question_id: 'q8000001-0000-0000-0000-000000000001', teks: 'Menghapus database', poin: 0, umpan_balik: 'Keliru. Integrasi data justru memanfaatkan database sebagai sumber data utama.', is_correct: false },
  { id: 'o8-A1-4', question_id: 'q8000001-0000-0000-0000-000000000001', teks: 'Mengurangi fitur', poin: 0, umpan_balik: 'Keliru. Integrasi data memperkaya kemampuan interaksi aplikasi.', is_correct: false },

  // Q2-A (Jawaban: A)
  { id: 'o8-A2-1', question_id: 'q8000001-0000-0000-0000-000000000002', teks: 'Mengambil data dari database', poin: 10, umpan_balik: 'Tepat! Operasi Read (fetching/SELECT) bertujuan mengambil data dari database untuk ditampilkan di aplikasi.', is_correct: true },
  { id: 'o8-A2-2', question_id: 'q8000001-0000-0000-0000-000000000002', teks: 'Menghapus data', poin: 0, umpan_balik: 'Keliru. Menghapus data merupakan operasi Delete.', is_correct: false },
  { id: 'o8-A2-3', question_id: 'q8000001-0000-0000-0000-000000000002', teks: 'Menyimpan data', poin: 0, umpan_balik: 'Keliru. Menyimpan data baru merupakan operasi Write (Create/Insert).', is_correct: false },
  { id: 'o8-A2-4', question_id: 'q8000001-0000-0000-0000-000000000002', teks: 'Mengamankan data', poin: 0, umpan_balik: 'Keliru. Pengamanan data terkait autentikasi, otorisasi, dan RLS.', is_correct: false },

  // Q3-A (Jawaban: B)
  { id: 'o8-A3-1', question_id: 'q8000001-0000-0000-0000-000000000003', teks: 'Menampilkan data', poin: 0, umpan_balik: 'Keliru. Menampilkan data merupakan hasil dari operasi Read.', is_correct: false },
  { id: 'o8-A3-2', question_id: 'q8000001-0000-0000-0000-000000000003', teks: 'Menambah atau menyimpan data', poin: 10, umpan_balik: 'Tepat! Operasi Write mencakup penulisan, penambahan (INSERT), maupun pembaruan (UPDATE) data ke database.', is_correct: true },
  { id: 'o8-A3-3', question_id: 'q8000001-0000-0000-0000-000000000003', teks: 'Membaca data', poin: 0, umpan_balik: 'Keliru. Membaca data adalah operasi Read.', is_correct: false },
  { id: 'o8-A3-4', question_id: 'q8000001-0000-0000-0000-000000000003', teks: 'Mengurutkan data', poin: 0, umpan_balik: 'Keliru. Pengurutan data adalah operasi sorting/query filtering.', is_correct: false },

  // Q4-A (Jawaban: C)
  { id: 'o8-A4-1', question_id: 'q8000001-0000-0000-0000-000000000004', teks: 'MongoDB', poin: 0, umpan_balik: 'Keliru. MongoDB adalah database NoSQL berbasis dokumen, bukan database utama Supabase.', is_correct: false },
  { id: 'o8-A4-2', question_id: 'q8000001-0000-0000-0000-000000000004', teks: 'Firebase', poin: 0, umpan_balik: 'Keliru. Firebase adalah platform BaaS lain milik Google.', is_correct: false },
  { id: 'o8-A4-3', question_id: 'q8000001-0000-0000-0000-000000000004', teks: 'PostgreSQL', poin: 10, umpan_balik: 'Tepat! Supabase dibangun di atas database relasional PostgreSQL beserta fitur Row Level Security (RLS).', is_correct: true },
  { id: 'o8-A4-4', question_id: 'q8000001-0000-0000-0000-000000000004', teks: 'SQLite', poin: 0, umpan_balik: 'Keliru. Supabase menggunakan PostgreSQL sebagai mesin databasenya.', is_correct: false },

  // Q5-A (Jawaban: A)
  { id: 'o8-A5-1', question_id: 'q8000001-0000-0000-0000-000000000005', teks: 'Backend as a Service', poin: 10, umpan_balik: 'Tepat! BaaS (Backend as a Service) menyediakan layanan database, autentikasi, dan API siap pakai.', is_correct: true },
  { id: 'o8-A5-2', question_id: 'q8000001-0000-0000-0000-000000000005', teks: 'Browser as a Service', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o8-A5-3', question_id: 'q8000001-0000-0000-0000-000000000005', teks: 'Build as a Service', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o8-A5-4', question_id: 'q8000001-0000-0000-0000-000000000005', teks: 'Base as a Service', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q6-A (Jawaban: C)
  { id: 'o8-A6-1', question_id: 'q8000001-0000-0000-0000-000000000006', teks: 'Loading', poin: 0, umpan_balik: 'Keliru. Loading adalah kondisi saat proses sedang berlangsung.', is_correct: false },
  { id: 'o8-A6-2', question_id: 'q8000001-0000-0000-0000-000000000006', teks: 'Error', poin: 0, umpan_balik: 'Keliru. Error adalah kondisi ketika operasi gagal dijalankan.', is_correct: false },
  { id: 'o8-A6-3', question_id: 'q8000001-0000-0000-0000-000000000006', teks: 'Idle', poin: 10, umpan_balik: 'Tepat! Idle adalah status diam/awal sebelum pengguna memicu permintaan data atau aksi.', is_correct: true },
  { id: 'o8-A6-4', question_id: 'q8000001-0000-0000-0000-000000000006', teks: 'Success', poin: 0, umpan_balik: 'Keliru. Success terjadi setelah operasi selesai dengan berhasil.', is_correct: false },

  // Q7-A (Jawaban: A)
  { id: 'o8-A7-1', question_id: 'q8000001-0000-0000-0000-000000000007', teks: 'Proses sedang berjalan', poin: 10, umpan_balik: 'Tepat! Loading State memberi umpan balik visual kepada pengguna bahwa data sedang dimuat atau diproses.', is_correct: true },
  { id: 'o8-A7-2', question_id: 'q8000001-0000-0000-0000-000000000007', teks: 'Data kosong', poin: 0, umpan_balik: 'Keliru. Data kosong direpresentasikan oleh Empty State.', is_correct: false },
  { id: 'o8-A7-3', question_id: 'q8000001-0000-0000-0000-000000000007', teks: 'Terjadi error', poin: 0, umpan_balik: 'Keliru. Kegagalan direpresentasikan oleh Error State.', is_correct: false },
  { id: 'o8-A7-4', question_id: 'q8000001-0000-0000-0000-000000000007', teks: 'Proses selesai', poin: 0, umpan_balik: 'Keliru. Proses selesai direpresentasikan oleh Success atau Error State.', is_correct: false },

  // Q8-A (Jawaban: B)
  { id: 'o8-A8-1', question_id: 'q8000001-0000-0000-0000-000000000008', teks: 'Data gagal dimuat', poin: 0, umpan_balik: 'Keliru. Kegagalan memuat data memicu Error State.', is_correct: false },
  { id: 'o8-A8-2', question_id: 'q8000001-0000-0000-0000-000000000008', teks: 'Operasi berhasil dilakukan', poin: 10, umpan_balik: 'Tepat! Success State muncul saat pengambilan atau penyimpanan data berhasil dieksekusi.', is_correct: true },
  { id: 'o8-A8-3', question_id: 'q8000001-0000-0000-0000-000000000008', teks: 'Aplikasi ditutup', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o8-A8-4', question_id: 'q8000001-0000-0000-0000-000000000008', teks: 'Data kosong', poin: 0, umpan_balik: 'Keliru. Data kosong ditangani oleh Empty State.', is_correct: false },

  // Q9-A (Jawaban: A)
  { id: 'o8-A9-1', question_id: 'q8000001-0000-0000-0000-000000000009', teks: 'Operasi mengalami kegagalan', poin: 10, umpan_balik: 'Tepat! Error State menampilkan pesan kesalahan dan opsi coba lagi saat request atau operasi gagal.', is_correct: true },
  { id: 'o8-A9-2', question_id: 'q8000001-0000-0000-0000-000000000009', teks: 'Data berhasil ditampilkan', poin: 0, umpan_balik: 'Keliru. Ini adalah Success State.', is_correct: false },
  { id: 'o8-A9-3', question_id: 'q8000001-0000-0000-0000-000000000009', teks: 'User logout', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o8-A9-4', question_id: 'q8000001-0000-0000-0000-000000000009', teks: 'Tidak ada koneksi database', poin: 0, umpan_balik: 'Keliru. Tidak ada koneksi hanyalah salah satu penyebab error, bukan definisi umum Error State.', is_correct: false },

  // Q10-A (Jawaban: A)
  { id: 'o8-A10-1', question_id: 'q8000001-0000-0000-0000-000000000010', teks: 'Data tidak tersedia', poin: 10, umpan_balik: 'Tepat! Empty State memberi informasi bahwa data belum ada/kosong sekaligus memberikan arahan tindakan bagi pengguna.', is_correct: true },
  { id: 'o8-A10-2', question_id: 'q8000001-0000-0000-0000-000000000010', teks: 'Data berhasil ditambahkan', poin: 0, umpan_balik: 'Keliru. Itu memicu Success State.', is_correct: false },
  { id: 'o8-A10-3', question_id: 'q8000001-0000-0000-0000-000000000010', teks: 'Loading selesai', poin: 0, umpan_balik: 'Keliru. Loading selesai dapat menghasilkan Success, Empty, atau Error State.', is_correct: false },
  { id: 'o8-A10-4', question_id: 'q8000001-0000-0000-0000-000000000010', teks: 'User login', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // ─── SET B OPTIONS ───
  // Q1-B / PG 11 (Jawaban: B)
  { id: 'o8-B1-1', question_id: 'q8000003-0000-0000-0000-000000000001', teks: 'Menambah request', poin: 0, umpan_balik: 'Keliru. Debounce justru menahan eksekusi agar tidak mengirim terlalu banyak request.', is_correct: false },
  { id: 'o8-B1-2', question_id: 'q8000003-0000-0000-0000-000000000001', teks: 'Mengurangi request berulang yang tidak perlu', poin: 10, umpan_balik: 'Tepat! Debounce menunda eksekusi fungsi hingga pengguna berhenti memicu event dalam jeda waktu tertentu.', is_correct: true },
  { id: 'o8-B1-3', question_id: 'q8000003-0000-0000-0000-000000000001', teks: 'Menghapus cache', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o8-B1-4', question_id: 'q8000003-0000-0000-0000-000000000001', teks: 'Menambah bandwidth', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q2-B / PG 12 (Jawaban: B)
  { id: 'o8-B2-1', question_id: 'q8000003-0000-0000-0000-000000000002', teks: 'Login', poin: 0, umpan_balik: 'Keliru. Form login dikirim satu kali saat tombol submit diklik.', is_correct: false },
  { id: 'o8-B2-2', question_id: 'q8000003-0000-0000-0000-000000000002', teks: 'Search/Pencarian', poin: 10, umpan_balik: 'Tepat! Pada fitur pencarian real-time, Debounce mencegah API dipanggil pada setiap ketikan huruf.', is_correct: true },
  { id: 'o8-B2-3', question_id: 'q8000003-0000-0000-0000-000000000002', teks: 'Logout', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o8-B2-4', question_id: 'q8000003-0000-0000-0000-000000000002', teks: 'Upload File', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q3-B / PG 13 (Jawaban: A)
  { id: 'o8-B3-1', question_id: 'q8000003-0000-0000-0000-000000000003', teks: 'Membatalkan request yang tidak diperlukan', poin: 10, umpan_balik: 'Tepat! AbortController membatalkan permintaan HTTP/fetch yang sedang berjalan apabila sudah usang atau komponen di-unmount.', is_correct: true },
  { id: 'o8-B3-2', question_id: 'q8000003-0000-0000-0000-000000000003', teks: 'Membuat request baru', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o8-B3-3', question_id: 'q8000003-0000-0000-0000-000000000003', teks: 'Menyimpan data', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o8-B3-4', question_id: 'q8000003-0000-0000-0000-000000000003', teks: 'Menghapus database', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q4-B / PG 14 (Jawaban: B)
  { id: 'o8-B4-1', question_id: 'q8000003-0000-0000-0000-000000000004', teks: 'RLS', poin: 0, umpan_balik: 'Keliru. RLS adalah mekanisme keamanan baris di database.', is_correct: false },
  { id: 'o8-B4-2', question_id: 'q8000003-0000-0000-0000-000000000004', teks: 'Race Condition', poin: 10, umpan_balik: 'Tepat! AbortController mencegah respons dari request lama menimpa hasil request terbaru (race condition).', is_correct: true },
  { id: 'o8-B4-3', question_id: 'q8000003-0000-0000-0000-000000000004', teks: 'SEO', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o8-B4-4', question_id: 'q8000003-0000-0000-0000-000000000004', teks: 'Hosting Error', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q5-B / PG 15 (Jawaban: C)
  { id: 'o8-B5-1', question_id: 'q8000003-0000-0000-0000-000000000005', teks: 'INSERT', poin: 0, umpan_balik: 'Keliru. INSERT digunakan untuk menambahkan baris data baru.', is_correct: false },
  { id: 'o8-B5-2', question_id: 'q8000003-0000-0000-0000-000000000005', teks: 'UPDATE', poin: 0, umpan_balik: 'Keliru. UPDATE digunakan untuk mengubah data yang sudah ada.', is_correct: false },
  { id: 'o8-B5-3', question_id: 'q8000003-0000-0000-0000-000000000005', teks: 'SELECT', poin: 10, umpan_balik: 'Tepat! SELECT adalah perintah SQL untuk membaca atau mengambil data dari tabel database.', is_correct: true },
  { id: 'o8-B5-4', question_id: 'q8000003-0000-0000-0000-000000000005', teks: 'DELETE', poin: 0, umpan_balik: 'Keliru. DELETE digunakan untuk menghapus data.', is_correct: false },

  // Q6-B / PG 16 (Jawaban: A)
  { id: 'o8-B6-1', question_id: 'q8000003-0000-0000-0000-000000000006', teks: 'INSERT', poin: 10, umpan_balik: 'Tepat! INSERT digunakan untuk memasukkan/menambahkan record data baru ke tabel.', is_correct: true },
  { id: 'o8-B6-2', question_id: 'q8000003-0000-0000-0000-000000000006', teks: 'SELECT', poin: 0, umpan_balik: 'Keliru. SELECT digunakan untuk membaca data.', is_correct: false },
  { id: 'o8-B6-3', question_id: 'q8000003-0000-0000-0000-000000000006', teks: 'DELETE', poin: 0, umpan_balik: 'Keliru. DELETE digunakan untuk menghapus data.', is_correct: false },
  { id: 'o8-B6-4', question_id: 'q8000003-0000-0000-0000-000000000006', teks: 'DROP', poin: 0, umpan_balik: 'Keliru. DROP digunakan untuk menghapus struktur tabel atau database.', is_correct: false },

  // Q7-B / PG 17 (Jawaban: A)
  { id: 'o8-B7-1', question_id: 'q8000003-0000-0000-0000-000000000007', teks: 'Row Level Security', poin: 10, umpan_balik: 'Tepat! RLS (Row Level Security) adalah fitur keamanan PostgreSQL/Supabase untuk mengontrol akses pada tiap baris data.', is_correct: true },
  { id: 'o8-B7-2', question_id: 'q8000003-0000-0000-0000-000000000007', teks: 'Read Level Structure', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o8-B7-3', question_id: 'q8000003-0000-0000-0000-000000000007', teks: 'Row Logic Server', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o8-B7-4', question_id: 'q8000003-0000-0000-0000-000000000007', teks: 'Route Level Security', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q8-B / PG 18 (Jawaban: A)
  { id: 'o8-B8-1', question_id: 'q8000003-0000-0000-0000-000000000008', teks: 'Membatasi akses data berdasarkan aturan', poin: 10, umpan_balik: 'Tepat! RLS memastikan pengguna hanya bisa mengakses atau memodifikasi baris data sesuai policy/aturan otorisasi.', is_correct: true },
  { id: 'o8-B8-2', question_id: 'q8000003-0000-0000-0000-000000000008', teks: 'Mempercepat website', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o8-B8-3', question_id: 'q8000003-0000-0000-0000-000000000008', teks: 'Mengurangi penyimpanan', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o8-B8-4', question_id: 'q8000003-0000-0000-0000-000000000008', teks: 'Membuat UI', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q9-B / PG 19 (Jawaban: A)
  { id: 'o8-B9-1', question_id: 'q8000003-0000-0000-0000-000000000009', teks: 'Memastikan data sesuai aturan', poin: 10, umpan_balik: 'Tepat! Validasi memeriksa format, tipe, dan batasan input agar sesuai dengan aturan bisnis/skema sistem.', is_correct: true },
  { id: 'o8-B9-2', question_id: 'q8000003-0000-0000-0000-000000000009', teks: 'Menghapus data lama', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o8-B9-3', question_id: 'q8000003-0000-0000-0000-000000000009', teks: 'Menampilkan dashboard', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o8-B9-4', question_id: 'q8000003-0000-0000-0000-000000000009', teks: 'Membuat tabel', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q10-B / PG 20 (Jawaban: A)
  { id: 'o8-B10-1', question_id: 'q8000003-0000-0000-0000-000000000010', teks: 'Membersihkan data berbahaya', poin: 10, umpan_balik: 'Tepat! Sanitasi membersihkan atau menetralkan karakter/kode berbahaya pada input pengguna sebelum disimpan atau dirender.', is_correct: true },
  { id: 'o8-B10-2', question_id: 'q8000003-0000-0000-0000-000000000010', teks: 'Menambah data baru', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o8-B10-3', question_id: 'q8000003-0000-0000-0000-000000000010', teks: 'Mengurutkan data', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o8-B10-4', question_id: 'q8000003-0000-0000-0000-000000000010', teks: 'Membagi data', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // ─── SET C OPTIONS ───
  // Q1-C / PG 21 (Jawaban: B)
  { id: 'o8-C1-1', question_id: 'q8000005-0000-0000-0000-000000000001', teks: 'Optimasi gambar', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o8-C1-2', question_id: 'q8000005-0000-0000-0000-000000000001', teks: 'Membersihkan HTML berbahaya', poin: 10, umpan_balik: 'Tepat! DOMPurify adalah library sanitasi yang menghapus tag atau atribut HTML/script berbahaya.', is_correct: true },
  { id: 'o8-C1-3', question_id: 'q8000005-0000-0000-0000-000000000001', teks: 'Membuat API', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o8-C1-4', question_id: 'q8000005-0000-0000-0000-000000000001', teks: 'Mengatur database', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q2-C / PG 22 (Jawaban: C)
  { id: 'o8-C2-1', question_id: 'q8000005-0000-0000-0000-000000000002', teks: 'SQL Injection', poin: 0, umpan_balik: 'Keliru. SQL Injection dicegah dengan parameterized query / ORM di sisi database.', is_correct: false },
  { id: 'o8-C2-2', question_id: 'q8000005-0000-0000-0000-000000000002', teks: 'DDoS', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o8-C2-3', question_id: 'q8000005-0000-0000-0000-000000000002', teks: 'XSS', poin: 10, umpan_balik: 'Tepat! DOMPurify mencegah serangan Cross-Site Scripting (XSS) dari injeksi script pada konten HTML.', is_correct: true },
  { id: 'o8-C2-4', question_id: 'q8000005-0000-0000-0000-000000000002', teks: 'Phishing', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q3-C / PG 23 (Jawaban: C)
  { id: 'o8-C3-1', question_id: 'q8000005-0000-0000-0000-000000000003', teks: 'innerHTML', poin: 0, umpan_balik: 'Keliru. innerHTML mengeksekusi markup HTML dan rentan terhadap XSS jika input tidak disanitasi.', is_correct: false },
  { id: 'o8-C3-2', question_id: 'q8000005-0000-0000-0000-000000000003', teks: 'script', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o8-C3-3', question_id: 'q8000005-0000-0000-0000-000000000003', teks: 'textContent', poin: 10, umpan_balik: 'Tepat! textContent merender input murni sebagai teks biasa tanpa mengeksekusi tag HTML atau script.', is_correct: true },
  { id: 'o8-C3-4', question_id: 'q8000005-0000-0000-0000-000000000003', teks: 'document.write', poin: 0, umpan_balik: 'Keliru. document.write tidak aman dan tidak direkomendasikan pada pengembangan web modern.', is_correct: false },

  // Q4-C / PG 24 (Jawaban: A)
  { id: 'o8-C4-1', question_id: 'q8000005-0000-0000-0000-000000000004', teks: 'Placeholder saat data dimuat', poin: 10, umpan_balik: 'Tepat! Skeleton Loading menampilkan kerangka visual sementara sehingga aplikasi terasa lebih cepat dan responsif.', is_correct: true },
  { id: 'o8-C4-2', question_id: 'q8000005-0000-0000-0000-000000000004', teks: 'Error Notification', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o8-C4-3', question_id: 'q8000005-0000-0000-0000-000000000004', teks: 'Database Cache', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o8-C4-4', question_id: 'q8000005-0000-0000-0000-000000000004', teks: 'Server Monitor', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q5-C / PG 25 (Jawaban: A)
  { id: 'o8-C5-1', question_id: 'q8000005-0000-0000-0000-000000000005', teks: 'Menampilkan pesan singkat kepada pengguna', poin: 10, umpan_balik: 'Tepat! Toast Notification memberikan notifikasi umpan balik singkat yang tidak mengganggu alur kerja pengguna.', is_correct: true },
  { id: 'o8-C5-2', question_id: 'q8000005-0000-0000-0000-000000000005', teks: 'Menjalankan database', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o8-C5-3', question_id: 'q8000005-0000-0000-0000-000000000005', teks: 'Menyimpan data', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o8-C5-4', question_id: 'q8000005-0000-0000-0000-000000000005', teks: 'Menghapus cache', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q6-C / PG 26 (Jawaban: A)
  { id: 'o8-C6-1', question_id: 'q8000005-0000-0000-0000-000000000006', teks: 'Dokumentasi proyek', poin: 10, umpan_balik: 'Tepat! File README mendokumentasikan gambaran proyek, cara instalasi, konfigurasi environment, dan panduan penggunaan.', is_correct: true },
  { id: 'o8-C6-2', question_id: 'q8000005-0000-0000-0000-000000000006', teks: 'Menyimpan data pengguna', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o8-C6-3', question_id: 'q8000005-0000-0000-0000-000000000006', teks: 'Menjalankan SQL', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o8-C6-4', question_id: 'q8000005-0000-0000-0000-000000000006', teks: 'Menyimpan gambar', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q7-C / PG 27 (Jawaban: A)
  { id: 'o8-C7-1', question_id: 'q8000005-0000-0000-0000-000000000007', teks: 'Struktur database', poin: 10, umpan_balik: 'Tepat! schema.sql berisi definisi tabel, kolom, relasi, dan policy RLS untuk mereplikasi struktur database.', is_correct: true },
  { id: 'o8-C7-2', question_id: 'q8000005-0000-0000-0000-000000000007', teks: 'Struktur CSS', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o8-C7-3', question_id: 'q8000005-0000-0000-0000-000000000007', teks: 'Struktur GitHub', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o8-C7-4', question_id: 'q8000005-0000-0000-0000-000000000007', teks: 'Struktur UI', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q8-C / PG 28 (Jawaban: A)
  { id: 'o8-C8-1', question_id: 'q8000005-0000-0000-0000-000000000008', teks: 'Penyimpanan data lokal browser', poin: 10, umpan_balik: 'Tepat! localStorage menyimpan pasangan key-value secara persisten di sisi browser pengguna.', is_correct: true },
  { id: 'o8-C8-2', question_id: 'q8000005-0000-0000-0000-000000000008', teks: 'Database cloud', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o8-C8-3', question_id: 'q8000005-0000-0000-0000-000000000008', teks: 'Hosting web', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o8-C8-4', question_id: 'q8000005-0000-0000-0000-000000000008', teks: 'Server cache', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q9-C / PG 29 (Jawaban: B)
  { id: 'o8-C9-1', question_id: 'q8000005-0000-0000-0000-000000000009', teks: 'Bahasa pemrograman', poin: 0, umpan_balik: 'Keliru. JSON adalah format data, bukan bahasa pemrograman.', is_correct: false },
  { id: 'o8-C9-2', question_id: 'q8000005-0000-0000-0000-000000000009', teks: 'Format pertukaran data', poin: 10, umpan_balik: 'Tepat! JSON (JavaScript Object Notation) adalah format standar ringan untuk pertukaran data antara client dan server.', is_correct: true },
  { id: 'o8-C9-3', question_id: 'q8000005-0000-0000-0000-000000000009', teks: 'Framework frontend', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o8-C9-4', question_id: 'q8000005-0000-0000-0000-000000000009', teks: 'Database', poin: 0, umpan_balik: 'Keliru.', is_correct: false },

  // Q10-C / PG 30 (Jawaban: A)
  { id: 'o8-C10-1', question_id: 'q8000005-0000-0000-0000-000000000010', teks: 'Website yang sudah terhubung ke database aktif dan ter-deploy', poin: 10, umpan_balik: 'Tepat! Output akhir Modul 8 adalah aplikasi web dinamis yang terintegrasi dengan database aktif serta sudah dideploy.', is_correct: true },
  { id: 'o8-C10-2', question_id: 'q8000005-0000-0000-0000-000000000010', teks: 'Wireframe aplikasi', poin: 0, umpan_balik: 'Keliru. Wireframe merupakan deliverable Modul 4.', is_correct: false },
  { id: 'o8-C10-3', question_id: 'q8000005-0000-0000-0000-000000000010', teks: 'User Persona', poin: 0, umpan_balik: 'Keliru. User Persona merupakan deliverable Modul 3.', is_correct: false },
  { id: 'o8-C10-4', question_id: 'q8000005-0000-0000-0000-000000000010', teks: 'Prototype statis', poin: 0, umpan_balik: 'Keliru. Prototype merupakan deliverable Modul 5.', is_correct: false }
];

// ─── 3. ESSAY RUBRICS (15 Rubrik Penilaian Essay) ────────────────────────────
export const modul8Rubrics = [
  // ─── SET A RUBRICS (Essay 1–5) ───
  {
    id: 'er-0000008-0000-0000-0000-000000000001',
    question_id: 'q8000002-0000-0000-0000-000000000001',
    kunci_jawaban: 'Integrasi data dinamis adalah proses menghubungkan aplikasi dengan sumber data sehingga data dapat dibaca, ditampilkan, ditambahkan, dan diperbarui secara real-time atau sesuai kebutuhan aplikasi.',
    kata_kunci: ['data dinamis', 'database', 'read', 'write', 'sinkronisasi data'],
    rubrik_skor: {
      '10': '>= 80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'Aplikasi terhubung dengan database sehingga data dapat berubah secara otomatis',
      '8': 'Data aplikasi dapat berubah tanpa mengubah kode (belum menjelaskan hubungan dengan database dan operasi read/write)',
      '7': 'Hanya menyebutkan ide umum tanpa kedalaman konsep sesuai materi',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  },
  {
    id: 'er-0000008-0000-0000-0000-000000000002',
    question_id: 'q8000002-0000-0000-0000-000000000002',
    kunci_jawaban: 'Read adalah proses mengambil atau menampilkan data dari database, sedangkan Write adalah proses menyimpan atau mengubah data ke database.',
    kata_kunci: ['read', 'fetching', 'write', 'insert', 'database'],
    rubrik_skor: {
      '10': '>= 80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'Read mengambil data dan Write menyimpan data',
      '8': 'Read melihat data dan Write membuat data (belum menjelaskan hubungan dengan database)',
      '7': 'Hanya menyebutkan Read dan Write adalah operasi data tanpa menjelaskan perbedaannya',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  },
  {
    id: 'er-0000008-0000-0000-0000-000000000003',
    question_id: 'q8000002-0000-0000-0000-000000000003',
    kunci_jawaban: 'BaaS adalah layanan backend siap pakai yang menyediakan database, autentikasi, API, dan layanan lainnya sehingga developer tidak perlu membangun backend dari nol.',
    kata_kunci: ['baas', 'backend', 'layanan siap pakai', 'database', 'api'],
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
    id: 'er-0000008-0000-0000-0000-000000000004',
    question_id: 'q8000002-0000-0000-0000-000000000004',
    kunci_jawaban: 'Karena Supabase menyediakan database PostgreSQL, autentikasi, API otomatis, storage, dan fitur backend lainnya yang dapat langsung digunakan oleh developer.',
    kata_kunci: ['supabase', 'postgresql', 'api', 'autentikasi', 'backend'],
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
    id: 'er-0000008-0000-0000-0000-000000000005',
    question_id: 'q8000002-0000-0000-0000-000000000005',
    kunci_jawaban: 'UI State digunakan untuk menggambarkan kondisi aplikasi kepada pengguna seperti idle, loading, success, error, dan empty sehingga pengguna memahami status sistem.',
    kata_kunci: ['ui state', 'loading', 'success', 'error', 'empty'],
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
    id: 'er-0000008-0000-0000-0000-000000000006',
    question_id: 'q8000004-0000-0000-0000-000000000001',
    kunci_jawaban: 'Loading State adalah kondisi ketika aplikasi sedang memproses atau mengambil data sehingga pengguna perlu menunggu hasilnya.',
    kata_kunci: ['loading', 'mengambil data', 'proses', 'menunggu'],
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
    id: 'er-0000008-0000-0000-0000-000000000007',
    question_id: 'q8000004-0000-0000-0000-000000000002',
    kunci_jawaban: 'Empty State membantu pengguna memahami bahwa data belum tersedia dan memberikan arahan tindakan yang dapat dilakukan selanjutnya.',
    kata_kunci: ['empty state', 'data kosong', 'arahan pengguna'],
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
    id: 'er-0000008-0000-0000-0000-000000000008',
    question_id: 'q8000004-0000-0000-0000-000000000003',
    kunci_jawaban: 'Debounce digunakan untuk menunda eksekusi request hingga pengguna berhenti mengetik sehingga mengurangi request yang tidak diperlukan ke server.',
    kata_kunci: ['debounce', 'pencarian', 'mengurangi request', 'efisiensi'],
    rubrik_skor: {
      '10': '>= 80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'Debounce mengurangi jumlah request saat pengguna mengetik',
      '8': 'Debounce membuat pencarian lebih cepat (belum menjelaskan mekanisme penundaan request)',
      '7': 'Debounce digunakan pada search (terlalu umum)',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  },
  {
    id: 'er-0000008-0000-0000-0000-000000000009',
    question_id: 'q8000004-0000-0000-0000-000000000004',
    kunci_jawaban: 'AbortController digunakan untuk membatalkan request yang tidak lagi diperlukan sehingga mencegah race condition dan pemborosan sumber daya.',
    kata_kunci: ['abortcontroller', 'membatalkan request', 'race condition'],
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
    id: 'er-0000008-0000-0000-0000-000000000010',
    question_id: 'q8000004-0000-0000-0000-000000000005',
    kunci_jawaban: 'RLS adalah mekanisme keamanan yang mengatur siapa yang dapat melihat, mengubah, atau menghapus data pada tingkat baris data tertentu di database.',
    kata_kunci: ['rls', 'keamanan', 'akses data', 'row level'],
    rubrik_skor: {
      '10': '>= 80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'RLS membatasi akses data berdasarkan aturan tertentu',
      '8': 'RLS digunakan untuk keamanan database (belum menjelaskan kontrol akses pada tingkat baris data)',
      '7': 'RLS adalah fitur Supabase (tidak menjelaskan fungsi sebenarnya)',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  },

  // ─── SET C RUBRICS (Essay 11–15) ───
  {
    id: 'er-0000008-0000-0000-0000-000000000011',
    question_id: 'q8000006-0000-0000-0000-000000000001',
    kunci_jawaban: 'Validasi memastikan data yang masuk sesuai aturan sehingga mengurangi kesalahan, menjaga kualitas data, dan meningkatkan keamanan aplikasi.',
    kata_kunci: ['validasi', 'data benar', 'aturan', 'keamanan'],
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
    id: 'er-0000008-0000-0000-0000-000000000012',
    question_id: 'q8000006-0000-0000-0000-000000000002',
    kunci_jawaban: 'Validasi memeriksa apakah data sesuai aturan, sedangkan sanitasi membersihkan atau memodifikasi data agar aman digunakan sistem.',
    kata_kunci: ['validasi', 'sanitasi', 'aturan data', 'keamanan'],
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
    id: 'er-0000008-0000-0000-0000-000000000013',
    question_id: 'q8000006-0000-0000-0000-000000000003',
    kunci_jawaban: 'DOMPurify membersihkan input HTML yang berpotensi mengandung script berbahaya sehingga membantu mencegah serangan XSS.',
    kata_kunci: ['dompurify', 'xss', 'sanitasi html', 'keamanan'],
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
    id: 'er-0000008-0000-0000-0000-000000000014',
    question_id: 'q8000006-0000-0000-0000-000000000004',
    kunci_jawaban: 'Skeleton Loading memberikan placeholder visual sementara saat data sedang dimuat sehingga pengguna merasa aplikasi lebih responsif.',
    kata_kunci: ['skeleton loading', 'placeholder', 'loading', 'ux'],
    rubrik_skor: {
      '10': '>= 80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'Skeleton Loading menampilkan tampilan sementara saat data dimuat',
      '8': 'Skeleton digunakan saat loading (belum menjelaskan manfaat terhadap pengalaman pengguna)',
      '7': 'Skeleton adalah animasi loading (terlalu sempit dan kurang menjelaskan fungsinya)',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  },
  {
    id: 'er-0000008-0000-0000-0000-000000000015',
    question_id: 'q8000006-0000-0000-0000-000000000005',
    kunci_jawaban: 'README berfungsi sebagai dokumentasi proyek, sedangkan schema.sql mendokumentasikan struktur database sehingga proyek lebih mudah dipahami, dijalankan, dan dikembangkan oleh tim lain.',
    kata_kunci: ['readme', 'dokumentasi', 'schema.sql', 'struktur database', 'kolaborasi'],
    rubrik_skor: {
      '10': '>= 80% kata kunci utama muncul dan konsep inti dijelaskan secara tepat',
      '9': 'README menjelaskan proyek dan schema.sql menjelaskan database',
      '8': 'Keduanya digunakan untuk dokumentasi proyek (belum menjelaskan fungsi spesifik masing-masing dokumen)',
      '7': 'README dan schema.sql adalah file proyek (terlalu umum)',
      '0': 'Konsep keliru, jawaban kosong, atau mayoritas kata kunci utama tidak terpenuhi'
    },
    created_at: now()
  }
];