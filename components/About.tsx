"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const features = [
    "Más de 10 años de experiencia en el sector",
    "Equipos de última generación (JBL, Bose, Shure)",
    "Personal técnico altamente capacitado",
    "Puntualidad y compromiso en cada evento",
    "Soluciones personalizadas para cada cliente",
    "Cobertura en toda la Ciudad de México y Área Metropolitana"
];

const About = () => {
    return (
        <section id="nosotros" className="py-20 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Sobre <span className="text-secondary">Audio Sync</span>
                        </h2>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            Somos una empresa dedicada a transformar eventos ordinarios en experiencias extraordinarias a través de la mejor tecnología en audio e iluminación.
                        </p>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            Entendemos que cada evento es único, por eso nos enfocamos en brindar un servicio personalizado, asegurando que la calidad del sonido y la atmósfera visual superen tus expectativas.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                                    <span className="text-gray-400">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 group">
                            <Image
                                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop"
                                alt="Equipo de Audio Sync trabajando"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                            <div className="absolute bottom-0 left-0 p-8">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="text-5xl font-bold text-white">10+</div>
                                    <div className="text-gray-300 leading-tight">
                                        Años de<br />Experiencia
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[50px]" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-[50px]" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
