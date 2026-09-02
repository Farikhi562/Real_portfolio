import { Link } from 'react-router-dom'
import './news.css'

const NEWS = [
  { id: 'N01', date: '03 SEP 2026', tag: 'NEXAIR', title: 'AI Innovation — pengembangan sistem prediksi kebakaran & kualitas udara berlanjut.', tone: 'live' },
  { id: 'N02', date: 'AUG 2026', tag: 'GEMASTIK', title: 'NEXA Campus masuk fase persiapan kompetisi Divisi 11 — Pengembangan Bisnis TIK.', tone: 'teal' },
  { id: 'N03', date: 'AUG 2026', tag: 'NEXA CAMPUS', title: 'Ecosystem terus diiterasi menuju launch dan growth phase.', tone: 'signal' },
  { id: 'N04', date: '2026', tag: 'NEXA TECH LABS', title: 'Startup rintisan mahasiswa dengan produk dan klien aktif terus dikembangkan.', tone: 'teal' },
  { id: 'N05', date: '2026', tag: 'PORTFOLIO', title: 'Fauzan — Informatics student, 1 year experience, IPK 3.74 / 4.00.', tone: 'signal' },
]

const tickerItems = [...NEWS, ...NEWS]

export default function News() {
  return (
    <div className="news-page">
      <section className="section news-hero">
        <div>
          <p className="kicker">// news.feed</p>
          <h1 className="page-title">Signal, updates,<br />things in motion.</h1>
          <p className="lead">Live-style update stream dari ekosistem Fauzan × NEXA Tech Labs. Bukan sekadar list berita — dibuat seperti broadcast system yang terus berjalan.</p>
        </div>
        <div className="news-live-card panel mono">
          <span className="live-indicator"><i /> LIVE FEED</span>
          <strong>05</strong>
          <span className="dim">signals loaded</span>
        </div>
      </section>

      <section className="section ticker-section">
        <div className="ticker-label mono">
          <span>BREAKING / NEXA SIGNAL</span>
          <span className="dim">AUTO SCROLL · 24/7</span>
        </div>
        <div className="news-marquee" aria-label="News ticker">
          <div className="news-marquee-track">
            {tickerItems.map((item, index) => (
              <article className="news-chip" key={`${item.id}-${index}`}>
                <span className={`news-chip-dot ${item.tone}`} />
                <span className="news-chip-tag">{item.tag}</span>
                <span className="news-chip-title">{item.title}</span>
                <span className="news-chip-date">{item.date}</span>
                <span className="news-chip-arrow">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="panel-header mono">
          <span>latest_signals</span>
          <span className="dim">stream://nexa</span>
        </div>
        <div className="news-list">
          {NEWS.map((item, index) => (
            <article className="news-row panel" style={{ '--delay': `${index * 90}ms` }} key={item.id}>
              <div className="news-index mono">{item.id}</div>
              <div className="news-row-main">
                <div className="news-row-meta mono"><span>{item.date}</span><span className="news-separator">/</span><span>{item.tag}</span></div>
                <h2>{item.title}</h2>
              </div>
              <div className={`news-status tag ${item.tone === 'signal' ? 'tag-signal' : item.tone === 'live' ? 'tag-alert' : 'tag-teal'}`}>active</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section news-cta panel">
        <div>
          <p className="kicker">// keep_moving()</p>
          <h2 className="section-title">The system is still training.</h2>
          <p className="dim">Eksperimen baru, kompetisi, produk, dan update NEXA akan terus masuk ke feed ini.</p>
        </div>
        <Link to="/experiments" className="btn">open_experiments →</Link>
      </section>
    </div>
  )
}
