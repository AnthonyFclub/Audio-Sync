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
  title: "Audio Sync Rental – Renta de Audio Profesional e Iluminación",
  description: "Renta de audio profesional de alta fidelidad, iluminación robótica y producción técnica para bodas, festivales, conciertos y eventos corporativos en Cancún y Playa del Carmen.",
  openGraph: {
    title: "Audio Sync Rental – High Fidelity Audio & Production",
    description: "Sonido que se siente, iluminación que hipnotiza. Renta de equipo para eventos de alta gama.",
    images: [
      {
        url: "/logo-official.svg",
        width: 800,
        height: 800,
        alt: "Audio Sync Rental Logo",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Audio Sync Rental – High Fidelity Audio & Production",
    description: "Sonido que se siente, iluminación que hipnotiza.",
    images: ["/logo-official.svg"],
  },
  icons: {
    icon: "/logo-official.svg",
    apple: "/logo-official.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bodoniModa.variable} ${greatVibes.variable} antialiased bg-background text-foreground relative not-italic`}
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
