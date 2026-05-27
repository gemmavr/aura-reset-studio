import { useEffect, useState } from "react";

const links = [
  ["experience", "#experience"],
  ["about", "#about"],
  ["join", "#waitlist"],
];

function LanguageToggle({ language, onLanguageChange, compact = false }) {
  return (
    <div
      className={`inline-flex rounded-full border border-current/35 bg-aura-warm/10 p-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] ${
        compact ? "w-fit" : ""
      }`}
      aria-label="Language selector"
    >
      {["es", "en"].map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => onLanguageChange(code)}
          className={`rounded-full px-3 py-2 transition ${
            language === code ? "bg-aura-clay text-aura-warm" : "opacity-65 hover:opacity-100"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}

export default function Header({ copy, language, onLanguageChange }) {
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
          ? "bg-aura-shell/92 text-aura-ink shadow-[0_1px_0_rgba(48,43,39,0.08)] backdrop-blur"
          : "bg-transparent text-aura-warm"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#top" className="text-sm font-semibold tracking-[0.36em]">
          AURA
        </a>
        <div className="hidden items-center gap-10 md:flex">
          {links.map(([key, href]) => (
            <a key={key} href={href} className="text-sm transition hover:opacity-65">
              {copy[key]}
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <LanguageToggle language={language} onLanguageChange={onLanguageChange} />
        </div>
        <a
          href="#waitlist"
          className={`hidden rounded-full border px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] transition md:inline-flex ${
            scrolled
              ? "border-aura-ink text-aura-ink hover:bg-aura-ink hover:text-aura-warm"
              : "border-aura-warm/75 text-aura-warm hover:bg-aura-warm hover:text-aura-ink"
          }`}
        >
          {copy.waitlist}
        </a>
        <button
          type="button"
          aria-label={copy.menu}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-current/45 md:hidden"
        >
          <span className={`h-px w-5 bg-current transition ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-px w-5 bg-current transition ${isOpen ? "opacity-0" : ""}`} />
          <span className={`h-px w-5 bg-current transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>
      <div
        aria-hidden={!isOpen}
        className={`grid overflow-hidden bg-aura-shell px-5 text-aura-ink transition-all duration-300 md:hidden ${
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
            <LanguageToggle language={language} onLanguageChange={onLanguageChange} compact />
            <a
              href="#waitlist"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex w-fit rounded-full bg-aura-ink px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-aura-warm"
            >
              {copy.waitlist}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
