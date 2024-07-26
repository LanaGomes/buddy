/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: {
        1: "#3E495A",
        2: "#1A2437",
      },

      pink: "#F48884",
      yellow: "#E7C028",

      white: {
        almostWhite: "#F6EEEB",
        whistestWhite: "#FFFFFF",
        hotWhite: "#F6EEEB",
      },
    },

    extend: {
      icons: {
        pigLogo: "url(/Images/pigLogo.png)",
        menuLogo: "url(/Images/menuSanduich.png)",
      },
    },
  },
  plugins: [],
};
