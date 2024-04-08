import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: {
          dark: "hsl(21, 100%, 11%)",
          light: "hsl(0, 0%, 100%)",
          darkGray: "hsl(22, 17%, 41%)",
          lightGray: "hsl(0, 0%, 98%)",
          lightAccent: "hsl(8, 82%, 64%)",
          bgDark: "hsl(237, 22%, 20%)",
          bgLight: "hsl(21, 84%, 95%)",
        },
        screens: {
          xs: "400px",
        },
        maxWidth: {
          "10xl": "1512px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
