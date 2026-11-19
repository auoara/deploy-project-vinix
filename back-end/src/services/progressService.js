/**
 * Progress Service (Dual-Store: memory & supabase)
 */

import { courses, attempts, answers, progress, initUserProgress } from '../data/memoryStore.js';
import { getSupabaseClient } from '../config/supabase.js';
import { initUserProgressSupabase } from './courseService.js';

const isSupabase = () => process.env.DATA_STORE === 'supabase';
const isValidUuid = (val) => /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(val || '');

export async function getUserProgressSummary(userId) {
  if (isSupabase()) {
    const supabase = getSupabaseClient();
    const { data: allCourses, error: cErr } = await supabase
      .from('courses')
      .select('id, urutan')
      .order('urutan', { ascending: true });
    if (cErr) throw cErr;

    let userProgress = [];
    let userAttempts = [];

    if (isValidUuid(userId)) {
      await initUserProgressSupabase(userId);
      const [pRes, aRes] = await Promise.all([
        supabase.from('progress').select('*').eq('user_id', userId),
        supabase.from('attempts').select('id').eq('user_id', userId)
      ]);
      if (pRes.error) throw pRes.error;
      if (aRes.error) throw aRes.error;
      userProgress = pRes.data || [];
      userAttempts = aRes.data || [];
    }

    const totalCourses = (allCourses || []).length || 10;
    const passedCount = userProgress.filter(p => p.status === 'passed').length;
    const scores = userProgress.map(p => Number(p.nilai_terbaik || 0)).filter(s => s > 0);
    const averageScore = scores.length > 0
      ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
      : 0;

    const progressMap = {};
    (allCourses || []).forEach(c => {
      const p = userProgress.find(up => up.course_id === c.id);
      progressMap[c.id] = {
        status: p ? p.status : (c.urutan === 1 ? 'unlocked' : 'locked'),
        bagianSelesai: p ? (p.bagian_selesai || []) : [],
        bagian_selesai: p ? (p.bagian_selesai || []) : [],
        nilaiTerbaik: p ? Number(p.nilai_terbaik || 0) : 0,
        nilai_terbaik: p ? Number(p.nilai_terbaik || 0) : 0
      };
    });

    return {
      totalCourses,
      passedCount,
      percentage: Math.round((passedCount / totalCourses) * 100),
      averageScore,
      totalAttempts: userAttempts.length,
      progressMap
    };
  }

  // Mode In-Memory
  initUserProgress(userId);
  const userProgress = progress.filter(p => p.user_id === userId);
  const userAttempts = attempts.filter(a => a.user_id === userId);

  const passedCount = userProgress.filter(p => p.status === 'passed').length;
  const scores = userProgress.map(p => Number(p.nilai_terbaik || 0)).filter(s => s > 0);
  const averageScore = scores.length > 0
    ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
    : 0;

  const progressMap = {};
  courses.forEach(c => {
    const p = userProgress.find(up => up.course_id === c.id);
    progressMap[c.id] = {
      status: p ? p.status : (c.urutan === 1 ? 'unlocked' : 'locked'),
      bagianSelesai: p ? p.bagian_selesai : [],
      bagian_selesai: p ? p.bagian_selesai : [],
      nilaiTerbaik: p ? Number(p.nilai_terbaik || 0) : 0,
      nilai_terbaik: p ? Number(p.nilai_terbaik || 0) : 0
    };
  });

  return {
    totalCourses: courses.length,
    passedCount,
    percentage: Math.round((passedCount / (courses.length || 10)) * 100),
    averageScore,
    totalAttempts: userAttempts.length,
    progressMap
  };
}

export async function unlockAllCoursesForUser(userId) {
  const nowIso = new Date().toISOString();

  if (isSupabase()) {
    if (!isValidUuid(userId)) {
      const err = new Error('Autentikasi diperlukan untuk membuka modul.');
      err.status = 401;
      throw err;
    }

    const supabase = getSupabaseClient();
    await initUserProgressSupabase(userId);

    const { error: updErr } = await supabase
      .from('progress')
      .update({
        status: 'unlocked',
        unlocked_at: nowIso,
        updated_at: nowIso
      })
      .eq('user_id', userId)
      .eq('status', 'locked');

    if (updErr) throw updErr;
    return await getUserProgressSummary(userId);
  }

  // Mode In-Memory
  initUserProgress(userId);
  progress.forEach(p => {
    if (p.user_id === userId && p.status === 'locked') {
      p.status = 'unlocked';
      p.unlocked_at = nowIso;
      p.updated_at = nowIso;
    }
  });

  return await getUserProgressSummary(userId);
}

export async function resetUserProgress(userId) {
  const nowIso = new Date().toISOString();

  if (isSupabase()) {
    if (!isValidUuid(userId)) {
      const err = new Error('Autentikasi diperlukan untuk mereset progres.');
      err.status = 401;
      throw err;
    }

    const supabase = getSupabaseClient();

    // 1. Hapus semua jawaban & riwayat ujian user
    const { data: userAttempts, error: fetchAttErr } = await supabase
      .from('attempts')
      .select('id')
      .eq('user_id', userId);
    if (fetchAttErr) throw fetchAttErr;

    const attemptIds = (userAttempts || []).map(a => a.id);
    if (attemptIds.length > 0) {
      const { error: delAnsErr } = await supabase
        .from('answers')
        .delete()
        .in('attempt_id', attemptIds);
      if (delAnsErr) throw delAnsErr;

      const { error: delAttErr } = await supabase
        .from('attempts')
        .delete()
        .eq('user_id', userId);
      if (delAttErr) throw delAttErr;
    }

    // 2. Pastikan baris progress tersedia lalu kembalikan ke kondisi awal (Modul 1 terbuka, 2-10 terkunci, 0%)
    await initUserProgressSupabase(userId);

    const { data: allCourses, error: cErr } = await supabase
      .from('courses')
      .select('id, urutan');
    if (cErr) throw cErr;

    for (const c of (allCourses || [])) {
      const isFirst = c.urutan === 1;
      const { error: resetErr } = await supabase
        .from('progress')
        .update({
          status: isFirst ? 'unlocked' : 'locked',
          unlocked_at: isFirst ? nowIso : null,
          passed_at: null,
          bagian_selesai: [],
          nilai_terbaik: 0,
          updated_at: nowIso
        })
        .eq('user_id', userId)
        .eq('course_id', c.id);

      if (resetErr) throw resetErr;
    }

    return await getUserProgressSummary(userId);
  }

  // Mode In-Memory
  const userAttemptIds = new Set(
    attempts.filter(a => a.user_id === userId).map(a => a.id)
  );

  for (let i = answers.length - 1; i >= 0; i--) {
    if (userAttemptIds.has(answers[i].attempt_id)) {
      answers.splice(i, 1);
    }
  }
  for (let i = attempts.length - 1; i >= 0; i--) {
    if (attempts[i].user_id === userId) {
      attempts.splice(i, 1);
    }
  }
  for (let i = progress.length - 1; i >= 0; i--) {
    if (progress[i].user_id === userId) {
      progress.splice(i, 1);
    }
  }

  initUserProgress(userId);
  return await getUserProgressSummary(userId);
}