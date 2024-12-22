/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        input: "#343A40", // Adding the custom color for bg-input
      },
    },
  },
  plugins: [],
};
