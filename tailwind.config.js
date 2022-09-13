const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./js/main.js"],
  darkMode: "media",
  theme: {
    fontFamily: {
      outfit: ["Outfit", ...defaultTheme.fontFamily.sans],
      inter: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    colors: {
      primary: {
        light: "#ff6600",
        DEFAULT: "#e65c00",
        dark: "#cc5200",
      },
      dark: "#2C2727",
      light: "#F6F4F4",
      grey: "#3E3939",
      ...colors,
    },
    container: {
      padding: {
        DEFAULT: "1.5rem",
      },
    },
    extend: {},
  },
  plugins: [],
};
