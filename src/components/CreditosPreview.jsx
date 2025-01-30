function CreditosPreview() {
  return (
    <div class="w-full sm:max-w-7xl sm:mx-auto sm:px-4">
      <div class="relative bg-gray-900/80 backdrop-blur-lg sm:rounded-3xl p-4 sm:p-8 border border-purple-500/20 overflow-hidden shadow-2xl">
        {/* Decoración de fondo */}
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute -top-1/2 -right-1/2 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-1/2 -left-1/2 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        <div class="relative z-10">
          <div class="flex items-center justify-between mb-8">
            <div>
              <h2 class="text-4xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent mb-3">
                Agradecimientos Especiales
              </h2>
              <p class="text-lg text-gray-300 max-w-2xl">
                Conoce a las personas que hicieron posible este evento
              </p>
            </div>
            <div class="hidden md:flex -space-x-4">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400/80 to-pink-400/80 flex items-center justify-center text-white text-xl shadow-lg backdrop-blur-sm">
                <i class="fas fa-heart"></i>
              </div>
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400/80 to-indigo-400/80 flex items-center justify-center text-white text-xl shadow-lg backdrop-blur-sm">
                <i class="fas fa-star"></i>
              </div>
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400/80 to-red-400/80 flex items-center justify-center text-white text-xl shadow-lg backdrop-blur-sm">
                <i class="fas fa-gift"></i>
              </div>
            </div>
          </div>

          <div class="grid md:grid-cols-3 gap-6 mb-10">
            <div class="bg-white/5 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 border border-white/5 shadow-xl group">
              <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-400/80 to-orange-400/80 flex items-center justify-center text-white text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <i class="fas fa-utensils"></i>
              </div>
              <h4 class="font-bold text-xl mb-3 text-white">Gastronomía</h4>
              <p class="text-gray-300">Deliciosos platillos y bebidas preparados con amor</p>
            </div>
            <div class="bg-white/5 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 border border-white/5 shadow-xl group">
              <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400/80 to-indigo-400/80 flex items-center justify-center text-white text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <i class="fas fa-music"></i>
              </div>
              <h4 class="font-bold text-xl mb-3 text-white">Entretenimiento</h4>
              <p class="text-gray-300">Música, juegos y diversión para todos</p>
            </div>
            <div class="bg-white/5 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 border border-white/5 shadow-xl group">
              <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-400/80 to-purple-400/80 flex items-center justify-center text-white text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <i class="fas fa-magic"></i>
              </div>
              <h4 class="font-bold text-xl mb-3 text-white">Organización</h4>
              <p class="text-gray-300">Cada detalle pensado para tu disfrute</p>
            </div>
          </div>

          <div class="flex justify-center">
            <a
              href="/creditos"
              class="group/btn relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/80 to-pink-500/80 text-white font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg backdrop-blur-sm"
            >
              <span>Ver Todos los Créditos</span>
              <i class="fas fa-arrow-right group-hover/btn:translate-x-1 transition-transform"></i>
              <div class="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditosPreview;