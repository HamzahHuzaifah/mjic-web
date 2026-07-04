import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database JIC...");

  // 1. Bersihkan database terlebih dahulu untuk data baru yang akurat
  await prisma.post.deleteMany({});
  await prisma.program.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.setting.deleteMany({});
  await prisma.staff.deleteMany({});

  // 2. Buat User Admin default
  const hashedPassword = await bcrypt.hash("admin123", 10);
  const adminUser = await prisma.user.create({
    data: {
      email: "admin@islamic-center.or.id",
      password: hashedPassword,
      name: "Admin Jakarta Islamic Centre",
    },
  });
  console.log("Created admin user:", adminUser.email);

  // 3. Buat Program Pendidikan Riil JIC (PAUDQu, TPQ, MDT)
  const programs = [
    {
      name: "PAUDQu JIC (Pendidikan Anak Usia Dini Al-Qur'an)",
      slug: "paudqu-jic",
      description: "Untuk anak usia 4-6 tahun. Membangun karakter mulia sejak dini dengan kurikulum terintegrasi ajaran Islam, pengenalan hijaiyah, hafalan doa harian, dan ayat-ayat pilihan.",
      icon: "👶",
    },
    {
      name: "TPQ JIC (Taman Pendidikan Al-Qur'an)",
      slug: "tpq-jic",
      description: "Untuk anak usia 6-8 tahun. Menanamkan kecintaan dan pemahaman mendalam tentang baca-tulis Al-Qur'an menggunakan metode interaktif yang menyenangkan bagi anak.",
      icon: "📖",
    },
    {
      name: "MDT JIC (Madrasah Diniyah Takmiliyah)",
      slug: "mdt-jic",
      description: "Untuk anak usia 8-12 tahun. Pengayaan ilmu agama secara komprehensif mencakup materi Akidah, Akhlak, Fiqih ibadah praktis, dan Sejarah Peradaban Islam (Tarikh).",
      icon: "🕌",
    },
  ];

  for (const prog of programs) {
    await prisma.program.create({ data: prog });
  }
  console.log("Created JIC academic programs:", programs.length);

  // 4. Buat Berita/Artikel Riil JIC
  const posts = [
    {
      title: "Penerimaan Peserta Didik Baru (SMPB) Pendidikan JIC Tahun Ajaran 2026/2027 Resmi Dibuka",
      slug: "penerimaan-SMPB-online-jic-2026-2027",
      content: "Lembaga Madrasah Jakarta Islamic Centre secara resmi membuka Penerimaan Peserta Didik Baru (SMPB) untuk tahun ajaran 2026/2027. Program yang dibuka mencakup PAUDQu (Pendidikan Anak Usia Dini Al-Qur'an) bagi usia 4-6 tahun, TPQ bagi usia 6-8 tahun, serta Madrasah Diniyah Takmiliyah (MDT) bagi usia 8-12 tahun. Pendaftaran dapat diakses secara online maupun langsung dengan berkunjung ke kantor kami di Gedung Sosial Budaya JIC.",
      image: "/images/Logo Madrasah.webp",
      published: true,
      publishedAt: new Date(),
      authorId: adminUser.id,
    },
    {
      title: "Keseruan Manasik Haji Anak Lembaga Pendidikan JIC Sukses Diselenggarakan",
      slug: "kegiatan-manasik-haji-anak-jic-sukses",
      content: "Madrasah Jakarta Islamic Centre (JIC) sukses menggelar kegiatan Manasik Haji Anak di komplek Masjid Raya Jakarta Islamic Centre. Kegiatan ini diikuti oleh seluruh santri PAUDQu dan TPQ JIC dengan tujuan memperkenalkan rukun Islam kelima sejak usia dini. Para santri belajar melakukan tawaf, sa'i, dan wukuf dengan antusiasme yang sangat tinggi didampingi para guru pembimbing.",
      image: "/images/tahfidz_news.png",
      published: true,
      publishedAt: new Date(),
      authorId: adminUser.id,
    },
    {
      title: "Sub Divisi Birena JIC Selenggarakan Pembinaan Keagamaan Santri MDT",
      slug: "birena-jic-pembinaan-keagamaan-santri-mdt",
      content: "Sebagai bagian dari kurikulum terpadu JIC, Sub Divisi Pembinaan Remaja dan Anak (Birena) menyelenggarakan kajian akhlakul karimah mingguan bagi santri Madrasah Diniyah Takmiliyah (MDT). Kegiatan ini memfokuskan santri pada penguatan ibadah harian serta penanaman adab kesopanan berbasis nilai-nilai Islam moderat.",
      image: "/images/Logo Madrasah.webp",
      published: true,
      publishedAt: new Date(),
      authorId: adminUser.id,
    },
  ];

  for (const post of posts) {
    await prisma.post.create({ data: post });
  }
  console.log("Created JIC news posts:", posts.length);

  // 5. Buat Konfigurasi Setting Riil JIC
  const settings = [
    { key: "site_name", value: "Madrasah Jakarta Islamic Centre (JIC)" },
    { key: "address", value: "Gedung Sosial Budaya Lantai 2, Komplek PPIJ Jakarta Islamic Centre, Koja, Jakarta Utara" },
    { key: "phone", value: "0878-8996-9936" },
    { key: "email", value: "lembagapendidikanjic@gmail.com" },
    { key: "slogan", value: "Jujur, Ikhlas, Cerdas" },
    { key: "vision", value: "Mewujudkan generasi muslim rabbani yang unggul dalam ilmu pengetahuan, berakhlak mulia, Qur'ani, mandiri, kreatif, dan berwawasan luas." },
    { key: "mission", value: "1. Menyelenggarakan pendidikan formal & non-formal berbasis keagamaan Islam sejak usia dini. 2. Membina hafalan doa, ayat pilihan, dan baca-tulis Al-Qur'an secara tartil. 3. Membangun akhlak mulia dan kecerdasan sains anak didik." },
  ];

  for (const set of settings) {
    await prisma.setting.create({ data: set });
  }
  console.log("Created JIC system settings:", settings.length);

  console.log("Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
