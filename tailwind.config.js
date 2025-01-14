/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        plus: ['Plus Jakarta Sans', 'sans-serif'], 
        rob: ['Roobert', 'sans-serif'], 
        merri: ['Merriweather', 'sans-serif'], 
      },
      colors: {
        pry: "#FF8355",
        sec: "#088484",
        sec1: "#EDAD08",
      },
    },
  },
  plugins: [],
}