// Importación de hooks necesarios de Solid.js
import { createSignal, onMount } from "solid-js";

export default function Countdown() {
  // Fecha objetivo del evento (2 de febrero de 2025)
  const targetDate = new Date("2025-02-02T00:00:00").getTime();
  // Estado para almacenar el tiempo restante
  const [timeLeft, setTimeLeft] = createSignal(calculateTimeLeft());

  // Función para calcular el tiempo restante hasta la fecha objetivo
  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    // Si ya pasó la fecha, retornamos todos los valores en 0
    if (difference < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    // Calculamos los días, horas, minutos y segundos restantes
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000)
    };
  }

  // Configuramos un intervalo para actualizar el contador cada segundo
  onMount(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Limpiamos el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  });

  return (
    <div class="relative">
      {/* Decoración de fondo */}
      <div class="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 blur-3xl"></div>

      {/* Contenedor principal */}
      <div class="relative backdrop-blur-lg bg-white/5 rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl">
        <h3 class="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-yellow-200 via-orange-200 to-red-200 bg-clip-text text-transparent">
          Cuenta Regresiva
        </h3>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {/* Días */}
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl blur group-hover:blur-xl transition-all duration-300 opacity-20"></div>
            <div class="relative bg-black/50 backdrop-blur-xl rounded-2xl p-3 sm:p-4 border border-white/10 text-center transform group-hover:scale-105 transition-all duration-300">
              <div class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent mb-1 sm:mb-2">
                {String(timeLeft().days).padStart(2, '0')}
              </div>
              <div class="text-xs uppercase tracking-wider text-yellow-200/80">Días</div>
            </div>
          </div>

          {/* Horas */}
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl blur group-hover:blur-xl transition-all duration-300 opacity-20"></div>
            <div class="relative bg-black/50 backdrop-blur-xl rounded-2xl p-3 sm:p-4 border border-white/10 text-center transform group-hover:scale-105 transition-all duration-300">
              <div class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-200 to-red-200 bg-clip-text text-transparent mb-1 sm:mb-2">
                {String(timeLeft().hours).padStart(2, '0')}
              </div>
              <div class="text-xs uppercase tracking-wider text-orange-200/80">Horas</div>
            </div>
          </div>

          {/* Minutos */}
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-br from-red-500 to-amber-500 rounded-2xl blur group-hover:blur-xl transition-all duration-300 opacity-20"></div>
            <div class="relative bg-black/50 backdrop-blur-xl rounded-2xl p-3 sm:p-4 border border-white/10 text-center transform group-hover:scale-105 transition-all duration-300">
              <div class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-red-200 to-amber-200 bg-clip-text text-transparent mb-1 sm:mb-2">
                {String(timeLeft().minutes).padStart(2, '0')}
              </div>
              <div class="text-xs uppercase tracking-wider text-red-200/80">Minutos</div>
            </div>
          </div>

          {/* Segundos */}
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl blur group-hover:blur-xl transition-all duration-300 opacity-20"></div>
            <div class="relative bg-black/50 backdrop-blur-xl rounded-2xl p-3 sm:p-4 border border-white/10 text-center transform group-hover:scale-105 transition-all duration-300">
              <div class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-amber-200 to-yellow-200 bg-clip-text text-transparent mb-1 sm:mb-2 animate-pulse">
                {String(timeLeft().seconds).padStart(2, '0')}
              </div>
              <div class="text-xs uppercase tracking-wider text-amber-200/80">Segundos</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}