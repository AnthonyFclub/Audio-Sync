"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Volume2, Sparkles, ChevronDown } from "lucide-react";

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    {/* Quality Pill Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-blue-500/30 text-sky-400 text-xs font-black tracking-[0.3em] uppercase mb-6 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                    >
                        <Volume2 size={14} className="text-blue-400" />
                        <span>PRO AUDIO & LIGHTING RENTAL</span>
                    </motion.div>

                    {/* Main Title */}
                    <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-none drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)] mb-3">
                        <motion.span
                            animate={{
                                textShadow: [
                                    "0px 0px 20px rgba(59,130,246,0.3)",
                                    "0px 0px 40px rgba(59,130,246,0.7)",
                                    "0px 0px 20px rgba(59,130,246,0.3)"
                                ]
                            }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="block"
                        >
                            AUDIO SYNC
                        </motion.span>
                    </h1>

                    {/* Sub-Brand Indicator */}
                    <div className="text-xs sm:text-sm md:text-base font-black tracking-[0.45em] text-blue-400 uppercase mb-4 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                        R E N T A L
                    </div>

                    {/* Italic Luxury Subtitle */}
                    <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="mt-2"
                    >
                        <span className="block py-1 text-2xl sm:text-4xl md:text-5xl font-luxury italic leading-normal tracking-tight text-slate-100 font-light drop-shadow-[0_0_25px_rgba(96,165,250,0.3)]">
                            Tu experiencia comienza aquí
                        </span>
                    </motion.div>

                    {/* Value Statement Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-6 text-xs sm:text-sm md:text-base font-bold tracking-[0.2em] sm:tracking-[0.25em] text-sky-200/90 uppercase text-center max-w-2xl drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                    >
                        Sonido que se siente <span className="text-blue-400 mx-2 font-black">◆</span> Iluminación que hipnotiza
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-5"
                    >
                        <Link
                            href="#contacto"
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 text-white font-black text-xs sm:text-sm tracking-widest uppercase shadow-[0_0_35px_rgba(59,130,246,0.6)] hover:shadow-[0_0_60px_rgba(59,130,246,0.9)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 border border-sky-300/40"
                        >
                            COTIZAR EVENTO
                            <ArrowRight size={18} strokeWidth={2.5} />
                        </Link>
                        <Link
                            href="#servicios"
                            className="w-full sm:w-auto px-8 py-4 rounded-full glass border border-white/15 text-white hover:border-blue-400/50 hover:bg-white/10 font-black text-xs sm:text-sm tracking-widest uppercase shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 text-center"
                        >
                            EXPLORAR SERVICIOS
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Ambient Acoustic Laser Dots / Stage Accents */}
            <div className="absolute bottom-28 left-8 md:left-24 opacity-60 pointer-events-none">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_12px_#38bdf8] animate-pulse" />
                    <span className="text-[10px] font-black tracking-[0.2em] text-blue-300 uppercase">HIGH FIDELITY AUDIO</span>
                </div>
            </div>

            <div className="absolute top-36 right-8 md:right-24 opacity-60 pointer-events-none">
                <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black tracking-[0.2em] text-sky-300 uppercase">CANCÚN & PLAYA DEL CARMEN</span>
                    <div className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_12px_#38bdf8] animate-pulse" />
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer pointer-events-none"
            >
                <div className="w-7 h-12 border-2 border-blue-500/30 rounded-full flex justify-center p-1.5 glass">
                    <motion.div
                        animate={{ y: [0, 18, 0], opacity: [0.4, 1, 0.4] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="w-1.5 h-1.5 bg-sky-400 rounded-full shadow-[0_0_10px_#38bdf8]"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;

