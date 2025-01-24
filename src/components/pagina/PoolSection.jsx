import { onMount } from "solid-js";
import styles from "./PoolSection.module.css";

function PoolSection() {
  onMount(() => {
    // Lógica de montaje si fuera necesario
  });

  return (
    <div class="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white">
      {/* Hero Section */}
      <div class="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        {/* Imagen de fondo con overlay */}
        <div class="absolute inset-0 overflow-hidden">
          <img
            src="/images/pool.jpeg"
            alt="Piscina"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Contenido central del Hero */}
        <div class="relative z-10 text-center px-4 max-w-2xl">
          <h1 class="text-5xl md:text-6xl font-bold mb-4">Piscina</h1>
          <p class="text-xl text-blue-100 mb-8">
            Disfruta de un refrescante día de piscina con todas las comodidades que mereces
          </p>
          <a
            href="#info"
            class="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Ver Detalles
          </a>
        </div>

        {/* Botón de navegación (Volver al inicio) */}
        <nav class="absolute top-6 left-6">
          <a
            href="/"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 backdrop-blur-sm"
          >
            <i class="fas fa-arrow-left"></i>
            Volver al inicio
          </a>
        </nav>
      </div>

      {/* Contenido Principal */}
      <div id="info" class="max-w-7xl mx-auto px-4 py-16 space-y-16">
        {/* Información General y Reglas */}
        <div class="grid md:grid-cols-2 gap-8">
          {/* Información General */}
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
              <i class="fas fa-clock text-blue-400"></i>
              Información General
            </h3>
            <div class="grid grid-cols-2 gap-4">
              <div class="p-4 bg-white/5 rounded-xl text-center">
                <div class="text-sm text-blue-300 mb-1">Horario</div>
                <div class="text-xl">10:00 - 20:00</div>
              </div>
              <div class="p-4 bg-white/5 rounded-xl text-center">
                <div class="text-sm text-blue-300 mb-1">Temperatura</div>
                <div class="text-xl">28°C</div>
              </div>
              <div class="p-4 bg-white/5 rounded-xl text-center">
                <div class="text-sm text-blue-300 mb-1">Profundidad</div>
                <div class="text-xl">1.2m - 2.5m</div>
              </div>
              <div class="p-4 bg-white/5 rounded-xl text-center">
                <div class="text-sm text-blue-300 mb-1">Capacidad</div>
                <div class="text-xl">20 personas</div>
              </div>
            </div>
          </div>

          {/* Reglas */}
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
              <i class="fas fa-list text-blue-400"></i>
              Reglas Importantes
            </h3>
            <ul class="space-y-3 text-blue-100">
              {[
                "No correr cerca de la piscina",
                "Ducharse antes de entrar",
                "No comer dentro de la piscina",
                "Supervisión de menores obligatoria",
                "No vidrios en el área",
                "Usar traje de baño adecuado",
              ].map((rule) => (
                <li class="flex items-start gap-3">
                  <i class="fas fa-check text-blue-400 mt-1"></i>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Lo que debes traer */}
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <h3 class="text-2xl font-bold mb-6 text-center">Lo que debes traer</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "fas fa-umbrella", text: "Sombrilla" },
              { icon: "fas fa-tshirt", text: "Muda de ropa" },
              { icon: "fas fa-prescription-bottle", text: "Protector solar" },
              { icon: "fas fa-glasses", text: "Gafas de sol" },
            ].map((item) => (
              <div class="text-center">
                <div class="w-16 h-16 mx-auto mb-3 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <i class={`${item.icon} text-2xl`} />
                </div>
                <div>{item.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Llamado a la acción */}
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
          <h3 class="text-3xl font-bold mb-4">¿Listo para un día refrescante?</h3>
          <p class="text-blue-100 mb-6 max-w-xl mx-auto">
            Reserva tu lugar ahora y disfruta de una experiencia inolvidable en nuestra piscina.
            ¡Trae a tu familia y amigos para pasar un día inolvidable!
          </p>
          <a
            href="/reserva"
            class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            Reservar Ahora
          </a>
        </div>
      </div>
    </div>
  );
}

export default PoolSection;
