// InfoSection.jsx
import { createSignal } from "solid-js";

// Subcomponente: PartialFAQItem
function PartialFAQItem(props) {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <div class="border-b border-lime-100/20 last:border-b-0">
      <button
        class="
          w-full py-3 px-2
          flex justify-between items-center
          text-left
          hover:bg-[#144173]/20
          transition-colors
          rounded-lg
          focus:outline-none
        "
        onClick={() => setIsOpen(!isOpen())}
        aria-expanded={isOpen()}
      >
        <span class="text-base font-semibold text-white">
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
          ${isOpen() ? "max-h-96 py-2" : "max-h-0"}
        `}
        aria-hidden={!isOpen()}
      >
        <p class="text-lime-100 px-2 whitespace-pre-wrap leading-relaxed">
          {props.answer}
        </p>
      </div>
    </div>
  );
}

// Subcomponente: PartialFAQ
function PartialFAQ() {
  // Sólo 2-3 preguntas
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
    <div class="bg-gradient-to-r from-[#144173] to-[#1b6ec1] p-4 sm:p-6 rounded-lg shadow-md">
      <h3 class="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
        <i class="fas fa-question-circle text-lime-200"></i>
        Preguntas Rápidas
      </h3>
      <div class="space-y-1">
        {partialFaqs.map((faq) => (
          <PartialFAQItem
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
      <div class="text-right mt-3">
        {/* Botón para ir a la página de FAQ completa */}
        <a
          href="/faq"
          class="
            inline-block
            bg-[#008B8B]
            hover:bg-[#007575]
            text-white
            text-sm
            font-semibold
            px-4 py-2
            rounded-full
            shadow
            transition
            transform
            hover:scale-105
            active:scale-95
          "
        >
          Ver más preguntas
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
      <div class="bg-gradient-to-r from-[#1bc1c1] to-[#147373] p-4 sm:p-6 rounded-lg shadow-md">
        <h3 class="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <i class="fas fa-info-circle text-lime-200"></i>
          Detalles Importantes
        </h3>
        <ul class="space-y-4 text-gray-100">
          <li class="flex items-start gap-3 group">
            <i class="fas fa-calendar text-lime-200 mt-1 w-5"></i>
            <div>
              <span class="font-medium group-hover:text-lime-200 transition-colors">
                Fecha:
              </span>
              <p>2 de Febrero, 2025</p>
            </div>
          </li>
          <li class="flex items-start gap-3 group">
            <i class="fas fa-clock text-lime-200 mt-1 w-5"></i>
            <div>
              <span class="font-medium group-hover:text-lime-200 transition-colors">
                Horario:
              </span>
              <div class="space-y-1 mt-1 text-sm">
                <p>10:00 AM - Bienvenida e inicio</p>
                <p>2:00 PM - Almuerzo</p>
                <p>7:00 PM - Finalización</p>
              </div>
            </div>
          </li>
          <li class="flex items-start gap-3 group">
            <i class="fas fa-user-friends text-lime-200 mt-1 w-5"></i>
            <div>
              <span class="font-medium group-hover:text-lime-200 transition-colors">
                Aforo:
              </span>
              <p>Hasta 60 personas (aprox.)</p>
            </div>
          </li>
        </ul>
      </div>

      {/* 2) ¿Qué Incluye? */}
      <div class="bg-gradient-to-r from-[#1b9ac1] to-[#145473] p-4 sm:p-6 rounded-lg shadow-md">
        <h3 class="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <i class="fas fa-star text-lime-200"></i>
          ¿Qué Incluye?
        </h3>
        <ul class="space-y-4 text-gray-100">
          <li class="flex items-start gap-3 group">
            <i class="fas fa-swimming-pool text-lime-200 mt-1 w-5"></i>
            <div>
              <span class="font-medium group-hover:text-lime-200 transition-colors">
                Piscina
              </span>
              <p class="text-sm mt-1">Área para adultos y niños con supervisión</p>
            </div>
          </li>
          <li class="flex items-start gap-3 group">
            <i class="fas fa-futbol text-lime-200 mt-1 w-5"></i>
            <div>
              <span class="font-medium group-hover:text-lime-200 transition-colors">
                Deportes
              </span>
              <p class="text-sm mt-1">Fútbol, ping pong y más</p>
            </div>
          </li>
          <li class="flex items-start gap-3 group">
            <i class="fas fa-hamburger text-lime-200 mt-1 w-5"></i>
            <div>
              <span class="font-medium group-hover:text-lime-200 transition-colors">
                Comida
              </span>
              <p class="text-sm mt-1">Asado completo y snacks durante el día</p>
            </div>
          </li>
        </ul>
      </div>

      {/* 3) ¿Qué Llevar? */}
      <div class="bg-gradient-to-r from-[#1b6ec1] to-[#144173] p-4 sm:p-6 rounded-lg shadow-md">
        <h3 class="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <i class="fas fa-suitcase-rolling text-lime-200"></i>
          ¿Qué Llevar?
        </h3>
        <ul class="space-y-4 text-gray-100">
          <li class="flex items-start gap-3 group">
            <i class="fas fa-umbrella-beach text-lime-200 mt-1 w-5"></i>
            <div>
              <span class="font-medium group-hover:text-lime-200 transition-colors">
                Vestimenta
              </span>
              <p class="text-sm mt-1">Traje de baño, sandalias y ropa cómoda</p>
            </div>
          </li>
          <li class="flex items-start gap-3 group">
            <i class="fas fa-sun text-lime-200 mt-1 w-5"></i>
            <div>
              <span class="font-medium group-hover:text-lime-200 transition-colors">
                Bloqueador solar
              </span>
              <p class="text-sm mt-1">Protege tu piel del sol</p>
            </div>
          </li>
          <li class="flex items-start gap-3 group">
            <i class="fas fa-tshirt text-lime-200 mt-1 w-5"></i>
            <div>
              <span class="font-medium group-hover:text-lime-200 transition-colors">
                Extras
              </span>
              <p class="text-sm mt-1">Toalla, ropa de cambio y gafas de sol</p>
            </div>
          </li>
        </ul>
      </div>

      {/* 4) Preguntas Rápidas (PartialFAQ) */}
      <PartialFAQ />
    </div>
  );
}

export default InfoSection;


// LocationSection.jsx
const LocationSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#174e73] to-[#1b6ec1] p-4 sm:p-6 rounded-lg shadow-md text-gray-100">
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
        <i className="fas fa-map-marked-alt text-lime-200"></i>
        Ubicación
      </h3>

      {/* Mapa */}
      <div className="rounded-lg overflow-hidden shadow-lg mb-6">
        <iframe
          className="w-full h-[250px] sm:h-[300px]"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3336.639371795582!2d-70.70093602431751!3d-33.249749973469676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDE0JzU5LjEiUyA3MMKwNDEnNTQuMSJX!5e0!3m2!1ses-419!2scl!4v1738196095526!5m2!1ses-419!2scl"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Info de cómo llegar */}
      <div className="mb-6 space-y-2">
        <h4 className="font-medium text-lg text-lime-100">Cómo llegar:</h4>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <i className="fas fa-car text-lime-200 mt-1 w-5"></i>
            <span>30 minutos en auto desde Santiago Centro</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="fas fa-bus text-lime-200 mt-1 w-5"></i>
            <span>Transporte público desde Metro Los Dominicos</span>
          </li>
        </ul>
      </div>

      {/* Botones de navegación (ejemplo) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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

const LocationButton = ({ href, icon, text, bgColor, hoverColor, class: className }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        flex items-center justify-center gap-2
        ${bgColor} ${hoverColor} text-white
        py-3 px-4 rounded-lg
        transition-all duration-300 hover:shadow-lg
        active:scale-95 text-sm sm:text-base
        ${className}
      `}
    >
      <i className={`${icon} text-lg`}></i>
      {text}
    </a>
  );
};



export { InfoSection, LocationSection };