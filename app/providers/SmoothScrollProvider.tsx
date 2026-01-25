"use client";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function ScrollWrapper({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <div ref={scrollRef} id="__lenis-scroll">{children}</div>;
}
