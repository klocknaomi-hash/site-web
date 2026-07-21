"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Sparkles, Calendar, BarChart3, Layers, ArrowRight } from "lucide-react";
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

interface QuickFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface StepItem {
  eyebrow: string;
  title: string;
  description: string;
}

export default function FeaturesSection() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  // 4 static quick overview features for PARTIE A
  const quickFeatures: QuickFeature[] = [
    {
      icon: <Sparkles className="w-6 h-6 text-[#7225E3]" />,
      title: "Génération IA",
      description: "Rédigez et adaptez vos posts en quelques secondes grâce à notre IA sur-mesure.",
    },
    {
      icon: <Calendar className="w-6 h-6 text-[#7225E3]" />,
      title: "Planification",
      description: "Visualisez et organisez votre calendrier éditorial pour garder une longueur d'avance.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-[#7225E3]" />,
      title: "Analytics unifiés",
      description: "Suivez la portée et l'engagement de tous vos réseaux en un coup d'œil.",
    },
    {
      icon: <Layers className="w-6 h-6 text-[#7225E3]" />,
      title: "Multi-comptes équipe",
      description: "Connectez Instagram, LinkedIn, TikTok et Facebook sans basculer d'onglet.",
    },
  ];

  // 4 detailed steps for PARTIE B
  const steps: StepItem[] = [
    {
      eyebrow: "Connexion rapide",
      title: "Centralisez tout",
      description: "Connectez vos réseaux et retrouvez tous vos contenus au même endroit. Fini les onglets ouverts en permanence.",
    },
    {
      eyebrow: "IA rédactionnelle",
      title: "Créez sans effort",
      description: "Rédigez votre légende. L'agent IA reformule, améliore et adapte votre texte en quelques secondes.",
    },
    {
      eyebrow: "Calendrier éditorial",
      title: "Planifiez intelligemment",
      description: "Organisez vos publications sur un calendrier éditorial clair. Visualisez votre stratégie sur 30 jours.",
    },
    {
      eyebrow: "Multi-diffusion & Stats",
      title: "Publiez partout & mesurez",
      description: "Diffusez en un clic sur tous vos comptes et analysez vos performances en temps réel.",
    },
  ];

  // IntersectionObserver for scroll-driven active step in PARTIE B
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((el, index) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveStep(index);
            }
          });
        },
        {
          rootMargin: "-35% 0px -35% 0px",
          threshold: 0.2,
        }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const scrollToStep = (index: number) => {
    setActiveStep(index);
    stepRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const renderMockup = (idx: number) => {
    switch (idx) {
      case 0:
        return (
          <div className="bg-[#F5F3FF] w-full h-full rounded-2xl p-4 sm:p-6 flex flex-col justify-center items-center overflow-hidden border border-purple-100 min-h-[340px]">
            <div className="w-full max-w-[310px] bg-white rounded-xl border border-[#F3F4F6] shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-4 flex flex-col space-y-2.5">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Vos réseaux connectés
              </div>
              <div className="flex items-center justify-between bg-white border border-[#F3F4F6] rounded-lg px-3 py-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-pink-50 flex items-center justify-center">
                    {INSTAGRAM_SVG}
                  </div>
                  <span className="text-xs font-semibold text-slate-700">Instagram</span>
                </div>
                <span className="text-[9px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">Connecté</span>
              </div>
              <div className="flex items-center justify-between bg-white border border-[#F3F4F6] rounded-lg px-3 py-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center">
                    {LINKEDIN_SVG}
                  </div>
                  <span className="text-xs font-semibold text-slate-700">LinkedIn</span>
                </div>
                <span className="text-[9px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">Connecté</span>
              </div>
              <div className="flex items-center justify-between bg-white border border-[#F3F4F6] rounded-lg px-3 py-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
                    {TIKTOK_SVG}
                  </div>
                  <span className="text-xs font-semibold text-slate-700">TikTok</span>
                </div>
                <span className="text-[9px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">Connecté</span>
              </div>
              <div className="flex items-center justify-between bg-white border border-[#F3F4F6] rounded-lg px-3 py-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center">
                    {FACEBOOK_SVG}
                  </div>
                  <span className="text-xs font-semibold text-slate-700">Facebook</span>
                </div>
                <span className="text-[9px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">Connecté</span>
              </div>
              <div className="pt-2 flex justify-center">
                <button className="px-4 py-1.5 bg-gradient-to-r from-[#8A38F5] to-[#7225E3] text-white text-xs font-bold rounded-full shadow-sm">
                  ✦ Tout centraliser
                </button>
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="bg-[#FFF8F8] w-full h-full rounded-2xl p-4 sm:p-6 flex flex-col justify-center items-center overflow-hidden border border-rose-100 min-h-[340px]">
            <div className="w-full max-w-[310px] bg-white rounded-xl border border-[#F3F4F6] shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-4 flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Agent IA · Rédaction</span>
                <span className="w-2 h-2 rounded-full bg-[#7225E3] animate-pulse"></span>
              </div>
              <div className="bg-slate-50 border border-[#E5E7EB] rounded-lg p-2.5 text-xs text-slate-400 font-medium mb-3">
                Décrivez votre post en quelques mots...
              </div>
              <div className="space-y-2">
                <div className="bg-[#F5F3FF] border-l-[3px] border-[#7225E3] p-2.5 rounded-r-md text-xs space-y-1">
                  <div className="font-bold text-[#7225E3]">🚀 LinkedIn · Professionnel</div>
                  <p className="text-slate-600 text-[11px] leading-tight">Optimisez vos publications avec notre IA pour une portée maximale.</p>
                </div>
                <div className="bg-white border border-[#F3F4F6] p-2.5 rounded-md text-xs space-y-1">
                  <div className="font-bold text-pink-600">📸 Instagram · Engageant</div>
                  <p className="text-slate-600 text-[11px] leading-tight">Une légende captivante avec des hashtags pertinents.</p>
                </div>
                <div className="bg-white border border-[#F3F4F6] p-2.5 rounded-md text-xs space-y-1">
                  <div className="font-bold text-slate-800">🎵 TikTok · Viral</div>
                  <p className="text-slate-600 text-[11px] leading-tight">Accroche percutante adaptée aux tendances actuelles.</p>
                </div>
              </div>
              <div className="flex justify-end mt-3">
                <button className="px-3.5 py-1.5 bg-[#7225E3] hover:bg-[#8A38F5] text-white text-xs font-bold rounded-lg flex items-center gap-1">
                  ✦ Générer avec l&apos;IA
                </button>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="bg-[#F0FDF4] w-full h-full rounded-2xl p-4 sm:p-6 flex flex-col justify-center items-center overflow-hidden border border-emerald-100 min-h-[340px]">
            <div className="w-full max-w-[310px] bg-white rounded-xl border border-[#F3F4F6] shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-3.5 flex flex-col">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                Calendrier éditorial · Mai 2025
              </div>
              <div className="grid grid-cols-7 gap-1 text-center mb-1">
                {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, dIdx) => (
                  <span key={dIdx} className="text-[10px] font-bold text-slate-400 py-0.5">{day}</span>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: 28 }).map((_, cIdx) => {
                  const dayNumber = cIdx - 2 <= 0 ? 30 + (cIdx - 2) : cIdx - 2;
                  const isCurrentMonth = cIdx > 2;
                  const isToday = dayNumber === 15 && isCurrentMonth;
                  const hasInsta = isCurrentMonth && (dayNumber === 12 || dayNumber === 15 || dayNumber === 22);
                  const hasLinkedIn = isCurrentMonth && (dayNumber === 6 || dayNumber === 22);
                  const hasTikTok = isCurrentMonth && (dayNumber === 19 || dayNumber === 15);
                  return (
                    <div
                      key={cIdx}
                      className={`h-[30px] rounded-lg flex flex-col items-center justify-between py-0.5 relative text-[10px] font-semibold ${
                        isToday 
                          ? "border-2 border-[#7225E3] bg-[#F5F3FF] text-[#7225E3]" 
                          : isCurrentMonth ? "text-slate-700" : "text-slate-300"
                      }`}
                    >
                      <span>{dayNumber}</span>
                      <div className="flex gap-[2px] justify-center pb-0.5">
                        {hasInsta && <span className="w-1 h-1 rounded-full bg-[#7225E3]" />}
                        {hasLinkedIn && <span className="w-1 h-1 rounded-full bg-blue-500" />}
                        {hasTikTok && <span className="w-1 h-1 rounded-full bg-red-500" />}
                      </div>
                    </div>
                  );
                })}
              </div>
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
        );
      case 3:
      default:
        return (
          <div className="bg-[#FFFBF0] w-full h-full rounded-2xl p-4 sm:p-6 flex flex-col justify-center items-center overflow-hidden border border-amber-100 min-h-[340px]">
            <div className="w-full max-w-[340px] bg-white rounded-xl border border-[#F3F4F6] shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-4 flex gap-3">
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Publié sur :
                  </div>
                  <div className="flex items-center gap-1.5 mb-3 flex-wrap">
                    <div className="relative">
                      <div className="w-7 h-7 rounded-full bg-pink-50 flex items-center justify-center">
                        {INSTAGRAM_SVG}
                      </div>
                      <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full text-white text-[7px] flex items-center justify-center border border-white font-bold">✓</span>
                    </div>
                    <div className="relative">
                      <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center">
                        {LINKEDIN_SVG}
                      </div>
                      <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full text-white text-[7px] flex items-center justify-center border border-white font-bold">✓</span>
                    </div>
                    <div className="relative">
                      <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center">
                        {TIKTOK_SVG}
                      </div>
                      <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full text-white text-[7px] flex items-center justify-center border border-white font-bold">✓</span>
                    </div>
                    <div className="relative">
                      <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center">
                        {FACEBOOK_SVG}
                      </div>
                      <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full text-white text-[7px] flex items-center justify-center border border-white font-bold">✓</span>
                    </div>
                  </div>
                </div>
                <button className="w-full py-1.5 bg-[#7225E3] hover:bg-[#8A38F5] text-white text-[10px] font-bold rounded-lg text-center">
                  ✦ Publier partout
                </button>
              </div>

              <div className="w-[1px] bg-[#E5E7EB] self-stretch" />

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Performances
                  </div>
                  <div className="space-y-2">
                    <div className="flex flex-col">
                      <span className="text-[9px] text-slate-400">Portée</span>
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-bold text-slate-800">284k</span>
                        <span className="text-[8px] font-bold text-emerald-600 bg-emerald-50 px-1 py-0.2 rounded">↑ +41%</span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] text-slate-400">Engagement</span>
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-bold text-slate-800">6.8%</span>
                        <span className="text-[8px] font-bold text-emerald-600 bg-emerald-50 px-1 py-0.2 rounded">↑ +2.1pp</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-end gap-1.5 h-6 mt-2 pb-0.5">
                  {[25, 55, 35, 90, 70].map((height, bIdx) => (
                    <div
                      key={bIdx}
                      className="flex-1 bg-[#7225E3] rounded-t-sm"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="features" className="bg-[#FFFFFF] py-20 lg:py-28 relative border-t border-slate-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================== */}
        {/* PARTIE A — APERÇU RAPIDE (Statique)        */}
        {/* ========================================== */}
        <div className="mb-24 sm:mb-32">
          {/* Header Partie A */}
          <div className="text-center max-w-[680px] mx-auto mb-14">
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

          {/* Grille de 4 cartes statiques */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
            {quickFeatures.map((feature, idx) => (
              <ScrollReveal key={idx} delay={100 * (idx + 1)}>
                <div className="bg-[#FFFFFF] border border-[#F3F4F6] rounded-[20px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:border-[rgba(139,92,246,0.3)] hover:shadow-[0_8px_32px_rgba(139,92,246,0.1)] transition-all duration-300 flex flex-col h-full group">
                  <div className="w-12 h-12 rounded-2xl bg-[#F5F3FF] text-[#7225E3] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-outfit text-xl font-bold text-[#111827] mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-inter text-sm text-[#6B7280] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* ========================================== */}
        {/* PARTIE B — DÉTAIL APPROFONDI (Scroll-driven) */}
        {/* ========================================== */}
        <div className="pt-12 border-t border-slate-100">
          {/* Header Partie B */}
          <div className="text-center max-w-[760px] mx-auto mb-16 sm:mb-20">
            <ScrollReveal>
              <span className="font-outfit font-medium text-[12px] text-[#7225E3] uppercase tracking-[0.12em] block mb-2">
                EN DÉTAIL
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="font-outfit text-[30px] sm:text-[38px] md:text-[44px] font-extrabold tracking-[-0.03em] text-[#111827] leading-[1.15] mb-4">
                Découvrez comment Creatabl transforme votre gestion de contenu
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="font-inter font-medium text-[15px] sm:text-[18px] text-[#6B7280]">
                Une expérience fluide et automatisée à chaque étape de votre création.
              </p>
            </ScrollReveal>
          </div>

          {/* Desktop Layout (2 colonnes scroll-driven + sticky) */}
          <div className="hidden md:grid md:grid-cols-12 gap-8 lg:gap-12 items-start relative max-w-[1200px] mx-auto">
            
            {/* Left Column: Vertical Steps */}
            <div className="md:col-span-5 space-y-12 py-12">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={idx}
                    ref={(el) => {
                      stepRefs.current[idx] = el;
                    }}
                    onClick={() => scrollToStep(idx)}
                    className={`cursor-pointer transition-all duration-300 min-h-[55vh] flex flex-col justify-center pl-6 border-l-4 ${
                      isActive
                        ? "border-[#7225E3] opacity-100 scale-[1.01]"
                        : "border-slate-200 opacity-40 hover:opacity-75"
                    }`}
                  >
                    <span className={`font-outfit font-semibold text-xs uppercase tracking-wider mb-2 transition-colors ${
                      isActive ? "text-[#7225E3]" : "text-slate-400"
                    }`}>
                      Étape {idx + 1} · {step.eyebrow}
                    </span>
                    <h3 className={`font-outfit text-2xl lg:text-3xl font-bold mb-3 transition-colors ${
                      isActive ? "text-[#111827]" : "text-slate-500"
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`font-inter text-base leading-relaxed transition-colors ${
                      isActive ? "text-[#4B5563]" : "text-slate-400"
                    }`}>
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Sticky Mockup */}
            <div className="md:col-span-7 sticky top-28 py-12">
              <div className="relative w-full h-[520px] bg-white rounded-[24px] border border-[#F3F4F6] shadow-[0_8px_32px_rgba(0,0,0,0.06)] overflow-hidden flex items-center justify-center p-4">
                {steps.map((_, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <div
                      key={idx}
                      className={`absolute inset-0 p-4 sm:p-6 flex flex-col justify-center transition-all duration-500 ease-out transform ${
                        isActive
                          ? "opacity-100 scale-100 z-10 pointer-events-auto"
                          : "opacity-0 scale-95 z-0 pointer-events-none"
                      }`}
                    >
                      {renderMockup(idx)}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Mobile Layout (< md) */}
          <div className="md:hidden space-y-8">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white border border-[#F3F4F6] rounded-[20px] p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#F5F3FF] text-[#7225E3] font-bold flex items-center justify-center text-sm">
                    {idx + 1}
                  </span>
                  <span className="font-outfit text-xs font-semibold text-[#7225E3] uppercase tracking-wider">
                    {step.eyebrow}
                  </span>
                </div>
                <h3 className="font-outfit text-2xl font-bold text-[#111827]">
                  {step.title}
                </h3>
                <p className="font-inter text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
                <div className="mt-4 rounded-xl overflow-hidden border border-[#F3F4F6]">
                  {renderMockup(idx)}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button at bottom of Partie B */}
          <div className="mt-16 sm:mt-24 text-center">
            <ScrollReveal>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#7225E3] to-[#8A38F5] text-white font-bold text-base sm:text-lg shadow-[0_4px_20px_rgba(114,37,227,0.3)] hover:shadow-[0_6px_24px_rgba(114,37,227,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Créer un compte gratuitement</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
