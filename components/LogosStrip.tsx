"use client";

import React from "react";

/** 1. Instagram — logo SVG gradient officiel + nom "Instagram" */
const InstagramLogo = () => (
  <div className="flex items-center gap-[8px] flex-shrink-0">
    <svg style={{ height: "26px", width: "auto" }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ig-grad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#f09433" />
          <stop offset="25%" stopColor="#e6683c" />
          <stop offset="50%" stopColor="#dc2743" />
          <stop offset="75%" stopColor="#cc2366" />
          <stop offset="100%" stopColor="#bc1888" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="5.5" fill="url(#ig-grad)" />
      <rect x="5.5" y="5.5" width="13" height="13" rx="3.6" stroke="white" strokeWidth="1.6" fill="none" />
      <circle cx="12" cy="12" r="3.2" stroke="white" strokeWidth="1.6" fill="none" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="white" />
    </svg>
    <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 500, fontSize: "15px", color: "#000000" }}>
      Instagram
    </span>
  </div>
);

/** 2. TikTok — logo SVG officiel noir + nom "TikTok" */
const TikTokLogo = () => (
  <div className="flex items-center gap-[8px] flex-shrink-0">
    <svg style={{ height: "26px", width: "auto" }} viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.86 1.08 2.07 1.85 3.4 2.27V10.1c-1.74-.08-3.41-.78-4.73-1.92-.12-.1-.23-.21-.34-.32v7.71c.08 2.3-1.02 4.54-2.87 5.79-1.94 1.34-4.56 1.63-6.73.74-2.25-.91-3.86-3.14-4.05-5.58-.29-3.23 2.1-6.19 5.33-6.49 1.03-.1 2.08.09 3.02.55V3.86c-1.52-.42-3.13-.3-4.57.34-1.85.83-3.22 2.53-3.64 4.53-.52 2.44.25 5.06 1.96 6.84 1.76 1.84 4.4 2.5 6.87 1.7 2.19-.7 3.82-2.73 4.12-5.02.07-.5.08-1.01.07-1.51V.02z" />
    </svg>
    <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 500, fontSize: "15px", color: "#000000" }}>
      TikTok
    </span>
  </div>
);

/** 3. Facebook — logo SVG bleu officiel + nom "Facebook" */
const FacebookLogo = () => (
  <div className="flex items-center gap-[8px] flex-shrink-0">
    <svg style={{ height: "26px", width: "auto" }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
    <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 500, fontSize: "15px", color: "#1877F2" }}>
      Facebook
    </span>
  </div>
);

/** 4. LinkedIn — logo SVG bleu officiel + nom "LinkedIn" */
const LinkedInLogo = () => (
  <div className="flex items-center gap-[8px] flex-shrink-0">
    <svg style={{ height: "26px", width: "auto" }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
    <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 500, fontSize: "15px", color: "#0A66C2" }}>
      LinkedIn
    </span>
  </div>
);

/** 5. X (Twitter) — logo SVG X officiel noir + nom "X" */
const XLogo = () => (
  <div className="flex items-center gap-[8px] flex-shrink-0">
    <svg style={{ height: "26px", width: "auto" }} viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.717-8.813L1.671 2.25H8.12l4.266 5.64 5.858-5.64zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
    <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 500, fontSize: "15px", color: "#000000" }}>
      X
    </span>
  </div>
);

/** 6. Pinterest — logo SVG rouge officiel + nom "Pinterest" */
const PinterestLogo = () => (
  <div className="flex items-center gap-[8px] flex-shrink-0">
    <svg style={{ height: "26px", width: "auto" }} viewBox="0 0 24 24" fill="#BD081C" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
    </svg>
    <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 500, fontSize: "15px", color: "#BD081C" }}>
      Pinterest
    </span>
  </div>
);

/** 7. YouTube — logo SVG rouge officiel + nom "YouTube" en gras #FF0000 */
const YouTubeLogo = () => (
  <div className="flex items-center gap-[8px] flex-shrink-0">
    <svg style={{ height: "26px", width: "auto" }} viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="23" rx="6" fill="#FF0000"/>
      <path d="M13 7L22 11.5L13 16V7Z" fill="white"/>
    </svg>
    <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 700, fontSize: "15px", color: "#FF0000" }}>
      YouTube
    </span>
  </div>
);

const logos = [
  { key: "ig", el: <InstagramLogo /> },
  { key: "tt", el: <TikTokLogo /> },
  { key: "fb", el: <FacebookLogo /> },
  { key: "li", el: <LinkedInLogo /> },
  { key: "x",  el: <XLogo /> },
  { key: "pi", el: <PinterestLogo /> },
  { key: "yt", el: <YouTubeLogo /> },
];

export default function LogosStrip() {
  // 2 copies identiques pour une boucle infinie et un raccord parfait
  const repeated = [...logos, ...logos];

  return (
    <div
      className="w-full select-none overflow-hidden logos-marquee-container"
      style={{
        backgroundColor: "#ffffff",
        borderTop: "1px solid #f1f5f9",
        borderBottom: "1px solid #f1f5f9",
        paddingTop: "24px",
        paddingBottom: "24px",
      }}
    >
      <div className="flex w-max animate-marquee-custom items-center">
        {repeated.map((logo, idx) => (
          <div
            key={`${logo.key}-${idx}`}
            className="flex-shrink-0"
            style={{ paddingRight: "48px" }}
          >
            {logo.el}
          </div>
        ))}
      </div>
    </div>
  );
}
