/**
 * VINIX7 Automated API Flow Integration Test
 * Menguji seluruh alur:
 * 1. Register user baru
 * 2. Login
 * 3. Cek GET /courses (Modul 1 unlocked, Modul 2 locked)
 * 4. Mulai ujian Modul 1 (Set A)
 * 5. Submit jawaban nilai < 80:
 *    - Verifikasi isPassed = false
 *    - Verifikasi cooldown 1 menit (60 detik) aktif
 *    - Verifikasi startExam ditolak HTTP 429 COOLDOWN_ACTIVE
 *    - Verifikasi Modul 2 tetap 'locked'
 * 6. Submit ulang setelah cooldown:
 *    - Mulai ujian lagi (Set B)
 *    - Submit jawaban nilai >= 80 (lulus)
 *    - Verifikasi Modul 1 'passed'
 *    - Verifikasi Modul 2 otomatis 'unlocked'
 */

import app from '../src/server.js';
import { attempts } from '../src/data/memoryStore.js';
import { getSupabaseClient } from '../src/config/supabase.js';

process.env.NODE_ENV = 'test';

const waitReal = process.argv.includes('--real-wait');

// ANSI Colors
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m'
};

function pass(step, msg) {
  console.log(`${colors.green}✔ [PASS]${colors.reset} ${colors.bold}Langkah ${step}:${colors.reset} ${msg}`);
}

function fail(step, msg, err) {
  console.error(`${colors.red}✖ [FAIL] Langkah ${step}: ${msg}${colors.reset}`, err || '');
  process.exit(1);
}

function info(msg) {
  console.log(`${colors.cyan}ℹ [INFO]${colors.reset} ${msg}`);
}

async function run() {
  console.log(`\n${colors.bold}${colors.blue}======================================================${colors.reset}`);
  console.log(`${colors.bold}${colors.blue}🚀 MENJALANKAN PENGUJIAN OTOMATIS ALUR LENGKAP API VINIX7${colors.reset}`);
  console.log(`${colors.bold}${colors.blue}======================================================${colors.reset}\n`);

  // Start ephemeral server and wait until listening
  const { server, port } = await new Promise((resolve) => {
    const s = app.listen(0, '127.0.0.1', () => {
      resolve({ server: s, port: s.address().port });
    });
  });
  const baseUrl = `http://127.0.0.1:${port}/api`;
  info(`Server pengujian berjalan di port dinamis: ${port} (Store: ${process.env.DATA_STORE || 'memory'})`);

  const testUser = {
    nama: 'Peserta Uji Otomatis',
    email: `peserta.test_${Date.now()}@vinix7.com`,
    password: 'Password123!'
  };

  let testUserId = '';
  let token = '';
  let attempt1Id = '';
  let attempt1Questions = [];

  try {
    // ───────────────────────────────────────────────────────────────────────────
    // LANGKAH 1: Register User Baru
    // ───────────────────────────────────────────────────────────────────────────
    console.log(`\n${colors.yellow}--- LANGKAH 1: POST /auth/register ---${colors.reset}`);
    const regRes = await fetch(`${baseUrl}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testUser)
    });
    const regData = await regRes.json();

    if (regRes.status !== 201 || !regData.success) {
      fail(1, `Gagal register user baru (Status: ${regRes.status})`, regData);
    }
    testUserId = regData.user.id;
    pass(1, `Berhasil register user baru: ${regData.user.email} (ID: ${testUserId})`);

    // ───────────────────────────────────────────────────────────────────────────
    // LANGKAH 2: Login
    // ───────────────────────────────────────────────────────────────────────────
    console.log(`\n${colors.yellow}--- LANGKAH 2: POST /auth/login ---${colors.reset}`);
    const loginRes = await fetch(`${baseUrl}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: testUser.email, password: testUser.password })
    });
    const loginData = await loginRes.json();

    if (loginRes.status !== 200 || !loginData.token) {
      fail(2, `Gagal login (Status: ${loginRes.status})`, loginData);
    }
    token = loginData.token;
    pass(2, `Login berhasil, menerima JWT Token (panjang: ${token.length} karakter)`);

    // ───────────────────────────────────────────────────────────────────────────
    // LANGKAH 3: Cek GET /courses (Modul 1 Unlocked, Modul 2 Locked)
    // ───────────────────────────────────────────────────────────────────────────
    console.log(`\n${colors.yellow}--- LANGKAH 3: GET /courses (Gating Awal) ---${colors.reset}`);
    const coursesRes = await fetch(`${baseUrl}/courses`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const courses = await coursesRes.json();

    if (coursesRes.status !== 200 || !Array.isArray(courses)) {
      fail(3, `Gagal mengambil daftar courses (Status: ${coursesRes.status})`, courses);
    }

    const modul1 = courses.find(c => c.urutan === 1);
    const modul2 = courses.find(c => c.urutan === 2);

    if (!modul1 || modul1.status !== 'unlocked') {
      fail(3, `Modul 1 diharapkan berstatus 'unlocked', tetapi didapat: '${modul1?.status}'`);
    }
    if (!modul2 || modul2.status !== 'locked') {
      fail(3, `Modul 2 diharapkan berstatus 'locked', tetapi didapat: '${modul2?.status}'`);
    }
    pass(3, `Verifikasi Gating Awal Valid: Modul 1 ('${modul1.status}') | Modul 2 ('${modul2.status}')`);

    // ───────────────────────────────────────────────────────────────────────────
    // LANGKAH 4: Mulai Ujian Modul 1
    // ───────────────────────────────────────────────────────────────────────────
    console.log(`\n${colors.yellow}--- LANGKAH 4: POST /courses/:id/exam/start (Attempt 1) ---${colors.reset}`);
    const examStartRes = await fetch(`${baseUrl}/courses/${modul1.id}/exam/start`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const examStartData = await examStartRes.json();

    if (examStartRes.status !== 200 || !examStartData.attemptId) {
      fail(4, `Gagal memulai ujian Modul 1 (Status: ${examStartRes.status})`, examStartData);
    }

    attempt1Id = examStartData.attemptId;
    attempt1Questions = examStartData.questions;

    if (examStartData.attemptNumber !== 1 || examStartData.setPaket !== 'A') {
      fail(4, `Expected attempt 1 Set A, got attempt ${examStartData.attemptNumber} Set ${examStartData.setPaket}`);
    }

    // Pastikan kunci jawaban tidak bocor ke client
    const hasLeak = attempt1Questions.some(q =>
      q.poin !== undefined || q.is_correct !== undefined || q.kunciJawaban !== undefined || q.options?.some(o => o.is_correct !== undefined)
    );
    if (hasLeak) {
      fail(4, 'Pelanggaran Keamanan: Kunci jawaban atau poin bocor pada payload client!');
    }

    pass(4, `Sesi ujian 1 dimulai (AttemptID: ${attempt1Id}, Paket: ${examStartData.setPaket}, Total Soal: ${attempt1Questions.length})`);

    // ───────────────────────────────────────────────────────────────────────────
    // LANGKAH 5: Submit Jawaban Nilai < 80
    // ───────────────────────────────────────────────────────────────────────────
    console.log(`\n${colors.yellow}--- LANGKAH 5: POST /attempts/:id/submit (Nilai Rendah & Cooldown) ---${colors.reset}`);
    const wrongAnswers = {};
    for (const q of attempt1Questions) {
      wrongAnswers[q.id] = q.tipe === 'pilihan_ganda' ? 'opt-salah' : 'jawaban salah tidak relevan';
    }

    const submitRes = await fetch(`${baseUrl}/attempts/${attempt1Id}/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ answers: wrongAnswers })
    });
    const submitData = await submitRes.json();

    if (submitRes.status !== 200) {
      fail(5, `Gagal submit jawaban ujian (Status: ${submitRes.status})`, submitData);
    }

    const finalScore = submitData.finalScore ?? submitData.nilai;
    const isPassed = submitData.isPassed ?? submitData.lulus;

    if (finalScore >= 80 || isPassed) {
      fail(5, `Nilai diharapkan < 80 dan tidak lulus, tapi didapat: nilai=${finalScore}, lulus=${isPassed}`);
    }

    if (!submitData.cooldownUntil) {
      fail(5, 'cooldownUntil tidak ditemukan pada hasil ujian yang tidak lulus!');
    }

    const cooldownUntilDate = new Date(submitData.cooldownUntil);
    const cooldownRemainingSec = Math.round((cooldownUntilDate.getTime() - Date.now()) / 1000);

    if (cooldownRemainingSec < 50 || cooldownRemainingSec > 65) {
      fail(5, `Durasi cooldown diharapkan ~60 detik (1 menit), tapi didapat: ${cooldownRemainingSec} detik`);
    }

    pass(5, `Submit berhasil: Nilai = ${finalScore} (< 80), Status = GAGAL, Cooldown 1 menit aktif hingga: ${submitData.cooldownUntil} (${cooldownRemainingSec}s)`);

    // 5A: Coba mulai ujian lagi saat cooldown aktif -> HARUS DITOLAK HTTP 429
    info('Menguji penolakan ujian saat cooldown aktif...');
    const rejectedStartRes = await fetch(`${baseUrl}/courses/${modul1.id}/exam/start`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const rejectedStartData = await rejectedStartRes.json();

    if (rejectedStartRes.status !== 429 || rejectedStartData.error !== 'COOLDOWN_ACTIVE') {
      fail(5, `Harusnya HTTP 429 COOLDOWN_ACTIVE, tapi didapat status ${rejectedStartRes.status}`, rejectedStartData);
    }
    pass(5, `Validasi Cooldown Berhasil: Request ujian ditolak dengan HTTP 429 (Sisa: ${rejectedStartData.remainingSeconds} detik)`);

    // 5B: Cek status Modul 2 -> HARUS TETAP LOCKED
    const coursesAfterFailRes = await fetch(`${baseUrl}/courses`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const coursesAfterFail = await coursesAfterFailRes.json();
    const modul2AfterFail = coursesAfterFail.find(c => c.urutan === 2);

    if (modul2AfterFail.status !== 'locked') {
      fail(5, `Modul 2 seharusnya TETAP LOCKED saat ujian Modul 1 gagal, didapat: '${modul2AfterFail.status}'`);
    }
    pass(5, `Verifikasi Gating: Modul 2 tetap terkunci ('${modul2AfterFail.status}')`);

    // ───────────────────────────────────────────────────────────────────────────
    // LANGKAH 6: Submit Ulang Setelah Cooldown (Nilai >= 80)
    // ───────────────────────────────────────────────────────────────────────────
    console.log(`\n${colors.yellow}--- LANGKAH 6: Submit Ulang Setelah Cooldown (Percobaan 2, Target Nilai >= 80) ---${colors.reset}`);

    if (waitReal) {
      info(`Menunggu cooldown riil selama 61 detik...`);
      await new Promise(r => setTimeout(r, 61000));
    } else {
      // Fast-forward cooldown timestamp di store untuk simulasi otomatis cepat
      info(`Simulasi fast-forward: 1 menit cooldown telah berlalu.`);
      const pastIso = new Date(Date.now() - 5000).toISOString();
      if (process.env.DATA_STORE === 'supabase') {
        const supabase = getSupabaseClient();
        await supabase
          .from('attempts')
          .update({ cooldown_until: pastIso })
          .eq('id', attempt1Id);
      } else {
        const currentAttempt = attempts.find(a => a.id === attempt1Id);
        if (currentAttempt) {
          currentAttempt.cooldown_until = pastIso;
        }
      }
    }

    // Mulai sesi ujian ke-2 (harus berhasil dan mendapatkan Set B)
    const exam2StartRes = await fetch(`${baseUrl}/courses/${modul1.id}/exam/start`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const exam2StartData = await exam2StartRes.json();

    if (exam2StartRes.status !== 200 || !exam2StartData.attemptId) {
      fail(6, `Gagal memulai ujian ke-2 setelah cooldown (Status: ${exam2StartRes.status})`, exam2StartData);
    }

    if (exam2StartData.attemptNumber !== 2 || exam2StartData.setPaket !== 'B') {
      fail(6, `Ujian ke-2 seharusnya Paket B, tapi didapat: Attempt ${exam2StartData.attemptNumber} Set ${exam2StartData.setPaket}`);
    }
    pass(6, `Sesi ujian ke-2 berhasil dimulai (Attempt: 2, Set Paket: B, Total Soal: ${exam2StartData.questions.length})`);

    // Siapkan jawaban bernilai tinggi (>= 80) untuk Set B
    const passAnswers = {
      'q1000003-0000-0000-0000-000000000001': 'o1-B1-2',
      'q1000003-0000-0000-0000-000000000002': 'o1-B2-2',
      'q1000003-0000-0000-0000-000000000003': 'o1-B3-2',
      'q1000003-0000-0000-0000-000000000004': 'o1-B4-2',
      'q1000003-0000-0000-0000-000000000005': 'o1-B5-3',
      'q1000003-0000-0000-0000-000000000006': 'o1-B6-2',
      'q1000003-0000-0000-0000-000000000007': 'o1-B7-3',
      'q1000003-0000-0000-0000-000000000008': 'o1-B8-1',
      'q1000003-0000-0000-0000-000000000009': 'o1-B9-2',
      'q1000003-0000-0000-0000-000000000010': 'o1-B10-3',
      'q1000004-0000-0000-0000-000000000001': 'Keluhan pelanggan menunjukkan masalah nyata pengguna yang membuka peluang inovasi dan perbaikan produk.',
      'q1000004-0000-0000-0000-000000000002': 'Problem Statement Canvas adalah alat analisis terstruktur untuk membedah masalah pengguna dan menemukan akar masalah serta peluang solusi.',
      'q1000004-0000-0000-0000-000000000003': 'Strategi riset AI meliputi market researcher, interview simulator, competitor analyst, dan devil advocate.',
      'q1000004-0000-0000-0000-000000000004': 'Pain point adalah gejala masalah di permukaan, sedangkan root cause adalah penyebab utama atau akar masalah sebenarnya.',
      'q1000004-0000-0000-0000-000000000005': 'Segmentasi pengguna harus spesifik karena setiap kelompok memiliki kebutuhan berbeda dan fokus target pengguna memudahkan validasi.'
    };

    const submit2Res = await fetch(`${baseUrl}/attempts/${exam2StartData.attemptId}/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ answers: passAnswers })
    });
    const submit2Data = await submit2Res.json();

    if (submit2Res.status !== 200) {
      fail(6, `Gagal submit ujian ke-2 (Status: ${submit2Res.status})`, submit2Data);
    }

    const finalScore2 = submit2Data.finalScore ?? submit2Data.nilai;
    const isPassed2 = submit2Data.isPassed ?? submit2Data.lulus;

    if (finalScore2 < 80 || !isPassed2) {
      fail(6, `Ujian ke-2 diharapkan lulus (nilai >= 80), tapi didapat nilai: ${finalScore2}, status lulus: ${isPassed2}`, submit2Data);
    }

    pass(6, `Submit Ujian 2 Sukses: Nilai = ${finalScore2} (>= 80), Status = LULUS (PG: ${submit2Data.totalPG}/100, Essay: ${submit2Data.totalEssay}/50)`);

    // ───────────────────────────────────────────────────────────────────────────
    // LANGKAH 7: Verifikasi Modul 1 Passed & Modul 2 Otomatis Unlocked
    // ───────────────────────────────────────────────────────────────────────────
    console.log(`\n${colors.yellow}--- LANGKAH 7: GET /courses (Verifikasi Progressive Gating Terbuka) ---${colors.reset}`);
    const finalCoursesRes = await fetch(`${baseUrl}/courses`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const finalCourses = await finalCoursesRes.json();

    const finalModul1 = finalCourses.find(c => c.urutan === 1);
    const finalModul2 = finalCourses.find(c => c.urutan === 2);

    if (!finalModul1 || finalModul1.status !== 'passed') {
      fail(7, `Modul 1 diharapkan berstatus 'passed', tapi didapat: '${finalModul1?.status}'`);
    }

    if (!finalModul2 || finalModul2.status !== 'unlocked') {
      fail(7, `Modul 2 diharapkan otomatis 'unlocked', tapi didapat: '${finalModul2?.status}'`);
    }

    pass(7, `PROGRESSIVE GATING BERHASIL: Modul 1 = '${finalModul1.status}' (Nilai: ${finalModul1.nilaiTerbaik}), Modul 2 = '${finalModul2.status}' (Otomatis Terbuka!)`);

    console.log(`\n${colors.bold}${colors.green}================================================================${colors.reset}`);
    console.log(`${colors.bold}${colors.green}🎉 SELURUH PENGUJIAN ALUR API VINIX7 BERHASIL DENGAN SEMPURNA!${colors.reset}`);
    console.log(`${colors.bold}${colors.green}================================================================\n`);

  } catch (err) {
    fail('Global', 'Terjadi error tidak terduga selama pengujian alur:', err);
  } finally {
    if (process.env.DATA_STORE === 'supabase' && testUserId) {
      try {
        const supabase = getSupabaseClient();
        const { data: userAttempts } = await supabase
          .from('attempts')
          .select('id')
          .eq('user_id', testUserId);

        const attemptIds = (userAttempts || []).map(a => a.id);
        if (attemptIds.length > 0) {
          await supabase.from('answers').delete().in('attempt_id', attemptIds);
        }
        await supabase.from('attempts').delete().eq('user_id', testUserId);
        await supabase.from('progress').delete().eq('user_id', testUserId);
        await supabase.from('users').delete().eq('id', testUserId);
        info('Data akun uji sementara telah dibersihkan dari Supabase.');
      } catch (_cleanupErr) {
        // Abaikan jika gagal cleanup
      }
    }
    server.close();
  }
}

run();