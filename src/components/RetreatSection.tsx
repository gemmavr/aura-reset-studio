import { stockImages } from "@/lib/images";
import CTAButton from "./CTAButton";

export default function RetreatSection() {
  return (
    <section id="retiro" className="bg-aura-cal px-7 py-20 sm:px-12 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden bg-aura-deepAtlantic text-white lg:grid-cols-[1fr_0.9fr]">
          <div className="relative p-6 sm:p-10 lg:p-14">
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
                <li className="border-t border-white/18 pt-4">Grupo reducido y acompañamiento cercano</li>
                <li className="border-t border-white/18 pt-4">Prácticas suaves, comida cuidada y pausa real</li>
                <li className="border-t border-white/18 pt-4">Enraizado entre Barcelona y el Atlántico</li>
                <li className="border-t border-white/18 pt-4">Lista prioritaria antes de abrir reservas</li>
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
