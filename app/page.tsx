import React from "react";
import {
  CalendarClock,
  Check,
  Heart,
  MessageCircle,
  Play,
  Sparkles,
  Star,
  TrendingUp,
  WandSparkles,
} from "lucide-react";
import NetworkLogo, { NetworkName } from "@/components/NetworkLogo";
import PricingCards from "@/components/ds/PricingCards";
import ScrollReveal from "@/components/ScrollReveal";
import FaqSection from "@/components/sections/faq-section";
import DemoVideo from "@/components/home/DemoVideo";
import FeatureDemo from "@/components/home/FeatureDemo";

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

const networkLabel: Record<NetworkName, string> = {
  instagram: "Instagram",
  linkedin: "LinkedIn",
  tiktok: "TikTok",
  facebook: "Facebook",
  x: "X",
  canva: "Canva",
};

const problems = [
  {
    q: "« Je n'ai pas le temps d'écrire. »",
    before: "Jusqu'à 3 h par post, un format différent par réseau.",
    after: "L'agent IA rédige et adapte votre texte en quelques secondes.",
  },
  {
    q: "« On publie quand on y pense. »",
    before: "Des semaines sans rien, puis trois posts le même jour.",
    after: "Un calendrier éditorial sur 30 jours, publié automatiquement.",
  },
  {
    q: "« Je ne sais pas ce qui marche. »",
    before: "Des statistiques éparpillées dans cinq applications.",
    after: "Portée et engagement de tous vos réseaux sur un seul tableau.",
  },
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
                  Essayer gratuitement 14 jours
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

      {/* Problèmes */}
      <section className="cr-section hp-pain-section">
        <div className="cr-container">
          <div className="cr-section-head cr-section-head--center">
            <span className="cr-overline">Ça vous parle ?</span>
            <h2 className="hp-h2">Publier régulièrement ne devrait pas vous prendre <span className="cr-accent">vos</span> soirées</h2>
            <p>Trois situations que nos utilisateurs décrivent avant de nous rejoindre.</p>
          </div>
          <div className="hp-pains">
            {problems.map((pb) => (
              <article key={pb.q} className="hp-pain">
                <p className="hp-pain-q">{pb.q}</p>
                <div className="hp-pain-row before">
                  <span className="lbl">Avant</span>
                  <span>{pb.before}</span>
                </div>
                <div className="hp-pain-row after">
                  <span className="lbl"><Check size={12} strokeWidth={3} aria-hidden="true" />Avec Creatabl</span>
                  <span>{pb.after}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Fonctionnement en 4 étapes */}
      <section className="cr-section cr-section--tint" id="fonctionnement">
        <div className="cr-container">
          <div className="cr-section-head cr-section-head--center">
            <span className="cr-overline">Comment ça marche</span>
            <h2 className="hp-h2">De l&apos;idée à la publication en 4 étapes</h2>
          </div>
          <ol className="hp-flow">
            <li className="hp-flow-step">
              <div className="hp-flow-visual" aria-hidden="true">
                <div className="v-connect">
                  {(["instagram", "linkedin", "tiktok", "facebook"] as NetworkName[]).map((n) => (
                    <span key={n} className="chip"><NetworkLogo name={n} size={14} />{networkLabel[n]}<Check size={12} strokeWidth={3} className="ok" /></span>
                  ))}
                </div>
              </div>
              <span className="n">1</span>
              <h3>{steps[0].title}</h3>
              <p>{steps[0].text}</p>
            </li>
            <li className="hp-flow-step">
              <div className="hp-flow-visual" aria-hidden="true">
                <div className="v-write">
                  <span className="line w90" /><span className="line w70" /><span className="line w80" />
                  <span className="ai"><Sparkles size={12} />Reformuler pour LinkedIn</span>
                </div>
              </div>
              <span className="n">2</span>
              <h3>{steps[1].title}</h3>
              <p>{steps[1].text}</p>
            </li>
            <li className="hp-flow-step">
              <div className="hp-flow-visual" aria-hidden="true">
                <div className="v-plan">
                  {["L", "M", "M", "J", "V"].map((d, i) => (
                    <span key={i} className="col"><b>{d}</b>{i !== 2 && <i className={`ev e${i}`} />}{i === 1 && <i className="ev e5" />}</span>
                  ))}
                </div>
              </div>
              <span className="n">3</span>
              <h3>{steps[2].title}</h3>
              <p>{steps[2].text}</p>
            </li>
            <li className="hp-flow-step">
              <div className="hp-flow-visual" aria-hidden="true">
                <div className="v-measure">
                  <span className="bars">{[34, 48, 40, 62, 56, 78, 92].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</span>
                  <span className="kpi"><TrendingUp size={12} />+38 %</span>
                </div>
              </div>
              <span className="n">4</span>
              <h3>{steps[3].title}</h3>
              <p>{steps[3].text}</p>
            </li>
          </ol>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section className="cr-section" id="fonctionnalites">
        <div className="cr-container">
          <div className="cr-section-head">
            <span className="cr-overline">Fonctionnalités</span>
            <h2 className="hp-h2">Tout ce qu&apos;il faut pour publier, rien de plus</h2>
            <p>Cliquez sur « En savoir plus » pour voir chaque fonctionnalité en vidéo.</p>
          </div>
          <div className="hp-bento">
            <article className="big">
              <span className="cr-icon-tile"><CalendarClock size={22} aria-hidden="true" /></span>
              <h3>Publication et planification</h3>
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
              <FeatureDemo title="Publication et planification" video="/videos/demo-calendrier.mp4" href="/fonctionnalites/planification" />
            </article>
            <article className="hp-feat">
              <div className="hp-feat-visual v-gen" aria-hidden="true">
                <span className="line w90" /><span className="line w60" />
                <span className="ai"><WandSparkles size={12} />Rédigé par l&apos;IA</span>
              </div>
              <h4>Génération IA</h4>
              <p>Rédigez et adaptez vos posts en quelques secondes grâce à notre IA sur-mesure.</p>
              <FeatureDemo title="Génération IA" video="/videos/demo-create-post.mp4" href="/fonctionnalites/creation" />
            </article>
            <article className="hp-feat">
              <div className="hp-feat-visual v-stats" aria-hidden="true">
                <span className="bars">{[30, 45, 38, 60, 52, 74, 88, 70].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</span>
                <span className="kpi"><TrendingUp size={12} />Portée +24 %</span>
              </div>
              <h4>Analytics unifiés</h4>
              <p>Suivez la portée et l&apos;engagement de tous vos réseaux en un coup d&apos;œil.</p>
              <FeatureDemo title="Analytics unifiés" video="/videos/demo-analytics.mp4" href="/fonctionnalites/analytics" />
            </article>
            <article className="hp-feat">
              <div className="hp-feat-visual v-agent" aria-hidden="true">
                <span className="trend"><Sparkles size={12} />Idée : coulisses de l&apos;équipe</span>
                <span className="trend t2"><TrendingUp size={12} />#MarqueEmployeur · en hausse</span>
              </div>
              <h4>Agent IA (Tendances)</h4>
              <p>Générez des idées de posts basées sur les tendances de votre secteur.</p>
              <FeatureDemo title="Agent IA (Tendances)" video="/videos/demo-agent-ia.mp4" href="/fonctionnalites/agent-ia" />
            </article>
            <article className="hp-feat">
              <div className="hp-feat-visual v-canva" aria-hidden="true">
                <span className="tile k1">Soldes d&apos;été</span>
                <span className="tile k2">Nouveau</span>
                <span className="tile k3">Atelier</span>
                <span className="badge"><NetworkLogo name="canva" size={14} />Canva</span>
              </div>
              <h4>Intégration Canva</h4>
              <p>Importez vos designs Canva directement dans vos posts.</p>
              <FeatureDemo title="Intégration Canva" video="/videos/demo-canva.mp4" href="/fonctionnalites/multi-plateforme" />
            </article>
            <article className="hp-feat">
              <div className="hp-feat-visual v-team" aria-hidden="true">
                <span className="hp-avatars sm">
                  {["SM", "JD", "AL"].map((a, i) => <span key={a} className={`a a${i}`}>{a}</span>)}
                </span>
                <span className="ws">Agence Lumière · 6 comptes</span>
              </div>
              <h4>Multi-comptes équipe</h4>
              <p>Connectez Instagram, LinkedIn, TikTok et Facebook et travaillez à plusieurs, sans basculer d&apos;onglet.</p>
              <FeatureDemo title="Multi-comptes équipe" video="/videos/demo-equipe.mp4" href="/fonctionnalites/collaboration" />
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
              <div className="hp-usecase" aria-label="Exemple : un post de Marie préparé avec Creatabl">
                <div className="hp-usecase-post">
                  <div className="head">
                    <span className="cr-avatar">{initials(main.name)}</span>
                    <div><strong>marie.cree</strong><small><NetworkLogo name="instagram" size={11} />Programmé · mar. 9 h 30</small></div>
                  </div>
                  <div className="media"><span>3 erreurs qui ruinent<br />vos visuels</span></div>
                  <div className="meta">
                    <span><Heart size={14} aria-hidden="true" />248</span>
                    <span><MessageCircle size={14} aria-hidden="true" />31</span>
                  </div>
                </div>
                <ul className="hp-usecase-steps">
                  <li><Sparkles size={14} aria-hidden="true" /><span><b>Légende générée</b> à partir de son idée, puis ajustée</span></li>
                  <li><NetworkLogo name="canva" size={14} /><span><b>Visuel importé</b> depuis Canva</span></li>
                  <li><CalendarClock size={14} aria-hidden="true" /><span><b>Programmé</b> sur Instagram et LinkedIn</span></li>
                  <li className="time"><span>20 min au total, contre 3 h avant</span></li>
                </ul>
              </div>
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

      {/* CTA FINAL — dégradé et trame d'origine, mise en page du design system */}
      <section className="w-full bg-white relative z-10" style={{ backgroundColor: "#FFFFFF", paddingBottom: "80px", paddingTop: "0px" }}>
        <div className="cr-container">
          <ScrollReveal>
            <div className="hp-final-cta">
              {/* Trame de grille */}
              <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
                  `,
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="txt">
                <span className="ov">✦ Commencez aujourd&apos;hui</span>
                <h2>Si vous êtes arrivé jusque-là, c&apos;est que vous êtes prêt.</h2>
                <p className="lead">Votre prochain mois de posts commence ce soir.</p>
                <p>Connectez vos comptes, donnez trois sujets, Creatabl s&apos;occupe du reste.</p>
              </div>
              <div className="act">
                <a href={`${APP_URL}/sign-up`} className="cr-btn cr-btn--lg hp-btn-white">
                  Essayer gratuitement
                </a>
                <small>14 jours d&apos;essai, résiliation à tout moment.</small>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
