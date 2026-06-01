"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Calendar, 
  BarChart2, 
  Sparkles, 
  Users, 
  ArrowRight,
  Layers,
  Bell,
  Network,
  Settings
} from "lucide-react";

// Local SVG icons to bypass lucide-react differences
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"features" | "platforms" | null>(null);
  
  // Mobile accordion states
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);
  const [mobilePlatformsOpen, setMobilePlatformsOpen] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (type: "features" | "platforms") => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(type);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const clearDropdownTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const features = [
    {
      name: "Planification intelligente",
      desc: "Postez automatiquement aux heures optimales.",
      href: "/fonctionnalites/planification",
      icon: <Calendar className="w-5 h-5 text-purple-600" />,
    },
    {
      name: "Analytics temps réel",
      desc: "Suivez vos performances sur un tableau unifié.",
      href: "/fonctionnalites/analytics",
      icon: <BarChart2 className="w-5 h-5 text-blue-600" />,
    },
    {
      name: "Génération IA",
      desc: "Rédigez légendes et hashtags en un instant.",
      href: "/fonctionnalites/generation-ia",
      icon: <Sparkles className="w-5 h-5 text-purple-600" />,
    },
    {
      name: "Multi-plateforme natif",
      desc: "Canaux multiples et intégration Canva directe.",
      href: "/fonctionnalites/multi-plateforme",
      icon: <Network className="w-5 h-5 text-purple-600" />,
    },
    {
      name: "Alertes tendances",
      desc: "Détectez les hashtags et sons en forte hausse.",
      href: "/fonctionnalites/alertes-tendances",
      icon: <Bell className="w-5 h-5 text-orange-600" />,
    },
    {
      name: "Collaboration équipe",
      desc: "Workflows de validation simples pour vos clients.",
      href: "/fonctionnalites/collaboration",
      icon: <Users className="w-5 h-5 text-purple-600" />,
    },
  ];

  const platforms = [
    {
      name: "Instagram",
      desc: "Reels, Stories & Graph API",
      icon: <InstagramIcon className="w-5 h-5 text-[#E1306C]" />,
    },
    {
      name: "LinkedIn",
      desc: "Carrousels pro & Profils",
      icon: <LinkedinIcon className="w-5 h-5 text-[#0A66C2]" />,
    },
    {
      name: "TikTok",
      desc: "Vidéos courtes & Trend sync",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-slate-800">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.86 1.08 2.07 1.85 3.4 2.27V10.1c-1.74-.08-3.41-.78-4.73-1.92-.12-.1-.23-.21-.34-.32v7.71c.08 2.3-1.02 4.54-2.87 5.79-1.94 1.34-4.56 1.63-6.73.74-2.25-.91-3.86-3.14-4.05-5.58-.29-3.23 2.1-6.19 5.33-6.49 1.03-.1 2.08.09 3.02.55V3.86c-1.52-.42-3.13-.3-4.57.34-1.85.83-3.22 2.53-3.64 4.53-.52 2.44.25 5.06 1.96 6.84 1.76 1.84 4.4 2.5 6.87 1.7 2.19-.7 3.82-2.73 4.12-5.02.07-.5.08-1.01.07-1.51V.02z"/>
        </svg>
      ),
    },
    {
      name: "Facebook",
      desc: "Pages d'entreprise & Groupes",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-[#1877F2]">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      name: "YouTube",
      desc: "Shorts & Planification vidéo",
      icon: <YoutubeIcon className="w-5 h-5 text-[#FF0000]" />,
    },
    {
      name: "X (Twitter)",
      desc: "Threads programmés & Réactivité",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-slate-800">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full h-[36px] bg-[#C2B8FF] flex items-center justify-center font-outfit text-[15px] font-normal text-[#3B0764] px-4 text-center">
        <span>Lancement officiel — 7 jours d&apos;essai gratuit</span>
      </div>

      <nav
        className="fixed left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-[#F3F4F6] h-[64px] flex items-center"
        style={{ top: "36px" }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-full">
            {/* Logo Left */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={process.env.NEXT_PUBLIC_LOGO_URL || "/logo.png"} 
                  alt="Creatabl Logo" 
                  className="h-[20px] w-auto object-contain"
                />
                <div className="flex items-baseline font-outfit font-medium text-[20px]">
                  <span className="text-[#111827]">Creatabl.</span>
                  <span className="font-playfair italic font-medium text-[#111827]">ia</span>
                </div>
              </Link>
            </div>

            {/* Links Center */}
            <div className="hidden md:flex items-center space-x-8">
              
              {/* Features Link & Dropdown */}
              <div 
                className="relative py-4"
                onMouseEnter={() => handleMouseEnter("features")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`font-inter font-medium text-[15px] hover:text-[#7225E3] transition-colors flex items-center gap-[4px] cursor-pointer ${
                    activeDropdown === "features" ? "text-[#7225E3]" : "text-[#374151]"
                  }`}
                >
                  <span>Fonctionnalités</span>
                  <ChevronDown className={`w-[14px] h-[14px] transition-transform duration-200 ${
                    activeDropdown === "features" ? "rotate-180 text-[#7225E3]" : "text-[#374151]"
                  }`} />
                </button>

                {/* Features Dropdown Menu (Cadran) */}
                {activeDropdown === "features" && (
                  <div 
                    onMouseEnter={clearDropdownTimeout}
                    onMouseLeave={handleMouseLeave}
                    className="absolute top-[50px] left-1/2 -translate-x-1/2 w-[660px] bg-white border border-slate-200/60 rounded-2xl shadow-2xl p-6 grid grid-cols-12 gap-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                  >
                    <div className="col-span-8 grid grid-cols-2 gap-4">
                      {features.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="flex gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:scale-105 transition-transform">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-slate-800 font-outfit">
                              {item.name}
                            </h4>
                            <p className="text-[13px] text-slate-400 mt-0.5 leading-snug">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="col-span-4 bg-slate-50 border border-slate-100 rounded-xl p-4 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                          <Settings className="w-4 h-4 text-purple-600" />
                        </div>
                        <h4 className="text-xs font-bold font-outfit text-slate-800">
                          Technologie IA native
                        </h4>
                        <p className="text-[10px] text-slate-400 leading-normal">
                          Notre IA analyse les tendances en direct pour optimiser chaque phrase.
                        </p>
                      </div>
                      <Link
                        href="/fonctionnalites"
                        onClick={() => setActiveDropdown(null)}
                        className="text-[13px] font-bold text-primary hover:underline flex items-center gap-1 mt-4 group"
                      >
                        <span>Voir tout</span>
                        <ArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Platforms Link & Dropdown */}
              <div 
                className="relative py-4"
                onMouseEnter={() => handleMouseEnter("platforms")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`font-inter font-medium text-[15px] hover:text-[#7225E3] transition-colors flex items-center gap-[4px] cursor-pointer ${
                    activeDropdown === "platforms" ? "text-[#7225E3]" : "text-[#374151]"
                  }`}
                >
                  <span>Plateformes</span>
                  <ChevronDown className={`w-[14px] h-[14px] transition-transform duration-200 ${
                    activeDropdown === "platforms" ? "rotate-180 text-[#7225E3]" : "text-[#374151]"
                  }`} />
                </button>

                {/* Platforms Dropdown Menu (Cadran) */}
                {activeDropdown === "platforms" && (
                  <div 
                    onMouseEnter={clearDropdownTimeout}
                    onMouseLeave={handleMouseLeave}
                    className="absolute top-[50px] left-1/2 -translate-x-1/2 w-[600px] bg-white border border-slate-200/60 rounded-2xl shadow-2xl p-6 grid grid-cols-12 gap-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                  >
                    <div className="col-span-8 grid grid-cols-2 gap-x-4 gap-y-3">
                      {platforms.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex gap-3 p-2 rounded-xl cursor-default"
                        >
                          <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-slate-800 font-outfit">
                              {item.name}
                            </h4>
                            <p className="text-[10px] text-slate-400">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="col-span-4 bg-slate-50 border border-slate-100 rounded-xl p-4 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                          <Layers className="w-4 h-4 text-primary" />
                        </div>
                        <h4 className="text-xs font-bold font-outfit text-slate-800">
                          Le Cadran d&apos;Intégration
                        </h4>
                        <p className="text-[10px] text-slate-400 leading-normal">
                          Explorez l&apos;intégralité des API (Canva, OpenAI, Stripe) connectées à notre coeur.
                        </p>
                      </div>
                      <Link
                        href="/plateformes"
                        onClick={() => setActiveDropdown(null)}
                        className="text-[13px] font-medium text-[#7225E3] hover:underline flex items-center gap-1 mt-4 cursor-pointer"
                      >
                        <span>En savoir plus →</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/pricing"
                className="font-inter font-medium text-[15px] text-[#374151] hover:text-[#7225E3] transition-colors"
              >
                Tarifs
              </Link>
              <Link
                href="/blog"
                className="font-inter font-medium text-[15px] text-[#374151] hover:text-[#7225E3] transition-colors"
              >
                Blog
              </Link>
            </div>

            {/* Buttons Right */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href="https://app.creatabl-ia.com/sign-up"
                className="font-inter font-medium text-[14px] text-[#374151] bg-white border border-[#D1D5DB] px-[20px] py-[8px] rounded-[8px] hover:bg-slate-50 transition-colors"
              >
                S&apos;inscrire
              </a>
              
              <a
                href="https://app.creatabl-ia.com/sign-in"
                className="font-inter font-medium text-[14px] text-white px-[20px] py-[8px] rounded-[8px] flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all duration-250"
                style={{
                  background: "linear-gradient(135deg, #8A38F5 0%, #7225E3 100%)",
                  boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.2)",
                }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[16px] h-[16px]">
                  <path d="M9.315 7.584C12.195 3.883 16.695 1.5 
                  21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 
                  9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 
                  22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 
                  15.838 0 0 1 6.382 15H2.25a.75.75 0 0 
                  1-.75-.75 6.75 6.75 0 0 1 7.815-6.666Z"/>
                </svg>
                <span>Se Connecter</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`md:hidden fixed inset-x-0 bg-white border-b border-[#F3F4F6] overflow-y-auto transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[85vh] py-4" : "max-h-0"
          }`}
          style={{ top: "100px" }}
        >
          <div className="px-4 space-y-2 flex flex-col">
            
            {/* Mobile Features Accordion */}
            <div>
              <button
                onClick={() => setMobileFeaturesOpen(!mobileFeaturesOpen)}
                className="w-full font-inter font-semibold text-[15px] text-[#374151] py-2.5 px-3 rounded-lg hover:bg-slate-50 flex items-center justify-between"
              >
                <span>Fonctionnalités</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileFeaturesOpen ? "rotate-180" : ""}`} />
              </button>
              
              {mobileFeaturesOpen && (
                <div className="pl-6 pr-2 py-2 space-y-2 bg-slate-50/50 rounded-xl mt-1">
                  {features.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => {
                        setIsOpen(false);
                        setMobileFeaturesOpen(false);
                      }}
                      className="flex items-center gap-3 py-2 px-3 rounded-lg text-sm text-[#374151] hover:bg-slate-100"
                    >
                      <span className="flex-shrink-0">{item.icon}</span>
                      <span className="font-medium text-xs">{item.name}</span>
                    </Link>
                  ))}
                  <Link
                    href="/fonctionnalites"
                    onClick={() => {
                      setIsOpen(false);
                      setMobileFeaturesOpen(false);
                    }}
                    className="flex items-center justify-center gap-1.5 py-2.5 mt-2 text-xs font-bold text-primary bg-primary/5 rounded-lg"
                  >
                    <span>Voir toutes les fonctions</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Platforms Accordion */}
            <div>
              <button
                onClick={() => setMobilePlatformsOpen(!mobilePlatformsOpen)}
                className="w-full font-inter font-semibold text-[15px] text-[#374151] py-2.5 px-3 rounded-lg hover:bg-slate-50 flex items-center justify-between"
              >
                <span>Plateformes</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobilePlatformsOpen ? "rotate-180" : ""}`} />
              </button>

              {mobilePlatformsOpen && (
                <div className="pl-6 pr-2 py-2 space-y-2 bg-slate-50/50 rounded-xl mt-1">
                  {platforms.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 py-2 px-3 rounded-lg text-sm text-[#374151] cursor-default"
                    >
                      <span className="flex-shrink-0">{item.icon}</span>
                      <span className="font-medium text-xs">{item.name}</span>
                    </div>
                  ))}
                  <Link
                    href="/plateformes"
                    onClick={() => {
                      setIsOpen(false);
                      setMobilePlatformsOpen(false);
                    }}
                    className="flex items-center justify-center gap-1.5 py-2.5 mt-2 text-xs font-bold text-primary bg-primary/5 rounded-lg"
                  >
                    <span>Découvrir le cadran d&apos;intégrations</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/pricing"
              onClick={() => setIsOpen(false)}
              className="font-inter font-semibold text-[15px] text-[#374151] py-2.5 px-3 rounded-lg hover:bg-slate-50"
            >
              Tarifs
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className="font-inter font-semibold text-[15px] text-[#374151] py-2.5 px-3 rounded-lg hover:bg-slate-50"
            >
              Blog
            </Link>

            <div className="border-t border-slate-100 pt-4 flex flex-col space-y-2">
              <a
                href="https://app.creatabl-ia.com/sign-up"
                className="text-center font-inter font-medium text-[14px] text-[#374151] bg-white border border-[#D1D5DB] py-2.5 rounded-[8px]"
              >
                S&apos;inscrire
              </a>
              <a
                href="https://app.creatabl-ia.com/sign-in"
                className="text-center font-inter font-medium text-[14px] text-white py-2.5 rounded-[8px] flex items-center justify-center gap-2"
                style={{
                  background: "linear-gradient(135deg, #8A38F5 0%, #7225E3 100%)",
                  boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.2)",
                }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[16px] h-[16px]">
                  <path d="M9.315 7.584C12.195 3.883 16.695 1.5 
                  21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 
                  9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 
                  22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 
                  15.838 0 0 1 6.382 15H2.25a.75.75 0 0 
                  1-.75-.75 6.75 6.75 0 0 1 7.815-6.666Z"/>
                </svg>
                <span>Se Connecter</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
