import { onMount, createSignal } from "solid-js";

const ConfirmationSection = () => {
  const [confirmedCount, setConfirmedCount] = createSignal(23);

  return (
    <div class="w-full sm:max-w-7xl sm:mx-auto sm:px-4">
      <div class="relative bg-gray-900/80 backdrop-blur-lg sm:rounded-3xl p-4 sm:p-8 border border-purple-500/20 overflow-hidden shadow-2xl">
        {/* Decoración de fondo */}
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute -top-1/2 -right-1/2 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-1/2 -left-1/2 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        <div class="relative z-10">
          {/* Encabezado */}
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-4">
              Confirma tu Asistencia
            </h2>
            <p class="text-lg text-gray-200 max-w-2xl mx-auto">
              ¡No te pierdas esta increíble celebración!
            </p>
            {/* Contador de confirmaciones */}
            <div class="mt-4 inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-green-300 shadow-sm">
              <i class="fas fa-users"></i>
              <span>Ya {confirmedCount()} invitados han confirmado</span>
            </div>
          </div>

          {/* Grid de información */}
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            {/* Columna de Información de Pago */}
            <div class="space-y-6">
              <div class="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/5 shadow-xl">
                <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-green-400 to-emerald-400 flex items-center justify-center text-white text-2xl mb-4 shadow-lg">
                  <i class="fas fa-money-bill-wave"></i>
                </div>
                <h3 class="text-xl font-bold text-white mb-4">Información de Pago</h3>
                <div class="space-y-4">
                  <div class="bg-white/5 p-4 rounded-lg">
                    <p class="text-gray-300 mb-2">Nombre:</p>
                    <p class="text-white font-semibold">Rober Jose Gil Morillo</p>
                  </div>
                  <div class="bg-white/5 p-4 rounded-lg">
                    <p class="text-gray-300 mb-2">RUT:</p>
                    <p class="text-white font-semibold">25751711K</p>
                  </div>
                  <div class="bg-white/5 p-4 rounded-lg">
                    <p class="text-gray-300 mb-2">Tipo de Cuenta:</p>
                    <p class="text-white font-semibold">Cuenta Vista Mercado Pago</p>
                  </div>
                  <div class="bg-white/5 p-4 rounded-lg">
                    <p class="text-gray-300 mb-2">N° de Cuenta:</p>
                    <p class="text-white font-semibold">1041660954</p>
                  </div>
                  <div class="bg-white/5 p-4 rounded-lg">
                    <p class="text-gray-300 mb-2">Email:</p>
                    <p class="text-white font-semibold">robertgil22@gmail.com</p>
                  </div>
                  <div class="bg-white/5 p-4 rounded-lg">
                    <p class="text-gray-300 mb-2">Valor por persona:</p>
                    <p class="text-white font-semibold">$8.000</p>
                  </div>
                  <div class="bg-white/5 p-4 rounded-lg">
                    <p class="text-gray-300 mb-2">Niños:</p>
                    <p class="text-white font-semibold">Menores de 5 años no pagan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna de Pasos a Seguir */}
            <div class="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/5 shadow-xl">
              <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-indigo-400 flex items-center justify-center text-white text-2xl mb-4 shadow-lg">
                <i class="fas fa-list-ol"></i>
              </div>
              <h3 class="text-xl font-bold text-white mb-4">Pasos a Seguir</h3>
              <ul class="space-y-4">
                <li class="flex items-start gap-4">
                  <div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-purple-300 font-bold shrink-0">
                    1
                  </div>
                  <div>
                    <h4 class="text-white font-semibold mb-1">Realiza la transferencia</h4>
                    <p class="text-gray-300">Transfiere el monto correspondiente según el número de asistentes</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-purple-300 font-bold shrink-0">
                    2
                  </div>
                  <div>
                    <h4 class="text-white font-semibold mb-1">Envía el comprobante</h4>
                    <p class="text-gray-300">Comparte el comprobante de pago por WhatsApp</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-purple-300 font-bold shrink-0">
                    3
                  </div>
                  <div>
                    <h4 class="text-white font-semibold mb-1">Confirma asistentes</h4>
                    <p class="text-gray-300">Indica el número de personas que asistirán y sus nombres</p>
                  </div>
                </li>
              </ul>

              {/* Nota adicional */}
              <p class="text-gray-400 text-sm mt-6">
                Por favor, confirma tu asistencia y la de tus acompañantes con anticipación para una mejor organización.
              </p>
            </div>
          </div>

          {/* Botón de WhatsApp */}
          <div class="flex justify-center">
            <a
              href="https://wa.me/56945885600"
              target="_blank"
              rel="noopener noreferrer"
              class="group relative overflow-hidden px-8 py-4 rounded-full bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 bg-[length:200%_100%] hover:bg-[100%_0] transition-[background-position] duration-500 text-white font-bold text-lg shadow-lg hover:shadow-green-500/50 transform hover:scale-105 active:scale-95"
            >
              <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.3),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative flex items-center gap-3">
                <i class="fab fa-whatsapp text-2xl animate-bounce-subtle"></i>
                <span>Confirmar Asistencia</span>
                <div class="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/20 blur-md transition-transform duration-500 group-hover:scale-[3] opacity-0 group-hover:opacity-100"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationSection;
