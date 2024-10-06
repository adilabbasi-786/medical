/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/preline/preline.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#14A09D",
          dark: "#14A09D",
        },
      },
    },
  },
  plugins: [require("preline/plugin")],
  fontFamily: {
    Poppins: ["Poppins", "sans-serif"],
  },
};
