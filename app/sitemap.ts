import type { MetadataRoute } from "next";

import { company } from "@/lib/company";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: company.website,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${company.website}/impressum`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${company.website}/datenschutz`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
