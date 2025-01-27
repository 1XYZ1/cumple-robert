import { createSignal } from "solid-js";

// Reutilizamos la misma lógica de acordeón, pero con 2-3 preguntas solamente
const FAQItem = (props) => {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <div class="border-b border-lime-100/20 last:border-b-0">
      <button
        class="
          w-full py-4 px-2
          flex justify-between items-center
          text-left
          hover:bg-[#147373]/20
          transition-colors
          rounded-lg
          focus:outline-none
        "
        onClick={() => setIsOpen(!isOpen())}
        aria-expanded={isOpen()}
      >
        <span class="text-lg font-semibold text-white">
          {props.question}
        </span>
        <span
          class={`
            transform transition-transform duration-300
            ${isOpen() ? "rotate-180" : ""}
          `}
          aria-hidden="true"
        >
          <i class="fas fa-chevron-down text-lime-200"></i>
        </span>
      </button>
      <div
        class={`
          overflow-hidden transition-all duration-300
          ${isOpen() ? "max-h-96 py-3" : "max-h-0"}
        `}
        aria-hidden={!isOpen()}
      >
        <p class="text-lime-100 px-2 whitespace-pre-wrap leading-relaxed">
          {props.answer}
        </p>
      </div>
    </div>
  );
};

const PartialFAQ = () => {
  // Solo 2-3 preguntas clave
  const faqs = [
    {
      question: "¿Qué debo llevar?",
      answer: `• Traje de baño y toalla
• Protector solar y gorra
• Ropa deportiva cómoda
• Cambio de ropa
• ¡Muchas ganas de divertirte!`
    },
    {
      question: "¿Habrá estacionamiento disponible?",
      answer: "Sí, contamos con estacionamiento seguro y gratuito..."
    },
    {
      question: "¿El evento es apto para niños?",
      answer: "¡Sí! Tendremos actividades especiales para todas las edades..."
    }
  ];

  return (
    <div
      class="
        bg-gradient-to-r from-[#1b9ac1] to-[#145473]
        rounded-lg p-6 shadow-md text-gray-100
      "
    >
      <h3 class="text-2xl font-extrabold text-white mb-4 flex items-center gap-2">
        <i class="fas fa-question-circle text-lime-200"></i>
        Preguntas Frecuentes
      </h3>
      <div class="space-y-2">
        {faqs.map((faq) => (
          <FAQItem question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default PartialFAQ;
