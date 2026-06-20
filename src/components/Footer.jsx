export default function Footer({ copy }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-aura-softWhite px-5 py-14 text-aura-ink sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-aura-ink/10 pt-10 lg:grid-cols-[1fr_1fr_auto] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.32em]">AURA RESET STUDIO</p>
          <p className="mt-4 max-w-md font-serif text-3xl italic text-aura-deepAtlantic sm:text-4xl">{copy.tagline}</p>
          <p className="mt-6 text-sm text-aura-teal">{copy.location}</p>
        </div>
        <p className="max-w-md text-sm leading-7 text-aura-stone">{copy.note}</p>
        <div className="flex flex-col gap-3 text-sm text-aura-ink/68 lg:text-right">
          {copy.links.map((link) => (
            <a key={link} href={link === "Contacto" ? "mailto:hello@auraresetstudio.com" : "#top"} className="transition hover:text-aura-teal">
              {link}
            </a>
          ))}
          <span>© {year} Aura Reset Studio</span>
        </div>
      </div>
    </footer>
  );
}
