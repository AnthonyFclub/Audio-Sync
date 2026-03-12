"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Music, Zap, Sparkles } from "lucide-react";
import Image from "next/image";

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/30 text-primary text-sm font-medium mb-8 neon-text"
                    >
                        <Zap size={16} className="animate-pulse" />
                        EXPERIENCIA RAVE PROFESIONAL
                    </motion.div>

                    <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tighter leading-none">
                        <motion.span
                            animate={{ color: ["#ffffff", "#00f3ff", "#ffffff", "#bc13fe", "#ffffff"] }}
                            transition={{ duration: 10, repeat: Infinity }}
                            className="block"
                        >
                            AUDIO SYNC
                        </motion.span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rave-red via-accent to-secondary animate-gradient-x text-4xl md:text-6xl lg:text-7xl mt-4 font-psycho">
                            La Fiesta Comienza Aquí
                        </span>
                    </h1>

                    <p className="mt-8 text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 font-light tracking-wide opacity-80 decoration-primary/20">
                        Sonido que se siente, iluminación que hipnotiza.
                        Tu evento transformado en el <span className="text-primary font-bold">rave definitivo</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link
                            href="#contacto"
                            className="group relative px-10 py-5 bg-primary text-black font-black rounded-full overflow-hidden shadow-[0_0_30px_rgba(0,243,255,0.5)] hover:shadow-[0_0_50px_rgba(0,243,255,0.8)] transition-all duration-500 hover:scale-110 active:scale-95 animate-breathe"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                COTIZAR AHORA <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-300" />
                            </span>
                            <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        </Link>

                        <Link
                            href="#servicios"
                            className="group px-10 py-5 glass text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 border-white/20 flex items-center gap-2 hover:border-secondary/50 shadow-inner"
                        >
                            <Sparkles size={20} className="group-hover:rotate-12 transition-transform text-secondary" />
                            VER SERVICIOS
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Atmosphere/Psychology Layer */}

            {/* Glowing Eyes Effect - Improved Psychological Touch */}
            <div className="absolute bottom-20 left-10 md:left-40 opacity-30 pointer-events-none">
                <div className="flex gap-4">
                    <motion.div
                        animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full bg-rave-red shadow-[0_0_15px_#ff0000]"
                    />
                    <motion.div
                        animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                        className="w-1.5 h-1.5 rounded-full bg-rave-red shadow-[0_0_15px_#ff0000]"
                    />
                </div>
            </div>

            <div className="absolute top-40 right-10 md:right-60 opacity-20 pointer-events-none">
                <div className="flex gap-2">
                    <motion.div
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 5, repeat: Infinity, delay: 3 }}
                        className="w-1 h-1 rounded-full bg-primary shadow-[0_0_10px_#00f3ff]"
                    />
                    <motion.div
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 5, repeat: Infinity, delay: 3.1 }}
                        className="w-1 h-1 rounded-full bg-primary shadow-[0_0_10px_#00f3ff]"
                    />
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-8 h-14 border-2 border-white/10 rounded-full flex justify-center p-2 glass">
                    <motion.div
                        animate={{ y: [0, 24, 0], opacity: [0.3, 1, 0.3] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#00f3ff]"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
