import CTAButton from "./CTAButton";

const navItems = [
  { href: "#experiencias", label: "Experiencias" },
  { href: "#retiro", label: "Retiro" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-aura-clay bg-aura-ivory/95">
      <div className="mx-auto flex max-w-[1380px] items-center justify-between gap-4 px-6 py-5 sm:px-8 lg:px-12">
        <a
          href="#inicio"
          aria-label="AURA Reset Studio, volver al inicio"
          className="font-serif text-lg font-light tracking-[0.02em] text-aura-deepAtlantic"
        >
          AURA <span className="text-aura-stone">Reset Studio</span>
        </a>

        <nav
          className="hidden items-center gap-10 text-[0.84rem] text-aura-deepAtlantic md:flex"
          aria-label="Principal"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="soft-link transition hover:text-aura-olive focus-visible:outline focus-visible:outline-2 focus-visible:outline-aura-olive"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <CTAButton href="#proxima" className="hidden border border-aura-deepAtlantic bg-transparent text-aura-deepAtlantic hover:bg-aura-deepAtlantic hover:text-aura-ivory sm:inline-flex">
          Reservar
        </CTAButton>
        <a
          href="#proxima"
          aria-label="Ir a la próxima experiencia"
          className="border border-aura-deepAtlantic px-4 py-2 text-sm font-medium text-aura-deepAtlantic transition hover:bg-aura-deepAtlantic hover:text-aura-ivory sm:hidden"
        >
          Reservar
        </a>
      </div>
    </header>
  );
}
