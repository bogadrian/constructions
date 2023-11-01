import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)'
      }
    },
    screens: {
      mini: '390px',
      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px'
      // => @media (min-width: 1280px) { ... }
    }
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          // ...
          colors: {
            background: '#e5e7f1', // or DEFAULT
            foreground: '#00020a' // or 50 to 900 DEFAULT
          }
        },
        dark: {
          // ...
          colors: {
            background: '#01051a', // or DEFAULT
            foreground: '#ECEDEE' // or 50 to 900 DEFAULT
          }
        }
      }
    })
  ]
};
