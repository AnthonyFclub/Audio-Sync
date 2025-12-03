import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center">
                                <span className="text-white font-bold text-xl">AS</span>
                            </div>
                            <span className="text-white font-bold text-xl tracking-wider">AUDIO SYNC</span>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Expertos en renta de audio, iluminación y equipos para hacer de tu evento una experiencia inolvidable.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Instagram size={24} />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Facebook size={24} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Enlaces Rápidos</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="#hero" className="text-gray-400 hover:text-primary transition-colors">
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link href="#servicios" className="text-gray-400 hover:text-primary transition-colors">
                                    Servicios
                                </Link>
                            </li>
                            <li>
                                <Link href="#galeria" className="text-gray-400 hover:text-primary transition-colors">
                                    Galería
                                </Link>
                            </li>
                            <li>
                                <Link href="#contacto" className="text-gray-400 hover:text-primary transition-colors">
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Contacto</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="text-primary shrink-0" size={20} />
                                <span>Ciudad de México, México</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="text-primary shrink-0" size={20} />
                                <span>+52 55 1234 5678</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="text-primary shrink-0" size={20} />
                                <span>contacto@audiosync.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Audio Sync. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
