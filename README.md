# Zan — Personal Portfolio

Portfolio pribadi **Muhamad Fauzan Al Farikhi (Zan)**, mahasiswa S1 Informatika di Universitas Gunadarma yang sedang membangun jalur menuju AI Engineering.

Situs ini menampilkan proyek, inisiatif teknologi, pengalaman program dan kompetisi, fokus belajar, serta kontak profesional. Status proyek dibedakan dengan jelas antara *building*, *ongoing*, *in development*, dan *concept*. Tautan demo, repositori, foto, dan dokumen hanya ditampilkan setelah tersedia.

## Teknologi

- Next.js App Router
- TypeScript
- Tailwind CSS 4 dan CSS responsif
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

## Struktur proyek

```text
app/                 Halaman, layout, metadata, favicon, Open Graph, dan CSS
components/          Navigasi dan komponen antarmuka yang dapat digunakan ulang
data/                Konten profil, proyek, pengalaman, serta skills
public/              Aset publik (foto dan dokumen dapat ditambahkan kemudian)
```

Konten dipisahkan dari UI di folder `data/` agar proyek baru dapat ditambahkan tanpa menulis ulang layout. Detail implementasi RAG yang belum ditentukan, foto profil, dokumen, repositori proyek, dan demo tetap ditandai belum tersedia.

## Kontak

- Email: [fauzanalfa36@gmail.com](mailto:fauzanalfa36@gmail.com)
- LinkedIn: [fauzanalfarikhi](https://www.linkedin.com/in/fauzanalfarikhi)
- GitHub: [Farikhi562](https://github.com/Farikhi562)

Konten dan status proyek mengikuti prinsip: jangan mengklaim hal yang belum dibangun atau diverifikasi.
