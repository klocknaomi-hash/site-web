import React from "react";
import { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Agent IA & Tendances | Creatabl.ia",
  description: "Suivez les tendances en direct et générez des posts à fort potentiel d'engagement grâce à nos agents spécialisés.",
};

export default function AgentIaPage() {
  const bullets = [
    "Détection automatique des tendances en temps réel",
    "Génération de posts optimisés en un clic",
    "Suggestions d'accroches magiques",
    "Idées de visuels et de formats créatifs",
    "Recherche par mots-clés et hashtags populaires",
  ];

  return (
    <div className="relative pt-28 bg-white min-h-screen text-slate-800">
      {/* Glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none radial-glow opacity-50 z-0" />

      {/* Main Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal>
              <span className="text-xs font-bold text-[#7225E3] uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full">
                Fonctionnalité
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
                Agent IA (Tendances)
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p className="text-xl text-[#7225E3] font-semibold">
                Exploitez la puissance des tendances pour vos publications.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={200} className="space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              <p>
                Ne créez plus du contenu à l&apos;aveugle. Notre agent IA analyse en permanence les sujets chauds, les discussions populaires et les tendances de votre secteur sur Google, Reddit et YouTube pour vous souffler des idées à fort potentiel d&apos;engagement. Vous restez ainsi toujours pertinent et réactif par rapport aux actualités de votre communauté.
              </p>
              <p>
                En sélectionnant simplement une tendance dans votre tableau de bord, nos agents spécialisés (Générateur d&apos;idées, Accroche Magique, Optimiseur SEO) génèrent instantanément 3 idées de posts uniques et structurées, prêtes à l&apos;emploi. Il vous suffit d&apos;un clic pour les transférer dans l&apos;éditeur et les planifier.
              </p>
              <p>
                Nos modèles s&apos;adaptent automatiquement aux exigences techniques de chaque réseau. Ils intègrent les meilleurs hashtags de niche, structurent le texte pour favoriser le taux de clic et suggèrent des concepts de visuels créatifs pour accompagner votre texte, maximisant ainsi l&apos;impact visuel et la portée organique de chaque publication.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: Visual Checklist & Visual Mockup */}
          <div className="lg:col-span-5 space-y-8">
            {/* Visual Mockup */}
            <ScrollReveal delay={200}>
              <div className="relative group p-1.5 rounded-3xl bg-gradient-to-tr from-slate-200/50 via-slate-100 to-purple-500/10 shadow-sm">
                <div className="absolute inset-0 bg-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none" />
                <div className="bg-white border border-slate-200 rounded-2xl p-2 shadow-md overflow-hidden">
                  <video
                    src="/videos/demo-agent-ia.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      width: '100%',
                      borderRadius: '16px',
                      border: '1px solid rgba(127,119,221,0.2)',
                    }}
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Checklist */}
            <ScrollReveal delay={250}>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-sm font-bold text-slate-800 mb-4">Fonctionnalités incluses :</h3>
                <ul className="space-y-3">
                  {bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
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
          <div className="relative overflow-hidden rounded-3xl border border-purple-200/50 bg-[#F5F3FF] p-8 sm:p-12 md:p-16 text-center shadow-lg">
            <div className="absolute inset-0 radial-glow-cta pointer-events-none" />
            <div className="max-w-2xl mx-auto space-y-6 relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Prêt à devancer les tendances ?
              </h2>
              <p className="text-sm sm:text-base text-slate-500 max-w-md mx-auto">
                Laissez notre agent IA repérer les opportunités pour vous et créez des posts viraux en un clic.
              </p>
              <div className="pt-4">
                <a
                  href="https://app.creatabl-ia.com/sign-up"
                  className="inline-flex items-center gap-2 px-8 py-4 btn-purple-primary shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all hover:-translate-y-0.5 group"
                >
                  <span>Activer mon agent IA →</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
