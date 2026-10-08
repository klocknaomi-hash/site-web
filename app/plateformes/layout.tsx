import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réseaux compatibles",
  description: "Instagram, Facebook, LinkedIn et X : publiez et planifiez depuis une seule interface. TikTok, YouTube et Pinterest arrivent bientôt.",
  alternates: { canonical: "/plateformes" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
