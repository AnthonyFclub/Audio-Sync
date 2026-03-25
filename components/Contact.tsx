"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Zap } from "lucide-react";

const Contact = () => {
    return (
        <section id="contacto" className="py-32 relative overflow-hidden">


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-center mb-24"
                >
                    <div className="inline-block px-4 py-1 rounded-full glass border-rave-red/20 text-rave-red text-xs font-black tracking-[0.3em] mb-4">
                        EL SIGUIENTE PASO
                    </div>
                    <h2 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter">
                        ¿LISTO PARA EL <span className="text-rave-red neon-text">NIVEL</span> SUPERIOR?
                    </h2>
                    <p className="text-white max-w-2xl mx-auto text-2xl md:text-3xl font-luxury italic tracking-wide leading-relaxed drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                        Hablemos de tu visión. Nuestro equipo está listo para materializar el evento de tus sueños.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Contact Info */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            show: {
                                opacity: 1,
                                x: 0,
                                transition: {
                                    staggerChildren: 0.2,
                                    duration: 0.8
                                }
                            }
                        }}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-10"
                    >
                        <div className="glass border border-white/5 p-12 rounded-[2.5rem] shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                            <motion.h3 variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="text-3xl font-black text-white mb-10 tracking-tighter decoration-primary/50 underline-offset-8 underline">CONEXIÓN DIRECTA</motion.h3>

                            <div className="space-y-10">
                                <motion.div variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }} whileHover={{ x: 10 }} className="flex items-start gap-6 group cursor-pointer">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary group-hover:text-black transition-all">
                                        <Phone size={28} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-black text-sm tracking-widest mb-2 group-hover:text-primary transition-colors">TELÉFONO / WHATSAPP</h4>
                                        <p className="text-gray-400 text-lg">+52 9993693122</p>
                                        <p className="text-primary text-xs font-bold mt-1">SOPORTE 24/7 EVENTOS</p>
                                    </div>
                                </motion.div>

                                <motion.div variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }} whileHover={{ x: 10 }} className="flex items-start gap-6 group cursor-pointer">
                                    <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0 border border-secondary/20 group-hover:bg-secondary group-hover:text-black transition-all">
                                        <Mail size={28} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-black text-sm tracking-widest mb-2 group-hover:text-secondary transition-colors">CORREO ELECTRÓNICO</h4>
                                        <p className="text-gray-400 text-lg">audiosyncc@gmail.com</p>
                                        <p className="text-secondary text-xs font-bold mt-1">COTIZACIONES FLASH</p>
                                    </div>
                                </motion.div>

                                <motion.div variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }} whileHover={{ x: 10 }} className="flex items-start gap-6 group cursor-pointer">
                                    <div className="w-14 h-14 rounded-2xl bg-rave-red/10 flex items-center justify-center shrink-0 border border-rave-red/20 group-hover:bg-rave-red group-hover:text-black transition-all">
                                        <MapPin size={28} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-black text-sm tracking-widest mb-2 group-hover:text-rave-red transition-colors">BASE DE OPERACIONES</h4>
                                        <p className="text-gray-400 text-lg">Cancún, Riviera Maya</p>
                                        <p className="text-rave-red text-xs font-bold mt-1">MÉXICO</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Little Rave Badge */}
                        <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } }} className="p-8 glass rounded-3xl border-primary/10 flex items-center gap-6">
                            <Zap className="text-primary" size={40} strokeWidth={1.5} />
                            <p className="text-white font-black tracking-widest text-sm uppercase">Reservaciones abiertas 2026</p>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            show: {
                                opacity: 1,
                                x: 0,
                                transition: {
                                    staggerChildren: 0.1,
                                    duration: 0.8
                                }
                            }
                        }}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <form className="glass border border-white/5 p-12 rounded-[2.5rem] space-y-8 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label htmlFor="name" className="text-gray-400 text-xs font-black tracking-widest uppercase ml-1">TU NOMBRE</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary focus:bg-primary/5 transition-all outline-none"
                                        placeholder="Nombre completo"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label htmlFor="phone" className="text-gray-400 text-xs font-black tracking-widest uppercase ml-1">TELÉFONO</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary focus:bg-primary/5 transition-all outline-none"
                                        placeholder="+52 ..."
                                    />
                                </div>
                            </motion.div>

                            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="space-y-3">
                                <label htmlFor="email" className="text-gray-400 text-xs font-black tracking-widest uppercase ml-1">EMAIL</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary focus:bg-primary/5 transition-all outline-none"
                                    placeholder="hola@ejemplo.com"
                                />
                            </motion.div>

                            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="space-y-3">
                                <label htmlFor="service" className="text-gray-400 text-xs font-black tracking-widest uppercase ml-1">SERVICIO</label>
                                <select
                                    id="service"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary focus:bg-primary/5 transition-all outline-none appearance-none cursor-pointer"
                                >
                                    <option value="" className="bg-black">Selecciona la potencia</option>
                                    <option value="audio" className="bg-black">RENTAL DE AUDIO</option>
                                    <option value="iluminacion" className="bg-black">SHOW DE LUCES</option>
                                    <option value="paquete" className="bg-black">RAVE COMPLETO</option>
                                </select>
                            </motion.div>

                            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="space-y-3">
                                <label htmlFor="message" className="text-gray-400 text-xs font-black tracking-widest uppercase ml-1">TU VISIÓN</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary focus:bg-primary/5 transition-all outline-none"
                                    placeholder="Cuéntanos los detalles de la fiesta..."
                                />
                            </motion.div>

                            <motion.button
                                variants={{ hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1 } }}
                                type="submit"
                                className="group w-full bg-primary text-black font-black py-5 rounded-2xl shadow-[0_0_30px_rgba(0,243,255,0.4)] hover:shadow-[0_0_50px_rgba(0,243,255,0.8)] transition-all duration-500 flex items-center justify-center gap-3 animate-breathe hover:scale-[1.02] active:scale-[0.98]"
                            >
                                AGENDAR AHORA <Send size={20} strokeWidth={2} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
