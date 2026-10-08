import React from "react";
import Link from "next/link";
import NetworkLogo, { NetworkName } from "@/components/NetworkLogo";
import { Wordmark } from "@/components/Navbar";

// Pied de page du site : composant Footer du design system Creatabl.ia.
const APP_URL = "https://app.creatabl-ia.com";

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Produit",
    links: [
      { label: "Fonctionnalités", href: "/fonctionnalites" },
      { label: "Plateformes", href: "/plateformes" },
      { label: "Tarifs", href: "/pricing" },
      { label: "Essai gratuit", href: `${APP_URL}/sign-up` },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Guides", href: "/guides" },
      { label: "Roadmap", href: "/roadmap" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "Mentions légales", href: "/mentions-legales" },
      { label: "CGU", href: "/cgu" },
      { label: "Confidentialité", href: "/confidentialite" },
    ],
  },
];

const socials: { name: NetworkName; label: string }[] = [
  { name: "instagram", label: "Instagram" },
  { name: "linkedin", label: "LinkedIn" },
  { name: "tiktok", label: "TikTok" },
];

export default function Footer() {
  return (
    <footer className="cr-footer">
      <div className="cr-container">
        <div className="cr-footer-top" style={{ gridTemplateColumns: "1.6fr repeat(3, 1fr)" }}>
          <div style={{ display: "grid", gap: 16, alignContent: "start" }}>
            <Link href="/" aria-label="Creatabl.ia, accueil">
              <Wordmark light />
            </Link>
            <p style={{ maxWidth: "32ch" }}>
              La plateforme française pour créer, planifier et analyser vos réseaux sociaux avec l&apos;IA.
            </p>
            <div className="cr-footer-social">
              {socials.map((s) => (
                <a key={s.name} href="#" aria-label={s.label}>
                  <NetworkLogo name={s.name} size={16} mono />
                </a>
              ))}
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h5>{col.title}</h5>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.href.startsWith("http") ? <a href={l.href}>{l.label}</a> : <Link href={l.href}>{l.label}</Link>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="cr-footer-bottom">
          <span>© 2026 Creatabl.ia · Tous droits réservés</span>
          <span style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/cgu">CGU</Link>
            <Link href="/confidentialite">Confidentialité</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
