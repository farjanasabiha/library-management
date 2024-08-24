/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: "class", // Enables dark mode support using the 'class' strategy
  plugins: [require("daisyui")], // DaisyUI plugin
};
