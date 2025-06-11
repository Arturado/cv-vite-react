/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a',
        secondary: '#4c1d95',
        accent: '#facc15',
        base: '#f9fafb',
        textDark: '#1f2937',
      },
    },
  },
  plugins: [],
}
