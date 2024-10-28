/** @type {import('tailwindcss').Config} */
export default {
  content: [   "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#636ae8',
      'grey':'#171a1f',
      'hcolor':'#4850e4',
      'acolor':'#2c35e0ff'
      

    },
    extend: {
      screens: {
        'xs': '300px'
      }
    },
  },
  plugins: [],
}

