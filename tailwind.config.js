/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./types/*.ts",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Verdana', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        'primary': 'rgb(144, 144, 144)',
        'created': '#5e5e5e',
        'invited': 'rgba(144, 144, 144, 80%)',
        'inprogress': '#eaa844',
        'submitted': '#2bbea8',
        'pending': '#f16b6b',
        'completed': 'rgba(144, 144, 144, 80%)',

      },
      boxShadow: {
        light: '0px 0px 10px rgb(0 0 0 / 5%)'
      }
    },
  },
  plugins: [],
}
