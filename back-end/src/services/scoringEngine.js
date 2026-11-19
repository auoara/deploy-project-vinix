/**
 * Scoring Engine Service
 * Mengimplementasikan Aturan PRD Bagian 6 & 13:
 * - Komposisi 10 PG (10 poin/soal = max 100)
 * - Komposisi 5 Essay (10 poin/soal = max 50)
 * - Bobot: 60% PG + 40% Essay
 * - Rumus: Nilai Akhir = [ 0.60 * (Total_PG / 100) + 0.40 * (Total_Essay / 50) ] * 100
 * - KKM: 80 (>= 80 Lulus, <= 79 Belum Lulus)
 */

const STOPWORDS = new Set([
  'adalah', 'yang', 'dan', 'di', 'ke', 'dari', 'untuk', 'dengan', 'pada',
  'dalam', 'sebagai', 'agar', 'supaya', 'sehingga', 'karena', 'atau', 'itu',
  'ini', 'tersebut', 'dapat', 'bisa', 'harus', 'perlu', 'lebih', 'sangat',
  'secara', 'oleh', 'bagi', 'saat', 'ketika', 'jika', 'apabila', 'bahwa',
  'tentang', 'mengenai', 'serta', 'maupun', 'suatu', 'sebuah', 'para',
  'mereka', 'kita', 'kami', 'anda', 'nya', 'pun', 'juga', 'hanya', 'saja',
  'tetapi', 'namun', 'sedangkan', 'yakni', 'yaitu', 'misalnya', 'seperti',
  'the', 'is', 'are', 'to', 'of', 'in', 'for', 'and', 'or', 'a', 'an'
]);

export function normalizeText(text) {
  if (!text) return '';
  return String(text)
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'–—]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Stemmer ringan Bahasa Indonesia untuk menyamakan bentuk imbuhan
 * (mis. memahami/pemahaman -> paham, dibutuhkan/kebutuhan -> butuh)
 */
function stemIndo(word) {
  if (!word || word.length < 5) return word;
  let w = word;

  // Hapus akhiran umum
  if (w.endsWith('nya') && w.length > 6) w = w.slice(0, -3);
  else if (w.endsWith('kan') && w.length > 6) w = w.slice(0, -3);
  else if (w.endsWith('an') && w.length > 5) w = w.slice(0, -2);
  else if (w.endsWith('i') && w.length > 5) w = w.slice(0, -1);

  // Hapus awalan umum (jaga akar minimal 4 huruf)
  const prefixes = ['meny', 'meng', 'mem', 'men', 'me', 'peny', 'peng', 'pem', 'pen', 'pe', 'ber', 'per', 'ter', 'di', 'ke', 'se'];
  for (const pre of prefixes) {
    if (w.startsWith(pre) && w.length - pre.length >= 4) {
      w = w.slice(pre.length);
      break;
    }
  }

  return w;
}

/**
 * Mengekstrak token kata bermakna (beserta bentuk dasarnya) tanpa stopword
 */
function extractContentTokens(text) {
  const normalized = normalizeText(text);
  if (!normalized) return { rawTokens: [], stemSet: new Set() };

  const words = normalized.split(' ').filter(w => w.length >= 2 && !STOPWORDS.has(w));
  const stemSet = new Set();

  for (const w of words) {
    stemSet.add(w);
    stemSet.add(stemIndo(w));
  }

  return { rawTokens: words, stemSet };
}

/**
 * Menghitung skor kecocokan satu entri kata kunci (mendukung sinonim "/" & pencocokan token)
 */
function scoreKeywordMatch(kw, normalizedAnswer, studentStemSet) {
  // Pisahkan alternatif sinonim seperti "nilai/value" atau "pengguna/customer"
  const alternatives = String(kw)
    .split(/[\/|]/)
    .map(part => part.trim())
    .filter(Boolean);

  let bestScore = 0;

  for (const alt of alternatives) {
    const normAlt = normalizeText(alt);
    if (!normAlt) continue;

    // 1. Kecocokan frasa utuh
    if (normalizedAnswer.includes(normAlt)) {
      return 1;
    }

    // 2. Kecocokan berbasis token kata kunci
    const { rawTokens: kwTokens } = extractContentTokens(alt);
    if (kwTokens.length === 0) continue;

    let hitCount = 0;
    for (const token of kwTokens) {
      if (studentStemSet.has(token) || studentStemSet.has(stemIndo(token))) {
        hitCount++;
      }
    }

    const tokenRatio = hitCount / kwTokens.length;
    if (tokenRatio > bestScore) {
      bestScore = tokenRatio;
    }
  }

  return bestScore;
}

/**
 * Mengevaluasi jawaban essay berdasarkan kombinasi:
 * 1. Pencocokan kata kunci rubrik (frasa & token berimbuhan)
 * 2. Kemiripan konsep terhadap kunci_jawaban ideal
 * 3. Kecocokan langsung terhadap contoh rubrik_skor (9 / 8 / 7) jika tersedia
 */
export function evaluateEssay(studentAnswer, keywords = [], rubric = null) {
  const safeKeywords = Array.isArray(keywords) ? keywords : [];
  const idealAnswer = typeof rubric === 'string'
    ? rubric
    : (rubric?.kunci_jawaban || rubric?.kunciJawaban || '');

  if (!studentAnswer || !String(studentAnswer).trim() || (safeKeywords.length === 0 && !idealAnswer)) {
    return {
      poin: 0,
      label: 'Salah',
      matchedCount: 0,
      totalKeywords: safeKeywords.length,
      missingKeywords: [...safeKeywords]
    };
  }

  const normalizedAnswer = normalizeText(studentAnswer);
  const { rawTokens: studentTokens, stemSet: studentStemSet } = extractContentTokens(studentAnswer);

  if (studentTokens.length === 0) {
    return {
      poin: 0,
      label: 'Salah',
      matchedCount: 0,
      totalKeywords: safeKeywords.length,
      missingKeywords: [...safeKeywords]
    };
  }

  // 1. Evaluasi Kata Kunci Rubrik
  let keywordCreditSum = 0;
  let fullMatchedCount = 0;
  const missingKeywords = [];

  for (const kw of safeKeywords) {
    const score = scoreKeywordMatch(kw, normalizedAnswer, studentStemSet);
    keywordCreditSum += score;
    if (score >= 0.5) {
      fullMatchedCount++;
    } else {
      missingKeywords.push(kw);
    }
  }

  const keywordRatio = safeKeywords.length > 0 ? (keywordCreditSum / safeKeywords.length) : 0;

  // 2. Evaluasi Kemiripan terhadap Kunci Jawaban Ideal
  let idealCoverage = 0;
  let studentRelevance = 0;
  let matchedConceptTokens = 0;

  if (idealAnswer) {
    const { rawTokens: idealTokens, stemSet: idealStemSet } = extractContentTokens(idealAnswer);

    if (idealTokens.length > 0) {
      let idealHits = 0;
      for (const t of idealTokens) {
        if (studentStemSet.has(t) || studentStemSet.has(stemIndo(t))) {
          idealHits++;
        }
      }
      idealCoverage = idealHits / idealTokens.length;

      // Gabungkan token kunci ideal + token seluruh kata kunci untuk mengukur relevansi jawaban
      const combinedValidStems = new Set(idealStemSet);
      for (const kw of safeKeywords) {
        const { stemSet: kwStems } = extractContentTokens(kw);
        kwStems.forEach(s => combinedValidStems.add(s));
      }

      let relevantStudentHits = 0;
      for (const t of studentTokens) {
        if (combinedValidStems.has(t) || combinedValidStems.has(stemIndo(t))) {
          relevantStudentHits++;
        }
      }
      matchedConceptTokens = relevantStudentHits;
      studentRelevance = relevantStudentHits / studentTokens.length;
    }
  }

  // F1-score antara kelengkapan konsep ideal dan ketepatan jawaban mahasiswa
  const idealF1 = (idealCoverage + studentRelevance) > 0
    ? (2 * idealCoverage * studentRelevance) / (idealCoverage + studentRelevance)
    : 0;

  // 3. Cek kecocokan terhadap contoh jawaban pada rubrik_skor (jika disimpan di DB)
  let rubricFloorScore = 0;
  const rubrikSkor = rubric && typeof rubric === 'object' ? (rubric.rubrik_skor || rubric.rubrikSkor) : null;
  if (rubrikSkor && typeof rubrikSkor === 'object' && !Array.isArray(rubrikSkor)) {
    for (const tier of [10, 9, 8, 7]) {
      const tierText = rubrikSkor[String(tier)] || rubrikSkor[tier];
      if (!tierText || typeof tierText !== 'string') continue;

      // Abaikan teks deskripsi aturan generik (bukan contoh kalimat jawaban)
      const lowerTier = tierText.toLowerCase();
      if (
        lowerTier.includes('kata kunci utama') ||
        lowerTier.includes('konsep inti') ||
        lowerTier.includes('sekitar 60%') ||
        lowerTier.includes('kedalaman konsep')
      ) {
        continue;
      }

      const { rawTokens: tierTokens, stemSet: tierStems } = extractContentTokens(tierText);
      if (tierTokens.length >= 2) {
        let hits = 0;
        for (const t of tierTokens) {
          if (studentStemSet.has(t) || studentStemSet.has(stemIndo(t))) hits++;
        }
        const sim = hits / Math.max(tierTokens.length, studentTokens.length);
        if (sim >= 0.65 && tier > rubricFloorScore) {
          rubricFloorScore = tier;
        }
      }
    }
  }

  // Guard: jika tidak ada satupun kata kunci atau konsep ideal yang relevan, beri 0
  if (keywordCreditSum === 0 && matchedConceptTokens === 0 && rubricFloorScore === 0) {
    return {
      poin: 0,
      label: 'Salah',
      matchedCount: 0,
      totalKeywords: safeKeywords.length,
      missingKeywords
    };
  }

  const effectiveScore = Math.max(keywordRatio, idealF1);
  let poin = 0;

  if (
    effectiveScore >= 0.72 ||
    fullMatchedCount >= 4 ||
    (idealCoverage >= 0.75 && studentRelevance >= 0.55)
  ) {
    poin = 10;
  } else if (
    effectiveScore >= 0.48 ||
    fullMatchedCount === 3 ||
    (studentRelevance >= 0.70 && matchedConceptTokens >= 4 && idealCoverage >= 0.22)
  ) {
    poin = 9;
  } else if (
    effectiveScore >= 0.28 ||
    fullMatchedCount === 2 ||
    (studentRelevance >= 0.60 && matchedConceptTokens >= 2 && idealCoverage >= 0.16)
  ) {
    poin = 8;
  } else if (
    effectiveScore >= 0.10 ||
    fullMatchedCount >= 1 ||
    matchedConceptTokens >= 1
  ) {
    poin = 7;
  }

  if (rubricFloorScore > poin) {
    poin = rubricFloorScore;
  }

  const label = poin === 10 ? 'Tepat' : (poin >= 7 ? 'Kurang Tepat' : 'Salah');

  return {
    poin,
    label,
    matchedCount: fullMatchedCount,
    totalKeywords: safeKeywords.length,
    missingKeywords
  };
}

export function calculateFinalScore(evaluatedAnswers) {
  let totalPG = 0;
  let totalEssay = 0;
  const topicScores = {};

  for (const item of evaluatedAnswers) {
    const { topik, tipe, poin } = item;

    if (tipe === 'pilihan_ganda') {
      totalPG += poin;
    } else if (tipe === 'essay') {
      totalEssay += poin;
    }

    if (!topicScores[topik]) {
      topicScores[topik] = { earned: 0, possible: 0 };
    }
    topicScores[topik].earned += poin;
    topicScores[topik].possible += 10;
  }

  const pgComponent = 0.60 * (totalPG / 100);
  const essayComponent = 0.40 * (totalEssay / 50);
  const rawScore = (pgComponent + essayComponent) * 100;
  const nilaiAkhir = Math.round(rawScore * 100) / 100;

  const lulus = nilaiAkhir >= 80;

  const weakTopics = Object.entries(topicScores)
    .filter(([_, score]) => (score.earned / score.possible) < 0.7)
    .map(([topik]) => topik);

  return {
    nilaiAkhir,
    lulus,
    totalPG,
    totalEssay,
    weakTopics
  };
}