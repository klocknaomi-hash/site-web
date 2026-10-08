import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs",
  description: "Free, Starter, Pro et Business : choisissez le plan Creatabl.ia adapté à vos réseaux sociaux. Essai gratuit de 14 jours.",
  alternates: { canonical: "/pricing" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
