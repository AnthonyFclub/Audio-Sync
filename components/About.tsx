"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Target, Clock, MessageSquare, Globe } from "lucide-react";
import Image from "next/image";

const features = [
    { icon: <Clock size={20} />, text: "10+ AÑOS DE EXPERIENCIA" },
    { icon: <Zap size={20} />, text: "EQUIPOS TOP (JBL, BOSE, SHURE)" },
    { icon: <ShieldCheck size={20} />, text: "PERSONAL TÉCNICO ÉLITE" },
    { icon: <Target size={20} />, text: "PUNTUALIDAD MILIMÉTRICA" },
    { icon: <MessageSquare size={20} />, text: "SERVICIO 100% PERSONALIZADO" },
    { icon: <Globe size={20} />, text: "COBERTURA TOTAL CDMX Y AM" }
];

const About = () => {
    return (
        <section id="nosotros" className="py-32 relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="inline-block px-4 py-1 rounded-full glass border-secondary/20 text-secondary text-xs font-black tracking-[0.3em] mb-6">
                            QUIÉNES SOMOS
                        </div>
                        <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                            DOMINAMOS EL <span className="text-secondary neon-text">SONIDO</span>
                        </h2>
                        <p className="text-white text-2xl md:text-3xl font-luxury italic mb-8 leading-relaxed tracking-wide drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                            En <span className="text-primary font-black not-italic">Audio Sync</span>, no solo conectamos cables; diseñamos experiencias que hacen vibrar el alma. Somos arquitectos de atmósferas nocturnas.
                        </p>
                        <p className="text-gray-300 text-xl mb-12 leading-relaxed font-luxury italic tracking-widest border-l-4 border-primary pl-8 py-2 bg-white/5 rounded-r-2xl drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                            "Nuestra misión es que cada beat se sienta, cada luz cuente una historia y cada evento sea una leyenda."
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ x: 10 }}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="p-2 rounded-lg glass border-white/5 text-primary group-hover:text-white group-hover:bg-primary transition-all">
                                        {feature.icon}
                                    </div>
                                    <span className="text-gray-400 font-bold text-sm tracking-wider">{feature.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="relative"
                    >
                        <div className="relative h-[600px] w-full rounded-[3rem] overflow-hidden border border-white/10 group shadow-[0_0_50px_rgba(188,19,254,0.2)]">
                            <Image
                                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop"
                                alt="Equipo de Audio Sync trabajando"
                                fill
                                className="object-cover transition-transform duration-[2s] group-hover:scale-125 group-hover:rotate-3"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                            <div className="absolute bottom-0 left-0 p-12 w-full">
                                <div className="glass p-8 rounded-3xl border-white/10">
                                    <div className="flex items-center gap-6">
                                        <div className="text-7xl font-black text-white neon-text">10+</div>
                                        <div className="text-gray-300 font-black tracking-widest text-sm">
                                            AÑOS REDEFINIENDO<br />EL CONCEPTO DE<br /><span className="text-primary">FIESTA</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Psychedelic Elements */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
