"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart2,
  Calendar,
  ChevronDown,
  Menu,
  Send,
  WandSparkles,
  X,
} from "lucide-react";
import NetworkLogo, { NetworkName } from "@/components/NetworkLogo";

// Barre de navigation du site : composant Navbar du design system Creatabl.ia
// (Fonctionnalités en 4 catégories, renvoi vers l'offre Business).
const APP_URL = "https://app.creatabl-ia.com";

const featureItems = [
  { name: "Création avec IA", desc: "Des posts rédigés dans votre ton.", icon: WandSparkles, href: "/fonctionnalites/creation" },
  { name: "Planification", desc: "Un calendrier pour tous vos réseaux.", icon: Calendar, href: "/fonctionnalites/planification" },
  { name: "Publication", desc: "Diffusez partout en un clic.", icon: Send, href: "/fonctionnalites/multi-plateforme" },
  { name: "Analytique", desc: "Vos performances sur un seul tableau.", icon: BarChart2, href: "/fonctionnalites/analytics" },
];

const platformItems: { name: string; desc: string; logo: NetworkName }[] = [
  { name: "Instagram", desc: "Reels, Stories et carrousels", logo: "instagram" },
  { name: "LinkedIn", desc: "Carrousels pro et profils", logo: "linkedin" },
  { name: "TikTok", desc: "Vidéos courtes et tendances", logo: "tiktok" },
  { name: "Facebook", desc: "Pages d'entreprise et groupes", logo: "facebook" },
  { name: "X (Twitter)", desc: "Threads programmés", logo: "x" },
];

export function Wordmark({ light = false, size = 18 }: { light?: boolean; size?: number }) {
  return (
    <span className={`cr-wordmark${light ? " cr-wordmark--light" : ""}`} style={{ fontSize: size }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="cr-mark" src={process.env.NEXT_PUBLIC_LOGO_URL || "/logo.png"} alt="" />
      <span>Creatabl.<i>ia</i></span>
    </span>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<"features" | "platforms" | null>(null);
  const [mobileSection, setMobileSection] = useState<"features" | "platforms" | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const open = (menu: "features" | "platforms") => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenu(menu);
  };
  const close = () => {
    timeoutRef.current = setTimeout(() => setOpenMenu(null), 150);
  };

  return (
    <>
      <div className="cr-announce fixed top-0 left-0 right-0 z-50" style={{ position: "fixed", height: 36, zIndex: 51 }}>
        <div className="cr-container" style={{ minHeight: 36 }}>
          <span className="cr-badge cr-badge--plain">Nouveau</span>
          <span>Importez vos designs Canva directement dans vos posts.</span>
          <Link href="/fonctionnalites/multi-plateforme">
            Voir comment <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <header className="cr-nav fixed left-0 right-0 z-50" style={{ position: "fixed", top: 36, zIndex: 50 }}>
        <div className="cr-container" style={{ height: 64 }}>
          <Link href="/" aria-label="Creatabl.ia, accueil">
            <Wordmark />
          </Link>

          <ul className="cr-nav-links nav-desktop">
            <li onMouseEnter={() => open("features")} onMouseLeave={close}>
              <button
                className="cr-nav-link"
                aria-expanded={openMenu === "features"}
                aria-haspopup="true"
                onClick={() => setOpenMenu(openMenu === "features" ? null : "features")}
              >
                Fonctionnalités <ChevronDown size={16} aria-hidden="true" />
              </button>
              {openMenu === "features" && (
                <div className="cr-mega">
                  {featureItems.map((item) => (
                    <Link key={item.href} href={item.href} onClick={() => setOpenMenu(null)}>
                      <span className="cr-icon-tile"><item.icon size={18} aria-hidden="true" /></span>
                      <span>
                        <strong>{item.name}</strong>
                        <span>{item.desc}</span>
                      </span>
                    </Link>
                  ))}
                  <div className="cr-mega-foot">
                    <span>Vous gérez plusieurs clients ?</span>
                    <Link className="cr-link" href="/pricing" style={{ padding: 0 }} onClick={() => setOpenMenu(null)}>
                      Offre Business <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              )}
            </li>
            <li onMouseEnter={() => open("platforms")} onMouseLeave={close}>
              <button
                className="cr-nav-link"
                aria-expanded={openMenu === "platforms"}
                aria-haspopup="true"
                onClick={() => setOpenMenu(openMenu === "platforms" ? null : "platforms")}
              >
                Plateformes <ChevronDown size={16} aria-hidden="true" />
              </button>
              {openMenu === "platforms" && (
                <div className="cr-mega">
                  {platformItems.map((item) => (
                    <Link key={item.name} href="/plateformes" onClick={() => setOpenMenu(null)}>
                      <span className="cr-icon-tile" style={{ background: "var(--surface)" }}><NetworkLogo name={item.logo} size={18} /></span>
                      <span>
                        <strong>{item.name}</strong>
                        <span>{item.desc}</span>
                      </span>
                    </Link>
                  ))}
                  <div className="cr-mega-foot">
                    <span>Un seul outil pour tous vos réseaux</span>
                    <Link className="cr-link" href="/plateformes" style={{ padding: 0 }} onClick={() => setOpenMenu(null)}>
                      Voir les plateformes <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              )}
            </li>
            <li><Link className="cr-nav-link" href="/pricing">Tarifs</Link></li>
            <li><Link className="cr-nav-link" href="/blog">Blog</Link></li>
          </ul>

          <div className="cr-nav-actions">
            <a className="cr-btn cr-btn--neutral nav-desktop" href={`${APP_URL}/sign-in`}>Se connecter</a>
            <a className="cr-btn cr-btn--primary nav-desktop" href={`${APP_URL}/sign-up`}>Et c&apos;est gratuit</a>
            <button
              className="cr-btn cr-btn--secondary cr-btn--icon nav-burger"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {isOpen && (
        <div className="fixed left-0 right-0 bottom-0 z-40 overflow-y-auto md:hidden" style={{ top: 100, background: "var(--white)" }}>
          <nav className="cr-container" style={{ paddingBlock: 16, display: "grid", gap: 4 }} aria-label="Menu mobile">
            {([
              ["features", "Fonctionnalités"],
              ["platforms", "Plateformes"],
            ] as const).map(([key, label]) => (
              <div key={key}>
                <button
                  className="cr-nav-link"
                  style={{ width: "100%", justifyContent: "space-between", fontSize: 16 }}
                  aria-expanded={mobileSection === key}
                  onClick={() => setMobileSection(mobileSection === key ? null : key)}
                >
                  {label} <ChevronDown size={18} aria-hidden="true" />
                </button>
                {mobileSection === key && (
                  <div style={{ display: "grid", gap: 2, padding: "4px 0 8px 12px" }}>
                    {key === "features"
                      ? featureItems.map((item) => (
                          <Link key={item.href} href={item.href} className="cr-menu-item" onClick={() => setIsOpen(false)}>
                            <item.icon size={18} aria-hidden="true" /> {item.name}
                          </Link>
                        )).concat(
                          <Link key="business" href="/pricing" className="cr-menu-item" style={{ color: "var(--violet-600)", fontWeight: 600 }} onClick={() => setIsOpen(false)}>
                            Vous gérez plusieurs clients ? Offre Business <ArrowRight size={16} aria-hidden="true" />
                          </Link>
                        )
                      : platformItems.map((item) => (
                          <Link key={item.name} href="/plateformes" className="cr-menu-item" onClick={() => setIsOpen(false)}>
                            <NetworkLogo name={item.logo} size={18} /> {item.name}
                          </Link>
                        ))}
                  </div>
                )}
              </div>
            ))}
            <Link className="cr-nav-link" style={{ fontSize: 16 }} href="/pricing" onClick={() => setIsOpen(false)}>Tarifs</Link>
            <Link className="cr-nav-link" style={{ fontSize: 16 }} href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
            <div style={{ display: "grid", gap: 8, marginTop: 16 }}>
              <a className="cr-btn cr-btn--secondary cr-btn--block" href={`${APP_URL}/sign-in`}>Se connecter</a>
              <a className="cr-btn cr-btn--primary cr-btn--block" href={`${APP_URL}/sign-up`}>Et c&apos;est gratuit</a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
