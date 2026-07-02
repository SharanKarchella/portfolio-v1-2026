"use client";

import { useReveal } from "@/lib/useReveal";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/icons";

const socials = [
  {
    name: "GitHub",
    handle: "@SharanKarchella",
    href: "https://github.com/SharanKarchella",
    icon: <GithubIcon size={20} className="shrink-0" />,
  },
  {
    name: "LinkedIn",
    handle: "sharan-karchella",
    href: "https://www.linkedin.com/in/sharan-karchella/",
    icon: <LinkedinIcon size={20} className="shrink-0" />,
  },
  {
    name: "Instagram",
    handle: "@karchellasharan",
    href: "https://www.instagram.com/karchellasharan/",
    icon: <InstagramIcon size={20} className="shrink-0" />,
  },
];

export default function Contact() {
  const { ref, shown } = useReveal<HTMLElement>();

  return (
    <section id="contact" ref={ref} className="w-full px-6 py-20 md:py-32">
      <div className="container-md text-center">
        <div className={`reveal ${shown ? "show" : ""}`}>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-purple-400">
            Get in touch
          </p>
          <h2 className="mb-6 text-4xl font-black leading-tight text-white md:text-6xl">
            Let&apos;s build something <span className="text-gradient">together</span>
          </h2>
          <p className="mb-12 text-base leading-[1.8] text-slate-400 sm:text-lg">
            Whether you want to collaborate on a project, have an opportunity, or just want to say hi —
            my inbox is always open.
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&to=sharanukpersonal@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mb-12 px-10 py-4 text-lg font-bold sm:mb-16"
          >
            Say hello ✉️
          </a>

          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            {socials.map((s, i) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-reveal glass flex items-center gap-3 rounded-2xl px-5 py-3 text-slate-400 ${shown ? "show" : ""}`}
                style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
              >
                {s.icon}
                <div className="text-left">
                  <p className="text-xs font-semibold text-slate-200">{s.name}</p>
                  <p className="text-[0.7rem] text-slate-500">{s.handle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div
          className={`reveal mt-16 text-xs text-slate-600 md:mt-24 ${shown ? "show" : ""}`}
          style={{ transitionDelay: "0.8s" }}
        >
          <p>Built by Sharan Karchella · {new Date().getFullYear()}</p>
        </div>
      </div>
    </section>
  );
}
