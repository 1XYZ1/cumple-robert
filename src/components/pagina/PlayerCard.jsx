import { createSignal } from 'solid-js';

export default function PlayerCard(props) {
  const [isHovered, setIsHovered] = createSignal(false);

  return (
    <div
      class="relative group w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Efecto de fondo */}
      <div
        class={`absolute inset-0 bg-gradient-to-br rounded-2xl blur-xl transition-all duration-300 ${
          isHovered() ? 'opacity-100 scale-105' : 'opacity-80 scale-100'
        }`}
        style={{
          background: `linear-gradient(45deg, ${props.player.teamColors.primary}20, ${props.player.teamColors.secondary}20)`
        }}
      ></div>

      {/* Contenido principal */}
      <div class="relative bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
        {/* Header con imagen */}
        <div class="relative h-[400px] sm:h-[450px] overflow-hidden">
          <div class="absolute inset-0">
            <img
              src={props.player.image}
              alt={props.player.name}
              class="w-full h-full object-cover transition-transform duration-500 scale-[1.01] group-hover:scale-[1.15]"
            />
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>

          {/* Info del jugador */}
          <div class="absolute bottom-0 left-0 w-full p-6 transform transition-transform duration-300">
            <div class="flex items-center justify-between">
              <div class="space-y-1">
                <h3 class="text-3xl font-bold text-white">{props.player.name}</h3>
                <p class="text-xl italic text-white/90">"{props.player.nickname}"</p>
              </div>
              <div class="relative group/team">
                <img
                  src={props.player.favoriteTeam.logo}
                  alt={props.player.favoriteTeam.name}
                  class="w-20 h-20 rounded-full p-1 bg-white/10 transition-transform duration-300 group-hover/team:scale-110"
                />
                <span class="absolute -bottom-8 right-0 text-sm text-white/75 opacity-0 group-hover/team:opacity-100 transition-opacity duration-300">
                  {props.player.favoriteTeam.name}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Estadísticas y detalles */}
        <div class="p-6 space-y-6">
          {/* Datos básicos */}
          <div class="grid grid-cols-2 gap-4">
            <div class="flex items-center gap-2">
              <i
                class="fas fa-tshirt text-xl"
                style={{ color: props.player.teamColors.primary }}
              ></i>
              <span class="text-lg text-white">#{props.player.number}</span>
            </div>
            <div class="flex items-center gap-2">
              <i
                class="fas fa-running text-xl"
                style={{ color: props.player.teamColors.primary }}
              ></i>
              <span class="text-lg text-white">{props.player.position}</span>
            </div>
            <div class="flex items-center gap-2">
              <i
                class="fas fa-birthday-cake text-xl"
                style={{ color: props.player.teamColors.primary }}
              ></i>
              <span class="text-lg text-white">{props.player.age} años</span>
            </div>
            <div class="flex items-center gap-2">
              <i
                class="fas fa-users text-xl"
                style={{ color: props.player.teamColors.primary }}
              ></i>
              <span class="text-lg text-white">{props.player.team}</span>
            </div>
          </div>

          {/* Skills */}
          <div class="space-y-4">
            <h4 class="text-xl font-semibold text-white">Estadísticas</h4>
            <div class="space-y-4">
              {Object.entries(props.player.skills).map(([skill, value]) => (
                <div class="space-y-2">
                  <div class="flex justify-between text-base">
                    <span class="text-gray-400 capitalize">{skill}</span>
                    <span class="text-white">{value}</span>
                  </div>
                  <div class="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      class="absolute inset-y-0 left-0 transition-all duration-500 rounded-full"
                      style={{
                        width: `${value}%`,
                        background: `linear-gradient(90deg, ${props.player.teamColors.primary}, ${props.player.teamColors.secondary})`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Estilo de juego */}
          <div
            class="inline-block px-6 py-3 rounded-full transition-all duration-300 group-hover:scale-105"
            style={{
              background: `linear-gradient(90deg, ${props.player.teamColors.primary}40, ${props.player.teamColors.secondary}40)`
            }}
          >
            <span class="text-lg text-white">{props.player.style}</span>
          </div>
        </div>
      </div>
    </div>
  );
}