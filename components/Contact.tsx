"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, Instagram, Zap, ArrowRight } from "lucide-react";

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

                    {/* Minimalist Glowing WhatsApp Button */}
                    <motion.a
                        href="https://wa.me/529993683122?text=Hola%20Audio%20Sync!%20Me%20interesa%20cotizar%20equipo%20de%20audio%20para%20un%20evento."
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.98 }}
                        className="group inline-flex items-center gap-3.5 px-8 sm:px-12 py-5 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 text-white font-black text-sm sm:text-base tracking-widest uppercase shadow-[0_0_40px_rgba(59,130,246,0.6)] hover:shadow-[0_0_60px_rgba(59,130,246,0.9)] transition-all duration-300 border border-sky-300/40"
                    >
                        <MessageCircle size={22} className="text-white group-hover:scale-110 transition-transform" />
                        <span>COTIZAR POR WHATSAPP</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </motion.a>

                    {/* Subtle Quick Info Links */}
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-slate-400 text-xs sm:text-sm font-semibold">
                        <a
                            href="tel:+529993683122"
                            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                        >
                            <Phone size={16} className="text-blue-400" />
                            <span>+52 999 368 3122</span>
                        </a>

                        <span className="text-slate-600 hidden sm:inline">•</span>

                        <a
                            href="https://instagram.com/audio_syncc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                        >
                            <Instagram size={16} className="text-sky-400" />
                            <span>@audio_syncc</span>
                        </a>

                        <span className="text-slate-600 hidden sm:inline">•</span>

                        <span className="text-slate-400">Cancún & Playa del Carmen</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
