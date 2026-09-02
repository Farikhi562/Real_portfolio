import { Link } from 'react-router-dom'
import TerminalBoot from '../components/TerminalBoot.jsx'
import NodeField from '../components/NodeField.jsx'
import Seo from '../components/Seo.jsx'
import '../components/terminal-boot.css'
import '../components/node-field.css'
import './home.css'
import './news.css'

export default function Home() {
  return (
    <div className="home">
      <Seo
        title="Home"
        description="Fauzan — mahasiswa Informatika, AI Engineer in training, Co-Founder & CEO NEXA Tech Labs. Membangun NEXAIR, NEXA Campus, dan NEXA Sphere."
        path="/"
      />
      <section className="section hero-grid">
        <div>
          <p className="kicker">// portfolio.init()</p>
          <h1 className="page-title">
            Membangun sistem,<br />bukan sekadar tugas kuliah.
          </h1>
          <p className="lead">
            Muhamad Fauzan Al Farikhi — mahasiswa Informatika dengan 1 tahun pengalaman,
            saat ini mengembangkan fokus ke AI Engineer / Data Science. Merangkap Co-Founder &amp; CEO di{' '}
            <Link to="/nexa" className="inline-link">NEXA Tech Labs</Link>, startup
            rintisan mahasiswa dengan klien aktif dan produk yang sudah bertanding
            di beberapa kompetisi nasional.
          </p>
          <div className="hero-actions">
            <Link to="/experiments" className="btn">lihat_eksperimen →</Link>
            <Link to="/nexa" className="btn btn-ghost">buka_nexa-tech-labs</Link>
          </div>
          <div className="hero-stats mono">
            <div className="stat"><span className="stat-value">1</span><span className="stat-label">tahun pengalaman</span></div>
            <div className="stat"><span className="stat-value">3.74</span><span className="stat-label">IPK / 4.00</span></div>
            <div className="stat"><span className="stat-value">3</span><span className="stat-label">produk NEXA</span></div>
            <div className="stat"><span className="stat-value">2</span><span className="stat-label">klien aktif</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <NodeField />
        </div>
      </section>

      <section className="section">
        <TerminalBoot />
      </section>

      <section className="section home-how" id="how-i-think">
        <div className="panel-header mono"><span>how_i_think</span><span className="dim">model methodology</span></div>
        <div className="thinking-grid">
          {[["01","IDENTIFY","Find the actual problem before choosing the technology."],["02","MODEL","Turn messy information into structure and measurable signals."],["03","BUILD","Create a system around the problem, not just a demo."],["04","VALIDATE","Test assumptions with data, users, and real constraints."],["05","ITERATE","Improve the system based on evidence." ]].map(([n,t,d])=><article className="think-card" key={n}><span className="think-num mono">{n}</span><h3>{t}</h3><p>{d}</p></article>)}
        </div>
      </section>

      <section className="section home-news">
        <div className="panel-header mono">
          <span>news.feed</span>
          <Link to="/news" className="dim news-open">open all ↗</Link>
        </div>
        <div className="news-marquee">
          <div className="news-marquee-track">
            {[
              'NEXAIR / AI Innovation — development in progress',
              'GEMASTIK / NEXA Campus — competition preparation',
              'NEXA TECH LABS / products + active clients',
              'PORTFOLIO / 1 year experience · IPK 3.74',
              'NEXAIR / AI Innovation — development in progress',
              'GEMASTIK / NEXA Campus — competition preparation',
              'NEXA TECH LABS / products + active clients',
              'PORTFOLIO / 1 year experience · IPK 3.74',
            ].map((item, i) => (
              <div className="news-chip" key={i}>
                <span className="news-chip-dot signal" />
                <span className="news-chip-title">{item}</span>
                <span className="news-chip-arrow">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="panel-header mono">
          <span>modules_loaded</span>
          <span className="dim">4 active</span>
        </div>
        <div className="grid-3 module-grid">
          <ModuleCard
            title="NEXAIR"
            desc="Prediksi lokasi kebakaran, arah asap, dan kualitas udara."
            status="in-progress"
            to="/experiments"
          />
          <ModuleCard
            title="NEXA-Sphere"
            desc="AI & cloud DevOps platform — tampil di ICBC."
            status="competed"
            to="/nexa"
          />
          <ModuleCard
            title="NEXA Campus"
            desc="Ekosistem kampus, live di campus.nexatechlabs.my.id"
            status="live"
            to="/nexa"
          />
        </div>
      </section>
    </div>
  )
}

function ModuleCard({ title, desc, status, to }) {
  const statusMap = {
    live: { label: 'live', cls: 'tag-signal' },
    'in-progress': { label: 'training', cls: 'tag-alert' },
    competed: { label: 'competed', cls: 'tag-ember' },
  }
  const s = statusMap[status]
  return (
    <Link to={to} className="panel module-card">
      <div className="module-card-top mono">
        <span>{title}</span>
        <span className={`tag ${s.cls}`}>{s.label}</span>
      </div>
      <p className="dim module-desc">{desc}</p>
    </Link>
  )
}
