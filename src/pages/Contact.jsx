import { useMemo, useState } from 'react'
import './contact.css'

// TODO: ganti dengan email/kontak asli kamu
const CONTACT_EMAIL = 'ojann4318@gmail.com'
const FULL_NAME = 'Muhamad Fauzan Al Farikhi'
const TITLE = 'Co-Founder & CEO, NEXA Tech Labs'

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/fauzanalfarikhi/in' },
  { label: 'GitHub', href: 'https://github.com/Farikhi562' },
  { label: 'Instagram', href: 'https://instagram.com/frikhiii' },
  { label: 'Email', href: 'mailto:ojann4318@gmail.com' },
]

const INQUIRY_TYPES = [
  { id: 'collab', label: 'Kolaborasi', subject: 'Collaboration Request' },
  { id: 'job', label: 'Peluang Kerja', subject: 'Job Opportunity' },
  { id: 'nexa', label: 'Proyek NEXA', subject: 'NEXA Project Inquiry' },
  { id: 'other', label: 'Lainnya', subject: 'General Inquiry' },
]

const MESSAGE_LIMIT = 800

export default function Contact() {
  const [form, setForm] = useState({ name: '', from: '', message: '', type: 'collab' })
  const [sent, setSent] = useState(false)
  const [copied, setCopied] = useState(false)

  const activeType = useMemo(
    () => INQUIRY_TYPES.find((t) => t.id === form.type) || INQUIRY_TYPES[0],
    [form.type]
  )

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL)
    } catch {
      // clipboard API unavailable — fall back silently, mailto link still works
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  const downloadVCard = () => {
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${FULL_NAME}`,
      'N:Al Farikhi;Muhamad Fauzan;;;',
      `TITLE:${TITLE}`,
      `EMAIL;TYPE=INTERNET:${CONTACT_EMAIL}`,
      'URL:https://github.com/Farikhi562',
      'URL:https://www.linkedin.com/in/fauzanalfarikhi/in',
      'END:VCARD',
    ].join('\n')
    const blob = new Blob([vcard], { type: 'text/vcard' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'fauzan-al-farikhi.vcf'
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`[${activeType.subject}] dari ${form.name || 'seseorang'}`)
    const body = encodeURIComponent(
      `Nama: ${form.name}\nEmail: ${form.from}\nJenis: ${activeType.label}\n\nPesan:\n${form.message}`
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
        <div className="contact-hero-row">
          <div className="availability-badge mono">
            <span className="availability-dot" /> AVAILABLE FOR COLLABORATION
          </div>
          <button type="button" className="copy-email-btn mono" onClick={copyEmail}>
            {copied ? '✓ email disalin' : `⧉ salin ${CONTACT_EMAIL}`}
          </button>
          <button type="button" className="copy-email-btn mono" onClick={downloadVCard}>
            ⭳ simpan kontak (.vcf)
          </button>
        </div>
      </section>

      <section className="section contact-grid">
        <div className="panel contact-panel">
          <div className="panel-header mono">
            <span>POST /contact</span>
            <span className="dim">application/json</span>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label className="field">
              <span className="mono field-label">"type":</span>
              <div className="type-chips" role="radiogroup" aria-label="Jenis pesan">
                {INQUIRY_TYPES.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    role="radio"
                    aria-checked={form.type === t.id}
                    className={`type-chip mono ${form.type === t.id ? 'active' : ''}`}
                    onClick={() => setForm({ ...form, type: t.id })}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </label>
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
                maxLength={MESSAGE_LIMIT}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tulis pesan kamu di sini..."
              />
              <span className="mono field-counter dim">{form.message.length}/{MESSAGE_LIMIT}</span>
            </label>

            <button type="submit" className="btn">
              {sent ? 'request_terkirim ✓' : 'kirim_request →'}
            </button>
          </form>
        </div>

        <div className="panel contact-preview mono">
          <div className="panel-header mono">
            <span>request_preview</span>
            <span className="dim">live</span>
          </div>
          <pre className="preview-json">
{`{
  "endpoint": "/contact",
  "type": "${form.type}",
  "name": "${form.name || '…'}",
  "from": "${form.from || '…'}",
  "message": "${(form.message || '…').slice(0, 60)}${form.message.length > 60 ? '…' : ''}"
}`}
          </pre>
        </div>
      </section>

      <section className="section">
        <div className="panel-header mono">
          <span>alternative_endpoints</span>
        </div>
        <div className="socials">
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel={s.href.startsWith('http') ? 'noreferrer' : undefined} className="tag tag-ember social-tag">
              {s.label}
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
