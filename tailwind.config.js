/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        aura: {
          shell: "#F7F3ED",
          ink: "#302B27",
          cactus: "#7D866E",
          sand: "#E8DED2",
          clay: "#B58C76",
          warm: "#FBF9F5",
        },
      },
      fontFamily: {
        serif: ["Instrument Serif", "Cormorant Garamond", "serif"],
        sans: ["Inter", "DM Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(48, 43, 39, 0.10)",
      },
    },
  },
  plugins: [],
};
