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
    // Contenedor principal del contador
    <div class="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
      {/* Días restantes */}
      <div class="text-center p-4 bg-blue-800/30 backdrop-blur rounded-lg border border-blue-700/30">
        <span class="text-4xl font-bold text-white">{timeLeft().days}</span>
        <p class="text-sm text-blue-100">Días</p>
      </div>
      
      {/* Horas restantes */}
      <div class="text-center p-4 bg-blue-800/30 backdrop-blur rounded-lg border border-blue-700/30">
        <span class="text-4xl font-bold text-white">{timeLeft().hours}</span>
        <p class="text-sm text-blue-100">Horas</p>
      </div>
      
      {/* Minutos restantes */}
      <div class="text-center p-4 bg-blue-800/30 backdrop-blur rounded-lg border border-blue-700/30">
        <span class="text-4xl font-bold text-white">{timeLeft().minutes}</span>
        <p class="text-sm text-blue-100">Minutos</p>
      </div>
      
      {/* Segundos restantes */}
      <div class="text-center p-4 bg-blue-800/30 backdrop-blur rounded-lg border border-blue-700/30">
        <span class="text-4xl font-bold text-white">{timeLeft().seconds}</span>
        <p class="text-sm text-blue-100">Segundos</p>
      </div>
    </div>
  );
}