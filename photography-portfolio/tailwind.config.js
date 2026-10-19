
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#100d0b",
        surface: "#1b1612",
        elevated: "#28201a",
        coffee: "#49362a",
        bronze: "#a47b55",
        gold: "#d5ad80",
        cream: "#f1e9df",
        muted: "#a99b8d",
        outline: "#3a3028",
      },
      fontFamily: {
        sans: [
          "Inter",
          "Arial",
          "sans-serif",
        ],
        display: [
          "Georgia",
          "Times New Roman",
          "serif",
        ],
      },
      maxWidth: {
        content: "1440px",
      },
      keyframes: {
        fadeUp: {
          from: {
            opacity: "0",
            transform: "translateY(24px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fadeUp 700ms ease-out both",
        "fade-in": "fadeIn 400ms ease-out both",
      },
    },
  },
  plugins: [],
};
