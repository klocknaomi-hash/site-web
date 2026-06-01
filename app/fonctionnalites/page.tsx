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
        "La planification sur les réseaux sociaux ne doit plus reposer sur l'intuition. Creatabl analyse en continu les données d'engagement historiques de votre audience cible pour identifier les pics d'activité réels. Notre algorithme croise ces informations avec les spécificités de chaque plateforme pour publier votre contenu au moment exact où il obtiendra la plus grande portée organique possible. Plus besoin de deviner : notre IA planifie intelligemment à votre place.",
      bullets: [
        "Recommandations de créneaux horaires dynamiques",
        "Visualisation claire sur un calendrier glisser-déposer",
        "Planification en masse de plusieurs semaines de posts",
      ],
      icon: <Calendar className="w-6 h-6 text-[#7225E3]" />,
      visual: (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-slate-100">
            <span className="text-sm font-bold text-slate-800">Calendrier de contenu</span>
            <span className="text-xs text-slate-400">Mai 2026</span>
          </div>
          <div className="space-y-3">
            {[
              { day: "Lundi", time: "18:15", status: "Optimisé par l'IA" },
              { day: "Mardi", time: "12:30", status: "Engagement Élevé" },
              { day: "Mercredi", time: "20:00", status: "Recommandé" },
            ].map((slot, i) => (
              <div key={i} className="flex justify-between items-center p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
                <div>
                  <span className="text-[10px] text-slate-400 block">{slot.day}</span>
                  <span className="text-sm font-bold text-slate-800">{slot.time}</span>
                </div>
                <span className="text-xs bg-emerald-500/10 text-emerald-600 px-2.5 py-1 rounded-full font-semibold">
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
        "Suivez la santé de tous vos comptes sociaux depuis une interface centrale. Creatabl rassemble vos données de portée, d'impressions, d'engagement et de clics en temps réel, vous évitant d'avoir à vous connecter à chaque réseau. Notre tableau de bord est conçu pour vous offrir une lecture immédiate et intuitive de vos performances globales afin de prendre des décisions éclairées basées sur des données précises.",
      bullets: [
        "Suivi unifié de l'engagement global",
        "Rapports personnalisables exportables en PDF",
        "Identification automatique de vos contenus les plus performants",
      ],
      icon: <BarChart2 className="w-6 h-6 text-[#7225E3]" />,
      visual: (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-bold text-slate-800">Rapport d&apos;activité</span>
            <span className="text-xs text-emerald-500 font-bold flex items-center gap-1">
              <TrendingUp size={12} /> +24% ce mois
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
              <span className="text-[10px] text-slate-400 block">Impressions</span>
              <span className="text-lg font-bold text-slate-800">142,500</span>
            </div>
            <div className="p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
              <span className="text-[10px] text-slate-400 block">Clics sur le lien</span>
              <span className="text-lg font-bold text-slate-800">8,912</span>
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
        "Creatabl offre une intégration directe avec Instagram, LinkedIn, TikTok, Facebook, YouTube et X. Nous utilisons exclusivement les APIs officielles et sécurisées de chaque réseau pour garantir la stabilité de vos comptes et respecter scrupuleusement les conditions d'utilisation. Vos données d'accès sont chiffrées et protégées, assurant une connexion fiable sans aucun risque de blocage ou de restriction de vos profils.",
      bullets: [
        "Intégration fluide avec l'API Canva",
        "Recadrage d'images et vidéos intelligent selon le réseau",
        "Aperçus en temps réel fidèles aux applications mobiles",
      ],
      icon: <Share2 className="w-6 h-6 text-[#7225E3]" />,
      visual: (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
          <span className="text-sm font-bold text-slate-800 block">Canaux Connectés</span>
          <div className="space-y-2">
            {[
              { name: "Instagram Business", handle: "@creatabl.ia", active: true },
              { name: "TikTok Professional", handle: "@creatabl_ia", active: true },
              { name: "LinkedIn Company", handle: "Creatabl IA", active: true },
              { name: "Canva Integration", handle: "Design direct", active: false },
            ].map((chan, i) => (
              <div key={i} className="flex justify-between items-center p-2.5 bg-white border border-slate-100 rounded-xl shadow-sm">
                <div>
                  <span className="text-xs font-bold text-slate-800 block">{chan.name}</span>
                  <span className="text-[10px] text-slate-400">{chan.handle}</span>
                </div>
                <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold ${chan.active
                    ? "bg-purple-100 text-[#7225E3]"
                    : "bg-slate-100 text-slate-400"
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
        "Notre agent de génération IA est conçu pour éliminer définitivement l'angoisse de la page blanche. En saisissant simplement les grandes lignes de votre sujet ou une description rapide de votre visuel, notre moteur de rédaction produit des légendes percutantes et accrocheuses en moins de 5 secondes. Il structure le texte, utilise les émojis appropriés et crée des introductions captivantes pour retenir immédiatement l'attention de vos lecteurs.",
      bullets: [
        "Choix du ton (Professionnel, Amical, Inspirant, Fun)",
        "Génération automatique de hashtags populaires",
        "Traduction et adaptation multilingue en 15+ langues",
      ],
      icon: <Sparkles className="w-6 h-6 text-[#7225E3]" />,
      visual: (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
          <div className="flex gap-2 items-center">
            <Sparkles size={16} className="text-[#7225E3] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Assistant IA</span>
          </div>
          <div className="space-y-2">
            <div className="text-xs bg-white border border-slate-100 p-3 rounded-xl shadow-sm">
              <span className="text-[#7225E3] font-bold">Propositions :</span>
              <p className="mt-1 text-slate-600 leading-relaxed text-[13px]">
                🚀 Simplifiez la gestion de vos réseaux sociaux ! Avec notre plateforme, planifiez vos posts de la semaine en moins de 10 minutes.
              </p>
            </div>
            <div className="flex justify-between items-center text-[10px] text-slate-400">
              <span>96 mots générés</span>
              <button className="text-[#7225E3] font-bold hover:underline">Insérer le texte</button>
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
        "Pour percer sur les réseaux sociaux, la réactivité est cruciale. Creatabl intègre un scanner de tendances en temps réel qui surveille en permanence les hashtags, les sujets chauds, les défis et les formats de contenus émergents. Dès qu'une opportunité se dessine dans votre niche d'activité, notre IA filtre le bruit du web pour ne vous envoyer qu'une notification immédiate et ciblée, vous permettant d'être parmi les premiers à prendre la parole.",
      bullets: [
        "Détection précoce des hashtags en explosion",
        "Alertes thématiques personnalisées",
        "Idées de formats vidéos courts (Reels, TikTok) prêts à l'emploi",
      ],
      icon: <Flame className="w-6 h-6 text-[#7225E3]" />,
      visual: (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
          <span className="text-sm font-bold text-slate-800 block">Tendances du jour</span>
          <div className="space-y-2">
            {[
              { tag: "#InteligenceArtificielle", growth: "+420%", color: "text-red-500" },
              { tag: "#NoCodeMarketing", growth: "+180%", color: "text-orange-500" },
              { tag: "#ProductivitySaaS", growth: "+95%", color: "text-yellow-500" },
            ].map((trend, i) => (
              <div key={i} className="flex justify-between items-center p-2.5 bg-white border border-slate-100 rounded-xl shadow-sm">
                <span className="text-xs font-bold text-slate-800">{trend.tag}</span>
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
        "Protégez votre image de marque en structurant l'accès à vos comptes sociaux. Creatabl vous permet d'inviter vos collaborateurs et de leur assigner des permissions et rôles personnalisés. Définissez précisément qui peut rédiger des brouillons, qui est autorisé à modifier les visuels, et qui possède le droit final de valider et de planifier les publications.",
      bullets: [
        "Rôles personnalisés (Rédacteur, Validateur, Administrateur)",
        "Validation en un clic via un lien partagé externe",
        "Historique des modifications et notes de relecture internes",
      ],
      icon: <Users className="w-6 h-6 text-[#7225E3]" />,
      visual: (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
          <span className="text-sm font-bold text-slate-800 block">Flux d&apos;approbation</span>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-2 bg-white border border-slate-100 rounded-lg shadow-sm">
              <span className="text-xs font-semibold text-slate-800">Post Lancement.png</span>
              <span className="text-[10px] text-amber-500 font-bold bg-amber-50 px-2 py-0.5 rounded">En attente</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-white border border-slate-100 rounded-lg shadow-sm">
              <span className="text-xs font-semibold text-slate-800">Post Tarifs.mp4</span>
              <span className="text-[10px] text-emerald-500 font-bold bg-emerald-50 px-2 py-0.5 rounded">Approuvé</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative pt-28 bg-white min-h-screen text-slate-800">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-[#7225E3] border border-purple-100 text-xs font-semibold mb-4">
            🚀 EXPLOREZ TOUTES NOS FONCTIONS
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight">
            Chaque outil pensé pour votre <span className="font-serif italic font-normal text-[#7225E3]">croissance</span>.
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mt-6">
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
                  <span className="text-xs font-bold text-[#7225E3] uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full">
                    {feat.badge}
                  </span>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                    {feat.title}
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={150}>
                  <p className="text-base sm:text-lg text-slate-800 font-semibold">
                    {feat.tagline}
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {feat.description}
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={250}>
                  <ul className="space-y-2.5">
                    {feat.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle2 size={18} className="text-[#7225E3] mt-0.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              </div>

              {/* Visual Area */}
              <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                <ScrollReveal delay={200}>
                  <div className="relative group p-1.5 rounded-3xl bg-gradient-to-tr from-slate-200/50 via-slate-100 to-purple-500/10">
                    <div className="absolute inset-0 bg-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none" />
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
          <div className="relative overflow-hidden rounded-3xl border border-purple-200/50 bg-[#F5F3FF] p-8 sm:p-12 md:p-16 text-center shadow-lg">
            <div className="absolute inset-0 radial-glow-cta pointer-events-none" />
            <div className="max-w-3xl mx-auto space-y-6 relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Prêt à transformer votre stratégie de contenu ?
              </h2>
              <p className="text-sm sm:text-base text-slate-500 max-w-lg mx-auto">
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
                  className="w-full sm:w-auto text-center font-semibold text-slate-600 hover:text-slate-900 border border-slate-300 hover:border-slate-400 px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 bg-white shadow-sm"
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
