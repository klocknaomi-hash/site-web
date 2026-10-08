// Questions fréquentes du site (reprises de la section FAQ existante).
export interface FAQItem {
  id: number
  category: string
  question: string
  answer: string
}

export const FAQS: FAQItem[] = [
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
