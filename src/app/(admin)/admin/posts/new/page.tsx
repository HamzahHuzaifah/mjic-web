import React from "react";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import PostForm from "@/components/admin/PostForm";

export const revalidate = 0;

export default async function NewPostPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const { id } = await searchParams;
  let post = undefined;

  // Jika terdapat parameter id, berarti dalam mode Edit
  if (id) {
    const postId = parseInt(id, 10);
    if (isNaN(postId)) {
      redirect("/admin/posts");
    }

    const fetchedPost = await db.post.findUnique({
      where: { id: postId },
      select: {
        id: true,
        title: true,
        slug: true,
        content: true,
        image: true,
        published: true,
      },
    });

    if (!fetchedPost) {
      redirect("/admin/posts");
    }

    post = fetchedPost;
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          {post ? "Edit Berita / Pengumuman" : "Tambah Berita Baru"}
        </h2>
        <p className="text-slate-500 text-xs mt-1">
          {post
            ? "Perbarui detail berita kegiatan sekolah yang ada."
            : "Buat dan terbitkan berita kegiatan sekolah baru."}
        </p>
      </div>

      <PostForm initialPost={post} />
    </div>
  );
}
