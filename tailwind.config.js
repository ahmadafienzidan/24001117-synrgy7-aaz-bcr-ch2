/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Helvetica",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
