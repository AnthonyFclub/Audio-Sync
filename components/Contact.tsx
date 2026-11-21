"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const Contact = () => {
    return (
        <section id="contacto" className="py-28 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col items-center"
                >
                    {/* Minimal Techno Accent Tag */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-blue-500/30 text-blue-400 text-xs font-black tracking-[0.3em] uppercase mb-6 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                        <Zap size={14} className="text-sky-400" />
                        BOOKING & COTIZACIONES
                    </div>

                    {/* Clean Bold Heading */}
                    <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase leading-tight">
                        ¿TIENES UN <span className="text-blue-500 neon-text">EVENTO</span> EN PUERTA?
                    </h2>

                    <p className="text-slate-300 max-w-xl mx-auto text-lg sm:text-xl font-light leading-relaxed mb-10">
                        Renta de audio profesional, cabinas DJ y bocinas de alta potencia en Cancún y Playa del Carmen.
                    </p>

                    <p className="text-slate-400 text-sm sm:text-base font-semibold tracking-widest uppercase">
                        Cancún &amp; Playa del Carmen
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
