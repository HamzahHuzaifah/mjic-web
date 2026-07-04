import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { verifyJWT } from "@/lib/auth";

// API to handle creating posts
export async function POST(req: NextRequest) {
  try {
    // 1. Verifikasi Autentikasi Admin via JWT di Cookie
    const token = req.cookies.get("admin_token")?.value;
    if (!token) {
      return NextResponse.json({ error: "Unauthorized: Token tidak ditemukan" }, { status: 401 });
    }

    const decoded = await verifyJWT(token);
    if (!decoded) {
      return NextResponse.json({ error: "Unauthorized: Token tidak valid atau kadaluarsa" }, { status: 401 });
    }

    // 2. Baca payload JSON
    const { title, slug, content, image, published } = await req.json();

    if (!title || !slug || !content) {
      return NextResponse.json({ error: "Judul, slug, dan konten wajib diisi!" }, { status: 400 });
    }

    // 3. Cek apakah slug sudah digunakan
    const existingPost = await db.post.findUnique({
      where: { slug },
      select: { id: true },
    });

    if (existingPost) {
      return NextResponse.json({ error: "Slug sudah digunakan oleh berita lain!" }, { status: 400 });
    }

    // 4. Simpan Berita ke Database
    const newPost = await db.post.create({
      data: {
        title,
        slug,
        content,
        image: image || null,
        published: !!published,
        publishedAt: published ? new Date() : null,
        authorId: decoded.id, // Ambil ID penulis dari token JWT
      },
    });

    return NextResponse.json({ success: true, post: newPost }, { status: 201 });
  } catch (error) {
    console.error("Create Post API Error:", error);
    return NextResponse.json({ error: "Terjadi kesalahan internal server." }, { status: 500 });
  }
}

// API to list posts (alternative to direct server component fetch)
export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("admin_token")?.value;
    if (!token || !(await verifyJWT(token))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const posts = await db.post.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        author: {
          select: { name: true },
        },
      },
    });

    return NextResponse.json({ success: true, posts });
  } catch (error) {
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 });
  }
}
