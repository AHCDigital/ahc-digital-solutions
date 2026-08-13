"use client";

import { useEffect } from "react";

export default function MotionSystem() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      document.documentElement.classList.add("motion-ready", "reduce-motion");
      return;
    }

    document.documentElement.classList.add("motion-ready");

    const revealTargets = document.querySelectorAll(
      ".statement, .aboutHeader, .servicesShowcase, .projectOnlyTitle, .projectPortrait, .processIntro, .codeWorkspace, .contactTerminal, .contactCopy"
    );

    const compactViewport = window.matchMedia("(max-width: 900px)").matches;

    revealTargets.forEach((el, index) => {
      el.classList.add("reveal");
      (el as HTMLElement).style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 70}ms`);
      // Mobile'da uzun bolumleri IntersectionObserver oranina baglamiyoruz.
      // Hizmetler vitrini telefonda birkac ekran boyu oldugu icin yuksek
      // threshold bolumun kalici olarak gorunmez kalmasina neden olabiliyor.
      if (compactViewport) el.classList.add("is-visible");
    });

    const observer = compactViewport
      ? null
      : new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer?.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.04, rootMargin: "0px 0px -4% 0px" }
        );

    if (observer) revealTargets.forEach((el) => observer.observe(el));

    const hoverCards = document.querySelectorAll(".serviceCard, .pipelineCard, .portraitFrame");
    const onMove = (event: Event) => {
      const e = event as MouseEvent;
      const el = e.currentTarget as HTMLElement;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    hoverCards.forEach((el) => el.addEventListener("mousemove", onMove));

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const nav = document.querySelector(".navShell");
        if (nav) nav.classList.toggle("navScrolled", window.scrollY > 35);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer?.disconnect();
      hoverCards.forEach((el) => el.removeEventListener("mousemove", onMove));
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
