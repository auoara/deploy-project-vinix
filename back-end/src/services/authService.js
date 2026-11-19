/**
 * Auth Service (Dual-Store: memory & supabase)
 */

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { users, initUserProgress } from '../data/memoryStore.js';
import { getSupabaseClient } from '../config/supabase.js';
import { initUserProgressSupabase } from './courseService.js';

const isSupabase = () => process.env.DATA_STORE === 'supabase';
const getJwtSecret = () => process.env.JWT_SECRET || 'supersecret_vinix7';
const getJwtExpiresIn = () => process.env.JWT_EXPIRES_IN || '7d';

function generateToken(user) {
  return jwt.sign(
    { id: user.id, nama: user.nama, email: user.email },
    getJwtSecret(),
    { expiresIn: getJwtExpiresIn() }
  );
}

export async function registerUser(nama, email, password) {
  const cleanEmail = email.toLowerCase().trim();
  const cleanNama = nama.trim();
  const password_hash = await bcrypt.hash(password, 10);
  const now = new Date().toISOString();

  if (isSupabase()) {
    const supabase = getSupabaseClient();

    const { data: existing, error: checkErr } = await supabase
      .from('users')
      .select('id')
      .eq('email', cleanEmail)
      .maybeSingle();

    if (checkErr) throw checkErr;
    if (existing) {
      const err = new Error('Email sudah terdaftar. Silakan gunakan email lain.');
      err.status = 409;
      throw err;
    }

    const newUserId = uuidv4();
    const { data: newUser, error: insertErr } = await supabase
      .from('users')
      .insert({
        id: newUserId,
        nama: cleanNama,
        email: cleanEmail,
        password_hash,
        avatar_url: null,
        created_at: now,
        updated_at: now
      })
      .select('id, nama, email, avatar_url')
      .single();

    if (insertErr) throw insertErr;

    await initUserProgressSupabase(newUser.id);

    const token = generateToken(newUser);
    return { token, user: newUser };
  }

  // Mode In-Memory
  const existing = users.find(u => u.email === cleanEmail);
  if (existing) {
    const err = new Error('Email sudah terdaftar. Silakan gunakan email lain.');
    err.status = 409;
    throw err;
  }

  const newUser = {
    id: uuidv4(),
    nama: cleanNama,
    email: cleanEmail,
    password_hash,
    avatar_url: null,
    created_at: now,
    updated_at: now
  };

  users.push(newUser);
  initUserProgress(newUser.id);

  const token = generateToken(newUser);
  return {
    token,
    user: { id: newUser.id, nama: newUser.nama, email: newUser.email, avatar_url: newUser.avatar_url }
  };
}

export async function loginUser(email, password) {
  const cleanEmail = email.toLowerCase().trim();

  if (isSupabase()) {
    const supabase = getSupabaseClient();
    const { data: user, error } = await supabase
      .from('users')
      .select('id, nama, email, password_hash, avatar_url')
      .eq('email', cleanEmail)
      .maybeSingle();

    if (error) throw error;
    if (!user) {
      const err = new Error('Email atau password salah.');
      err.status = 401;
      throw err;
    }

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      const err = new Error('Email atau password salah.');
      err.status = 401;
      throw err;
    }

    const token = generateToken(user);
    return {
      token,
      user: { id: user.id, nama: user.nama, email: user.email, avatar_url: user.avatar_url }
    };
  }

  // Mode In-Memory
  const user = users.find(u => u.email === cleanEmail);
  if (!user) {
    const err = new Error('Email atau password salah.');
    err.status = 401;
    throw err;
  }

  const isMatch = await bcrypt.compare(password, user.password_hash);
  if (!isMatch) {
    const err = new Error('Email atau password salah.');
    err.status = 401;
    throw err;
  }

  const token = generateToken(user);
  return {
    token,
    user: { id: user.id, nama: user.nama, email: user.email, avatar_url: user.avatar_url }
  };
}