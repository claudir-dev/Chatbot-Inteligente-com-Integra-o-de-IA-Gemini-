/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        fhd: '1920px',
      },
      keyframes: {
        flutuar: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        flutuar: 'flutuar 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}