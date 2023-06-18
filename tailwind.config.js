/** @type {import('tailwindcss').Config} */
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
      dropShadow: {
        menubutton: '0  0 10px rgb(255 2 169 )',
        hamburger: '0  0 25px rgb(255 2 169 )'
      }
    }
  },
  plugins: []
};
