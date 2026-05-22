import type { MetadataRoute } from "next";

const siteUrl = "https://portfolio-v1-2026-jade.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
