// InfoSection.jsx
import { createSignal } from "solid-js";

// Subcomponente: PartialFAQItem
function PartialFAQItem(props) {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <div class="border-b border-white/10 last:border-b-0">
      <button
        class="
          w-full py-4 px-4
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
        <span class="text-base font-medium text-white group-hover:text-cyan-300 transition-colors">
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
        class={`
          overflow-hidden transition-all duration-300
          ${isOpen() ? "max-h-96 py-3 px-4" : "max-h-0"}
        `}
        aria-hidden={!isOpen()}
      >
        <p class="text-gray-300 whitespace-pre-wrap leading-relaxed">
          {props.answer}
        </p>
      </div>
    </div>
  );
}

// Subcomponente: PartialFAQ
function PartialFAQ() {
  const partialFaqs = [
    {
      question: "¿Puedo llevar invitados adicionales?",
      answer: "Por favor, consulta previamente... mantener un control del número de asistentes..."
    },
    {
      question: "¿El evento es apto para niños?",
      answer: "¡Sí! Tendremos actividades para todas las edades. La piscina cuenta con área infantil y supervisión."
    },
    {
      question: "¿Se permiten mascotas?",
      answer: "¡Sí! Pero deben estar supervisadas y bajo tu responsabilidad en todo momento."
    }
  ];

  return (
    <div class="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/10">
      <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
          <i class="fas fa-question-circle text-cyan-400"></i>
        </div>
        Preguntas Rápidas
      </h3>
      <div class="space-y-2">
        {partialFaqs.map((faq) => (
          <PartialFAQItem
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
      <div class="text-right mt-6">
        <a
          href="/faq"
          class="
            inline-flex items-center gap-2
            bg-cyan-500
            hover:bg-cyan-600
            text-white
            px-5 py-2.5
            rounded-xl
            font-medium
            transition-all
            duration-300
            transform
            hover:scale-105
            active:scale-95
            shadow-lg
            hover:shadow-cyan-500/25
          "
        >
          <span>Ver más preguntas</span>
          <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
}

// Componente principal: InfoSection
function InfoSection() {
  return (
    <div class="space-y-8">
      {/* 1) Detalles Importantes */}
      <div class="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/10">
        <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
            <i class="fas fa-info-circle text-yellow-400"></i>
          </div>
          Detalles Importantes
        </h3>
        <ul class="space-y-6">
          <li class="flex items-start gap-4 group">
            <div class="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center shrink-0">
              <i class="fas fa-calendar text-yellow-400"></i>
            </div>
            <div>
              <span class="font-medium text-white group-hover:text-yellow-400 transition-colors block mb-1">
                Fecha
              </span>
              <p class="text-gray-300">2 de Febrero, 2025</p>
            </div>
          </li>
          <li class="flex items-start gap-4 group">
            <div class="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center shrink-0">
              <i class="fas fa-clock text-yellow-400"></i>
            </div>
            <div>
              <span class="font-medium text-white group-hover:text-yellow-400 transition-colors block mb-1">
                Horario
              </span>
              <div class="space-y-1 text-gray-300">
                <p>10:00 AM - Bienvenida e inicio</p>
                <p>2:00 PM - Almuerzo</p>
                <p>7:00 PM - Finalización</p>
              </div>
            </div>
          </li>
          <li class="flex items-start gap-4 group">
            <div class="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center shrink-0">
              <i class="fas fa-user-friends text-yellow-400"></i>
            </div>
            <div>
              <span class="font-medium text-white group-hover:text-yellow-400 transition-colors block mb-1">
                Aforo
              </span>
              <p class="text-gray-300">Hasta 60 personas (aprox.)</p>
            </div>
          </li>
        </ul>
      </div>

      {/* 2) ¿Qué Incluye? */}
      <div class="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/10">
        <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
            <i class="fas fa-star text-purple-400"></i>
          </div>
          ¿Qué Incluye?
        </h3>
        <ul class="space-y-6">
          <li class="flex items-start gap-4 group">
            <div class="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
              <i class="fas fa-swimming-pool text-purple-400"></i>
            </div>
            <div>
              <span class="font-medium text-white group-hover:text-purple-400 transition-colors block mb-1">
                Piscina
              </span>
              <p class="text-gray-300">Área para adultos y niños con supervisión</p>
            </div>
          </li>
          <li class="flex items-start gap-4 group">
            <div class="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
              <i class="fas fa-futbol text-purple-400"></i>
            </div>
            <div>
              <span class="font-medium text-white group-hover:text-purple-400 transition-colors block mb-1">
                Deportes
              </span>
              <p class="text-gray-300">Fútbol, ping pong y más</p>
            </div>
          </li>
          <li class="flex items-start gap-4 group">
            <div class="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
              <i class="fas fa-hamburger text-purple-400"></i>
            </div>
            <div>
              <span class="font-medium text-white group-hover:text-purple-400 transition-colors block mb-1">
                Comida
              </span>
              <p class="text-gray-300">Asado completo y snacks durante el día</p>
            </div>
          </li>
        </ul>
      </div>

      {/* 3) ¿Qué Llevar? */}
      <div class="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/10">
        <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center">
            <i class="fas fa-suitcase-rolling text-pink-400"></i>
          </div>
          ¿Qué Llevar?
        </h3>
        <ul class="space-y-6">
          <li class="flex items-start gap-4 group">
            <div class="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center shrink-0">
              <i class="fas fa-umbrella-beach text-pink-400"></i>
            </div>
            <div>
              <span class="font-medium text-white group-hover:text-pink-400 transition-colors block mb-1">
                Vestimenta
              </span>
              <p class="text-gray-300">Traje de baño, sandalias y ropa cómoda</p>
            </div>
          </li>
          <li class="flex items-start gap-4 group">
            <div class="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center shrink-0">
              <i class="fas fa-sun text-pink-400"></i>
            </div>
            <div>
              <span class="font-medium text-white group-hover:text-pink-400 transition-colors block mb-1">
                Bloqueador solar
              </span>
              <p class="text-gray-300">Protege tu piel del sol</p>
            </div>
          </li>
          <li class="flex items-start gap-4 group">
            <div class="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center shrink-0">
              <i class="fas fa-tshirt text-pink-400"></i>
            </div>
            <div>
              <span class="font-medium text-white group-hover:text-pink-400 transition-colors block mb-1">
                Extras
              </span>
              <p class="text-gray-300">Toalla, ropa de cambio y gafas de sol</p>
            </div>
          </li>
        </ul>
      </div>

      {/* 4) Preguntas Rápidas (PartialFAQ) */}
      <PartialFAQ />
    </div>
  );
}

// Componente LocationButton
const LocationButton = ({ href, icon, text, bgColor, hoverColor, class: className }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      class={`
        flex items-center justify-center gap-3
        ${bgColor} ${hoverColor}
        text-white
        py-3 px-4
        rounded-xl
        transition-all duration-300
        hover:shadow-lg
        hover:scale-105
        active:scale-95
        backdrop-blur-sm
        ${className}
      `}
    >
      <i class={`${icon} text-xl`}></i>
      <span class="font-medium">{text}</span>
    </a>
  );
};

// Componente LocationSection
const LocationSection = () => {
  return (
    <div class="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/10">
      <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
          <i class="fas fa-map-marked-alt text-blue-400"></i>
        </div>
        Ubicación
      </h3>

      {/* Mapa con bordes redondeados y sombra */}
      <div class="rounded-xl overflow-hidden shadow-xl mb-8 border border-white/10">
        <iframe
          class="w-full h-[300px] sm:h-[350px]"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3336.639371795582!2d-70.70093602431751!3d-33.249749973469676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDE0JzU5LjEiUyA3MMKwNDEnNTQuMSJX!5e0!3m2!1ses-419!2scl!4v1738196095526!5m2!1ses-419!2scl"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Info de cómo llegar con mejor espaciado y diseño */}
      <div class="mb-8">
        <h4 class="text-xl font-bold text-white mb-4 flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
            <i class="fas fa-directions text-blue-400"></i>
          </div>
          Cómo llegar
        </h4>
        <ul class="space-y-4">
          <li class="flex items-center gap-3 text-gray-300 group">
            <div class="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
              <i class="fas fa-car text-blue-400"></i>
            </div>
            <span>30 minutos en auto desde Santiago Centro</span>
          </li>
          <li class="flex items-center gap-3 text-gray-300 group">
            <div class="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
              <i class="fas fa-bus text-blue-400"></i>
            </div>
            <span>Transporte público desde Metro Los Dominicos</span>
          </li>
        </ul>
      </div>

      {/* Botones de navegación con mejor diseño y espaciado */}
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <LocationButton
          href="https://wa.me/56945885600"
          icon="fab fa-whatsapp"
          text="Me perdí, ayúdame"
          bgColor="bg-green-600"
          hoverColor="hover:bg-green-700"
        />
        <LocationButton
          href="https://maps.app.goo.gl/c71iBCXequxoy7bz7?g_st=com.google.maps.preview.copy"
          icon="fas fa-map-marker-alt"
          text="Google Maps"
          bgColor="bg-red-600"
          hoverColor="hover:bg-red-700"
        />
        <LocationButton
          href="https://waze.com/ul/h66jdz5p40"
          icon="fab fa-waze"
          text="Abrir en Waze"
          bgColor="bg-blue-500"
          hoverColor="hover:bg-blue-600"
          class="sm:col-span-2"
        />
      </div>
    </div>
  );
};

export { InfoSection, LocationSection };