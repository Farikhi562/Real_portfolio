import { Link } from 'react-router-dom'
import TerminalBoot from '../components/TerminalBoot.jsx'
import NodeField from '../components/NodeField.jsx'
import '../components/terminal-boot.css'
import '../components/node-field.css'
import './home.css'

export default function Home() {
  return (
    <div className="home">
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
        </div>
        <div className="hero-visual">
          <NodeField />
        </div>
      </section>

      <section className="section">
        <TerminalBoot />
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
    competed: { label: 'competed', cls: 'tag-teal' },
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
