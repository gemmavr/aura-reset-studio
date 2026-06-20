/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        aura: {
          cal: "#F7F3EB",
          shell: "#F7F3EB",
          softWhite: "#FCFAF6",
          ivory: "#FCFAF6",
          arena: "#DDC9AD",
          linen: "#DDC9AD",
          sand: "#DDC9AD",
          teal: "#438E91",
          cactus: "#438E91",
          olive: "#6F7D45",
          deepAtlantic: "#173E40",
          deep: "#173E40",
          atlantic: "#2F6F86",
          halo: "#F0B45A",
          coral: "#E9785B",
          ink: "#252525",
          lava: "#252525",
          stone: "#746E64",
          clay: "#CBB7A3",
          mist: "#E9F1EE",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Cormorant Garamond", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 60px rgba(62, 59, 53, 0.08)",
        image: "0 24px 70px rgba(62, 59, 53, 0.11)",
      },
      letterSpacing: {
        aura: "0.08em",
      },
    },
  },
  plugins: [],
};
