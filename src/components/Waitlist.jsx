import { useState } from "react";

export default function Waitlist({ copy }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

    if (!isValid) {
      setMessage("");
      setError(copy.invalid);
      return;
    }

    setError("");
    setMessage(copy.success);
    setEmail("");
  };

  return (
    <section id="waitlist" className="reveal px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
      <div className="mx-auto max-w-4xl rounded-[2rem] bg-aura-ink px-6 py-16 text-center text-aura-warm shadow-soft sm:px-12">
        <p className="mb-5 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-aura-warm/65">
          {copy.eyebrow}
        </p>
        <h2 className="font-serif text-5xl leading-[1.02] sm:text-6xl">{copy.title}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-aura-warm/74 sm:text-lg">
          {copy.text}
        </p>
        <form onSubmit={handleSubmit} noValidate className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row">
          <label htmlFor="email" className="sr-only">
            {copy.label}
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={copy.placeholder}
            className="min-h-14 flex-1 rounded-full border border-aura-warm/20 bg-aura-warm/10 px-6 text-aura-warm outline-none transition placeholder:text-aura-warm/45 focus:border-aura-warm"
          />
          <button
            type="submit"
            className="min-h-14 rounded-full bg-aura-warm px-7 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-aura-ink transition hover:bg-aura-sand"
          >
            {copy.button}
          </button>
        </form>
        <div className="mt-5 min-h-6 text-sm">
          {error && <p className="text-aura-sand">{error}</p>}
          {message && <p className="text-aura-sand">{message}</p>}
        </div>
        <p className="mt-6 text-xs uppercase tracking-[0.22em] text-aura-warm/50">{copy.microcopy}</p>
      </div>
    </section>
  );
}
