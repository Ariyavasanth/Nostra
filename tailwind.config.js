/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}"];
export const theme = {
  extend: {
    appearance: ['none'],
  },
};
export const plugins = {
  tailwindcss: {},
  autoprefixer: {},
};

