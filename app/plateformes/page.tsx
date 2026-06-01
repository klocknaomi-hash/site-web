"use client";

import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  Image as ImageIcon,
  Cpu,
  Brain,
  CreditCard,
  Database,
  Mail,
  Server,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Link2,
  ShieldCheck,
  Zap,
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

interface IntegrationNode {
  id: string;
  name: string;
  category: "Réseau Social" | "Création & Données" | "Intelligence Artificielle" | "Infrastructure";
  status: string;
  description: string;
  useCase: string;
  color: string;
  x: number; // percentage left
  y: number; // percentage top
  ring: 1 | 2; // 1 = inner (API), 2 = outer (social)
  icon: React.ReactNode;
  specs: string[];
}

export default function PlateformesPage() {
  const [activeNode, setActiveNode] = useState<string>("instagram");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const nodes: IntegrationNode[] = [
    // Outer Ring (Social Networks)
    {
      id: "instagram",
      name: "Instagram",
      category: "Réseau Social",
      status: "Actif & Certifié Meta",
      description: "L'outil visuel par excellence pour votre marque.",
      useCase: "Planification et publication automatique de vos photos, Reels et Stories. Récupération des impressions et statistiques d'engagement en temps réel.",
      color: "#E1306C",
      x: 86.4,
      y: 71.0,
      ring: 2,
      icon: <InstagramIcon className="w-5 h-5" />,
      specs: ["Publication directe", "Reels & Stories", "Statistiques démographiques", "Planification visuelle"],
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      category: "Réseau Social",
      status: "Actif & Certifié Partner",
      description: "Le canal B2B leader pour engager vos prospects et partenaires.",
      useCase: "Publication de carrousels PDF, d'articles de fond et de posts d'entreprise. Analyse précise de l'évolution de l'audience professionnelle.",
      color: "#0A66C2",
      x: 50.0,
      y: 92.0,
      ring: 2,
      icon: <LinkedinIcon className="w-5 h-5" />,
      specs: ["Publication PDF", "Posts d'entreprise", "Rapports d'abonnés", "Segmentation professionnelle"],
    },
    {
      id: "tiktok",
      name: "TikTok",
      category: "Réseau Social",
      status: "Actif & Connecté API",
      description: "La plateforme de la viralité et du format court.",
      useCase: "Envoi automatique de vos vidéos de moins de 60 secondes et détection immédiate des défis et formats musicaux populaires.",
      color: "#000000",
      x: 13.6,
      y: 71.0,
      ring: 2,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.86 1.08 2.07 1.85 3.4 2.27V10.1c-1.74-.08-3.41-.78-4.73-1.92-.12-.1-.23-.21-.34-.32v7.71c.08 2.3-1.02 4.54-2.87 5.79-1.94 1.34-4.56 1.63-6.73.74-2.25-.91-3.86-3.14-4.05-5.58-.29-3.23 2.1-6.19 5.33-6.49 1.03-.1 2.08.09 3.02.55V3.86c-1.52-.42-3.13-.3-4.57.34-1.85.83-3.22 2.53-3.64 4.53-.52 2.44.25 5.06 1.96 6.84 1.76 1.84 4.4 2.5 6.87 1.7 2.19-.7 3.82-2.73 4.12-5.02.07-.5.08-1.01.07-1.51V.02z"/>
        </svg>
      ),
      specs: ["Auto-publication", "Suivi de tendances", "Formats Reels / Shorts", "Optimisation audio"],
    },
    {
      id: "facebook",
      name: "Facebook",
      category: "Réseau Social",
      status: "Actif",
      description: "Le réseau global pour fédérer vos communautés locales.",
      useCase: "Publication simultanée sur vos groupes et pages Facebook professionnelles. Gestion centralisée des réactions et réponses rapides.",
      color: "#1877F2",
      x: 13.6,
      y: 29.0,
      ring: 2,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      specs: ["Pages & Groupes", "Publication programmée", "Multidiffusion", "Analytics"],
    },
    {
      id: "youtube",
      name: "YouTube",
      category: "Réseau Social",
      status: "Actif",
      description: "La plus grande bibliothèque de vidéos du monde.",
      useCase: "Planification optimisée pour vos vidéos horizontales classiques ainsi que pour vos YouTube Shorts avec insertion automatique des métadonnées de référencement.",
      color: "#FF0000",
      x: 50.0,
      y: 8.0,
      ring: 2,
      icon: <YoutubeIcon className="w-5 h-5" />,
      specs: ["YouTube Shorts", "Vidéos horizontales", "SEO Vidéo auto", "Statistiques de vues"],
    },
    {
      id: "x-twitter",
      name: "X (Twitter)",
      category: "Réseau Social",
      status: "Actif v2 API",
      description: "L'information instantanée et la réactivité absolue.",
      useCase: "Écriture et envoi de threads structurés. Planification heure par heure pour capter les flux d'actualités mondiaux.",
      color: "#0F1419",
      x: 86.4,
      y: 29.0,
      ring: 2,
      icon: <TwitterIcon className="w-5 h-5" />,
      specs: ["Threads automatiques", "Planification précise", "Visualisation grille", "Intégration d'images"],
    },
    // Inner Ring (Tools, AI & Infra)
    {
      id: "canva",
      name: "Canva API",
      category: "Création & Données",
      status: "Partenaire Certifié",
      description: "Votre studio de création graphique intégré.",
      useCase: "Importation fluide de vos créations visuelles et templates Canva directement dans l'interface de programmation Creatabl sans aucun téléchargement externe.",
      color: "#00C4CC",
      x: 75.0,
      y: 50.0,
      ring: 1,
      icon: <ImageIcon className="w-4 h-4" />,
      specs: ["Import en 1 clic", "Sync des designs", "Recadrage automatique", "Formats réseaux"],
    },
    {
      id: "google-trends",
      name: "Google Trends",
      category: "Création & Données",
      status: "Opérationnel",
      description: "Le baromètre d'intérêt du public mondial.",
      useCase: "Analyse en temps réel des flux de recherche pour vous suggérer les mots-clés et hashtags les plus performants du moment.",
      color: "#4285F4",
      x: 67.7,
      y: 67.7,
      ring: 1,
      icon: <TrendingUp className="w-4 h-4" />,
      specs: ["Hashtags chauds", "Mots-clés en hausse", "Filtres géographiques", "Alertes directes"],
    },
    {
      id: "openai",
      name: "OpenAI GPT-4",
      category: "Intelligence Artificielle",
      status: "Opérationnel",
      description: "Le moteur de génération rédactionnel d'élite.",
      useCase: "Génération automatique d'accroches persuasives, de résumés de posts et de réponses à forte valeur ajoutée en fonction du ton de votre marque.",
      color: "#10A37F",
      x: 50.0,
      y: 75.0,
      ring: 1,
      icon: <Cpu className="w-4 h-4" />,
      specs: ["Génération de légendes", "Brainstorming d'idées", "Multi-tons d'écriture", "Insertion de hashtags"],
    },
    {
      id: "anthropic",
      name: "Claude by Anthropic",
      category: "Intelligence Artificielle",
      status: "Opérationnel",
      description: "L'expert de l'adaptation et de la contextualisation.",
      useCase: "Ajustement stylistique avancé et traduction naturelle de vos posts dans plus de 15 langues pour toucher une audience internationale.",
      color: "#CC9966",
      x: 32.3,
      y: 67.7,
      ring: 1,
      icon: <Brain className="w-4 h-4" />,
      specs: ["Traduction naturelle", "Vérification de ton", "Rédaction de threads", "Relecteur de posts"],
    },
    {
      id: "supabase",
      name: "Supabase DB",
      category: "Infrastructure",
      status: "Sécurisé SSL",
      description: "La base de données temps réel et l'authentification sécurisée.",
      useCase: "Sauvegarde instantanée de vos brouillons, droits d'équipe cryptés et planification stockée de manière hautement sécurisée.",
      color: "#3ECF8E",
      x: 25.0,
      y: 50.0,
      ring: 1,
      icon: <Database className="w-4 h-4" />,
      specs: ["Données cryptées", "Sync en temps réel", "Sauvegarde automatique", "Accès rôle par rôle"],
    },
    {
      id: "stripe",
      name: "Stripe",
      category: "Infrastructure",
      status: "Sécurisé PCI-DSS",
      description: "Le standard de paiement sécurisé sur Internet.",
      useCase: "Gestion transparente de vos abonnements, de vos factures et de votre période d'essai gratuite en toute conformité.",
      color: "#635BFF",
      x: 32.3,
      y: 32.3,
      ring: 1,
      icon: <CreditCard className="w-4 h-4" />,
      specs: ["Paiements sécurisés", "Facturation en ligne", "Période d'essai", "Gestion portail client"],
    },
    {
      id: "resend",
      name: "Resend Mail",
      category: "Infrastructure",
      status: "Opérationnel",
      description: "Le serveur de courrier électronique moderne à haute délivrabilité.",
      useCase: "Envoi automatique des rapports de performance hebdomadaires, des confirmations de validation et des notifications instantanées de sécurité.",
      color: "#000000",
      x: 50.0,
      y: 25.0,
      ring: 1,
      icon: <Mail className="w-4 h-4" />,
      specs: ["Rapports hebdomadaires", "Emails transactionnels", "Alertes d'engagement", "Haute délivrabilité"],
    },
    {
      id: "vercel",
      name: "Vercel Edge",
      category: "Infrastructure",
      status: "Opérationnel CDN",
      description: "Le réseau global pour une rapidité de chargement absolue.",
      useCase: "Hébergement de l'interface Creatabl sur un réseau de serveurs ultra-rapides, assurant que votre calendrier se charge en moins de 200ms.",
      color: "#000000",
      x: 67.7,
      y: 32.3,
      ring: 1,
      icon: <Server className="w-4 h-4" />,
      specs: ["Hébergement ultra-rapide", "Sécurité DDoS native", "Temps de réponse minimal", "Réseau CDN mondial"],
    },
  ];

  const currentActive = nodes.find((n) => n.id === activeNode) || nodes[0];

  return (
    <div className="relative pt-28 pb-20 overflow-x-hidden">
      {/* Background glow effects */}
      <div className="absolute top-[20%] left-[-10%] w-[40%] aspect-square rounded-full bg-purple-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[40%] aspect-square rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/40 text-primary border border-purple-200/50 dark:border-purple-900/30 text-xs font-semibold mb-4">
            🔌 UN ÉCOSYSTÈME COMPLET D&apos;INTÉGRATIONS
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-tight">
            Les meilleures API & Réseaux pour faire pulser votre{" "}
            <span className="font-serif italic font-normal text-primary">contenu</span>.
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mt-6">
            Explorez notre cadran d&apos;intégrations interactif. Creatabl connecte vos réseaux sociaux à l&apos;infrastructure technologique la plus robuste du marché.
          </p>
        </ScrollReveal>
      </section>

      {/* Interactive Dial Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Dial container */}
          <div className="lg:col-span-7 flex justify-center items-center relative">
            <ScrollReveal>
              <div className="relative w-full max-w-[340px] xs:max-w-[400px] sm:max-w-[480px] aspect-square rounded-full bg-slate-50/40 dark:bg-purple-950/5 border border-slate-100 dark:border-purple-950/20 p-8 shadow-inner">
                {/* SVG connection lines */}
                {mounted && (
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100">
                    <defs>
                      <linearGradient id="line-glow" x1="0.5" y1="0.5" x2={currentActive.x / 100} y2={currentActive.y / 100}>
                        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                        <stop offset="100%" stopColor={currentActive.color} stopOpacity="0.4" />
                      </linearGradient>
                    </defs>
                    <line
                      x1="50"
                      y1="50"
                      x2={currentActive.x}
                      y2={currentActive.y}
                      stroke="url(#line-glow)"
                      strokeWidth="0.8"
                      strokeDasharray="1.5, 1"
                      className="animate-[shimmer_2s_infinite_linear]"
                    />
                  </svg>
                )}

                {/* Outer Orbit Circle */}
                <div className="absolute inset-[8%] border border-dashed border-slate-200 dark:border-purple-900/30 rounded-full pointer-events-none" />

                {/* Inner Orbit Circle */}
                <div className="absolute inset-[25%] border border-dashed border-slate-200 dark:border-purple-900/40 rounded-full pointer-events-none" />

                {/* Center Node (Creatabl Hub) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-primary to-[#7225E3] flex items-center justify-center shadow-lg shadow-purple-500/30 border border-white/20 relative">
                    <span className="absolute inset-0 rounded-full bg-purple-500/30 animate-ping opacity-60" />
                    <Sparkles className="w-7 h-7 sm:w-9 sm:h-9 text-white relative z-10" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold font-outfit text-slate-800 dark:text-purple-200 block mt-2 bg-white/80 dark:bg-[#121118]/80 backdrop-blur-sm px-2 py-0.5 rounded-full border border-slate-100 dark:border-purple-950/30 w-max mx-auto shadow-sm">
                    Creatabl.ia
                  </span>
                </div>

                {/* Interactive Orbit Nodes */}
                {nodes.map((node) => {
                  const isActive = node.id === activeNode;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setActiveNode(node.id)}
                      onMouseEnter={() => setActiveNode(node.id)}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-white dark:bg-[#121118] border-2 scale-110 shadow-lg"
                          : "bg-white/80 dark:bg-[#121118]/80 border hover:bg-white hover:scale-105 shadow-sm"
                      }`}
                      style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                        borderColor: isActive ? node.color : "rgba(139, 92, 246, 0.15)",
                        color: isActive ? node.color : "currentColor",
                        boxShadow: isActive ? `0 0 16px ${node.color}33` : undefined,
                      }}
                      title={`${node.name} (${node.category})`}
                    >
                      <div
                        className="transition-transform duration-300"
                        style={{
                          transform: isActive ? "scale(1.1)" : "scale(1)",
                          color: isActive ? node.color : "var(--text-secondary)",
                        }}
                      >
                        {node.icon}
                      </div>
                      
                      {/* Optional Indicator dot */}
                      <span
                        className="absolute bottom-[-2px] right-[-2px] w-2.5 h-2.5 rounded-full border border-white dark:border-[#0b0a0f]"
                        style={{
                          backgroundColor: node.category === "Réseau Social" ? "#8B5CF6" : "#CC9966",
                        }}
                      />
                    </button>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>

          {/* Details card panel */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={200}>
              <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 dark:border-purple-950/40 bg-white/70 dark:bg-purple-950/5 backdrop-blur-xl p-6 sm:p-8 shadow-xl">
                
                {/* Header detail */}
                <div className="flex justify-between items-start gap-4 pb-6 border-b border-slate-100 dark:border-purple-950/20">
                  <div>
                    <span 
                      className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white"
                      style={{ backgroundColor: currentActive.color }}
                    >
                      {currentActive.category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold font-outfit mt-3 text-slate-900 dark:text-white flex items-center gap-2">
                      <span style={{ color: currentActive.color }}>{currentActive.icon}</span>
                      {currentActive.name}
                    </h2>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider block">API STATUT</span>
                    <span className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-500/10 dark:bg-emerald-500/5 px-2.5 py-1 rounded-full border border-emerald-500/20 mt-1">
                      <ShieldCheck size={12} />
                      {currentActive.status}
                    </span>
                  </div>
                </div>

                {/* Body detail */}
                <div className="space-y-6 pt-6">
                  <div className="space-y-2">
                    <p className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-200">
                      {currentActive.description}
                    </p>
                    <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                      {currentActive.useCase}
                    </p>
                  </div>

                  {/* Integration specific checklist */}
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">Capacités & Fonctionnalités</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {currentActive.specs.map((spec, index) => (
                        <div key={index} className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                          <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Subtitle callout */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-purple-950/10 border border-slate-100 dark:border-purple-950/20 flex gap-3 items-start">
                    <Zap size={18} className="text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      Chaque connexion API est auditée en continu pour garantir un taux de réussite de publication de 99.9% et une sécurité totale de vos identifiants.
                    </p>
                  </div>

                  {/* Connect accounts button CTA */}
                  <div className="pt-2">
                    <a
                      href="https://app.creatabl-ia.com/sign-up"
                      className="w-full text-center px-6 py-3.5 btn-purple-primary shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all flex items-center justify-center gap-2 group text-sm"
                    >
                      <span>Connecter mon compte {currentActive.name}</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* Grid detailing platform operations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Une architecture optimisée pour chaque réseau
            </h2>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-4 leading-relaxed">
              Ne vous souciez plus des limites techniques de chaque plateforme. Notre moteur de routage API adapte dynamiquement vos formats.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Réseaux Sociaux",
              desc: "Publication et statistiques en direct pour Instagram, TikTok, LinkedIn, Facebook, YouTube et X.",
              features: [
                "Planification de carrousels & vidéos",
                "Optimisation d'heures de postage",
                "Aperçu mobile identique à l'original",
                "Gestion d'équipe pour validations",
              ],
              icon: <Link2 className="w-6 h-6 text-primary" />,
            },
            {
              title: "Intégrations IA & Moteurs",
              desc: "Optimisation de texte et hashtags grâce à GPT-4 d'OpenAI et Claude d'Anthropic intégrés.",
              features: [
                "Légendes automatisées selon le ton",
                "Traduction parfaite de vos messages",
                "Optimisation des hashtags du moment",
                "Suggestions de thématiques par IA",
              ],
              icon: <Sparkles className="w-6 h-6 text-[#CC9966]" />,
            },
            {
              title: "Infrastructure SaaS",
              desc: "Un hébergement Vercel avec authentification Supabase et paiements Stripe cryptés.",
              features: [
                "Sécurité des données de bout en bout",
                "Hébergement CDN à temps de réponse <200ms",
                "Portail client Stripe ultra-simple",
                "Emails et notifications instantanés",
              ],
              icon: <ShieldCheck className="w-6 h-6 text-[#3ECF8E]" />,
            },
          ].map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div className="h-full rounded-2xl border border-slate-200/60 dark:border-purple-950/30 bg-[#FFFFFF] dark:bg-[#121118] p-6 sm:p-8 space-y-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-purple-950/10 border border-slate-100 dark:border-purple-950/20 flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-outfit text-slate-800 dark:text-slate-100">{item.title}</h3>
                  <p className="text-sm text-slate-550 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
                <ul className="space-y-2.5 pt-2 border-t border-slate-100 dark:border-purple-950/10">
                  {item.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300">
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

      {/* CTA section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-[#FFFFFF] p-8 sm:p-12 md:p-16 text-center shadow-2xl">
            <div className="absolute inset-0 radial-glow-cta pointer-events-none" />
            <div className="max-w-3xl mx-auto space-y-6 relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Prêt à connecter vos comptes de réseaux sociaux ?
              </h2>
              <p className="text-sm sm:text-base text-slate-400 max-w-lg mx-auto">
                Intégrez vos plateformes favorites en 2 clics et commencez à publier immédiatement.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a
                  href="https://app.creatabl-ia.com/sign-up"
                  className="w-full sm:w-auto text-center px-8 py-4 btn-purple-primary shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
                >
                  <span>Créer mon compte</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://app.creatabl-ia.com/sign-in"
                  className="w-full sm:w-auto text-center font-semibold text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 bg-slate-900/20"
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
