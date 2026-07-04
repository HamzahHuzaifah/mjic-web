"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

interface InitialPostData {
  id: number;
  title: string;
  slug: string;
  content: string;
  image: string | null;
  published: boolean;
}

export default function PostForm({ initialPost }: { initialPost?: InitialPostData }) {
  const router = useRouter();
  const [title, setTitle] = useState(initialPost?.title || "");
  const [slug, setSlug] = useState(initialPost?.slug || "");
  const [image, setImage] = useState(initialPost?.image || "");
  const [published, setPublished] = useState(initialPost?.published || false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Inisialisasi Tiptap Editor
  const editor = useEditor({
    extensions: [StarterKit],
    content: initialPost?.content || "<p>Tulis konten berita di sini...</p>",
    editorProps: {
      attributes: {
        class: "prose max-w-none focus:outline-none min-h-[250px] px-4 py-3 border border-slate-200 rounded-b-lg text-slate-800 text-sm",
      },
    },
  });

  // Otomatis men-generate slug ketika menulis judul (hanya ketika membuat berita baru)
  useEffect(() => {
    if (!initialPost) {
      const generatedSlug = title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "") // Hapus karakter non-alfanumerik
        .replace(/\s+/g, "-") // Ganti spasi dengan strip
        .replace(/-+/g, "-") // Bersihkan strip berlebih
        .trim();
      setSlug(generatedSlug);
    }
  }, [title, initialPost]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const content = editor?.getHTML() || "";

    if (!title || !slug || !content || content === "<p></p>") {
      setError("Judul, slug, dan konten berita wajib diisi!");
      setLoading(false);
      return;
    }

    try {
      const url = initialPost ? `/api/admin/posts/${initialPost.id}` : "/api/admin/posts";
      const method = initialPost ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          slug,
          content,
          image: image || null,
          published,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        router.push("/admin/posts");
        router.refresh();
      } else {
        setError(data.error || "Gagal menyimpan berita.");
      }
    } catch (err) {
      setError("Terjadi kesalahan koneksi ke server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-3 rounded-lg text-center">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 gap-6">
        {/* Input Judul */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1.5">
            Judul Berita
          </label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Contoh: Santri Islamic Centre Meraih Juara 1"
            className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 text-sm"
          />
        </div>

        {/* Input Slug */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1.5">
            Slug Rute (SEO URL)
          </label>
          <input
            type="text"
            required
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="santri-islamic-center-juara"
            className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-slate-800 font-mono focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 text-xs"
          />
        </div>

        {/* Input Gambar Utama */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1.5">
            URL Gambar Utama (Opsional)
          </label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Contoh: /images/tahfidz_news.png atau URL eksternal"
            className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 text-sm"
          />
        </div>

        {/* Tiptap Text Editor */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1.5">
            Konten Berita
          </label>
          
          {/* Tiptap Toolbar */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-50 border border-b-0 border-slate-200 p-2.5 rounded-t-lg">
            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleBold().run()}
              className={`p-1 px-2.5 text-xs font-bold rounded border border-slate-200 transition-colors ${editor?.isActive("bold") ? "bg-primary-600 text-white border-primary-600" : "bg-white text-slate-700 hover:bg-slate-100"}`}
            >
              Bold
            </button>
            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleItalic().run()}
              className={`p-1 px-2.5 text-xs italic rounded border border-slate-200 transition-colors ${editor?.isActive("italic") ? "bg-primary-600 text-white border-primary-600" : "bg-white text-slate-700 hover:bg-slate-100"}`}
            >
              Italic
            </button>
            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleBulletList().run()}
              className={`p-1 px-2.5 text-xs rounded border border-slate-200 transition-colors ${editor?.isActive("bulletList") ? "bg-primary-600 text-white border-primary-600" : "bg-white text-slate-700 hover:bg-slate-100"}`}
            >
              • List
            </button>
            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleOrderedList().run()}
              className={`p-1 px-2.5 text-xs rounded border border-slate-200 transition-colors ${editor?.isActive("orderedList") ? "bg-primary-600 text-white border-primary-600" : "bg-white text-slate-700 hover:bg-slate-100"}`}
            >
              1. List
            </button>
            <button
              type="button"
              onClick={() => editor?.chain().focus().undo().run()}
              className="p-1 px-2 text-xs rounded border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 transition-colors ml-auto"
            >
              Undo
            </button>
            <button
              type="button"
              onClick={() => editor?.chain().focus().redo().run()}
              className="p-1 px-2 text-xs rounded border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 transition-colors"
            >
              Redo
            </button>
          </div>
          <EditorContent editor={editor} />
        </div>

        {/* Checkbox Publish */}
        <div className="flex items-center space-x-2.5 py-2">
          <input
            id="published"
            type="checkbox"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
            className="w-4 h-4 text-primary-600 border-slate-300 rounded focus:ring-primary-500"
          />
          <label htmlFor="published" className="text-sm font-semibold text-slate-700 cursor-pointer select-none">
            Terbitkan Sekarang (Published)
          </label>
        </div>
      </div>

      <div className="flex items-center space-x-3 pt-4 border-t border-slate-100">
        <button
          type="submit"
          disabled={loading}
          className="px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-bold rounded-lg shadow transition-colors disabled:opacity-50"
        >
          {loading ? "Menyimpan..." : "Simpan Berita"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin/posts")}
          className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-bold rounded-lg transition-colors"
        >
          Batal
        </button>
      </div>
    </form>
  );
}
