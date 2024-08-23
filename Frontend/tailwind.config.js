/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '770px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    colors: {
      brown: '#6F5B3E',
      cream: '#F9F6F0',
      beige: '#C4AE78',
      black: '#171515',
      shadow: '#E8E4D9',
      darkblue: '#2E2714',
    },
    fontFamily: {
      Rubik: ["Rubik", "sans-serif"],
     },
     extend: {
      boxShadow: {
        'first': '12px 15px 1px 0px #D5D7E1, -12px -15px 1px 0px #D5D7E1',
        'second': '12px -15px 1px 0px #D5D7E1, -12px 15px 1px 0px #D5D7E1'
      }
    }
  },
  plugins: [],
}

