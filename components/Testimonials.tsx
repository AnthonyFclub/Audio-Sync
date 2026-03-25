"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Carlos Rodríguez",
        role: "Organizador de Eventos",
        content: "Excelente servicio. El equipo de sonido fue impecable y la iluminación transformó completamente el lugar. Muy recomendados.",
        rating: 5
    },
    {
        name: "Ana Martínez",
        role: "Cliente Boda",
        content: "Hicieron de mi boda un sueño. La pista iluminada y el DJ mantuvieron a todos bailando toda la noche. ¡Gracias Audio Sync!",
        rating: 5
    },
    {
        name: "Empresa Tech Solutions",
        role: "Evento Corporativo",
        content: "Profesionalismo total. El montaje fue rápido y el audio para nuestras conferencias fue cristalino. Sin duda volveremos a contratar.",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section id="testimonios" className="py-20 bg-black relative overflow-hidden">
            {/* Dark Pro Premium Background */}
            <div 
                className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-30"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=1974&auto=format&fit=crop')` }}
            />
            {/* Smooth gradient blends */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-0" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-0" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Lo que dicen <span className="text-primary">nuestros clientes</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-black/40 backdrop-blur-sm border border-white/10 p-8 rounded-2xl relative hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,243,255,0.1)] hover:-translate-y-1"
                        >
                            <Quote className="absolute top-8 right-8 text-white/5" size={40} />

                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="text-accent fill-accent" />
                                ))}
                            </div>

                            <p className="text-gray-300 mb-6 italic leading-relaxed relative z-10">
                                "{testimonial.content}"
                            </p>

                            <div className="relative z-10">
                                <h4 className="text-white font-bold">{testimonial.name}</h4>
                                <p className="text-primary text-sm">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
