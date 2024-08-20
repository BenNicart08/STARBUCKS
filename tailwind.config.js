/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      colors: {
        primary: "#006241",
        secondary: "#fbbc05",
        tertiary: "#1e3932",
        
      },
    },
  },
  plugins: [],
};
