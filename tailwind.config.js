/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'playfair': ['Playfair Display', 'serif'],
        'work': ['Work Sans', 'sans-serif'],
        'roboto': ['Roboto Mono', 'monospace'],
        'open': ['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

