"use client";

import { motion } from "framer-motion";
import { Speaker, Lightbulb, Music, Mic2, Truck, Calendar, Zap } from "lucide-react";

const services = [
    {
        icon: <Speaker size={32} />,
        title: "RENTA DE AUDIO",
        description: "Sistemas de sonido de alta fidelidad que golpean el pecho. Para cualquier tamaño de audiencia con marcas líderes.",
        color: "from-primary to-blue-600",
        shadow: "shadow-[0_0_20px_rgba(0,243,255,0.3)]"
    },
    {
        icon: <Lightbulb size={32} />,
        title: "ILUMINACIÓN PRO",
        description: "Cabezas móviles, par LED y efectos especiales láser para crear atmósferas hipnóticas.",
        color: "from-secondary to-purple-600",
        shadow: "shadow-[0_0_20px_rgba(188,19,254,0.3)]"
    },
    {
        icon: <Music size={32} />,
        title: "EQUIPOS PARA DJ",
        description: "Consolas Pioneer y controladores de última generación para el desempeño profesional absoluto.",
        color: "from-rave-red to-accent",
        shadow: "shadow-[0_0_20px_rgba(255,0,0,0.3)]"
    },
    {
        icon: <Mic2 size={32} />,
        title: "MICROFONÍA",
        description: "Micrófonos inalámbricos de cristalina claridad y todo el soporte técnico que necesitas.",
        color: "from-neon-green to-emerald-600",
        shadow: "shadow-[0_0_20px_rgba(57,255,20,0.3)]"
    },
    {
        icon: <Truck size={32} />,
        title: "MONTAJE EXPERTO",
        description: "Ingenieros especializados encargados de la instalación y operación impecable de tu evento.",
        color: "from-accent to-orange-600",
        shadow: "shadow-[0_0_20px_rgba(255,0,85,0.3)]"
    },
    {
        icon: <Calendar size={32} />,
        title: "EVENTOS TOTALES",
        description: "Desde festivales masivos hasta eventos corporativos exclusivos. El rave no tiene límites.",
        color: "from-blue-600 to-indigo-600",
        shadow: "shadow-[0_0_20px_rgba(37,99,235,0.3)]"
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`group relative p-10 rounded-3xl glass border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-3 ${service.shadow} animate-pulse-glow`}
                            style={{ animationDelay: `${index * 0.5}s` }}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />

                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 text-black shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-black text-white mb-4 group-hover:text-primary transition-colors tracking-tight">
                                {service.title}
                            </h3>

                            <p className="text-gray-400 leading-relaxed font-light">
                                {service.description}
                            </p>

                            <div className="mt-8 flex items-center gap-2 text-xs font-bold text-gray-500 group-hover:text-primary transition-colors cursor-pointer">
                                MÁS INFO <Zap size={12} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
