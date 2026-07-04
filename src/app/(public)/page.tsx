import Link from "next/link";
import Image from "next/image";
import { db } from "@/lib/db";
import { formatDate } from "@/lib/utils";

// Menonaktifkan caching statis penuh agar data selalu teraktualisasi dari database MySQL (SSR)
export const revalidate = 0;

export default async function Home() {
  // Mengambil data dari database secara paralel menggunakan Promise.all untuk optimalisasi performa & memori
  const [programs, latestPosts] = await Promise.all([
    db.program.findMany({
      orderBy: { id: "asc" },
    }),
    db.post.findMany({
      where: { published: true },
      take: 3,
      orderBy: { createdAt: "desc" },
      include: {
        author: {
          select: { name: true },
        },
      },
    }),
  ]);

  return (
    <div className="relative">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-[url('/images/brand_bg.png')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Teks Hero */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-flex items-center rounded-full bg-primary-100 px-3.5 py-1 text-xs font-semibold text-primary-800 border border-primary-200 uppercase tracking-wider">
                Sistem Penerimaan Murid Baru (SMPB) 2026/2027 Dibuka
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Membentuk Generasi<br />
                <span className="bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 bg-clip-text text-transparent">
                  Rabbani & Unggul Sains
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                Portal resmi Madrasah Jakarta Islamic Centre (JIC). Kami menyelenggarakan jenjang pendidikan keagamaan (PAUDQu, TPQ, MDT) di bawah Divisi Pendidikan JIC untuk membangun karakter Qur'ani sejak dini.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://spmb.mjic.sch.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 font-bold text-white bg-primary-600 hover:bg-primary-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Daftar SMPB Online
                </a>
                <Link
                  href="/tentang"
                  className="px-6 py-3.5 font-bold text-primary-800 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl shadow-sm hover:shadow transition-all duration-200"
                >
                  Profil Lembaga
                </Link>
              </div>
            </div>

            {/* Visual Hero dengan Next.js Image Optimasi */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md aspect-square bg-gradient-to-tr from-primary-100 to-accent-100 rounded-3xl p-3 shadow-2xl border border-white">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner bg-slate-200">
                  <Image
                    src="/images/Logo Madrasah.webp"
                    alt="Madrasah Jakarta Islamic Centre"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Micro-badge aksen */}
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 flex items-center space-x-3">
                  <span className="text-2xl">🕌</span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800"> Jakarta Islamic Centre</h4>
                    <p className="text-[10px] text-slate-500 font-medium">Jakarta Utara</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Section Program Unggulan (Data dari Database) */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
              Program Pendidikan Unggulan
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Kurikulum terpadu nasional Kementerian Agama yang dikombinasikan dengan program keagamaan unggulan di setiap jenjang.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program) => (
              <div
                key={program.id}
                className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md hover:border-primary-200 transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 text-2xl group-hover:scale-110 transition-transform duration-300">
                    {program.icon || "📚"}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary-700 transition-colors">
                    {program.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {program.description}
                  </p>
                </div>
                <Link
                  href={`/akademik/${program.slug}`}
                  className="mt-6 text-xs font-bold text-primary-600 hover:text-primary-700 inline-flex items-center space-x-1.5"
                >
                  <span>Selengkapnya</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Section Berita Terbaru (Data dari Database) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
                Berita & Kegiatan Terbaru
              </h2>
              <p className="text-slate-500 text-sm max-w-xl">
                Ikuti terus perkembangan aktivitas akademis, pengumuman penting, dan prestasi santri di Islamic Centre.
              </p>
            </div>
            <Link
              href="/berita"
              className="text-sm font-bold text-primary-700 hover:text-primary-600 border border-primary-200 px-4 py-2 rounded-xl hover:bg-primary-50/50 transition-all duration-200 flex-shrink-0"
            >
              Lihat Semua Berita &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail Image dengan Optimasi next/image */}
                  <div className="relative w-full aspect-video bg-slate-100">
                    <Image
                      src={post.image || "/images/Logo Madrasah.webp"}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 30vw"
                      className="object-cover"
                    />
                  </div>
                  {/* Konten Berita */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400">
                      <span>👤 {post.author.name}</span>
                      <span>📅 {formatDate(post.createdAt)}</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 line-clamp-2 hover:text-primary-700 transition-colors">
                      <Link href={`/berita/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                      {post.content}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <Link
                    href={`/berita/${post.slug}`}
                    className="text-xs font-bold text-primary-600 hover:text-primary-700 inline-flex items-center space-x-1"
                  >
                    <span>Baca Artikel</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
