'use client'
import { useFormState, useFormStatus } from 'react-dom'
import { submitContactForm, ContactFormState } from '@/app/actions/contact'
import { Send, CheckCircle, AlertTriangle, Loader2 } from 'lucide-react'

const initialState: ContactFormState = { status: 'idle' }

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button type="submit" disabled={pending}
      className="w-full flex items-center justify-center gap-2 bg-[#1e3a8a] hover:bg-[#172057] disabled:bg-gray-400 text-white py-3.5 rounded-xl font-semibold transition-colors text-sm"
      aria-busy={pending}>
      {pending ? <><Loader2 size={16} className="animate-spin" />Sending…</> : <><Send size={16} />Send Message</>}
    </button>
  )
}

export default function ContactForm() {
  const [state, action] = useFormState(submitContactForm, initialState)

  if (state.status === 'success') {
    return (
      <div className="card p-8 text-center" role="status" aria-live="polite">
        <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-green-500" />
        </div>
        <h3 className="font-bold text-gray-900 text-lg mb-2">Message Sent!</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{state.message}</p>
      </div>
    )
  }

  return (
    <form action={action} className="card p-6 space-y-4" noValidate aria-label="Contact GICEAS form">
      <h2 className="font-bold text-gray-900 text-lg">Send Us a Message</h2>
      {state.status === 'error' && !state.fieldErrors && state.message && (
        <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-xl p-3 text-sm text-red-700" role="alert">
          <AlertTriangle size={15} className="shrink-0 mt-0.5" />{state.message}
        </div>
      )}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cn" className="block text-xs font-semibold text-gray-700 mb-1.5">Full Name <span className="text-red-500">*</span></label>
          <input id="cn" name="name" type="text" required placeholder="Your full name" aria-invalid={!!state.fieldErrors?.name}
            className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]" />
          {state.fieldErrors?.name && <p className="text-red-500 text-xs mt-1" role="alert">{state.fieldErrors.name}</p>}
        </div>
        <div>
          <label htmlFor="ce" className="block text-xs font-semibold text-gray-700 mb-1.5">Email <span className="text-red-500">*</span></label>
          <input id="ce" name="email" type="email" required placeholder="you@example.com" aria-invalid={!!state.fieldErrors?.email}
            className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]" />
          {state.fieldErrors?.email && <p className="text-red-500 text-xs mt-1" role="alert">{state.fieldErrors.email}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="cp" className="block text-xs font-semibold text-gray-700 mb-1.5">Phone <span className="text-gray-400 font-normal">(optional)</span></label>
        <input id="cp" name="phone" type="tel" placeholder="+91 XXXXX XXXXX"
          className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]" />
      </div>
      <div>
        <label htmlFor="cs" className="block text-xs font-semibold text-gray-700 mb-1.5">Subject <span className="text-red-500">*</span></label>
        <input id="cs" name="subject" type="text" required placeholder="e.g. Admission enquiry…"
          className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]" />
        {state.fieldErrors?.subject && <p className="text-red-500 text-xs mt-1" role="alert">{state.fieldErrors.subject}</p>}
      </div>
      <div>
        <label htmlFor="cm" className="block text-xs font-semibold text-gray-700 mb-1.5">Message <span className="text-red-500">*</span></label>
        <textarea id="cm" name="message" required rows={5} placeholder="How can we help you?"
          className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] resize-none" />
        {state.fieldErrors?.message && <p className="text-red-500 text-xs mt-1" role="alert">{state.fieldErrors.message}</p>}
      </div>
      <SubmitButton />
    </form>
  )
}
