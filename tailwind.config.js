/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0A2342", // Dark blue
          light: "#1E3A8A",   // Medium blue
          bright: "#3B82F6",  // Light/bright blue
        },
        surface: {
          light: "#F5F7FA",
          dark: "#0F172A",
        },
        neutral: {
          soft: "#CBD5E1",
          white: "#FFFFFF",
        },
        success: "#16A34A",
        warning: "#FACC15",
        danger: "#DC2626",
      },

      backgroundImage: {
        "gradient-primary-light":
          "linear-gradient(to bottom right, #F8FAFC 0%, #FFFFFF 50%, #EFF6FF 100%)",
          
          
        "gradient-primary-dark":
          "linear-gradient(135deg, #0A2342 0%, #1E3A8A 50%, #3B82F6 100%)",

        "gradient-dark":
          "linear-gradient(180deg, #0A2342 0%, #0F172A 100%)",

        "gradient-card":
          "linear-gradient(145deg, #3B82F6 0%, #1E3A8A 100%)",
      },
    },
  },
  plugins: [],
};