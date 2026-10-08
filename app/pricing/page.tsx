"use client";

import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import PricingCards from "@/components/ds/PricingCards";
import Faq from "@/components/ds/Faq";

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0">
    <circle cx="9" cy="9" r="9" fill="rgba(114,37,227,0.12)" />
    <path d="M5.5 9L8 11.5L12.5 7" stroke="#7225E3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CrossIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0">
    <circle cx="9" cy="9" r="9" fill="rgba(243,244,246,1)" />
    <path d="M6.5 11.5L11.5 6.5M6.5 6.5L11.5 11.5" stroke="#6B6780" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/* ─── Data ─── */

const faqs = [
  {
    question: "Comment fonctionnent les crédits ?",
    answer: "Chaque plan inclut un nombre de crédits par mois : 1 crédit = 1 post programmé ou publié, quel que soit le nombre de réseaux sur lesquels il part. Les brouillons ne consomment rien. Vos crédits se renouvellent le 1er de chaque mois.",
  },
  {
    question: "Puis-je annuler à tout moment ?",
    answer: "Oui, sans engagement sur les plans mensuels. Vous conservez l'accès jusqu'à la fin de votre période payée. Sur les plans annuels, l'engagement est de 12 mois avec 20% de réduction.",
  },
  {
    question: "Mes données sont-elles sécurisées ?",
    answer: "Oui. Toutes vos données et vos tokens d'accès aux réseaux sociaux sont chiffrés (AES-256) en base de données. Nous respectons le RGPD et nous ne partageons jamais vos données. Vous pouvez supprimer votre compte à tout moment.",
  },
  {
    question: "Combien de temps pour créer mon premier post ?",
    answer: "Moins de 3 minutes. Après votre inscription, vous connectez vos réseaux sociaux en un clic et vous générez votre premier post avec l'IA. Un tutoriel de démarrage vous guide.",
  },
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
    question: "Quelle est la différence entre les plans Free, Starter, Pro et Business ?",
    answer: "Le plan Free est permanent avec 20 crédits par mois. Le Starter convient aux solopreneurs (50 crédits). Le Pro est idéal pour les créateurs actifs (120 crédits, IA illimitée). Le Business s'adresse aux agences (300 crédits, multi-comptes, équipes). 1 crédit = 1 post programmé ou publié ; les brouillons sont gratuits.",
  },
  {
    question: "Y a-t-il une période d'essai gratuite ?",
    answer: "Oui ! Vous bénéficiez de 14 jours d'essai gratuit avec carte bancaire obligatoire sur les plans payants, ou du plan Free permanent sans carte.",
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
    answer: "Oui, des analytics essentiels sont inclus dès le plan Free et Starter. Les plans Pro et Business offrent des analytics avancés avec comparaisons et suggestions d'optimisation.",
  },
  {
    question: "Comment est sécurisé mon paiement ?",
    answer: "Les paiements sont traités par Stripe, solution certifiée PCI-DSS. Vos données bancaires ne sont jamais stockées sur nos serveurs.",
  },
];

/* ─── Comparison table rows ─── */
type CellValue = "check" | "cross" | "soon" | string;
const comparisonRows: { label: string; free: CellValue; starter: CellValue; pro: CellValue; business: CellValue }[] = [
  { label: "Posts / mois", free: "20", starter: "50", pro: "120", business: "300" },
  { label: "Engagement", free: "—", starter: "Sans engagement", pro: "Sans engagement", business: "Sans engagement" },
  { label: "Rédaction IA (basique)", free: "check", starter: "check", pro: "check", business: "check" },
  { label: "Rédaction IA (avancée)", free: "cross", starter: "cross", pro: "check", business: "check" },
  { label: "Reformuler & Tons IA", free: "cross", starter: "cross", pro: "check", business: "check" },
  { label: "Suggestions d'idées IA", free: "cross", starter: "cross", pro: "check", business: "check" },
  { label: "Agent IA (Tendances)", free: "cross", starter: "cross", pro: "cross", business: "check" },
  { label: "Calendrier éditorial", free: "check", starter: "check", pro: "check", business: "check" },
  { label: "Analytics", free: "Essentiels", starter: "Essentiels", pro: "Avancés", business: "Avancés" },
  { label: "Multi-comptes", free: "1 compte", starter: "1 compte", pro: "1 compte", business: "Jusqu'à 5" },
  { label: "Gestion équipe & rôles", free: "cross", starter: "cross", pro: "cross", business: "check" },
  { label: "Support client", free: "Communauté", starter: "Standard", pro: "Prioritaire", business: "Dédié" },
];

function renderCell(val: CellValue, isPro: boolean) {
  if (val === "check") return <CheckIcon />;
  if (val === "cross") return <CrossIcon />;
  return (
    <span style={{
      color: isPro ? "#7225E3" : "#4B4B63",
      fontSize: "13px",
      fontWeight: isPro ? 700 : 500,
      fontFamily: "var(--font-inter)",
    }}>{val}</span>
  );
}

const getEngagementLabel = (planName: string, billingState: "monthly" | "yearly") => {
  if (planName === "Free") return "Sans engagement";
  return billingState === "monthly" ? "Sans engagement" : "Avec engagement — 12 mois";
};

export default function PricingPage() {
  // Le tableau comparatif affiche l'engagement de la formule mensuelle.
  const billing: "monthly" | "yearly" = "monthly";

  return (
    <div className="relative bg-white pt-24" style={{ overflowX: "hidden" }}>

      {/* ─── EN-TÊTE ET CARTES (PricingCard du design system) ─── */}
      <section className="cr-section" style={{ paddingTop: 48 }}>
        <div className="cr-container">
          <div className="cr-section-head cr-section-head--center">
            <span className="cr-overline">Tarifs</span>
            <h1 className="hp-h2" style={{ fontSize: "clamp(32px, 6vw, 56px)", lineHeight: 1.14 }}>
              Prêt à gagner du <span className="cr-accent">temps</span> ?
            </h1>
            <p>Choisissez l&apos;offre qui correspond à vos besoins. 1 crédit = 1 post programmé ou publié.</p>
          </div>
          <PricingCards />
          <p className="cr-subtle" style={{ fontSize: 13, textAlign: "center", marginTop: 40 }}>
            Paiement sécurisé par Stripe
          </p>
        </div>
      </section>

      {/* ─── COMPARISON TABLE ─── */}
      <section className="w-full py-20" style={{ background: "#F8F7FC", borderTop: "1px solid #E8E6F0", borderBottom: "1px solid #E8E6F0" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px" }}>
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="font-outfit font-bold text-[13px] text-[#7225E3] uppercase tracking-widest mb-3">
                Comparatif
              </p>
              <h2 className="font-outfit font-bold text-[#14121F]"
                style={{ fontSize: "clamp(22px, 3vw, 32px)" }}>
                Ce qui est inclus dans chaque plan
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div style={{ overflowX: "auto" }} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-2">
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "640px" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid #E8E6F0" }}>
                    <th style={{ textAlign: "left", padding: "16px", color: "#6B6780", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", width: "36%", fontFamily: "var(--font-outfit)" }}>
                      Fonctionnalité
                    </th>
                    <th style={{ textAlign: "center", padding: "16px", color: "#4B4B63", fontSize: "14px", fontWeight: 700, fontFamily: "var(--font-outfit)" }}>Free</th>
                    <th style={{ textAlign: "center", padding: "16px", color: "#4B4B63", fontSize: "14px", fontWeight: 700, fontFamily: "var(--font-outfit)" }}>Starter</th>
                    <th style={{ textAlign: "center", padding: "16px", color: "#7225E3", fontSize: "14px", fontWeight: 700, fontFamily: "var(--font-outfit)" }}>Pro ✦</th>
                    <th style={{ textAlign: "center", padding: "16px", color: "#4B4B63", fontSize: "14px", fontWeight: 700, fontFamily: "var(--font-outfit)" }}>Business</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => {
                    const isEngagement = row.label === "Engagement";
                    const freeVal = isEngagement ? "—" : row.free;
                    const starterVal = isEngagement ? getEngagementLabel("Starter", billing) : row.starter;
                    const proVal = isEngagement ? getEngagementLabel("Pro", billing) : row.pro;
                    const businessVal = isEngagement ? getEngagementLabel("Business", billing) : row.business;

                    return (
                      <tr
                        key={row.label}
                        style={{
                          background: i % 2 === 0 ? "rgba(249, 250, 251, 0.7)" : "transparent",
                          borderTop: "1px solid #E8E6F0",
                        }}
                      >
                        <td style={{ padding: "14px 16px", color: "#4B4B63", fontSize: "14px", fontWeight: 500, fontFamily: "var(--font-inter)" }}>
                          {row.label}
                        </td>
                        <td style={{ textAlign: "center", padding: "14px 16px" }}>
                          {renderCell(freeVal, false)}
                        </td>
                        <td style={{ textAlign: "center", padding: "14px 16px" }}>
                          {renderCell(starterVal, false)}
                        </td>
                        <td style={{ textAlign: "center", padding: "14px 16px", background: "rgba(114,37,227,0.04)" }}>
                          {renderCell(proVal, true)}
                        </td>
                        <td style={{ textAlign: "center", padding: "14px 16px" }}>
                          {renderCell(businessVal, false)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── FAQ (Accordion du design system) ─── */}
      <section className="cr-section cr-section--tint">
        <div className="cr-container hp-faq">
          <div className="cr-section-head" style={{ alignContent: "start" }}>
            <span className="cr-overline">FAQ</span>
            <h2 className="hp-h2">Questions fréquentes</h2>
            <p>Tout ce que vous devez savoir sur Creatabl.</p>
          </div>
          <Faq items={faqs} />
        </div>
      </section>

      {/* ─── CONTACT BANNER ─── */}
      <section className="w-full pb-24" style={{ background: "#FFFFFF" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px" }}>
          <ScrollReveal delay={100}>
            <div
              className="text-center"
              style={{
                background: "#F8F7FC",
                border: "1px solid #E8E6F0",
                borderRadius: "12px",
                padding: "56px 40px",
              }}
            >
              <h2 className="font-outfit font-bold text-[#14121F] text-[22px] mb-3">
                Une question avant de vous lancer ?
              </h2>
              <p className="font-inter text-[#6B6780] text-[15px] mb-8">
                Notre équipe est disponible pour répondre à toutes vos questions.
              </p>
              <a
                id="contact-cta"
                href="https://app.creatabl-ia.com/sign-up?plan=free"
                className="font-inter font-medium text-[14px] text-[#4B4B63] transition-all duration-200 hover:bg-[#F8F7FC] inline-flex items-center gap-2"
                style={{
                  border: "1.5px solid #E8E6F0",
                  borderRadius: "50px",
                  padding: "12px 28px",
                }}
              >
                Tester sans engagement →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
