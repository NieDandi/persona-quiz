const BASE = "https://persona-quiz-ecru.vercel.app";

const types = [
  "intj","intp","entj","entp",
  "infj","infp","enfj","enfp",
  "istj","isfj","estj","esfj",
  "istp","isfp","estp","esfp",
];

export async function GET() {
  const today = new Date().toISOString().split("T")[0];

  const urls = [
    { loc: `${BASE}/`, freq: "weekly", priority: "1.0" },
    { loc: `${BASE}/tests/16-personalities/`, freq: "monthly", priority: "0.9" },
    ...types.map((t) => ({ loc: `${BASE}/personality/${t}/`, freq: "monthly", priority: "0.8" })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.freq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
