import { stockImages } from "@/lib/images";
import CTAButton from "./CTAButton";

export default function RetreatSection() {
  return (
    <section id="retiro" className="bg-aura-cal px-4 py-14 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-[1.35rem] bg-aura-deepAtlantic text-white shadow-image lg:grid-cols-[1fr_0.9fr]">
          <div className="relative p-6 sm:p-10 lg:p-14">
            <div className="absolute left-10 top-10 h-28 w-28 rounded-full bg-aura-olive/20 blur-3xl" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-aura text-aura-halo">
                Retiro septiembre
              </p>
              <h2 className="mt-4 text-balance font-serif text-4xl leading-tight sm:text-5xl">
                Un fin de semana para volver al ritmo.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">
                Estamos preparando el primer Retiro Aura: un encuentro íntimo entre cuerpo, descanso, palabra y territorio. Sin promesas grandilocuentes. Con tiempo, luz y cuidado.
              </p>
              <ul className="mt-8 grid gap-3 text-sm text-white/82 sm:grid-cols-2">
                <li className="rounded-2xl bg-white/8 p-4">Grupo reducido y acompañamiento cercano</li>
                <li className="rounded-2xl bg-white/8 p-4">Prácticas suaves, comida cuidada y pausa real</li>
                <li className="rounded-2xl bg-white/8 p-4">Enraizado entre Barcelona y el Atlántico</li>
                <li className="rounded-2xl bg-white/8 p-4">Lista prioritaria antes de abrir reservas</li>
              </ul>
              <div className="mt-8">
                <CTAButton
                  href="#reserva"
                  variant="light"
                  eventName="Apuntarme al interés"
                >
                  Apuntarme al interés
                </CTAButton>
              </div>
            </div>
          </div>
          <img
            src={stockImages.september}
            alt="Costa atlántica luminosa para el retiro de septiembre"
            loading="lazy"
            decoding="async"
            className="h-full min-h-[22rem] w-full object-cover lg:min-h-[34rem]"
          />
        </div>
      </div>
    </section>
  );
}
