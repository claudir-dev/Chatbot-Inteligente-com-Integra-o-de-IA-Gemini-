import { transform } from "next/dist/build/swc";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screen: {
        fhd: '1920px'
      },
      keyframes: {
        flutuar: {
          '0%': {
            transform: 'translateY(0)'
          }, '50%': {
            transform: 'translateY(-15px)'
          }, '100%': {
            transform: 'translateY(0)'
          },
        },
      },
      animation: {
          flutuar: ' flutuar 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}