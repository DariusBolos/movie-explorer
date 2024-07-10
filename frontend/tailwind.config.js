const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/primeng/**/*.{html,js,ts,css}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner-background": url('/frontend/public/images/landing-background.webp')
      }
    },
  },
  plugins: [],
}

