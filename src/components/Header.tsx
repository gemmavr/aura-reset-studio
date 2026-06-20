import CTAButton from "./CTAButton";

const navItems = [
  { href: "#experiencias", label: "Experiencias" },
  { href: "#proxima", label: "Próxima pausa" },
  { href: "#retiro", label: "Retiro" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-aura-clay/25 bg-aura-softWhite/86 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <a href="#inicio" className="group inline-flex flex-col leading-none">
          <span className="text-base font-semibold tracking-[0.22em] text-aura-deepAtlantic">
            AURA
          </span>
          <span className="mt-1 text-[0.62rem] uppercase tracking-aura text-aura-stone">
            Reset Studio
          </span>
        </a>

        <nav
          className="hidden items-center gap-7 text-sm text-aura-stone md:flex"
          aria-label="Principal"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="soft-link transition hover:text-aura-deepAtlantic focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-aura-atlantic"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <CTAButton href="#proxima" className="hidden sm:inline-flex">
          Ver próxima pausa
        </CTAButton>
        <a
          href="#proxima"
          className="rounded-full border border-aura-atlantic/30 px-4 py-2 text-sm font-semibold text-aura-deepAtlantic transition hover:-translate-y-0.5 hover:bg-white sm:hidden"
        >
          Reservar
        </a>
      </div>
    </header>
  );
}
