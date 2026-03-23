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
                    className="-mt-12 md:-mt-24"
                >


                    <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] mb-6 md:mb-10">
                        <motion.span
                            animate={{ color: ["#ffffff", "#00f3ff", "#ffffff", "#bc13fe", "#ffffff"] }}
                            transition={{ duration: 10, repeat: Infinity }}
                            className="block"
                        >
                            AUDIO SYNC
                        </motion.span>
                    </h1>

                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="mt-6"
                    >
                        <span className="block text-5xl md:text-7xl lg:text-8xl font-luxury italic leading-none tracking-tight bg-gradient-to-r from-white via-primary/30 to-white text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] font-light">
                            Tu experiencia comienza aquí!
                        </span>
                    </motion.div>


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

            {/* Bottom Subtitle */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-40 md:bottom-48 left-0 w-full flex items-center justify-center px-4 z-10"
            >
                <div className="opacity-90">
                    <p className="text-xs sm:text-sm md:text-lg lg:text-xl font-black tracking-[0.15em] sm:tracking-[0.3em] text-white uppercase drop-shadow-[0_0_15px_rgba(0,243,255,0.6)] text-center">
                        Sonido que se siente <span className="text-secondary neon-text mx-2 sm:mx-4 text-[10px] md:text-sm align-middle">♦</span> Iluminación que hipnotiza
                    </p>
                </div>
            </motion.div>

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
