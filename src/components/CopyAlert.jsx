import { createSignal, onMount } from "solid-js";

export default function CopyAlert({ message, onClose }) {
  const [isVisible, setIsVisible] = createSignal(true);

  onMount(() => {
    setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Esperar a que termine la animación
    }, 2700);
  });

  return (
    <div
      class="fixed bottom-6 right-6 z-[10000] pointer-events-none"
      role="alert"
      aria-live="polite"
    >
      <div
        class={`
          transform transition-all duration-300 ease-out
          ${isVisible() ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
          bg-white dark:bg-gray-800
          rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]
          p-5 flex items-center gap-4
          border border-gray-100/20 dark:border-gray-700/20
          backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95
        `}
      >
        <div
          class="w-12 h-12 rounded-xl bg-gradient-to-tr from-green-400 to-green-500
          flex items-center justify-center shadow-lg shadow-green-500/30
          animate-bounce-subtle"
        >
          <i class="fas fa-check text-white text-xl"></i>
        </div>

        <div class="flex-1 min-w-[200px]">
          <div class="font-bold text-gray-900 dark:text-white text-lg mb-0.5">
            ¡Copiado exitosamente!
          </div>
          <div class="text-gray-600 dark:text-gray-300">
            {message}
          </div>
        </div>

        <div class="absolute top-0 left-0 w-full h-1">
          <div
            class="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-t-2xl"
            style={{
              "animation": "progress 3s linear forwards"
            }}
          />
        </div>
      </div>
    </div>
  );
}