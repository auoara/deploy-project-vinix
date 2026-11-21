import React, { createContext, useContext, useState, useEffect } from 'react';
import { apiClient } from '../api/client';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('vinix7_user');
    const isLoggedIn = localStorage.getItem('vinix7_logged_in');

    // Hanya pulihkan sesi jika user memang sudah pernah login secara eksplisit
    if (saved && isLoggedIn === 'true') {
      try {
        const parsed = JSON.parse(saved);
        // Jika akun merupakan demo bawaan lama tanpa login mandiri, bersihkan agar mulai dari register
        if (parsed.id === 'demo-student-01') {
          localStorage.removeItem('vinix7_user');
          localStorage.removeItem('vinix7_logged_in');
          setUser(null);
        } else {
          setUser(parsed);
        }
      } catch (e) {
        console.error('Failed to parse saved user', e);
        localStorage.removeItem('vinix7_user');
        localStorage.removeItem('vinix7_logged_in');
        setUser(null);
      }
    } else {
      // Belum ada user aktif yang login
      localStorage.removeItem('vinix7_user');
      localStorage.removeItem('vinix7_logged_in');
      setUser(null);
    }
    setLoading(false);
  }, []);

  const login = async (identifier, password) => {
    const res = await apiClient.login(identifier, password);
    if (res.success && res.user) {
      setUser(res.user);
      localStorage.setItem('vinix7_user', JSON.stringify(res.user));
      localStorage.setItem('vinix7_logged_in', 'true');
    }
    return res;
  };

  const register = async (nama, email, password) => {
    const res = await apiClient.register(nama, email, password);
    // User tetap tidak langsung login, wajib melalui login page
    return res;
  };

  const logout = () => {
    localStorage.removeItem('vinix7_user');
    localStorage.removeItem('vinix7_logged_in');
    localStorage.removeItem('vinix7_token');
    sessionStorage.removeItem('vinix7_prefill_login');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}