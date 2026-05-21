"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 text-center relative">
      {/* Avatar placeholder */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-8"
      >
        <div style={{ width: '8rem', height: '8rem', borderRadius: '9999px', border: '2px solid rgba(168,85,247,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 800, background: 'rgba(255,255,255,0.05)', margin: '0 auto', boxShadow: '0 0 40px rgba(168,85,247,0.2)' }} className="text-gradient">
          SK
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{ marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', borderRadius: '9999px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(74,222,128,0.25)', fontSize: '0.8rem', color: '#4ade80', backdropFilter: 'blur(12px)' }}
        >
          <span style={{ width: '0.5rem', height: '0.5rem', borderRadius: '9999px', background: '#4ade80', display: 'inline-block', animation: 'pulse 2s infinite' }} />
          Open to opportunities
        </motion.div>
      </motion.div>

      {/* Heading */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <p className="text-slate-400 text-lg mb-3 tracking-widest uppercase text-sm">
          Hey there, I&apos;m
        </p>
        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-4 text-white">
          Sharan{" "}
          <span className="text-gradient">Karchella</span>
        </h1>
      </motion.div>

      {/* Typewriter */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-2xl md:text-3xl font-light text-slate-300 mb-8 h-10"
      >
        I build{" "}
        <span className="text-gradient font-semibold">
          <TypeAnimation
            sequence={[
              "AI Agents",
              2000,
              "Chrome Extensions",
              2000,
              "Full-Stack Apps",
              2000,
              "things that ship",
              2000,
            ]}
            repeat={Infinity}
            cursor
          />
        </span>
      </motion.div>

      {/* Subtext */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="text-slate-400 max-w-xl text-base leading-relaxed mb-10"
      >
        Full-stack developer who ships real products. Currently obsessed with AI agents,
        browser extensions, and whatever interesting problem comes next.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#projects"
          style={{ padding: '0.875rem 2.5rem', borderRadius: '999px', background: 'linear-gradient(to right, #9333ea, #2563eb)', color: 'white', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', display: 'inline-block', boxShadow: '0 0 30px rgba(168,85,247,0.3)' }}
        >
          View my work
        </a>
        <a
          href="https://github.com/SharanKarchella"
          target="_blank"
          rel="noopener noreferrer"
          style={{ padding: '0.875rem 2rem', borderRadius: '999px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: '#cbd5e1', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', display: 'inline-block', backdropFilter: 'blur(12px)' }}
        >
          GitHub ↗
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-600 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-10 bg-gradient-to-b from-purple-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
