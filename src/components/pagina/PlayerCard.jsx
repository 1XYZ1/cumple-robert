import { createSignal } from 'solid-js';

export default function PlayerCard(props) {
  const [isHovered, setIsHovered] = createSignal(false);

  return (
    <div
      class="relative group w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Efectos de fondo */}
      <div class="absolute inset-0 overflow-hidden">
        {/* Destello primario */}
        <div
          class={`absolute -top-1/2 -right-1/2 w-[500px] h-[500px] rounded-full blur-3xl transition-opacity duration-500 ${
            isHovered() ? 'opacity-30' : 'opacity-20'
          }`}
          style={{
            background: `${props.player.teamColors.primary}`
          }}
        ></div>
        {/* Destello secundario */}
        <div
          class={`absolute -bottom-1/2 -left-1/2 w-[500px] h-[500px] rounded-full blur-3xl transition-opacity duration-500 ${
            isHovered() ? 'opacity-30' : 'opacity-20'
          }`}
          style={{
            background: `${props.player.teamColors.secondary}`
          }}
        ></div>
      </div>

      {/* Contenido principal */}
      <div
        class="relative bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-[1.02] shadow-xl"
        style={{
          border: `1px solid ${props.player.teamColors.primary}40`,
          boxShadow: `0 0 20px ${props.player.teamColors.primary}20,
                      0 0 40px ${props.player.teamColors.secondary}10`
        }}
      >
        {/* Header con imagen */}
        <div class="relative h-[350px] sm:h-[450px] overflow-hidden">
          <div class="absolute inset-0">
            <img
              src={props.player.image}
              alt={props.player.name}
              class="w-full h-full object-cover transition-transform duration-500 scale-[1.01] group-hover:scale-[1.15]"
            />
          </div>
          <div
            class="absolute inset-0 transition-opacity duration-300"
            style={{
              background: `linear-gradient(to top,
                black 0%,
                ${props.player.teamColors.primary}20 50%,
                transparent 100%)`
            }}
          ></div>

          {/* Info del jugador */}
          <div class="absolute bottom-0 left-0 w-full p-4 sm:p-6 transform transition-transform duration-300">
            <div class="flex items-center justify-between">
              <div class="space-y-1">
                <h3 class="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">{props.player.name}</h3>
                <p
                  class="text-lg sm:text-xl italic drop-shadow-lg"
                  style={{ color: props.player.teamColors.primary }}
                >"{props.player.nickname}"</p>
              </div>
              <div class="relative group/team">
                <div
                  class="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 transition-transform duration-300 group-hover/team:scale-110 backdrop-blur-sm"
                  style={{
                    background: `linear-gradient(45deg, ${props.player.teamColors.primary}40, ${props.player.teamColors.secondary}40)`
                  }}
                >
                  <img
                    src={props.player.favoriteTeam.logo}
                    alt={props.player.favoriteTeam.name}
                    class="w-full h-full rounded-full object-cover"
                  />
                </div>
                <span class="absolute -bottom-8 right-0 text-sm text-white opacity-0 group-hover/team:opacity-100 transition-opacity duration-300 bg-black/60 px-2 py-1 rounded-lg backdrop-blur-sm">
                  {props.player.favoriteTeam.name}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Estadísticas y detalles */}
        <div class="p-4 sm:p-6 space-y-4 sm:space-y-6 bg-black/40 backdrop-blur-sm">
          {/* Datos básicos */}
          <div class="grid grid-cols-2 gap-3 sm:gap-4">
            <div
              class="flex items-center gap-2 p-2 sm:p-3 rounded-xl backdrop-blur-sm transition-colors duration-300"
              style={{
                background: `linear-gradient(45deg, ${props.player.teamColors.primary}20, transparent)`
              }}
            >
              <i
                class="fas fa-tshirt text-lg sm:text-xl"
                style={{ color: props.player.teamColors.primary }}
              ></i>
              <span class="text-base sm:text-lg text-white">#{props.player.number}</span>
            </div>
            <div
              class="flex items-center gap-2 p-2 sm:p-3 rounded-xl backdrop-blur-sm transition-colors duration-300"
              style={{
                background: `linear-gradient(45deg, ${props.player.teamColors.secondary}20, transparent)`
              }}
            >
              <i
                class="fas fa-running text-lg sm:text-xl"
                style={{ color: props.player.teamColors.secondary }}
              ></i>
              <span class="text-base sm:text-lg text-white">{props.player.position}</span>
            </div>
            <div
              class="flex items-center gap-2 p-2 sm:p-3 rounded-xl backdrop-blur-sm transition-colors duration-300"
              style={{
                background: `linear-gradient(45deg, ${props.player.teamColors.secondary}20, transparent)`
              }}
            >
              <i
                class="fas fa-birthday-cake text-lg sm:text-xl"
                style={{ color: props.player.teamColors.secondary }}
              ></i>
              <span class="text-base sm:text-lg text-white">{props.player.age} años</span>
            </div>
            <div
              class="flex items-center gap-2 p-2 sm:p-3 rounded-xl backdrop-blur-sm transition-colors duration-300"
              style={{
                background: `linear-gradient(45deg, ${props.player.teamColors.primary}20, transparent)`
              }}
            >
              <i
                class="fas fa-users text-lg sm:text-xl"
                style={{ color: props.player.teamColors.primary }}
              ></i>
              <span class="text-base sm:text-lg text-white">{props.player.team}</span>
            </div>
          </div>

          {/* Skills */}
          <div
            class="space-y-4 p-3 sm:p-4 rounded-xl backdrop-blur-sm"
            style={{
              background: `linear-gradient(135deg, ${props.player.teamColors.primary}10, ${props.player.teamColors.secondary}10)`
            }}
          >
            <h4 class="text-lg sm:text-xl font-semibold text-white">Estadísticas</h4>
            <div class="space-y-3 sm:space-y-4">
              {Object.entries(props.player.skills).map(([skill, value]) => (
                <div class="space-y-1 sm:space-y-2">
                  <div class="flex justify-between text-sm sm:text-base">
                    <span class="text-gray-300 capitalize">{skill}</span>
                    <span class="text-white font-medium">{value}</span>
                  </div>
                  <div class="relative h-2 sm:h-3 bg-black/50 rounded-full overflow-hidden backdrop-blur-sm">
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
            class="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 group-hover:scale-105 backdrop-blur-sm border"
            style={{
              borderColor: `${props.player.teamColors.primary}40`,
              background: `linear-gradient(90deg, ${props.player.teamColors.primary}20, ${props.player.teamColors.secondary}20)`
            }}
          >
            <span class="text-base sm:text-lg text-white drop-shadow">{props.player.style}</span>
          </div>
        </div>
      </div>
    </div>
  );
}