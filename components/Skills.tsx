"use client";

import { useReveal } from "@/lib/useReveal";

const skills = [
  { name: "TypeScript", color: "#3178C6", icon: "TS" },
  { name: "Next.js", color: "#000000", icon: "N" },
  { name: "React", color: "#06b6d4", icon: "⚛" },
  { name: "Node.js", color: "#339933", icon: "⬡" },
  { name: "OpenAI", color: "#412991", icon: "AI" },
  { name: "Claude AI", color: "#cc785c", icon: "C" },
  { name: "Tailwind", color: "#0ea5e9", icon: "TW" },
  { name: "MongoDB", color: "#47A248", icon: "M" },
  { name: "Neo4j", color: "#008CC1", icon: "G" },
  { name: "HTML5", color: "#E34F26", icon: "H" },
  { name: "CSS3", color: "#1572B6", icon: "C" },
  { name: "Bootstrap", color: "#7952B3", icon: "B" },
];

const categories = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "HTML5", "CSS3", "Bootstrap"] },
  { label: "Backend", items: ["Node.js", "MongoDB", "Neo4j"] },
  { label: "AI / ML", items: ["OpenAI", "Claude AI"] },
];

export default function Skills() {
  const { ref, shown } = useReveal<HTMLElement>();

  return (
    <section id="skills" ref={ref} className="w-full px-6 py-20 md:py-32">
      <div className="container-xl">
        <div className={`reveal mb-10 text-center md:mb-16 ${shown ? "show" : ""}`}>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-purple-400">
            Tech stack
          </p>
          <h2 className="text-4xl font-black text-white md:text-5xl">
            Tools I <span className="text-gradient">work with</span>
          </h2>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {categories.map((cat, i) => (
            <div
              key={cat.label}
              className={`reveal glass rounded-2xl border-purple-500/15 p-6 ${shown ? "show" : ""}`}
              style={{ transitionDelay: `${0.1 * i}s` }}
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-purple-500">
                {cat.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-3 sm:gap-4 [grid-template-columns:repeat(auto-fill,minmax(80px,1fr))]">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className={`icon-reveal glass flex flex-col items-center gap-2 rounded-2xl p-4 ${shown ? "show" : ""}`}
              style={{ transitionDelay: `${0.05 * i}s` }}
            >
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl text-[0.7rem] font-bold text-white"
                style={{ background: skill.color }}
              >
                {skill.icon}
              </div>
              <span className="text-center text-[0.7rem] leading-tight text-slate-400">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
