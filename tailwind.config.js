/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'crimson-text': ['Crimson-text','sans-serif']
      },

      backgroundSize: {
        50: '50rem',
        100: '100rem',
        55: '55rem'
      }


    },

  },
  plugins: [],
}