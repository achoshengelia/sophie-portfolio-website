/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        black: '#000',
        purple: '#FF02A9',
        'light-grey': '#F5F5F5',
        grey: '#D9D9D9BF'
      },
      fontFamily: {
        sans: ['Sporting Grotesque_Regular', 'Inter', 'Helvetica', 'Arial', 'sans-serif']
      },
      textShadow: {
        link: '0 0 20px #FF02A9, 0 0 20px  #FF02A9, 0 0 20px #FF02A9 '
      }
    }
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'text-shadow': value => ({
            textShadow: value
          })
        },
        { values: theme('textShadow') }
      );
    })
  ]
};
