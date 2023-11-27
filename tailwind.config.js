const plugin = require('tailwindcss/plugin')
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'desktop': '1440px',
        'ipad': '1024px',
        'ipadmini': '768px',
        'android': '360px',
      },
      backgroundImage: {
        'hero-pattern': 'radial-gradient(at left top, #3D296D, #000000 70%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          'gray': '#ababab',
          'purple': '#844fff',
        },
        background: {
          50: '#0d1117',
          100: '#1b1c21',
          200: '#23252b',
          300: '#35363A',
          500: '#5F6368'
        }
      },
      fontFamily: {
        'open-sans': ['"Open Sans"', 'sans-serif'],
        'poppins': ['"Poppins"', 'sans-serif'],
      },
      outline: ['focus'],
    },
  },
  plugins: [
    nextui(),
    plugin(function ({ addUtilities, addComponents, e, config }) {
      // Add your custom styles here
      addUtilities({
        '.bg-primary-gradient': {
          background: 'linear-gradient(90deg, #6859FF 0%, #AF41FF 100%);'
        },
      })
    }),
  ],
}
