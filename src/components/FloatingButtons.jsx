// FloatingButtons.jsx
import { createSignal, onMount, onCleanup, Show } from 'solid-js';
import ShareModal from './ShareModal';

const FloatingButton = ({ icon, label, onClick, isVisible = true, className = '' }) => {
  const [isHovered, setIsHovered] = createSignal(false);

  return (
    <div
      class={`fixed z-[9998] transition-all duration-500 group ${className}`}
      style={{
        opacity: isVisible ? '1' : '0',
        transform: isVisible ? 'scale(1)' : 'scale(0.9)',
        'pointer-events': isVisible ? 'auto' : 'none'
      }}
    >
      <button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        class="relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full w-14 h-14 shadow-lg transition-all duration-300 hover:shadow-blue-500/30 hover:shadow-xl active:scale-95 flex items-center justify-center"
        aria-label={label}
      >
        {/* Efecto de brillo */}
        <div
          class={`
            absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
            transition-transform duration-500
            ${isHovered() ? 'translate-x-full' : '-translate-x-full'}
          `}
        />
        <i class={`${icon} text-xl relative z-10 transition-transform duration-300 ${isHovered() ? 'scale-110' : ''}`}></i>
      </button>

      {/* Tooltip mejorado */}
      <div class="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
        <div class="bg-gray-900 text-white text-sm py-2 px-4 rounded-full shadow-lg whitespace-nowrap">
          {label}
        </div>
        <div class="w-2 h-2 bg-gray-900 transform rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
      </div>
    </div>
  );
};

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = createSignal(false);
  const [showModal, setShowModal] = createSignal(false);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const viewportHeight = window.innerHeight;
    const shouldShow = scrollPosition > Math.min(300, viewportHeight * 0.3);
    setIsVisible(shouldShow);
  };

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    onCleanup(() => window.removeEventListener('scroll', handleScroll));
  });

  return (
    <>
      <FloatingButton
        icon="fas fa-arrow-up"
        label="Volver arriba"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        isVisible={isVisible()}
        className="bottom-24 right-6"
      />

      <FloatingButton
        icon="fas fa-share-alt"
        label="Compartir evento"
        onClick={() => setShowModal(true)}
        className="bottom-6 right-6"
      />

      <Show when={showModal()}>
        <ShareModal onClose={() => setShowModal(false)} />
      </Show>
    </>
  );
};

export default FloatingButtons;