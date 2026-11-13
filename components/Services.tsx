"use client";

import { motion } from "framer-motion";
import { Speaker, Lightbulb, Music, Mic2, Truck, Calendar, Zap, ArrowUpRight } from "lucide-react";

const services = [
    {
        icon: <Speaker size={30} strokeWidth={1.75} />,
        title: "RENTA DE AUDIO",
        description: "Sistemas de sonido de alta fidelidad, arreglo lineal y subwoofers de máxima potencia para conciertos y eventos privados.",
        color: "from-blue-600 to-indigo-700",
        shadow: "shadow-[0_0_30px_rgba(37,99,235,0.25)]",
        iconColor: "#38bdf8",
        image: "/images/services/audio-rental.png"
    },
    {
        icon: <Lightbulb size={30} strokeWidth={1.75} />,
        title: "ILUMINACIÓN PRO",
        description: "Cabezas móviles robotizadas, barras LED, lásers y efectos visuales de última generación para atmósferas inmersivas.",
        color: "from-blue-500 to-sky-600",
        shadow: "shadow-[0_0_30px_rgba(56,189,248,0.25)]",
        iconColor: "#60a5fa",
        image: "/images/services/pro-lighting.png"
    },
    {
        icon: <Music size={30} strokeWidth={1.75} />,
        title: "EQUIPOS PARA DJ",
        description: "Cabinas completas Pioneer DJ Nexus y controladores de última generación para rendimiento profesional absoluto.",
        color: "from-indigo-600 to-blue-800",
        shadow: "shadow-[0_0_30px_rgba(99,102,241,0.25)]",
        iconColor: "#93c5fd",
        image: "/images/services/dj-equipment.png"
    },
    {
        icon: <Mic2 size={30} strokeWidth={1.75} />,
        title: "MICROFONÍA & IN-EARS",
        description: "Microfonía inalámbrica Shure & Sennheiser de cristalina fidelidad y sistemas de monitoreo personal.",
        color: "from-sky-600 to-blue-700",
        shadow: "shadow-[0_0_30px_rgba(14,165,233,0.25)]",
        iconColor: "#38bdf8",
        image: "/images/services/microphones.png"
    },
    {
        icon: <Truck size={30} strokeWidth={1.75} />,
        title: "MONTAJE & OPERACIÓN",
        description: "Ingenieros de audio e iluminación especializados encargados de la instalación, calibración y operación impecable.",
        color: "from-blue-700 to-slate-900",
        shadow: "shadow-[0_0_30px_rgba(29,78,216,0.25)]",
        iconColor: "#60a5fa",
        image: "/images/services/expert-setup.png"
    },
    {
        icon: <Calendar size={30} strokeWidth={1.75} />,
        title: "EVENTOS INTEGRALES",
        description: "Yates, bodas exclusivas, festivales, residencias VIP y eventos corporativos de alto nivel en todo el Caribe Mexicano.",
        color: "from-blue-600 to-indigo-900",
        shadow: "shadow-[0_0_30px_rgba(37,99,235,0.25)]",
        iconColor: "#93c5fd",
        image: "/images/services/total-events.png"
    }
];

const Services = () => {
    return (
        <section id="servicios" className="py-28 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-blue-500/30 text-blue-400 text-xs font-black tracking-[0.3em] uppercase mb-4 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                        <Zap size={14} className="text-sky-400" />
                        CATÁLOGO DE PRODUCCIÓN
                    </div>
                    <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-6 tracking-tighter">
                        EXPERIENCIAS <span className="text-blue-500 neon-text">SENSORIALES</span>
                    </h2>
                    <p className="text-slate-200 max-w-2xl mx-auto text-xl sm:text-2xl md:text-3xl font-luxury italic tracking-wide leading-relaxed drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                        No solo rentamos equipos, creamos la atmósfera donde cada beat resuena con perfección.
                    </p>
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.a
                            key={index}
                            href={`https://wa.me/529993683122?text=Hola%20Audio%20Sync!%20Me%20interesa%20cotizar:%20${encodeURIComponent(service.title)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={{
                                hidden: { opacity: 0, y: 40, scale: 0.95 },
                                show: { opacity: 1, y: 0, scale: 1 }
                            }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className={`group relative p-8 sm:p-10 rounded-3xl overflow-hidden glass-card hover:border-blue-400/50 transition-all duration-500 hover:-translate-y-2.5 ${service.shadow} h-full flex flex-col justify-between cursor-pointer`}
                        >
                            {/* Background Image with Dark Blue Tone */}
                            <div className="absolute inset-0 z-0">
                                <img 
                                    src={service.image} 
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#060810] via-[#060810]/80 to-transparent" />
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-25 transition-opacity duration-500`} />
                            </div>

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(59,130,246,0.25)] group-hover:scale-110 group-hover:border-blue-400 transition-all duration-500">
                                    <div style={{ color: service.iconColor }} className="drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]">
                                        {service.icon}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors tracking-tight">
                                    {service.title}
                                </h3>

                                <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-normal group-hover:text-white transition-colors duration-300">
                                    {service.description}
                                </p>
                            </div>

                            <div className="relative z-10 mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-sky-400 group-hover:text-blue-300 transition-colors">
                                <span className="tracking-widest uppercase">SOLICITAR COTIZACIÓN</span>
                                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;

