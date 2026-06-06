import { useEffect, useState } from "react";

const visibilityThreshold = 340;

function getScrollState() {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return {
      isVisible: false,
      progress: 0,
    };
  }

  const scrollY = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = window.innerHeight;
  const maxScroll = scrollHeight - clientHeight;
  const progress = maxScroll > 0 ? scrollY / maxScroll : 0;

  return {
    isVisible: scrollY > visibilityThreshold,
    progress: Math.min(Math.max(progress, 0), 1),
  };
}

function useScrollProgress() {
  const [scrollState, setScrollState] = useState(getScrollState);

  useEffect(() => {
    let frameId = null;

    function updateScrollState() {
      frameId = null;
      setScrollState(getScrollState());
    }

    function scheduleUpdate() {
      if (frameId !== null) {
        return;
      }

      frameId = window.requestAnimationFrame(updateScrollState);
    }

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return scrollState;
}

export default useScrollProgress;
