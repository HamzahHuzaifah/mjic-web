import Link from "next/link";

export default function SMPBPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* Header Banner */}
      <section className="relative py-20 bg-[url('/images/brand_bg.png')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 drop-shadow-sm mb-4">
            Informasi Pendaftaran (SMPB)
          </h1>
          <p className="text-slate-700 max-w-2xl mx-auto text-lg">
            Seleksi Masuk Penerimaan Siswa Baru Pendidikan Jakarta Islamic Centre.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/40 border border-slate-100 p-8 md:p-12 text-center min-h-[400px] flex flex-col items-center justify-center space-y-4">
          <div className="w-16 h-16 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Pendaftaran Segera Dibuka</h2>
          <p className="text-lg text-slate-500 max-w-lg mb-6">
            Halaman formulir pendaftaran dan rincian persyaratan SMPB saat ini sedang dipersiapkan. Silakan pantau terus informasi dari kami.
          </p>
          <Link href="/" className="px-6 py-2.5 font-bold text-white bg-primary-600 hover:bg-primary-700 rounded-full shadow-md transition-colors">
            Kembali ke Beranda
          </Link>
        </div>
      </section>
    </main>
  );
}
