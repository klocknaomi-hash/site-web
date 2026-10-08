import React from "react";
import Link from "next/link";
import {
  BarChart2,
  CalendarClock,
  Check,
  Clock,
  Image as ImageIcon,
  Network,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  WandSparkles,
  X,
  Play,
  Lock,
  Zap,
  MapPin,
} from "lucide-react";
import NetworkLogo, { NetworkName } from "@/components/NetworkLogo";
import PricingCards from "@/components/ds/PricingCards";
import ScrollReveal from "@/components/ScrollReveal";
import FaqSection from "@/components/sections/faq-section";
import DemoVideo from "@/components/home/DemoVideo";

// Page d'accueil : hero d'origine (fond à colonnes et effets violets, FAQ et CTA final
// d'origine) fusionné avec les nouvelles sections issues du design system Creatabl.ia.
const APP_URL = "https://app.creatabl-ia.com";

const testimonials = [
  {
    name: "Marie L.",
    role: "Créatrice de contenu",
    quote: "Avant Creatabl, je passais 3 h par post. Maintenant je génère, j'ajuste et je programme en 20 minutes. C'est littéralement un game changer.",
  },
  {
    name: "Thomas R.",
    role: "Consultant marketing",
    quote: "L'IA comprend vraiment mon style. Je n'ai plus jamais le syndrome de la page blanche. Mes stats ont augmenté de 40 % en un mois.",
  },
  {
    name: "Sophie M.",
    role: "Directrice agence",
    quote: "On gère 6 clients depuis une seule interface. Creatabl nous a fait gagner 10 h par semaine sur la coordination de contenu.",
  },
  {
    name: "Julien D.",
    role: "Head of Content",
    quote: "Le calendrier éditorial partagé a changé nos réunions. On arrive préparés, on valide vite, on publie plus.",
  },
];

const steps = [
  { title: "Centralisez tout", text: "Connectez vos réseaux et retrouvez tous vos contenus au même endroit. Fini les onglets ouverts en permanence." },
  { title: "Créez sans effort", text: "Rédigez votre légende. L'agent IA reformule, améliore et adapte votre texte en quelques secondes." },
  { title: "Planifiez intelligemment", text: "Organisez vos publications sur un calendrier éditorial clair. Visualisez votre stratégie sur 30 jours." },
  { title: "Publiez partout et mesurez", text: "Diffusez en un clic sur tous vos comptes et analysez vos performances en temps réel." },
];

const calendar: { day: string; events: { net: NetworkName; time: string }[] }[] = [
  { day: "Lun. 13", events: [{ net: "linkedin", time: "9 h 00" }] },
  { day: "Mar. 14", events: [{ net: "instagram", time: "9 h 30" }, { net: "facebook", time: "9 h 30" }] },
  { day: "Mer. 15", events: [] },
  { day: "Jeu. 16", events: [{ net: "tiktok", time: "18 h 00" }] },
  { day: "Ven. 17", events: [{ net: "instagram", time: "12 h 15" }, { net: "x", time: "17 h 00" }] },
];

function initials(name: string) {
  return name.split(/\s+/).map((p) => p[0]).join("").replace(".", "").slice(0, 2).toUpperCase();
}

export default function Home() {
  const [main, ...others] = testimonials;

  return (
    <div className="relative overflow-hidden pt-20">

      {/* HERO — fond d'origine conservé : colonnes, demi-cercle violet, panneaux */}
      <section
        className="relative w-full overflow-hidden bg-white pt-24 pb-20 md:pt-32 md:pb-24 border-b border-slate-100"
        style={{ background: "#FFFFFF", position: "relative", overflow: "hidden", backgroundColor: "#ffffff" }}
      >
        <div className="hero-bg-wrapper" aria-hidden="true">
          {/* Demi-cercle violet illuminé depuis le bas */}
          <div className="hero-glow-circle" />

          {/* 12 colonnes avec degrés de transparence variables */}
          <div className="hero-columns">
            <div className="hero-col" />
            <div className="hero-col" />
            <div className="hero-col" />
            <div className="hero-col" />
            <div className="hero-col" />
            <div className="hero-col" />
            <div className="hero-col" />
            <div className="hero-col" />
            <div className="hero-col" />
            <div className="hero-col" />
            <div className="hero-col" />
            <div className="hero-col" />
          </div>

          {/* Panneaux blancs semi-transparents */}
          <div className="hero-panel-left" />
          <div className="hero-panel-right" />
        </div>

        <div
          className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center"
          style={{ position: "relative", zIndex: 10 }}
        >
          <div className="relative z-10 w-full max-w-[800px] flex flex-col items-center space-y-6">
            <ScrollReveal delay={150}>
              <h1
                className="font-outfit text-[#14121F] text-center"
                style={{
                  fontSize: "min(56px, 9vw)",
                  lineHeight: "1.14",
                  letterSpacing: "-0.02em",
                  maxWidth: "800px",
                  margin: "0 auto",
                  fontWeight: 700,
                  position: "relative",
                  zIndex: 10,
                }}
              >
                La plateforme qui fait
                <br />
                passer votre contenu
                <br />
                à la{" "}
                <span className="font-playfair italic text-[#7225E3]" style={{ fontWeight: 500, letterSpacing: 0 }}>vitesse</span> supérieure.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p
                className="font-inter font-medium text-[#6B6780] text-center leading-relaxed"
                style={{ fontSize: "18px", maxWidth: "750px", margin: "0 auto", position: "relative", zIndex: 10 }}
              >
                <strong className="font-semibold text-[#14121F]">Créez, planifiez, analysez.</strong> Tous vos réseaux sociaux sur
                une seule interface, conçue pour vous simplifier la gestion avec une maîtrise complète.
              </p>
            </ScrollReveal>

            {/* CTA principaux */}
            <ScrollReveal delay={450}>
              <div className="hp-hero-cta" style={{ marginTop: 16 }}>
                <a className="cr-btn cr-btn--primary cr-btn--lg" href={`${APP_URL}/sign-up`}>
                  C&apos;est gratuit — 14 jours
                </a>
                <a className="cr-btn cr-btn--secondary cr-btn--lg" href="#demo">
                  <Play size={18} aria-hidden="true" />
                  Voir la démo
                </a>
              </div>
            </ScrollReveal>

            {/* Réassurance */}
            <ScrollReveal delay={550}>
              <ul className="hp-checks" aria-label="Ce qui est inclus">
                {["Plan gratuit permanent", "Hébergement en France", "Visualisation en un clic"].map((item) => (
                  <li key={item}>
                    <span className="hp-check" aria-hidden="true"><Check size={12} strokeWidth={3} /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          {/* Vidéo démo dans le cadre violet d'origine */}
          <div className="w-full" style={{ marginTop: "56px" }}>
            <ScrollReveal delay={300}>
              <DemoVideo />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Réassurance */}
      <section className="hp-trust" aria-label="Creatabl en chiffres">
        <div className="cr-container">
          <div className="t"><span className="cr-icon-tile"><Users size={20} aria-hidden="true" /></span><div><strong>100+</strong>profils ont déjà rejoint Creatabl</div></div>
          <div className="t"><span className="cr-icon-tile"><Clock size={20} aria-hidden="true" /></span><div><strong>3 h</strong>gagnées par semaine en moyenne</div></div>
          <div className="t"><span className="cr-icon-tile"><Network size={20} aria-hidden="true" /></span><div><strong>5 réseaux</strong>LinkedIn, Instagram, TikTok, Facebook, X</div></div>
          <div className="t"><span className="cr-icon-tile"><CalendarClock size={20} aria-hidden="true" /></span><div><strong>14 jours</strong>d&apos;essai gratuit sur les plans payants</div></div>
        </div>
      </section>

      {/* Problèmes */}
      <section className="cr-section">
        <div className="cr-container">
          <div className="cr-section-head">
            <span className="cr-overline">Le constat</span>
            <h2 className="hp-h2">Publier régulièrement ne devrait pas vous prendre <span className="cr-accent">vos</span> soirées</h2>
            <p>Trois situations que nos utilisateurs décrivent avant de nous rejoindre.</p>
          </div>
          <div className="hp-problems">
            <div className="hp-problem">
              <span className="cr-icon-tile"><Clock size={22} aria-hidden="true" /></span>
              <span className="q">« Je n&apos;ai pas le temps d&apos;écrire. »</span>
              <span className="before"><X size={16} aria-hidden="true" />Jusqu&apos;à 3 h par post, un format différent par réseau.</span>
              <span className="after"><Check size={16} aria-hidden="true" />L&apos;agent IA rédige et adapte votre texte en quelques secondes.</span>
            </div>
            <div className="hp-problem">
              <span className="cr-icon-tile"><CalendarClock size={22} aria-hidden="true" /></span>
              <span className="q">« On publie quand on y pense. »</span>
              <span className="before"><X size={16} aria-hidden="true" />Des semaines sans rien, puis trois posts le même jour.</span>
              <span className="after"><Check size={16} aria-hidden="true" />Un calendrier éditorial sur 30 jours, publié automatiquement.</span>
            </div>
            <div className="hp-problem">
              <span className="cr-icon-tile"><BarChart2 size={22} aria-hidden="true" /></span>
              <span className="q">« Je ne sais pas ce qui marche. »</span>
              <span className="before"><X size={16} aria-hidden="true" />Des statistiques éparpillées dans cinq applications.</span>
              <span className="after"><Check size={16} aria-hidden="true" />Portée et engagement de tous vos réseaux sur un seul tableau.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnement en 4 étapes */}
      <section className="cr-section cr-section--tint" id="fonctionnement">
        <div className="cr-container">
          <div className="cr-section-head">
            <span className="cr-overline">Comment ça marche</span>
            <h2 className="hp-h2">De l&apos;idée à la publication en 4 étapes</h2>
          </div>
          <ol className="hp-steps">
            {steps.map((s, i) => (
              <li key={s.title} className={`hp-step${i === 0 ? " on" : ""}`}>
                <span className="n">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section className="cr-section" id="fonctionnalites">
        <div className="cr-container">
          <div className="cr-section-head">
            <span className="cr-overline">Fonctionnalités</span>
            <h2 className="hp-h2">Tout ce qu&apos;il faut pour publier, rien de plus</h2>
          </div>
          <div className="hp-bento">
            <article className="big">
              <span className="cr-icon-tile"><CalendarClock size={22} aria-hidden="true" /></span>
              <h3>Planification</h3>
              <p className="cr-muted" style={{ maxWidth: "52ch" }}>
                Visualisez et organisez votre calendrier éditorial pour garder une longueur d&apos;avance. Creatabl publie
                automatiquement à l&apos;heure prévue.
              </p>
              <div className="hp-mini-cal" aria-label="Exemple de semaine planifiée">
                {calendar.map((d) => (
                  <div key={d.day} className="day">
                    <span>{d.day}</span>
                    {d.events.map((e) => (
                      <span key={e.net + e.time} className="ev"><NetworkLogo name={e.net} size={12} />{e.time}</span>
                    ))}
                  </div>
                ))}
              </div>
              <Link className="cr-link" href="/fonctionnalites/planification">Découvrir la planification →</Link>
            </article>
            <article className="cr-feature">
              <span className="cr-icon-tile"><WandSparkles size={22} aria-hidden="true" /></span>
              <h4>Génération IA</h4>
              <p>Rédigez et adaptez vos posts en quelques secondes grâce à notre IA sur-mesure.</p>
              <Link className="cr-link" href="/fonctionnalites/creation">En savoir plus →</Link>
            </article>
            <article className="cr-feature">
              <span className="cr-icon-tile"><TrendingUp size={22} aria-hidden="true" /></span>
              <h4>Analytics unifiés</h4>
              <p>Suivez la portée et l&apos;engagement de tous vos réseaux en un coup d&apos;œil.</p>
              <Link className="cr-link" href="/fonctionnalites/analytics">En savoir plus →</Link>
            </article>
            <article className="cr-feature">
              <span className="cr-icon-tile"><Users size={22} aria-hidden="true" /></span>
              <h4>Multi-comptes équipe</h4>
              <p>Connectez Instagram, LinkedIn, TikTok et Facebook sans basculer d&apos;onglet.</p>
              <Link className="cr-link" href="/fonctionnalites/collaboration">En savoir plus →</Link>
            </article>
            <article className="cr-feature">
              <span className="cr-icon-tile"><ImageIcon size={22} aria-hidden="true" /></span>
              <h4>Intégration Canva</h4>
              <p>Importez vos designs Canva directement dans vos posts.</p>
              <Link className="cr-link" href="/fonctionnalites/multi-plateforme">En savoir plus →</Link>
            </article>
            <article className="cr-feature">
              <span className="cr-icon-tile"><Sparkles size={22} aria-hidden="true" /></span>
              <h4>Agent IA (Tendances)</h4>
              <p>Générez des idées de posts basées sur les tendances de votre secteur.</p>
              <Link className="cr-link" href="/fonctionnalites/agent-ia">En savoir plus →</Link>
            </article>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="cr-section cr-section--tint" id="tarifs">
        <div className="cr-container">
          <div className="cr-section-head cr-section-head--center">
            <span className="cr-overline">Tarifs</span>
            <h2 className="hp-h2">Choisissez l&apos;offre qui vous correspond</h2>
            <p>Plan Free permanent, 14 jours d&apos;essai sur les plans payants. 1 crédit = 1 post programmé ou publié.</p>
          </div>
          <PricingCards />
        </div>
      </section>

      {/* Témoignages */}
      <section className="cr-section">
        <div className="cr-container">
          <div className="cr-section-head">
            <span className="cr-overline">Témoignages</span>
            <h2 className="hp-h2">Leurs avis valent mieux que tous nos arguments</h2>
          </div>
          <div className="hp-testi">
            <figure className="cr-quote cr-quote--large" style={{ margin: 0 }}>
              <span className="cr-stars" aria-label="5 sur 5">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={18} fill="currentColor" aria-hidden="true" />)}
              </span>
              <blockquote>« {main.quote} »</blockquote>
              <footer>
                <span className="cr-avatar">{initials(main.name)}</span>
                <div><cite>{main.name}</cite><span>{main.role}</span></div>
              </footer>
            </figure>
            {others.map((t) => (
              <figure key={t.name} className="cr-quote" style={{ margin: 0, background: "var(--white)", border: "1px solid var(--border)" }}>
                <blockquote>« {t.quote} »</blockquote>
                <footer>
                  <span className="cr-avatar" style={{ background: "var(--surface)", color: "var(--ink)" }}>{initials(t.name)}</span>
                  <div><cite>{t.name}</cite><span>{t.role}</span></div>
                </footer>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — design d'origine, questions fusionnées */}
      <FaqSection />

      {/* CTA FINAL — design d'origine, contenu mis à jour */}
      <section className="w-full bg-white relative z-10" style={{ backgroundColor: "#FFFFFF", paddingBottom: "80px", paddingTop: "0px" }}>
        <div className="mx-4 md:mx-[60px] rounded-[24px] overflow-hidden">
          <ScrollReveal>
            <div
              className="relative text-center py-[90px] px-6 sm:px-12 md:px-[80px]"
              style={{ background: "linear-gradient(135deg, #7225E3 0%, #8A38F5 100%)" }}
            >
              {/* Trame de grille */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
                  `,
                  backgroundSize: "40px 40px",
                }}
              />

              <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                <span className="font-outfit uppercase text-white/70 block" style={{ fontSize: "11px", letterSpacing: "0.1em" }}>
                  ✦ Commencez aujourd&apos;hui
                </span>

                <h2
                  className="font-outfit text-white font-extrabold mx-auto leading-tight"
                  style={{ fontSize: "min(48px, 9.5vw)", fontWeight: 800, maxWidth: "640px", marginTop: "16px" }}
                >
                  Si vous êtes arrivé jusque-là, c&apos;est que vous êtes prêt.
                </h2>

                <p className="font-inter text-white/85" style={{ fontSize: "18px", marginTop: "12px" }}>
                  Votre prochain mois de posts commence ce soir.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-[16px]" style={{ marginTop: "24px" }}>
                  {[
                    { icon: Lock, label: "Paiement sécurisé" },
                    { icon: Zap, label: "Prise en main en 5 minutes" },
                    { icon: MapPin, label: "Support en français" },
                  ].map(({ icon: Icon, label }) => (
                    <span
                      key={label}
                      className="font-inter text-white border inline-flex items-center gap-1.5"
                      style={{
                        background: "rgba(255,255,255,0.12)",
                        borderColor: "rgba(255,255,255,0.2)",
                        borderRadius: "100px",
                        padding: "6px 14px",
                        fontSize: "12px",
                      }}
                    >
                      <Icon size={13} aria-hidden="true" />
                      {label}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-[14px]" style={{ marginTop: "36px" }}>
                  <a
                    href={`${APP_URL}/sign-up`}
                    className="font-inter text-center hover:scale-[1.02] transition-transform"
                    style={{ background: "#ffffff", color: "#7225E3", fontWeight: 700, padding: "14px 32px", borderRadius: "999px" }}
                  >
                    C&apos;est gratuit — 14 jours
                  </a>
                  <a
                    href={`${APP_URL}/sign-in`}
                    className="font-inter text-center text-white border hover:bg-white/5 transition-colors"
                    style={{ background: "transparent", borderColor: "rgba(255,255,255,0.4)", padding: "14px 32px", borderRadius: "999px" }}
                  >
                    Connectez-vous à votre compte
                  </a>
                </div>

                <p className="font-inter text-white/80" style={{ fontSize: "14px", marginTop: "20px" }}>
                  14 jours d&apos;essai — Résiliation à tout moment
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
