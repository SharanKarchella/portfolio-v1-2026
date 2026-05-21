"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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

function ProjectCard({ project, i }: { project: typeof projects[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.1, duration: 0.7 }}
      whileHover={{ y: -6 }}
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: project.featured ? '1px solid rgba(168,85,247,0.25)' : '1px solid rgba(255,255,255,0.06)',
        borderRadius: '1.5rem',
        overflow: 'hidden',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: project.featured ? '0 0 40px rgba(168,85,247,0.1)' : 'none',
      }}
    >
      {/* Top gradient bar */}
      <div style={{ height: '3px', background: project.accent }} />

      <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <span style={{ fontSize: '2.25rem' }}>{project.emoji}</span>
          {project.featured && (
            <span style={{ fontSize: '0.7rem', padding: '0.25rem 0.625rem', borderRadius: '9999px', background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.25)', color: '#c084fc', fontWeight: 500 }}>
              Featured
            </span>
          )}
        </div>

        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'white', marginBottom: '0.75rem' }}>
          {project.title}
        </h3>
        <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.7, marginBottom: '1.25rem', flex: 1 }}>
          {project.description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{ fontSize: '0.7rem', padding: '0.25rem 0.625rem', borderRadius: '9999px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: '#94a3b8' }}
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#94a3b8', textDecoration: 'none' }}
        >
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          View on GitHub →
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="w-full py-32 px-6 relative z-10">
      <div style={{ maxWidth: '72rem', marginLeft: 'auto', marginRight: 'auto', width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Things I&apos;ve <span className="text-gradient">shipped</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} i={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{ textAlign: 'center', marginTop: '2.5rem' }}
        >
          <a
            href="https://github.com/SharanKarchella"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#94a3b8', fontSize: '0.875rem', textDecoration: 'none' }}
          >
            See all projects on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
