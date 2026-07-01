import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://johangarcia.dev",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://johangarcia.dev/projects/dfdl-parser",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://johangarcia.dev/projects/cobol-mapper",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://johangarcia.dev/projects/docker-compose-gen",
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
