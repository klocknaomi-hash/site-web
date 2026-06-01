"use client";

import React from "react";
import {
  Calendar,
  BarChart2,
  Sparkles,
  Share2,
  Flame,
  Users,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function FeaturesPage() {
  const detailedFeatures = [
    {
      id: 1,
      badge: "Automation",
      title: "Planification intelligente",
      tagline: "Publiez au moment exact où votre audience est connectée.",
      description:
        "Ne devinez plus quand poster. Notre IA analyse l'historique d'engagement de vos abonnés ainsi que les algorithmes de chaque plateforme pour planifier vos publications au créneau horaire optimal. Gagnez en portée organique sans effort supplémentaire.",
      bullets: [
        "Recommandations de créneaux horaires dynamiques",
        "Visualisation claire sur un calendrier glisser-déposer",
        "Planification en masse de plusieurs semaines de posts",
      ],
      icon: <Calendar className="w-6 h-6 text-primary" />,
      visual: (
        <div className="bg-slate-50 dark:bg-purple-950/10 border border-slate-200/60 dark:border-purple-950/40 rounded-2xl p-6 space-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-slate-100 dark:border-purple-950/20">
            <span className="text-sm font-bold">Calendrier de contenu</span>
            <span className="text-xs text-slate-400">Mai 2026</span>
          </div>
          <div className="space-y-3">
            {[
              { day: "Lundi", time: "18:15", status: "Optimisé par l'IA" },
              { day: "Mardi", time: "12:30", status: "Engagement Élevé" },
              { day: "Mercredi", time: "20:00", status: "Recommandé" },
            ].map((slot, i) => (
              <div key={i} className="flex justify-between items-center p-3 bg-white dark:bg-[#121118] border border-slate-100 dark:border-purple-950/20 rounded-xl">
                <div>
                  <span className="text-[10px] text-slate-400 block">{slot.day}</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{slot.time}</span>
                </div>
                <span className="text-xs bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2.5 py-1 rounded-full font-semibold">
                  {slot.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 2,
      badge: "Performance",
      title: "Analytics temps réel",
      tagline: "Toutes vos données sociales réunies en un seul endroit.",
      description:
        "Visualisez les performances de tous vos comptes depuis un tableau de bord unifié. Portée, engagement, impressions, clics — chaque métrique importante accessible en un coup d'œil. Identifiez vos meilleurs contenus pour comprendre ce qui fonctionne.",
      bullets: [
        "Suivi unifié de l'engagement global",
        "Rapports personnalisables exportables en PDF",
        "Identification automatique de vos contenus les plus performants",
      ],
      icon: <BarChart2 className="w-6 h-6 text-primary" />,
      visual: (
        <div className="bg-slate-50 dark:bg-purple-950/10 border border-slate-200/60 dark:border-purple-950/40 rounded-2xl p-6 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-bold">Rapport d&apos;activité</span>
            <span className="text-xs text-emerald-500 font-bold flex items-center gap-1">
              <TrendingUp size={12} /> +24% ce mois
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-white dark:bg-[#121118] border border-slate-100 dark:border-purple-950/20 rounded-xl">
              <span className="text-[10px] text-slate-400 block">Impressions</span>
              <span className="text-lg font-bold">142,500</span>
            </div>
            <div className="p-3 bg-white dark:bg-[#121118] border border-slate-100 dark:border-purple-950/20 rounded-xl">
              <span className="text-[10px] text-slate-400 block">Clics sur le lien</span>
              <span className="text-lg font-bold">8,912</span>
            </div>
          </div>
          <div className="h-20 w-full pt-2">
            <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
              <path
                d="M0,40 Q25,10 50,30 T100,5"
                fill="none"
                stroke="#8B5CF6"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      badge: "Intégration",
      title: "Multi-plateforme natif",
      tagline: "Créez une fois, diffusez partout avec élégance.",
      description:
        "Connectez vos comptes Instagram, LinkedIn, TikTok, Facebook, YouTube et X en quelques minutes. Creatabl se connecte via les APIs officielles de chaque plateforme pour une intégration 100% sécurisée et stable. Importez vos visuels directement depuis Canva.",
      bullets: [
        "Intégration fluide avec l'API Canva",
        "Recadrage d'images et vidéos intelligent selon le réseau",
        "Aperçus en temps réel fidèles aux applications mobiles",
      ],
      icon: <Share2 className="w-6 h-6 text-primary" />,
      visual: (
        <div className="bg-slate-50 dark:bg-purple-950/10 border border-slate-200/60 dark:border-purple-950/40 rounded-2xl p-6 space-y-4">
          <span className="text-sm font-bold block">Canaux Connectés</span>
          <div className="space-y-2">
            {[
              { name: "Instagram Business", handle: "@creatabl.ia", active: true },
              { name: "TikTok Professional", handle: "@creatabl_ia", active: true },
              { name: "LinkedIn Company", handle: "Creatabl IA", active: true },
              { name: "Canva Integration", handle: "Design direct", active: false },
            ].map((chan, i) => (
              <div key={i} className="flex justify-between items-center p-2.5 bg-white dark:bg-[#121118] border border-slate-100 dark:border-purple-950/20 rounded-xl">
                <div>
                  <span className="text-xs font-bold block">{chan.name}</span>
                  <span className="text-[10px] text-slate-400">{chan.handle}</span>
                </div>
                <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold ${chan.active
                    ? "bg-purple-100 dark:bg-purple-950/50 text-primary"
                    : "bg-slate-100 dark:bg-purple-950/10 text-slate-400"
                  }`}>
                  {chan.active ? "Connecté" : "Actif"}
                </span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 4,
      badge: "Intelligence Artificielle",
      title: "Génération IA",
      tagline: "Dites adieu au syndrome de la page blanche.",
      description:
        "Générez des légendes percutantes adaptées au ton de votre marque et des ensembles de hashtags pertinents en un clin d'œil. Notre agent IA affine les textes pour susciter l'interaction et s'adapter au style de chaque plateforme.",
      bullets: [
        "Choix du ton (Professionnel, Amical, Inspirant, Fun)",
        "Génération automatique de hashtags populaires",
        "Traduction et adaptation multilingue en 15+ langues",
      ],
      icon: <Sparkles className="w-6 h-6 text-primary" />,
      visual: (
        <div className="bg-slate-50 dark:bg-purple-950/10 border border-slate-200/60 dark:border-purple-950/40 rounded-2xl p-6 space-y-4">
          <div className="flex gap-2 items-center">
            <Sparkles size={16} className="text-primary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Assistant IA</span>
          </div>
          <div className="space-y-2">
            <div className="text-xs bg-white dark:bg-[#121118] border border-slate-100 dark:border-purple-950/20 p-3 rounded-xl">
              <span className="text-primary font-bold">Propositions :</span>
              <p className="mt-1 text-slate-600 dark:text-slate-300 leading-relaxed text-[13px]">
                🚀 Simplifiez la gestion de vos réseaux sociaux ! Avec notre plateforme, planifiez vos posts de la semaine en moins de 10 minutes.
              </p>
            </div>
            <div className="flex justify-between items-center text-[10px] text-slate-400">
              <span>96 mots générés</span>
              <button className="text-primary font-bold hover:underline">Insérer le texte</button>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      badge: "Tendances",
      title: "Alertes tendances",
      tagline: "Créez sur les sujets qui captivent déjà votre audience.",
      description:
        "Surveillez en permanence les hashtags, sons et sujets qui explosent sur chaque réseau social. Configurez vos mots-clés une seule fois et recevez des notifications instantanées sur les opportunités pertinentes.",
      bullets: [
        "Détection précoce des hashtags en explosion",
        "Alertes thématiques personnalisées",
        "Idées de formats vidéos courts (Reels, TikTok) prêts à l'emploi",
      ],
      icon: <Flame className="w-6 h-6 text-primary" />,
      visual: (
        <div className="bg-slate-50 dark:bg-purple-950/10 border border-slate-200/60 dark:border-purple-950/40 rounded-2xl p-6 space-y-4">
          <span className="text-sm font-bold block">Tendances du jour</span>
          <div className="space-y-2">
            {[
              { tag: "#InteligenceArtificielle", growth: "+420%", color: "text-red-500" },
              { tag: "#NoCodeMarketing", growth: "+180%", color: "text-orange-500" },
              { tag: "#ProductivitySaaS", growth: "+95%", color: "text-yellow-500" },
            ].map((trend, i) => (
              <div key={i} className="flex justify-between items-center p-2.5 bg-white dark:bg-[#121118] border border-slate-100 dark:border-purple-950/20 rounded-xl">
                <span className="text-xs font-bold">{trend.tag}</span>
                <span className={`text-xs font-extrabold ${trend.color}`}>{trend.growth}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 6,
      badge: "Collaboration",
      title: "Collaboration équipe",
      tagline: "Travaillez ensemble en toute sécurité.",
      description:
        "Invitez vos collaborateurs, définissez des rôles précis et gérez des workflows de validation sécurisés. Commentez et ajustez vos publications en contexte avant de publier en toute confiance.",
      bullets: [
        "Rôles personnalisés (Rédacteur, Validateur, Administrateur)",
        "Validation en un clic via un lien partagé externe",
        "Historique des modifications et notes de relecture internes",
      ],
      icon: <Users className="w-6 h-6 text-primary" />,
      visual: (
        <div className="bg-slate-50 dark:bg-purple-950/10 border border-slate-200/60 dark:border-purple-950/40 rounded-2xl p-6 space-y-4">
          <span className="text-sm font-bold block">Flux d&apos;approbation</span>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-2 bg-white dark:bg-[#121118] border border-slate-100 dark:border-purple-950/20 rounded-lg">
              <span className="text-xs font-semibold">Post Lancement.png</span>
              <span className="text-[10px] text-amber-500 font-bold bg-amber-500/10 px-2 py-0.5 rounded">En attente</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-white dark:bg-[#121118] border border-slate-100 dark:border-purple-950/20 rounded-lg">
              <span className="text-xs font-semibold">Post Tarifs.mp4</span>
              <span className="text-[10px] text-emerald-500 font-bold bg-emerald-550/10 px-2 py-0.5 rounded bg-emerald-500/10">Approuvé</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative pt-28">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/40 text-primary border border-purple-200/50 dark:border-purple-900/30 text-xs font-semibold mb-4">
            🚀 EXPLOREZ TOUTES NOS FONCTIONS
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-tight">
            Chaque outil pensé pour votre <span className="font-serif italic font-normal text-primary">croissance</span>.
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mt-6">
            Découvrez comment Creatabl.ia unifie votre flux de production de contenu du premier brouillon jusqu&apos;à l&apos;analyse finale.
          </p>
        </ScrollReveal>
      </section>

      {/* Feature Sections alternating */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-28 md:space-y-40">
        {detailedFeatures.map((feat, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={feat.id}
              id={feat.badge.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center scroll-mt-24"
            >
              {/* Text Area */}
              <div className={`lg:col-span-6 space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                <ScrollReveal>
                  <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
                    {feat.badge}
                  </span>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                    {feat.title}
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={150}>
                  <p className="text-base sm:text-lg text-slate-800 dark:text-slate-200 font-semibold">
                    {feat.tagline}
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <p className="text-sm sm:text-base text-slate-550 dark:text-slate-400 leading-relaxed">
                    {feat.description}
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={250}>
                  <ul className="space-y-2.5">
                    {feat.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              </div>

              {/* Visual Area */}
              <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                <ScrollReveal delay={200}>
                  <div className="relative group p-1.5 rounded-3xl bg-gradient-to-tr from-slate-200/50 via-slate-100 to-purple-500/10 dark:from-purple-950/20 dark:to-purple-950/5">
                    <div className="absolute inset-0 bg-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none" />
                    {feat.visual}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA at Bottom */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-[#FFFFFF] dark:bg-[#121118] p-8 sm:p-12 md:p-16 text-center shadow-2xl">
            <div className="absolute inset-0 radial-glow-cta pointer-events-none" />
            <div className="max-w-3xl mx-auto space-y-6 relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                Prêt à transformer votre stratégie de contenu ?
              </h2>
              <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
                Commencez gratuitement dès aujourd&apos;hui et découvrez la puissance de la planification intelligente.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a
                  href="https://app.creatabl-ia.com/sign-up"
                  className="w-full sm:w-auto text-center px-8 py-4 btn-purple-primary shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
                >
                  <span>Essayer gratuitement</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://app.creatabl-ia.com/sign-in"
                  className="w-full sm:w-auto text-center font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-350 dark:border-slate-700 hover:border-slate-500 px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 bg-slate-900/5 dark:bg-slate-900/20"
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
