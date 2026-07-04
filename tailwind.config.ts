import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Branding Kustom Klien (Definisi Mandiri)
        brand: {
          red: {
            1: "#ff4367", // Merah Utama
            2: "#c20797", // Merah Gradasi
          },
          green: {
            1: "#01bea4", // Hijau Utama
            2: "#005d7a", // Hijau Gradasi
          },
          blue: {
            1: "#48b3ff", // Biru Utama
            2: "#0070c0", // Biru Gradasi
          },
        },
        // Mapping presisi skala Tailwind ke warna branding klien.
        // Ini memastikan class bawaan (e.g. bg-primary-600, text-accent-700) memakai HEX Anda dengan pas.
        primary: {
          50: "#e8fcf9",
          100: "#ccf6f1",
          200: "#99edd2",
          300: "#66e3cd",
          400: "#33dab8",
          500: "#01bea4", // Hijau Utama (#01bea4)
          600: "#01bea4", // Hijau Utama (#01bea4) - Digunakan oleh tombol utama
          700: "#005d7a", // Hijau Gradasi (#005d7a) - Digunakan untuk hover tombol
          800: "#005d7a", // Hijau Gradasi (#005d7a)
          900: "#00465c",
          950: "#00232e",
        },
        accent: {
          50: "#fff0f3",
          100: "#ffe3e8",
          200: "#ffcbd5",
          300: "#ffa2b5",
          400: "#ff6a88",
          500: "#ff4367", // Merah Utama (#ff4367)
          600: "#ff4367", // Merah Utama (#ff4367)
          700: "#c20797", // Merah Gradasi (#c20797)
          800: "#c20797",
          900: "#7a005c",
          950: "#470036",
        },
        blue: {
          50: "#f0f8ff",
          100: "#e0f0ff",
          200: "#bce0ff",
          300: "#8ccaff",
          400: "#5cb3ff",
          500: "#48b3ff", // Biru Utama (#48b3ff)
          600: "#48b3ff", // Biru Utama (#48b3ff)
          700: "#0070c0", // Biru Gradasi (#0070c0)
          800: "#0070c0", // Biru Gradasi (#0070c0)
          900: "#00528c",
          950: "#003257",
        }
      },
    },
  },
  plugins: [],
};

export default config;
