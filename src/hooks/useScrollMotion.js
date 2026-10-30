import { useLayoutEffect } from "react";

/** Progressive enhancement: content stays visible without observers or with reduced motion. */
export default function useScrollMotion(rootRef) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer;
    let resizeObserver;
    let frame = 0;

    function updateProgress() {
      frame = 0;
      const distance =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = distance > 0 ? window.scrollY / distance : 0;
      root.style.setProperty(
        "--scroll-progress",
        Math.max(0, Math.min(1, progress)).toFixed(4),
      );
    }

    function queueProgress() {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    }

    function reveal(element) {
      element.dataset.revealed = "true";
      observer?.unobserve(element);
    }

    function stop() {
      observer?.disconnect();
      resizeObserver?.disconnect();
      window.removeEventListener("scroll", queueProgress);
      window.removeEventListener("resize", queueProgress);
      window.cancelAnimationFrame(frame);
      frame = 0;
      root.removeAttribute("data-motion");
      root.style.removeProperty("--scroll-progress");
    }

    function initialize() {
      stop();
      if (preference.matches || !("IntersectionObserver" in window)) return;

      const targets = [...root.querySelectorAll("[data-reveal]")];
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) reveal(entry.target);
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -36px 0px" },
      );

      root.dataset.motion = "enabled";
      // Commit the starting styles before the first observer notification.
      // This is a single read at setup, never part of the scroll loop.
      void root.offsetHeight;
      targets.forEach((target) => {
        if (target.dataset.revealed !== "true") observer.observe(target);
      });
      window.addEventListener("scroll", queueProgress, { passive: true });
      window.addEventListener("resize", queueProgress, { passive: true });
      if ("ResizeObserver" in window) {
        resizeObserver = new ResizeObserver(queueProgress);
        resizeObserver.observe(document.documentElement);
      }
      updateProgress();
    }

    function revealFocusedContent(event) {
      // Keyboard navigation must never land on a visually hidden control.
      let element =
        event.target instanceof Element
          ? event.target.closest("[data-reveal]")
          : null;
      while (element && root.contains(element)) {
        element.style.setProperty("--reveal-delay", "0ms");
        reveal(element);
        element = element.parentElement?.closest("[data-reveal]");
      }
    }

    initialize();
    preference.addEventListener("change", initialize);
    root.addEventListener("focusin", revealFocusedContent);
    return () => {
      stop();
      preference.removeEventListener("change", initialize);
      root.removeEventListener("focusin", revealFocusedContent);
    };
  }, [rootRef]);
}
