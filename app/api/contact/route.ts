import { Resend } from 'resend'
import { z } from 'zod'

const schema = z.object({
  name:    z.string().min(2),
  company: z.string().optional(),
  email:   z.string().email(),
  phone:   z.string().optional(),
  type:    z.string().optional(),
  message: z.string().min(10),
})

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    const escaped = {
      name: escapeHtml(data.name),
      company: data.company ? escapeHtml(data.company) : '',
      email: escapeHtml(data.email),
      phone: data.phone ? escapeHtml(data.phone) : '',
      type: data.type ? escapeHtml(data.type) : '',
      message: escapeHtml(data.message),
    }

    const resend = new Resend(process.env.RESEND_API_KEY ?? 'placeholder')

    // info@polysacc.com is not a real mailbox — it's kept as the "To" so the
    // email reads as if it went there, but it isn't a deliverable address.
    // Actual delivery happens via CC, configured in CONTACT_CC_EMAIL.
    const cc = process.env.CONTACT_CC_EMAIL
      ?.split(',')
      .map((addr) => addr.trim())
      .filter(Boolean)

    if (!cc || cc.length === 0) {
      throw new Error('No CONTACT_CC_EMAIL configured — nowhere to deliver this enquiry.')
    }

    await resend.emails.send({
      from: 'website@polysaccharidechemistry.com',
      to: 'info@polysacc.com',
      cc,
      subject: `New Enquiry — ${escaped.type || 'General'} — ${escaped.name}${escaped.company ? ` (${escaped.company})` : ''}`,
      html: `
        <table style="font-family: sans-serif; font-size: 14px; border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr><td style="padding: 10px 12px; border: 1px solid #eee; font-weight: 600; width: 140px;">Name</td><td style="padding: 10px 12px; border: 1px solid #eee;">${escaped.name}</td></tr>
          <tr><td style="padding: 10px 12px; border: 1px solid #eee; font-weight: 600;">Company</td><td style="padding: 10px 12px; border: 1px solid #eee;">${escaped.company || '—'}</td></tr>
          <tr><td style="padding: 10px 12px; border: 1px solid #eee; font-weight: 600;">Email</td><td style="padding: 10px 12px; border: 1px solid #eee;"><a href="mailto:${escaped.email}">${escaped.email}</a></td></tr>
          <tr><td style="padding: 10px 12px; border: 1px solid #eee; font-weight: 600;">Phone</td><td style="padding: 10px 12px; border: 1px solid #eee;">${escaped.phone || '—'}</td></tr>
          <tr><td style="padding: 10px 12px; border: 1px solid #eee; font-weight: 600;">Enquiry Type</td><td style="padding: 10px 12px; border: 1px solid #eee;">${escaped.type || '—'}</td></tr>
          <tr><td style="padding: 10px 12px; border: 1px solid #eee; font-weight: 600; vertical-align: top;">Message</td><td style="padding: 10px 12px; border: 1px solid #eee; white-space: pre-wrap;">${escaped.message}</td></tr>
        </table>
        <p style="font-family: sans-serif; font-size: 12px; color: #999; margin-top: 20px;">Submitted via the info@polysacc.com contact form on polysaccharidechemistry.com</p>
      `,
    })

    return Response.json({ success: true })
  } catch {
    return Response.json({ error: 'Failed to send message' }, { status: 400 })
  }
}
