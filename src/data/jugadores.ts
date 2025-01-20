export interface Jugador {
  nombre: string;
  edad: number;
  posicion: string;
  numero: number;
  equipo: string;
  estilo: string;
  imagen: string;
  equipoFavorito: {
    nombre: "Real Madrid" | "Barcelona" | "Manchester City" | "PSG";
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
    apodo: "El nazi",
    skills: {
      velocidad: 90,
      tiro: 12,
      pase: 12,
      defensa: 10
    },
    edad: 35,
    posicion: "Mediocampista",
    numero: 10,
    equipo: "Brosky FC",
    estilo: "Técnico",
    imagen: "/images/robert-fut.jpeg",
    equipoFavorito: {
      nombre: "Real Madrid",
      colores: {
        primario: "#FFFFFF",
        secundario: "#00529F"
      },
      escudo: "/images/barsa.png"
    }
  },
  {
    nombre: "Ramon Hernandez",
    apodo: "Parte Rodilla",
    skills: {
      velocidad: 90,
      tiro: 80,
      pase: 80,
      defensa: 5
    },
    edad: 25,
    posicion: "Delantero",
    numero: 666,
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
  }
]