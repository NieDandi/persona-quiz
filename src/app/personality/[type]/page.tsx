import { personalities, GROUP_COLORS } from "@/data/personalities";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return personalities.map((p) => ({ type: p.code.toLowerCase() }));
}

type Props = { params: Promise<{ type: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type } = await params;
  const p = personalities.find((x) => x.code.toLowerCase() === type.toLowerCase());
  if (!p) return {};
  return {
    title: `${p.code} Personality Type — ${p.name} (${p.alias}) | Strengths, Careers, Compatibility`,
    description: `Everything about the ${p.code} (${p.name}) personality type: strengths, weaknesses, best careers, compatible types, and famous ${p.code}s. ${p.shortDesc}`,
    alternates: { canonical: `https://personalens.com/personality/${type.toLowerCase()}/` },
    openGraph: {
      title: `${p.code} — ${p.name} Personality Type`,
      description: p.shortDesc,
    },
  };
}

export default async function PersonalityTypePage({ params }: Props) {
  const { type } = await params;
  const p = personalities.find((x) => x.code.toLowerCase() === type.toLowerCase());
  if (!p) notFound();

  const color = GROUP_COLORS[p.group];
  const compatible = personalities.filter((x) => p.compatibleTypes.includes(x.code));

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${p.code} Personality Type — ${p.name}`,
    description: p.shortDesc,
    author: { "@type": "Organization", name: "PersonaLens" },
    publisher: { "@type": "Organization", name: "PersonaLens" },
    datePublished: "2026-03-01",
    dateModified: new Date().toISOString().split("T")[0],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <section className="py-16 text-center" style={{ background: `linear-gradient(135deg, ${color}22 0%, ${color}08 100%)` }}>
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-6xl mb-4">{p.emoji}</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2" style={{ color }}>
            {p.code} — {p.name}
          </h1>
          <p className="text-xl text-slate-500 mb-2">{p.alias}</p>
          <p className="text-lg" style={{ color }}>{p.groupName}</p>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">{p.shortDesc}</p>
          <a
            href="/tests/16-personalities/"
            className="inline-block mt-6 px-8 py-3 rounded-full text-white font-bold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: color }}
          >
            Am I {p.code}? Take the Free Test →
          </a>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-12 space-y-10">
        {/* Description */}
        <section>
          <h2 className="text-2xl font-bold mb-4">What is the {p.code} Personality Type?</h2>
          <p className="text-slate-500 leading-relaxed text-lg">{p.description}</p>
        </section>

        {/* Strengths & Weaknesses */}
        <div className="grid md:grid-cols-2 gap-6">
          <section className="bg-white rounded-xl p-6 border border-slate-200">
            <h2 className="text-xl font-bold mb-4">{p.code} Strengths</h2>
            <ul className="space-y-2">
              {p.strengths.map((s) => (
                <li key={s} className="flex items-start gap-2 text-slate-500">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="bg-white rounded-xl p-6 border border-slate-200">
            <h2 className="text-xl font-bold mb-4">{p.code} Weaknesses</h2>
            <ul className="space-y-2">
              {p.weaknesses.map((w) => (
                <li key={w} className="flex items-start gap-2 text-slate-500">
                  <span className="text-amber-500 font-bold mt-0.5">!</span>
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Careers */}
        <section className="bg-white rounded-xl p-6 border border-slate-200">
          <h2 className="text-xl font-bold mb-4">Best Careers for {p.code}</h2>
          <p className="text-slate-500 mb-4">
            Based on the {p.code} personality traits, here are careers where {p.name}s tend to excel:
          </p>
          <div className="flex flex-wrap gap-2">
            {p.careers.map((c) => (
              <span key={c} className="px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: `${color}15`, color }}>
                {c}
              </span>
            ))}
          </div>
        </section>

        {/* Compatible Types */}
        <section>
          <h2 className="text-xl font-bold mb-4">{p.code} Compatibility</h2>
          <p className="text-slate-500 mb-4">
            {p.code}s are most compatible with the following personality types:
          </p>
          <div className="grid grid-cols-2 gap-4">
            {compatible.map((c) => (
              <a
                key={c.code}
                href={`/personality/${c.code.toLowerCase()}/`}
                className="card-hover flex items-center gap-4 bg-white rounded-xl p-4 border border-slate-200"
              >
                <span className="text-3xl">{c.emoji}</span>
                <div>
                  <div className="font-bold" style={{ color: GROUP_COLORS[c.group] }}>{c.code}</div>
                  <div className="text-sm text-slate-500">{c.name}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Famous People */}
        <section className="bg-white rounded-xl p-6 border border-slate-200">
          <h2 className="text-xl font-bold mb-4">Famous {p.code} People</h2>
          <div className="flex flex-wrap gap-3">
            {p.famousPeople.map((f) => (
              <span key={f} className="px-4 py-2 bg-gray-50 rounded-full text-sm font-medium text-slate-500">
                {f}
              </span>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions about {p.code}</h2>
          <div className="space-y-4">
            {p.faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-slate-500 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Browse All Types */}
        <section className="text-center pt-6">
          <h2 className="text-xl font-bold mb-4">Explore Other Personality Types</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {personalities.map((t) => (
              <a
                key={t.code}
                href={`/personality/${t.code.toLowerCase()}/`}
                className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                  t.code === p.code
                    ? "text-white border-transparent"
                    : "border-gray-200 text-slate-500 hover:border-indigo-300"
                }`}
                style={t.code === p.code ? { backgroundColor: color } : {}}
              >
                {t.code}
              </a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
