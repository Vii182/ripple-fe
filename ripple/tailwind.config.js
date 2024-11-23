const { Quicksand } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Enable dark mode based on class
  theme: {
    extend: {
      fontFamily: {
        Quicksand: ['"Quicksand"', "sans-serif"],
      },
      colors: {
        bg: {
          light: "#f7ffe5", // Soft lime green for light mode
          dark: "#1e293b", // Slate gray for dark mode
        },
        textPrimary: {
          light: "#1a202c", // Dark gray for light mode
          dark: "#e2e8f0", // Light slate for dark mode
        },
        textSecondary: {
          light: "#718096", // Muted gray for light mode
          dark: "#cbd5e1", // Softer light text for dark mode
        },
        accent: {
          light: "#84cc16", // Vibrant lime green for light mode
          dark: "#3b82f6", // Blue accent for dark mode
        },
        border: {
          light: "#e2e8f0", // Light gray border for light mode
          dark: "#4a5568", // Darker slate border for dark mode
        },
        button: {
          light: "#a3e635", // Brighter lime for light mode buttons
          dark: "#475569", // Subtle slate for dark mode buttons
        },
      },
    },
  },
  plugins: [],
};
