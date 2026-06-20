import SectionEyebrow from "./SectionEyebrow.jsx";

export default function Journey({ copy }) {
  return (
    <section className="reveal bg-aura-linen px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <SectionEyebrow>{copy.eyebrow}</SectionEyebrow>
            <h2 className="font-serif text-5xl leading-[1.02] sm:text-7xl">{copy.title}</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-aura-ink/70">{copy.text}</p>
        </div>
        <div className="mt-14 grid gap-3 md:grid-cols-7">
          {copy.phases.map((phase, index) => (
            <div
              key={phase}
              className={`border-t px-1 pt-5 ${
                index === 0 ? "border-aura-olive text-aura-olive" : "border-aura-ink/14 text-aura-ink/48"
              }`}
            >
              <span className="block text-xs font-semibold tracking-[0.24em]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="mt-4 block font-serif text-3xl">{phase}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
