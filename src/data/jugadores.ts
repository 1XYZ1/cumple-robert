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
      velocidad: 87,
      tiro: 85,
      pase: 82,
      defensa: 85
    },
    edad: 35,
    posicion: "Delantero",
    numero: 17,
    equipo: "Brosky FC",
    estilo: "Potencia",
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
      velocidad: 92,
      tiro: 89,
      pase: 84,
      defensa: 81
    },
    edad: 31,
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
    nombre: "Angel",
    apodo: "King Teton",
    skills: {
      velocidad: 68,
      tiro: 79,
      pase: 88,
      defensa: 86
    },
    edad: 24,
    posicion: "Defensa",
    numero: 12,
    equipo: "Brosky FC",
    estilo: "Técnico",
    imagen: "/images/jugadores/angel-king.jpeg",
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
    nombre: "Miguel",
    apodo: "Miguelito",
    skills: {
      velocidad: 84,
      tiro: 77,
      pase: 85,
      defensa: 74
    },
    edad: 19,
    posicion: "Delantero",
    numero: 7,
    equipo: "Portales FC",
    estilo: "Veloz",
    imagen: "/images/jugadores/miguel.jpeg",
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
    nombre: "Echeverría",
    apodo: "Chucho",
    skills: {
      velocidad: 58,
      tiro: 74,
      pase: 89,
      defensa: 90
    },
    edad: 33,
    posicion: "Defensa",
    numero: 7,
    equipo: "Brosky FC",
    estilo: "Táctico",
    imagen: "/images/jugadores/jesus.jpeg",
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
    nombre: "Reinaldo",
    apodo: "Baby Rasta",
    skills: {
      velocidad: 86,
      tiro: 82,
      pase: 86,
      defensa: 94
    },
    edad: 33,
    posicion: "Defensa",
    numero: 3,
    equipo: "Brosky FC",
    estilo: "Manco",
    imagen: "/images/jugadores/reinaldo.jpeg",
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
      pase: 84,
      defensa: 86
    },
    edad: 30,
    posicion: "Defensa",
    numero: 18,
    equipo: "Brosky FC",
    estilo: "Estratega",
    imagen: "/images/jugadores/andres2.jpeg",
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
    nombre: "Alejandro",
    apodo: "El gocho",
    skills: {
      velocidad: 70,
      tiro: 72,
      pase: 74,
      defensa: 91
    },
    edad: 27,
    posicion: "Defensa",
    numero: 18,
    equipo: "Brosky FC",
    estilo: "Defensivo",
    imagen: "/images/jugadores/alejandro.jpeg",
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
  },
  {
    nombre: "Alvaro",
    apodo: "Deyverson",
    skills: {
      velocidad: 83,
      tiro: 80,
      pase: 86,
      defensa: 75
    },
    edad: 25,
    posicion: "Delantero",
    numero: 10,
    equipo: "Brosky FC",
    estilo: "Inteligente",
    imagen: "/images/jugadores/alvaro.jpeg",
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