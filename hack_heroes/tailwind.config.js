/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      screens: {
        sm: '200px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
    extend: {
      width: {
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
        '10/10': '100%',
      },
      height: {
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
        '10/10': '100%',
      },
      backgroundColor: {
        'navbar-background': 'rgba(234, 237, 240, 0.8)',
        'black-background': 'rgb(22, 22, 24)',
        'grey-background': '#EEEEEE',
        'darkWhite':'#F8F9FD',
        'whiteGray':'#ABB1CE',
        'gray':'#c4c4c4',
        'mainBlue':'#5AB1FA',
        'darkBlue':'#2C3D8F',
        'black':'#1F1F1F',
        'white':'#FFFFFF',
        'whiteBlue':'#CDDEFF'
      },
      backdropBlur: {
        'navbar-blur': '16px'
      }
    },
  },
  plugins: [],
}
