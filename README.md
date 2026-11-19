# 🎓 VINIX7 Interactive Mini-Course & Assessment Platform

> **Platform Pembelajaran Berjenjang Web Development & UI/UX Design dengan Mekanisme Progressive Gating**  
> Proyek Tugas Akhir Magang VINIX7 &bull; Kategori: *Web Educational Technology*  
> Desain & Tema: **Official VINIX7 LMS Midnight Navy Dark Theme** (`#0B132B`, `#131D35`, `#0052CC`, `#FBE156`)

---

## 🌟 1. Ringkasan Eksekutif & Fitur Inti (*Progressive Gating*)

Platform ini dibangun untuk mengatasi kendala pembelajar mandiri pemula (*"Si Penonton Tutorial"*) yang sering mengalami pemahaman terfragmentasi karena belajar tanpa urutan terstruktur dan tanpa ujian validasi objektif.

### 🛡️ 4 Pilar Mekanisme Utama (*Core Engine*):
1. **Progressive Gating:** Modul berikutnya ($N+1$) **terkunci rapat** dan hanya akan terbuka otomatis apabila peserta berhasil **lulus ujian akhir Modul $N$ dengan nilai minimal 80 (KKM)**.
2. **Formula Evaluasi PRD (Bobot 60% PG + 40% Essay):** Ujian terdiri dari **10 Pilihan Ganda** + **5 Essay Studi Kasus** (Total 15 Soal).
   $$\text{Nilai Akhir} = \left[ 0{,}60 \times \frac{\text{Total Poin PG}}{100} + 0{,}40 \times \frac{\text{Total Poin Essay}}{50} \right] \times 100$$
3. **Cooldown 1 Menit & Rotasi Paket Soal (Anti-Spam & Anti-Hafalan):** 
   * Jika nilai $< 80$, tombol *Ulangi Ujian* terkunci dengan hitung mundur **60 detik (1 menit)** disertai progress bar waktu.
   * Percobaan 1 menggunakan **Set A**, Percobaan 2 **Set B**, Percobaan 3 **Set C** (Percobaan 4+ diacak).
4. **Evaluasi Diagnostik Pasca-Ujian:** Menampilkan skor akhir, label per butir soal (*Tepat, Kurang Tepat, Salah*), kunci jawaban ideal, pembahasan konsep, dan **Analisis Topik Lemah (*Weak Topics*)** yang otomatis mengarahkan siswa ke materi yang perlu diperkuat.

---

## 🎨 2. Desain & Identitas Visual (Official VINIX7 LMS Theme)

Aplikasi telah sepenuhnya disesuaikan dengan standar desain resmi dashboard LMS VINIX7:
* **Background Utama:** `#0B132B` *(Deep Midnight Navy)*
* **Card & Kontainer Utama:** `#131D35` *(Dark Navy Dove)* dengan garis batas `border-slate-800`
* **Card Opsi / Input / Elemen Sekunder:** `#0D152A` untuk hierarki visual berlapis (*layered elevation*)
* **Hero Banner Dashboard:** Gradasi Royal Blue khas VINIX7 (`#0052CC` &rarr; `#003399`) dilengkapi sambutan avatar siswa (**Muhammad Mirza Fatih**) dan widget **Circular Progress Ring** (`% selesai`).
* **Aksen Tombol Utama (CTA):** Warna kuning emas menyala **`#FBE156`** dengan teks hitam pekat `font-black` (tombol *"Lanjutkan Belajar"*).
* **Logo Brand:** Tulisan **VINIX** warna biru dongker/royal blue dan angka **7** warna kuning emas.

---

## 💻 3. Status Bagian Front-End (Selesai 100%)

Bagian **Front-End** telah selesai secara menyeluruh, responsif di semua ukuran layar (Mobile 360px s/d Desktop 4K), dan mematuhi standar aksesibilitas WCAG 2.1 AA:

* ✅ **Dashboard Interaktif (`/`):** Hero banner LMS resmi, Circular Progress Ring, 4 kartu metrik (Modul Tuntas, Progress Jalur, Rerata Skor, Sesi Evaluasi), panduan 3 Aturan Progressive Gating, dan katalog modul berjenjang.
* ✅ **Katalog 10 Modul (`/courses`):** Filter status (*Semua, Terbuka, Lulus, Terkunci*) dengan indikator gembok dinamis dan bar progres baca materi.
* ✅ **Reader Materi & Integrasi Slide Google Drive (`/courses/:id`):** 
  * Pembaca dokumen slide PPT terintegrasi langsung via Google Drive embedder (`/preview`).
  * **Modul 1 (Startup Mindset & Problem Solving):** Terhubung ke slide Google Drive resmi.
  * **Modul 2 (UI/UX & Design Thinking):** Terhubung ke slide Google Drive resmi (*Week 2 UI/UX Design Thinking*).
  * Tombol **"Layar Penuh / Tab Baru"** untuk membaca di tab baru browser atau mengunduh PDF.
  * Tombol *"Tandai Selesai Dibaca"* dan switcher mode *Slide PPT vs Ringkasan Teks*.
* ✅ **Workspace Ujian Akhir (`/exam/:courseId`):** 
  * Navigasi grid nomor 1–15 (PG nomor 1–10, Essay nomor 11–15).
  * Kunci jawaban PG tersebar acak alami di antara **A, B, C, dan D** (tidak berpola dan tidak seragam).
  * Opsi pengecoh PG dirancang menantang dengan jebakan konseptual startup nyata (*vanity metric*, *sunk cost fallacy*, *feature bloat*, dll.).
  * Auto-save draft pengerjaan ke `localStorage` (anti-hilang jika halaman ter-refresh).
  * Dialog konfirmasi submit dengan peringatan jumlah soal kosong.
  * Proteksi jeda cooldown aktif jika siswa mencoba mengakses ujian sebelum 60 detik berlalu.
* ✅ **Halaman Hasil & Review Diagnostik (`/result/:attemptId`):** 
  * Banner nilai akhir + efek selebrasi *confetti* jika lulus ($\ge 80$).
  * Breakdown perolehan poin PG (bobot 60%) dan Essay (bobot 40%) beserta rumus PRD.
  * Widget live cooldown countdown jika belum lulus.
  * Panel identifikasi *Weak Topics* (Topik Lemah) dengan link rekomendasi baca ulang modul.
  * Review lengkap 15 butir soal dengan filter *Semua / Salah / Essay*, menampilkan jawaban peserta, skor, dan pembahasan kunci ideal.
* ✅ **Halaman Riwayat Ujian (`/history`):** Arsip riwayat sesi ujian lengkap dengan tanggal, jam WIB, paket set, nilai, dan status kelulusan.
* ✅ **Autentikasi & Evaluator Tools (`/login`, `/register`, Navbar):** 
  * Form login & register bertema Midnight Navy.
  * Tombol **"Masuk Instan sebagai Peserta Demo"** (1-Click Login).
  * Dropdown **"Evaluator Controls"** di Navbar:
    * 🔑 **Buka Semua Gembok (Demo):** Membuka semua gembok modul 1–10 secara instan agar penguji/penilai dapat menguji modul mana pun tanpa harus lulus modul sebelumnya.
    * 🔄 **Reset Ulang Progres:** Mengembalikan progres ke status awal (*clean slate*).
* ✅ **Mock Engine Mandiri (`front-end/src/api/client.js`):** Mensimulasikan backend, evaluasi essay kata kunci otomatis, rotasi set, dan gating tanpa ketergantungan server lokal.

### 🚀 Cara Menjalankan Front-End di Komputer Lokal:
```bash
# 1. Masuk ke direktori front-end
cd front-end

# 2. Install dependencies (jika baru kloning)
npm install

# 3. Jalankan development server
npm run dev
```
Buka browser di `http://localhost:5173`.

> **Tips Windows:** Jika folder menggunakan karakter `&`, Anda dapat menjalankan via PowerShell atau langsung:
> `node node_modules/vite/bin/vite.js`

---

## 📁 4. Struktur Repositori Terpadu

```bash
vinix-quiz_webdev&uiux/
├── front-end/           # [SELESAI 100%] Aplikasi Web Interaktif (React 19 + Vite 6 + Tailwind CSS v4)
│   ├── public/materials/# Salinan materi offline & panduan dokumen PDF
│   └── src/
│       ├── api/         # client.js (API Engine & Mock Adapter) & mockData.js (10 Modul & Bank Soal)
│       ├── components/  # CourseCard, Navbar, Footer, QuestionCard, ResultPanel, WeakTopicsList, dll.
│       └── pages/       # DashboardPage, CourseListPage, CourseDetailPage, ExamPage, ResultPage, dll.
├── back-end/            # [UNTUK TEMAN 1] Layanan REST API & Mesin Penilaian Otomatis (Node.js/Express)
├── database/            # [UNTUK TEMAN 2] Skema DDL PostgreSQL, RLS Policy, & Seeds Bank Soal
├── devops/              # [UNTUK TEMAN 2] Konfigurasi Docker, Compose, & Panduan CI/CD
└── README.md            # Dokumentasi Utama Proyek
```

---

## 🛠️ 5. Panduan Kolaborasi Tim Pengembang

### 💻 A. Untuk Back-End Developer (`back-end/`):
* Gunakan kontrak 8 Endpoint REST API yang telah didokumentasikan di `back-end/README.md`.
* Manfaatkan layanan yang telah disediakan:
  * `src/services/scoringEngine.js` &rarr; Normalisasi teks, evaluasi kata kunci essay (10, 8, 0), dan kalkulasi 60:40.
  * `src/services/rotationService.js` &rarr; Logika pemilihan paket Set A, B, C.
  * `src/services/gatingService.js` &rarr; Validasi cooldown 60 detik dan unlock modul berikutnya.
* **Integrasi Frontend:** Ketika API backend sudah online, cukup ubah nilai `USE_REAL_BACKEND = true` di file `front-end/src/api/client.js`.

### 🐘 B. Untuk Database & DevOps Engineer (`database/` & `devops/`):
* Jalankan `database/schema.sql` pada instance PostgreSQL / Supabase untuk membuat 9 tabel utama.
* Jalankan `database/seeds/01_courses_and_sections.sql` (10 Modul lengkap termasuk link Google Drive Modul 1 & 2).
* Jalankan `database/seeds/02_sample_questions.sql` (Bank Soal Modul 1 dengan kunci acak dan pengecoh menantang).
* Gunakan `devops/docker-compose.yml` untuk menyalakan PostgreSQL, Backend, dan Frontend dalam 1 perintah:
  ```bash
  cd devops && docker compose up --build -d
  ```

---

## 🤝 6. Status Rilis & Verifikasi Kualitas
* **Build Status:** ✅ Vite Production Build `exit code 0` (Zero Errors).
* **Accessibility:** ✅ WCAG 2.1 AA Compliant (Kontras warna rasio tinggi, keyboard navigable).
* **Remote Repository:** Ter-sinkronisasi penuh pada branch `main` di GitHub.
