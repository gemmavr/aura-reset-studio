export default function ImageSlot({ src, label, className = "" }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative flex items-end overflow-hidden border border-aura-ink/10 bg-aura-softWhite text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-aura-softWhite ${className}`}
    >
      <img
        src={src}
        alt={label}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-aura-ink/34 via-aura-ink/4 to-transparent" />
      <span className="relative m-4 rounded-full bg-aura-ink/34 px-3 py-2 backdrop-blur-sm">{label}</span>
    </div>
  );
}
