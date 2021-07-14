const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screen: {
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1444px",
      xxl: "1920px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        sans: ["montserrat", ...defaultTheme.fontFamily.sans],
        roboto: ["Roboto"],
      },
      colors:{
        'primary':"#fd3d57"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
