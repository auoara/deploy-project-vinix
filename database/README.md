# 🗄️ Panduan Cepat & Jelas: Tim Database Engineer (VINIX7)

Halo Bro! 👋  
Selamat datang di direktori database. Bagian **Front-End website kita saat ini sudah SELESAI 100%** dengan tampilan resmi *VINIX7 LMS Midnight Navy Dark Theme*. 

Tugas utama lu adalah **menyiapkan database PostgreSQL / Supabase, mengeksekusi skema tabel, dan menginput bank soal (*seeding*)**. 

> **Kabar Baiknya:** Skema tabel DDL `schema.sql` dan seed awal modul sudah kita racik lengkap. Lu tinggal ikuti panduan praktis berikut agar pekerjaan lu kelar dalam hitungan menit!

---

## 🏗️ 1. Gambaran 9 Tabel Utama yang Sudah Didefinisikan

Seluruh relasi dan tipe data sudah tertulis rapi di file `database/schema.sql`:

| Nama Tabel | Peran Utama | Aturan Khusus |
|:---|:---|:---|
| `users` | Akun peserta (nama, email, password hash) | Email harus unik |
| `courses` | 10 Modul kurikulum magang | Urutan 1 s/d 10 terurut |
| `sections` | Materi per modul (Bagian 1, 2, 3) | Terhubung ke course dengan cascade delete |
| `questions` | Bank soal (PG & Essay) per modul | Dikelompokkan ke Set A, B, C |
| `options` | Opsi pilihan ganda A, B, C, D | 1 opsi bernilai 10 poin, 3 opsi bernilai 0 |
| `essay_rubrics` | Kunci jawaban ideal & kata kunci essay | ⚠️ **Wajib RLS Tertutup** (Hanya untuk server backend!) |
| `attempts` | Riwayat sesi ujian yang dikerjakan | Rekam tanggal, nilai, dan waktu `cooldown_until` |
| `answers` | Jawaban spesifik peserta per butir soal | Rekam poin (10/8/0) dan label (Tepat/Kurang/Salah) |
| `progress` | Status Progressive Gating per modul | Nilai enum: `locked`, `unlocked`, `passed` |

---

## 🚀 2. Langkah Eksekusi Tercepat (Gunakan Supabase)

Untuk MVP dan showcase tugas akhir, **menggunakan Supabase adalah cara paling instan** (gratis & cloud):

1. **Buat Project Baru:** Buka [Supabase Dashboard](https://supabase.com) dan buat project baru.
2. **Jalankan Skema DDL:**
   * Buka tab **SQL Editor** di Supabase.
   * Buka file `database/schema.sql`, salin seluruh isinya, tempel di SQL Editor Supabase, lalu klik **Run**.
   * Semua 9 tabel, tipe ENUM, dan indeks otomatis terbuat.
3. **Jalankan Data Seed Awal:**
   * Masih di SQL Editor, jalankan `database/seeds/01_courses_and_sections.sql` (mengisi 10 modul lengkap beserta link Google Drive Modul 1 & 2).
   * Selanjutnya jalankan `database/seeds/02_sample_questions.sql` (mengisi 15 soal ujian Modul 1 lengkap dengan kunci acak A-B-C-D dan pengecoh menantang).

> **Opsi Alternatif (Docker / PostgreSQL Lokal):**  
> Jika lu lebih suka menjalankan PostgreSQL lokal di laptop:
> ```bash
> docker run --name vinix-postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=vinix7_quiz -p 5432:5432 -d postgres:16
> psql -h localhost -U postgres -d vinix7_quiz -f database/schema.sql
> psql -h localhost -U postgres -d vinix7_quiz -f database/seeds/01_courses_and_sections.sql
> psql -h localhost -U postgres -d vinix7_quiz -f database/seeds/02_sample_questions.sql
> ```

---

## 📋 3. Checklist Tugas Lu Selanjutnya:

- [x] Struktur DDL `schema.sql` (Sudah selesai disiapkan).
- [x] Seed kurikulum 10 modul `01_courses_and_sections.sql` (Sudah selesai disiapkan).
- [x] Seed bank soal Modul 1 `02_sample_questions.sql` (Sudah selesai disiapkan).
- [ ] **Buat File Seed Modul 2 (`seeds/03_module_2_questions.sql`):**
  * *Tips Rahasia:* Lu tidak perlu mikir soal Modul 2 lagi! Buka file `front-end/src/api/mockData.js` pada bagian `c2: { A: [ ... ] }`. Di sana sudah ada **10 soal PG (kunci acak A, B, C, D) + 5 soal Essay** lengkap dengan kunci dan pembahasannya. Tinggal salin teksnya ke dalam sintaks INSERT SQL!
- [ ] **Lengkapi Bank Soal Modul 3 s/d 10:**
  * Buka file dokumen PDF PRD (ada di folder lampiran PRD halaman 29 s/d 163).
- [ ] **Kirim String Koneksi ke Teman Back-End:**
  * Salin *Connection String* URI dari Supabase (misal: `postgresql://postgres.[ref]:[password]@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres`).
  * Berikan string ini ke teman Back-End untuk dimasukkan ke file `.env` mereka (`DATABASE_URL`).

---

## 🔒 4. Aturan Keamanan Penting (Row Level Security)

Sesuai aturan keamanan PRD:
1. Tabel `essay_rubrics` dan kolom `is_correct` / `poin` pada tabel `options` **TIDAK BOLEH** dibuka untuk role publik (`anon`). Hanya backend menggunakan role `service_role` yang boleh membaca data ini.
2. Ini menjamin kunci jawaban ujian tidak akan pernah bisa di-cheat oleh siswa melalui tab Inspect Element / Network di browser!

Semangat bro, database lu fondasi utama aplikasi kita! 🐘
