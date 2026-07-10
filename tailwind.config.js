/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0b0e0d",
        secondary: "#4ade80",
        tertiary: "#121615",
        additional: "#161b19",
        "white-100": "#e8eae9",
        muted: "#9ba39f",
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', "Consolas", "monospace"],
        sans: ["Inter", "sans-serif"],
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
