import { NextRequest, NextResponse } from "next/server";
import { verifyJWT } from "@/lib/auth";

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  // Proteksi rute /admin/* (tidak termasuk sub-rute /login jika ia berada di luar group /admin)
  // Perhatikan: halaman login admin berada di /login, sedangkan dashboard ada di /admin
  if (path.startsWith("/admin")) {
    const token = req.cookies.get("admin_token")?.value;

    if (!token) {
      // Jika token tidak ada, redirect ke halaman login publik
      const loginUrl = new URL("/login", req.url);
      return NextResponse.redirect(loginUrl);
    }

    // Verifikasi Token JWT
    const payload = await verifyJWT(token);

    if (!payload) {
      // Jika token kadaluarsa atau tidak valid, hapus cookie dan redirect ke login
      const loginUrl = new URL("/login", req.url);
      const response = NextResponse.redirect(loginUrl);
      response.cookies.delete("admin_token");
      return response;
    }
  }

  return NextResponse.next();
}

// Menentukan rute mana saja yang akan diproses oleh middleware
export const config = {
  matcher: [
    "/admin/:path*", // Hanya proteksi halaman /admin dan sub-direktorinya
  ],
};
