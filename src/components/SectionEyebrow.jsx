export default function SectionEyebrow({ children, light = false }) {
  return (
    <p
      className={`mb-5 text-[0.72rem] font-semibold uppercase tracking-[0.28em] ${
        light ? "text-aura-warm/80" : "text-aura-cactus"
      }`}
    >
      {children}
    </p>
  );
}
