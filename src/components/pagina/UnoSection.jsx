import { onMount } from "solid-js";

function UnoSection() {
  onMount(() => {
    // Lógica de montaje si se requiere
  });

  return (
    <div class="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white">
      {/* Hero Section */}
      <div class="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        {/* Imagen de fondo con overlay */}
        <div class="absolute inset-0 overflow-hidden">
          <img
            src="/images/uno.jpg"  // Ajusta a la ruta correcta de tu imagen
            alt="Cartas UNO"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Contenido central del Hero */}
        <div class="relative z-10 text-center px-4 max-w-2xl">
          <h1 class="text-5xl md:text-6xl font-bold mb-4 drop-shadow-xl">UNO</h1>
          <p class="text-xl text-gray-200 mb-8 drop-shadow">
            La emoción de UNO te espera. ¡Domina las reglas y no olvides gritar “UNO”!
          </p>
          <a
            href="#info"
            class="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition drop-shadow"
          >
            Ver Detalles
          </a>
        </div>

        {/* Botón de navegación (Volver al inicio) */}
        <nav class="absolute top-6 left-6">
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
      <div id="info" class="max-w-7xl mx-auto px-4 py-16 space-y-16">
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
          <a
            href="/reservar-uno"
            class="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            ¡Juguemos!
          </a>
        </div>
      </div>
    </div>
  );
}

export default UnoSection;
