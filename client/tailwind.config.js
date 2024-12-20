/**\ @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        bgPrimary: "var(--bg-primary)",
        bgSecondary: "var(--bg-secondary)",
      },

      fontFamily: {
        sans: ["Calibri", "sans-serif"],
      },
    },
  },
  plugins: [],
};
