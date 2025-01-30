import { createSignal } from "solid-js";

// Reutilizamos la misma lógica de acordeón, pero con 2-3 preguntas solamente
const FAQItem = (props) => {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <div class="border-b border-orange-100/20 last:border-b-0">
      <button
        class="
          w-full py-4 px-2
          flex justify-between items-center
          text-left
          hover:bg-orange-500/20
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
          <i class="fas fa-chevron-down text-yellow-200"></i>
        </span>
      </button>
      <div
        class={`
          overflow-hidden transition-all duration-300
          ${isOpen() ? "max-h-96 py-3" : "max-h-0"}
        `}
        aria-hidden={!isOpen()}
      >
        <p class="text-orange-100 px-2 whitespace-pre-wrap leading-relaxed">
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
        relative overflow-hidden
        rounded-lg p-6 shadow-md text-gray-100
      "
    >
      {/* Fondo con gradiente y efectos */}
      <div class="absolute inset-0 bg-gradient-to-br from-amber-600/90 to-orange-700/90 backdrop-blur-xl"></div>

      {/* Efectos decorativos */}
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-1/2 -right-1/2 w-[500px] h-[500px] bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute -bottom-1/2 -left-1/2 w-[500px] h-[500px] bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s"></div>
      </div>

      {/* Contenido */}
      <div class="relative z-10">
        <h3 class="text-2xl font-extrabold text-white mb-4 flex items-center gap-2">
          <i class="fas fa-question-circle text-yellow-300"></i>
          Preguntas Frecuentes
        </h3>
        <div class="space-y-2">
          {faqs.map((faq) => (
            <FAQItem question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartialFAQ;
