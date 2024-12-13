import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    boxShadow: {
      'draggable-me': '20px 30px 150px 10px rgba(2, 6, 24, 0.8);', 
    }
  },
  plugins: [],
};

export default config;