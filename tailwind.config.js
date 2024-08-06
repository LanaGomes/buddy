/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: {
        1: "#224667",
        2: "#1A2437",
        3: "#E0F2F5",
      },

      red: {
        strong: "#DD466A",
        light: "#EFD7D7",
      },

      darkgreen: "#3B7E7E",
      radiantGreen: "#41EBAE",

      white: {
        almostWhite: "#F5F4F4",
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
