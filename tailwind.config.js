/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        move: {
          "50%": { transform: "translateY(-1rem)" },
        },
      },
      animation: {
        movingY: "move 3s linear infinite",
      },
    },
  },
  plugins: [],
};
