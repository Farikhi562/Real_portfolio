import './system-logs.css'

const LOGS = [
  { v: 'v0.1', text: 'Mulai kuliah Informatika — instalasi fondasi dasar.' },
  { v: 'v0.2', text: 'Mendirikan NEXA Tech Labs sebagai Co-Founder & CEO.' },
  { v: 'v0.3', text: 'Klien pertama onboard: Dimsum Mentai Kmyrn & Citcha Studio Photobox.' },
  { v: 'v0.4', text: 'NEXA-Sphere tampil di ICBC, masuk Top 4 Business Canvas Udinus.' },
  { v: 'v0.5', text: 'NEXA Campus Ecosystem live production, Top 7 BPC HIMAMEN Gunadarma.' },
  { v: 'v0.6', text: 'NEXA Campus dilanjutkan ke Gemastik Divisi 11 — Pengembangan Bisnis TIK.' },
  { v: 'v0.7', text: 'NEXAIR dikembangkan — bertanding di KOMPRES 16 AI Innovation.', current: true },
]

export default function SystemLogs() {
  return (
    <div className="system-logs">
      <section className="section">
        <p className="kicker">// system.log</p>
        <h1 className="page-title">System Logs</h1>
        <p className="lead">Changelog — histori update, bukan resume statis.</p>
      </section>

      <section className="section">
        <h2 className="section-title">Achievements / timeline</h2>
        <div className="panel achievement-timeline">
          {[['2026','GEMASTIK XIX','Selected as Universitas Gunadarma delegate — Business Development TIK','UNIVERSITY'],['2026','GIEF','NEXA Campus Ecosystem exhibition','EXHIBITION'],['2026','ICBC','Finalist — International Canvas Business Competition','FINALIST'],['2026','Business Plan Competition','Top 7 / HIMAMEN Gunadarma','COMPETITION']].map(([year,title,desc,badge],i)=><article className="achievement" style={{animationDelay:`${i*.12}s`}} key={title}><span className="achievement-year mono">{year}</span><div><h3>{title}</h3><p>{desc}</p></div><span className="tag tag-teal achievement-badge mono">{badge}</span></article>)}
        </div>
      </section>

      <section className="section">
        <div className="panel log-panel mono">
          {LOGS.map((log) => (
            <div className={`log-row ${log.current ? 'log-current' : ''}`} key={log.v}>
              <span className="log-version">{log.v}</span>
              <span className="log-text">{log.text}</span>
              {log.current && <span className="tag tag-signal log-tag">HEAD</span>}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
