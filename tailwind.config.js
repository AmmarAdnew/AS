/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust this pattern based on where your components are located
  ],
  theme: {
    extend: {
      colors: {
        primary:{ 
        DEFAULT: "#0e5a85",
          100: "#cfdee7",
          200: "#9fbdce",
          300: "#6e9cb6",
          400: "#3e7b9d",
          500: "#0e5a85",
          600: "#0b486a",
          700: "#083650",
          800: "#062435",
          900: "#03121b"
            },
        secondary: {
          DEFAULT: "#edd44a",
          100: "#fbf6db",
          200: "#f8eeb7",
          300: "#f4e592",
          400: "#f1dd6e",
          500: "#edd44a",
          600: "#beaa3b",
          700: "#8e7f2c",
          800: "#5f551e",
          900: "#2f2a0f"
            },
        neutral: {
          DEFAULT: "#8bbcad",
          100: "#e8f2ef",
          200: "#d1e4de",
          300: "#b9d7ce",
          400: "#a2c9bd",
          500: "#8bbcad",
          600: "#6f968a",
          700: "#537168",
          800: "#384b45",
          900: "#1c2623"
          }, // Corrected spelling
        accent: "#FFD814",
        error: "#ff0000",
      },
      fontFamily: {
        sans: ["poppins", "sans-serif"],
        AddisFont: "cursive", // Corrected syntax
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
