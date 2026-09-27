# Panduan foto dan dokumen

Semua aset disimpan di dalam folder `public/`. Gunakan nama file di bawah agar mudah ditemukan. Di kode, path aset selalu dimulai dari `/`, tanpa awalan `public`.

## Foto profil

**Foto 1 (pas foto):** simpan dengan nama `public/images/profile.jpg`. Setelah file itu dimasukkan, isi `profilePhoto` di `data/profile.ts` dengan:

```ts
export const profilePhoto = "/images/profile.jpg";
```

## Foto kegiatan

Simpan foto kegiatan di `public/images/activities/`. Lima foto yang sudah dijelaskan dipetakan seperti ini:

| Foto dari lo | Nama file | Keterangan |
| --- | --- | --- |
| Foto 2 | `activity-01.jpg` | Wawancara owner Warteg Bahari untuk Optura |
| Foto 3 | `activity-02.jpg` | Pembentukan NCD (Nexa Competition Division) |
| Foto 4 | `activity-03.jpg` | Pertemuan pertama NCD secara luring |
| Foto 5 | `activity-04.jpg` | Gunadarma Industrial Engineering Fair |
| Foto 6 | `activity-05.jpg` | Kursus Data Science/LSP di Gunadarma bersama kakak aslab |

Slot sisanya (kalau nanti ada foto tambahan) adalah:

Nomor file kegiatan dimulai dari Foto 2 karena pas foto punya folder dan nama file sendiri.

```text
activity-01.jpg
activity-02.jpg
activity-03.jpg
activity-04.jpg
activity-05.jpg
activity-06.jpg
activity-07.jpg
activity-08.jpg
activity-09.jpg
activity-10.jpg
```

Isi properti `image` pada item yang sesuai di `data/activities.ts`. Contoh:

```ts
image: "/images/activities/activity-01.jpg",
```

Homepage menampilkan 4 kegiatan; semua 10 slot tersedia di halaman `/activities`.

## Sertifikat

Simpan gambar sebagai `public/images/certificates/certificate-01.jpg` sampai `certificate-05.jpg`. Isi `image` pada sertifikat dengan ID yang sama di `data/certificates.ts`, misalnya:

```ts
image: "/images/certificates/certificate-01.jpg",
```

## Bukti achievement

Gunakan nama berikut di `public/images/achievements/`:

```text
icbc-2026.jpg
bpc-top-7.jpg
gemastik-xix-2026.jpg
```

Isi properti `image` pada item yang sesuai di `data/achievements.ts`.

## Foto project

Simpan foto pilihan di `public/images/projects/` dengan nama:

```text
rag-qa-bot.jpg
nexcamp.jpg
optura.jpg
nexair.jpg
docmind-insight.jpg
```

Isi properti `image` project terkait di `data/projects.ts`.

## Cover blog

Simpan cover dengan nama slug artikel, misalnya `public/images/blog/rag-first-steps.jpg`, lalu isi `coverImage` pada artikel di `data/blog.ts` dengan `/images/blog/rag-first-steps.jpg`.

## Dokumen

Simpan dokumen di `public/documents/`:

```text
cv.pdf
portfolio.pdf
```

Setelah file tersedia, perbarui tautan dokumen di `app/page.tsx`. Jangan membuat tautan unduh sebelum PDF aslinya ada.

## Format foto

Gunakan JPG, PNG, atau WebP. Foto ditampilkan dalam bingkai persegi 1:1; foto dengan rasio lain akan dipotong agar pas. Placeholder akan tetap muncul sampai foto asli ditambahkan dan path-nya diisi di data terkait.
