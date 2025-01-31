function ApuestasPreview() {
  return (
    <div class="w-full sm:max-w-7xl sm:mx-auto sm:px-4">
      <div class="relative bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-lg sm:rounded-3xl p-4 sm:p-8 border border-emerald-500/20 overflow-hidden shadow-2xl">
        {/* Decoración de fondo */}
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/20 via-green-500/20 to-transparent rounded-full blur-3xl transform rotate-45"></div>
          <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-transparent rounded-full blur-3xl transform -rotate-45"></div>
        </div>

        <div class="relative z-10">
          <div class="flex items-center justify-between mb-8">
            <div>
              <h2 class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-3">
                Apuestas Deportivas
              </h2>
              <p class="text-base sm:text-lg text-gray-300 max-w-2xl">
                Registra tus predicciones deportivas para el día del evento
              </p>
            </div>
            <div class="hidden md:flex -space-x-4">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-xl shadow-lg backdrop-blur-sm">
                <i class="fas fa-futbol"></i>
              </div>
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white text-xl shadow-lg backdrop-blur-sm">
                <i class="fas fa-trophy"></i>
              </div>
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-xl shadow-lg backdrop-blur-sm">
                <i class="fas fa-star"></i>
              </div>
            </div>
          </div>

          <div class="grid md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
            <div class="bg-black/40 rounded-xl p-4 sm:p-6 backdrop-blur-sm hover:bg-black/50 transition-colors duration-300 border border-emerald-500/20 shadow-xl group">
              <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <i class="fas fa-hand-holding-usd"></i>
              </div>
              <h4 class="font-bold text-lg sm:text-xl mb-2 text-white">Apuesta Mínima</h4>
              <p class="text-gray-300 text-sm sm:text-base">$1.000 por apuesta</p>
            </div>
            <div class="bg-black/40 rounded-xl p-4 sm:p-6 backdrop-blur-sm hover:bg-black/50 transition-colors duration-300 border border-emerald-500/20 shadow-xl group">
              <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <i class="fas fa-calendar-alt"></i>
              </div>
              <h4 class="font-bold text-lg sm:text-xl mb-2 text-white">Fecha del Evento</h4>
              <p class="text-gray-300 text-sm sm:text-base">02 de febrero, 2025</p>
            </div>
            <div class="bg-black/40 rounded-xl p-4 sm:p-6 backdrop-blur-sm hover:bg-black/50 transition-colors duration-300 border border-emerald-500/20 shadow-xl group">
              <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <i class="fas fa-gift"></i>
              </div>
              <h4 class="font-bold text-lg sm:text-xl mb-2 text-white">Premios</h4>
              <p class="text-gray-300 text-sm sm:text-base">Sorpresas para los ganadores</p>
            </div>
          </div>

          {/* Información adicional */}
          <div class="bg-black/40 rounded-xl p-4 sm:p-6 backdrop-blur-sm border border-emerald-500/20 mb-8 sm:mb-10">
            <h3 class="text-lg sm:text-xl font-bold text-white mb-4">¿Cómo participar?</h3>
            <div class="grid sm:grid-cols-2 gap-4 text-gray-300 text-sm sm:text-base">
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  1
                </div>
                <p>Realiza tus apuestas en cualquier casa de apuestas deportivas legal</p>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  2
                </div>
                <p>Guarda el comprobante de cada apuesta</p>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  3
                </div>
                <p>Envíanos los comprobantes por WhatsApp</p>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  4
                </div>
                <p>¡Listo! Tus apuestas quedarán registradas</p>
              </div>
            </div>
          </div>

          <div class="flex justify-center">
            <a
              href="/apuestas"
              class="group/btn relative inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold text-base sm:text-lg hover:from-emerald-600 hover:to-green-600 transition-all duration-300 shadow-lg backdrop-blur-sm"
            >
              <span>Ver Apuestas Registradas</span>
              <i class="fas fa-arrow-right group-hover/btn:translate-x-1 transition-transform"></i>
              <div class="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApuestasPreview;