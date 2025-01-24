// ShareModal.jsx
import { createSignal, Show } from 'solid-js';

import InstagramStepsModal from './InstagramStepsModal';

const ShareButton = (props) => {
  const [isHovered, setIsHovered] = createSignal(false);

  return (
    <button
      onClick={props.onClick}
      class={`
        w-full bg-gradient-to-r ${props.color} ${props.hoverColor}
        text-white p-4 rounded-xl transition-all duration-300
        hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]
        transform relative overflow-hidden group
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`Compartir en ${props.name}`}
    >
      {/* Efecto de brillo */}
      <div
        class={`
          absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
          transition-transform duration-500 -translate-x-full
          ${isHovered() ? 'translate-x-full' : '-translate-x-full'}
        `}
      />

      <div class="flex items-center gap-4 relative z-10">
        <div class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
          <i class={`${props.icon} text-2xl transition-transform duration-300 group-hover:scale-110`}></i>
        </div>
        <div class="text-left flex-1 min-w-0">
          <div class="font-semibold truncate">{props.name}</div>
          <div class="text-sm text-white/90 truncate">{props.description}</div>
        </div>
        <i class="fas fa-chevron-right opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </button>
  );
};

const ShareModal = (props) => {
  const [showInstagramSteps, setShowInstagramSteps] = createSignal(false);
  const shareOptions = [
    {
      id: 'whatsapp',
      icon: 'fab fa-whatsapp',
      name: 'WhatsApp',
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700',
      action: () => shareOnWhatsApp(),
      description: 'Comparte con tus amigos más cercanos'
    },
    {
      id: 'instagram',
      icon: 'fab fa-instagram',
      name: 'Instagram',
      color: 'from-pink-500 to-purple-600',
      hoverColor: 'hover:from-pink-600 hover:to-purple-700',
      action: () => shareOnInstagram(),
      description: 'Comparte en tus historias'
    },
    {
      id: 'facebook',
      icon: 'fab fa-facebook',
      name: 'Facebook',
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-700 hover:to-blue-800',
      action: () => shareOnFacebook(),
      description: 'Comparte en tu muro de Facebook'
    },
    {
      id: 'email',
      icon: 'fas fa-envelope',
      name: 'Email',
      color: 'from-red-500 to-red-600',
      hoverColor: 'hover:from-red-600 hover:to-red-700',
      action: () => shareByEmail(),
      description: 'Envía una invitación por correo'
    },
    {
      id: 'copy',
      icon: 'fas fa-link',
      name: 'Copiar Link',
      color: 'from-gray-600 to-gray-700',
      hoverColor: 'hover:from-gray-700 hover:to-gray-800',
      action: () => copyLink(),
      description: 'Copia el enlace al portapapeles'
    }
  ];

  const [showCopyAlert, setShowCopyAlert] = createSignal(false);

  const shareOnWhatsApp = () => {
    const text = encodeURIComponent(
      "🎉 ¡Te invito a la fiesta de Robert! 🎈\n\n" +
      "¡No te lo puedes perder! Habrá piscina, juegos, asado y mucha diversión."
    );
    const url = encodeURIComponent(window.location.href);
    window.open(`https://wa.me/?text=${text}\n\n📍 Más información aquí:\n${url}`);
    props.onClose();
  };

  const shareOnInstagram = () => {
    setShowInstagramSteps(true);
  };

  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
    props.onClose();
  };

  const shareByEmail = () => {
    const subject = encodeURIComponent("¡Te invito a la fiesta de Robert! 🎉");
    const body = encodeURIComponent(
      "¡Hola!\n\n" +
      "Te invito a la fiesta de Robert. Será un día increíble lleno de diversión, " +
      "con piscina, juegos, asado y mucho más.\n\n" +
      "📅 Fecha: 2 de Febrero, 2025\n" +
      "🕐 Hora: 10:00 AM\n" +
      "📍 Lugar: Chicureo, Santiago\n\n" +
      "Para más información y confirmar tu asistencia, visita:\n" +
      window.location.href
    );
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    props.onClose();
  };

  return (
    <>
      <div
        class="fixed inset-0 z-[9999] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Overlay con blur y animación */}
        <div
          class="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={props.onClose}
          aria-hidden="true"
        />

        {/* Contenedor del modal con animación */}
        <div class="min-h-screen px-4 text-center flex items-center justify-center">
          <div
            class="relative bg-white dark:bg-gray-900 w-full max-w-md rounded-2xl shadow-2xl p-6 text-left transform transition-all duration-300 scale-100 opacity-100"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div class="relative">
              <h2
                id="modal-title"
                class="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3 mb-2"
              >
                <div class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                  <i class="fas fa-share-alt text-white text-lg"></i>
                </div>
                Compartir Evento
              </h2>
              <p class="text-gray-600 dark:text-gray-400">
                Invita a tus amigos a esta increíble celebración
              </p>

              {/* Botón cerrar */}
              <button
                onClick={props.onClose}
                class="absolute -right-2 -top-2 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                aria-label="Cerrar modal"
              >
                <i class="fas fa-times text-gray-600"></i>
              </button>
            </div>

            {/* Botones de compartir */}
            <div class="mt-6 space-y-3">
              {shareOptions.map(option => (
                <ShareButton
                  {...option}
                  onClick={option.action}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Modal de pasos de Instagram */}
      <Show when={showInstagramSteps()}>
        <InstagramStepsModal
          onClose={() => {
            setShowInstagramSteps(false);
            props.onClose();
          }}
        />
      </Show>

      {/* Alerta de copiado */}
      <Show when={showCopyAlert()}>
        <div class="fixed bottom-4 right-4 z-[10000] animate-slideUp">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center gap-3">
            <div class="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
              <i class="fas fa-check text-green-500 dark:text-green-400"></i>
            </div>
            <div>
              <div class="font-medium text-gray-900 dark:text-white">¡Link copiado!</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">
                Enlace copiado al portapapeles
              </div>
            </div>
          </div>
        </div>
      </Show>
    </>
  );
};

export default ShareModal;