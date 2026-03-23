"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PsychedelicBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
            {/* Base Pure Jungle Image with Breathing Effect */}
            <motion.div
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{
                    scale: [1.05, 1.15, 1.05],
                    opacity: 1
                }}
                transition={{
                    scale: { duration: 15, repeat: Infinity, ease: "easeInOut" },
                    opacity: { duration: 2 }
                }}
                className="absolute inset-0 z-0"
            >
                <img
                    src="/jungle-vivid-bg.jpg"
                    alt="Jungle Background"
                    className="w-full h-full object-cover opacity-100"
                />
            </motion.div>

            {/* Neon Glare/Light Leaks */}
            <div className="absolute inset-0 z-20 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[180px] animate-pulse" />
                <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[200px] animate-pulse" style={{ animationDelay: '3s' }} />
            </div>

            {/* Light Vignette */}
            <div className="absolute inset-0 z-40 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />
        </div>
    );
};

export default PsychedelicBackground;
