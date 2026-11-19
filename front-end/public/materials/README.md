# 📚 Direktori Materi Slide Pembelajaran & Integrasi Cloud (VINIX7)

Direktori ini digunakan sebagai media penyimpanan materi slide pembelajaran modul magang VINIX7, baik yang bersumber dari **Google Drive Cloud Preview** maupun salinan lokal file PDF offline.

---

## 🌐 1. Integrasi Google Drive Live Preview (Default)

Aplikasi telah terintegrasi langsung dengan tautan resmi Google Drive untuk menampilkan dokumen slide secara leluasa dan responsif tanpa membebani ukuran bundle repositori:

* **Modul 1 (Startup Mindset & Problem Solving):**
  * Tautan Google Drive: `https://drive.google.com/file/d/1ofkBoMKz26NmUddSc5dCT3y7JexVlKnS/view?usp=sharing`
  * Embed Preview: `/preview` mode terintegrasi otomatis di dalam halaman modul.
* **Modul 2 (UI/UX & Design Thinking):**
  * Tautan Google Drive: `https://drive.google.com/file/d/1Tp17CHNjKtoU0JVsaGZrAZDIMK9JbNGE/view?usp=sharing`
  * Embed Preview: `/preview` mode terintegrasi otomatis di dalam halaman modul.

---

## 🚀 2. Fitur Viewer Interaktif di Web:
1. **Layar Penuh / Tab Baru:** Tombol cepat di pojok kanan atas reader yang memungkinkan peserta/penguji membuka dokumen slide langsung di tab baru browser untuk pengalaman membaca layar penuh (*fullscreen*) serta mengunduh file secara instan.
2. **Tab Switcher (Slide vs Ringkasan):** Peserta dapat berpindah kapan saja antara tampilan **Slide PPT / PDF Asli** dan **Ringkasan Teks Poin Kunci**.
3. **Penanda Progres Membaca:** Tombol *"Tandai Selesai Dibaca"* yang otomatis memperbarui progress bar materi sebelum mengerjakan ujian akhir modul.

---

## 📂 3. Format Penamaan Cadangan Lokal (*Offline Fallback*)

Sebagai jaminan jika koneksi internet pengguna terputus dari Google Drive, aplikasi secara otomatis mencari berkas lokal di folder ini dengan pola penamaan:

```text
modul-{nomor_modul}.pdf
# atau
modul-{nomor_modul}-bagian-{nomor_bagian}.pdf
```

### Berkas yang Tersedia di Direktori Ini:
* `modul-1-bagian-1.pdf` s/d `modul-1-bagian-3.pdf` &rarr; Salinan lokal Modul 1
* `modul-2.pdf` & `modul-2-bagian-1.pdf` s/d `modul-2-bagian-3.pdf` &rarr; Salinan lokal Modul 2 (*Week 2 UI/UX Design Thinking*)
