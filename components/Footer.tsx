"use client";

import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="relative pt-24 pb-12 overflow-hidden">

            {/* Background elements for footer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-40 bg-primary/10 blur-[100px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20 text-center md:text-left">
                    {/* Brand Info */}
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center justify-center md:justify-start gap-4 mb-8 group">
                            <div className="relative w-16 h-16 transition-transform duration-700 group-hover:rotate-[360deg]">
                                <img
                                    src="/logo-official.png"
                                    alt="Audio Sync Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="text-3xl font-black tracking-tighter text-white">AUDIO SYNC</span>
                        </Link>
                        <p className="text-gray-400 mb-10 text-lg font-light leading-relaxed max-w-md mx-auto md:mx-0">
                            Expertos en transformar cualquier espacio en el epicentro de la fiesta. Sonido de alto impacto e iluminación hipnótica.
                        </p>
                        <div className="flex justify-center md:justify-start space-x-6">
                            <Link href="#" className="p-4 glass rounded-full text-gray-400 hover:text-primary hover:shadow-[0_0_20px_#00f3ff] transition-all">
                                <Instagram size={28} />
                            </Link>
                            <Link href="#" className="p-4 glass rounded-full text-gray-400 hover:text-secondary hover:shadow-[0_0_20px_#bc13fe] transition-all">
                                <Facebook size={28} />
                            </Link>
                            <Link href="#" className="p-4 glass rounded-full text-gray-400 hover:text-rave-red hover:shadow-[0_0_20px_#ff0000] transition-all">
                                <Zap size={28} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-black text-sm tracking-[0.3em] mb-8 uppercase">NAVEGACIÓN</h3>
                        <ul className="space-y-6">
                            {["Inicio", "Servicios", "Galería", "Contacto"].map((item) => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-primary transition-all font-bold text-sm tracking-widest hover:pl-2">
                                        {item.toUpperCase()}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-black text-sm tracking-[0.3em] mb-8 uppercase">CONTACTO</h3>
                        <ul className="space-y-8">
                            <li className="flex items-start justify-center md:justify-start gap-4 text-gray-400 group">
                                <MapPin className="text-primary shrink-0 group-hover:scale-110 transition-transform" size={24} />
                                <span className="text-sm font-bold tracking-wider">CDMX, MÉXICO</span>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-4 text-gray-400 group">
                                <Phone className="text-secondary shrink-0 group-hover:scale-110 transition-transform" size={24} />
                                <span className="text-sm font-bold tracking-wider">+52 55 1234 5678</span>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-4 text-gray-400 group">
                                <Mail className="text-accent shrink-0 group-hover:scale-110 transition-transform" size={24} />
                                <span className="text-sm font-bold tracking-wider text-xs">CONTACTO@AUDIOSYNC.COM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 opacity-50">
                    <p className="text-gray-500 text-xs font-bold tracking-widest">
                        &copy; {new Date().getFullYear()} AUDIO SYNC. THE RAVE MASTERS.
                    </p>
                    <div className="flex gap-8 text-[10px] font-black text-gray-500 tracking-[0.2em]">
                        <Link href="#" className="hover:text-white transition-colors">POLÍTICAS</Link>
                        <Link href="#" className="hover:text-white transition-colors">TÉRMINOS</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
