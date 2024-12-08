/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Lejhro-Header-Section': '#D6932C',
        'Lejhro-Hero-Section': '#F4F4F4',
      },
      width: {
        '30p': '30%',
        '50p': '50%',
        '60p': '60%',
        '70p': '70%',
        '80p': '80%',
        '85p': '85%',
        '90p': '90%',
        '95p': '95%',
        '98p': '98%',
      },
      height: {
        '30p': '30%',
        '50p': '50%',
        '60p': '60%',
        '70p': '70%',
        '80p': '80%',
        '85p': '85%',
        '90p': '90%',
        '95p': '95%',
        '98p': '98%',
      },
    },
  },
  plugins: [],
}