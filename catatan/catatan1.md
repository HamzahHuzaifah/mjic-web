# Catatan Progres Proyek: Madrasah Jakarta Islamic Centre (JIC)

Dokumen ini berisi rangkuman fitur, pengaturan, dan halaman yang telah berhasil diselesaikan dalam pengembangan website Madrasah JIC hingga saat ini.

## 1. Setup & Konfigurasi Dasar
- [x] Inisialisasi proyek menggunakan **Next.js 15** (App Router) & **Tailwind CSS**.
- [x] Konfigurasi **Prisma ORM** dengan database MySQL lokal/cPanel.
- [x] Pembuatan Skema Database untuk tabel `user`, `program`, `post`, dan `settings`.
- [x] Penyuntikan Data Awal (Seed) database menggunakan `prisma/seed.ts`.
- [x] Penambahan `.gitignore` untuk mengamankan data rahasia dan node_modules.
- [x] Menghubungkan project lokal dengan **Github Repository** (`HamzahHuzaifah/mjic-web`).

## 2. Branding & Desain Antarmuka (UI/UX)
- [x] Pembuatan palet warna kustom (Merah, Hijau, Biru) yang diintegrasikan ke `tailwind.config.ts` (menggantikan skala warna default Next.js).
- [x] Pembuatan & pemasangan aset desain profesional (`brand_bg.png`, `Logo Madrasah.webp`).
- [x] Desain Layout Global (Header, Navbar, Hero Section, dan Footer) berbasis komponen re-usable.

## 3. Halaman Publik (Frontend)
- [x] **Beranda (`/`)**: Menampilkan Hero Section, Program Pendidikan, dan Berita Utama secara dinamis. Tombol 'Daftar' terintegrasi langsung ke `https://spmb.mjic.sch.id`.
- [x] **Profil (`/tentang`)**: Halaman berdesain khusus (sedang menunggu input data konten dari admin).
- [x] **Pendidikan (`/akademik`)**: Mengambil dan merender daftar program studi (PAUDQu, TPQ, MDT) langsung dari database MySQL.
- [x] **Pendaftaran (`/SMPB`)**: Halaman informasi status Sistem Penerimaan Murid Baru.
- [x] **Kabar (`/berita`)**: Mengambil dan menampilkan grid berita/artikel terbaru yang berstatus *published* dari database.
- [x] **Galeri (`/galeri`)**: Placeholder dokumentasi kegiatan.
- [x] **Kontak (`/kontak`)**: Menampilkan informasi alamat, email, dan WhatsApp resmi JIC secara elegan dengan dukungan ikon.

## 4. Sistem Admin & Backend
- [x] **Autentikasi Aman**: Pembuatan sistem Login Admin (`/api/auth/login`) menggunakan validasi Bcrypt dan JWT (JSON Web Token) via *HttpOnly Cookies* anti-XSS.
- [x] **Keamanan Rute (Middleware)**: Mencegah pengguna tanpa login masuk ke *endpoint* atau halaman `/admin/*`.
- [x] **Dashboard Admin (`/admin/dashboard`)**: Halaman ringkasan panel admin yang telah diproteksi.
- [x] **Kelola Kabar/Berita (`/admin/posts`)**: Panel admin untuk membuat, melihat, dan menghapus postingan artikel. Terdapat form pembuatan berita berbasis editor *Tiptap*.

## 5. Deployment (Server & Produksi)
- [x] Proses Ekspor Database lokal (`mjic_db.sql`) ke phpMyAdmin server produksi.
- [x] Panduan penarikan versi (Pull/Clone) di cPanel menggunakan fitur **Git™ Version Control** via protokol HTTPS.
- [x] Konfigurasi setup Next.js di cPanel via fitur **Setup Node.js App**, pembuatan *startup file* `server.js`, serta konfigurasi koneksi `DATABASE_URL` ke `.env` server.
- [x] Penanganan berbagai *error deployment* umum pada cPanel, termasuk penyelesaian konflik "Application Root" dan kendala "Permission denied SSH".

---
*Catatan ini akan terus di-update seiring bertambahnya pengembangan fitur di tahap selanjutnya.*
