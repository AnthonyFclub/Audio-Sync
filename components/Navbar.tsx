"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Facebook, Phone } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "INICIO", href: "#hero" },
        { name: "SERVICIOS", href: "#servicios" },
        { name: "EXPERIENCIAS", href: "#experiencias" },
        { name: "NOSOTROS", href: "#nosotros" },
        { name: "CONTACTO", href: "#contacto" },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`glass rounded-full px-5 sm:px-6 py-2.5 flex items-center justify-between border-blue-500/20 shadow-2xl transition-all duration-500 ${scrolled ? "bg-[#060a18]/90 shadow-[0_4px_30px_rgba(0,0,0,0.8)]" : "bg-[#060a18]/50"}`}>
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 sm:w-11 sm:h-11 transition-transform duration-700 group-hover:scale-110">
                            <img
                                src="/logo-official.svg"
                                alt="Audio Sync Rental"
                                className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl sm:text-2xl font-black tracking-tighter text-white group-hover:text-blue-400 transition-colors drop-shadow-[0_0_10px_rgba(59,130,246,0.3)] leading-none">
                                AUDIO SYNC
                            </span>
                            <span className="text-[9px] font-bold tracking-[0.3em] text-blue-400 leading-none mt-0.5">
                                RENTAL
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-xs font-black tracking-widest text-slate-300 hover:text-white transition-colors relative group py-1"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-sky-400 transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#38bdf8]" />
                            </Link>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="#contacto"
                            className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-sky-500 text-white font-black text-xs tracking-widest uppercase shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 border border-blue-400/30"
                        >
                            COTIZAR
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-blue-400 transition-colors p-1"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-0 bg-[#060810]/98 backdrop-blur-2xl z-40 flex flex-col items-center justify-center md:hidden overflow-hidden"
                    >
                        <div className="absolute top-6 right-6">
                            <button onClick={() => setIsOpen(false)} className="text-white p-2" aria-label="Close Menu">
                                <X size={32} />
                            </button>
                        </div>

                        <div className="flex flex-col items-center gap-7 px-4 text-center">
                            <div className="w-20 h-20 mb-2">
                                <img src="/logo-official.svg" alt="Audio Sync" className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(59,130,246,0.7)]" />
                            </div>

                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.08 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-2xl font-black text-white hover:text-blue-400 tracking-wider transition-colors drop-shadow-[0_0_10px_rgba(59,130,246,0.4)]"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-8 flex gap-5"
                            >
                                <a href="https://www.instagram.com/audio_syncc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram @audio_syncc" className="p-3.5 glass rounded-full text-white hover:text-blue-400 hover:border-blue-400/50 transition-all">
                                    <Instagram size={24} />
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=61593001150127" target="_blank" rel="noopener noreferrer" aria-label="Facebook Audio Syncc" className="p-3.5 glass rounded-full text-white hover:text-blue-400 hover:border-blue-400/50 transition-all">
                                    <Facebook size={24} />
                                </a>
                                <a href="https://wa.me/529993683122" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="p-3.5 glass rounded-full text-white hover:text-blue-400 hover:border-blue-400/50 transition-all">
                                    <Phone size={24} />
                                </a>
                            </motion.div>
                        </div>

                        {/* Animated background elements for mobile menu */}
                        <div className="absolute top-0 left-0 w-full h-full z-[-1] opacity-30 pointer-events-none">
                            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600 rounded-full blur-[120px] animate-pulse" />
                            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-indigo-600 rounded-full blur-[120px] animate-pulse" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

