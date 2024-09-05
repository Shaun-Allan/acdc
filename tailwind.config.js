const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dosis: ["Dosis", "sans-serif"],
        libre: ["Libre Baskerville", "serif"],
        shadows: ['"Shadows Into Light"', "cursive"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
