import type { MetadataRoute } from "next";
import { personalities } from "@/data/personalities";

const BASE = "https://persona-quiz-ecru.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const typePages = personalities.map((p) => ({
    url: `${BASE}/personality/${p.code.toLowerCase()}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE}/tests/16-personalities/`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    ...typePages,
  ];
}
