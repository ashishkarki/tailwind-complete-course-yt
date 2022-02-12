const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,css}', './public/**/*.html'],
  theme: {
    extend: {
      screens: {
        '3xl': '1100px',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const utilities = {
        '.scale-1': {
          transform: 'scale(1)',
        },
      }

      addUtilities(utilities, ['responsive'])
    }),
  ],
}
