/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        aura: {
          cal: "#E8E4DC",
          shell: "#E8E4DC",
          softWhite: "#EDE9E0",
          ivory: "#E8E4DC",
          arena: "#D6CDBE",
          linen: "#E1DCD2",
          sand: "#C9C2B4",
          teal: "#438E91",
          cactus: "#438E91",
          olive: "#6F7D45",
          deepAtlantic: "#2B2823",
          deep: "#2B2823",
          atlantic: "#2F6F86",
          halo: "#F0B45A",
          coral: "#E9785B",
          ink: "#2B2823",
          lava: "#2B2823",
          stone: "#5A554C",
          clay: "#C9C2B4",
          mist: "#DFDACF",
        },
      },
      fontFamily: {
        serif: ["Fraunces", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 60px rgba(43, 40, 35, 0.08)",
        image: "0 28px 80px rgba(43, 40, 35, 0.14)",
      },
      letterSpacing: {
        aura: "0.08em",
      },
    },
  },
  plugins: [],
};
