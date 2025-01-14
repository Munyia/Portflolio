/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg': "url('/path-to-your-image.jpg')",
      },

      fontFamily: {
        play: ['Playfair Display', 'sans-serif'], 
        jet: ['JetBrains Mono', 'sans-serif'], 
        merri: ['Merriweather', 'sans-serif'], 
      },
      colors: {
        pry: "#F28908",
        sec: "#132456",
        sec1: "#B9C2EF",
      },
    },
  },
  plugins: [],
}