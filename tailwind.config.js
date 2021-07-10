module.exports = {
  purge: ['./src/**/*.vue', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      montserrat: ["Montserrat"],
    },
    screens: {

      xl: { max: "1440px" },

      lg: { max: "1023px" },

      md: { max: "767px" },

      sm: { max: "425px" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
