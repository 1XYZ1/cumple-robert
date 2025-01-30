// ActivitySection.jsx
import { createSignal, For } from 'solid-js';

const activities = [
  {
    id: 'futbol',
    title: 'Fútbol',
    description: 'Partidos para todas las edades y niveles',
    image: '/images/cesped.jpeg',
    color: 'yellow',
    details: [
      '⚽ Partidos amistosos',
      '👥 Equipos organizados por edad',
      '🏆 Mini torneo con premios',
      '⏰ Horarios flexibles'
    ],
    icon: 'fas fa-futbol'
  },
  {
    id: 'pool',
    title: 'Piscina',
    description: 'Relájate y disfruta del agua',
    image: '/images/pool.jpeg',
    color: 'blue',
    details: [
      '🏊‍♂️ Piscina climatizada',
      '👶 Área infantil supervisada',
      '🛟 Equipamiento de seguridad',
      '🌞 Área de descanso'
    ],
    icon: 'fas fa-swimming-pool'
  },
  {
    id: 'pingpong',
    title: 'Ping Pong',
    description: 'Desafía a tus amigos en intensas partidas',
    image: '/images/pingpong.jpg',
    color: 'red',
    details: [
      '🏓 Mesas profesionales',
      '🏆 Torneo amistoso',
      '🎯 Todos los niveles',
      '🤝 Partidas dobles'
    ],
    icon: 'fas fa-table-tennis'
  },
  {
    id: 'domino',
    title: 'Dominó',
    description: 'Estrategia y diversión en cada ficha',
    image: '/images/domino.jpg',
    color: 'green',
    details: [
      '🎲 Mesas dedicadas al dominó',
      '🧠 Torneo de estrategia',
      '👥 Partidas por equipos',
      '🏆 Premio al mejor estratega'
    ],
    icon: 'fas fa-dice',
    colorClasses: {
      bg: 'bg-emerald-500',
      text: 'text-emerald-800',
      card: 'bg-emerald-500/10',
      hover: 'hover:bg-emerald-600',
    }
  },
  {
    id: 'uno',
    title: 'UNO',
    description: '¡Prepárate para gritar UNO!',
    image: '/images/uno.jpg',
    color: 'purple',
    details: [
      '🃏 Múltiples barajas disponibles',
      '🌈 Reglas especiales de la casa',
      '⚡ Partidas rápidas y dinámicas',
      '🎉 Rondas eliminatorias con premios'
    ],
    icon: 'fas fa-rotate',
    colorClasses: {
      bg: 'bg-purple-500',
      text: 'text-purple-800',
      card: 'bg-purple-500/10',
      hover: 'hover:bg-purple-600',
    }
  },
  {
    id: 'fifa',
    title: 'PlayStation',
    description: 'Gaming zone con los mejores títulos',
    image: '/images/fifa.webp',
    color: 'indigo',
    details: [
      '🎮 PS5 con últimos juegos',
      '🏎️ Torneos de FIFA',
      '🕹️ Múltiples controles disponibles',
      '📺 Pantalla 4K de 65 pulgadas'
    ],
    icon: 'fas fa-gamepad',
    colorClasses: {
      bg: 'bg-indigo-500',
      text: 'text-indigo-800',
      card: 'bg-indigo-500/10',
      hover: 'hover:bg-indigo-600',
      border: 'border-indigo-200/20',
      shadow: 'shadow-indigo-500/10'
    }
  }
];

const ActivityCard = (props) => {
  const [isExpanded, setIsExpanded] = createSignal(false);

  const colorClasses = {
    yellow: {
      bg: 'bg-yellow-500',
      text: 'text-yellow-950',
      card: 'bg-gradient-to-br from-yellow-400/40 to-orange-500/40',
      hover: 'hover:bg-yellow-600',
      border: 'border-yellow-400/40',
      shadow: 'shadow-yellow-500/30'
    },
    blue: {
      bg: 'bg-blue-500',
      text: 'text-blue-950',
      card: 'bg-gradient-to-br from-blue-500/40 to-cyan-500/40',
      hover: 'hover:bg-blue-600',
      border: 'border-blue-200/40',
      shadow: 'shadow-blue-500/30'
    },
    red: {
      bg: 'bg-red-500',
      text: 'text-red-950',
      card: 'bg-gradient-to-br from-red-500/40 to-pink-500/40',
      hover: 'hover:bg-red-600',
      border: 'border-red-200/40',
      shadow: 'shadow-red-500/30'
    },
    green: {
      bg: 'bg-emerald-500',
      text: 'text-emerald-950',
      card: 'bg-gradient-to-br from-emerald-500/40 to-teal-500/40',
      hover: 'hover:bg-emerald-600',
      border: 'border-emerald-200/40',
      shadow: 'shadow-emerald-500/30'
    },
    purple: {
      bg: 'bg-purple-500',
      text: 'text-purple-950',
      card: 'bg-gradient-to-br from-purple-500/40 to-pink-500/40',
      hover: 'hover:bg-purple-600',
      border: 'border-purple-200/40',
      shadow: 'shadow-purple-500/30'
    },
    indigo: {
      bg: 'bg-indigo-500',
      text: 'text-indigo-950',
      card: 'bg-gradient-to-br from-indigo-500/40 to-blue-500/40',
      hover: 'hover:bg-indigo-600',
      border: 'border-indigo-200/40',
      shadow: 'shadow-indigo-500/30'
    }
  };

  const colors = colorClasses[props.color];

  return (
    <div class={`group relative ${colors.card} rounded-2xl overflow-hidden backdrop-blur-sm border ${colors.border} shadow-xl ${colors.shadow} transition-all duration-300 hover:scale-[1.02]`}>
      <a href={`/actividades/${props.id}`} class="block">
        <div class="aspect-[4/3] relative overflow-hidden">
          <img
            src={props.image}
            alt={props.title}
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/50" />

          {/* Icono flotante */}
          <div class={`absolute top-4 right-4 w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center text-white text-xl transform transition-all duration-300 group-hover:scale-110 shadow-lg backdrop-blur-sm`}>
            <i class={props.icon}></i>
          </div>
        </div>

        <div class="p-6 bg-white/80 backdrop-blur-sm">
          <h3 class={`text-2xl font-bold ${colors.text} mb-2 flex items-center gap-2`}>
            {props.title}
          </h3>

          <p class={`${colors.text} mb-4`}>
            {props.description}
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setIsExpanded(!isExpanded());
            }}
            class={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-white transition-all duration-300 ${colors.bg} ${colors.hover} transform hover:scale-105 backdrop-blur-sm`}
          >
            <span>Ver detalles</span>
            <i
              class={`fas fa-chevron-down transition-transform duration-300 ${isExpanded() ? 'rotate-180' : ''}`}
            ></i>
          </button>

          <div
            class={`overflow-hidden transition-all duration-300 ${
              isExpanded() ? 'max-h-96 mt-4' : 'max-h-0'
            }`}
          >
            <ul class="space-y-3">
              {props.details.map((detail) => (
                <li class={`flex items-center gap-2 ${colors.text}`}>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </a>
    </div>
  );
};

const ActivitySection = () => {
  return (
    <>
      <div class="text-center mb-8 sm:mb-12">
        <h2
          id="activities-title"
          class="text-4xl sm:text-5xl font-bold text-white mb-4"
        >
          Actividades Destacadas
        </h2>
        <p class="text-xl sm:text-2xl text-yellow-100">
          ¡Prepárate para un día lleno de diversión!
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <For each={activities}>
          {activity => <ActivityCard {...activity} />}
        </For>
      </div>
    </>
  );
};

export default ActivitySection;