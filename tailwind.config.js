/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      screens: {
        hp: "360px",
      },
    },
  },
  plugins: [],
};
