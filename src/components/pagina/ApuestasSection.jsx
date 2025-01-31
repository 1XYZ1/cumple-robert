import { createSignal, For } from 'solid-js';

const apostadores = [
  {
    id: 1,
    nombre: "Robert Gil",
    apuestas: [
      {
        tipo: "Premier League",
        prediccion: "Manchester City vs Liverpool - Over 2.5 goles",
        casa: "Bet365",
        cuota: 4.5,
        monto: "$2.000",
        fecha_evento: "02/02/2025",
        fecha_apuesta: "15/01/2025",
        estado: "pendiente",
        comprobante: "/images/comprobantes/robert1.jpg"
      },
      {
        tipo: "Serie A",
        prediccion: "Inter vs Milan - Inter Ganador",
        casa: "Betano",
        cuota: 3.2,
        monto: "$1.500",
        fecha_evento: "02/02/2025",
        fecha_apuesta: "20/01/2025",
        estado: "pendiente",
        comprobante: "/images/comprobantes/robert2.jpg"
      }
    ]
  },
  {
    id: 2,
    nombre: "Reiner Andrade",
    apuestas: [
      {
        tipo: "La Liga",
        prediccion: "Real Madrid vs Barcelona - Real Madrid Ganador",
        casa: "Coolbet",
        cuota: 3.8,
        monto: "$3.000",
        fecha_evento: "02/02/2025",
        fecha_apuesta: "18/01/2025",
        estado: "pendiente",
        comprobante: "/images/comprobantes/reiner1.jpg"
      },
      {
        tipo: "NBA",
        prediccion: "Lakers vs Warriors - Over 220.5 puntos",
        casa: "Bet365",
        cuota: 1.95,
        monto: "$2.000",
        fecha_evento: "02/02/2025",
        fecha_apuesta: "21/01/2025",
        estado: "pendiente",
        comprobante: "/images/comprobantes/reiner2.jpg"
      }
    ]
  }
];

export default function ApuestasSection() {
  const [selectedFilter, setSelectedFilter] = createSignal('todas');

  // Calculamos estadísticas
  const totalApuestas = apostadores.reduce((sum, a) => sum + a.apuestas.length, 0);
  const totalApostado = apostadores.reduce((sum, a) =>
    sum + a.apuestas.reduce((subSum, ap) => subSum + parseInt(ap.monto.replace(/[$.]/g, '')), 0), 0);
  const cuotaPromedio = (apostadores.reduce((sum, a) =>
    sum + a.apuestas.reduce((subSum, ap) => subSum + ap.cuota, 0), 0) / totalApuestas).toFixed(2);

  return (
    <div class="relative min-h-screen p-4 sm:p-8 rounded-3xl space-y-6 sm:space-y-8">
      {/* Fondo decorativo */}
      <div class="fixed inset-0 -z-10">
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/10 via-gray-900/95 to-green-500/10"></div>
        <div class="absolute top-0 left-0 w-full h-full">
          <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent rounded-full blur-3xl transform rotate-45"></div>
          <div class="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-green-500/10 via-transparent to-transparent rounded-full blur-3xl transform -rotate-45"></div>
        </div>
      </div>

      {/* Información importante */}
      <div class="bg-black/40 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-emerald-500/20">
        <h3 class="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
          <i class="fas fa-info-circle text-emerald-400"></i>
          Información Importante
        </h3>
        <div class="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
          <p>• Puedes realizar múltiples apuestas deportivas.</p>
          <p>• El monto mínimo por apuesta es de $1.000.</p>
          <p>• Las apuestas deben ser para eventos que se desarrollen el 02 de febrero de 2025.</p>
          <p>• Envía el comprobante de cada apuesta por WhatsApp inmediatamente después de realizarla.</p>
          <p>• Los resultados se validarán durante el evento.</p>
          <p>• Los premios se entregarán durante el evento.</p>
        </div>
      </div>

      {/* Estadísticas generales */}
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div class="bg-black/40 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-emerald-500/20">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-xl">
              <i class="fas fa-users"></i>
            </div>
            <div>
              <p class="text-xs sm:text-sm text-gray-400">Total Apuestas</p>
              <p class="text-xl sm:text-2xl font-bold text-white">{totalApuestas}</p>
            </div>
          </div>
        </div>
        <div class="bg-black/40 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-emerald-500/20">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white text-xl">
              <i class="fas fa-chart-line"></i>
            </div>
            <div>
              <p class="text-xs sm:text-sm text-gray-400">Cuota Promedio</p>
              <p class="text-xl sm:text-2xl font-bold text-white">{cuotaPromedio}x</p>
            </div>
          </div>
        </div>
        <div class="bg-black/40 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-emerald-500/20">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-xl">
              <i class="fas fa-money-bill-wave"></i>
            </div>
            <div>
              <p class="text-xs sm:text-sm text-gray-400">Total Apostado</p>
              <p class="text-xl sm:text-2xl font-bold text-white">${(totalApostado).toLocaleString()}</p>
            </div>
          </div>
        </div>
        <div class="bg-black/40 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-emerald-500/20">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white text-xl">
              <i class="fas fa-calendar"></i>
            </div>
            <div>
              <p class="text-xs sm:text-sm text-gray-400">Fecha Evento</p>
              <p class="text-xl sm:text-2xl font-bold text-white">02/02/25</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lista de apuestas realizadas */}
      <div class="relative z-10 space-y-4 sm:space-y-6 bg-black/40 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-emerald-500/20">
        <h3 class="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
          <i class="fas fa-ticket-alt text-emerald-400"></i>
          Apuestas Registradas
        </h3>
        <div class="grid gap-4 sm:gap-8">
          <For each={apostadores}>
            {(apostador) => (
              <div class="bg-black/40 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-emerald-500/20 hover:bg-black/50 transition-all duration-300">
                <div class="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                  {/* Avatar o inicial */}
                  <div class="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-xl sm:text-2xl font-bold">
                    {apostador.nombre.charAt(0)}
                  </div>

                  {/* Información del apostador */}
                  <div class="flex-1">
                    <div class="flex items-start justify-between">
                      <div>
                        <h4 class="text-lg sm:text-xl font-bold text-white mb-1">{apostador.nombre}</h4>
                      </div>
                      <div class="text-right">
                        <span class="inline-block px-3 py-1 rounded-full text-sm font-medium bg-emerald-500/20 text-emerald-400">
                          {apostador.apuestas.length} apuestas
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lista de apuestas del apostador */}
                <div class="grid gap-3 sm:gap-4">
                  <For each={apostador.apuestas}>
                    {(apuesta) => (
                      <div class="bg-black/40 rounded-xl p-3 sm:p-4 border border-emerald-500/20">
                        <div class="flex justify-between items-start mb-2 sm:mb-3">
                          <div>
                            <h5 class="font-semibold text-white text-sm sm:text-base">{apuesta.tipo}</h5>
                            <p class="text-xs sm:text-sm text-gray-400">Casa: {apuesta.casa}</p>
                          </div>
                          <div class="text-right">
                            <span class="inline-block px-2 py-1 rounded-lg text-sm font-medium bg-emerald-500/20 text-emerald-400">
                              {apuesta.cuota}x
                            </span>
                            <p class="text-xs sm:text-sm text-gray-400 mt-1">{apuesta.fecha_apuesta}</p>
                          </div>
                        </div>
                        <div class="space-y-1 sm:space-y-2">
                          <p class="text-gray-300 text-sm sm:text-base">
                            <span class="text-gray-400">Predicción:</span> {apuesta.prediccion}
                          </p>
                          <p class="text-gray-300 text-sm sm:text-base">
                            <span class="text-gray-400">Monto:</span> {apuesta.monto}
                          </p>
                        </div>
                      </div>
                    )}
                  </For>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>

      {/* Botón para unirse */}
      <div class="text-center mt-8 sm:mt-12">
        <a
          href="https://wa.me/56945885600?text=¡Hola! Quiero registrar una apuesta deportiva para el evento. ¿Podrías indicarme los pasos a seguir?"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold text-base sm:text-lg hover:from-emerald-600 hover:to-green-600 transition-all duration-300 shadow-lg"
        >
          <span>Registrar mi Apuesta</span>
          <i class="fab fa-whatsapp text-xl"></i>
          <div class="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>
      </div>
    </div>
  );
}