import React from "react";
import { Metadata } from "next";
import { CheckCircle2, BarChart2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Analytics temps réel | Creatabl.ia",
  description: "Toutes vos performances, en un seul endroit. Suivez l'évolution de votre portée, impressions, clics et taux d'engagement.",
};

export default function AnalyticsPage() {
  const bullets = [
    "Dashboard unifié multi-réseaux",
    "Métriques en temps réel",
    "Identification des meilleurs contenus",
    "Rapports hebdomadaires automatiques",
    "Comparaison de périodes",
  ];

  return (
    <div className="relative pt-28 bg-white dark:bg-[#0b0a0f] min-h-screen">
      {/* Glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none radial-glow opacity-60 z-0" />

      {/* Main Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal>
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
                Fonctionnalité
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                Analytics temps réel
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p className="text-xl text-[#7225E3] font-semibold">
                Toutes vos performances, en un seul endroit.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={200} className="space-y-6 text-base sm:text-lg text-slate-650 dark:text-slate-355 leading-relaxed">
              <p>
                Visualisez les performances de tous vos comptes depuis un tableau de bord unifié. Portée, engagement, impressions, clics — chaque métrique importante accessible en un coup d&apos;œil.
              </p>
              <p>
                Identifiez vos meilleurs contenus pour comprendre ce qui résonne vraiment auprès de votre audience. Reproduisez ce qui fonctionne, abandonnez ce qui ne convertit pas.
              </p>
              <p>
                Des rapports hebdomadaires automatiques vous donnent une vue d&apos;ensemble de votre progression sans passer des heures à compiler des données manuellement.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: Visual Checklist & Visual Mockup */}
          <div className="lg:col-span-5 space-y-8">
            {/* Visual Mockup */}
            <ScrollReveal delay={200}>
              <div className="relative group p-1.5 rounded-3xl bg-gradient-to-tr from-slate-200/50 via-slate-100 to-purple-500/10 dark:from-purple-950/20 dark:to-purple-950/5">
                <div className="absolute inset-0 bg-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none" />
                <div className="bg-white dark:bg-[#121118] border border-slate-200/60 dark:border-purple-950/40 rounded-2xl p-6 space-y-4 shadow-xl">
                  <div className="flex justify-between items-center pb-3 border-b border-slate-100 dark:border-purple-950/20">
                    <div className="flex items-center gap-2">
                      <BarChart2 className="w-4 h-4 text-primary" />
                      <span className="text-sm font-bold text-slate-800 dark:text-slate-200">Tableau de bord</span>
                    </div>
                    <span className="text-xs text-emerald-500 font-bold bg-emerald-50 dark:bg-emerald-950/20 px-2 py-0.5 rounded-full">
                      +24% ce mois
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-slate-50 dark:bg-[#181622] border border-slate-100 dark:border-purple-950/10 rounded-xl shadow-sm">
                      <span className="text-[10px] text-slate-400 block">Impressions</span>
                      <span className="text-lg font-bold text-slate-800 dark:text-slate-200">142,500</span>
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-[#181622] border border-slate-100 dark:border-purple-950/10 rounded-xl shadow-sm">
                      <span className="text-[10px] text-slate-400 block">Taux d&apos;engagement</span>
                      <span className="text-lg font-bold text-slate-800 dark:text-slate-200">6.82%</span>
                    </div>
                  </div>
                  <div className="h-28 w-full pt-2">
                    <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,40 L0,32 Q15,10 30,22 T60,8 T90,26 T100,5 L100,40 Z"
                        fill="url(#chartGlow)"
                      />
                      <path
                        d="M0,32 Q15,10 30,22 T60,8 T90,26 T100,5"
                        fill="none"
                        stroke="#8B5CF6"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Checklist */}
            <ScrollReveal delay={250}>
              <div className="bg-slate-50 dark:bg-[#121118] border border-slate-100 dark:border-purple-950/20 rounded-2xl p-6 shadow-sm">
                <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-4">Fonctionnalités incluses :</h3>
                <ul className="space-y-3">
                  {bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300 font-medium">
                      <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* CTA at Bottom */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-slate-50 dark:bg-[#121118] p-8 sm:p-12 md:p-16 text-center shadow-lg">
            <div className="absolute inset-0 radial-glow-cta pointer-events-none" />
            <div className="max-w-2xl mx-auto space-y-6 relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                Pilotez vos réseaux par la donnée
              </h2>
              <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                Accédez instantanément aux rapports d&apos;activité de vos comptes pour optimiser votre stratégie.
              </p>
              <div className="pt-4">
                <a
                  href="https://app.creatabl-ia.com/sign-up"
                  className="inline-flex items-center gap-2 px-8 py-4 btn-purple-primary shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all hover:-translate-y-0.5 group"
                >
                  <span>Voir mes analytics →</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
