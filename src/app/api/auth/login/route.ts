import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { signJWT } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    // 1. Validasi Input Sederhana
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email dan password wajib diisi!" },
        { status: 400 }
      );
    }

    // 2. Query Database untuk mencari User berdasarkan email
    // Menggunakan select agar hanya mengambil field yang dibutuhkan untuk menghemat RAM
    const user = await db.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        password: true,
        name: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Kredensial yang Anda masukkan salah." },
        { status: 401 }
      );
    }

    // 3. Cocokkan Password Hashed menggunakan bcryptjs
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return NextResponse.json(
        { error: "Kredensial yang Anda masukkan salah." },
        { status: 401 }
      );
    }

    // 4. Generate Token JWT
    const token = await signJWT({
      id: user.id,
      email: user.email,
      name: user.name,
    });

    // 5. Kirim Response dengan Secure HttpOnly Cookie
    const response = NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    });

    // Set token ke dalam cookie
    response.cookies.set({
      name: "admin_token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 2, // 2 jam dalam detik
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Login API Error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan internal server." },
      { status: 500 }
    );
  }
}
