import { useEffect, useState } from "react";

const links = [
  ["method", "#metodo"],
  ["experiences", "#experiencias"],
  ["place", "#las-palmas"],
  ["journal", "#journal"],
];

export default function Header({ copy }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled || isOpen
          ? "bg-aura-softWhite/88 text-aura-ink shadow-[0_1px_0_rgba(37,37,37,0.08)] backdrop-blur-md"
          : "bg-transparent text-aura-ink"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8 lg:px-10">
        <a href="#top" className="text-xs font-semibold tracking-[0.22em] sm:text-sm sm:tracking-[0.3em]">
          AURA RESET STUDIO
        </a>
        <div className="hidden items-center gap-10 md:flex">
          {links.map(([key, href]) => (
            <a key={key} href={href} className="text-sm transition hover:opacity-65">
              {copy[key]}
            </a>
          ))}
        </div>
        <a
          href="#waitlist"
          className={`hidden rounded-[0.85rem] border px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] transition md:inline-flex ${
            scrolled
              ? "border-aura-teal text-aura-ink hover:bg-aura-teal hover:text-aura-softWhite"
              : "border-aura-ink/35 text-aura-ink hover:bg-aura-teal hover:text-aura-softWhite"
          }`}
        >
          {copy.waitlist}
        </a>
        <button
          type="button"
          aria-label={copy.menu}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-[0.85rem] border border-current/35 md:hidden"
        >
          <span className={`h-px w-5 bg-current transition ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-px w-5 bg-current transition ${isOpen ? "opacity-0" : ""}`} />
          <span className={`h-px w-5 bg-current transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>
      <div
        aria-hidden={!isOpen}
        {...(!isOpen ? { inert: "" } : {})}
        className={`grid overflow-hidden bg-aura-softWhite px-5 text-aura-ink transition-all duration-300 md:hidden ${
          isOpen ? "grid-rows-[1fr] border-t border-aura-ink/10" : "pointer-events-none invisible grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <div className="flex flex-col gap-5 py-6">
            {links.map(([key, href]) => (
              <a key={key} href={href} onClick={() => setIsOpen(false)} className="text-2xl font-serif">
                {copy[key]}
              </a>
            ))}
            <a
              href="#waitlist"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex w-fit rounded-full bg-aura-deepAtlantic px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-aura-softWhite"
            >
              {copy.waitlist}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
