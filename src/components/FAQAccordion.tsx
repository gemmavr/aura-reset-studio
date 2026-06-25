const questions = [
  {
    question: "¿Necesito experiencia previa?",
    answer:
      "No. Las experiencias están pensadas para venir con el cuerpo que tienes hoy, sin nivel, rendimiento ni vocabulario específico.",
  },
  {
    question: "¿Es una clase de yoga?",
    answer:
      "No exactamente. Puede haber movimiento suave, respiración y presencia corporal, pero AURA trabaja desde el formato experiencia: cuidado, grupo reducido, ritmo y detalle.",
  },
  {
    question: "¿Dónde ocurren las experiencias?",
    answer:
      "AURA nace entre Barcelona y Las Palmas. Cada fecha indicará el espacio concreto y el contexto de la experiencia.",
  },
  {
    question: "¿Cómo reservo una plaza?",
    answer:
      "Puedes escribir desde el botón de reserva. Te confirmaremos disponibilidad, detalles prácticos y próximos pasos.",
  },
];

export default function FAQAccordion() {
  return (
    <section
      id="faq"
      className="bg-aura-softWhite px-4 py-14 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1.22fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-aura text-aura-olive">
            FAQ
          </p>
          <h2 className="mt-4 text-balance font-serif text-4xl text-aura-deepAtlantic sm:text-5xl">
            Preguntas antes de venir
          </h2>
        </div>
        <div className="divide-y divide-aura-clay/45 border-y border-aura-clay/45">
          {questions.map((item, index) => (
            <details
              key={item.question}
              open={index === 0}
              className="group transition hover:bg-aura-arena/10"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-lg font-semibold text-aura-deepAtlantic focus-visible:outline focus-visible:outline-2 focus-visible:outline-aura-atlantic [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span aria-hidden="true" className="text-2xl font-light group-open:hidden">
                  +
                </span>
                <span aria-hidden="true" className="hidden text-2xl font-light group-open:inline">
                  -
                </span>
              </summary>
              <p className="pb-5 text-base leading-7 text-aura-stone">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
