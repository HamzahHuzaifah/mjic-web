"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeletePostButton({ id }: { id: number }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!confirm("Apakah Anda yakin ingin menghapus berita ini?")) return;
    
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/posts/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh(); // Me-refresh server component untuk memuat data ter-update
      } else {
        const data = await res.json();
        alert(data.error || "Gagal menghapus berita.");
      }
    } catch (error) {
      alert("Terjadi kesalahan koneksi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="text-red-600 hover:text-red-900 text-xs font-bold transition-colors disabled:opacity-50"
    >
      {loading ? "Menghapus..." : "Hapus"}
    </button>
  );
}
