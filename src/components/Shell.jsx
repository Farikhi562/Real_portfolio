import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NAV } from '../nav.js'
import './shell.css'
import IntroOverlay from './IntroOverlay.jsx'

function useClock() {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

export default function Shell({ children }) {
  const location = useLocation()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const time = useClock()
  const current = NAV.find((n) => n.path === location.pathname) || NAV[0]
  const rootItems = NAV.filter((n) => n.folder === 'root')
  const companyItems = NAV.filter((n) => n.folder === 'company')

  useEffect(() => {
    setDrawerOpen(false)
  }, [location.pathname])

  return (
    <div className="shell">
      <IntroOverlay />
      <header className="titlebar">
        <div className="titlebar-left">
          <button
            className="drawer-toggle"
            aria-label="Buka navigasi"
            onClick={() => setDrawerOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
          <div className="traffic-lights" aria-hidden="true">
            <i className="dot dot-a" />
            <i className="dot dot-b" />
            <i className="dot dot-c" />
          </div>
          <span className="titlebar-path mono">
            fauzan@nexa <span className="dim">:</span> ~/portfolio <span className="dim">/</span> {current.file}
          </span>
        </div>
        <div className="titlebar-right mono dim">
          {time.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
        </div>
      </header>

      <div className="shell-body">
        <aside className={`sidebar ${drawerOpen ? 'open' : ''}`}>
          <div className="sidebar-section-label mono">EXPLORER</div>
          <div className="tree-root mono">
            <div className="tree-folder">▾ portfolio</div>
            {rootItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`tree-item ${location.pathname === item.path ? 'active' : ''}`}
              >
                <span className="tree-bullet">·</span>
                {item.file}
              </Link>
            ))}
            <div className="tree-folder tree-folder-sub">▾ nexa-tech-labs</div>
            {companyItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`tree-item tree-item-sub ${location.pathname === item.path ? 'active' : ''}`}
              >
                <span className="tree-bullet">·</span>
                {item.file}
              </Link>
            ))}
          </div>
          <div className="sidebar-footer mono dim">
            build: <span className="status-live">stable</span>
          </div>
        </aside>

        {drawerOpen && <div className="drawer-scrim" onClick={() => setDrawerOpen(false)} />}

        <div className="shell-main">
          <nav className="tabbar mono">
            {NAV.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`tab ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.file}
              </Link>
            ))}
          </nav>

          <main className="page" key={location.pathname}>
            {children}
          </main>

          <div className="live-system mono"><span>● ALL SYSTEMS OPERATIONAL</span><span>build v2.6.09</span><span>AI / DATA / PRODUCT</span><span>AVAILABLE FOR COLLABORATION</span></div>

          <footer className="statusbar mono">
            <span className="status-item">
              <i className="status-dot" /> online
            </span>
            <span className="status-item dim">semester_03</span>
            <span className="status-item dim">role: co-founder / ceo</span>
            <span className="status-item status-right dim">UTF-8 · React</span>
          </footer>
        </div>
      </div>
    </div>
  )
}
