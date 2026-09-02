import { Link, useLocation } from 'react-router-dom'
import EmberField from '../components/EmberField.jsx'
import { NAV } from '../nav.js'
import './not-found.css'

export default function NotFound() {
  const location = useLocation()

  return (
    <div className="not-found">
      <EmberField count={14} variant="vivid" className="nf-ember" />
      <section className="section nf-hero">
        <p className="kicker">// 404.exception</p>
        <h1 className="page-title">Route not found<br />in this build.</h1>
        <div className="panel nf-console mono">
          <div className="panel-header mono">
            <span>stderr</span>
            <span className="dim">process exited with code 1</span>
          </div>
          <pre className="nf-log">
{`> resolve_route("${location.pathname}")
FileNotFoundError: no page mounted at this path
  at Router.resolve (App.jsx)
  hint: check the sidebar for available routes`}
          </pre>
        </div>
      </section>

      <section className="section">
        <div className="panel-header mono">
          <span>available_routes</span>
          <span className="dim">pick one to continue</span>
        </div>
        <div className="nf-routes">
          {NAV.map((item) => (
            <Link key={item.path} to={item.path} className="tag tag-ember nf-route">
              {item.file}
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <Link to="/" className="btn">cd ~/ &amp; return home →</Link>
      </section>
    </div>
  )
}
