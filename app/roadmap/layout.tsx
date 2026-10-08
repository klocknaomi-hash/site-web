import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roadmap",
  description: "Les prochaines fonctionnalités de Creatabl.ia et ce sur quoi nous travaillons.",
  alternates: { canonical: "/roadmap" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
