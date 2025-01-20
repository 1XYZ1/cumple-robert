import { onMount } from "solid-js";
import useEmblaCarousel from "embla-carousel-solid";

export default function ImageCarousel(props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    containScroll: "trimSnaps"
  });

  return (
    <div class="relative max-w-4xl mx-auto">
      {/* Contenedor principal del carousel */}
      <div class="overflow-hidden rounded-lg" ref={emblaRef}>
        <div class="flex touch-pan-y">
          {props.images.map((image, index) => (
            <div class="flex-[0_0_100%] min-w-0" key={index}>
              <div class="relative aspect-video">
                <img
                  src={image.src}
                  alt={image.alt}
                  class="absolute w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botones de navegación */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/75 p-2 rounded-full z-10"
        aria-label="Anterior"
      >
        ←
      </button>
      <button
        onClick={() => emblaApi?.scrollNext()}
        class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/75 p-2 rounded-full z-10"
        aria-label="Siguiente"
      >
        →
      </button>
    </div>
  );
}