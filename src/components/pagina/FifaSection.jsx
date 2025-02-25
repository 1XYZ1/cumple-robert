import { onMount, createSignal, createMemo, For } from "solid-js";

import { rankingData as initialData } from "../../data/rankingData";

function FifaSection() {
  onMount(() => {
    // Lógica de montaje si fuera necesario
  });

  const [data] = createSignal(initialData);

  // 1. Crea un memo que:
  //    - Ordena la data por victorias DESC
  //    - Calcula posición y porcentaje
  const sortedRanking = createMemo(() => {
    // Clonamos el array para no mutar el original
    const clone = [...data()];
    // Ordenar por wins (desc)
    clone.sort((a, b) => b.wins - a.wins);

    // map con posición (i+1) y winRate
    return clone.map((player, i) => {
      const matches = player.wins + player.losses;
      const winRate = matches > 0 ? (player.wins / matches) * 100 : 0;

      return {
        position: i + 1,
        name: player.name,
        wins: player.wins,
        losses: player.losses,
        tournaments: player.tournaments,
        winRate: winRate.toFixed(1), // 1 decimal
      };
    });
  });

  // Función para íconos según posición
  function positionIcon(pos) {
    if (pos === 1) return <i class="fas fa-crown text-yellow-400" title="Campeón"></i>;
    if (pos === 2) return <i class="fas fa-medal text-gray-300" title="Segundo lugar"></i>;
    if (pos === 3) return <i class="fas fa-award text-yellow-800" title="Tercer lugar"></i>;
    return null;
  }

  // Estilos de color para los top 3 (opcional)
  function rowStyle(pos) {
    if (pos === 1) return "bg-yellow-500/20";   // Oro
    if (pos === 2) return "bg-gray-300/10";     // Plata
    if (pos === 3) return "bg-yellow-900/20";   // Bronce
    return "bg-white/5";                       // Resto
  }

  return (
    <div class="min-h-screen bg-gradient-to-b from-blue-900 via-black to-gray-900 text-white flex flex-col">
      {/* HERO */}
      <div class="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        {/* Imagen de fondo con overlay */}
        <div class="absolute inset-0 overflow-hidden">
          <img
            src="/images/fifa-25.jpg"
            alt="FIFA en PlayStation"
            class="w-full h-full object-cover opacity-70"
          />
          <div class="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Contenido del hero */}
        <div class="relative z-10 text-center px-4 max-w-2xl">
          <h1 class="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            FIFA en PlayStation
          </h1>
          <p class="text-xl text-gray-200 mb-8 drop-shadow">
            ¡Compite en nuestros torneos de FIFA y demuestra tus habilidades en la cancha virtual!
          </p>
          <a
            href="#info"
            class="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-semibold transition drop-shadow"
          >
            Ver Detalles
          </a>
        </div>

        {/* Botón de navegación (Volver al inicio) */}
        <nav class="absolute top-6 left-6 z-20">
          <a
            href="/"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300 backdrop-blur-sm"
          >
            <i class="fas fa-arrow-left"></i>
            Volver
          </a>
        </nav>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div
        id="info"
        class="flex-1 w-full max-w-7xl mx-auto px-2 sm:px-4 py-8 sm:py-16 space-y-8 sm:space-y-16"
      >
        {/* Información General */}
        <div class="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-white/10 shadow-lg">
          <h3 class="text-xl sm:text-3xl font-bold mb-3 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <i class="fas fa-info-circle text-blue-400"></i>
            Información General
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-6 text-center">
            <div class="p-2 sm:p-4 bg-white/5 rounded-lg sm:rounded-xl">
              <span class="text-xs sm:text-sm text-blue-200">Plataforma</span>
              <p class="text-sm sm:text-xl mt-1 font-semibold">PS5</p>
            </div>
            <div class="p-2 sm:p-4 bg-white/5 rounded-lg sm:rounded-xl">
              <span class="text-xs sm:text-sm text-blue-200">Jugadores</span>
              <p class="text-sm sm:text-xl mt-1 font-semibold">1 vs. 1 / 2 vs. 2</p>
            </div>
            <div class="p-2 sm:p-4 bg-white/5 rounded-lg sm:rounded-xl">
              <span class="text-xs sm:text-sm text-blue-200">Duración</span>
              <p class="text-sm sm:text-xl mt-1 font-semibold">6 min por mitad</p>
            </div>
            <div class="p-2 sm:p-4 bg-white/5 rounded-lg sm:rounded-xl">
              <span class="text-xs sm:text-sm text-blue-200">Modalidad</span>
              <p class="text-sm sm:text-xl mt-1 font-semibold">Presencial</p>
            </div>
          </div>
        </div>

        {/* Reglas */}
        <div class="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-white/10 shadow-lg">
          <h3 class="text-xl sm:text-3xl font-bold mb-3 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <i class="fas fa-list text-blue-400"></i>
            Reglas
          </h3>
          <ul class="space-y-2 sm:space-y-3 text-gray-200 text-xs sm:text-base leading-relaxed">
            <li class="flex items-start gap-2">
              <i class="fas fa-check text-blue-400 mt-1 shrink-0"></i>
              <span><strong>Duración del partido:</strong> 6 minutos cada tiempo, velocidad normal.</span>
            </li>
            <li class="flex items-start gap-2">
              <i class="fas fa-check text-blue-400 mt-1 shrink-0"></i>
              <span><strong>Equipos:</strong> Cualquier club o selección. No se permiten equipos de fantasía.</span>
            </li>
            <li class="flex items-start gap-2">
              <i class="fas fa-check text-blue-400 mt-1 shrink-0"></i>
              <span><strong>Controles:</strong> Clásico o Alternativo, a elección del jugador.</span>
            </li>
            <li class="flex items-start gap-2">
              <i class="fas fa-check text-blue-400 mt-1 shrink-0"></i>
              <span><strong>Desempates:</strong> Gol de Oro o penales (según el formato del torneo).</span>
            </li>
            <li class="flex items-start gap-2">
              <i class="fas fa-check text-blue-400 mt-1 shrink-0"></i>
              <span><strong>Fair Play:</strong> Se prohíbe el uso de glitches o tácticas antideportivas.</span>
            </li>
          </ul>
        </div>

        {/* Versus Section */}
        <div class="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-white/10 text-center shadow-lg">
          <h3 class="text-xl sm:text-3xl font-bold mb-3">Clásico</h3>
          <p class="text-gray-200 mb-4 sm:mb-8 text-xs sm:text-base">
            Se viene un duelo entre dos leyendas de FIFA. ¿Quién se llevará la victoria?
          </p>
          <div class="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-8">
            {/* Jugador A */}
            <div class="flex flex-col items-center w-full sm:w-auto">
              <img
                src="/images/robert-fut.jpeg"
                alt="Jugador 1"
                class="w-20 h-20 sm:w-32 sm:h-32 object-cover rounded-full border-4 border-blue-500 mb-3"
              />
              <h4 class="text-base sm:text-xl font-semibold text-blue-300">Robert</h4>
              <p class="text-gray-300 text-xs sm:text-sm mt-1">
                Récord: <strong class="text-white">15 victorias</strong> / <strong class="text-white">3 derrotas</strong>
              </p>
            </div>

            {/* VS */}
            <div class="text-xl sm:text-3xl font-bold text-blue-400 my-2 md:my-0">VS</div>

            {/* Jugador B */}
            <div class="flex flex-col items-center w-full sm:w-auto">
              <img
                src="/images/jugadores/alvaro.jpeg"
                alt="Jugador 2"
                class="w-20 h-20 sm:w-32 sm:h-32 object-cover rounded-full border-4 border-blue-500 mb-3"
              />
              <h4 class="text-base sm:text-xl font-semibold text-blue-300">Alvaro</h4>
              <p class="text-gray-300 text-xs sm:text-sm mt-1">
                Récord: <strong class="text-white">12 victorias</strong> / <strong class="text-white">6 derrotas</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Podio Post-Evento */}
        <div class="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-white/10 text-center shadow-lg">
          <h3 class="text-xl sm:text-3xl font-bold mb-2 sm:mb-4">Podio de Ganadores</h3>
          <p class="text-gray-300 mb-4 sm:mb-8 text-xs sm:text-base">
            Al finalizar el torneo, los 3 mejores jugadores se llevarán la gloria.
          </p>
          <div class="flex items-end justify-center gap-2 sm:gap-4 mb-3 sm:mb-6">
            {/* 2do lugar */}
            <div class="flex flex-col items-center">
              <div class="bg-gray-500/20 w-14 sm:w-24 h-24 sm:h-36 flex flex-col justify-end rounded-t-md relative">
                <span class="absolute top-1 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm font-bold text-white">
                  2°
                </span>
                <div class="bg-gray-600 rounded-full w-6 sm:w-12 h-6 sm:h-12 mx-auto mb-2 sm:mb-3"></div>
              </div>
              <span class="text-gray-300 text-xs sm:text-sm mt-1 sm:mt-2">2do Lugar</span>
            </div>

            {/* 1er lugar */}
            <div class="flex flex-col items-center">
              <div class="bg-blue-600/20 w-14 sm:w-24 h-28 sm:h-48 flex flex-col justify-end rounded-t-md relative">
                <span class="absolute top-1 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm font-bold text-white">
                  1°
                </span>
                <div class="bg-gray-600 rounded-full w-6 sm:w-12 h-6 sm:h-12 mx-auto mb-2 sm:mb-3"></div>
              </div>
              <span class="text-gray-300 text-xs sm:text-sm mt-1 sm:mt-2">1er Lugar</span>
            </div>

            {/* 3er lugar */}
            <div class="flex flex-col items-center">
              <div class="bg-gray-500/20 w-14 sm:w-24 h-20 sm:h-32 flex flex-col justify-end rounded-t-md relative">
                <span class="absolute top-1 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm font-bold text-white">
                  3°
                </span>
                <div class="bg-gray-600 rounded-full w-6 sm:w-12 h-6 sm:h-12 mx-auto mb-2 sm:mb-3"></div>
              </div>
              <span class="text-gray-300 text-xs sm:text-sm mt-1 sm:mt-2">3er Lugar</span>
            </div>
          </div>
          <p class="text-xs sm:text-sm text-gray-400">
            Muy pronto conocerás a los grandes vencedores de la jornada.
          </p>
        </div>

        {/* Ranking Histórico */}
        <div class="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-white/10 shadow-lg">
          <h3 class="text-xl sm:text-3xl font-bold mb-3 flex items-center gap-2 sm:gap-3">
            <i class="fas fa-trophy text-blue-400"></i>
            Ranking Histórico
          </h3>
          <p class="text-gray-300 mb-3 sm:mb-6 text-xs sm:text-base">
            Consulta la tabla de posiciones a lo largo de todos los partidos.
          </p>

          <div class="w-full">
            <table class="w-full text-left text-gray-200 text-xs sm:text-base">
              <thead class="bg-blue-900/60 text-gray-100">
                <tr>
                  <th class="py-2 px-2 sm:px-3">Pos.</th>
                  <th class="py-2 px-2 sm:px-3">Jugador</th>
                  <th class="py-2 px-2 sm:px-3 text-center">V</th>
                  <th class="py-2 px-2 sm:px-3 text-center">D</th>
                  <th class="py-2 px-2 sm:px-3 text-right">Win %</th>
                </tr>
              </thead>
              <tbody>
                <For each={sortedRanking()}>
                  {(player) => (
                    <tr class={`${rowStyle(player.position)} hover:bg-white/10 transition`}>
                      <td class="py-2 px-2 sm:px-3 font-bold flex items-center gap-1">
                        <span class="text-blue-400">{player.position}</span>
                        {positionIcon(player.position)}
                      </td>
                      <td class="py-2 px-2 sm:px-3">{player.name}</td>
                      <td class="py-2 px-2 sm:px-3 text-center">{player.wins}</td>
                      <td class="py-2 px-2 sm:px-3 text-center">{player.losses}</td>
                      <td class="py-2 px-2 sm:px-3 text-right">{player.winRate}%</td>
                    </tr>
                  )}
                </For>
              </tbody>
            </table>
          </div>
        </div>

        {/* Mensaje final */}
        <div class="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-8 border border-white/10 text-center shadow-lg">
          <h3 class="text-xl sm:text-3xl font-bold mb-2 sm:mb-4">¡Que empiece el juego!</h3>
          <p class="text-gray-300 mb-3 sm:mb-6 max-w-xl mx-auto text-xs sm:text-base">
            Recuerda que lo más importante es divertirse y disfrutar del torneo.
            ¡Mucha suerte a todos los jugadores y que gane el mejor! 🎮✨
          </p>
        </div>

        {/* CTA final */}
        <div class="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-8 border border-white/10 text-center shadow-lg">
          <h3 class="text-xl sm:text-3xl font-bold mb-2 sm:mb-4">¿Listo para competir?</h3>
          <p class="text-gray-300 mb-3 sm:mb-6 max-w-xl mx-auto text-xs sm:text-base">
            Regístrate ahora y únete a la comunidad de FIFA. ¡Demuestra que eres
            el mejor jugador y escala posiciones en nuestro Ranking Histórico!
          </p>
          <a
            href="/registro-fifa"
            class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full transition text-xs sm:text-base"
          >
            Inscribirme
          </a>
        </div>
      </div>
    </div>
  );
}

export default FifaSection;
