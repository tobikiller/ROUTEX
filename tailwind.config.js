/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        NeueLeiden: ['NeueLeiden'],
      }, 
      colors: {
        'MetroriteBlack': ['#20201F'],
        'CreamyWhite': ['#EFEFC8'],
        'RedOrange': ['#D45227'],
        'BabyPowder': ['#FFFFFC']
      }
      
    },
  },
  plugins: [],
}
