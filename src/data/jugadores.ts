export interface Jugador {
  nombre: string;
  edad: number;
  posicion: string;
  numero: number;
  equipo: string;
  estilo: string;
  imagen: string;
  equipoFavorito: {
    nombre: string;
    colores: {
      primario: string;
      secundario: string;
    };
    escudo: string;
  }
  apodo: string;
  skills: {
    velocidad: number;
    tiro: number;
    pase: number;
    defensa: number;
  };



}


export const jugadores: Jugador[] = [
  {
    nombre: "Robert ",
    apodo: "Ministro de Betano",
    skills: {
      velocidad: 78,
      tiro: 70,
      pase: 82,
      defensa: 85
    },
    edad: 35,
    posicion: "Mediocampista",
    numero: 8,
    equipo: "Brosky FC",
    estilo: "Técnico",
    imagen: "/images/robert-fut.jpeg",
    equipoFavorito: {
      nombre: "Real Madrid",
      colores: {
        primario: "#FFFFFF",
        secundario: "#00529F"
      },
      escudo: "/images/realmadrid.png"
    }
  },
  {
    nombre: "Angel",
    apodo: "Tiki Taka",
    skills: {
      velocidad: 86,
      tiro: 78,
      pase: 69,
      defensa: 85
    },
    edad: 32,
    posicion: "Mediocampista",
    numero: 10,
    equipo: "Brosky FC",
    estilo: "Técnico",
    imagen: "/images/jugadores/angel.jpeg",
    equipoFavorito: {
      nombre: "Barcelona",
      colores: {
        primario: "#004D98",
        secundario: "#A50044"
      },
      escudo: "/images/barsa.png"
    }
  },
  {
    nombre: "Manuel",
    apodo: "El portugues",
    skills: {
      velocidad: 60,
      tiro: 86,
      pase: 65,
      defensa: 48
    },
    edad: 32,
    posicion: "Delantero",
    numero: 7,
    equipo: "Brosky FC",
    estilo: "Táctico",
    imagen: "/images/jugadores/manuel.jpeg",
    equipoFavorito: {
      nombre: "Real Madrid",
      colores: {
        primario: "#FFFFFF",
        secundario: "#00529F"
      },
      escudo: "/images/realmadrid.png"
    }
  },
  {
    nombre: "Ramon",
    apodo: "Parte Rodilla",
    skills: {
      velocidad: 90,
      tiro: 66,
      pase: 77,
      defensa: 60
    },
    edad: 25,
    posicion: "Delantero",
    numero: 6,
    equipo: "Portales FC",
    estilo: "Goleador",
    imagen: "/images/jugadores/ramon.jpeg",
    equipoFavorito: {
      nombre: "Barcelona",
      colores: {
        primario: "#004D98",
        secundario: "#A50044"
      },
      escudo: "/images/barsa.png"
    }
  },

  {
    nombre: "Andres",
    apodo: "El analista",
    skills: {
      velocidad: 60,
      tiro: 72,
      pase: 60,
      defensa: 86
    },
    edad: 28,
    posicion: "Defensa",
    numero: 3,
    equipo: "Portales FC",
    estilo: "Estratega",
    imagen: "/images/jugadores/andres1.jpeg",
    equipoFavorito: {
      nombre: "Barcelona",
      colores: {
        primario: "#004D98",
        secundario: "#A50044"
      },
      escudo: "/images/barsa.png"
    }
  },
  {
    nombre: "Jaiker",
    apodo: "Jaikerdinho",
    skills: {
      velocidad: 77,
      tiro: 68,
      pase: 75,
      defensa: 66
    },
    edad: 23,
    posicion: "Defensa",
    numero: 96,
    equipo: "Portales FC",
    estilo: "Estratega",
    imagen: "/images/jugadores/jaiker.jpeg",
    equipoFavorito: {
      nombre: "Barcelona",
      colores: {
        primario: "#004D98",
        secundario: "#A50044"
      },
      escudo: "/images/barsa.png"
    }
  },
  {
    nombre: "Axel",
    apodo: "Axelito",
    skills: {
      velocidad: 60,
      tiro: 72,
      pase: 60,
      defensa: 86
    },
    edad: 23,
    posicion: "Mediocampista",
    numero: 3,
    equipo: "Portales FC",
    estilo: "Estratega",
    imagen: "/images/jugadores/axel.jpeg",
    equipoFavorito: {
      nombre: "Vinotinto",
      colores: {
        primario: "#722F37",
        secundario: "#000000"
      },
      escudo: "/images/vinotinto.jpeg"
    }
  },
  {
    nombre: "Darwin",
    apodo: "Chencho",
    skills: {
      velocidad: 76,
      tiro: 74,
      pase: 87,
      defensa: 82
    },
    edad: 20,
    posicion: "Mediocampista",
    numero: 21,
    equipo: "Brosky FC",
    estilo: "Lider",
    imagen: "/images/jugadores/darwin.PNG",
    equipoFavorito: {
      nombre: "Vinotinto",
      colores: {
        primario: "#722F37",
        secundario: "#000000"
      },
      escudo: "/images/vinotinto.jpeg"
    }
  },
  {
    nombre: "Cristian",
    apodo: "Garnacho",
    skills: {
      velocidad: 89,
      tiro: 70,
      pase: 65,
      defensa: 79
    },
    edad: 20,
    posicion: "Delantero",
    numero: 11,
    equipo: "Portales FC",
    estilo: "Veloz",
    imagen: "/images/jugadores/garnacho.jpeg",
    equipoFavorito: {
      nombre: "Barcelona",
      colores: {
        primario: "#004D98",
        secundario: "#A50044"
      },
      escudo: "/images/barsa.png"
    }
  },
  {
    nombre: "Marlon",
    apodo: "Killer",
    skills: {
      velocidad: 79,
      tiro: 70,
      pase: 77,
      defensa: 65
    },
    edad: 31,
    posicion: "Delantero",
    numero: 9,
    equipo: "Brosky FC",
    estilo: "Goleador",
    imagen: "/images/jugadores/marlon.jpeg",
    equipoFavorito: {
      nombre: "Real Madrid",
      colores: {
        primario: "#FFFFFF",
        secundario: "#00529F"
      },
      escudo: "/images/realmadrid.png"
    }
  }
]