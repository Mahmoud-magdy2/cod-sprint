/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f2ff",
          100: "#e6ebff",
          200: "#cdd7ff",
          300: "#a8b9ff",
          400: "#7c8eff",
          500: "#465DDE",
          600: "#3d4fb3",
          700: "#35428a",
          800: "#2d3561",
          900: "#252d4a",
        },
      },
      fontFamily: {
        sans: ["Titillium Web", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
