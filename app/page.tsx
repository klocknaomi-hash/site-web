import React from "react";
import Link from "next/link";
import LogosStrip from "@/components/LogosStrip";
import ScrollReveal from "@/components/ScrollReveal";

const INSTAGRAM_SVG = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-pink-500">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LINKEDIN_SVG = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-blue-600">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TIKTOK_SVG = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-black">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.86 1.08 2.07 1.85 3.4 2.27V10.1c-1.74-.08-3.41-.78-4.73-1.92-.12-.1-.23-.21-.34-.32v7.71c.08 2.3-1.02 4.54-2.87 5.79-1.94 1.34-4.56 1.63-6.73.74-2.25-.91-3.86-3.14-4.05-5.58-.29-3.23 2.1-6.19 5.33-6.49 1.03-.1 2.08.09 3.02.55V3.86c-1.52-.42-3.13-.3-4.57.34-1.85.83-3.22 2.53-3.64 4.53-.52 2.44.25 5.06 1.96 6.84 1.76 1.84 4.4 2.5 6.87 1.7 2.19-.7 3.82-2.73 4.12-5.02.07-.5.08-1.01.07-1.51V.02z"/>
  </svg>
);

const FACEBOOK_SVG = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-blue-600">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

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

          {/* Grille 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] max-w-[1100px] mx-auto">
            
            {/* CARTE 1 */}
            <ScrollReveal delay={100}>
              <div className="bg-[#FFFFFF] border border-[#F3F4F6] rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden hover:border-[rgba(139,92,246,0.25)] hover:shadow-[0_8px_32px_rgba(139,92,246,0.1)] transition-all duration-[250ms] ease-in-out flex flex-col h-full group">
                
                {/* ZONE MAQUETTE (fond #FFFFFF, height: 260px, overflow: hidden) */}
                <div className="bg-[#FFFFFF] h-[260px] overflow-hidden relative flex flex-col justify-end">
                  <div className="w-full px-6 pt-5 flex flex-col items-center h-full">
                    <div className="w-full max-w-[280px] bg-white rounded-xl border border-[#F3F4F6] shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-4 flex flex-col transform translate-y-3 group-hover:translate-y-1 transition-transform duration-300">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Vos réseaux connectés
                      </div>
                      <div className="space-y-1.5">
                        {/* Instagram */}
                        <div className="flex items-center justify-between bg-white border border-[#F3F4F6] rounded-lg px-3 py-2">
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-pink-50 flex items-center justify-center">
                              {INSTAGRAM_SVG}
                            </div>
                            <span className="text-[11px] font-semibold text-slate-700">Instagram</span>
                          </div>
                          <span className="text-[8px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full font-bold">Connecté</span>
                        </div>
                        {/* LinkedIn */}
                        <div className="flex items-center justify-between bg-white border border-[#F3F4F6] rounded-lg px-3 py-2">
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
                              {LINKEDIN_SVG}
                            </div>
                            <span className="text-[11px] font-semibold text-slate-700">LinkedIn</span>
                          </div>
                          <span className="text-[8px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full font-bold">Connecté</span>
                        </div>
                        {/* TikTok */}
                        <div className="flex items-center justify-between bg-white border border-[#F3F4F6] rounded-lg px-3 py-2">
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center">
                              {TIKTOK_SVG}
                            </div>
                            <span className="text-[11px] font-semibold text-slate-700">TikTok</span>
                          </div>
                          <span className="text-[8px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full font-bold">Connecté</span>
                        </div>
                        {/* Facebook */}
                        <div className="flex items-center justify-between bg-white border border-[#F3F4F6] rounded-lg px-3 py-2">
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
                              {FACEBOOK_SVG}
                            </div>
                            <span className="text-[11px] font-semibold text-slate-700">Facebook</span>
                          </div>
                          <span className="text-[8px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full font-bold">Connecté</span>
                        </div>
                      </div>
                      
                      <div className="mt-3 flex justify-center">
                        <button className="px-4 py-1.5 bg-gradient-to-r from-[#8A38F5] to-[#7225E3] text-white text-[10px] font-bold rounded-full shadow-sm hover:shadow-md transition-all duration-200">
                          ✦ Tout centraliser
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ZONE TEXTE (padding: 24px) */}
                <div className="p-[24px] flex flex-col space-y-2">
                  <span className="font-outfit font-medium text-[12px] text-[#7225E3] uppercase tracking-[0.12em]">
                    Étape 1
                  </span>
                  <h3 className="font-outfit text-[22px] font-bold text-[#111827] leading-tight">
                    Centralisez tout
                  </h3>
                  <p className="font-inter text-[15px] text-[#6B7280] leading-[1.65]">
                    Connectez vos réseaux et retrouvez tous vos contenus au même endroit. Fini les onglets ouverts en permanence.
                  </p>
                </div>

              </div>
            </ScrollReveal>

            {/* CARTE 2 */}
            <ScrollReveal delay={200}>
              <div className="bg-[#FFFFFF] border border-[#F3F4F6] rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden hover:border-[rgba(139,92,246,0.25)] hover:shadow-[0_8px_32px_rgba(139,92,246,0.1)] transition-all duration-[250ms] ease-in-out flex flex-col h-full group">
                
                {/* ZONE MAQUETTE (fond #FFFFFF, height: 260px, overflow: hidden) */}
                <div className="bg-[#FFFFFF] h-[260px] overflow-hidden relative flex flex-col justify-end">
                  <div className="w-full px-6 pt-5 flex flex-col items-center h-full">
                    <div className="w-full max-w-[280px] bg-white rounded-xl border border-[#F3F4F6] shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-4 flex flex-col transform translate-y-3 group-hover:translate-y-1 transition-transform duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Agent IA · Rédaction</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7225E3] animate-pulse"></span>
                      </div>
                      
                      {/* Input field */}
                      <div className="bg-white border border-[#E5E7EB] rounded-lg p-2.5 text-[10px] text-slate-400 font-medium select-none mb-2">
                        Décrivez votre post en quelques mots...
                      </div>

                      {/* Stacked AI bubbles */}
                      <div className="space-y-1.5 max-h-[110px] overflow-hidden">
                        {/* Bubble 1 */}
                        <div className="bg-[#F5F3FF] border-l-[3px] border-[#7225E3] p-2 rounded-r-md text-[9px] space-y-0.5">
                          <div className="font-bold text-[#7225E3]">🚀 LinkedIn · Professionnel</div>
                          <p className="text-slate-500 leading-tight">Optimisez vos publications avec notre IA pour une portée maximale.</p>
                        </div>
                        
                        {/* Bubble 2 */}
                        <div className="bg-white border border-[#F3F4F6] p-2 rounded-md text-[9px] space-y-0.5">
                          <div className="font-bold text-pink-600">📸 Instagram · Engageant</div>
                          <p className="text-slate-500 leading-tight">Une légende captivante avec des hashtags pertinents.</p>
                        </div>

                        {/* Bubble 3 */}
                        <div className="bg-white border border-[#F3F4F6] p-2 rounded-md text-[9px] space-y-0.5">
                          <div className="font-bold text-slate-800">🎵 TikTok · Viral</div>
                          <p className="text-slate-500 leading-tight">Accroche percutante adaptée aux tendances actuelles.</p>
                        </div>
                      </div>

                      {/* Generate button */}
                      <div className="flex justify-end mt-2">
                        <button className="px-3 py-1 bg-[#7225E3] hover:bg-[#8A38F5] text-white text-[10px] font-bold rounded-lg flex items-center gap-1 transition-colors">
                          ✦ Générer avec l&apos;IA
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ZONE TEXTE (padding: 24px) */}
                <div className="p-[24px] flex flex-col space-y-2">
                  <span className="font-outfit font-medium text-[12px] text-[#7225E3] uppercase tracking-[0.12em]">
                    Étape 2
                  </span>
                  <h3 className="font-outfit text-[22px] font-bold text-[#111827] leading-tight">
                    Créez sans effort
                  </h3>
                  <p className="font-inter text-[15px] text-[#6B7280] leading-[1.65]">
                    Rédigez votre légende. L&apos;agent IA reformule, améliore et adapte votre texte en quelques secondes.
                  </p>
                </div>

              </div>
            </ScrollReveal>

            {/* CARTE 3 */}
            <ScrollReveal delay={300}>
              <div className="bg-[#FFFFFF] border border-[#F3F4F6] rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden hover:border-[rgba(139,92,246,0.25)] hover:shadow-[0_8px_32px_rgba(139,92,246,0.1)] transition-all duration-[250ms] ease-in-out flex flex-col h-full group">
                
                {/* ZONE MAQUETTE (fond #FFFFFF, height: 260px, overflow: hidden) */}
                <div className="bg-[#FFFFFF] h-[260px] overflow-hidden relative flex flex-col justify-end">
                  <div className="w-full px-6 pt-5 flex flex-col items-center h-full">
                    <div className="w-full max-w-[280px] bg-white rounded-xl border border-[#F3F4F6] shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-3 flex flex-col transform translate-y-3 group-hover:translate-y-1 transition-transform duration-300">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Calendrier éditorial · Mai 2025
                      </div>
                      
                      {/* Grid of days */}
                      <div className="grid grid-cols-7 gap-1 text-center mb-1">
                        {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, idx) => (
                          <span key={idx} className="text-[10px] font-bold text-slate-400 py-0.5">{day}</span>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-7 gap-1">
                        {Array.from({ length: 28 }).map((_, idx) => {
                          const dayNumber = idx - 2 <= 0 ? 30 + (idx - 2) : idx - 2;
                          const isCurrentMonth = idx > 2;
                          const isToday = dayNumber === 15 && isCurrentMonth;
                          
                          // Scheduled posts
                          const hasInsta = isCurrentMonth && (dayNumber === 12 || dayNumber === 15 || dayNumber === 22);
                          const hasLinkedIn = isCurrentMonth && (dayNumber === 6 || dayNumber === 22);
                          const hasTikTok = isCurrentMonth && (dayNumber === 19 || dayNumber === 15);
                          
                          return (
                            <div
                              key={idx}
                              className={`h-[34px] w-[34px] rounded-lg flex flex-col items-center justify-between py-1 relative text-[10px] font-semibold transition-colors cursor-pointer ${
                                isToday 
                                  ? "border-2 border-[#7225E3] bg-[#F5F3FF] text-[#7225E3]" 
                                  : isCurrentMonth ? "text-slate-700 hover:bg-[#F5F3FF]" : "text-slate-300 hover:bg-[#F5F3FF]"
                              }`}
                            >
                              <span>{dayNumber}</span>
                              <div className="flex gap-[2px] justify-center absolute bottom-0.5">
                                {hasInsta && <span className="w-1 h-1 rounded-full bg-[#7225E3]" />}
                                {hasLinkedIn && <span className="w-1 h-1 rounded-full bg-blue-500" />}
                                {hasTikTok && <span className="w-1 h-1 rounded-full bg-red-500" />}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Legend */}
                      <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-center gap-3 text-[9px] text-slate-500">
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#7225E3]" />
                          <span>Instagram</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          <span>LinkedIn</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                          <span>TikTok</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ZONE TEXTE (padding: 24px) */}
                <div className="p-[24px] flex flex-col space-y-2">
                  <span className="font-outfit font-medium text-[12px] text-[#7225E3] uppercase tracking-[0.12em]">
                    Étape 3
                  </span>
                  <h3 className="font-outfit text-[22px] font-bold text-[#111827] leading-tight">
                    Planifiez intelligemment
                  </h3>
                  <p className="font-inter text-[15px] text-[#6B7280] leading-[1.65]">
                    Organisez vos publications sur un calendrier éditorial clair. Visualisez votre stratégie sur 30 jours.
                  </p>
                </div>

              </div>
            </ScrollReveal>

            {/* CARTE 4 */}
            <ScrollReveal delay={400}>
              <div className="bg-[#FFFFFF] border border-[#F3F4F6] rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden hover:border-[rgba(139,92,246,0.25)] hover:shadow-[0_8px_32px_rgba(139,92,246,0.1)] transition-all duration-[250ms] ease-in-out flex flex-col h-full group">
                
                {/* ZONE MAQUETTE (fond #FFFFFF, height: 260px, overflow: hidden) */}
                <div className="bg-[#FFFFFF] h-[260px] overflow-hidden relative flex flex-col justify-end">
                  <div className="w-full px-4 pt-5 flex flex-col items-center h-full">
                    <div className="w-full max-w-[310px] bg-white rounded-xl border border-[#F3F4F6] shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-3.5 flex gap-3 transform translate-y-3 group-hover:translate-y-1 transition-transform duration-300">
                      
                      {/* Left Column - Multi-network publishing */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                            Publié sur :
                          </div>
                          <div className="flex items-center gap-1.5 mb-3 flex-wrap">
                            {/* Instagram ✓ */}
                            <div className="relative">
                              <div className="w-7 h-7 rounded-full bg-pink-50 flex items-center justify-center">
                                {INSTAGRAM_SVG}
                              </div>
                              <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full text-white text-[7px] flex items-center justify-center border border-white font-bold">✓</span>
                            </div>
                            {/* LinkedIn ✓ */}
                            <div className="relative">
                              <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center">
                                {LINKEDIN_SVG}
                              </div>
                              <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full text-white text-[7px] flex items-center justify-center border border-white font-bold">✓</span>
                            </div>
                            {/* TikTok ✓ */}
                            <div className="relative">
                              <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center">
                                {TIKTOK_SVG}
                              </div>
                              <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full text-white text-[7px] flex items-center justify-center border border-white font-bold">✓</span>
                            </div>
                            {/* Facebook ✓ */}
                            <div className="relative">
                              <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center">
                                {FACEBOOK_SVG}
                              </div>
                              <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full text-white text-[7px] flex items-center justify-center border border-white font-bold">✓</span>
                            </div>
                          </div>
                        </div>
                        
                        <button className="w-full py-1.5 bg-[#7225E3] hover:bg-[#8A38F5] text-white text-[10px] font-bold rounded-lg text-center transition-colors">
                          ✦ Publier partout
                        </button>
                      </div>

                      {/* Vertical Separator */}
                      <div className="w-[1px] bg-[#E5E7EB] self-stretch" />

                      {/* Right Column - Analytics */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                            Performances
                          </div>
                          <div className="space-y-2">
                            {/* Metric 1 */}
                            <div className="flex flex-col">
                              <span className="text-[9px] text-slate-400">Portée</span>
                              <div className="flex items-center gap-1.5">
                                <span className="text-xs font-bold text-slate-800">284k</span>
                                <span className="text-[8px] font-bold text-emerald-600 bg-emerald-50 px-1 py-0.2 rounded">↑ +41%</span>
                              </div>
                            </div>
                            {/* Metric 2 */}
                            <div className="flex flex-col">
                              <span className="text-[9px] text-slate-400">Engagement</span>
                              <div className="flex items-center gap-1.5">
                                <span className="text-xs font-bold text-slate-800">6.8%</span>
                                <span className="text-[8px] font-bold text-emerald-600 bg-emerald-50 px-1 py-0.2 rounded">↑ +2.1pp</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Mini bar chart */}
                        <div className="flex items-end gap-1.5 h-6 mt-2 pb-0.5">
                          {[25, 55, 35, 90, 70].map((height, idx) => (
                            <div
                              key={idx}
                              className="flex-1 bg-[#7225E3] rounded-t-sm"
                              style={{ height: `${height}%` }}
                            />
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                {/* ZONE TEXTE (padding: 24px) */}
                <div className="p-[24px] flex flex-col space-y-2">
                  <span className="font-outfit font-medium text-[12px] text-[#7225E3] uppercase tracking-[0.12em]">
                    Étape 4 · 5
                  </span>
                  <h3 className="font-outfit text-[22px] font-bold text-[#111827] leading-tight">
                    Publiez partout &amp; mesurez
                  </h3>
                  <p className="font-inter text-[15px] text-[#6B7280] leading-[1.65]">
                    LinkedIn, Instagram, TikTok, Facebook — diffusez en un clic puis suivez vos performances et identifiez vos meilleurs contenus.
                  </p>
                </div>

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
                  fontSize: "11px",
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
