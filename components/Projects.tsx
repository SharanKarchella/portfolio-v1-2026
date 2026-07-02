"use client";

import { useReveal } from "@/lib/useReveal";
import { GithubIcon } from "@/components/icons";

const projects = [
  {
    title: "Legal Risk Analyser",
    description: "AI agent that scans any legal document clause by clause in real time. Watch it think as it flags high, medium, and low risk clauses with plain-English explanations. Ships as both a Next.js web app and a Chrome extension.",
    tags: ["Next.js", "OpenAI", "TypeScript", "Chrome Extension", "SSE", "Neo4j"],
    github: "https://github.com/SharanKarchella/legal-risk-analyzer-extension",
    accent: "linear-gradient(to right, #a855f7, #3b82f6)",
    featured: true,
    emoji: "⚖️",
  },
  {
    title: "Brainly",
    description: "Personal second-brain app to save, organise, and search YouTube videos and tweets. Uses Claude AI for smart topic tagging and natural language search so you can find anything you've saved without remembering exact keywords.",
    tags: ["React", "TypeScript", "Claude AI", "Tailwind", "Vite", "localStorage"],
    github: "https://github.com/SharanKarchella/Brainly-Frontend-dissertation",
    accent: "linear-gradient(to right, #3b82f6, #06b6d4)",
    featured: true,
    emoji: "🧠",
  },
  {
    title: "GitHub Profile Finder",
    description: "Search and explore any GitHub user's profile, repositories, and stats in a clean UI. Instant lookup with real-time GitHub API data.",
    tags: ["React", "GitHub API", "CSS"],
    github: "https://github.com/SharanKarchella",
    accent: "linear-gradient(to right, #64748b, #475569)",
    featured: false,
    emoji: "🔍",
  },
  {
    title: "Disney Hotstar Clone",
    description: "Full frontend clone of the Disney Hotstar streaming platform with a responsive UI, content carousels, and category browsing.",
    tags: ["React", "CSS", "HTML5"],
    github: "https://github.com/SharanKarchella",
    accent: "linear-gradient(to right, #1d4ed8, #4338ca)",
    featured: false,
    emoji: "🎬",
  },
];

function ProjectCard({ project, i }: { project: (typeof projects)[number]; i: number }) {
  const { ref, shown } = useReveal<HTMLDivElement>("-60px");

  return (
    <div
      ref={ref}
      className={`card-reveal glass flex flex-col overflow-hidden rounded-3xl ${
        project.featured
          ? "border-purple-500/25 shadow-[0_0_40px_rgba(168,85,247,0.1)]"
          : "border-white/[0.06]"
      } ${shown ? "show" : ""}`}
      style={{ transitionDelay: `${i * 0.1}s` }}
    >
      <div className="h-[3px]" style={{ background: project.accent }} />

      <div className="flex flex-1 flex-col p-7">
        <div className="mb-4 flex items-start justify-between">
          <span className="text-4xl">{project.emoji}</span>
          {project.featured && (
            <span className="rounded-full border border-purple-500/25 bg-purple-500/10 px-2.5 py-1 text-[0.7rem] font-medium text-purple-400">
              Featured
            </span>
          )}
        </div>

        <h3 className="mb-3 text-lg font-bold text-white">{project.title}</h3>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-400">{project.description}</p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tag tag-sm">
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
        >
          <GithubIcon className="shrink-0" />
          View on GitHub →
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref, shown } = useReveal<HTMLElement>();

  return (
    <section id="projects" ref={ref} className="w-full px-6 py-32">
      <div className="container-xl">
        <div className={`reveal mb-16 text-center ${shown ? "show" : ""}`}>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-purple-400">
            Portfolio
          </p>
          <h2 className="text-4xl font-black text-white md:text-5xl">
            Things I&apos;ve <span className="text-gradient">shipped</span>
          </h2>
        </div>

        <div className="grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))]">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} i={i} />
          ))}
        </div>

        <div
          className={`reveal mt-10 text-center ${shown ? "show" : ""}`}
          style={{ transitionDelay: "0.6s" }}
        >
          <a
            href="https://github.com/SharanKarchella"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-400 transition-colors hover:text-white"
          >
            See all projects on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
