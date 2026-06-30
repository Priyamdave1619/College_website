/**
 * useScrollAnimation.ts — Scroll-triggered animation hooks for GICEAS website
 * Place at: src/hooks/useScrollAnimation.ts
 *
 * Usage:
 *   const ref = useScrollReveal()
 *   <section ref={ref} className="scroll-reveal">...</section>
 *
 * And in globals.css:
 *   .scroll-reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
 *   .scroll-reveal.is-visible { opacity: 1; transform: translateY(0); }
 */

'use client'
import { useEffect, useRef, useState, useCallback } from 'react'

// ──────────────────────────────────────────────────────────────
// 1. useScrollReveal — Fade-up reveal when element enters viewport
// ──────────────────────────────────────────────────────────────
export function useScrollReveal(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el) // Trigger once
        }
      },
      { threshold: 0.15, ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [options])

  return ref
}

// ──────────────────────────────────────────────────────────────
// 2. useCountUp — Animates a number from 0 to target when visible
//
// Usage:
//   const { ref, count } = useCountUp(3000, 2000) // target, duration ms
//   <span ref={ref}>{count}+</span>
// ──────────────────────────────────────────────────────────────
export function useCountUp(target: number, duration = 1800) {
  const ref = useRef<HTMLElement>(null)
  const [count, setCount] = useState(0)
  const hasStarted = useRef(false)

  const animate = useCallback(() => {
    if (hasStarted.current) return
    hasStarted.current = true

    const start = performance.now()
    const step = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate()
          observer.unobserve(el)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [animate])

  return { ref, count }
}

// ──────────────────────────────────────────────────────────────
// 3. useStaggeredReveal — Adds staggered delay to children
//
// Usage:
//   const containerRef = useStaggeredReveal()
//   <div ref={containerRef} className="stagger-container">
//     <div className="stagger-child">...</div>  // auto-staggered
//   </div>
// ──────────────────────────────────────────────────────────────
export function useStaggeredReveal(staggerMs = 100) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const children = Array.from(container.querySelectorAll('.stagger-child'))
    children.forEach((child, i) => {
      ;(child as HTMLElement).style.transitionDelay = `${i * staggerMs}ms`
    })

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child) => child.classList.add('is-visible'))
          observer.unobserve(container)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [staggerMs])

  return ref
}

// ──────────────────────────────────────────────────────────────
// CSS to add to globals.css
// ──────────────────────────────────────────────────────────────
/*
  Add these to @layer components in globals.css:

  .scroll-reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .scroll-reveal.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  .stagger-child {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  .stagger-child.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (prefers-reduced-motion: reduce) {
    .scroll-reveal,
    .scroll-reveal.is-visible,
    .stagger-child,
    .stagger-child.is-visible {
      opacity: 1;
      transform: none;
      transition: none;
    }
  }
*/
