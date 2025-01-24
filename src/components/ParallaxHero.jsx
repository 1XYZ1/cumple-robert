import { createSignal, onMount, onCleanup } from 'solid-js';

const ParallaxHero = () => {
  const [offset, setOffset] = createSignal(0);

  const handleScroll = () => {
    setOffset(window.pageYOffset * 0.5);
  };

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    onCleanup(() => window.removeEventListener('scroll', handleScroll));
  });

  return (
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        class="absolute inset-0 z-0"
        style={{ transform: `translate3d(0, ${offset()}px, 0)` }}
      >
        <img
          src="/images/pool.jpeg"
          alt="Pool Party"
          class="w-full h-full object-cover opacity-25"
        />
        <div
          class="absolute inset-0 bg-gradient-to-b from-blue-900/50 via-blue-800/60 to-gray-900/80"
          style="backdrop-filter: blur(3px);"
        ></div>
      </div>

      {/* Contenido del Hero */}
      <div class="relative z-10 text-center px-4 py-20 animate-fadeIn">
        <h1 class="text-6xl font-bold text-white mb-4 font-montserrat animate-slideDown">
          Robert<span class="text-blue-400 animate-pulse">'s</span> Party
        </h1>
        <p class="text-xl text-white mb-8 max-w-2xl mx-auto animate-slideUp">
          ¡Únete a nosotros para celebrar un día especial lleno de diversión, piscina y momentos inolvidables!
        </p>

        {/* Detalles del evento */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <div class="text-center transform hover:scale-105 transition-transform duration-300">
            <i class="fas fa-calendar text-3xl text-white mb-2 hover:text-blue-400 transition-colors"></i>
            <h3 class="text-xl font-semibold text-white">Cuándo</h3>
            <p class="text-gray-200">2 de Febrero, 2025</p>
          </div>
          <div class="text-center transform hover:scale-105 transition-transform duration-300">
            <i class="fas fa-map-marker-alt text-3xl text-red-500 mb-2 hover:text-red-400 transition-colors"></i>
            <h3 class="text-xl font-semibold text-white">Dónde</h3>
            <p class="text-gray-200">Chicureo, Santiago</p>
          </div>
          <div class="text-center transform hover:scale-105 transition-transform duration-300">
            <i class="fas fa-clock text-3xl text-white mb-2 hover:text-blue-400 transition-colors"></i>
            <h3 class="text-xl font-semibold text-white">Hora</h3>
            <p class="text-gray-200">10:00 hrs</p>
          </div>
        </div>

        {/* Slot para el Countdown */}
        <div class="transform hover:scale-105 transition-transform duration-300">
          <slot name="countdown" />
        </div>

        {/* CTA */}
        <div class="mt-12 animate-bounce">
          <a
            href="#info"
            class="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full inline-flex items-center gap-2 transition-all duration-300 hover:shadow-lg"
          >
            Más Información
            <i class="fas fa-arrow-down"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ParallaxHero;