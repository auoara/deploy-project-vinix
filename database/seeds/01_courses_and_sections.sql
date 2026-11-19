INSERT INTO courses (id, urutan, judul, ringkasan, kategori, estimasi_waktu, level, icon, referensi_eksternal, pdf_url) VALUES
('c0000001-0000-0000-0000-000000000001', 1, 'Mindset Startup & Problem Solving', 'Pola pikir value-driven, identifikasi masalah nyata, Problem Statement Canvas, dan metode 5 Whys.', 'Product & Startup', '45 Menit', 'Fondasi', 'Lightbulb', 'Lean Startup (Eric Ries), MVP Principle, 5 Whys Root Cause Analysis', 'https://drive.google.com/file/d/1ofkBoMKz26NmUddSc5dCT3y7JexVlKnS/preview'),
('c0000002-0000-0000-0000-000000000002', 2, 'UI/UX & Design Thinking', 'Mengupas tuntas anatomi desain produk digital, 5 tahap Design Thinking, kurva 1:10:100, dan studi kasus produk gagal.', 'UI/UX Design', '50 Menit', 'Fondasi', 'Palette', 'Double Diamond Framework, Hukum UX (Hick''s Law), Studi Kasus Juicero, Windows 8, Google Glass', 'https://drive.google.com/file/d/1Tp17CHNjKtoU0JVsaGZrAZDIMK9JbNGE/preview'),
('c0000003-0000-0000-0000-000000000003', 3, 'User Research & Persona', 'Metode riset kualitatif & kuantitatif, teknik wawancara bebas leading question, User Persona, dan Journey Map.', 'UI/UX Design', '55 Menit', 'Intermediate', 'Users', 'Empathy Map (Says, Thinks, Does, Feels), User Journey Mapping, Wawancara 3-5 Responden', NULL),
('c0000004-0000-0000-0000-000000000004', 4, 'Wireframing & User Flow', 'Information Architecture (IA), pola baca F-Pattern & Z-Pattern, prinsip Proximity, Contrast, dan Crazy 8s.', 'UI/UX Design', '60 Menit', 'Intermediate', 'Layers', 'Pilar Information Architecture, Pola Scan F/Z, Flowchart Simbol (Terminator, Process, Decision)', NULL),
('c0000005-0000-0000-0000-000000000005', 5, 'UI & Prototyping', 'Low-Fidelity vs High-Fidelity prototype, komponen form interaktif, CTA, dan prinsip Test Early, Learn Fast.', 'UI/UX Design', '50 Menit', 'Intermediate', 'Smartphone', 'Figma Interaction Links, Anatomy of Form Components, Mobile-first touch targets', NULL),
('c0000006-0000-0000-0000-000000000006', 6, 'HTML Dasar & Semantik', 'Struktur dokumen HTML5, tag semantik (article, header, main), aksesibilitas atribut alt, dan WCAG 1.4.3.', 'Web Development', '45 Menit', 'Fondasi', 'Code2', 'W3C HTML5 Specification, WCAG 2.1 AA Contrast Ratio (4.5:1), Semantic Accessibility', NULL),
('c0000007-0000-0000-0000-000000000007', 7, 'PRD, AI, Git Kolaborasi & Slicing Desain', 'Format User Story, Acceptance Criteria, alur Git kolaboratif (PR & conflict), Design Token, dan Mobile-First.', 'Engineering & Workflow', '65 Menit', 'Intermediate', 'GitPullRequest', 'Git Feature Branch Workflow, Pull Request & Code Review Etiquette, Design Tokens in Tailwind', NULL),
('c0000008-0000-0000-0000-000000000008', 8, 'Integrasi Data Dinamis', 'BaaS Supabase, 5 UI States (Idle, Loading, Success, Error, Empty), Debounce, AbortController, RLS, DOMPurify.', 'Web Development', '70 Menit', 'Advanced', 'Database', 'PostgreSQL Row Level Security, Sanitasi XSS DOMPurify, Debounce Hook, AbortController', NULL),
('c0000009-0000-0000-0000-000000000009', 9, 'Usability Testing & Sprint Perbaikan', 'Metode Think-Aloud, aturan 5 pengguna Nielsen, Microsoft Clarity heatmap & rage click, metrik SEQ, dan GitHub Issues.', 'UI/UX & Quality', '60 Menit', 'Advanced', 'Sparkles', 'Nielsen Norman 5 User Rule, Think-Aloud Protocol, Session Replays, Single Ease Question (SEQ)', NULL),
('c0000010-0000-0000-0000-000000000010', 10, 'Audit Kualitas Web & Showcase Portofolio', 'Audit Google Lighthouse, Core Web Vitals (LCP, INP, CLS), sanitasi keamanan dasar (.env & HTTPS), dan studi kasus portofolio.', 'Engineering & Career', '60 Menit', 'Advanced', 'Award', 'Google Lighthouse Audit >= 90, Core Web Vitals (LCP <= 2.5s, INP <= 200ms, CLS <= 0.1), Case Study Structure', NULL)
ON CONFLICT (id) DO UPDATE SET urutan = EXCLUDED.urutan, judul = EXCLUDED.judul, ringkasan = EXCLUDED.ringkasan,
  kategori = EXCLUDED.kategori, estimasi_waktu = EXCLUDED.estimasi_waktu, level = EXCLUDED.level, icon = EXCLUDED.icon,
  referensi_eksternal = EXCLUDED.referensi_eksternal, pdf_url = EXCLUDED.pdf_url, updated_at = CURRENT_TIMESTAMP;

DELETE FROM sections WHERE course_id IN ('c0000001-0000-0000-0000-000000000001', 'c0000002-0000-0000-0000-000000000002', 'c0000003-0000-0000-0000-000000000003', 'c0000004-0000-0000-0000-000000000004', 'c0000005-0000-0000-0000-000000000005', 'c0000006-0000-0000-0000-000000000006', 'c0000007-0000-0000-0000-000000000007', 'c0000008-0000-0000-0000-000000000008', 'c0000009-0000-0000-0000-000000000009', 'c0000010-0000-0000-0000-000000000010');

INSERT INTO sections (id, course_id, urutan, judul, isi, pdf_url, pdf_title) VALUES
('s0000001-0000-0000-0000-000000000001', 'c0000001-0000-0000-0000-000000000001', 1, 'Bagian 1: Pola Pikir Value Driven & Agility', '### 1. Pola Pikir Value Driven vs Feature Driven
Dalam pengembangan produk digital, kesalahan paling sering dari pemula adalah berfokus pada teknologi canggih atau fitur sebanyak mungkin (*feature-driven*), bukan pada nilai manfaat yang diterima pengguna (*value-driven*).

> **Prinsip Utama:** Nilai (*Value*) tercipta saat sebuah produk berhasil mempermudah hidup pengguna atau menyelesaikan masalah mendesak yang mereka hadapi.

#### Karakteristik Mindset Value-Driven:
* **Solve The Problem:** Selalu berpegang pada masalah nyata pengguna, bukan ide asumsi sepihak.
* **Agility:** Kemampuan tim untuk bergerak cepat, menerima umpan balik, beradaptasi dan iterasi.
* **Kegagalan Awal adalah Data:** Setiap kesalahan adalah data berharga untuk perbaikan produk.', 'https://drive.google.com/file/d/1ofkBoMKz26NmUddSc5dCT3y7JexVlKnS/preview', 'Slide PPT Modul 1: Startup Mindset & Agility'),
('s0000001-0000-0000-0000-000000000002', 'c0000001-0000-0000-0000-000000000001', 2, 'Bagian 2: Problem Statement Canvas & Teknik 5 Whys', '### 2. Membedah Masalah dengan Problem Statement Canvas
Sebelum membuat antarmuka atau menulis kode, tim wajib membedah masalah menggunakan 4 elemen pokok:
1. **Who (Target Pengguna):** Siapa kelompok spesifik yang paling menderita akibat masalah ini?
2. **Context (When & Where):** Kapan dan di mana masalah tersebut paling sering muncul?
3. **Root Cause (Akar Masalah):** Penyebab terdalam yang memicu timbulnya masalah.
4. **The Gap:** Celah kelemahan dari solusi alternatif yang saat ini digunakan pengguna.

Format: "[Target Pengguna] kesulitan saat [Konteks] karena [Akar Masalah], yang berakibat [Dampak Terukur]."

#### Teknik 5 Whys
Metode mengajukan pertanyaan "Mengapa?" secara berulang hingga ditemukan akar terdalam (root cause).', 'https://drive.google.com/file/d/1ofkBoMKz26NmUddSc5dCT3y7JexVlKnS/preview', 'Slide PPT Modul 1: Problem Canvas & 5 Whys'),
('s0000001-0000-0000-0000-000000000003', 'c0000001-0000-0000-0000-000000000001', 3, 'Referensi Tambahan: Lean Startup & Studi Kasus Kos-Kosan', '### 3. Studi Kasus Manajemen Kos-Kosan
Pemilik kos dengan 10–30 kamar yang tidak tinggal di lokasi kesulitan memantau pembayaran sewa bulanan.

* **Solusi Saat Ini:** Broadcast WhatsApp satu per satu dan catat manual di Excel.
* **The Gap:** Pesan WA sering diabaikan, bukti transfer palsu sulit diverifikasi.
* **Peluang MVP:** Notifikasi otomatis terintegrasi gateway pembayaran dan dashboard arus kas.', 'https://drive.google.com/file/d/1ofkBoMKz26NmUddSc5dCT3y7JexVlKnS/preview', 'Slide PPT Modul 1: Lean Startup & Studi Kasus'),
('s0000002-0000-0000-0000-000000000001', 'c0000002-0000-0000-0000-000000000002', 1, 'Bagian 1: Anatomi UI vs UX & Kurva Biaya 1:10:100', '### 1. UI vs UX
* **UX (User Experience):** Fokus strategi, psikologi, dan alur pemecahan masalah (di pikiran pengguna).
* **UI (User Interface):** Fokus estetika, desain interaksi, dan identitas merek (di layar perangkat).

> **Kurva 1:10:100:** Memperbaiki desain setelah rilis 100x lebih mahal dibanding fase riset awal.', 'https://drive.google.com/file/d/1Tp17CHNjKtoU0JVsaGZrAZDIMK9JbNGE/preview', 'Slide PPT Modul 2: Anatomi UI vs UX & Kurva Biaya 1:10:100'),
('s0000002-0000-0000-0000-000000000002', 'c0000002-0000-0000-0000-000000000002', 2, 'Bagian 2: 5 Tahap Design Thinking & Purwarupa Kasar', '### 2. Lima Tahapan Design Thinking
1. **Empathize** – Pahami apa yang dirasakan dan menjadi penderitaan pengguna.
2. **Define** – Rumuskan akar permasalahan psikologis secara spesifik.
3. **Ideate** – Brainstorming sebebas mungkin, jangan tolak ide aneh.
4. **Prototype** – Buat representasi murah (sketsa kertas atau wireframe hitam-putih).
5. **Test** – Langsung ujikan ke target audiens, cari kebingungan bukan pujian.', 'https://drive.google.com/file/d/1Tp17CHNjKtoU0JVsaGZrAZDIMK9JbNGE/preview', 'Slide PPT Modul 2: 5 Tahap Design Thinking & Purwarupa Kasar'),
('s0000002-0000-0000-0000-000000000003', 'c0000002-0000-0000-0000-000000000002', 3, 'Bagian 3: Studi Kasus Produk Gagal & Dosa Besar Desainer', '### 3. Studi Kasus Produk Gagal
* **Juicero ($120M):** Over-engineering tanpa nilai guna nyata.
* **Windows 8:** Menghapus tombol Start, disorientasi pengguna massal.
* **Google Glass:** Abai konteks sosial dan privasi publik.

#### 4 Dosa Besar Desainer Pemula:
1. Mendesain untuk diri sendiri.
2. Terbiasa "Lorem Ipsum".
3. Terlalu banyak opsi (Hick''s Law).
4. Estetika membunuh fungsi.', 'https://drive.google.com/file/d/1Tp17CHNjKtoU0JVsaGZrAZDIMK9JbNGE/preview', 'Slide PPT Modul 2: Studi Kasus Produk Gagal & Dosa Besar Desainer'),
('s0000003-0000-0000-0000-000000000001', 'c0000003-0000-0000-0000-000000000003', 1, 'Bagian 1: Riset Kualitatif vs Kuantitatif & Teknik Wawancara', '### 1. Kualitatif vs Kuantitatif
* **Riset Kualitatif:** Menggali alasan, motivasi, dan perilaku mendalam melalui wawancara dan observasi (3–5 responden).
* **Riset Kuantitatif:** Mengukur pola dan statistik dalam skala besar melalui survei atau analitik.

> **Hindari Leading Question:** Jangan mengarahkan jawaban pengguna seperti *"Aplikasi ini mudah, bukan?"*. Gunakan pertanyaan terbuka: *"Ceritakan pengalaman terakhir Anda saat..."*', NULL, 'Slide PPT Modul 3: User Research Methods'),
('s0000003-0000-0000-0000-000000000002', 'c0000003-0000-0000-0000-000000000003', 2, 'Bagian 2: Empathy Map, User Persona & User Journey Map', '### 2. Artefak Sintesis Riset
* **Empathy Map:** Memetakan apa yang pengguna katakan (*Says*), pikirkan (*Thinks*), rasakan (*Feels*), dan lakukan (*Does*), beserta *Pain* & *Gain*.
* **User Persona:** Profil fiktif berbasis data riset nyata yang mewakili segmen pengguna utama.
* **User Journey Map:** Visualisasi langkah demi langkah perjalanan pengguna untuk menemukan titik friksi (*pain points*) dan peluang perbaikan.', NULL, 'Slide PPT Modul 3: Persona & Journey Map'),
('s0000004-0000-0000-0000-000000000001', 'c0000004-0000-0000-0000-000000000004', 1, 'Bagian 1: Information Architecture (IA) & Pola Baca Visual', '### 1. Empat Pilar Information Architecture
1. **Organization System:** Pengelompokan informasi secara logis.
2. **Labeling System:** Penamaan menu dan kategori yang mudah dipahami.
3. **Navigation System:** Cara pengguna berpindah antar halaman.
4. **Search System:** Fasilitas pencarian cepat.

#### Pola Pindai Mata Pengguna:
* **F-Pattern:** Cocok untuk halaman kaya teks seperti artikel.
* **Z-Pattern:** Cocok untuk *landing page* sederhana dengan fokus CTA utama.', NULL, 'Slide PPT Modul 4: Information Architecture'),
('s0000004-0000-0000-0000-000000000002', 'c0000004-0000-0000-0000-000000000004', 2, 'Bagian 2: User Flow, Edge Cases & Metode Crazy 8s', '### 2. Merancang Alur & Wireframe
* **User Flow:** Diagram langkah pengguna mencapai tujuan menggunakan simbol *Terminator* (awal/akhir), *Process* (aktivitas), dan *Decision* (percabangan kondisi).
* **Happy Path vs Edge Case:** Rancang jalur ideal sekaligus skenario galat (misal: gagal login, data kosong) agar tidak terjadi *Dead End*.
* **Crazy 8s:** Teknik sketsa 8 alternatif tata letak dalam 8 menit untuk eksplorasi cepat.', NULL, 'Slide PPT Modul 4: User Flow & Wireframing'),
('s0000005-0000-0000-0000-000000000001', 'c0000005-0000-0000-0000-000000000005', 1, 'Bagian 1: Low-Fidelity vs High-Fidelity Prototype', '### 1. Tingkatan Fidelity Prototipe
* **Low-Fidelity (Lo-Fi):** Sketsa kasar untuk menguji alur navigasi dan tata letak dengan biaya minimal.
* **High-Fidelity (Hi-Fi):** Simulasi interaktif (*clickable prototype*) yang menyerupai produk akhir dari sisi warna, tipografi, dan transisi sebelum masuk tahap *coding*.', NULL, 'Slide PPT Modul 5: UI Prototyping'),
('s0000005-0000-0000-0000-000000000002', 'c0000005-0000-0000-0000-000000000005', 2, 'Bagian 2: Anatomi Komponen Form & Prinsip Test Early, Learn Fast', '### 2. Pemilihan Komponen Interaktif
* **Radio Button:** Memilih 1 opsi dari sedikit pilihan (< 5).
* **Dropdown:** Memilih 1 opsi dari daftar panjang untuk menghemat ruang layar.
* **Checkbox:** Memilih lebih dari satu opsi sekaligus.
* **Toggle Switch:** Mengaktifkan/menonaktifkan pengaturan secara instan.

> **Prinsip Utama:** *Test Early, Learn Fast* — validasi prototipe ke pengguna sedini mungkin sebelum menulis kode produksi.', NULL, 'Slide PPT Modul 5: Komponen UI & Validasi'),
('s0000006-0000-0000-0000-000000000001', 'c0000006-0000-0000-0000-000000000006', 1, 'Bagian 1: Struktur Dokumen HTML5 & Elemen Dasar', '### 1. Fondasi Dokumen HTML5
HTML (*HyperText Markup Language*) adalah bahasa *markup* untuk menyusun struktur halaman web:
* `<!DOCTYPE html>`: Deklarasi standar HTML5.
* `<head>`: Menyimpan metadata (`<title>`, `<meta>`, *stylesheet*).
* `<body>`: Menyimpan seluruh konten visual yang tampil di layar pengguna.', NULL, 'Slide PPT Modul 6: HTML5 Fundamentals'),
('s0000006-0000-0000-0000-000000000002', 'c0000006-0000-0000-0000-000000000006', 2, 'Bagian 2: HTML Semantik & Standar Aksesibilitas WCAG', '### 2. Makna Struktur & Inklusivitas
Gunakan tag semantik seperti `<header>`, `<nav>`, `<main>`, `<article>`, dan `<footer>` daripada sekadar menumpuk `<div>`.
* **Atribut `alt`:** Wajib pada elemen `<img>` untuk pembaca layar (*screen reader*).
* **Kontras WCAG 1.4.3:** Rasio kontras teks normal minimal **4,5:1** agar mudah terbaca.', NULL, 'Slide PPT Modul 6: Semantic HTML & Accessibility'),
('s0000007-0000-0000-0000-000000000001', 'c0000007-0000-0000-0000-000000000007', 1, 'Bagian 1: PRD, User Story & Acceptance Criteria', '### 1. Menyelaraskan Tim dengan PRD
* **User Story:** *"Sebagai [jenis pengguna], saya ingin [fitur], sehingga saya dapat [manfaat]."*
* **Acceptance Criteria:** Syarat terukur kapan sebuah fitur dinyatakan selesai dan lulus pengujian.
* **MVP:** Fokus merilis fitur inti terlebih dahulu untuk validasi nyata.', NULL, 'Slide PPT Modul 7: PRD & User Stories'),
('s0000007-0000-0000-0000-000000000002', 'c0000007-0000-0000-0000-000000000007', 2, 'Bagian 2: Alur Git Kolaboratif, Design Token & Mobile-First', '### 2. Kolaborasi Kode & Slicing Desain
* **Git Branch & Pull Request:** Kerjakan fitur di *branch* terpisah, ajukan *Pull Request* untuk *Code Review* sebelum *merge* ke `main`, dan hindari `git push --force`.
* **Design Token & Mobile-First:** Gunakan variabel konsisten untuk warna/spasi dan rancang tata letak mulai dari layar mobile (360px) ke desktop.', NULL, 'Slide PPT Modul 7: Git Collaboration & Design Slicing'),
('s0000008-0000-0000-0000-000000000001', 'c0000008-0000-0000-0000-000000000008', 1, 'Bagian 1: BaaS Supabase, 5 UI States & Optimasi Request', '### 1. Arsitektur Data Dinamis
* **5 UI States Wajib:** *Idle*, *Loading* (skeleton), *Success*, *Empty*, dan *Error*.
* **Debounce & AbortController:** Menunda eksekusi pencarian hingga pengguna berhenti mengetik dan membatalkan *request* usang untuk mencegah *race condition*.', NULL, 'Slide PPT Modul 8: Dynamic Data & UI States'),
('s0000008-0000-0000-0000-000000000002', 'c0000008-0000-0000-0000-000000000008', 2, 'Bagian 2: Keamanan Data RLS & Sanitasi XSS (DOMPurify)', '### 2. Keamanan Aplikasi Web
* **Row Level Security (RLS):** Membatasi hak baca/tulis pada level baris tabel PostgreSQL sesuai identitas pengguna.
* **Validasi & Sanitasi:** Bersihkan input HTML menggunakan **DOMPurify** dan gunakan `textContent` untuk mencegah serangan **Cross-Site Scripting (XSS)**.', NULL, 'Slide PPT Modul 8: RLS & XSS Sanitization'),
('s0000009-0000-0000-0000-000000000001', 'c0000009-0000-0000-0000-000000000009', 1, 'Bagian 1: Protokol Think-Aloud & Analisis Perilaku Pengguna', '### 1. Evaluasi Kegunaan Nyata
* **Aturan 5 Pengguna (Nielsen):** Menguji 5 pengguna sudah mampu mengungkap mayoritas masalah usability.
* **Think-Aloud & No Guidance:** Minta peserta menyuarakan pikirannya tanpa diberi petunjuk arah.
* **Microsoft Clarity:** Analisis *Heatmap*, *Session Replay*, *Dead Click*, dan *Rage Click*.', NULL, 'Slide PPT Modul 9: Usability Testing Protocol'),
('s0000009-0000-0000-0000-000000000002', 'c0000009-0000-0000-0000-000000000009', 2, 'Bagian 2: Metrik SEQ, Triase Masalah & Sprint Perbaikan', '### 2. Pengukuran & Tindak Lanjut Bug
* **Metrik Utama:** *Task Success Rate* (target 100%), *Time-on-Task*, dan *Single Ease Question (SEQ)* skala 1–7 (target >= 5).
* **Triase & GitHub Issues:** Kelompokkan temuan berdasarkan urgensi (*Kritis*, *Mayor*, *Minor*, *Kosmetik*) dan selesaikan lewat *Pull Request* yang terhubung dengan issue.', NULL, 'Slide PPT Modul 9: SEQ Metrics & Bug Triage'),
('s0000010-0000-0000-0000-000000000001', 'c0000010-0000-0000-0000-000000000010', 1, 'Bagian 1: Audit Google Lighthouse & Core Web Vitals', '### 1. Standar Kualitas Produksi
Target skor Google Lighthouse minimal **>= 90** pada kategori *Performance*, *Accessibility*, *Best Practices*, dan *SEO*.
* **LCP (Largest Contentful Paint):** <= 2,5 detik.
* **INP (Interaction to Next Paint):** <= 200 ms.
* **CLS (Cumulative Layout Shift):** <= 0,1.', NULL, 'Slide PPT Modul 10: Lighthouse & Core Web Vitals'),
('s0000010-0000-0000-0000-000000000002', 'c0000010-0000-0000-0000-000000000010', 2, 'Bagian 2: Keamanan Dasar Web & Struktur Case Study Portofolio', '### 2. Kesiapan Rilis & Showcase Karier
* **Keamanan Dasar:** Wajib menggunakan enkripsi **HTTPS**, menyimpan kredensial rahasia di file **`.env`**, dan melakukan sanitasi input.
* **5 Bagian Case Study Portofolio:** *Overview*, *Discovery*, *Engineering*, *Testing*, dan *Impact*.', NULL, 'Slide PPT Modul 10: Security & Portfolio Case Study');
