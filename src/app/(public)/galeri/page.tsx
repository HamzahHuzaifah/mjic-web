export default function GaleriPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* Header Banner */}
      <section className="relative py-20 bg-[url('/images/brand_bg.png')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 drop-shadow-sm mb-4">
            Galeri Kegiatan
          </h1>
          <p className="text-slate-700 max-w-2xl mx-auto text-lg">
            Dokumentasi aktivitas dan momen berharga santri Pendidikan Jakarta Islamic Centre.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/40 border border-slate-100 p-8 md:p-12 text-center min-h-[400px] flex flex-col items-center justify-center space-y-4">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Album Galeri Belum Tersedia</h2>
          <p className="text-lg text-slate-500 max-w-lg">
            Halaman ini nantinya akan berisi dokumentasi foto-foto kegiatan belajar dan acara di JIC. Silakan kunjungi kembali nanti.
          </p>
        </div>
      </section>
    </main>
  );
}
