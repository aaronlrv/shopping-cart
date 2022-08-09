/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        faster: ["Faster One", "cursive"],
        blaka: ["Blaka", "cursive"],
        kelly: ["Kelly Slab", "cursive"],
        chinese: ["ZCOOL QingKe HuangYou", "cursive"],
      },
    },
  },
  plugins: [],
};
