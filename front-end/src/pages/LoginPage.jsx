import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { GraduationCap, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = async () => {
    setLoading(true);
    await login('intern.vinix7@tech.com', 'password123');
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto py-12 px-4">
      <div className="bg-[#131D35] rounded-3xl border border-slate-800 p-8 shadow-2xl">
        
        {/* Brand */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0052CC] to-sky-400 flex items-center justify-center text-white mx-auto shadow-lg shadow-blue-950/40 mb-3">
            <GraduationCap className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            Masuk ke <span className="text-blue-500 font-black">VINIX</span><span className="text-[#FBE156] font-black drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">7</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Platform Pembelajaran &amp; Evaluasi Berjenjang
          </p>
        </div>

        {/* Demo Mode Button */}
        <div className="mb-6">
          <button
            type="button"
            onClick={handleDemoLogin}
            disabled={loading}
            className="w-full py-3 px-4 rounded-xl bg-[#0052CC]/20 hover:bg-[#0052CC]/30 text-sky-300 border border-[#0052CC]/40 text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-xs group"
          >
            <Sparkles className="w-4 h-4 text-[#FBE156] group-hover:rotate-12 transition-transform" />
            <span>Masuk Instan sebagai Peserta Demo</span>
          </button>
          <p className="text-[10px] text-center text-slate-500 mt-1.5">
            (Rekomendasi untuk penilai &amp; penguji aplikasi)
          </p>
        </div>

        <div className="relative flex items-center justify-center my-6">
          <div className="border-t border-slate-800 w-full" />
          <span className="bg-[#131D35] px-3 text-[11px] font-bold text-slate-500 uppercase tracking-wider relative">
            atau gunakan email
          </span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">
              Email Peserta:
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nama@peserta.com"
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
              placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
              className="w-full px-4 py-2.5 rounded-xl bg-[#0D152A] border border-slate-700 text-sm text-white focus:outline-none focus:border-[#0052CC] focus:ring-2 focus:ring-[#0052CC]/30 placeholder:text-slate-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-[#FBE156] hover:bg-yellow-400 text-[#0A1124] text-xs font-black shadow-md transition-all flex items-center justify-center gap-2 mt-2"
          >
            <span>{loading ? 'Memproses...' : 'Masuk ke Platform'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <p className="text-center text-xs text-slate-400 mt-6">
          Belum memiliki akun?{' '}
          <Link to="/register" className="font-bold text-[#FBE156] hover:underline">
            Daftar Sekarang
          </Link>
        </p>
      </div>
    </div>
  );
}
