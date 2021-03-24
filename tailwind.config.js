const colors = require('tailwindcss/colors')
module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        rose : colors.rose,
        salmon: {
          dark: '#F38375',
          DEFAULT: '#F7A399',
          light: '#FBC3BC'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
