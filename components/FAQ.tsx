'use client'
import { useState } from 'react'

const faqs = [
  {
    q: "Puis-je annuler à tout moment ?",
    a: "Oui, sans engagement sur les plans mensuels. Vous conservez l'accès jusqu'à la fin de votre période payée. Sur les plans annuels, l'engagement est de 12 mois avec 20% de réduction.",
  },
  {
    q: "Mes données sont-elles sécurisées ?",
    a: "Oui. Toutes vos données et vos tokens d'accès aux réseaux sociaux sont chiffrés (AES-256) en base de données. Nous respectons le RGPD et nous ne partageons jamais vos données. Vous pouvez supprimer votre compte à tout moment.",
  },
  {
    q: "Combien de temps pour créer mon premier post ?",
    a: "Moins de 3 minutes. Après votre inscription, vous connectez vos réseaux sociaux en un clic et vous générez votre premier post avec l'IA. Un tutoriel de démarrage vous guide.",
  },
  {
    q: "Quels réseaux sociaux sont supportés ?",
    a: "LinkedIn, Instagram, Facebook et X (Twitter) sont disponibles dès maintenant. TikTok, YouTube et Pinterest arrivent prochainement.",
  },
  {
    q: "Comment fonctionne l'essai gratuit ?",
    a: "14 jours d'essai gratuit sur tous les plans payants. Carte bancaire requise mais aucun prélèvement pendant l'essai. Annulez à tout moment avant la fin des 14 jours pour ne rien payer.",
  },
  {
    q: "L'IA génère-t-elle du contenu original ?",
    a: "Oui. L'IA apprend de votre style et adapte le contenu à votre audience et à chaque réseau social. Vous validez et modifiez chaque post avant publication.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section style={{
      padding: '80px 24px',
      maxWidth: '800px',
      margin: '0 auto',
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '48px',
      }}>
        <p style={{
          color: '#7F77DD',
          fontSize: '13px',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: '12px',
        }}>
          FAQ
        </p>
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 42px)',
          fontWeight: 700,
          color: 'white',
          lineHeight: 1.2,
        }}>
          Questions fréquentes
        </h2>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              background: 'rgba(127,119,221,0.05)',
              border: '1px solid rgba(127,119,221,0.15)',
              borderRadius: '12px',
              overflow: 'hidden',
            }}
          >
            <button
              onClick={() => setOpenIndex(
                openIndex === index ? null : index
              )}
              style={{
                width: '100%',
                padding: '20px 24px',
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '16px',
                fontWeight: 500,
                textAlign: 'left',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {faq.q}
              <span style={{
                fontSize: '20px',
                color: '#7F77DD',
                transition: 'transform 0.2s',
                transform: openIndex === index
                  ? 'rotate(45deg)'
                  : 'rotate(0deg)',
              }}>
                +
              </span>
            </button>
            {openIndex === index && (
              <div style={{
                padding: '0 24px 20px',
                color: 'rgba(255,255,255,0.7)',
                fontSize: '14px',
                lineHeight: 1.6,
              }}>
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
