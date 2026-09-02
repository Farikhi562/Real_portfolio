import { Link } from 'react-router-dom'
import EmberField from '../components/EmberField.jsx'
import Seo from '../components/Seo.jsx'
import './nexair.css'

const DATA = [0.78,0.92,0.86,1.08,1.22,1.15,1.31,1.24,1.42,1.34,1.52,1.46,1.61,1.55,1.68,1.58,1.73,1.66,1.82,1.74,1.88,1.79,1.96,1.86]
const BASELINE = [0.82,0.9,0.88,1.03,1.17,1.18,1.26,1.28,1.38,1.37,1.48,1.5,1.56,1.6,1.66,1.68,1.73,1.76,1.81,1.84,1.89,1.91,1.96,1.99]

function linePath(values, width = 920, height = 300, pad = 28) {
  const min = 0.65, max = 2.1
  return values.map((v, i) => {
    const x = pad + (i / (values.length - 1)) * (width - pad * 2)
    const y = height - pad - ((v - min) / (max - min)) * (height - pad * 2)
    return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`
  }).join(' ')
}

function Chart() {
  const modelPath = linePath(DATA)
  const basePath = linePath(BASELINE)
  const points = DATA.map((v, i) => {
    const x = 28 + (i / (DATA.length - 1)) * (920 - 56)
    const y = 300 - 28 - ((v - .65) / (2.1 - .65)) * (300 - 56)
    return { x, y, v, hour: i + 1 }
  })
  return (
    <div className="nexair-chart panel">
      <div className="chart-top mono"><span>pm2.5 / test_set</span><span className="dim">24 points · 1h horizon</span></div>
      <svg viewBox="0 0 920 300" role="img" aria-label="Interactive PM2.5 forecast chart">
        {[0.75,1,1.25,1.5,1.75,2].map(v => {
          const y = 300 - 28 - ((v - .65) / (2.1 - .65)) * (300 - 56)
          return <line key={v} x1="28" x2="892" y1={y} y2={y} className="chart-grid" />
        })}
        <path d={basePath} className="chart-baseline" />
        <path d={modelPath} className="chart-model" />
        {points.map(p => <circle key={p.hour} cx={p.x} cy={p.y} r="4" className="chart-point"><title>{`Hour +${p.hour}: ${p.v.toFixed(2)} µg/m³`}</title></circle>)}
        <text x="28" y="288" className="chart-axis">+1h</text>
        <text x="860" y="288" className="chart-axis">+24h</text>
      </svg>
      <div className="chart-legend mono"><span><i className="legend-model" /> HGB model</span><span><i className="legend-base" /> persistence baseline</span></div>
    </div>
  )
}

function GeoPlume() {
  return (
    <div className="geo-plume panel">
      <div className="visual-window mono"><span>nexair / geo_view.svg</span><span>KALIMANTAN, ID</span></div>
      <div className="geo-stage">
        <svg viewBox="0 0 600 460" role="img" aria-label="Peta sederhana Kalimantan dengan simulasi titik panas dan sebaran plume asap">
          <defs>
            <radialGradient id="plumeGrad" cx="30%" cy="50%" r="75%">
              <stop offset="0%" stopColor="#ff8a63" stopOpacity="0.85" />
              <stop offset="45%" stopColor="#ff4433" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#ff4433" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="landGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1c2a1f" />
              <stop offset="100%" stopColor="#141f17" />
            </linearGradient>
          </defs>

          {/* graticule — kesan peta geografis */}
          <g className="geo-grid">
            {[80,160,240,320,400].map((y) => <line key={`h${y}`} x1="24" x2="576" y1={y} y2={y} />)}
            {[100,190,280,370,460,550].map((x) => <line key={`v${x}`} x1={x} x2={x} y1="20" y2="440" />)}
          </g>

          {/* siluet pulau Kalimantan — disederhanakan untuk keperluan ilustrasi */}
          <path
            className="geo-land"
            fill="url(#landGrad)"
            d="M 268 40
               C 300 34, 322 46, 328 66
               C 336 90, 322 104, 336 122
               C 352 142, 384 132, 404 152
               C 424 172, 412 196, 430 214
               C 452 236, 486 234, 498 262
               C 512 294, 486 312, 492 340
               C 498 368, 470 372, 452 392
               C 432 414, 396 410, 372 428
               C 344 448, 302 442, 276 424
               C 248 406, 252 380, 226 366
               C 198 350, 168 356, 148 336
               C 126 314, 138 288, 118 268
               C 96 246, 66 250, 56 224
               C 46 198, 74 186, 78 160
               C 82 134, 58 118, 76 96
               C 94 74, 128 82, 152 66
               C 178 48, 176 22, 208 18
               C 234 14, 246 34, 268 40 Z"
          />

          {/* garis batas provinsi (ilustratif, bukan batas administratif presisi) */}
          <g className="geo-border">
            <path d="M 268 40 C 280 90, 300 150, 320 220" />
            <path d="M 148 336 C 220 320, 300 300, 380 280" />
          </g>

          <text x="150" y="140" className="geo-label">KALIMANTAN BARAT</text>
          <text x="330" y="200" className="geo-label">KALIMANTAN TENGAH</text>
          <text x="330" y="360" className="geo-label">KALIMANTAN SELATAN</text>

          {/* plume: menyebar berlawanan arah angin dari titik hotspot */}
          <g className="geo-plume-group" transform="translate(300,230)">
            <ellipse className="plume-ring plume-ring-1" cx="-70" cy="20" rx="110" ry="46" fill="url(#plumeGrad)" />
            <ellipse className="plume-ring plume-ring-2" cx="-110" cy="34" rx="150" ry="58" fill="url(#plumeGrad)" />
            <ellipse className="plume-ring plume-ring-3" cx="-160" cy="46" rx="190" ry="66" fill="url(#plumeGrad)" />
          </g>

          {/* hotspot */}
          <g transform="translate(300,230)">
            <circle className="hotspot-pulse" r="18" />
            <circle className="hotspot-core" r="6" />
          </g>

          {/* wind indicator */}
          <g className="wind-indicator" transform="translate(500,70)">
            <circle r="26" className="wind-ring" />
            <path d="M 0 -16 L 5 -4 L -5 -4 Z" className="wind-arrow" />
            <text y="4" textAnchor="middle" className="wind-text">N</text>
          </g>
        </svg>

        <div className="geo-overlay mono">
          <span>HOTSPOT · FIRMS proxy</span>
          <strong>0.92°S, 113.9°E</strong>
          <span className="dim">wind from 275° · plume drifting SE</span>
        </div>
      </div>
      <div className="visual-footer mono">
        <span>basemap disederhanakan untuk ilustrasi</span>
        <span className="dim">bukan citra satelit real-time</span>
      </div>
    </div>
  )
}

export default function Nexair() {
  return (
    <div className="nexair-page">
      <Seo
        title="NEXAIR"
        description="NEXAIR — sistem physics-informed machine learning untuk memprediksi sebaran asap kebakaran hutan dan kualitas udara (PM2.5) jangka pendek."
        path="/nexair"
      />
      <section className="nexair-hero section">
        <div className="nexair-hero-copy">
          <p className="kicker">// nexair.case_study</p>
          <div className="nexair-badge mono"><span className="pulse-dot" /> AI / ENVIRONMENTAL INTELLIGENCE</div>
          <h1>NEXAIR</h1>
          <p className="nexair-tagline">Predict the Air Risk.<br />Understand Where Smoke Goes.</p>
          <p className="lead">A physics-informed machine learning system for wildfire smoke transport and near-term PM2.5 forecasting.</p>
          <div className="hero-actions"><a className="btn" href="#result">explore_results ↓</a><Link className="btn btn-ghost" to="/experiments">back_to_experiments ↗</Link></div>
        </div>
        <div className="nexair-hero-visual panel">
          <div className="visual-window mono"><span>nexair / plume_simulation.py</span><span>RUNNING</span></div>
          <div className="plume-stage"><img src="/assets/news/nexair-process-02.jpg" alt="NEXAIR Gaussian plume visualization" /><EmberField count={14} variant="vivid" /><div className="plume-overlay"><span>GAUSSIAN PLUME</span><strong>FRP 4.53</strong><span>WIND FROM 275°</span></div></div>
          <div className="visual-footer mono"><span>physics_proxy</span><span className="dim">downwind dispersion / active</span></div>
        </div>
      </section>

      <section className="section split-section">
        <div><p className="kicker">// the_problem</p><h2 className="section-title">Smoke does not stop at the fire.</h2></div>
        <div><p className="lead body-copy">Wildfire smoke can travel far beyond its source, making air-quality risk difficult to anticipate from fire activity alone.</p><p className="dim body-copy">NEXAIR combines environmental observations, atmospheric physics, and machine learning to understand smoke transport and forecast near-term air-quality conditions.</p></div>
      </section>

      <section className="section approach-section">
        <div className="section-heading"><div><p className="kicker">// the_approach</p><h2 className="section-title">Data → Feature Engineering → Physics + ML → Validation</h2></div><span className="mono dim">pipeline.v1</span></div>
        <div className="approach-grid">
          {[
            ['01','FIRMS Hotspots','Detect fire activity and estimate emission intensity.'],
            ['02','Weather','Capture wind, temperature, humidity, rainfall, and atmospheric conditions.'],
            ['03','Physics','Model potential downwind smoke dispersion using a Gaussian plume approach.'],
            ['04','Machine Learning','Forecast PM2.5 one hour ahead using a temporally locked predictive model.'],
            ['05','Validation','Evaluate predictions using a strict time-based holdout to prevent temporal leakage.'],
          ].map(([n,t,d]) => <article className="approach-card panel" key={n}><span className="approach-number mono">{n}</span><h3>{t}</h3><p className="dim">{d}</p><div className="card-beam" /></article>)}
        </div>
      </section>

      <section className="section geo-section">
        <div className="section-heading"><div><p className="kicker">// contoh_visualisasi</p><h2 className="section-title">A small, real geography. A plume that moves.</h2></div><span className="mono dim">geo_view.v1</span></div>
        <p className="lead body-copy" style={{ marginBottom: '18px' }}>Contoh sederhana bagaimana NEXAIR memetakan titik panas ke atas basemap geografis nyata (Kalimantan), lalu mensimulasikan ke mana asap kemungkinan bergerak berdasarkan arah angin.</p>
        <GeoPlume />
      </section>

      <section className="section result-section" id="result">
        <div className="section-heading"><div><p className="kicker">// the_result</p><h2 className="section-title">PM2.5 Forecast — Test Set</h2></div><span className="result-chip mono">TEMPORALLY LOCKED</span></div>
        <div className="metrics-grid">
          {[['0.866','µg/m³','MAE'],['1.445','µg/m³','RMSE'],['0.898','','R²']].map(([v,u,l]) => <div className="metric panel" key={l}><span className="metric-value mono">{v}</span><span className="metric-unit mono">{u}</span><span className="metric-label">{l}</span></div>)}
        </div>
        <p className="result-copy">Compared with a persistence baseline, the final HGB model improved test-set MAE by <strong>1.63%</strong>, RMSE by <strong>5.94%</strong>, and R² by <strong>1.34 percentage points</strong>.</p>
        <Chart />
      </section>

      <section className="section built-section">
        <div className="section-heading"><div><p className="kicker">// what_i_built</p><h2 className="section-title">A pipeline, not just a model.</h2></div></div>
        <div className="build-list">
          {[
            ['01','Data Pipeline','Integrated wildfire hotspot, weather, and air-quality observations into a temporally aligned dataset.'],
            ['02','Prediction Model','Built a HistGradientBoosting model for one-hour-ahead PM2.5 forecasting.'],
            ['03','Atmospheric Physics','Implemented a Gaussian plume model to estimate downwind smoke dispersion and provide a mechanistic interpretation layer.'],
            ['04','Validation System','Implemented temporal splitting, leakage audits, feature ablation, residual analysis, and physics-signal validation.'],
          ].map(([n,t,d]) => <article className="build-row" key={n}><span className="build-index mono">{n}</span><h3>{t}</h3><p className="dim">{d}</p><span className="build-arrow">↗</span></article>)}
        </div>
      </section>

      <section className="section beyond-section">
        <div className="beyond-visual panel"><div className="radar mono"><span /><span /><span /><span /><b>RISK<br />LAYER</b></div><div className="radar-caption mono">physics + prediction + advisory</div></div>
        <div className="beyond-copy"><p className="kicker">// beyond_prediction</p><h2 className="section-title">NEXAIR is designed to move beyond a conventional air-quality dashboard.</h2>
          <div className="question-list">{[['Where is the smoke going?','Atmospheric transport'],['What could happen to air quality?','Machine learning'],['How serious is the situation?','Risk assessment'],['What should people know or do?','AI advisory layer']].map(([q,a]) => <div className="question" key={q}><span>{q}</span><strong>{a}</strong></div>)}</div>
        </div>
      </section>

      <section className="section nexair-close panel">
        <div><p className="kicker">// view_project</p><h2 className="section-title">From signal to decision.</h2><p className="dim">Explore the experiments, visualizations, and system logs behind NEXAIR.</p></div>
        <div className="close-actions"><Link className="btn" to="/experiments">Explore NEXAIR →</Link><Link className="btn btn-ghost" to="/playground">Open Playground ↗</Link></div>
      </section>
    </div>
  )
}
