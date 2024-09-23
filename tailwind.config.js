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
      textShadow: {
        default: "-2px 2px 4px rgba(0, 0, 0, 0.3)", // light shadow
        lg: "3px 3px 6px rgba(0, 0, 0, 0.5)", // large shadow
      },
    },
  },
  plugins: [
    require("tailwindcss-textshadow"), // Add text shadow plugin
  ],
};
