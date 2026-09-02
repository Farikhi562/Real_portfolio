import { Link } from 'react-router-dom'
import EmberField from '../components/EmberField.jsx'
import './about.css'

const CHECKPOINTS = [
  {
    id: 'checkpoint_00',
    title: 'Foundation',
    body:
      'Mulai kuliah Informatika. Fokus membangun dasar: logika pemrograman, struktur data, dan cara berpikir sistematis sebelum masuk ke domain AI.',
  },
  {
    id: 'checkpoint_01',
    title: 'Mendirikan NEXA Tech Labs',
    body:
      'Ikut mendirikan NEXA Tech Labs sebagai Co-Founder sekaligus CEO — mengubah proses belajar jadi produk nyata, bukan cuma tugas kuliah.',
  },
  {
    id: 'checkpoint_02',
    title: 'Klien pertama',
    body:
      'NEXA Tech Labs mulai melayani klien nyata: Dimsum Mentai Kmyrn dan Citcha Studio Photobox. Belajar bahwa sistem yang dibangun harus bisa dipakai orang lain, bukan cuma jalan di localhost.',
  },
  {
    id: 'checkpoint_03',
    title: 'Spesialisasi ke AI / Data Science',
    body:
      'Semester 3 — sekarang. Mengarahkan fokus ke AI Engineering dan Data Science lewat proyek NEXAIR, NEXA Sphere, dan NEXA Campus Ecosystem, sambil terus ikut kompetisi untuk menguji arsitektur yang dibangun.',
    current: true,
  },
]

const PROFILE = [
  ['name', 'Muhamad Fauzan Al Farikhi'],
  ['experience', '1 year'],
  ['university', 'Gunadarma University'],
  ['gpa', '3.74 / 4.00'],
]

const TELEMETRY = [
  ['checkpoints', CHECKPOINTS.length, 'passed'],
  ['epoch', 'sem_03', 'current'],
  ['gpa', '3.74', '/ 4.00'],
  ['uptime', '1yr+', 'building'],
]

const IN_TRAINING = [
  { label: 'NEXAIR', desc: 'prediksi kebakaran & kualitas udara', to: '/experiments' },
  { label: 'NEXA Sphere', desc: 'AI & Cloud DevOps platform', to: '/nexa-sphere' },
  { label: 'NEXA Campus', desc: 'ekosistem digital kampus', to: '/nexa-campus' },
  { label: 'Gemastik XIX', desc: 'Divisi 11 — Pengembangan Bisnis TIK', to: '/news' },
]

export default function About() {
  return (
    <div className="about">
      <section className="section about-hero">
        <EmberField count={12} variant="ambient" className="about-ember" />
        <div>
          <p className="kicker">// about.jsx</p>
          <h1 className="page-title">The Model</h1>
          <p className="lead">
            Bukan CV statis — ini catatan proses. Setiap checkpoint di bawah
            adalah titik ketika arsitektur cara berpikir gua sebagai calon AI
            Engineer diperbarui.
          </p>
          <div className="about-telemetry mono">
            {TELEMETRY.map(([label, value, hint]) => (
              <div className="telemetry-cell" key={label}>
                <span className="telemetry-value">{value}</span>
                <span className="dim telemetry-label">{label}</span>
                <span className="dim telemetry-hint">{hint}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="about-photo-wrap">
            <img src="/assets/profile.jpg" alt="Foto profil Fauzan" className="about-photo" />
            <div className="scan-frame" aria-hidden="true">
              <span className="scan-corner tl" /><span className="scan-corner tr" />
              <span className="scan-corner bl" /><span className="scan-corner br" />
              <span className="scan-line" />
              <span className="scan-grid" />
            </div>
            <div className="about-photo-tag mono">fauzan.ckpt</div>
            <div className="about-photo-status mono"><i /> analyzing…</div>
          </div>
          <div className="about-profile panel">
            <div className="panel-header mono">
              <span>model_metadata</span>
              <span className="dim">verified</span>
            </div>
            <div className="profile-meta mono">
              {PROFILE.map(([label, value]) => (
                <div className="profile-row" key={label}>
                  <span className="dim">{label}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="panel-header mono">
          <span>training_progress</span>
          <span className="dim">4 checkpoints</span>
        </div>
        <div className="progress-bar" role="img" aria-label="Training progress: 82%">
          <span className="progress-fill" style={{ '--pct': '82%' }} />
          <span className="progress-label mono">82% — epoch semester_03</span>
        </div>
        <div className="timeline">
          {CHECKPOINTS.map((c, i) => (
            <div className={`timeline-item ${c.current ? 'timeline-current' : ''}`} key={c.id}>
              <div className="timeline-marker">
                <span className="timeline-dot" />
                {i < CHECKPOINTS.length - 1 && <span className="timeline-line" />}
              </div>
              <div className="timeline-content">
                <div className="timeline-head mono">
                  <span className="timeline-id">{c.id}</span>
                  {c.current && <span className="tag tag-signal">current</span>}
                </div>
                <h3 className="timeline-title">{c.title}</h3>
                <p className="dim timeline-body">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="panel-header mono">
          <span>currently_training_on</span>
          <span className="dim">{IN_TRAINING.length} active modules</span>
        </div>
        <div className="training-grid">
          {IN_TRAINING.map((m) => (
            <Link to={m.to} className="panel training-card" key={m.label}>
              <span className="training-dot" />
              <div>
                <h3 className="training-name">{m.label}</h3>
                <p className="dim training-desc">{m.desc}</p>
              </div>
              <span className="training-arrow">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section about-bottom-grid">
        <div className="panel">
          <div className="panel-header mono">
            <span>objective_function</span>
          </div>
          <p className="lead" style={{ margin: 0 }}>
            Target jangka panjang: bekerja sebagai AI Engineer / Data Scientist —
            membangun sistem yang mengolah data mentah jadi keputusan yang bisa
            dipercaya, seperti yang sedang dilatih lewat NEXAIR.
          </p>
        </div>
        <div className="panel about-skill-cta">
          <div className="panel-header mono">
            <span>skill_map</span>
          </div>
          <p className="dim" style={{ margin: '0 0 16px' }}>
            Skill set divisualisasikan sebagai arsitektur jaringan — dari fondasi
            pemrograman sampai penerapan produk nyata.
          </p>
          <Link to="/architecture" className="btn btn-ghost">lihat_architecture →</Link>
        </div>
      </section>
    </div>
  )
}
