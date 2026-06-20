import ImageSlot from "./ImageSlot.jsx";
import SectionEyebrow from "./SectionEyebrow.jsx";

export default function SensoryRitual({ copy }) {
  return (
    <section className="reveal overflow-hidden bg-aura-deepAtlantic px-5 py-16 text-aura-softWhite sm:px-8 sm:py-24 lg:px-10">
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div className="atlantic-halo absolute -left-24 -top-24 h-72 w-72 rounded-full opacity-40 blur-2xl" />
        <div className="relative">
          <SectionEyebrow light>{copy.label}</SectionEyebrow>
          <h2 className="font-serif text-5xl leading-[0.98] sm:text-7xl lg:text-8xl">{copy.title}</h2>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-aura-softWhite/76">{copy.text}</p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {copy.items.map((item) => (
              <p key={item} className="border-t border-aura-softWhite/18 pt-4 text-sm uppercase tracking-[0.22em] text-aura-softWhite/82">
                {item}
              </p>
            ))}
          </div>
        </div>
        <ImageSlot
          src={copy.image.src}
          label={copy.image.label}
          className="min-h-[420px] rounded-[2rem] border-aura-softWhite/15 bg-aura-softWhite/10 text-aura-softWhite/50"
        />
      </div>
    </section>
  );
}
