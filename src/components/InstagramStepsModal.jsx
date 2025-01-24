import { createSignal, onMount, onCleanup } from "solid-js";

export default function InstagramStepsModal({ onClose }) {
  const [currentStep, setCurrentStep] = createSignal(0);
  const [copySuccess, setCopySuccess] = createSignal(false);

  // Bloquear scroll cuando el modal está abierto
  onMount(() => {
    document.body.style.overflow = "hidden";
    onCleanup(() => {
      document.body.style.overflow = "";
    });
  });

  const invitationMessage = `¡Fiesta de Robert! 🎉
📅 2 de Febrero, 2025
⏰ 10:00 AM
📍 Chicureo, Santiago

Más información aquí:
${window.location.href}`;

  function handleOpenInstagram() {
    window.open("https://instagram.com", "_blank");
    setCurrentStep(2);
  }

  const steps = [
    {
      title: "Copiar invitación",
      description: "Primero, copiemos el mensaje de invitación",
      icon: "fas fa-copy",
      action: {
        text: copySuccess() ? "¡Copiado!" : "Copiar mensaje",
        onClick: () => {
          navigator.clipboard.writeText(invitationMessage);
          setCopySuccess(true);
          setTimeout(() => setCurrentStep(1), 1000);
        }
      }
    },
    {
      title: "Abrir Instagram",
      description: "Abre Instagram y comparte como prefieras",
      icon: "fab fa-instagram",
      action: {
        text: "Abrir Instagram",
        onClick: handleOpenInstagram
      }
    },
    {
      title: "¡Listo!",
      description: "Gracias por compartir la invitación",
      icon: "fas fa-check-circle",
      action: {
        text: "Finalizar",
        onClick: onClose
      }
    }
  ];

  const currentStepData = () => steps[currentStep()];

  return (
    <div class="fixed inset-0 z-[10000] overflow-y-auto">
      <div
        class="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      <div class="min-h-screen px-4 text-center flex items-center justify-center">
        <div
          class="relative bg-white dark:bg-gray-900 w-full max-w-md rounded-2xl shadow-2xl p-6 text-left transform transition-all duration-300"
          onClick={e => e.stopPropagation()}
        >
          {/* Barra de progreso */}
          <div class="absolute top-0 left-0 right-0 h-2 bg-gray-100 rounded-t-2xl overflow-hidden">
            <div
              class="h-full bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-500"
              style={{ width: `${((currentStep() + 1) / steps.length) * 100}%` }}
            />
          </div>

          {/* Cabecera */}
          <div class="mt-4 text-center">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Compartir en Instagram
            </h2>
            <p class="text-gray-600 dark:text-gray-400">
              {currentStep() === 2 ?
                "¡Gracias por compartir!" :
                "Comparte la invitación en Instagram"}
            </p>
          </div>

          {/* Contenido */}
          <div class="mt-8">
            <div class="flex items-center justify-center mb-6">
              <div class={`w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600
                flex items-center justify-center text-white text-2xl
                ${currentStep() === 0 ? 'animate-bounce' : ''}`}>
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

            {/* Botón de acción */}
            <button
              onClick={() => currentStepData().action.onClick()}
              class={`w-full bg-gradient-to-r from-pink-500 to-purple-600
                hover:from-pink-600 hover:to-purple-700 text-white p-4
                rounded-xl transition-all duration-300 transform
                hover:scale-[1.02] active:scale-[0.98] flex items-center
                justify-center gap-2 ${copySuccess() && currentStep() === 0 ? 'bg-green-500' : ''}`}
            >
              <span>{currentStepData().action.text}</span>
              {!copySuccess() && currentStep() !== 2 && <i class="fas fa-arrow-right"></i>}
              {copySuccess() && currentStep() === 0 && <i class="fas fa-check"></i>}
            </button>

            {/* Indicadores de paso */}
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

          {/* Botón cerrar */}
          <button
            onClick={onClose}
            class="absolute -right-2 -top-2 w-8 h-8 bg-white hover:bg-gray-100
              rounded-full flex items-center justify-center transition-colors
              shadow-lg"
            aria-label="Cerrar"
          >
            <i class="fas fa-times text-gray-600"></i>
          </button>
        </div>
      </div>
    </div>
  );
}