import type { Metadata } from "next";
import { Outfit, Playfair_Display, Inter } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({ 
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-outfit'
})
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['500'],
  style: ['italic'],
  variable: '--font-playfair'
})
const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: "Creatabl.ia - Vos contenus, à la vitesse supérieure",
  description: "Créez, planifiez et analysez tous vos réseaux sociaux depuis une seule interface avec Creatabl.ia.",
  keywords: "reseaux sociaux, planification, intelligence artificielle, analytics, SaaS, marketing digital",
  metadataBase: new URL("https://creatabl-ia.com"),
  openGraph: {
    title: "Creatabl.ia - Gestion de réseaux sociaux par IA",
    description: "Créez, planifiez et analysez tous vos réseaux sociaux depuis une seule interface.",
    url: "https://creatabl-ia.com",
    siteName: "Creatabl.ia",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${outfit.variable} ${playfair.variable} ${inter.variable} font-sans antialiased bg-white dark:bg-[#0b0a0f] text-slate-900 dark:text-slate-100 min-h-screen flex flex-col`}>
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
