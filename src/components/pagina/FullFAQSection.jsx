import { createSignal, For } from "solid-js";

function FAQItem(props) {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <div class="border-b border-white/10 last:border-b-0">
      <button
        class="
          w-full py-4 px-6
          flex justify-between items-center
          text-left
          hover:bg-white/5
          transition-all duration-300
          rounded-xl
          focus:outline-none
          group
        "
        onClick={() => setIsOpen(!isOpen())}
        aria-expanded={isOpen()}
      >
        <span class="text-base sm:text-lg font-medium text-white group-hover:text-cyan-300 transition-colors">
          {props.question}
        </span>
        <span
          class={`
            transform transition-transform duration-300
            ${isOpen() ? "rotate-180" : ""}
            text-cyan-300
          `}
          aria-hidden="true"
        >
          <i class="fas fa-chevron-down"></i>
        </span>
      </button>
      <div
        class={`overflow-hidden transition-all duration-300 ${
          isOpen() ? "max-h-[600px] py-4 px-6" : "max-h-0"
        }`}
        aria-hidden={!isOpen()}
      >
        <p class="text-gray-300 whitespace-pre-wrap leading-relaxed">
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
      answer: `Sí, pueden llevar su propio alcohol. Por favor, usa termos o contenedores seguros,
especialmente cerca de la piscina. No se permiten botellas de vidrio en el área de la piscina.`
    },
    {
      question: "¿Cómo confirmo mi asistencia?",
      answer: `A través de la sección de Confirmación en la página principal
o por WhatsApp con el organizador. Indica cuántas personas vendrán contigo.`
    },
    {
      question: "¿Cuál es el costo del evento?",
      answer: `El costo del alquiler del recinto es de $8.000. No incluye los gastos de comida y bebida.`
    },
    {
      question: "¿Cuál es el horario del evento?",
      answer: `El evento se llevará a cabo de 10 AM a 7 PM.
• 10:00 AM - Bienvenida e inicio de actividades
• 2:00 PM - Almuerzo
• 7:00 PM - Finalización`
    },
    {
      question: "¿Qué actividades se realizarán durante el evento?",
      answer: `Tendremos una variedad de actividades para todos los gustos:
• Piscina con área infantil supervisada
• Torneo de fútbol amistoso
• Ping pong y juegos de mesa
• PlayStation con FIFA y otros juegos
• Música y baile
• Asado y snacks durante todo el día`
    }
  ];

  return (
    <div class="relative p-6 sm:p-8 rounded-3xl">
      {/* Contenedor de preguntas */}
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <For each={faqs}>
          {(item) => (
            <div class="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <FAQItem question={item.question} answer={item.answer} />
            </div>
          )}
        </For>
      </div>

      {/* Nota informativa */}
      <div class="mt-8 text-center">
        <p class="text-sm text-gray-400">
          ¿Tienes más preguntas? No dudes en contactarnos a través de WhatsApp
        </p>
      </div>
    </div>
  );
}
