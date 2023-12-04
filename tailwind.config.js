/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "impact-egg": "#f9f4ed",
        "impact-green": "#006157",
        "impact-black": "#1e1e1e",
        "impact-white": "#fffefa",
      },
    },
  },
  plugins: [],
};
