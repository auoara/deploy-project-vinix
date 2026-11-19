# 🚀 Panduan Cepat & Jelas: Tim DevOps Engineer (VINIX7)

Halo Bro! 👋  
Selamat datang di direktori DevOps. Bagian **Front-End website kita saat ini sudah SELESAI 100%**, responsif, bertema resmi *VINIX7 LMS Midnight Navy*, dan sudah lolos verifikasi build produksi Vite dengan **0 error** (`exit code 0`).

Tugas utama lu adalah **mengelola containerization Docker, otomatisasi pipeline CI/CD di GitHub Actions, deployment cloud, dan audit kualitas performa web**.

> **Kabar Baiknya:** Berkas `docker-compose.yml`, `Dockerfile.backend`, dan `Dockerfile.frontend` sudah kita buatkan dan siap dijalankan kapan saja!

---

## 📦 1. Menjalankan Seluruh Aplikasi Secara Terpadu (1 Perintah)

Untuk menyalakan database PostgreSQL, server Back-End, dan web Front-End sekaligus di komputer lokal:

```bash
# 1. Masuk ke direktori devops
cd devops

# 2. Nyalakan seluruh stack service
docker compose up --build -d
```

### 🌐 Port yang Otomatis Aktif:
* **Front-End (Web):** Buka di browser `http://localhost:5173` (dilayani via Nginx production).
* **Back-End (REST API):** Aktif di `http://localhost:5000` (Node.js API Service).
* **Database (PostgreSQL 16):** Berjalan di `localhost:5432` (db: `vinix7_quiz`, user: `postgres`, pass: `postgrespassword`).

> Untuk mematikan seluruh service:
> ```bash
> docker compose down
> ```

---

## 🎯 2. Checklist Tugas DevOps Selanjutnya:

### 1️⃣ Uji Integrasi Multi-Container
- [x] Konfigurasi `docker-compose.yml`, `Dockerfile.backend`, dan `Dockerfile.frontend` (Sudah selesai disiapkan).
- [ ] Jalankan perintah `docker compose up --build -d` di laptop lu untuk memastikan semua container menyala dengan status *healthy*.

### 2️⃣ Siapkan Pipeline CI/CD GitHub Actions
Buat file workflow di `.github/workflows/ci.yml` agar setiap kali tim melakukan push atau Pull Request ke branch `main`, GitHub otomatis mengecek:
```yaml
name: VINIX7 CI Build & Test
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Build Front-End
        run: |
          cd front-end
          npm install
          npm run build
```

### 3️⃣ Opsi Deployment Online Gratis & Cepat
Untuk showcase tugas akhir magang, lu bisa mendeploy proyek ini ke layanan cloud gratis tanpa perlu kartu kredit:
* **Front-End:** Deploy ke **Vercel** atau **Netlify** (Tinggal hubungkan repositori GitHub, atur root directory ke `front-end`, dan build command `npm run build`).
* **Back-End:** Deploy ke **Railway** atau **Render** (Atur root directory ke `back-end`, port `5000`).
* **Database:** Gunakan **Supabase** (PostgreSQL gratis di cloud).

---

## 📊 3. Audit Kualitas Web Wajib (Target PRD Bagian 9)

Sebelum presentasi / demo di hadapan mentor dan penilai magang VINIX7, jalankan audit **Google Lighthouse** di browser Chrome (Inspect Element &rarr; tab Lighthouse &rarr; Analyze page load):

### Target Skor PRD yang Wajib Dicapai:
* 🟢 **Performance:** $\ge 90$
* 🟢 **Accessibility:** $\ge 90$ *(Aplikasi sudah dirancang dengan rasio kontras WCAG 2.1 AA)*
* 🟢 **Best Practices:** $\ge 90$
* 🟢 **SEO:** $\ge 90$

### Target Core Web Vitals (Persentil ke-75):
* **LCP (Largest Contentful Paint):** $\le 2{,}5$ detik
* **INP (Interaction to Next Paint):** $\le 200$ milidetik
* **CLS (Cumulative Layout Shift):** $\le 0{,}1$

Semangat bro, lu yang memastikan aplikasi tim kita berjalan mulus, cepat, dan handal saat diuji penilai! 🚢
