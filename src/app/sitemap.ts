import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mindpathbi.com";
  const now = new Date();

  const marketing: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    {
      url: `${base}/how-it-works`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/product/ai`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/pricing`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/security`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const industries: MetadataRoute.Sitemap = [
    "ecommerce",
    "interior-design",
    "travel-advisory",
    "professional-services",
    "industrial-distribution",
    "building-supply",
    "saas",
  ].map((slug) => ({
    url: `${base}/industries/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const legal: MetadataRoute.Sitemap = (
    [
      { url: `${base}/privacy`, priority: 0.5 },
      { url: `${base}/terms`, priority: 0.5 },
      { url: `${base}/dpa`, priority: 0.4 },
      { url: `${base}/sla`, priority: 0.4 },
      { url: `${base}/ai-terms`, priority: 0.4 },
      { url: `${base}/subprocessors`, priority: 0.3 },
    ] as const
  ).map((e) => ({
    url: e.url,
    priority: e.priority,
    changeFrequency: "monthly" as const,
    lastModified: now,
  }));

  return [...marketing, ...industries, ...legal];
}
