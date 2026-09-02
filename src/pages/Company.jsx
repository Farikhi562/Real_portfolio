import { Link } from 'react-router-dom'
import './company.css'

const CLIENTS = ['Dimsum Mentai Kmyrn', 'Citcha Studio Photobox']

const PRODUCTS = [
  {
    name: 'NEXA-Sphere',
    logo: '/assets/logo-nexa-sphere.png',
    desc: 'AI & Cloud DevOps platform.',
    badges: ['ICBC', 'Top 4 — Business Canvas Udinus'],
  },
  {
    name: 'NEXA Campus',
    logo: '/assets/logo-nexa-campus.jpg',
    desc: 'Ekosistem digital kampus, live di production.',
    badges: ['Top 7 — BPC HIMAMEN Gunadarma', 'Gemastik Divisi 11'],
    link: 'https://campus.nexatechlabs.my.id',
  },
  {
    name: 'NEXAIR',
    logo: '/assets/logo-nexair.jpg',
    desc: 'Prediksi kebakaran, sebaran asap, dan kualitas udara.',
    badges: ['KOMPRES 16 — AI Innovation'],
    internalLink: '/experiments',
  },
]

export default function Company() {
  return (
    <div className="company">
      <section className="section company-hero">
        <img src="/assets/logo-nexa-tech-labs.png" alt="Logo NEXA Tech Labs" className="company-logo" />
        <div>
          <p className="kicker">// nexa-tech-labs.jsx</p>
          <h1 className="page-title">NEXA Tech Labs</h1>
          <p className="lead">
            Startup rintisan mahasiswa. Gua menjabat sebagai Co-Founder
            sekaligus CEO — dari situ, belajar AI dan Data Science nggak
            cuma teori, tapi langsung diuji lewat klien dan kompetisi nyata.
          </p>
        </div>
      </section>

      <section className="section company-stats mono">
        <div className="stat"><span className="stat-value">{CLIENTS.length}</span><span className="stat-label">klien aktif</span></div>
        <div className="stat"><span className="stat-value">{PRODUCTS.length}</span><span className="stat-label">produk dibangun</span></div>
        <div className="stat"><span className="stat-value">4</span><span className="stat-label">kompetisi diikuti</span></div>
        <div className="stat"><span className="stat-value">1</span><span className="stat-label">produk live production</span></div>
      </section>

      <section className="section">
        <div className="panel-header mono">
          <span>clients</span>
          <span className="dim">{CLIENTS.length} active</span>
        </div>
        <div className="grid-2">
          {CLIENTS.map((c) => (
            <div className="panel client-card" key={c}>
              <span className="tag tag-signal">served</span>
              <p className="client-name">{c}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="panel-header mono">
          <span>product_suite</span>
          <span className="dim">3 modules</span>
        </div>
        <div className="product-list">
          {PRODUCTS.map((p) => (
            <div className="panel product-row" key={p.name}>
              <img src={p.logo} alt={`Logo ${p.name}`} className="product-logo" />
              <div className="product-info">
                <h3 className="product-name">{p.name}</h3>
                <p className="dim product-desc">{p.desc}</p>
                <div className="product-badges">
                  {p.badges.map((b) => (
                    <span className="tag tag-ember" key={b}>{b}</span>
                  ))}
                </div>
              </div>
              <div className="product-action">
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                    buka_live →
                  </a>
                )}
                {p.internalLink && (
                  <Link to={p.internalLink} className="btn btn-ghost">
                    detail →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
