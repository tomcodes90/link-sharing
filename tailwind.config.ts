import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    colors: {
      purple: "#633CFF",
      "purple-light": "#BEADFF",
      "purple-very-light": "#EFEBFF",
      black: "#333333",
      gray: "#737373",
      "gray-light": "#D9D9D9",
      "gray-very-light": "#FAFAFA",
      white: "#FFFFFF",
      red: "#FF3939",
    },
  },
  plugins: [],
};
export default config;
