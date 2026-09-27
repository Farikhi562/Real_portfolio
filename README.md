# Zan — Personal Portfolio

Portfolio pribadi **Muhamad Fauzan Al Farikhi (Zan)**, mahasiswa S1 Informatika di Universitas Gunadarma yang sedang membangun jalur menuju AI Engineering.

Situs ini menampilkan proyek, inisiatif teknologi, pengalaman program dan kompetisi, fokus belajar, serta kontak profesional. Status proyek dibedakan dengan jelas antara *building*, *ongoing*, *in development*, dan *concept*. Tautan demo, repositori, foto, dan dokumen hanya ditampilkan setelah tersedia.

## Teknologi

- Next.js 15 App Router
- TypeScript
- Tailwind CSS 4, Geist Sans/Mono, dan CSS responsif
- Git dan GitHub
- Siap dideploy ke Vercel

## Menjalankan secara lokal

Gunakan Node.js 20.9 atau lebih baru.

```bash
npm install
npm run dev
```

Buka <http://localhost:3000>.

Perintah lain:

```bash
npm run build
npm run start
npm run lint
```

## URL produksi

Domain produksi portfolio: <https://frikhii.my.id>. Domain ini dipakai sebagai canonical URL dan metadata berbasis URL absolut. Nilai dapat diubah lewat `NEXT_PUBLIC_SITE_URL` jika domain produksi berganti.

```text
NEXT_PUBLIC_SITE_URL=https://frikhii.my.id
```

Umur dihitung saat build dari `PROFILE_BIRTH_DATE` dalam format `YYYY-MM-DD`. Simpan nilai ini hanya sebagai server environment variable lokal/deployment; jangan gunakan awalan `NEXT_PUBLIC_` dan jangan commit tanggal lahir ke repository. Tanpa nilai tersebut, situs menampilkan `TBD`.

## Routes dan struktur proyek

- `/` — portfolio utama, achievements, pengalaman, skills, sertifikat pilihan, aktivitas, dan blog teaser
- `/projects` — daftar project
- `/certificates` — arsip sertifikat
- `/activities` — arsip foto aktivitas
- `/blog` — catatan terbit; menampilkan Coming Soon selama belum ada post terbit
- `/blog/[slug]` — halaman artikel untuk post berstatus Published

```text
app/                 Routes, layout, metadata, sitemap, robots, favicon, Open Graph, CSS
components/          Navigasi, project, achievement, certificate, activity cards
data/                Profil, proyek, achievements, pengalaman, sertifikat, aktivitas, blog, skills
public/              Foto dan dokumen terverifikasi (dapat ditambahkan kemudian)
```

Konten dipisahkan dari UI di folder `data/` agar item baru dapat ditambahkan tanpa menulis ulang layout. Detail implementasi RAG yang belum ditentukan, data sertifikat, foto, dokumen, dan URL repository/demo yang belum diverifikasi tetap ditandai TBD atau placeholder.

## Kontak

- Email: [fauzanalfa36@gmail.com](mailto:fauzanalfa36@gmail.com)
- LinkedIn: [fauzanalfarikhi](https://www.linkedin.com/in/fauzanalfarikhi)
- GitHub: [Farikhi562](https://github.com/Farikhi562)

Konten dan status proyek mengikuti prinsip: jangan mengklaim hal yang belum dibangun atau diverifikasi.
