import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-9xl font-extrabold text-primary-600 tracking-widest">404</h1>
        <div className="bg-accent-400 px-2 text-sm rounded rotate-12 inline-block font-semibold text-slate-900">
          Halaman Tidak Ditemukan
        </div>
        <p className="text-slate-600 text-base">
          Maaf, halaman yang Anda cari tidak dapat ditemukan atau telah dipindahkan.
        </p>
        <div>
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg shadow transition-colors"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
