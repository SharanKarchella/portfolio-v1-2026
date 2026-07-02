import Image from "next/image";
import Typewriter from "@/components/Typewriter";

export default function Hero() {
  return (
    <section className="relative flex min-h-svh w-full flex-col items-center justify-center px-6 pb-28 pt-24 text-center">
      <div className="fx-pop mb-8">
        <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border-2 border-purple-500/50 shadow-[0_0_40px_rgba(168,85,247,0.2)]">
          <Image
            src="/avatar.jpg"
            alt="Sharan Karchella"
            fill
            sizes="128px"
            className="object-cover [object-position:10%_28%]"
            priority
          />
        </div>
        <div
          className="fx-fade-in mt-4 inline-flex items-center gap-2 rounded-full border border-green-400/25 bg-white/[0.04] px-4 py-1.5 text-[0.8rem] text-green-400 backdrop-blur-md"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="status-dot inline-block h-2 w-2 rounded-full bg-green-400" />
          Open to opportunities
        </div>
      </div>

      <div className="fx-fade-up" style={{ animationDelay: "0.2s" }}>
        <p className="mb-3 text-base uppercase tracking-widest text-slate-400 sm:text-lg">
          Hey there, I&apos;m
        </p>
        <h1 className="mb-4 text-5xl font-black tracking-tight text-white sm:text-6xl md:text-8xl">
          Sharan <span className="text-gradient">Karchella</span>
        </h1>
      </div>

      <div
        className="fx-fade-up mb-8 min-h-10 text-xl font-light text-slate-300 sm:text-2xl md:text-3xl"
        style={{ animationDelay: "0.5s" }}
      >
        I build{" "}
        <span className="text-gradient font-semibold">
          <Typewriter />
        </span>
      </div>

      <p
        className="fx-fade-up mb-10 max-w-xl text-base leading-relaxed text-slate-400"
        style={{ animationDelay: "0.7s" }}
      >
        Full-stack developer who ships real products. Currently obsessed with AI agents,
        browser extensions, and whatever interesting problem comes next.
      </p>

      <div
        className="fx-fade-up flex w-full max-w-xs flex-col items-stretch gap-4 sm:w-auto sm:max-w-none sm:flex-row sm:items-center sm:justify-center"
        style={{ animationDelay: "0.9s" }}
      >
        <a href="#projects" className="btn btn-primary px-10 py-3.5 text-sm">
          View my work
        </a>
        <a
          href="https://github.com/SharanKarchella"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost px-8 py-3.5 text-sm"
        >
          GitHub ↗
        </a>
      </div>

      <div
        className="fx-fade-in absolute bottom-10 flex flex-col items-center gap-2"
        style={{ animationDelay: "1.4s" }}
      >
        <span className="text-xs uppercase tracking-widest text-slate-600">Scroll</span>
        <span className="bob h-10 w-px bg-gradient-to-b from-purple-500 to-transparent" />
      </div>
    </section>
  );
}
