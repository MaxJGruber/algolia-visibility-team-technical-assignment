import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "blue-gradient":
          "linear-gradient(138deg, rgba(118, 160, 255, 0.7) 0%, rgba(0, 61, 255, 0.7) 25.08%, rgba(151, 71, 255, 0.7) 56.38%, rgba(118, 160, 255, 0.7) 100%)",
        "secondary-gradient":
          "linear-gradient(138deg, rgba(187, 209, 255, 0.2) 0%, rgba(118, 160, 255, 0.2) 25.08%, rgba(226, 167, 255, 0.2) 56.38%, rgba(187, 209, 255, 0.2) 100%)",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      colors: {
        "xenon-900": "#000033",
        "xenon-600": "#003DFF",
        "xenon-400": "#457AFF",
      },
    },
  },
  plugins: [],
};
export default config;
