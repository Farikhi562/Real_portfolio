import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NAV } from '../nav.js'
import './command-palette.css'

const EXTRA = [
  { label: 'How I Think', path: '/about#how-i-think', hint: 'method' },
  { label: 'Achievements', path: '/logs', hint: 'timeline' },
  { label: 'NEXAIR Playground', path: '/playground', hint: 'interactive' },
]

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [index, setIndex] = useState(0)
  const navigate = useNavigate()
  const items = useMemo(() => [...NAV.map(n => ({ label: n.label, path: n.path, hint: n.file })), ...EXTRA], [])
  const filtered = items.filter(i => `${i.label} ${i.hint}`.toLowerCase().includes(query.toLowerCase())).slice(0, 9)

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setOpen(v => !v) }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])
  useEffect(() => { setIndex(0) }, [query])

  const go = (item) => { setOpen(false); setQuery(''); navigate(item.path) }
  const onInput = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setIndex(i => Math.min(i + 1, filtered.length - 1)) }
    if (e.key === 'ArrowUp') { e.preventDefault(); setIndex(i => Math.max(i - 1, 0)) }
    if (e.key === 'Enter' && filtered[index]) go(filtered[index])
  }

  return <>
    <button className="command-trigger mono" onClick={() => setOpen(true)}><span>⌘K</span><span className="dim">Search</span></button>
    {open && <div className="command-overlay" onMouseDown={() => setOpen(false)}>
      <div className="command-modal" onMouseDown={e => e.stopPropagation()}>
        <div className="command-input-row"><span className="command-symbol mono">›</span><input autoFocus value={query} onChange={e => setQuery(e.target.value)} onKeyDown={onInput} placeholder="Search anything..." /><kbd>ESC</kbd></div>
        <div className="command-results">
          {filtered.map((item, i) => <button key={item.path} className={`command-result ${i === index ? 'selected' : ''}`} onMouseEnter={() => setIndex(i)} onClick={() => go(item)}><span>{item.label}</span><span className="dim mono">{item.hint}</span><span>↗</span></button>)}
          {!filtered.length && <div className="command-empty mono">no_match_found</div>}
        </div>
        <div className="command-foot mono"><span>↑↓ navigate</span><span>↵ open</span><span>ESC close</span></div>
      </div>
    </div>}
  </>
}
