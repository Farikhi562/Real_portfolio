import { Link } from 'react-router-dom'
import './news.css'

const NEWS = [
  { id: 'N01', date: '03 SEP 2026', tag: 'NEXAIR', title: 'AI Innovation — pengembangan sistem prediksi kebakaran & kualitas udara berlanjut.', tone: 'live' },
  { id: 'N02', date: 'AUG 2026', tag: 'GEMASTIK', title: 'NEXA Campus masuk fase persiapan kompetisi Divisi 11 — Pengembangan Bisnis TIK.', tone: 'teal' },
  { id: 'N03', date: 'JUL 2026', tag: 'GIEF 2026', title: 'NEXA Campus Ecosystem dipamerkan dalam 8th Gunadarma Industrial Engineering Fair.', tone: 'signal' },
  { id: 'N04', date: '2026', tag: 'BUSINESS PLAN', title: 'Muhamad Fauzan Al Farikhi berpartisipasi dalam Business Plan Competition Zero to Cash.', tone: 'teal' },
  { id: 'N05', date: '25 APR 2026', tag: 'ICBC', title: 'Fauzan mencapai final dalam International Canvas Business Competition (ICBC).', tone: 'signal' },
]

const tickerItems = [...NEWS, ...NEWS]

const STORIES = [
  {
    id: '01', tag: 'NEXAIR / BUILD LOG', date: 'AUG 2026', title: 'Building NEXAIR',
    text: 'Dokumentasi proses pengembangan NEXAIR: eksplorasi data, pemodelan prediksi, pengujian visualisasi, dan iterasi sistem untuk membaca pola kebakaran serta kualitas udara.',
    images: ['/assets/news/nexair-process-01.jpg', '/assets/news/nexair-process-02.jpg'],
    featured: true,
  },
  {
    id: '02', tag: 'GEMASTIK XIX', date: 'AUG 2026', title: 'Officially listed as Gunadarma delegate',
    text: 'Nama Muhamad Fauzan Al Farikhi tercantum dalam pengumuman resmi Universitas Gunadarma sebagai Delegasi Divisi XI Pengembangan Bisnis TIK — hasil seleksi internal Gelombang III.',
    images: ['/assets/news/gemastik-delegation.jpg'],
    link: 'https://kemahasiswaan.gunadarma.ac.id/pengumuman-penetapan-delegasi-universitas-gunadarma-pada-gemastik-tahun-2026-hasil-seleksi-internal-gelombang-iii',
  },
  {
    id: '03', tag: 'GIEF 2026 / EXHIBITION', date: '22–23 JUL 2026', title: 'NEXA Campus goes on display',
    text: 'NEXA Campus Ecosystem dipresentasikan sebagai bagian dari pameran produk inovasi mahasiswa berbasis teknologi digital dan standardisasi di Gunadarma Industrial Engineering Fair 2026.',
    images: ['/assets/news/gief-nexa-campus-01.jpg', '/assets/news/gief-nexa-campus-02.jpg', '/assets/news/gief-nexa-campus-03.jpg'],
  },
  {
    id: '04', tag: 'BUSINESS PLAN COMPETITION', date: '2026', title: 'Zero to Cash',
    text: 'Sertifikat apresiasi atas partisipasi dalam Business Plan Competition HIMAMEN Gunadarma dengan tema “Transforming Ideas into Real Business Execution”.',
    images: ['/assets/news/business-plan-certificate.png'],
  },
  {
    id: '05', tag: 'ICBC / FINALIST', date: '25 APR 2026', title: 'International Canvas Business Competition',
    text: 'Certificate of Achievement sebagai Finalist dalam International Canvas Business Competition (ICBC) dengan tema “Digital Business Ecosystem for Global Market Expansion”.',
    images: ['/assets/news/icbc-certificate.jpg'],
  },
]

function Photo({ src, alt, className = '' }) {
  return <div className={`news-photo ${className}`}><img src={src} alt={alt} loading="lazy" /></div>
}

export default function News() {
  return (
    <div className="news-page">
      <section className="section news-hero">
        <div>
          <p className="kicker">// news.feed</p>
          <h1 className="page-title">Signal, updates,<br />things in motion.</h1>
          <p className="lead">A visual record of things being built, tested, exhibited, and achieved across Fauzan × NEXA Tech Labs.</p>
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

      <section className="section news-stories">
        <div className="panel-header mono">
          <span>visual_archive</span>
          <span className="dim">field notes / proof of work</span>
        </div>

        <div className="story-stack">
          {STORIES.map((story, index) => (
            <article className={`story-card panel ${story.featured ? 'story-featured' : ''}`} style={{ '--delay': `${index * 90}ms` }} key={story.id}>
              <div className="story-copy">
                <div className="story-meta mono"><span>{story.id}</span><span>/</span><span>{story.date}</span></div>
                <p className="story-tag mono">{story.tag}</p>
                <h2>{story.title}</h2>
                <p className="dim story-text">{story.text}</p>
                {story.link && <a className="btn story-link" href={story.link} target="_blank" rel="noreferrer">official announcement ↗</a>}
              </div>
              <div className={`story-gallery gallery-${story.images.length}`}>
                {story.images.map((src, imageIndex) => <Photo key={src} src={src} alt={`${story.title} documentation ${imageIndex + 1}`} />)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section news-cta panel">
        <div>
          <p className="kicker">// keep_moving()</p>
          <h2 className="section-title">The system is still training.</h2>
          <p className="dim">Eksperimen baru, kompetisi, produk, pameran, dan milestone akan terus masuk ke feed ini.</p>
        </div>
        <Link to="/experiments" className="btn">open_experiments →</Link>
      </section>
    </div>
  )
}
