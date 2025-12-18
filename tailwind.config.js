/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#05070a",
        primary: {
          DEFAULT: "#f59e0b", // Amber/Gold
          foreground: "#000000",
        },
        accent: {
          DEFAULT: "#0ea5e9", // Sky/Cyan
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "#0f172a", // Slate 900
          foreground: "#ffffff",
          border: "#1e293b", // Slate 800
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}

