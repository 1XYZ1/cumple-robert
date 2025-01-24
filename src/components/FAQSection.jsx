// FAQSection.jsx
import { createSignal } from 'solid-js';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <div class="border-b border-blue-700/30 last:border-b-0">
      <button
        class="w-full py-4 px-2 flex justify-between items-center text-left hover:bg-blue-800/20 transition-colors rounded-lg"
        onClick={() => setIsOpen(!isOpen())}
        aria-expanded={isOpen()}
        role="button"
        aria-controls={`answer-${question.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <span class="text-lg font-medium text-white">{question}</span>
        <span
          class={`transform transition-transform duration-300 ${isOpen() ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          <i class="fas fa-chevron-down text-blue-400"></i>
        </span>
      </button>
      <div
        id={`answer-${question.replace(/\s+/g, '-').toLowerCase()}`}
        class={`overflow-hidden transition-all duration-300 ${isOpen() ? 'max-h-96 py-4' : 'max-h-0'}`}
        aria-hidden={!isOpen()}
      >
        <p class="text-gray-300 px-2">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "¿Qué debo llevar?",
      answer: "• Traje de baño y toalla\n• Protector solar y gorra\n• Ropa deportiva cómoda\n• Cambio de ropa\n• ¡Muchas ganas de divertirte!"
    },
    {
      question: "¿Puedo llevar invitados adicionales?",
      answer: "Por favor, consulta previamente con los organizadores sobre invitados adicionales. Necesitamos mantener un control del número de asistentes para garantizar una experiencia óptima para todos."
    },
    {
      question: "¿Habrá estacionamiento disponible?",
      answer: "Sí, contamos con estacionamiento seguro y gratuito para todos los invitados. Recomendamos llegar con tiempo para ubicarse cómodamente."
    },
    {
      question: "¿Qué pasa si tengo restricciones alimentarias?",
      answer: "Contaremos con opciones vegetarianas y sin gluten. Por favor, infórmanos de cualquier restricción alimentaria específica al confirmar tu asistencia para poder atenderte mejor."
    },
    {
      question: "¿El evento es apto para niños?",
      answer: "¡Sí! Tendremos actividades especiales para todas las edades. La piscina cuenta con área infantil y supervisión constante."
    }
  ];

  return (
    <div class="bg-blue-800/30 p-6 rounded-lg backdrop-blur transform hover:scale-100 transition-all duration-300">
      <h3 class="text-2xl font-bold text-white mb-6">Preguntas Frecuentes</h3>
      <div class="space-y-2">
        {faqs.map((faq) => (
          <FAQItem question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;