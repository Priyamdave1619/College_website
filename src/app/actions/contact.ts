'use server'

export interface ContactFormState {
  status: 'idle' | 'success' | 'error'
  message?: string
  fieldErrors?: Record<string, string>
}

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
function sanitize(str: string) {
  return str.trim().replace(/[<>]/g, '')
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name    = sanitize(formData.get('name')    as string ?? '')
  const email   = sanitize(formData.get('email')   as string ?? '')
  const phone   = sanitize(formData.get('phone')   as string ?? '')
  const subject = sanitize(formData.get('subject') as string ?? '')
  const message = sanitize(formData.get('message') as string ?? '')

  const errors: Record<string, string> = {}
  if (!name || name.length < 2) errors.name = 'Please enter your full name.'
  if (!email) errors.email = 'Email address is required.'
  else if (!validateEmail(email)) errors.email = 'Please enter a valid email address.'
  if (phone && !/^[0-9+\-\s()]{7,15}$/.test(phone)) errors.phone = 'Please enter a valid phone number.'
  if (!subject || subject.length < 3) errors.subject = 'Please enter a subject.'
  if (!message || message.length < 20) errors.message = 'Please enter a message of at least 20 characters.'

  if (Object.keys(errors).length > 0) {
    return { status: 'error', fieldErrors: errors }
  }

  try {
    console.log('[GICEAS Contact Form]', { name, email, phone, subject, message })
    return {
      status: 'success',
      message: `Thank you, ${name}! Your message has been sent. We will get back to you at ${email} within 1–2 business days.`,
    }
  } catch (err) {
    return {
      status: 'error',
      message: 'Failed to send your message. Please try again or call us at 99999 00001.',
    }
  }
}
