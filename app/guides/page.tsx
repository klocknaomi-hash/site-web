"use client";

import React, { useState } from "react";
import { Clock, ArrowRight, X } from "lucide-react";

interface GuideArticle {
  id: number;
  category: "Guides Creatabl" | "Intégrations" | "Stratégie contenu";
  title: string;
  description: string;
  readTime: string;
  contentHtml: React.ReactNode;
  imageUrl: string;
}

export default function GuidesPage() {
  const [activeTab, setActiveTab] = useState<string>("Tous");
  const [selectedArticle, setSelectedArticle] = useState<GuideArticle | null>(null);

  const tabs = ["Tous", "Guides Creatabl", "Intégrations", "Stratégie contenu"];

  const guides: GuideArticle[] = [
    {
      id: 1,
      category: "Guides Creatabl",
      title: "Comment créer votre premier post avec Creatabl",
      description: "Apprenez à utiliser l'éditeur de post, à choisir votre plateforme et à publier en moins de 5 minutes.",
      readTime: "5 min de lecture",
      imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      contentHtml: (
        <div className="space-y-6 text-slate-600 font-inter">
          <p className="text-lg leading-relaxed text-slate-850">
            Créer et planifier votre première publication sur Creatabl est un jeu d&apos;enfant. Suivez ce guide étape par étape pour diffuser votre contenu sur tous vos réseaux en un clin d&apos;œil.
          </p>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#111827] font-outfit">Étape 1 : Accéder à l&apos;éditeur</h3>
            <p>Connectez-vous à votre tableau de bord Creatabl et cliquez sur le bouton <strong className="text-[#111827]">&ldquo;Créer un post&rdquo;</strong> en haut à droite de votre écran.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#111827] font-outfit">Étape 2 : Rédiger et optimiser avec l&apos;IA</h3>
            <p>Saisissez vos idées principales. Si vous manquez d&apos;inspiration, cliquez sur l&apos;icône <strong className="text-[#111827]">Assistant IA</strong>. Choisissez le ton souhaité (professionnel, amical, inspirant) et laissez l&apos;IA rédiger une légende percutante assortie de hashtags pertinents.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#111827] font-outfit">Étape 3 : Associer vos visuels</h3>
            <p>Glissez-déposez vos images ou vidéos directement dans la zone multimédia, ou cliquez sur l&apos;onglet Canva pour importer un design existant.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#111827] font-outfit">Étape 4 : Sélectionner les canaux et publier</h3>
            <p>Cochez les icônes des réseaux cibles (LinkedIn, Instagram, TikTok, Facebook). Vous pouvez prévisualiser le rendu en temps réel sur la droite. Cliquez sur <strong className="text-[#111827]">&ldquo;Publier maintenant&rdquo;</strong> ou choisissez un créneau recommandé par l&apos;IA pour planifier.</p>
          </div>

          <div className="p-4 bg-purple-50 border border-purple-100 rounded-xl">
            <span className="text-primary font-bold block mb-1">💡 Astuce de Pro</span>
            <p className="text-slate-600">Pensez à personnaliser la légende par réseau social. LinkedIn apprécie les textes structurés tandis qu&apos;Instagram performe mieux avec des sauts de ligne réguliers et des émojis.</p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      category: "Guides Creatabl",
      title: "Comment utiliser l'Agent IA pour reformuler vos textes",
      description: "L'Agent IA Creatabl vous aide à améliorer, adapter et reformuler votre contenu en quelques secondes.",
      readTime: "4 min de lecture",
      imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      contentHtml: (
        <div className="space-y-6 text-slate-600 font-inter">
          <p className="text-lg leading-relaxed text-slate-850">
            Notre Assistant IA est spécialement entraîné pour capter l&apos;attention sur les réseaux sociaux. Apprenez à l&apos;utiliser pour transformer des idées brutes en publications virales.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#111827] font-outfit">Pourquoi reformuler avec l&apos;IA ?</h3>
            <p>Parfois, un bon texte manque juste d&apos;accroche ou de structure. L&apos;IA ajuste le rythme, ajoute de la clarté et optimise le vocabulaire pour encourager les interactions (commentaires, partages).</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#111827] font-outfit">Comment faire en pratique ?</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Collez votre brouillon dans l&apos;éditeur.</li>
              <li>Surlignez la partie que vous souhaitez modifier et cliquez sur <strong className="text-[#111827]">Reformuler</strong>.</li>
              <li>Choisissez une variante de ton : <em className="text-primary font-semibold">Humoristique, Professionnel, Connaisseur ou Minimaliste</em>.</li>
              <li>Cliquez sur &ldquo;Régénérer&rdquo; jusqu&apos;à obtenir la formulation parfaite.</li>
            </ol>
          </div>

          <div className="p-4 bg-purple-50 border border-purple-100 rounded-xl">
            <span className="text-primary font-bold block mb-1">🤖 Modèles IA Disponibles</span>
            <p className="text-slate-600">Creatabl utilise les derniers modèles linguistiques optimisés pour le copywriting. Ils analysent également la présence de mots-clés d&apos;engagement pour booster le score de lisibilité.</p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      category: "Guides Creatabl",
      title: "Comment programmer un post multi-réseaux",
      description: "Choisissez la date, l'heure et les plateformes. Creatabl publie automatiquement à votre place.",
      readTime: "4 min de lecture",
      imageUrl: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      contentHtml: (
        <div className="space-y-6 text-slate-600 font-inter">
          <p className="text-lg leading-relaxed text-slate-850">
            Émitez les tâches répétitives. Publiez en une seule fois sur plusieurs canaux tout en respectant les formats natifs de chaque plateforme.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#111827] font-outfit">La planification intelligente pas à pas</h3>
            <p>Après avoir rédigé votre message, repérez la section de planification au bas de l&apos;éditeur de post :</p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-[#111827]">1. Activer la planification automatique</h4>
            <p>Cliquez sur l&apos;icône calendrier. L&apos;IA analysera les statistiques de votre compte pour mettre en avant les créneaux d&apos;engagement maximaux.</p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-[#111827]">2. Ajustement par canal</h4>
            <p>Si vous postez sur Instagram et LinkedIn, vous pouvez configurer une heure différente pour chacun afin de cibler les audiences B2B de LinkedIn le matin, et B2C d&apos;Instagram en soirée.</p>
          </div>

          <div className="p-4 bg-purple-50 border border-purple-100 rounded-xl">
            <span className="text-primary font-bold block mb-1">⚡ Publication Directe Native</span>
            <p className="text-slate-600">Creatabl utilise les API officielles certifiées. Pas besoin de notifications mobiles pour publier : notre système s&apos;occupe de tout en tâche de fond, photos et vidéos incluses.</p>
          </div>
        </div>
      )
    },
    {
      id: 4,
      category: "Intégrations",
      title: "Connecter son compte Canva avec Creatabl",
      description: "Découvrez comment importer vos créations visuelles de Canva directement dans votre flux de travail Creatabl.",
      readTime: "3 min de lecture",
      imageUrl: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      contentHtml: (
        <div className="space-y-6 text-slate-600 font-inter">
          <p className="text-lg leading-relaxed text-slate-850">
            Gagnez un temps précieux en connectant votre espace de design Canva à votre planificateur Creatabl. Plus besoin de télécharger vos créations sur votre bureau pour les réimporter !
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#111827] font-outfit">Étape 1 : Activer l&apos;intégration</h3>
            <p>Rendez-vous dans vos Paramètres &gt; Intégrations. Recherchez Canva et cliquez sur <strong className="text-[#111827]">&ldquo;Connecter mon compte&rdquo;</strong>. Connectez-vous avec vos identifiants Canva ordinaires et accordez les permissions d&apos;importation.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#111827] font-outfit">Étape 2 : Importer un design depuis l&apos;éditeur</h3>
            <p>Lorsque vous créez un post dans Creatabl, cliquez sur l&apos;icône Canva dans la section média. Une fenêtre s&apos;ouvrira, affichant vos dossiers et projets récents. Sélectionnez le visuel de votre choix et validez. Il sera converti et optimisé automatiquement au bon format.</p>
          </div>

          <div className="p-4 bg-purple-50 border border-purple-100 rounded-xl">
            <span className="text-primary font-bold block mb-1">🎯 Résolution et Format</span>
            <p className="text-slate-600">Creatabl importe vos designs en haute définition. Notre algorithme propose un outil de recadrage intelligent (1:1, 9:16 ou 16:9) pour adapter le visuel aux exigences spécifiques de chaque réseau social.</p>
          </div>
        </div>
      )
    },
    {
      id: 5,
      category: "Stratégie contenu",
      title: "Optimiser les hashtags pour l'algorithme Instagram",
      description: "Comprendre comment l'algorithme Instagram classe les hashtags et comment l'IA Creatabl sélectionne les meilleurs pour vous.",
      readTime: "6 min de lecture",
      imageUrl: "https://images.pexels.com/photos/5077067/pexels-photo-5077067.jpeg?auto=compress&cs=tinysrgb&w=800",
      contentHtml: (
        <div className="space-y-6 text-slate-600 font-inter">
          <p className="text-lg leading-relaxed text-slate-850">
            Les hashtags restent un excellent moyen de toucher des comptes qui ne vous suivent pas encore. Voici comment structurer vos blocs de hashtags pour un référencement social optimal.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#111827] font-outfit">La règle des 3 tiers</h3>
            <p>Pour chaque publication, notre IA utilise la méthode des trois tiers pour équilibrer la portée et la concurrence :</p>
            <ul className="space-y-2 list-disc pl-5">
              <li><strong className="text-slate-800">Hashtags à fort volume (100k+ publications) :</strong> Pour capter du trafic immédiat (ex: #MarketingDigital).</li>
              <li><strong className="text-slate-800">Hashtags de niche (10k à 100k publications) :</strong> Pour cibler une communauté qualifiée et rester visible plus longtemps.</li>
              <li><strong className="text-slate-800">Hashtags ultra-spécifiques (&lt;10k publications) :</strong> Liés à votre marque ou à l&apos;événement précis pour vous positionner immédiatement dans le top des résultats de recherche.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#111827] font-outfit">Combien de hashtags utiliser ?</h3>
            <p>Instagram autorise jusqu&apos;à 30 hashtags. Les études récentes montrent qu&apos;un bloc de 5 à 11 hashtags bien ciblés génère autant, sinon plus, d&apos;engagement qu&apos;une liste saturée. Notre générateur de hashtags IA sélectionne automatiquement les 8 à 10 tags les plus performants pour votre niche.</p>
          </div>
        </div>
      )
    },
    {
      id: 6,
      category: "Stratégie contenu",
      title: "Créer un calendrier éditorial performant sur 30 jours",
      description: "Méthodologie complète pour structurer votre présence sur LinkedIn et Twitter sans être à court d'idées.",
      readTime: "8 min de lecture",
      imageUrl: "https://images.pexels.com/photos/273153/pexels-photo-273153.jpeg?auto=compress&cs=tinysrgb&w=800",
      contentHtml: (
        <div className="space-y-6 text-slate-600 font-inter">
          <p className="text-lg leading-relaxed text-slate-800">
            La clé du succès sur les réseaux sociaux réside dans la régularité. Découvrez notre méthode de planification globale pour anticiper vos publications sur un mois entier.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#111827] font-outfit">Étape 1 : Définir vos piliers de contenu</h3>
            <p>Divisez votre communication en 3 ou 4 grands thèmes (ex: éducation/conseils, coulisses de l&apos;entreprise, promotion produit, témoignages clients). Cela assure un flux varié et évite l&apos;effet de lassitude.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#111827] font-outfit">Étape 2 : Planifier en blocs (Time-blocking)</h3>
            <p>Consacrez 2 à 3 heures consécutives par mois pour rédiger tous vos posts. Utilisez le calendrier Creatabl pour glisser-déposer vos brouillons. Vous aurez ainsi une vision globale de la répartition thématique.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#111827] font-outfit">Étape 3 : Analyser et ajuster</h3>
            <p>À la fin de chaque mois, consultez vos Analytics unifiées sur Creatabl pour identifier le post le plus performant. Dupliquez sa structure ou son format pour le mois suivant.</p>
          </div>
        </div>
      )
    }
  ];

  const filteredGuides = activeTab === "Tous" 
    ? guides 
    : guides.filter(g => g.category === activeTab);

  return (
    <div className="bg-[#FFFFFF] text-[#111827] min-h-screen pt-[140px] pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider">
            Ressources
          </div>
          <h1 className="font-outfit text-4xl sm:text-5xl font-extrabold text-[#111827] leading-tight">
            Guides & Ressources
          </h1>
          <p className="font-inter text-slate-500 text-base sm:text-lg">
            Tout ce dont vous avez besoin pour maîtriser Creatabl et créer du contenu qui performe.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center items-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-inter font-medium text-sm px-5 py-2.5 rounded-full border transition-all duration-200 cursor-pointer ${
                activeTab === tab
                  ? "bg-primary text-white border-primary shadow-lg shadow-purple-500/10"
                  : "bg-white text-slate-500 border-slate-200 hover:text-[#111827] hover:border-slate-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
          {filteredGuides.map((guide) => (
            <div
              key={guide.id}
              className="bg-white rounded-[24px] border border-[#F3F4F6] shadow-[0_2px_12px_rgba(0,0,0,0.02)] overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Header Visual preview */}
              <div className="h-[180px] w-full relative overflow-hidden bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={guide.imageUrl} 
                  alt={guide.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#7225E3]">
                    {guide.category}
                  </span>
                  <h3 className="font-outfit text-lg font-bold text-[#111827] leading-snug group-hover:text-primary transition-colors">
                    {guide.title}
                  </h3>
                  <p className="font-inter text-sm text-slate-500 leading-relaxed line-clamp-3">
                    {guide.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="flex items-center gap-1 text-[12px] font-medium text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    {guide.readTime}
                  </span>
                  <button
                    onClick={() => setSelectedArticle(guide)}
                    className="flex items-center gap-1 text-xs font-bold text-primary hover:underline hover:gap-1.5 transition-all cursor-pointer"
                  >
                    <span>Lire l&apos;article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Article Viewer */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white border border-slate-200 rounded-[28px] max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl flex flex-col relative">
            
            {/* Modal Header */}
            <div className="p-8 bg-gradient-to-r from-[#7225E3] to-[#8B5CF6] text-white flex items-center justify-between relative">
              <div className="space-y-1.5 pr-8">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-white/25 px-2.5 py-0.5 rounded-full">
                  {selectedArticle.category}
                </span>
                <h2 className="font-outfit text-2xl font-extrabold leading-tight">
                  {selectedArticle.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 p-2 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-colors cursor-pointer"
                aria-label="Fermer le modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8 overflow-y-auto space-y-6">
              {selectedArticle.contentHtml}
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2.5 bg-white text-slate-700 hover:text-slate-900 border border-slate-200 rounded-xl text-sm font-bold transition-colors cursor-pointer"
              >
                Fermer la lecture
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
