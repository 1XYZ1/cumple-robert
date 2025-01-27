const PetsSection = () => {
  // Lista de perritos confirmados (7 en total)
  const pets = [
    {
      name: "Milo",
      breed: "Golden Retriever",
      age: "2 años",
      owner: "María González",
      description:
        "Milo es un gran compañero de juegos. Su energía y curiosidad lo mantienen siempre en movimiento.",
      photo: "/images/pets/dog.jpeg",
      personalityTraits: ["Juguetón", "Sociable", "Ama el agua"]
    },
    {
      name: "Mila",
      breed: "Labrador",
      age: "3 años",
      owner: "Carlos Pérez",
      description:
        "Mila es muy cariñosa y le encanta recibir mimos. Jamás se cansa de jugar a la pelota.",
      photo: "/images/pets/dog2.jpeg",
      personalityTraits: ["Cariñosa", "Juguetona", "Inquieta"]
    },
    {
      name: "Lupita",
      breed: "Bulldog Francés",
      age: "1.5 años",
      owner: "Ana Silva",
      description:
        "Lupita es la más curiosa del grupo. Siempre investigando nuevos lugares y olores.",
      photo: "/images/pets/dog3.jpeg",
      personalityTraits: ["Curiosa", "Amigable", "Atenta"]
    },
    {
      name: "Mérida",
      breed: "Pastor Alemán",
      age: "4 años",
      owner: "Reinaldo Romero",
      description:
        "Mérida es protectora y muy fiel. Su lealtad la convierte en la líder de la manada.",
      photo: "/images/pets/dog4.jpeg",
      personalityTraits: ["Fuerte", "Leal", "Protectora"]
    },
    {
      name: "Wanda",
      breed: "Poodle Toy",
      age: "2 años",
      owner: "Sandra López",
      description:
        "Wanda disfruta de la tranquilidad. Le encanta estar en brazos y dejarse consentir.",
      photo: "/images/pets/dog5.jpeg",
      personalityTraits: ["Tranquila", "Dulce", "Pacífica"]
    },
    {
      name: "Bingo",
      breed: "Beagle",
      age: "3 años",
      owner: "Álvaro Rosas",
      description:
        "Bingo es súper enérgico. Ama las aventuras y perseguir su juguete preferido.",
      photo: "/images/pets/dog6.jpeg",
      personalityTraits: ["Enérgico", "Explorador", "Tenaz"]
    },
    {
      name: "Draco",
      breed: "Pitbull",
      age: "2 años",
      owner: "Rodrigo Estévez",
      description:
        "Draco es noble y muy protector con su familia. Disfruta las siestas largas al sol.",
      photo: "/images/pets/dog7.jpeg",
      personalityTraits: ["Noble", "Protector", "Calmado"]
    }
  ];

  return (
    <section
      className="
        py-16
        bg-gradient-to-b from-[#cbfcfc] to-[#40E0D0]
        text-gray-800
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#008B8B] text-sm font-semibold uppercase tracking-widest mb-2">
            Presentado por Robert's Pet Grooming
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#005B5B] mb-4">
            Nuestros Invitados de Cuatro Patas
          </h2>
          <p className="text-xl text-[#066868] max-w-2xl mx-auto">
            Conoce a los adorables compañeros que nos acompañarán en esta celebración
          </p>
        </div>

        {/* Grid de mascotas (3 columnas en desktop, 2 en tablet, 1 en móvil) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {pets.map((pet) => (
            <div
              key={pet.name}
              className="
                bg-white
                rounded-xl
                shadow-lg
                overflow-hidden
                group
                hover:shadow-2xl
                transition-shadow
                duration-300
              "
            >
              {/* Foto de la mascota: mayor énfasis y hover zoom */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={pet.photo}
                  alt={`Foto de ${pet.name}, un ${pet.breed}`}
                  className="
                    w-full
                    h-full
                    object-cover
                    transform
                    group-hover:scale-110
                    transition-transform
                    duration-300
                  "
                />
                {/* Overlay inferior con nombre, raza y edad */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white drop-shadow">
                      {pet.name}
                    </h3>
                    <p className="text-sm text-gray-200">{pet.breed}</p>
                  </div>
                  {/* Edad del perro */}
                  <span className="bg-[#008B8B] text-white text-xs font-semibold px-2 py-1 rounded-full">
                    {pet.age}
                  </span>
                </div>
              </div>

              {/* Información principal */}
              <div className="p-6">
                {/* Propietario */}
                <p className="text-sm text-gray-600 flex items-center gap-1 mb-3">
                  <i className="fas fa-user text-[#008B8B]"></i>
                  Propietario: <span className="font-medium">{pet.owner}</span>
                </p>

                {/* Descripción */}
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {pet.description}
                </p>

                {/* Rasgos de personalidad */}
                <div className="flex flex-wrap gap-2">
                  {pet.personalityTraits.map((trait) => (
                    <span
                      key={trait}
                      className="
                        bg-[#E0FFFF]
                        text-[#008B8B]
                        text-xs font-medium
                        px-2 py-1
                        rounded-full
                      "
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer con un botón simple */}
        <div className="text-center mt-16">
          <a
            href="https://www.instagram.com/miloysusamigoscl/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              bg-[#008B8B]
              hover:bg-[#007575]
              text-white
              font-semibold
              px-8
              py-3
              rounded-full
              shadow-md
              transition
              transform
              hover:scale-105
              active:scale-95
            "
          >
            <i className="fas fa-paw mr-2"></i>
            @miloysusamigoscl
          </a>
        </div>
      </div>
    </section>
  );
};

export default PetsSection;
