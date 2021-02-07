const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "light-blue": colors.lightBlue,
        cyan: colors.cyan,
        primary: "#3490dc",
        secondary: "#ffed4a",
        danger: "#e3342f"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
