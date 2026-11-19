/**
 * Course Controller
 * Menghubungkan endpoint kurikulum dan modul ke courseService & examService
 */

import * as courseService from '../services/courseService.js';
import * as examService from '../services/examService.js';

function formatCourse(course) {
  return {
    ...course,
    bagianSelesai: course.bagian_selesai || course.bagianSelesai || [],
    nilaiTerbaik: course.nilai_terbaik ?? course.nilaiTerbaik ?? 0,
    totalSections: course.total_sections ?? course.totalSections ?? 3,
    isCompleted: course.is_completed ?? course.isCompleted ?? (course.status === 'passed'),
    estimasiWaktu: course.estimasi_waktu || course.estimasiWaktu || '45 Menit',
    referensiEksternal: course.referensi_eksternal || course.referensiEksternal || '',
    pdfUrl: course.pdf_url || course.pdfUrl || null,
    bagian_selesai: course.bagian_selesai || course.bagianSelesai || [],
    nilai_terbaik: course.nilai_terbaik ?? course.nilaiTerbaik ?? 0,
    total_sections: course.total_sections ?? course.totalSections ?? 3,
    is_completed: course.is_completed ?? course.isCompleted ?? (course.status === 'passed')
  };
}

export async function getAllCourses(req, res, next) {
  try {
    const userId = req.user?.id || req.query.userId || 'demo-student-01';
    const rawCourses = await courseService.getAllCourses(userId);
    return res.status(200).json(rawCourses.map(formatCourse));
  } catch (err) {
    next(err);
  }
}

export async function getCourseById(req, res, next) {
  try {
    const courseId = await courseService.resolveCourseId(req.params.id);
    const userId = req.user?.id || req.query.userId || 'demo-student-01';
    const rawCourse = await courseService.getCourseById(courseId, userId);

    const formatted = {
      ...formatCourse(rawCourse),
      sections: (rawCourse.sections || []).map(sec => ({
        ...sec,
        pdfUrl: sec.pdf_url || sec.pdfUrl || null,
        pdfTitle: sec.pdf_title || sec.pdfTitle || null
      }))
    };

    return res.status(200).json(formatted);
  } catch (err) {
    next(err);
  }
}

export async function completeSection(req, res, next) {
  try {
    const courseId = await courseService.resolveCourseId(req.params.id);
    const sectionUrutan = req.params.sid || req.params.sectionUrutan;
    const userId = req.user?.id || 'demo-student-01';

    const result = await courseService.completeSectionForUser(userId, courseId, sectionUrutan);

    return res.status(200).json({
      success: true,
      message: 'Bagian materi ditandai selesai',
      bagianSelesai: result.bagian_selesai,
      bagian_selesai: result.bagian_selesai
    });
  } catch (err) {
    next(err);
  }
}

export async function startExam(req, res, next) {
  try {
    const courseId = await courseService.resolveCourseId(req.params.id);
    const userId = req.user?.id || 'demo-student-01';

    const result = await examService.startExam(userId, courseId);
    return res.status(200).json(result);
  } catch (err) {
    if (err.error === 'COOLDOWN_ACTIVE' || err.status === 429) {
      return res.status(429).json({
        error: 'COOLDOWN_ACTIVE',
        message: err.message,
        remainingSeconds: err.remainingSeconds,
        cooldownUntil: err.cooldownUntil
      });
    }
    next(err);
  }
}