'use client'
/**
 * error.tsx — Root-level Next.js App Router error boundary
 * Place at: src/app/error.tsx
 *
 * Renders when an unhandled error occurs in any route segment.
 * Must be a Client Component ('use client').
 */
import { useEffect } from 'react'
import Link from 'next/link'
import { AlertTriangle, RefreshCw, Home, Phone } from 'lucide-react'

interface Props {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    // Log error to your error reporting service here
    // e.g., Sentry.captureException(error)
    console.error('[GICEAS Error]', error)
  }, [error])

  return (
    <main
      className="min-h-[70vh] flex items-center justify-center py-20 bg-gray-50"
      role="alert"
      aria-labelledby="error-heading"
    >
      <div className="max-w-lg mx-auto px-4 text-center">
        {/* Icon */}
        <div className="w-20 h-20 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center mx-auto mb-6">
          <AlertTriangle size={36} className="text-orange-500" aria-hidden="true" />
        </div>

        {/* Heading */}
        <h1
          id="error-heading"
          className="text-2xl font-bold text-gray-900 mb-3"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Something went wrong
        </h1>

        <p className="text-gray-500 text-sm leading-relaxed mb-2">
          We encountered an unexpected error while loading this page.
          Please try again — if the problem persists, contact us.
        </p>

        {process.env.NODE_ENV === 'development' && error.message && (
          <pre className="mt-4 mb-4 text-left text-xs text-red-600 bg-red-50 border border-red-100 rounded-xl p-4 overflow-auto max-h-40">
            {error.message}
          </pre>
        )}

        {/* Actions */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <button
            onClick={reset}
            className="flex items-center gap-2 bg-[#1e3a8a] hover:bg-[#172057] text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors"
          >
            <RefreshCw size={15} aria-hidden="true" />
            Try again
          </button>
          <Link
            href="/"
            className="flex items-center gap-2 border-2 border-gray-200 hover:border-[#1e3a8a] text-gray-700 hover:text-[#1e3a8a] px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors"
          >
            <Home size={15} aria-hidden="true" />
            Go to Home
          </Link>
          <a
            href="tel:9999900001"
            className="flex items-center gap-2 border border-gray-200 text-gray-500 hover:text-orange-500 px-5 py-2.5 rounded-xl text-sm transition-colors"
          >
            <Phone size={15} aria-hidden="true" />
            Call GICEAS
          </a>
        </div>

        {/* Error reference */}
        {error.digest && (
          <p className="mt-6 text-[11px] text-gray-400">
            Error ref: <code className="font-mono">{error.digest}</code>
          </p>
        )}
      </div>
    </main>
  )
}
