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
} from "lucide-react";
import NetworkLogo, { NetworkName } from "@/components/NetworkLogo";
import PricingCards from "@/components/ds/PricingCards";
import Faq from "@/components/ds/Faq";

// Page d'accueil construite sur la page d'exemple HomePage du design system Creatabl.ia.
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
    <div style={{ paddingTop: 100 }}>
      {/* Hero */}
      <section className="hp-hero">
        <div className="hp-hero-band" aria-hidden="true" />
        <div className="cr-container" style={{ position: "relative" }}>
          <div className="hp-hero-grid">
            <span className="cr-badge cr-badge--violet cr-badge--plain">
              <Sparkles size={14} aria-hidden="true" /> Adoré par 127 petites entreprises et agences
            </span>
            <h1>
              La plateforme qui fait passer vos contenus à la <span className="cr-accent">vitesse</span> supérieure
            </h1>
            <p className="lead">
              Créez, planifiez et analysez tous vos réseaux sociaux sur une seule interface conçue pour vous simplifier la
              gestion avec une maîtrise complète.
            </p>
            <div className="hp-hero-cta">
              <a className="cr-btn cr-btn--primary cr-btn--lg" href={`${APP_URL}/sign-up?plan=free`}>Commencer gratuitement</a>
              <Link className="cr-btn cr-btn--secondary cr-btn--lg" href="/pricing">Voir les tarifs</Link>
            </div>
            <div className="hp-hero-note">
              <span><Check size={16} aria-hidden="true" />Plan Free permanent</span>
              <span><Check size={16} aria-hidden="true" />14 jours d&apos;essai sur les plans payants</span>
              <span><Check size={16} aria-hidden="true" />Sans engagement</span>
            </div>
          </div>
          <div className="hp-video">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/dashboard.png" alt="Tableau de bord Creatabl.ia : portée, engagement, publications planifiées et canaux connectés" />
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

      {/* FAQ */}
      <section className="cr-section cr-section--tint" id="faq">
        <div className="cr-container hp-faq">
          <div className="cr-section-head" style={{ alignContent: "start" }}>
            <span className="cr-overline">FAQ</span>
            <h2 className="hp-h2">Questions fréquentes</h2>
            <p>Une autre question ? Écrivez-nous, on vous répond en français.</p>
            <Link className="cr-btn cr-btn--secondary" href="/contact" style={{ justifySelf: "start" }}>Contacter l&apos;équipe</Link>
          </div>
          <Faq />
        </div>
      </section>

      {/* CTA final */}
      <section className="cr-section">
        <div className="cr-container">
          <div className="hp-final">
            <svg aria-hidden="true" viewBox="0 0 200 200" style={{ position: "absolute", right: -60, top: -60, width: 320, opacity: 0.18 }}>
              <circle cx="100" cy="100" r="98" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
              <circle cx="100" cy="100" r="64" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
            </svg>
            <div style={{ position: "relative" }}>
              <h2>Si vous êtes arrivé jusque-là, c&apos;est que vous êtes <span className="cr-accent">prêt</span></h2>
              <p>Créez, planifiez et analysez tous vos réseaux sociaux depuis une seule interface.</p>
            </div>
            <div className="cta" style={{ position: "relative" }}>
              <a className="cr-btn cr-btn--lg cr-btn--white" href={`${APP_URL}/sign-up?plan=free`}>Commencez gratuitement</a>
              <Link className="cr-btn cr-btn--outline-white" href="/pricing">Voir les tarifs</Link>
              <small>14 jours gratuits sur les plans payants · Plan Free à 20 crédits par mois</small>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
