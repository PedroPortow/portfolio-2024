/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Tight', 'sans-serif'], // Replace 'Inter Tight' with the correct font name if different
      },
      colors: {
        light: '#FBFBFB',
        "darker-gray": "#f2f2f2",
        "strong-black": '#101828', // Your custom text color
        "light-gray": "#475467",
        "monotone-gray": "#d7d7d7"
      },
      height: {
        "720": "720px"
      }
    },
  },
  plugins: [],
}
