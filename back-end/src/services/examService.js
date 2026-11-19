/**
 * Exam Service (Dual-Store: memory & supabase)
 * Mengelola siklus ujian: start → submit → result → history
 */

import { v4 as uuidv4 } from 'uuid';
import {
  questions, options, essay_rubrics,
  attempts, answers, progress, courses, initUserProgress
} from '../data/memoryStore.js';
import { getSupabaseClient } from '../config/supabase.js';
import { initUserProgressSupabase } from './courseService.js';
import { evaluateEssay, calculateFinalScore } from './scoringEngine.js';
import { determineSetPaket, shuffleArray } from './rotationService.js';
import { checkCooldownActive, computeCooldownDate } from './gatingService.js';

const isSupabase = () => process.env.DATA_STORE === 'supabase';
const isValidUuid = (val) => /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(val || '');

export async function startExam(userId, courseId) {
  if (isSupabase()) {
    if (!isValidUuid(userId)) {
      const err = new Error('Autentikasi diperlukan untuk memulai ujian.');
      err.status = 401;
      throw err;
    }

    const supabase = getSupabaseClient();
    const { data: course, error: cErr } = await supabase
      .from('courses')
      .select('id')
      .eq('id', courseId)
      .maybeSingle();
    if (cErr) throw cErr;
    if (!course) {
      const err = new Error('Modul tidak ditemukan.');
      err.status = 404;
      throw err;
    }

    await initUserProgressSupabase(userId);
    const { data: prog, error: pErr } = await supabase
      .from('progress')
      .select('status')
      .eq('user_id', userId)
      .eq('course_id', courseId)
      .maybeSingle();
    if (pErr) throw pErr;

    if (!prog || prog.status === 'locked') {
      const err = new Error('Modul ini masih terkunci. Selesaikan modul sebelumnya terlebih dahulu.');
      err.status = 403;
      throw err;
    }

    const { data: userCourseAttempts, error: aErr } = await supabase
      .from('attempts')
      .select('id, lulus, cooldown_until, mulai')
      .eq('user_id', userId)
      .eq('course_id', courseId)
      .order('mulai', { ascending: true });
    if (aErr) throw aErr;

    const history = userCourseAttempts || [];
    const lastAttempt = history[history.length - 1];

    if (lastAttempt && !lastAttempt.lulus && lastAttempt.cooldown_until) {
      const cooldown = checkCooldownActive(lastAttempt.cooldown_until);
      if (cooldown.active) {
        const err = new Error(
          `Mohon tunggu jeda waktu cooldown selama ${cooldown.remainingSeconds} detik sebelum mengulang ujian.`
        );
        err.status = 429;
        err.error = 'COOLDOWN_ACTIVE';
        err.remainingSeconds = cooldown.remainingSeconds;
        err.cooldownUntil = lastAttempt.cooldown_until;
        throw err;
      }
    }

    const attemptNumber = history.length + 1;
    const setPaket = determineSetPaket(attemptNumber);

    const { data: rawQuestions, error: qErr } = await supabase
      .from('questions')
      .select('id, urutan, topik, tipe, teks')
      .eq('course_id', courseId)
      .eq('set_paket', setPaket)
      .order('urutan', { ascending: true });
    if (qErr) throw qErr;

    if (!rawQuestions || rawQuestions.length === 0) {
      const err = new Error(`Bank soal Set ${setPaket} untuk modul ini belum tersedia.`);
      err.status = 503;
      throw err;
    }

    let courseQuestions = [...rawQuestions];
    if (attemptNumber >= 4) {
      courseQuestions = shuffleArray(courseQuestions);
    }

    const pgIds = courseQuestions.filter(q => q.tipe === 'pilihan_ganda').map(q => q.id);
    let allOptions = [];
    if (pgIds.length > 0) {
      const { data: optsData, error: oErr } = await supabase
        .from('options')
        .select('id, question_id, teks')
        .in('question_id', pgIds);
      if (oErr) throw oErr;
      allOptions = optsData || [];
    }

    const attemptId = uuidv4();
    const { error: insErr } = await supabase.from('attempts').insert({
      id: attemptId,
      user_id: userId,
      course_id: courseId,
      attempt_number: attemptNumber,
      set_paket: setPaket,
      mulai: new Date().toISOString(),
      selesai: null,
      total_poin_pg: 0,
      total_poin_essay: 0,
      nilai: null,
      lulus: null,
      cooldown_until: null
    });
    if (insErr) throw insErr;

    const clientQuestions = courseQuestions.map((q, idx) => {
      const base = {
        id: q.id,
        urutan: attemptNumber >= 4 ? idx + 1 : q.urutan,
        topik: q.topik,
        tipe: q.tipe,
        teks: q.teks
      };

      if (q.tipe === 'pilihan_ganda') {
        let qOptions = allOptions
          .filter(o => o.question_id === q.id)
          .map(o => ({ id: o.id, teks: o.teks }));

        if (attemptNumber >= 4) {
          qOptions = shuffleArray(qOptions);
        }
        base.options = qOptions;
      }

      return base;
    });

    return {
      attemptId,
      courseId,
      attemptNumber,
      setPaket,
      questions: clientQuestions
    };
  }

  // Mode In-Memory
  initUserProgress(userId);
  const course = courses.find(c => c.id === courseId);
  if (!course) {
    const err = new Error('Modul tidak ditemukan.');
    err.status = 404;
    throw err;
  }

  const prog = progress.find(p => p.user_id === userId && p.course_id === courseId);
  if (!prog || prog.status === 'locked') {
    const err = new Error('Modul ini masih terkunci. Selesaikan modul sebelumnya terlebih dahulu.');
    err.status = 403;
    throw err;
  }

  const userCourseAttempts = attempts
    .filter(a => a.user_id === userId && a.course_id === courseId)
    .sort((a, b) => new Date(a.mulai) - new Date(b.mulai));

  const lastAttempt = userCourseAttempts[userCourseAttempts.length - 1];

  if (lastAttempt && !lastAttempt.lulus && lastAttempt.cooldown_until) {
    const cooldown = checkCooldownActive(lastAttempt.cooldown_until);
    if (cooldown.active) {
      const err = new Error(
        `Mohon tunggu jeda waktu cooldown selama ${cooldown.remainingSeconds} detik sebelum mengulang ujian.`
      );
      err.status = 429;
      err.error = 'COOLDOWN_ACTIVE';
      err.remainingSeconds = cooldown.remainingSeconds;
      err.cooldownUntil = lastAttempt.cooldown_until;
      throw err;
    }
  }

  const attemptNumber = userCourseAttempts.length + 1;
  const setPaket = determineSetPaket(attemptNumber);

  let courseQuestions = questions
    .filter(q => q.course_id === courseId && q.set_paket === setPaket)
    .sort((a, b) => a.urutan - b.urutan);

  if (courseQuestions.length === 0) {
    const err = new Error(`Bank soal Set ${setPaket} untuk modul ini belum tersedia.`);
    err.status = 503;
    throw err;
  }

  if (attemptNumber >= 4) {
    courseQuestions = shuffleArray(courseQuestions);
  }

  const attemptId = uuidv4();
  const newAttempt = {
    id: attemptId,
    user_id: userId,
    course_id: courseId,
    attempt_number: attemptNumber,
    set_paket: setPaket,
    mulai: new Date().toISOString(),
    selesai: null,
    total_poin_pg: 0,
    total_poin_essay: 0,
    nilai: null,
    lulus: null,
    cooldown_until: null
  };
  attempts.push(newAttempt);

  const clientQuestions = courseQuestions.map((q, idx) => {
    const base = {
      id: q.id,
      urutan: attemptNumber >= 4 ? idx + 1 : q.urutan,
      topik: q.topik,
      tipe: q.tipe,
      teks: q.teks
    };

    if (q.tipe === 'pilihan_ganda') {
      let qOptions = options
        .filter(o => o.question_id === q.id)
        .map(o => ({ id: o.id, teks: o.teks }));

      if (attemptNumber >= 4) {
        qOptions = shuffleArray(qOptions);
      }
      base.options = qOptions;
    }

    return base;
  });

  return {
    attemptId,
    courseId,
    attemptNumber,
    setPaket,
    questions: clientQuestions
  };
}

export async function submitExam(attemptId, courseIdParam, submittedAnswers = {}) {
  if (isSupabase()) {
    const supabase = getSupabaseClient();
    const { data: attempt, error: aErr } = await supabase
      .from('attempts')
      .select('*')
      .eq('id', attemptId)
      .maybeSingle();

    if (aErr) throw aErr;
    if (!attempt) {
      const err = new Error('Sesi ujian tidak ditemukan atau sudah kedaluwarsa.');
      err.status = 404;
      throw err;
    }
    if (attempt.selesai) {
      const err = new Error('Ujian ini sudah pernah disubmit sebelumnya.');
      err.status = 400;
      throw err;
    }

    const courseId = attempt.course_id || courseIdParam;

    const { data: courseQuestions, error: qErr } = await supabase
      .from('questions')
      .select('*')
      .eq('course_id', courseId)
      .eq('set_paket', attempt.set_paket)
      .order('urutan', { ascending: true });
    if (qErr) throw qErr;

    const pgIds = (courseQuestions || []).filter(q => q.tipe === 'pilihan_ganda').map(q => q.id);
    const essayIds = (courseQuestions || []).filter(q => q.tipe === 'essay').map(q => q.id);

    const [optsRes, rubricsRes] = await Promise.all([
      pgIds.length > 0
        ? supabase.from('options').select('*').in('question_id', pgIds)
        : Promise.resolve({ data: [], error: null }),
      essayIds.length > 0
        ? supabase.from('essay_rubrics').select('*').in('question_id', essayIds)
        : Promise.resolve({ data: [], error: null })
    ]);
    if (optsRes.error) throw optsRes.error;
    if (rubricsRes.error) throw rubricsRes.error;

    const allOptions = optsRes.data || [];
    const allRubrics = rubricsRes.data || [];

    const evaluatedAnswers = [];
    const rowsToInsert = [];
    const evaluatedQuestionsResponse = [];
    const nowIso = new Date().toISOString();

    for (const q of (courseQuestions || [])) {
      const studentAns = submittedAnswers[q.id];
      let poin = 0;
      let label = 'Salah';
      let feedback = '';
      let kunciJawaban = '';
      let questionOptions = null;

      if (q.tipe === 'pilihan_ganda') {
        const qOpts = allOptions.filter(o => o.question_id === q.id);
        questionOptions = qOpts.map(o => ({ id: o.id, teks: o.teks }));

        const correctOption = qOpts.find(o => o.is_correct === true || Number(o.poin) === 10);
        kunciJawaban = correctOption ? correctOption.teks : '';
        const isCorrect = studentAns === (correctOption ? correctOption.id : null);
        poin = isCorrect ? 10 : 0;
        label = isCorrect ? 'Tepat' : 'Salah';

        const selectedOption = qOpts.find(o => o.id === studentAns);
        feedback = selectedOption
          ? selectedOption.umpan_balik
          : (correctOption ? `Jawaban benar: ${correctOption.teks}` : 'Jawaban Anda kurang tepat.');
      } else if (q.tipe === 'essay') {
        const rubric = allRubrics.find(r => r.question_id === q.id);
        const keywords = rubric ? rubric.kata_kunci : [];
        kunciJawaban = rubric ? rubric.kunci_jawaban : '';
        const result = evaluateEssay(studentAns, keywords, rubric);
        poin = result.poin;
        label = result.label;

        if (result.poin === 10) {
          feedback = 'Jawaban ringkas, tepat sasaran, dan poin kunci utama terpenuhi!';
        } else if (result.poin >= 7) {
          const kurangList = result.missingKeywords.slice(0, 3).join(', ');
          feedback = kurangList
            ? `Konsep inti sudah tepat, namun dapat dilengkapi dengan aspek: ${kurangList}.`
            : 'Konsep dasar sudah benar, tambahkan sedikit detail penjelas agar lebih lengkap.';
        } else {
          feedback = 'Jawaban belum mencakup kata kunci utama dari materi modul.';
        }
      }

      const finalJawabanText = studentAns || '(Tidak dijawab)';
      evaluatedAnswers.push({ topik: q.topik, tipe: q.tipe, poin });

      rowsToInsert.push({
        id: uuidv4(),
        attempt_id: attemptId,
        question_id: q.id,
        jawaban: finalJawabanText,
        poin,
        label,
        catatan_evaluasi: feedback,
        created_at: nowIso
      });

      evaluatedQuestionsResponse.push({
        questionId: q.id,
        urutan: q.urutan,
        topik: q.topik,
        tipe: q.tipe,
        teks: q.teks,
        options: questionOptions,
        jawabanPengguna: finalJawabanText,
        kunciJawaban,
        poin,
        label,
        pembahasan: feedback
      });
    }

    if (rowsToInsert.length > 0) {
      const { error: ansErr } = await supabase.from('answers').insert(rowsToInsert);
      if (ansErr) throw ansErr;
    }

    const { nilaiAkhir, lulus, totalPG, totalEssay, weakTopics } = calculateFinalScore(evaluatedAnswers);
    const cooldownUntil = !lulus ? computeCooldownDate().toISOString() : null;

    const { error: updAttErr } = await supabase
      .from('attempts')
      .update({
        selesai: nowIso,
        total_poin_pg: totalPG,
        total_poin_essay: totalEssay,
        nilai: nilaiAkhir,
        lulus,
        cooldown_until: cooldownUntil
      })
      .eq('id', attemptId);
    if (updAttErr) throw updAttErr;

    // Update Progress & Progressive Gating
    const { data: prog, error: pErr } = await supabase
      .from('progress')
      .select('*')
      .eq('user_id', attempt.user_id)
      .eq('course_id', courseId)
      .maybeSingle();
    if (pErr) throw pErr;

    if (prog) {
      const bestScore = Math.max(Number(prog.nilai_terbaik || 0), nilaiAkhir);
      const progUpdate = {
        nilai_terbaik: bestScore,
        updated_at: nowIso
      };

      if (lulus) {
        progUpdate.status = 'passed';
        progUpdate.passed_at = nowIso;
      }

      const { error: updProgErr } = await supabase
        .from('progress')
        .update(progUpdate)
        .eq('id', prog.id);
      if (updProgErr) throw updProgErr;

      if (lulus) {
        const { data: currentCourse } = await supabase
          .from('courses')
          .select('urutan')
          .eq('id', courseId)
          .maybeSingle();

        if (currentCourse) {
          const { data: nextCourse } = await supabase
            .from('courses')
            .select('id')
            .eq('urutan', currentCourse.urutan + 1)
            .maybeSingle();

          if (nextCourse) {
            await supabase
              .from('progress')
              .update({
                status: 'unlocked',
                unlocked_at: nowIso,
                updated_at: nowIso
              })
              .eq('user_id', attempt.user_id)
              .eq('course_id', nextCourse.id)
              .eq('status', 'locked');
          }
        }
      }
    }

    return {
      attemptId,
      courseId,
      nilai: nilaiAkhir,
      lulus,
      totalPG,
      totalEssay,
      weakTopics,
      cooldownUntil,
      attemptNumber: attempt.attempt_number,
      setPaket: attempt.set_paket,
      evaluatedQuestions: evaluatedQuestionsResponse
    };
  }

  // Mode In-Memory
  const attempt = attempts.find(a => a.id === attemptId);
  if (!attempt) {
    const err = new Error('Sesi ujian tidak ditemukan atau sudah kedaluwarsa.');
    err.status = 404;
    throw err;
  }

  if (attempt.selesai) {
    const err = new Error('Ujian ini sudah pernah disubmit sebelumnya.');
    err.status = 400;
    throw err;
  }

  const courseId = attempt.course_id || courseIdParam;

  const courseQuestions = questions
    .filter(q => q.course_id === courseId && q.set_paket === attempt.set_paket)
    .sort((a, b) => a.urutan - b.urutan);

  const evaluatedAnswers = [];
  const savedAnswers = [];
  const kunciMap = {};

  for (const q of courseQuestions) {
    const studentAns = submittedAnswers[q.id];
    let poin = 0;
    let label = 'Salah';
    let feedback = '';
    let kunciJawaban = '';

    if (q.tipe === 'pilihan_ganda') {
      const correctOption = options.find(o => o.question_id === q.id && o.is_correct);
      kunciJawaban = correctOption ? correctOption.teks : '';
      const isCorrect = studentAns === (correctOption ? correctOption.id : null);
      poin = isCorrect ? 10 : 0;
      label = isCorrect ? 'Tepat' : 'Salah';

      const selectedOption = options.find(o => o.question_id === q.id && o.id === studentAns);
      feedback = selectedOption
        ? selectedOption.umpan_balik
        : (correctOption ? `Jawaban benar: ${correctOption.teks}` : 'Jawaban Anda kurang tepat.');
    } else if (q.tipe === 'essay') {
      const rubric = essay_rubrics.find(r => r.question_id === q.id);
      const keywords = rubric ? rubric.kata_kunci : [];
      kunciJawaban = rubric ? rubric.kunci_jawaban : '';
      const result = evaluateEssay(studentAns, keywords, rubric);
      poin = result.poin;
      label = result.label;

      if (result.poin === 10) {
        feedback = 'Jawaban ringkas, tepat sasaran, dan poin kunci utama terpenuhi!';
      } else if (result.poin >= 7) {
        const kurangList = result.missingKeywords.slice(0, 3).join(', ');
        feedback = kurangList
          ? `Konsep inti sudah tepat, namun dapat dilengkapi dengan aspek: ${kurangList}.`
          : 'Konsep dasar sudah benar, tambahkan sedikit detail penjelas agar lebih lengkap.';
      } else {
        feedback = 'Jawaban belum mencakup kata kunci utama dari materi modul.';
      }
    }

    kunciMap[q.id] = kunciJawaban;
    evaluatedAnswers.push({ topik: q.topik, tipe: q.tipe, poin });

    savedAnswers.push({
      id: uuidv4(),
      attempt_id: attemptId,
      question_id: q.id,
      jawaban: studentAns || '(Tidak dijawab)',
      poin,
      label,
      catatan_evaluasi: feedback,
      created_at: new Date().toISOString()
    });
  }

  savedAnswers.forEach(a => answers.push(a));

  const { nilaiAkhir, lulus, totalPG, totalEssay, weakTopics } = calculateFinalScore(evaluatedAnswers);
  const cooldownUntil = !lulus ? computeCooldownDate().toISOString() : null;

  attempt.selesai = new Date().toISOString();
  attempt.total_poin_pg = totalPG;
  attempt.total_poin_essay = totalEssay;
  attempt.nilai = nilaiAkhir;
  attempt.lulus = lulus;
  attempt.cooldown_until = cooldownUntil;

  const prog = progress.find(p => p.user_id === attempt.user_id && p.course_id === courseId);
  if (prog) {
    if (nilaiAkhir > (prog.nilai_terbaik || 0)) {
      prog.nilai_terbaik = nilaiAkhir;
    }

    if (lulus) {
      prog.status = 'passed';
      prog.passed_at = new Date().toISOString();
      prog.updated_at = new Date().toISOString();

      const currentCourse = courses.find(c => c.id === courseId);
      if (currentCourse) {
        const nextCourse = courses.find(c => c.urutan === currentCourse.urutan + 1);
        if (nextCourse) {
          const nextProg = progress.find(
            p => p.user_id === attempt.user_id && p.course_id === nextCourse.id
          );
          if (nextProg && nextProg.status === 'locked') {
            nextProg.status = 'unlocked';
            nextProg.unlocked_at = new Date().toISOString();
            nextProg.updated_at = new Date().toISOString();
          }
        }
      }
    } else {
      prog.updated_at = new Date().toISOString();
    }
  }

  const evaluatedQuestionsResponse = courseQuestions.map((q, i) => {
    const ans = savedAnswers[i];
    const questionOptions = q.tipe === 'pilihan_ganda'
      ? options.filter(o => o.question_id === q.id).map(o => ({ id: o.id, teks: o.teks }))
      : null;

    return {
      questionId: q.id,
      urutan: q.urutan,
      topik: q.topik,
      tipe: q.tipe,
      teks: q.teks,
      options: questionOptions,
      jawabanPengguna: ans.jawaban,
      kunciJawaban: kunciMap[q.id] || '',
      poin: ans.poin,
      label: ans.label,
      pembahasan: ans.catatan_evaluasi
    };
  });

  return {
    attemptId,
    courseId,
    nilai: nilaiAkhir,
    lulus,
    totalPG,
    totalEssay,
    weakTopics,
    cooldownUntil,
    attemptNumber: attempt.attempt_number,
    setPaket: attempt.set_paket,
    evaluatedQuestions: evaluatedQuestionsResponse
  };
}

export async function getAttemptResult(attemptId, userId) {
  if (isSupabase()) {
    const supabase = getSupabaseClient();
    const { data: attempt, error: aErr } = await supabase
      .from('attempts')
      .select('*')
      .eq('id', attemptId)
      .maybeSingle();

    if (aErr) throw aErr;
    if (!attempt) {
      const err = new Error('Hasil ujian tidak ditemukan.');
      err.status = 404;
      throw err;
    }
    if (userId && attempt.user_id !== userId) {
      const err = new Error('Akses ditolak. Ini bukan ujian Anda.');
      err.status = 403;
      throw err;
    }
    if (!attempt.selesai) {
      const err = new Error('Ujian belum selesai disubmit.');
      err.status = 400;
      throw err;
    }

    const [{ data: attemptAnswers, error: ansErr }, { data: courseQuestions, error: qErr }] = await Promise.all([
      supabase.from('answers').select('*').eq('attempt_id', attemptId),
      supabase
        .from('questions')
        .select('*')
        .eq('course_id', attempt.course_id)
        .eq('set_paket', attempt.set_paket)
        .order('urutan', { ascending: true })
    ]);
    if (ansErr) throw ansErr;
    if (qErr) throw qErr;

    const pgIds = (courseQuestions || []).filter(q => q.tipe === 'pilihan_ganda').map(q => q.id);
    const essayIds = (courseQuestions || []).filter(q => q.tipe === 'essay').map(q => q.id);

    const [optsRes, rubricsRes] = await Promise.all([
      pgIds.length > 0
        ? supabase.from('options').select('*').in('question_id', pgIds)
        : Promise.resolve({ data: [], error: null }),
      essayIds.length > 0
        ? supabase.from('essay_rubrics').select('*').in('question_id', essayIds)
        : Promise.resolve({ data: [], error: null })
    ]);
    if (optsRes.error) throw optsRes.error;
    if (rubricsRes.error) throw rubricsRes.error;

    const allOptions = optsRes.data || [];
    const allRubrics = rubricsRes.data || [];

    const topicStats = {};
    (attemptAnswers || []).forEach(a => {
      const q = (courseQuestions || []).find(item => item.id === a.question_id);
      if (!q) return;
      if (!topicStats[q.topik]) topicStats[q.topik] = { earned: 0, possible: 0 };
      topicStats[q.topik].earned += Number(a.poin);
      topicStats[q.topik].possible += 10;
    });

    const weakTopics = Object.entries(topicStats)
      .filter(([, s]) => s.earned / s.possible < 0.7)
      .map(([topik]) => topik);

    const evaluatedQuestions = (courseQuestions || []).map(q => {
      const ans = (attemptAnswers || []).find(a => a.question_id === q.id);
      let questionOptions = null;
      let fallbackKunci = '';

      if (q.tipe === 'pilihan_ganda') {
        const qOpts = allOptions.filter(o => o.question_id === q.id);
        questionOptions = qOpts.map(o => ({ id: o.id, teks: o.teks }));
        const correctOpt = qOpts.find(o => o.is_correct === true || Number(o.poin) === 10);
        fallbackKunci = correctOpt ? correctOpt.teks : '';
      } else {
        const rubric = allRubrics.find(r => r.question_id === q.id);
        fallbackKunci = rubric ? rubric.kunci_jawaban : '';
      }

      return {
        questionId: q.id,
        urutan: q.urutan,
        topik: q.topik,
        tipe: q.tipe,
        teks: q.teks,
        options: questionOptions,
        jawabanPengguna: ans ? ans.jawaban : '(Tidak dijawab)',
        kunciJawaban: fallbackKunci,
        poin: ans ? Number(ans.poin) : 0,
        label: ans ? ans.label : 'Salah',
        pembahasan: ans ? ans.catatan_evaluasi : ''
      };
    });

    return {
      attemptId: attempt.id,
      courseId: attempt.course_id,
      attemptNumber: attempt.attempt_number,
      setPaket: attempt.set_paket,
      mulai: attempt.mulai,
      selesai: attempt.selesai,
      nilai: Number(attempt.nilai),
      totalPG: Number(attempt.total_poin_pg),
      totalEssay: Number(attempt.total_poin_essay),
      lulus: attempt.lulus,
      cooldownUntil: attempt.cooldown_until,
      weakTopics,
      evaluatedQuestions
    };
  }

  // Mode In-Memory
  const attempt = attempts.find(a => a.id === attemptId);
  if (!attempt) {
    const err = new Error('Hasil ujian tidak ditemukan.');
    err.status = 404;
    throw err;
  }

  if (userId && attempt.user_id !== userId) {
    const err = new Error('Akses ditolak. Ini bukan ujian Anda.');
    err.status = 403;
    throw err;
  }

  if (!attempt.selesai) {
    const err = new Error('Ujian belum selesai disubmit.');
    err.status = 400;
    throw err;
  }

  const attemptAnswers = answers.filter(a => a.attempt_id === attemptId);
  const courseQuestions = questions
    .filter(q => q.course_id === attempt.course_id && q.set_paket === attempt.set_paket)
    .sort((a, b) => a.urutan - b.urutan);

  const topicStats = {};
  attemptAnswers.forEach(a => {
    const q = courseQuestions.find(q => q.id === a.question_id);
    if (!q) return;
    if (!topicStats[q.topik]) topicStats[q.topik] = { earned: 0, possible: 0 };
    topicStats[q.topik].earned += Number(a.poin);
    topicStats[q.topik].possible += 10;
  });

  const weakTopics = Object.entries(topicStats)
    .filter(([, s]) => s.earned / s.possible < 0.7)
    .map(([topik]) => topik);

  const evaluatedQuestions = courseQuestions.map(q => {
    const ans = attemptAnswers.find(a => a.question_id === q.id);
    const questionOptions = q.tipe === 'pilihan_ganda'
      ? options.filter(o => o.question_id === q.id).map(o => ({ id: o.id, teks: o.teks }))
      : null;

    let fallbackKunci = '';
    if (q.tipe === 'pilihan_ganda') {
      const correctOpt = options.find(o => o.question_id === q.id && o.is_correct);
      fallbackKunci = correctOpt ? correctOpt.teks : '';
    } else {
      const rubric = essay_rubrics.find(r => r.question_id === q.id);
      fallbackKunci = rubric ? rubric.kunci_jawaban : '';
    }

    return {
      questionId: q.id,
      urutan: q.urutan,
      topik: q.topik,
      tipe: q.tipe,
      teks: q.teks,
      options: questionOptions,
      jawabanPengguna: ans ? ans.jawaban : '(Tidak dijawab)',
      kunciJawaban: fallbackKunci,
      poin: ans ? ans.poin : 0,
      label: ans ? ans.label : 'Salah',
      pembahasan: ans ? ans.catatan_evaluasi : ''
    };
  });

  return {
    attemptId: attempt.id,
    courseId: attempt.course_id,
    attemptNumber: attempt.attempt_number,
    setPaket: attempt.set_paket,
    mulai: attempt.mulai,
    selesai: attempt.selesai,
    nilai: attempt.nilai,
    totalPG: attempt.total_poin_pg,
    totalEssay: attempt.total_poin_essay,
    lulus: attempt.lulus,
    cooldownUntil: attempt.cooldown_until,
    weakTopics,
    evaluatedQuestions
  };
}

export async function getUserAttempts(userId) {
  if (isSupabase()) {
    if (!isValidUuid(userId)) return [];
    const supabase = getSupabaseClient();

    const [{ data: userAttempts, error: aErr }, { data: allCourses, error: cErr }] = await Promise.all([
      supabase
        .from('attempts')
        .select('*')
        .eq('user_id', userId)
        .not('selesai', 'is', null)
        .order('selesai', { ascending: false }),
      supabase
        .from('courses')
        .select('id, urutan, judul')
    ]);

    if (aErr) throw aErr;
    if (cErr) throw cErr;

    const courseMap = new Map((allCourses || []).map(c => [c.id, c]));

    return (userAttempts || []).map(a => {
      const course = courseMap.get(a.course_id);
      const nilai = Number(a.nilai ?? 0);
      return {
        id: a.id,
        attemptId: a.id,
        courseId: a.course_id,
        course_id: a.course_id,
        courseUrutan: course?.urutan ?? 1,
        courseJudul: course?.judul ?? 'Modul Pembelajaran',
        attemptNumber: a.attempt_number,
        attempt_number: a.attempt_number,
        setPaket: a.set_paket,
        set_paket: a.set_paket,
        mulai: a.mulai,
        selesai: a.selesai,
        totalPG: Number(a.total_poin_pg || 0),
        totalEssay: Number(a.total_poin_essay || 0),
        nilai,
        lulus: Boolean(a.lulus ?? nilai >= 80)
      };
    });
  }

  // Mode In-Memory
  const courseMap = new Map(courses.map(c => [c.id, c]));
  return attempts
    .filter(a => a.user_id === userId && a.selesai)
    .sort((a, b) => new Date(b.selesai) - new Date(a.selesai))
    .map(a => {
      const course = courseMap.get(a.course_id);
      const nilai = Number(a.nilai ?? 0);
      return {
        id: a.id,
        attemptId: a.id,
        courseId: a.course_id,
        course_id: a.course_id,
        courseUrutan: course?.urutan ?? 1,
        courseJudul: course?.judul ?? 'Modul Pembelajaran',
        attemptNumber: a.attempt_number,
        attempt_number: a.attempt_number,
        setPaket: a.set_paket,
        set_paket: a.set_paket,
        mulai: a.mulai,
        selesai: a.selesai,
        totalPG: Number(a.total_poin_pg || 0),
        totalEssay: Number(a.total_poin_essay || 0),
        nilai,
        lulus: Boolean(a.lulus ?? nilai >= 80)
      };
    });
}