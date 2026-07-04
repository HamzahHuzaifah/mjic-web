import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Info */}
          <div>
            <span className="text-xl font-bold text-white">
              Madrasah Jakarta Islamic Centre (JIC)
            </span>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              "Jujur, Ikhlas, Cerdas" - Mewujudkan generasi muslim rabbani yang unggul dalam ilmu pengetahuan, berakhlak mulia, Qur'ani, mandiri, dan kreatif.
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Tautan Cepat
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/tentang" className="hover:text-white transition-colors">
                  Profil Lembaga
                </Link>
              </li>
              <li>
                <Link href="/akademik" className="hover:text-white transition-colors">
                  Program Akademik
                </Link>
              </li>
              <li>
                <Link href="/SMPB" className="hover:text-white transition-colors">
                  Sistem Penerimaan Murid Baru
                </Link>
              </li>
              <li>
                <Link href="/berita" className="hover:text-white transition-colors">
                  Berita & Pengumuman
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Hubungi Kami
            </h3>
            <p className="mt-4 text-sm leading-relaxed">
              Gedung Sosial Budaya Lantai 2, Komplek PPIJ Jakarta Islamic Centre, Koja, Jakarta Utara<br />
              Email: lembagapendidikanjic@gmail.com<br />
              Telepon: 0878-8996-9936
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {currentYear} Madrasah Jakarta Islamic Centre. Hak Cipta Dilindungi.</p>
          {/* <p className="mt-4 md:mt-0 text-slate-500">
            Powered by Next.js & Tailwind CSS
          </p> */}
        </div>
      </div>
    </footer>
  );
}
