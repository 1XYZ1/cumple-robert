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
    <div class="space-y-8">
      {/* Filtros por equipo favorito */}
      <div class="flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => setSelectedFilter('all')}
          class={`px-4 py-2 rounded-full transition-all duration-300 ${
            selectedFilter() === 'all'
              ? 'bg-green-500 text-white'
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
        >
          Todos los Equipos
        </button>
        <For each={favoriteTeams}>
          {(team) => (
            <button
              onClick={() => setSelectedFilter(team)}
              class={`px-4 py-2 rounded-full transition-all duration-300 ${
                selectedFilter() === team
                  ? 'bg-green-500 text-white'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {team}
            </button>
          )}
        </For>
      </div>

      {/* Grid de jugadores */}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <For each={filteredPlayers()}>
          {(player) => <PlayerCard player={player} />}
        </For>
      </div>

      {/* Mensaje cuando no hay resultados */}
      {filteredPlayers().length === 0 && (
        <div class="text-center py-12">
          <i class="fas fa-users text-4xl text-white/20 mb-4"></i>
          <p class="text-white/60">No hay jugadores que sean fans de este equipo</p>
        </div>
      )}
    </div>
  );
}