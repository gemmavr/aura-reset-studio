"use client";

import { FormEvent, useState } from "react";
import { trackPlausibleEvent } from "@/lib/analytics";
import CTAButton from "./CTAButton";

// Formspree: sustituye [FORM_ID_AURA_RESERVAS] por tu endpoint real, por ejemplo https://formspree.io/f/abcdwxyz.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/[FORM_ID_AURA_RESERVAS]";

type FormStatus = "idle" | "submitting" | "success" | "error";

const experienceOptions = [
  "Pausa",
  "Talleres",
  "Encuentros",
  "Retiro Aura",
];

export default function ReservationForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Formspree submission failed");
      }

      form.reset();
      trackPlausibleEvent("Formulario reserva completado");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="reserva" className="bg-aura-softWhite px-7 py-20 sm:px-12 lg:px-16 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-aura text-aura-olive">
            Reserva
          </p>
          <h2 className="mt-4 text-balance font-serif text-4xl leading-tight text-aura-deepAtlantic sm:text-5xl">
            Cuéntanos qué pausa estás buscando.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-aura-stone">
            No hace falta tenerlo claro del todo. Déjanos una señal y te escribiremos con calma para encontrar el formato que encaje.
          </p>
          <div className="mt-8">
            <CTAButton href="#faq" variant="secondary">
              Leer dudas antes
            </CTAButton>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          aria-busy={status === "submitting"}
          aria-describedby="reserva-status"
          className="border-t border-aura-clay bg-aura-cal pt-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold text-aura-deepAtlantic">
              Nombre
              <input
                required
                type="text"
                name="nombre"
                autoComplete="name"
                className="mt-2 w-full border border-aura-clay bg-aura-softWhite px-4 py-3 text-base font-normal text-aura-ink outline-none transition focus:border-aura-olive focus:ring-4 focus:ring-aura-olive/10"
              />
            </label>

            <label className="text-sm font-semibold text-aura-deepAtlantic">
              Email
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                className="mt-2 w-full border border-aura-clay bg-aura-softWhite px-4 py-3 text-base font-normal text-aura-ink outline-none transition focus:border-aura-olive focus:ring-4 focus:ring-aura-olive/10"
              />
            </label>
          </div>

          <label className="mt-5 block text-sm font-semibold text-aura-deepAtlantic">
            Experiencia de interés
            <select
              required
              name="experiencia"
              defaultValue=""
              className="mt-2 w-full border border-aura-clay bg-aura-softWhite px-4 py-3 text-base font-normal text-aura-ink outline-none transition focus:border-aura-olive focus:ring-4 focus:ring-aura-olive/10"
            >
              <option value="" disabled>
                Elige una opción
              </option>
              {experienceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <fieldset className="mt-5">
            <legend className="text-sm font-semibold text-aura-deepAtlantic">
              ¿Es tu primera vez con AURA?
            </legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {["Primera vez", "Repito"].map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-3 border border-aura-clay bg-aura-softWhite px-4 py-3 text-sm text-aura-stone"
                >
                  <input
                    required
                    type="radio"
                    name="primera_vez_o_repite"
                    value={option}
                    className="h-4 w-4 accent-aura-olive"
                  />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-7 inline-flex min-h-11 w-full items-center justify-center bg-aura-cta px-6 py-3 text-sm font-medium text-aura-ctaText transition duration-300 hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aura-deepAtlantic disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          >
            {status === "submitting" ? "Enviando..." : "Enviar reserva"}
          </button>

          <div id="reserva-status" aria-live="polite">
            {status === "success" && (
              <p role="status" className="mt-5 border border-aura-olive/20 bg-aura-olive/12 p-4 text-sm leading-6 text-aura-deepAtlantic">
                Hemos recibido tu señal. Te escribiremos con calma para contarte el siguiente paso.
              </p>
            )}

            {status === "error" && (
              <p role="alert" className="mt-5 border border-aura-coral/20 bg-aura-coral/10 p-4 text-sm leading-6 text-aura-deepAtlantic">
                Ahora mismo el formulario necesita terminar de conectarse. Revisa el endpoint de Formspree y vuelve a intentarlo.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
