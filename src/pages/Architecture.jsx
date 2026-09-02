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

export default function Architecture() {
  return (
    <div className="architecture">
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
                      className={`layer-node ${layer.isOutput ? 'layer-node-output' : ''}`}
                      style={{ animationDelay: `${(li * 0.15) + ni * 0.08}s` }}
                    >
                      {n}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
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
