import React from "react";
import Link from "next/link";
import { db } from "@/lib/db";
import { formatDate } from "@/lib/utils";
import DeletePostButton from "@/components/admin/DeletePostButton";

export const revalidate = 0;

export default async function AdminPostsPage() {
  // Ambil semua daftar berita dari database MySQL
  const posts = await db.post.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Kelola Berita / Pengumuman</h2>
          <p className="text-slate-500 text-xs mt-1">
            Buat, edit, dan hapus artikel atau berita kegiatan sekolah.
          </p>
        </div>
        <Link
          href="/admin/posts/new"
          className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg text-sm shadow-sm transition-all"
        >
          ➕ Tambah Berita Baru
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          {posts.length === 0 ? (
            <div className="p-12 text-center text-slate-400 text-sm">
              Belum ada berita yang diterbitkan. Klik tombol di atas untuk membuat berita pertama.
            </div>
          ) : (
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-xs text-slate-700 uppercase">
                <tr>
                  <th className="px-6 py-3">Judul Berita</th>
                  <th className="px-6 py-3">Slug</th>
                  <th className="px-6 py-3">Penulis</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Tanggal Dibuat</th>
                  <th className="px-6 py-3 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {posts.map((post) => (
                  <tr key={post.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-900 max-w-xs truncate">
                      {post.title}
                    </td>
                    <td className="px-6 py-4 text-xs font-mono text-slate-500">{post.slug}</td>
                    <td className="px-6 py-4 text-slate-600">{post.author.name}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                          post.published
                            ? "bg-green-50 text-green-700 border-green-200"
                            : "bg-amber-50 text-amber-700 border-amber-200"
                        }`}
                      >
                        {post.published ? "PUBLISHED" : "DRAFT"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-xs text-slate-500">
                      {formatDate(post.createdAt)}
                    </td>
                    <td className="px-6 py-4 text-right space-x-3">
                      <Link
                        href={`/admin/posts/new?id=${post.id}`}
                        className="text-primary-600 hover:text-primary-900 text-xs font-bold"
                      >
                        Edit
                      </Link>
                      <DeletePostButton id={post.id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
