/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#1e3a8a', dark: '#0f1638', light: '#2d52b8' },
        saffron: { DEFAULT: '#f97316', dark: '#ea580c', light: '#fb923c' },
        teal: { DEFAULT: '#0d9488', dark: '#0f766e' },
      },
      animation: {
        ticker: 'ticker 40s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out both',
        'fade-in': 'fadeIn 0.4s ease-out both',
      },
      keyframes: {
        ticker: { '0%': { transform: 'translateX(100%)' }, '100%': { transform: 'translateX(-100%)' } },
        fadeUp: { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
      },
    },
  },
  plugins: [],
}
