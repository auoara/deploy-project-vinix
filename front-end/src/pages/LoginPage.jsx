import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  GraduationCap, 
  Sparkles, 
  ArrowRight, 
  User, 
  Lock, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [registeredSuccess, setRegisteredSuccess] = useState(null);

  // Ambil data prefill jika user baru saja register
  useEffect(() => {
    const stateData = location.state;
    const storedPrefill = sessionStorage.getItem('vinix7_prefill_login');
    let prefill = null;

    if (stateData && (stateData.registeredEmail || stateData.registeredNama)) {
      prefill = stateData;
    } else if (storedPrefill) {
      try {
        prefill = JSON.parse(storedPrefill);
      } catch (e) {
        console.error('Failed to parse prefill', e);
      }
    }

    if (prefill) {
      const emailOrNama = prefill.registeredEmail || prefill.email || prefill.registeredNama || prefill.nama || '';
      const pass = prefill.registeredPassword || prefill.password || '';
      const nama = prefill.registeredNama || prefill.nama || emailOrNama;

      setIdentifier(emailOrNama);
      setPassword(pass);
      setRegisteredSuccess(nama);
    }
  }, [location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(identifier, password);
      sessionStorage.removeItem('vinix7_prefill_login');
      navigate('/');
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || 'Login gagal. Periksa kembali email/nama dan kata sandi Anda.');
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = async () => {
    setError('');
    setLoading(true);
    try {
      await login('intern@vinix7.com', 'PasswordDemo123!');
      navigate('/');
    } catch (err) {
      console.error('Demo login error:', err);
      setError(err.message || 'Gagal masuk akun demo.');
    } finally {
      setLoading(false);
    }
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

        {/* Notifikasi Pendaftaran Berhasil & Auto-fill */}
        {registeredSuccess && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-950/70 border border-emerald-500/50 text-emerald-200 text-xs animate-in fade-in slide-in-from-top-2">
            <div className="flex items-center gap-2 font-bold text-emerald-300 mb-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Pendaftaran Berhasil</span>
            </div>
            <p className="text-[11px] text-emerald-200/90 leading-relaxed">
              Akun atas nama <strong className="text-white underline">{registeredSuccess}</strong> sudah terdaftar. Nama/Email dan Kata Sandi Anda <strong>sudah terisi otomatis</strong> di bawah. Silakan langsung klik tombol <strong>"Masuk ke Platform"</strong>.
            </p>
          </div>
        )}

        {/* Notifikasi Error */}
        {error && (
          <div className="mb-5 p-3.5 rounded-xl bg-rose-950/60 border border-rose-500/40 flex items-start gap-2.5 text-rose-200 text-xs animate-in fade-in">
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {/* Form Login */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-blue-400" />
              <span>Email atau Nama Lengkap:</span>
            </label>
            <input
              type="text"
              required
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="nama@peserta.com atau Nama Anda"
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
                placeholder="Masukkan kata sandi Anda"
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
            <span>{loading ? 'Memproses Masuk...' : 'Masuk ke Platform'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="relative flex items-center justify-center my-6">
          <div className="border-t border-slate-800 w-full" />
          <span className="bg-[#131D35] px-3 text-[11px] font-bold text-slate-500 uppercase tracking-wider relative">
            atau gunakan akun demo
          </span>
        </div>

        {/* Demo Mode Button */}
        <div>
          <button
            type="button"
            onClick={handleDemoLogin}
            disabled={loading}
            className="w-full py-2.5 px-4 rounded-xl bg-[#0052CC]/20 hover:bg-[#0052CC]/30 text-sky-300 border border-[#0052CC]/40 text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-xs group cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#FBE156] group-hover:rotate-12 transition-transform" />
            <span>Masuk Cepat sebagai Peserta Demo</span>
          </button>
        </div>

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