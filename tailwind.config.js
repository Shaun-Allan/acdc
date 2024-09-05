/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
  plugins: [],
};
