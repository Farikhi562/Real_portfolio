# NEXA Portfolio — "Model in Training"

Website portofolio React multi-page dengan tema "Model in Training": tampilan
mirip IDE/terminal (title bar, file explorer, tab bar, status bar), dengan
8 halaman yang masing-masing punya route sendiri.

## Menjalankan di lokal

Butuh Node.js 18+ terpasang di komputer kamu (project ini dibuat tanpa akses
internet di sandbox, jadi dependency belum ter-install — jalankan langkah di
bawah di komputer kamu sendiri).

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

Untuk build produksi (misalnya buat di-deploy ke Vercel/Netlify):

```bash
npm run build
npm run preview   # opsional, buat cek hasil build
```

Hasil build ada di folder `dist/` — itu yang di-upload ke hosting.

## Struktur halaman

| Route | File | Isi |
|---|---|---|
| `/` | `src/pages/Home.jsx` | Boot sequence + ringkasan modul |
| `/about` | `src/pages/About.jsx` | "The Model" — timeline training progress |
| `/architecture` | `src/pages/Architecture.jsx` | Diagram skill sebagai neural network |
| `/nexa` | `src/pages/Company.jsx` | Profil NEXA Tech Labs, klien, produk |
| `/experiments` | `src/pages/Experiments.jsx` | Deep dive NEXAIR (flagship) |
| `/playground` | `src/pages/Playground.jsx` | Simulasi interaktif estimasi PM2.5 |
| `/logs` | `src/pages/SystemLogs.jsx` | Changelog achievement |
| `/contact` | `src/pages/Contact.jsx` | Form kontak (dikirim lewat mailto) |

## Yang perlu kamu edit sebelum publish

1. **`src/pages/Contact.jsx`** — ganti `CONTACT_EMAIL` dengan email asli kamu,
   dan isi link `SOCIALS` (LinkedIn, GitHub, Instagram, dll — sekarang masih `#`).
2. **`public/assets/`** — semua logo NEXA & foto profil kamu sudah dimasukkan
   di sini (`logo-nexair.jpg`, `logo-nexa-tech-labs.png`, `logo-nexa-campus.jpg`,
   `logo-nexa-sphere.png`, `profile.jpg`). Ganti kalau ada versi baru.
3. **Playground** (`src/pages/Playground.jsx`) — pakai rumus estimasi
   Gaussian plume yang disederhanakan buat demo, bukan model ML NEXAIR asli
   (sudah ada disclaimer di halaman). Aman buat ditampilkan ke publik karena
   tidak membocorkan logika model asli.
4. Warna & font ada di `src/styles/tokens.css` kalau mau disesuaikan lagi.

## Deploy

Paling gampang pakai Vercel atau Netlify — drag-drop folder ini (setelah
`npm install`) atau connect ke repo GitHub, framework preset "Vite".

## Added in this update
- NEXA Sphere case study at `/nexa-sphere`
- Interactive business-intelligence dashboard visual
- Demand forecast sparkline, inventory risk ring, AI recommendation strip
- Business Data → External Intelligence → AI Analysis → Action narrative
- NEXA Sphere added to navigation and Experiments case-study CTA
