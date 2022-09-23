/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-1': '#ed6a5a',
        'primary-2': '#f4f1bb',
        'secondary-1': '#9bc1bc',
        'secondary-2': '#5ca4a9',
        'neutral-1': '#e6ebe0',
      },
    },
  },
  plugins: [],
}
