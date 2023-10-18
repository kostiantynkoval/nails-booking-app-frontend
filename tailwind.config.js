/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif']
    },
    extend: {
      colors: {
        primaryColor: "#0067FF",
        yellowColor: "#FEB60D",
        purpleColor: "#9771FF",
        irisBlueColor: "#01B5C5",
        headingColor: "#181A1E",
        textColor: "#4E545F",
        fadeBgColor: "#00000084",
      },
      boxShadow: {
        panelShadow: "rgba(17, 12, 46, 0.15) 0 48px 100px 0",
      }
    },
  },
  plugins: [],
}