const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          default: "#007FFF",
          light: "#66B2FF",
        },
        neutrals: {
          100: "#F0F0F0",
          500: "#1D2126",
          400: "#3D4751",
          300: "#303840",
          200: "#98A2B2",
        },
        dark_bg: "#0F1214",
      },
    },
  },
  plugins: [],
};
