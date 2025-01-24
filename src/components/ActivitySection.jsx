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
    id: 'piscina',
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
    icon: 'fas fa-cards',
    colorClasses: {
      bg: 'bg-purple-500',
      text: 'text-purple-800',
      card: 'bg-purple-500/10',
      hover: 'hover:bg-purple-600',
    }
  },
  {
    id: 'playstation',
    title: 'PlayStation',
    description: 'Gaming zone con los mejores títulos',
    image: '/images/playstation.jpg',
    color: 'indigo',
    details: [
      '🎮 PS5 con últimos juegos',
      '🏎️ Torneos de FIFA y Gran Turismo',
      '🕹️ Múltiples controles disponibles',
      '📺 Pantalla 4K de 65 pulgadas'
    ],
    icon: 'fas fa-gamepad',
    colorClasses: {
      bg: 'bg-indigo-500',
      text: 'text-indigo-800',
      card: 'bg-indigo-500/10',
      hover: 'hover:bg-indigo-600',
    }
  }
];

const ActivityCard = (props) => {
  const [isExpanded, setIsExpanded] = createSignal(false);

  const colorClasses = {
    yellow: {
      bg: 'bg-yellow-500',
      text: 'text-yellow-800',
      card: 'bg-yellow-500/10',
      hover: 'hover:bg-yellow-600',
    },
    blue: {
      bg: 'bg-blue-500',
      text: 'text-blue-800',
      card: 'bg-blue-500/10',
      hover: 'hover:bg-blue-600',
    },
    red: {
      bg: 'bg-red-500',
      text: 'text-red-800',
      card: 'bg-red-500/10',
      hover: 'hover:bg-red-600',
    },
    green: {
      bg: 'bg-emerald-500',
      text: 'text-emerald-800',
      card: 'bg-emerald-500/10',
      hover: 'hover:bg-emerald-600',
    },
    purple: {
      bg: 'bg-purple-500',
      text: 'text-purple-800',
      card: 'bg-purple-500/10',
      hover: 'hover:bg-purple-600',
    },
    indigo: {
      bg: 'bg-indigo-500',
      text: 'text-indigo-800',
      card: 'bg-indigo-500/10',
      hover: 'hover:bg-indigo-600',
    }
  };

  const colors = colorClasses[props.color];

  return (
    <div class={`relative group ${colors.card} rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl`}>
      {/* Contenedor de imagen con altura fija */}
      <div class="aspect-[4/3] relative overflow-hidden">
        <img
          src={props.image}
          alt={props.title}
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
      </div>

      {/* Contenido */}
      <div class="p-6">
        {/* Título e Icono */}
        <div class="flex items-center justify-center gap-3 mb-3">
          <i class={`${props.icon} ${colors.text} text-2xl`}></i>
          <h3 class={`text-2xl font-bold ${colors.text}`}>
            {props.title}
          </h3>
        </div>

        {/* Descripción */}
        <p class={`text-center ${colors.text} mb-4`}>
          {props.description}
        </p>

        {/* Botón Ver más */}
        <button
          class={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-white transition-all duration-300 ${colors.bg} ${colors.hover} transform hover:scale-105`}
          onClick={() => setIsExpanded(!isExpanded())}
        >
          <span>Ver más</span>
          <i
            class={`fas fa-chevron-down transition-transform duration-300 ${isExpanded() ? 'rotate-180' : ''}`}
          ></i>
        </button>

        {/* Panel expandible */}
        <div
          class={`overflow-hidden transition-all duration-300 ${
            isExpanded() ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <ul class="space-y-2">
            {props.details.map((detail) => (
              <li class={`flex items-center gap-2 ${colors.text}`}>
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ActivitySection = () => {
  return (
    <section
      class="py-12 sm:py-16 bg-gradient-to-b from-yellow-50 to-yellow-100 text-black"
      aria-labelledby="activities-title"
    >
      <div class="max-w-screen-lg mx-auto px-4 sm:px-6">
        <div class="text-center mb-8 sm:mb-12">
          <h2
            id="activities-title"
            class="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-800 mb-4"
          >
            Actividades Destacadas
          </h2>
          <p class="text-xl sm:text-2xl text-yellow-700">
            ¡Prepárate para un día lleno de diversión!
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <For each={activities}>
            {activity => <ActivityCard {...activity} />}
          </For>
        </div>

        <div class="text-center mt-8 sm:mt-12">
          <a
            href="/actividades"
            class="inline-flex items-center justify-center gap-2 bg-yellow-500 text-white px-6 sm:px-8 py-3 rounded-full hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
          >
            <span>Ver Todas las Actividades</span>
            <i class="fas fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;