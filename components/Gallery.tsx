"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    {
        src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop",
        alt: "ENERGÍA PURA EN ESCENARIO",
        size: "large",
        glow: "hover:shadow-[0_0_40px_rgba(255,0,0,0.4)]"
    },

    {
        src: "https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=1974&auto=format&fit=crop",
        alt: "LUZ QUE HIPNOTIZA",
        size: "small",
        glow: "hover:shadow-[0_0_40px_rgba(188,19,254,0.4)]"
    },
    {
        src: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2070&auto=format&fit=crop",
        alt: "FESTIVALES SIN LÍMITES",
        size: "medium",
        glow: "hover:shadow-[0_0_40px_rgba(57,255,20,0.4)]"
    },
    {
        src: "/gallery-tower.jpg",
        alt: "EXCLUSIVIDAD NOCTURNA",
        size: "medium",
        glow: "hover:shadow-[0_0_40px_rgba(255,0,85,0.4)]"
    },
    {
        src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop",
        alt: "NEÓN Y PSICODELIA",
        size: "large",
        glow: "hover:shadow-[0_0_40px_rgba(0,243,255,0.4)]"
    }
];

const Gallery = () => {
    return (
        <section id="galeria" className="py-24 relative overflow-hidden">


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-center mb-20"
                >
                    <div className="inline-block px-4 py-1 rounded-full glass border-secondary/20 text-secondary text-xs font-black tracking-[0.3em] mb-4">
                        EL PORTAFOLIO
                    </div>
                    <h2 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter">
                        MIRA LA <span className="text-secondary neon-text">MAGIA</span>
                    </h2>
                    <p className="text-white max-w-2xl mx-auto text-2xl md:text-3xl font-luxury italic tracking-wide leading-relaxed drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                        Una muestra de la potencia y el estilo que Audio Sync lleva a cada escenario.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[350px]">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`relative group overflow-hidden rounded-[2rem] border border-white/5 transition-all duration-700 ${img.glow} ${img.size === "large" ? "md:col-span-2 lg:col-span-2" : ""
                                }`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-[1.5s] group-hover:scale-125 group-hover:rotate-2"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                            <div className="absolute inset-0 flex items-end p-8">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="text-white font-black text-2xl tracking-tighter neon-text opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        {img.alt}
                                    </p>
                                    <div className="w-0 group-hover:w-full h-1 bg-secondary mt-2 transition-all duration-500 shadow-[0_0_10px_#bc13fe]" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
