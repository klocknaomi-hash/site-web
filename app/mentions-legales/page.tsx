import React from "react";
import { Metadata } from "next";
import { Info, User, Server, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Mentions légales - Creatabl.ia",
  description: "Informations légales obligatoires concernant l'éditeur et l'hébergeur du site Creatabl.ia.",
};

export default function MentionsLegalesPage() {
  const sections = [
    {
      icon: <Info className="w-5 h-5 text-primary" />,
      title: "1. Éditeur du site",
      content: (
        <div className="space-y-2 font-inter text-[15px] leading-relaxed text-slate-600">
          <p>Le site internet <strong className="text-slate-800">Creatabl.ia</strong> est édité par :</p>
          <ul className="space-y-1.5 list-none">
            <li><strong className="text-slate-800">Raison sociale :</strong> Creatabl SAS</li>
            <li><strong className="text-slate-800">Forme juridique :</strong> Société par Actions Simplifiée (SAS)</li>
            <li><strong className="text-slate-800">Capital social :</strong> 10 000 €</li>
            <li><strong className="text-slate-800">Siège social :</strong> 10 Rue de la Paix, 75002 Paris, France</li>
            <li><strong className="text-slate-800">Immatriculation :</strong> RCS Paris sous le numéro B 987 654 321</li>
            <li><strong className="text-slate-800">TVA intracommunautaire :</strong> FR 99 987 654 321</li>
            <li><strong className="text-slate-800">Contact email :</strong> hello@creatabl-ia.com</li>
          </ul>
        </div>
      ),
    },
    {
      icon: <User className="w-5 h-5 text-primary" />,
      title: "2. Directeur de la publication",
      content: (
        <p className="font-inter text-[15px] leading-relaxed text-slate-600">
          Le directeur de la publication du site internet est <strong className="text-slate-800">Naomi Klock</strong>, en sa qualité de Présidente et Co-fondatrice de Creatabl SAS.
        </p>
      ),
    },
    {
      icon: <Server className="w-5 h-5 text-primary" />,
      title: "3. Hébergeur du site",
      content: (
        <div className="space-y-1 font-inter text-[15px] leading-relaxed text-slate-600">
          <p>Le site internet et l&apos;application Creatabl sont hébergés par :</p>
          <p className="text-slate-800 font-semibold">Vercel Inc.</p>
          <p>Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
          <p>Site internet : <a href="https://vercel.com" className="text-primary hover:underline font-medium">vercel.com</a></p>
        </div>
      ),
    },
    {
      icon: <BookOpen className="w-5 h-5 text-primary" />,
      title: "4. Propriété intellectuelle",
      content: (
        <p className="font-inter text-[15px] leading-relaxed text-slate-600">
          L&apos;ensemble du site Creatabl.ia, y compris les textes, logos, icônes, animations, chartes de design et codes informatiques, est protégé par les lois internationales sur le droit d&apos;auteur et la propriété intellectuelle. Toute reproduction ou représentation, intégrale ou partielle, sur quelque support que ce soit, est strictement interdite sans le consentement préalable écrit de la société Creatabl SAS.
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
            Mentions légales
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
