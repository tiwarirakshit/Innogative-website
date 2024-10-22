/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'customblack': '#121214',
      },
      keyframes: {
        expandCircle: {
          '0%': { transform: 'scale(0)', opacity: 0.8 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        }
      },
      animation: {
        'expand-circle': 'expandCircle 0.5s ease-out forwards',
      }
    },
  },
  plugins: [],
}
