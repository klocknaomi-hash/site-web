"use client";

import React, { useEffect } from "react";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Link2,
  ShieldCheck,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

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

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.86 1.08 2.07 1.85 3.4 2.27V10.1c-1.74-.08-3.41-.78-4.73-1.92-.12-.1-.23-.21-.34-.32v7.71c.08 2.3-1.02 4.54-2.87 5.79-1.94 1.34-4.56 1.63-6.73.74-2.25-.91-3.86-3.14-4.05-5.58-.29-3.23 2.1-6.19 5.33-6.49 1.03-.1 2.08.09 3.02.55V3.86c-1.52-.42-3.13-.3-4.57.34-1.85.83-3.22 2.53-3.64 4.53-.52 2.44.25 5.06 1.96 6.84 1.76 1.84 4.4 2.5 6.87 1.7 2.19-.7 3.82-2.73 4.12-5.02.07-.5.08-1.01.07-1.51V.02z"/>
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

interface SocialPlatform {
  id: string;
  name: string;
  desc: string;
  longDesc: string;
  color: string;
  bgGradient: string;
  gradientLine: string;
  icon: React.ReactNode;
  features: string[];
}

export default function PlateformesPage() {
  useEffect(() => {
    // Force light background theme dynamically on body & html for this route
    const body = document.body;
    const html = document.documentElement;
    
    const originalBodyBg = body.style.backgroundColor;
    const originalBodyColor = body.style.color;
    
    body.style.backgroundColor = "#ffffff";
    body.style.color = "#0f172a";
    
    const isDark = html.classList.contains("dark");
    if (isDark) {
      html.classList.remove("dark");
      html.classList.add("light");
    }

    return () => {
      body.style.backgroundColor = originalBodyBg;
      body.style.color = originalBodyColor;
      if (isDark) {
        html.classList.remove("light");
        html.classList.add("dark");
      }
    };
  }, []);

  const socialPlatforms: SocialPlatform[] = [
    {
      id: "instagram",
      name: "Instagram",
      desc: "Reels, Stories & Carrousels",
      longDesc: "Valorisez votre identité visuelle. Programmez vos publications, vos Reels et vos Stories avec une prévisualisation mobile identique au rendu réel.",
      color: "#E1306C",
      bgGradient: "from-pink-500/10 to-rose-500/5",
      gradientLine: "from-[#E1306C] via-[#FD1D1D] to-[#F56040]",
      icon: <InstagramIcon className="w-8 h-8 text-[#E1306C]" />,
      features: [
        "Publication directe de Reels & Stories",
        "Grille de prévisualisation esthétique",
        "Statistiques détaillées en temps réel",
        "Recherche de hashtags géolocalisés"
      ]
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      desc: "Carrousels pro & Profils",
      longDesc: "Le réseau B2B par excellence pour engager vos prospects. Publiez des carrousels PDF pour maximiser votre portée et générer des leads.",
      color: "#0A66C2",
      bgGradient: "from-blue-500/10 to-indigo-500/5",
      gradientLine: "from-[#0A66C2] to-[#0077B5]",
      icon: <LinkedinIcon className="w-8 h-8 text-[#0A66C2]" />,
      features: [
        "Publication automatique de fichiers PDF",
        "Support des profils & pages entreprise",
        "Statistiques démographiques précises",
        "Éditeur de texte riche intégré"
      ]
    },
    {
      id: "tiktok",
      name: "TikTok",
      desc: "Vidéos verticales",
      longDesc: "Explosez votre visibilité organique. Envoyez vos vidéos courtes directement aux API TikTok et captez l'attention de votre audience.",
      color: "#000000",
      bgGradient: "from-slate-900/10 to-transparent",
      gradientLine: "from-[#000000] via-[#25F4EE] to-[#FE2C55]",
      icon: <TikTokIcon className="w-8 h-8 text-slate-900" />,
      features: [
        "Auto-publication de vidéos 9:16",
        "Aperçu mobile dynamique interactif",
        "Gestion des comptes créateurs & pros",
        "Optimisation des hashtags viraux"
      ]
    },
    {
      id: "facebook",
      name: "Facebook",
      desc: "Pages d'entreprise & Groupes",
      longDesc: "Fédérez et animez votre communauté locale. Centralisez la publication de vos images, vidéos et liens vers vos groupes et pages pro.",
      color: "#1877F2",
      bgGradient: "from-sky-500/10 to-blue-500/5",
      gradientLine: "from-[#1877F2] to-[#3b5998]",
      icon: <FacebookIcon className="w-8 h-8 text-[#1877F2]" />,
      features: [
        "Publication simultanée groupes & pages",
        "Rapports d'activité de votre audience",
        "Planification par fuseau horaire",
        "Centralisation des avis et réactions"
      ]
    },
    {
      id: "youtube",
      name: "YouTube",
      desc: "Shorts uniquement",
      longDesc: "Développez votre présence vidéo au format court. Planifiez et publiez vos YouTube Shorts verticaux de manière entièrement automatisée.",
      color: "#FF0000",
      bgGradient: "from-red-500/10 to-rose-500/5",
      gradientLine: "from-[#FF0000] to-[#CC0000]",
      icon: <YoutubeIcon className="w-8 h-8 text-[#FF0000]" />,
      features: [
        "Publication de Shorts automatisée",
        "Optimisation des titres & descriptions",
        "Suivi des statistiques des Shorts",
        "Planification aux heures d'audience"
      ]
    },
    {
      id: "x-twitter",
      name: "X (Twitter)",
      desc: "Tweets & Planification fine",
      longDesc: "Réagissez instantanément à l'actualité. Rédigez et planifiez vos tweets à la minute près pour engager votre audience.",
      color: "#0F1419",
      bgGradient: "from-slate-800/10 to-transparent",
      gradientLine: "from-[#0F1419] via-slate-850 to-neutral-900",
      icon: <TwitterIcon className="w-8 h-8 text-slate-900" />,
      features: [
        "Planificateur de tweets intuitif",
        "Support complet images, GIFs & vidéos",
        "Optimisation d'heures de postage",
        "Statistiques d'impressions en direct"
      ]
    }
  ];

  return (
    <div className="relative pt-28 pb-20 overflow-x-hidden bg-white text-slate-900">
      {/* Background glow effects */}
      <div className="absolute top-[20%] left-[-10%] w-[40%] aspect-square rounded-full bg-purple-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[40%] aspect-square rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-primary border border-purple-200/50 text-xs font-semibold mb-4">
            ⚡ TOUS VOS CANAUX CONNECTÉS
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight">
            Publiez en un clic sur toutes vos{" "}
            <span className="font-serif italic font-normal text-primary">plateformes</span>.
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mt-6">
            Découvrez comment Creatabl.ia unifie la diffusion de votre contenu. Configurez vos comptes une seule fois et laissez notre planificateur gérer le reste.
          </p>
        </ScrollReveal>
      </section>

      {/* Networks Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialPlatforms.map((platform) => (
            <ScrollReveal key={platform.id}>
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 space-y-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between h-full">
                {/* Custom top border brand line */}
                <div className={`absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r ${platform.gradientLine}`} />
                {/* Hover gradient background circle */}
                <div className={`absolute -right-20 -top-20 w-40 h-40 rounded-full bg-gradient-to-br ${platform.bgGradient} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="space-y-4 relative z-10">
                  <div className="flex justify-between items-center">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      {platform.icon}
                    </div>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1">
                      <ShieldCheck size={12} />
                      API Officielle
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-outfit text-slate-900 flex items-center gap-2">
                      {platform.name}
                    </h3>
                    <p className="text-xs text-primary font-semibold font-outfit">
                      {platform.desc}
                    </p>
                    <p className="text-sm text-slate-550 leading-relaxed pt-1">
                      {platform.longDesc}
                    </p>
                  </div>
                  
                  <div className="pt-2 space-y-2.5">
                    <span className="text-[13px] font-bold text-slate-700 uppercase tracking-wider block mb-2">
                      Fonctionnalités
                    </span>
                    <div className="space-y-2">
                      {platform.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 size={15} className="text-primary flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 relative z-10">
                  <a
                    href="https://app.creatabl-ia.com/sign-up"
                    className="w-full text-center py-2.5 px-4 rounded-xl border border-slate-200 text-xs font-bold transition-all flex items-center justify-center gap-1 group/btn"
                    style={{ 
                      background: "rgba(139, 92, 246, 0.05)",
                      color: "var(--color-primary)" 
                    }}
                  >
                    <span>Connecter {platform.name}</span>
                    <ArrowRight size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Grid detailing platform operations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Une architecture optimisée pour chaque réseau
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-4 leading-relaxed">
              Ne vous souciez plus des contraintes techniques de chaque réseau. Notre moteur intelligent de publication adapte automatiquement vos images et textes.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Multi-Posting Intelligent",
              desc: "Rédigez votre publication une seule fois, puis adaptez automatiquement le format (images, tags, caractères) pour chaque réseau cible.",
              features: [
                "Personnalisation du texte par réseau",
                "Recadrage d'images automatique",
                "Vérification des limites de caractères",
                "Génération intelligente de hashtags",
              ],
              icon: <Link2 className="w-6 h-6 text-primary" />,
            },
            {
              title: "Moteurs d'IA Intégrés",
              desc: "Optimisez la rédaction de vos accroches et de vos légendes en un clin d'œil avec ChatGPT-4 et Claude d'Anthropic natifs.",
              features: [
                "Adaptation du ton d'écriture",
                "Recherche d'angles marketing",
                "Générateur de listes à puces",
                "Traduction automatique multilingue",
              ],
              icon: <Sparkles className="w-6 h-6 text-[#CC9966]" />,
            },
            {
              title: "Sécurité & Robustesse",
              desc: "Vos données et jetons d'accès d'API sont cryptés. Nous utilisons l'infrastructure Supabase DB et Stripe.",
              features: [
                "Jetons d'accès API cryptés en continu",
                "Taux de réussite d'envoi de 99.9%",
                "Rapports d'envoi détaillés",
                "Politique stricte de confidentialité",
              ],
              icon: <ShieldCheck className="w-6 h-6 text-[#3ECF8E]" />,
            },
          ].map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 space-y-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-outfit text-slate-800">{item.title}</h3>
                  <p className="text-sm text-slate-555 leading-relaxed">{item.desc}</p>
                </div>
                <ul className="space-y-2.5 pt-2 border-t border-slate-100">
                  {item.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-600">
                      <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA section (Stunning Dark Premium Card on White Background) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-tr from-[#1E1B4B] to-[#311062] p-8 sm:p-12 md:p-16 text-center shadow-2xl border border-purple-900/40">
            <div className="absolute inset-0 radial-glow-cta opacity-60 pointer-events-none" />
            <div className="max-w-3xl mx-auto space-y-6 relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-outfit">
                Prêt à connecter vos comptes de réseaux sociaux ?
              </h2>
              <p className="text-sm sm:text-base text-purple-100 max-w-lg mx-auto leading-relaxed">
                Intégrez vos plateformes favorites en 2 clics et commencez à publier immédiatement.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a
                  href="https://app.creatabl-ia.com/sign-up"
                  className="w-full sm:w-auto text-center px-8 py-4 btn-purple-primary shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 group font-semibold text-white"
                >
                  <span>Créer mon compte</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://app.creatabl-ia.com/sign-in"
                  className="w-full sm:w-auto text-center font-semibold text-purple-200 hover:text-white border border-purple-400/30 hover:border-purple-300 px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 bg-purple-950/20 hover:bg-purple-900/30"
                >
                  Se connecter
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
