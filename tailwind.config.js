/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '6.5xl': '4rem',
      },
      borderRadius: {
        'large': '10px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      maxHeight: {
        '68': '17rem',
      },
      
      maxWidth: {
        'xs': '374px',
        '1/2': '50%',
      },
      colors: {
        'primary': '#8456EC',
        'primary-light': '#E87BF8',
        'secondary': '#240D57',
        'body': '#F6F2FF',
        'secondary-light': '#828282',
        'light-gray': '#DDDDDD',
        'dark-gray': '#4F4F4F'

      }
    },
  },
  plugins: [],
}
