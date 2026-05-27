export default function Button({ children, href = "#waitlist", variant = "primary", className = "" }) {
  const styles =
    variant === "secondary"
      ? "border border-aura-warm/70 bg-aura-warm/10 text-aura-warm hover:bg-aura-warm hover:text-aura-ink"
      : "border border-aura-ink bg-aura-ink text-aura-warm hover:bg-transparent hover:text-aura-ink";

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-[0.72rem] font-semibold uppercase tracking-[0.22em] transition duration-300 ${styles} ${className}`}
    >
      {children}
    </a>
  );
}
