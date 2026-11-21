import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import { 
  GraduationCap, 
  BookOpen, 
  History, 
  RotateCcw, 
  KeyRound, 
  Menu, 
  X, 
  CheckCircle2, 
  Sparkles,
  LogOut,
  UserPlus,
  ChevronDown
} from 'lucide-react';

export default function Navbar() {
  const { user, logout } = useAuth();
  const { summary, resetProgress, unlockAllForDemo } = useProgress();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [devToolsOpen, setDevToolsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [processingControl, setProcessingControl] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const navLinks = [
    { to: '/', label: 'Beranda', icon: GraduationCap },
    { to: '/courses', label: 'Daftar Modul', icon: BookOpen },
    { to: '/history', label: 'Riwayat Ujian', icon: History }
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const handleUnlockAll = async () => {
    if (processingControl) return;
    try {
      setProcessingControl(true);
      setDevToolsOpen(false);
      setMobileMenuOpen(false);
      await unlockAllForDemo();
      setToastMessage('Semua gembok modul berhasil dibuka!');
      setTimeout(() => {
        window.location.reload();
      }, 600);
    } catch (err) {
      console.error('Gagal membuka semua modul:', err);
      setToastMessage(err.message || 'Gagal membuka gembok modul.');
      setTimeout(() => setToastMessage(''), 3000);
    } finally {
      setProcessingControl(false);
    }
  };

  const handleResetProgress = async () => {
    if (processingControl) return;
    try {
      setProcessingControl(true);
      setDevToolsOpen(false);
      setMobileMenuOpen(false);
      await resetProgress();
      setToastMessage('Seluruh progres belajar & riwayat ujian berhasil direset ke awal!');
      setTimeout(() => {
        window.location.href = '/';
      }, 600);
    } catch (err) {
      console.error('Gagal mereset progres:', err);
      setToastMessage(err.message || 'Gagal mereset progres.');
      setTimeout(() => setToastMessage(''), 3000);
    } finally {
      setProcessingControl(false);
    }
  };

  const userInitials = user?.nama
    ? user.nama.trim().split(' ').filter(Boolean).map(n => n[0]).slice(0, 2).join('').toUpperCase()
    : 'VX';

  return (
    <>
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#131D35] text-white px-4 py-3 rounded-xl shadow-2xl border border-slate-700 flex items-center gap-2 text-xs font-bold animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      <header className="sticky top-0 z-40 bg-[#090E20]/95 backdrop-blur border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo & Platform Title */}
            <Link 
              to={user ? "/" : "/register"} 
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded-lg p-1"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0052CC] to-[#003399] flex items-center justify-center text-white shadow-md shadow-blue-950 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6 text-[#FBE156]" />
              </div>
              <div>
                <div className="flex items-center text-lg font-black tracking-wider leading-none">
                  <span className="text-blue-500 font-black">VINIX</span>
                  <span className="text-[#FBE156] font-black drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">7</span>
                  <span className="ml-1 text-[10px] font-bold tracking-widest text-slate-400 uppercase bg-blue-950/80 px-1.5 py-0.5 rounded border border-blue-900/50">
                    ACADEMY
                  </span>
                </div>
                <p className="text-[10px] font-medium text-slate-400 tracking-tight">Mini-Course &amp; Assessment</p>
              </div>
            </Link>

            {/* Desktop Navigation Links (Hanya muncul jika sudah login) */}
            {user && (
              <nav className="hidden md:flex items-center gap-1 bg-[#131D35] px-2 py-1.5 rounded-2xl border border-slate-800 shadow-inner">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const active = isActive(link.to);
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        active
                          ? 'bg-[#0052CC] text-white shadow-md shadow-blue-950'
                          : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${active ? 'text-[#FBE156]' : 'text-slate-400'}`} />
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
              </nav>
            )}

            {/* Right Controls: Evaluator Tools + User Profile / Login Register */}
            {user ? (
              <div className="hidden md:flex items-center gap-3">
                {/* Progres Badge */}
                <div className="flex items-center gap-1.5 bg-[#131D35] px-3 py-1.5 rounded-xl border border-slate-800 text-xs font-bold text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-[#FBE156] animate-pulse" />
                  <span>{summary.passedCount} / {summary.totalCourses} Modul Lulus</span>
                </div>

                {/* Evaluator Tools Menu */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => {
                      setDevToolsOpen(!devToolsOpen);
                      setUserMenuOpen(false);
                    }}
                    disabled={processingControl}
                    title="Demo & Evaluasi Tools"
                    className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors border border-transparent hover:border-slate-700 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-[#FBE156]" />
                  </button>
                  {devToolsOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-[#131D35] border border-slate-700 rounded-xl shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95">
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1">Evaluator Controls</p>
                      <button
                        type="button"
                        onClick={handleUnlockAll}
                        disabled={processingControl}
                        className="w-full text-left flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-200 hover:bg-blue-900/40 hover:text-white rounded-lg transition-colors cursor-pointer"
                      >
                        <KeyRound className="w-3.5 h-3.5 text-[#FBE156]" />
                        Buka Semua Gembok (Demo)
                      </button>
                      <button
                        type="button"
                        onClick={handleResetProgress}
                        disabled={processingControl}
                        className="w-full text-left flex items-center gap-2 px-3 py-2 text-xs font-medium text-rose-300 hover:bg-rose-950/40 rounded-lg transition-colors cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        Reset Ulang Progres (Awal)
                      </button>
                    </div>
                  )}
                </div>

                {/* User profile dropdown */}
                <div className="relative pl-2 border-l border-slate-800">
                  <button
                    type="button"
                    onClick={() => {
                      setUserMenuOpen(!userMenuOpen);
                      setDevToolsOpen(false);
                    }}
                    className="flex items-center gap-2.5 p-1 rounded-xl hover:bg-slate-800/60 transition-colors text-left cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-full bg-slate-200 text-[#0B132B] font-extrabold text-xs flex items-center justify-center ring-2 ring-white/10 shrink-0">
                      {userInitials}
                    </div>
                    <div className="hidden lg:block text-left">
                      <p className="text-xs font-bold text-white leading-tight max-w-[120px] truncate">{user.nama}</p>
                      <p className="text-[10px] text-slate-400 leading-tight max-w-[120px] truncate">{user.email || 'Peserta'}</p>
                    </div>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 hidden lg:block" />
                  </button>

                  {userMenuOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-[#131D35] border border-slate-700 rounded-xl shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95">
                      <div className="px-3 py-2 border-b border-slate-800 mb-1">
                        <p className="text-xs font-bold text-white truncate">{user.nama}</p>
                        <p className="text-[10px] text-slate-400 truncate">{user.email}</p>
                      </div>
                      <Link
                        to="/register"
                        onClick={() => setUserMenuOpen(false)}
                        className="w-full text-left flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-200 hover:bg-blue-900/40 hover:text-white rounded-lg transition-colors"
                      >
                        <UserPlus className="w-3.5 h-3.5 text-blue-400" />
                        Daftar Akun Baru
                      </Link>
                      <Link
                        to="/login"
                        onClick={() => setUserMenuOpen(false)}
                        className="w-full text-left flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-200 hover:bg-blue-900/40 hover:text-white rounded-lg transition-colors"
                      >
                        <KeyRound className="w-3.5 h-3.5 text-[#FBE156]" />
                        Ganti Akun
                      </Link>
                      <button
                        type="button"
                        onClick={() => {
                          setUserMenuOpen(false);
                          logout();
                          window.location.href = '/register';
                        }}
                        className="w-full text-left flex items-center gap-2 px-3 py-2 text-xs font-medium text-rose-300 hover:bg-rose-950/40 rounded-lg transition-colors cursor-pointer"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        Keluar (Logout)
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-3">
                <Link
                  to="/login"
                  className="px-4 py-2 text-xs font-bold text-slate-300 hover:text-white transition-colors"
                >
                  Masuk
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-[#FBE156] hover:bg-[#F3D746] text-[#0A1124] text-xs font-black rounded-xl shadow-md transition-all hover:scale-102"
                >
                  Daftar Sekarang
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 cursor-pointer"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-[#090E20] px-4 pt-3 pb-6 space-y-3">
            {user ? (
              <>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-slate-200 text-[#0B132B] font-extrabold text-xs flex items-center justify-center">
                      {userInitials}
                    </div>
                    <span className="text-xs font-bold text-white">{user.nama}</span>
                  </div>
                  <span className="text-xs font-bold text-[#FBE156] bg-blue-950 px-2.5 py-1 rounded-full border border-blue-800/60">
                    {summary.passedCount} / {summary.totalCourses} Lulus
                  </span>
                </div>

                <div className="space-y-1">
                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    const active = isActive(link.to);
                    return (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold ${
                          active ? 'bg-blue-950/70 text-[#FBE156] border border-blue-800/60' : 'text-slate-300 hover:bg-slate-800/60'
                        }`}
                      >
                        <Icon className="w-4 h-4 text-[#FBE156]" />
                        {link.label}
                      </Link>
                    );
                  })}
                </div>

                <div className="pt-2 border-t border-slate-800 space-y-1">
                  <Link
                    to="/register"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white"
                  >
                    <UserPlus className="w-4 h-4 text-blue-400" />
                    Daftar Akun Lain
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      logout();
                      window.location.href = '/register';
                    }}
                    className="w-full text-left flex items-center gap-2 px-3 py-2 text-xs font-semibold text-rose-300 hover:text-rose-200"
                  >
                    <LogOut className="w-4 h-4" />
                    Keluar (Logout)
                  </button>
                </div>

                {/* Quick Demo Controls on Mobile */}
                <div className="pt-2 border-t border-slate-800 flex gap-2">
                  <button
                    type="button"
                    onClick={handleUnlockAll}
                    disabled={processingControl}
                    className="flex-1 py-2 text-xs font-semibold bg-blue-950/60 text-blue-300 border border-blue-800/50 rounded-lg text-center"
                  >
                    Demo: Buka Semua
                  </button>
                  <button
                    type="button"
                    onClick={handleResetProgress}
                    disabled={processingControl}
                    className="flex-1 py-2 text-xs font-semibold bg-rose-950/60 text-rose-300 border border-rose-800/50 rounded-lg text-center"
                  >
                    Reset Progres
                  </button>
                </div>
              </>
            ) : (
              <div className="space-y-3 py-2">
                <p className="text-xs text-slate-400 text-center">Silakan daftar akun baru untuk mulai belajar:</p>
                <div className="flex gap-2">
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex-1 py-2.5 text-center text-xs font-bold bg-[#131D35] text-white rounded-xl border border-slate-700"
                  >
                    Masuk
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex-1 py-2.5 text-center text-xs font-black bg-[#FBE156] text-[#0A1124] rounded-xl shadow-md"
                  >
                    Daftar Akun
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </header>
    </>
  );
}