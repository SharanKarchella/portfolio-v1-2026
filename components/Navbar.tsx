"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-white/8 py-3" : "py-5"
      }`}
    >
      <div style={{ maxWidth: '72rem', marginLeft: 'auto', marginRight: 'auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#" className="text-gradient font-bold text-xl tracking-tight">
          SK
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200 hover:text-gradient"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://www.linkedin.com/in/sharan-karchella/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '0.875rem', padding: '0.5rem 1.25rem', borderRadius: '9999px', border: '1px solid rgba(168,85,247,0.4)', color: '#c084fc', textDecoration: 'none', display: 'inline-block' }}
        >
          Hire me
        </a>
      </div>
    </motion.nav>
  );
}
