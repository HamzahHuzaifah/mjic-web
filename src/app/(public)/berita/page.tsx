import { db } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";

export default async function BeritaPage() {
  const posts = await db.post.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
    include: { author: { select: { name: true } } }
  });

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* Header Banner */}
      <section className="relative py-20 bg-[url('/images/brand_bg.png')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 drop-shadow-sm mb-4">
            Kabar JIC
          </h1>
          <p className="text-slate-700 max-w-2xl mx-auto text-lg">
            Berita, pengumuman, dan artikel kegiatan terbaru seputar Pendidikan Jakarta Islamic Centre.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl shadow-xl shadow-slate-200/40 border border-slate-100 overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300">
              <div className="relative h-48 w-full bg-slate-100">
                {post.image ? (
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400">No Image</div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-slate-500 mb-3 space-x-2">
                  <span className="font-semibold text-primary-600">Kabar Utama</span>
                  <span>•</span>
                  <span>{new Date(post.publishedAt || post.createdAt).toLocaleDateString("id-ID", { day:"numeric", month:"long", year:"numeric" })}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug mb-3">
                  <Link href={`/berita/${post.slug}`} className="hover:text-primary-600 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-sm text-slate-600 line-clamp-3 mb-4">
                  {post.content}
                </p>
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500">Oleh {post.author.name}</span>
                  <Link href={`/berita/${post.slug}`} className="text-sm font-bold text-primary-600 hover:text-primary-700">
                    Baca selengkapnya &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
