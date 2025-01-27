import { createSignal, For } from "solid-js";

function FAQItem(props) {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <div class="border-b border-[#008B8B]/20 last:border-b-0">
      <button
        class="
          w-full py-3 px-2
          flex justify-between items-center
          text-left
          hover:bg-[#008B8B]/10
          transition-colors
          focus:outline-none
          rounded-lg
        "
        onClick={() => setIsOpen(!isOpen())}
        aria-expanded={isOpen()}
      >
        <span class="text-base sm:text-lg font-semibold text-[#005B5B]">
          {props.question}
        </span>
        <span
          class={`transform transition-transform duration-300 ${
            isOpen() ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        >
          <i class="fas fa-chevron-down text-[#008B8B]"></i>
        </span>
      </button>
      <div
        class={`overflow-hidden transition-all duration-300 ${
          isOpen() ? "max-h-[600px] py-2" : "max-h-0"
        }`}
        aria-hidden={!isOpen()}
      >
        <p class="text-gray-800 px-2 whitespace-pre-wrap leading-relaxed mt-1">
          {props.answer}
        </p>
      </div>
    </div>
  );
}

export default function FullFAQSection() {
  const faqs = [
    {
      question: "¿Qué debo llevar?",
      answer: `• Traje de baño y toalla (¡imprescindibles!)
• Protector solar, gorra o sombrero
• Ropa deportiva cómoda
• Cambio de ropa extra
• ¡Muchas ganas de divertirte!`
    },
    {
      question: "¿Puedo llevar invitados adicionales?",
      answer: `Sí, pero necesitamos saber con anticipación para no exceder el aforo (60 personas).
Por favor, confirma a tus acompañantes al momento de enviar tu confirmación de asistencia.
De esta manera garantizamos espacio y comida para todos.`
    },
    {
      question: "¿Habrá estacionamiento disponible?",
      answer: `Sí, contamos con estacionamiento seguro y gratuito junto al recinto.
Recomendamos llegar con tiempo para ubicarte cómodamente, sobre todo si vienes en grupo.`
    },
    {
      question: "¿Qué pasa si tengo restricciones alimentarias?",
      answer: `Tendremos opciones vegetarianas, veganas y sin gluten disponibles.
Sin embargo, te recomendamos indicarnos cualquier restricción alimentaria específica
cuando confirmes tu asistencia, para poder atenderte mejor.`
    },
    {
      question: "¿El evento es apto para niños?",
      answer: `¡Totalmente! Contamos con una zona infantil y piscina supervisada.
También habrá actividades lúdicas y un espacio para que los niños puedan jugar con seguridad.`
    },
    {
      question: "¿Se permiten mascotas?",
      answer: `Sí, siempre y cuando estén bajo tu supervisión y cumplan con las normas básicas
de higiene y convivencia. La piscina es solo para humanos, pero tendremos zonas para que
las mascotas puedan estar sin inconvenientes.`
    },
    {
      question: "¿Qué pasa si llueve o hay mal clima?",
      answer: `Tenemos áreas techadas para refugiarnos y continuar la fiesta.
Si el clima se vuelve muy extremo (tormentas fuertes), se notificará la reprogramación
o el plan B con la mayor antelación posible.`
    },
    {
      question: "¿Habrá música en vivo o DJ?",
      answer: `Sí, contaremos con música ambiental todo el día y un DJ en la tarde
para animar la fiesta. Puedes sugerir tu playlist preferida al organizador.`
    },
    {
      question: "¿Puedo llevar mi propio alcohol?",
      answer: `Habrá barra de tragos y cerveza disponibles, pero si deseas traer algo especial,
por favor consúltalo con el organizador para verificar logística
y evitar sobrepasar las normas del recinto.`
    },
    {
      question: "¿Cómo confirmo mi asistencia?",
      answer: `A través de la sección de Confirmación en la página principal
o por WhatsApp con el organizador. Indica cuántas personas vendrán contigo.`
    }
  ];

  return (
    <div class="bg-white bg-opacity-90 shadow-lg rounded-xl p-6 sm:p-8 text-gray-800">
      <h2 class="text-2xl sm:text-3xl font-bold text-[#008B8B] mb-6 flex items-center gap-2">
        <i class="fas fa-question-circle text-[#00a1a1]"></i>
        Respuestas a tus Dudas
      </h2>

      <div class="space-y-3">
        <For each={faqs}>
          {(item) => (
            <FAQItem question={item.question} answer={item.answer} />
          )}
        </For>
      </div>
    </div>
  );
}
