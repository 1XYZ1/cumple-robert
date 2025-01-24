// InstagramStepsModal.jsx
import { createSignal } from 'solid-js';

const InstagramStepsModal = ({ onClose }) => {
  const [currentStep, setCurrentStep] = createSignal(0);

  const steps = [
    {
      title: "Copiar el enlace",
      description: "Primero, copiemos el enlace de la fiesta",
      icon: "fas fa-link",
      action: {
        text: "Copiar enlace",
        onClick: async () => {
          await navigator.clipboard.writeText(window.location.href);
          setCurrentStep(1);
        }
      }
    },
    {
      title: "Abrir Instagram",
      description: "Ahora, abre la aplicación de Instagram",
      icon: "fab fa-instagram",
      action: {
        text: "Abrir Instagram",
        onClick: () => {
          window.open('instagram://story-camera');
          setTimeout(() => setCurrentStep(2), 1000);
        }
      }
    },
    {
      title: "Crear historia",
      description: "Crea una nueva historia y añade el enlace copiado",
      icon: "fas fa-plus-circle",
      action: {
        text: "Entendido",
        onClick: () => setCurrentStep(3)
      }
    },
    {
      title: "¡Listo!",
      description: "Tu historia está lista para compartir",
      icon: "fas fa-check-circle",
      action: {
        text: "Cerrar",
        onClick: onClose
      }
    }
  ];

  const currentStepData = () => steps[currentStep()];

  return (
    <div class="fixed inset-0 z-[10000] overflow-y-auto">
      {/* Overlay con blur */}
      <div
        class="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div class="min-h-screen px-4 text-center flex items-center justify-center">
        <div
          class="relative bg-white dark:bg-gray-900 w-full max-w-md rounded-2xl shadow-2xl p-6 text-left transform transition-all duration-300"
          onClick={e => e.stopPropagation()}
        >
          {/* Progress bar */}
          <div class="absolute top-0 left-0 right-0 h-2 bg-gray-100 rounded-t-2xl overflow-hidden">
            <div
              class="h-full bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-500"
              style={{ width: `${((currentStep() + 1) / steps.length) * 100}%` }}
            />
          </div>

          {/* Header */}
          <div class="mt-4 text-center">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Compartir en Instagram
            </h2>
            <p class="text-gray-600 dark:text-gray-400">
              Sigue estos pasos para compartir en tus historias
            </p>
          </div>

          {/* Steps */}
          <div class="mt-8">
            <div class="flex items-center justify-center mb-6">
              <div class="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white text-2xl animate-bounce">
                <i class={currentStepData().icon}></i>
              </div>
            </div>

            <div class="text-center mb-8">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {currentStepData().title}
              </h3>
              <p class="text-gray-600 dark:text-gray-400">
                {currentStepData().description}
              </p>
            </div>

            {/* Action button */}
            <button
              onClick={currentStepData().action.onClick}
              class="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white p-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <span>{currentStepData().action.text}</span>
              <i class="fas fa-arrow-right"></i>
            </button>

            {/* Steps indicator */}
            <div class="flex justify-center gap-2 mt-6">
              {steps.map((_, index) => (
                <div
                  class={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentStep()
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 w-4'
                      : index < currentStep()
                      ? 'bg-purple-600'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            class="absolute -right-2 -top-2 w-8 h-8 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors shadow-lg"
            aria-label="Cerrar"
          >
            <i class="fas fa-times text-gray-600"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstagramStepsModal;