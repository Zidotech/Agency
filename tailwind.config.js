/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        BodyBg: "rgba(40, 41, 62, 1)",
        BodyBg2: "rgba(253, 240, 233, 1)",
        Text_Light_Accent: "rgba(239, 109, 88, 1)",
        Text_Dark_Accent: "rgba(239, 109, 88, 1)",
        Text_Light: "rgba(255, 255, 255, 1)",
        Text_Dark: "rgba(57, 20, 0, 1)",
        Text_Light_Gray: "rgba(255, 255, 255, 0.64)",
        Text_Dark_Gray: "rgba(57, 20, 0, 0.64)",
        Border_Line: "rgba(243, 209, 191, 1)",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
