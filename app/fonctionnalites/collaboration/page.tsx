import React from "react";
import { Metadata } from "next";
import { CheckCircle2, Users } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Collaboration équipe | Creatabl.ia",
  description: "Travaillez ensemble, publiez cohérent. Invitez vos collaborateurs, assignez des rôles et définissez des workflows de validation.",
};

export default function CollaborationPage() {
  const bullets = [
    "Rôles et permissions personnalisés",
    "Workflow de validation avant publication",
    "Commentaires et retours en contexte",
    "Espaces clients séparés",
    "Historique des modifications",
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
                Collaboration équipe
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p className="text-xl text-[#7225E3] font-semibold">
                Travaillez ensemble, publiez cohérent.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={200} className="space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              <p>
                Protégez votre image de marque en structurant l&apos;accès à vos comptes sociaux. Creatabl vous permet d&apos;inviter vos collaborateurs et de leur assigner des permissions et rôles personnalisés. Définissez précisément qui peut rédiger des brouillons, qui est autorisé à modifier les visuels, et qui possède le droit final de valider et de planifier les publications. Chaque membre travaille ainsi dans un cadre sécurisé et clair.
              </p>
              <p>
                Dites adieu aux chaînes de mails interminables et aux retours perdus dans les messageries instantanées. Notre workflow d&apos;approbation centralise toutes les demandes de validation. Lorsqu&apos;un contenu est prêt, il est soumis au validateur qui peut laisser des commentaires en contexte, demander des modifications ou approuver la publication en un clic. Tout l&apos;historique des échanges est consigné pour un suivi de projet parfait.
              </p>
              <p>
                Idéal pour les agences et les freelances gérant plusieurs clients, Creatabl propose des espaces de travail cloisonnés. Chaque client a uniquement accès aux publications et au calendrier de sa propre marque, garantissant la confidentialité absolue de vos projets. Invitez vos clients à valider leurs publications directement sur leur espace dédié pour un service premium, professionnel et sans friction.
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
                      <Users className="w-4 h-4 text-[#7225E3]" />
                      <span className="text-sm font-bold text-slate-800">Flux d&apos;approbation</span>
                    </div>
                    <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">Actif</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { post: "Visuel de lancement.png", user: "Sophie (Designer)", status: "En attente", time: "Il y a 5 min", stColor: "text-amber-500 bg-amber-50" },
                      { post: "Vidéo tutoriel.mp4", user: "Thomas (Marketing)", status: "Approuvé", time: "Il y a 2h", stColor: "text-emerald-500 bg-emerald-50" },
                      { post: "Post Blog.txt", user: "Marie (Rédactrice)", status: "Brouillon", time: "Il y a 1 j", stColor: "text-slate-500 bg-slate-100" },
                    ].map((flow, i) => (
                      <div key={i} className="flex justify-between items-center p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
                        <div>
                          <span className="text-xs font-bold text-slate-800 block">{flow.post}</span>
                          <span className="text-[10px] text-slate-400">Soumis par {flow.user}</span>
                        </div>
                        <div className="text-right shrink-0">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded block mb-1 ${flow.stColor}`}>{flow.status}</span>
                          <span className="text-[8px] text-slate-400">{flow.time}</span>
                        </div>
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
                Coordonnez vos équipes sans stress
              </h2>
              <p className="text-sm sm:text-base text-slate-500 max-w-md mx-auto">
                Invitez vos collaborateurs et clients dès aujourd&apos;hui pour accélérer vos validations.
              </p>
              <div className="pt-4">
                <a
                  href="https://app.creatabl-ia.com/sign-up"
                  className="inline-flex items-center gap-2 px-8 py-4 btn-purple-primary shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all hover:-translate-y-0.5 group"
                >
                  <span>Inviter mon équipe →</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
