/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Verde esmeralda "code-based" da IA.med + preto de fundo.
        emerald: {
          DEFAULT: "#2db89e",
          400: "#4fd0b6",
          500: "#2db89e",
          600: "#249e87",
          700: "#1c7e6c",
        },
        ink: {
          DEFAULT: "#0a0a0a",
          900: "#0a0a0a",
          800: "#141414",
          700: "#1c1c1c",
        },
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "Liberation Mono",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
