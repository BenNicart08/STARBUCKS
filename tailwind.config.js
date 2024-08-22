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
        star: "#cba258",
        dgreen: "#d4e9e2",
        lgreen: "#f1f8f5",
        gray: "#f2f0eb",
      },
      backgroundImage: {
        bgRewards: "url('../img/bgRewards-mobile.webp')",
        bgRewardslg: "url('../img/xl-hero-desktop_2021.png')",
        borderImg: "url('../img/outlinjebg.webp')",
      },
    },
  },
  plugins: [require("tailwindcss-border-image")],
};
