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
  metadataBase: new URL('https://creatabl-ia.com'),
  
  title: {
    default: 'Creatabl.ia — Vos contenus à la vitesse supérieure',
    template: '%s | Creatabl.ia',
  },
  
  description: 'Créez, planifiez et analysez tous vos réseaux sociaux sur une seule interface.',
  
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    shortcut: '/favicon.ico',
  },
  
  openGraph: {
    title: 'Creatabl.ia — Vos contenus à la vitesse supérieure',
    description: 'Créez, planifiez et analysez tous vos réseaux sociaux.',
    url: 'https://creatabl-ia.com',
    siteName: 'Creatabl.ia',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'Creatabl.ia logo',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  
  twitter: {
    card: 'summary',
    title: 'Creatabl.ia',
    description: 'Créez, planifiez et analysez tous vos réseaux sociaux.',
    images: ['/logo.png'],
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
