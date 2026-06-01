import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Shield, Eye, Lock, FileText, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Politique de confidentialité - Creatabl.ia",
  description: "Chez Creatabl, la protection de vos données personnelles est notre priorité absolue.",
};

export default function ConfidentialitePage() {
  const sections = [
    {
      icon: <Shield className="w-5 h-5 text-primary" />,
      title: "1. Introduction",
      content: (
        <p className="font-inter text-[15px] leading-relaxed text-slate-600">
          Creatabl (&ldquo;nous&rdquo;, &ldquo;notre&rdquo;, &ldquo;nos&rdquo;) s&apos;engage à protéger la vie privée de ses utilisateurs. Cette politique explique comment nous collectons, utilisons et protégeons vos données personnelles lorsque vous utilisez notre plateforme disponible sur{" "}
          <a href="https://app.creatabl-ia.com" className="text-primary hover:underline font-medium">app.creatabl-ia.com</a> et{" "}
          <Link href="/" className="text-primary hover:underline font-medium">creatabl-ia.com</Link>.
        </p>
      ),
    },
    {
      icon: <Eye className="w-5 h-5 text-primary" />,
      title: "2. Données collectées",
      content: (
        <div className="space-y-3 font-inter text-[15px] leading-relaxed text-slate-600">
          <p>Nous collectons les informations nécessaires au bon fonctionnement de la plateforme :</p>
          <ul className="space-y-2 list-none">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mr-1">&mdash;</span>
              <div>
                <strong className="text-slate-800">Informations de compte :</strong> nom, adresse email, mot de passe (chiffré de bout en bout).
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mr-1">&mdash;</span>
              <div>
                <strong className="text-slate-800">Données de paiement :</strong> traitées exclusivement par notre partenaire Stripe. Nous ne stockons et n&apos;avons accès à aucune coordonnée bancaire.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mr-1">&mdash;</span>
              <div>
                <strong className="text-slate-800">Données d&apos;utilisation :</strong> publications créées, historiques d&apos;activité, statistiques de reach et d&apos;engagement récoltées sur vos profils.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mr-1">&mdash;</span>
              <div>
                <strong className="text-slate-800">Données techniques :</strong> adresse IP anonymisée, type de navigateur, pages consultées et durée de session.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mr-1">&mdash;</span>
              <div>
                <strong className="text-slate-800">Données des réseaux sociaux connectés :</strong> jetons d&apos;accès sécurisés (OAuth) pour Facebook, Instagram, LinkedIn et TikTok, utilisés uniquement pour publier votre contenu et analyser les métriques selon vos instructions explicites.
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-primary" />,
      title: "3. Utilisation des données",
      content: (
        <div className="space-y-3 font-inter text-[15px] leading-relaxed text-slate-600">
          <p>Nous exploitons vos informations pour les finalités suivantes :</p>
          <ul className="space-y-2 list-none">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mr-1">&mdash;</span>
              <span>Assurer la fourniture des fonctionnalités de planification et d&apos;analyse de publications.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mr-1">&mdash;</span>
              <span>Générer et optimiser du texte créatif via notre Assistant IA.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mr-1">&mdash;</span>
              <span>Garantir la sécurité de nos systèmes, prévenir les abus et résoudre les incidents techniques.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      icon: <Lock className="w-5 h-5 text-primary" />,
      title: "4. Partage et sécurité",
      content: (
        <p className="font-inter text-[15px] leading-relaxed text-slate-600">
          Creatabl ne vendra jamais vos données personnelles. Nous partageons uniquement les informations requises avec nos sous-traitants techniques de confiance (Stripe pour les paiements, Vercel pour l&apos;hébergement applicatif, OpenAI/Anthropic pour l&apos;IA) et les réseaux sociaux destinataires de vos publications. Toutes les communications réseau sont chiffrées (SSL/TLS).
        </p>
      ),
    },
    {
      icon: <FileText className="w-5 h-5 text-primary" />,
      title: "5. Vos droits (RGPD)",
      content: (
        <p className="font-inter text-[15px] leading-relaxed text-slate-600">
          Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez de droits d&apos;accès, de rectification, de portabilité et de suppression de vos données personnelles. Vous pouvez résilier vos connexions sociales ou supprimer définitivement votre compte depuis les paramètres de votre compte, ou en nous écrivant directement par courrier électronique à l&apos;adresse suivante :{" "}
          <a href="mailto:hello@creatabl-ia.com" className="text-primary hover:underline font-medium">hello@creatabl-ia.com</a>.
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
            Politique de confidentialité
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
