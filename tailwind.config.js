/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        deepTeal: "#0f282d",
        limeGreen: "#d1ff3b",
        lightSkyBlue: "#7af1ff",
        purple: "#544ae5",
      },
      fontFamily: {
        rebond: ["ESRebondGrotesque", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        'tall': { 'raw': '(min-height: 1920px)' } // Custom height-based media query
      },
    },
  },
  plugins: [],
};
