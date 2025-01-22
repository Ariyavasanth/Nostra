/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      appearance: ['none'],
    },
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}

