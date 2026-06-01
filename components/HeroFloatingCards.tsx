"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Calendar, TrendingUp, Plus } from "lucide-react";

export default function HeroFloatingCards() {
  const [activeTab, setActiveTab] = useState<"insta" | "tiktok">("insta");
  const [typedText, setTypedText] = useState("");
  const targetText = "Rédiger une légende percutante pour le lancement de Creatabl.ia...";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(targetText.slice(0, index));
      index++;
      if (index > targetText.length) {
        setTimeout(() => {
          index = 0;
        }, 3000); // Wait 3s before restarting
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-[500px] flex items-center justify-center lg:justify-end">
      {/* Background glow behind elements */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/20 blur-3xl -z-10 pointer-events-none" />

      {/* Grid wrapper for floating widgets */}
      <div className="w-full max-w-lg relative space-y-6">
        
        {/* Card 1: AI Generator Widget (Top Left floating) */}
        <div className="relative lg:-left-12 bg-white dark:bg-[#121118] border border-slate-200/60 dark:border-purple-950/40 p-5 rounded-2xl shadow-xl shadow-slate-100/50 dark:shadow-black/20 hover:-translate-y-1.5 transition-transform duration-300 z-20">
          <div className="flex items-center justify-between mb-3 border-b border-slate-100 dark:border-purple-950/20 pb-3">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-purple-100 dark:bg-purple-950/45 text-primary rounded-lg">
                <Sparkles size={16} className="animate-pulse" />
              </div>
              <span className="font-semibold text-sm">Générateur IA</span>
            </div>
            <div className="flex gap-1.5">
              <button
                onClick={() => setActiveTab("insta")}
                className={`text-xs px-2.5 py-1 rounded-md transition-colors ${
                  activeTab === "insta"
                    ? "bg-primary text-white"
                    : "bg-slate-100 dark:bg-purple-950/10 text-slate-500 dark:text-slate-400"
                }`}
              >
                Instagram
              </button>
              <button
                onClick={() => setActiveTab("tiktok")}
                className={`text-xs px-2.5 py-1 rounded-md transition-colors ${
                  activeTab === "tiktok"
                    ? "bg-primary text-white"
                    : "bg-slate-100 dark:bg-purple-950/10 text-slate-500 dark:text-slate-400"
                }`}
              >
                TikTok
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {/* Input field simulation */}
            <div className="bg-slate-50 dark:bg-[#0c0b10] border border-slate-100 dark:border-purple-950/20 p-2.5 rounded-lg text-xs min-h-[36px] flex items-center text-slate-500 dark:text-slate-400">
              <span className="font-mono text-primary mr-1">&gt;</span>
              <span>{typedText}</span>
              <span className="w-1.5 h-3.5 bg-primary animate-pulse ml-0.5" />
            </div>

            {/* AI Response simulation */}
            <div className="bg-purple-500/5 border border-purple-500/10 p-3 rounded-lg space-y-2">
              <p className="text-[13px] leading-relaxed text-slate-700 dark:text-slate-300">
                ✨ <strong>Option 1 :</strong> Vos contenus méritent le meilleur. Découvrez comment passer à la vitesse supérieure dès aujourd&apos;hui avec <strong>#Creatabl</strong> 🚀 Link in bio !
              </p>
              <div className="flex gap-1.5">
                <span className="text-[9px] bg-purple-100 dark:bg-purple-950/50 text-primary font-medium px-2 py-0.5 rounded">
                  #SocialMedia
                </span>
                <span className="text-[9px] bg-purple-100 dark:bg-purple-950/50 text-primary font-medium px-2 py-0.5 rounded">
                  #SaaS
                </span>
                <span className="text-[9px] bg-purple-100 dark:bg-purple-950/50 text-primary font-medium px-2 py-0.5 rounded">
                  #Marketing
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Calendar & Scheduler Widget (Center overlapping) */}
        <div className="bg-white dark:bg-[#121118] border border-slate-200/60 dark:border-purple-950/40 p-5 rounded-2xl shadow-xl shadow-slate-100/50 dark:shadow-black/20 hover:-translate-y-1.5 transition-transform duration-300 z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-blue-100 dark:bg-blue-950/45 text-blue-500 rounded-lg">
                <Calendar size={16} />
              </div>
              <span className="font-semibold text-sm">Planification IA</span>
            </div>
            <span className="text-xs text-slate-400 dark:text-slate-500">Lun 25 Mai</span>
          </div>

          <div className="space-y-2.5">
            {/* Scheduled item */}
            <div className="flex items-center justify-between p-2.5 rounded-xl border border-dashed border-slate-200 dark:border-purple-950/20 bg-slate-50/50 dark:bg-[#0c0b10]/40">
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-950/40 flex items-center justify-center text-primary text-[10px] font-bold">
                  POST
                </div>
                <div>
                  <h4 className="text-xs font-semibold">Lancement Produit</h4>
                  <p className="text-[10px] text-slate-400">Instagram Feed</p>
                </div>
              </div>
              
              <div className="text-right">
                <span className="inline-block text-[9px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20 px-2 py-0.5 rounded-full">
                  Optimisé : 18:30
                </span>
                <p className="text-[9px] text-slate-400 mt-0.5">Meilleur engagement</p>
              </div>
            </div>

            {/* Empty slots preview */}
            <div className="flex justify-between items-center px-3 py-2 border border-slate-100 dark:border-purple-950/10 rounded-lg">
              <span className="text-xs text-slate-400 dark:text-slate-500">19:00 - Slot vide</span>
              <button className="p-1 rounded bg-slate-50 dark:bg-purple-950/20 text-slate-400 hover:text-primary">
                <Plus size={12} />
              </button>
            </div>
          </div>
        </div>

        {/* Card 3: Analytics Widget (Bottom Right floating) */}
        <div className="lg:left-12 relative bg-white dark:bg-[#121118] border border-slate-200/60 dark:border-purple-950/40 p-5 rounded-2xl shadow-xl shadow-slate-100/50 dark:shadow-black/20 hover:-translate-y-1.5 transition-transform duration-300 z-20">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-emerald-100 dark:bg-emerald-950/45 text-emerald-500 rounded-lg">
                <TrendingUp size={16} />
              </div>
              <span className="font-semibold text-sm">Performances</span>
            </div>
            <div className="flex items-center gap-1 text-[13px] text-emerald-500 font-bold bg-emerald-550/10 px-2 py-0.5 rounded-full bg-emerald-500/10">
              <span>+324%</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-extrabold tracking-tight">45,124</span>
              <span className="text-[10px] text-slate-400">impressions</span>
            </div>

            {/* Custom SVG Sparkline Graph */}
            <div className="h-16 w-full mt-2">
              <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Area path */}
                <path
                  d="M0,30 L0,22 Q15,10 25,18 T50,5 T75,12 T100,2 L100,30 Z"
                  fill="url(#chartGradient)"
                />
                {/* Stroke path */}
                <path
                  d="M0,22 Q15,10 25,18 T50,5 T75,12 T100,2"
                  fill="none"
                  stroke="#8B5CF6"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                {/* Pulsing dot */}
                <circle cx="100" cy="2" r="2.5" fill="#8B5CF6" className="animate-ping" />
                <circle cx="100" cy="2" r="1.5" fill="#8B5CF6" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
