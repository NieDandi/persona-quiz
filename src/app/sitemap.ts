import type { MetadataRoute } from "next";

const BASE = "https://persona-quiz-ecru.vercel.app";

const types = [
  "intj","intp","entj","entp",
  "infj","infp","enfj","enfp",
  "istj","isfj","estj","esfj",
  "istp","isfp","estp","esfp",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/tests/16-personalities/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    ...types.map((t) => ({
      url: `${BASE}/personality/${t}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
