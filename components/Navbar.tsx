"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Inicio", href: "#hero" },
        { name: "Servicios", href: "#servicios" },
        { name: "Galería", href: "#galeria" },
        { name: "Nosotros", href: "#nosotros" },
        { name: "Contacto", href: "#contacto" },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center">
                                <span className="text-white font-bold text-xl">AS</span>
                            </div>
                            <span className="text-white font-bold text-xl tracking-wider">AUDIO SYNC</span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-300 hover:text-primary transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wide"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="#contacto"
                                className="bg-primary hover:bg-primary/80 text-black font-bold py-2 px-6 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(0,243,255,0.5)] hover:shadow-[0_0_25px_rgba(0,243,255,0.7)]"
                            >
                                Cotizar
                            </Link>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 absolute w-full"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-300 hover:text-primary block px-3 py-2 rounded-md text-base font-medium text-center"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 pb-2 flex justify-center">
                                <Link
                                    href="#contacto"
                                    onClick={() => setIsOpen(false)}
                                    className="bg-primary text-black font-bold py-3 px-8 rounded-full shadow-[0_0_15px_rgba(0,243,255,0.5)] w-full text-center mx-4"
                                >
                                    Cotizar Ahora
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
