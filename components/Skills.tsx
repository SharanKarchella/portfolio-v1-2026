"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="w-full py-32 px-6 relative z-10">
      <div style={{ maxWidth: '72rem', marginLeft: 'auto', marginRight: 'auto', width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Tech stack
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Tools I <span className="text-gradient">work with</span>
          </h2>
        </motion.div>

        {/* Category cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(168,85,247,0.15)', borderRadius: '1rem', padding: '1.5rem', backdropFilter: 'blur(12px)' }}
            >
              <p style={{ fontSize: '0.7rem', color: '#a855f7', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                {cat.label}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {cat.items.map((item) => (
                  <span
                    key={item}
                    style={{ padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 500, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#cbd5e1' }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill icons grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))', gap: '1rem' }}>
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.05 * i, duration: 0.4 }}
              whileHover={{ scale: 1.08, y: -4 }}
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '1rem', padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', cursor: 'default', backdropFilter: 'blur(12px)' }}
            >
              <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem', background: skill.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.7rem', fontWeight: 700 }}>
                {skill.icon}
              </div>
              <span style={{ fontSize: '0.7rem', color: '#94a3b8', textAlign: 'center', lineHeight: 1.3 }}>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
