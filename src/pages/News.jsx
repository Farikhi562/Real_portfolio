import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import EmberField from '../components/EmberField.jsx'
import NewsLightbox from '../components/NewsLightbox.jsx'
import Seo from '../components/Seo.jsx'
import './news.css'

const NEWS = [
  { id: 'N01', storyId: '01', date: '03 SEP 2026', tag: 'NEXAIR', title: 'AI Innovation — pengembangan sistem prediksi kebakaran & kualitas udara berlanjut.', tone: 'live' },
  { id: 'N02', storyId: '02', date: 'AUG 2026', tag: 'GEMASTIK', title: 'NEXA Campus masuk fase persiapan kompetisi Divisi 11 — Pengembangan Bisnis TIK.', tone: 'ember' },
  { id: 'N03', storyId: '03', date: 'JUL 2026', tag: 'GIEF 2026', title: 'NEXA Campus Ecosystem dipamerkan dalam 8th Gunadarma Industrial Engineering Fair.', tone: 'signal' },
  { id: 'N04', storyId: '04', date: '2026', tag: 'BUSINESS PLAN', title: 'Muhamad Fauzan Al Farikhi berpartisipasi dalam Business Plan Competition Zero to Cash.', tone: 'ember' },
  { id: 'N05', storyId: '05', date: '25 APR 2026', tag: 'ICBC', title: 'Fauzan mencapai final dalam International Canvas Business Competition (ICBC).', tone: 'signal' },
]

const tickerItems = [...NEWS, ...NEWS]

const STORIES = [
  {
    id: '01', tag: 'NEXAIR / BUILD LOG', date: 'AUG 2026', title: 'Building NEXAIR',
    text: 'Dokumentasi proses pengembangan NEXAIR: eksplorasi data, pemodelan prediksi, pengujian visualisasi, dan iterasi sistem untuk membaca pola kebakaran serta kualitas udara.',
    detail: 'Dokumentasi proses pengembangan NEXAIR dari sisi riset ke produk: eksplorasi data titik panas dan kualitas udara, iterasi pemodelan prediksi, sampai pengujian visualisasi Gaussian plume yang dipakai di halaman Playground. Fokusnya membaca pola sebaran asap dan risiko kebakaran secara lebih terbaca untuk pengambil keputusan, bukan sekadar angka mentah.',
    images: [
      { src: '/assets/news/nexair-process-01.jpg', caption: 'Eksplorasi data titik panas & kualitas udara sebelum masuk tahap pemodelan.' },
      { src: '/assets/news/nexair-process-02.jpg', caption: 'Pengujian visualisasi sebaran asap (Gaussian plume) di atas simulasi peta.' },
    ],
    featured: true,
    category: 'nexair',
  },
  {
    id: '02', tag: 'GEMASTIK XIX', date: 'AUG 2026', title: 'Officially listed as Gunadarma delegate',
    text: 'Nama Muhamad Fauzan Al Farikhi tercantum dalam pengumuman resmi Universitas Gunadarma sebagai Delegasi Divisi XI Pengembangan Bisnis TIK — hasil seleksi internal Gelombang III.',
    detail: 'Nama Muhamad Fauzan Al Farikhi tercantum dalam pengumuman resmi Universitas Gunadarma sebagai Delegasi Divisi XI Pengembangan Bisnis TIK untuk Gemastik XIX 2026, hasil seleksi internal Gelombang III. NEXA Campus maju sebagai produk yang dibawa tim, dikerjakan bersama Mirza Danisywar Noor Wahyu dan Rangga Dwi Prasetyo.',
    images: [
      { src: '/assets/news/gemastik-delegation.jpg', caption: 'Pengumuman resmi delegasi Universitas Gunadarma untuk Gemastik XIX 2026.' },
    ],
    link: 'https://kemahasiswaan.gunadarma.ac.id/pengumuman-penetapan-delegasi-universitas-gunadarma-pada-gemastik-tahun-2026-hasil-seleksi-internal-gelombang-iii',
    category: 'competition',
  },
  {
    id: '03', tag: 'GIEF 2026 / EXHIBITION', date: '22–23 JUL 2026', title: 'NEXA Campus goes on display',
    text: 'NEXA Campus Ecosystem dipresentasikan sebagai bagian dari pameran produk inovasi mahasiswa berbasis teknologi digital dan standardisasi di Gunadarma Industrial Engineering Fair 2026.',
    detail: 'NEXA Campus Ecosystem dipresentasikan sebagai bagian dari pameran produk inovasi mahasiswa berbasis teknologi digital dan standardisasi di 8th Gunadarma Industrial Engineering Fair (GIEF) 2026 — kesempatan untuk menunjukkan produk langsung ke pengunjung pameran, bukan cuma di atas slide.',
    images: [
      { src: '/assets/news/gief-nexa-campus-01.jpg', caption: 'Booth NEXA Campus di 8th Gunadarma Industrial Engineering Fair (GIEF) 2026.' },
      { src: '/assets/news/gief-nexa-campus-02.jpg', caption: 'Sesi demo produk langsung ke pengunjung pameran.' },
      { src: '/assets/news/gief-nexa-campus-03.jpg', caption: 'Diskusi dengan pengunjung mengenai fitur NEXA Campus Ecosystem.' },
    ],
    category: 'exhibition',
  },
  {
    id: '04', tag: 'BUSINESS PLAN COMPETITION', date: '2026', title: 'Zero to Cash',
    text: 'Sertifikat apresiasi atas partisipasi dalam Business Plan Competition HIMAMEN Gunadarma dengan tema “Transforming Ideas into Real Business Execution”.',
    detail: 'Sertifikat apresiasi atas partisipasi dalam Business Plan Competition “Zero to Cash” yang diselenggarakan HIMAMEN Gunadarma, mengangkat tema “Transforming Ideas into Real Business Execution” — latihan menyusun ide bisnis jadi rencana yang bisa dieksekusi, bukan cuma wacana di atas kertas.',
    images: [
      { src: '/assets/news/business-plan-certificate.png', caption: 'Sertifikat apresiasi Business Plan Competition “Zero to Cash” — HIMAMEN Gunadarma.' },
    ],
    category: 'competition',
  },
  {
    id: '05', tag: 'ICBC / FINALIST', date: '25 APR 2026', title: 'International Canvas Business Competition',
    text: 'Certificate of Achievement sebagai Finalist dalam International Canvas Business Competition (ICBC) dengan tema “Digital Business Ecosystem for Global Market Expansion”.',
    detail: 'Certificate of Achievement sebagai Finalist dalam International Canvas Business Competition (ICBC) dengan tema “Digital Business Ecosystem for Global Market Expansion”. Babak final berupa sesi pitching langsung di hadapan dewan juri dengan waktu presentasi berjalan real-time — memaparkan progres model bisnis dan traksi awal di depan panel penilai.',
    images: [
      { src: '/assets/news/icbc-certificate.jpg', caption: 'Certificate of Achievement — Finalist International Canvas Business Competition (ICBC).' },
      { src: '/assets/news/icbc-final-presentation-01.jpg', caption: 'Sesi pitching final di hadapan dewan juri ICBC.' },
      { src: '/assets/news/icbc-final-presentation-02.jpg', caption: 'Presentasi progres model bisnis dan traksi awal.' },
      { src: '/assets/news/icbc-final-presentation-03.jpg', caption: 'Sesi tanya-jawab dengan panel penilai di babak final.' },
    ],
    category: 'competition',
  },
]

const FILTERS = [
  { id: 'all', label: 'Semua' },
  { id: 'nexair', label: 'NEXAIR' },
  { id: 'competition', label: 'Kompetisi' },
  { id: 'exhibition', label: 'Pameran' },
]

function Photo({ src, alt, caption, className = '', onOpen }) {
  return (
    <figure className={`news-photo-figure ${className}`}>
      <button type="button" className="news-photo" onClick={onOpen} aria-label={`Perbesar: ${alt}`}>
        <img src={src} alt={alt} loading="lazy" />
        <span className="news-photo-zoom mono">⤢ perbesar</span>
      </button>
      {caption && <figcaption className="news-photo-caption dim">{caption}</figcaption>}
    </figure>
  )
}

export default function News() {
  const [filter, setFilter] = useState('all')
  const [lightbox, setLightbox] = useState(null) // { storyId, imageIndex }

  const filteredStories = useMemo(
    () => (filter === 'all' ? STORIES : STORIES.filter((s) => s.category === filter)),
    [filter]
  )
  const counts = useMemo(() => {
    const c = { nexair: 0, competition: 0, exhibition: 0 }
    STORIES.forEach((s) => { c[s.category] = (c[s.category] || 0) + 1 })
    return c
  }, [])

  const activeStory = lightbox ? STORIES.find((s) => s.id === lightbox.storyId) : null
  const openStory = (storyId, imageIndex = 0) => setLightbox({ storyId, imageIndex })
  const closeStory = () => setLightbox(null)
  const setImageIndex = (i) => setLightbox((v) => (v ? { ...v, imageIndex: i } : v))

  return (
    <div className="news-page">
      <Seo
        title="News"
        description="Signal & update dari Fauzan × NEXA Tech Labs — build log NEXAIR, dokumentasi kompetisi, pameran, dan milestone terbaru."
        path="/news"
      />
      <section className="section news-hero">
        <EmberField count={16} variant="vivid" className="news-ember" />
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

      <section className="section news-stats">
        <div className="stat news-stat"><span className="stat-value">{counts.nexair}</span><span className="stat-label">build log NEXAIR</span></div>
        <div className="stat news-stat"><span className="stat-value">{counts.competition}</span><span className="stat-label">kompetisi diikuti</span></div>
        <div className="stat news-stat"><span className="stat-value">{counts.exhibition}</span><span className="stat-label">pameran / exhibition</span></div>
        <div className="stat news-stat"><span className="stat-value">2026</span><span className="stat-label">tahun aktif</span></div>
      </section>

      <section className="section ticker-section">
        <div className="ticker-label mono">
          <span>BREAKING / NEXA SIGNAL</span>
          <span className="dim">AUTO SCROLL · 24/7 · klik untuk detail</span>
        </div>
        <div className="news-marquee" aria-label="News ticker">
          <div className="news-marquee-track">
            {tickerItems.map((item, index) => (
              <button
                type="button"
                className="news-chip"
                key={`${item.id}-${index}`}
                onClick={() => openStory(item.storyId)}
              >
                <span className={`news-chip-dot ${item.tone}`} />
                <span className="news-chip-tag">{item.tag}</span>
                <span className="news-chip-title">{item.title}</span>
                <span className="news-chip-date">{item.date}</span>
                <span className="news-chip-arrow">↗</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section news-stories">
        <div className="panel-header mono">
          <span>visual_archive</span>
          <span className="dim">field notes / proof of work</span>
        </div>

        <div className="news-filters mono" role="tablist" aria-label="Filter berita">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={filter === f.id}
              className={`news-filter-chip ${filter === f.id ? 'active' : ''}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
          <span className="dim news-filter-count">{filteredStories.length} item{filteredStories.length !== 1 ? 's' : ''}</span>
        </div>

        <div className="story-stack">
          {filteredStories.map((story, index) => (
            <article className={`story-card panel ${story.featured ? 'story-featured' : ''}`} style={{ '--delay': `${index * 90}ms` }} key={story.id}>
              <div className="story-copy">
                <div className="story-meta mono"><span>{story.id}</span><span>/</span><span>{story.date}</span></div>
                <p className="story-tag mono">{story.tag}</p>
                <h2>{story.title}</h2>
                <p className="dim story-text">{story.text}</p>
                <div className="story-actions">
                  <button type="button" className="btn story-link" onClick={() => openStory(story.id)}>baca_selengkapnya →</button>
                  {story.link && <a className="btn btn-ghost story-link" href={story.link} target="_blank" rel="noreferrer">official announcement ↗</a>}
                </div>
              </div>
              <div className={`story-gallery gallery-${story.images.length}`}>
                {story.images.map((img, imageIndex) => (
                  <Photo
                    key={img.src}
                    src={img.src}
                    caption={img.caption}
                    alt={`${story.title} — ${img.caption || `dokumentasi ${imageIndex + 1}`}`}
                    onOpen={() => openStory(story.id, imageIndex)}
                  />
                ))}
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

      <NewsLightbox
        story={activeStory}
        imageIndex={lightbox?.imageIndex || 0}
        onClose={closeStory}
        onSetImageIndex={setImageIndex}
      />
    </div>
  )
}
