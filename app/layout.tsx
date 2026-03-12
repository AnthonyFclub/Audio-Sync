import type { Metadata } from "next";
import { Geist, Geist_Mono, Bodoni_Moda, Great_Vibes } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PsychedelicBackground from "@/components/PsychedelicBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const greatVibes = Great_Vibes({
  variable: "--font-signature",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Audio Sync – Renta de Audio e Iluminación para tus Eventos",
  description: "Renta de audio profesional, iluminación y equipos para eventos. Audio Sync ofrece soluciones para conciertos, eventos corporativos y sociales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bodoniModa.variable} ${greatVibes.variable} antialiased bg-background text-foreground relative`}
      >
        <PsychedelicBackground />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
