"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Target, Clock, MessageSquare, Globe } from "lucide-react";
import Image from "next/image";

const features = [
    { icon: <Clock size={20} strokeWidth={1.75} />, text: "3+ AÑOS DE EXPERIENCIA" },
    { icon: <Zap size={20} strokeWidth={1.75} />, text: "EQUIPOS TOP AUDIO & ILUMINACIÓN" },
    { icon: <ShieldCheck size={20} strokeWidth={1.75} />, text: "INGENIEROS DE SONIDO ÉLITE" },
    { icon: <MessageSquare size={20} strokeWidth={1.75} />, text: "SERVICIO 100% PERSONALIZADO" },
    { icon: <Globe size={20} strokeWidth={1.75} />, text: "CANCÚN, PLAYA DEL CARMEN & QUINTANA ROO" }
];

const About = () => {
    return (
        <section id="nosotros" className="py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: -40 },
                            show: {
                                opacity: 1,
                                x: 0,
                                transition: {
                                    staggerChildren: 0.12,
                                    duration: 0.8
                                }
                            }
                        }}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="inline-block px-4 py-1 rounded-full glass border-blue-500/30 text-blue-400 text-xs font-black tracking-[0.3em] mb-6 shadow-[0_0_15px_rgba(59,130,246,0.2)] uppercase">
                            QUIÉNES SOMOS
                        </motion.div>
                        <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                            DOMINAMOS EL <span className="text-blue-500 neon-text">SONIDO</span>
                        </motion.h2>
                        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="text-slate-100 text-2xl md:text-3xl font-luxury italic mb-8 leading-relaxed tracking-wide drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                            En <span className="text-blue-400 font-black not-italic">Audio Sync Rental</span>, diseñamos experiencias donde la ingeniería acústica y la estética visual convergen a la perfección.
                        </motion.p>
                        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="text-slate-300 text-lg md:text-xl mb-10 leading-relaxed font-luxury italic tracking-wider border-l-4 border-blue-500 pl-6 py-2 glass-card rounded-r-2xl">
                            "Nuestra misión es que cada beat se sienta, cada luz potencie la vibra y cada evento sea inolvidable."
                        </motion.p>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0 },
                                show: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.1
                                    }
                                }
                            }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                        >
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, x: -15 },
                                        show: { opacity: 1, x: 0 }
                                    }}
                                    whileHover={{ x: 6 }}
                                    className="flex items-center gap-3.5 group"
                                >
                                    <div className="p-2.5 rounded-xl glass border-blue-500/20 text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-all shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                                        {feature.icon}
                                    </div>
                                    <span className="text-slate-300 font-bold text-xs tracking-wider">{feature.text}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.88 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="relative h-[540px] w-full rounded-[2.5rem] overflow-hidden border border-blue-500/30 group shadow-[0_0_50px_rgba(37,99,235,0.3)]">
                            <Image
                                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop"
                                alt="Equipo de Audio Sync trabajando"
                                fill
                                className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#060810] via-transparent to-black/30" />

                            <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
                                <div className="glass p-6 md:p-8 rounded-3xl border-blue-500/30 shadow-2xl">
                                    <div className="flex items-center gap-5 md:gap-6">
                                        <div className="text-5xl md:text-7xl font-black text-white neon-text shrink-0">3+</div>
                                        <div className="text-slate-300 font-black tracking-[0.2em] md:tracking-widest text-[10px] md:text-xs uppercase">
                                            AÑOS REDEFINIENDO<br className="hidden md:block" /> EL CONCEPTO DE<br className="hidden md:block" /> <span className="text-blue-400 font-luxury italic text-sm md:text-base">AUDIO & ILUMINACIÓN</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Ambient Blue Backlight */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/25 rounded-full blur-[100px] animate-pulse" />
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-600/25 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

