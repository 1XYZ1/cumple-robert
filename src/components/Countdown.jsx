import { createSignal, onCleanup } from "solid-js";

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = createSignal(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = new Date(targetDate) - new Date();
    return {
      days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: Math.max(0, Math.floor((difference / (1000 * 60)) % 60)),
      seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
    };
  }

  const interval = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);

  onCleanup(() => clearInterval(interval));

  return (
    <div class="my-6 flex space-x-4 text-2xl font-bold">
      <div class="text-center">
        <span class="block text-4xl">{timeLeft().days}</span>
        <span>Días</span>
      </div>
      <div class="text-center">
        <span class="block text-4xl">{timeLeft().hours}</span>
        <span>Horas</span>
      </div>
      <div class="text-center">
        <span class="block text-4xl">{timeLeft().minutes}</span>
        <span>Minutos</span>
      </div>
      <div class="text-center">
        <span class="block text-4xl">{timeLeft().seconds}</span>
        <span>Segundos</span>
      </div>
    </div>
  );
}
