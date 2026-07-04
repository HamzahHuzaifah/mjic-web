import React from "react";
import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-slate-100">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col justify-between">
        <div>
          {/* Brand logo */}
          <div className="h-16 flex items-center justify-center border-b border-slate-800 px-6">
            <Link href="/admin/dashboard" className="text-lg font-bold text-white tracking-wider flex items-center space-x-2">
              <span>ADMIN PANEL</span>
            </Link>
          </div>

          {/* Nav links */}
          <nav className="mt-6 px-4 space-y-2">
            <Link
              href="/admin/dashboard"
              className="flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm font-medium text-white bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              📊 <span>Dashboard</span>
            </Link>
            <Link
              href="/admin/posts"
              className="flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 hover:text-white transition-colors"
            >
              📝 <span>Kelola Berita</span>
            </Link>
            <Link
              href="/admin/SMPB"
              className="flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 hover:text-white transition-colors"
            >
              👥 <span>Pendaftar SMPB</span>
            </Link>
            <Link
              href="/admin/settings"
              className="flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 hover:text-white transition-colors"
            >
              ⚙️ <span>Pengaturan</span>
            </Link>
          </nav>
        </div>

        {/* User profile / Logout */}
        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center justify-between">
            <div className="text-xs">
              <p className="font-semibold text-white">Admin Utama</p>
              <p className="text-slate-500">Super Administrator</p>
            </div>
            <Link
              href="/login"
              className="p-1.5 bg-slate-800 hover:bg-red-950 text-red-400 hover:text-red-300 rounded transition-colors text-xs"
              title="Keluar"
            >
              🚪 Logout
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">
          <div className="flex items-center">
            <h1 className="text-lg font-bold text-slate-800">Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              target="_blank"
              className="text-xs font-semibold text-primary-700 bg-primary-50 border border-primary-200 px-3 py-1.5 rounded hover:bg-primary-100 transition-colors"
            >
              👁️ Lihat Website
            </Link>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
