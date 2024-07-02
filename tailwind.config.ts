import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#159b9a",
        primaryLight: "#4dfffe",
        blue: "#000099",
        secondary: "#000",
      },
      fontFamily: {
        dos: ["var(--font-dos)"],
      },
    },
  },
  plugins: [],
};
export default config;
