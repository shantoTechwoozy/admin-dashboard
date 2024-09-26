import { keepTheme } from "keep-react/keepTheme";
import type { Config } from "tailwindcss";
import { colors } from "keep-react/keepTheme";

const colorsPalette = {
  ...colors,
  success: {
    //... 25 - 900
  },
  warning: {
    //... 25 - 900
  },
  error: {
    //... 25 - 900
  },
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#F6931D",
        secondary: "#0C254D",
      },
    },
  },
  plugins: [],
};

export default keepTheme(config, colorsPalette);
