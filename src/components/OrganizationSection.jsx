const OrganizationSection = () => {
  const teams = [
    {
      title: "Chef y Equipo de Parrilla",
      icon: "fas fa-utensils",
      color: "red", // tailwind "red-500" en inline style
      description: "Chef profesional a cargo de la parrilla durante todo el día",
      members: [
        "Alan", "Bravo", "Echeverría", "Garnacho",
        "Wilmer", "Andrés", "Marlon", "Chencho", "Jaiker"
      ],
    },
    {
      title: "Comitiva de Anfitriones",
      icon: "fas fa-glass-cheers",
      color: "purple",
      description: "Encargados de la cordialidad y atención especial a todos los invitados",
      members: [
        "Chencho (Líder)", "Jarro", "Angel", "Axel",
        "Álvaro", "Alan", "Gregory", "Ricardo", "Reinaldo"
      ],
      note: "Asegurando que ningún invitado tenga la copa vacía 🍻"
    },
    {
      title: "Supervisor de Juegos",
      icon: "fas fa-gamepad",
      color: "green",
      members: ["Ramon"],
    },
    {
      title: "Equipo de Seguridad",
      icon: "fas fa-shield-alt",
      color: "blue",
      members: ["Reinaldo", "Rober", "Echeverría", "Marlon", "Ángel"],
      note: "Manteniendo el orden y la diversión sana 😉"
    }
  ];

  return (
    <section
      className="
        py-12
        bg-gradient-to-b
        from-[#cbfcfc]
        via-[#72e1e1]
        to-[#40E0D0]
        text-gray-800
        relative
      "
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#005B5B] mb-2">
            Equipo Organizador
          </h2>
          <p className="text-[#004242]">
            Los responsables de hacer de este día algo inolvidable
          </p>
        </div>

        {/* Tarjetas de equipos */}
        <div className="space-y-6">
          {teams.map((team) => (
            <div
              key={team.title}
              className="
                bg-white
                rounded-xl
                shadow-md
                overflow-hidden
                border-l-4
                hover:shadow-lg
                transition-shadow
              "
              style={{
                /* Usamos inline-style para el borde izquierdo dinámico */
                borderColor: `var(--tw-color-${team.color}-500, ${team.color})`
              }}
            >
              <div className="p-4">
                {/* Encabezado de la tarjeta */}
                <div className="flex items-center gap-3 mb-2">
                  {/* Icono circular con color de fondo */}
                  <div
                    className={`
                      w-10 h-10 rounded-full text-white
                      flex items-center justify-center
                      bg-${team.color}-500
                    `}
                  >
                    <i className={`${team.icon} text-lg`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {team.title}
                  </h3>
                </div>

                {/* Descripción (si existe) */}
                {team.description && (
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    {team.description}
                  </p>
                )}

                {/* Lista de miembros como "chips" */}
                <div className="flex flex-wrap gap-2">
                  {team.members.map((member) => (
                    <span
                      key={member}
                      className={`
                        text-sm font-medium
                        px-3 py-1
                        rounded-full
                        bg-${team.color}-50
                        text-${team.color}-700
                      `}
                    >
                      {member}
                    </span>
                  ))}
                </div>

                {/* Nota (si existe) */}
                {team.note && (
                  <p className="text-sm text-gray-500 mt-3 italic">
                    {team.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mensaje de limpieza / orden */}
        <div className="mt-10 text-center">
          <div className="inline-block bg-yellow-50 rounded-lg p-4 shadow-sm">
            <p className="text-yellow-800 text-sm flex items-center gap-2">
              <i className="fas fa-broom"></i>
              Limpieza y orden: ¡Todos somos responsables! 🧹
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationSection;
