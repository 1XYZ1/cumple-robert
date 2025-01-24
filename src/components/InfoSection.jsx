// InfoSection.jsx
const InfoSection = () => {
  return (
    <div class="space-y-6">
      {/* Sección de Detalles */}
      <div class="bg-blue-800/30 p-4 sm:p-6 rounded-lg backdrop-blur">
        <h3 class="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <i class="fas fa-info-circle text-blue-400"></i>
          Detalles Importantes
        </h3>
        <ul class="space-y-4 text-gray-200">
          <li class="flex items-start gap-3 group">
            <i class="fas fa-calendar text-blue-400 mt-1 w-5"></i>
            <div class="flex-1">
              <span class="font-medium group-hover:text-blue-400 transition-colors">Fecha:</span>
              <p>2 de Febrero, 2025</p>
            </div>
          </li>
          <li class="flex items-start gap-3 group">
            <i class="fas fa-clock text-blue-400 mt-1 w-5"></i>
            <div class="flex-1">
              <span class="font-medium group-hover:text-blue-400 transition-colors">Horario:</span>
              <div class="space-y-1 mt-1">
                <p class="text-sm">10:00 AM - Bienvenida e inicio</p>
                <p class="text-sm">2:00 PM - Almuerzo</p>
                <p class="text-sm">8:00 PM - Finalización</p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      {/* Sección de Qué Incluye */}
      <div class="bg-blue-800/30 p-4 sm:p-6 rounded-lg backdrop-blur">
        <h3 class="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <i class="fas fa-star text-blue-400"></i>
          ¿Qué Incluye?
        </h3>
        <ul class="space-y-4 text-gray-200">
          <li class="flex items-start gap-3 group">
            <i class="fas fa-swimming-pool text-blue-400 mt-1 w-5"></i>
            <div class="flex-1">
              <span class="font-medium group-hover:text-blue-400 transition-colors">Piscina</span>
              <p class="text-sm mt-1">Área para adultos y niños con supervisión</p>
            </div>
          </li>
          <li class="flex items-start gap-3 group">
            <i class="fas fa-futbol text-blue-400 mt-1 w-5"></i>
            <div class="flex-1">
              <span class="font-medium group-hover:text-blue-400 transition-colors">Deportes</span>
              <p class="text-sm mt-1">Fútbol, ping pong y más</p>
            </div>
          </li>
          <li class="flex items-start gap-3 group">
            <i class="fas fa-hamburger text-blue-400 mt-1 w-5"></i>
            <div class="flex-1">
              <span class="font-medium group-hover:text-blue-400 transition-colors">Comida</span>
              <p class="text-sm mt-1">Asado completo y snacks todo el día</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

// LocationSection.jsx
const LocationSection = () => {
  return (
    <div class="bg-blue-800/30 p-4 sm:p-6 rounded-lg backdrop-blur">
      <h3 class="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
        <i class="fas fa-map-marked-alt text-blue-400"></i>
        Ubicación
      </h3>

      {/* Mapa */}
      <div class="rounded-lg overflow-hidden shadow-lg mb-6">
        <iframe
          class="w-full h-[250px] sm:h-[300px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.181535861286!2d-70.70482032465302!3d-33.308620037426374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c0c5ad12e89d%3A0x1b3b6e183f0040a5!2sChicureo!5e0!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Información de cómo llegar */}
      <div class="text-gray-200 mb-6">
        <h4 class="font-medium text-lg mb-2">Cómo llegar:</h4>
        <ul class="space-y-2">
          <li class="flex items-start gap-2">
            <i class="fas fa-car text-blue-400 mt-1 w-5"></i>
            <span>30 minutos en auto desde Santiago Centro</span>
          </li>
          <li class="flex items-start gap-2">
            <i class="fas fa-bus text-blue-400 mt-1 w-5"></i>
            <span>Transporte público desde Metro Los Dominicos</span>
          </li>
        </ul>
      </div>

      {/* Botones de navegación */}
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <LocationButton
          href="https://wa.me/1234567890"
          icon="fab fa-whatsapp"
          text="Me perdí ayúdame :("
          bgColor="bg-green-600"
          hoverColor="hover:bg-green-700"
        />
        <LocationButton
          href="https://maps.google.com/?q=-33.12345,-70.12345"
          icon="fas fa-map-marker-alt"
          text="Google Maps"
          bgColor="bg-red-600"
          hoverColor="hover:bg-red-700"
        />
        <LocationButton
          href="https://www.waze.com/ul?ll=-33.12345,-70.12345&navigate=yes"
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
      class={`flex items-center justify-center gap-2 ${bgColor} ${hoverColor} text-white py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg active:scale-95 text-sm sm:text-base ${className}`}
    >
      <i class={`${icon} text-lg`}></i>
      {text}
    </a>
  );
};

export { InfoSection, LocationSection };