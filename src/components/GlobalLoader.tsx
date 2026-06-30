'use client'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

/**
 * GlobalLoader — GICEAS-branded animated loader
 *
 * Fixes:
 *  1. Initial load: dismisses when document is truly ready (readyState === 'complete'),
 *     with a reliable polling fallback so it never stays stuck.
 *  2. Route change: shows briefly and always auto-dismisses after 600ms
 *     (Next.js App Router updates pathname after the new page is ready).
 *  3. Safety net: hard 8-second maximum so loader can NEVER stay stuck forever.
 */
export default function GlobalLoader() {
  const [visible, setVisible] = useState(true)
  const [phase, setPhase] = useState<'enter' | 'active' | 'exit'>('enter')
  const pathname = usePathname()
  const prevPathname = useRef(pathname)
  const isFirstLoad = useRef(true)
  const safetyTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Helper: dismiss the loader with fade-out animation
  const dismiss = () => {
    setPhase('exit')
    setTimeout(() => setVisible(false), 320)
  }

  // Clear any pending safety timer
  const clearSafety = () => {
    if (safetyTimer.current) {
      clearTimeout(safetyTimer.current)
      safetyTimer.current = null
    }
  }

  // 1. Initial Page Load
  useEffect(() => {
    setPhase('active')

    // Safety net: never stay stuck more than 8 seconds
    safetyTimer.current = setTimeout(() => {
      dismiss()
    }, 8000)

    const finish = () => {
      clearSafety()
      // Small minimum display time so it doesn't flicker
      setTimeout(dismiss, 300)
    }

    if (document.readyState === 'complete') {
      finish()
    } else {
      // Listen for the native load event
      window.addEventListener('load', finish, { once: true })

      // Polling fallback: check readyState every 200ms
      // (Handles cases where load event already fired before listener attached)
      const poll = setInterval(() => {
        if (document.readyState === 'complete') {
          clearInterval(poll)
          window.removeEventListener('load', finish)
          finish()
        }
      }, 200)

      return () => {
        clearInterval(poll)
        window.removeEventListener('load', finish)
        clearSafety()
      }
    }

    return clearSafety
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // 2. Route Change Detection
  useEffect(() => {
    // Skip the very first render (handled by initial load effect)
    if (isFirstLoad.current) {
      isFirstLoad.current = false
      return
    }

    if (pathname !== prevPathname.current) {
      prevPathname.current = pathname

      // Show loader briefly on route change
      setVisible(true)
      setPhase('active')

      // In Next.js App Router, pathname updates AFTER the new page is ready.
      // So we just show a quick confirmation flash and dismiss.
      const exitTimer = setTimeout(() => setPhase('exit'), 400)
      const removeTimer = setTimeout(() => setVisible(false), 720)

      return () => {
        clearTimeout(exitTimer)
        clearTimeout(removeTimer)
      }
    }
  }, [pathname])

  if (!visible) return null

  return (
    <div
      role="status"
      aria-label="Loading GICEAS website…"
      aria-live="polite"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-300 backdrop-blur-lg ${
        phase === 'exit'
          ? 'opacity-0 pointer-events-none'
          : 'opacity-100'
      }`}
      style={{
        background: 'linear-gradient(135deg, rgba(15, 22, 56, 0.88) 0%, rgba(30, 58, 138, 0.88) 60%, rgba(13, 148, 136, 0.88) 100%)',
      }}
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Animated ring */}
      <div className="relative mb-8" aria-hidden="true">
        {/* Outer glow ring */}
        <div className="absolute inset-0 rounded-full border-4 border-orange-500/20 animate-ping" />
        {/* Spinner track */}
        <div className="w-24 h-24 rounded-full border-4 border-white/10" />
        {/* Spinner arc */}
        <div
          className="absolute inset-0 w-24 h-24 rounded-full border-4 border-transparent border-t-orange-500 border-r-orange-300 animate-spin"
          style={{ animationDuration: '0.9s' }}
        />
        {/* Logo in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-xl overflow-hidden bg-white shadow-xl">
            <Image
              src="/logos/greenfieldlogo.jpeg"
              alt="GICEAS Logo"
              width={56}
              height={56}
              className="object-contain w-full h-full"
              priority
            />
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="text-center">
        <h2
          className="text-white font-bold text-xl mb-1"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Greenfield Institute
        </h2>
        <p className="text-white/50 text-xs tracking-widest uppercase">
          Computer Education & Applied Sciences
        </p>
      </div>

      {/* Loading dots */}
      <div className="flex gap-1.5 mt-6" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-orange-400"
            style={{
              animation: 'pulse 1.2s ease-in-out infinite',
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      <span className="sr-only">Loading, please wait…</span>
    </div>
  )
}
