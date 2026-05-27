import Button from "./Button.jsx";
import SectionEyebrow from "./SectionEyebrow.jsx";

export default function FirstExperience({ copy }) {
  return (
    <section className="reveal bg-aura-sand px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <div>
          <SectionEyebrow>{copy.eyebrow}</SectionEyebrow>
          <h2 className="font-serif text-5xl leading-[1.02] sm:text-6xl">{copy.title}</h2>
          <p className="mt-7 max-w-xl text-lg leading-8 text-aura-ink/72">
            {copy.text}
          </p>
        </div>
        <div className="rounded-[2rem] bg-aura-warm p-7 shadow-[0_18px_70px_rgba(48,43,39,0.08)] sm:p-10">
          <ul className="space-y-5">
            {copy.items.map((item) => (
              <li key={item} className="flex items-center gap-4 text-base text-aura-ink/78">
                <span className="h-px w-8 bg-aura-clay" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button>{copy.cta}</Button>
            <p className="mt-5 text-sm text-aura-ink/58">{copy.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
