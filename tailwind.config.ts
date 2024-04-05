import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          100: "#D9F0FB", // light blue
          200: "#D3E0E7", // light gray blue
          500: "#2DA7DD", // primary blue
        },
        dark: {
          800: "#020E14", // almost black
          700: "#04202e",
        },
        light: {
          100: "#F7F7F7", // light gray
          200: "#F5F5F5", // light gray
          300: "#E5E5E5", // light gray
        },
        accent: {
          400: "#2dddba", // cyan green
          600: "#2d50dd", // navy blue
          700: "#1a3dc5",
          800: "#001ca8", // darker blue
        },
        darkmode: {
          900: "#121212",
          800: "#1D1D1D",
          700: "#222222",
          600: "#252525",
          500: "#2C2C2C",
          400: "#323232",
          300: "#383838",
        },
      },
      fontFamily: {
        // inter: ["var(--font-inter)"],
        josefin: ["var(--font-josefin)"],
        outfit: ["var(--font-outfit)"],
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
}
export default config
