module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '80p': '80%', // Add this line
        'fill-available': '-webkit-fill-available',
      },
      fontFamily: {
        'bender': ['Bender', 'sans-serif'],
      },
      fontWeight: {
        'light': 300,
        'normal': 400,
        'bold': 700,
        'black': 900,
      },
      colors: {
        'dark-gray': '#1a1a1a',
        'light-gray': '#2e2e2e',
        'primary': '#e3342f',
        'secondary': '#f6993f',
      },
    },
  },
  plugins: [],
}
