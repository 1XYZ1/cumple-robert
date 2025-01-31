import { onMount } from "solid-js";

function DominoSection() {
  onMount(() => {
    // Lógica al montar, si se requiere
  });

  return (
    <div class="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <div class="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        {/* Imagen de fondo con overlay */}
        <div class="absolute inset-0 overflow-hidden">
          <img
            src="/images/domino.jpg"
            alt="Partida de Dominó"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Contenido central del Hero */}
        <div class="relative z-10 text-center px-4 max-w-2xl">
          <h1 class="text-5xl md:text-6xl font-bold mb-4">Dominó</h1>
          <p class="text-xl text-gray-200 mb-8">
            Únete a nuestras partidas de dominó y disfruta de un ambiente de diversión y estrategia
          </p>
          <a
            href="#info"
            class="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition"
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
        {/* Información General y Reglas */}
        <div class="grid md:grid-cols-2 gap-8">
          {/* Información General */}
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
              <i class="fas fa-info-circle text-red-400"></i>
              Información General
            </h3>
            <div class="grid grid-cols-2 gap-4">
              <div class="p-4 bg-white/5 rounded-xl text-center">
                <div class="text-sm text-red-300 mb-1">Horario</div>
                <div class="text-xl">10:00 - 19:00</div>
              </div>
              <div class="p-4 bg-white/5 rounded-xl text-center">
                <div class="text-sm text-red-300 mb-1">Niveles</div>
                <div class="text-xl">Principiante - Avanzado</div>
              </div>
              <div class="p-4 bg-white/5 rounded-xl text-center">
                <div class="text-sm text-red-300 mb-1">Capacidad</div>
                <div class="text-xl">Hasta 4 jugadores por mesa</div>
              </div>
              <div class="p-4 bg-white/5 rounded-xl text-center">
                <div class="text-sm text-red-300 mb-1">Edad mínima</div>
                <div class="text-xl">12 años</div>
              </div>
            </div>
          </div>

          {/* Reglas */}
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
              <i class="fas fa-list text-red-400"></i>
              Reglas Importantes
            </h3>
            <ul class="space-y-3 text-gray-200">
              {[
                "Evitar golpear la mesa excesivamente",
                "Prohibido el uso de vocabulario ofensivo",
                "Se siguen las reglas clásicas de dominó",
                "No está permitido fumar en el área",
                "Mantener el orden y la limpieza",
              ].map((rule) => (
                <li class="flex items-start gap-3">
                  <i class="fas fa-check text-red-400 mt-1"></i>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Lo que debes traer */}
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <h3 class="text-2xl font-bold mb-6 text-center">Lo que debes traer</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "fas fa-chess-board", text: "Set de dominó (opcional)" },
              { icon: "fas fa-tshirt", text: "Ropa cómoda" },
              { icon: "fas fa-glass-water", text: "Hidratación" },
              { icon: "fas fa-user-friends", text: "Amigos" },
            ].map((item) => (
              <div class="text-center">
                <div class="w-16 h-16 mx-auto mb-3 rounded-full bg-red-500/20 flex items-center justify-center">
                  <i class={`${item.icon} text-2xl text-red-200`}></i>
                </div>
                <div>{item.text}</div>
              </div>
            ))}
          </div>
        </div>


        {/* VS Section: Wilmer vs. Cenaida */}
<div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
  <h3 class="text-2xl font-bold mb-8 text-center">¡Duelo de Titanes!</h3>
  <div class="flex flex-col md:flex-row items-center justify-center gap-8">
    {/* Wilmer */}
    <div class="flex flex-col items-center">
      <img
        src="/images/jugadores/wilmer.PNG"
        alt="Wilmer"
        class="w-32 h-32 object-cover rounded-full border-4 border-red-500 mb-4"
      />
      <h4 class="text-xl font-semibold text-red-300">Wilmer</h4>
      <p class="text-gray-300 text-center text-sm mt-2">
        Récord: <strong class="text-white">20 victorias</strong> / <strong class="text-white">5 derrotas</strong>
      </p>
      <p class="text-gray-300 text-center text-sm mt-2">
        Top Nacional: <strong class="text-white">#1</strong>
      </p>
      <p class="text-gray-300 text-center text-sm mt-2">
        Top Mundo: <strong class="text-white">#3</strong>
      </p>
    </div>

    {/* VS text */}
    <div class="text-3xl font-bold text-red-400">VS</div>

    {/* Cenaida */}
    <div class="flex flex-col items-center">
      <img
        src="/images/jugadores/cenaida.PNG"
        alt="Cenaida"
        class="w-32 h-32 object-cover rounded-full border-4 border-red-500 mb-4"
      />
      <h4 class="text-xl font-semibold text-red-300">Cenaida</h4>
      <p class="text-gray-300 text-center text-sm mt-2">
        Récord: <strong class="text-white">18 victorias</strong> / <strong class="text-white">7 derrotas</strong>
      </p>
      <p class="text-gray-300 text-center text-sm mt-2">
        Top Nacional: <strong class="text-white">#2</strong>
      </p>
      <p class="text-gray-300 text-center text-sm mt-2">
        Top Mundo: <strong class="text-white">#7</strong>
      </p>
    </div>
  </div>
</div>


        {/* Sección CTA final */}
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
          <h3 class="text-3xl font-bold mb-4">¿Listo para una partida desafiante?</h3>
          <p class="text-gray-200 mb-6 max-w-xl mx-auto">
            ¡Que las fichas estén a tu favor! Ven a disfrutar de grandes momentos y demuestra
            que eres un verdadero maestro del dominó.
          </p>

        </div>
      </div>
    </div>
  );
}

export default DominoSection;
