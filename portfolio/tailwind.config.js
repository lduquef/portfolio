/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : "class",
  content: [
    "./src/**/*.{html, js, ts, vue}", 
    "./src/**/*",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        burtons: "burtons",
      }
    },
  },
  plugins: [],
}