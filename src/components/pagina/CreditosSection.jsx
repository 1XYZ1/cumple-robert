import { createSignal, For } from 'solid-js';

function CreditosSection() {
  const [selectedCategory, setSelectedCategory] = createSignal('todos');

  const categorias = [
    { id: 'gastronomia', nombre: 'Gastronomía', icon: 'fas fa-utensils' },
    { id: 'entretenimiento', nombre: 'Entretenimiento', icon: 'fas fa-music' },
    { id: 'organizacion', nombre: 'Organización', icon: 'fas fa-tasks' },
    { id: 'decoracion', nombre: 'Decoración', icon: 'fas fa-paint-brush' }
  ];

  const colaboradores = [
    {
      nombre: "Leidymar",
      nombre2: "María Eliza",
      rol: "Repostería",
      categoria: "gastronomia",
      descripcion: "Encargadas de la torta principal del evento",
      icon: "fas fa-birthday-cake",
      iconColor: "from-yellow-400 to-orange-400",
      contribuciones: ["Torta de cumpleaños", "Diseño personalizado", "Decoración especial"],
      personIcon: "fas fa-crown",
      personIcon2: "fas fa-crown"
    },
    {
      nombre: "Moises",
      rol: "Chef de Salsas",
      categoria: "gastronomia",
      descripcion: "Preparación de salsas especiales",
      icon: "fas fa-mortar-pestle",
      iconColor: "from-red-400 to-orange-400",
      contribuciones: ["Salsas gourmet", "Aderezos especiales"],
      personIcon: "fas fa-hat-chef"
    },
    {
      nombre: "Rosa",
      nombre2: "Cenaida",
      rol: "Equipo de Pasapalos",
      categoria: "gastronomia",
      descripcion: "Encargadas de los pasapalos y bocadillos",
      icon: "fas fa-cookie",
      iconColor: "from-yellow-400 to-red-400",
      contribuciones: ["Pasapalos variados", "Presentación y servicio"],
      personIcon: "fas fa-sparkles",
      personIcon2: "fas fa-sparkles"
    },
    {
      nombre: "Cenaida",
      rol: "Repostera y Mixóloga",
      categoria: "gastronomia",
      descripcion: "Especialista en postres y bebidas",
      icon: "fas fa-glass-cheers",
      iconColor: "from-pink-400 to-purple-400",
      contribuciones: ["Quesillo especial", "Ponche artesanal"],
      personIcon: "fas fa-wand-magic-sparkles"
    },
    {
      nombre: "Yeisimar",
      rol: "Mixología y Servicio",
      categoria: "gastronomia",
      descripcion: "Encargada de cocteles y bebidas especiales",
      icon: "fas fa-cocktail",
      iconColor: "from-blue-400 to-purple-400",
      contribuciones: ["Cocteles", "Frutas", "Vino selecto"],
      personIcon: "fas fa-gem"
    },
    {
      nombre: "Reiner",
      nombre2: "Lana",
      rol: "Equipo de Sonido",
      categoria: "entretenimiento",
      descripcion: "Responsables del ambiente musical",
      icon: "fas fa-music",
      iconColor: "from-indigo-400 to-blue-400",
      contribuciones: ["Sonido profesional", "Playlist personalizada"],
      personIcon: "fas fa-headphones",
      personIcon2: "fas fa-microphone"
    },
    {
      rol: "Equipo de Juegos y Entretenimiento",
      categoria: "entretenimiento",
      descripcion: "Un increíble equipo que hizo posible todos los juegos y actividades",
      icon: "fas fa-dice",
      iconColor: "from-green-400 to-teal-400",
      contribucionEspecial: [
        { persona: "Andrés", tarea: "Dominó y banquitos", icon: "fas fa-chess" },
        { persona: "Yeisimar", tarea: "UNO", icon: "fas fa-cards-blank" },
        { persona: "Cenaida", tarea: "Juegos dominicales", icon: "fas fa-sun" },
        { persona: "Reiner", tarea: "Juegos dominicales", icon: "fas fa-gamepad" },
        { persona: "Echeverría", tarea: "Fútbol", icon: "fas fa-futbol" },
        { persona: "Marlon", tarea: "Ping Pong", icon: "fas fa-table-tennis-paddle-ball" }
      ]
    },
    {
      nombre: "Leidymar",
      nombre2: "Yeisimar",
      nombre3: "Isamar",
      rol: "Equipo de Decoración",
      categoria: "decoracion",
      descripcion: "Diseño y ambientación del espacio",
      icon: "fas fa-paint-brush",
      iconColor: "from-pink-400 to-red-400",
      contribuciones: ["Decoración temática", "Arreglos especiales", "Ambientación"],
      personIcon: "fas fa-palette",
      personIcon2: "fas fa-brush",
      personIcon3: "fas fa-wand-sparkles"
    },
    {
      nombre: "Reiner",
      nombre2: "Alan",
      rol: "Logística",
      categoria: "organizacion",
      descripcion: "Coordinación de compras y espacios",
      icon: "fas fa-tasks",
      iconColor: "from-blue-400 to-cyan-400",
      contribuciones: ["Compras generales", "Conteo de autos y puestos"],
      personIcon: "fas fa-clipboard-check",
      personIcon2: "fas fa-chart-line"
    },
    {
      nombre: "Ramon",
      rol: "Desarrollo Web",
      categoria: "organizacion",
      descripcion: "Creación y diseño de la página web",
      icon: "fas fa-code",
      iconColor: "from-purple-400 to-indigo-400",
      contribuciones: ["Diseño web", "Desarrollo", "Mantenimiento"],
      personIcon: "fas fa-laptop-code"
    },
    {
      nombre: "Isamar",
      rol: "Contenido Digital",
      categoria: "organizacion",
      descripcion: "Producción de contenido multimedia",
      icon: "fas fa-video",
      iconColor: "from-red-400 to-pink-400",
      contribuciones: ["Video de confirmaciones", "Contenido digital"],
      personIcon: "fas fa-camera-retro"
    }
  ];

  const filteredColaboradores = () =>
    selectedCategory() === 'todos'
      ? colaboradores
      : colaboradores.filter(c => c.categoria === selectedCategory());

  const getCategoryIcon = (categoria) => {
    switch (categoria) {
      case 'gastronomia':
        return 'fas fa-utensils';
      case 'entretenimiento':
        return 'fas fa-music';
      case 'organizacion':
        return 'fas fa-tasks';
      case 'decoracion':
        return 'fas fa-paint-brush';
      default:
        return 'fas fa-star';
    }
  };

  return (
    <div class="w-full sm:max-w-7xl sm:mx-auto sm:px-4">
      <div class="relative bg-gray-900/80 backdrop-blur-lg sm:rounded-3xl p-4 sm:p-8 border border-purple-500/20 overflow-hidden shadow-2xl">
        {/* Fondo base con degradado principal */}
        <div class="fixed inset-0 bg-gradient-to-b from-gray-900 via-[#1a1333] to-[#17184e]"></div>

        {/* Decoración de fondo */}
        <div class="fixed inset-0">
          {/* Círculos decorativos con colores más suaves */}
          <div class="absolute top-0 -right-1/4 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div class="absolute bottom-0 -left-1/4 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s"></div>
          <div class="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl animate-pulse" style="animation-delay: 3s"></div>

          {/* Gradientes sutiles para cada sección */}
          <div class="absolute inset-0">
            <div class="absolute inset-x-0 h-[120vh] bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>
            <div class="absolute inset-x-0 top-[40%] h-[120vh] bg-gradient-to-b from-transparent via-indigo-900/5 to-transparent"></div>
            <div class="absolute inset-x-0 top-[80%] h-[120vh] bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>
          </div>

          {/* Overlay sutil para mejorar contraste */}
          <div class="absolute inset-0 bg-gradient-to-b from-gray-900/10 via-gray-900/20 to-gray-900/30"></div>
        </div>

        {/* Efecto de brillo en las esquinas */}
        <div class="fixed inset-0 overflow-hidden pointer-events-none">
          <div class="absolute -top-1/2 -right-1/2 w-[100vh] h-[100vh] bg-gradient-radial from-purple-500/10 via-transparent to-transparent blur-3xl"></div>
          <div class="absolute -bottom-1/2 -left-1/2 w-[100vh] h-[100vh] bg-gradient-radial from-blue-500/10 via-transparent to-transparent blur-3xl"></div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 py-24">
          {/* Botón Volver Arriba */}
          <div class="absolute top-8 left-4 md:left-8">
            <a
              href="/"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 backdrop-blur-sm"
            >
              <i class="fas fa-arrow-left"></i>
              Volver al inicio
            </a>
          </div>

          {/* Encabezado */}
          <div class="text-center mb-16">
            <h1 class="text-5xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-6 animate-fade-in">
              Nuestro Equipo Increíble
            </h1>
            <p class="text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in-delay">
              Conoce a las personas extraordinarias que hicieron posible este evento con su dedicación y talento
            </p>
          </div>

          {/* Contenido por Categorías */}
          <div class="space-y-16 animate-fade-in">
            <For each={categorias}>
              {(categoria) => {
                const colaboradoresCategoria = colaboradores.filter(c => c.categoria === categoria.id);
                return (
                  <div class="space-y-8">
                    <div class="flex items-center gap-3 pb-2 border-b border-white/10">
                      <i class={`${categoria.icon} text-2xl text-purple-400`}></i>
                      <h2 class="text-3xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                        {categoria.nombre}
                      </h2>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <For each={colaboradoresCategoria}>
                        {(colaborador) => (
                          <div class="group relative bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-[1.02] shadow-xl">
                            <div class="flex items-start gap-6">
                              <div class={`w-24 h-24 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br ${colaborador.iconColor} flex items-center justify-center text-white text-4xl transform transition-all duration-300 group-hover:scale-110`}>
                                <i class={colaborador.icon}></i>
                              </div>
                              <div class="flex-1">
                                <div class="space-y-2">
                                  <div class="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent flex items-center gap-2">
                                    <i class="fas fa-star text-purple-400 text-[10px]"></i>
                                    {colaborador.nombre}
                                  </div>
                                  {colaborador.nombre2 && (
                                    <div class="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent flex items-center gap-2">
                                      <i class="fas fa-star text-purple-400 text-[10px]"></i>
                                      {colaborador.nombre2}
                                    </div>
                                  )}
                                  {colaborador.nombre3 && (
                                    <div class="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent flex items-center gap-2">
                                      <i class="fas fa-star text-purple-400 text-[10px]"></i>
                                      {colaborador.nombre3}
                                    </div>
                                  )}
                                </div>
                                <p class="text-purple-300 font-medium mt-3 mb-2">{colaborador.rol}</p>
                                <p class="text-gray-200 mb-4">{colaborador.descripcion}</p>
                                {colaborador.contribucionEspecial ? (
                                  <div class="space-y-4">
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                      <For each={colaborador.contribucionEspecial}>
                                        {(contrib) => (
                                          <div class="bg-gray-900/50 rounded-lg p-3 border border-white/5 hover:border-purple-500/30 transition-all duration-300">
                                            <div class="flex items-center gap-2">
                                              <div class="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                                <i class={`${contrib.icon} text-white text-sm`}></i>
                                              </div>
                                              <div>
                                                <div class="font-bold text-lg bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                                                  {contrib.persona}
                                                </div>
                                                <div class="text-sm text-gray-300">
                                                  {contrib.tarea}
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        )}
                                      </For>
                                    </div>
                                    <p class="text-gray-400 text-sm italic text-center">
                                      Un equipo extraordinario que hizo los juegos inolvidables
                                    </p>
                                  </div>
                                ) : (
                                  colaborador.contribuciones.length > 0 && (
                                    <div class="space-y-2">
                                      <For each={colaborador.contribuciones}>
                                        {(contribucion) => (
                                          <div class="flex items-center gap-2 text-gray-300">
                                            <i class="fas fa-check-circle text-purple-400"></i>
                                            <span>{contribucion}</span>
                                          </div>
                                        )}
                                      </For>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                            <div class="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                          </div>
                        )}
                      </For>
                    </div>
                  </div>
                );
              }}
            </For>
          </div>

          {/* Mensaje Final y Botón Volver */}
          <div class="text-center mt-20 space-y-8 animate-fade-in">
            <p class="text-2xl text-gray-200 font-light italic">
              "La magia de un gran evento surge de la pasión y dedicación de quienes lo hacen posible"
            </p>
            <div>
              <a
                href="/"
                class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 backdrop-blur-sm"
              >
                <i class="fas fa-home"></i>
                Volver al inicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditosSection;