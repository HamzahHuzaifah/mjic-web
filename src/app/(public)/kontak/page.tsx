export default function KontakPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* Header Banner */}
      <section className="relative py-20 bg-[url('/images/brand_bg.png')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 drop-shadow-sm mb-4">
            Kontak Kami
          </h1>
          <p className="text-slate-700 max-w-2xl mx-auto text-lg">
            Hubungi kami untuk informasi lebih lanjut mengenai program pendidikan dan pendaftaran.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/40 border border-slate-100 p-8 md:p-12 min-h-[400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-800 border-b pb-4">Informasi Kontak</h2>
              <div className="flex flex-col space-y-4 text-slate-600">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-slate-800">Alamat</h4>
                    <p className="text-sm mt-1">Gedung Sosial Budaya Lantai 2,<br />Komplek PPIJ Jakarta Islamic Centre,<br />Koja, Jakarta Utara</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-slate-800">Telepon / WhatsApp</h4>
                    <p className="text-sm mt-1">0878-8996-9936</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-slate-800">Email</h4>
                    <p className="text-sm mt-1">lembagapendidikanjic@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col justify-center text-center space-y-4">
              <svg className="w-12 h-12 text-primary-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <h3 className="font-bold text-slate-800">Kirim Pesan</h3>
              <p className="text-sm text-slate-500">
                Fitur form kontak pengiriman pesan ke email admin sedang dalam tahap pengembangan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
