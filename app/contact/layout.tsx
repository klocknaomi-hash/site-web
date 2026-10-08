import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Une question, un besoin de support ou un partenariat ? Écrivez à l'équipe Creatabl.ia.",
  alternates: { canonical: "/contact" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
