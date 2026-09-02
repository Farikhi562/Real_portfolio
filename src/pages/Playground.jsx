import { useMemo, useState } from 'react'
import './playground.css'

// Estimasi sederhana dispersi Gaussian plume, stabilitas atmosfer kelas netral (D).
// Formula edukatif untuk demo — bukan model ML NEXAIR yang sebenarnya.
function estimatePM25({ intensity, windSpeed, distanceKm }) {
  const Q = intensity * 8 // kekuatan sumber (unit arbitrer)
  const x = Math.max(distanceKm * 1000, 50) // meter, dibatasi minimum biar tidak divide-by-near-zero
  const u = Math.max(windSpeed, 0.5)

  const sigmaY = 0.08 * x * Math.pow(1 + 0.0001 * x, -0.5)
  const sigmaZ = 0.06 * x * Math.pow(1 + 0.0015 * x, -0.5)

  const concentration = Q / (Math.PI * u * sigmaY * sigmaZ)
  // skala ke angka mikrogram/m3 yang masuk akal untuk demo
  const pm25 = Math.min(concentration * 4200, 500)
  return Math.round(pm25 * 10) / 10
}

function categorize(pm25) {
  if (pm25 <= 15) return { label: 'Baik', cls: 'tag-signal' }
  if (pm25 <= 40) return { label: 'Sedang', cls: 'tag-teal' }
  if (pm25 <= 65) return { label: 'Tidak Sehat (Sensitif)', cls: 'tag-alert' }
  return { label: 'Tidak Sehat', cls: 'tag-alert' }
}

export default function Playground() {
  const [intensity, setIntensity] = useState(50)
  const [windSpeed, setWindSpeed] = useState(4)
  const [distanceKm, setDistanceKm] = useState(3)

  const pm25 = useMemo(
    () => estimatePM25({ intensity, windSpeed, distanceKm }),
    [intensity, windSpeed, distanceKm]
  )
  const category = categorize(pm25)
  const gaugePct = Math.min(pm25 / 150, 1)

  const curve = useMemo(() => {
    const points = []
    for (let d = 0.5; d <= 15; d += 0.5) {
      points.push(estimatePM25({ intensity, windSpeed, distanceKm: d }))
    }
    return points
  }, [intensity, windSpeed])

  const maxCurve = Math.max(...curve, 1)

  return (
    <div className="playground">
      <section className="section">
        <p className="kicker">// playground.jsx</p>
        <h1 className="page-title">Playground</h1>
        <p className="lead">
          Simulasi ringan dari salah satu pertanyaan yang dijawab NEXAIR:
          seberapa parah kualitas udara di titik tertentu, kalau ada asap
          kebakaran yang bergerak terbawa angin.
        </p>
        <p className="dim playground-disclaimer mono">
          ⚠ estimasi disederhanakan (Gaussian plume) untuk demo — bukan model
          ML NEXAIR yang sesungguhnya.
        </p>
      </section>

      <section className="section">
        <div className="panel playground-panel">
          <div className="panel-header mono">
            <span>input_parameters</span>
            <span className="dim">live</span>
          </div>

          <div className="controls">
            <Control
              label="Intensitas sumber asap"
              value={intensity}
              min={5}
              max={100}
              onChange={setIntensity}
              unit=""
            />
            <Control
              label="Kecepatan angin"
              value={windSpeed}
              min={1}
              max={15}
              onChange={setWindSpeed}
              unit=" m/s"
            />
            <Control
              label="Jarak dari titik api"
              value={distanceKm}
              min={0.5}
              max={15}
              step={0.5}
              onChange={setDistanceKm}
              unit=" km"
            />
          </div>

          <hr className="divider" />

          <div className="result-row">
            <div className="gauge-wrap">
              <svg viewBox="0 0 140 80" className="gauge">
                <path d="M10,75 A60,60 0 0,1 130,75" className="gauge-track" />
                <path
                  d="M10,75 A60,60 0 0,1 130,75"
                  className="gauge-fill"
                  style={{
                    strokeDasharray: 188.5,
                    strokeDashoffset: 188.5 * (1 - gaugePct),
                  }}
                />
              </svg>
              <div className="gauge-value mono">
                {pm25}
                <span className="gauge-unit">µg/m³</span>
              </div>
            </div>

            <div className="result-info">
              <div className="stat">
                <span className="stat-label">Estimasi PM2.5 (1 jam ke depan)</span>
                <span className={`tag ${category.cls}`} style={{ marginTop: 6, width: 'fit-content' }}>
                  {category.label}
                </span>
              </div>
              <p className="dim result-note">
                Semakin dekat jarak dan semakin lemah angin, semakin tinggi
                konsentrasi asap yang tertahan di titik itu.
              </p>
            </div>
          </div>

          <div className="curve-wrap">
            <p className="dim mono curve-label">falloff vs jarak (0.5–15 km)</p>
            <svg viewBox="0 0 300 60" className="curve-svg" preserveAspectRatio="none">
              <polyline
                className="curve-line"
                points={curve
                  .map((v, i) => `${(i / (curve.length - 1)) * 300},${60 - (v / maxCurve) * 55}`)
                  .join(' ')}
              />
            </svg>
          </div>
        </div>
      </section>
    </div>
  )
}

function Control({ label, value, min, max, step = 1, onChange, unit }) {
  return (
    <div className="control">
      <div className="control-head mono">
        <span>{label}</span>
        <span className="control-value">
          {value}
          {unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="slider"
      />
    </div>
  )
}
