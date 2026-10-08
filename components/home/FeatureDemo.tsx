"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Play, X } from "lucide-react";

// Bouton « En savoir plus » d'une fonctionnalité : ouvre une fenêtre avec la courte
// vidéo de démonstration propre à cette fonctionnalité (public/videos/<fichier>.mp4).
// Tant que la vidéo n'est pas déposée, la fenêtre l'indique et renvoie vers la page détaillée.
export default function FeatureDemo({
  title,
  video,
  href,
}: {
  title: string;
  video: string;
  href: string;
}) {
  const [open, setOpen] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="cr-link hp-demo-btn"
        onClick={() => {
          setUnavailable(false);
          setOpen(true);
        }}
      >
        <span className="hp-demo-play" aria-hidden="true"><Play size={10} fill="currentColor" /></span>
        En savoir plus
      </button>

      {open && (
        <div className="hp-modal-scrim" onClick={() => setOpen(false)}>
          <div
            className="hp-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`Démo : ${title}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="hp-modal-head">
              <h4>{title}</h4>
              <button ref={closeRef} type="button" className="cr-iconbtn" onClick={() => setOpen(false)} aria-label="Fermer">
                <X size={20} aria-hidden="true" />
              </button>
            </div>
            <div className="hp-modal-media">
              {unavailable ? (
                <p>La démo de cette fonctionnalité arrive bientôt.</p>
              ) : (
                <video
                  src={video}
                  poster="/dashboard.png"
                  controls
                  autoPlay
                  playsInline
                  onError={() => setUnavailable(true)}
                >
                  Votre navigateur ne lit pas cette vidéo.
                </video>
              )}
            </div>
            <div className="hp-modal-foot">
              <span>Démo courte de la fonctionnalité.</span>
              <Link className="cr-btn cr-btn--secondary" href={href} onClick={() => setOpen(false)}>
                Voir la page complète
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
