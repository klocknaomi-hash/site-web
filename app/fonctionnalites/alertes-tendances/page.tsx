import React from "react";
import { Metadata } from "next";
import { CheckCircle2, Flame } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Alertes tendances | Creatabl.ia",
  description: "Soyez le premier à surfer sur chaque tendance. Creatabl surveille en permanence les hashtags, sons et sujets qui explosent.",
};

export default function AlertesTendancesPage() {
  const bullets = [
    "Surveillance temps réel des hashtags",
    "Détection des sons viraux TikTok",
    "Alertes personnalisées par niche",
    "Notifications instantanées",
    "Filtrage intelligent par pertinence",
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
                Alertes tendances
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p className="text-xl text-[#7225E3] font-semibold">
                Soyez le premier à surfer sur chaque tendance.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={200} className="space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              <p>
                Pour percer sur les réseaux sociaux, la réactivité est cruciale. Creatabl intègre un scanner de tendances en temps réel qui surveille en permanence les hashtags, les sujets chauds, les défis et les formats de contenus émergents. Dès qu&apos;une opportunité se dessine dans votre niche d&apos;activité, notre IA filtre le bruit du web pour ne vous envoyer qu&apos;une notification immédiate et ciblée, vous permettant d&apos;être parmi les premiers à prendre la parole.
              </p>
              <p>
                La veille manuelle est fastidieuse et souvent inefficace. Notre outil vous permet de configurer vos secteurs d&apos;intérêt et vos mots-clés une seule fois en quelques secondes. L&apos;intelligence artificielle se charge ensuite d&apos;analyser le flux continu de données pour écarter le bruit et les tendances non pertinentes pour vous concentrer uniquement sur ce qui intéresse réellement votre audience cible, en vous suggérant des adaptations créatives immédiates.
              </p>
              <p>
                Savoir identifier un son viral sur TikTok ou un sujet de discussion majeur sur LinkedIn dans les premières heures de son apparition fait toute la différence. C&apos;est durant cette phase de croissance exponentielle que les algorithmes favorisent le plus les créateurs réactifs. En intégrant nos alertes de tendances en temps réel à votre flux de travail, vous convertissez la réactivité en un puissant levier d&apos;acquisition de nouveaux abonnés et de notoriété.
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
                      <Flame className="w-4 h-4 text-orange-500 animate-pulse" />
                      <span className="text-sm font-bold text-slate-800">Tendances Surveillées</span>
                    </div>
                    <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">En direct</span>
                  </div>
                  <div className="space-y-3.5">
                    {[
                      { tag: "#NoCodeSaaS", growth: "+420%", type: "Hashtag LinkedIn", desc: "Explosion d'intérêt des fondateurs." },
                      { tag: "Original Audio - Synthwave", growth: "+210%", type: "Son viral TikTok", desc: "Utilisé dans 15k+ vidéos ce matin." },
                      { tag: "#PlanificationAutomatique", growth: "+95%", type: "Tendance Générale", desc: "Discussions en hausse sur X." },
                    ].map((trend, i) => (
                      <div key={i} className="p-3 bg-white border border-slate-100 rounded-xl flex justify-between items-start gap-4 shadow-sm">
                        <div>
                          <span className="text-[9px] text-[#7225E3] font-bold block mb-0.5">{trend.type}</span>
                          <span className="text-xs font-bold text-slate-800">{trend.tag}</span>
                          <span className="text-[10px] text-slate-400 block mt-0.5">{trend.desc}</span>
                        </div>
                        <span className="text-xs font-extrabold text-red-500 bg-red-50 px-2 py-0.5 rounded-full shrink-0">
                          {trend.growth}
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
                Devancez vos concurrents
              </h2>
              <p className="text-sm sm:text-base text-slate-500 max-w-md mx-auto">
                Ne ratez plus aucune opportunité d&apos;engagement auprès de votre communauté.
              </p>
              <div className="pt-4">
                <a
                  href="https://app.creatabl-ia.com/sign-up"
                  className="inline-flex items-center gap-2 px-8 py-4 btn-purple-primary shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all hover:-translate-y-0.5 group"
                >
                  <span>Activer les alertes →</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
