/**
 * Request Body Validators (Simple)
 * Validasi input dasar untuk setiap endpoint
 */

export function validateRegister(req, res, next) {
  const { nama, email, password } = req.body;
  const errors = [];

  if (!nama || nama.trim().length < 2) errors.push('Nama minimal 2 karakter.');
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Format email tidak valid.');
  if (!password || password.length < 6) errors.push('Password minimal 6 karakter.');

  if (errors.length > 0) {
    return res.status(400).json({ success: false, message: 'Validasi gagal.', errors });
  }
  next();
}

export function validateLogin(req, res, next) {
  const { email, password } = req.body;
  const errors = [];

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Format email tidak valid.');
  if (!password) errors.push('Password wajib diisi.');

  if (errors.length > 0) {
    return res.status(400).json({ success: false, message: 'Validasi gagal.', errors });
  }
  next();
}

export function validateSubmitExam(req, res, next) {
  const { answers } = req.body;

  if (!answers || typeof answers !== 'object' || Array.isArray(answers)) {
    return res.status(400).json({
      success: false,
      message: 'Format jawaban tidak valid. Harus berupa objek { questionId: jawaban }.'
    });
  }
  next();
}
