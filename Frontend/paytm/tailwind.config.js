/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paytm: {
          DEFAULT: '#00baf2', // Paytm blue,
          light: '#E5F7FF',  // Light blue,
          lighter: '#80D4FF',
        },
      },
    },
  },
  plugins: [],
}