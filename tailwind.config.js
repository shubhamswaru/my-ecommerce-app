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
        primary: '#0070f3', 
        secondary: '#1a1a1a', 
        accent: '#ff4081', 
        lightgray: '#f5f5f5', 
      }
    },
  },
  plugins: [],
};