/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#44E64B",
      },
      textColor: {
        primary: "#44E64B",
      },
      borderColor: {
        primary: "#44E64B",
      },
    },
  },
  plugins: [],
};
