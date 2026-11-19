/**
 * Attempt Controller
 * Menghubungkan endpoint submit jawaban, hasil ujian, dan riwayat percobaan ke examService
 */

import * as examService from '../services/examService.js';

export async function getUserAttempts(req, res, next) {
  try {
    const userId = req.user?.id || req.query.userId || 'demo-student-01';
    const history = await examService.getUserAttempts(userId);
    return res.status(200).json(history);
  } catch (err) {
    next(err);
  }
}

export async function submitExam(req, res, next) {
  try {
    const attemptId = req.params.id;
    const courseId = req.body?.courseId || null;
    const submittedAnswers = req.body?.answers || req.body || {};

    const result = await examService.submitExam(attemptId, courseId, submittedAnswers);

    return res.status(200).json({
      ...result,
      id: result.attemptId,
      finalScore: result.nilai,
      totalScore: result.nilai,
      isPassed: result.lulus,
      success: true
    });
  } catch (err) {
    next(err);
  }
}

export async function getAttemptResult(req, res, next) {
  try {
    const attemptId = req.params.id;
    const userId = req.user?.id || null;

    const result = await examService.getAttemptResult(attemptId, userId);

    return res.status(200).json({
      ...result,
      id: result.attemptId,
      finalScore: result.nilai,
      totalScore: result.nilai,
      isPassed: result.lulus,
      success: true
    });
  } catch (err) {
    next(err);
  }
}