const plugin = require('tailwindcss/plugin')
const typography = require('@tailwindcss/typography');
const { nextui } = require("@nextui-org/react");

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
        'light-purple-gradient': 'linear-gradient(to top, #4B2880, #4C3496)',
        'hero-gradient': 'radial-gradient(at left top, #3D296D, #000000 70%)',
        'brand-color': 'linear-gradient(to right, #6859FF, #AF41FF)',
        'gradient-01': 'linear-gradient(to right, #6859FF, #AF41FF)',
        'pink-gradient': 'linear-gradient(to right, #D336FF, #FD8CFF)',
        'gradient-02': 'linear-gradient(to right, #D336FF, #FD8CFF)',
        'light-purple-gradient': 'linear-gradient(to top, #4B2880, #4C3496)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          '01': '#cac5ff',
          '02': '#9d93ff',
          '03': '#412eff',
          'gray': '#ababab',
          'purple': '#844fff',
        },
        background: {
          50: '#0d1117',
          100: '#1b1c21',
          200: '#23252b',
          300: '#35363A',
          500: '#5F6368'
        },
        secondary: {
          '01': '#ebe5fe',
          '02': '#7d55fa',
          '03': '#3606cb',
        },
      },
      fontFamily: {
        'open-sans': ['"Open Sans"', 'sans-serif'],
        'poppins': ['"Poppins"', 'sans-serif'],
      },
      display: {
        '01': {
          fontSize: '70px',
          fontWeight: 'semibold',
          lineHeight: '80px',
          letterSpacing: '-4',
          fontFamily: 'poppins',
        },
        '02': {
          fontSize: '60px',
          fontWeight: 'semibold',
          lineHeight: '72px',
          letterSpacing: '-4',
          fontFamily: 'poppins',
        },
      },
      heading: {
        '01': {
          fontSize: '48px',
          fontWeight: 'semibold',
          lineHeight: '56px',
          letterSpacing: '-4%',
          fontFamily: 'poppins',
        },
        '02': {
          fontSize: '34px',
          fontWeight: 'semibold',
          lineHeight: '40px',
          letterSpacing: '-4',
          fontFamily: 'poppins',
        },
      },
      paragraph: {
        '01': {
          fontSize: '18px',
          fontWeight: 'semibold',
          lineHeight: '21.6px',
          letterSpacing: '0',
          fontFamily: 'open-sans',
        },
        '02': {
          fontSize: '16px',
          fontWeight: 'semibold',
          lineHeight: '19px',
          letterSpacing: '0',
          fontFamily: 'open-sans',
        },
      },
      outline: ['focus'],
    },
  },
  plugins: [
    nextui(),
    typography(),
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
