import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fonctionnalités",
  description: "Création IA, planification, analytics, agent IA et travail en équipe : tout pour gérer vos réseaux sociaux.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
