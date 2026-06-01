import React from "react";
import { Metadata } from "next";
import { CheckCircle2, Share2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Multi-plateforme natif | Creatabl.ia",
  description: "Un post, tous vos réseaux, en un clic. Connectez Instagram, LinkedIn, TikTok, Facebook, YouTube et X via leurs APIs officielles.",
};

export default function MultiPlateformePage() {
  const bullets = [
    "6 réseaux connectés nativement",
    "Intégration Canva directe",
    "Adaptation automatique par format",
    "APIs officielles et sécurisées",
    "Gestion multi-comptes par réseau",
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
                Multi-plateforme natif
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p className="text-xl text-[#7225E3] font-semibold">
                Un post, tous vos réseaux, en un clic.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={200} className="space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              <p>
                Creatabl offre une intégration directe avec Instagram, LinkedIn, TikTok, Facebook, YouTube et X. Nous utilisons exclusivement les APIs officielles et sécurisées de chaque réseau pour garantir la stabilité de vos comptes et respecter scrupuleusement les conditions d&apos;utilisation. Vos données d&apos;accès sont chiffrées et protégées, assurant une connexion fiable sans aucun risque de blocage ou de restriction de vos profils.
              </p>
              <p>
                Chaque plateforme impose ses propres standards en matière de dimensions d&apos;images, de durée de vidéos ou de limites de caractères. Creatabl automatise cette adaptation : notre outil redimensionne intelligemment vos visuels et tronque ou adapte vos textes pour s&apos;assurer que chaque post s&apos;affiche parfaitement, que ce soit sous forme de Reel vertical, de carrousel LinkedIn ou de tweet textuel.
              </p>
              <p>
                L&apos;intégration directe avec Canva vous permet d&apos;importer vos designs en un clic directement dans votre planificateur de contenu. Zéro téléchargement sur votre ordinateur, zéro copier-coller. De plus, notre plateforme prend en charge la gestion multi-comptes, vous permettant de gérer plusieurs marques ou profils par réseau social depuis un seul compte Creatabl, idéal pour les agences et les créateurs.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: Visual Checklist & Visual Mockup */}
          <div className="lg:col-span-5 space-y-8">
            {/* Visual Mockup */}
            <ScrollReveal delay={200}>
              <div className="relative group p-1.5 rounded-3xl bg-gradient-to-tr from-slate-200/50 via-slate-100 to-purple-500/10 shadow-sm">
                <div className="absolute inset-0 bg-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none" />
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4 shadow-md">
                  <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <Share2 className="w-4 h-4 text-[#7225E3]" />
                      <span className="text-sm font-bold text-slate-800">Canaux de diffusion</span>
                    </div>
                    <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">API Officielle</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { name: "Instagram", desc: "Reels & Carrousels", active: true },
                      { name: "LinkedIn", desc: "Articles & Posts Pro", active: true },
                      { name: "TikTok", desc: "Vidéos courtes", active: true },
                      { name: "YouTube", desc: "Shorts & Vidéos", active: true },
                      { name: "Facebook", desc: "Pages & Groupes", active: true },
                      { name: "Canva Integration", desc: "Design Direct Sync", active: false },
                    ].map((platform, i) => (
                      <div key={i} className="flex justify-between items-center p-2.5 bg-white border border-slate-100 rounded-xl shadow-sm">
                        <div>
                          <span className="text-xs font-bold text-slate-750 block">{platform.name}</span>
                          <span className="text-[9px] text-slate-400">{platform.desc}</span>
                        </div>
                        <span className={`text-[9px] px-2 py-0.5 rounded font-bold ${platform.active ? "bg-emerald-500/10 text-emerald-600" : "bg-purple-100 text-[#7225E3]"}`}>
                          {platform.active ? "API OK" : "Actif"}
                        </span>
                      </div>
                    ))}
                  </div>
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
                Centralisez vos publications
              </h2>
              <p className="text-sm sm:text-base text-slate-500 max-w-md mx-auto">
                Connectez tous vos réseaux sociaux en 2 minutes et commencez à diffuser partout.
              </p>
              <div className="pt-4">
                <a
                  href="https://app.creatabl-ia.com/sign-up"
                  className="inline-flex items-center gap-2 px-8 py-4 btn-purple-primary shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all hover:-translate-y-0.5 group"
                >
                  <span>Connecter mes réseaux →</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
