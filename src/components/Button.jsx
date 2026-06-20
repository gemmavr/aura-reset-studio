export default function Button({ children, href = "#waitlist", variant = "primary", className = "" }) {
  const styles =
    variant === "secondary"
      ? "border border-current bg-transparent text-current hover:-translate-y-0.5 hover:bg-aura-softWhite/55"
      : "border border-aura-deepAtlantic bg-aura-deepAtlantic text-aura-softWhite hover:-translate-y-0.5 hover:border-aura-teal hover:bg-aura-teal";

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-[0.68rem] font-semibold uppercase tracking-[0.22em] transition duration-300 ${styles} ${className}`}
    >
      {children}
    </a>
  );
}
