import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Conseils, tendances et méthodes pour réussir sur les réseaux sociaux avec l'IA.",
  alternates: { canonical: "/blog" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
