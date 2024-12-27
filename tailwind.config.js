/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1320px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      'Hanken': ['Hanken Grotesk', 'serif',],
      'Inter': ['Inter', ' serif',]
    
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      'white-color': '#fff',
      'dark-white-color':'#fff',
      ' black-color ':'black-color ',
      'black-color2 ':'#1E1F1F',
      'black-color3 ':'#0B0C0C',
    'light-black-color': '#242627',
    'title-color':'#0B0C0C',
    'dark-title-color': '#0B0C0C',
    'text-color': '#3F444B',
    'primary-color': '#82b440',


    },
  },
  plugins: [],
}