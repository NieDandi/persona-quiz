import { personalities, GROUP_COLORS } from "@/data/personalities";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PersonaLens — Free 16 Personalities Test & In-Depth Type Guides",
  description:
    "Take the free 16 personalities test. Discover your type among 16 personality types with detailed guides, compatibility analysis, career advice, and FAQs. No signup required.",
  alternates: { canonical: "https://personalens.com" },
};

const groups = [
  { key: "analyst", label: "Analysts", desc: "Intuitive & Thinking — rational and impartial" },
  { key: "diplomat", label: "Diplomats", desc: "Intuitive & Feeling — empathetic and idealistic" },
  { key: "sentinel", label: "Sentinels", desc: "Observant & Judging — practical and dependable" },
  { key: "explorer", label: "Explorers", desc: "Observant & Prospecting — spontaneous and resourceful" },
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PersonaLens",
    url: "https://personalens.com",
    description: "Free 16 personalities test and in-depth personality type guides.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://personalens.com/personality/{search_term_string}/",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="gradient-bg text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Discover Your <br className="hidden md:block" />Personality Type
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Take our free 60-question personality test and uncover which of the 16 personality types fits you best. Instant results, no signup required.
          </p>
          <a
            href="/tests/16-personalities/"
            className="inline-block bg-white text-indigo-700 font-bold text-lg px-10 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all"
          >
            Start Free Test →
          </a>
          <p className="mt-4 text-sm opacity-70">Takes about 10 minutes · 60 questions · 100% free</p>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: "1", title: "Answer 60 Questions", desc: "Choose between two options for each question. There are no right or wrong answers." },
            { step: "2", title: "Get Your Type", desc: "Our algorithm calculates your scores across 4 dimensions to determine your personality type." },
            { step: "3", title: "Explore Your Profile", desc: "Read your in-depth personality profile with strengths, career advice, and compatibility insights." },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-14 h-14 rounded-full gradient-bg text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 16 Types Grid */}
      <section id="types" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">The 16 Personality Types</h2>
        <p className="text-center text-slate-500 mb-12 max-w-2xl mx-auto">
          Each type represents a unique combination of four personality dimensions. Click any type to read its full profile.
        </p>

        {groups.map((group) => {
          const types = personalities.filter((p) => p.group === group.key);
          const color = GROUP_COLORS[group.key];
          return (
            <div key={group.key} className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: color }} />
                <h3 className="text-xl font-bold">{group.label}</h3>
                <span className="text-sm text-slate-500">{group.desc}</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {types.map((p) => (
                  <a
                    key={p.code}
                    href={`/personality/${p.code.toLowerCase()}/`}
                    className="card-hover block bg-white rounded-xl p-5 border border-slate-200 text-center"
                  >
                    <div className="text-3xl mb-2">{p.emoji}</div>
                    <div className="font-bold text-lg" style={{ color }}>{p.code}</div>
                    <div className="font-medium text-sm mb-1">{p.name}</div>
                    <p className="text-xs text-slate-500 leading-relaxed">{p.shortDesc}</p>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* FAQ for homepage */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <HomeFAQ />
      </section>
    </>
  );
}

const homeFaqs = [
  {
    q: "What is the 16 personalities test?",
    a: "The 16 personalities test is a self-assessment questionnaire that categorizes people into one of 16 personality types based on four dimensions: Extraversion vs. Introversion, Sensing vs. Intuition, Thinking vs. Feeling, and Judging vs. Perceiving. It is inspired by Carl Jung's theory of psychological types.",
  },
  {
    q: "Is this test scientifically accurate?",
    a: "This test is based on established personality theory and is widely used for self-discovery and personal development. While it provides valuable insights, it should be used as a tool for self-reflection, not as a clinical diagnosis. The four-dimension model has been studied extensively in personality psychology.",
  },
  {
    q: "How long does the test take?",
    a: "The test consists of 60 questions and typically takes about 10 minutes to complete. There are no right or wrong answers — simply choose the option that feels most natural to you.",
  },
  {
    q: "Do I need to create an account?",
    a: "No. The test is completely free and requires no signup, no email, and no personal information. Your results are calculated instantly in your browser.",
  },
  {
    q: "What are the 4 personality dimensions?",
    a: "The four dimensions are: (1) Extraversion (E) vs. Introversion (I) — how you gain energy; (2) Sensing (S) vs. Intuition (N) — how you process information; (3) Thinking (T) vs. Feeling (F) — how you make decisions; (4) Judging (J) vs. Perceiving (P) — how you organize your life.",
  },
];

function HomeFAQ() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="space-y-6">
        {homeFaqs.map((f, i) => (
          <div key={i} className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="font-semibold text-lg mb-2">{f.q}</h3>
            <p className="text-slate-500 leading-relaxed">{f.a}</p>
          </div>
        ))}
      </div>
    </>
  );
}
