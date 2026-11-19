/**
 * Progress Controller
 * Menghubungkan endpoint progres belajar peserta ke progressService
 */

import * as progressService from '../services/progressService.js';

export async function getProgress(req, res, next) {
  try {
    const userId = req.user?.id || 'demo-student-01';
    const summary = await progressService.getUserProgressSummary(userId);
    return res.status(200).json(summary);
  } catch (err) {
    next(err);
  }
}

export async function unlockAllCourses(req, res, next) {
  try {
    const userId = req.user?.id || 'demo-student-01';
    const summary = await progressService.unlockAllCoursesForUser(userId);
    return res.status(200).json({
      success: true,
      message: 'Semua gembok modul berhasil dibuka untuk mode demo',
      ...summary
    });
  } catch (err) {
    next(err);
  }
}

export async function resetProgress(req, res, next) {
  try {
    const userId = req.user?.id || 'demo-student-01';
    const summary = await progressService.resetUserProgress(userId);
    return res.status(200).json({
      success: true,
      message: 'Seluruh progres belajar berhasil direset ke kondisi awal',
      ...summary
    });
  } catch (err) {
    next(err);
  }
}