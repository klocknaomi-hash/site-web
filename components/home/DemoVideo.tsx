"use client";

import { useState } from "react";
import { Play } from "lucide-react";

// Vidéo de démonstration de la Home : capture du tableau de bord dans le cadre
// violet d'origine, avec un bouton de lecture. La vidéo est lue depuis
// public/videos/demo-creatabl.mp4 ; tant que le fichier n'existe pas, la
// capture reste affichée avec un message.
const VIDEO_SRC = process.env.NEXT_PUBLIC_DEMO_VIDEO_URL || "/videos/demo-creatabl.mp4";

export default function DemoVideo() {
  const [state, setState] = useState<"poster" | "playing" | "unavailable">("poster");

  return (
    <div
      id="demo"
      className="relative max-w-[880px] mx-auto z-10"
      style={{ position: "relative", zIndex: 10, scrollMarginTop: 120 }}
    >
      {/* Halo violet scintillant (design d'origine) */}
      <div
        className="absolute inset-[-12px] rounded-[20px] filter blur-[8px] z-0 animate-shimmer"
        style={{
          background: "linear-gradient(135deg, rgba(138,56,245,0.5), rgba(255,255,255,0.8), rgba(138,56,245,0.5))",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Cadre blanc */}
      <div className="absolute inset-[-4px] rounded-[16px] bg-white z-10" />

      <div
        className="relative z-20 w-full overflow-hidden rounded-[12px] border-[1.5px] border-[rgba(114,37,227,0.25)] bg-white"
        style={{ boxShadow: "0 20px 60px rgba(114,37,227,0.15), 0 4px 16px rgba(0,0,0,0.08)" }}
      >
        {state === "playing" ? (
          <video
            className="block w-full"
            src={VIDEO_SRC}
            poster="/dashboard.png"
            controls
            autoPlay
            playsInline
            onError={() => setState("unavailable")}
          >
            Votre navigateur ne lit pas cette vidéo.
          </video>
        ) : (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/dashboard.png" alt="Tableau de bord Creatabl IA" className="block w-full" />
            <div className="absolute inset-0 grid place-items-center bg-[rgba(20,18,31,0.18)]">
              {state === "unavailable" ? (
                <p className="rounded-full bg-white px-5 py-3 font-inter text-sm font-medium text-[#14121F] shadow-lg">
                  La vidéo de démonstration arrive bientôt.
                </p>
              ) : (
                <button
                  type="button"
                  onClick={() => setState("playing")}
                  className="inline-flex items-center gap-3 rounded-full bg-white py-2 pl-2 pr-6 font-inter text-[15px] font-semibold text-[#14121F] shadow-[0_12px_32px_rgba(20,18,31,0.18)] transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7225E3]"
                  aria-label="Lire la vidéo de démonstration, 1 minute 42"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#7225E3] text-white">
                    <Play size={18} fill="currentColor" aria-hidden="true" />
                  </span>
                  Voir Creatabl IA en 1:42
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
