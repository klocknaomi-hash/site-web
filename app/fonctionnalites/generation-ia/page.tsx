import React from "react";
import { Metadata } from "next";
import { CheckCircle2, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Génération IA | Creatabl.ia",
  description: "Fini le syndrome de la page blanche. Notre agent IA génère des légendes optimisées pour chaque réseau social en quelques secondes.",
};

export default function GenerationIaPage() {
  const bullets = [
    "Génération en moins de 5 secondes",
    "Adapté à chaque réseau social",
    "Hashtags inclus automatiquement",
    "Choix du ton (pro, décontracté, viral)",
    "Apprentissage de votre style",
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
                Génération IA
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p className="text-xl text-[#7225E3] font-semibold">
                Fini le syndrome de la page blanche.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={200} className="space-y-6 text-base sm:text-lg text-slate-650 dark:text-slate-355 leading-relaxed">
              <p>
                Notre agent IA génère des légendes optimisées pour chaque réseau social en quelques secondes. Décrivez votre contenu en quelques mots, choisissez le ton, et laissez l&apos;IA faire le reste.
              </p>
              <p>
                Chaque légende est adaptée au format et au style propre à chaque plateforme — professionnel pour LinkedIn, engageant pour Instagram, viral pour TikTok.
              </p>
              <p>
                L&apos;IA apprend votre style au fil du temps pour produire des textes de plus en plus proches de votre voix. Avec les hashtags inclus, prêts à l&apos;emploi.
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
                  <div className="flex gap-2 items-center pb-3 border-b border-slate-100 dark:border-purple-950/20">
                    <Sparkles size={16} className="text-primary animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Assistant Écriture IA</span>
                  </div>
                  <div className="space-y-4">
                    {/* Input */}
                    <div>
                      <span className="text-[10px] text-slate-400 block mb-1">Votre sujet</span>
                      <div className="p-3 bg-slate-50 dark:bg-[#181622] border border-slate-100 dark:border-purple-950/10 rounded-xl text-xs text-slate-700 dark:text-slate-300 font-medium">
                        Lancer une nouvelle fonctionnalité de planification automatique
                      </div>
                    </div>
                    {/* Tones */}
                    <div className="flex gap-2">
                      {["Professionnel", "Inspirant", "Viral"].map((ton, i) => (
                        <span key={i} className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold ${i === 2 ? "bg-purple-100 text-purple-600 dark:bg-purple-950/50" : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400"}`}>
                          {ton}
                        </span>
                      ))}
                    </div>
                    {/* Result bubble */}
                    <div className="text-xs bg-slate-50 dark:bg-[#181622] border border-slate-100 dark:border-purple-950/10 p-3 rounded-xl shadow-sm">
                      <span className="text-primary font-bold text-[10px] uppercase">Légende TikTok générée :</span>
                      <p className="mt-1 text-slate-600 dark:text-slate-350 leading-relaxed text-[12px]">
                        Fini de galérer à poster au mauvais moment ! ⏰ Notre IA calcule vos heures d&apos;audience max et planifie vos publications pour vous. Clique sur le lien dans la bio ! 🚀 #automation #saaslife
                      </p>
                    </div>
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
                Libérez votre créativité
              </h2>
              <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                Laissez l&apos;IA s&apos;occuper de la rédaction de vos légendes pour toutes vos plateformes.
              </p>
              <div className="pt-4">
                <a
                  href="https://app.creatabl-ia.com/sign-up"
                  className="inline-flex items-center gap-2 px-8 py-4 btn-purple-primary shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all hover:-translate-y-0.5 group"
                >
                  <span>Essayer l&apos;IA →</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
