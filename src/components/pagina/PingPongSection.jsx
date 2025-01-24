import { onMount } from "solid-js";

function PingPongSection() {
  onMount(() => {
    // Lógica de montaje si se requiere
  });

  return (
    <div class="min-h-screen bg-gradient-to-b from-green-800 via-green-700 to-green-600 text-white">
      {/* Hero Section */}
      <div class="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        {/* Imagen de fondo con overlay */}
        <div class="absolute inset-0 overflow-hidden">
          <img
            src="/images/pingpong.jpg"
            alt="Partida de Ping Pong"
            class="w-full h-full object-cover"
          />
          {/* Overlay algo transparente para no oscurecer tanto */}
          <div class="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Contenido central del Hero */}
        <div class="relative z-10 text-center px-4 max-w-2xl">
          <h1 class="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Ping Pong</h1>
          <p class="text-xl text-gray-100 mb-8 drop-shadow">
            Participa en nuestras mesas de tenis de mesa y vive la emoción de cada saque
          </p>
          <a
            href="#info"
            class="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition drop-shadow"
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
                <div class="text-sm text-red-200 mb-1">Horario</div>
                <div class="text-xl">10:00 - 22:00</div>
              </div>
              <div class="p-4 bg-white/5 rounded-xl text-center">
                <div class="text-sm text-red-200 mb-1">Niveles</div>
                <div class="text-xl">Principiante - Avanzado</div>
              </div>
              <div class="p-4 bg-white/5 rounded-xl text-center">
                <div class="text-sm text-red-200 mb-1">Mesas Disponibles</div>
                <div class="text-xl">4 mesas</div>
              </div>
              <div class="p-4 bg-white/5 rounded-xl text-center">
                <div class="text-sm text-red-200 mb-1">Jugadores</div>
                <div class="text-xl">2-4 por mesa</div>
              </div>
            </div>
          </div>

          {/* Reglas */}
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
              <i class="fas fa-list text-red-400"></i>
              Reglas Importantes
            </h3>
            <ul class="space-y-3 text-gray-100">
              {[
                "Se juega con sistema de 11 puntos (o 21, según acuerden)",
                "No golpear la mesa con las paletas",
                "Calzado deportivo obligatorio",
                "Prohibido comer/beber sobre la mesa",
                "Mantener la limpieza de la zona",
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
              { icon: "fas fa-table-tennis-paddle-ball", text: "Paleta propia (opcional)" },
              { icon: "fas fa-tshirt", text: "Ropa Deportiva" },
              { icon: "fas fa-shoe-prints", text: "Calzado Adecuado" },
              { icon: "fas fa-water", text: "Hidratación" },
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

        {/* SECCIÓN PODIO: TOP 3 JUGADORES (PRÓXIMAMENTE) */}
<div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
  <h3 class="text-2xl font-bold mb-4">Top 3 Jugadores</h3>
  <p class="text-gray-200 mb-8">
    ¡Próximamente anunciaremos quiénes fueron los mejores 3 jugadores!
    Mantente atento para conocer a los ganadores y ver sus fotos.
  </p>

  {/* Podio con 3 columnas (2 - 1 - 3) */}
  <div class="flex items-end justify-center gap-4 mb-6">
    {/* 2do lugar */}
    <div class="flex flex-col items-center">
      <div class="bg-gray-500/20 w-24 h-36 flex flex-col justify-end rounded-t-md relative">
        {/* Posición */}
        <span class="absolute top-2 left-1/2 transform -translate-x-1/2 text-sm font-bold text-white">
          2°
        </span>
        {/* Silueta o imagen placeholder */}
        <div class="bg-gray-600 rounded-full w-12 h-12 mx-auto mb-3"></div>
      </div>
      <span class="text-gray-300 text-sm mt-2">2do Lugar</span>
    </div>

    {/* 1er lugar (columna más alta) */}
    <div class="flex flex-col items-center">
      <div class="bg-red-500/20 w-24 h-48 flex flex-col justify-end rounded-t-md relative">
        {/* Posición */}
        <span class="absolute top-2 left-1/2 transform -translate-x-1/2 text-sm font-bold text-white">
          1°
        </span>
        {/* Silueta o imagen placeholder */}
        <div class="bg-gray-600 rounded-full w-12 h-12 mx-auto mb-3"></div>
      </div>
      <span class="text-gray-300 text-sm mt-2">1er Lugar</span>
    </div>

    {/* 3er lugar */}
    <div class="flex flex-col items-center">
      <div class="bg-gray-500/20 w-24 h-32 flex flex-col justify-end rounded-t-md relative">
        {/* Posición */}
        <span class="absolute top-2 left-1/2 transform -translate-x-1/2 text-sm font-bold text-white">
          3°
        </span>
        {/* Silueta o imagen placeholder */}
        <div class="bg-gray-600 rounded-full w-12 h-12 mx-auto mb-3"></div>
      </div>
      <span class="text-gray-300 text-sm mt-2">3er Lugar</span>
    </div>
  </div>

  <p class="text-sm text-gray-400">
    Después del evento, aquí publicaremos los nombres y fotografías de los ganadores.
  </p>
</div>


        {/* Sección CTA final */}
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
          <h3 class="text-3xl font-bold mb-4">¿Listo para un partido inolvidable?</h3>
          <p class="text-gray-100 mb-6 max-w-xl mx-auto">
            Reserva tu espacio en nuestras mesas de ping pong y demuestra tus mejores jugadas.
            ¡La emoción está asegurada!
          </p>
          <a
            href="/reservar-pingpong"
            class="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            Reservar Ahora
          </a>
        </div>
      </div>
    </div>
  );
}

export default PingPongSection;
