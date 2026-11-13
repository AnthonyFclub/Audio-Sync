"use client";

import { motion } from "framer-motion";

const Background = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#030408]">
            {/* Pure Metallic Blue & Black Brushed Texture with Exact 50/50 Smooth Diffuse Blend */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/metallic-bg.jpg"
                    alt="Audio Sync Metallic Texture"
                    className="w-full h-full object-cover object-center opacity-90"
                />
            </div>

            {/* Subtle Metallic Sheen Drift Animation */}
            <motion.div
                initial={{ opacity: 0.3 }}
                animate={{
                    opacity: [0.25, 0.45, 0.25],
                    scale: [1, 1.03, 1]
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute inset-0 z-10 pointer-events-none mix-blend-overlay"
            >
                <div className="w-full h-full bg-gradient-to-tr from-black via-transparent to-blue-500/20" />
            </motion.div>

            {/* Ambient Blue Metallic Reflection Layer */}
            <div className="absolute inset-0 z-20 pointer-events-none">
                <div className="absolute -top-1/4 -right-1/4 w-[70vw] h-[70vw] rounded-full bg-blue-600/15 blur-[140px]" />
                <div className="absolute -bottom-1/4 -left-1/4 w-[60vw] h-[60vw] rounded-full bg-black/80 blur-[100px]" />
            </div>

            {/* Soft Edge Vignette for Crisp Contrast */}
            <div className="absolute inset-0 z-30 bg-gradient-to-b from-[#030408]/60 via-transparent to-[#030408]/80 pointer-events-none" />
        </div>
    );
};

export default Background;


