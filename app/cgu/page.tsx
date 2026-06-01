import React from "react";
import { Metadata } from "next";
import { Scale, Activity, Key, ShieldCheck, AlertOctagon, Power } from "lucide-react";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation - Creatabl.ia",
  description: "En utilisant Creatabl, vous acceptez l'intégralité des présentes conditions d'utilisation.",
};

export default function CGUPage() {
  const sections = [
    {
      icon: <Scale className="w-5 h-5 text-primary" />,
      title: "1. Acceptation des conditions",
      content: (
        <p className="font-inter text-[15px] leading-relaxed text-slate-600">
          En créant un compte sur Creatabl.ia ou en accédant à nos services, vous acceptez d&apos;être lié par les présentes Conditions Générales d&apos;Utilisation (CGU). Si vous agissez au nom d&apos;une entreprise ou d&apos;un client, vous certifiez détenir les pouvoirs requis pour accepter ces CGU en leur nom.
        </p>
      ),
    },
    {
      icon: <Activity className="w-5 h-5 text-primary" />,
      title: "2. Description des services",
      content: (
        <p className="font-inter text-[15px] leading-relaxed text-slate-600">
          Creatabl fournit une suite d&apos;outils SaaS facilitant la création assistée par intelligence artificielle (légendes, hashtags), l&apos;organisation (calendrier éditorial), la collaboration, la planification et la publication automatique sur les réseaux sociaux. L&apos;accès à certaines fonctionnalités avancées nécessite la souscription à un abonnement payant.
        </p>
      ),
    },
    {
      icon: <Key className="w-5 h-5 text-primary" />,
      title: "3. Propriété intellectuelle",
      content: (
        <p className="font-inter text-[15px] leading-relaxed text-slate-600">
          Le service, sa structure, sa base de code, sa charte graphique et ses technologies sont la propriété intellectuelle exclusive de Creatabl. Cependant, <strong className="text-slate-800">vous conservez l&apos;entière propriété de l&apos;ensemble des contenus</strong> (textes, images, vidéos, concepts) que vous importez ou générez sur notre plateforme.
        </p>
      ),
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-primary" />,
      title: "4. Utilisation acceptable",
      content: (
        <div className="space-y-3 font-inter text-[15px] leading-relaxed text-slate-600">
          <p>Vous vous engagez formellement à :</p>
          <ul className="space-y-2 list-none">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mr-1">&mdash;</span>
              <span>Ne pas publier de contenus illégaux, incitant à la haine, harcelants ou enfreignant le droit d&apos;auteur.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mr-1">&mdash;</span>
              <span>Respecter les chartes d&apos;utilisation et limites de taux (rate-limits) imposées par les API des réseaux sociaux (Instagram, LinkedIn, TikTok, Facebook).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mr-1">&mdash;</span>
              <span>Sécuriser l&apos;accès à vos identifiants de compte et à ne pas les divulguer à des tiers non autorisés.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      icon: <AlertOctagon className="w-5 h-5 text-primary" />,
      title: "5. Limitation de responsabilité",
      content: (
        <p className="font-inter text-[15px] leading-relaxed text-slate-600">
          Bien que nous visions une disponibilité de 99.9%, Creatabl ne peut garantir un fonctionnement totalement ininterrompu. Nous ne saurions être tenus responsables des dysfonctionnements survenant suite à des modifications imprévues ou des interruptions de service sur les réseaux sociaux tiers (APIs d&apos;Instagram, LinkedIn, etc.), ni des modifications d&apos;algorithmes affectant la visibilité organique de vos publications.
        </p>
      ),
    },
    {
      icon: <Power className="w-5 h-5 text-primary" />,
      title: "6. Suspension et résiliation",
      content: (
        <p className="font-inter text-[15px] leading-relaxed text-slate-600">
          En cas de violation grave ou répétée de ces CGU, Creatabl se réserve le droit de suspendre temporairement ou de clôturer définitivement votre compte, sans préavis ni indemnité. Vous pouvez quant à vous mettre fin à votre abonnement et supprimer votre compte à tout moment depuis vos réglages ou en nous contactant.
        </p>
      ),
    },
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#111827] min-h-screen pt-[140px] pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="space-y-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
            LÉGAL
          </span>
          <h1 className="font-outfit text-4xl sm:text-5xl font-extrabold text-[#111827] leading-tight">
            Conditions Générales d&apos;Utilisation
          </h1>
          <p className="font-inter text-sm text-slate-500">
            Dernière mise à jour : Mai 2026
          </p>
        </div>

        {/* Custom Cards */}
        <div className="space-y-6">
          {sections.map((sec, idx) => (
            <div 
              key={idx}
              className="bg-white border border-[#E5E7EB] hover:border-purple-350 transition-colors duration-300 rounded-2xl p-6 sm:p-8 space-y-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-xl">
                  {sec.icon}
                </div>
                <h2 className="font-outfit text-xl font-bold text-slate-900">
                  {sec.title}
                </h2>
              </div>
              <div>{sec.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
