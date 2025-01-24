import { onMount } from "solid-js";
import styles from "./PoolSection.module.css";

function PoolSection() {
  onMount(() => {
    // Aquí podrías cargar datos o iniciar lógica adicional si lo requieres
  });

  return (
    <div class="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900">
      {/* Hero Section */}
      <div class="relative h-[60vh] min-h-[500px]">
        <div class="absolute inset-0 overflow-hidden">
          <img
            src="/images/pool.jpeg"
            alt="Piscina"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-blue-900/90"></div>
        </div>

        {/* SVG Animado como overlay del hero */}
        <div class="absolute bottom-0 left-0 right-0 h-48 md:h-64 overflow-hidden">
  <svg
    viewBox="0 0 1200 200"
    class="w-[120%] h-full absolute -left-[10%]"
    preserveAspectRatio="none"
    style={{ background: "none" }} /* Evita fondo no deseado */
  >
    <defs>
      <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#60A5FA;stop-opacity:0.7;" />
        <stop offset="100%" style="stop-color:#1D4ED8;stop-opacity:0.9;" />
      </linearGradient>

      <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#93C5FD;stop-opacity:0.8;" />
        <stop offset="100%" style="stop-color:#3B82F6;stop-opacity:0.6;" />
      </linearGradient>
    </defs>

    {/** Onda principal (morph usando SMIL) */}
    <path fill="url(#waveGradient1)">
      <animate
        attributeName="d"
        dur="8s"
        repeatCount="indefinite"
        values="
          M0 80 C300 80, 900 80, 1200 80 C1200 80, 1200 200, 1200 200 L0 200 C0 200, 0 80, 0 80 Z;
          M0 85 C300 75, 900 85, 1200 75 C1200 75, 1200 200, 1200 200 L0 200 C0 200, 0 85, 0 85 Z;
          M0 80 C300 80, 900 80, 1200 80 C1200 80, 1200 200, 1200 200 L0 200 C0 200, 0 80, 0 80 Z
        "
      />
    </path>

    {/** Segunda onda (morph también con SMIL) */}
    <path fill="url(#waveGradient2)">
      <animate
        attributeName="d"
        dur="7s"
        repeatCount="indefinite"
        values="
          M0 90 C300 90, 900 90, 1200 90 L1200 200 L0 200 Z;
          M0 95 C300 85, 900 95, 1200 85 L1200 200 L0 200 Z;
          M0 90 C300 90, 900 90, 1200 90 L1200 200 L0 200 Z
        "
      />
    </path>

    {/** Líneas onduladas decorativas (animación por CSS transform) */}
    <path
      d="M0 95 C300 90, 900 100, 1200 95"
      fill="none"
      stroke="#93C5FD"
      stroke-width="2"
      class="waveLine1"
    />
    <path
      d="M0 105 C400 100, 800 110, 1200 105"
      fill="none"
      stroke="#BFDBFE"
      stroke-width="1.5"
      class="waveLine2"
    />
    <path
      d="M0 115 C300 110, 900 120, 1200 115"
      fill="none"
      stroke="#EFF6FF"
      stroke-width="1"
      class="waveLine3"
    />

    {/** Brillos (shines) */}
    <circle cx="150" cy="95" r="1" fill="#FFFFFF" class="shine1" />
    <circle cx="450" cy="105" r="1.5" fill="#FFFFFF" class="shine2" />
    <circle cx="750" cy="98" r="1" fill="#FFFFFF" class="shine1" />
    <circle cx="1050" cy="102" r="1.5" fill="#FFFFFF" class="shine2" />

    {/** Burbujas ascendentes (CSS) */}
    <circle cx="100" cy="180" r="3" fill="#E0F2FE" class="bubble1" />
    <circle cx="300" cy="190" r="4" fill="#93C5FD" class="bubble2" />
    <circle cx="500" cy="170" r="3.5" fill="#60A5FA" class="bubble1" />
    <circle cx="700" cy="185" r="2.5" fill="#BFDBFE" class="bubble3" />
    <circle cx="900" cy="195" r="3" fill="#93C5FD" class="bubble2" />
    <circle cx="1100" cy="175" r="4" fill="#E0F2FE" class="bubble3" />

    {/** Salvavidas con flotación suave (CSS) */}
    <g class="lifebuoy">
      <circle cx="1100" cy="40" r="15" fill="#FF6B6B" />
      <circle cx="1100" cy="40" r="7" fill="#F1F5F9" />
      <path
        d="M1100,25 L1100,31 M1085,40 L1092,40 M1115,40 L1108,40 M1100,49 L1100,43"
        stroke="#F1F5F9"
        stroke-width="2"
        stroke-linecap="round"
      />
    </g>
  </svg>
</div>




        <div class="absolute inset-0 flex items-center justify-center z-10">
          <div class="text-center px-4 mb-20">
            <h1 class="text-5xl md:text-6xl font-bold text-white mb-4">Piscina</h1>
            <p class="text-xl text-blue-100 max-w-2xl mx-auto">
              Disfruta de un refrescante día de piscina con todas las comodidades
            </p>
          </div>
        </div>

        {/* Botón de navegación */}
        <nav class="absolute top-6 left-6 z-20">
          <a
            href="/"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 backdrop-blur-sm"
          >
            <i class="fas fa-arrow-left"></i>
            Volver al inicio
          </a>
        </nav>
      </div>

      {/* Contenido Principal */}
      <div class="max-w-7xl mx-auto px-4 py-16 space-y-16">
        {/* Grid de información */}
        <div class="grid md:grid-cols-2 gap-8">
          {/* Horarios y Capacidad */}
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:shadow-lg transition-shadow">
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <i class="fas fa-clock text-blue-400"></i>
              Información General
            </h3>
            <div class="grid grid-cols-2 gap-4">
              <div class="p-4 bg-white/5 rounded-xl text-center">
                <div class="text-sm text-blue-300 mb-1">Horario</div>
                <div class="text-xl text-white">10:00 - 20:00</div>
              </div>
              <div class="p-4 bg-white/5 rounded-xl text-center">
                <div class="text-sm text-blue-300 mb-1">Temperatura</div>
                <div class="text-xl text-white">28°C</div>
              </div>
              <div class="p-4 bg-white/5 rounded-xl text-center">
                <div class="text-sm text-blue-300 mb-1">Profundidad</div>
                <div class="text-xl text-white">1.2m - 2.5m</div>
              </div>
              <div class="p-4 bg-white/5 rounded-xl text-center">
                <div class="text-sm text-blue-300 mb-1">Capacidad</div>
                <div class="text-xl text-white">20 personas</div>
              </div>
            </div>
          </div>

          {/* Reglas */}
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:shadow-lg transition-shadow">
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <i class="fas fa-list text-blue-400"></i>
              Reglas Importantes
            </h3>
            <ul class="space-y-3">
              {[
                "No correr cerca de la piscina",
                "Ducharse antes de entrar",
                "No comer dentro de la piscina",
                "Supervisión de menores obligatoria",
                "No vidrios en el área",
                "Usar traje de baño adecuado"
              ].map((rule) => (
                <li class="flex items-center gap-3 text-gray-200">
                  <i class="fas fa-check text-blue-400"></i>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Recomendaciones */}
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:shadow-lg transition-shadow">
          <h3 class="text-2xl font-bold text-white mb-6 text-center">Lo que debes traer</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "fas fa-umbrella", text: "Sombrilla" },
              { icon: "fas fa-tshirt", text: "Muda de ropa" },
              { icon: "fas fa-prescription-bottle", text: "Protector solar" },
              { icon: "fas fa-glasses", text: "Gafas de sol" }
            ].map((item) => (
              <div class="text-center">
                <div class="w-16 h-16 mx-auto mb-3 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <i class={`${item.icon} text-2xl text-white`}></i>
                </div>
                <div class="text-white">{item.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Servicios Adicionales */}
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:shadow-lg transition-shadow">
          <h3 class="text-2xl font-bold text-white mb-6 text-center">Servicios Adicionales</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="flex items-center gap-4 text-white">
              <i class="fas fa-cocktail text-3xl text-blue-300"></i>
              <div>
                <h4 class="text-xl font-semibold">Bar en la Piscina</h4>
                <p class="text-sm text-blue-100">Bebidas refrescantes sin salir del agua</p>
              </div>
            </div>
            <div class="flex items-center gap-4 text-white">
              <i class="fas fa-spa text-3xl text-pink-300"></i>
              <div>
                <h4 class="text-xl font-semibold">Spa & Masajes</h4>
                <p class="text-sm text-blue-100">Relájate aún más con nuestro servicio de spa</p>
              </div>
            </div>
            <div class="flex items-center gap-4 text-white">
              <i class="fas fa-ice-cream text-3xl text-yellow-300"></i>
              <div>
                <h4 class="text-xl font-semibold">Snack Bar</h4>
                <p class="text-sm text-blue-100">Helados, fruta fresca y más</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PoolSection;
