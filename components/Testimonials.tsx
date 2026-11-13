"use client";

import { motion } from "framer-motion";
import { Star, Quote, Sparkles } from "lucide-react";

const testimonials = [
    {
        name: "Carlos Rodríguez",
        role: "Organizador de Festivales & Bodas VIP",
        content: "Excelente servicio y calidad de audio. El equipo de sonido sonó potente y nítido, y la iluminación robótica transformó completamente el venue.",
        rating: 5
    },
    {
        name: "Ana Martínez",
        role: "Boda Exclusiva Playa del Carmen",
        content: "Hicieron de nuestra boda un evento inolvidable. La atmósfera lumínica y la cabina para el DJ mantuvieron la pista encendida toda la noche.",
        rating: 5
    },
    {
        name: "Grupo Enterprise Latam",
        role: "Convención Anual & Gala",
        content: "Profesionalismo de primer nivel. Puntualidad impecable en el montaje, microfonía sin una sola interferencia y atención técnica de diez.",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section id="testimonios" className="py-28 relative overflow-hidden">
            {/* Smooth gradient blends */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-blue-500/30 text-blue-400 text-xs font-black tracking-[0.3em] uppercase mb-4 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                        <Sparkles size={14} className="text-sky-400" />
                        OPINIONES & CONFIANZA
                    </div>
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
                        Lo que dicen <span className="text-blue-500 neon-text">nuestros clientes</span>
                    </h2>
                    <p className="text-slate-300 max-w-xl mx-auto text-lg font-light">
                        La satisfacción de nuestros clientes respalda cada evento que producimos.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.12 }}
                            className="glass-card p-8 rounded-3xl relative hover:border-blue-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)] hover:-translate-y-1.5 flex flex-col justify-between"
                        >
                            <Quote className="absolute top-6 right-6 text-blue-500/10" size={48} />

                            <div>
                                <div className="flex gap-1 mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} size={18} className="text-amber-400 fill-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
                                    ))}
                                </div>

                                <p className="text-slate-200 mb-8 italic leading-relaxed text-sm sm:text-base relative z-10">
                                    "{testimonial.content}"
                                </p>
                            </div>

                            <div className="relative z-10 pt-4 border-t border-white/10">
                                <h4 className="text-white font-black tracking-wide text-base">{testimonial.name}</h4>
                                <p className="text-sky-400 text-xs font-semibold tracking-wider mt-0.5">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

