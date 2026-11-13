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

                    {/* 3D Tactile Social Media Buttons (Original Colors & Logos) */}
                    <div className="mt-8 flex items-center justify-center gap-5 sm:gap-6">
                        {/* WhatsApp 3D Button */}
                        <a
                            href="https://wa.me/529993683122?text=Hola%20Audio%20Sync!%20Me%20interesa%20cotizar%20equipo%20de%20audio%20para%20un%20evento."
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp Audio Sync"
                            title="Cotizar por WhatsApp"
                            className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center bg-gradient-to-b from-[#2de26e] via-[#25D366] to-[#1ebe5d] border-t border-white/50 border-b border-[#0f6e37] border-x border-[#1ebe5d]/70 shadow-[0_6px_0_#116634,0_14px_22px_rgba(37,211,102,0.45)] hover:-translate-y-1 hover:shadow-[0_8px_0_#116634,0_18px_28px_rgba(37,211,102,0.6)] active:translate-y-1.5 active:shadow-[0_1px_0_#116634,0_5px_10px_rgba(37,211,102,0.35)] transition-all duration-150 ease-out cursor-pointer overflow-hidden"
                        >
                            {/* 3D Gloss Highlight */}
                            <span className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/35 to-transparent rounded-t-2xl pointer-events-none" />
                            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-current relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)] group-hover:scale-110 transition-transform duration-200">
                                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8 2.53 1.09 2.53.73 2.99.69.46-.04 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z" />
                            </svg>
                        </a>

                        {/* Instagram 3D Button */}
                        <a
                            href="https://instagram.com/audio_syncc"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram @audio_syncc"
                            title="Seguir en Instagram"
                            className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] border-t border-white/50 border-b border-[#630b42] border-x border-[#911562]/70 shadow-[0_6px_0_#630b42,0_14px_22px_rgba(220,39,67,0.45)] hover:-translate-y-1 hover:shadow-[0_8px_0_#630b42,0_18px_28px_rgba(220,39,67,0.6)] active:translate-y-1.5 active:shadow-[0_1px_0_#630b42,0_5px_10px_rgba(220,39,67,0.35)] transition-all duration-150 ease-out cursor-pointer overflow-hidden"
                        >
                            {/* 3D Gloss Highlight */}
                            <span className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/35 to-transparent rounded-t-2xl pointer-events-none" />
                            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-current relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)] group-hover:scale-110 transition-transform duration-200">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>

                        {/* Facebook 3D Button */}
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook Audio Sync"
                            title="Seguir en Facebook"
                            className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center bg-gradient-to-b from-[#238cff] via-[#1877F2] to-[#0a66e0] border-t border-white/50 border-b border-[#063980] border-x border-[#0f6ad6]/70 shadow-[0_6px_0_#063980,0_14px_22px_rgba(24,119,242,0.45)] hover:-translate-y-1 hover:shadow-[0_8px_0_#063980,0_18px_28px_rgba(24,119,242,0.6)] active:translate-y-1.5 active:shadow-[0_1px_0_#063980,0_5px_10px_rgba(24,119,242,0.35)] transition-all duration-150 ease-out cursor-pointer overflow-hidden"
                        >
                            {/* 3D Gloss Highlight */}
                            <span className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/35 to-transparent rounded-t-2xl pointer-events-none" />
                            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-current relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)] group-hover:scale-110 transition-transform duration-200">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
