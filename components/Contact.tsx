"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
    return (
        <section id="contacto" className="py-20 bg-black relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Contáctanos
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        ¿Listo para tu próximo evento? Escríbenos y te enviaremos una cotización personalizada.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-primary/30 transition-colors duration-300">
                            <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Phone className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Teléfono / WhatsApp</h4>
                                        <p className="text-gray-400">+52 55 1234 5678</p>
                                        <p className="text-gray-400">Lunes a Viernes: 9am - 6pm</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                                        <Mail className="text-secondary" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Email</h4>
                                        <p className="text-gray-400">contacto@audiosync.com</p>
                                        <p className="text-gray-400">cotizaciones@audiosync.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                                        <MapPin className="text-accent" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Ubicación</h4>
                                        <p className="text-gray-400">Av. Insurgentes Sur 1234,</p>
                                        <p className="text-gray-400">Col. Del Valle, CDMX, México</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-white text-sm font-medium">Nombre</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                        placeholder="Tu nombre"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-white text-sm font-medium">Teléfono</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                        placeholder="Tu teléfono"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-white text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="tu@email.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="service" className="text-white text-sm font-medium">Servicio de interés</label>
                                <select
                                    id="service"
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                >
                                    <option value="">Selecciona una opción</option>
                                    <option value="audio">Renta de Audio</option>
                                    <option value="iluminacion">Iluminación</option>
                                    <option value="dj">DJ y Música</option>
                                    <option value="paquete">Paquete Completo</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-white text-sm font-medium">Mensaje</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Cuéntanos sobre tu evento..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-primary to-secondary text-black font-bold py-4 rounded-lg shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                Enviar Mensaje <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
