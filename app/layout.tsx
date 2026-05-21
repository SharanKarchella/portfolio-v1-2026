import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sharan Karchella — Full-Stack Developer",
  description: "Full-stack developer building AI-powered tools, browser extensions, and whatever problem needs solving next.",
  openGraph: {
    title: "Sharan Karchella — Full-Stack Developer",
    description: "Full-stack developer building AI-powered tools, browser extensions, and whatever problem needs solving next.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="noise grid-bg antialiased">
        <div className="orb orb-purple" />
        <div className="orb orb-blue" />
        <div className="orb orb-cyan" />
        {children}
      </body>
    </html>
  );
}
