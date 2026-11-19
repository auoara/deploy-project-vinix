import {
  courses,
  sections,
  questions,
  options,
  essay_rubrics
} from '../src/data/memoryStore.js';

let errors = 0;

function logError(msg) {
  console.error(`✖ [ERROR] ${msg}`);
  errors++;
}

console.log('=== AUDIT INTEGRITAS BANK SOAL VINIX7 (MODUL 1–10) ===\n');
console.log(`Total Courses      : ${courses.length} (Target: 10)`);
console.log(`Total Sections     : ${sections.length} (Target: 30)`);
console.log(`Total Questions    : ${questions.length} (Target: 450)`);
console.log(`Total Options      : ${options.length} (Target: 1200)`);
console.log(`Total Essay Rubric : ${essay_rubrics.length} (Target: 150)\n`);

if (courses.length !== 10) logError(`Jumlah courses tidak 10 (${courses.length})`);
if (questions.length !== 450) logError(`Jumlah questions tidak 450 (${questions.length})`);
if (options.length !== 1200) logError(`Jumlah options tidak 1200 (${options.length})`);
if (essay_rubrics.length !== 150) logError(`Jumlah essay_rubrics tidak 150 (${essay_rubrics.length})`);

// 1. Cek duplikasi ID
const checkUniqueIds = (items, label) => {
  const seen = new Set();
  for (const item of items) {
    if (!item.id) logError(`${label} memiliki item tanpa id`);
    if (seen.has(item.id)) logError(`Duplikasi ID pada ${label}: ${item.id}`);
    seen.add(item.id);
  }
};

checkUniqueIds(courses, 'courses');
checkUniqueIds(sections, 'sections');
checkUniqueIds(questions, 'questions');
checkUniqueIds(options, 'options');
checkUniqueIds(essay_rubrics, 'essay_rubrics');

// 2. Cek kelengkapan tiap modul (30 PG + 15 Essay, Set A/B/C)
for (const c of courses) {
  const modQuestions = questions.filter(q => q.course_id === c.id);
  const pgCount = modQuestions.filter(q => q.tipe === 'pilihan_ganda').length;
  const essayCount = modQuestions.filter(q => q.tipe === 'essay').length;

  if (pgCount !== 30 || essayCount !== 15) {
    logError(`Modul ${c.urutan} (${c.judul}): PG=${pgCount}, Essay=${essayCount}`);
  }

  for (const set of ['A', 'B', 'C']) {
    const setPg = modQuestions.filter(q => q.set_paket === set && q.tipe === 'pilihan_ganda').length;
    const setEssay = modQuestions.filter(q => q.set_paket === set && q.tipe === 'essay').length;
    if (setPg !== 10 || setEssay !== 5) {
      logError(`Modul ${c.urutan} Set ${set}: PG=${setPg} (harus 10), Essay=${setEssay} (harus 5)`);
    }
  }
}

// 3. Cek relasi options & essay_rubrics untuk setiap question
for (const q of questions) {
  if (!q.topik || !q.teks) {
    logError(`Soal ${q.id} kehilangan topik atau teks`);
  }

  if (q.tipe === 'pilihan_ganda') {
    const qOpts = options.filter(o => o.question_id === q.id);
    const correctOpts = qOpts.filter(o => o.is_correct === true);

    if (qOpts.length !== 4) {
      logError(`Soal PG ${q.id} memiliki ${qOpts.length} opsi (harus 4)`);
    }
    if (correctOpts.length !== 1) {
      logError(`Soal PG ${q.id} memiliki ${correctOpts.length} jawaban benar (harus tepat 1)`);
    }
  } else if (q.tipe === 'essay') {
    const rubric = essay_rubrics.find(r => r.question_id === q.id);
    if (!rubric) {
      logError(`Soal Essay ${q.id} tidak memiliki pasangan di essay_rubrics`);
    } else if (!rubric.kunci_jawaban || !Array.isArray(rubric.kata_kunci) || rubric.kata_kunci.length === 0) {
      logError(`Rubrik soal Essay ${q.id} memiliki kunci_jawaban atau kata_kunci kosong`);
    }
  } else {
    logError(`Tipe soal tidak valid pada ${q.id}: ${q.tipe}`);
  }
}

console.log('======================================================');
if (errors === 0) {
  console.log('✔ AUDIT SELESAI: 0 ERROR! Seluruh 450 soal siap dimigrasi ke Supabase.');
} else {
  console.log(`✖ AUDIT SELESAI: Ditemukan ${errors} error yang perlu diperbaiki.`);
  process.exit(1);
}