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
        bgPrimaryLight: "var(--bg-primary-light)",
        bgChatBoxMe: "var(--bg-chatBox-me)",
        textChatBoxMe: "var(--text-chatBox-me)",
        bgChatBoxNotMe: "var(--bg-chatBox-notMe)",
        textChatBoxNotMe: "var(--text-chatBox-notMe)",
        buttonText: "var(--button-text)",
        buttonColor: "var(--button-color)",
      },

      fontFamily: {
        sans: ["Calibri", "sans-serif"],
      },
    },
  },
  plugins: [],
};
