/**
 * Modul 1 - Set C Options & Essay Rubrics (100% Sesuai Lampiran PRD Hal. 31-34 & 40-41)
 */
const now = () => new Date().toISOString();

export const modul1SetCOptions = [
  // Q21 (Set C #1): Contoh dampak masalah yang terukur
  { id: 'o1-C1-1', question_id: 'q1000005-0000-0000-0000-000000000001', teks: 'Bosan', poin: 0, umpan_balik: 'Keliru. Bosan bersifat subjektif dan sulit diukur secara kuantitatif.', is_correct: false },
  { id: 'o1-C1-2', question_id: 'q1000005-0000-0000-0000-000000000001', teks: 'Kehilangan waktu dan uang', poin: 10, umpan_balik: 'Tepat! Kehilangan waktu dan uang adalah contoh dampak masalah yang konkret dan terukur.', is_correct: true },
  { id: 'o1-C1-3', question_id: 'q1000005-0000-0000-0000-000000000001', teks: 'Tidak nyaman', poin: 0, umpan_balik: 'Keliru. Ketidaknyamanan adalah perasaan umum, bukan metrik dampak yang terukur.', is_correct: false },
  { id: 'o1-C1-4', question_id: 'q1000005-0000-0000-0000-000000000001', teks: 'Kurang motivasi', poin: 0, umpan_balik: 'Keliru. Kurang motivasi bukan indikator dampak masalah yang terukur.', is_correct: false },
  // Q22 (Set C #2): Alternatives
  { id: 'o1-C2-1', question_id: 'q1000005-0000-0000-0000-000000000002', teks: 'Cara pengguna mengatasi masalah saat ini', poin: 10, umpan_balik: 'Tepat! Alternatives menggambarkan solusi atau kebiasaan yang saat ini dipakai pengguna.', is_correct: true },
  { id: 'o1-C2-2', question_id: 'q1000005-0000-0000-0000-000000000002', teks: 'Solusi masa depan', poin: 0, umpan_balik: 'Keliru. Alternatives merujuk pada kondisi dan alat yang digunakan saat ini.', is_correct: false },
  { id: 'o1-C2-3', question_id: 'q1000005-0000-0000-0000-000000000002', teks: 'Strategi pemasaran', poin: 0, umpan_balik: 'Keliru. Alternatives bukan strategi pemasaran produk.', is_correct: false },
  { id: 'o1-C2-4', question_id: 'q1000005-0000-0000-0000-000000000002', teks: 'Target pendapatan', poin: 0, umpan_balik: 'Keliru. Alternatives tidak membahas proyeksi pendapatan.', is_correct: false },
  // Q23 (Set C #3): The Gap
  { id: 'o1-C3-1', question_id: 'q1000005-0000-0000-0000-000000000003', teks: 'Jumlah pengguna', poin: 0, umpan_balik: 'Keliru. The Gap bukan ukuran jumlah pengguna.', is_correct: false },
  { id: 'o1-C3-2', question_id: 'q1000005-0000-0000-0000-000000000003', teks: 'Selisih keuntungan', poin: 0, umpan_balik: 'Keliru. The Gap berfokus pada celah solusi, bukan selisih laba.', is_correct: false },
  { id: 'o1-C3-3', question_id: 'q1000005-0000-0000-0000-000000000003', teks: 'Kekurangan solusi yang ada saat ini', poin: 10, umpan_balik: 'Tepat! The Gap adalah kelemahan atau celah pada solusi alternatif yang dipakai pengguna sekarang.', is_correct: true },
  { id: 'o1-C3-4', question_id: 'q1000005-0000-0000-0000-000000000003', teks: 'Modal usaha', poin: 0, umpan_balik: 'Keliru. Modal usaha tidak termasuk definisi The Gap.', is_correct: false },
  // Q24 (Set C #4): Rumusan akhir masalah
  { id: 'o1-C4-1', question_id: 'q1000005-0000-0000-0000-000000000004', teks: 'Target, akar masalah, dampak', poin: 10, umpan_balik: 'Tepat! Rumusan akhir masalah menggabungkan target pengguna, konteks, akar masalah, dan dampak.', is_correct: true },
  { id: 'o1-C4-2', question_id: 'q1000005-0000-0000-0000-000000000004', teks: 'Investor dan modal', poin: 0, umpan_balik: 'Keliru. Investor dan modal bukan komponen rumusan masalah pengguna.', is_correct: false },
  { id: 'o1-C4-3', question_id: 'q1000005-0000-0000-0000-000000000004', teks: 'Harga dan keuntungan', poin: 0, umpan_balik: 'Keliru. Harga dan keuntungan termasuk model bisnis, bukan problem statement.', is_correct: false },
  { id: 'o1-C4-4', question_id: 'q1000005-0000-0000-0000-000000000004', teks: 'Produk dan promosi', poin: 0, umpan_balik: 'Keliru. Rumusan masalah tidak berisi fitur produk maupun promosi.', is_correct: false },
  // Q25 (Set C #5): Studi kasus kos-kosan - target pengguna
  { id: 'o1-C5-1', question_id: 'q1000005-0000-0000-0000-000000000005', teks: 'Mahasiswa', poin: 0, umpan_balik: 'Keliru. Pada studi kasus ini, fokus masalah ada pada pengelolaan tagihan oleh pemilik kos.', is_correct: false },
  { id: 'o1-C5-2', question_id: 'q1000005-0000-0000-0000-000000000005', teks: 'Pemilik kos dengan 10-30 kamar yang tidak tinggal di lokasi kos', poin: 10, umpan_balik: 'Tepat! Segmen spesifiknya adalah pemilik kos 10-30 kamar yang mengelola dari jarak jauh.', is_correct: true },
  { id: 'o1-C5-3', question_id: 'q1000005-0000-0000-0000-000000000005', teks: 'Agen properti', poin: 0, umpan_balik: 'Keliru. Agen properti bukan target pengguna dalam studi kasus ini.', is_correct: false },
  { id: 'o1-C5-4', question_id: 'q1000005-0000-0000-0000-000000000005', teks: 'Penjaga kos', poin: 0, umpan_balik: 'Keliru. Target penggunanya adalah pemilik kos yang tidak tinggal di lokasi.', is_correct: false },
  // Q26 (Set C #6): Studi kasus kos-kosan - masalah utama
  { id: 'o1-C6-1', question_id: 'q1000005-0000-0000-0000-000000000006', teks: 'Sulit membangun kos baru', poin: 0, umpan_balik: 'Keliru. Masalahnya berkaitan dengan operasional bulanan, bukan konstruksi.', is_correct: false },
  { id: 'o1-C6-2', question_id: 'q1000005-0000-0000-0000-000000000006', teks: 'Kesulitan menagih sewa dan pencatatan masih manual', poin: 10, umpan_balik: 'Tepat! Penagihan dan pencatatan manual menjadi hambatan utama pemilik kos.', is_correct: true },
  { id: 'o1-C6-3', question_id: 'q1000005-0000-0000-0000-000000000006', teks: 'Biaya listrik mahal', poin: 0, umpan_balik: 'Keliru. Bukan biaya listrik yang menjadi fokus studi kasus.', is_correct: false },
  { id: 'o1-C6-4', question_id: 'q1000005-0000-0000-0000-000000000006', teks: 'Sulit mencari penyewa', poin: 0, umpan_balik: 'Keliru. Fokus kasus ini adalah pengelolaan pembayaran sewa bulanan.', is_correct: false },
  // Q27 (Set C #7): Studi kasus kos-kosan - waktu muncul masalah
  { id: 'o1-C7-1', question_id: 'q1000005-0000-0000-0000-000000000007', teks: 'Awal tahun', poin: 0, umpan_balik: 'Keliru. Siklus pembayaran sewa kos terjadi setiap bulan.', is_correct: false },
  { id: 'o1-C7-2', question_id: 'q1000005-0000-0000-0000-000000000007', teks: 'Pertengahan bulan', poin: 0, umpan_balik: 'Keliru. Puncak penagihan terjadi pada akhir bulan.', is_correct: false },
  { id: 'o1-C7-3', question_id: 'q1000005-0000-0000-0000-000000000007', teks: 'Akhir bulan', poin: 10, umpan_balik: 'Tepat! Masalah penagihan dan pengecekan pembayaran memuncak setiap akhir bulan.', is_correct: true },
  { id: 'o1-C7-4', question_id: 'q1000005-0000-0000-0000-000000000007', teks: 'Setiap hari', poin: 0, umpan_balik: 'Keliru. Konteks waktunya adalah akhir bulan saat jatuh tempo sewa.', is_correct: false },
  // Q28 (Set C #8): Studi kasus kos-kosan - dampak
  { id: 'o1-C8-1', question_id: 'q1000005-0000-0000-0000-000000000008', teks: 'Pendapatan meningkat', poin: 0, umpan_balik: 'Keliru. Keterlambatan bayar justru menghambat arus kas.', is_correct: false },
  { id: 'o1-C8-2', question_id: 'q1000005-0000-0000-0000-000000000008', teks: 'Arus kas tersendat dan memicu konflik', poin: 10, umpan_balik: 'Tepat! Keterlambatan pembayaran mengganggu arus kas dan berpotensi memicu konflik dengan penyewa.', is_correct: true },
  { id: 'o1-C8-3', question_id: 'q1000005-0000-0000-0000-000000000008', teks: 'Penyewa bertambah', poin: 0, umpan_balik: 'Keliru. Masalah penagihan tidak otomatis menambah penyewa.', is_correct: false },
  { id: 'o1-C8-4', question_id: 'q1000005-0000-0000-0000-000000000008', teks: 'Biaya internet naik', poin: 0, umpan_balik: 'Keliru. Dampak utamanya adalah arus kas tersendat dan potensi konflik.', is_correct: false },
  // Q29 (Set C #9): Studi kasus kos-kosan - solusi saat ini
  { id: 'o1-C9-1', question_id: 'q1000005-0000-0000-0000-000000000009', teks: 'ERP System', poin: 0, umpan_balik: 'Keliru. Pemilik kos belum menggunakan sistem terintegrasi seperti ERP.', is_correct: false },
  { id: 'o1-C9-2', question_id: 'q1000005-0000-0000-0000-000000000009', teks: 'CRM System', poin: 0, umpan_balik: 'Keliru. Mereka masih memakai cara manual.', is_correct: false },
  { id: 'o1-C9-3', question_id: 'q1000005-0000-0000-0000-000000000009', teks: 'Broadcast WhatsApp dan buku tulis', poin: 10, umpan_balik: 'Tepat! Pemilik kos mengandalkan broadcast WhatsApp untuk menagih dan buku tulis/catatan manual.', is_correct: true },
  { id: 'o1-C9-4', question_id: 'q1000005-0000-0000-0000-000000000009', teks: 'AI Chatbot', poin: 0, umpan_balik: 'Keliru. Penagihan masih dilakukan secara manual lewat WhatsApp.', is_correct: false },
  // Q30 (Set C #10): Studi kasus kos-kosan - celah pasar
  { id: 'o1-C10-1', question_id: 'q1000005-0000-0000-0000-000000000010', teks: 'Harga kos terlalu mahal', poin: 0, umpan_balik: 'Keliru. Celah pasar berada pada ketidakefisienan proses penagihan dan verifikasi.', is_correct: false },
  { id: 'o1-C10-2', question_id: 'q1000005-0000-0000-0000-000000000010', teks: 'Lokasi kos jauh', poin: 0, umpan_balik: 'Keliru. Itu kondisi pengguna, bukan celah dari solusi alternatif saat ini.', is_correct: false },
  { id: 'o1-C10-3', question_id: 'q1000005-0000-0000-0000-000000000010', teks: 'WA sering diabaikan dan mutasi bank dicek manual', poin: 10, umpan_balik: 'Tepat! Pesan WA mudah terabaikan dan pengecekan mutasi manual rentan kesalahan.', is_correct: true },
  { id: 'o1-C10-4', question_id: 'q1000005-0000-0000-0000-000000000010', teks: 'Jumlah kamar sedikit', poin: 0, umpan_balik: 'Keliru. Celah pasar muncul dari keterbatasan cara manual saat mengelola 10-30 kamar.', is_correct: false }
];

export const modul1SetCRubrics = [
  {
    id: 'er-0000001-0000-0000-0000-000000000011',
    question_id: 'q1000006-0000-0000-0000-000000000001',
    kunci_jawaban: '5 Whys adalah metode menemukan akar masalah dengan mengajukan pertanyaan "Mengapa?" secara berulang hingga ditemukan penyebab paling mendasar dari suatu masalah.',
    kata_kunci: ['5 whys', 'mengapa', 'akar masalah', 'berulang', 'penyebab'],
    rubrik_skor: { '10': 'Menjelaskan metode 5 Whys dengan bertanya mengapa berulang untuk menemukan akar masalah', '8': 'Menjelaskan mencari penyebab masalah', '0': 'Tidak relevan' },
    created_at: now()
  },
  {
    id: 'er-0000001-0000-0000-0000-000000000012',
    question_id: 'q1000006-0000-0000-0000-000000000002',
    kunci_jawaban: 'The Gap adalah kekurangan atau kelemahan dari solusi yang saat ini digunakan pengguna. Gap ditemukan dengan membandingkan kebutuhan pengguna terhadap kemampuan solusi yang sudah ada.',
    kata_kunci: ['gap', 'kelemahan solusi', 'kebutuhan pengguna', 'peluang inovasi', 'kekurangan'],
    rubrik_skor: { '10': 'Menjelaskan definisi The Gap dan cara menemukannya dari perbandingan kebutuhan & solusi ada', '8': 'Menjelaskan kekurangan produk kompetitor', '0': 'Tidak relevan' },
    created_at: now()
  },
  {
    id: 'er-0000001-0000-0000-0000-000000000013',
    question_id: 'q1000006-0000-0000-0000-000000000003',
    kunci_jawaban: 'Contoh: "Pemilik kos dengan 10-30 kamar kesulitan mengelola pembayaran sewa pada akhir bulan karena proses pencatatan dan pengecekan pembayaran masih manual, yang mengakibatkan keterlambatan pembayaran, konflik dengan penyewa, dan arus kas yang terganggu."',
    kata_kunci: ['kesulitan', 'saat', 'karena', 'mengakibatkan', 'berakibat', 'manual', 'akhir bulan'],
    rubrik_skor: { '10': 'Memuat seluruh elemen format: Target, Konteks, Akar Masalah, dan Dampak', '8': 'Memuat sebagian komponen format', '0': 'Tidak relevan' },
    created_at: now()
  },
  {
    id: 'er-0000001-0000-0000-0000-000000000014',
    question_id: 'q1000006-0000-0000-0000-000000000004',
    kunci_jawaban: 'Peluang inovasi yang dapat dibuat adalah sistem manajemen kos digital yang menyediakan pengingat otomatis, verifikasi pembayaran otomatis, dashboard keuangan, dan laporan real-time sehingga mengurangi pekerjaan manual serta keterlambatan pembayaran.',
    kata_kunci: ['manajemen kos digital', 'otomatisasi', 'pembayaran', 'dashboard', 'efisiensi', 'pengingat otomatis'],
    rubrik_skor: { '10': 'Menganalisis masalah kos dan menyebutkan solusi otomatisasi/dashboard/pembayaran', '8': 'Menyebutkan aplikasi kos secara umum', '0': 'Tidak relevan' },
    created_at: now()
  },
  {
    id: 'er-0000001-0000-0000-0000-000000000015',
    question_id: 'q1000006-0000-0000-0000-000000000005',
    kunci_jawaban: 'Feedback pengguna penting karena membantu startup memahami kebutuhan pasar, menemukan kekurangan produk, memvalidasi asumsi, mengurangi risiko kegagalan, dan meningkatkan kualitas solusi secara berkelanjutan.',
    kata_kunci: ['feedback', 'kebutuhan pasar', 'validasi', 'perbaikan produk', 'mengurangi risiko'],
    rubrik_skor: { '10': 'Menjelaskan peran feedback untuk validasi, perbaikan produk, dan mengurangi risiko', '8': 'Menjelaskan feedback untuk memperbaiki aplikasi', '0': 'Tidak relevan' },
    created_at: now()
  }
];