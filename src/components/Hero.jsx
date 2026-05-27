import Button from "./Button.jsx";
import SectionEyebrow from "./SectionEyebrow.jsx";
import { images } from "../data/images.js";

export default function Hero({ copy }) {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-aura-ink text-aura-warm">
      <img
        src={images.hero}
        alt={copy.imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(48,43,39,0.74),rgba(48,43,39,0.30)_55%,rgba(48,43,39,0.10))]" />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-10 pt-32 sm:px-8 lg:px-10">
        <div className="max-w-3xl pb-12 sm:pb-16">
          <SectionEyebrow light>{copy.eyebrow}</SectionEyebrow>
          <h1 className="max-w-2xl font-serif text-6xl leading-[0.92] text-aura-warm sm:text-7xl lg:text-8xl">
            {copy.title}
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-aura-warm/88 sm:text-xl">
            {copy.subtitle}
          </p>
          <p className="mt-5 max-w-lg text-sm leading-7 text-aura-warm/75">
            {copy.text}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button variant="secondary">{copy.primary}</Button>
            <Button href="#experience" variant="secondary" className="bg-transparent">
              {copy.secondary}
            </Button>
          </div>
        </div>
        <div className="flex items-end justify-between border-t border-aura-warm/25 pt-5 text-xs uppercase tracking-[0.22em] text-aura-warm/75">
          <span>{copy.signature}</span>
          <span className="hidden sm:inline">{copy.mantra}</span>
        </div>
      </div>
    </section>
  );
}
