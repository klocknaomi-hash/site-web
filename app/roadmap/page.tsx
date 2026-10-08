"use client";

import React, { useState, useEffect } from "react";
import { Lightbulb, Settings, CheckCircle2, ChevronUp } from "lucide-react";

export default function RoadmapPage() {
  const [votedIds, setVotedIds] = useState<number[]>([]);

  // Load votes from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("creatabl-roadmap-votes");
    if (stored) {
      try {
        setVotedIds(JSON.parse(stored));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Toggle upvote
  const handleVote = (id: number) => {
    let nextVoted = [...votedIds];
    if (nextVoted.includes(id)) {
      nextVoted = nextVoted.filter((i) => i !== id);
    } else {
      nextVoted.push(id);
    }
    setVotedIds(nextVoted);
    localStorage.setItem("creatabl-roadmap-votes", JSON.stringify(nextVoted));
  };

  const columns = [
    {
      title: "Planifié",
      icon: <Lightbulb className="w-5 h-5 text-[#7225E3]" />,
      colorClass: "border-[#E7DCFC] bg-[#F8F7FC]",
      items: [
        {
          id: 1,
          title: "Intégration Pinterest",
          description: "Planification, publication directe et rapports d'activité analytiques pour vos tableaux Pinterest.",
          baseVotes: 124,
        },
        {
          id: 2,
          title: "Générateur de Scripts Short-form",
          description: "Un module d'écriture IA dédié aux scripts TikTok, Reels et Shorts avec indicateurs de dynamisme.",
          baseVotes: 87,
        },
      ],
    },
    {
      title: "En cours",
      icon: <Settings className="w-5 h-5 text-[#8A4B00] animate-spin" style={{ animationDuration: "3s" }} />,
      colorClass: "border-[#FDF2DF] bg-[#FCFAF5]",
      items: [
        {
          id: 3,
          title: "Support Threads",
          description: "Publication automatisée de vos posts de blog et micro-contenus directement sur Meta Threads.",
          baseVotes: 215,
        },
        {
          id: 4,
          title: "Refonte du générateur de rapports",
          description: "Créez vos rapports PDF et CSV sur mesure avec vos propres logos et métriques personnalisées.",
          baseVotes: 142,
        },
      ],
    },
    {
      title: "Déployé",
      icon: <CheckCircle2 className="w-5 h-5 text-[#0E7445]" />,
      colorClass: "border-[#E7F6EE] bg-[#F5FCF7]",
      items: [
        {
          id: 5,
          title: "Intégration Canva",
          description: "Importez vos designs en haute définition depuis Canva directement dans l'éditeur de posts.",
          baseVotes: 356,
        },
        {
          id: 6,
          title: "Assistant IA d'Écriture",
          description: "Générez des légendes adaptées au ton de votre marque et des blocs de hashtags en 15+ langues.",
          baseVotes: 412,
        },
      ],
    },
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#14121F] min-h-screen pt-[140px] pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
            ÉVOLUTION
          </span>
          <h1 className="font-outfit text-4xl sm:text-5xl font-semibold text-[#14121F] leading-tight">
            Notre Feuille de Route
          </h1>
          <p className="font-inter text-slate-550 text-base sm:text-lg">
            Découvrez les chantiers en cours et votez pour les fonctionnalités que vous souhaitez voir arriver en priorité.
          </p>
        </div>

        {/* 3-Column Roadmap Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {columns.map((col, colIdx) => (
            <div 
              key={colIdx}
              className={`border ${col.colorClass} rounded-[22px] p-6 space-y-6 shadow-[0_4px_16px_rgba(0,0,0,0.015)]`}
            >
              {/* Column Header */}
              <div className="flex items-center gap-2.5 pb-4 border-b border-[#E8E6F0]">
                {col.icon}
                <h3 className="font-outfit text-lg font-bold text-[#14121F]">
                  {col.title}
                </h3>
                <span className="ml-auto text-xs font-bold text-[#6B6780] bg-[#F8F7FC] px-2.5 py-0.5 rounded-full">
                  {col.items.length}
                </span>
              </div>

              {/* Items List */}
              <div className="space-y-4">
                {col.items.map((item) => {
                  const isVoted = votedIds.includes(item.id);
                  const displayVotes = item.baseVotes + (isVoted ? 1 : 0);
                  
                  return (
                    <div 
                      key={item.id}
                      className="bg-white border border-[#E8E6F0]/60 rounded-xl p-5 space-y-3 hover:border-[#E7DCFC] hover:shadow-sm transition-all duration-250 flex items-start gap-4"
                    >
                      {/* Left Block (Text) */}
                      <div className="flex-grow space-y-1">
                        <h4 className="font-outfit text-sm font-bold text-[#14121F] leading-snug">
                          {item.title}
                        </h4>
                        <p className="font-inter text-xs text-[#6B6780] leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Right Block (Upvote button) */}
                      <button
                        onClick={() => handleVote(item.id)}
                        className={`flex flex-col items-center justify-center p-2.5 rounded-xl border transition-all duration-200 cursor-pointer min-w-[46px] ${
                          isVoted
                            ? "bg-primary border-primary text-white shadow-md shadow-purple-500/10"
                            : "bg-[#F8F7FC] border-[#E8E6F0] text-[#6B6780] hover:border-primary/50 hover:text-primary"
                        }`}
                      >
                        <ChevronUp className={`w-4 h-4 transition-transform duration-300 ${isVoted ? "translate-y-0.5" : "group-hover:-translate-y-0.5"}`} />
                        <span className="text-xs font-semibold mt-0.5 leading-none">
                          {displayVotes}
                        </span>
                      </button>

                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
