// back-end/src/data/modules/sections3to10.js
const now = () => new Date().toISOString();

export const sections3to10 = [
  // ═══════ Modul 3: User Research & Persona ═══════
  {
    id: 's0000003-0000-0000-0000-000000000001',
    course_id: 'c0000003-0000-0000-0000-000000000003',
    urutan: 1,
    judul: 'Bagian 1: Riset Kualitatif vs Kuantitatif & Teknik Wawancara',
    isi: `### 1. Kualitatif vs Kuantitatif\n* **Riset Kualitatif:** Menggali alasan, motivasi, dan perilaku mendalam melalui wawancara dan observasi (3–5 responden).\n* **Riset Kuantitatif:** Mengukur pola dan statistik dalam skala besar melalui survei atau analitik.\n\n> **Hindari Leading Question:** Jangan mengarahkan jawaban pengguna seperti *"Aplikasi ini mudah, bukan?"*. Gunakan pertanyaan terbuka: *"Ceritakan pengalaman terakhir Anda saat..."*`,
    pdf_url: null,
    pdf_title: 'Slide PPT Modul 3: User Research Methods',
    created_at: now()
  },
  {
    id: 's0000003-0000-0000-0000-000000000002',
    course_id: 'c0000003-0000-0000-0000-000000000003',
    urutan: 2,
    judul: 'Bagian 2: Empathy Map, User Persona & User Journey Map',
    isi: `### 2. Artefak Sintesis Riset\n* **Empathy Map:** Memetakan apa yang pengguna katakan (*Says*), pikirkan (*Thinks*), rasakan (*Feels*), dan lakukan (*Does*), beserta *Pain* & *Gain*.\n* **User Persona:** Profil fiktif berbasis data riset nyata yang mewakili segmen pengguna utama.\n* **User Journey Map:** Visualisasi langkah demi langkah perjalanan pengguna untuk menemukan titik friksi (*pain points*) dan peluang perbaikan.`,
    pdf_url: null,
    pdf_title: 'Slide PPT Modul 3: Persona & Journey Map',
    created_at: now()
  },

  // ═══════ Modul 4: Wireframing & User Flow ═══════
  {
    id: 's0000004-0000-0000-0000-000000000001',
    course_id: 'c0000004-0000-0000-0000-000000000004',
    urutan: 1,
    judul: 'Bagian 1: Information Architecture (IA) & Pola Baca Visual',
    isi: `### 1. Empat Pilar Information Architecture\n1. **Organization System:** Pengelompokan informasi secara logis.\n2. **Labeling System:** Penamaan menu dan kategori yang mudah dipahami.\n3. **Navigation System:** Cara pengguna berpindah antar halaman.\n4. **Search System:** Fasilitas pencarian cepat.\n\n#### Pola Pindai Mata Pengguna:\n* **F-Pattern:** Cocok untuk halaman kaya teks seperti artikel.\n* **Z-Pattern:** Cocok untuk *landing page* sederhana dengan fokus CTA utama.`,
    pdf_url: null,
    pdf_title: 'Slide PPT Modul 4: Information Architecture',
    created_at: now()
  },
  {
    id: 's0000004-0000-0000-0000-000000000002',
    course_id: 'c0000004-0000-0000-0000-000000000004',
    urutan: 2,
    judul: 'Bagian 2: User Flow, Edge Cases & Metode Crazy 8s',
    isi: `### 2. Merancang Alur & Wireframe\n* **User Flow:** Diagram langkah pengguna mencapai tujuan menggunakan simbol *Terminator* (awal/akhir), *Process* (aktivitas), dan *Decision* (percabangan kondisi).\n* **Happy Path vs Edge Case:** Rancang jalur ideal sekaligus skenario galat (misal: gagal login, data kosong) agar tidak terjadi *Dead End*.\n* **Crazy 8s:** Teknik sketsa 8 alternatif tata letak dalam 8 menit untuk eksplorasi cepat.`,
    pdf_url: null,
    pdf_title: 'Slide PPT Modul 4: User Flow & Wireframing',
    created_at: now()
  },

  // ═══════ Modul 5: UI & Prototyping ═══════
  {
    id: 's0000005-0000-0000-0000-000000000001',
    course_id: 'c0000005-0000-0000-0000-000000000005',
    urutan: 1,
    judul: 'Bagian 1: Low-Fidelity vs High-Fidelity Prototype',
    isi: `### 1. Tingkatan Fidelity Prototipe\n* **Low-Fidelity (Lo-Fi):** Sketsa kasar untuk menguji alur navigasi dan tata letak dengan biaya minimal.\n* **High-Fidelity (Hi-Fi):** Simulasi interaktif (*clickable prototype*) yang menyerupai produk akhir dari sisi warna, tipografi, dan transisi sebelum masuk tahap *coding*.`,
    pdf_url: null,
    pdf_title: 'Slide PPT Modul 5: UI Prototyping',
    created_at: now()
  },
  {
    id: 's0000005-0000-0000-0000-000000000002',
    course_id: 'c0000005-0000-0000-0000-000000000005',
    urutan: 2,
    judul: 'Bagian 2: Anatomi Komponen Form & Prinsip Test Early, Learn Fast',
    isi: `### 2. Pemilihan Komponen Interaktif\n* **Radio Button:** Memilih 1 opsi dari sedikit pilihan (< 5).\n* **Dropdown:** Memilih 1 opsi dari daftar panjang untuk menghemat ruang layar.\n* **Checkbox:** Memilih lebih dari satu opsi sekaligus.\n* **Toggle Switch:** Mengaktifkan/menonaktifkan pengaturan secara instan.\n\n> **Prinsip Utama:** *Test Early, Learn Fast* — validasi prototipe ke pengguna sedini mungkin sebelum menulis kode produksi.`,
    pdf_url: null,
    pdf_title: 'Slide PPT Modul 5: Komponen UI & Validasi',
    created_at: now()
  },

  // ═══════ Modul 6: HTML Dasar & Semantik ═══════
  {
    id: 's0000006-0000-0000-0000-000000000001',
    course_id: 'c0000006-0000-0000-0000-000000000006',
    urutan: 1,
    judul: 'Bagian 1: Struktur Dokumen HTML5 & Elemen Dasar',
    isi: `### 1. Fondasi Dokumen HTML5\nHTML (*HyperText Markup Language*) adalah bahasa *markup* untuk menyusun struktur halaman web:\n* \`<!DOCTYPE html>\`: Deklarasi standar HTML5.\n* \`<head>\`: Menyimpan metadata (\`<title>\`, \`<meta>\`, *stylesheet*).\n* \`<body>\`: Menyimpan seluruh konten visual yang tampil di layar pengguna.`,
    pdf_url: null,
    pdf_title: 'Slide PPT Modul 6: HTML5 Fundamentals',
    created_at: now()
  },
  {
    id: 's0000006-0000-0000-0000-000000000002',
    course_id: 'c0000006-0000-0000-0000-000000000006',
    urutan: 2,
    judul: 'Bagian 2: HTML Semantik & Standar Aksesibilitas WCAG',
    isi: `### 2. Makna Struktur & Inklusivitas\nGunakan tag semantik seperti \`<header>\`, \`<nav>\`, \`<main>\`, \`<article>\`, dan \`<footer>\` daripada sekadar menumpuk \`<div>\`.\n* **Atribut \`alt\`:** Wajib pada elemen \`<img>\` untuk pembaca layar (*screen reader*).\n* **Kontras WCAG 1.4.3:** Rasio kontras teks normal minimal **4,5:1** agar mudah terbaca.`,
    pdf_url: null,
    pdf_title: 'Slide PPT Modul 6: Semantic HTML & Accessibility',
    created_at: now()
  },

  // ═══════ Modul 7: PRD, AI, Git Kolaborasi & Slicing Desain ═══════
  {
    id: 's0000007-0000-0000-0000-000000000001',
    course_id: 'c0000007-0000-0000-0000-000000000007',
    urutan: 1,
    judul: 'Bagian 1: PRD, User Story & Acceptance Criteria',
    isi: `### 1. Menyelaraskan Tim dengan PRD\n* **User Story:** *"Sebagai [jenis pengguna], saya ingin [fitur], sehingga saya dapat [manfaat]."*\n* **Acceptance Criteria:** Syarat terukur kapan sebuah fitur dinyatakan selesai dan lulus pengujian.\n* **MVP:** Fokus merilis fitur inti terlebih dahulu untuk validasi nyata.`,
    pdf_url: null,
    pdf_title: 'Slide PPT Modul 7: PRD & User Stories',
    created_at: now()
  },
  {
    id: 's0000007-0000-0000-0000-000000000002',
    course_id: 'c0000007-0000-0000-0000-000000000007',
    urutan: 2,
    judul: 'Bagian 2: Alur Git Kolaboratif, Design Token & Mobile-First',
    isi: `### 2. Kolaborasi Kode & Slicing Desain\n* **Git Branch & Pull Request:** Kerjakan fitur di *branch* terpisah, ajukan *Pull Request* untuk *Code Review* sebelum *merge* ke \`main\`, dan hindari \`git push --force\`.\n* **Design Token & Mobile-First:** Gunakan variabel konsisten untuk warna/spasi dan rancang tata letak mulai dari layar mobile (360px) ke desktop.`,
    pdf_url: null,
    pdf_title: 'Slide PPT Modul 7: Git Collaboration & Design Slicing',
    created_at: now()
  },

  // ═══════ Modul 8: Integrasi Data Dinamis ═══════
  {
    id: 's0000008-0000-0000-0000-000000000001',
    course_id: 'c0000008-0000-0000-0000-000000000008',
    urutan: 1,
    judul: 'Bagian 1: BaaS Supabase, 5 UI States & Optimasi Request',
    isi: `### 1. Arsitektur Data Dinamis\n* **5 UI States Wajib:** *Idle*, *Loading* (skeleton), *Success*, *Empty*, dan *Error*.\n* **Debounce & AbortController:** Menunda eksekusi pencarian hingga pengguna berhenti mengetik dan membatalkan *request* usang untuk mencegah *race condition*.`,
    pdf_url: null,
    pdf_title: 'Slide PPT Modul 8: Dynamic Data & UI States',
    created_at: now()
  },
  {
    id: 's0000008-0000-0000-0000-000000000002',
    course_id: 'c0000008-0000-0000-0000-000000000008',
    urutan: 2,
    judul: 'Bagian 2: Keamanan Data RLS & Sanitasi XSS (DOMPurify)',
    isi: `### 2. Keamanan Aplikasi Web\n* **Row Level Security (RLS):** Membatasi hak baca/tulis pada level baris tabel PostgreSQL sesuai identitas pengguna.\n* **Validasi & Sanitasi:** Bersihkan input HTML menggunakan **DOMPurify** dan gunakan \`textContent\` untuk mencegah serangan **Cross-Site Scripting (XSS)**.`,
    pdf_url: null,
    pdf_title: 'Slide PPT Modul 8: RLS & XSS Sanitization',
    created_at: now()
  },

  // ═══════ Modul 9: Usability Testing & Sprint Perbaikan ═══════
  {
    id: 's0000009-0000-0000-0000-000000000001',
    course_id: 'c0000009-0000-0000-0000-000000000009',
    urutan: 1,
    judul: 'Bagian 1: Protokol Think-Aloud & Analisis Perilaku Pengguna',
    isi: `### 1. Evaluasi Kegunaan Nyata\n* **Aturan 5 Pengguna (Nielsen):** Menguji 5 pengguna sudah mampu mengungkap mayoritas masalah usability.\n* **Think-Aloud & No Guidance:** Minta peserta menyuarakan pikirannya tanpa diberi petunjuk arah.\n* **Microsoft Clarity:** Analisis *Heatmap*, *Session Replay*, *Dead Click*, dan *Rage Click*.`,
    pdf_url: null,
    pdf_title: 'Slide PPT Modul 9: Usability Testing Protocol',
    created_at: now()
  },
  {
    id: 's0000009-0000-0000-0000-000000000002',
    course_id: 'c0000009-0000-0000-0000-000000000009',
    urutan: 2,
    judul: 'Bagian 2: Metrik SEQ, Triase Masalah & Sprint Perbaikan',
    isi: `### 2. Pengukuran & Tindak Lanjut Bug\n* **Metrik Utama:** *Task Success Rate* (target 100%), *Time-on-Task*, dan *Single Ease Question (SEQ)* skala 1–7 (target >= 5).\n* **Triase & GitHub Issues:** Kelompokkan temuan berdasarkan urgensi (*Kritis*, *Mayor*, *Minor*, *Kosmetik*) dan selesaikan lewat *Pull Request* yang terhubung dengan issue.`,
    pdf_url: null,
    pdf_title: 'Slide PPT Modul 9: SEQ Metrics & Bug Triage',
    created_at: now()
  },

  // ═══════ Modul 10: Audit Kualitas Web & Showcase Portofolio ═══════
  {
    id: 's0000010-0000-0000-0000-000000000001',
    course_id: 'c0000010-0000-0000-0000-000000000010',
    urutan: 1,
    judul: 'Bagian 1: Audit Google Lighthouse & Core Web Vitals',
    isi: `### 1. Standar Kualitas Produksi\nTarget skor Google Lighthouse minimal **>= 90** pada kategori *Performance*, *Accessibility*, *Best Practices*, dan *SEO*.\n* **LCP (Largest Contentful Paint):** <= 2,5 detik.\n* **INP (Interaction to Next Paint):** <= 200 ms.\n* **CLS (Cumulative Layout Shift):** <= 0,1.`,
    pdf_url: null,
    pdf_title: 'Slide PPT Modul 10: Lighthouse & Core Web Vitals',
    created_at: now()
  },
  {
    id: 's0000010-0000-0000-0000-000000000002',
    course_id: 'c0000010-0000-0000-0000-000000000010',
    urutan: 2,
    judul: 'Bagian 2: Keamanan Dasar Web & Struktur Case Study Portofolio',
    isi: `### 2. Kesiapan Rilis & Showcase Karier\n* **Keamanan Dasar:** Wajib menggunakan enkripsi **HTTPS**, menyimpan kredensial rahasia di file **\`.env\`**, dan melakukan sanitasi input.\n* **5 Bagian Case Study Portofolio:** *Overview*, *Discovery*, *Engineering*, *Testing*, dan *Impact*.`,
    pdf_url: null,
    pdf_title: 'Slide PPT Modul 10: Security & Portfolio Case Study',
    created_at: now()
  }
];