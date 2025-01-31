// ShareModal.jsx
import { createSignal, Show, onMount, onCleanup } from 'solid-js';

import InstagramStepsModal from './InstagramStepsModal';
import MessengerStepsModal from './MessengerStepsModal';
import CopyAlert from './CopyAlert';

// Componente de botón para compartir en redes sociales
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

// Componente Modal para compartir el evento
const ShareModal = (props) => {
  // Estados para controlar las alertas y copias
  const [showCopyAlert, setShowCopyAlert] = createSignal(false);
  const [alertMessage, setAlertMessage] = createSignal("");

  // Estados para controlar los modales de pasos
  const [showInstagramSteps, setShowInstagramSteps] = createSignal(false);
  const [showMessengerSteps, setShowMessengerSteps] = createSignal(false);

  // URL del evento para compartir
  const eventUrl = window.location.href;

  // Mensaje predeterminado para compartir
  const invitationMessage = `🎉 ¡Te invito a la fiesta de Robert! 🎈

¡No te lo puedes perder! Habrá:
🏊‍♂️ Piscina
⚽ Fútbol
🏓 Ping Pong
🍖 Asado
¡Y mucho más!

📅 2 de Febrero, 2025
⏰ 10:00 AM
📍 Chicureo, Santiago

Más información aquí:
https://www.cumplerobert.site/`;

  // Función para copiar texto al portapapeles
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(invitationMessage);
      setAlertMessage("Mensaje de invitación copiado al portapapeles");
      setShowCopyAlert(true);
    } catch (err) {
      console.error('Error al copiar:', err);
      setAlertMessage("No se pudo copiar el mensaje. Inténtalo de nuevo.");
      setShowCopyAlert(true);
    }
  };

  // Opciones de compartir en redes sociales
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
      icon: 'fab fa-facebook-messenger',
      name: 'Messenger',
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-700 hover:to-blue-800',
      action: () => shareOnMessenger(),
      description: 'Comparte en Messenger'
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
      action: () => handleCopy(),
      description: 'Copia el enlace al portapapeles'
    }
  ];

  // Función para compartir en WhatsApp
  const shareOnWhatsApp = () => {
    const text = encodeURIComponent(
      "🎉 ¡Te invito a la fiesta de Robert! 🎈\n\n" +
      "¡No te lo puedes perder! Habrá piscina, juegos, asado y mucha diversión."
    );
    const url = encodeURIComponent(window.location.href);
    window.open(`https://wa.me/?text=${text}\n\n📍 Más información aquí:\n${url}`);
    props.onClose();
  };

  // Función para compartir en Instagram
  const shareOnInstagram = () => {
    setShowInstagramSteps(true);
  };

  // Función para compartir en Messenger
  const shareOnMessenger = () => {
    setShowMessengerSteps(true);
  };

  // Función para compartir por correo electrónico
  const shareByEmail = () => {
    // Estos valores se pueden recibir por props si lo prefieres
    const fecha = "2 de Febrero, 2025";
    const hora = "10:00 AM";
    const lugar = "Chicureo, Santiago";

    // Prepara el cuerpo del correo
    // Usando %0D%0A para mayor compatibilidad con distintos clientes
    const body = [
      "¡Hola!",
      "",
      "Te invito a la fiesta de Robert. Será un día increíble lleno de diversión,",
      "con piscina, juegos, asado y mucho más.",
      "",
      `📅 Fecha: ${fecha}`,
      `🕐 Hora: ${hora}`,
      `📍 Lugar: ${lugar}`,
      "",
      "Para más información y confirmar tu asistencia, visita:",
      window.location.href
    ].join("%0D%0A");

    const subject = encodeURIComponent("¡Te invito a la fiesta de Robert! 🎉");

    // Armamos el mailto
    const mailtoLink = `mailto:?subject=${subject}&body=${body}`;

    // Redirige al usuario a la app de correo
    window.location.href = mailtoLink;

    // Opcional: cierra el modal si así lo deseas
    // props.onClose();
  };

  // Función para cerrar la alerta de copiado
  const handleCopyClose = () => {
    setShowCopyAlert(false);
  };

  // Función para cerrar el modal de pasos de Messenger
  const handleMessengerClose = () => {
    setShowMessengerSteps(false);
  };

  // Función para cerrar el modal de pasos de Instagram
  const handleInstagramClose = () => {
    setShowInstagramSteps(false);
  };

  // Bloquear scroll cuando el modal principal está abierto
  onMount(() => {
    document.body.style.overflow = 'hidden';
    onCleanup(() => {
      if (!showInstagramSteps()) {
        document.body.style.overflow = '';
      }
    });
  });

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

      <Show when={showMessengerSteps()}>
        <MessengerStepsModal onClose={handleMessengerClose} />
      </Show>

      {/* Modal de pasos de Instagram */}
      <Show when={showInstagramSteps()}>
        <InstagramStepsModal onClose={handleInstagramClose} />
      </Show>

      {/* Alerta de copiado */}
      <Show when={showCopyAlert()}>
        <CopyAlert
          message={alertMessage()}
          onClose={handleCopyClose}
        />
      </Show>
    </>
  );
};

export default ShareModal;