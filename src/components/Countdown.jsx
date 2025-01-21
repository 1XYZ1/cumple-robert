import { createSignal, onMount } from "solid-js";

export default function Countdown() {
  const targetDate = new Date("2025-02-02T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = createSignal(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000)
    };
  }

  onMount(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div class="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
      <div class="text-center p-4 bg-blue-800/30 backdrop-blur rounded-lg border border-blue-700/30">
        <span class="text-4xl font-bold text-white">{timeLeft().days}</span>
        <p class="text-sm text-blue-100">Días</p>
      </div>
      <div class="text-center p-4 bg-blue-800/30 backdrop-blur rounded-lg border border-blue-700/30">
        <span class="text-4xl font-bold text-white">{timeLeft().hours}</span>
        <p class="text-sm text-blue-100">Horas</p>
      </div>
      <div class="text-center p-4 bg-blue-800/30 backdrop-blur rounded-lg border border-blue-700/30">
        <span class="text-4xl font-bold text-white">{timeLeft().minutes}</span>
        <p class="text-sm text-blue-100">Minutos</p>
      </div>
      <div class="text-center p-4 bg-blue-800/30 backdrop-blur rounded-lg border border-blue-700/30">
        <span class="text-4xl font-bold text-white">{timeLeft().seconds}</span>
        <p class="text-sm text-blue-100">Segundos</p>
      </div>
    </div>
  );
}