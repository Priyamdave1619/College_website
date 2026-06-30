import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="text-8xl font-bold text-gray-100 mb-4" style={{ fontFamily: 'Georgia, serif' }}>404</div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h1>
      <p className="text-gray-500 mb-8 max-w-sm text-sm">The page you are looking for does not exist or may have been moved.</p>
      <div className="flex gap-3">
        <Link href="/" className="btn-primary text-sm">Back to Home</Link>
        <Link href="/contact" className="btn-outline text-sm">Contact Us</Link>
      </div>
    </div>
  )
}
