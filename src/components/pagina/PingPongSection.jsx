import { onMount, createSignal, createMemo, For } from "solid-js";

// Datos iniciales del ranking
const initialRanking = [
  { name: "Marlon", wins: 15, losses: 2 },
  { name: "Reinaldo", wins: 12, losses: 3 },
  { name: "Rober", wins: 10, losses: 4 },
  { name: "Echeverría", wins: 8, losses: 5 },
  { name: "Alan", wins: 7, losses: 6 },
  { name: "Gregory", wins: 6, losses: 7 },
  { name: "Chencho", wins: 5, losses: 8 },
  { name: "Wilmer", wins: 4, losses: 9 },
  { name: "Andrés", wins: 3, losses: 10 },
  { name: "Jaiker", wins: 2, losses: 11 }
];

function PingPongSection() {
  onMount(() => {
    // Lógica de montaje si se requiere
  });

  const [data] = createSignal(initialRanking);

  // Calcular ranking ordenado con estadísticas
  const sortedRanking = createMemo(() => {
    const clone = [...data()];
    clone.sort((a, b) => b.wins - a.wins);

    return clone.map((player, i) => {
      const matches = player.wins + player.losses;
      const winRate = matches > 0 ? (player.wins / matches) * 100 : 0;

      return {
        position: i + 1,
        name: player.name,
        wins: player.wins,
        losses: player.losses,
        matches,
        winRate: winRate.toFixed(1)
      };
    });
  });

  // Estilos según posición
  const rowStyle = (pos) => {
    switch (pos) {
      case 1:
        return "bg-yellow-500/20 border-yellow-500/50";
      case 2:
        return "bg-gray-400/20 border-gray-400/50";
      case 3:
        return "bg-amber-600/20 border-amber-600/50";
      default:
        return "bg-white/5 border-white/5";
    }
  };

  // Ícono según posición
  const positionIcon = (pos) => {
    switch (pos) {
      case 1:
        return "fas fa-crown text-yellow-500";
      case 2:
        return "fas fa-medal text-gray-400";
      case 3:
        return "fas fa-award text-amber-600";
      default:
        return "fas fa-hashtag text-gray-600";
    }
  };

  return (
    <div class="min-h-screen bg-gradient-to-br from-[#1a1c2e] via-[#1f2937] to-[#111827] text-white">
      {/* Hero Section con mejor contraste */}
      <div class="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        {/* Imagen de fondo con overlay mejorado */}
        <div class="absolute inset-0 overflow-hidden">
          <img
            src="/images/pingpong.jpg"
            alt="Partida de Ping Pong"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#1a1c2e]"></div>
        </div>

        {/* Contenido central del Hero con mejor legibilidad */}
        <div class="relative z-10 text-center px-4 max-w-2xl">
          <h1 class="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-300">
            Ping Pong
          </h1>
          <p class="text-xl text-gray-200 mb-8 leading-relaxed max-w-xl mx-auto">
            Participa en nuestras mesas de tenis de mesa y vive la emoción de cada saque
          </p>
          <a
            href="#info"
            class="inline-block bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
          >
            Ver Detalles
          </a>
        </div>

        {/* Botón de navegación mejorado */}
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

      {/* Contenido Principal con mejor espaciado y contraste */}
      <div id="info" class="max-w-7xl mx-auto px-4 py-12 md:py-16 space-y-16">
        

        {/* Información General y Reglas con mejor contraste */}
        <div class="grid md:grid-cols-2 gap-8">
          {/* Información General */}
          <div class="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md rounded-3xl p-8 border border-gray-700/50 shadow-xl">
            <h3 class="text-2xl font-bold mb-8 flex items-center gap-3">
              <i class="fas fa-info-circle text-blue-400"></i>
              Información General
            </h3>
            <div class="grid grid-cols-2 gap-4">
              <div class="p-6 bg-white/5 rounded-2xl text-center border border-white/10">
                <div class="text-sm text-blue-300 mb-2 font-medium">Horario</div>
                <div class="text-xl">10:00 - 22:00</div>
              </div>
              <div class="p-6 bg-white/5 rounded-2xl text-center border border-white/10">
                <div class="text-sm text-blue-300 mb-2 font-medium">Niveles</div>
                <div class="text-xl">Principiante - Avanzado</div>
              </div>
              <div class="p-6 bg-white/5 rounded-2xl text-center border border-white/10">
                <div class="text-sm text-blue-300 mb-2 font-medium">Mesas Disponibles</div>
                <div class="text-xl">4 mesas</div>
              </div>
              <div class="p-6 bg-white/5 rounded-2xl text-center border border-white/10">
                <div class="text-sm text-blue-300 mb-2 font-medium">Jugadores</div>
                <div class="text-xl">2-4 por mesa</div>
              </div>
            </div>
          </div>

          {/* Reglas */}
          <div class="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md rounded-3xl p-8 border border-gray-700/50 shadow-xl">
            <h3 class="text-2xl font-bold mb-8 flex items-center gap-3">
              <i class="fas fa-list text-blue-400"></i>
              Reglas Importantes
            </h3>
            <ul class="space-y-4">
              {[
                "Se juega con sistema de 11 puntos (o 21, según acuerden)",
                "No golpear la mesa con las paletas",
                "Calzado deportivo obligatorio",
                "Prohibido comer/beber sobre la mesa",
                "Mantener la limpieza de la zona",
              ].map((rule) => (
                <li class="flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                  <i class="fas fa-check text-blue-400 mt-1"></i>
                  <span class="text-gray-200">{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sección del Retador con mejor contraste */}
        <div class="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md rounded-3xl p-12 border border-gray-700/50 shadow-2xl">
          <div class="grid md:grid-cols-2 gap-16 items-center">
            {/* Información del Retador */}
            <div class="space-y-12">
              {/* Encabezado */}
              <div class="space-y-6">
                <span class="inline-block text-sm font-medium tracking-wider text-red-400 uppercase px-4 py-2 bg-red-500/10 rounded-lg border border-red-500/20">
                  El Retador Invicto
                </span>
                <h2 class="text-7xl md:text-8xl font-bold leading-none bg-gradient-to-r from-red-400 via-yellow-200 to-red-400 text-transparent bg-clip-text tracking-tight">
                  MARLON
                </h2>
                <p class="text-2xl text-red-400 font-medium tracking-wide">
                  Maestro de la Mesa
                </p>
              </div>

              {/* Estadísticas con mejor diseño */}
              <ul class="grid gap-6 text-lg">
                <li class="flex items-center gap-4 bg-white/5 rounded-2xl p-4 border border-white/10">
                  <span class="flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/20">
                    <i class="fas fa-trophy text-yellow-400 text-xl"></i>
                  </span>
                  <span class="text-gray-100">15 victorias consecutivas</span>
                </li>
                <li class="flex items-center gap-4 bg-white/5 rounded-2xl p-4 border border-white/10">
                  <span class="flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/20">
                    <i class="fas fa-bolt text-yellow-400 text-xl"></i>
                  </span>
                  <span class="text-gray-100">Especialista en smashes devastadores</span>
                </li>
                <li class="flex items-center gap-4 bg-white/5 rounded-2xl p-4 border border-white/10">
                  <span class="flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/20">
                    <i class="fas fa-star text-yellow-400 text-xl"></i>
                  </span>
                  <span class="text-gray-100">Técnica impecable de servicio</span>
                </li>
              </ul>
            </div>

            {/* Imagen del Retador mejorada */}
            <div class="relative">
              <div class="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50">
                <img
                  src="/images/jugadores/marlon.PNG"
                  alt="Marlon en acción"
                  class="w-full aspect-[4/5] object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              {/* Estadísticas flotantes - En desktop arriba/abajo, en móvil abajo en 2 columnas */}
              <div class="absolute md:top-4 md:right-4 md:left-auto md:translate-y-0 bottom-6 right-4 md:right-4 bg-black/80 backdrop-blur-md rounded-2xl p-2 md:p-4 text-center shadow-2xl border border-gray-700/50 w-[calc(50%-24px)] md:w-auto md:h-[90px]">
                <div class="text-2xl md:text-3xl font-bold text-red-400">98%</div>
                <div class="text-xs md:text-sm font-medium text-gray-200">Tasa de Victoria</div>
              </div>
              <div class="absolute md:bottom-6 md:left-6 md:right-auto bottom-6 left-4 md:left-6 bg-black/80 backdrop-blur-md rounded-2xl p-2 md:p-4 text-center shadow-2xl border border-gray-700/50 w-[calc(50%-24px)] md:w-auto md:h-[90px]">
                <div class="text-2xl md:text-3xl font-bold text-yellow-400">MVP</div>
                <div class="text-xs md:text-sm font-medium text-gray-200">Mejor Jugador</div>
              </div>
            </div>
          </div>
        </div>

        {/* Ranking con mejor contraste */}
        <div class="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md rounded-3xl p-8 border border-gray-700/50 shadow-xl">
          <h3 class="text-2xl font-bold mb-8 text-center">Ranking de Jugadores</h3>
          
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="text-sm font-medium text-gray-300 border-b border-gray-700">
                  <th class="pb-6 text-left pl-6">Pos</th>
                  <th class="pb-6 text-left">Jugador</th>
                  <th class="pb-6 text-center">Partidas</th>
                  <th class="pb-6 text-center">Victorias</th>
                  <th class="pb-6 text-center">Derrotas</th>
                  <th class="pb-6 text-center pr-6">% Victoria</th>
                </tr>
              </thead>
              <tbody>
                <For each={sortedRanking()}>
                  {(player) => (
                    <tr class={`border-b border-gray-800 hover:bg-white/5 transition-colors ${rowStyle(player.position)}`}>
                      <td class="py-5 pl-6 flex items-center gap-3">
                        <i class={positionIcon(player.position)}></i>
                        <span class="font-medium">{player.position}°</span>
                      </td>
                      <td class="py-5 font-medium">{player.name}</td>
                      <td class="py-5 text-center text-gray-300">{player.matches}</td>
                      <td class="py-5 text-center text-emerald-400 font-medium">{player.wins}</td>
                      <td class="py-5 text-center text-red-400 font-medium">{player.losses}</td>
                      <td class="py-5 text-center pr-6 font-medium">{player.winRate}%</td>
                    </tr>
                  )}
                </For>
              </tbody>
            </table>
          </div>
        </div>

        {/* Sección final mejorada */}
        <div class="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md rounded-3xl p-12 border border-gray-700/50 shadow-xl text-center">
          <h3 class="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            ¡Únete a la Diversión!
          </h3>
          <p class="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Prepárate para vivir la emoción del ping pong en un ambiente lleno de diversión y competencia amistosa.
            ¡Demuestra tus habilidades y conviértete en el próximo campeón!
          </p>
        </div>
      </div>
    </div>
  );
}

export default PingPongSection;
