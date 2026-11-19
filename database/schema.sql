CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. ENUM TYPES
DO $$ BEGIN CREATE TYPE course_status_enum AS ENUM ('locked', 'unlocked', 'passed');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN CREATE TYPE question_type_enum AS ENUM ('pilihan_ganda', 'essay');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN CREATE TYPE set_paket_enum AS ENUM ('A', 'B', 'C');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN CREATE TYPE answer_label_enum AS ENUM ('Tepat', 'Kurang Tepat', 'Salah');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- 2. USERS
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nama VARCHAR(150) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    avatar_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. COURSES (10 modul berjenjang)
CREATE TABLE IF NOT EXISTS courses (
    id TEXT PRIMARY KEY DEFAULT uuid_generate_v4()::text,
    urutan INT UNIQUE NOT NULL, -- 1 s/d 10
    judul VARCHAR(255) NOT NULL,
    ringkasan TEXT NOT NULL,
    kategori VARCHAR(100) DEFAULT 'Web Educational Technology',
    estimasi_waktu VARCHAR(50) DEFAULT '45 Menit',
    pdf_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    level VARCHAR(50),
    icon VARCHAR(50),
    referensi_eksternal TEXT
);

-- 4. SECTIONS (materi bacaan per modul)
CREATE TABLE IF NOT EXISTS sections (
    id TEXT PRIMARY KEY DEFAULT uuid_generate_v4()::text,
    course_id TEXT NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    urutan INT NOT NULL,
    judul VARCHAR(255) NOT NULL,
    isi TEXT NOT NULL, -- Markdown
    pdf_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    pdf_title VARCHAR(255),
    CONSTRAINT unique_course_section_urutan UNIQUE (course_id, urutan)
);

-- 5. QUESTIONS (45 soal per modul: 30 PG + 15 essay)
CREATE TABLE IF NOT EXISTS questions (
    id TEXT PRIMARY KEY DEFAULT uuid_generate_v4()::text,
    course_id TEXT NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    set_paket set_paket_enum NOT NULL,
    topik VARCHAR(150) NOT NULL, -- label untuk analisis topik lemah
    tipe question_type_enum NOT NULL,
    teks TEXT NOT NULL,
    urutan INT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 6. OPTIONS (opsi pilihan ganda). is_correct dihitung otomatis dari poin: JANGAN diisi manual.
CREATE TABLE IF NOT EXISTS options (
    id TEXT PRIMARY KEY DEFAULT uuid_generate_v4()::text,
    question_id TEXT NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
    teks TEXT NOT NULL,
    poin INT NOT NULL DEFAULT 0, -- 10 benar, 0 pengecoh
    umpan_balik TEXT,
    is_correct BOOLEAN GENERATED ALWAYS AS (poin = 10) STORED
);

-- 7. ESSAY RUBRICS (hanya dibaca server, TIDAK boleh sampai ke client)
CREATE TABLE IF NOT EXISTS essay_rubrics (
    id TEXT PRIMARY KEY DEFAULT uuid_generate_v4()::text,
    question_id TEXT UNIQUE NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
    kunci_jawaban TEXT NOT NULL,
    kata_kunci TEXT[] NOT NULL,
    rubrik_skor JSONB NOT NULL, -- { "10": "...", "9": "...", "8": "...", "7": "...", "0": "..." }
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 8. ATTEMPTS (sesi percobaan ujian akhir)
CREATE TABLE IF NOT EXISTS attempts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    course_id TEXT NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    attempt_number INT NOT NULL,
    set_paket set_paket_enum NOT NULL,
    mulai TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    selesai TIMESTAMP WITH TIME ZONE,
    total_poin_pg NUMERIC(5,2) DEFAULT 0,    -- maks 100
    total_poin_essay NUMERIC(5,2) DEFAULT 0, -- maks 50
    nilai NUMERIC(5,2) DEFAULT 0,            -- (0.6 * PG/100 + 0.4 * Essay/50) * 100
    lulus BOOLEAN DEFAULT FALSE,             -- nilai >= 80
    cooldown_until TIMESTAMP WITH TIME ZONE
);

-- 9. ANSWERS (jawaban peserta per soal)
CREATE TABLE IF NOT EXISTS answers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    attempt_id UUID NOT NULL REFERENCES attempts(id) ON DELETE CASCADE,
    question_id TEXT NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
    jawaban TEXT NOT NULL,
    poin NUMERIC(4,2) NOT NULL DEFAULT 0,
    label answer_label_enum NOT NULL,
    catatan_evaluasi TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 10. PROGRESS (status progressive gating)
CREATE TABLE IF NOT EXISTS progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    course_id TEXT NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    bagian_selesai INT[] DEFAULT '{}',
    nilai_terbaik NUMERIC(5,2) DEFAULT 0,
    status course_status_enum NOT NULL DEFAULT 'locked',
    unlocked_at TIMESTAMP WITH TIME ZONE,
    passed_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_user_course UNIQUE (user_id, course_id)
);

-- INDEXES
CREATE INDEX IF NOT EXISTS idx_sections_course ON sections(course_id, urutan);
CREATE INDEX IF NOT EXISTS idx_questions_course_set ON questions(course_id, set_paket);
CREATE INDEX IF NOT EXISTS idx_options_question ON options(question_id);
CREATE INDEX IF NOT EXISTS idx_attempts_user_course ON attempts(user_id, course_id);
CREATE INDEX IF NOT EXISTS idx_answers_attempt ON answers(attempt_id);
CREATE INDEX IF NOT EXISTS idx_progress_user ON progress(user_id);

-- ROW LEVEL SECURITY: aktif di semua tabel. Tanpa policy = tertutup bagi akses publik
-- (anon/authenticated). Backend memakai Secret/service_role key yang melewati RLS.
ALTER TABLE users         ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses       ENABLE ROW LEVEL SECURITY;
ALTER TABLE sections      ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions     ENABLE ROW LEVEL SECURITY;
ALTER TABLE options       ENABLE ROW LEVEL SECURITY;
ALTER TABLE essay_rubrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE attempts      ENABLE ROW LEVEL SECURITY;
ALTER TABLE answers       ENABLE ROW LEVEL SECURITY;
ALTER TABLE progress      ENABLE ROW LEVEL SECURITY;
