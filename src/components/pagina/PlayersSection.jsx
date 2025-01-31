import { createSignal, createMemo, For } from 'solid-js';
import PlayerCard from './PlayerCard';
import { jugadores } from '../../data/jugadores';

// Convertir los datos existentes al nuevo formato
const players = jugadores.map(j => ({
  name: j.nombre,
  nickname: j.apodo,
  image: j.imagen,
  number: j.numero,
  position: j.posicion,
  age: j.edad,
  team: j.equipo,
  teamColors: {
    primary: j.equipoFavorito.colores.primario,
    secondary: j.equipoFavorito.colores.secundario
  },
  favoriteTeam: {
    name: j.equipoFavorito.nombre,
    logo: j.equipoFavorito.escudo
  },
  skills: j.skills,
  style: j.estilo
}));

export default function PlayersSection() {
  const [selectedFilter, setSelectedFilter] = createSignal('all');

  // Obtener lista única de equipos favoritos
  const favoriteTeams = [...new Set(players.map(player => player.favoriteTeam.name))];

  const filteredPlayers = createMemo(() => {
    if (selectedFilter() === 'all') return players;
    return players.filter(player => player.favoriteTeam.name === selectedFilter());
  });

  return (
    <div class="space-y-6 sm:space-y-8">
      {/* Filtros por equipo favorito */}
      <div class="flex flex-wrap gap-2 justify-center bg-black/30 p-3 sm:p-4 rounded-xl backdrop-blur-sm">
        <button
          onClick={() => setSelectedFilter('all')}
          class={`px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
            selectedFilter() === 'all'
              ? 'bg-green-500 text-white shadow-lg shadow-green-500/25'
              : 'bg-black/40 text-white hover:bg-white/10 backdrop-blur-sm'
          }`}
        >
          Todos los Equipos
        </button>
        <For each={favoriteTeams}>
          {(team) => (
            <button
              onClick={() => setSelectedFilter(team)}
              class={`px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                selectedFilter() === team
                  ? 'bg-green-500 text-white shadow-lg shadow-green-500/25'
                  : 'bg-black/40 text-white hover:bg-white/10 backdrop-blur-sm'
              }`}
            >
              {team}
            </button>
          )}
        </For>
      </div>

      {/* Grid de jugadores */}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
        <For each={filteredPlayers()}>
          {(player) => <PlayerCard player={player} />}
        </For>
      </div>

      {/* Mensaje cuando no hay resultados */}
      {filteredPlayers().length === 0 && (
        <div class="text-center py-8 sm:py-12 bg-black/30 rounded-xl backdrop-blur-sm">
          <i class="fas fa-users text-4xl sm:text-5xl text-white/20 mb-4"></i>
          <p class="text-white/80 text-base sm:text-lg">No hay jugadores que sean fans de este equipo</p>
        </div>
      )}
    </div>
  );
}