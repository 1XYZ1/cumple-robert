import { createSignal } from "solid-js";

export default function Lightbox(props) {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <img
        src={props.mainImage.src}
        alt={props.mainImage.alt}
        class="w-full h-64 object-cover cursor-pointer"
        onClick={() => setIsOpen(!isOpen())}
      />
      <div class="p-4">
        <h3 class="text-lg font-semibold text-gray-800">{props.title}</h3>
      </div>
    </div>
  );
}