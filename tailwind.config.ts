import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightOrange:"#FE6E44",

darkorange:"rgb(255,77,17)",

lightText:"#888888",

accent:"#000000",

accentWhite:"#FFFFFF",

grey:"#F4F5F7",

lightGreen:"#41CE09",

bgLight: "#FSFSFS",
lightestGrey: "#f9f9f9",
brown:"#B88E2F",
pink:"#F9F1E7",
red:"#E97171",
green:"#2EC1AC",
lightpink:"#F9F1E7",
lpink:"#FAF3EA",
lgpink:"#FCF8F3",


      },
    },
  },
  plugins: [],
} satisfies Config;