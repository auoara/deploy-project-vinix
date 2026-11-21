import { getSupabaseClient } from '../src/config/supabase.js';
import {
  courses,
  sections,
  questions,
  options,
  essay_rubrics
} from '../src/data/memoryStore.js';

async function upsertInBatches(supabase, tableName, rows, batchSize = 200) {
  for (let i = 0; i < rows.length; i += batchSize) {
    const batch = rows.slice(i, i + batchSize);
    const { error } = await supabase
      .from(tableName)
      .upsert(batch, { onConflict: 'id' });

    if (error) {
      throw new Error(`Gagal upsert ke tabel '${tableName}' (batch ${i / batchSize + 1}): ${error.message}`);
    }
  }
}

async function seed() {
  console.log('=== MEMULAI MIGRASI DATA BANK SOAL KE SUPABASE ===\n');
  const supabase = getSupabaseClient();

  try {
    console.log(`1/5 Mengunggah ${courses.length} data courses...`);
    await upsertInBatches(supabase, 'courses', courses);

    console.log(`2/5 Mengunggah ${sections.length} data sections...`);
    await upsertInBatches(supabase, 'sections', sections);

    console.log(`3/5 Mengunggah ${questions.length} data questions...`);
    await upsertInBatches(supabase, 'questions', questions);

    console.log(`4/5 Mengunggah ${options.length} data options...`);
    try {
      await upsertInBatches(supabase, 'options', options);
    } catch (optErr) {
      if (optErr.message.includes('cannot insert a non-DEFAULT value into column "is_correct"')) {
        console.log('   ℹ Kolom "is_correct" terdeteksi sebagai Generated Column. Mengunggah ulang tanpa kolom "is_correct"...');
        const optionsWithoutGenerated = options.map(({ is_correct, ...rest }) => rest);
        await upsertInBatches(supabase, 'options', optionsWithoutGenerated);
      } else {
        throw optErr;
      }
    }

    console.log(`5/5 Mengunggah ${essay_rubrics.length} data essay_rubrics...`);
    await upsertInBatches(supabase, 'essay_rubrics', essay_rubrics);

    console.log('\n=== VERIFIKASI JUMLAH BARIS DI SUPABASE ===');
    const tables = ['courses', 'sections', 'questions', 'options', 'essay_rubrics'];
    for (const table of tables) {
      const { count, error } = await supabase
        .from(table)
        .select('*', { count: 'exact', head: true });

      if (error) throw error;
      console.log(`[OK] Tabel ${table.padEnd(15)} : ${count} baris`);
    }

    const { count: correctCount, error: correctErr } = await supabase
      .from('options')
      .select('*', { count: 'exact', head: true })
      .eq('is_correct', true);

    if (correctErr) throw correctErr;
    console.log(`[OK] Opsi jawaban benar     : ${correctCount} baris (Target: 300)`);

    if (correctCount !== 300) {
      throw new Error(
        `Jumlah opsi is_correct=true (${correctCount}) tidak sesuai target 300. Minta Aurora jalankan di SQL Editor: ALTER TABLE options ALTER COLUMN is_correct DROP EXPRESSION;`
      );
    }

    console.log('\nMIGRASI DATA KE SUPABASE SELESAI DENGAN SUKSES!');
  } catch (err) {
    console.error('\n[MIGRASI GAGAL]', err.message);
    process.exit(1);
  }
}

seed();