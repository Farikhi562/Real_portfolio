import { useEffect, useState } from 'react'

const LINES = [
  { text: 'booting fauzan_os v0.3 ...', delay: 0 },
  { text: 'loading weights: informatics_sem03.ckpt', delay: 550 },
  { text: 'mounting module: nexa-tech-labs [ceo, co-founder]', delay: 1050 },
  { text: 'target objective: ai_engineer / data_science', delay: 1550 },
  { text: 'status: READY', delay: 2050, status: true },
]

export default function TerminalBoot() {
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    const timers = LINES.map((line, i) =>
      setTimeout(() => setVisibleCount(i + 1), line.delay)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div className="terminal-boot mono panel">
      <div className="panel-header">
        <span>boot.log</span>
        <span className="dim">pid_0921</span>
      </div>
      {LINES.slice(0, visibleCount).map((line, i) => (
        <div key={i} className={`boot-line ${line.status ? 'boot-line-status' : ''}`}>
          <span className="boot-caret">$</span> {line.text}
          {i === visibleCount - 1 && <span className="cursor-blink">▌</span>}
        </div>
      ))}
    </div>
  )
}
