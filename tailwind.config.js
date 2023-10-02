/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html", "./src/*.js", "./src/*ts"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#001f3f",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
