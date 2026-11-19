/**
 * VINIX7 In-Memory Data Store
 * ============================================================
 * Penyimpanan data sementara sebelum kredensial Supabase tersedia.
 * Struktur objek 100% identik dengan skema tabel PostgreSQL/Supabase
 * sehingga migrasi cukup mengganti fungsi akses data di layer services/.
 *
 * Tabel yang dicerminkan (9 tabel sesuai PRD Bagian 11):
 *   users, courses, sections, questions, options,
 *   essay_rubrics, attempts, answers, progress
 * ============================================================
 */

import { v4 as uuidv4 } from 'uuid';
import { modul1SetCOptions, modul1SetCRubrics } from './modules/modul1SetC.js';
import { sections3to10 } from './modules/sections3to10.js';
import { modul2Questions, modul2Options, modul2Rubrics } from './modules/modul2.js';
import { modul3Questions, modul3Options, modul3Rubrics } from './modules/modul3.js';
import { modul4Questions, modul4Options, modul4Rubrics } from './modules/modul4.js';
import { modul5Questions, modul5Options, modul5Rubrics } from './modules/modul5.js';
import { modul6Questions, modul6Options, modul6Rubrics } from './modules/modul6.js';
import { modul7Questions, modul7Options, modul7Rubrics } from './modules/modul7.js';
import { modul8Questions, modul8Options, modul8Rubrics } from './modules/modul8.js';
import { modul9Questions, modul9Options, modul9Rubrics } from './modules/modul9.js';
import { modul10Questions, modul10Options, modul10Rubrics } from './modules/modul10.js';

// ─── Helper ───────────────────────────────────────────────────────────────────
const now = () => new Date().toISOString();

// ─── 1. USERS ─────────────────────────────────────────────────────────────────
// Kolom: id, nama, email, password_hash, avatar_url, created_at, updated_at
export const users = [];

// ─── 2. COURSES ───────────────────────────────────────────────────────────────
// Kolom: id, urutan, judul, ringkasan, kategori, estimasi_waktu, level,
//        icon, referensi_eksternal, pdf_url, created_at, updated_at
export const courses = [
  {
    id: 'c0000001-0000-0000-0000-000000000001',
    urutan: 1,
    judul: 'Mindset Startup & Problem Solving',
    ringkasan: 'Pola pikir value-driven, identifikasi masalah nyata, Problem Statement Canvas, dan metode 5 Whys.',
    kategori: 'Product & Startup',
    estimasi_waktu: '45 Menit',
    level: 'Fondasi',
    icon: 'Lightbulb',
    referensi_eksternal: 'Lean Startup (Eric Ries), MVP Principle, 5 Whys Root Cause Analysis',
    pdf_url: 'https://drive.google.com/file/d/1ofkBoMKz26NmUddSc5dCT3y7JexVlKnS/preview',
    created_at: now(), updated_at: now()
  },
  {
    id: 'c0000002-0000-0000-0000-000000000002',
    urutan: 2,
    judul: 'UI/UX & Design Thinking',
    ringkasan: 'Mengupas tuntas anatomi desain produk digital, 5 tahap Design Thinking, kurva 1:10:100, dan studi kasus produk gagal.',
    kategori: 'UI/UX Design',
    estimasi_waktu: '50 Menit',
    level: 'Fondasi',
    icon: 'Palette',
    referensi_eksternal: "Double Diamond Framework, Hukum UX (Hick's Law), Studi Kasus Juicero, Windows 8, Google Glass",
    pdf_url: 'https://drive.google.com/file/d/1Tp17CHNjKtoU0JVsaGZrAZDIMK9JbNGE/preview',
    created_at: now(), updated_at: now()
  },
  {
    id: 'c0000003-0000-0000-0000-000000000003',
    urutan: 3,
    judul: 'User Research & Persona',
    ringkasan: 'Metode riset kualitatif & kuantitatif, teknik wawancara bebas leading question, User Persona, dan Journey Map.',
    kategori: 'UI/UX Design',
    estimasi_waktu: '55 Menit',
    level: 'Intermediate',
    icon: 'Users',
    referensi_eksternal: 'Empathy Map (Says, Thinks, Does, Feels), User Journey Mapping, Wawancara 3-5 Responden',
    pdf_url: null,
    created_at: now(), updated_at: now()
  },
  {
    id: 'c0000004-0000-0000-0000-000000000004',
    urutan: 4,
    judul: 'Wireframing & User Flow',
    ringkasan: 'Information Architecture (IA), pola baca F-Pattern & Z-Pattern, prinsip Proximity, Contrast, dan Crazy 8s.',
    kategori: 'UI/UX Design',
    estimasi_waktu: '60 Menit',
    level: 'Intermediate',
    icon: 'Layers',
    referensi_eksternal: 'Pilar Information Architecture, Pola Scan F/Z, Flowchart Simbol (Terminator, Process, Decision)',
    pdf_url: null,
    created_at: now(), updated_at: now()
  },
  {
    id: 'c0000005-0000-0000-0000-000000000005',
    urutan: 5,
    judul: 'UI & Prototyping',
    ringkasan: 'Low-Fidelity vs High-Fidelity prototype, komponen form interaktif, CTA, dan prinsip Test Early, Learn Fast.',
    kategori: 'UI/UX Design',
    estimasi_waktu: '50 Menit',
    level: 'Intermediate',
    icon: 'Smartphone',
    referensi_eksternal: 'Figma Interaction Links, Anatomy of Form Components, Mobile-first touch targets',
    pdf_url: null,
    created_at: now(), updated_at: now()
  },
  {
    id: 'c0000006-0000-0000-0000-000000000006',
    urutan: 6,
    judul: 'HTML Dasar & Semantik',
    ringkasan: 'Struktur dokumen HTML5, tag semantik (article, header, main), aksesibilitas atribut alt, dan WCAG 1.4.3.',
    kategori: 'Web Development',
    estimasi_waktu: '45 Menit',
    level: 'Fondasi',
    icon: 'Code2',
    referensi_eksternal: 'W3C HTML5 Specification, WCAG 2.1 AA Contrast Ratio (4.5:1), Semantic Accessibility',
    pdf_url: null,
    created_at: now(), updated_at: now()
  },
  {
    id: 'c0000007-0000-0000-0000-000000000007',
    urutan: 7,
    judul: 'PRD, AI, Git Kolaborasi & Slicing Desain',
    ringkasan: 'Format User Story, Acceptance Criteria, alur Git kolaboratif (PR & conflict), Design Token, dan Mobile-First.',
    kategori: 'Engineering & Workflow',
    estimasi_waktu: '65 Menit',
    level: 'Intermediate',
    icon: 'GitPullRequest',
    referensi_eksternal: 'Git Feature Branch Workflow, Pull Request & Code Review Etiquette, Design Tokens in Tailwind',
    pdf_url: null,
    created_at: now(), updated_at: now()
  },
  {
    id: 'c0000008-0000-0000-0000-000000000008',
    urutan: 8,
    judul: 'Integrasi Data Dinamis',
    ringkasan: 'BaaS Supabase, 5 UI States (Idle, Loading, Success, Error, Empty), Debounce, AbortController, RLS, DOMPurify.',
    kategori: 'Web Development',
    estimasi_waktu: '70 Menit',
    level: 'Advanced',
    icon: 'Database',
    referensi_eksternal: 'PostgreSQL Row Level Security, Sanitasi XSS DOMPurify, Debounce Hook, AbortController',
    pdf_url: null,
    created_at: now(), updated_at: now()
  },
  {
    id: 'c0000009-0000-0000-0000-000000000009',
    urutan: 9,
    judul: 'Usability Testing & Sprint Perbaikan',
    ringkasan: 'Metode Think-Aloud, aturan 5 pengguna Nielsen, Microsoft Clarity heatmap & rage click, metrik SEQ, dan GitHub Issues.',
    kategori: 'UI/UX & Quality',
    estimasi_waktu: '60 Menit',
    level: 'Advanced',
    icon: 'Sparkles',
    referensi_eksternal: 'Nielsen Norman 5 User Rule, Think-Aloud Protocol, Session Replays, Single Ease Question (SEQ)',
    pdf_url: null,
    created_at: now(), updated_at: now()
  },
  {
    id: 'c0000010-0000-0000-0000-000000000010',
    urutan: 10,
    judul: 'Audit Kualitas Web & Showcase Portofolio',
    ringkasan: 'Audit Google Lighthouse, Core Web Vitals (LCP, INP, CLS), sanitasi keamanan dasar (.env & HTTPS), dan studi kasus portofolio.',
    kategori: 'Engineering & Career',
    estimasi_waktu: '60 Menit',
    level: 'Advanced',
    icon: 'Award',
    referensi_eksternal: 'Google Lighthouse Audit >= 90, Core Web Vitals (LCP <= 2.5s, INP <= 200ms, CLS <= 0.1), Case Study Structure',
    pdf_url: null,
    created_at: now(), updated_at: now()
  }
];

// ─── 3. SECTIONS ──────────────────────────────────────────────────────────────
// Kolom: id, course_id, urutan, judul, isi, pdf_url, pdf_title, created_at
export const sections = [
  // ═══════ Modul 1: Mindset Startup & Problem Solving ═══════
  {
    id: 's0000001-0000-0000-0000-000000000001',
    course_id: 'c0000001-0000-0000-0000-000000000001',
    urutan: 1,
    judul: 'Bagian 1: Pola Pikir Value Driven & Agility',
    isi: `### 1. Pola Pikir Value Driven vs Feature Driven\nDalam pengembangan produk digital, kesalahan paling sering dari pemula adalah berfokus pada teknologi canggih atau fitur sebanyak mungkin (*feature-driven*), bukan pada nilai manfaat yang diterima pengguna (*value-driven*).\n\n> **Prinsip Utama:** Nilai (*Value*) tercipta saat sebuah produk berhasil mempermudah hidup pengguna atau menyelesaikan masalah mendesak yang mereka hadapi.\n\n#### Karakteristik Mindset Value-Driven:\n* **Solve The Problem:** Selalu berpegang pada masalah nyata pengguna, bukan ide asumsi sepihak.\n* **Agility:** Kemampuan tim untuk bergerak cepat, menerima umpan balik, beradaptasi dan iterasi.\n* **Kegagalan Awal adalah Data:** Setiap kesalahan adalah data berharga untuk perbaikan produk.`,
    pdf_url: 'https://drive.google.com/file/d/1ofkBoMKz26NmUddSc5dCT3y7JexVlKnS/preview',
    pdf_title: 'Slide PPT Modul 1: Startup Mindset & Agility',
    created_at: now()
  },
  {
    id: 's0000001-0000-0000-0000-000000000002',
    course_id: 'c0000001-0000-0000-0000-000000000001',
    urutan: 2,
    judul: 'Bagian 2: Problem Statement Canvas & Teknik 5 Whys',
    isi: `### 2. Membedah Masalah dengan Problem Statement Canvas\nSebelum membuat antarmuka atau menulis kode, tim wajib membedah masalah menggunakan 4 elemen pokok:\n1. **Who (Target Pengguna):** Siapa kelompok spesifik yang paling menderita akibat masalah ini?\n2. **Context (When & Where):** Kapan dan di mana masalah tersebut paling sering muncul?\n3. **Root Cause (Akar Masalah):** Penyebab terdalam yang memicu timbulnya masalah.\n4. **The Gap:** Celah kelemahan dari solusi alternatif yang saat ini digunakan pengguna.\n\nFormat: "[Target Pengguna] kesulitan saat [Konteks] karena [Akar Masalah], yang berakibat [Dampak Terukur]."\n\n#### Teknik 5 Whys\nMetode mengajukan pertanyaan "Mengapa?" secara berulang hingga ditemukan akar terdalam (root cause).`,
    pdf_url: 'https://drive.google.com/file/d/1ofkBoMKz26NmUddSc5dCT3y7JexVlKnS/preview',
    pdf_title: 'Slide PPT Modul 1: Problem Canvas & 5 Whys',
    created_at: now()
  },
  {
    id: 's0000001-0000-0000-0000-000000000003',
    course_id: 'c0000001-0000-0000-0000-000000000001',
    urutan: 3,
    judul: 'Referensi Tambahan: Lean Startup & Studi Kasus Kos-Kosan',
    isi: `### 3. Studi Kasus Manajemen Kos-Kosan\nPemilik kos dengan 10–30 kamar yang tidak tinggal di lokasi kesulitan memantau pembayaran sewa bulanan.\n\n* **Solusi Saat Ini:** Broadcast WhatsApp satu per satu dan catat manual di Excel.\n* **The Gap:** Pesan WA sering diabaikan, bukti transfer palsu sulit diverifikasi.\n* **Peluang MVP:** Notifikasi otomatis terintegrasi gateway pembayaran dan dashboard arus kas.`,
    pdf_url: 'https://drive.google.com/file/d/1ofkBoMKz26NmUddSc5dCT3y7JexVlKnS/preview',
    pdf_title: 'Slide PPT Modul 1: Lean Startup & Studi Kasus',
    created_at: now()
  },
  // ═══════ Modul 2: UI/UX & Design Thinking ═══════
  {
    id: 's0000002-0000-0000-0000-000000000001',
    course_id: 'c0000002-0000-0000-0000-000000000002',
    urutan: 1,
    judul: 'Bagian 1: Anatomi UI vs UX & Kurva Biaya 1:10:100',
    isi: `### 1. UI vs UX\n* **UX (User Experience):** Fokus strategi, psikologi, dan alur pemecahan masalah (di pikiran pengguna).\n* **UI (User Interface):** Fokus estetika, desain interaksi, dan identitas merek (di layar perangkat).\n\n> **Kurva 1:10:100:** Memperbaiki desain setelah rilis 100x lebih mahal dibanding fase riset awal.`,
    pdf_url: 'https://drive.google.com/file/d/1Tp17CHNjKtoU0JVsaGZrAZDIMK9JbNGE/preview',
    pdf_title: 'Slide PPT Modul 2: Anatomi UI vs UX & Kurva Biaya 1:10:100',
    created_at: now()
  },
  {
    id: 's0000002-0000-0000-0000-000000000002',
    course_id: 'c0000002-0000-0000-0000-000000000002',
    urutan: 2,
    judul: 'Bagian 2: 5 Tahap Design Thinking & Purwarupa Kasar',
    isi: `### 2. Lima Tahapan Design Thinking\n1. **Empathize** – Pahami apa yang dirasakan dan menjadi penderitaan pengguna.\n2. **Define** – Rumuskan akar permasalahan psikologis secara spesifik.\n3. **Ideate** – Brainstorming sebebas mungkin, jangan tolak ide aneh.\n4. **Prototype** – Buat representasi murah (sketsa kertas atau wireframe hitam-putih).\n5. **Test** – Langsung ujikan ke target audiens, cari kebingungan bukan pujian.`,
    pdf_url: 'https://drive.google.com/file/d/1Tp17CHNjKtoU0JVsaGZrAZDIMK9JbNGE/preview',
    pdf_title: 'Slide PPT Modul 2: 5 Tahap Design Thinking & Purwarupa Kasar',
    created_at: now()
  },
  {
    id: 's0000002-0000-0000-0000-000000000003',
    course_id: 'c0000002-0000-0000-0000-000000000002',
    urutan: 3,
    judul: 'Bagian 3: Studi Kasus Produk Gagal & Dosa Besar Desainer',
    isi: `### 3. Studi Kasus Produk Gagal\n* **Juicero ($120M):** Over-engineering tanpa nilai guna nyata.\n* **Windows 8:** Menghapus tombol Start, disorientasi pengguna massal.\n* **Google Glass:** Abai konteks sosial dan privasi publik.\n\n#### 4 Dosa Besar Desainer Pemula:\n1. Mendesain untuk diri sendiri.\n2. Terbiasa "Lorem Ipsum".\n3. Terlalu banyak opsi (Hick's Law).\n4. Estetika membunuh fungsi.`,
    pdf_url: 'https://drive.google.com/file/d/1Tp17CHNjKtoU0JVsaGZrAZDIMK9JbNGE/preview',
    pdf_title: 'Slide PPT Modul 2: Studi Kasus Produk Gagal & Dosa Besar Desainer',
    created_at: now()
  },
  ...sections3to10
];

// Ambil ID Course 1 langsung dari array courses agar 100% cocok dengan tabel courses Supabase
const modul1CourseId = (courses.find((c) => c.urutan === 1) || courses[0]).id;
const validCourseIds = new Set(courses.map((c) => c.id));

// ─── 4. QUESTIONS (Modul 1–10 – Set A, B, C lengkap sesuai PRD) ───────────────
// Kolom: id, course_id, set_paket, topik, tipe, teks, urutan, created_at
const rawQuestions = [
  // ════════════ SET A – 10 PG (PRD No. 1–10) ════════════
  { id: 'q1000001-0000-0000-0000-000000000001', course_id: modul1CourseId, set_paket: 'A', topik: 'Startup Mindset', tipe: 'pilihan_ganda', teks: 'Apa yang dimaksud dengan pola pikir Value Driven?', urutan: 1, created_at: now() },
  { id: 'q1000001-0000-0000-0000-000000000002', course_id: modul1CourseId, set_paket: 'A', topik: 'Startup Mindset', tipe: 'pilihan_ganda', teks: 'Dalam mindset startup, pertanyaan yang paling tepat adalah...', urutan: 2, created_at: now() },
  { id: 'q1000001-0000-0000-0000-000000000003', course_id: modul1CourseId, set_paket: 'A', topik: 'Problem Solving', tipe: 'pilihan_ganda', teks: 'Prinsip Solve The Problem menekankan bahwa startup harus...', urutan: 3, created_at: now() },
  { id: 'q1000001-0000-0000-0000-000000000004', course_id: modul1CourseId, set_paket: 'A', topik: 'Agility', tipe: 'pilihan_ganda', teks: 'Agility dalam startup berarti...', urutan: 4, created_at: now() },
  { id: 'q1000001-0000-0000-0000-000000000005', course_id: modul1CourseId, set_paket: 'A', topik: 'Validasi Masalah', tipe: 'pilihan_ganda', teks: 'Kegagalan pada tahap awal startup dianggap sebagai...', urutan: 5, created_at: now() },
  { id: 'q1000001-0000-0000-0000-000000000006', course_id: modul1CourseId, set_paket: 'A', topik: 'Problem-Solution Fit', tipe: 'pilihan_ganda', teks: 'Checkpoint pertama sebelum mencapai Product-Market Fit adalah...', urutan: 6, created_at: now() },
  { id: 'q1000001-0000-0000-0000-000000000007', course_id: modul1CourseId, set_paket: 'A', topik: 'Validasi Masalah', tipe: 'pilihan_ganda', teks: 'Sebuah masalah layak diselesaikan jika...', urutan: 7, created_at: now() },
  { id: 'q1000001-0000-0000-0000-000000000008', course_id: modul1CourseId, set_paket: 'A', topik: 'Validasi Masalah', tipe: 'pilihan_ganda', teks: 'Dalam tahap awal validasi, yang harus lebih diprioritaskan adalah...', urutan: 8, created_at: now() },
  { id: 'q1000001-0000-0000-0000-000000000009', course_id: modul1CourseId, set_paket: 'A', topik: 'Inovasi Produk', tipe: 'pilihan_ganda', teks: 'Keluhan dan frustrasi pengguna dianggap sebagai...', urutan: 9, created_at: now() },
  { id: 'q1000001-0000-0000-0000-000000000010', course_id: modul1CourseId, set_paket: 'A', topik: 'Problem Statement Canvas', tipe: 'pilihan_ganda', teks: 'Problem Statement Canvas digunakan untuk...', urutan: 10, created_at: now() },
  // ════════════ SET A – 5 Essay (PRD Essay No. 1–5) ════════════
  { id: 'q1000002-0000-0000-0000-000000000001', course_id: modul1CourseId, set_paket: 'A', topik: 'Startup Mindset', tipe: 'essay', teks: 'Jelaskan pengertian Value Driven dalam mindset startup!', urutan: 11, created_at: now() },
  { id: 'q1000002-0000-0000-0000-000000000002', course_id: modul1CourseId, set_paket: 'A', topik: 'Problem Solving', tipe: 'essay', teks: 'Mengapa startup harus fokus pada masalah, bukan pada solusi atau teknologi?', urutan: 12, created_at: now() },
  { id: 'q1000002-0000-0000-0000-000000000003', course_id: modul1CourseId, set_paket: 'A', topik: 'Agility', tipe: 'essay', teks: 'Jelaskan konsep Agility dan manfaatnya bagi startup!', urutan: 13, created_at: now() },
  { id: 'q1000002-0000-0000-0000-000000000004', course_id: modul1CourseId, set_paket: 'A', topik: 'Problem-Solution Fit', tipe: 'essay', teks: 'Apa yang dimaksud dengan Problem-Solution Fit? Mengapa penting?', urutan: 14, created_at: now() },
  { id: 'q1000002-0000-0000-0000-000000000005', course_id: modul1CourseId, set_paket: 'A', topik: 'Validasi Masalah', tipe: 'essay', teks: 'Mengapa validasi masalah harus dilakukan sebelum membuat produk?', urutan: 15, created_at: now() },
  // ════════════ SET B – 10 PG (PRD No. 11–20) ════════════
  { id: 'q1000003-0000-0000-0000-000000000001', course_id: modul1CourseId, set_paket: 'B', topik: 'Problem Solving', tipe: 'pilihan_ganda', teks: 'Strategi AI yang digunakan untuk menemukan pain points pengguna adalah...', urutan: 1, created_at: now() },
  { id: 'q1000003-0000-0000-0000-000000000002', course_id: modul1CourseId, set_paket: 'B', topik: 'Analisis Kompetitor', tipe: 'pilihan_ganda', teks: 'Analisis kompetitor bertujuan untuk menemukan...', urutan: 2, created_at: now() },
  { id: 'q1000003-0000-0000-0000-000000000003', course_id: modul1CourseId, set_paket: 'B', topik: 'Startup Mindset', tipe: 'pilihan_ganda', teks: 'UVP merupakan singkatan dari...', urutan: 3, created_at: now() },
  { id: 'q1000003-0000-0000-0000-000000000004', course_id: modul1CourseId, set_paket: 'B', topik: 'Problem Solving', tipe: 'pilihan_ganda', teks: "AI sebagai Devil's Advocate digunakan untuk...", urutan: 4, created_at: now() },
  { id: 'q1000003-0000-0000-0000-000000000005', course_id: modul1CourseId, set_paket: 'B', topik: 'Anatomi Masalah', tipe: 'pilihan_ganda', teks: 'Siapa yang dimaksud pada bagian "Who" dalam anatomi masalah?', urutan: 5, created_at: now() },
  { id: 'q1000003-0000-0000-0000-000000000006', course_id: modul1CourseId, set_paket: 'B', topik: 'Anatomi Masalah', tipe: 'pilihan_ganda', teks: 'Target pengguna yang baik adalah...', urutan: 6, created_at: now() },
  { id: 'q1000003-0000-0000-0000-000000000007', course_id: modul1CourseId, set_paket: 'B', topik: 'Pain Point', tipe: 'pilihan_ganda', teks: 'Pain Point berarti...', urutan: 7, created_at: now() },
  { id: 'q1000003-0000-0000-0000-000000000008', course_id: modul1CourseId, set_paket: 'B', topik: 'Jobs to be Done', tipe: 'pilihan_ganda', teks: 'Jobs to be Done menjelaskan...', urutan: 8, created_at: now() },
  { id: 'q1000003-0000-0000-0000-000000000009', course_id: modul1CourseId, set_paket: 'B', topik: 'Konteks Masalah', tipe: 'pilihan_ganda', teks: 'Konteks (When & Where) menjelaskan...', urutan: 9, created_at: now() },
  { id: 'q1000003-0000-0000-0000-000000000010', course_id: modul1CourseId, set_paket: 'B', topik: 'Root Cause', tipe: 'pilihan_ganda', teks: 'Metode yang digunakan untuk menggali akar masalah adalah...', urutan: 10, created_at: now() },
  // ════════════ SET B – 5 Essay (PRD Essay No. 6–10) ════════════
  { id: 'q1000004-0000-0000-0000-000000000001', course_id: modul1CourseId, set_paket: 'B', topik: 'Inovasi Produk', tipe: 'essay', teks: 'Bagaimana keluhan pelanggan dapat menjadi sumber inovasi?', urutan: 11, created_at: now() },
  { id: 'q1000004-0000-0000-0000-000000000002', course_id: modul1CourseId, set_paket: 'B', topik: 'Problem Statement Canvas', tipe: 'essay', teks: 'Jelaskan fungsi Problem Statement Canvas!', urutan: 12, created_at: now() },
  { id: 'q1000004-0000-0000-0000-000000000003', course_id: modul1CourseId, set_paket: 'B', topik: 'Problem Solving', tipe: 'essay', teks: 'Sebutkan dan jelaskan empat strategi riset menggunakan AI Prompting!', urutan: 13, created_at: now() },
  { id: 'q1000004-0000-0000-0000-000000000004', course_id: modul1CourseId, set_paket: 'B', topik: 'Root Cause', tipe: 'essay', teks: 'Apa perbedaan antara Pain Point dan Root Cause?', urutan: 14, created_at: now() },
  { id: 'q1000004-0000-0000-0000-000000000005', course_id: modul1CourseId, set_paket: 'B', topik: 'Anatomi Masalah', tipe: 'essay', teks: 'Mengapa target pengguna tidak boleh didefinisikan sebagai "semua orang"?', urutan: 15, created_at: now() },
  // ════════════ SET C – 10 PG (PRD No. 21–30) ════════════
  { id: 'q1000005-0000-0000-0000-000000000001', course_id: modul1CourseId, set_paket: 'C', topik: 'Anatomi Masalah', tipe: 'pilihan_ganda', teks: 'Contoh dampak masalah yang terukur adalah...', urutan: 1, created_at: now() },
  { id: 'q1000005-0000-0000-0000-000000000002', course_id: modul1CourseId, set_paket: 'C', topik: 'Problem Statement Canvas', tipe: 'pilihan_ganda', teks: 'Alternatives adalah...', urutan: 2, created_at: now() },
  { id: 'q1000005-0000-0000-0000-000000000003', course_id: modul1CourseId, set_paket: 'C', topik: 'Problem Statement Canvas', tipe: 'pilihan_ganda', teks: 'The Gap dalam Problem Statement Canvas berarti...', urutan: 3, created_at: now() },
  { id: 'q1000005-0000-0000-0000-000000000004', course_id: modul1CourseId, set_paket: 'C', topik: 'Problem Statement Canvas', tipe: 'pilihan_ganda', teks: 'Rumusan akhir masalah disusun menggunakan unsur...', urutan: 4, created_at: now() },
  { id: 'q1000005-0000-0000-0000-000000000005', course_id: modul1CourseId, set_paket: 'C', topik: 'Studi Kasus Kos-Kosan', tipe: 'pilihan_ganda', teks: 'Pada studi kasus kos-kosan, target pengguna adalah...', urutan: 5, created_at: now() },
  { id: 'q1000005-0000-0000-0000-000000000006', course_id: modul1CourseId, set_paket: 'C', topik: 'Studi Kasus Kos-Kosan', tipe: 'pilihan_ganda', teks: 'Masalah utama pemilik kos dalam studi kasus adalah...', urutan: 6, created_at: now() },
  { id: 'q1000005-0000-0000-0000-000000000007', course_id: modul1CourseId, set_paket: 'C', topik: 'Studi Kasus Kos-Kosan', tipe: 'pilihan_ganda', teks: 'Masalah paling sering muncul pada studi kasus saat...', urutan: 7, created_at: now() },
  { id: 'q1000005-0000-0000-0000-000000000008', course_id: modul1CourseId, set_paket: 'C', topik: 'Studi Kasus Kos-Kosan', tipe: 'pilihan_ganda', teks: 'Dampak dari masalah penagihan kos adalah...', urutan: 8, created_at: now() },
  { id: 'q1000005-0000-0000-0000-000000000009', course_id: modul1CourseId, set_paket: 'C', topik: 'Studi Kasus Kos-Kosan', tipe: 'pilihan_ganda', teks: 'Solusi saat ini yang digunakan pemilik kos adalah...', urutan: 9, created_at: now() },
  { id: 'q1000005-0000-0000-0000-000000000010', course_id: modul1CourseId, set_paket: 'C', topik: 'Studi Kasus Kos-Kosan', tipe: 'pilihan_ganda', teks: 'Celah pasar pada studi kasus kos-kosan adalah...', urutan: 10, created_at: now() },
  // ════════════ SET C – 5 Essay (PRD Essay No. 11–15) ════════════
  { id: 'q1000006-0000-0000-0000-000000000001', course_id: modul1CourseId, set_paket: 'C', topik: 'Teknik 5 Whys', tipe: 'essay', teks: 'Jelaskan metode 5 Whys dalam menemukan akar masalah!', urutan: 11, created_at: now() },
  { id: 'q1000006-0000-0000-0000-000000000002', course_id: modul1CourseId, set_paket: 'C', topik: 'Problem Statement Canvas', tipe: 'essay', teks: 'Apa yang dimaksud dengan The Gap dan bagaimana cara menemukannya?', urutan: 12, created_at: now() },
  { id: 'q1000006-0000-0000-0000-000000000003', course_id: modul1CourseId, set_paket: 'C', topik: 'Problem Statement', tipe: 'essay', teks: 'Buat contoh rumusan akhir masalah menggunakan format: "[Target] kesulitan saat [Konteks] karena [Akar Masalah], yang berakibat [Dampak]."', urutan: 13, created_at: now() },
  { id: 'q1000006-0000-0000-0000-000000000004', course_id: modul1CourseId, set_paket: 'C', topik: 'Studi Kasus Kos-Kosan', tipe: 'essay', teks: 'Analisis studi kasus manajemen kos-kosan dan jelaskan peluang inovasi yang dapat dibuat!', urutan: 14, created_at: now() },
  { id: 'q1000006-0000-0000-0000-000000000005', course_id: modul1CourseId, set_paket: 'C', topik: 'Validasi Masalah', tipe: 'essay', teks: 'Menurut Anda, mengapa feedback pengguna sangat penting dalam pengembangan produk digital?', urutan: 15, created_at: now() },
  ...modul2Questions,
  ...modul3Questions,
  ...modul4Questions,
  ...modul5Questions,
  ...modul6Questions,
  ...modul7Questions,
  ...modul8Questions,
  ...modul9Questions,
  ...modul10Questions
];

// Pastikan seluruh 450 soal memiliki course_id yang 100% cocok dengan tabel courses Supabase
export const questions = rawQuestions.map((q, index) => {
  if (validCourseIds.has(q.course_id)) return q;
  const courseByIndex = courses[Math.floor(index / 45)] || courses[0];
  return { ...q, course_id: courseByIndex.id };
});

// ─── 5. OPTIONS (Jawaban PG Modul 1–10 – lengkap sesuai PRD) ─────────────────
// Kolom: id, question_id, teks, poin (10=benar/0=salah), umpan_balik, is_correct
export const options = [
  // Q1-A
  { id: 'o1-A1-1', question_id: 'q1000001-0000-0000-0000-000000000001', teks: 'Berfokus pada teknologi terbaru', poin: 0, umpan_balik: 'Keliru. Teknologi terbaru bukan inti dari pola pikir Value Driven.', is_correct: false },
  { id: 'o1-A1-2', question_id: 'q1000001-0000-0000-0000-000000000001', teks: 'Berfokus pada desain yang menarik', poin: 0, umpan_balik: 'Keliru. Desain visual hanyalah pendukung, bukan inti Value Driven.', is_correct: false },
  { id: 'o1-A1-3', question_id: 'q1000001-0000-0000-0000-000000000001', teks: 'Berfokus pada nilai yang diberikan kepada pengguna', poin: 10, umpan_balik: 'Tepat! Value Driven berfokus pada penciptaan nilai manfaat nyata bagi pengguna.', is_correct: true },
  { id: 'o1-A1-4', question_id: 'q1000001-0000-0000-0000-000000000001', teks: 'Berfokus pada keuntungan perusahaan', poin: 0, umpan_balik: 'Keliru. Keuntungan adalah hasil dari nilai yang diberikan kepada pengguna.', is_correct: false },
  // Q2-A
  { id: 'o1-A2-1', question_id: 'q1000001-0000-0000-0000-000000000002', teks: 'Fitur apa yang paling canggih?', poin: 0, umpan_balik: 'Keliru. Pertanyaan ini mencerminkan pola pikir feature-driven.', is_correct: false },
  { id: 'o1-A2-2', question_id: 'q1000001-0000-0000-0000-000000000002', teks: 'Teknologi apa yang paling mahal?', poin: 0, umpan_balik: 'Keliru. Teknologi mahal tidak menjamin solusi diterima pengguna.', is_correct: false },
  { id: 'o1-A2-3', question_id: 'q1000001-0000-0000-0000-000000000002', teks: 'Nilai apa yang dapat mempermudah hidup pengguna?', poin: 10, umpan_balik: 'Tepat! Mindset startup selalu berpusat pada nilai yang mempermudah hidup pengguna.', is_correct: true },
  { id: 'o1-A2-4', question_id: 'q1000001-0000-0000-0000-000000000002', teks: 'Bagaimana mengalahkan kompetitor?', poin: 0, umpan_balik: 'Keliru. Fokus utama adalah menyelesaikan masalah pengguna terlebih dahulu.', is_correct: false },
  // Q3-A
  { id: 'o1-A3-1', question_id: 'q1000001-0000-0000-0000-000000000003', teks: 'Mengutamakan desain modern', poin: 0, umpan_balik: 'Keliru. Desain modern tidak menyelesaikan akar masalah tanpa solusi nyata.', is_correct: false },
  { id: 'o1-A3-2', question_id: 'q1000001-0000-0000-0000-000000000003', teks: 'Berpegang pada masalah nyata pengguna', poin: 10, umpan_balik: 'Tepat! Prinsip Solve The Problem menekankan keterikatan pada masalah nyata pengguna.', is_correct: true },
  { id: 'o1-A3-3', question_id: 'q1000001-0000-0000-0000-000000000003', teks: 'Meniru kompetitor terbaik', poin: 0, umpan_balik: 'Keliru. Meniru kompetitor tanpa memahami masalah pengguna berisiko tidak relevan.', is_correct: false },
  { id: 'o1-A3-4', question_id: 'q1000001-0000-0000-0000-000000000003', teks: 'Mengembangkan banyak fitur', poin: 0, umpan_balik: 'Keliru. Banyak fitur tanpa fokus masalah justru membuat produk rumit.', is_correct: false },
  // Q4-A
  { id: 'o1-A4-1', question_id: 'q1000001-0000-0000-0000-000000000004', teks: 'Menghindari kegagalan', poin: 0, umpan_balik: 'Keliru. Startup agile tidak takut gagal, melainkan belajar cepat dari eksperimen.', is_correct: false },
  { id: 'o1-A4-2', question_id: 'q1000001-0000-0000-0000-000000000004', teks: 'Menunggu produk sempurna', poin: 0, umpan_balik: 'Keliru. Menunggu sempurna memperlambat validasi pasar.', is_correct: false },
  { id: 'o1-A4-3', question_id: 'q1000001-0000-0000-0000-000000000004', teks: 'Bergerak cepat, menerima feedback, dan terus memperbaiki produk', poin: 10, umpan_balik: 'Tepat! Agility berarti iterasi cepat berbasis umpan balik nyata.', is_correct: true },
  { id: 'o1-A4-4', question_id: 'q1000001-0000-0000-0000-000000000004', teks: 'Membuat produk sekali lalu selesai', poin: 0, umpan_balik: 'Keliru. Pengembangan produk digital bersifat berkelanjutan.', is_correct: false },
  // Q5-A
  { id: 'o1-A5-1', question_id: 'q1000001-0000-0000-0000-000000000005', teks: 'Bukti ketidakmampuan tim', poin: 0, umpan_balik: 'Keliru. Kegagalan awal adalah bagian dari proses pembelajaran.', is_correct: false },
  { id: 'o1-A5-2', question_id: 'q1000001-0000-0000-0000-000000000005', teks: 'Kerugian mutlak', poin: 0, umpan_balik: 'Keliru. Kegagalan awal justru mencegah kerugian lebih besar di masa depan.', is_correct: false },
  { id: 'o1-A5-3', question_id: 'q1000001-0000-0000-0000-000000000005', teks: 'Data berharga untuk perbaikan', poin: 10, umpan_balik: 'Tepat! Setiap kegagalan memberikan data validasi untuk iterasi berikutnya.', is_correct: true },
  { id: 'o1-A5-4', question_id: 'q1000001-0000-0000-0000-000000000005', teks: 'Alasan menghentikan proyek', poin: 0, umpan_balik: 'Keliru. Data kegagalan digunakan untuk pivot atau perbaikan, bukan menyerah.', is_correct: false },
  // Q6-A
  { id: 'o1-A6-1', question_id: 'q1000001-0000-0000-0000-000000000006', teks: 'Market Research', poin: 0, umpan_balik: 'Keliru. Market research adalah aktivitas riset, bukan checkpoint kesesuaian solusi.', is_correct: false },
  { id: 'o1-A6-2', question_id: 'q1000001-0000-0000-0000-000000000006', teks: 'Business Model', poin: 0, umpan_balik: 'Keliru. Model bisnis diskalakan setelah Problem-Solution Fit tercapai.', is_correct: false },
  { id: 'o1-A6-3', question_id: 'q1000001-0000-0000-0000-000000000006', teks: 'Problem-Solution Fit', poin: 10, umpan_balik: 'Tepat! Problem-Solution Fit adalah checkpoint pertama sebelum menuju Product-Market Fit.', is_correct: true },
  { id: 'o1-A6-4', question_id: 'q1000001-0000-0000-0000-000000000006', teks: 'Revenue Model', poin: 0, umpan_balik: 'Keliru. Checkpoint pertama berfokus pada kecocokan masalah dan solusi.', is_correct: false },
  // Q7-A
  { id: 'o1-A7-1', question_id: 'q1000001-0000-0000-0000-000000000007', teks: 'Mudah diselesaikan', poin: 0, umpan_balik: 'Keliru. Masalah yang mudah belum tentu dibutuhkan pasar.', is_correct: false },
  { id: 'o1-A7-2', question_id: 'q1000001-0000-0000-0000-000000000007', teks: 'Sedang tren', poin: 0, umpan_balik: 'Keliru. Tren bersifat sementara dan belum tentu menjadi masalah mendesak.', is_correct: false },
  { id: 'o1-A7-3', question_id: 'q1000001-0000-0000-0000-000000000007', teks: 'Mendesak dan benar-benar dialami pengguna', poin: 10, umpan_balik: 'Tepat! Masalah yang layak diselesaikan harus nyata dan mendesak bagi pengguna.', is_correct: true },
  { id: 'o1-A7-4', question_id: 'q1000001-0000-0000-0000-000000000007', teks: 'Disukai investor', poin: 0, umpan_balik: 'Keliru. Validasi utama berasal dari pengguna yang mengalami masalah.', is_correct: false },
  // Q8-A
  { id: 'o1-A8-1', question_id: 'q1000001-0000-0000-0000-000000000008', teks: 'Tampilan UI yang indah', poin: 0, umpan_balik: 'Keliru. Estetika UI disempurnakan setelah solusi terbukti valid.', is_correct: false },
  { id: 'o1-A8-2', question_id: 'q1000001-0000-0000-0000-000000000008', teks: 'Validasi solusi kepada pengguna', poin: 10, umpan_balik: 'Tepat! Prioritas utama tahap awal adalah memvalidasi apakah solusi benar-benar menjawab masalah.', is_correct: true },
  { id: 'o1-A8-3', question_id: 'q1000001-0000-0000-0000-000000000008', teks: 'Logo perusahaan', poin: 0, umpan_balik: 'Keliru. Identitas visual bukan prioritas validasi tahap awal.', is_correct: false },
  { id: 'o1-A8-4', question_id: 'q1000001-0000-0000-0000-000000000008', teks: 'Kampanye iklan', poin: 0, umpan_balik: 'Keliru. Iklan besar-besaran sebelum validasi berisiko memboroskan biaya.', is_correct: false },
  // Q9-A
  { id: 'o1-A9-1', question_id: 'q1000001-0000-0000-0000-000000000009', teks: 'Hambatan bisnis', poin: 0, umpan_balik: 'Keliru. Keluhan pengguna justru membuka peluang perbaikan produk.', is_correct: false },
  { id: 'o1-A9-2', question_id: 'q1000001-0000-0000-0000-000000000009', teks: 'Risiko operasional', poin: 0, umpan_balik: 'Keliru. Dalam mindset startup, keluhan adalah sumber wawasan inovasi.', is_correct: false },
  { id: 'o1-A9-3', question_id: 'q1000001-0000-0000-0000-000000000009', teks: 'Bahan bakar inovasi startup', poin: 10, umpan_balik: 'Tepat! Keluhan dan frustrasi pengguna adalah bahan bakar utama inovasi startup.', is_correct: true },
  { id: 'o1-A9-4', question_id: 'q1000001-0000-0000-0000-000000000009', teks: 'Ancaman kompetitor', poin: 0, umpan_balik: 'Keliru. Keluhan pengguna membantu startup menciptakan keunggulan dibanding kompetitor.', is_correct: false },
  // Q10-A
  { id: 'o1-A10-1', question_id: 'q1000001-0000-0000-0000-000000000010', teks: 'Membuat laporan keuangan', poin: 0, umpan_balik: 'Keliru. Problem Statement Canvas bukan alat akuntansi.', is_correct: false },
  { id: 'o1-A10-2', question_id: 'q1000001-0000-0000-0000-000000000010', teks: 'Merumuskan masalah secara presisi', poin: 10, umpan_balik: 'Tepat! Problem Statement Canvas membantu membedah dan merumuskan masalah secara terstruktur dan presisi.', is_correct: true },
  { id: 'o1-A10-3', question_id: 'q1000001-0000-0000-0000-000000000010', teks: 'Mendesain antarmuka aplikasi', poin: 0, umpan_balik: 'Keliru. Desain antarmuka dilakukan setelah masalah dirumuskan.', is_correct: false },
  { id: 'o1-A10-4', question_id: 'q1000001-0000-0000-0000-000000000010', teks: 'Menentukan harga produk', poin: 0, umpan_balik: 'Keliru. Penetapan harga bukan fungsi Problem Statement Canvas.', is_correct: false },

  // ─── SET B OPTIONS (PRD No. 11–20) ───
  // Q11 (Set B #1)
  { id: 'o1-B1-1', question_id: 'q1000003-0000-0000-0000-000000000001', teks: 'Data Mining', poin: 0, umpan_balik: 'Keliru. Data mining tidak merumuskan pain point secara langsung.', is_correct: false },
  { id: 'o1-B1-2', question_id: 'q1000003-0000-0000-0000-000000000001', teks: 'Prompt Engineering', poin: 10, umpan_balik: 'Tepat! Prompt Engineering digunakan untuk menggali dan memetakan pain point pengguna dengan AI.', is_correct: true },
  { id: 'o1-B1-3', question_id: 'q1000003-0000-0000-0000-000000000001', teks: 'Web Hosting', poin: 0, umpan_balik: 'Keliru. Ini ranah infrastruktur cloud, bukan perumusan masalah.', is_correct: false },
  { id: 'o1-B1-4', question_id: 'q1000003-0000-0000-0000-000000000001', teks: 'Cloud Computing', poin: 0, umpan_balik: 'Keliru. Cloud computing adalah teknologi komputasi awan.', is_correct: false },
  // Q12 (Set B #2)
  { id: 'o1-B2-1', question_id: 'q1000003-0000-0000-0000-000000000002', teks: 'Harga produk termurah', poin: 0, umpan_balik: 'Keliru. Analisis kompetitor bukan semata-mata mencari harga termurah.', is_correct: false },
  { id: 'o1-B2-2', question_id: 'q1000003-0000-0000-0000-000000000002', teks: 'Celah yang belum dipenuhi kompetitor', poin: 10, umpan_balik: 'Tepat! Tujuan utama analisis kompetitor adalah menemukan celah (The Gap) yang belum dipenuhi.', is_correct: true },
  { id: 'o1-B2-3', question_id: 'q1000003-0000-0000-0000-000000000002', teks: 'Modal usaha terbesar', poin: 0, umpan_balik: 'Keliru. Modal usaha bukan tujuan analisis perumusan masalah.', is_correct: false },
  { id: 'o1-B2-4', question_id: 'q1000003-0000-0000-0000-000000000002', teks: 'Jumlah pelanggan kompetitor', poin: 0, umpan_balik: 'Keliru. Fokus utamanya adalah menemukan celah kebutuhan pengguna.', is_correct: false },
  // Q13 (Set B #3)
  { id: 'o1-B3-1', question_id: 'q1000003-0000-0000-0000-000000000003', teks: 'User Validation Process', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o1-B3-2', question_id: 'q1000003-0000-0000-0000-000000000003', teks: 'Unique Value Proposition', poin: 10, umpan_balik: 'Tepat! UVP adalah Unique Value Proposition, pembeda nilai unik produk dibanding alternatif lain.', is_correct: true },
  { id: 'o1-B3-3', question_id: 'q1000003-0000-0000-0000-000000000003', teks: 'User Value Product', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o1-B3-4', question_id: 'q1000003-0000-0000-0000-000000000003', teks: 'Unique Verification Point', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  // Q14 (Set B #4)
  { id: 'o1-B4-1', question_id: 'q1000003-0000-0000-0000-000000000004', teks: 'Membuat desain aplikasi', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o1-B4-2', question_id: 'q1000003-0000-0000-0000-000000000004', teks: 'Mengkritisi ide dan menguji asumsi', poin: 10, umpan_balik: "Tepat! Devil's Advocate bertugas mengkritisi ide dan menguji kelemahan asumsi.", is_correct: true },
  { id: 'o1-B4-3', question_id: 'q1000003-0000-0000-0000-000000000004', teks: 'Menjual produk', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o1-B4-4', question_id: 'q1000003-0000-0000-0000-000000000004', teks: 'Membuat database', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  // Q15 (Set B #5)
  { id: 'o1-B5-1', question_id: 'q1000003-0000-0000-0000-000000000005', teks: 'Investor', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o1-B5-2', question_id: 'q1000003-0000-0000-0000-000000000005', teks: 'Kompetitor', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o1-B5-3', question_id: 'q1000003-0000-0000-0000-000000000005', teks: 'Target pengguna', poin: 10, umpan_balik: 'Tepat! Who merujuk pada target pengguna spesifik yang mengalami masalah.', is_correct: true },
  { id: 'o1-B5-4', question_id: 'q1000003-0000-0000-0000-000000000005', teks: 'Developer', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  // Q16 (Set B #6)
  { id: 'o1-B6-1', question_id: 'q1000003-0000-0000-0000-000000000006', teks: 'Semua orang', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o1-B6-2', question_id: 'q1000003-0000-0000-0000-000000000006', teks: 'Kelompok spesifik yang paling merasakan masalah', poin: 10, umpan_balik: 'Tepat! Target pengguna harus spesifik agar solusi tepat sasaran.', is_correct: true },
  { id: 'o1-B6-3', question_id: 'q1000003-0000-0000-0000-000000000006', teks: 'Seluruh masyarakat Indonesia', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o1-B6-4', question_id: 'q1000003-0000-0000-0000-000000000006', teks: 'Pengguna media sosial', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  // Q17 (Set B #7)
  { id: 'o1-B7-1', question_id: 'q1000003-0000-0000-0000-000000000007', teks: 'Target pasar', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o1-B7-2', question_id: 'q1000003-0000-0000-0000-000000000007', teks: 'Strategi pemasaran', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o1-B7-3', question_id: 'q1000003-0000-0000-0000-000000000007', teks: 'Titik masalah yang dirasakan pengguna', poin: 10, umpan_balik: 'Tepat! Pain Point adalah titik masalah atau kesulitan nyata yang dialami pengguna.', is_correct: true },
  { id: 'o1-B7-4', question_id: 'q1000003-0000-0000-0000-000000000007', teks: 'Biaya operasional', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  // Q18 (Set B #8)
  { id: 'o1-B8-1', question_id: 'q1000003-0000-0000-0000-000000000008', teks: 'Tugas spesifik yang ingin diselesaikan pengguna', poin: 10, umpan_balik: 'Tepat! Jobs to be Done menjelaskan tugas spesifik yang ingin diselesaikan pengguna.', is_correct: true },
  { id: 'o1-B8-2', question_id: 'q1000003-0000-0000-0000-000000000008', teks: 'Pekerjaan developer', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o1-B8-3', question_id: 'q1000003-0000-0000-0000-000000000008', teks: 'Kewajiban investor', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o1-B8-4', question_id: 'q1000003-0000-0000-0000-000000000008', teks: 'Strategi promosi', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  // Q19 (Set B #9)
  { id: 'o1-B9-1', question_id: 'q1000003-0000-0000-0000-000000000009', teks: 'Lokasi kantor startup', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o1-B9-2', question_id: 'q1000003-0000-0000-0000-000000000009', teks: 'Situasi yang memicu masalah muncul', poin: 10, umpan_balik: 'Tepat! Konteks (When & Where) menjelaskan situasi yang memicu munculnya masalah.', is_correct: true },
  { id: 'o1-B9-3', question_id: 'q1000003-0000-0000-0000-000000000009', teks: 'Lokasi investor', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o1-B9-4', question_id: 'q1000003-0000-0000-0000-000000000009', teks: 'Tempat pemasaran produk', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  // Q20 (Set B #10)
  { id: 'o1-B10-1', question_id: 'q1000003-0000-0000-0000-000000000010', teks: 'SWOT', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o1-B10-2', question_id: 'q1000003-0000-0000-0000-000000000010', teks: 'Lean Canvas', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  { id: 'o1-B10-3', question_id: 'q1000003-0000-0000-0000-000000000010', teks: '5 Whys', poin: 10, umpan_balik: 'Tepat! Metode 5 Whys digunakan untuk menggali hingga ke akar masalah.', is_correct: true },
  { id: 'o1-B10-4', question_id: 'q1000003-0000-0000-0000-000000000010', teks: 'Benchmarking', poin: 0, umpan_balik: 'Keliru.', is_correct: false },
  ...modul1SetCOptions,
  ...modul2Options,
  ...modul3Options,
  ...modul4Options,
  ...modul5Options,
  ...modul6Options,
  ...modul7Options,
  ...modul8Options,
  ...modul9Options,
  ...modul10Options
];

// ─── 6. ESSAY RUBRICS (Sesuai PRD Hal. 34–41) ─────────────────────────────────
// Kolom: id, question_id, kunci_jawaban, kata_kunci, rubrik_skor, created_at
export const essay_rubrics = [
  // ─── Set A Essay Rubrics (PRD Essay No. 1–5) ───
  {
    id: 'er-0000001-0000-0000-0000-000000000001',
    question_id: 'q1000002-0000-0000-0000-000000000001',
    kunci_jawaban: 'Value Driven adalah pola pikir startup yang berfokus pada penciptaan nilai (value) bagi pengguna dengan menyelesaikan masalah nyata yang mereka alami. Keputusan bisnis, fitur, dan inovasi dibuat berdasarkan manfaat yang diberikan kepada pengguna, bukan hanya teknologi atau keuntungan semata.',
    kata_kunci: ['nilai', 'value', 'pengguna', 'customer', 'masalah nyata', 'manfaat', 'kebutuhan pengguna'],
    rubrik_skor: { '10': 'Menjelaskan penciptaan nilai bagi pengguna dari penyelesaian masalah nyata', '9': 'Menyebutkan manfaat bagi pengguna namun belum mengaitkan penyelesaian masalah nyata', '8': 'Jawaban terlalu umum', '7': 'Hanya menyebut produk disukai pelanggan', '0': 'Tidak relevan' },
    created_at: now()
  },
  {
    id: 'er-0000001-0000-0000-0000-000000000002',
    question_id: 'q1000002-0000-0000-0000-000000000002',
    kunci_jawaban: 'Karena solusi dan teknologi dapat berubah, tetapi masalah pengguna tetap menjadi dasar kebutuhan pasar. Dengan memahami masalah terlebih dahulu, startup dapat menciptakan solusi yang relevan, dibutuhkan, dan memiliki peluang adopsi yang lebih tinggi.',
    kata_kunci: ['masalah pengguna', 'solusi bisa berubah', 'kebutuhan pasar', 'relevan', 'validasi'],
    rubrik_skor: { '10': 'Menjelaskan masalah sebagai dasar kebutuhan pasar & solusi relevan', '9': 'Menyebutkan pemahaman kebutuhan pengguna sebelum solusi', '8': 'Terlalu umum', '7': 'Hanya menyebut teknologi bukan terpenting', '0': 'Tidak relevan' },
    created_at: now()
  },
  {
    id: 'er-0000001-0000-0000-0000-000000000003',
    question_id: 'q1000002-0000-0000-0000-000000000003',
    kunci_jawaban: 'Agility adalah kemampuan startup untuk bergerak cepat, menerima feedback, beradaptasi terhadap perubahan, melakukan eksperimen, dan terus memperbaiki produk berdasarkan data serta kebutuhan pengguna.',
    kata_kunci: ['bergerak cepat', 'adaptasi', 'feedback', 'eksperimen', 'perbaikan berkelanjutan'],
    rubrik_skor: { '10': 'Menjelaskan bergerak cepat, adaptasi, feedback, dan eksperimen', '9': 'Menyebutkan adaptasi dan masukan pengguna', '8': 'Hanya menyebut fleksibel', '7': 'Hanya menyebut bekerja cepat', '0': 'Tidak relevan' },
    created_at: now()
  },
  {
    id: 'er-0000001-0000-0000-0000-000000000004',
    question_id: 'q1000002-0000-0000-0000-000000000004',
    kunci_jawaban: 'Problem-Solution Fit adalah kondisi ketika solusi yang dibuat terbukti mampu menyelesaikan masalah penting yang dialami target pengguna. Tahapan ini penting karena mengurangi risiko membangun produk yang tidak dibutuhkan pasar.',
    kata_kunci: ['solusi sesuai masalah', 'validasi', 'kebutuhan pengguna', 'mengurangi risiko', 'dibutuhkan pasar'],
    rubrik_skor: { '10': 'Menjelaskan kecocokan solusi-masalah dan pengurangan risiko pasar', '9': 'Menyebutkan solusi terbukti sesuai kebutuhan pengguna', '8': 'Terlalu umum', '7': 'Hanya menyebut produk bekerja dengan baik', '0': 'Tidak relevan' },
    created_at: now()
  },
  {
    id: 'er-0000001-0000-0000-0000-000000000005',
    question_id: 'q1000002-0000-0000-0000-000000000005',
    kunci_jawaban: 'Karena startup harus memastikan masalah tersebut benar-benar dialami pengguna, cukup penting untuk diselesaikan, dan layak dijadikan peluang bisnis sehingga tidak membuang waktu, biaya, dan sumber daya untuk produk yang tidak dibutuhkan.',
    kata_kunci: ['memastikan masalah nyata', 'kebutuhan pengguna', 'mengurangi risiko', 'efisiensi biaya', 'validasi'],
    rubrik_skor: { '10': 'Menjelaskan kepastian masalah nyata dan efisiensi waktu/biaya/sumber daya', '9': 'Menyebutkan produk sesuai kebutuhan pengguna', '8': 'Terlalu umum', '7': 'Hanya menyebut urutan proses', '0': 'Tidak relevan' },
    created_at: now()
  },
  // ─── Set B Essay Rubrics (PRD Essay No. 6–10) ───
  {
    id: 'er-0000001-0000-0000-0000-000000000006',
    question_id: 'q1000004-0000-0000-0000-000000000001',
    kunci_jawaban: 'Keluhan pelanggan menunjukkan masalah dan hambatan yang benar-benar dialami pengguna. Data tersebut dapat menjadi sumber ide untuk menciptakan solusi baru, meningkatkan produk, atau menemukan peluang bisnis yang belum terpenuhi.',
    kata_kunci: ['keluhan pelanggan', 'masalah nyata', 'peluang inovasi', 'kebutuhan pengguna', 'perbaikan produk'],
    rubrik_skor: { '10': 'Menyebutkan keluhan pelanggan dan perbaikan/inovasi', '8': 'Menyebutkan kebutuhan pengguna', '0': 'Tidak relevan' },
    created_at: now()
  },
  {
    id: 'er-0000001-0000-0000-0000-000000000007',
    question_id: 'q1000004-0000-0000-0000-000000000002',
    kunci_jawaban: 'Problem Statement Canvas adalah alat untuk mendefinisikan, menganalisis, dan memahami masalah pengguna secara terstruktur sehingga tim dapat mengidentifikasi akar masalah, dampak, konteks, serta peluang solusi.',
    kata_kunci: ['alat analisis', 'masalah pengguna', 'terstruktur', 'akar masalah', 'peluang solusi'],
    rubrik_skor: { '10': 'Menyebutkan alat analisis dan akar masalah terstruktur', '8': 'Menyebutkan analisis masalah umum', '0': 'Tidak relevan' },
    created_at: now()
  },
  {
    id: 'er-0000001-0000-0000-0000-000000000008',
    question_id: 'q1000004-0000-0000-0000-000000000003',
    kunci_jawaban: "Empat strategi AI Prompting yaitu: 1. AI sebagai Market Researcher. 2. AI sebagai Interview Simulator. 3. AI sebagai Competitor Analyst. 4. AI sebagai Devil's Advocate.",
    kata_kunci: ['market researcher', 'interview simulator', 'competitor analyst', 'devil advocate'],
    rubrik_skor: { '10': 'Menyebutkan keempat strategi AI Prompting', '8': 'Menjelaskan sebagian strategi', '0': 'Tidak relevan' },
    created_at: now()
  },
  {
    id: 'er-0000001-0000-0000-0000-000000000009',
    question_id: 'q1000004-0000-0000-0000-000000000004',
    kunci_jawaban: 'Pain Point adalah keluhan atau masalah yang dirasakan pengguna, sedangkan Root Cause adalah penyebab utama yang menimbulkan masalah tersebut.',
    kata_kunci: ['pain point', 'gejala masalah', 'root cause', 'penyebab utama'],
    rubrik_skor: { '10': 'Menjelaskan perbedaan pain point dan root cause', '8': 'Menjelaskan salah satunya', '0': 'Tidak relevan' },
    created_at: now()
  },
  {
    id: 'er-0000001-0000-0000-0000-000000000010',
    question_id: 'q1000004-0000-0000-0000-000000000005',
    kunci_jawaban: 'Karena tidak semua orang mengalami masalah yang sama. Target yang terlalu luas membuat solusi sulit fokus, sedangkan segmentasi yang spesifik membantu validasi dan pengembangan solusi yang lebih tepat.',
    kata_kunci: ['segmentasi', 'spesifik', 'fokus', 'kebutuhan berbeda', 'target pengguna'],
    rubrik_skor: { '10': 'Menjelaskan alasan segmentasi dan kebutuhan yang berbeda', '8': 'Menjelaskan target pasar', '0': 'Tidak relevan' },
    created_at: now()
  },
  ...modul1SetCRubrics,
  ...modul2Rubrics,
  ...modul3Rubrics,
  ...modul4Rubrics,
  ...modul5Rubrics,
  ...modul6Rubrics,
  ...modul7Rubrics,
  ...modul8Rubrics,
  ...modul9Rubrics,
  ...modul10Rubrics
];

// ─── 7. ATTEMPTS ──────────────────────────────────────────────────────────────
// Kolom: id, user_id, course_id, attempt_number, set_paket, mulai, selesai,
//        total_poin_pg, total_poin_essay, nilai, lulus, cooldown_until
export const attempts = [];

// ─── 8. ANSWERS ───────────────────────────────────────────────────────────────
// Kolom: id, attempt_id, question_id, jawaban, poin, label, catatan_evaluasi, created_at
export const answers = [];

// ─── 9. PROGRESS ──────────────────────────────────────────────────────────────
// Kolom: id, user_id, course_id, bagian_selesai (array), nilai_terbaik,
//        status ('locked'|'unlocked'|'passed'), unlocked_at, passed_at, updated_at
export const progress = [];

// ─── Helper Functions ─────────────────────────────────────────────────────────

/**
 * Inisialisasi baris progress untuk user baru (10 modul).
 * Modul 1 = 'unlocked', Modul 2–10 = 'locked' (Progressive Gating sesuai PRD).
 */
export function initUserProgress(userId) {
  const ts = new Date().toISOString();
  courses.forEach((course) => {
    const existing = progress.find(p => p.user_id === userId && p.course_id === course.id);
    if (!existing) {
      progress.push({
        id: uuidv4(),
        user_id: userId,
        course_id: course.id,
        bagian_selesai: [],
        nilai_terbaik: 0,
        status: course.urutan === 1 ? 'unlocked' : 'locked',
        unlocked_at: course.urutan === 1 ? ts : null,
        passed_at: null,
        updated_at: ts
      });
    }
  });
}

export { uuidv4 };