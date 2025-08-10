/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background_light: {
          50: "#F2F2F7",
          100: "#FFFFFF",
          200: "#E5E5EA",
          300: "#D1D1D6",
          400: "#C7C7CC",
          500: "#AEAEB2",
          600: "#8E8E93"
        },
        background_dark: {
          50: "#101010",
          100: "#1C1C1E",
          200: "#2C2C2E",
          300: "#3A3A3C",
          400: "#48484A",
          500: "#636366",
          600: "#8E8E93"
        },
        brand_blue: {
          50: "#f2f8ff",
          100: "#C1DFFF",
          200: "#91C5FF",
          300: "#60ACFF",
          400: "#3093FF",
          500: "#007AFF",
          600: "#0061CC",
          700: "#004999",
          800: "#003066",
          900: "#001832"
        },
      },
      keyframes: {
        "gradient-x": {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "gradient-x": "gradient-x 10s ease infinite",
      },
    },
  },
  plugins: [],
};