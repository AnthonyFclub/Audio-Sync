"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Sparkles, X, ChevronLeft, ChevronRight, MessageCircle, Maximize2 } from "lucide-react";

interface Experience {
    id: number;
    src: string;
    title: string;
    description: string;
    gridSpan: string; // Tailwind grid span classes
}

const experiences: Experience[] = [
    {
        id: 1,
        src: "/images/experiencias/IMG_7675.jpeg",
        title: "YACHT & CATAMARAN SESSION",
        description: "Cabina Pioneer XDJ de última generación en altamar sobre las aguas turquesas del Caribe.",
        gridSpan: "col-span-1 md:col-span-2 lg:col-span-8 h-[380px] sm:h-[450px] lg:h-[480px]",
    },
    {
        id: 2,
        src: "/images/experiencias/IMG_7491.jpeg",
        title: "BANDA EN VIVO & ACÚSTICA",
        description: "Microfonía inalámbrica, monitores de piso y torres de audio para música en vivo de alta fidelidad.",
        gridSpan: "col-span-1 md:col-span-2 lg:col-span-4 h-[380px] sm:h-[450px] lg:h-[480px]",
    },
    {
        id: 3,
        src: "/images/experiencias/IMG_2764.jpeg",
        title: "BEACH CLUB SUNSET",
        description: "Set de sonido pro y cabina frente al mar para atardeceres y sesiones de música electrónica.",
        gridSpan: "col-span-1 md:col-span-1 lg:col-span-4 h-[320px] sm:h-[380px] lg:h-[400px]",
    },
    {
        id: 4,
        src: "/images/experiencias/IMG_3220.jpeg",
        title: "WATERFRONT DECK VIBES",
        description: "Torres activas de alta fidelidad con mezcla directa junto al muelle y la brisa marina.",
        gridSpan: "col-span-1 md:col-span-1 lg:col-span-4 h-[320px] sm:h-[380px] lg:h-[400px]",
    },
    {
        id: 5,
        src: "/images/experiencias/IMG_2181.jpeg",
        title: "CARIBBEAN CRUISE VIBES",
        description: "Sonido envolvente e impecable que navega contigo con potencia cristalina.",
        gridSpan: "col-span-1 md:col-span-2 lg:col-span-4 h-[320px] sm:h-[380px] lg:h-[400px]",
    },
    {
        id: 6,
        src: "/images/experiencias/IMG_8480.jpeg",
        title: "SUNSET VILLA TECHNO SESSION",
        description: "Montaje limpio de cabina y subwoofers para raves y eventos privados.",
        gridSpan: "col-span-1 md:col-span-1 lg:col-span-5 h-[380px] sm:h-[450px] lg:h-[480px]",
    },
    {
        id: 7,
        src: "/images/experiencias/IMG_7506.jpeg",
        title: "SISTEMA INTEGRAL DE AUDIO & ILUMINACIÓN",
        description: "Ingeniería de sonido, ecualización acústica y microfonía de máxima fidelidad.",
        gridSpan: "col-span-1 md:col-span-1 lg:col-span-7 h-[380px] sm:h-[450px] lg:h-[480px]",
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

            <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 sm:mb-20"
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

                {/* Clean Full-Width Mosaic Bento Grid (No overlaps) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
                            className={`relative group cursor-pointer rounded-3xl overflow-hidden border border-blue-500/25 bg-[#060810]/70 backdrop-blur-md shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:border-blue-400/60 hover:shadow-[0_0_40px_rgba(59,130,246,0.35)] transition-all duration-500 hover:-translate-y-1.5 ${exp.gridSpan}`}
                            onClick={() => setSelectedPhoto(exp)}
                        >
                            {/* Photo Container */}
                            <div className="relative w-full h-full overflow-hidden">
                                <Image
                                    src={exp.src}
                                    alt={exp.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 66vw"
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />

                                {/* Subtle Ambient Gradient Overlays for Depth and Legibility */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#060810] via-[#060810]/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-sky-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Expand Icon Indicator */}
                                <div className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2.5 sm:p-3 rounded-2xl glass border border-white/20 text-white/80 group-hover:text-white group-hover:border-blue-400/60 group-hover:scale-110 shadow-lg transition-all duration-300">
                                    <Maximize2 size={16} />
                                </div>

                                {/* Clean Content Overlay at Bottom (No location tag) */}
                                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex flex-col justify-end">
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] group-hover:text-sky-300 transition-colors">
                                        {exp.title}
                                    </h3>

                                    <p className="text-slate-300 text-xs sm:text-sm font-light max-w-xl mt-1.5 line-clamp-2 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                                        {exp.description}
                                    </p>

                                    {/* Accent line */}
                                    <div className="w-0 group-hover:w-24 h-0.5 bg-gradient-to-r from-blue-500 to-sky-400 mt-3 rounded-full transition-all duration-500 shadow-[0_0_10px_#38bdf8]" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
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

                            {/* Info bar (No location tag) */}
                            <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 bg-[#060810]/95">
                                <div>
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
