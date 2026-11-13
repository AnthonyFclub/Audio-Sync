"use client";

import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone, Zap } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="relative pt-24 pb-12 overflow-hidden bg-[#04060d]/90 border-t border-blue-500/20">
            {/* Background elements for footer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-40 bg-blue-600/15 blur-[120px] rounded-full" />
            </div>

            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            staggerChildren: 0.1,
                            duration: 0.8
                        }
                    }
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
            >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 sm:gap-16 mb-20 text-center md:text-left">
                    {/* Brand Info */}
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="md:col-span-2">
                        <Link href="/" className="flex items-center justify-center md:justify-start gap-4 mb-6 group">
                            <div className="relative w-14 h-14 transition-transform duration-700 group-hover:scale-110">
                                <img
                                    src="/logo-official.svg"
                                    alt="Audio Sync Rental Logo"
                                    className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                                />
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="text-2xl font-black tracking-tighter text-white">AUDIO SYNC</span>
                                <span className="text-[10px] font-bold tracking-[0.35em] text-blue-400">RENTAL</span>
                            </div>
                        </Link>
                        <p className="text-slate-400 mb-8 text-base font-light leading-relaxed max-w-md mx-auto md:mx-0">
                            Líderes en renta de equipo para eventos, audio de alta fidelidad, iluminación robótica y producción técnica en Cancún y Playa del Carmen.
                        </p>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="https://www.instagram.com/hau_music/" target="_blank" rel="noopener noreferrer" aria-label="Instagram @hau_music" className="p-3.5 glass rounded-full text-slate-300 hover:text-white hover:border-blue-400/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all">
                                <Instagram size={22} strokeWidth={1.75} />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61593001150127" target="_blank" rel="noopener noreferrer" aria-label="Facebook Audio Syncc" className="p-3.5 glass rounded-full text-slate-300 hover:text-white hover:border-blue-400/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all">
                                <Facebook size={22} strokeWidth={1.75} />
                            </a>
                            <a href="https://wa.me/529993683122" target="_blank" rel="noopener noreferrer" className="p-3.5 glass rounded-full text-slate-300 hover:text-white hover:border-blue-400/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all">
                                <Phone size={22} strokeWidth={1.75} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
                        <h3 className="text-white font-black text-xs tracking-[0.3em] mb-6 uppercase text-sky-400">NAVEGACIÓN</h3>
                        <ul className="space-y-4">
                            {["Inicio", "Servicios", "Galería", "Nosotros", "Contacto"].map((item) => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-blue-400 transition-all font-bold text-xs tracking-widest hover:pl-1">
                                        {item.toUpperCase()}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
                        <h3 className="text-white font-black text-xs tracking-[0.3em] mb-6 uppercase text-sky-400">ATENCIÓN & UBICACIÓN</h3>
                        <ul className="space-y-5">
                            <li className="flex items-start justify-center md:justify-start gap-3 text-slate-300">
                                <MapPin className="text-blue-400 shrink-0 mt-0.5" size={18} strokeWidth={2} />
                                <span className="text-xs font-bold tracking-wider uppercase">CANCÚN & PLAYA DEL CARMEN</span>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-3 text-slate-300">
                                <Phone className="text-blue-400 shrink-0" size={18} strokeWidth={2} />
                                <a href="https://wa.me/529993683122" target="_blank" rel="noopener noreferrer" className="text-xs font-bold tracking-wider hover:text-blue-400 transition-colors">
                                    +52 999 368 3122
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 0.7 } }} className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-xs font-bold tracking-widest">
                        &copy; {new Date().getFullYear()} AUDIO SYNC RENTAL. TODOS LOS DERECHOS RESERVADOS.
                    </p>
                    <div className="flex gap-6 text-[10px] font-black text-slate-500 tracking-[0.2em]">
                        <Link href="#" className="hover:text-white transition-colors">POLÍTICAS</Link>
                        <Link href="#" className="hover:text-white transition-colors">TÉRMINOS</Link>
                    </div>
                </motion.div>
            </motion.div>
        </footer>
    );
};

export default Footer;

