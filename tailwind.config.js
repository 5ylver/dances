/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        artist: "url('./src/assets/artist.png')",
      },
    },
  },
  plugins: [],
};
