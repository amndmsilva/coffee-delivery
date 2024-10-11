/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {},
    colors: {
      background: "#FAFAFA",
      "base-card": "#F3F2F2",
      "base-input": "#EDEDED",
      "base-button": "#E6E5E5",
      "base-hover": "#D7D5D5",
      "base-label": "#8D8686",
      "base-text": "#574F4D",
      "base-subtitle": "#403937",
      "base-title": "#272221",

      "amber-dark": "#d97706",
      "amber-mind": "#f59e0b",
      amber: "#fbbf24",
      "amber-light": "#fef3c7",

      "violet-dark": "#7c3aed",
      violet: "#a78bfa",
      "violet-light": "#ede9fe",
    },

    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      prompt: ["Prompt", "sans-serif"],
    },
  },
  plugins: [],
};
