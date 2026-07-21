import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface CarouselProps {
    images: string[];
}

export default function Carousel({ images }: CarouselProps) {
    const [current, setCurrent] = useState(0);

    const goPrev = () =>
        setCurrent((prev) => (prev - 1 + images.length) % images.length);

    const goNext = () =>
        setCurrent((prev) => (prev + 1) % images.length);

    return (
        <div className="relative w-full max-w-xl mx-auto">
            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-gray-100">
                <img
                    src={images[current]}
                    alt={`Imagen ${current + 1} de ${images.length}`}
                    className="w-full h-full object-cover"
                />

                <button
                    onClick={goPrev}
                    aria-label="Anterior"
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow"
                >
                    <FiChevronLeft size={20} />
                </button>

                <button
                    onClick={goNext}
                    aria-label="Siguiente"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow"
                >
                    <FiChevronRight size={20} />
                </button>
            </div>

            <div className="flex justify-center gap-1.5 mt-3">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        aria-label={`Ir a la imagen ${i + 1}`}
                        className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? "bg-gray-800" : "bg-gray-300"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}