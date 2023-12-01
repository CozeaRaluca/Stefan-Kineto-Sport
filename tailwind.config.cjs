/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#0b88ff",
        // primary: "#16757e",
        "primary-100": "#004f2D",
        "primary-300": "#008f51",
        "primary-500": "#00cc74",
        "primary-700": "#16757e",
        secondary: "#5bc2a3",
        // secondary: "#e7e513",
        "secondary-100": "#5bc2a3",
        "secondary-300": "#7DCFB6",
        "secondary-500": "#b5e3c5",
        "secondary-700": "#e7e513",
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
