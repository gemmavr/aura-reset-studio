import SectionEyebrow from "./SectionEyebrow.jsx";
import { images } from "../data/images.js";

export default function AboutGemma({ copy }) {
  return (
    <section id="about" className="reveal bg-aura-warm px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div className="relative">
          <img
            src={images.gemma}
            alt={copy.alt}
            className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft"
          />
          <div className="absolute bottom-5 left-5 rounded-full bg-aura-warm/90 px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-aura-ink backdrop-blur">
            {copy.signature}
          </div>
        </div>
        <div className="max-w-3xl">
          <SectionEyebrow>{copy.eyebrow}</SectionEyebrow>
          <h2 className="font-serif text-5xl leading-[1.02] sm:text-6xl">{copy.title}</h2>
          <div className="mt-8 space-y-6 text-base leading-8 text-aura-ink/72 sm:text-lg">
            {copy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-10 font-serif text-4xl italic leading-tight text-aura-clay sm:text-5xl">
            {copy.highlight}
          </p>
        </div>
      </div>
    </section>
  );
}
