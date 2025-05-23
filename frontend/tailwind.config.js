/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pixelify: ['"Pixelify Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
