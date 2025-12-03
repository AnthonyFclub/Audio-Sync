"use client";

import { motion } from "framer-motion";
import { Speaker, Lightbulb, Music, Mic2, Truck, Calendar } from "lucide-react";

const services = [
    {
        icon: <Speaker size={40} />,
        title: "Renta de Audio",
        description: "Sistemas de sonido de alta fidelidad para cualquier tamaño de audiencia. Marcas líderes como JBL, Bose y Shure.",
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: <Lightbulb size={40} />,
        title: "Iluminación Profesional",
        description: "Cabezas móviles, par LED, arquitectónica y efectos especiales para crear la atmósfera perfecta.",
        color: "from-purple-500 to-pink-500"
    },
    {
        icon: <Music size={40} />,
        title: "Equipos para DJ",
        description: "Consolas Pioneer, controladores y monitores para que el DJ tenga el mejor desempeño.",
        color: "from-orange-500 to-red-500"
    },
    {
        icon: <Mic2 size={40} />,
        title: "Microfonía y Accesorios",
        description: "Micrófonos inalámbricos, diademas, lavalier y todo el cableado necesario.",
        color: "from-green-500 to-emerald-500"
    },
    {
        icon: <Truck size={40} />,
        title: "Montaje y Desmontaje",
        description: "Equipo técnico especializado que se encarga de la instalación y operación durante el evento.",
        color: "from-yellow-500 to-orange-500"
    },
    {
        icon: <Calendar size={40} />,
        title: "Todo tipo de Eventos",
        description: "Bodas, XV años, conferencias corporativas, conciertos y festivales.",
        color: "from-indigo-500 to-blue-500"
    }
];

const Services = () => {
    return (
        <section id="servicios" className="py-20 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Nuestros <span className="text-primary">Servicios</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Soluciones integrales en tecnología audiovisual para garantizar el éxito de tu evento.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />

                            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
