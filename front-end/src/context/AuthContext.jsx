import React, { createContext, useContext, useState, useEffect } from 'react';
import { apiClient } from '../api/client';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('vinix7_user');
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved user', e);
      }
    } else {
      // Default demo user so user can start testing immediately!
      const demoUser = {
        id: 'demo-student-01',
        nama: 'Peserta Magang VINIX7',
        email: 'intern@vinix7.com',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
      };
      localStorage.setItem('vinix7_user', JSON.stringify(demoUser));
      setUser(demoUser);
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const res = await apiClient.login(email, password);
    if (res.success) {
      setUser(res.user);
    }
    return res;
  };

  const register = async (nama, email, password) => {
    const res = await apiClient.register(nama, email, password);
    if (res.success) {
      setUser(res.user);
    }
    return res;
  };

  const logout = () => {
    localStorage.removeItem('vinix7_user');
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
