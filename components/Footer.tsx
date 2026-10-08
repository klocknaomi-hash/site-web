import React from "react";
import Link from "next/link";
import NetworkLogo, { NetworkName } from "@/components/NetworkLogo";

// Pied de page du design system Creatabl.ia, sur fond violet foncé.
const APP_URL = "https://app.creatabl-ia.com";

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Produit",
    links: [
      { label: "Création IA", href: "/fonctionnalites/creation" },
      { label: "Planification", href: "/fonctionnalites/planification" },
      { label: "Analytics", href: "/fonctionnalites/analytics" },
      { label: "Agent IA", href: "/fonctionnalites/agent-ia" },
      { label: "Tarifs", href: "/tarifs" },
    ],
  },
  {
    title: "Réseaux",
    links: [
      { label: "Instagram", href: "/plateformes" },
      { label: "LinkedIn", href: "/plateformes" },
      { label: "Facebook", href: "/plateformes" },
      { label: "TikTok", href: "/plateformes" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Guides", href: "/guides" },
      { label: "Roadmap", href: "/roadmap" },
      { label: "Questions fréquentes", href: "/#faq" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Support", href: "/contact" },
      { label: "Essai gratuit", href: `${APP_URL}/sign-up` },
    ],
  },
];

// Comptes Creatabl.ia : une icône n'apparaît que si son adresse est renseignée
// (variables d'environnement Vercel), pour ne jamais afficher de lien vide.
const SOCIAL_URLS: Partial<Record<NetworkName, string | undefined>> = {
  instagram: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM,
  facebook: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK,
  linkedin: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN,
  tiktok: process.env.NEXT_PUBLIC_SOCIAL_TIKTOK,
};
const socials = (Object.entries(SOCIAL_URLS) as [NetworkName, string | undefined][]).filter(
  (entry): entry is [NetworkName, string] => Boolean(entry[1])
);
const SOCIAL_LABELS: Partial<Record<NetworkName, string>> = { instagram: "Instagram", facebook: "Facebook", linkedin: "LinkedIn", tiktok: "TikTok" };

const legal = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Confidentialité", href: "/confidentialite" },
  { label: "CGU", href: "/cgu" },
  { label: "Cookies", href: "/confidentialite" },
];

export default function Footer() {
  return (
    <footer className="cr-footer cr-footer--violet">
      <div className="cr-container">
        <div className="cr-footer-top">
          <div style={{ display: "grid", gap: 16, alignContent: "start" }}>
            <Link href="/" className="cr-wordmark cr-wordmark--light" style={{ fontSize: 22 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={process.env.NEXT_PUBLIC_LOGO_URL || "/logo.png"} alt="" width={28} height={28} />
              <span>Creatabl.<i>ia</i></span>
            </Link>
            <p style={{ maxWidth: "32ch" }}>
              La plateforme française pour créer, planifier et analyser vos réseaux sociaux avec l&apos;IA.
            </p>
            {socials.length > 0 && (
              <div className="cr-footer-social">
                {socials.map(([n, url]) => (
                  <a key={n} href={url} target="_blank" rel="noopener noreferrer" aria-label={`Creatabl.ia sur ${SOCIAL_LABELS[n] ?? n}`}>
                    <NetworkLogo name={n} size={16} mono />
                  </a>
                ))}
              </div>
            )}
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h5>{col.title}</h5>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="cr-footer-bottom">
          <span>© 2026 Creatabl.ia · Hébergé en France</span>
          <span style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {legal.map((l) => (
              <Link key={l.label} href={l.href}>{l.label}</Link>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
