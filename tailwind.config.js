/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
      extend: {
        colors: {
          primary: '#F97316', // 👈 Your custom orange
        },
        keyframes: {
          gradient: {
            '0%': { 'background-position': '0% 50%' },
            '100%': { 'background-position': '100% 50%' },
          },
        },
        animation: {
          'gradient-left-to-right': 'gradient 6s linear infinite',
        },
      },
    },
    plugins: [],
  }
  