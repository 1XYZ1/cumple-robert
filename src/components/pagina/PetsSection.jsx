const PetsSection = () => {
  // Lista de perritos confirmados (7 en total)
  const pets = [
    {
      name: "Milo",
      breed: "Bichon Frise",
      age: "7 años",
      owner: "Leidymar ",
      description:
        "Milo es un gran compañero de juegos. Su energía y curiosidad lo mantienen siempre en movimiento.",
      photo: "/images/pets/milo.jpeg",
      personalityTraits: ["Educado", "Amigable"]
    },
    {
      name: "Lupita",
      breed: "Lhasa Apsho",
      age: "7 años",
      owner: "Rober",
      description:
        "Lupita es la más curiosa del grupo. Siempre investigando nuevos lugares y olores.",
      photo: "/images/pets/lupita.jpeg",
      personalityTraits: ["Obediente", "Inquieta"]
    },
    {
      name: "Mango",
      breed: "Mestizo",
      age: "2 años",
      owner: "Vanesa",
      description:
        "Es un perrito amigable, le gusta jugar y le encantan los cariñitos.",
      photo: "/images/pets/mango.jpeg",
      personalityTraits: ["Inquieto", "Jugueton"]
    },
    {
      name: "Mila",
      breed: "Bichon habanero",
      age: "8 años",
      owner: "Ana Silva",
      description:
        "Mila le gustan las caricias y tambien comer mucho, es muy tranquila.",
      photo: "/images/pets/mila.jpeg",
      personalityTraits: ["Tranquila", "Educada"]
    },
    {
      name: "Butty",
      breed: "Poodle toy",
      age: "1 años",
      owner: "Reinaldo",
      description:
        "Butty es desordenado le gusta estar sucio y despeinado pero jugar mucho.",
      photo: "/images/pets/butty.jpeg",
      personalityTraits: ["Aventurero", "Curioso"]
    },
    {
      name: "Ted ",
      breed: "Mestizo",
      age: "2 años",
      owner: "Echeverría",
      description:
        "Ted es un gran companero. Le encanta jugar y ser acariciado.",
      photo: "/images/pets/ted.jpeg",
      personalityTraits: ["Tierno", "Obediente"]
    },
    {
      name: "Bingo",
      breed: "Poodle toy",
      age: "2 años",
      owner: "Marlon",
      description:
        "Bingo es súper enérgico. Ama las aventuras y perseguir su juguete preferido.",
      photo: "/images/pets/bingo.jpeg",
      personalityTraits: ["Enérgico", "Jugueton", "Cariñoso"]
    },
    {
      name: "Wanda",
      breed: "Bichon frise toy",
      age: "2 años",
      owner: "Rodrigo Estévez",
      description:
        "Wanda es una gran amiga. Le encanta jugar y ser acariciada.",
      photo: "/images/pets/wanda.jpeg",
      personalityTraits: ["Tierna", "Coqueta"]
    },
    {
      name: "Mérida",
      breed: "Mestiza",
      age: "2 años",
      owner: "Luis Miguel",
      description:
        "Mérida es una gran amiga. Le encanta jugar y ser acariciada.",
      photo: "/images/pets/merida.jpeg",
      personalityTraits: ["Educada", "Tranquila", "Tierna"]
    }
  ];

  return (
    <div class="w-full sm:max-w-7xl sm:mx-auto sm:px-4">
      <div class="relative bg-gray-900/80 backdrop-blur-lg sm:rounded-3xl p-4 sm:p-8 border border-purple-500/20 overflow-hidden shadow-2xl">
        {/* Decoración de fondo */}
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute -top-1/2 -right-1/2 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-1/2 -left-1/2 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        <div class="relative z-10">
          {/* Encabezado */}
          <div class="text-center mb-12">
            <span class="inline-block text-purple-300 text-sm font-semibold uppercase tracking-widest mb-2">
              Presentado por Milo Y Sus Amigos
            </span>
            <h2 class="text-4xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-4">
              Nuestros Invitados de Cuatro Patas
            </h2>
            <p class="text-lg text-gray-200 max-w-2xl mx-auto">
              Conoce a los adorables compañeros que nos acompañarán en esta celebración
            </p>
          </div>

          {/* Grid de mascotas */}
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pets.map((pet) => (
              <div
                key={pet.name}
                class="bg-white/10 rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 backdrop-blur-sm border border-white/5"
              >
                {/* Foto de la mascota */}
                <div class="relative h-72 overflow-hidden">
                  <img
                    src={pet.photo}
                    alt={`Foto de ${pet.name}, un ${pet.breed}`}
                    class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Overlay con nombre y edad */}
                  <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex items-center justify-between">
                    <div>
                      <h3 class="text-xl font-bold text-white drop-shadow">
                        {pet.name}
                      </h3>
                      <p class="text-sm text-gray-200">{pet.breed}</p>
                    </div>
                    <span class="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {pet.age}
                    </span>
                  </div>
                </div>

                {/* Información principal */}
                <div class="p-6 space-y-4">
                  {/* Propietario */}
                  <p class="text-sm text-gray-300 flex items-center gap-2">
                    <i class="fas fa-user text-purple-400"></i>
                    Propietario: <span class="font-medium text-white">{pet.owner}</span>
                  </p>

                  {/* Descripción */}
                  <p class="text-gray-300 leading-relaxed">
                    {pet.description}
                  </p>

                  {/* Rasgos de personalidad */}
                  <div class="flex flex-wrap gap-2">
                    {pet.personalityTraits.map((trait) => (
                      <span
                        key={trait}
                        class="bg-purple-500/20 text-purple-200 text-xs font-medium px-3 py-1 rounded-full border border-purple-500/20"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer con botón de Instagram */}
          <div class="text-center mt-12">
            <a
              href="https://www.instagram.com/miloysusamigoscl/"
              target="_blank"
              rel="noopener noreferrer"
              class="group/btn relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
            >
              <i class="fab fa-instagram text-xl"></i>
              <span>@miloysusamigoscl</span>
              <div class="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetsSection;
