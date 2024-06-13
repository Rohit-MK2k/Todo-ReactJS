/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '-45': '-45deg',
        '135': '135deg',
        '-135': '-135deg',
      },
      translate: {
        '-2': '-0.5rem'
      }
    },
  },
  plugins: [],
}

