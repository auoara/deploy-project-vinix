/**
 * VINIX7 Interactive Mini-Course & Assessment Platform
 * MOCK DATABASE & LOCALSTORAGE ENGINE (Mengacu pada PRD Bagian 5, 6, 11, 13)
 */

export const INITIAL_COURSES = [
  {
    id: 'c1',
    urutan: 1,
    judul: 'Mindset Startup & Problem Solving',
    ringkasan: 'Pola pikir value-driven, identifikasi masalah nyata, Problem Statement Canvas, dan metode 5 Whys.',
    kategori: 'Product & Startup',
    estimasiWaktu: '45 Menit',
    level: 'Fondasi',
    icon: 'Lightbulb',
    referensiEksternal: 'Lean Startup (Eric Ries), MVP Principle, 5 Whys Root Cause Analysis',
    pdfUrl: 'https://drive.google.com/file/d/1ofkBoMKz26NmUddSc5dCT3y7JexVlKnS/preview',
    sections: [
      {
        id: 's1-1',
        urutan: 1,
        judul: 'Bagian 1: Pola Pikir Value Driven & Agility',
        pdfUrl: 'https://drive.google.com/file/d/1ofkBoMKz26NmUddSc5dCT3y7JexVlKnS/preview',
        pdfTitle: 'Slide PPT Modul 1: Startup Mindset & Agility',
        isi: `### 1. Pola Pikir Value Driven vs Feature Driven
Dalam pengembangan produk digital, kesalahan paling sering dari pemula adalah berfokus pada teknologi canggih atau fitur sebanyak mungkin (*feature-driven*), bukan pada nilai manfaat yang diterima pengguna (*value-driven*).

> **Prinsip Utama:** Nilai (*Value*) tercipta saat sebuah produk berhasil mempermudah hidup pengguna atau menyelesaikan masalah mendesak yang mereka hadapi.

#### Karakteristik Mindset Value-Driven:
* **Solve The Problem:** Selalu berpegang pada masalah nyata pengguna, bukan ide asumsi sepihak desainer/developer.
* **Agility:** Kemampuan tim untuk bergerak cepat, menerima umpan balik (*feedback*), beradaptasi dengan perubahan, dan terus melakukan iterasi produk.
* **Kegagalan Awal adalah Data:** Setiap kesalahan atau hipotesis yang meleset bukan kerugian mutlak, melainkan data berharga untuk perbaikan produk selanjutnya.`
      },
      {
        id: 's1-2',
        urutan: 2,
        judul: 'Bagian 2: Problem Statement Canvas & Teknik 5 Whys',
        pdfUrl: 'https://drive.google.com/file/d/1ofkBoMKz26NmUddSc5dCT3y7JexVlKnS/preview',
        pdfTitle: 'Slide PPT Modul 1: Problem Canvas & 5 Whys',
        isi: `### 2. Membedah Masalah dengan Problem Statement Canvas
Sebelum membuat antarmuka atau menulis baris kode, tim wajib membedah masalah menggunakan 4 elemen pokok:
1. **Who (Target Pengguna):** Siapa kelompok spesifik yang paling menderita akibat masalah ini? Hindari mendefinisikan pengguna sebagai "semua orang".
2. **Context (When & Where):** Kapan dan di mana masalah tersebut paling sering muncul?
3. **Root Cause (Akar Masalah):** Penyebab terdalam yang memicu timbulnya masalah.
4. **The Gap:** Celah kelemahan dari solusi alternatif yang saat ini digunakan pengguna.

#### Format Rumusan Masalah Standar:
\`\`\`text
"[Target Pengguna] kesulitan saat [Konteks] karena [Akar Masalah], yang berakibat [Dampak Terukur]."
\`\`\`

#### Teknik 5 Whys
Metode mengajukan pertanyaan *"Mengapa?"* secara berulang hingga ditemukan akar terdalam (*root cause*), bukan sekadar mengobati gejala (*symptom*).`
      },
      {
        id: 's1-3',
        urutan: 3,
        judul: 'Referensi Tambahan: Lean Startup & Studi Kasus Kos-Kosan',
        pdfUrl: 'https://drive.google.com/file/d/1ofkBoMKz26NmUddSc5dCT3y7JexVlKnS/preview',
        pdfTitle: 'Slide PPT Modul 1: Lean Startup & Studi Kasus',
        isi: `### 3. Studi Kasus Manajemen Kos-Kosan
**Latar Belakang Kasus:**
Pemilik kos dengan 10–30 kamar yang tidak tinggal di lokasi kesulitan memantau pembayaran sewa bulanan.

* **Solusi Saat Ini:** Mengirim broadcast pesan WhatsApp satu per satu dan mencatat pembayaran di buku manual / Excel.
* **The Gap:** Pesan WA sering diabaikan penyewa, bukti transfer palsu sulit diverifikasi, dan pengecekan mutasi bank manual menyita waktu.
* **Peluang Inovasi MVP:** Sistem notifikasi penagihan otomatis terintegrasi gateway pembayaran instan dan dashboard arus kas transparan.`
      }
    ]
  },
  {
    id: 'c2',
    urutan: 2,
    judul: 'UI/UX & Design Thinking',
    ringkasan: 'Mengupas tuntas anatomi desain produk digital, 5 tahap Design Thinking, kurva 1:10:100, dan studi kasus produk gagal.',
    kategori: 'UI/UX Design',
    estimasiWaktu: '50 Menit',
    level: 'Fondasi',
    icon: 'Palette',
    referensiEksternal: 'Double Diamond Framework, Hukum UX (Hick\'s Law), Studi Kasus Juicero, Windows 8, Google Glass',
    pdfUrl: 'https://drive.google.com/file/d/1Tp17CHNjKtoU0JVsaGZrAZDIMK9JbNGE/preview',
    sections: [
      {
        id: 's2-1',
        urutan: 1,
        judul: 'Bagian 1: Anatomi UI vs UX & Kurva Biaya 1:10:100',
        pdfUrl: 'https://drive.google.com/file/d/1Tp17CHNjKtoU0JVsaGZrAZDIMK9JbNGE/preview',
        pdfTitle: 'Slide PPT Modul 2: Anatomi UI vs UX & Kurva Biaya 1:10:100',
        isi: `### 1. UI vs UX: Apakah Keduanya Hal yang Sama?
Sering disatukan dalam percakapan industri, namun secara fundamental berakar pada dua dimensi ilmu yang sangat berbeda.

#### User Experience (UX):
* **Fokus:** Strategi, psikologi, dan alur pemecahan masalah.
* **Lokasi:** Terjadi di dalam pikiran pengguna (ekspektasi, kebingungan, rasa lega).
* **Misi Inti:** *"Bagaimana cara termudah agar user bisa mencapai tujuannya tanpa harus berpikir keras?"*

#### User Interface (UI):
* **Fokus:** Estetika, desain interaksi, dan identitas merek.
* **Lokasi:** Terjadi di layar perangkat (tata letak, tombol, animasi, warna).
* **Misi Inti:** *"Bagaimana mengatur elemen visual agar mata user terpandu secara instingtif ke aksi yang benar?"*

> **Kurva Biaya Perubahan Desain (1:10:100 Rule):**
> Memperbaiki kesalahan desain setelah aplikasi dirilis adalah **100x lipat lebih mahal** dibanding saat fase riset awal. Validasi ide Anda di hulu sebelum memakan biaya coding besar!`
      },
      {
        id: 's2-2',
        urutan: 2,
        judul: 'Bagian 2: 5 Tahap Design Thinking & Purwarupa Kasar',
        pdfUrl: 'https://drive.google.com/file/d/1Tp17CHNjKtoU0JVsaGZrAZDIMK9JbNGE/preview',
        pdfTitle: 'Slide PPT Modul 2: 5 Tahap Design Thinking & Purwarupa Kasar',
        isi: `### 2. Lima Tahapan Design Thinking

1. **Empathize (Turunkan Ego):** Pahami apa yang benar-benar dirasakan dan menjadi penderitaan pengguna. Observasi langsung kebiasaan dan keluhan di lapangan menggunakan *Empathy Map* (Says, Thinks, Does, Feels). Perhatikan inkonsistensi (misal: user mengaku aplikasinya mudah, tapi diam-diam mencatat password di *sticky notes*).
2. **Define:** Rumuskan akar permasalahan psikologis secara spesifik dan tajam.
3. **Ideate:** Momen untuk *brainstorming* sebebas mungkin. Jangan tolak ide aneh, karena seringkali inovasi disruptif lahir dari ide yang awalnya terdengar gila.
4. **Prototype (Purwarupa Kasar):** Buat representasi murah (sketsa kertas atau *wireframe* hitam-putih).
5. **Test:** Langsung ujikan ke target audiens. Jangan cari pujian, tapi carilah di mana pengguna merasa kebingungan.

> **Mengapa Wajib Purwarupa Kasar Terlebih Dahulu?**
> Banyak desainer pemula langsung membuat desain resolusi tinggi (*high-fidelity*) yang indah. Ini adalah jebakan! Gunakan sketsa murah agar kalian tidak terjebak **Bias Biaya Tertanam (Sunk Cost Bias / "Baper")** atau merasa keberatan membuang desain yang memakan waktu lama saat pengguna meminta perombakan total.`
      },
      {
        id: 's2-3',
        urutan: 3,
        judul: 'Bagian 3: Studi Kasus Produk Gagal & Dosa Besar Desainer',
        pdfUrl: 'https://drive.google.com/file/d/1Tp17CHNjKtoU0JVsaGZrAZDIMK9JbNGE/preview',
        pdfTitle: 'Slide PPT Modul 2: Studi Kasus Produk Gagal & Dosa Besar Desainer',
        isi: `### 3. Studi Kasus Produk Berskala Raksasa yang Gagal

* **Juicero ($120M):** Mesin jus canggih ber-WiFi seharga $400 yang gagal total karena memeras kantong jusnya dengan tangan kosong ternyata jauh lebih cepat. Pelajaran: *Over-engineering* tanpa nilai guna nyata adalah pemborosan fatal.
* **Windows 8:** Menghapus tombol "Start" legendaris dan menggantinya dengan layar penuh kotak-kotak. Memaksa pengguna merombak kebiasaan mental secara mendadak berujung kepanikan dan disorientasi massal.
* **Google Glass:** Secara teknis brilian, tapi abai konteks sosial. Kamera kacamata yang selalu menyala memicu kekhawatiran privasi di ruang publik hingga dilarang di berbagai bioskop dan restoran.

#### 4 Dosa Besar Desainer Pemula:
1. **Mendesain Untuk Diri Sendiri:** Terlalu terobsesi pada selera artistik pribadi dan mengabaikan apa yang sebenarnya dipahami target pengguna.
2. **Terbiasa "Lorem Ipsum":** Mengisi *wireframe* dengan teks palsu asal-asalan, sehingga saat konten riil dimasukkan, tata letak antarmuka hancur berantakan.
3. **Terlalu Banyak Opsi (Hick's Law):** Menghujani pengguna dengan belasan tombol pilihan di satu layar yang memicu kelumpuhan analisis (*analysis paralysis*).
4. **Estetika Membunuh Fungsi:** Terlalu banyak efek visual, bayangan tebal, dan gradasi warna ramai hingga menenggelamkan tombol fungsi utama yang seharusnya diklik pengguna.`
      }
    ]
  },
  {
    id: 'c3',
    urutan: 3,
    judul: 'User Research & Persona',
    ringkasan: 'Metode riset kualitatif & kuantitatif, teknik wawancara bebas leading question, User Persona, dan Journey Map.',
    kategori: 'UI/UX Design',
    estimasiWaktu: '55 Menit',
    level: 'Intermediate',
    icon: 'Users',
    referensiEksternal: 'Empathy Map (Says, Thinks, Does, Feels), User Journey Mapping, Wawancara 3-5 Responden',
    sections: [
      {
        id: 's3-1',
        urutan: 1,
        judul: 'Bagian 1: Riset Kualitatif vs Kuantitatif',
        isi: `### Memilih Pendekatan Riset Pengguna
* **Kualitatif:** Menggali motivasi, alasan, dan rasa frustrasi mendalam melalui wawancara terbuka 3–5 pengguna. Menjawab pertanyaan *"Mengapa"* dan *"Bagaimana"*.
* **Kuantitatif:** Mengumpulkan data numerik dan statistik dari responden berskala besar untuk membuktikan hipotesis secara terukur. Menjawab pertanyaan *"Berapa banyak"*.

#### Leading Question (Pertanyaan Mengarahkan)
Hindari pertanyaan seperti *"Aplikasi ini sangat mudah digunakan, bukan?"* karena menciptakan bias konfirmasi. Gunakan pertanyaan netral: *"Bagaimana pengalaman Anda saat mencoba menyelesaikan proses pembayaran?"*.`
      },
      {
        id: 's3-2',
        urutan: 2,
        judul: 'Bagian 2: User Persona & Empathy Map',
        isi: `### Empathy Map & User Persona
* **Empathy Map:** Memetakan apa yang pengguna **Katakan (Says)**, **Pikirkan (Thinks)**, **Lakukan (Does)**, dan **Rasakan (Feels)**, serta membedah titik sakit (*Pain*) dan harapan (*Gain*).
* **User Persona:** Karakter arketipe fiktif berbasis data riset nyata yang mewakili segmen pengguna utama tim.`
      },
      {
        id: 's3-3',
        urutan: 3,
        judul: 'Referensi Tambahan: User Journey Map',
        isi: `### Memetakan Perjalanan Pengguna
User Journey Map menggambarkan tahapan kronologis interaksi pengguna dengan produk, mengidentifikasi titik emosi frustrasi (*pain points*), dan membuka peluang peningkatan layanan (*opportunities*).`
      }
    ]
  },
  {
    id: 'c4',
    urutan: 4,
    judul: 'Wireframing & User Flow',
    ringkasan: 'Information Architecture (IA), pola baca F-Pattern & Z-Pattern, prinsip Proximity, Contrast, dan Crazy 8s.',
    kategori: 'UI/UX Design',
    estimasiWaktu: '60 Menit',
    level: 'Intermediate',
    icon: 'Layers',
    referensiEksternal: 'Pilar Information Architecture, Pola Scan F/Z, Flowchart Simbol (Terminator, Process, Decision)',
    sections: [
      {
        id: 's4-1',
        urutan: 1,
        judul: 'Bagian 1: Information Architecture & Pola Membaca',
        isi: `### Information Architecture (IA)
4 Pilar IA:
1. **Organization System:** Mengelompokkan informasi secara terstruktur.
2. **Labeling System:** Menamai menu dan tombol agar mudah dipahami secara intuitif.
3. **Navigation System:** Jalur berpindah antar halaman atau fitur.
4. **Search System:** Membantu pengguna menemukan konten spesifik dengan cepat.

#### Pola Scan Mata Pengguna:
* **F-Pattern:** Pola membaca artikel atau halaman kaya teks panjang.
* **Z-Pattern:** Pola memindai landing page visual dengan titik fokus CTA di pojok kanan atas dan bawah.`
      },
      {
        id: 's4-2',
        urutan: 2,
        judul: 'Bagian 2: Wireframing & Prinsip Desain',
        isi: `### Wireframing & Prinsip Gestalt
* **Proximity:** Elemen yang saling terkait ditempatkan berdekatan agar dipahami sebagai satu kesatuan.
* **Contrast:** Menonjolkan elemen kritis (seperti tombol aksi utama) dibanding elemen sekunder.
* **Crazy 8s:** Metode sketsa cepat 8 variasi tata letak dalam waktu 8 menit untuk memicu kreativitas.`
      },
      {
        id: 's4-3',
        urutan: 3,
        judul: 'Referensi Tambahan: User Flow & Happy Path',
        isi: `### Notasi Flowchart & Pencegahan Dead End
* **Terminator:** Awal/akhir alur.
* **Process:** Langkah kerja pengguna.
* **Decision:** Percabangan logika kondisi (misal: "Apakah formulir lengkap?").
* **Pencegahan Dead End:** Pastikan setiap langkah memiliki opsi aksi lanjutan yang jelas bagi pengguna.`
      }
    ]
  },
  {
    id: 'c5',
    urutan: 5,
    judul: 'UI & Prototyping',
    ringkasan: 'Low-Fidelity vs High-Fidelity prototype, komponen form interaktif, CTA, dan prinsip Test Early, Learn Fast.',
    kategori: 'UI/UX Design',
    estimasiWaktu: '50 Menit',
    level: 'Intermediate',
    icon: 'Smartphone',
    referensiEksternal: 'Figma Interaction Links, Anatomy of Form Components, Mobile-first touch targets',
    sections: [
      {
        id: 's5-1',
        urutan: 1,
        judul: 'Bagian 1: Lo-Fi vs Hi-Fi Prototype',
        isi: `### Level Kesetiaan Prototipe
* **Low-Fidelity:** Kerangka sketsa sederhana berfokus pada alur dan tata letak tanpa warna atau grafis mendetail.
* **High-Fidelity:** Tampilan menyerupai produk akhir dengan interaktivitas penuh, transisi, dan visual autentik.`
      },
      {
        id: 's5-2',
        urutan: 2,
        judul: 'Bagian 2: Komponen Interaktif & CTA',
        isi: `### Anatomi Komponen UI
* **Call To Action (CTA):** Tombol yang memandu pengguna mengambil tindakan penting (misal: "Daftar Sekarang", "Mulai Ujian").
* **Form Inputs:** Input text, Radio Button (pilihan tunggal ringkas), Dropdown (banyak opsi hemat ruang), Checkbox (pilihan jamak).`
      },
      {
        id: 's5-3',
        urutan: 3,
        judul: 'Referensi Tambahan: Test Early, Learn Fast',
        isi: `### Filosofi Pengujian Cepat
Semakin dini cacat desain ditemukan dalam bentuk prototipe, semakin murah biaya perbaikannya dibandingkan jika baru ditemukan saat tahap coding akhir.`
      }
    ]
  },
  {
    id: 'c6',
    urutan: 6,
    judul: 'HTML Dasar & Semantik',
    ringkasan: 'Struktur dokumen HTML5, tag semantik (article, header, main), aksesibilitas atribut alt, dan WCAG 1.4.3.',
    kategori: 'Web Development',
    estimasiWaktu: '45 Menit',
    level: 'Fondasi',
    icon: 'Code2',
    referensiEksternal: 'W3C HTML5 Specification, WCAG 2.1 AA Contrast Ratio (4.5:1), Semantic Accessibility',
    sections: [
      {
        id: 's6-1',
        urutan: 1,
        judul: 'Bagian 1: Struktur Dasar HTML5 & Elemen Root',
        isi: `### Struktur Dokumen HTML5
\`\`\`html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Judul Dokumen</title>
</head>
<body>
  <h1>Konten Utama</h1>
</body>
</html>
\`\`\`
* \`<!DOCTYPE html>\`: Memberi instruksi ke browser bahwa dokumen menggunakan standar HTML5.
* \`<html>\`: Root element pembungkus seluruh halaman.
* \`<head>\`: Menyimpan metadata yang tidak tampak langsung di halaman.
* \`<body>\`: Seluruh konten visual yang ditampilkan ke pengguna.`
      },
      {
        id: 's6-2',
        urutan: 2,
        judul: 'Bagian 2: HTML Semantik vs Div Soup',
        isi: `### Mengapa HTML Semantik Penting?
Elemen semantik seperti \`<header>\`, \`<nav>\`, \`<main>\`, \`<article>\`, \`<section>\`, dan \`<footer>\` memberikan makna struktural bagi mesin perayap SEO dan pembaca layar disabilitas (*screen reader*).
Hindari penggunaan elemen \`<div>\` secara berlebihan untuk semua elemen (*div soup*).`
      },
      {
        id: 's6-3',
        urutan: 3,
        judul: 'Referensi Tambahan: Aksesibilitas WCAG & Atribut Alt',
        isi: `### Aksesibilitas Web (WCAG 1.4.3)
* **Atribut alt pada gambar:** Wajib diisi deskripsi bermakna agar pengguna tunanetra yang mengandalkan screen reader dapat memahami konteks gambar.
* **Rasio Kontras Teks:** Minimal 4.5:1 untuk teks normal dan 3:1 untuk teks besar agar mudah dibaca di layar dengan pencahayaan rendah.`
      }
    ]
  },
  {
    id: 'c7',
    urutan: 7,
    judul: 'PRD, AI, Git Kolaborasi & Slicing Desain',
    ringkasan: 'Format User Story, Acceptance Criteria, alur Git kolaboratif (PR & conflict), Design Token, dan Mobile-First.',
    kategori: 'Engineering & Workflow',
    estimasiWaktu: '65 Menit',
    level: 'Intermediate',
    icon: 'GitPullRequest',
    referensiEksternal: 'Git Feature Branch Workflow, Pull Request & Code Review Etiquette, Design Tokens in Tailwind',
    sections: [
      {
        id: 's7-1',
        urutan: 1,
        judul: 'Bagian 1: PRD, User Story, & Acceptance Criteria',
        isi: `### Fondasi Keselarasan Tim
* **PRD (Product Requirement Document):** Dokumen tunggal acuan seluruh tim agar tidak terjadi miskomunikasi spesifikasi.
* **Format User Story:** *"Sebagai [jenis pengguna], saya ingin [fitur/kebutuhan], sehingga saya dapat [manfaat/tujuan]."*
* **Acceptance Criteria (AC):** Standar kondisi teruji yang harus dipenuhi sebelum sebuah tugas dianggap selesai (*Definition of Done*).`
      },
      {
        id: 's7-2',
        urutan: 2,
        judul: 'Bagian 2: Alur Kolaborasi Git & Code Review',
        isi: `### Git Branch & Pull Request (PR)
* Selalu buat branch fitur baru terpisah dari branch utama: \`git checkout -b feature/login-page\`.
* Lakukan Pull Request (PR) untuk mendiskusikan perubahan kode dan meminta review rekan sebelum di-*merge*.
* Hindari \`git push --force\` di branch kolaboratif karena dapat menimpa pekerjaan rekan tim.`
      },
      {
        id: 's7-3',
        urutan: 3,
        judul: 'Referensi Tambahan: Slicing Desain & Mobile-First',
        isi: `### Slicing Desain ke Komponen
* Menerjemahkan tata letak Figma menjadi komponen kode terisolasi dan dapat digunakan ulang (*reusable*).
* **Pendekatan Mobile-First:** Rancang antarmuka untuk layar HP terlebih dahulu (360px) lalu perluas secara modular ke layar desktop.`
      }
    ]
  },
  {
    id: 'c8',
    urutan: 8,
    judul: 'Integrasi Data Dinamis',
    ringkasan: 'BaaS Supabase, 5 UI States (Idle, Loading, Success, Error, Empty), Debounce, AbortController, RLS, DOMPurify.',
    kategori: 'Web Development',
    estimasiWaktu: '70 Menit',
    level: 'Advanced',
    icon: 'Database',
    referensiEksternal: 'PostgreSQL Row Level Security, Sanitasi XSS DOMPurify, Debounce Hook, AbortController',
    sections: [
      {
        id: 's8-1',
        urutan: 1,
        judul: 'Bagian 1: Backend as a Service & 5 UI States',
        isi: `### Mengelola 5 Kondisi Antarmuka (UI States)
1. **Idle:** Kondisi awal sebelum request dimulai.
2. **Loading:** Menampilkan indikator proses (seperti skeleton loader).
3. **Success:** Data berhasil diterima dan dirender sempurna.
4. **Error:** Kegagalan koneksi atau server dengan pesan pemulihan ramah pengguna.
5. **Empty:** Data kosong / belum ada riwayat dengan ajakan bertindak (*CTA*).`
      },
      {
        id: 's8-2',
        urutan: 2,
        judul: 'Bagian 2: Optimasi Request: Debounce & AbortController',
        isi: `### Menjaga Performa & Menghindari Race Condition
* **Debounce:** Menunda eksekusi request pencarian hingga pengguna berhenti mengetik selama sekian milidetik, mencegah pemborosan request server.
* **AbortController:** Membatalkan request API sebelumnya yang belum selesai saat pengguna melakukan aksi baru.`
      },
      {
        id: 's8-3',
        urutan: 3,
        judul: 'Referensi Tambahan: Keamanan Web (RLS & XSS Sanitasi)',
        isi: `### Aspek Keamanan Data
* **Row Level Security (RLS):** Kebijakan database yang memastikan pengguna hanya bisa mengakses baris data miliknya sendiri.
* **DOMPurify:** Membersihkan konten HTML dari potensi injeksi script berbahaya (*Cross-Site Scripting / XSS*).`
      }
    ]
  },
  {
    id: 'c9',
    urutan: 9,
    judul: 'Usability Testing & Sprint Perbaikan',
    ringkasan: 'Metode Think-Aloud, aturan 5 pengguna Nielsen, Microsoft Clarity heatmap & rage click, metrik SEQ, dan GitHub Issues.',
    kategori: 'UI/UX & Quality',
    estimasiWaktu: '60 Menit',
    level: 'Advanced',
    icon: 'Sparkles',
    referensiEksternal: 'Nielsen Norman 5 User Rule, Think-Aloud Protocol, Session Replays, Single Ease Question (SEQ)',
    sections: [
      {
        id: 's9-1',
        urutan: 1,
        judul: 'Bagian 1: Metodologi Usability Testing & Think-Aloud',
        isi: `### Menguji Antarmuka ke Pengguna Nyata
* **Aturan 5 Pengguna Nielsen:** 5 penguji mampu menemukan hingga 85% masalah kegunaan produk.
* **Metode Think-Aloud:** Penguji diminta menyuarakan apa yang sedang dipikirkan, dirasakan, dan dibingungkan saat mencoba menyelesaikan tugas.
* **Prinsip No Guidance:** Fasilitator dilarang membantu atau mengarahkan pengguna selama pengetesan agar hasil pengamatan valid.`
      },
      {
        id: 's9-2',
        urutan: 2,
        judul: 'Bagian 2: Analisis Perilaku Pengguna dengan Heatmap',
        isi: `### Alat Analitik Perilaku (Microsoft Clarity)
* **Heatmap:** Peta visual area yang paling sering diklik atau dilihat pengguna.
* **Session Replay:** Rekaman video interaksi kursor pengguna secara anonim.
* **Rage Click:** Perilaku pengguna mengklik tombol secara bertubi-tubi karena frustrasi tombol tidak segera merespons.`
      },
      {
        id: 's9-3',
        urutan: 3,
        judul: 'Referensi Tambahan: Metrik SEQ & Triase Bug',
        isi: `### Mengukur Kemudahan Tugas
* **Single Ease Question (SEQ):** Pertanyaan berskala 1–7 setelah pengguna menyelesaikan skenario tugas: *"Seberapa mudah tugas ini diselesaikan?"*.
* **Triase Bug:** Mengklasifikasikan masalah ke dalam tingkat Kritis, Mayor, Minor, dan Kosmetik.`
      }
    ]
  },
  {
    id: 'c10',
    urutan: 10,
    judul: 'Audit Kualitas Web & Showcase Portofolio',
    ringkasan: 'Audit Google Lighthouse, Core Web Vitals (LCP, INP, CLS), sanitasi keamanan dasar (.env & HTTPS), dan studi kasus portofolio.',
    kategori: 'Engineering & Career',
    estimasiWaktu: '60 Menit',
    level: 'Advanced',
    icon: 'Award',
    referensiEksternal: 'Google Lighthouse Audit >= 90, Core Web Vitals (LCP <= 2.5s, INP <= 200ms, CLS <= 0.1), Case Study Structure',
    sections: [
      {
        id: 's10-1',
        urutan: 1,
        judul: 'Bagian 1: Google Lighthouse & Core Web Vitals',
        isi: `### Metrik Kualitas Google Lighthouse
Audit otomatis 4 pilar utama:
1. **Performance:** Kecepatan rendering halaman.
2. **Accessibility:** Keterbacaan dan kepatuhan WCAG bagi pengguna difabel.
3. **Best Practices:** Keamanan standar web (HTTPS, script aman).
4. **SEO:** Kemudahan halaman diindeks oleh Google.

#### 3 Indikator Core Web Vitals:
* **LCP (Largest Contentful Paint) <= 2.5 detik:** Kecepatan pemuatan elemen visual utama terbesar.
* **INP (Interaction to Next Paint) <= 200 ms:** Kecepatan respon interaksi terhadap klik pengguna.
* **CLS (Cumulative Layout Shift) <= 0.1:** Stabilitas tata letak halaman saat loading.`
      },
      {
        id: 's10-2',
        urutan: 2,
        judul: 'Bagian 2: Praktik Keamanan Dasar Web',
        isi: `### Menjaga Keamanan Aplikasi
* **File .env:** Tempat menyimpan rahasia konfigurasi (API Keys, kredensial database). Jangan pernah mengunggah file \`.env\` ke public repository GitHub!
* **Protokol HTTPS:** Mengenkripsi transmisi data antara browser pengguna dan server.`
      },
      {
        id: 's10-3',
        urutan: 3,
        judul: 'Referensi Tambahan: Menyusun Case Study Portofolio',
        isi: `### Struktur Case Study Profesional
Rekruter industri lebih menyukai portofolio berbasis pemecahan masalah (*Problem Solving*) dibandingkan sekadar screenshot antarmuka:
1. **Overview:** Ringkasan proyek, durasi, peran, dan tantangan utama.
2. **Discovery:** Riset pengguna dan identifikasi masalah mendasar.
3. **Engineering:** Keputusan arsitektur teknis dan implementasi kode.
4. **Testing:** Hasil usability testing dan temuan audit performa.
5. **Impact:** Dampak terukur dan pencapaian produk.`
      }
    ]
  }
];

/**
 * Bank Soal per Modul & Paket (Set A, B, C)
 * Mengacu langsung pada Lampiran Resmi PRD (halaman 13 - 163)
 */
export const MOCK_QUESTIONS = {
  // ================= MODUL 1 (Mindset Startup & Problem Solving) =================
  c1: {
    A: [
      // 10 Pilihan Ganda (Set A) - Diperketat dengan pengecoh konseptual & variasi kunci (A, B, C, D tersebar)
      {
        id: 'q1-A-1',
        urutan: 1,
        topik: 'Startup Mindset',
        tipe: 'pilihan_ganda',
        teks: 'Dalam konteks pengembangan produk startup digital, manakah pernyataan berikut yang paling tepat membedakan pendekatan Value-Driven dari pendekatan Feature-Driven?',
        options: [
          { id: 'opt-1', teks: 'Value-Driven mengukur keberhasilan produk dari tingginya angka durasi waktu yang dihabiskan pengguna di dalam aplikasi, sedangkan Feature-Driven mengukurnya dari kecepatan rilis versi baru.' },
          { id: 'opt-2', teks: 'Value-Driven fokus mewujudkan seluruh daftar permintaan fitur yang diajukan pengguna pada survei, sedangkan Feature-Driven fokus mengimplementasikan ide inovatif internal tim pendiri.' },
          { id: 'opt-3', teks: 'Value-Driven berpusat pada seberapa efektif produk menuntaskan pain point dan mempermudah hidup pengguna, sedangkan Feature-Driven berfokus pada kuantitas fitur serta adopsi tren teknologi terkini.' },
          { id: 'opt-4', teks: 'Value-Driven memprioritaskan fitur-fitur yang langsung menghasilkan arus kas (monetization-first), sedangkan Feature-Driven memprioritaskan fitur gratis untuk memperbesar basis pengguna.' }
        ],
        kunciJawaban: 'opt-3',
        pembahasan: 'Value-Driven selalu berfokus pada nilai guna nyata dan pemecahan masalah (pain point) pengguna, bukan sekadar memperbanyak fitur canggih atau menuruti seluruh permintaan tanpa validasi masalah.'
      },
      {
        id: 'q1-A-2',
        urutan: 2,
        topik: 'Startup Mindset',
        tipe: 'pilihan_ganda',
        teks: 'Sebelum menyetujui penambahan fitur baru ke dalam roadmap produk, pertanyaan validasi paling mendasar yang wajib diajukan tim menurut pola pikir startup adalah...',
        options: [
          { id: 'opt-1', teks: 'Apakah fitur ini secara spesifik memangkas friksi terbesar pengguna dan menyelesaikan masalah mendesak yang belum teratasi dengan baik?' },
          { id: 'opt-2', teks: 'Apakah fitur ini memiliki keunikan teknologi mutakhir yang belum diimplementasikan oleh kompetitor utama di pasar saat ini?' },
          { id: 'opt-3', teks: 'Berapa proyeksi peningkatan metrik pendaftaran akun baru (acquisition rate) jika fitur ini berhasil diluncurkan pada sprint berikutnya?' },
          { id: 'opt-4', teks: 'Apakah mayoritas responden kuesioner awal menyatakan berminat mencoba jika fitur ini nanti dirilis ke publik?' }
        ],
        kunciJawaban: 'opt-1',
        pembahasan: 'Pertanyaan inti startup berpusat pada nilai guna (value): apakah fitur memangkas friksi nyata atau mengatasi pain point mendesak pengguna, bukan sekadar keunikan teknologi atau klaim minat verbal.'
      },
      {
        id: 'q1-A-3',
        urutan: 3,
        topik: 'Problem Solving',
        tipe: 'pilihan_ganda',
        teks: 'Sebuah startup merilis aplikasi dengan desain antarmuka modern dan transisi animasi mulus, namun tingkat retensi pengguna (30-day retention) anjlok drastis ke angka 5%. Berdasarkan prinsip "Solve The Problem", diagnosa akar masalah yang paling tepat adalah...',
        options: [
          { id: 'opt-1', teks: 'Alur onboarding aplikasi dirancang terlalu ringkas sehingga pengguna belum sempat mengeksplorasi seluruh modul dan menu canggih yang tersedia.' },
          { id: 'opt-2', teks: 'Tim pengembang belum menyematkan mekanisme gamifikasi seperti lencana penghargaan (badges) dan sistem streak harian untuk memicu adiksi pengguna.' },
          { id: 'opt-3', teks: 'Segmen target pengguna yang disasar belum memiliki tingkat literasi digital yang memadai untuk mengoperasikan kecanggihan arsitektur antarmuka.' },
          { id: 'opt-4', teks: 'Aplikasi hanya memikat rasa penasaran estetika di awal, namun gagal memberikan solusi atas masalah nyata yang berulang kali dihadapi pengguna dalam aktivitas mereka.' }
        ],
        kunciJawaban: 'opt-4',
        pembahasan: 'Prinsip "Solve The Problem" menegaskan bahwa keindahan visual tidak akan mempertahankan pengguna jika aplikasi tidak memecahkan masalah riil yang berulang dalam kehidupan mereka.'
      },
      {
        id: 'q1-A-4',
        urutan: 4,
        topik: 'Agility',
        tipe: 'pilihan_ganda',
        teks: 'Bagaimanakah penerapan prinsip Agility yang paling tepat ketika fitur baru yang telah dikembangkan selama berbulan-bulan terbukti sangat jarang digunakan oleh pengguna berdasarkan data analitik?',
        options: [
          { id: 'opt-1', teks: 'Memindahkan posisi tombol fitur tersebut ke bagian paling atas layar utama (hero section) agar memperoleh impresi dan visibilitas maksimal.' },
          { id: 'opt-2', teks: 'Menerima kenyataan data secara objektif tanpa bias ego, mencari tahu alasan mendasar penolakan pengguna, dan berani menghentikan (deprecate) atau merombak fitur tersebut.' },
          { id: 'opt-3', teks: 'Memberikan insentif voucer atau hadiah kepada pengguna setiap kali mengakses fitur tersebut untuk membiasakan adopsi secara bertahap.' },
          { id: 'opt-4', teks: 'Mempertahankan fitur di sistem sembari menunggu pengguna terbiasa, mengingat alokasi waktu dan biaya rekayasa yang dihabiskan tim sudah sangat besar.' }
        ],
        kunciJawaban: 'opt-2',
        pembahasan: 'Penerapan Agility menuntut keterbukaan terhadap data empiris, tidak terjebak sunk cost fallacy atau manipulasi insentif buatan, serta berani mengeliminasi fitur yang tidak bernilai.'
      },
      {
        id: 'q1-A-5',
        urutan: 5,
        topik: 'Validasi Masalah',
        tipe: 'pilihan_ganda',
        teks: 'Dalam metodologi startup, mengapa kegagalan saat menguji hipotesis produk di fase awal dipandang sebagai sebuah "keberhasilan pembelajaran (validated learning)", bukan kerugian mutlak?',
        options: [
          { id: 'opt-1', teks: 'Karena kegagalan membuktikan kepada pihak pemodal bahwa tim telah mengambil risiko inovasi ekstrem dengan keberanian penuh.' },
          { id: 'opt-2', teks: 'Karena setiap ide fitur yang gagal dapat segera dipatenkan agar tidak ditiru atau dimanfaatkan oleh entitas kompetitor lain.' },
          { id: 'opt-3', teks: 'Karena data penolakan pengguna di awal secara cepat menyelamatkan tim dari pemborosan waktu, tenaga, dan modal ratusan juta untuk membangun produk yang tidak diinginkan pasar.' },
          { id: 'opt-4', teks: 'Karena kegagalan eksperimen otomatis memverifikasi bahwa infrastruktur arsitektur backend tim engineering telah bebas dari celah bug fungsional.' }
        ],
        kunciJawaban: 'opt-3',
        pembahasan: 'Validated learning memandang data kegagalan awal sebagai penyelamat sumber daya (waktu, modal, tenaga) sebelum terlanjur membangun produk skala besar yang ditolak pasar.'
      },
      {
        id: 'q1-A-6',
        urutan: 6,
        topik: 'Problem-Solution Fit',
        tipe: 'pilihan_ganda',
        teks: 'Mengapa melakukan ekspansi agresif (scaling tim & anggaran pemasaran besar-besaran) sebelum mencapai Problem-Solution Fit dianggap sebagai penyebab kematian utama bagi startup tahap awal (premature scaling)?',
        options: [
          { id: 'opt-1', teks: 'Mempercepat pertumbuhan pada produk yang belum terbukti menyelesaikan masalah hanya akan mempercepat kehabisan kas (burn rate) untuk mendatangkan pengguna yang pada akhirnya pasti pergi.' },
          { id: 'opt-2', teks: 'Tim pengembang belum sempat merapikan arsitektur basis data dan standarisasi code review untuk menyambut penambahan programmer baru.' },
          { id: 'opt-3', teks: 'Lonjakan trafik pengguna baru secara tiba-tiba akan otomatis menurunkan akurasi model data science dan algoritma rekomendasi aplikasi.' },
          { id: 'opt-4', teks: 'Persentase kepemilikan saham pendiri (cap table) akan terdilusi terlalu cepat oleh investor sebelum valuasi perusahaan mencapai fase optimal.' }
        ],
        kunciJawaban: 'opt-1',
        pembahasan: 'Premature scaling (membakar modal & pemasaran sebelum Problem-Solution Fit) adalah penyebab utama kematian startup karena mempercepat pengurasan kas tanpa retensi produk yang solid.'
      },
      {
        id: 'q1-A-7',
        urutan: 7,
        topik: 'Problem Statement Canvas',
        tipe: 'pilihan_ganda',
        teks: 'Pada perumusan Problem Statement Canvas, tim sering kali tergoda mendefinisikan elemen "Who" (Target Pengguna) dengan cakupan seluas mungkin, misalnya "Semua orang yang menggunakan smartphone". Mengapa pola ini merupakan jebakan berbahaya?',
        options: [
          { id: 'opt-1', teks: 'Biaya kampanye iklan digital bertarget luas memiliki tarif per klik (CPC) yang jauh lebih fluktuatif dibanding target demografi umur tertentu.' },
          { id: 'opt-2', teks: 'Perangkat analitik modern tidak sanggup mengelompokkan data aktivitas pengguna jika kriteria profesi dan rentang penghasilan tidak dibatasi ketat.' },
          { id: 'opt-3', teks: 'Pengguna lintas generasi memiliki preferensi sistem operasi seluler yang berbeda-beda sehingga menyulitkan optimasi kode frontend.' },
          { id: 'opt-4', teks: 'Kebutuhan dan urgensi setiap kelompok pengguna berbeda; jika target ditujukan untuk semua orang, masalah menjadi kabur dan solusi yang dibangun justru tidak relevan bagi siapa pun.' }
        ],
        kunciJawaban: 'opt-4',
        pembahasan: 'Elemen "Who" harus spesifik. Target yang terlalu umum ("semua orang") membuat tim kehilangan fokus urgensi masalah, sehingga produk berakhir tidak memuaskan siapa pun.'
      },
      {
        id: 'q1-A-8',
        urutan: 8,
        topik: 'Teknik 5 Whys',
        tipe: 'pilihan_ganda',
        teks: 'Perhatikan studi kasus: "Penyewa kos sering terlambat membayar sewa bulanan". Jika pengelola kos hanya berhenti pada kesimpulan awal dan langsung membangun aplikasi dengan notifikasi alarm harian, mengapa solusi ini kemungkinan besar gagal berdasarkan teknik 5 Whys?',
        options: [
          { id: 'opt-1', teks: 'Penyewa kos modern umumnya lebih merespons pengingat berbasis panggilan otomatis daripada notifikasi kalender atau alarm internal aplikasi.' },
          { id: 'opt-2', teks: 'Pemilik kos hanya mengobati gejala luar (symptom kelupaan), padahal akar masalah sebenarnya (root cause) bisa berupa ketidaksesuaian siklus tanggal gajian atau friksi metode transfer perbankan.' },
          { id: 'opt-3', teks: 'Pengiriman notifikasi alarm harian berisiko memicu resistensi psikologis penyewa yang berpotensi menurunkan tingkat perpanjangan sewa kamar.' },
          { id: 'opt-4', teks: 'Pengelola kos belum menerapkan skema penalti denda keterlambatan harian yang cukup agresif untuk memaksa kedisiplinan pembayaran.' }
        ],
        kunciJawaban: 'opt-2',
        pembahasan: 'Teknik 5 Whys membedah lapisan masalah hingga menemukan akar penyebab sejati (misal: siklus keuangan / metode bayar), bukan sekadar menambal gejala permukaan (lupa tanggal).'
      },
      {
        id: 'q1-A-9',
        urutan: 9,
        topik: 'Problem Statement Canvas',
        tipe: 'pilihan_ganda',
        teks: 'Dalam Problem Statement Canvas, mengapa pemahaman mendalam mengenai elemen "The Gap" (kelemahan atau celah dari solusi alternatif yang saat ini digunakan pengguna) menjadi fondasi penentu diferensiasi produk?',
        options: [
          { id: 'opt-1', teks: 'Pengguna hanya akan bersedia beralih (switch) ke produk baru jika produk tersebut menawarkan keunggulan nilai yang nyata dan melompati friksi dari solusi atau kebiasaan lama mereka.' },
          { id: 'opt-2', teks: 'Pemahaman The Gap memberikan celah hukum hak cipta untuk membatasi ruang gerak pengembangan produk oleh kompetitor incumbent.' },
          { id: 'opt-3', teks: 'Tim dapat langsung mereplikasi seluruh antarmuka kompetitor dan hanya menambahkan beberapa opsi filter sortir tambahan.' },
          { id: 'opt-4', teks: 'The Gap menjadi indikator utama untuk menetapkan harga jual langganan agar selalu berada tepat di bawah harga rata-rata kompetitor.' }
        ],
        kunciJawaban: 'opt-1',
        pembahasan: 'The Gap mengidentifikasi celah ketidakpuasan dari alternatif solusi saat ini. Nilai baru yang melompati celah itulah yang memicu pengguna mau beralih ke produk baru kita.'
      },
      {
        id: 'q1-A-10',
        urutan: 10,
        topik: 'Problem Statement Canvas',
        tipe: 'pilihan_ganda',
        teks: 'Manakah rumusan kalimat masalah di bawah ini yang paling disiplin dan tepat dalam menerapkan struktur baku Problem Statement Canvas?',
        options: [
          { id: 'opt-1', teks: 'Aplikasi kami menyediakan platform agregator terintegrasi dengan kecerdasan buatan agar pengguna dapat memangkas pengeluaran bulanan hingga 30%.' },
          { id: 'opt-2', teks: 'Generasi muda Indonesia membutuhkan literasi keuangan modern karena saat ini tingkat tabungan darurat masyarakat masih berada di bawah standar ideal.' },
          { id: 'opt-3', teks: '[Mahasiswa perantau] kesulitan [mengelola pengeluaran harian] saat [minggu pertama menerima kiriman uang] karena [ketiadaan sistem alokasi pos dana otomatis], yang mengakibatkan [kehabisan uang saku sebelum pertengahan bulan].' },
          { id: 'opt-4', teks: '[Tim engineering] terkendala [mengintegrasikan payment gateway] karena [dokumentasi teknis penyedia layanan belum lengkap], yang berdampak pada [penundaan jadwal rilis produk dua minggu].' }
        ],
        kunciJawaban: 'opt-3',
        pembahasan: 'Format baku Problem Statement Canvas yang tepat adalah: [Target Pengguna] kesulitan saat [Konteks] karena [Akar Masalah], yang berakibat pada [Dampak Terukur]. Opsi 1 adalah promosi solusi, Opsi 2 terlalu makro/abstrak, dan Opsi 4 adalah kendala teknis internal.'
      },

      // 5 Soal Essay Studi Kasus (Set A) - Dipermudah & To The Point Sesuai Slide PDF
      {
        id: 'q1-A-11',
        urutan: 11,
        topik: 'Problem Statement Canvas',
        tipe: 'essay',
        teks: 'Sebutkan 4 elemen pokok yang terdapat di dalam Problem Statement Canvas sesuai materi slide!',
        kunciJawabanIdeal: '4 elemen pokok Problem Statement Canvas: 1. Who (Target Pengguna), 2. Context (Konteks kapan & di mana), 3. Root Cause (Akar Masalah), 4. The Gap (Celah kelemahan alternatif saat ini).',
        keywords: ['who', 'context', 'root cause', 'gap', 'pengguna', 'konteks', 'akar masalah', 'celah']
      },
      {
        id: 'q1-A-12',
        urutan: 12,
        topik: 'Teknik 5 Whys',
        tipe: 'essay',
        teks: 'Secara singkat, apa tujuan utama dari teknik 5 Whys dalam membedah masalah produk?',
        kunciJawabanIdeal: 'Tujuan utama teknik 5 Whys adalah untuk menemukan akar masalah terdalam (root cause), bukan sekadar mengobati gejala permukaan (symptom).',
        keywords: ['akar masalah', 'root cause', 'gejala', 'symptom', 'mengapa', 'whys']
      },
      {
        id: 'q1-A-13',
        urutan: 13,
        topik: 'Startup Mindset',
        tipe: 'essay',
        teks: 'Jelaskan perbedaan singkat antara pola pikir Value-Driven dan Feature-Driven!',
        kunciJawabanIdeal: 'Value-Driven berfokus pada manfaat nyata dan pemecahan masalah pengguna, sedangkan Feature-Driven hanya berfokus pada memperbanyak fitur atau kecanggihan teknologi.',
        keywords: ['manfaat', 'pengguna', 'fitur', 'masalah', 'nilai', 'value']
      },
      {
        id: 'q1-A-14',
        urutan: 14,
        topik: 'Problem Statement',
        tipe: 'essay',
        teks: 'Tuliskan rumus kalimat standar dalam menyusun Problem Statement sesuai slide materi!',
        kunciJawabanIdeal: '[Target Pengguna] kesulitan saat [Konteks] karena [Akar Masalah], yang berakibat [Dampak Terukur].',
        keywords: ['pengguna', 'konteks', 'akar masalah', 'dampak', 'kesulitan', 'akibat']
      },
      {
        id: 'q1-A-15',
        urutan: 15,
        topik: 'Agility & Validasi',
        tipe: 'essay',
        teks: 'Mengapa kegagalan awal dalam startup dianggap sebagai data berharga dan bukan kerugian mutlak?',
        kunciJawabanIdeal: 'Karena kegagalan awal memberikan umpan balik (feedback) dan data nyata untuk melakukan evaluasi, iterasi, serta perbaikan produk berikutnya.',
        keywords: ['feedback', 'umpan balik', 'iterasi', 'perbaikan', 'evaluasi', 'data']
      }
    ],

    // Set B (Percobaan ke-2)
    B: [
      {
        id: 'q1-B-1',
        urutan: 1,
        topik: 'Problem Solving',
        tipe: 'pilihan_ganda',
        teks: 'Strategi AI yang paling tepat digunakan untuk merumuskan pain point pengguna adalah...',
        options: [
          { id: 'opt-1', teks: 'Data Mining Otomatis' },
          { id: 'opt-2', teks: 'Prompt Engineering terstruktur' },
          { id: 'opt-3', teks: 'Web Hosting Serverless' },
          { id: 'opt-4', teks: 'Cloud Computing' }
        ],
        kunciJawaban: 'opt-2',
        pembahasan: 'Prompt engineering yang terstruktur membantu mensimulasikan wawancara dan menggali pain points.'
      },
      {
        id: 'q1-B-2',
        urutan: 2,
        topik: 'Analisis Kompetitor',
        tipe: 'pilihan_ganda',
        teks: 'Analisis kompetitor pada tahap perumusan masalah bertujuan untuk menemukan...',
        options: [
          { id: 'opt-1', teks: 'Harga produk termurah di pasar' },
          { id: 'opt-2', teks: 'Celah kebutuhan pengguna yang belum dipenuhi kompetitor' },
          { id: 'opt-3', teks: 'Total modal usaha terbesar' },
          { id: 'opt-4', teks: 'Cara menyalin kode sumber kompetitor' }
        ],
        kunciJawaban: 'opt-2',
        pembahasan: 'Tujuan utama analisis kompetitor adalah mencari the gap (celah pasar).'
      },
      {
        id: 'q1-B-3',
        urutan: 3,
        topik: 'Startup Mindset',
        tipe: 'pilihan_ganda',
        teks: 'UVP merupakan singkatan dari...',
        options: [
          { id: 'opt-1', teks: 'User Validation Process' },
          { id: 'opt-2', teks: 'Unique Value Proposition' },
          { id: 'opt-3', teks: 'User Value Product' },
          { id: 'opt-4', teks: 'Unique Verification Point' }
        ],
        kunciJawaban: 'opt-2',
        pembahasan: 'UVP adalah Unique Value Proposition, pembeda nilai unik produk dibanding alternatif lain.'
      },
      {
        id: 'q1-B-4',
        urutan: 4,
        topik: 'Problem Solving',
        tipe: 'pilihan_ganda',
        teks: 'Penggunaan peran AI sebagai "Devil’s Advocate" berfungsi untuk...',
        options: [
          { id: 'opt-1', teks: 'Mendesain layout antarmuka' },
          { id: 'opt-2', teks: 'Mengkritisi ide dan menguji asumsi secara skeptis' },
          { id: 'opt-3', teks: 'Menjual produk ke konsumen' },
          { id: 'opt-4', teks: 'Mengatur relasi database' }
        ],
        kunciJawaban: 'opt-2',
        pembahasan: 'Devil’s Advocate bertugas mencari kelemahan dan lubang asumsi dari ide produk.'
      },
      {
        id: 'q1-B-5',
        urutan: 5,
        topik: 'Anatomi Masalah',
        tipe: 'pilihan_ganda',
        teks: 'Unsur "Who" dalam anatomi rumusan masalah merujuk pada...',
        options: [
          { id: 'opt-1', teks: 'Penyandang dana (investor)' },
          { id: 'opt-2', teks: 'Kompetitor terbesar' },
          { id: 'opt-3', teks: 'Kelompok target pengguna spesifik' },
          { id: 'opt-4', teks: 'Tim developer internal' }
        ],
        kunciJawaban: 'opt-3',
        pembahasan: 'Who adalah target audiens spesifik yang paling menderita akibat masalah.'
      },
      {
        id: 'q1-B-6',
        urutan: 6,
        topik: 'Anatomi Masalah',
        tipe: 'pilihan_ganda',
        teks: 'Definisi target pengguna yang baik dan terarah adalah...',
        options: [
          { id: 'opt-1', teks: 'Semua orang pengguna internet' },
          { id: 'opt-2', teks: 'Kelompok spesifik yang paling merasakan dampak masalah' },
          { id: 'opt-3', teks: 'Seluruh masyarakat Indonesia' },
          { id: 'opt-4', teks: 'Pengguna media sosial' }
        ],
        kunciJawaban: 'opt-2',
        pembahasan: 'Segmentasi spesifik membuat solusi lebih tajam dan terfokus.'
      },
      {
        id: 'q1-B-7',
        urutan: 7,
        topik: 'Pain Point',
        tipe: 'pilihan_ganda',
        teks: 'Istilah "Pain Point" dalam perancangan produk berarti...',
        options: [
          { id: 'opt-1', teks: 'Target pasar' },
          { id: 'opt-2', teks: 'Biaya operasional' },
          { id: 'opt-3', teks: 'Titik masalah atau frustrasi yang dialami pengguna' },
          { id: 'opt-4', teks: 'Strategi harga jual' }
        ],
        kunciJawaban: 'opt-3',
        pembahasan: 'Pain point adalah kesulitan nyata atau frustrasi yang menghambat pengguna.'
      },
      {
        id: 'q1-B-8',
        urutan: 8,
        topik: 'Jobs to be Done',
        tipe: 'pilihan_ganda',
        teks: 'Kerangka "Jobs to be Done" (JTBD) menjelaskan tentang...',
        options: [
          { id: 'opt-1', teks: 'Tugas spesifik yang ingin diselesaikan oleh pengguna' },
          { id: 'opt-2', teks: 'Daftar tugas harian tim programmer' },
          { id: 'opt-3', teks: 'Kewajiban investor kepada startup' },
          { id: 'opt-4', teks: 'Rencana promosi pemasaran' }
        ],
        kunciJawaban: 'opt-1',
        pembahasan: 'JTBD menjelaskan pekerjaan yang ingin dituntaskan pengguna dengan bantuan produk.'
      },
      {
        id: 'q1-B-9',
        urutan: 9,
        topik: 'Konteks Masalah',
        tipe: 'pilihan_ganda',
        teks: 'Unsur Konteks (When & Where) dalam rumusan masalah menjelaskan...',
        options: [
          { id: 'opt-1', teks: 'Alamat kantor pusat startup' },
          { id: 'opt-2', teks: 'Situasi dan momen spesifik yang memicu timbulnya masalah' },
          { id: 'opt-3', teks: 'Lokasi pertemuan investor' },
          { id: 'opt-4', teks: 'Tempat promosi baliho produk' }
        ],
        kunciJawaban: 'opt-2',
        pembahasan: 'Konteks memetakan kondisi saat masalah tersebut terjadi.'
      },
      {
        id: 'q1-B-10',
        urutan: 10,
        topik: 'Root Cause',
        tipe: 'pilihan_ganda',
        teks: 'Metode yang efektif digunakan untuk menggali hingga ke akar masalah adalah...',
        options: [
          { id: 'opt-1', teks: 'Analisis SWOT' },
          { id: 'opt-2', teks: 'Lean Canvas' },
          { id: 'opt-3', teks: 'Metode 5 Whys' },
          { id: 'opt-4', teks: 'Benchmarking visual' }
        ],
        kunciJawaban: 'opt-3',
        pembahasan: '5 Whys menggali lapisan demi lapisan sebab hingga ke akar terdalam.'
      },

      // 5 Essay Set B
      {
        id: 'q1-B-11',
        urutan: 11,
        topik: 'Inovasi Produk',
        tipe: 'essay',
        teks: 'Bagaimana keluhan pelanggan dapat diubah menjadi sumber inovasi berharga bagi startup?',
        kunciJawabanIdeal: 'Keluhan pelanggan menunjukkan hambatan dan masalah nyata yang dialami pengguna saat memakai solusi yang ada. Data tersebut dapat diubah menjadi ide fitur baru, peningkatan kualitas produk, dan penemuan celah pasar yang belum dipenuhi kompetitor.',
        keywords: ['keluhan pelanggan', 'masalah nyata', 'peluang inovasi', 'kebutuhan pengguna', 'perbaikan produk']
      },
      {
        id: 'q1-B-12',
        urutan: 12,
        topik: 'Problem Statement Canvas',
        tipe: 'essay',
        teks: 'Jelaskan fungsi dan manfaat dari Problem Statement Canvas bagi tim produk!',
        kunciJawabanIdeal: 'Problem Statement Canvas adalah alat untuk mendefinisikan, menganalisis, dan membedah masalah pengguna secara terstruktur sehingga tim dapat mengidentifikasi akar masalah, dampak terukur, konteks kejadian, dan peluang solusi yang tepat.',
        keywords: ['alat analisis', 'masalah pengguna', 'terstruktur', 'akar masalah', 'peluang solusi']
      },
      {
        id: 'q1-B-13',
        urutan: 13,
        topik: 'Problem Solving',
        tipe: 'essay',
        teks: 'Sebutkan dan jelaskan empat strategi riset menggunakan AI Prompting!',
        kunciJawabanIdeal: 'Empat strategi AI Prompting yaitu: 1. AI sebagai Market Researcher (memetakan data tren pasar), 2. AI sebagai Interview Simulator (mensimulasikan calon responden), 3. AI sebagai Competitor Analyst (menganalisis kelebihan/kekurangan lawan), dan 4. AI sebagai Devil’s Advocate (menguji dan mengkritisi kelemahan asumsi tim).',
        keywords: ['market researcher', 'interview simulator', 'competitor analyst', 'devil advocate']
      },
      {
        id: 'q1-B-14',
        urutan: 14,
        topik: 'Root Cause',
        tipe: 'essay',
        teks: 'Jelaskan perbedaan mendasar antara Pain Point dan Root Cause!',
        kunciJawabanIdeal: 'Pain Point adalah gejala, keluhan, atau kesulitan langsung yang dirasakan oleh pengguna di permukaan, sedangkan Root Cause adalah akar penyebab utama terdalam yang melahirkan timbulnya keluhan tersebut.',
        keywords: ['pain point', 'gejala masalah', 'root cause', 'penyebab utama', 'akar masalah']
      },
      {
        id: 'q1-B-15',
        urutan: 15,
        topik: 'Anatomi Masalah',
        tipe: 'essay',
        teks: 'Mengapa target pengguna dalam perancangan produk tidak boleh didefinisikan sebagai "semua orang"?',
        kunciJawabanIdeal: 'Karena kebutuhan dan masalah setiap kelompok pengguna berbeda. Target yang terlalu luas membuat solusi menjadi bias, tidak fokus, dan sulit divalidasi, sedangkan segmentasi spesifik membantu menciptakan solusi yang tajam dan tepat sasaran.',
        keywords: ['segmentasi', 'spesifik', 'fokus', 'kebutuhan berbeda', 'target pengguna']
      }
    ]
  },

  // ================= MODUL 2 (UI/UX & Design Thinking) =================
  c2: {
    A: [
      // 10 Pilihan Ganda (Set A) - Berdasarkan Slide "Week 2 UI/UX Design Thinking"
      {
        id: 'q2-A-1',
        urutan: 1,
        topik: 'UI vs UX',
        tipe: 'pilihan_ganda',
        teks: 'Manakah pernyataan berikut yang paling tepat membedakan esensi fokus antara User Experience (UX) dan User Interface (UI) berdasarkan materi slide?',
        options: [
          { id: 'opt-1', teks: 'UX berfokus pada pemilihan palet warna dan tipografi tombol, sedangkan UI berfokus pada penulisan kode logika di server backend.' },
          { id: 'opt-2', teks: 'UX berfokus pada strategi, psikologi, dan alur pemecahan masalah di pikiran pengguna, sedangkan UI berfokus pada estetika visual, tata letak, dan panduan instingtif di layar.' },
          { id: 'opt-3', teks: 'UX mengukur seberapa banyak animasi interaktif yang disematkan, sedangkan UI mengukur kecepatan render grafis kartu komponen.' },
          { id: 'opt-4', teks: 'UX hanya dikerjakan oleh tim manajemen produk, sedangkan UI sepenuhnya menjadi wewenang tim pemasaran digital.' }
        ],
        kunciJawaban: 'opt-2',
        pembahasan: 'UX berakar pada strategi dan psikologi di dalam pikiran pengguna (mencapai tujuan tanpa berpikir keras), sedangkan UI berfokus pada elemen visual di layar (memandu mata pengguna secara instingtif).'
      },
      {
        id: 'q2-A-2',
        urutan: 2,
        topik: 'Kurva Biaya Desain',
        tipe: 'pilihan_ganda',
        teks: 'Menurut prinsip kurva biaya perubahan desain "1:10:100 Rule", mengapa tim produk digital sangat ditekankan memvalidasi ide di fase hulu (riset) sebelum coding?',
        options: [
          { id: 'opt-1', teks: 'Karena investor ventura hanya bersedia mencairkan 1% dana pendanaan jika tim langsung memulai proses pemrograman tanpa berkas desain lengkap.' },
          { id: 'opt-2', teks: 'Karena rasio keterbacaan kontras warna UI wajib memenuhi standar 100:1 agar tidak dikenai sanksi hukum pelanggaran aksesibilitas.' },
          { id: 'opt-3', teks: 'Karena setiap perubahan arsitektur basis data relasional membutuhkan waktu migrasi tepat 100 jam kerja insinyur software.' },
          { id: 'opt-4', teks: 'Karena biaya dan beban perbaikan kesalahan desain yang baru ditemukan setelah aplikasi dirilis 100 kali lipat lebih mahal dibanding saat fase riset awal.' }
        ],
        kunciJawaban: 'opt-4',
        pembahasan: 'Aturan 1:10:100 menegaskan bahwa memperbaiki kesalahan desain di tahap pasca-rilis menelan biaya 100x lipat lebih mahal dibanding memperbaikinya saat fase riset hulu.'
      },
      {
        id: 'q2-A-3',
        urutan: 3,
        topik: 'Purwarupa Kasar',
        tipe: 'pilihan_ganda',
        teks: 'Mengapa desainer pemula sangat diperingatkan agar tidak langsung membuat purwarupa resolusi tinggi (high-fidelity) yang mulus di awal proses desain?',
        options: [
          { id: 'opt-1', teks: 'Untuk menghindari jebakan bias biaya tertanam (Sunk Cost Bias) atau "baper", sehingga tim tidak keberatan membuang dan merombak total desain saat diuji ke pengguna.' },
          { id: 'opt-2', teks: 'Karena piranti lunak desain modern mengenakan biaya lisensi tambahan per piksel untuk setiap aset grafis resolusi tinggi yang diekspor.' },
          { id: 'opt-3', teks: 'Karena sketsa kertas otomatis menghasilkan kode komponen HTML dan CSS secara instan melalui pemindaian kamera smartphone.' },
          { id: 'opt-4', teks: 'Karena pengguna awam dilarang melihat warna antarmuka sebelum versi final disetujui secara resmi oleh dewan direksi perusahaan.' }
        ],
        kunciJawaban: 'opt-1',
        pembahasan: 'Purwarupa kasar (sketsa kertas / wireframe hitam-putih) mencegah desainer terjebak rasa "baper" (Sunk Cost Bias) saat desain harus dirombak total berdasarkan umpan balik pengguna.'
      },
      {
        id: 'q2-A-4',
        urutan: 4,
        topik: 'Design Thinking',
        tipe: 'pilihan_ganda',
        teks: 'Saat melakukan observasi pada tahap Empathize, seorang peneliti menemukan bahwa pengguna menyatakan aplikasinya sangat mudah digunakan, namun diam-diam menempelkan sticky notes berisi kata sandi di monitornya. Sikap peneliti yang paling tepat adalah...',
        options: [
          { id: 'opt-1', teks: 'Menyimpulkan bahwa aplikasi sudah sempurna karena pernyataan verbal pengguna secara eksplisit menyebutkan kata "mudah".' },
          { id: 'opt-2', teks: 'Menegur pengguna di tempat karena telah melanggar prosedur standar keamanan siber dengan mencatat kata sandi di kertas.' },
          { id: 'opt-3', teks: 'Mencatat inkonsistensi tersebut sebagai pain point nyata bahwa alur otentikasi saat ini merepotkan dan membebani kognitif pengguna.' },
          { id: 'opt-4', teks: 'Menghapus fitur kata sandi secara sepihak dan menggantinya dengan verifikasi biometrik retina mata tanpa riset lanjutan.' }
        ],
        kunciJawaban: 'opt-3',
        pembahasan: 'Perhatikan inkonsistensi antara apa yang dikatakan dan apa yang dilakukan pengguna (Says vs Does). Mencatat password di sticky notes adalah indikasi nyata bahwa alur login saat ini menyusahkan pengguna.'
      },
      {
        id: 'q2-A-5',
        urutan: 5,
        topik: 'Studi Kasus Juicero',
        tipe: 'pilihan_ganda',
        teks: 'Kasus kegagalan mesin pembuat jus Juicero ($120M) menjadi peringatan monumental di industri produk digital karena startup tersebut melakukan kesalahan fatal berupa...',
        options: [
          { id: 'opt-1', teks: 'Gagal mengamankan pasokan listrik bertegangan tinggi di pabrik manufaktur sehingga produk mengalami korsleting massal.' },
          { id: 'opt-2', teks: 'Melakukan over-engineering teknologi canggih berbiaya mahal untuk menyelesaikan masalah yang ternyata dapat diselesaikan lebih cepat dengan tangan kosong tanpa nilai tambah nyata.' },
          { id: 'opt-3', teks: 'Memilih palet warna kemasan jus yang tidak sesuai dengan tren estetika visual generasi muda perkotaan.' },
          { id: 'opt-4', teks: 'Menolak bekerja sama dengan penyedia kartu kredit internasional untuk pemrosesan transaksi langganan bulanan.' }
        ],
        kunciJawaban: 'opt-2',
        pembahasan: 'Juicero membuang $120 juta untuk mesin jus canggih ber-WiFi yang kantongnya ternyata bisa diperas pakai tangan kosong. Pelajaran: Jangan over-engineering solusi yang tidak memberi nilai tambah nyata.'
      },
      {
        id: 'q2-A-6',
        urutan: 6,
        topik: 'Studi Kasus Windows 8',
        tipe: 'pilihan_ganda',
        teks: 'Mengapa keputusan antarmuka pada Windows 8 yang menghapus tombol "Start" ikonik memicu penolakan dan kegagalan massal di kalangan pengguna desktop?',
        options: [
          { id: 'opt-1', teks: 'Karena merombak kebiasaan mental pengguna secara drastis tanpa mempertimbangkan konteks alur kerja desktop, memicu kepanikan dan disorientasi massal.' },
          { id: 'opt-2', teks: 'Karena ikon tombol Start yang baru memiliki resolusi grafis yang terlalu tajam sehingga menyilaukan mata pengguna di malam hari.' },
          { id: 'opt-3', teks: 'Karena sistem operasi tersebut secara otomatis menghapus seluruh dokumen kerja pengguna setiap kali sistem di-restart.' },
          { id: 'opt-4', teks: 'Karena pengembang pihak ketiga diwajibkan membayar royalti setiap kali memanggil API tombol Start di aplikasi mereka.' }
        ],
        kunciJawaban: 'opt-1',
        pembahasan: 'Menghapus tombol Start memaksa pengguna desktop merombak mental model kebiasaan mereka secara mendadak, berujung pada kebingungan dan penolakan pasar yang masif.'
      },
      {
        id: 'q2-A-7',
        urutan: 7,
        topik: 'Studi Kasus Google Glass',
        tipe: 'pilihan_ganda',
        teks: 'Pelajaran desain produk paling berharga dari kegagalan komersial Google Glass di ruang publik adalah...',
        options: [
          { id: 'opt-1', teks: 'Kacamata pintar wajib dilengkapi panel tenaga surya agar pengguna tidak perlu mengisi daya melalui stopkontak.' },
          { id: 'opt-2', teks: 'Desain kacamata harus dibuat dari bahan logam mulia agar dianggap sebagai produk mewah oleh kolektor barang antik.' },
          { id: 'opt-3', teks: 'Kecanggihan teknologi mutakhir akan ditolak jika abai terhadap konteks sosial, etika privasi publik, dan kenyamanan lingkungan sekitar pengguna.' },
          { id: 'opt-4', teks: 'Perangkat keras kamera seluler dilarang keras dioperasikan pada sistem operasi berbasis Linux open-source.' }
        ],
        kunciJawaban: 'opt-3',
        pembahasan: 'Google Glass secara teknis sangat brilian, namun gagal karena mengabaikan konteks sosial di mana kamera yang selalu menyala memicu kekhawatiran privasi orang-orang di sekitarnya.'
      },
      {
        id: 'q2-A-8',
        urutan: 8,
        topik: 'Hukum Hick',
        tipe: 'pilihan_ganda',
        teks: 'Menurut Hukum Hick (Hick\'s Law), mengapa menjejalkan belasan tombol pilihan aksi di dalam satu layar antarmuka merupakan "dosa besar" dalam desain UI/UX?',
        options: [
          { id: 'opt-1', teks: 'Karena browser web akan mengalami penurunan frame rate secara drastis jika jumlah tombol di halaman melebihi sepuluh buah.' },
          { id: 'opt-2', teks: 'Karena algoritma Google Search Console akan mengidentifikasi halaman tersebut sebagai spam tautan duplikat.' },
          { id: 'opt-3', teks: 'Karena pengguna smartphone bertangan kidal tidak sanggup menjangkau tombol yang berada di sisi kanan layar.' },
          { id: 'opt-4', teks: 'Karena semakin banyak opsi yang disajikan, semakin lama waktu yang dibutuhkan pengguna untuk mengambil keputusan hingga memicu kelumpuhan analisis (analysis paralysis).' }
        ],
        kunciJawaban: 'opt-4',
        pembahasan: 'Hick\'s Law menyatakan bahwa waktu yang dibutuhkan untuk mengambil keputusan meningkat seiring bertambahnya jumlah dan kompleksitas pilihan, yang dapat memicu analysis paralysis.'
      },
      {
        id: 'q2-A-9',
        urutan: 9,
        topik: 'Jebakan Lorem Ipsum',
        tipe: 'pilihan_ganda',
        teks: 'Mengapa kebiasaan mengisi wireframe menggunakan teks palsu "Lorem Ipsum" secara asal-asalan dianggap sebagai jebakan berbahaya bagi desainer pemula?',
        options: [
          { id: 'opt-1', teks: 'Karena teks Lorem Ipsum secara otomatis memicu sanksi pelanggaran hak cipta literatur klasik berbahasa Latin.' },
          { id: 'opt-2', teks: 'Karena saat konten riil dengan panjang kalimat nyata dimasukkan, proporsi tata letak antarmuka sering kali hancur berantakan dan membingungkan pengguna.' },
          { id: 'opt-3', teks: 'Karena teks palsu menyebabkan ukuran file bundle JavaScript frontend membengkak hingga puluhan megabyte.' },
          { id: 'opt-4', teks: 'Karena mesin penerjemah otomatis akan gagal mengenali bahasa default aplikasi saat diunggah ke cloud hosting.' }
        ],
        kunciJawaban: 'opt-2',
        pembahasan: 'Teks Lorem Ipsum yang seragam menipu proporsi desain. Ketika teks asli dimasukkan (judul panjang, deskripsi variatif), tata letak sering rusak dan tata baca menjadi tidak intuitif.'
      },
      {
        id: 'q2-A-10',
        urutan: 10,
        topik: 'Estetika vs Fungsi',
        tipe: 'pilihan_ganda',
        teks: 'Fenomena "Estetika Membunuh Fungsi" dalam desain produk digital terjadi ketika...',
        options: [
          { id: 'opt-1', teks: 'Desainer terlalu terobsesi pada efek visual ramai, gradasi mencolok, dan bayangan tebal hingga menenggelamkan tombol fungsi utama yang seharusnya diklik pengguna.' },
          { id: 'opt-2', teks: 'Aplikasi menggunakan font sistem bawaan perangkat alih-alih membeli lisensi font kustom berbayar seharga ribuan dolar.' },
          { id: 'opt-3', teks: 'Warna latar belakang antarmuka menggunakan mode gelap (dark mode) pada waktu siang hari.' },
          { id: 'opt-4', teks: 'Desainer menggunakan format gambar vektor SVG alih-alih format bitmap JPEG beresolusi tinggi.' }
        ],
        kunciJawaban: 'opt-1',
        pembahasan: 'Estetika membunuh fungsi terjadi saat dekorasi visual yang berlebihan justru mengaburkan hierarki aksi utama yang dibutuhkan pengguna.'
      },

      // 5 Soal Essay Studi Kasus (Set A) - Berdasarkan Slide "Week 2 UI/UX Design Thinking"
      {
        id: 'q2-A-11',
        urutan: 11,
        topik: 'Misi Inti UX vs UI',
        tipe: 'essay',
        teks: 'Jelaskan secara singkat perbedaan misi inti antara UX (User Experience) dan UI (User Interface) sesuai materi slide!',
        kunciJawabanIdeal: 'UX berfokus pada cara termudah agar pengguna mencapai tujuannya tanpa harus berpikir keras (psikologi & alur), sedangkan UI berfokus pada mengatur elemen visual agar mata pengguna terpandu secara instingtif ke aksi yang benar (estetika & tata letak layar).',
        keywords: ['ux', 'ui', 'psikologi', 'estetika', 'alur', 'visual', 'tata letak', 'berpikir keras', 'instingtif', 'layar', 'pikiran']
      },
      {
        id: 'q2-A-12',
        urutan: 12,
        topik: 'Kurva Biaya 1:10:100',
        tipe: 'essay',
        teks: 'Apa arti aturan "1:10:100 Rule" dalam siklus perubahan desain produk digital?',
        kunciJawabanIdeal: 'Memperbaiki kesalahan desain setelah aplikasi dirilis 100x lipat lebih mahal dibandingkan saat fase riset awal (1x di hulu riset, 10x saat pengembangan/coding, 100x setelah rilis). Validasi di awal menghemat biaya besar.',
        keywords: ['100x', '100', 'riset', 'rilis', 'hulu', 'biaya', 'mahal', 'coding']
      },
      {
        id: 'q2-A-13',
        urutan: 13,
        topik: 'Tahapan Design Thinking',
        tipe: 'essay',
        teks: 'Sebutkan 5 tahapan dalam alur Design Thinking secara berurutan!',
        kunciJawabanIdeal: '5 tahap Design Thinking: 1. Empathize (Memahami pengguna), 2. Define (Merumuskan masalah), 3. Ideate (Menghasilkan ide), 4. Prototype (Membuat purwarupa kasar), 5. Test (Menguji ke pengguna).',
        keywords: ['empathize', 'define', 'ideate', 'prototype', 'test']
      },
      {
        id: 'q2-A-14',
        urutan: 14,
        topik: 'Purwarupa Kasar',
        tipe: 'essay',
        teks: 'Mengapa desainer pemula dianjurkan membuat purwarupa kasar (low-fidelity / sketsa kertas) terlebih dahulu sebelum mendesain versi resolusi tinggi?',
        kunciJawabanIdeal: 'Agar terhindar dari bias biaya tertanam (Sunk Cost Bias / rasa baper) sehingga tim tidak merasa keberatan membuang atau merombak total desain saat pengguna meminta perbaikan.',
        keywords: ['sunk cost', 'baper', 'biaya tertanam', 'rombak', 'membuang', 'kasar', 'cepat', 'murah']
      },
      {
        id: 'q2-A-15',
        urutan: 15,
        topik: 'Studi Kasus Produk Gagal',
        tipe: 'essay',
        teks: 'Jelaskan secara singkat pelajaran penting dari studi kasus kegagalan produk Juicero!',
        kunciJawabanIdeal: 'Jangan membuat produk yang over-engineering dengan teknologi canggih berbiaya mahal jika tidak memberikan nilai tambah nyata atau menyelesaikan masalah lebih baik dibanding cara manual tangan kosong.',
        keywords: ['over-engineering', 'nilai tambah', 'nilai guna', 'tangan kosong', 'manual', 'mahal', 'canggih']
      }
    ]
  }
};

/**
 * In-memory / LocalStorage State Manager
 * Mengatur Progressive Gating, Attempt History, dan Cooldown Timer
 */
const STORAGE_KEY_PROGRESS = 'vinix7_progress_state';
const STORAGE_KEY_ATTEMPTS = 'vinix7_attempts_state';

export function getStoredProgress() {
  const raw = localStorage.getItem(STORAGE_KEY_PROGRESS);
  if (raw) {
    try {
      return JSON.parse(raw);
    } catch (e) {
      console.error('Error parsing progress:', e);
    }
  }

  // Initial State: Course 1 terbuka, course 2-10 terkunci
  const initial = {
    c1: { status: 'unlocked', bagianSelesai: [], nilaiTerbaik: 0 },
    c2: { status: 'locked', bagianSelesai: [], nilaiTerbaik: 0 },
    c3: { status: 'locked', bagianSelesai: [], nilaiTerbaik: 0 },
    c4: { status: 'locked', bagianSelesai: [], nilaiTerbaik: 0 },
    c5: { status: 'locked', bagianSelesai: [], nilaiTerbaik: 0 },
    c6: { status: 'locked', bagianSelesai: [], nilaiTerbaik: 0 },
    c7: { status: 'locked', bagianSelesai: [], nilaiTerbaik: 0 },
    c8: { status: 'locked', bagianSelesai: [], nilaiTerbaik: 0 },
    c9: { status: 'locked', bagianSelesai: [], nilaiTerbaik: 0 },
    c10: { status: 'locked', bagianSelesai: [], nilaiTerbaik: 0 }
  };
  localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(initial));
  return initial;
}

export function saveStoredProgress(progress) {
  localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(progress));
}

export function getStoredAttempts() {
  const raw = localStorage.getItem(STORAGE_KEY_ATTEMPTS);
  if (raw) {
    try {
      return JSON.parse(raw);
    } catch (e) {
      console.error('Error parsing attempts:', e);
    }
  }
  return [];
}

export function saveStoredAttempts(attempts) {
  localStorage.setItem(STORAGE_KEY_ATTEMPTS, JSON.stringify(attempts));
}
