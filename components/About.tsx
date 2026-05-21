"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "4+", label: "Years coding" },
  { value: "10+", label: "Projects built" },
  { value: "∞", label: "Things to learn" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="w-full py-32 px-6 relative z-10">
      <div style={{ maxWidth: '72rem', marginLeft: 'auto', marginRight: 'auto', width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          {/* Left */}
          <div className="text-center md:text-left">
            <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4">
              About me
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              I turn ideas into{" "}
              <span className="text-gradient">real products</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              I&apos;m a full-stack developer with a passion for building things at the intersection
              of AI and real-world problems. From agentic AI systems that analyse legal documents
              in real time to second-brain apps powered by Claude — I like building tools that
              actually solve something.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Currently exploring AI agents, browser extensions, and the next thing that sparks
              my curiosity. I believe the best code is code that ships.
            </p>
            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
              <a
                href="https://www.linkedin.com/in/sharan-karchella/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: '0.625rem 1.5rem', borderRadius: '9999px', background: 'linear-gradient(to right, #9333ea, #2563eb)', color: 'white', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}
              >
                LinkedIn ↗
              </a>
              <a
                href="https://www.instagram.com/karchellasharan/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: '0.625rem 1.5rem', borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.1)', color: '#cbd5e1', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none', display: 'inline-block', background: 'rgba(255,255,255,0.04)' }}
              >
                Instagram ↗
              </a>
            </div>
          </div>

          {/* Right — Stats */}
          <div className="grid grid-cols-3 gap-4 w-full">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '1rem', padding: '1.5rem', textAlign: 'center', backdropFilter: 'blur(12px)' }}
              >
                <p className="text-4xl font-black text-gradient mb-2">{s.value}</p>
                <p className="text-slate-400 text-sm">{s.label}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              style={{ gridColumn: 'span 3', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(168,85,247,0.2)', borderRadius: '1rem', padding: '1.5rem', backdropFilter: 'blur(12px)' }}
            >
              <p className="text-slate-300 text-sm leading-relaxed italic">
                &ldquo;The best way to predict the future is to build it.&rdquo;
              </p>
              <p className="text-purple-400 text-xs mt-2">— Alan Kay</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
