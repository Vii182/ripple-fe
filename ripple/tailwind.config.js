const { Quicksand } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Quicksand: ['"Quicksand"', "sans-serif"],
      },
      colors: {
        bg: {
          light: "#d8f3dc",
          DEFAULT: "#d8fdc",
          dark: "#081c15",
        },
        text1: {
          light: "#081c15",
          DEFAULT: "#081c15",
          dark: "#d8f3dc",
        },
        text2: {
          light: "#1B4332",
          DEFAULT: "#1B4332",
          dark: "#b7e4c7",
        },
        accent1: {
          light: "#2D6A4F",
          DEFAULT: "#2D6A4F",
          dark: "#95D5B2",
        },
        accent2: {
          light: "#40916C",
          DEFAULT: "#40916C",
          dark: "#74C69D",
        },
        accent3: {
          light: "#52B788",
          DEFAULT: "#52B788",
          dark: "#52B788",
        }
      },
    },
  },
  plugins: [],
};
