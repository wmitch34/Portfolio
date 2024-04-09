/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#121212",
        secondary: "rgb(13, 110, 253)",
      },
      textColor: (theme) => theme("colors"),
      textColor: {
        primary: "white",
        secondary: "rgb(13, 110, 253)",
      },
      fontFamily: {
        sans: ["Calibri", "sans-serif"],
      },
    },
  },
  plugins: [],
};
