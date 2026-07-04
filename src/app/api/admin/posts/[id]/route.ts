import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { verifyJWT } from "@/lib/auth";

// API to handle update (PUT) and delete (DELETE) for a single post
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // 1. Verifikasi Autentikasi Admin via JWT
    const token = req.cookies.get("admin_token")?.value;
    if (!token || !(await verifyJWT(token))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const postId = parseInt(id, 10);
    if (isNaN(postId)) {
      return NextResponse.json({ error: "ID tidak valid" }, { status: 400 });
    }

    const { title, slug, content, image, published } = await req.json();

    if (!title || !slug || !content) {
      return NextResponse.json({ error: "Judul, slug, dan konten wajib diisi!" }, { status: 400 });
    }

    // 2. Cek apakah post dengan ID tersebut ada
    const existingPost = await db.post.findUnique({
      where: { id: postId },
    });

    if (!existingPost) {
      return NextResponse.json({ error: "Berita tidak ditemukan" }, { status: 404 });
    }

    // 3. Jika slug diubah, cek apakah slug baru sudah digunakan oleh post lain
    if (slug !== existingPost.slug) {
      const slugCheck = await db.post.findUnique({
        where: { slug },
        select: { id: true },
      });

      if (slugCheck) {
        return NextResponse.json({ error: "Slug sudah digunakan oleh berita lain!" }, { status: 400 });
      }
    }

    // 4. Update data ke database
    const updatedPost = await db.post.update({
      where: { id: postId },
      data: {
        title,
        slug,
        content,
        image: image || null,
        published: !!published,
        publishedAt: published ? (existingPost.publishedAt || new Date()) : null,
      },
    });

    return NextResponse.json({ success: true, post: updatedPost });
  } catch (error) {
    console.error("Update Post API Error:", error);
    return NextResponse.json({ error: "Terjadi kesalahan internal server" }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // 1. Verifikasi Autentikasi Admin via JWT
    const token = req.cookies.get("admin_token")?.value;
    if (!token || !(await verifyJWT(token))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const postId = parseInt(id, 10);
    if (isNaN(postId)) {
      return NextResponse.json({ error: "ID tidak valid" }, { status: 400 });
    }

    // 2. Hapus post dari database
    await db.post.delete({
      where: { id: postId },
    });

    return NextResponse.json({ success: true, message: "Berita berhasil dihapus" });
  } catch (error) {
    console.error("Delete Post API Error:", error);
    return NextResponse.json({ error: "Terjadi kesalahan internal server" }, { status: 500 });
  }
}
