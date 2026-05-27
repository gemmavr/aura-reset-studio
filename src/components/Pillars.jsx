import SectionEyebrow from "./SectionEyebrow.jsx";

export default function Pillars({ copy }) {
  return (
    <section id="experience" className="reveal px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <SectionEyebrow>{copy.eyebrow}</SectionEyebrow>
          <h2 className="font-serif text-5xl leading-[1.02] sm:text-6xl">
            {copy.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-aura-ink/70">
            {copy.subtitle}
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {copy.items.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-[2rem] border border-aura-ink/10 bg-aura-warm p-8 shadow-[0_18px_60px_rgba(48,43,39,0.05)]"
            >
              <span className="mb-12 block h-px w-14 bg-aura-clay" />
              <h3 className="text-sm font-semibold tracking-[0.28em] text-aura-cactus">{pillar.title}</h3>
              <p className="mt-5 text-base leading-8 text-aura-ink/72">{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
