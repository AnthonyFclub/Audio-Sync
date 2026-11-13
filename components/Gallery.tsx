"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    {
        src: "/images/yacht-session.jpg",
        alt: "Yacht & Catamaran Sessions // Cancún",
        size: "large",
        glow: "hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]"
    },
    {
        src: "/images/services/dj-equipment.png",
        alt: "Pioneer DJ Setups & Booths",
        size: "small",
        glow: "hover:shadow-[0_0_40px_rgba(56,189,248,0.5)]"
    },
    {
        src: "/images/techno-rave.jpg",
        alt: "Underground Raves & Secret Villa Parties",
        size: "large",
        glow: "hover:shadow-[0_0_40px_rgba(37,99,235,0.5)]"
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
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full glass border-blue-500/30 text-blue-400 text-xs font-black tracking-[0.3em] mb-4 shadow-[0_0_15px_rgba(59,130,246,0.2)] uppercase">
                        VIBRA EN VIVO // PLAYLIST & EVENTS
                    </div>
                    <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase">
                        SONIDO QUE <span className="text-blue-500 neon-text">REVIENTA</span>
                    </h2>
                    <p className="text-slate-200 max-w-2xl mx-auto text-xl sm:text-2xl md:text-3xl font-luxury italic tracking-wide leading-relaxed drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                        Desde sesiones privadas en altamar hasta raves subterráneos en la selva y la playa.
                    </p>
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[350px]"
                >
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, scale: 0.9, y: 30 },
                                show: { opacity: 1, scale: 1, y: 0 }
                            }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className={`relative group overflow-hidden rounded-[2rem] border border-blue-500/20 transition-all duration-700 ${img.glow} ${img.size === "large" ? "md:col-span-2 lg:col-span-2" : ""
                                }`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                priority
                                className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#060810] via-black/30 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500" />
                            <div className="absolute inset-0 flex items-end p-8">
                                <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="text-white font-black text-2xl tracking-tight text-shadow drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                                        {img.alt}
                                    </p>
                                    <div className="w-0 group-hover:w-full h-1 bg-gradient-to-r from-blue-500 to-sky-400 mt-2 transition-all duration-500 shadow-[0_0_10px_#38bdf8]" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Gallery;

