/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, rgba(2, 0, 36, 1) 0%, rgba(36, 60, 79, 1) 1%, rgba(36, 58, 77, 1) 7%, rgba(29, 94, 116, 1) 43%, rgba(18, 151, 179, 1) 100%)'
      }
    },
  },
  plugins: [],
}

