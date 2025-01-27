import { onMount, createSignal } from "solid-js";

const ConfirmationSection = () => {
  // Ejemplo de número de personas confirmadas (puedes obtenerlo dinámicamente si lo deseas)
  const [confirmedCount, setConfirmedCount] = createSignal(23);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "¡Hola! Quiero confirmar mi asistencia al Pool Party de Robert."
    );
    window.open(`https://wa.me/+56912345678?text=${message}`, "_blank");
  };

  return (
    <section class="py-16 bg-gradient-to-b from-blue-900 to-gray-900 relative">
      <div class="max-w-5xl mx-auto px-4">
        {/* Encabezado */}
        <div class="text-center mb-12">
          <h2 class="text-4xl font-extrabold text-white mb-4 drop-shadow-lg">
            Confirma tu Asistencia
          </h2>
          <p class="text-xl text-gray-300">
            ¡No te pierdas esta increíble celebración!
          </p>

          {/* Nueva sección que muestra cuántas personas ya han confirmado */}
          <div class="mt-4 inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm text-green-300 shadow-sm">
            <i class="fas fa-users"></i>
            <span>Ya {confirmedCount()} invitados han confirmado</span>
          </div>
        </div>

        {/* Contenedor principal */}
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          {/* Información del evento */}
          <div class="mb-10">
            <h3 class="text-2xl font-bold text-white mb-3">Detalles de Pago</h3>
            <div class="space-y-4 text-gray-300">
              <p class="flex items-start gap-2">
                <i class="fas fa-dollar-sign mt-1 text-[#40E0D0]"></i>
                <span>
                  <strong>Valor:</strong> $8.000 por persona
                </span>
              </p>
              <p class="flex items-start gap-2">
                <i class="fas fa-child mt-1 text-[#40E0D0]"></i>
                <span>
                  <strong>Niños:</strong> Menores de 5 años no pagan
                </span>
              </p>
            </div>
          </div>

          {/* Datos bancarios */}
          <div class="bg-white/5 rounded-xl p-6 mb-8 shadow-inner">
            <h4 class="text-xl font-semibold text-white mb-4">
              Datos de Transferencia
            </h4>
            <div class="space-y-3 text-gray-300 leading-relaxed">
              <p class="flex items-center gap-2">
                <i class="fas fa-user text-[#40E0D0]"></i>
                <span>
                  <strong>Nombre:</strong> Rober Jose Gil Morillo
                </span>
              </p>
              <p class="flex items-center gap-2">
                <i class="fas fa-id-card text-[#40E0D0]"></i>
                <span>
                  <strong>RUT:</strong> 25751711K
                </span>
              </p>
              <p class="flex items-center gap-2">
                <i class="fas fa-university text-[#40E0D0]"></i>
                <span>
                  <strong>Tipo de Cuenta:</strong> Cuenta Vista Mercado Pago
                </span>
              </p>
              <p class="flex items-center gap-2">
                <i class="fas fa-credit-card text-[#40E0D0]"></i>
                <span>
                  <strong>N° de Cuenta:</strong> 1041660954
                </span>
              </p>
              <p class="flex items-center gap-2">
                <i class="fas fa-envelope text-[#40E0D0]"></i>
                <span>
                  <strong>Email:</strong> robertgil22@gmail.com
                </span>
              </p>
            </div>
          </div>

          {/* Botón de WhatsApp */}
          <div class="text-center">
            <button
              onClick={handleWhatsAppClick}
              class="relative inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 text-lg"
            >
              <i class="fab fa-whatsapp text-2xl"></i>
              <span>Confirmar Asistencia por WhatsApp</span>
            </button>
          </div>

          {/* Nota adicional */}
          <p class="text-gray-400 text-sm text-center mt-6">
            Por favor, confirma tu asistencia y la de tus acompañantes con
            anticipación para una mejor organización.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConfirmationSection;
