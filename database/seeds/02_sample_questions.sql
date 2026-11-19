-- ==============================================================================
-- VINIX7 SEEDS: SAMPLE QUESTIONS & ESSAY RUBRICS (MODUL 1 - SET A)
-- Extracted directly from PRD Appendix (Pages 13-28)
-- ==============================================================================

-- 1. Insert PG Questions Set A (Modul 1) - Diperketat dengan Analisis Mendalam
INSERT INTO questions (id, course_id, set_paket, topik, tipe, teks, urutan) VALUES
('q1000001-0000-0000-0000-000000000001', 'c0000001-0000-0000-0000-000000000001', 'A', 'Startup Mindset', 'pilihan_ganda', 'Dalam konteks pengembangan produk startup digital, manakah pernyataan berikut yang paling tepat membedakan pendekatan Value-Driven dari pendekatan Feature-Driven?', 1),
('q1000001-0000-0000-0000-000000000002', 'c0000001-0000-0000-0000-000000000001', 'A', 'Startup Mindset', 'pilihan_ganda', 'Sebelum menyetujui penambahan fitur baru ke dalam roadmap produk, pertanyaan validasi paling mendasar yang wajib diajukan tim menurut pola pikir startup adalah...', 2),
('q1000001-0000-0000-0000-000000000003', 'c0000001-0000-0000-0000-000000000001', 'A', 'Problem Solving', 'pilihan_ganda', 'Sebuah startup merilis aplikasi dengan antarmuka yang sangat indah, namun retensi penggunanya anjlok drastis dalam dua minggu pasca-rilis. Berdasarkan prinsip "Solve The Problem", akar kegagalan paling mendasar adalah...', 3),
('q1000001-0000-0000-0000-000000000004', 'c0000001-0000-0000-0000-000000000001', 'A', 'Agility', 'pilihan_ganda', 'Bagaimanakah penerapan prinsip Agility yang paling tepat ketika sebuah fitur yang baru diluncurkan terbukti diabaikan oleh pengguna?', 4),
('q1000001-0000-0000-0000-000000000005', 'c0000001-0000-0000-0000-000000000001', 'A', 'Validasi Masalah', 'pilihan_ganda', 'Mengapa pola pikir startup memandang kegagalan validasi hipotesis di fase awal sebagai "keberhasilan data", bukan kerugian mutlak?', 5),
('q1000001-0000-0000-0000-000000000006', 'c0000001-0000-0000-0000-000000000001', 'A', 'Problem-Solution Fit', 'pilihan_ganda', 'Apa risiko terbesar jika startup melakukan scaling (pemasaran masif & ekspansi tim) sebelum berhasil membuktikan Problem-Solution Fit?', 6),
('q1000001-0000-0000-0000-000000000007', 'c0000001-0000-0000-0000-000000000001', 'A', 'Problem Statement Canvas', 'pilihan_ganda', 'Pada Problem Statement Canvas, mengapa merumuskan elemen "Who" (Target Pengguna) sebagai "Semua orang yang punya smartphone" merupakan kesalahan fatal?', 7),
('q1000001-0000-0000-0000-000000000008', 'c0000001-0000-0000-0000-000000000001', 'A', 'Teknik 5 Whys', 'pilihan_ganda', 'Dalam studi kasus penagihan kos: jika penyewa sering telat bayar dan pemilik kos hanya berhenti pada Why ke-1 dengan membuatkan alarm pengingat, kelemahan fatalnya adalah...', 8),
('q1000001-0000-0000-0000-000000000009', 'c0000001-0000-0000-0000-000000000001', 'A', 'Problem Statement Canvas', 'pilihan_ganda', 'Dalam Problem Statement Canvas, pemahaman tajam mengenai elemen "The Gap" (celah dari solusi alternatif saat ini) sangat diperlukan agar...', 9),
('q1000001-0000-0000-0000-000000000010', 'c0000001-0000-0000-0000-000000000001', 'A', 'Problem Statement Canvas', 'pilihan_ganda', 'Manakah format kalimat rumusan masalah standar yang paling tepat sesuai kaidah template Problem Statement Canvas?', 10)
ON CONFLICT (id) DO NOTHING;

-- 2. Insert Options for PG Question 1 (Opsi C Benar, Opsi A/B/D Pengecoh Menantang)
INSERT INTO options (question_id, teks, poin, umpan_balik) VALUES
('q1000001-0000-0000-0000-000000000001', 'Value-Driven mengukur keberhasilan produk dari tingginya angka durasi waktu yang dihabiskan pengguna di dalam aplikasi, sedangkan Feature-Driven mengukurnya dari kecepatan rilis versi baru.', 0, 'Keliru. Durasi penggunaan semata adalah vanity metric dan bukan pembeda esensi value-driven.'),
('q1000001-0000-0000-0000-000000000001', 'Value-Driven fokus mewujudkan seluruh daftar permintaan fitur yang diajukan pengguna pada survei, sedangkan Feature-Driven fokus mengimplementasikan ide inovatif internal tim pendiri.', 0, 'Keliru. Menuruti semua permintaan fitur pengguna tanpa validasi pain point justru melahirkan feature bloat.'),
('q1000001-0000-0000-0000-000000000001', 'Value-Driven berpusat pada seberapa efektif produk menuntaskan pain point dan mempermudah hidup pengguna, sedangkan Feature-Driven berfokus pada kuantitas fitur serta adopsi tren teknologi terkini.', 10, 'Tepat! Value-driven selalu berfokus pada pemecahan masalah nyata dan nilai manfaat yang dirasakan langsung oleh pengguna.'),
('q1000001-0000-0000-0000-000000000001', 'Value-Driven memprioritaskan fitur-fitur yang langsung menghasilkan arus kas (monetization-first), sedangkan Feature-Driven memprioritaskan fitur gratis untuk memperbesar basis pengguna.', 0, 'Keliru. Monetisasi awal vs bakar uang adalah strategi bisnis/pricing, bukan definisi value-driven.');

-- 3. Insert Essay Questions Set A (Modul 1) - Dipermudah & To The Point
INSERT INTO questions (id, course_id, set_paket, topik, tipe, teks, urutan) VALUES
('q1000002-0000-0000-0000-000000000001', 'c0000001-0000-0000-0000-000000000001', 'A', 'Problem Statement Canvas', 'essay', 'Sebutkan 4 elemen pokok yang terdapat di dalam Problem Statement Canvas sesuai materi slide!', 1),
('q1000002-0000-0000-0000-000000000002', 'c0000001-0000-0000-0000-000000000001', 'A', 'Teknik 5 Whys', 'essay', 'Secara singkat, apa tujuan utama dari teknik 5 Whys dalam membedah masalah produk?', 2),
('q1000002-0000-0000-0000-000000000003', 'c0000001-0000-0000-0000-000000000001', 'A', 'Startup Mindset', 'essay', 'Jelaskan perbedaan singkat antara pola pikir Value-Driven dan Feature-Driven!', 3),
('q1000002-0000-0000-0000-000000000004', 'c0000001-0000-0000-0000-000000000001', 'A', 'Problem Statement', 'essay', 'Tuliskan rumus kalimat standar dalam menyusun Problem Statement sesuai slide materi!', 4),
('q1000002-0000-0000-0000-000000000005', 'c0000001-0000-0000-0000-000000000001', 'A', 'Agility & Validasi', 'essay', 'Mengapa kegagalan awal dalam startup dianggap sebagai data berharga dan bukan kerugian mutlak?', 5)
ON CONFLICT (id) DO NOTHING;

-- 4. Insert Essay Rubrics (Held strictly on Server!)
INSERT INTO essay_rubrics (question_id, kunci_jawaban, kata_kunci, rubrik_skor) VALUES
('q1000002-0000-0000-0000-000000000001', 
'4 elemen pokok Problem Statement Canvas: 1. Who (Target Pengguna), 2. Context (Konteks kapan & di mana), 3. Root Cause (Akar Masalah), 4. The Gap (Celah kelemahan alternatif saat ini).',
ARRAY['who', 'context', 'root cause', 'gap', 'pengguna', 'konteks', 'akar masalah', 'celah'],
'{"10": "Menyebutkan minimal 2 atau lebih elemen kunci dengan tepat", "8": "Menyebutkan 1 elemen kunci", "0": "Tidak relevan"}'::jsonb),

('q1000002-0000-0000-0000-000000000002',
'Tujuan utama teknik 5 Whys adalah untuk menemukan akar masalah terdalam (root cause), bukan sekadar mengobati gejala permukaan (symptom).',
ARRAY['akar masalah', 'root cause', 'gejala', 'symptom'],
'{"10": "Menyebutkan konsep akar masalah / root cause", "8": "Menyebutkan konsep mencari penyebab secara umum", "0": "Tidak relevan"}'::jsonb);
