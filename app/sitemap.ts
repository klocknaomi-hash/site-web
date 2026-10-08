import type { MetadataRoute } from "next";

const BASE = "https://creatabl-ia.com";

// Pages publiques du site, pour les moteurs de recherche.
const ROUTES: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/pricing", priority: 0.9, changeFrequency: "monthly" },
  { path: "/fonctionnalites", priority: 0.8, changeFrequency: "monthly" },
  { path: "/fonctionnalites/creation", priority: 0.7, changeFrequency: "monthly" },
  { path: "/fonctionnalites/planification", priority: 0.7, changeFrequency: "monthly" },
  { path: "/fonctionnalites/analytics", priority: 0.7, changeFrequency: "monthly" },
  { path: "/fonctionnalites/agent-ia", priority: 0.7, changeFrequency: "monthly" },
  { path: "/fonctionnalites/collaboration", priority: 0.7, changeFrequency: "monthly" },
  { path: "/fonctionnalites/multi-plateforme", priority: 0.7, changeFrequency: "monthly" },
  { path: "/plateformes", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
  { path: "/guides", priority: 0.6, changeFrequency: "monthly" },
  { path: "/roadmap", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" },
  { path: "/mentions-legales", priority: 0.2, changeFrequency: "yearly" },
  { path: "/confidentialite", priority: 0.2, changeFrequency: "yearly" },
  { path: "/cgu", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((r) => ({ url: `${BASE}${r.path}`, lastModified, changeFrequency: r.changeFrequency, priority: r.priority }));
}
