import { createSignal } from "solid-js";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen());
  };

  return (
    <header class="fixed top-0 left-0 w-full bg-black bg-opacity-50 text-white py-4 px-6 shadow-md flex items-center justify-between z-50">
    {/* Título */}
    <h1 class="text-2xl font-bold flex-1 text-center md:text-left">Pool Party 🎉</h1>

    {/* Navegación para escritorio */}
    <nav class="hidden md:flex space-x-6 flex-1 justify-center">
  <a href="/" class="text-lg hover:text-sunshineYellow transition">
    <i class="fas fa-home mr-1"></i> Inicio
  </a>
  <a href="/actividades" class="text-lg hover:text-sunshineYellow transition">
    <i class="fas fa-futbol mr-1"></i> Actividades
  </a>
  <a href="/invitados" class="text-lg hover:text-sunshineYellow transition">
    <i class="fas fa-users mr-1"></i> Invitados
  </a>
  <a href="/contacto" class="text-lg hover:text-sunshineYellow transition">
    <i class="fas fa-envelope mr-1"></i> Contacto
  </a>
</nav>


    {/* Menú Móvil */}
    <div class="md:hidden relative">
  <button
    onClick={toggleMenu}
    class="text-lg focus:outline-none p-2 rounded  transition"
    aria-label="Toggle menu"
  >
    <i class="fas fa-bars"></i>
  </button>
  <div
    class={`absolute right-0 mt-2 w-48 bg-black bg-opacity-90 text-white rounded-lg shadow-lg ${
      isMenuOpen() ? "block" : "hidden"
    }`}
  >
    <a href="/" class="block px-4 py-2 hover:bg-sunshineYellow transition">
      <i class="fas fa-home mr-2"></i> Inicio
    </a>
    <a href="/actividades" class="block px-4 py-2 hover:bg-sunshineYellow transition">
      <i class="fas fa-futbol mr-2"></i> Actividades
    </a>
    <a href="/invitados" class="block px-4 py-2 hover:bg-sunshineYellow transition">
      <i class="fas fa-users mr-2"></i> Invitados
    </a>
    <a href="/contacto" class="block px-4 py-2 hover:bg-sunshineYellow transition">
      <i class="fas fa-envelope mr-2"></i> Contacto
    </a>
  </div>
</div>

  </header>

  );
}
