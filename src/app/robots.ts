import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/.well-known/mta-sts.txt"],
      },
    ],
    sitemap: "https://mindpathbi.com/sitemap.xml",
  };
}
