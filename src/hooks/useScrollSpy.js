import { useEffect, useState } from 'react'

function normalizeSectionId(item) {
  return item.startsWith('#') ? item.slice(1) : item
}

function useScrollSpy(items, options = {}) {
  const sectionIds = items.map(normalizeSectionId).filter(Boolean)
  const sectionIdsKey = sectionIds.join('|')
  const fallbackId = sectionIds[0] ?? ''
  const [activeId, setActiveId] = useState(fallbackId)
  const rootMargin = options.rootMargin ?? '-30% 0px -55% 0px'
  const threshold = options.threshold ?? 0

  useEffect(() => {
    if (
      typeof window === 'undefined' ||
      typeof IntersectionObserver === 'undefined'
    ) {
      return undefined
    }

    const observedSections = sectionIdsKey
      .split('|')
      .filter(Boolean)
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (observedSections.length === 0) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const newlyVisibleEntries = entries.filter(
          (entry) => entry.isIntersecting,
        )

        if (newlyVisibleEntries.length === 0) {
          return
        }

        const activationLine = window.innerHeight * 0.3
        const closestEntry = newlyVisibleEntries.reduce((closest, entry) => {
          const closestDistance = Math.abs(
            closest.boundingClientRect.top - activationLine,
          )
          const entryDistance = Math.abs(
            entry.boundingClientRect.top - activationLine,
          )

          return entryDistance < closestDistance ? entry : closest
        })

        setActiveId(closestEntry.target.id)
      },
      {
        rootMargin,
        threshold,
      },
    )

    observedSections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [rootMargin, sectionIdsKey, threshold])

  return sectionIds.includes(activeId) ? activeId : fallbackId
}

export default useScrollSpy
