import { SignJWT, jwtVerify } from "jose";

// Menggunakan secret key yang sama dengan NextAuth atau fallback untuk lokal
const SECRET_KEY = new TextEncoder().encode(
  process.env.NEXTAUTH_SECRET || "default-secret-at-least-32-chars-long-key"
);

// Durasi kadaluarsa token JWT (2 jam)
const TOKEN_EXPIRY = "2h";

/**
 * Membuat token JWT baru untuk user admin.
 */
export async function signJWT(payload: { id: number; email: string; name: string }) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(TOKEN_EXPIRY)
    .sign(SECRET_KEY);
}

/**
 * Memverifikasi token JWT. Mengembalikan payload jika valid, atau null jika tidak valid/kadaluarsa.
 */
export async function verifyJWT(token: string) {
  try {
    const { payload } = await jwtVerify(token, SECRET_KEY);
    return payload as { id: number; email: string; name: string };
  } catch (error) {
    return null;
  }
}
