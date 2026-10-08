# Creatabl.ia — site web

Site vitrine de Creatabl.ia (https://creatabl-ia.com), en Next.js 14 (App Router) et Tailwind CSS 4.

## Lancer en local

```bash
npm install
npm run dev
```

Le site tourne sur http://localhost:3000.

## Variables d'environnement

| Nom | Rôle |
| --- | --- |
| `RESEND_API_KEY` | Envoi des messages du formulaire de contact |
| `RESEND_FROM_EMAIL` | Adresse d'expédition de ces messages |

## Tarifs et crédits

Les plans affichés sur `/pricing` doivent rester alignés avec la plateforme (`lib/plans/limits.ts` dans `creatabl-plateforme`) : Free 20, Starter 50, Pro 120, Business 300 crédits par mois. 1 crédit = 1 post programmé ou publié.

## Déploiement

Le projet est déployé sur Vercel. Chaque branche poussée sur GitHub crée un aperçu ; la branche `main` part en production.
