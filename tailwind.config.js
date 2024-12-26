/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', "serif"],
        crete: ['"Crete Round"', "serif"],
      },
      animation: {
        spin360: "spin360 0.5s linear forwards",
        spin360Reverse: "spin360Reverse 0.5s linear forwards",
      },
      keyframes: {
        spin360: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        spin360Reverse: {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
    },
  },
  darkMode: "class", // Enables dark mode support using the 'className' strategy
  plugins: [require("daisyui")], // DaisyUI plugin
};
