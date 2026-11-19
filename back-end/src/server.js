/**
 * VINIX7 Interactive Mini-Course & Assessment Platform
 * Express.js REST API Server
 * Mengacu pada PRD Bagian 11: Kesepakatan Kontrak Data & Endpoint (Back-End)
 */

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

import authRoutes from './routes/authRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
import attemptRoutes from './routes/attemptRoutes.js';
import progressRoutes from './routes/progressRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const PORT = process.env.PORT || 5000;

// ─── 1. CORS Configuration ────────────────────────────────────────────────────
const allowedOrigins = [
  process.env.FRONTEND_URL || 'http://localhost:5173',
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:3000'
];

app.use(cors({
  origin: (origin, callback) => {
    // Izinkan request tanpa origin (seperti curl, mobile app, postman)
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(null, true); // Permisif saat mode development
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// ─── 2. Body Parsers ──────────────────────────────────────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── 3. Request Logging (Dev Mode) ────────────────────────────────────────────
if (process.env.NODE_ENV !== 'test') {
  app.use((req, _res, next) => {
    console.log(`[${new Date().toLocaleTimeString('id-ID')}] ${req.method} ${req.originalUrl}`);
    next();
  });
}

// ─── 4. Health Check Endpoint ─────────────────────────────────────────────────
const healthHandler = (_req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'VINIX7 API Server',
    store: process.env.DATA_STORE || 'memory',
    timestamp: new Date().toISOString()
  });
};

app.get('/api/health', healthHandler);
app.get('/health', healthHandler);

// ─── 5. Route Mounts ──────────────────────────────────────────────────────────
// Dipasang pada prefix /api (sesuai client.js) dan tanpa prefix (sesuai PRD)
app.use('/api/auth', authRoutes);
app.use('/auth', authRoutes);

app.use('/api/courses', courseRoutes);
app.use('/courses', courseRoutes);

app.use('/api/attempts', attemptRoutes);
app.use('/attempts', attemptRoutes);

app.use('/api/me', progressRoutes);
app.use('/me', progressRoutes);

// ─── 6. 404 Route Not Found Handler ───────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Endpoint ${req.method} ${req.originalUrl} tidak ditemukan pada server VINIX7.`
  });
});

// ─── 7. Global Error Handler ──────────────────────────────────────────────────
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  console.error('[API Error]', err);

  const statusCode = err.status || 500;
  return res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error',
    error: err.error || (statusCode === 500 ? 'INTERNAL_SERVER_ERROR' : 'BAD_REQUEST'),
    remainingSeconds: err.remainingSeconds || undefined,
    cooldownUntil: err.cooldownUntil || undefined,
    errors: err.errors || null
  });
});

// ─── 8. Server Listener ───────────────────────────────────────────────────────
const currentFilePath = fileURLToPath(import.meta.url);
const isDirectRun = process.argv[1] && path.resolve(process.argv[1]) === path.resolve(currentFilePath);

if (isDirectRun && process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`\n======================================================`);
    console.log(`🚀 VINIX7 Back-End Server running on http://localhost:${PORT}`);
    console.log(`📦 Data Store Mode   : ${process.env.DATA_STORE || 'memory'}`);
    console.log(`🌐 Allowed Frontend  : ${process.env.FRONTEND_URL || 'http://localhost:5173'}`);
    console.log(`======================================================\n`);
  });
}

export default app;
