import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Pendidikan JIC",
    default: "Madrasah Jakarta Islamic Centre (JIC)",
  },
  description: "Portal Informasi resmi Madrasah Jakarta Islamic Centre (JIC). Mengelola program pendidikan formal & non-formal (PAUDQu, TPQ, MDT), pendaftaran siswa baru (SMPB), dan berita kegiatan.",
  keywords: ["Jakarta Islamic Centre", "Pendidikan JIC", "PAUDQu JIC", "TPQ JIC", "MDT JIC", "SMPB JIC", "Birena JIC"],
  authors: [{ name: "Pendidikan JIC Developer Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased bg-slate-50 text-slate-800">
        {children}
      </body>
    </html>
  );
}
