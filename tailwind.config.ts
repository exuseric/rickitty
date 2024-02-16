import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#fca311',
        'secondary': '#4a71c4',
        'light-primary': '#f2c782',
        'light-secondary': '#82a6f2',
        'dark-primary': '#3e2e14',
        'dark-secondary': '#14213d',
        'black': '#000000'
      },
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
        serif: ['Inter', 'serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
