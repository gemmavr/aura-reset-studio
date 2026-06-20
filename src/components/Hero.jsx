import Button from "./Button.jsx";
import ImageSlot from "./ImageSlot.jsx";
import SectionEyebrow from "./SectionEyebrow.jsx";
export default function Hero({ copy }) {
  return (
    <section id="top" className="relative min-h-screen scroll-mt-20 overflow-hidden bg-aura-shell px-5 pb-16 pt-24 sm:px-8 sm:pt-28 lg:px-10">
      <div className="atlantic-halo absolute -right-28 top-16 h-96 w-96 rounded-full opacity-50 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-aura-softWhite/80 to-transparent" />
      <div className="relative mx-auto grid max-w-7xl gap-10 sm:gap-16 lg:min-h-[calc(100vh-6rem)] lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="max-w-3xl pb-4 lg:pb-0">
          <SectionEyebrow>{copy.eyebrow}</SectionEyebrow>
          <h1 className="font-serif text-[3.55rem] leading-[0.8] text-aura-ink sm:text-[4.65rem] sm:leading-[0.82] lg:text-[6.4rem] xl:text-[7.35rem]">
            {copy.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-aura-ink/72 sm:text-xl sm:leading-8">
            {copy.subtitle}
          </p>
          <div className="mt-7 flex flex-col gap-3 text-aura-ink sm:mt-9 sm:flex-row">
            <Button>{copy.primary}</Button>
            <Button href="#metodo" variant="secondary">
              {copy.secondary}
            </Button>
          </div>
          <div className="mt-8 flex max-w-lg items-start gap-4 border-t border-aura-ink/12 pt-5 sm:mt-12 sm:pt-6">
            <span className="mt-2 h-2.5 w-2.5 flex-none rounded-full bg-aura-halo" />
            <p className="text-xs font-semibold uppercase leading-6 tracking-[0.22em] text-aura-stone">{copy.note}</p>
          </div>
        </div>
        <div className="relative min-h-[430px] sm:min-h-[560px] lg:min-h-[720px]">
          <ImageSlot
            src={copy.imageSrc}
            label={copy.imageAlt}
            className="absolute right-0 top-0 h-full w-[90%] rounded-[2rem] shadow-image transition duration-700 hover:scale-[1.006] sm:rounded-[3rem]"
          />
          <div className="absolute bottom-10 left-0 hidden w-[38%] rounded-[1.5rem] border border-aura-ink/10 bg-aura-softWhite/86 p-5 backdrop-blur lg:block">
            <div className="atlantic-halo mb-8 h-20 w-20 rounded-full" />
            <p className="font-serif text-3xl leading-none text-aura-deepAtlantic">Reset rituals by the Atlantic.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
