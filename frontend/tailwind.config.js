/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#F4F5F7',
        customAmber: '#FFF3DB',
        custonGrayText: '#333333',
        custonYellow: '#D99F2C',
        custonTextColorBody: '#57575C'
      },
      fontFamily: {
        'museo': ['Museo Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

