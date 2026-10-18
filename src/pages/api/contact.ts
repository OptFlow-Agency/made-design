import type { APIRoute } from 'astro'
import nodemailer from 'nodemailer'
import { site } from '../../data/site'

export const prerender = false

const json = (body: object, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`)

export const POST: APIRoute = async ({ request }) => {
  const form = await request.formData()
  if (form.get('company')) return json({ ok: true }) // honeypot

  const name = String(form.get('name') ?? '').trim()
  const email = String(form.get('email') ?? '').trim()
  const message = String(form.get('message') ?? '').trim()
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 10) {
    return json({ ok: false }, 400)
  }

  const user = import.meta.env.GMAIL_USERNAME
  const pass = import.meta.env.GMAIL_PASSWORD
  if (!user || !pass) return json({ ok: false }, 500)

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user, pass },
  })

  try {
    await transporter.sendMail({
      from: `"${site.name}" <${user}>`,
      to: site.email,
      replyTo: `"${name.replace(/["\r\n]/g, '')}" <${email}>`,
      subject: `New message from ${name.replace(/[\r\n]/g, ' ')}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><strong>${escape(name)}</strong> &lt;${escape(email)}&gt;</p><p>${escape(message).replace(/\n/g, '<br>')}</p>`,
    })
    return json({ ok: true })
  } catch (err) {
    console.error('contact: send failed', err)
    return json({ ok: false }, 502)
  }
}
