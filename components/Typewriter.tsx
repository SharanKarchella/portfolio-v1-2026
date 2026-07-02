"use client";

import { useEffect, useState } from "react";

const PHRASES = ["AI Agents", "Chrome Extensions", "Full-Stack Apps", "things that ship"];
const TYPE_MS = 65;
const DELETE_MS = 30;
const HOLD_MS = 2000;

/**
 * Typewriter that cycles through PHRASES. Replaces the react-type-animation
 * dependency with a ~30-line effect so the Hero ships no extra client JS.
 */
export default function Typewriter() {
  const [text, setText] = useState("");

  useEffect(() => {
    let phrase = 0;
    let char = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = PHRASES[phrase];
      char += deleting ? -1 : 1;
      setText(current.slice(0, char));

      let delay = deleting ? DELETE_MS : TYPE_MS;
      if (!deleting && char === current.length) {
        deleting = true;
        delay = HOLD_MS;
      } else if (deleting && char === 0) {
        deleting = false;
        phrase = (phrase + 1) % PHRASES.length;
      }

      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, TYPE_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {text}
      <span className="type-caret" aria-hidden="true">
        |
      </span>
    </>
  );
}
