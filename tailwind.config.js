/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
        fontFamily : {
          saira : ["Saira Extra Condensed", "sans-serif"],
        },
        fontSize: {
          'xxs': '0.4rem', 
        },
        height: {
          '600': '600px',
          
        },
        backgroundImage: {
          'pattern' : "url('./img/abstract.jpg')",
        },
        backgroundSize : {
          'xs' : '6.25%',
          'small': '25%',
          'medium' : '50%',
        }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ preferredStrategy: 'pseudoelements' }),
  ],
}

