"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Phone } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "INICIO", href: "#hero" },
        { name: "SERVICIOS", href: "#servicios" },
        { name: "GALERÍA", href: "#galeria" },
        { name: "NOSOTROS", href: "#nosotros" },
        { name: "CONTACTO", href: "#contacto" },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`glass rounded-full px-6 py-2 flex items-center justify-between border-white/5 shadow-2xl transition-all duration-500 ${scrolled ? "bg-black/80" : "bg-transparent"}`}>
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-12 h-12 transition-transform duration-700 group-hover:rotate-[360deg]">
                            <img
                                src="/logo-official.png"
                                alt="Audio Sync Logo"
                                className="w-full h-full object-contain animate-heartbeat"
                            />
                        </div>
                        <span
                            className="text-2xl font-black tracking-tighter animate-silver-shine drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                            style={{ animationDelay: '1.8s' }}
                        >
                            AUDIO SYNC
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-bold tracking-widest relative group animate-silver-shine drop-shadow-[0_0_5px_rgba(255,255,255,0.1)]"
                                style={{ animationDelay: `${(navLinks.length - index) * 0.3}s` }}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#00f3ff]" />
                            </Link>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="#contacto"
                            className="px-6 py-2 border border-white/20 bg-white/5 rounded-full hover:bg-white/10 hover:border-white/40 hover:scale-105 transition-all duration-300 flex items-center justify-center shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm group"
                        >
                            <span
                                className="text-sm font-bold tracking-widest animate-silver-shine drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]"
                                style={{ animationDelay: '0s' }}
                            >
                                COTIZAR
                            </span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center transition-all duration-300">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-primary transition-colors hover:scale-110 active:scale-90"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
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
                        className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center md:hidden overflow-hidden"
                    >
                        <div className="absolute top-10 right-10">
                            <button onClick={() => setIsOpen(false)} className="text-white">
                                <X size={40} />
                            </button>
                        </div>

                        <div className="flex flex-col items-center gap-8 px-4">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-4xl font-black animate-silver-shine tracking-tighter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                                        style={{ animationDelay: `${(navLinks.length - i) * 0.3}s` }}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="mt-12 flex gap-8"
                            >
                                <Link href="#" className="p-4 glass rounded-full text-white hover:text-primary transition-colors group">
                                    <Instagram size={32} className="group-hover:scale-110 transition-transform" />
                                </Link>
                                <Link href="#" className="p-4 glass rounded-full text-white hover:text-primary transition-colors group">
                                    <Phone size={32} className="group-hover:scale-110 transition-transform" />
                                </Link>
                            </motion.div>
                        </div>

                        {/* Animated background elements for mobile menu */}
                        <div className="absolute top-0 left-0 w-full h-full z-[-1] opacity-20">
                            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-[100px] animate-pulse" />
                            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary rounded-full blur-[100px] animate-pulse" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
