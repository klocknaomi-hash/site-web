import { ImageResponse } from "next/og";

// Image de partage (Open Graph) générée : fond violet du design system,
// nom de la marque et promesse.
export const runtime = "edge";
export const alt = "Creatabl.ia : créez, planifiez et analysez vos réseaux sociaux avec l'IA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(135deg, #14121F 0%, #33106A 55%, #7225E3 100%)",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 56, height: 56, borderRadius: 28, background: "#8A38F5", display: "flex" }} />
          <div style={{ fontSize: 44, fontWeight: 700, display: "flex" }}>
            Creatabl.<span style={{ fontStyle: "italic", color: "#E7DCFC" }}>ia</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1, maxWidth: 940 }}>
            Vos réseaux sociaux, créés et planifiés avec l&apos;IA
          </div>
          <div style={{ fontSize: 30, color: "#E7DCFC" }}>
            Instagram · LinkedIn · Facebook · X — essai gratuit de 14 jours
          </div>
        </div>
      </div>
    ),
    size
  );
}
