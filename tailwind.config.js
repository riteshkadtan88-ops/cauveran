/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F1EBDD',
        charcoal: '#24231F',
        gold: '#A7834F',
        stone: '#B9A994',
        brown: '#655746',
        paper: '#F7F3EA',
        sand: '#E7DFCE',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: { site: '1440px' },
      transitionTimingFunction: { lux: 'cubic-bezier(.22,.61,.36,1)' },
    },
  },
  plugins: [],
};
