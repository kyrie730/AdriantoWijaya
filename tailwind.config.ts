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
        background: "#000000",
        black: "#000000",
        primary: {
          DEFAULT: "#c6a548",
          light: "#d7c07e",
          dark: "#004EA3",
        },
      },
      fontFamily: {
        lato: ["var(--font-lato)"],
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
