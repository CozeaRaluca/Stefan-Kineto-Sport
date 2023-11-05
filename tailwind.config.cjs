/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#16757e",
        secondary: "#e7e513",
        "bg-primary": "#dbd2e0",
        "bg-secondary": "#e9e6ff",
        highlight: "#f79256",
      },
      fontFamily: {
        serif: [
          "Montserrat Variable",
          "Nixie One",
          ...defaultTheme.fontFamily.serif,
        ],
      },
    },
  },
  plugins: [],
};
