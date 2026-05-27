export default function Footer({ copy }) {
  return (
    <footer className="bg-aura-ink px-5 py-14 text-aura-warm sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.32em]">AURA RESET STUDIO</p>
          <p className="mt-4 text-sm text-aura-warm/62">{copy.signature}</p>
          <p className="mt-8 font-serif text-4xl italic text-aura-warm">{copy.mantra}</p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-aura-warm/68 md:text-right">
          <span>{copy.location}</span>
          <a href="https://www.instagram.com/" className="transition hover:text-aura-warm">
            {copy.instagram}
          </a>
          <a href="mailto:hello@auraresetstudio.com" className="transition hover:text-aura-warm">
            {copy.email}
          </a>
          <a href="#waitlist" className="transition hover:text-aura-warm">
            {copy.waitlist}
          </a>
        </div>
      </div>
    </footer>
  );
}
