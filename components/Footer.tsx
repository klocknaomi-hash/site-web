import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer 
      className="w-full bg-[#FFFFFF]"
      style={{
        borderTop: "1px solid #F3F4F6",
      }}
    >
      <div 
        className="mx-auto pt-[64px] pb-[40px] px-6 md:px-[60px]"
        style={{
          maxWidth: "1280px",
        }}
      >
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8 md:gap-12">
          
          {/* Column 1 — Brand */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-2 w-max">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={process.env.NEXT_PUBLIC_LOGO_URL || "/logo.png"} 
                alt="Creatabl Logo" 
                className="h-[28px] w-auto object-contain"
              />
              <div className="flex items-baseline font-outfit font-medium text-[24px] text-[#111827]">
                <span>Creatabl.</span>
                <span className="font-playfair italic font-medium text-[#111827]">ia</span>
              </div>
            </Link>
            
            <p 
              className="font-inter text-[#6B7280] leading-relaxed"
              style={{
                fontSize: "14px",
                maxWidth: "280px",
              }}
            >
              Creatabl centralise la création, la planification et la publication de votre contenu sur tous vos réseaux sociaux.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-[12px]" style={{ marginTop: "20px" }}>
              {/* Instagram */}
              <a 
                href="#" 
                className="text-[#9CA3AF] hover:text-[#7225E3] transition-colors duration-200" 
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a 
                href="#" 
                className="text-[#9CA3AF] hover:text-[#7225E3] transition-colors duration-200" 
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              {/* TikTok */}
              <a 
                href="#" 
                className="text-[#9CA3AF] hover:text-[#7225E3] transition-colors duration-200" 
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.86 1.08 2.07 1.85 3.4 2.27V10.1c-1.74-.08-3.41-.78-4.73-1.92-.12-.1-.23-.21-.34-.32v7.71c.08 2.3-1.02 4.54-2.87 5.79-1.94 1.34-4.56 1.63-6.73.74-2.25-.91-3.86-3.14-4.05-5.58-.29-3.23 2.1-6.19 5.33-6.49 1.03-.1 2.08.09 3.02.55V3.86c-1.52-.42-3.13-.3-4.57.34-1.85.83-3.22 2.53-3.64 4.53-.52 2.44.25 5.06 1.96 6.84 1.76 1.84 4.4 2.5 6.87 1.7 2.19-.7 3.82-2.73 4.12-5.02.07-.5.08-1.01.07-1.51V.02z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Ressources */}
          <div className="flex flex-col">
            <h3 
              className="font-outfit font-medium uppercase text-[#111827] tracking-[0.12em]"
              style={{
                fontSize: "11px",
                marginBottom: "18px",
              }}
            >
              Ressources
            </h3>
            <ul className="space-y-[12px]">
              <li>
                <Link 
                  href="/blog" 
                  className="font-inter text-[#6B7280] hover:text-[#7225E3] transition-colors duration-200"
                  style={{ fontSize: "14px" }}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/guides" 
                  className="font-inter text-[#6B7280] hover:text-[#7225E3] transition-colors duration-200"
                  style={{ fontSize: "14px" }}
                >
                  Guides
                </Link>
              </li>
              <li>
                <Link 
                  href="/roadmap" 
                  className="font-inter text-[#6B7280] hover:text-[#7225E3] transition-colors duration-200"
                  style={{ fontSize: "14px" }}
                >
                  Roadmap
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="font-inter text-[#6B7280] hover:text-[#7225E3] transition-colors duration-200"
                  style={{ fontSize: "14px" }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Support */}
          <div className="flex flex-col">
            <h3 
              className="font-outfit font-medium uppercase text-[#111827] tracking-[0.12em]"
              style={{
                fontSize: "11px",
                marginBottom: "18px",
              }}
            >
              Support
            </h3>
            <ul className="space-y-[12px]">
              <li>
                <Link 
                  href="/mentions-legales" 
                  className="font-inter text-[#6B7280] hover:text-[#7225E3] transition-colors duration-200"
                  style={{ fontSize: "14px" }}
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link 
                  href="/cgu" 
                  className="font-inter text-[#6B7280] hover:text-[#7225E3] transition-colors duration-200"
                  style={{ fontSize: "14px" }}
                >
                  CGU
                </Link>
              </li>
              <li>
                <Link 
                  href="/confidentialite" 
                  className="font-inter text-[#6B7280] hover:text-[#7225E3] transition-colors duration-200"
                  style={{ fontSize: "14px" }}
                >
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="font-inter text-[#6B7280] hover:text-[#7225E3] transition-colors duration-200"
                  style={{ fontSize: "14px" }}
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 — Produit */}
          <div className="flex flex-col">
            <h3 
              className="font-outfit font-medium uppercase text-[#111827] tracking-[0.12em]"
              style={{
                fontSize: "11px",
                marginBottom: "18px",
              }}
            >
              Produit
            </h3>
            <ul className="space-y-[12px]">
              <li>
                <Link 
                  href="/#fonctionnalites" 
                  className="font-inter text-[#6B7280] hover:text-[#7225E3] transition-colors duration-200"
                  style={{ fontSize: "14px" }}
                >
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link 
                  href="/tarifs" 
                  className="font-inter text-[#6B7280] hover:text-[#7225E3] transition-colors duration-200"
                  style={{ fontSize: "14px" }}
                >
                  Tarifs
                </Link>
              </li>
              <li>
                <Link 
                  href="/#pour-qui" 
                  className="font-inter text-[#6B7280] hover:text-[#7225E3] transition-colors duration-200"
                  style={{ fontSize: "14px" }}
                >
                  Pour qui
                </Link>
              </li>
              <li>
                <Link 
                  href="https://app.creatabl-ia.com/sign-up" 
                  className="font-inter text-[#6B7280] hover:text-[#7225E3] transition-colors duration-200"
                  style={{ fontSize: "14px" }}
                >
                  Essai gratuit
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Strip */}
      <div 
        className="w-full bg-[#FAFAFA]"
        style={{
          borderTop: "1px solid #F3F4F6",
        }}
      >
        <div 
          className="mx-auto py-[28px] px-6 md:px-[60px] flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            maxWidth: "1280px",
          }}
        >
          {/* Left Text */}
          <p 
            className="font-inter text-[#9CA3AF]"
            style={{ fontSize: "13px" }}
          >
            © 2026 Creatabl · Tous droits réservés
          </p>

          {/* Right Links */}
          <div 
            className="flex items-center flex-wrap gap-2 font-inter text-[#9CA3AF]"
            style={{ fontSize: "13px" }}
          >
            <Link href="/mentions-legales" className="hover:text-[#6B7280] transition-colors duration-200">
              Mentions légales
            </Link>
            <span>·</span>
            <Link href="/cgu" className="hover:text-[#6B7280] transition-colors duration-200">
              CGU
            </Link>
            <span>·</span>
            <Link href="/confidentialite" className="hover:text-[#6B7280] transition-colors duration-200">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
