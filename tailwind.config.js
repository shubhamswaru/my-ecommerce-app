/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // You will add your custom colors here
      colors: {
        primary: '#0070f3', // Example: A nice blue
        secondary: '#1a1a1a', // Example: A dark gray for text
        accent: '#ff4081', // Example: A pink accent
        lightgray: '#f5f5f5', // Example: A light background color
      }
    },
  },
  plugins: [],
};