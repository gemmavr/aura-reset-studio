import SectionEyebrow from "./SectionEyebrow.jsx";
import ImageSlot from "./ImageSlot.jsx";

export default function Pillars({ copy }) {
  return (
    <section id="metodo" className="reveal scroll-mt-24 bg-aura-softWhite px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-y border-aura-ink/10 py-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <div>
            <SectionEyebrow>EL MÉTODO</SectionEyebrow>
            <h2 className="font-serif text-5xl leading-[1.02] sm:text-7xl lg:text-8xl">
              {copy.title}
            </h2>
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-aura-ink/70">
            {copy.subtitle}
          </p>
        </div>
        <div className="relative mt-10 md:mt-12">
          <div className="absolute left-0 top-8 hidden h-px w-full bg-gradient-to-r from-aura-halo via-aura-teal to-aura-deepAtlantic/20 md:block" />
          <div className="grid gap-12 md:grid-cols-4">
          {copy.items.map((pillar) => (
            <article
              key={pillar.title}
              className="group border-t border-aura-ink/15 pt-8 md:border-t-0 md:pt-16"
            >
              <span className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full border border-aura-teal/35 bg-aura-softWhite text-xs font-semibold tracking-[0.18em] text-aura-teal">
                {pillar.number}
              </span>
              <h3 className="font-serif text-4xl uppercase text-aura-ink transition group-hover:text-aura-teal">
                {pillar.title}
              </h3>
              <p className="mt-6 text-base leading-8 text-aura-ink/70">{pillar.text}</p>
            </article>
          ))}
          </div>
        </div>
        <ImageSlot
          src={copy.image.src}
          label={copy.image.label}
          className="mt-10 min-h-[300px] rounded-[2rem] md:mt-12 md:min-h-[380px]"
        />
      </div>
    </section>
  );
}
