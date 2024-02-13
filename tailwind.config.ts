import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textChangeNegative: {
        "color":"fff",
        "text-shadow":"3px 3px 0 #000,-3px 3px 0 #000,-3px -3px 0 #000,3px -3px 0 #000;"
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-border": {
          textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
        },
      };
      addUtilities(newUtilities);
    },
  ],
  
};
export default config;
