import { redirect } from "next/navigation";

// Mengarahkan akses rute root /admin langsung ke halaman /admin/dashboard
export default function AdminRootPage() {
  redirect("/admin/dashboard");
}
