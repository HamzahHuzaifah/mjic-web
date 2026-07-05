-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 05, 2026 at 12:02 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mjic_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `published` tinyint(1) NOT NULL DEFAULT 0,
  `publishedAt` datetime(3) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `authorId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`id`, `title`, `slug`, `content`, `image`, `published`, `publishedAt`, `createdAt`, `updatedAt`, `authorId`) VALUES
(4, 'Penerimaan Peserta Didik Baru (PPDB) Pendidikan JIC Tahun Ajaran 2026/2027 Resmi Dibuka', 'penerimaan-ppdb-online-jic-2026-2027', 'Lembaga Pendidikan Jakarta Islamic Centre secara resmi membuka Penerimaan Peserta Didik Baru (PPDB) untuk tahun ajaran 2026/2027. Program yang dibuka mencakup PAUDQu (Pendidikan Anak Usia Dini Al-Qur\'an) bagi usia 4-6 tahun, TPQ bagi usia 6-8 tahun, serta Madrasah Diniyah Takmiliyah (MDT) bagi usia 8-12 tahun. Pendaftaran dapat diakses secara online maupun langsung dengan berkunjung ke kantor kami di Gedung Sosial Budaya JIC.', '/images/hero_banner.png', 1, '2026-07-04 21:23:38.471', '2026-07-04 21:23:38.479', '2026-07-04 21:23:38.479', 2),
(5, 'Keseruan Manasik Haji Anak Lembaga Pendidikan JIC Sukses Diselenggarakan', 'kegiatan-manasik-haji-anak-jic-sukses', 'Pendidikan Jakarta Islamic Centre (JIC) sukses menggelar kegiatan Manasik Haji Anak di komplek Masjid Raya Jakarta Islamic Centre. Kegiatan ini diikuti oleh seluruh santri PAUDQu dan TPQ JIC dengan tujuan memperkenalkan rukun Islam kelima sejak usia dini. Para santri belajar melakukan tawaf, sa\'i, dan wukuf dengan antusiasme yang sangat tinggi didampingi para guru pembimbing.', '/images/tahfidz_news.png', 1, '2026-07-04 21:23:38.471', '2026-07-04 21:23:38.485', '2026-07-04 21:23:38.485', 2),
(6, 'Sub Divisi Birena JIC Selenggarakan Pembinaan Keagamaan Santri MDT', 'birena-jic-pembinaan-keagamaan-santri-mdt', 'Sebagai bagian dari kurikulum terpadu JIC, Sub Divisi Pembinaan Remaja dan Anak (Birena) menyelenggarakan kajian akhlakul karimah mingguan bagi santri Madrasah Diniyah Takmiliyah (MDT). Kegiatan ini memfokuskan santri pada penguatan ibadah harian serta penanaman adab kesopanan berbasis nilai-nilai Islam moderat.', '/images/hero_banner.png', 1, '2026-07-04 21:23:38.471', '2026-07-04 21:23:38.488', '2026-07-04 21:23:38.488', 2);

-- --------------------------------------------------------

--
-- Table structure for table `program`
--

CREATE TABLE `program` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `slug` varchar(150) NOT NULL,
  `description` varchar(500) NOT NULL,
  `icon` varchar(100) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `program`
--

INSERT INTO `program` (`id`, `name`, `slug`, `description`, `icon`, `createdAt`, `updatedAt`) VALUES
(5, 'PAUDQu JIC (Pendidikan Anak Usia Dini Al-Qur\'an)', 'paudqu-jic', 'Untuk anak usia 4-6 tahun. Membangun karakter mulia sejak dini dengan kurikulum terintegrasi ajaran Islam, pengenalan hijaiyah, hafalan doa harian, dan ayat-ayat pilihan.', '👶', '2026-07-04 21:23:38.465', '2026-07-04 21:23:38.465'),
(6, 'TPQ JIC (Taman Pendidikan Al-Qur\'an)', 'tpq-jic', 'Untuk anak usia 6-8 tahun. Menanamkan kecintaan dan pemahaman mendalam tentang baca-tulis Al-Qur\'an menggunakan metode interaktif yang menyenangkan bagi anak.', '📖', '2026-07-04 21:23:38.470', '2026-07-04 21:23:38.470'),
(7, 'MDT JIC (Madrasah Diniyah Takmiliyah)', 'mdt-jic', 'Untuk anak usia 8-12 tahun. Pengayaan ilmu agama secara komprehensif mencakup materi Akidah, Akhlak, Fiqih ibadah praktis, dan Sejarah Peradaban Islam (Tarikh).', '🕌', '2026-07-04 21:23:38.474', '2026-07-04 21:23:38.474');

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `id` int(11) NOT NULL,
  `fullName` varchar(150) NOT NULL,
  `email` varchar(191) NOT NULL,
  `phone` varchar(30) NOT NULL,
  `programOfInterest` varchar(100) NOT NULL,
  `address` text NOT NULL,
  `status` enum('PENDING','APPROVED','REJECTED') NOT NULL DEFAULT 'PENDING',
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `setting`
--

CREATE TABLE `setting` (
  `id` int(11) NOT NULL,
  `key` varchar(100) NOT NULL,
  `value` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `setting`
--

INSERT INTO `setting` (`id`, `key`, `value`) VALUES
(7, 'site_name', 'Pendidikan Jakarta Islamic Centre (JIC)'),
(8, 'address', 'Gedung Sosial Budaya Lantai 2, Komplek PPIJ Jakarta Islamic Centre, Koja, Jakarta Utara'),
(9, 'phone', '0878-8996-9936'),
(10, 'email', 'lembagapendidikanjic@gmail.com'),
(11, 'slogan', 'Jujur, Ikhlas, Cerdas'),
(12, 'vision', 'Mewujudkan generasi muslim rabbani yang unggul dalam ilmu pengetahuan, berakhlak mulia, Qur\'ani, mandiri, kreatif, dan berwawasan luas.'),
(13, 'mission', '1. Menyelenggarakan pendidikan formal & non-formal berbasis keagamaan Islam sejak usia dini. 2. Membina hafalan doa, ayat pilihan, dan baca-tulis Al-Qur\'an secara tartil. 3. Membangun akhlak mulia dan kecerdasan sains anak didik.');

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `position` varchar(100) NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(191) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(100) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `name`, `createdAt`, `updatedAt`) VALUES
(2, 'admin@islamic-center.or.id', '$2b$10$XJjjp8/0hjID44TJsAdXX.r7oMIM75uqEexNHWOlu06DQGe3MAVJ.', 'Admin Jakarta Islamic Centre', '2026-07-04 21:23:38.442', '2026-07-04 21:23:38.442');

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('88878d0f-605a-4f66-9ada-c5010a6edcd6', 'dcecc7c4771b499b48684d4e50f4585c51c0d7c7bfc40a20931f80e432cfdd6b', '2026-07-04 20:53:07.105', '20260704205306_init', NULL, NULL, '2026-07-04 20:53:06.921', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Post_slug_key` (`slug`),
  ADD KEY `Post_slug_idx` (`slug`),
  ADD KEY `Post_authorId_idx` (`authorId`);

--
-- Indexes for table `program`
--
ALTER TABLE `program`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Program_slug_key` (`slug`),
  ADD KEY `Program_slug_idx` (`slug`);

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `setting`
--
ALTER TABLE `setting`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Setting_key_key` (`key`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_email_key` (`email`),
  ADD KEY `User_email_idx` (`email`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `program`
--
ALTER TABLE `program`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `setting`
--
ALTER TABLE `setting`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `staff`
--
ALTER TABLE `staff`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `Post_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
