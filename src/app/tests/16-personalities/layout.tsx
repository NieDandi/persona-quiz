import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free 16 Personalities Test — 60 Questions, Instant Results",
  description:
    "Take the free 16 personalities test with 60 carefully crafted questions. Discover whether you are INTJ, INFP, ENFP, or one of 13 other types. No signup required, instant results.",
  alternates: { canonical: "https://persona-quiz-ecru.vercel.app/tests/16-personalities/" },
  openGraph: {
    title: "Free 16 Personalities Test — Find Your Type",
    description: "60 questions. Instant results. No signup. Discover your personality type now.",
  },
};

export default function TestLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
