import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guides",
  description: "Guides pas à pas pour prendre en main Creatabl.ia : création, planification, analytics.",
  alternates: { canonical: "/guides" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
