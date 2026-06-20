import SectionEyebrow from "./SectionEyebrow.jsx";
import ImageSlot from "./ImageSlot.jsx";

export default function AboutGemma({ copy }) {
  return (
    <section id="las-palmas" className="reveal scroll-mt-24 bg-aura-shell px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 border-t border-aura-ink/10 pt-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <SectionEyebrow>ORIGEN</SectionEyebrow>
          <h2 className="font-serif text-5xl leading-[0.98] sm:text-7xl lg:text-8xl">{copy.title}</h2>
          <p className="mt-8 text-lg leading-8 text-aura-ink/72">{copy.text}</p>
        </div>
        <ImageSlot
          src={copy.image.src}
          label={copy.image.label}
          className="min-h-[420px] rounded-[2rem]"
        />
      </div>
    </section>
  );
}
