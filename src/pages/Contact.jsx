import { useState } from 'react'
import './contact.css'

// TODO: ganti dengan email/kontak asli kamu
const CONTACT_EMAIL = 'fauzan@nexatechlabs.my.id'

const SOCIALS = [
  { label: 'LinkedIn', href: '#' },
  { label: 'GitHub', href: '#' },
  { label: 'Instagram', href: '#' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', from: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`[Deploy Request] dari ${form.name || 'seseorang'}`)
    const body = encodeURIComponent(
      `Nama: ${form.name}\nEmail: ${form.from}\n\nPesan:\n${form.message}`
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <div className="contact">
      <section className="section">
        <p className="kicker">// contact.jsx</p>
        <h1 className="page-title">Deploy</h1>
        <p className="lead">
          Mau kolaborasi, diskusi peluang kerja, atau ngobrolin proyek NEXA?
          Kirim request di bawah.
        </p>
      </section>

      <section className="section">
        <div className="panel contact-panel">
          <div className="panel-header mono">
            <span>POST /contact</span>
            <span className="dim">application/json</span>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label className="field">
              <span className="mono field-label">"name":</span>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Nama kamu"
              />
            </label>
            <label className="field">
              <span className="mono field-label">"from":</span>
              <input
                required
                type="email"
                value={form.from}
                onChange={(e) => setForm({ ...form, from: e.target.value })}
                placeholder="email@kamu.com"
              />
            </label>
            <label className="field field-textarea">
              <span className="mono field-label">"message":</span>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tulis pesan kamu di sini..."
              />
            </label>

            <button type="submit" className="btn">
              {sent ? 'request_terkirim ✓' : 'kirim_request →'}
            </button>
          </form>
        </div>
      </section>

      <section className="section">
        <div className="panel-header mono">
          <span>alternative_endpoints</span>
        </div>
        <div className="socials">
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} className="tag tag-teal social-tag">
              {s.label}
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
