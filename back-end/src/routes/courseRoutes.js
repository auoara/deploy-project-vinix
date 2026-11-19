/**
 * Course Routes
 * Menangani rute daftar modul, materi per bagian, dan sesi ujian
 * Rute:
 * - GET  /courses
 * - GET  /courses/:id
 * - POST /courses/:id/sections/:sid/complete
 * - POST /courses/:id/exam/start
 */

import { Router } from 'express';
import { authenticate } from '../middlewares/authMiddleware.js';
import * as courseController from '../controllers/courseController.js';

const router = Router();

/**
 * Middleware Autentikasi Fleksibel
 * Jika header Authorization dikirimkan, validasi token JWT melalui authenticate.
 * Jika tidak dikirimkan (mode dev/demo atau pengujian langsung via browser),
 * request tetap diteruskan menggunakan demo user di controller.
 */
const flexibleAuth = (req, res, next) => {
  if (req.headers['authorization']) {
    return authenticate(req, res, next);
  }
  next();
};

// GET /courses - Mengambil daftar seluruh course beserta status gating
router.get('/', flexibleAuth, courseController.getAllCourses);

// GET /courses/:id - Mengambil detail course beserta konten materi
router.get('/:id', flexibleAuth, courseController.getCourseById);

// POST /courses/:id/sections/:sid/complete - Menandai bagian materi telah selesai dibaca
router.post('/:id/sections/:sid/complete', flexibleAuth, courseController.completeSection);

// POST /courses/:id/exam/start - Memulai sesi ujian akhir
router.post('/:id/exam/start', flexibleAuth, courseController.startExam);

export default router;
