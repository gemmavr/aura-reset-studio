import { useState } from "react";
import Button from "./Button.jsx";

export default function FirstExperience({ copy }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

    if (!isValidEmail) {
      setMessage("");
      setError(copy.invalidEmail);
      return;
    }

    if (!consent) {
      setMessage("");
      setError(copy.invalidConsent);
      return;
    }

    // TODO: connect this local form to the future waitlist provider or database.
    setName("");
    setEmail("");
    setConsent(false);
    setError("");
    setMessage(copy.success);
  };

  return (
    <section id="sunset-reset" className="reveal scroll-mt-24 bg-aura-arena px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-aura-coral">{copy.cta}</p>
          <h2 className="mt-8 font-serif text-6xl leading-[0.9] text-aura-deepAtlantic sm:text-8xl">{copy.title}</h2>
          <p className="mt-5 font-serif text-3xl leading-tight text-aura-ink sm:text-4xl">{copy.subtitle}</p>
          <p className="mt-8 max-w-xl text-lg leading-8 text-aura-ink/72">{copy.text}</p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {copy.details.map((detail) => (
              <span key={detail} className="border-t border-aura-ink/15 pt-4 text-sm uppercase tracking-[0.2em] text-aura-ink/68">
                {detail}
              </span>
            ))}
          </div>
          <div className="mt-10">
            <Button href="#event-form" variant="secondary">{copy.cta}</Button>
          </div>
        </div>

        <form
          id="event-form"
          onSubmit={handleSubmit}
          noValidate
          className="rounded-[2rem] border border-aura-ink/10 bg-aura-softWhite p-6 shadow-soft sm:p-8 lg:p-10"
        >
          <div className="mb-8 flex items-center justify-between gap-6 border-b border-aura-ink/10 pb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-aura-teal">Acceso fundador</p>
            <span className="atlantic-halo h-12 w-12 rounded-full" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-aura-stone">{copy.nameLabel}</span>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder={copy.namePlaceholder}
                className="min-h-14 w-full rounded-2xl border border-aura-ink/10 bg-aura-shell px-5 text-aura-ink outline-none transition placeholder:text-aura-stone/55 focus:border-aura-teal"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-aura-stone">{copy.emailLabel}</span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={copy.emailPlaceholder}
                className="min-h-14 w-full rounded-2xl border border-aura-ink/10 bg-aura-shell px-5 text-aura-ink outline-none transition placeholder:text-aura-stone/55 focus:border-aura-teal"
              />
            </label>
          </div>
          <label className="mt-6 flex gap-3 text-sm leading-6 text-aura-ink/72">
            <input
              type="checkbox"
              checked={consent}
              onChange={(event) => setConsent(event.target.checked)}
              className="mt-1 h-4 w-4 accent-aura-teal"
            />
            <span>{copy.consent}</span>
          </label>
          <button
            type="submit"
            className="mt-8 min-h-14 w-full rounded-full bg-aura-deepAtlantic px-7 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-aura-softWhite transition hover:-translate-y-0.5 hover:bg-aura-teal"
          >
            {copy.button}
          </button>
          <div className="mt-5 min-h-6 text-sm text-aura-deepAtlantic">
            {error && <p>{error}</p>}
            {message && <p>{message}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
