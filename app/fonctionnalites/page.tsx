"use client";

import React from "react";
import {
  Calendar,
  BarChart2,
  Sparkles,
  Share2,
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
        <div className="bg-[#F8F7FC] border border-[#E8E6F0] rounded-2xl p-6 space-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-[#E8E6F0]">
            <span className="text-sm font-bold text-[#14121F]">Calendrier de contenu</span>
            <span className="text-xs text-[#6B6780]">Mai 2026</span>
          </div>
          <div className="space-y-3">
            {[
              { day: "Lundi", time: "18:15", status: "Optimisé par l'IA" },
              { day: "Mardi", time: "12:30", status: "Engagement Élevé" },
              { day: "Mercredi", time: "20:00", status: "Recommandé" },
            ].map((slot, i) => (
              <div key={i} className="flex justify-between items-center p-3 bg-white border border-[#E8E6F0] rounded-xl shadow-sm">
                <div>
                  <span className="text-xs text-[#6B6780] block">{slot.day}</span>
                  <span className="text-sm font-bold text-[#14121F]">{slot.time}</span>
                </div>
                <span className="text-xs bg-[#0E7445]/10 text-[#0E7445] px-2.5 py-1 rounded-full font-semibold">
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
        <div className="bg-[#F8F7FC] border border-[#E8E6F0] rounded-2xl p-6 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-bold text-[#14121F]">Rapport d&apos;activité</span>
            <span className="text-xs text-[#0E7445] font-bold flex items-center gap-1">
              <TrendingUp size={12} /> +24% ce mois
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-white border border-[#E8E6F0] rounded-xl shadow-sm">
              <span className="text-xs text-[#6B6780] block">Impressions</span>
              <span className="text-lg font-bold text-[#14121F]">142,500</span>
            </div>
            <div className="p-3 bg-white border border-[#E8E6F0] rounded-xl shadow-sm">
              <span className="text-xs text-[#6B6780] block">Clics sur le lien</span>
              <span className="text-lg font-bold text-[#14121F]">8,912</span>
            </div>
          </div>
          <div className="h-20 w-full pt-2">
            <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
              <path
                d="M0,40 Q25,10 50,30 T100,5"
                fill="none"
                stroke="#8A38F5"
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
        "Creatabl offre une intégration directe avec Instagram, LinkedIn, Facebook et X (TikTok et YouTube arrivent bientôt). Nous utilisons exclusivement les APIs officielles et sécurisées de chaque réseau pour garantir la stabilité de vos comptes et respecter scrupuleusement les conditions d'utilisation. Vos données d'accès sont chiffrées et protégées, assurant une connexion fiable sans aucun risque de blocage ou de restriction de vos profils.",
      bullets: [
        "Intégration fluide avec l'API Canva",
        "Recadrage d'images et vidéos intelligent selon le réseau",
        "Aperçus en temps réel fidèles aux applications mobiles",
      ],
      icon: <Share2 className="w-6 h-6 text-[#7225E3]" />,
      visual: (
        <div className="bg-[#F8F7FC] border border-[#E8E6F0] rounded-2xl p-6 space-y-4">
          <span className="text-sm font-bold text-[#14121F] block">Canaux Connectés</span>
          <div className="space-y-2">
            {[
              { name: "Instagram Business", handle: "@creatabl.ia", active: true },
              { name: "X", handle: "@creatabl_ia", active: true },
              { name: "LinkedIn Company", handle: "Creatabl IA", active: true },
              { name: "Canva Integration", handle: "Design direct", active: false },
            ].map((chan, i) => (
              <div key={i} className="flex justify-between items-center p-2.5 bg-white border border-[#E8E6F0] rounded-xl shadow-sm">
                <div>
                  <span className="text-xs font-bold text-[#14121F] block">{chan.name}</span>
                  <span className="text-xs text-[#6B6780]">{chan.handle}</span>
                </div>
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${chan.active
                    ? "bg-[#E7DCFC] text-[#7225E3]"
                    : "bg-[#F8F7FC] text-[#6B6780]"
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
      title: "Création de post",
      tagline: "Rédigez légendes et hashtags en un instant.",
      description:
        "Notre assistant de génération IA élimine le syndrome de la page blanche. En saisissant simplement les grandes lignes de votre sujet ou une description rapide de votre visuel, notre moteur de rédaction produit des légendes percutantes et accrocheuses en moins de 5 secondes. Il structure le texte, utilise les émojis appropriés et crée des introductions captivantes pour retenir immédiatement l'attention de vos lecteurs.",
      bullets: [
        "Choix du ton (Professionnel, Amical, Inspirant, Fun)",
        "Génération automatique de hashtags populaires",
        "Traduction et adaptation multilingue en 15+ langues",
      ],
      icon: <Sparkles className="w-6 h-6 text-[#7225E3]" />,
      visual: (
        <div className="bg-[#F8F7FC] border border-[#E8E6F0] rounded-2xl p-6 space-y-4">
          <div className="flex gap-2 items-center">
            <Sparkles size={16} className="text-[#7225E3] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#6B6780]">Assistant IA</span>
          </div>
          <div className="space-y-2">
            <div className="text-xs bg-white border border-[#E8E6F0] p-3 rounded-xl shadow-sm">
              <span className="text-[#7225E3] font-bold">Propositions :</span>
              <p className="mt-1 text-[#4B4B63] leading-relaxed text-sm">
                🚀 Simplifiez la gestion de vos réseaux sociaux ! Avec notre plateforme, planifiez vos posts de la semaine en moins de 10 minutes.
              </p>
            </div>
            <div className="flex justify-between items-center text-xs text-[#6B6780]">
              <span>96 mots générés</span>
              <button className="text-[#7225E3] font-bold hover:underline">Insérer le texte</button>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      badge: "Veille & Idées",
      title: "Agent IA (Tendances)",
      tagline: "Trouvez des idées basées sur les tendances du web.",
      description:
        "Identifiez instantanément les sujets chauds du moment grâce à notre Agent IA. Il parcourt en continu les tendances et le web pour vous suggérer des angles éditoriaux uniques et porteurs d'engagement. Générez des idées de posts en un clic et envoyez-les directement dans l'éditeur pour créer vos contenus en un temps record.",
      bullets: [
        "Détection des sujets tendances en temps réel",
        "Génération de 3 angles éditoriaux différents par sujet",
        "Envoi direct dans l'éditeur de post en un clic",
      ],
      icon: <Sparkles className="w-6 h-6 text-[#7225E3]" />,
      visual: (
        <div className="bg-[#F8F7FC] border border-[#E8E6F0] rounded-2xl p-6 space-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-[#E8E6F0]">
            <span className="text-sm font-bold text-[#14121F]">Sujets Chauds</span>
            <span className="text-xs text-[#7225E3] bg-[#F3EEFD] px-1.5 py-0.5 rounded font-bold">Recommandé</span>
          </div>
          <div className="space-y-2">
            <div className="p-3 bg-white border border-[#E8E6F0] rounded-xl shadow-sm flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#14121F] block">L&apos;essor de l&apos;IA générative</span>
                <span className="text-xs text-[#6B6780]">Sujet très populaire sur LinkedIn</span>
              </div>
              <span className="text-xs text-[#7225E3] font-bold">Générer</span>
            </div>
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
        <div className="bg-[#F8F7FC] border border-[#E8E6F0] rounded-2xl p-6 space-y-4">
          <span className="text-sm font-bold text-[#14121F] block">Flux d&apos;approbation</span>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-2 bg-white border border-[#E8E6F0] rounded-lg shadow-sm">
              <span className="text-xs font-semibold text-[#14121F]">Post Lancement.png</span>
              <span className="text-xs text-[#8A4B00] font-bold bg-[#FDF2DF] px-2 py-0.5 rounded">En attente</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-white border border-[#E8E6F0] rounded-lg shadow-sm">
              <span className="text-xs font-semibold text-[#14121F]">Post Tarifs.mp4</span>
              <span className="text-xs text-[#0E7445] font-bold bg-[#E7F6EE] px-2 py-0.5 rounded">Approuvé</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative pt-28 bg-white min-h-screen text-[#14121F]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3EEFD] text-[#7225E3] border border-[#E7DCFC] text-xs font-semibold mb-4">
            🚀 EXPLOREZ TOUTES NOS FONCTIONS
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#14121F] max-w-4xl mx-auto leading-tight">
            Chaque outil pensé pour votre <span className="font-serif italic font-normal text-[#7225E3]">croissance</span>.
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-lg md:text-xl text-[#6B6780] max-w-2xl mx-auto mt-6">
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
                  <span className="text-xs font-bold text-[#7225E3] uppercase tracking-widest bg-[#F3EEFD] px-3 py-1 rounded-full">
                    {feat.badge}
                  </span>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#14121F] leading-tight">
                    {feat.title}
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={150}>
                  <p className="text-base sm:text-lg text-[#14121F] font-semibold">
                    {feat.tagline}
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <p className="text-sm sm:text-base text-[#4B4B63] leading-relaxed">
                    {feat.description}
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={250}>
                  <ul className="space-y-2.5">
                    {feat.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-[#4B4B63]">
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
                  <div className="relative group p-1.5 rounded-3xl bg-gradient-to-tr from-[#E8E6F0]/50 via-[#F8F7FC] to-[#7225E3]/10">
                    <div className="absolute inset-0 bg-[#7225E3]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none" />
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
          <div className="relative overflow-hidden rounded-3xl border border-[#E7DCFC]/50 bg-[#F3EEFD] p-8 sm:p-12 md:p-16 text-center shadow-lg">
            <div className="absolute inset-0 radial-glow-cta pointer-events-none" />
            <div className="max-w-3xl mx-auto space-y-6 relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#14121F]">
                Prêt à transformer votre stratégie de contenu ?
              </h2>
              <p className="text-sm sm:text-base text-[#6B6780] max-w-lg mx-auto">
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
                  className="w-full sm:w-auto text-center font-semibold text-[#4B4B63] hover:text-[#14121F] border border-[#878399] hover:border-[#878399] px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 bg-white shadow-sm"
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
