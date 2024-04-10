/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    darkMode: ['selector', '[data-mode="dark"]'],
    extend: {},
  },
  plugins: [],
}