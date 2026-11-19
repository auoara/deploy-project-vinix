# 💻 Panduan Cepat & Jelas: Tim Back-End Developer (VINIX7)

Halo Bro! 👋  
Selamat datang di repositori backend. Bagian **Front-End website kita saat ini sudah SELESAI 100%** dengan tampilan resmi *VINIX7 LMS Midnight Navy Dark Theme*. 

Saat ini, Front-End berjalan menggunakan simulasi mandiri (*Mock Service*). Tugas utama lu adalah **membuat REST API server-side** yang menghubungkan database PostgreSQL/Supabase ke Front-End.

> **Kabar Baiknya:** Begitu API lu siap di port `5000`, Front-End tinggal mengubah satu baris kode saja:  
> `USE_REAL_BACKEND = true` di file `front-end/src/api/client.js` dan aplikasi langsung terhubung penuh (*Fullstack*)!

---

## 🎁 1. Kado untuk Lu: Logika Bisnis Sudah Jadi (Tinggal Pakai!)

Lu **tidak perlu pusing menghitung rumus PRD dari nol**, karena kita sudah buatkan helper logic lengkap di folder `src/services/`:

1. **`src/services/scoringEngine.js`:**
   * Menghitung nilai akhir dengan rumus baku PRD:
     $$\text{Nilai} = \left[ 0{,}60 \times \left(\frac{\text{Total PG}}{100}\right) + 0{,}40 \times \left(\frac{\text{Total Essay}}{50}\right) \right] \times 100$$
   * Menilai essay otomatis dengan normalisasi teks dan pencocokan kata kunci (skor 10, 8, atau 0).
   * Otomatis mengelompokkan **Topik Lemah (*Weak Topics*)** jika persentase pemahaman topik $< 70\%$.
2. **`src/services/rotationService.js`:**
   * Otomatis memilih **Set A** (Percobaan 1), **Set B** (Percobaan 2), **Set C** (Percobaan 3+).
3. **`src/services/gatingService.js`:**
   * Menghitung status gembok modul berikutnya (*Progressive Gating*) jika nilai $\ge 80$.
   * Menghitung batas waktu **Cooldown 60 detik (1 menit)** jika nilai $< 80$.

---

## 🎯 2. Daftar 8 Endpoint yang Wajib Lu Buat

Server berjalan di `http://localhost:5000`. Berikut daftar endpoint yang dipanggil oleh Front-End:

### 1️⃣ Autentikasi Pengguna
* **`POST /api/auth/register`**
  * *Request Body:* `{ "nama": "Budi", "email": "budi@mail.com", "password": "password123" }`
  * *Tugas Lu:* Hash password (pakai `bcrypt`), simpan ke tabel `users`, dan buat baris di tabel `progress` agar Modul 1 berstatus `unlocked` (Modul 2–10 `locked`).
  * *Response (201):* `{ "token": "jwt_token", "user": { "id": "uuid", "nama": "Budi", "email": "budi@mail.com" } }`
* **`POST /api/auth/login`**
  * *Request Body:* `{ "email": "budi@mail.com", "password": "password123" }`
  * *Response (200):* `{ "token": "jwt_token", "user": { "id": "uuid", "nama": "Budi", "email": "budi@mail.com" } }`

---

### 2️⃣ Kurikulum & Materi Modul
* **`GET /api/courses`**
  * *Tugas Lu:* Ambil seluruh 10 modul dari tabel `courses`, gabungkan dengan status gating peserta dari tabel `progress`.
  * *Response (200):*
    ```json
    [
      {
        "id": "c1",
        "urutan": 1,
        "judul": "Mindset Startup & Problem Solving",
        "ringkasan": "Memahami pola pikir value-driven...",
        "kategori": "Web Educational Technology",
        "status": "unlocked", // 'locked' | 'unlocked' | 'passed'
        "nilaiTerbaik": 85,
        "bagianSelesai": [1, 2]
      }
    ]
    ```

* **`GET /api/courses/:id`**
  * *Tugas Lu:* Ambil detail modul beserta materi bagian-bagiannya dari tabel `sections`.
  * *Response (200):* Return object course lengkap beserta array `sections: [{ urutan, judul, isi, pdfUrl, pdfTitle }]`.

* **`POST /api/courses/:id/sections/:sectionUrutan/complete`**
  * *Tugas Lu:* Catat bahwa peserta telah selesai membaca bagian materi tersebut (update kolom `bagian_selesai` di tabel `progress`).
  * *Response (200):* `{ "success": true, "message": "Bagian materi ditandai selesai" }`

---

### 3️⃣ Workspace Ujian Akhir (Core Engine)
* **`POST /api/courses/:id/exam/start`**
  * *Tugas Lu:*
    1. Cek riwayat ujian terakhir peserta di course ini.
    2. **Validasi Cooldown:** Jika percobaan sebelumnya bernilai $< 80$ dan waktu `cooldown_until > NOW()`, **Tolak dengan status 429**:
       ```json
       {
         "error": "COOLDOWN_ACTIVE",
         "message": "Jeda waktu cooldown aktif.",
         "cooldownUntil": "2026-11-18T10:15:00Z"
       }
       ```
    3. Tentukan paket soal (Percobaan 1: Set A, Percobaan 2: Set B, Percobaan 3: Set C).
    4. Ambil 15 soal (10 PG + 5 Essay) dari tabel `questions` & `options`.
    5. ⚠️ **ATURAN KEAMANAN MUTLAK:** Jangan pernah mengirimkan kolom `poin`, `is_correct`, `kunci_jawaban`, atau `kata_kunci` ke Front-End di endpoint ini agar siswa tidak bisa mencontek lewat Inspect Element / Network Tab!
    6. Buat baris baru di tabel `attempts` dan return:
       ```json
       {
         "attemptId": "att-12345",
         "courseId": "c1",
         "attemptNumber": 1,
         "setPaket": "A",
         "questions": [ /* 15 soal tanpa kunci jawaban */ ]
       }
       ```

---

### 4️⃣ Penilaian & Hasil Ujian
* **`POST /api/attempts/:id/submit`**
  * *Request Body:*
    ```json
    {
      "courseId": "c1",
      "answers": {
        "q1-A-1": "opt-2",
        "q1-A-11": "Jawaban uraian essay siswa..."
      }
    }
    ```
  * *Tugas Lu:*
    1. Ambil kunci jawaban dari tabel `options` (PG) dan `essay_rubrics` (Essay).
    2. Jalankan fungsi `evaluateExam()` dari `src/services/scoringEngine.js`.
    3. Simpan jawaban ke tabel `answers`.
    4. Update baris di tabel `attempts` (`nilai`, `lulus`, `selesai`).
    5. **Aturan Progressive Gating:**
       * **Jika Nilai $\ge 80$:** Update tabel `progress` modul saat ini menjadi `passed`, dan otomatis ubah status modul berikutnya ($N+1$) menjadi `unlocked`!
       * **Jika Nilai $< 80$:** Simpan `cooldown_until = NOW() + INTERVAL '60 seconds'`.
    6. Return: `{ "attemptId": "att-12345", "nilai": 85, "lulus": true }`

* **`GET /api/attempts/:id/result`**
  * *Tugas Lu:* Mengembalikan hasil ulasan lengkap setelah ujian dinilai.
  * *Response (200):*
    ```json
    {
      "attemptId": "att-12345",
      "courseId": "c1",
      "nilai": 85,
      "totalPG": 90,
      "totalEssay": 40,
      "attemptNumber": 1,
      "setPaket": "A",
      "lulus": true,
      "cooldownUntil": null,
      "weakTopics": ["Problem Statement Canvas"],
      "evaluatedQuestions": [
        {
          "questionId": "q1-A-1",
          "urutan": 1,
          "teks": "Soal...",
          "tipe": "pilihan_ganda",
          "poin": 10,
          "label": "Tepat",
          "jawabanPengguna": "Opsi yang dipilih siswa",
          "pembahasan": "Penjelasan konsep yang benar..."
        }
      ]
    }
    ```

---

## ⚡ 3. Cara Menjalankan Backend di Komputer Lu

```bash
# 1. Masuk ke direktori back-end
cd back-end

# 2. Salin template .env
cp .env.example .env

# 3. Install dependencies
npm install

# 4. Jalankan backend mode developer (Auto-reload)
npm run dev
```

Server lu akan menyala di `http://localhost:5000` 🚀  
Jika butuh melihat contoh data JSON persisnya, silakan intip file `front-end/src/api/mockData.js`. Semangat bro, backend lu pasti kelar cepat!
