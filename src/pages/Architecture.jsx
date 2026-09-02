import { useState } from 'react'
import Seo from '../components/Seo.jsx'
import './architecture.css'

const LAYERS = [
  {
    label: 'input_layer',
    sub: 'Foundations',
    nodes: ['Python', 'SQL', 'Git', 'Struktur Data & Algoritma'],
  },
  {
    label: 'hidden_layer_1',
    sub: 'Core — AI & Data',
    nodes: ['Machine Learning', 'Analisis & Visualisasi Data', 'Cloud / DevOps dasar'],
  },
  {
    label: 'hidden_layer_2',
    sub: 'Applied — Product & Sistem',
    nodes: ['System Design', 'Product Thinking', 'Kepemimpinan Tim'],
  },
  {
    label: 'output_layer',
    sub: 'Target',
    nodes: ['AI Engineer', 'Data Scientist'],
    isOutput: true,
  },
]

const PASS_NODES = [
  { x: 60, label: 'input' },
  { x: 220, label: 'hidden_1' },
  { x: 380, label: 'hidden_2' },
  { x: 540, label: 'output' },
]

function ForwardPassDemo() {
  return (
    <div className="panel forward-pass-panel">
      <div className="panel-header mono">
        <span>forward_pass.sim</span>
        <span className="dim">contoh visualisasi / signal propagation</span>
      </div>
      <div className="forward-pass-stage">
        <svg viewBox="0 0 600 160" role="img" aria-label="Animasi sinyal merambat maju melalui layer arsitektur skill">
          {PASS_NODES.slice(0, -1).map((n, i) => {
            const next = PASS_NODES[i + 1]
            return (
              <line
                key={`line-${n.label}`}
                id={`pass-line-${i}`}
                x1={n.x} y1="80" x2={next.x} y2="80"
                className="pass-line"
              />
            )
          })}
          {PASS_NODES.slice(0, -1).map((n, i) => (
            <circle key={`dot-${n.label}`} r="5" className="pass-dot" style={{ animationDelay: `${i * 0.5}s` }}>
              <animateMotion dur="2s" repeatCount="indefinite" begin={`${i * 0.5}s`}>
                <mpath href={`#pass-line-${i}`} xlinkHref={`#pass-line-${i}`} />
              </animateMotion>
            </circle>
          ))}
          {PASS_NODES.map((n, i) => (
            <g key={n.label} transform={`translate(${n.x},80)`}>
              <circle r={i === PASS_NODES.length - 1 ? 14 : 11} className={`pass-node ${i === PASS_NODES.length - 1 ? 'pass-node-output' : ''}`} />
              <text y="34" textAnchor="middle" className="pass-node-label">{n.label}</text>
            </g>
          ))}
        </svg>
      </div>
      <p className="dim forward-pass-caption" style={{ margin: '10px 2px 0' }}>
        Contoh sederhana: sinyal merambat maju dari fondasi ke target karier, layer demi layer — sama seperti skill yang terus dipakai ulang di setiap proyek baru.
      </p>
    </div>
  )
}

export default function Architecture() {
  const [selected, setSelected] = useState(null)
  return (
    <div className="architecture">
      <Seo
        title="Architecture"
        description="Peta skill Fauzan dari fondasi hingga target karier — disusun seperti arsitektur neural network, layer demi layer."
        path="/architecture"
      />
      <section className="section">
        <p className="kicker">// architecture.jsx</p>
        <h1 className="page-title">Architecture</h1>
        <p className="lead">
          Skill set gua divisualisasikan sebagai arsitektur jaringan — dari
          fondasi dasar pemrograman, menguat ke inti AI &amp; data, sampai
          diterapkan lewat produk nyata di NEXA Tech Labs.
        </p>
      </section>

      <section className="section">
        <div className="panel network-panel">
          <div className="network-diagram">
            {LAYERS.map((layer, li) => (
              <div className="network-layer" key={layer.label}>
                <div className="layer-label mono">
                  <span>{layer.label}</span>
                  <span className="dim">{layer.sub}</span>
                </div>
                <div className="layer-nodes">
                  {layer.nodes.map((n, ni) => (
                    <div
                      key={n}
                      className={`layer-node ${layer.isOutput ? 'layer-node-output' : ''} ${selected === n ? 'selected' : ''}`}
                      style={{ animationDelay: `${(li * 0.15) + ni * 0.08}s` }}
                      onClick={() => setSelected(selected === n ? null : n)}
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && setSelected(selected === n ? null : n)}
                    >
                      <span>{n}</span><b>↗</b>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <ForwardPassDemo />
      </section>

      <section className="section">
        <div className="panel architecture-inspector">
          <span className="kicker">// node.inspector</span>
          <h2 className="section-title">{selected || 'Select a node'}</h2>
          <p className="dim" style={{margin:0}}>{selected ? `Active capability: ${selected}. Hover and click nodes to inspect the architecture layer.` : 'Klik node mana pun untuk membuka inspection state.'}</p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Catatan jujur</h2>
        <div className="panel">
          <p className="dim" style={{ margin: 0, lineHeight: 1.7 }}>
            Ini bukan daftar "expert level 99%". Sebagian besar node di atas
            masih dalam status <span className="tag tag-alert" style={{ margin: '0 4px' }}>training</span>
            — dipelajari sambil langsung dipakai buat bangun produk NEXA. Yang
            membedakan: setiap skill di sini sudah diuji lewat proyek nyata,
            bukan cuma latihan di kelas.
          </p>
        </div>
      </section>
    </div>
  )
}
