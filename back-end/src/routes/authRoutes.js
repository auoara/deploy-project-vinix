/**
 * Auth Routes
 * Menangani rute registrasi dan login
 * Rute:
 * - POST /register
 * - POST /login
 */

import { Router } from 'express';
import { validateRegister, validateLogin } from '../middlewares/validators.js';
import * as authController from '../controllers/authController.js';

const router = Router();

// POST /auth/register
router.post('/register', validateRegister, authController.register);

// POST /auth/login
router.post('/login', validateLogin, authController.login);

export default router;
