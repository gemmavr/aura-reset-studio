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
    <section id="reserva" className="bg-aura-softWhite px-4 py-14 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
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
          className="rounded-[1.25rem] border border-aura-clay/35 bg-aura-cal p-5 shadow-soft sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold text-aura-deepAtlantic">
              Nombre
              <input
                required
                type="text"
                name="nombre"
                autoComplete="name"
                className="mt-2 w-full rounded-2xl border border-aura-clay/45 bg-aura-softWhite px-4 py-3 text-base font-normal text-aura-ink outline-none transition focus:border-aura-atlantic focus:ring-4 focus:ring-aura-atlantic/10"
              />
            </label>

            <label className="text-sm font-semibold text-aura-deepAtlantic">
              Email
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                className="mt-2 w-full rounded-2xl border border-aura-clay/45 bg-aura-softWhite px-4 py-3 text-base font-normal text-aura-ink outline-none transition focus:border-aura-atlantic focus:ring-4 focus:ring-aura-atlantic/10"
              />
            </label>
          </div>

          <label className="mt-5 block text-sm font-semibold text-aura-deepAtlantic">
            Experiencia de interés
            <select
              required
              name="experiencia"
              defaultValue=""
              className="mt-2 w-full rounded-2xl border border-aura-clay/45 bg-aura-softWhite px-4 py-3 text-base font-normal text-aura-ink outline-none transition focus:border-aura-atlantic focus:ring-4 focus:ring-aura-atlantic/10"
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
                  className="flex items-center gap-3 rounded-2xl border border-aura-clay/45 bg-aura-softWhite px-4 py-3 text-sm text-aura-stone"
                >
                  <input
                    required
                    type="radio"
                    name="primera_vez_o_repite"
                    value={option}
                    className="h-4 w-4 accent-aura-atlantic"
                  />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-7 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-aura-atlantic px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(47,111,134,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-aura-deepAtlantic hover:shadow-[0_18px_44px_rgba(23,62,64,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aura-deepAtlantic disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          >
            {status === "submitting" ? "Enviando..." : "Enviar reserva"}
          </button>

          {status === "success" && (
            <p role="status" className="mt-5 rounded-2xl bg-aura-olive/12 p-4 text-sm leading-6 text-aura-deepAtlantic">
              Hemos recibido tu señal. Te escribiremos con calma para contarte el siguiente paso.
            </p>
          )}

          {status === "error" && (
            <p role="alert" className="mt-5 rounded-2xl bg-aura-coral/10 p-4 text-sm leading-6 text-aura-deepAtlantic">
              Ahora mismo el formulario necesita terminar de conectarse. Revisa el endpoint de Formspree y vuelve a intentarlo.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
