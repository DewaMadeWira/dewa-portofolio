/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        black: "#010001",
        white: "#FFFFFF",
        blue: "#0A00F7",
        orange: "#F75500",
      },
      // fontFamily: {
      //     dm: ['DM Sans', 'sans-serif'],
      //     jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      // },
    },
  },
  plugins: [],
};
