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
        amber: {
          gold: "#C9922A",
          light: "#E8B86D",
          muted: "#F0D9A8",
        },
        burgundy: {
          DEFAULT: "#7B2242",
          dark: "#5A1830",
          light: "#A33D60",
        },
        cream: {
          DEFAULT: "#FAF6EE",
          warm: "#F5EDD9",
          border: "#E8DCC8",
        },
        brown: {
          DEFAULT: "#3D2010",
          light: "#6B3E26",
        },
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
