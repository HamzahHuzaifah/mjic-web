import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo & Branding */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-14 h-14 flex-shrink-0 transform group-hover:scale-105 transition-transform duration-200">
                <Image 
                  src="/images/Logo Madrasah.webp" 
                  alt="Logo Pendidikan JIC" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-primary-800 leading-tight">
                  Madrasah
                </span>
                <span className="text-lg font-extrabold text-primary-800 leading-tight">
                  Jakarta Islamic Centre
                </span>
                <span className="text-[10px] font-bold text-primary-600 uppercase tracking-widest mt-0.5">
                  PAUDQu - TPQ - MDT
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6 text-[14px] font-bold">
            <Link href="/" className="text-primary-600 hover:text-primary-700 transition-colors">
              Beranda
            </Link>
            <Link href="/tentang" className="text-primary-600 hover:text-primary-700 transition-colors">
              Profil
            </Link>
            <Link href="/akademik" className="text-primary-600 hover:text-primary-700 transition-colors">
              Pendidikan
            </Link>
            <a href="https://spmb.mjic.sch.id" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 transition-colors">
              Pendaftaran
            </a>
            <Link href="/berita" className="text-primary-600 hover:text-primary-700 transition-colors">
              Kabar
            </Link>
            <Link href="/galeri" className="text-primary-600 hover:text-primary-700 transition-colors">
              Galeri
            </Link>
            <Link href="/kontak" className="text-primary-600 hover:text-primary-700 transition-colors">
              Kontak
            </Link>
          </nav>

          {/* Call to Action Button */}
          <div className="flex items-center space-x-4">
            <a
              href="https://islamic-center.or.id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-bold text-white bg-primary-800 hover:bg-primary-900 rounded-full shadow-md hover:shadow-lg transition-all duration-200 tracking-wider uppercase"
            >
              WEBSITE JIC
            </a>
            {/* Link admin tersembunyi halus */}
            <Link
              href="/login"
              className="text-[10px] font-medium text-slate-300 hover:text-primary-500 transition-colors"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
