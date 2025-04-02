/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#0f75bd",
        secondary: "#25C8F6",
        success: "#00a854",
        warning: "#f04134",
        tab: "#25509A",
        customOrange: "#E47E1A",
        answerbg: "#D7D8D9",
      },
    },
  },
  plugins: [],
};
