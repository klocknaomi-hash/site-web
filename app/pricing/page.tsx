"use client";

import React, { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

/* ─── Social network icon SVGs ─── */
const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#0A66C2" }}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#E1306C" }}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#1877F2" }}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);
const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#111827" }}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.717-8.813L1.671 2.25H8.12l4.266 5.64 5.858-5.64zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const TikTokIcon = ({ muted }: { muted?: boolean }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: muted ? "#D1D5DB" : "#111827" }}>
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.74a4.84 4.84 0 01-1.01-.05z" />
  </svg>
);
const YouTubeIcon = ({ muted }: { muted?: boolean }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: muted ? "#D1D5DB" : "#FF0000" }}>
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);
const PinterestIcon = ({ muted }: { muted?: boolean }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: muted ? "#D1D5DB" : "#E60023" }}>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
  </svg>
);

/* ─── Check / Cross SVG icons ─── */
const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="9" fill="rgba(114,37,227,0.12)" />
    <path d="M5.5 9L8 11.5L12.5 7" stroke="#7225E3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const CrossIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="9" fill="rgba(255,255,255,0.04)" />
    <path d="M6.5 11.5L11.5 6.5M6.5 6.5L11.5 11.5" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const SoonBadge = () => (
  <span style={{
    fontSize: "10px", fontWeight: 700, color: "#D97706",
    background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.3)",
    borderRadius: "20px", padding: "2px 8px", display: "inline-block",
    fontFamily: "var(--font-outfit)",
  }}>Bientôt</span>
);

/* ─── Data ─── */
const plans = [
  {
    name: "Starter",
    tagline: "Pour les solopreneurs qui démarrent",
    price: { monthly: 49, yearly: 39 },
    postsPerMonth: "30 posts / mois",
    features: [
      "Assistant IA de rédaction (limité)",
      "Calendrier éditorial",
      "Analytics essentiels",
    ],
    cta: "Essayer Starter — 7j gratuits",
    popular: false,
    ctaStyle: "outline" as const,
    href: "https://app.creatabl-ia.com/sign-up?plan=starter",
  },
  {
    name: "Pro",
    tagline: "Pour les créateurs actifs qui veulent scaler",
    price: { monthly: 99, yearly: 79 },
    postsPerMonth: "120 posts / mois",
    features: [
      "Tout du Starter",
      "Assistant IA de rédaction (illimité)",
      "Suggestions d'idées IA",
      "Analytics avancés",
    ],
    cta: "Essayer Pro — 7j gratuits",
    popular: true,
    ctaStyle: "primary" as const,
    href: "https://app.creatabl-ia.com/sign-up?plan=pro",
  },
  {
    name: "Business",
    tagline: "Pour les agences et équipes marketing",
    price: { monthly: 199, yearly: 159 },
    postsPerMonth: "Illimité",
    features: [
      "Tout le plan Pro",
      "Multi-comptes (jusqu'à 5)",
      "Gestion équipe + rôles",
      "Agent IA",
    ],
    cta: "Essayer Business — 7j gratuits",
    popular: false,
    ctaStyle: "dark" as const,
    href: "https://app.creatabl-ia.com/sign-up?plan=business",
  },
];

const faqs = [
  {
    question: "Comment fonctionne Creatabl concrètement ?",
    answer: "Vous connectez vos réseaux sociaux, rédigez votre contenu, l'IA l'améliore et vous planifiez sa publication. Tout se passe depuis une seule interface simple et intuitive.",
  },
  {
    question: "Est-ce que je peux personnaliser mon style d'écriture ?",
    answer: "Oui, Creatabl apprend votre ton et votre style au fil du temps. Vous pouvez aussi définir manuellement des préférences de rédaction pour chaque réseau.",
  },
  {
    question: "Sur quels réseaux sociaux puis-je publier ?",
    answer: "Actuellement LinkedIn, Instagram, Facebook et X. TikTok, YouTube et Pinterest arrivent bientôt sur notre roadmap.",
  },
  {
    question: "Est-ce que je dois être expert en rédaction pour utiliser Creatabl ?",
    answer: "Pas du tout. Creatabl est conçu pour tout le monde : vous décrivez votre idée et l'IA génère un post optimisé pour chaque réseau.",
  },
  {
    question: "Quelle est la différence entre les plans Starter, Pro et Business ?",
    answer: "Le Starter convient aux solopreneurs (30 posts/mois, IA limitée). Le Pro est pour les créateurs actifs (120 posts, IA illimitée). Le Business est pour les agences (multi-comptes, équipes, agent IA).",
  },
  {
    question: "Y a-t-il une période d'essai gratuite ?",
    answer: "Oui ! Vous bénéficiez de 7 jours d'essai gratuit, sans carte bancaire requise, sur tous nos plans.",
  },
  {
    question: "Puis-je programmer mes publications à l'avance ?",
    answer: "Oui, le calendrier éditorial vous permet de planifier vos publications sur 30 jours et de visualiser toute votre stratégie de contenu.",
  },
  {
    question: "Que se passe-t-il si je dépasse mon quota mensuel de posts ?",
    answer: "Vous recevez une notification avant d'atteindre la limite. Vous pouvez upgrader votre plan à tout moment pour continuer sans interruption.",
  },
  {
    question: "Est-ce que Creatabl analyse mes performances ?",
    answer: "Oui, des analytics essentiels sont inclus dès le Starter. Le plan Pro et Business offrent des analytics avancés avec comparaisons et suggestions d'optimisation.",
  },
  {
    question: "Comment est sécurisé mon paiement ?",
    answer: "Les paiements sont traités par Paddle, solution certifiée PCI-DSS. Vos données bancaires ne sont jamais stockées sur nos serveurs.",
  },
];

/* ─── Comparison table rows ─── */
type CellValue = "check" | "cross" | "soon" | string;
const comparisonRows: { label: string; starter: CellValue; pro: CellValue; business: CellValue }[] = [
  { label: "Posts / mois", starter: "30", pro: "120", business: "Illimité" },
  { label: "Réseaux disponibles", starter: "LinkedIn · IG · FB · X", pro: "LinkedIn · IG · FB · X", business: "LinkedIn · IG · FB · X" },
  { label: "TikTok · YouTube · Pinterest", starter: "soon", pro: "soon", business: "soon" },
  { label: "Rédaction IA", starter: "Limitée", pro: "Illimitée", business: "Illimitée" },
  { label: "Suggestions d'idées", starter: "cross", pro: "check", business: "check" },
  { label: "Agent IA", starter: "cross", pro: "cross", business: "check" },
  { label: "Calendrier éditorial", starter: "check", pro: "check", business: "check" },
  { label: "Analytics", starter: "Essentiels", pro: "Avancés", business: "Avancés" },
  { label: "Multi-comptes", starter: "cross", pro: "cross", business: "Jusqu'à 5" },
  { label: "Gestion équipe + rôles", starter: "cross", pro: "cross", business: "check" },
];

function renderCell(val: CellValue, isPro: boolean) {
  if (val === "check") return <CheckIcon />;
  if (val === "cross") return <CrossIcon />;
  if (val === "soon") return <SoonBadge />;
  return (
    <span style={{
      color: isPro ? "#7225E3" : "#9CA3AF",
      fontSize: "13px",
      fontWeight: isPro ? 600 : 500,
      fontFamily: "var(--font-inter)",
    }}>{val}</span>
  );
}

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="relative bg-white pt-24" style={{ overflowX: "hidden" }}>

      {/* ─── HERO ─── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4 text-center">
        <ScrollReveal>
          <p className="font-outfit font-semibold text-[#7225E3] uppercase tracking-widest text-[12px] mb-4">
            Tarifs
          </p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h1 className="font-outfit font-bold text-[#111827] leading-tight mb-4"
            style={{ fontSize: "clamp(32px, 6vw, 52px)" }}>
            Prêt à gagner du temps ?
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={160}>
          <p className="font-inter text-[#6B7280] text-[15px] mb-10">
            Choisissez l&apos;offre qui correspond à vos besoins. 7 jours gratuits, sans carte.
          </p>
        </ScrollReveal>

        {/* Toggle mensuel / annuel */}
        <ScrollReveal delay={220}>
          <div className="flex justify-center mb-14">
            <div style={{
              background: "#F3F4F6",
              borderRadius: "40px",
              padding: "4px",
              display: "flex",
              gap: 0,
            }}>
              <button
                id="toggle-monthly"
                onClick={() => setBilling("monthly")}
                className="font-inter font-medium text-[14px] transition-all duration-300"
                style={{
                  padding: "8px 20px",
                  borderRadius: "36px",
                  border: "none",
                  cursor: "pointer",
                  background: billing === "monthly" ? "#FFFFFF" : "transparent",
                  color: billing === "monthly" ? "#111827" : "#9CA3AF",
                  boxShadow: billing === "monthly" ? "0 1px 4px rgba(0,0,0,0.08)" : "none",
                }}
              >
                Mensuel
              </button>
              <button
                id="toggle-yearly"
                onClick={() => setBilling("yearly")}
                className="font-inter font-medium text-[14px] transition-all duration-300 flex items-center gap-2"
                style={{
                  padding: "8px 20px",
                  borderRadius: "36px",
                  border: "none",
                  cursor: "pointer",
                  background: billing === "yearly" ? "#FFFFFF" : "transparent",
                  color: billing === "yearly" ? "#111827" : "#9CA3AF",
                  boxShadow: billing === "yearly" ? "0 1px 4px rgba(0,0,0,0.08)" : "none",
                }}
              >
                Annuel
                <span className="font-outfit font-bold text-[13px] text-white px-2 py-0.5 rounded-full"
                  style={{ background: "#7225E3" }}>
                  -20%
                </span>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── PRICING CARDS ─── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, idx) => (
            <ScrollReveal key={plan.name} delay={idx * 100}>
              <div
                className="relative flex flex-col h-full"
                style={{
                  background: "#FFFFFF",
                  border: plan.popular ? "2px solid #7225E3" : "1.5px solid #E5E7EB",
                  borderRadius: "20px",
                  padding: "32px",
                  boxShadow: plan.popular
                    ? "0 0 0 1px rgba(114,37,227,0.18), 0 12px 40px rgba(114,37,227,0.15)"
                    : "0 0 0 1px rgba(114,37,227,0.05), 0 8px 32px rgba(114,37,227,0.06)",
                  transition: "all 0.3s ease",
                }}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 -top-3.5 font-outfit font-semibold text-white text-[13px] px-4 py-1.5 rounded-full whitespace-nowrap"
                    style={{ background: "#7225E3" }}
                  >
                    Le plus populaire
                  </div>
                )}

                {/* Plan header */}
                <div className="mb-6">
                  <h3 className="font-outfit font-bold text-[20px] text-[#111827] mb-1">{plan.name}</h3>
                  <p className="font-playfair italic text-[#7225E3] text-[13px] mb-4">{plan.tagline}</p>
                  <div className="flex flex-col gap-1">
                    <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                      <span className="font-outfit font-extrabold text-[#111827]" style={{ fontSize: "36px", lineHeight: 1 }}>
                        {billing === "monthly" ? plan.price.monthly : plan.price.yearly}€
                      </span>
                      <span className="font-inter text-[#6B7280] text-[14px]">/mois</span>
                    </div>
                    {billing === "yearly" && (
                      <div className="flex flex-col">
                        <span className="font-inter text-[#9CA3AF] text-[14px] line-through">
                          {plan.price.monthly}€/mois
                        </span>
                        <span className="font-inter text-[#9CA3AF] text-[12px] mt-1">
                          par utilisateur · facturé {plan.price.yearly * 12}€/an
                        </span>
                      </div>
                    )}
                    {billing === "monthly" && (
                      <p className="font-inter text-[#9CA3AF] text-[12px] mt-1">par utilisateur et par mois</p>
                    )}
                  </div>
                </div>

                {/* Posts + networks */}
                <div className="mb-5 flex-1">
                  <p className="font-inter font-semibold text-[#6B7280] text-[12px] uppercase tracking-wider mb-2">
                    Génération de posts
                  </p>
                  <div className="flex items-center gap-2 font-inter text-[#374151] text-[14px] mb-4">
                    <span className="font-bold text-[#16A34A]">✓</span>
                    {plan.postsPerMonth}
                  </div>

                  <p className="font-inter font-semibold text-[#6B7280] text-[12px] uppercase tracking-wider mb-3">
                    Fonctionnalités
                  </p>

                  {/* Social icons row */}
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    <LinkedInIcon />
                    <InstagramIcon />
                    <FacebookIcon />
                    <XIcon />
                    <TikTokIcon muted />
                    <YouTubeIcon muted />
                    <PinterestIcon muted />
                  </div>

                  {/* Feature list */}
                  <ul className="space-y-2">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 font-inter text-[#374151] text-[14px]">
                        <span className="font-bold text-[#16A34A] flex-shrink-0">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a
                  id={`cta-plan-${plan.name.toLowerCase()}`}
                  href={plan.href}
                  className="font-inter font-semibold text-[14px] text-center py-3 px-6 rounded-full transition-all duration-200 hover:-translate-y-0.5 block"
                  style={
                    plan.ctaStyle === "primary"
                      ? { background: "linear-gradient(135deg, #8A38F5 0%, #7225E3 100%)", color: "#FFFFFF", border: "none", boxShadow: "0 4px 18px rgba(114,37,227,0.3)" }
                      : plan.ctaStyle === "dark"
                      ? { background: "#111827", color: "#FFFFFF", border: "none" }
                      : { background: "transparent", border: "1.5px solid #7225E3", color: "#7225E3" }
                  }
                >
                  {plan.cta}
                </a>
                <div className="text-center mt-2 flex flex-col gap-0.5">
                  <p className="font-inter text-[#9CA3AF] text-[12px]">
                    Essai gratuit 7 jours · Sans carte bancaire
                  </p>
                  {billing === "yearly" && (
                    <p className="font-inter text-[#9CA3AF] text-[12px] font-medium">
                      Soit {plan.price.yearly * 12}€ facturés en une fois par an
                    </p>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Secure payment note */}
        <ScrollReveal delay={400}>
          <p className="font-inter text-[#9CA3AF] text-[13px] text-center mt-8">
            Paiement sécurisé par Paddle
          </p>
        </ScrollReveal>
      </section>

      {/* ─── COMPARISON TABLE ─── */}
      <section className="w-full py-20" style={{ background: "#F9FAFB", borderTop: "1px solid #F3F4F6", borderBottom: "1px solid #F3F4F6" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px" }}>
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="font-outfit font-bold text-[13px] text-[#7225E3] uppercase tracking-widest mb-3">
                Comparatif
              </p>
              <h2 className="font-outfit font-bold text-[#111827]"
                style={{ fontSize: "clamp(22px, 3vw, 32px)" }}>
                Ce qui est inclus dans chaque plan
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "540px" }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: "left", padding: "12px 16px", color: "#9CA3AF", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", width: "40%", fontFamily: "var(--font-outfit)" }}>
                      Fonctionnalité
                    </th>
                    <th style={{ textAlign: "center", padding: "12px 16px", color: "#374151", fontSize: "14px", fontWeight: 700, fontFamily: "var(--font-outfit)" }}>Starter</th>
                    <th style={{ textAlign: "center", padding: "12px 16px", color: "#7225E3", fontSize: "14px", fontWeight: 700, fontFamily: "var(--font-outfit)" }}>Pro ✦</th>
                    <th style={{ textAlign: "center", padding: "12px 16px", color: "#374151", fontSize: "14px", fontWeight: 700, fontFamily: "var(--font-outfit)" }}>Business</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={row.label}
                      style={{
                        background: i % 2 === 0 ? "rgba(114,37,227,0.02)" : "transparent",
                        borderTop: "1px solid #F3F4F6",
                      }}
                    >
                      <td style={{ padding: "14px 16px", color: "#6B7280", fontSize: "14px", fontFamily: "var(--font-inter)" }}>
                        {row.label}
                      </td>
                      <td style={{ textAlign: "center", padding: "14px 16px" }}>
                        {renderCell(row.starter, false)}
                      </td>
                      <td style={{ textAlign: "center", padding: "14px 16px", background: "rgba(114,37,227,0.04)" }}>
                        {renderCell(row.pro, true)}
                      </td>
                      <td style={{ textAlign: "center", padding: "14px 16px" }}>
                        {renderCell(row.business, false)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="w-full py-24" style={{ background: "#FFFFFF" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px" }}>
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="font-outfit font-semibold text-[#111827] mb-3"
                style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}>
                Questions fréquentes
              </h2>
              <p className="font-inter text-[#6B7280] text-[16px]">
                Tout ce que vous devez savoir sur Creatabl.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div>
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div
                    key={index}
                    style={{ borderBottom: "1px solid #F3F4F6", padding: "20px 0" }}
                  >
                    <button
                      id={`faq-${index}`}
                      onClick={() => setActiveFaq(isOpen ? null : index)}
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        cursor: "pointer",
                        background: "none",
                        border: "none",
                        padding: 0,
                        textAlign: "left",
                      }}
                    >
                      <span
                        className="font-outfit"
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: isOpen ? "#7225E3" : "#111827",
                          transition: "color 0.2s",
                        }}
                      >
                        {faq.question}
                      </span>
                      <span
                        style={{
                          color: "#7225E3",
                          fontSize: "22px",
                          fontWeight: 400,
                          marginLeft: "16px",
                          flexShrink: 0,
                          display: "inline-block",
                          transition: "transform 0.25s",
                          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                          lineHeight: 1,
                          width: "24px",
                          height: "24px",
                          textAlign: "center",
                        }}
                      >
                        +
                      </span>
                    </button>
                    <div
                      style={{
                        maxHeight: isOpen ? "300px" : "0px",
                        overflow: "hidden",
                        transition: "max-height 0.3s ease-in-out",
                      }}
                    >
                      <p
                        className="font-inter"
                        style={{
                          fontSize: "14px",
                          color: "#6B7280",
                          lineHeight: "1.75",
                          paddingTop: "12px",
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CONTACT BANNER ─── */}
      <section className="w-full pb-24" style={{ background: "#FFFFFF" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px" }}>
          <ScrollReveal delay={100}>
            <div
              className="text-center"
              style={{
                background: "#F9FAFB",
                border: "1.5px solid #F3F4F6",
                borderRadius: "20px",
                padding: "56px 40px",
              }}
            >
              <h2 className="font-outfit font-bold text-[#111827] text-[22px] mb-3">
                Une question avant de vous lancer ?
              </h2>
              <p className="font-inter text-[#6B7280] text-[15px] mb-8">
                Notre équipe est disponible pour répondre à toutes vos questions.
              </p>
              <a
                id="contact-cta"
                href="/contact"
                className="font-inter font-medium text-[14px] text-[#374151] transition-all duration-200 hover:bg-[#F3F4F6] inline-flex items-center gap-2"
                style={{
                  border: "1.5px solid #E5E7EB",
                  borderRadius: "50px",
                  padding: "12px 28px",
                }}
              >
                Nous contacter →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
