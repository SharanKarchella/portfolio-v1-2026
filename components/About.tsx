"use client";

import { useReveal } from "@/lib/useReveal";

const stats = [
  { value: "4+", label: "Years coding" },
  { value: "10+", label: "Projects built" },
  { value: "∞", label: "Things to learn" },
];

export default function About() {
  const { ref, shown } = useReveal<HTMLElement>();

  return (
    <section id="about" ref={ref} className="w-full px-6 py-32">
      <div className="container-xl">
        <div
          className={`reveal grid grid-cols-1 items-center gap-16 md:grid-cols-2 ${shown ? "show" : ""}`}
        >
          <div className="text-center md:text-left">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-purple-400">
              About me
            </p>
            <h2 className="mb-6 text-4xl font-black leading-tight text-white md:text-5xl">
              I turn ideas into <span className="text-gradient">real products</span>
            </h2>
            <p className="mb-4 leading-relaxed text-slate-400">
              I&apos;m a full-stack developer with a passion for building things at the intersection
              of AI and real-world problems. From agentic AI systems that analyse legal documents
              in real time to second-brain apps powered by Claude — I like building tools that
              actually solve something.
            </p>
            <p className="mb-8 leading-relaxed text-slate-400">
              Currently exploring AI agents, browser extensions, and the next thing that sparks
              my curiosity. I believe the best code is code that ships.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <a
                href="https://www.linkedin.com/in/sharan-karchella/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary px-6 py-2.5 text-sm"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://www.instagram.com/karchellasharan/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost px-6 py-2.5 text-sm"
              >
                Instagram ↗
              </a>
            </div>
          </div>

          <div className="grid w-full grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`reveal glass rounded-2xl p-6 text-center ${shown ? "show" : ""}`}
                style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
              >
                <p className="mb-2 text-4xl font-black text-gradient">{s.value}</p>
                <p className="text-sm text-slate-400">{s.label}</p>
              </div>
            ))}

            <div
              className={`reveal glass col-span-3 rounded-2xl border-purple-500/20 p-6 ${shown ? "show" : ""}`}
              style={{ transitionDelay: "0.5s" }}
            >
              <p className="text-sm italic leading-relaxed text-slate-300">
                &ldquo;The best way to predict the future is to build it.&rdquo;
              </p>
              <p className="mt-2 text-xs text-purple-400">— Alan Kay</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
