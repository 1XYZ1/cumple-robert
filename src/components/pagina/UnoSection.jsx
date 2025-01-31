import { onMount } from "solid-js";

function UnoSection() {
  onMount(() => {
    // Lógica de montaje si se requiere
  });

  return (
    <div class="min-h-screen bg-gradient-to-br from-[#1a1c2e] via-[#1f2937] to-[#111827] text-white">
      {/* Hero Section */}
      <div class="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        {/* Imagen de fondo con overlay */}
        <div class="absolute inset-0 overflow-hidden">
          <img
            src="/images/uno.jpg"
            alt="Juego de UNO"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#1a1c2e]"></div>
        </div>

        {/* Contenido central del Hero */}
        <div class="relative z-10 text-center px-4 max-w-2xl">
          <h1 class="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-300">
            UNO
          </h1>
          <p class="text-xl text-gray-200 mb-8 leading-relaxed max-w-xl mx-auto">
            ¡Prepárate para gritar UNO! y demostrar tus habilidades estratégicas
          </p>
          <a
            href="#info"
            class="inline-block bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
          >
            Ver Detalles
          </a>
        </div>

        {/* Botón de navegación */}
        <nav class="absolute top-6 left-6">
          <a
            href="/"
            class="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all duration-300 backdrop-blur-sm shadow-lg"
          >
            <i class="fas fa-arrow-left"></i>
            <span class="font-medium">Volver al inicio</span>
          </a>
        </nav>
      </div>

      {/* Contenido Principal */}
      <div id="info" class="max-w-7xl mx-auto px-4 py-12 md:py-16 space-y-16">
        {/* Sección de la Retadora */}
        <div class="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md rounded-3xl p-12 border border-gray-700/50 shadow-2xl">
          <div class="grid md:grid-cols-2 gap-16 items-center">
            {/* Información de la Retadora */}
            <div class="space-y-12">
              {/* Encabezado */}
              <div class="space-y-6">
                <span class="inline-block text-sm font-medium tracking-wider text-red-400 uppercase px-4 py-2 bg-red-500/10 rounded-lg border border-red-500/20">
                  La Retadora Invicta
                </span>
                <h2 class="text-7xl md:text-8xl font-bold leading-none bg-gradient-to-r from-red-400 via-yellow-200 to-red-400 text-transparent bg-clip-text tracking-tight">
                  YEISIMAR
                </h2>
                <p class="text-2xl text-red-400 font-medium tracking-wide">
                  Reina de las Cartas
                </p>
              </div>

              {/* Estadísticas */}
              <ul class="grid gap-6 text-lg">
                <li class="flex items-center gap-4 bg-white/5 rounded-2xl p-4 border border-white/10">
                  <span class="flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/20">
                    <i class="fas fa-trophy text-yellow-400 text-xl"></i>
                  </span>
                  <span class="text-gray-100">12 victorias consecutivas</span>
                </li>
                <li class="flex items-center gap-4 bg-white/5 rounded-2xl p-4 border border-white/10">
                  <span class="flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/20">
                    <i class="fas fa-bolt text-yellow-400 text-xl"></i>
                  </span>
                  <span class="text-gray-100">Maestra del +4</span>
                </li>
                <li class="flex items-center gap-4 bg-white/5 rounded-2xl p-4 border border-white/10">
                  <span class="flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/20">
                    <i class="fas fa-star text-yellow-400 text-xl"></i>
                  </span>
                  <span class="text-gray-100">Estratega implacable</span>
                </li>
              </ul>
            </div>

            {/* Imagen de la Retadora */}
            <div class="relative">
              <div class="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50">
                <img
                  src="/images/jugadores/yeisimar.jpeg"
                  alt="Yeisimar en acción"
                  class="w-full aspect-[4/5] object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Estadísticas flotantes */}
              <div class="absolute md:top-4 md:right-4 md:left-auto md:translate-y-0 bottom-6 right-4 md:right-4 bg-black/80 backdrop-blur-md rounded-2xl p-2 md:p-4 text-center shadow-2xl border border-gray-700/50 w-[calc(50%-24px)] md:w-auto md:h-[90px]">
                <div class="text-2xl md:text-3xl font-bold text-red-400">95%</div>
                <div class="text-xs md:text-sm font-medium text-gray-200">Tasa de Victoria</div>
              </div>
              <div class="absolute md:bottom-6 md:left-6 md:right-auto bottom-6 left-4 md:left-6 bg-black/80 backdrop-blur-md rounded-2xl p-2 md:p-4 text-center shadow-2xl border border-gray-700/50 w-[calc(50%-24px)] md:w-auto md:h-[90px]">
                <div class="text-2xl md:text-3xl font-bold text-yellow-400">MVP</div>
                <div class="text-xs md:text-sm font-medium text-gray-200">Mejor Jugadora</div>
              </div>
            </div>
          </div>
        </div>

        {/* Información General (Opcional) */}
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
            <i class="fas fa-info-circle text-red-500"></i>
            Información General
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div class="bg-white/5 p-4 rounded-xl">
              <span class="text-sm text-red-300">Jugadores</span>
              <p class="text-xl mt-1">2 - 10</p>
            </div>
            <div class="bg-white/5 p-4 rounded-xl">
              <span class="text-sm text-red-300">Tiempo Estimado</span>
              <p class="text-xl mt-1">15 - 30 mins</p>
            </div>
            <div class="bg-white/5 p-4 rounded-xl">
              <span class="text-sm text-red-300">Nivel</span>
              <p class="text-xl mt-1">Familiar</p>
            </div>
            <div class="bg-white/5 p-4 rounded-xl">
              <span class="text-sm text-red-300">Cartas Especiales</span>
              <p class="text-xl mt-1">+2, +4, Wild, Reverse</p>
            </div>
          </div>
        </div>

        {/* Reglas Oficiales de UNO */}
        <div class="rounded-2xl p-6 bg-black/40 border border-white/10 shadow-lg">
          <h3 class="text-3xl font-bold mb-6 flex items-center gap-3">
            <i class="fas fa-list-ol text-yellow-300"></i>
            Reglas Oficiales
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Tarjeta 1: Objetivo */}
            <div class="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-tr from-blue-600 to-blue-500 shadow">
              <i class="fas fa-bullseye text-3xl text-white"></i>
              <div>
                <h4 class="font-bold text-xl mb-2">1. Objetivo</h4>
                <p class="text-sm text-white/90 leading-relaxed">
                  Ser el primero en quedarse sin cartas en la mano. Acumula puntos cada vez que otro jugador se quede con cartas.
                </p>
              </div>
            </div>

            {/* Tarjeta 2: Preparación */}
            <div class="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-tr from-green-700 to-green-500 shadow">
              <i class="fas fa-hand-paper text-3xl text-white"></i>
              <div>
                <h4 class="font-bold text-xl mb-2">2. Preparación</h4>
                <p class="text-sm text-white/90 leading-relaxed">
                  Baraja las cartas y reparte 7 a cada jugador. Las restantes forman el mazo de robo. La primera carta del mazo se voltea al descarte.
                </p>
              </div>
            </div>

            {/* Tarjeta 3: Turnos */}
            <div class="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-tr from-red-700 to-red-500 shadow">
              <i class="fas fa-play-circle text-3xl text-white"></i>
              <div>
                <h4 class="font-bold text-xl mb-2">3. Turnos</h4>
                <p class="text-sm text-white/90 leading-relaxed">
                  Cada jugador debe soltar una carta que coincida en color, número o símbolo con la superior del descarte. Si no puede, roba una carta.
                </p>
              </div>
            </div>

            {/* Tarjeta 4: Cartas Especiales */}
            <div class="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-tr from-yellow-500 to-yellow-300 shadow">
              <i class="fas fa-star text-3xl text-black"></i>
              <div>
                <h4 class="font-bold text-xl mb-2 text-black">4. Cartas Especiales</h4>
                <ul class="list-disc list-inside text-sm text-black/90 leading-relaxed">
                  <li><strong>+2</strong>: El siguiente roba 2 cartas y pierde turno.</li>
                  <li><strong>+4</strong>: Elige color y el siguiente roba 4 cartas.</li>
                  <li><strong>Wild</strong>: Comodín para cambiar de color.</li>
                  <li><strong>Reverse</strong>: Invierte el sentido.</li>
                  <li><strong>Skip</strong>: Salta al siguiente jugador.</li>
                </ul>
              </div>
            </div>

            {/* Tarjeta 5: Uno */}
            <div class="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-tr from-pink-700 to-pink-500 shadow">
              <i class="fas fa-exclamation text-3xl text-white"></i>
              <div>
                <h4 class="font-bold text-xl mb-2">5. UNO</h4>
                <p class="text-sm text-white/90 leading-relaxed">
                  Cuando te quede una sola carta, ¡grita "UNO"! Si te descubren sin anunciarlo, deberás robar 2 cartas.
                </p>
              </div>
            </div>

            {/* Tarjeta 6: Fin de Ronda */}
            <div class="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-tr from-purple-700 to-purple-500 shadow">
              <i class="fas fa-flag-checkered text-3xl text-white"></i>
              <div>
                <h4 class="font-bold text-xl mb-2">6. Fin de Ronda</h4>
                <p class="text-sm text-white/90 leading-relaxed">
                  Cuando alguien se queda sin cartas, suma los puntos de las que tengan los demás. Gana quien primero alcance los puntos acordados (ej: 500).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Podio: Top 3 Jugadores (Próximamente) */}
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
          <h3 class="text-2xl font-bold mb-4">Top 3 Jugadores</h3>
          <p class="text-gray-300 mb-8">
            ¡Próximamente anunciaremos quiénes fueron los mejores 3 jugadores de UNO!
          </p>

          {/* Podio (columna 2 - 1 - 3) */}
          <div class="flex items-end justify-center gap-4 mb-6">
            {/* 2do lugar */}
            <div class="flex flex-col items-center">
              <div class="bg-gray-500/20 w-24 h-36 flex flex-col justify-end rounded-t-md relative">
                {/* Posición */}
                <span class="absolute top-2 left-1/2 transform -translate-x-1/2 text-sm font-bold text-white">
                  2°
                </span>
                {/* Silueta / Placeholder */}
                <div class="bg-gray-600 rounded-full w-12 h-12 mx-auto mb-3"></div>
              </div>
              <span class="text-gray-300 text-sm mt-2">2do Lugar</span>
            </div>

            {/* 1er lugar */}
            <div class="flex flex-col items-center">
              <div class="bg-red-600/20 w-24 h-48 flex flex-col justify-end rounded-t-md relative">
                <span class="absolute top-2 left-1/2 transform -translate-x-1/2 text-sm font-bold text-white">
                  1°
                </span>
                <div class="bg-gray-600 rounded-full w-12 h-12 mx-auto mb-3"></div>
              </div>
              <span class="text-gray-300 text-sm mt-2">1er Lugar</span>
            </div>

            {/* 3er lugar */}
            <div class="flex flex-col items-center">
              <div class="bg-gray-500/20 w-24 h-32 flex flex-col justify-end rounded-t-md relative">
                <span class="absolute top-2 left-1/2 transform -translate-x-1/2 text-sm font-bold text-white">
                  3°
                </span>
                <div class="bg-gray-600 rounded-full w-12 h-12 mx-auto mb-3"></div>
              </div>
              <span class="text-gray-300 text-sm mt-2">3er Lugar</span>
            </div>
          </div>

          <p class="text-sm text-gray-400">
            Tras el evento, aquí colocaremos sus nombres y fotos.
          </p>
        </div>

        {/* CTA final */}
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
          <h3 class="text-3xl font-bold mb-4">¿Listo para gritar UNO?</h3>
          <p class="text-gray-200 mb-6 max-w-xl mx-auto">
            Reúne a tus amigos, prepara las cartas y demuestra tus habilidades en el clásico juego de UNO.
            ¡Nada mejor que la emoción de bajarte la última carta!
          </p>

        </div>
      </div>
    </div>
  );
}

export default UnoSection;
