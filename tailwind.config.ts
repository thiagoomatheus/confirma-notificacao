import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaria: "var(--primaria)",
        secundaria: "var(--secundaria)",
        terciaria: "var(--terciaria)",
        bg: "var(--bg)",
        texto: "var(--texto)"
      },
    },
  },
  plugins: [],
} satisfies Config;
