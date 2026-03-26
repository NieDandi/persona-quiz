import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "PersonaLens — Free 16 Personalities Test & In-Depth Type Guides",
    template: "%s | PersonaLens",
  },
  description:
    "Take the free 16 personalities test and discover your personality type. Explore detailed guides for all personality types, compatibility analysis, career advice, and FAQs. Science-based, no signup required.",
  keywords: [
    "16 personalities test",
    "personality test free",
    "MBTI type",
    "personality types",
    "personality quiz",
    "INFP",
    "INTJ",
    "ENFP",
    "personality compatibility",
  ],
  metadataBase: new URL("https://personalens.com"),
  openGraph: {
    title: "PersonaLens — Free 16 Personalities Test",
    description: "Discover your personality type with our free, science-based 16 personalities test. No signup required.",
    type: "website",
    locale: "en_US",
    siteName: "PersonaLens",
  },
  twitter: {
    card: "summary_large_image",
    title: "PersonaLens — Free 16 Personalities Test",
    description: "Discover your personality type. Free, instant results, no signup.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  alternates: { canonical: "https://personalens.com" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-slate-50">
        <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
          <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <a href="/" className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              PersonaLens
            </a>
            <div className="flex gap-6 text-sm font-medium text-slate-500">
              <a href="/tests/16-personalities/" className="hover:text-indigo-600 transition-colors">Take the Test</a>
              <a href="/#types" className="hover:text-indigo-600 transition-colors">Personality Types</a>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="border-t border-slate-200 mt-20 py-10 text-center text-sm text-slate-500">
          <div className="max-w-6xl mx-auto px-4">
            <p className="font-semibold text-slate-800 mb-2">PersonaLens</p>
            <p>Free personality tests for self-discovery and personal growth. For entertainment and educational purposes only.</p>
            <p className="mt-4">&copy; {new Date().getFullYear()} PersonaLens. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
