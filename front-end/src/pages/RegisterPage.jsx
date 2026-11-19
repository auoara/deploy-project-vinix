import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { GraduationCap, ArrowRight } from 'lucide-react';

export default function RegisterPage() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await register(nama, email, password);
      navigate('/');
    } catch (err) {
      console.error(err);
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

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">
              Nama Lengkap:
            </label>
            <input
              type="text"
              required
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Contoh: Budi Pratama"
              className="w-full px-4 py-2.5 rounded-xl bg-[#0D152A] border border-slate-700 text-sm text-white focus:outline-none focus:border-[#0052CC] focus:ring-2 focus:ring-[#0052CC]/30 placeholder:text-slate-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">
              Email Peserta:
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="budi@kampus.ac.id"
              className="w-full px-4 py-2.5 rounded-xl bg-[#0D152A] border border-slate-700 text-sm text-white focus:outline-none focus:border-[#0052CC] focus:ring-2 focus:ring-[#0052CC]/30 placeholder:text-slate-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">
              Kata Sandi:
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Minimal 8 karakter"
              className="w-full px-4 py-2.5 rounded-xl bg-[#0D152A] border border-slate-700 text-sm text-white focus:outline-none focus:border-[#0052CC] focus:ring-2 focus:ring-[#0052CC]/30 placeholder:text-slate-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-[#FBE156] hover:bg-yellow-400 text-[#0A1124] text-xs font-black shadow-md transition-all flex items-center justify-center gap-2 mt-2"
          >
            <span>{loading ? 'Mendaftarkan...' : 'Buat Akun & Mulai Belajar'}</span>
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
