import React from "react";
import Link from "next/link";
import LogosStrip from "@/components/LogosStrip";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Calendar,
  Sparkles,
  TrendingUp,
  BarChart2,
  Layers,
  Users,
  ArrowRight
} from "lucide-react";



export default function Home() {
  const testimonials = [
    {
      name: "Marie L.",
      role: "Créatrice de contenu",
      quote: "Avant Creatabl, je passais 3h par post. Maintenant je génère, j'ajuste et je programme en 20 minutes. C'est littéralement un game changer.",
      photo: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=80&h=80&fit=crop",
      stars: 5,
    },
    {
      name: "Thomas R.",
      role: "Consultant marketing",
      quote: "L'IA comprend vraiment mon style. Je n'ai plus jamais le syndrome de la page blanche. Mes stats ont augmenté de 40% en un mois.",
      photo: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=80&h=80&fit=crop",
      stars: 5,
    },
    {
      name: "Sophie M.",
      role: "Directrice agence",
      quote: "On gère 6 clients depuis une seule interface. Creatabl nous a fait gagner 10h par semaine sur la coordination de contenu.",
      photo: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?w=80&h=80&fit=crop",
      stars: 5,
    },
    {
      name: "Julien D.",
      role: "Head of Content",
      quote: "Le calendrier éditorial partagé a changé nos réunions. On arrive préparés, on valide vite, on publie plus.",
      photo: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?w=80&h=80&fit=crop",
      stars: 5,
    },
  ];

  return (
    <div className="relative overflow-hidden pt-20">
      
      {/* 2. HERO SECTION */}
      <section 
        className="relative w-full overflow-hidden bg-white pt-24 pb-20 md:pt-32 md:pb-24 border-b border-slate-100" 
        style={{ background: "#FFFFFF", position: "relative", overflow: "hidden", backgroundColor: "#ffffff" }}
      >
        
        <div className="hero-bg-wrapper" aria-hidden="true">

          {/* Demi-cercle violet illuminé depuis le bas */}
          <div className="hero-glow-circle" />

          {/* 12 colonnes avec degrés de transparence variables */}
          <div className="hero-columns">
            <div className="hero-col" />
            <div className="hero-col" />
            <div className="hero-col" />
            <div className="hero-col" />
            <div className="hero-col" />
            <div className="hero-col" />
            <div className="hero-col" />
            <div className="hero-col" />
            <div className="hero-col" />
            <div className="hero-col" />
            <div className="hero-col" />
            <div className="hero-col" />
          </div>

          {/* Panneau blanc semi-transparent gauche */}
          <div className="hero-panel-left" />

          {/* Panneau blanc semi-transparent droite */}
          <div className="hero-panel-right" />

        </div>

        {/* Content Container */}
        <div 
          className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center"
          style={{ position: "relative", zIndex: 10 }}
        >
          
          {/* Centered Text and Buttons */}
          <div className="relative z-10 w-full max-w-[800px] flex flex-col items-center space-y-6">
            <ScrollReveal delay={150}>
              <h1 
                className="font-outfit text-[#111827] text-center" 
                style={{ 
                  fontSize: "min(55px, 9vw)", 
                  lineHeight: "1.1", 
                  maxWidth: "800px", 
                  margin: "0 auto",
                  fontWeight: 400,
                  position: "relative",
                  zIndex: 10
                }}
              >
                La plateforme qui fait
                <br />
                passer vos contenus
                <br />
                <span className="font-outfit" style={{ fontSize: "min(64px, 10.5vw)", fontWeight: 400 }}>à la </span>
                <span className="font-playfair italic text-[#7225E3]" style={{ fontSize: "min(64px, 10.5vw)", fontWeight: 500 }}>vitesse supérieure.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p 
                className="font-inter font-medium text-[#6B7280] text-center leading-relaxed" 
                style={{ 
                  fontSize: "18px", 
                  maxWidth: "750px", 
                  margin: "0 auto",
                  position: "relative",
                  zIndex: 10
                }}
              >
                Créez, planifiez et analysez tous vos réseaux sociaux sur une seule interface conçue pour vous simplifier la gestion avec une maîtrise complète.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={450}>
              <div 
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "20px",
                  marginTop: "32px",
                  background: "transparent",
                  border: "none",
                  padding: 0,
                  zIndex: 10,
                  position: "relative"
                }}
              >
                {/* AVATARS CONTAINER */}
                <div 
                  style={{
                    display: "flex",
                    position: "relative",
                    alignItems: "center"
                  }}
                >
                  {/* Logo Icon Element */}
                  <div 
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      border: "2px solid #ffffff",
                      backgroundColor: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
                      zIndex: 10,
                      position: "relative",
                      flexShrink: 0
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src="/logo.png" 
                      alt="Creatabl Logo" 
                      style={{
                        width: "20px",
                        height: "20px",
                        objectFit: "contain"
                      }}
                    />
                  </div>
                  
                  {/* Photo Avatars */}
                  {[
                    "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=80&h=80&fit=crop",
                    "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=80&h=80&fit=crop",
                    "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?w=80&h=80&fit=crop",
                    "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?w=80&h=80&fit=crop"
                  ].map((src, idx) => (
                    <img 
                      key={idx}
                      src={src}
                      alt={`Avatar ${idx + 1}`}
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        border: "2px solid #ffffff",
                        objectFit: "cover",
                        marginLeft: "-10px",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
                        zIndex: 11 + idx,
                        position: "relative"
                      }}
                    />
                  ))}
                </div>

                {/* TEXT & STARS CONTAINER (Vertical Stack) */}
                <div 
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    gap: "4px",
                    zIndex: 10,
                    position: "relative"
                  }}
                >
                  {/* ÉTOILES */}
                  <div 
                    style={{
                      color: "#FF5A35",
                      fontSize: "14px",
                      letterSpacing: "1px",
                      lineHeight: "1",
                      zIndex: 10,
                      position: "relative"
                    }}
                  >
                    ★★★★★
                  </div>

                  {/* TEXT WITH SCROLLING WORD */}
                  <div 
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontFamily: "Inter Medium, sans-serif",
                      fontSize: "15px",
                      color: "#6B7280",
                      lineHeight: "24px",
                      zIndex: 10,
                      position: "relative"
                    }}
                  >
                    <span>Adoré par</span>
                    <span 
                      style={{
                        fontWeight: 700,
                        color: "#111827"
                      }}
                    >
                      127
                    </span>
                    
                    {/* MOT QUI DÉFILE */}
                    <div 
                      style={{
                        display: "inline-block",
                        overflow: "hidden",
                        height: "22px",
                        verticalAlign: "middle",
                        position: "relative",
                        marginLeft: "4px",
                        zIndex: 10
                      }}
                    >
                      <div className="words-track">
                        {[
                          "créateurs",
                          "solopreneurs",
                          "petites entreprises",
                          "agences",
                          "créateurs"
                        ].map((word, idx) => (
                          <span 
                            key={idx}
                            style={{
                              display: "block",
                              height: "22px",
                              lineHeight: "22px",
                              fontWeight: 700,
                              fontSize: "15px",
                              color: "#7225E3",
                              whiteSpace: "nowrap",
                              fontFamily: "Inter Medium, sans-serif",
                              zIndex: 10,
                              position: "relative"
                            }}
                          >
                            {word}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Framed Dashboard Mockup */}
          <div className="w-full" style={{ marginTop: "48px" }}>
            <ScrollReveal delay={300}>
              <div 
                className="relative max-w-[680px] mx-auto z-10"
                style={{ position: "relative", zIndex: 10 }}
              >
                {/* Purple glitter glow layer */}
                <div 
                  className="absolute inset-[-12px] rounded-[20px] filter blur-[8px] z-0 animate-shimmer"
                  style={{
                    background: "linear-gradient(135deg, rgba(138,56,245,0.5), rgba(255,255,255,0.8), rgba(138,56,245,0.5))",
                    backgroundSize: "200% 200%",
                  }}
                />

                {/* White frame layer */}
                <div 
                  className="absolute inset-[-4px] rounded-[16px] bg-white z-10"
                />

                {/* Dashboard image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/dashboard.png" 
                  alt="Creatabl Dashboard Screenshot" 
                  className="relative z-20 w-full rounded-[12px] border-[1.5px] border-[rgba(139,92,246,0.25)] block"
                  style={{
                    boxShadow: "0 20px 60px rgba(114,37,227,0.15), 0 4px 16px rgba(0,0,0,0.08)"
                  }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. LOGOS STRIP */}
      <section className="relative z-10 bg-white">
        <LogosStrip />
      </section>

      {/* 4. FEATURES VEROAPP GRID */}
      <section id="features" className="bg-[#FFFFFF] py-[100px] relative border-t border-slate-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-[640px] mx-auto mb-[56px]">
            <ScrollReveal>
              <span className="font-outfit font-medium text-[12px] text-[#7225E3] uppercase tracking-[0.12em] block mb-2">
                FONCTIONNALITÉS
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="font-outfit text-[32px] sm:text-[40px] md:text-[48px] font-extrabold tracking-[-0.03em] text-[#111827] leading-[1.1] mb-3">
                Tout ce qu&apos;il vous faut, au même endroit
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="font-inter font-medium text-[15px] sm:text-[18px] text-[#6B7280]">
                Créez, planifiez et publiez sans effort avec Creatabl.ia
              </p>
            </ScrollReveal>
          </div>

          {/* Grille 3x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
            
            {/* CARD 1 - Planification intelligente */}
            <ScrollReveal delay={100}>
              <div className="bg-[#FFFFFF] border border-[#F3F4F6] rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:border-[rgba(139,92,246,0.25)] hover:shadow-[0_8px_32px_rgba(139,92,246,0.1)] transition-all duration-[250ms] ease-in-out flex flex-col justify-between h-full group p-6">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-[#7225E3] mb-5 group-hover:scale-105 transition-transform duration-200">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h3 className="font-outfit text-[22px] font-bold text-[#111827] leading-tight mb-2">
                    Planification intelligente
                  </h3>
                  <p className="font-inter text-[14px] text-[#6B7280] leading-[1.6]">
                    Optimisez vos publications aux heures de plus forte activité de votre audience et gérez votre calendrier en glisser-déposer.
                  </p>
                </div>
                <Link
                  href="/fonctionnalites/planification"
                  className="text-[13px] font-bold text-[#7225E3] hover:underline flex items-center gap-1 mt-6 group/link"
                >
                  <span>En savoir plus</span>
                  <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform duration-250" />
                </Link>
              </div>
            </ScrollReveal>

            {/* CARD 2 - Génération IA */}
            <ScrollReveal delay={150}>
              <div className="bg-[#FFFFFF] border border-[#F3F4F6] rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:border-[rgba(139,92,246,0.25)] hover:shadow-[0_8px_32px_rgba(139,92,246,0.1)] transition-all duration-[250ms] ease-in-out flex flex-col justify-between h-full group p-6">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-[#7225E3] mb-5 group-hover:scale-105 transition-transform duration-200">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="font-outfit text-[22px] font-bold text-[#111827] leading-tight mb-2">
                    Génération IA
                  </h3>
                  <p className="font-inter text-[14px] text-[#6B7280] leading-[1.6]">
                    Rédigez des légendes percutantes et des hashtags optimisés pour chaque réseau en quelques secondes seulement.
                  </p>
                </div>
                <Link
                  href="/fonctionnalites/generation-ia"
                  className="text-[13px] font-bold text-[#7225E3] hover:underline flex items-center gap-1 mt-6 group/link"
                >
                  <span>En savoir plus</span>
                  <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform duration-250" />
                </Link>
              </div>
            </ScrollReveal>

            {/* CARD 3 - Alertes tendances */}
            <ScrollReveal delay={200}>
              <div className="bg-[#FFFFFF] border border-[#F3F4F6] rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:border-[rgba(139,92,246,0.25)] hover:shadow-[0_8px_32px_rgba(139,92,246,0.1)] transition-all duration-[250ms] ease-in-out flex flex-col justify-between h-full group p-6">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 mb-5 group-hover:scale-105 transition-transform duration-200">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="font-outfit text-[22px] font-bold text-[#111827] leading-tight mb-2">
                    Alertes tendances
                  </h3>
                  <p className="font-inter text-[14px] text-[#6B7280] leading-[1.6]">
                    Surveillez en continu les hashtags, les sons viraux et les sujets émergents propres à votre niche d&apos;activité.
                  </p>
                </div>
                <Link
                  href="/fonctionnalites/alertes-tendances"
                  className="text-[13px] font-bold text-[#7225E3] hover:underline flex items-center gap-1 mt-6 group/link"
                >
                  <span>En savoir plus</span>
                  <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform duration-250" />
                </Link>
              </div>
            </ScrollReveal>

            {/* CARD 4 - Analytics temps réel */}
            <ScrollReveal delay={250}>
              <div className="bg-[#FFFFFF] border border-[#F3F4F6] rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:border-[rgba(139,92,246,0.25)] hover:shadow-[0_8px_32px_rgba(139,92,246,0.1)] transition-all duration-[250ms] ease-in-out flex flex-col justify-between h-full group p-6">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-5 group-hover:scale-105 transition-transform duration-200">
                    <BarChart2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-outfit text-[22px] font-bold text-[#111827] leading-tight mb-2">
                    Analytics temps réel
                  </h3>
                  <p className="font-inter text-[14px] text-[#6B7280] leading-[1.6]">
                    Analysez les performances de tous vos comptes de manière unifiée et générez des rapports professionnels automatiques.
                  </p>
                </div>
                <Link
                  href="/fonctionnalites/analytics"
                  className="text-[13px] font-bold text-[#7225E3] hover:underline flex items-center gap-1 mt-6 group/link"
                >
                  <span>En savoir plus</span>
                  <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform duration-250" />
                </Link>
              </div>
            </ScrollReveal>

            {/* CARD 5 - Multi-plateforme natif */}
            <ScrollReveal delay={300}>
              <div className="bg-[#FFFFFF] border border-[#F3F4F6] rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:border-[rgba(139,92,246,0.25)] hover:shadow-[0_8px_32px_rgba(139,92,246,0.1)] transition-all duration-[250ms] ease-in-out flex flex-col justify-between h-full group p-6">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-[#7225E3] mb-5 group-hover:scale-105 transition-transform duration-200">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="font-outfit text-[22px] font-bold text-[#111827] leading-tight mb-2">
                    Multi-plateforme natif
                  </h3>
                  <p className="font-inter text-[14px] text-[#6B7280] leading-[1.6]">
                    Connectez vos comptes de réseaux sociaux favoris et importez vos conceptions graphiques Canva en un seul clic.
                  </p>
                </div>
                <Link
                  href="/fonctionnalites/multi-plateforme"
                  className="text-[13px] font-bold text-[#7225E3] hover:underline flex items-center gap-1 mt-6 group/link"
                >
                  <span>En savoir plus</span>
                  <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform duration-250" />
                </Link>
              </div>
            </ScrollReveal>

            {/* CARD 6 - Collaboration équipe */}
            <ScrollReveal delay={350}>
              <div className="bg-[#FFFFFF] border border-[#F3F4F6] rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:border-[rgba(139,92,246,0.25)] hover:shadow-[0_8px_32px_rgba(139,92,246,0.1)] transition-all duration-[250ms] ease-in-out flex flex-col justify-between h-full group p-6">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-[#7225E3] mb-5 group-hover:scale-105 transition-transform duration-200">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-outfit text-[22px] font-bold text-[#111827] leading-tight mb-2">
                    Collaboration équipe
                  </h3>
                  <p className="font-inter text-[14px] text-[#6B7280] leading-[1.6]">
                    Définissez des rôles clairs et gérez des workflows de validation sécurisés pour simplifier le travail d&apos;équipe.
                  </p>
                </div>
                <Link
                  href="/fonctionnalites/collaboration"
                  className="text-[13px] font-bold text-[#7225E3] hover:underline flex items-center gap-1 mt-6 group/link"
                >
                  <span>En savoir plus</span>
                  <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform duration-250" />
                </Link>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 5. STATS ROW */}
      <section className="w-full bg-[#F5F3FF] border-t border-b border-[#DDD6FE] relative z-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-3">
          
          {/* Colonne 1 */}
          <div 
            className="flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-[#DDD6FE] last:border-0"
            style={{ padding: "64px 48px" }}
          >
            <ScrollReveal delay={100} className="flex flex-col items-center text-center">
              <span 
                className="font-outfit text-[#7225E3] leading-none mb-3"
                style={{ fontSize: "72px", fontWeight: 800 }}
              >
                100+
              </span>
              <p 
                className="font-inter text-[#6B7280] font-medium mb-1"
                style={{ fontSize: "16px" }}
              >
                Profils ont déjà rejoint Creatabl
              </p>
              <span 
                className="font-inter text-[#9CA3AF]"
                style={{ fontSize: "13px" }}
              >
                et ça grandit chaque jour
              </span>
            </ScrollReveal>
          </div>

          {/* Colonne 2 */}
          <div 
            className="flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-[#DDD6FE] last:border-0"
            style={{ padding: "64px 48px" }}
          >
            <ScrollReveal delay={200} className="flex flex-col items-center text-center">
              <span 
                className="font-outfit text-[#7225E3] leading-none mb-3"
                style={{ fontSize: "72px", fontWeight: 800 }}
              >
                3h
              </span>
              <p 
                className="font-inter text-[#6B7280] font-medium mb-1"
                style={{ fontSize: "16px" }}
              >
                Gagnées par semaine en moyenne
              </p>
              <span 
                className="font-inter text-[#9CA3AF]"
                style={{ fontSize: "13px" }}
              >
                sur la gestion de contenu
              </span>
            </ScrollReveal>
          </div>

          {/* Colonne 3 */}
          <div 
            className="flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-[#DDD6FE] last:border-0"
            style={{ padding: "64px 48px" }}
          >
            <ScrollReveal delay={300} className="flex flex-col items-center text-center">
              <span 
                className="font-outfit text-[#7225E3] leading-none mb-3"
                style={{ fontSize: "72px", fontWeight: 800 }}
              >
                5
              </span>
              <p 
                className="font-inter text-[#6B7280] font-medium mb-1"
                style={{ fontSize: "16px" }}
              >
                Réseaux sociaux supportés
              </p>
              <span 
                className="font-inter text-[#9CA3AF]"
                style={{ fontSize: "13px" }}
              >
                LinkedIn, Instagram, TikTok, Facebook, X
              </span>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section 
        className="w-full relative z-10"
        style={{
          backgroundColor: "#FFFFFF",
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <ScrollReveal>
              <span 
                className="font-outfit uppercase tracking-wider block mb-3"
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "#7225E3",
                }}
              >
                TÉMOIGNAGES
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 
                className="font-outfit text-center leading-tight mb-3"
                style={{
                  fontSize: "min(48px, 9.5vw)",
                  fontWeight: 800,
                  color: "#111827",
                }}
              >
                Leurs avis valent mieux que tous nos arguments.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p 
                className="font-inter text-center"
                style={{
                  fontSize: "18px",
                  color: "#6B7280",
                }}
              >
                Ils ont rejoint Creatabl. Voici leur expérience.
              </p>
            </ScrollReveal>
          </div>

          {/* Infinite Marquee Container */}
          <div 
            className="relative overflow-hidden w-full"
            style={{
              cursor: "pointer",
            }}
          >
            {/* Fondu bords gauche/droite */}
            <div 
              className="absolute top-0 bottom-0 left-0 pointer-events-none z-10"
              style={{
                width: "100px",
                background: "linear-gradient(90deg, white, transparent)",
              }}
            />
            <div 
              className="absolute top-0 bottom-0 right-0 pointer-events-none z-10"
              style={{
                width: "100px",
                background: "linear-gradient(270deg, white, transparent)",
              }}
            />

            {/* Testimonials Track */}
            <div className="flex gap-[20px] testimonials-track w-max py-2">
              {/* 2 copies of identical cards */}
              {[...testimonials, ...testimonials].map((test, index) => (
                <div
                  key={index}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #F3F4F6",
                    borderRadius: "16px",
                    padding: "24px",
                    width: "380px",
                    flexShrink: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div 
                      style={{
                        fontSize: "14px",
                        color: "#F59E0B",
                        marginBottom: "12px",
                      }}
                    >
                      ★★★★★
                    </div>
                    <p 
                      className="font-inter"
                      style={{
                        fontStyle: "italic",
                        fontSize: "15px",
                        color: "#374151",
                        lineHeight: 1.7,
                        marginBottom: "20px",
                      }}
                    >
                      &quot;{test.quote}&quot;
                    </p>
                  </div>

                  <div 
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={test.photo} 
                      alt={test.name}
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                      loading="lazy"
                    />
                    <div>
                      <h4 
                        className="font-outfit"
                        style={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "#111827",
                          margin: 0,
                        }}
                      >
                        {test.name}
                      </h4>
                      <p 
                        className="font-inter"
                        style={{
                          fontSize: "13px",
                          color: "#9CA3AF",
                          margin: 0,
                        }}
                      >
                        {test.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA BANNER */}
      <section className="w-full bg-white relative z-10" style={{ backgroundColor: "#FFFFFF", paddingBottom: "80px", paddingTop: "0px" }}>
        <div className="mx-4 md:mx-[60px] rounded-[24px] overflow-hidden">
          <ScrollReveal>
            <div 
              className="relative text-center py-[90px] px-6 sm:px-12 md:px-[80px]"
              style={{
                background: "linear-gradient(135deg, #8A38F5 0%, #7225E3 100%)",
              }}
            >
            {/* Grid pattern layer */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
              {/* Étiquette */}
              <span 
                className="font-outfit uppercase text-white/70 block"
                style={{
                  fontSize: "13px",
                  letterSpacing: "0.1em",
                }}
              >
                ✦ Commencez aujourd&apos;hui
              </span>

              {/* Titre */}
              <h2 
                className="font-outfit text-white font-extrabold mx-auto leading-tight"
                style={{
                  fontSize: "min(48px, 9.5vw)",
                  fontWeight: 800,
                  maxWidth: "640px",
                  marginTop: "16px",
                }}
              >
                Si vous êtes arrivé jusque-là, c&apos;est que vous êtes prêt.
              </h2>

              {/* Sous-titre */}
              <p 
                className="font-inter text-white/70"
                style={{
                  fontSize: "17px",
                  marginTop: "12px",
                }}
              >
                7 jours gratuits · Sans carte bancaire · Sans engagement
              </p>

              {/* Badges de confiance */}
              <div 
                className="flex flex-wrap items-center justify-center gap-[16px]"
                style={{ marginTop: "24px" }}
              >
                {[
                  "🔒 Paiement sécurisé",
                  "⚡ Setup en 5 minutes",
                  "🇫🇷 Support en français",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="font-inter text-white border"
                    style={{
                      background: "rgba(255,255,255,0.12)",
                      borderColor: "rgba(255,255,255,0.2)",
                      borderRadius: "100px",
                      padding: "6px 14px",
                      fontSize: "12px",
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Boutons */}
              <div 
                className="flex flex-col sm:flex-row items-center justify-center gap-[14px]"
                style={{ marginTop: "36px" }}
              >
                <Link
                  href="/pricing"
                  className="font-inter text-center hover:scale-[1.02] transition-transform"
                  style={{
                    background: "#ffffff",
                    color: "#7225E3",
                    fontWeight: 700,
                    padding: "14px 32px",
                    borderRadius: "10px",
                  }}
                >
                  Commencez gratuitement !
                </Link>
                <Link
                  href="/pricing"
                  className="font-inter text-center text-white border hover:bg-white/5 transition-colors"
                  style={{
                    background: "transparent",
                    borderColor: "rgba(255,255,255,0.4)",
                    padding: "14px 32px",
                    borderRadius: "10px",
                  }}
                >
                  Voir les tarifs →
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
        </div>
      </section>

      {/* Target for link anchors */}
      <div id="pour-qui" />

    </div>
  );
}
