import { Link } from 'react-router-dom'
import './experiments.css'

const STAGES = [
  {
    id: '01',
    question: 'Ada kebakaran / hotspot di mana?',
    method: 'Data satelit NASA FIRMS',
    status: 'active',
  },
  {
    id: '02',
    question: 'Kalau ada asap, kira-kira bergerak ke mana?',
    method: 'Data cuaca + physics modeling (Gaussian plume)',
    status: 'active',
  },
  {
    id: '03',
    question: 'Kalau asap bergerak ke area tertentu, kualitas udaranya bakal bagaimana?',
    method: 'Machine Learning — prediksi PM2.5 1 jam ke depan',
    status: 'building',
  },
]

export default function Experiments() {
  return (
    <div className="experiments">
      <section className="section">
        <p className="kicker">// experiments.jsx</p>
        <h1 className="page-title">Experiments</h1>
        <p className="lead">
          Proyek AI yang lagi dikerjain, ditulis sebagai log eksperimen —
          bukan sekadar galeri screenshot.
        </p>
      </section>

      <section className="section">
        <div className="panel flagship-panel">
          <div className="panel-header mono">
            <span>flagship_experiment</span>
            <span className="tag tag-alert">KOMPRES 16 — AI Innovation</span>
          </div>

          <div className="flagship-head">
            <img src="/assets/logo-nexair.jpg" alt="Logo NEXAIR" className="flagship-logo" />
            <div>
              <h2 className="section-title" style={{ margin: 0 }}>NEXAIR</h2>
              <p className="dim" style={{ margin: '6px 0 0', maxWidth: '56ch' }}>
                Platform yang menjawab tiga pertanyaan berantai tentang
                kebakaran dan kualitas udara — dari deteksi titik api sampai
                prediksi dampaknya ke udara yang kita hirup.
              </p>
            </div>
          </div>

          <div className="hypothesis-box">
            <p className="code-line">
              <span className="c">// hypothesis</span>
            </p>
            <p className="code-line">
              <span className="k">if</span> (hotspot_terdeteksi &amp;&amp; arah_angin_diketahui) {'{'}
            </p>
            <p className="code-line" style={{ paddingLeft: 20 }}>
              <span className="s">predict</span>(sebaran_asap, dampak_PM2_5)
            </p>
            <p className="code-line">{'}'}</p>
          </div>

          <div className="stage-flow">
            {STAGES.map((s, i) => (
              <div className="stage-card" key={s.id}>
                <div className="stage-top mono">
                  <span className="stage-id">{s.id}</span>
                  <span className={`tag ${s.status === 'active' ? 'tag-signal' : 'tag-alert'}`}>
                    {s.status === 'active' ? 'active' : 'building'}
                  </span>
                </div>
                <p className="stage-question">{s.question}</p>
                <p className="dim stage-method mono">→ {s.method}</p>
                {i < STAGES.length - 1 && <span className="stage-connector" aria-hidden="true" />}
              </div>
            ))}
          </div>
          <div style={{ marginTop: 18 }}>
            <Link className="btn" to="/nexair">open_nexair_case_study →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Eksperimen lain</h2>
        <div className="grid-2">
          <div className="panel other-exp">
            <div className="panel-header mono">
              <span>NEXA-Sphere</span>
              <span className="tag tag-teal">ICBC</span>
            </div>
            <p className="dim" style={{ margin: 0 }}>
              AI-powered ERP / Business Intelligence for MSMEs — menghubungkan data bisnis, external intelligence, forecasting, dan decision support.
            </p>
            <div style={{ marginTop: 8 }}><Link className="btn btn-ghost" to="/nexa-sphere">open_case_study →</Link></div>
          </div>
          <div className="panel other-exp">
            <div className="panel-header mono">
              <span>NEXA Campus Ecosystem</span>
              <span className="tag tag-signal">live</span>
            </div>
            <p className="dim" style={{ margin: 0 }}>
              Ekosistem kampus yang sudah live di production, sekaligus
              tampil di BPC HIMAMEN Gunadarma dan Gemastik Divisi 11.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
