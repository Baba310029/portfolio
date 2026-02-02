/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b0f19",
        panel: "#11162a",
        accent: "#3bb6a4",
        textPrimary: "#e6e9f0",
        textMuted: "#9aa0b4",
      },
    },
  },
  plugins: [],
}
