/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        fontFamily : {
          saira : ["Saira Extra Condensed", "sans-serif"],
        },
        fontSize: {
          'xxs': '0.5rem', 
        },
        backgroundImage: {
          'pattern' : "url('./img/pattern.png')",
        },
        backgroundSize : {
          'xs' : '12.5%',
          'small': '25%',
          'medium' : '50%',
        }
    },
  },
  plugins: [],
}

