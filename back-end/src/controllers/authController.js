/**
 * Auth Controller
 * Menghubungkan endpoint autentikasi ke authService
 * Endpoint: POST /auth/register, POST /auth/login
 */

import * as authService from '../services/authService.js';

/**
 * Registrasi pengguna baru
 * POST /auth/register
 */
export async function register(req, res, next) {
  try {
    const { nama, email, password } = req.body;
    const result = await authService.registerUser(nama, email, password);

    return res.status(201).json({
      success: true,
      token: result.token,
      user: {
        id: result.user.id,
        nama: result.user.nama,
        email: result.user.email,
        avatar: result.user.avatar_url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        avatar_url: result.user.avatar_url
      }
    });
  } catch (err) {
    next(err);
  }
}

/**
 * Autentikasi / Login pengguna
 * POST /auth/login
 */
export async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const result = await authService.loginUser(email, password);

    return res.status(200).json({
      success: true,
      token: result.token,
      user: {
        id: result.user.id,
        nama: result.user.nama,
        email: result.user.email,
        avatar: result.user.avatar_url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        avatar_url: result.user.avatar_url
      }
    });
  } catch (err) {
    next(err);
  }
}
