"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fx-fade-down fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "glass border-b border-white/[0.08] py-3" : "py-5"
      }`}
    >
      <div className="container-xl flex items-center justify-between px-6">
        <a
          href="#"
          className="text-gradient text-xl font-bold tracking-tight"
          onClick={() => setOpen(false)}
        >
          SK
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/sharan-karchella/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline px-4 py-2 text-sm md:px-5"
          >
            Hire me
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className={`nav-toggle md:hidden ${open ? "open" : ""}`}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`mobile-menu md:hidden ${open ? "open" : ""}`}>
        <ul className="flex flex-col gap-1 px-6 pb-4 pt-3">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
