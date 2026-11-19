/**
 * Course Service (Dual-Store: memory & supabase)
 * Layer akses data untuk modul, sections, dan progress peserta
 */

import { v4 as uuidv4 } from 'uuid';
import { courses, sections, progress, initUserProgress } from '../data/memoryStore.js';
import { getSupabaseClient } from '../config/supabase.js';

const isSupabase = () => process.env.DATA_STORE === 'supabase';
const isValidUuid = (val) => /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(val || '');

export async function resolveCourseId(rawId) {
  if (!rawId) return rawId;

  if (isSupabase()) {
    const supabase = getSupabaseClient();
    const { data: allCourses, error } = await supabase
      .from('courses')
      .select('id, urutan');

    if (error) throw error;
    const match = (allCourses || []).find(c =>
      c.id === rawId ||
      String(c.urutan) === String(rawId) ||
      `c${c.urutan}` === String(rawId).toLowerCase() ||
      `modul-${c.urutan}` === String(rawId).toLowerCase()
    );
    return match ? match.id : rawId;
  }

  const match = courses.find(c =>
    c.id === rawId ||
    String(c.urutan) === String(rawId) ||
    `c${c.urutan}` === String(rawId).toLowerCase() ||
    `modul-${c.urutan}` === String(rawId).toLowerCase()
  );
  return match ? match.id : rawId;
}

export async function initUserProgressSupabase(userId) {
  if (!isValidUuid(userId)) return;
  const supabase = getSupabaseClient();

  const { data: allCourses, error: cErr } = await supabase
    .from('courses')
    .select('id, urutan')
    .order('urutan', { ascending: true });
  if (cErr) throw cErr;

  const { data: existingProg, error: pErr } = await supabase
    .from('progress')
    .select('course_id')
    .eq('user_id', userId);
  if (pErr) throw pErr;

  const existingSet = new Set((existingProg || []).map(p => p.course_id));
  const ts = new Date().toISOString();

  const toInsert = (allCourses || [])
    .filter(c => !existingSet.has(c.id))
    .map(c => ({
      id: uuidv4(),
      user_id: userId,
      course_id: c.id,
      bagian_selesai: [],
      nilai_terbaik: 0,
      status: c.urutan === 1 ? 'unlocked' : 'locked',
      unlocked_at: c.urutan === 1 ? ts : null,
      passed_at: null,
      updated_at: ts
    }));

  if (toInsert.length > 0) {
    const { error: insErr } = await supabase.from('progress').insert(toInsert);
    if (insErr) throw insErr;
  }
}

export async function getAllCourses(userId) {
  if (isSupabase()) {
    const supabase = getSupabaseClient();
    const [{ data: allCourses, error: cErr }, { data: allSections, error: sErr }] = await Promise.all([
      supabase.from('courses').select('*').order('urutan', { ascending: true }),
      supabase.from('sections').select('id, course_id')
    ]);
    if (cErr) throw cErr;
    if (sErr) throw sErr;

    let userProg = [];
    if (isValidUuid(userId)) {
      await initUserProgressSupabase(userId);
      const { data: pData, error: pErr } = await supabase
        .from('progress')
        .select('*')
        .eq('user_id', userId);
      if (pErr) throw pErr;
      userProg = pData || [];
    }

    return (allCourses || []).map(course => {
      const prog = userProg.find(p => p.course_id === course.id) || {
        status: course.urutan === 1 ? 'unlocked' : 'locked',
        bagian_selesai: [],
        nilai_terbaik: 0
      };

      const bagianSelesai = Array.isArray(prog.bagian_selesai) ? prog.bagian_selesai : [];
      const totalSections = (allSections || []).filter(s => s.course_id === course.id).length;
      const readingPercentage = totalSections > 0
        ? Math.min(100, Math.round((bagianSelesai.length / totalSections) * 100))
        : 0;
      const nilaiTerbaik = Number(prog.nilai_terbaik || 0);

      return {
        id: course.id,
        urutan: course.urutan,
        judul: course.judul,
        ringkasan: course.ringkasan,
        kategori: course.kategori,
        estimasi_waktu: course.estimasi_waktu,
        estimasiWaktu: course.estimasi_waktu,
        level: course.level,
        icon: course.icon,
        pdf_url: course.pdf_url,
        pdfUrl: course.pdf_url,
        referensi_eksternal: course.referensi_eksternal,
        status: prog.status,
        bagian_selesai: bagianSelesai,
        bagianSelesai,
        nilai_terbaik: nilaiTerbaik,
        nilaiTerbaik,
        total_sections: totalSections,
        totalSections,
        readingPercentage,
        is_completed: prog.status === 'passed',
        isCompleted: prog.status === 'passed'
      };
    });
  }

  // Mode In-Memory
  initUserProgress(userId);
  return courses.map(course => {
    const prog = progress.find(p => p.user_id === userId && p.course_id === course.id)
      || { status: 'locked', bagian_selesai: [], nilai_terbaik: 0 };

    const bagianSelesai = Array.isArray(prog.bagian_selesai) ? prog.bagian_selesai : [];
    const totalSections = sections.filter(s => s.course_id === course.id).length;
    const readingPercentage = totalSections > 0
      ? Math.min(100, Math.round((bagianSelesai.length / totalSections) * 100))
      : 0;
    const nilaiTerbaik = Number(prog.nilai_terbaik || 0);

    return {
      id: course.id,
      urutan: course.urutan,
      judul: course.judul,
      ringkasan: course.ringkasan,
      kategori: course.kategori,
      estimasi_waktu: course.estimasi_waktu,
      estimasiWaktu: course.estimasi_waktu,
      level: course.level,
      icon: course.icon,
      pdf_url: course.pdf_url,
      pdfUrl: course.pdf_url,
      referensi_eksternal: course.referensi_eksternal,
      status: prog.status,
      bagian_selesai: bagianSelesai,
      bagianSelesai,
      nilai_terbaik: nilaiTerbaik,
      nilaiTerbaik,
      total_sections: totalSections,
      totalSections,
      readingPercentage,
      is_completed: prog.status === 'passed',
      isCompleted: prog.status === 'passed'
    };
  });
}

export async function getCourseById(courseId, userId) {
  if (isSupabase()) {
    const supabase = getSupabaseClient();
    const { data: course, error: cErr } = await supabase
      .from('courses')
      .select('*')
      .eq('id', courseId)
      .maybeSingle();

    if (cErr) throw cErr;
    if (!course) {
      const err = new Error('Modul tidak ditemukan.');
      err.status = 404;
      throw err;
    }

    let prog = {
      status: course.urutan === 1 ? 'unlocked' : 'locked',
      bagian_selesai: [],
      nilai_terbaik: 0
    };

    if (isValidUuid(userId)) {
      await initUserProgressSupabase(userId);
      const { data: pData, error: pErr } = await supabase
        .from('progress')
        .select('*')
        .eq('user_id', userId)
        .eq('course_id', courseId)
        .maybeSingle();
      if (pErr) throw pErr;
      if (pData) prog = pData;
    }

    if (prog.status === 'locked') {
      const err = new Error('Modul ini masih terkunci. Selesaikan modul sebelumnya terlebih dahulu.');
      err.status = 403;
      err.error = 'COURSE_LOCKED';
      throw err;
    }

    const { data: courseSections, error: sErr } = await supabase
      .from('sections')
      .select('id, urutan, judul, isi, pdf_url, pdf_title')
      .eq('course_id', courseId)
      .order('urutan', { ascending: true });
    if (sErr) throw sErr;

    const normalizedSections = (courseSections || []).map(s => ({
      ...s,
      pdfUrl: s.pdf_url,
      pdfTitle: s.pdf_title
    }));

    const bagianSelesai = Array.isArray(prog.bagian_selesai) ? prog.bagian_selesai : [];
    const totalSections = normalizedSections.length;
    const readingPercentage = totalSections > 0
      ? Math.min(100, Math.round((bagianSelesai.length / totalSections) * 100))
      : 0;
    const nilaiTerbaik = Number(prog.nilai_terbaik || 0);

    return {
      ...course,
      estimasiWaktu: course.estimasi_waktu,
      pdfUrl: course.pdf_url,
      status: prog.status,
      bagian_selesai: bagianSelesai,
      bagianSelesai,
      nilai_terbaik: nilaiTerbaik,
      nilaiTerbaik,
      total_sections: totalSections,
      totalSections,
      readingPercentage,
      sections: normalizedSections
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

  const prog = progress.find(p => p.user_id === userId && p.course_id === courseId)
    || { status: 'locked', bagian_selesai: [], nilai_terbaik: 0 };

  if (prog.status === 'locked') {
    const err = new Error('Modul ini masih terkunci. Selesaikan modul sebelumnya terlebih dahulu.');
    err.status = 403;
    err.error = 'COURSE_LOCKED';
    throw err;
  }

  const courseSections = sections
    .filter(s => s.course_id === courseId)
    .sort((a, b) => a.urutan - b.urutan);

  const normalizedSections = courseSections.map(s => ({
    id: s.id,
    urutan: s.urutan,
    judul: s.judul,
    isi: s.isi,
    pdf_url: s.pdf_url,
    pdfUrl: s.pdf_url,
    pdf_title: s.pdf_title,
    pdfTitle: s.pdf_title
  }));

  const bagianSelesai = Array.isArray(prog.bagian_selesai) ? prog.bagian_selesai : [];
  const totalSections = normalizedSections.length;
  const readingPercentage = totalSections > 0
    ? Math.min(100, Math.round((bagianSelesai.length / totalSections) * 100))
    : 0;
  const nilaiTerbaik = Number(prog.nilai_terbaik || 0);

  return {
    ...course,
    estimasiWaktu: course.estimasi_waktu,
    pdfUrl: course.pdf_url,
    status: prog.status,
    bagian_selesai: bagianSelesai,
    bagianSelesai,
    nilai_terbaik: nilaiTerbaik,
    nilaiTerbaik,
    total_sections: totalSections,
    totalSections,
    readingPercentage,
    sections: normalizedSections
  };
}

export async function completeSectionForUser(userId, courseId, sectionUrutan) {
  if (isSupabase()) {
    if (!isValidUuid(userId)) {
      const err = new Error('Autentikasi diperlukan untuk menyimpan progres belajar.');
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
      .select('*')
      .eq('user_id', userId)
      .eq('course_id', courseId)
      .maybeSingle();
    if (pErr) throw pErr;
    if (!prog) {
      const err = new Error('Progress modul tidak ditemukan.');
      err.status = 404;
      throw err;
    }

    if (prog.status === 'locked') {
      const err = new Error('Modul ini masih terkunci.');
      err.status = 403;
      err.error = 'COURSE_LOCKED';
      throw err;
    }

    const sectionNum = parseInt(sectionUrutan, 10);
    const currentList = Array.isArray(prog.bagian_selesai) ? [...prog.bagian_selesai] : [];
    if (!currentList.includes(sectionNum)) {
      currentList.push(sectionNum);
      currentList.sort((a, b) => a - b);

      const { error: updErr } = await supabase
        .from('progress')
        .update({
          bagian_selesai: currentList,
          updated_at: new Date().toISOString()
        })
        .eq('id', prog.id);
      if (updErr) throw updErr;
    }

    return {
      success: true,
      bagian_selesai: currentList,
      bagianSelesai: currentList
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
  if (!prog) {
    const err = new Error('Progress modul tidak ditemukan. Pastikan user sudah terdaftar.');
    err.status = 404;
    throw err;
  }

  if (prog.status === 'locked') {
    const err = new Error('Modul ini masih terkunci.');
    err.status = 403;
    err.error = 'COURSE_LOCKED';
    throw err;
  }

  const sectionNum = parseInt(sectionUrutan, 10);
  if (!prog.bagian_selesai.includes(sectionNum)) {
    prog.bagian_selesai.push(sectionNum);
    prog.bagian_selesai.sort((a, b) => a - b);
    prog.updated_at = new Date().toISOString();
  }

  return {
    success: true,
    bagian_selesai: prog.bagian_selesai,
    bagianSelesai: prog.bagian_selesai
  };
}