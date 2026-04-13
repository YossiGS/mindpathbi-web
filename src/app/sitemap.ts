import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mindpathbi.com";

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/dpa`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/sla`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/ai-terms`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/subprocessors`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
  ];
}
