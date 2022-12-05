/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      screens: {
        '2xl': '1040px',
      },
    },
    extend: {
      colors: {
        Blue: {
          50: '#E5F1FF',
          100: '#CCE4FF',
          200: '#99C9FF',
          300: '#66ADFF',
          400: '#3392FF',
          500: '#60AAFF',
          600: '#005FCC',
          700: '#004799',
          800: '#003066',
          900: '#001833',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
