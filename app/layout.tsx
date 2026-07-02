import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl = "https://sharan.it.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sharan Karchella — Full-Stack Developer",
    template: "%s | Sharan Karchella",
  },
  description:
    "Full-stack developer building AI agents, browser extensions, and real-world products. Passionate about shipping things that matter.",
  keywords: [
    "Sharan Karchella",
    "full-stack developer",
    "AI agents",
    "Chrome extensions",
    "Next.js",
    "React",
    "TypeScript",
    "portfolio",
  ],
  authors: [{ name: "Sharan Karchella", url: siteUrl }],
  creator: "Sharan Karchella",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Sharan Karchella",
    title: "Sharan Karchella — Full-Stack Developer",
    description:
      "Full-stack developer building AI agents, browser extensions, and real-world products.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharan Karchella — Full-Stack Developer",
    description:
      "Full-stack developer building AI agents, browser extensions, and real-world products.",
    creator: "@SharanKarchella",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className="grid-bg antialiased font-sans">
        <noscript>
          <style>{`.reveal,.icon-reveal,.card-reveal,.social-reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <div className="orb orb-purple" />
        <div className="orb orb-blue" />
        <div className="orb orb-cyan" />
        {children}
      </body>
    </html>
  );
}
