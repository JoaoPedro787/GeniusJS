/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        'max-md': { 'max': '600px' },
        'max-sm': { 'max': '420px' }, 
      },
    },
  },
  plugins: [],
}
