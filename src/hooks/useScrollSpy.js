import { useEffect, useState } from "react";

function normalizeSectionId(item) {
  return item.startsWith("#") ? item.slice(1) : item;
}

function useScrollSpy(items, options = {}) {
  const sectionIds = items.map(normalizeSectionId).filter(Boolean);
  const sectionIdsKey = sectionIds.join("|");
  const fallbackId = sectionIds[0] ?? "";
  const [activeId, setActiveId] = useState(fallbackId);
  const rootMargin = options.rootMargin ?? "-30% 0px -55% 0px";
  const threshold = options.threshold ?? 0;

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      typeof IntersectionObserver === "undefined"
    ) {
      return undefined;
    }

    const ids = sectionIdsKey.split("|").filter(Boolean);
    const observedSections = new Map();
    let initialScanComplete = false;
    let mutationObserver;

    const observer = new IntersectionObserver(
      (entries) => {
        const newlyVisibleEntries = entries.filter(
          (entry) => entry.isIntersecting,
        );

        if (newlyVisibleEntries.length === 0) {
          return;
        }

        const activationLine = window.innerHeight * 0.3;
        const closestEntry = newlyVisibleEntries.reduce((closest, entry) => {
          const closestDistance = Math.abs(
            closest.boundingClientRect.top - activationLine,
          );
          const entryDistance = Math.abs(
            entry.boundingClientRect.top - activationLine,
          );

          return entryDistance < closestDistance ? entry : closest;
        });

        setActiveId(closestEntry.target.id);
      },
      {
        rootMargin,
        threshold,
      },
    );

    function observeAvailableSections() {
      let requestedSection;

      ids.forEach((id) => {
        const section = document.getElementById(id);
        const currentSection = observedSections.get(id);

        if (section === currentSection) {
          return;
        }

        if (currentSection) {
          observer.unobserve(currentSection);
          observedSections.delete(id);
        }

        if (section) {
          observer.observe(section);
          observedSections.set(id, section);

          if (initialScanComplete && window.location.hash === `#${id}`) {
            requestedSection = section;
          }
        }
      });

      requestedSection?.scrollIntoView({ block: "start" });

      if (observedSections.size === ids.length) {
        mutationObserver?.disconnect();
      }
    }

    observeAvailableSections();
    initialScanComplete = true;

    if (
      observedSections.size < ids.length &&
      typeof MutationObserver !== "undefined"
    ) {
      mutationObserver = new MutationObserver(observeAvailableSections);
      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }

    return () => {
      observer.disconnect();
      mutationObserver?.disconnect();
    };
  }, [rootMargin, sectionIdsKey, threshold]);

  return sectionIds.includes(activeId) ? activeId : fallbackId;
}

export default useScrollSpy;
