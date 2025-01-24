import styles from "./PoolSection.module.css";

export default function PoolSection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px]">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/pool.jpeg"
            alt="Piscina"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-blue-900/90"></div>
        </div>

        {/* SVG Animado como overlay del hero */}
        <div className="absolute bottom-0 left-0 right-0 h-48 md:h-64 overflow-hidden">
          <svg
            viewBox="0 0 1200 200"
            preserveAspectRatio="none"
            style={{ background: "none" }} // Forzamos el fondo a "none"
            className="w-[120%] h-full absolute -left-[10%]"
          >
            <defs>
              <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#60A5FA", stopOpacity: 0.7 }} />
                <stop offset="100%" style={{ stopColor: "#1D4ED8", stopOpacity: 0.9 }} />
              </linearGradient>

              <linearGradient id="waveHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "#93C5FD", stopOpacity: 0.9 }} />
                <stop offset="100%" style={{ stopColor: "#BFDBFE", stopOpacity: 0.2 }} />
              </linearGradient>
            </defs>

            {/* Ola principal con animación SMIL (morphing) */}
            <path
              fill="url(#waterGradient)"
            >
              <animate
                attributeName="d"
                dur="8s"
                repeatCount="indefinite"
                values="
                  M0,80 C300,80 900,80 1200,80 C1200,80 1200,200 1200,200 L0,200 C0,200 0,80 0,80 Z;
                  M0,85 C300,75 900,85 1200,75 C1200,75 1200,200 1200,200 L0,200 C0,200 0,85 0,85 Z;
                  M0,80 C300,80 900,80 1200,80 C1200,80 1200,200 1200,200 L0,200 C0,200 0,80 0,80 Z
                "
              />
            </path>

            {/* Segunda capa de ondas (ligeramente más arriba y con opacidad mínima) */}
            <path
              d="M0 70 C300 70, 900 70, 1200 70 C1200 70, 1200 200, 1200 200 L0 200 C0 200, 0 70, 0 70 Z"
              fill="url(#waveHighlight)"
              opacity="0.1"
            />

            {/* Ondas decorativas con animaciones por CSS */}
            <path
              d="M0 90 C300 85, 900 95, 1200 90"
              fill="none"
              stroke="#93C5FD"
              strokeWidth="2"
              className={styles.wave1}
            />
            <path
              d="M0 100 C400 95, 800 105, 1200 100"
              fill="none"
              stroke="#BFDBFE"
              strokeWidth="1.5"
              className={styles.wave2}
            />
            <path
              d="M0 110 C300 105, 900 115, 1200 110"
              fill="none"
              stroke="#EFF6FF"
              strokeWidth="1"
              className={styles.wave3}
            />

            {/* Destellos (shines) */}
            <circle
              cx="150"
              cy="95"
              r="1"
              fill="#FFFFFF"
              className={styles.shine1}
            />
            <circle
              cx="450"
              cy="105"
              r="1.5"
              fill="#FFFFFF"
              className={styles.shine2}
            />
            <circle
              cx="750"
              cy="98"
              r="1"
              fill="#FFFFFF"
              className={styles.shine1}
            />
            <circle
              cx="1050"
              cy="102"
              r="1.5"
              fill="#FFFFFF"
              className={styles.shine2}
            />

            {/* Burbujas ascendentes */}
            <circle
              cx="200"
              cy="150"
              r="3"
              fill="#FFFFFF"
              className={styles.bubble1}
            />
            <circle
              cx="600"
              cy="160"
              r="4"
              fill="#93C5FD"
              className={styles.bubble2}
            />
            <circle
              cx="900"
              cy="140"
              r="3.5"
              fill="#60A5FA"
              className={styles.bubble1}
            />
            <circle
              cx="1100"
              cy="170"
              r="5"
              fill="#BFDBFE"
              className={styles.bubble3}
            />
          </svg>
        </div>

        {/* Texto en el centro del hero */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center px-4 mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Piscina</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Disfruta de un refrescante día de piscina con todas las comodidades
            </p>
          </div>
        </div>

        {/* Botón de navegación */}
        <nav className="absolute top-6 left-6 z-20">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 backdrop-blur-sm"
          >
            <i className="fas fa-arrow-left"></i>
            Volver al inicio
          </a>
        </nav>
      </div>

      {/* Contenido Principal */}
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        {/* Grid de información */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Horarios y Capacidad */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:shadow-lg transition-shadow infoCard">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <i className="fas fa-clock text-blue-400"></i>
              Información General
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-xl text-center">
                <div className="text-sm text-blue-300 mb-1">Horario</div>
                <div className="text-xl text-white">10:00 - 20:00</div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl text-center">
                <div className="text-sm text-blue-300 mb-1">Temperatura</div>
                <div className="text-xl text-white">28°C</div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl text-center">
                <div className="text-sm text-blue-300 mb-1">Profundidad</div>
                <div className="text-xl text-white">1.2m - 2.5m</div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl text-center">
                <div className="text-sm text-blue-300 mb-1">Capacidad</div>
                <div className="text-xl text-white">20 personas</div>
              </div>
            </div>
          </div>

          {/* Reglas */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:shadow-lg transition-shadow infoCard">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <i className="fas fa-list text-blue-400"></i>
              Reglas Importantes
            </h3>
            <ul className="space-y-3">
              {[
                "No correr cerca de la piscina",
                "Ducharse antes de entrar",
                "No comer dentro de la piscina",
                "Supervisión de menores obligatoria",
                "No vidrios en el área",
                "Usar traje de baño adecuado"
              ].map((rule) => (
                <li key={rule} className="flex items-center gap-3 text-gray-200">
                  <i className="fas fa-check text-blue-400"></i>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Recomendaciones */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:shadow-lg transition-shadow infoCard">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Lo que debes traer</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "fas fa-umbrella", text: "Sombrilla" },
              { icon: "fas fa-tshirt", text: "Muda de ropa" },
              { icon: "fas fa-prescription-bottle", text: "Protector solar" },
              { icon: "fas fa-glasses", text: "Gafas de sol" }
            ].map((item) => (
              <div key={item.text} className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <i className={`${item.icon} text-2xl text-white`}></i>
                </div>
                <div className="text-white">{item.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Servicios Adicionales */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:shadow-lg transition-shadow infoCard">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Servicios Adicionales</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 text-white">
              <i className="fas fa-cocktail text-3xl text-blue-300"></i>
              <div>
                <h4 className="text-xl font-semibold">Bar en la Piscina</h4>
                <p className="text-sm text-blue-100">Bebidas refrescantes sin salir del agua</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white">
              <i className="fas fa-spa text-3xl text-pink-300"></i>
              <div>
                <h4 className="text-xl font-semibold">Spa & Masajes</h4>
                <p className="text-sm text-blue-100">Relájate aún más con nuestro servicio de spa</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white">
              <i className="fas fa-ice-cream text-3xl text-yellow-300"></i>
              <div>
                <h4 className="text-xl font-semibold">Snack Bar</h4>
                <p className="text-sm text-blue-100">Helados, fruta fresca y más</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
