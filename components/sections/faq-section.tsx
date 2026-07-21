'use client'

import { useState } from 'react'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

interface FAQItem {
  id: number
  category: string
  question: string
  answer: string
}

const CATEGORIES = [
  'Tous',
  'Prise en main',
  'Abonnement & tarifs',
  'Création de contenu',
  'Réseaux sociaux',
  'Compte & technique',
]

const FAQS: FAQItem[] = [
  {
    id: 1,
    category: 'Prise en main',
    question: 'Comment créer un compte sur Creatabl ?',
    answer: "L'inscription prend moins de 2 minutes. Rendez-vous sur notre page d'inscription, renseignez vos informations basiques et accédez directement à la plateforme. Aucune carte bancaire n'est requise pour démarrer avec notre plan gratuit.",
  },
  {
    id: 2,
    category: 'Réseaux sociaux',
    question: 'Quels réseaux sociaux sont supportés ?',
    answer: 'LinkedIn, Instagram, Facebook et X (Twitter) sont entièrement pris en charge pour la génération, la programmation et la publication automatique. TikTok, YouTube et Pinterest arrivent très prochainement.',
  },
  {
    id: 3,
    category: 'Création de contenu',
    question: "Comment fonctionne l'agent IA pour la création de contenu ?",
    answer: "Notre IA analyse votre ligne éditoriale, votre secteur et votre style pour générer des contenus sur-mesure (textes, idées de carrousels, accroches). Vous gardez un contrôle total pour relire, éditer et valider chaque post avant sa publication.",
  },
  {
    id: 4,
    category: 'Abonnement & tarifs',
    question: 'Puis-je annuler mon abonnement à tout moment ?',
    answer: 'Absolument. Nos offres mensuelles sont sans aucun engagement. Vous pouvez annuler votre souscription en un clic depuis les paramètres de votre compte, et continuer à bénéficier de vos accès jusqu’à la fin de la période payée.',
  },
  {
    id: 5,
    category: 'Abonnement & tarifs',
    question: 'Y a-t-il une version gratuite ou un essai ?',
    answer: "Tout à fait ! Nous proposons un plan Free pour tester Creatabl à votre rythme, ainsi qu'un essai gratuit de 14 jours sur nos plans payants sans aucun précompte durant l'essai.",
  },
  {
    id: 6,
    category: 'Compte & technique',
    question: 'Comment fonctionne la planification de publications ?',
    answer: 'Une fois vos comptes sociaux connectés en toute sécurité via OAuth, préparez ou générez vos posts puis choisissez la date et heure d’envoi sur le calendrier interactif. Creatabl se charge de la publication automatique à l’instant prévu.',
  },
]

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState<string>('Tous')
  const [openId, setOpenId] = useState<number | null>(1)

  const filteredFaqs = activeCategory === 'Tous' 
    ? FAQS 
    : FAQS.filter(faq => faq.category === activeCategory)

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="w-full bg-[#FFFFFF] py-20 md:py-28 border-t border-slate-100 relative z-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Colonne gauche (35-40%) */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28">
            <ScrollReveal>
              <span className="font-outfit uppercase tracking-widest text-[#7C3AED] text-xs font-bold block mb-3">
                FAQ
              </span>
              <h2 className="font-outfit text-[#111827] text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] mb-4">
                Questions <span className="font-playfair italic font-normal text-[#7C3AED]">fréquentes</span>
              </h2>
              <p className="font-inter text-[#6B7280] text-base md:text-lg leading-relaxed mb-8">
                Tout ce qu&apos;il faut savoir sur Creatabl, de la prise en main à la facturation.
              </p>
            </ScrollReveal>

            {/* Pills de catégories */}
            <ScrollReveal delay={150}>
              <div className="flex flex-wrap gap-2.5 mb-8">
                {CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-2 rounded-full text-xs sm:text-sm font-inter font-medium transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-[#111827] text-white shadow-sm border border-[#111827]'
                          : 'bg-transparent text-[#374151] border border-slate-200 hover:border-[#7C3AED] hover:text-[#7C3AED]'
                      }`}
                    >
                      {cat}
                    </button>
                  )
                })}
              </div>
            </ScrollReveal>

            {/* Card "Encore des questions ?" */}
            <ScrollReveal delay={250} className="w-full">
              <div className="w-full p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-50 via-purple-50/20 to-slate-50 border border-slate-200/80 shadow-sm flex flex-col items-start gap-4">
                <div>
                  <h3 className="font-outfit font-bold text-lg text-[#111827] mb-1">
                    Encore des questions ?
                  </h3>
                  <p className="font-inter text-sm text-[#6B7280]">
                    Notre équipe est là pour vous aider à démarrer et répondre à vos besoins.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-inter font-semibold text-sm px-5 py-2.5 rounded-xl transition-all shadow-sm hover:shadow text-center"
                >
                  Contacter le support →
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Colonne droite (60-65%) */}
          <div className="lg:col-span-7 w-full flex flex-col">
            <ScrollReveal delay={200}>
              <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
                {filteredFaqs.map((faq) => {
                  const isOpen = openId === faq.id
                  return (
                    <div key={faq.id} className="py-5 sm:py-6 transition-colors">
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="flex items-center justify-between w-full text-left group cursor-pointer focus:outline-none"
                        aria-expanded={isOpen}
                      >
                        <span className="font-inter font-semibold text-lg sm:text-[20px] text-[#111827] group-hover:text-[#7C3AED] transition-colors pr-4 leading-snug">
                          {faq.question}
                        </span>
                        <span className="w-8 h-8 rounded-full border border-slate-200 group-hover:border-[#7C3AED] flex items-center justify-center text-slate-700 group-hover:text-[#7C3AED] flex-shrink-0 transition-all font-inter text-lg leading-none">
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>

                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          isOpen
                            ? 'grid-rows-[1fr] opacity-100 mt-3 sm:mt-4'
                            : 'grid-rows-[0fr] opacity-0 overflow-hidden'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="font-inter text-[#6B7280] text-sm sm:text-base leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}

                {filteredFaqs.length === 0 && (
                  <div className="py-8 text-center font-inter text-[#6B7280]">
                    Aucune question dans cette catégorie pour le moment.
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  )
}

