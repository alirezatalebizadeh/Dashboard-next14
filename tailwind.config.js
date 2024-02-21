/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "bg-hover":"#2e374a",
        "textSoft":"#b7bac1",
        "text":"#fff",
        "bgSoft":"#182237",
        "bg":"#151c2c",
      }
    },
  },
  plugins: [],
}