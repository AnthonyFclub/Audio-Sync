"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Sparkles, X, ChevronLeft, ChevronRight, MessageCircle, MapPin, Maximize2 } from "lucide-react";

interface Experience {
    id: number;
    src: string;
    title: string;
    tag: string;
    description: string;
    align: "left" | "right" | "center";
}

const experiences: Experience[] = [
    {
        id: 1,
        src: "/images/experiencias/IMG_7675.jpeg",
        title: "YACHT & CATAMARAN SESSION",
        tag: "CANCÚN // CARIBBEAN SEA",
        description: "Cabina Pioneer XDJ de última generación en altamar sobre las aguas turquesas del Caribe.",
        align: "left",
    },
    {
        id: 2,
        src: "/images/experiencias/IMG_2764.jpeg",
        title: "BEACH CLUB SUNSET",
        tag: "PLAYA DEL CARMEN // WATERFRONT",
        description: "Set de sonido pro y cabina frente al mar para vibras de atardecer y sesiones underground.",
        align: "right",
    },
    {
        id: 3,
        src: "/images/experiencias/IMG_7491.jpeg",
        title: "BANDA EN VIVO & ACÚSTICA",
        tag: "VILLA RESIDENCIAL // EVENTO PRIVADO",
        description: "Microfonía inalámbrica, monitores de piso y torres de audio para música en vivo de alta fidelidad.",
        align: "left",
    },
    {
        id: 4,
        src: "/images/experiencias/IMG_3220.jpeg",
        title: "WATERFRONT DECK VIBES",
        tag: "ISLA MUJERES // BEACH DECK",
        description: "Torres activas de alta presión acústica con mezcla directa junto al muelle y la brisa marina.",
        align: "right",
    },
    {
        id: 5,
        src: "/images/experiencias/IMG_2181.jpeg",
        title: "CARIBBEAN CRUISE VIBES",
        tag: "CATAMARÁN VIP // CANCÚN",
        description: "Sonido envolvente e impecable que navega contigo con potencia cristalina.",
        align: "left",
    },
    {
        id: 6,
        src: "/images/experiencias/IMG_8480.jpeg",
        title: "SUNSET VILLA TECHNO SESSION",
        tag: "RESIDENCIA PRIVADA // RIVIERA MAYA",
        description: "Montaje limpio de cabina y subwoofers para raves y eventos privados.",
        align: "right",
    },
    {
        id: 7,
        src: "/images/experiencias/IMG_7506.jpeg",
        title: "SISTEMA INTEGRAL DE AUDIO & ILUMINACIÓN",
        tag: "PRODUCCIÓN ÉLITE // SALÓN & EXTERIOR",
        description: "Ingeniería de sonido, ecualización acústica y microfonía de máxima fidelidad.",
        align: "center",
    }
];

const Gallery = () => {
    const [selectedPhoto, setSelectedPhoto] = useState<Experience | null>(null);

    const handlePrev = () => {
        if (!selectedPhoto) return;
        const currentIndex = experiences.findIndex((e) => e.id === selectedPhoto.id);
        const prevIndex = (currentIndex - 1 + experiences.length) % experiences.length;
        setSelectedPhoto(experiences[prevIndex]);
    };

    const handleNext = () => {
        if (!selectedPhoto) return;
        const currentIndex = experiences.findIndex((e) => e.id === selectedPhoto.id);
        const nextIndex = (currentIndex + 1) % experiences.length;
        setSelectedPhoto(experiences[nextIndex]);
    };

    return (
        <section id="experiencias" className="py-28 relative overflow-hidden">
            {/* Alias anchor for #galeria compatibility */}
            <div id="galeria" className="absolute -top-24 left-0 pointer-events-none" />

            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 sm:mb-24"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-blue-500/30 text-blue-400 text-xs font-black tracking-[0.3em] uppercase mb-4 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                        <Sparkles size={14} className="text-sky-400" />
                        EVENTOS REALES // CANCÚN & PLAYA DEL CARMEN
                    </div>
                    <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter uppercase">
                        EXPERIENCIAS
                    </h2>
                    <p className="text-slate-200 max-w-3xl mx-auto text-xl sm:text-2xl md:text-3xl font-luxury italic tracking-wide leading-relaxed drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                        Montajes reales en altamar, playas paradisíacas y villas exclusivas. Sonido impecable que transforma cada atmósfera.
                    </p>
                </motion.div>

                {/* Cascading Intertwined Staircase Layout */}
                <div className="relative flex flex-col items-center">
                    {experiences.map((exp, index) => {
                        const isLeft = exp.align === "left";
                        const isRight = exp.align === "right";
                        const isCenter = exp.align === "center";

                        return (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className={`w-full relative group cursor-pointer ${
                                    index > 0 ? "-mt-14 sm:-mt-20 md:-mt-28 lg:-mt-36" : ""
                                } ${
                                    isLeft
                                        ? "max-w-4xl mr-auto lg:pr-12 z-[10]"
                                        : isRight
                                        ? "max-w-4xl ml-auto lg:pl-12 z-[11]"
                                        : "max-w-5xl mx-auto z-[12]"
                                }`}
                                onClick={() => setSelectedPhoto(exp)}
                            >
                                {/* Ambient Glow under the card */}
                                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-600/20 via-sky-500/15 to-indigo-600/20 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none" />

                                {/* Staircase Card Container */}
                                <div className="relative rounded-3xl sm:rounded-[2.5rem] overflow-hidden border border-blue-500/25 bg-[#060810]/70 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.8)] group-hover:border-blue-400/60 transition-all duration-500 group-hover:-translate-y-1.5">
                                    {/* Main Photo */}
                                    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
                                        <Image
                                            src={exp.src}
                                            alt={exp.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />

                                        {/* Diffuse Edge Blending (Smooth junction fade so photos melt together) */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#060810] via-transparent to-[#060810]/50 opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#060810]/40 via-transparent to-[#060810]/40" />

                                        {/* Subtle Diagonal Techno Scanline Glow */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-sky-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        {/* Zoom Indicator */}
                                        <div className="absolute top-5 right-5 sm:top-7 sm:right-7 p-3 rounded-2xl glass border border-white/20 text-white/80 group-hover:text-white group-hover:border-blue-400/60 group-hover:scale-110 shadow-lg transition-all duration-300">
                                            <Maximize2 size={18} />
                                        </div>

                                        {/* Content Overlay */}
                                        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 flex flex-col justify-end">
                                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-blue-500/30 text-sky-400 text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-3 w-fit shadow-md">
                                                <MapPin size={13} className="text-blue-400" />
                                                <span>{exp.tag}</span>
                                            </div>

                                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] group-hover:text-sky-300 transition-colors">
                                                {exp.title}
                                            </h3>

                                            <p className="text-slate-300 text-sm sm:text-base font-light max-w-2xl mt-2 line-clamp-2 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                                                {exp.description}
                                            </p>

                                            {/* Micro-line accent */}
                                            <div className="w-0 group-hover:w-32 h-1 bg-gradient-to-r from-blue-500 to-sky-400 mt-4 rounded-full transition-all duration-500 shadow-[0_0_12px_#38bdf8]" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Fullscreen HD Modal / Lightbox */}
            <AnimatePresence>
                {selectedPhoto && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-xl"
                        onClick={() => setSelectedPhoto(null)}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedPhoto(null)}
                            aria-label="Cerrar vista previa"
                            className="absolute top-5 right-5 sm:top-8 sm:right-8 z-50 p-3 rounded-full glass border border-white/20 text-white hover:text-blue-400 hover:border-blue-400 transition-all cursor-pointer shadow-2xl"
                        >
                            <X size={24} />
                        </button>

                        {/* Prev / Next controls */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handlePrev();
                            }}
                            aria-label="Foto anterior"
                            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 sm:p-4 rounded-full glass border border-white/20 text-white hover:text-blue-400 hover:border-blue-400 transition-all cursor-pointer shadow-2xl"
                        >
                            <ChevronLeft size={26} />
                        </button>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleNext();
                            }}
                            aria-label="Foto siguiente"
                            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 sm:p-4 rounded-full glass border border-white/20 text-white hover:text-blue-400 hover:border-blue-400 transition-all cursor-pointer shadow-2xl"
                        >
                            <ChevronRight size={26} />
                        </button>

                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col rounded-3xl overflow-hidden glass border border-blue-500/40 shadow-[0_0_80px_rgba(59,130,246,0.3)] bg-[#070b18]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Image container */}
                            <div className="relative w-full h-[55vh] sm:h-[65vh] bg-black">
                                <Image
                                    src={selectedPhoto.src}
                                    alt={selectedPhoto.title}
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            {/* Info bar */}
                            <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 bg-[#060810]/90">
                                <div>
                                    <div className="inline-flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-widest mb-1">
                                        <MapPin size={14} />
                                        <span>{selectedPhoto.tag}</span>
                                    </div>
                                    <h4 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                                        {selectedPhoto.title}
                                    </h4>
                                    <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
                                        {selectedPhoto.description}
                                    </p>
                                </div>

                                <a
                                    href={`https://wa.me/529993683122?text=Hola%20Audio%20Sync!%20Me%20interesa%20un%20montaje%20como%20el%20de%20la%20foto:%20${encodeURIComponent(selectedPhoto.title)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 text-white font-black text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:shadow-[0_0_40px_rgba(59,130,246,0.8)] transition-all shrink-0 cursor-pointer"
                                >
                                    <MessageCircle size={18} />
                                    <span>COTIZAR ESTE MONTAJE</span>
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
