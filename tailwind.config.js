// tailwind.config.js
module.exports = {
  content: [
    './source/presentation/pages/**/*.{js,ts,jsx,tsx}',
    './source/presentation/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily:{
      poppins: ["var(--poppins)"]
    },
    extend: {
      colors:{
        darkGreen: "#004238",
        lightGreen: "#3DCCB7",
        mediumGreen: "#00C3A5",
        lightBg: "#F7F9F9",
        mediumBg: "#D6F8F3"
      } 
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
