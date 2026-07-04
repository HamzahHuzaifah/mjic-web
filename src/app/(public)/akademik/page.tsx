import { db } from "@/lib/db";
import Link from "next/link";

export default async function AkademikPage() {
  const programs = await db.program.findMany({
    orderBy: { createdAt: "asc" }
  });

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* Header Banner */}
      <section className="relative py-20 bg-[url('/images/brand_bg.png')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 drop-shadow-sm mb-4">
            Pendidikan JIC
          </h1>
          <p className="text-slate-700 max-w-2xl mx-auto text-lg">
            Program pendidikan jenjang usia dini hingga pendidikan dasar berbasis karakter Qur'ani.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((prog) => (
            <div key={prog.id} className="bg-white rounded-2xl shadow-xl shadow-slate-200/40 border border-slate-100 p-8 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center text-3xl shadow-inner mb-6">
                {prog.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{prog.name}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                {prog.description}
              </p>
              <Link 
                href="/SMPB" 
                className="inline-flex w-full justify-center px-4 py-2 text-sm font-bold text-primary-700 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors"
              >
                Informasi Pendaftaran
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
