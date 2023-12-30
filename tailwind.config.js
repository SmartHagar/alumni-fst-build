/**
 * @format
 * @type {import('tailwindcss').Config}
 */
const colors = require("./src/utils/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: ["Lora", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors,
      backgroundImage: {
        "bg-1": "url('/images/bg/bg-1.jpg')",
        "bg-2": "url('/images/bg/bg-2.jpeg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
