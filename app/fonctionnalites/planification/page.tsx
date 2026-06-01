import React from "react";
import { Metadata } from "next";
import { CheckCircle2, Calendar } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Planification intelligente | Creatabl.ia",
  description: "Publiez au bon moment, automatiquement. Creatabl analyse les données d'engagement de votre audience pour identifier les créneaux optimaux.",
};

export default function PlanificationPage() {
  const bullets = [
    "Détection automatique des heures optimales",
    "Calendrier éditorial visuel 30 jours",
    "Planification sur 6 réseaux simultanément",
    "Reprogrammation en glisser-déposer",
    "Notifications avant publication",
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
                Planification intelligente
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p className="text-xl text-[#7225E3] font-semibold">
                Publiez au bon moment, automatiquement.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={200} className="space-y-6 text-base sm:text-lg text-slate-650 dark:text-slate-350 leading-relaxed">
              <p>
                Creatabl analyse les données d&apos;engagement de votre audience pour identifier les créneaux où votre communauté est la plus active sur chaque réseau social. Plus besoin de deviner — l&apos;IA planifie à votre place.
              </p>
              <p>
                Depuis votre calendrier éditorial, visualisez toutes vos publications sur 30 jours. Glissez, déposez, réorganisez en quelques clics. Votre stratégie de contenu devient enfin claire et maîtrisée.
              </p>
              <p>
                Compatible avec Instagram, LinkedIn, TikTok, Facebook, YouTube et X. Une seule action pour publier partout au moment idéal.
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
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm font-bold text-slate-800 dark:text-slate-200">Calendrier intelligent</span>
                    </div>
                    <span className="text-xs text-slate-400">Mai 2026</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { day: "Lundi", time: "18:15", status: "Optimisé par l'IA", text: "Lancement de produit", net: "LinkedIn" },
                      { day: "Mardi", time: "12:30", status: "Engagement Élevé", text: "Coulisses de l'équipe", net: "Instagram" },
                      { day: "Mercredi", time: "20:00", status: "Recommandé", text: "Tutoriel vidéo", net: "TikTok" },
                    ].map((slot, i) => (
                      <div key={i} className="flex justify-between items-center p-3 bg-slate-50 dark:bg-[#181622] border border-slate-100 dark:border-purple-950/10 rounded-xl">
                        <div>
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className="text-[9px] text-[#7225E3] bg-[#F5F3FF] dark:bg-purple-950/50 px-1.5 py-0.5 rounded font-bold">{slot.net}</span>
                            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{slot.text}</span>
                          </div>
                          <span className="text-[10px] text-slate-400 block">{slot.day} à {slot.time}</span>
                        </div>
                        <span className="text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full font-bold">
                          {slot.status}
                        </span>
                      </div>
                    ))}
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
                Prêt à planifier sans effort ?
              </h2>
              <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                Laissez notre IA s&apos;occuper de la planification et concentrez-vous sur la création de vos contenus.
              </p>
              <div className="pt-4">
                <a
                  href="https://app.creatabl-ia.com/sign-up"
                  className="inline-flex items-center gap-2 px-8 py-4 btn-purple-primary shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all hover:-translate-y-0.5 group"
                >
                  <span>Essayer gratuitement →</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
