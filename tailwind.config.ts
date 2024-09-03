import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      minWidth: {
        "88": "22rem",
        "112": "28rem",
        "120": "30rem",
        "128": "32rem",
      },
      minHeight: {
        "88": "22rem",
        "112": "28rem",
        "120": "30rem",
        "128": "32rem",
      },
      width: {
        "88": "22rem",
        "112": "28rem",
        "120": "30rem",
        "128": "32rem",
      },
      height: {
        "88": "22rem",
        "112": "28rem",
        "120": "30rem",
        "128": "32rem",
      },
      colors: {
        "dark-background": "#191A1D",
        "medium-light-grey": "#C2C2C2",
        "nav-bar-link": "#7E8387",
        teal: "#009688",
        "ligter-teal": "#26a69a",
        "dark-gray": "#1F1F1F",
        html: "#E44D26",
        css: "#264DE4",
        javascript: "#F0DB4F",
        react: "#61DAFB",
        flutter: "#5FC8F8",
        nodejs: "#68A063",
        aspnet: "#7554E6",
        blockchain: "#F0B90B",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
