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
                    src="/jungle-bg-pure.png"
                    alt="Jungle Background"
                    className="w-full h-full object-cover opacity-80"
                />
            </motion.div>

            {/* Ambient Dark Overlay for Depth */}
            <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/60 via-transparent to-black" />

            {/* High-Fidelity Neon Foliage Layers */}
            <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                {/* Floating Neon Leaves (Using the new purple leaf asset) */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.5, rotate: Math.random() * 360 }}
                        animate={{
                            opacity: [0.3, 0.7, 0.3],
                            scale: [0.8, 1.2, 0.8],
                            rotate: [0, 20, 0],
                            y: [0, 40, 0],
                            x: [0, 20, 0]
                        }}
                        transition={{
                            duration: 15 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 2
                        }}
                        className="absolute w-[450px] h-[450px] mix-blend-screen opacity-60 grayscale-[0.05]"
                        style={{
                            top: `${Math.random() * 110 - 15}%`,
                            left: i % 2 === 0 ? `-15%` : i % 3 === 0 ? `40%` : `75%`,
                        }}
                    >
                        <img
                            src="/neon-leaves-purple.png"
                            alt="Neon Leaf"
                            className="w-full h-full object-contain"
                        />
                    </motion.div>
                ))}
            </div>

            {/* Neon Glare/Light Leaks */}
            <div className="absolute inset-0 z-20">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[180px] animate-pulse" />
                <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[200px] animate-pulse" style={{ animationDelay: '3s' }} />
            </div>

            {/* Deep Vignette */}
            <div className="absolute inset-0 z-40 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.5)_60%,rgba(0,0,0,0.9)_100%)] pointer-events-none" />
        </div>
    );
};

export default PsychedelicBackground;
