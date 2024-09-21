/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        catamaran: ["Catamaran", "sans-serif"],
      },
      colors: {
        primary: "#0a5089",
      },
    },
  },
  plugins: [],
};
