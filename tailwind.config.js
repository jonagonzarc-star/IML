/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#17202a',
        mint: '#27c7a0',
        coral: '#ff6b6b',
        sun: '#f6c85f',
        sky: '#3da5d9',
        grape: '#7c5cff',
      },
      boxShadow: {
        soft: '0 18px 50px rgba(23, 32, 42, 0.12)',
      },
    },
  },
  plugins: [],
};
