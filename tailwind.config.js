/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        sm: '0.750rem',
        base: '1rem',
        xl: '1.333rem',
        '2xl': '1.777rem',
        '3xl': '2.369rem',
        '4xl': '3.158rem',
        '5xl': '4.210rem',
      },
      fontFamily: {
        heading: 'Red Hat Text',
        body: 'Red Hat Text',
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
      colors: {
        'text': '#15071b',
        'background': '#fcf9fe',
        'primary': '#2c0c34',
        'secondary': '#c596d9',
        'accent': '#b562d9',
       },
       backgroundImage: {
        'cuban1': "url('./assets/bg-image/Cuban1.jpg')",
      }
    },
  },
  plugins: [],
}