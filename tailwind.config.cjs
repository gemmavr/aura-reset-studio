/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        aura: {
          cal: "var(--color-bg)",
          shell: "var(--color-bg)",
          softWhite: "var(--color-surface)",
          ivory: "var(--color-bg)",
          arena: "var(--color-divider)",
          linen: "var(--color-bg-soft)",
          sand: "var(--color-divider)",
          teal: "var(--color-accent)",
          cactus: "var(--color-accent)",
          olive: "var(--color-accent)",
          deepAtlantic: "var(--color-ink)",
          deep: "var(--color-ink)",
          atlantic: "var(--color-ink)",
          halo: "var(--color-divider)",
          coral: "var(--color-error)",
          ink: "var(--color-ink)",
          lava: "var(--color-ink)",
          stone: "var(--color-muted)",
          clay: "var(--color-divider)",
          mist: "var(--color-bg-soft)",
          cta: "var(--color-cta)",
          ctaText: "var(--color-cta-text)",
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
