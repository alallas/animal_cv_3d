/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#160D05",
        secondary: "#C3B0A6",
        tertiary: "#301D10",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        brown: "#180E03",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg 1.png')",
      },
    },
  },
  plugins: [],
}

