export default function TentangPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* Header Banner */}
      <section className="relative py-20 bg-[url('/images/brand_bg.png')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 drop-shadow-sm mb-4">
            Profil Madrasah JIC
          </h1>
          <p className="text-slate-700 max-w-2xl mx-auto text-lg">
            Mengenal lebih dekat visi, misi, dan sejarah Madrasah Jakarta Islamic Centre.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/40 border border-slate-100 p-8 md:p-12 text-center min-h-[400px] flex flex-col items-center justify-center space-y-4">
          <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Halaman Sedang Dibangun</h2>
          <p className="text-lg text-slate-500 max-w-lg">
            Konten profil lembaga, sejarah, dan jajaran pengurus sedang dalam proses penyusunan oleh administrator.
          </p>
        </div>
      </section>
    </main>
  );
}
