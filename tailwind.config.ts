import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        preload: "preload-loading 1.5s infinite ease-in-out",
      },
      colors: {
        background: "#1f2334",
        black: "#000000",
        primary: {
          DEFAULT: "#e65364",
        },
        secondary: {
          DEFAULT: "#f7f8fa",
        },
      },
      fontFamily: {
        leagueSpartan: ["var(--league-spartan)"],
      },
      keyframes: {
        "preload-loading": {
          "0%, 100%": {
            transform: "translate(-52px, 0)",
          },
          "50%": {
            transform: "translate(96px, 0)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
