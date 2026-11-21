/**
 * VINIX7 REST API Client
 * Mengikuti Kesepakatan Kontrak Data & Endpoint (PRD Bagian 11)
 */

import {
  INITIAL_COURSES,
  MOCK_QUESTIONS,
  getStoredProgress,
  saveStoredProgress,
  getStoredAttempts,
  saveStoredAttempts
} from './mockData';

export const USE_REAL_BACKEND = true;
export const API_BASE_URL = import.meta.env?.VITE_API_URL || 'http://localhost:5000/api';

const DEMO_ACCOUNT = {
  nama: 'Peserta Magang VINIX7',
  email: 'intern@vinix7.com',
  password: 'PasswordDemo123!'
};

let autoAuthPromise = null;

/**
 * Otomatis login / register akun demo jika belum memiliki token JWT
 */
async function ensureAuthToken() {
  const existingToken = localStorage.getItem('vinix7_token');
  if (existingToken && existingToken !== 'mock-jwt-token-vinix7') {
    return existingToken;
  }

  if (autoAuthPromise) return autoAuthPromise;

  autoAuthPromise = (async () => {
    try {
      // 1. Coba login dulu jika akun demo sudah pernah dibuat di Supabase
      let res = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: DEMO_ACCOUNT.email,
          password: DEMO_ACCOUNT.password
        })
      });

      // 2. Jika belum terdaftar di Supabase, otomatis register akun demo
      if (!res.ok) {
        res = await fetch(`${API_BASE_URL}/auth/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(DEMO_ACCOUNT)
        });
      }

      const data = await res.json();
      if (data.token) {
        localStorage.setItem('vinix7_token', data.token);
        return data.token;
      }
      return null;
    } finally {
      autoAuthPromise = null;
    }
  })();

  return autoAuthPromise;
}

/**
 * Wrapper fetch dengan otomatis menyisipkan Bearer Token & retry jika 401
 */
async function authFetch(url, options = {}) {
  let token = await ensureAuthToken();

  const buildHeaders = (t) => ({
    ...(options.headers || {}),
    ...(t ? { Authorization: `Bearer ${t}` } : {})
  });

  let res = await fetch(url, {
    ...options,
    headers: buildHeaders(token)
  });

  // Jika token lama kedaluwarsa (401), bersihkan lalu ambil token baru sekali lagi
  if (res.status === 401) {
    localStorage.removeItem('vinix7_token');
    token = await ensureAuthToken();
    res = await fetch(url, {
      ...options,
      headers: buildHeaders(token)
    });
  }

  return res;
}

async function handleResponse(res) {
  const data = await res.json();
  if (!res.ok) {
    const err = new Error(data.message || data.error || 'Terjadi kesalahan pada server');
    err.code = data.error;
    err.data = data;
    throw err;
  }
  return data;
}

/** Helper text normalizer for mock essay evaluation */
function normalize(str) {
  if (!str) return '';
  return str.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

export const apiClient = {
  // 1. Auth: Login
  async login(emailOrNama, password) {
    if (USE_REAL_BACKEND) {
      const res = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailOrNama, identifier: emailOrNama, password })
      });
      const data = await handleResponse(res);
      if (data.token) localStorage.setItem('vinix7_token', data.token);
      if (data.user) localStorage.setItem('vinix7_user', JSON.stringify(data.user));
      return data;
    }

    await new Promise(r => setTimeout(r, 300));
    const registeredUsers = JSON.parse(localStorage.getItem('vinix7_registered_users') || '[]');
    const clean = (emailOrNama || '').toLowerCase().trim();
    const matched = registeredUsers.find(u => 
      (u.email && u.email.toLowerCase() === clean) || 
      (u.nama && u.nama.toLowerCase() === clean) ||
      (u.nama && u.nama.toLowerCase().includes(clean))
    );

    const user = matched ? {
      id: matched.id,
      nama: matched.nama,
      email: matched.email,
      avatar: matched.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
    } : {
      id: 'u-' + Date.now(),
      nama: emailOrNama.includes('@') ? emailOrNama.split('@')[0] : emailOrNama,
      email: emailOrNama.includes('@') ? emailOrNama : `${emailOrNama.toLowerCase().replace(/\s+/g, '')}@vinix7.com`,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
    };

    localStorage.setItem('vinix7_user', JSON.stringify(user));
    localStorage.setItem('vinix7_token', 'mock-jwt-token-vinix7');
    return { success: true, user, token: 'mock-jwt-token-vinix7' };
  },

  // 2. Auth: Register
  async register(nama, email, password) {
    if (USE_REAL_BACKEND) {
      const res = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nama, email, password })
      });
      const data = await handleResponse(res);
      // Simpan ke local mock storage sebagai cadangan
      const registeredUsers = JSON.parse(localStorage.getItem('vinix7_registered_users') || '[]');
      registeredUsers.push({ id: data.user?.id || 'u-' + Date.now(), nama, email, password });
      localStorage.setItem('vinix7_registered_users', JSON.stringify(registeredUsers));
      return data;
    }

    await new Promise(r => setTimeout(r, 400));
    const newUser = {
      id: 'u-' + Date.now(),
      nama: (nama || 'Peserta Magang').trim(),
      email: email.trim(),
      password,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
    };
    const registeredUsers = JSON.parse(localStorage.getItem('vinix7_registered_users') || '[]');
    registeredUsers.push(newUser);
    localStorage.setItem('vinix7_registered_users', JSON.stringify(registeredUsers));
    return { success: true, user: newUser };
  },

  // 3. Courses: Get All (with Progressive Gating Status)
  async getCourses() {
    if (USE_REAL_BACKEND) {
      const res = await authFetch(`${API_BASE_URL}/courses`);
      const data = await handleResponse(res);
      const list = Array.isArray(data) ? data : (data.courses || data.data || []);
      return list.map(course => {
        const bagianSelesai = course.bagianSelesai || course.bagian_selesai || [];
        const totalSections = course.totalSections ?? course.total_sections ?? (course.sections?.length || 0);
        const readingPercentage = totalSections > 0
          ? Math.min(100, Math.round((bagianSelesai.length / totalSections) * 100))
          : 0;
        return {
          ...course,
          estimasiWaktu: course.estimasiWaktu || course.estimasi_waktu,
          pdfUrl: course.pdfUrl || course.pdf_url,
          bagianSelesai,
          bagian_selesai: bagianSelesai,
          nilaiTerbaik: Number(course.nilaiTerbaik ?? course.nilai_terbaik ?? 0),
          totalSections,
          total_sections: totalSections,
          readingPercentage,
          isCompleted: course.status === 'passed'
        };
      });
    }

    await new Promise(r => setTimeout(r, 200));
    const progressMap = getStoredProgress();

    return INITIAL_COURSES.map(course => {
      const prog = progressMap[course.id] || { status: 'locked', bagianSelesai: [], nilaiTerbaik: 0 };
      const totalSections = course.sections.length;
      const readingPercentage = totalSections > 0
        ? Math.min(100, Math.round((prog.bagianSelesai.length / totalSections) * 100))
        : 0;
      return {
        ...course,
        status: prog.status,
        bagianSelesai: prog.bagianSelesai,
        nilaiTerbaik: prog.nilaiTerbaik,
        totalSections,
        readingPercentage,
        isCompleted: prog.status === 'passed'
      };
    });
  },

  // 4. Course Detail & Sections
  async getCourseById(courseId) {
    if (USE_REAL_BACKEND) {
      const res = await authFetch(`${API_BASE_URL}/courses/${courseId}`);
      const data = await handleResponse(res);
      const course = data.course || data;
      const bagianSelesai = course.bagianSelesai || course.bagian_selesai || [];
      const sections = (course.sections || []).map(sec => ({
        ...sec,
        pdfUrl: sec.pdfUrl || sec.pdf_url,
        pdfTitle: sec.pdfTitle || sec.pdf_title
      }));
      const totalSections = sections.length;
      const readingPercentage = totalSections > 0
        ? Math.min(100, Math.round((bagianSelesai.length / totalSections) * 100))
        : 0;

      return {
        ...course,
        estimasiWaktu: course.estimasiWaktu || course.estimasi_waktu,
        pdfUrl: course.pdfUrl || course.pdf_url,
        bagianSelesai,
        bagian_selesai: bagianSelesai,
        nilaiTerbaik: Number(course.nilaiTerbaik ?? course.nilai_terbaik ?? 0),
        totalSections,
        readingPercentage,
        sections
      };
    }

    await new Promise(r => setTimeout(r, 200));
    const course = INITIAL_COURSES.find(c => c.id === courseId);
    if (!course) throw new Error('Course tidak ditemukan');

    const progressMap = getStoredProgress();
    const prog = progressMap[courseId] || { status: 'locked', bagianSelesai: [], nilaiTerbaik: 0 };

    return {
      ...course,
      status: prog.status,
      bagianSelesai: prog.bagianSelesai,
      nilaiTerbaik: prog.nilaiTerbaik
    };
  },

  // 5. Complete a Section
  async completeSection(courseId, sectionUrutan) {
    if (USE_REAL_BACKEND) {
      const res = await authFetch(`${API_BASE_URL}/courses/${courseId}/sections/${sectionUrutan}/complete`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await handleResponse(res);
      const bagianSelesai = data.bagianSelesai || data.bagian_selesai || [];
      return {
        ...data,
        bagianSelesai,
        bagian_selesai: bagianSelesai
      };
    }

    await new Promise(r => setTimeout(r, 150));
    const progressMap = getStoredProgress();
    if (!progressMap[courseId]) {
      progressMap[courseId] = { status: 'unlocked', bagianSelesai: [], nilaiTerbaik: 0 };
    }

    if (!progressMap[courseId].bagianSelesai.includes(sectionUrutan)) {
      progressMap[courseId].bagianSelesai.push(sectionUrutan);
      progressMap[courseId].bagianSelesai.sort((a, b) => a - b);
      saveStoredProgress(progressMap);
    }

    return {
      success: true,
      bagianSelesai: progressMap[courseId].bagianSelesai,
      bagian_selesai: progressMap[courseId].bagianSelesai
    };
  },

  async markSectionComplete(courseId, sectionUrutan) {
    return this.completeSection(courseId, sectionUrutan);
  },

  // 6. Exam: Start Session
  async startExam(courseId) {
    if (USE_REAL_BACKEND) {
      const res = await authFetch(`${API_BASE_URL}/courses/${courseId}/exam/start`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await res.json();
      if (res.status === 429 || data.error === 'COOLDOWN_ACTIVE') {
        return data;
      }
      if (!res.ok) {
        throw new Error(data.message || data.error || 'Gagal memulai ujian');
      }
      return data;
    }

    await new Promise(r => setTimeout(r, 300));
    const attempts = getStoredAttempts();
    const courseAttempts = attempts.filter(a => a.courseId === courseId);
    const lastAttempt = courseAttempts[courseAttempts.length - 1];

    if (lastAttempt && !lastAttempt.lulus && lastAttempt.cooldownUntil) {
      const remainingMs = new Date(lastAttempt.cooldownUntil).getTime() - Date.now();
      if (remainingMs > 0) {
        const remainingSeconds = Math.ceil(remainingMs / 1000);
        return {
          error: 'COOLDOWN_ACTIVE',
          message: `Mohon tunggu jeda waktu cooldown selama ${remainingSeconds} detik sebelum mengulang ujian.`,
          remainingSeconds,
          cooldownUntil: lastAttempt.cooldownUntil
        };
      }
    }

    const attemptNumber = courseAttempts.length + 1;
    let setPaket = 'A';
    if (attemptNumber === 2) setPaket = 'B';
    else if (attemptNumber >= 3) setPaket = 'C';

    const rawQuestions = (MOCK_QUESTIONS[courseId] && MOCK_QUESTIONS[courseId][setPaket]) 
      || MOCK_QUESTIONS['c1']['A'];

    const pgQuestions = rawQuestions.filter(q => q.tipe === 'pilihan_ganda').sort((a, b) => (a.urutan || 0) - (b.urutan || 0));
    const essayQuestions = rawQuestions.filter(q => q.tipe === 'essay').sort((a, b) => (a.urutan || 0) - (b.urutan || 0));
    const courseQuestions = [...pgQuestions, ...essayQuestions];

    const attemptId = 'att-' + Date.now();

    const clientQuestions = courseQuestions.map((q, idx) => ({
      id: q.id,
      urutan: idx + 1,
      topik: q.topik,
      tipe: q.tipe,
      teks: q.teks,
      options: q.options ? q.options.map(opt => ({ id: opt.id, teks: opt.teks })) : null
    }));

    const newAttempt = {
      id: attemptId,
      courseId,
      attemptNumber,
      setPaket,
      mulai: new Date().toISOString(),
      selesai: null,
      nilai: null,
      lulus: null,
      cooldownUntil: null
    };
    attempts.push(newAttempt);
    saveStoredAttempts(attempts);

    return {
      attemptId,
      courseId,
      attemptNumber,
      setPaket,
      questions: clientQuestions
    };
  },

  // 7. Exam: Submit Answers
  async submitExam(attemptId, courseId, submittedAnswers) {
    if (USE_REAL_BACKEND) {
      const res = await authFetch(`${API_BASE_URL}/attempts/${attemptId}/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers: submittedAnswers })
      });
      return await handleResponse(res);
    }

    await new Promise(r => setTimeout(r, 600));
    const attempts = getStoredAttempts();
    const attemptIndex = attempts.findIndex(a => a.id === attemptId);
    if (attemptIndex === -1) throw new Error('Attempt tidak valid');

    const attempt = attempts[attemptIndex];
    const sourceQuestions = (MOCK_QUESTIONS[courseId] && MOCK_QUESTIONS[courseId][attempt.setPaket]) 
      || MOCK_QUESTIONS['c1']['A'];

    let totalPG = 0;
    let totalEssay = 0;
    const evaluatedQuestions = [];
    const topicStats = {};

    for (const q of sourceQuestions) {
      const studentAns = submittedAnswers[q.id];
      let poin = 0;
      let label = 'Salah';
      let feedback = '';

      if (q.tipe === 'pilihan_ganda') {
        const isCorrect = studentAns === q.kunciJawaban;
        poin = isCorrect ? 10 : 0;
        label = isCorrect ? 'Tepat' : 'Salah';
        feedback = q.pembahasan || (isCorrect ? 'Jawaban Anda benar!' : 'Jawaban Anda kurang tepat.');
        totalPG += poin;
      } else if (q.tipe === 'essay') {
        const keywords = q.keywords || [];
        const normAns = normalize(studentAns);
        let matches = 0;
        for (const kw of keywords) {
          if (normAns.includes(normalize(kw))) matches++;
        }
        const ratio = keywords.length > 0 ? (matches / keywords.length) : 0;

        if (matches >= 2 || ratio >= 0.35) {
          poin = 10;
          label = 'Tepat';
          feedback = 'Jawaban ringkas, tepat sasaran, dan poin kunci utama terpenuhi!';
        } else if (matches >= 1 || ratio >= 0.2) {
          poin = 8;
          label = 'Kurang Tepat';
          feedback = 'Konsep dasar sudah benar, tambahkan sedikit detail kata kunci materi.';
        } else {
          poin = 0;
          label = 'Salah';
          feedback = 'Jawaban belum mencakup kata kunci utama dari materi slide.';
        }
        totalEssay += poin;
      }

      if (!topicStats[q.topik]) {
        topicStats[q.topik] = { earned: 0, possible: 0 };
      }
      topicStats[q.topik].earned += poin;
      topicStats[q.topik].possible += 10;

      evaluatedQuestions.push({
        questionId: q.id,
        urutan: q.urutan,
        topik: q.topik,
        tipe: q.tipe,
        teks: q.teks,
        options: q.options || null,
        jawabanPengguna: studentAns || '(Tidak dijawab)',
        kunciJawaban: q.tipe === 'pilihan_ganda' ? q.kunciJawaban : q.kunciJawabanIdeal,
        poin,
        label,
        pembahasan: feedback
      });
    }

    const rawScore = ((0.60 * (totalPG / 100)) + (0.40 * (totalEssay / 50))) * 100;
    const finalScore = Math.round(rawScore);
    const isPassed = finalScore >= 80;
    const cooldownUntil = !isPassed ? new Date(Date.now() + 60 * 1000).toISOString() : null;

    const weakTopics = Object.entries(topicStats)
      .filter(([_, stats]) => (stats.earned / stats.possible) < 0.7)
      .map(([topik]) => topik);

    attempt.selesai = new Date().toISOString();
    attempt.totalPG = totalPG;
    attempt.totalEssay = totalEssay;
    attempt.nilai = finalScore;
    attempt.lulus = isPassed;
    attempt.cooldownUntil = cooldownUntil;
    attempt.weakTopics = weakTopics;
    attempt.evaluatedQuestions = evaluatedQuestions;

    attempts[attemptIndex] = attempt;
    saveStoredAttempts(attempts);

    const progressMap = getStoredProgress();
    if (!progressMap[courseId]) {
      progressMap[courseId] = { status: 'unlocked', bagianSelesai: [], nilaiTerbaik: 0 };
    }

    if (finalScore > (progressMap[courseId].nilaiTerbaik || 0)) {
      progressMap[courseId].nilaiTerbaik = finalScore;
    }

    if (isPassed) {
      progressMap[courseId].status = 'passed';
      const currentCourse = INITIAL_COURSES.find(c => c.id === courseId);
      if (currentCourse) {
        const nextCourse = INITIAL_COURSES.find(c => c.urutan === currentCourse.urutan + 1);
        if (nextCourse && progressMap[nextCourse.id]?.status === 'locked') {
          progressMap[nextCourse.id].status = 'unlocked';
        }
      }
    }
    saveStoredProgress(progressMap);

    return {
      attemptId,
      finalScore,
      isPassed,
      totalPG,
      totalEssay,
      weakTopics,
      cooldownUntil,
      attemptNumber: attempt.attemptNumber,
      setPaket: attempt.setPaket,
      evaluatedQuestions
    };
  },

  // 8. Get Attempt Result
  async getAttemptResult(attemptId) {
    if (USE_REAL_BACKEND) {
      const res = await authFetch(`${API_BASE_URL}/attempts/${attemptId}/result`);
      return await handleResponse(res);
    }

    await new Promise(r => setTimeout(r, 200));
    const attempts = getStoredAttempts();
    const attempt = attempts.find(a => a.id === attemptId);
    if (!attempt) throw new Error('Hasil ujian tidak ditemukan');
    return attempt;
  },

  // 8b. Get All User Exam Attempts (History)
  async getUserAttempts() {
    if (USE_REAL_BACKEND) {
      const res = await authFetch(`${API_BASE_URL}/attempts`);
      const data = await handleResponse(res);
      const list = Array.isArray(data) ? data : (data.attempts || data.data || []);
      return list.map(a => ({
        ...a,
        id: a.id || a.attemptId,
        courseId: a.courseId || a.course_id,
        courseUrutan: a.courseUrutan ?? 1,
        courseJudul: a.courseJudul || 'Modul Pembelajaran',
        attemptNumber: a.attemptNumber ?? a.attempt_number ?? 1,
        setPaket: a.setPaket || a.set_paket || 'A',
        nilai: Number(a.nilai ?? 0),
        lulus: Boolean(a.lulus ?? Number(a.nilai ?? 0) >= 80)
      }));
    }

    await new Promise(r => setTimeout(r, 200));
    const courseMap = new Map(INITIAL_COURSES.map(c => [c.id, c]));
    return getStoredAttempts()
      .filter(a => a.selesai)
      .sort((a, b) => new Date(b.selesai).getTime() - new Date(a.selesai).getTime())
      .map(a => {
        const course = courseMap.get(a.courseId);
        return {
          ...a,
          courseUrutan: course?.urutan ?? 1,
          courseJudul: course?.judul ?? 'Modul Pembelajaran'
        };
      });
  },

  // 9. Get User Progress Summary
  async getUserProgress() {
    if (USE_REAL_BACKEND) {
      const res = await authFetch(`${API_BASE_URL}/me/progress`);
      return await handleResponse(res);
    }

    await new Promise(r => setTimeout(r, 200));
    const progressMap = getStoredProgress();
    const attempts = getStoredAttempts();

    const passedCount = Object.values(progressMap).filter(p => p.status === 'passed').length;
    const scores = Object.values(progressMap).map(p => p.nilaiTerbaik).filter(s => s > 0);
    const averageScore = scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;

    return {
      totalCourses: INITIAL_COURSES.length,
      passedCount,
      percentage: Math.round((passedCount / INITIAL_COURSES.length) * 100),
      averageScore,
      totalAttempts: attempts.length,
      progressMap
    };
  },

  // 10. Evaluator Control: Buka Semua Gembok Modul
  async unlockAllCourses() {
    if (USE_REAL_BACKEND) {
      const res = await authFetch(`${API_BASE_URL}/me/progress/unlock-all`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      return await handleResponse(res);
    }

    const progressMap = getStoredProgress();
    INITIAL_COURSES.forEach(c => {
      if (!progressMap[c.id]) {
        progressMap[c.id] = { status: 'unlocked', bagianSelesai: [], nilaiTerbaik: 0 };
      } else if (progressMap[c.id].status === 'locked') {
        progressMap[c.id].status = 'unlocked';
      }
    });
    saveStoredProgress(progressMap);
    return { success: true };
  },

  // 11. Evaluator Control: Reset Ulang Seluruh Progres ke Awal
  async resetUserProgress() {
    localStorage.removeItem('vinix7_progress_state');
    localStorage.removeItem('vinix7_attempts_state');

    if (USE_REAL_BACKEND) {
      const res = await authFetch(`${API_BASE_URL}/me/progress/reset`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      return await handleResponse(res);
    }

    return { success: true };
  }
};