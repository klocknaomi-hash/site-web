import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
    sitemap: "https://creatabl-ia.com/sitemap.xml",
    host: "https://creatabl-ia.com",
  };
}
