import React from "react";
import { db } from "@/lib/db";
import { formatDate } from "@/lib/utils";

// Selalu render server-side untuk keakuratan dashboard
export const revalidate = 0;

export default async function AdminDashboard() {
  // Query data statistik langsung dari MySQL database
  const [postCount, registrationCount, programCount, recentRegistrations] = await Promise.all([
    db.post.count(),
    db.registration.count(),
    db.program.count(),
    db.registration.findMany({
      take: 3,
      orderBy: { createdAt: "desc" },
    }),
  ]);

  return (
    <div className="space-y-6">
      {/* Welcome banner */}
      <div className="bg-gradient-to-r from-primary-800 to-primary-900 text-white p-6 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold">Selamat Datang Kembali, Admin!</h2>
        <p className="text-primary-100 text-sm mt-1">
          Kelola berita, pendaftaran SMPB, dan konfigurasi website lembaga pendidikan melalui panel kendali ini.
        </p>
      </div>

      {/* Grid status cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Posts count */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center space-x-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-lg text-2xl">
            📝
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Total Berita / Pengumuman</p>
            <h3 className="text-2xl font-bold text-slate-800">{postCount}</h3>
          </div>
        </div>

        {/* Card 2: SMPB count */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center space-x-4">
          <div className="p-3 bg-green-50 text-green-600 rounded-lg text-2xl">
            👥
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Pendaftar Baru SMPB</p>
            <h3 className="text-2xl font-bold text-slate-800">{registrationCount}</h3>
          </div>
        </div>

        {/* Card 3: Academic programs count */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center space-x-4">
          <div className="p-3 bg-purple-50 text-purple-600 rounded-lg text-2xl">
            🏛️
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Program Akademik</p>
            <h3 className="text-2xl font-bold text-slate-800">{programCount}</h3>
          </div>
        </div>
      </div>

      {/* Recent Activity / SMPB Pendaftar Terakhir Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="font-bold text-slate-800">Pendaftar SMPB Terbaru</h3>
          <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full font-medium">
            Menampilkan pendaftar terakhir
          </span>
        </div>
        <div className="overflow-x-auto">
          {recentRegistrations.length === 0 ? (
            <div className="p-8 text-center text-slate-400 text-sm">
              Belum ada pendaftar baru.
            </div>
          ) : (
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-xs text-slate-700 uppercase">
                <tr>
                  <th className="px-6 py-3">Nama Lengkap</th>
                  <th className="px-6 py-3">Pilihan Program</th>
                  <th className="px-6 py-3">Nomor Telepon</th>
                  <th className="px-6 py-3">Tanggal Daftar</th>
                  <th className="px-6 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recentRegistrations.map((reg) => (
                  <tr key={reg.id}>
                    <td className="px-6 py-4 font-medium text-slate-900">{reg.fullName}</td>
                    <td className="px-6 py-4">{reg.programOfInterest}</td>
                    <td className="px-6 py-4">{reg.phone}</td>
                    <td className="px-6 py-4">{formatDate(reg.createdAt)}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-0.5 rounded text-xs font-semibold border ${
                          reg.status === "APPROVED"
                            ? "bg-green-50 text-green-700 border-green-200"
                            : reg.status === "REJECTED"
                            ? "bg-red-50 text-red-700 border-red-200"
                            : "bg-yellow-50 text-yellow-700 border-yellow-200"
                        }`}
                      >
                        {reg.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
