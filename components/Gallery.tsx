"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    {
        src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop",
        alt: "Concierto en vivo con luces rojas",
        size: "large"
    },
    {
        src: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop",
        alt: "DJ tocando en evento",
        size: "small"
    },
    {
        src: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=1974&auto=format&fit=crop",
        alt: "Iluminación de escenario",
        size: "small"
    },
    {
        src: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2070&auto=format&fit=crop",
        alt: "Festival de música",
        size: "medium"
    },
    {
        src: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=1974&auto=format&fit=crop",
        alt: "Evento corporativo",
        size: "medium"
    },
    {
        src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop",
        alt: "Fiesta privada con luces neón",
        size: "large"
    }
];

const Gallery = () => {
    return (
        <section id="galeria" className="py-20 bg-black relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Galería de <span className="text-secondary">Eventos</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Un vistazo a nuestro trabajo y la calidad que entregamos en cada proyecto.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative group overflow-hidden rounded-xl ${img.size === "large" ? "md:col-span-2 lg:col-span-2" : ""
                                }`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <p className="text-white font-bold text-lg px-4 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {img.alt}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
