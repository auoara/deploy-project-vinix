/**
 * Progress Routes
 * Menangani rute ringkasan progres belajar peserta & evaluator controls
 * Rute:
 * - GET  /me/progress
 * - POST /me/progress/unlock-all
 * - POST /me/progress/reset
 */

import { Router } from 'express';
import { authenticate } from '../middlewares/authMiddleware.js';
import * as progressController from '../controllers/progressController.js';

const router = Router();

const flexibleAuth = (req, res, next) => {
  if (req.headers['authorization']) {
    return authenticate(req, res, next);
  }
  next();
};

// GET /progress (di-mount pada /api/me dan /me -> /me/progress)
router.get('/progress', flexibleAuth, progressController.getProgress);

// POST /progress/unlock-all - Membuka semua modul yang masih terkunci (Mode Demo)
router.post('/progress/unlock-all', flexibleAuth, progressController.unlockAllCourses);

// POST /progress/reset - Mereset seluruh progres belajar & riwayat ujian ke kondisi awal
router.post('/progress/reset', flexibleAuth, progressController.resetProgress);

export default router;