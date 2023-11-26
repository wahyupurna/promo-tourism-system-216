/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Poppins"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
