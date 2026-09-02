import { Link } from 'react-router-dom'
import './nexa-sphere.css'

const demand = [42,48,45,58,55,67,73,69,82,78,91,96]
const inventory = [82,78,76,72,69,64,59,55,51,48,45,41]

function Sparkline({ values, className='' }) {
  const w = 720, h = 220, p = 20
  const min = Math.min(...values) - 4, max = Math.max(...values) + 4
  const path = values.map((v,i) => {
    const x = p + (i/(values.length-1))*(w-p*2)
    const y = h-p-((v-min)/(max-min))*(h-p*2)
    return `${i?'L':'M'} ${x.toFixed(1)} ${y.toFixed(1)}`
  }).join(' ')
  return <svg className={className} viewBox={`0 0 ${w} ${h}`} role="img" aria-label="Business intelligence trend chart">
    {[0,1,2,3].map(i => <line key={i} x1={p} x2={w-p} y1={42+i*45} y2={42+i*45} className="sphere-grid" />)}
    <path d={path} className="sphere-line" />
    {values.map((v,i)=>{
      const x=p+(i/(values.length-1))*(w-p*2), y=h-p-((v-min)/(max-min))*(h-p*2)
      return <circle key={i} cx={x} cy={y} r="4" className="sphere-point"><title>{`Period ${i+1}: ${v}`}</title></circle>
    })}
  </svg>
}

function Dashboard() {
  return <div className="sphere-dashboard panel">
    <div className="dashboard-bar mono"><span>nexa_sphere / intelligence.dashboard</span><span><i className="live-dot"/> LIVE MODEL</span></div>
    <div className="dashboard-metrics">
      {[['DEMAND INDEX','96','+12.4%'],['INVENTORY RISK','LOW','−18.2%'],['REPLENISHMENT','14','items'],['CONFIDENCE','91.8%','model']].map(([a,b,c])=><div className="dash-metric" key={a}><span className="mono">{a}</span><strong>{b}</strong><small className="mono">{c}</small></div>)}
    </div>
    <div className="dashboard-main">
      <div className="trend-panel">
        <div className="chart-head mono"><span>demand_forecast</span><span className="dim">next 12 periods</span></div>
        <Sparkline values={demand}/>
        <div className="chart-axis mono"><span>NOW</span><span>+12</span></div>
      </div>
      <div className="risk-panel">
        <div className="chart-head mono"><span>inventory_risk</span><span className="tag tag-signal">LOW</span></div>
        <div className="risk-ring"><div><strong>18%</strong><span>risk</span></div></div>
        <div className="risk-list mono"><span><i/>stock coverage <b>21d</b></span><span><i/>waste exposure <b>low</b></span><span><i/>next action <b>replenish</b></span></div>
      </div>
    </div>
    <div className="dashboard-feed mono"><span>AI RECOMMENDATION</span><strong>Increase high-demand SKU replenishment within 72h.</strong><span className="feed-pulse"/></div>
  </div>
}

export default function NexaSphere() {
  return <div className="sphere-page">
    <section className="section sphere-hero">
      <div className="sphere-copy">
        <p className="kicker">// nexa_sphere.case_study</p>
        <div className="sphere-badge mono"><span className="pulse-dot"/> AI-POWERED ERP / BUSINESS INTELLIGENCE</div>
        <h1>NEXA<br/><em>SPHERE</em></h1>
        <p className="sphere-tagline">Turn Business Data Into Smarter Decisions.</p>
        <p className="lead">An intelligence layer for MSMEs that connects operational data with external signals, forecasting, and actionable recommendations.</p>
        <div className="hero-actions"><a className="btn" href="#result">explore_system ↓</a><Link className="btn btn-ghost" to="/experiments">back_to_experiments ↗</Link></div>
      </div>
      <div className="sphere-visual panel">
        <div className="sphere-visual-head mono"><span>nexa_sphere / command_center</span><span>AI ONLINE</span></div>
        <div className="sphere-orbit">
          <div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="orbit orbit-c"/>
          <img src="/assets/logo-nexa-sphere.png" alt="NEXA Sphere"/>
          <span className="orbit-node node-a">SALES</span><span className="orbit-node node-b">WEATHER</span><span className="orbit-node node-c">AI</span><span className="orbit-node node-d">INVENTORY</span>
        </div>
        <div className="sphere-visual-foot mono"><span>business_intelligence</span><span className="dim">context → forecast → action</span></div>
      </div>
    </section>

    <section className="section split-section">
      <div><p className="kicker">// the_problem</p><h2 className="section-title">Most businesses can see the past. Fewer can prepare for what comes next.</h2></div>
      <div><p className="lead body-copy">MSMEs often make inventory and purchasing decisions based on intuition, historical habits, or incomplete information.</p><p className="dim body-copy">When demand changes unexpectedly, businesses can face excess inventory, stock waste, missed sales, or unnecessary purchasing costs. NEXA Sphere connects internal business data with external signals to anticipate changes before they impact operations.</p></div>
    </section>

    <section className="section approach-section">
      <div className="section-heading"><div><p className="kicker">// the_approach</p><h2 className="section-title">Business Data → External Intelligence → AI Analysis → Action</h2></div><span className="mono dim">decision_engine.v1</span></div>
      <div className="sphere-approach-grid">
        {[
          ['01','Business Data','Analyze sales, inventory, purchasing, and operational activity to understand what is happening inside the business.'],
          ['02','External Intelligence','Enrich decisions with weather, inflation, geopolitical conditions, holidays, and calendar patterns.'],
          ['03','AI Forecasting','Identify demand patterns and generate forward-looking insights for inventory and purchasing.'],
          ['04','Inventory Intelligence','Determine what to stock, when to replenish, and where excess inventory risk may occur.'],
          ['05','Decision Support','Translate complex signals into practical recommendations business owners can act on.'],
        ].map(([n,t,d])=><article className="sphere-card panel" key={n}><span className="sphere-number mono">{n}</span><h3>{t}</h3><p className="dim">{d}</p><div className="sphere-beam"/></article>)}
      </div>
    </section>

    <section className="section" id="result">
      <div className="section-heading"><div><p className="kicker">// the_result</p><h2 className="section-title">Smarter Inventory Decisions</h2></div><span className="result-chip mono">CONTEXT-AWARE</span></div>
      <div className="result-words"><div className="result-word panel"><span className="mono">LESS</span><strong>Stock Waste</strong></div><div className="result-word panel"><span className="mono">BETTER</span><strong>Demand Visibility</strong></div><div className="result-word panel"><span className="mono">SMARTER</span><strong>Purchasing Decisions</strong></div></div>
      <p className="result-copy">NEXA Sphere is designed to help MSMEs move from reactive inventory management toward data-driven, context-aware decision making.</p>
      <Dashboard />
    </section>

    <section className="section built-section">
      <div className="section-heading"><div><p className="kicker">// what_i_built</p><h2 className="section-title">An ERP with an intelligence layer.</h2></div></div>
      <div className="build-list">
        {[
          ['01','AI-Powered ERP','Designed a centralized business platform connecting core operational workflows and intelligence.'],
          ['02','Inventory Intelligence','Built an AI-driven approach to identify inventory patterns, excess-stock risk, and replenishment opportunities.'],
          ['03','External Data Intelligence','Integrated contextual signals beyond internal business data, including weather, inflation, geopolitical conditions, and calendar effects.'],
          ['04','Decision Intelligence','Transformed multiple data sources into actionable insights rather than simply displaying raw business metrics.'],
        ].map(([n,t,d])=><article className="build-row" key={n}><span className="build-index mono">{n}</span><h3>{t}</h3><p className="dim">{d}</p><span className="build-arrow">↗</span></article>)}
      </div>
    </section>

    <section className="section beyond-sphere">
      <div><p className="kicker">// beyond_a_conventional_erp</p><h2 className="section-title">From recording what happened to preparing for what happens next.</h2></div>
      <div className="sphere-questions">{[['What is happening inside the business?','ERP & operational data'],['What could change demand?','External intelligence'],['What should we prepare for?','AI forecasting'],['What should we do next?','Decision intelligence']].map(([q,a])=><div className="sphere-question" key={q}><span>{q}</span><strong>{a}</strong></div>)}</div>
    </section>

    <section className="section sphere-vision panel">
      <div><p className="kicker">// the_vision</p><h2 className="section-title">An ERP should not only remember the business. It should help the business think ahead.</h2></div>
      <div><p className="dim body-copy">NEXA Sphere turns an ERP from a system that <strong>records what happened</strong> into an intelligence platform that helps businesses <strong>prepare for what happens next.</strong></p></div>
    </section>

    <section className="section nexair-close panel">
      <div><p className="kicker">// view_project</p><h2 className="section-title">Business context → better decisions.</h2><p className="dim">Explore the NEXA ecosystem and the experiments behind the product.</p></div>
      <div className="close-actions"><Link className="btn" to="/nexa">Explore NEXA →</Link><Link className="btn btn-ghost" to="/playground">Open Playground ↗</Link></div>
    </section>
  </div>
}
