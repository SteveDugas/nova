/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Verdana', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        'primary': 'rgb(144, 144, 144)',
      },
      boxShadow: {
        light: '0px 0px 10px rgb(0 0 0 / 5%)'
      }
    },
  },
  plugins: [],
}
