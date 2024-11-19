const { Michroma } = require('next/font/google');

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
        Michroma: ['"Michroma"', "serif"],
      },
      colors: {
        background: {
          light: "#c4f6ff",
          DEFAULT: "#c4f6ff",
          dark: "#2e2e2e",
        },
        text: {
          light: "#0cc0df",
          DEFAULT: "#0cc0df",
          dark: "white",
        },
        accent1: {
          light: "#105282",
          DEFAULT: "#105282",
          dark: "#ffffff",
        },
        accent2: {
          light: "#1d8297",
          DEFAULT: "#1d8297",
          dark: "#ffffff",
        },
        accent3: {
          light: "#083663",
          DEFAULT: "#083663",
          dark: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
