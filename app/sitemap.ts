import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://bayareawebdesign.net",
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 1,
    },
      {
      url: "https://bayareawebdesign.net/about",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://bayareawebdesign.net/services",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
        {
      url: "https://bayareawebdesign.net/contact",
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
  ];
}
