"use client";

import React from "react";

/*
  Logos fidèles aux identités visuelles officielles 2025/2026
  - Icônes : SVG inline pixel-perfect
  - Wordmarks : polices approchant les originaux
  - Dancing Script (Google Fonts) → approximation du script Instagram
*/

/** Facebook — "f" blanc sur fond bleu, "facebook" lowercase bold */
const FacebookLogo = () => (
  <div className="flex items-center gap-[8px] flex-shrink-0">
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
    <span style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontWeight: 700, fontSize: "17px", color: "#1877F2", letterSpacing: "-0.01em" }}>
      facebook
    </span>
  </div>
);

/** LinkedIn — carré bleu "in", texte LinkedIn */
const LinkedInLogo = () => (
  <div className="flex items-center gap-[8px] flex-shrink-0">
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
    <span style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontWeight: 700, fontSize: "17px", color: "#0A66C2", letterSpacing: "-0.01em" }}>
      LinkedIn
    </span>
  </div>
);

/**
 * Instagram — icône gradient officiel + wordmark en Dancing Script (≈ Billabong)
 * La police Dancing Script est la plus proche du vrai wordmark Instagram disponible sur Google Fonts
 */
const InstagramLogo = () => (
  <div className="flex items-center gap-[8px] flex-shrink-0">
    {/* Icône Instagram gradient officiel */}
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ig-bg" cx="30%" cy="107%" r="150%">
          <stop offset="0%"  stopColor="#fdf497"/>
          <stop offset="5%"  stopColor="#fdf497"/>
          <stop offset="45%" stopColor="#fd5949"/>
          <stop offset="60%" stopColor="#d6249f"/>
          <stop offset="90%" stopColor="#285AEB"/>
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#ig-bg)"/>
      {/* Contour carré arrondi (appareil photo) */}
      <rect x="6.5" y="6.5" width="11" height="11" rx="3.2" stroke="white" strokeWidth="1.6" fill="none"/>
      {/* Cercle (objectif) */}
      <circle cx="12" cy="12" r="3.2" stroke="white" strokeWidth="1.6" fill="none"/>
      {/* Point flash */}
      <circle cx="17" cy="7" r="1.1" fill="white"/>
    </svg>
    {/* Wordmark — Dancing Script chargé via @import dans le style tag ci-dessous */}
    <span style={{ fontFamily: "'Dancing Script', 'Brush Script MT', cursive", fontWeight: 700, fontSize: "21px", color: "#333333", lineHeight: 1 }}>
      Instagram
    </span>
  </div>
);

/** TikTok — logo triple-couche officiel (cyan + rouge + noir) */
const TikTokLogo = () => (
  <div className="flex items-center gap-[8px] flex-shrink-0">
    <div style={{ position: "relative", width: "22px", height: "26px" }}>
      {/* Couche cyan (décalée gauche) */}
      <svg width="22" height="26" viewBox="0 0 24 28" style={{ position: "absolute", left: "-1.5px", top: "1px" }}>
        <path fill="#25F4EE" d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v14.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V10.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.69a8.18 8.18 0 004.78 1.52V7.74a4.84 4.84 0 01-1-.05z"/>
      </svg>
      {/* Couche rouge (décalée droite) */}
      <svg width="22" height="26" viewBox="0 0 24 28" style={{ position: "absolute", left: "1.5px", top: "-1px" }}>
        <path fill="#FE2C55" d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v14.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V10.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.69a8.18 8.18 0 004.78 1.52V7.74a4.84 4.84 0 01-1-.05z"/>
      </svg>
      {/* Couche noire (principale, centrée) */}
      <svg width="22" height="26" viewBox="0 0 24 28" style={{ position: "absolute", left: 0, top: 0 }}>
        <path fill="#000000" d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v14.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V10.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.69a8.18 8.18 0 004.78 1.52V7.74a4.84 4.84 0 01-1-.05z"/>
      </svg>
    </div>
    <span style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontWeight: 800, fontSize: "17px", color: "#010101", letterSpacing: "-0.02em" }}>
      TikTok
    </span>
  </div>
);

/** X — logo officiel depuis juillet 2023, noir pur */
const XLogo = () => (
  <div className="flex items-center gap-[7px] flex-shrink-0">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.717-8.813L1.671 2.25H8.12l4.266 5.64 5.858-5.64zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
    <span style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontWeight: 800, fontSize: "18px", color: "#000000", letterSpacing: "-0.04em" }}>
      X
    </span>
  </div>
);

/** Pinterest — couleur officielle #BD081C (vérifiée 2025) */
const PinterestLogo = () => (
  <div className="flex items-center gap-[8px] flex-shrink-0">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#BD081C" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
    </svg>
    <span style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontWeight: 700, fontSize: "17px", color: "#BD081C", letterSpacing: "-0.01em" }}>
      Pinterest
    </span>
  </div>
);

/** YouTube — rouge officiel #FF0033, texte presqu'noir #212121 */
const YouTubeLogo = () => (
  <div className="flex items-center gap-[9px] flex-shrink-0">
    {/* Icône YouTube officielle (rectangle rouge + triangle blanc) */}
    <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="23" rx="5.5" fill="#FF0033"/>
      <path d="M13 7L22 11.5L13 16V7Z" fill="white"/>
    </svg>
    <span style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontWeight: 700, fontSize: "17px", color: "#212121", letterSpacing: "-0.01em" }}>
      YouTube
    </span>
  </div>
);

const logos = [
  { key: "fb", el: <FacebookLogo /> },
  { key: "li", el: <LinkedInLogo /> },
  { key: "ig", el: <InstagramLogo /> },
  { key: "tt", el: <TikTokLogo /> },
  { key: "x",  el: <XLogo /> },
  { key: "pi", el: <PinterestLogo /> },
  { key: "yt", el: <YouTubeLogo /> },
];

export default function LogosStrip() {
  const repeated = [...logos, ...logos, ...logos, ...logos];

  return (
    <>
      {/* Chargement de Dancing Script (≈ wordmark Instagram) */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
      `}} />

      <div
        className="w-full select-none overflow-hidden logos-marquee-container"
        style={{
          backgroundColor: "#EDE9FE",
          borderTop: "1px solid #C2B8FF",
          borderBottom: "1px solid #C2B8FF",
          paddingTop: "24px",
          paddingBottom: "24px",
        }}
      >
        <div className="flex w-max animate-marquee-custom items-center">
          {repeated.map((logo, idx) => (
            <React.Fragment key={`${logo.key}-${idx}`}>
              <div className="flex items-center flex-shrink-0 px-[36px]">
                {logo.el}
              </div>
              {/* Séparateur discret */}
              <div className="flex-shrink-0" style={{ width: "1px", height: "20px", background: "rgba(114,37,227,0.18)" }} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
