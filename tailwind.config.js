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
      },
      animation: {
        "spin-slow": "spin-slow 9s linear infinite", // Adjust the duration as needed
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
