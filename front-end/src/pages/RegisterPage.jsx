import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { GraduationCap, ArrowRight, User, Mail, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react';

export default function RegisterPage() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!nama.trim() || nama.trim().length < 2) {
      setError('Nama lengkap minimal 2 karakter.');
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Format email tidak valid (contoh: nama@peserta.com).');
      return;
    }
    if (!password || password.length < 6) {
      setError('Kata sandi minimal 6 karakter.');
      return;
    }

    setLoading(true);
    try {
      await register(nama.trim(), email.trim(), password);

      // Simpan kredensial ke sessionStorage untuk auto-fill di login page
      const prefillData = {
        nama: nama.trim(),
        email: email.trim(),
        password: password
      };
      sessionStorage.setItem('vinix7_prefill_login', JSON.stringify(prefillData));

      // Arahkan ke halaman login sesuai alur yang diminta
      navigate('/login', {
        state: {
          registeredNama: nama.trim(),
          registeredEmail: email.trim(),
          registeredPassword: password,
          justRegistered: true
        }
      });
    } catch (err) {
      console.error('Registration failed:', err);
      setError(err.message || 'Pendaftaran akun gagal. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto py-12 px-4">
      <div className="bg-[#131D35] rounded-3xl border border-slate-800 p-8 shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0052CC] to-sky-400 flex items-center justify-center text-white mx-auto shadow-lg shadow-blue-950/40 mb-3">
            <GraduationCap className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            Daftar Akun Baru
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Bergabung dengan Mini-Course &amp; Evaluasi <span className="text-blue-500 font-black">VINIX</span><span className="text-[#FBE156] font-black drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">7</span>
          </p>
        </div>

        {error && (
          <div className="mb-5 p-3.5 rounded-xl bg-rose-950/60 border border-rose-500/40 flex items-start gap-2.5 text-rose-200 text-xs animate-in fade-in">
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-blue-400" />
              <span>Nama Lengkap:</span>
            </label>
            <input
              type="text"
              required
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Contoh: Budi Pratama"
              className="w-full px-4 py-2.5 rounded-xl bg-[#0D152A] border border-slate-700 text-sm text-white focus:outline-none focus:border-[#0052CC] focus:ring-2 focus:ring-[#0052CC]/30 placeholder:text-slate-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>Email Peserta:</span>
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="budi@kampus.ac.id"
              className="w-full px-4 py-2.5 rounded-xl bg-[#0D152A] border border-slate-700 text-sm text-white focus:outline-none focus:border-[#0052CC] focus:ring-2 focus:ring-[#0052CC]/30 placeholder:text-slate-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-blue-400" />
              <span>Kata Sandi:</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimal 6 karakter"
                className="w-full pl-4 pr-11 py-2.5 rounded-xl bg-[#0D152A] border border-slate-700 text-sm text-white focus:outline-none focus:border-[#0052CC] focus:ring-2 focus:ring-[#0052CC]/30 placeholder:text-slate-500 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors p-1"
                title={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-[#FBE156] hover:bg-yellow-400 text-[#0A1124] text-xs font-black shadow-md transition-all flex items-center justify-center gap-2 mt-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <span>{loading ? 'Mendaftarkan Akun...' : 'Daftar Akun & Lanjut ke Login'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <p className="text-center text-xs text-slate-400 mt-6">
          Sudah memiliki akun?{' '}
          <Link to="/login" className="font-bold text-[#FBE156] hover:underline">
            Masuk di Sini
          </Link>
        </p>
      </div>
    </div>
  );
}