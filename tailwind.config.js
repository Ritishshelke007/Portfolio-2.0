/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        mulish: ["Mulish"],
      },
      keyframes: {
        "spin-slow": {
          to: {
            transform: "rotate(360deg)",
          },
        },
        scrollUp: {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(-78%)",
          },
        },
      },
      animation: {
        "spin-slow": "spin-slow 9s linear infinite",
        scrollUp: "scrollUp 8s ease-in forwards",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
