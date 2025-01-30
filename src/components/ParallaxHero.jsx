// Importación de hooks de Solid.js para manejo de estado y ciclo de vida
import { createSignal, onMount, onCleanup } from 'solid-js';
// Importación del componente de cuenta regresiva
import Countdown from './Countdown';

// Componente Hero con efecto parallax para la sección principal
const ParallaxHero = () => {
  // Estado para controlar el desplazamiento del parallax
  const [offset, setOffset] = createSignal(0);
  const [isVisible, setIsVisible] = createSignal(true);

  // Manejador del evento scroll para actualizar el efecto parallax
  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    setOffset(scrolled * 0.5);
    setIsVisible(scrolled < window.innerHeight);
  };

  // Configuración de eventos al montar y limpiar el componente
  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    // Limpieza del evento al desmontar el componente
    onCleanup(() => window.removeEventListener('scroll', handleScroll));
  });

  return (
    // Contenedor principal con altura completa de la pantalla
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Capa de fondo con efecto parallax */}
      <div
        class="absolute inset-0 z-0"
        style={{ transform: `translate3d(0, ${offset()}px, 0)` }}
      >
        {/* Imagen de fondo */}
        <img
          src="/images/pool.jpeg"
          alt="Pool Party"
          class="w-full h-full object-cover"
        />
        {/* Overlay con gradiente para mejorar el contraste */}
        <div class="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-slate-900/80 to-gray-950/90 backdrop-blur-sm"></div>
      </div>

      {/* Efectos de decoración */}
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Círculos decorativos principales */}
        <div class="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s"></div>

        {/* Destellos cálidos sutiles */}
        <div class="absolute top-1/3 right-1/4 w-[200px] h-[200px] bg-gradient-to-br from-amber-500/10 to-orange-500/5 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s; animation-duration: 6s;"></div>
        <div class="absolute bottom-1/4 left-1/3 w-[250px] h-[250px] bg-gradient-to-br from-yellow-500/10 to-amber-500/5 rounded-full blur-3xl animate-pulse" style="animation-delay: 3s; animation-duration: 8s;"></div>
        <div class="absolute top-2/3 right-1/3 w-[180px] h-[180px] bg-gradient-to-br from-orange-500/10 to-red-500/5 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s; animation-duration: 7s;"></div>
      </div>

      {/* Contenido del Hero */}
      <div class="relative z-10 w-full max-w-7xl mx-auto px-4 py-12 sm:py-20">
        <div class="text-center space-y-6 sm:space-y-8">
          {/* Título principal con animación y destello cálido */}
          <div class="relative inline-block animate-float">
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 blur-3xl"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-orange-500/5 blur-3xl animate-pulse" style="animation-duration: 4s;"></div>
            <h1 class="relative text-6xl sm:text-7xl md:text-8xl font-bold">
              <span class="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Robert
              </span>
              <span class="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                's
              </span>
              <span class="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Party
              </span>
            </h1>
          </div>

          {/* Descripción con efecto de desvanecimiento */}
          <p class="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed animate-fade-in px-4">
            ¡Únete a nosotros para celebrar un día especial lleno de diversión, piscina y momentos inolvidables!
          </p>

          {/* Detalles del evento con hover effects */}
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto mt-8 sm:mt-12 px-4">
            {/* Fecha */}
            <div class="group relative">
              <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div class="relative bg-black/30 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/10 transform group-hover:scale-105 transition-all duration-300">
                <i class="fas fa-calendar text-2xl sm:text-3xl text-cyan-300 mb-3 sm:mb-4 group-hover:scale-110 transition-transform"></i>
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">Cuándo</h3>
                <p class="text-cyan-200">2 de Febrero, 2025</p>
              </div>
            </div>

            {/* Lugar */}
            <div class="group relative">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div class="relative bg-black/30 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/10 transform group-hover:scale-105 transition-all duration-300">
                <i class="fas fa-map-marker-alt text-2xl sm:text-3xl text-blue-300 mb-3 sm:mb-4 group-hover:scale-110 transition-transform"></i>
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">Dónde</h3>
                <p class="text-blue-200">Chicureo, Santiago</p>
              </div>
            </div>

            {/* Hora */}
            <div class="group relative sm:col-span-2 md:col-span-1">
              <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div class="relative bg-black/30 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/10 transform group-hover:scale-105 transition-all duration-300">
                <i class="fas fa-clock text-2xl sm:text-3xl text-cyan-300 mb-3 sm:mb-4 group-hover:scale-110 transition-transform"></i>
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">Hora</h3>
                <p class="text-cyan-200">10:00 hrs</p>
              </div>
            </div>
          </div>

          {/* Countdown con animación de entrada */}
          <div class="mt-12 sm:mt-16 animate-fade-in-up px-4">
            <Countdown />
          </div>

          {/* CTA con efectos mejorados */}
          <div class="mt-12 sm:mt-16">
            <a
              href="#info"
              class="group relative inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 text-white font-bold text-base sm:text-lg hover:shadow-xl transition-all duration-500 animate-float"
            >
              <span class="relative z-10">Más Información</span>
              <i class="fas fa-arrow-down relative z-10 group-hover:translate-y-1 transition-transform"></i>
              <div class="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div
        class={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${
          isVisible() ? 'opacity-100' : 'opacity-0'
        }`}
      >

      </div>
    </section>
  );
};

export default ParallaxHero;