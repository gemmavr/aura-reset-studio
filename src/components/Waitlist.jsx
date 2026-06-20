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

    // TODO: connect this compact waitlist form to the chosen email/database provider.
    setError("");
    setMessage(copy.success);
    setEmail("");
  };

  return (
    <section id="waitlist" className="reveal scroll-mt-24 overflow-hidden bg-aura-deepAtlantic px-5 py-16 text-aura-softWhite sm:px-8 sm:py-24 lg:px-10">
      <div className="relative mx-auto max-w-7xl">
        <div className="atlantic-halo absolute -right-24 -top-28 h-80 w-80 rounded-full opacity-50 blur-2xl" />
        <div className="relative grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <h2 className="max-w-3xl font-serif text-6xl leading-[0.92] sm:text-8xl">{copy.title}</h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-aura-softWhite/76">{copy.text}</p>
          </div>
          <form onSubmit={handleSubmit} noValidate className="w-full">
            <div className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="final-email" className="sr-only">
                {copy.label}
              </label>
              <input
                id="final-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={copy.placeholder}
                className="min-h-14 flex-1 rounded-full border border-aura-softWhite/18 bg-aura-softWhite/12 px-6 text-aura-softWhite outline-none transition placeholder:text-aura-softWhite/54 focus:border-aura-halo"
              />
              <button
                type="submit"
                className="min-h-14 rounded-full bg-aura-softWhite px-7 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-aura-deepAtlantic transition hover:-translate-y-0.5 hover:bg-aura-halo"
              >
                {copy.button}
              </button>
            </div>
            <div className="mt-5 min-h-6 text-sm text-aura-softWhite/82">
              {error && <p>{error}</p>}
              {message && <p>{message}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
