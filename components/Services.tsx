"use client";

import { motion } from "framer-motion";
import { Speaker, Lightbulb, Music, Mic2, Truck, Calendar, Zap } from "lucide-react";

const services = [
    {
        icon: <Speaker size={32} strokeWidth={1.5} />,
        title: "RENTA DE AUDIO",
        description: "Sistema de sonido de alta fidelidad",
        color: "from-primary to-blue-600",
        shadow: "shadow-[0_0_20px_rgba(0,243,255,0.3)]",
        iconColor: "#00f3ff",
        image: "/images/services/audio-rental.png"
    },
    {
        icon: <Lightbulb size={32} strokeWidth={1.5} />,
        title: "ILUMINACIÓN PRO",
        description: "Cabezas móviles, par LED y efectos especiales láser para crear atmósferas hipnóticas.",
        color: "from-secondary to-purple-600",
        shadow: "shadow-[0_0_20px_rgba(188,19,254,0.3)]",
        iconColor: "#bc13fe",
        image: "/images/services/pro-lighting.png"
    },
    {
        icon: <Music size={32} strokeWidth={1.5} />,
        title: "EQUIPOS PARA DJ",
        description: "Consolas Pioneer y controladores de última generación para el desempeño profesional absoluto.",
        color: "from-rave-red to-accent",
        shadow: "shadow-[0_0_20px_rgba(255,0,0,0.3)]",
        iconColor: "#ff0080",
        image: "/images/services/dj-equipment.png"
    },
    {
        icon: <Mic2 size={32} strokeWidth={1.5} />,
        title: "MICROFONÍA",
        description: "Microfonos de cristalina fidelidad",
        color: "from-neon-green to-emerald-600",
        shadow: "shadow-[0_0_20px_rgba(57,255,20,0.3)]",
        iconColor: "#39ff14",
        image: "/images/services/microphones.png"
    },
    {
        icon: <Truck size={32} strokeWidth={1.5} />,
        title: "MONTAJE EXPERTO",
        description: "Ingenieros especializados encargados de la instalación y operación impecable de tu evento.",
        color: "from-accent to-orange-600",
        shadow: "shadow-[0_0_20px_rgba(255,0,85,0.3)]",
        iconColor: "#ff5500",
        image: "/images/services/expert-setup.png"
    },
    {
        icon: <Calendar size={32} strokeWidth={1.5} />,
        title: "EVENTOS TOTALES",
        description: "Yates, cumpleaños, fiestas privadas, bodas, eventos empresariales y más",
        color: "from-blue-600 to-indigo-600",
        shadow: "shadow-[0_0_20px_rgba(37,99,235,0.3)]",
        iconColor: "#4f46e5",
        image: "/images/services/total-events.png"
    }
];

const Services = () => {
    return (
        <section id="servicios" className="py-24 relative overflow-hidden">


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-center mb-20"
                >
                    <div className="inline-block px-4 py-1 rounded-full glass border-primary/20 text-primary text-xs font-black tracking-[0.3em] mb-4">
                        QUÉ HACEMOS
                    </div>
                    <h2 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter">
                        EXPERIENCIAS <span className="text-primary neon-text">SENSORIALES</span>
                    </h2>
                    <p className="text-white max-w-2xl mx-auto text-2xl md:text-3xl font-luxury italic tracking-wide leading-relaxed drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                        No solo rentamos equipos, creamos la atmósfera donde los recuerdos se vuelven eternos.
                    </p>
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 50, scale: 0.9 },
                                show: { opacity: 1, y: 0, scale: 1 }
                            }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className={`group relative p-10 rounded-3xl overflow-hidden glass border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-3 ${service.shadow} animate-pulse-glow h-full`}
                            style={{ animationDelay: `${index * 0.5}s` }}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <img 
                                    src={service.image} 
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                                />
                                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                            </div>

                            <div className="relative z-10">
                                <motion.div
                                    initial={{ rotate: -10, opacity: 0 }}
                                    whileInView={{ rotate: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                                    className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 relative"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl" style={{ backgroundColor: service.iconColor }} />
                                    <div style={{ color: service.iconColor }} className="drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                                        {service.icon}
                                    </div>
                                </motion.div>

                                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-primary transition-colors tracking-tight">
                                    {service.title}
                                </h3>

                                <p className="text-gray-300 leading-relaxed font-light group-hover:text-white transition-colors duration-500">
                                    {service.description}
                                </p>

                                <div className="mt-8 flex items-center gap-2 text-xs font-bold text-gray-500 group-hover:text-white transition-colors cursor-pointer">
                                    MÁS INFO <Zap size={12} strokeWidth={2} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
