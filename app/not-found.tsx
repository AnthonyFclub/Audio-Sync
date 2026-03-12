"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    useEffect(() => {
        // Redirect to home after 3 seconds or immediately
        const timer = setTimeout(() => {
            router.push("/");
        }, 100);
        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-white">
            <h1 className="text-6xl font-black neon-text mb-4">404</h1>
            <p className="text-xl text-gray-400 mb-8">Redirigiendo a la fiesta...</p>
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
    );
}
