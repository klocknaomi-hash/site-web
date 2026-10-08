// Plans affichés sur le site (accueil et /pricing). Garder aligné avec
// lib/plans/limits.ts de la plateforme : 1 crédit = 1 post programmé ou publié.
const APP_URL = "https://app.creatabl-ia.com";

export type Plan = {
  id: "free" | "starter" | "pro" | "business";
  name: string;
  tagline: string;
  price: { monthly: number; yearly: number };
  subtext: string;
  credits: number;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
  footerText: string;
};

export const PLANS: Plan[] = [
  {
    id: "free",
    name: "Free",
    tagline: "Pour découvrir Creatabl sans engagement.",
    price: { monthly: 0, yearly: 0 },
    subtext: "Pour toujours",
    credits: 20,
    features: ["Calendrier éditorial", "Assistant IA basique"],
    cta: "Commencer gratuitement",
    href: `${APP_URL}/sign-up?plan=free`,
    footerText: "Sans engagement",
  },
  {
    id: "starter",
    name: "Starter",
    tagline: "Pour les solopreneurs qui démarrent.",
    price: { monthly: 49, yearly: 39 },
    subtext: "Par utilisateur et par mois",
    credits: 50,
    features: ["Assistant IA de rédaction (limité)", "Calendrier éditorial", "Analytics essentiels"],
    cta: "Essayer Starter",
    href: `${APP_URL}/sign-up?plan=starter`,
    footerText: "14 jours gratuits",
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "Pour les créateurs actifs qui veulent grandir.",
    price: { monthly: 99, yearly: 79 },
    subtext: "Par utilisateur et par mois",
    credits: 120,
    features: ["Tout du Starter", "Assistant IA de rédaction (illimité)", "Suggestions d'idées IA", "Analytics avancés"],
    cta: "Essayer Pro",
    href: `${APP_URL}/sign-up?plan=pro`,
    featured: true,
    footerText: "14 jours gratuits",
  },
  {
    id: "business",
    name: "Business",
    tagline: "Pour les agences et équipes marketing.",
    price: { monthly: 199, yearly: 159 },
    subtext: "Par utilisateur et par mois",
    credits: 300,
    features: ["Tout le plan Pro", "Multi-comptes (jusqu'à 5)", "Gestion équipe + rôles", "Agent IA (Tendances)"],
    cta: "Essayer Business",
    href: `${APP_URL}/sign-up?plan=business`,
    footerText: "14 jours gratuits",
  },
];
