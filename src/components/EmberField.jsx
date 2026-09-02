import './ember-field.css'

// Deterministic pseudo-random generator so particle layout is stable
// across renders (no hydration/flicker weirdness), seeded by index.
function seeded(i, salt = 1) {
  const x = Math.sin(i * 12.9898 * salt + salt) * 43758.5453
  return x - Math.floor(x)
}

export default function EmberField({ count = 14, className = '', variant = 'ambient' }) {
  const particles = Array.from({ length: count }, (_, i) => {
    const left = seeded(i, 1) * 100
    const size = 2 + seeded(i, 2) * 4
    const duration = 6 + seeded(i, 3) * 7
    const delay = seeded(i, 4) * -duration
    const drift = (seeded(i, 5) - 0.5) * 60
    const big = seeded(i, 6) > 0.82
    return { left, size, duration, delay, drift, big }
  })

  return (
    <div className={`ember-field ember-field-${variant} ${className}`} aria-hidden="true">
      {particles.map((p, i) => (
        <i
          key={i}
          className={`ember-spark ${p.big ? 'ember-spark-big' : ''}`}
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            '--drift': `${p.drift}px`,
          }}
        />
      ))}
    </div>
  )
}
