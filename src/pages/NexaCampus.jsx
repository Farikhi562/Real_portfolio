import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import './nexa-campus.css'

const tasks = [
  ['ML Assignment','Due today · 18:00','urgent'],
  ['UI Prototype','Tomorrow · 23:59','soon'],
  ['Data Mining Quiz','Friday · 10:00','normal'],
]

function CampusDemo(){
  return <div className="campus-demo panel">
    <div className="campus-demo-bar mono"><span>nexa_campus / student.dashboard</span><span><i className="campus-live"/> SYSTEM ACTIVE</span></div>
    <div className="campus-metrics">
      {[['TODAY','3','tasks'],['NEXT DEADLINE','04h 12m','remaining'],['CAMPUS EVENTS','06','this week'],['FOCUS','72%','priority']].map(([a,b,c])=><div className="campus-metric" key={a}><span className="mono">{a}</span><strong>{b}</strong><small className="mono">{c}</small></div>)}
    </div>
    <div className="campus-main">
      <div className="campus-task-panel">
        <div className="campus-panel-head mono"><span>MY TASKS</span><span>03 ACTIVE</span></div>
        {tasks.map(([title,meta,state],i)=><div className={`campus-task ${state}`} key={title}><span className="task-check">{i===0?'!':'✓'}</span><div><strong>{title}</strong><small className="mono">{meta}</small></div><b>↗</b></div>)}
        <div className="campus-progress"><span className="mono">WEEKLY PROGRESS</span><div><i style={{width:'72%'}}/></div><strong>72%</strong></div>
      </div>
      <div className="campus-timeline-panel">
        <div className="campus-panel-head mono"><span>DEADLINE INTELLIGENCE</span><span>THIS WEEK</span></div>
        <div className="campus-timeline"><div className="timeline-line"/>{['MON','TUE','WED','THU','FRI'].map((day,i)=><div className={`timeline-day d${i}`} key={day}><span>{day}</span><i/><b>{[0,2,1,3,1][i]}</b></div>)}</div>
        <div className="campus-focus"><span className="mono">AI FOCUS</span><strong>Finish ML Assignment</strong><small>Highest priority · 4h 12m remaining</small><div className="focus-meter"><i/></div></div>
      </div>
    </div>
    <div className="campus-feed mono"><span>●</span><strong>NEXA AI:</strong> Your highest-priority academic task is due today at 18:00.<em>personalized advisory</em></div>
  </div>
}

function TelegramNotifDemo(){
  return <div className="telegram-demo panel">
    <div className="campus-demo-bar mono"><span>nexa_campus / telegram_bot.notify()</span><span><i className="campus-live"/> BOT ACTIVE</span></div>
    <div className="telegram-stage">
      <div className="tg-phone">
        <div className="tg-phone-notch"/>
        <div className="tg-statusbar mono"><span>9:41</span><span>●●● 5G 100%</span></div>
        <div className="tg-lockscreen">
          <span className="tg-clock">09:41</span>
          <span className="tg-date">Kamis, 3 September</span>
        </div>
        <div className="tg-notif tg-notif-a">
          <div className="tg-notif-icon">✈</div>
          <div className="tg-notif-body">
            <div className="tg-notif-top"><b>NEXA Campus Bot</b><span>now</span></div>
            <p>⏰ Deadline reminder: <b>ML Assignment</b> jatuh tempo dalam 4 jam 12 menit.</p>
          </div>
        </div>
        <div className="tg-notif tg-notif-b">
          <div className="tg-notif-icon">✈</div>
          <div className="tg-notif-body">
            <div className="tg-notif-top"><b>NEXA Campus Bot</b><span>now</span></div>
            <p>📌 UI Prototype ditambahkan ke jadwal besok, 23:59.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="campus-visual-foot mono" style={{position:'relative'}}><span>telegram_integration / demo</span><span className="dim">push notification simulation</span></div>
  </div>
}

export default function NexaCampus(){
 return <div className="campus-page">
   <Seo
     title="NEXA Campus"
     description="NEXA Campus — platform produktivitas mahasiswa yang menyatukan tugas, deadline, dan info kampus, lengkap dengan notifikasi pengingat via Telegram."
     path="/nexa-campus"
   />
   <section className="campus-hero section">
     <div className="campus-hero-copy">
       <p className="kicker">// nexa_campus.case_study</p>
       <div className="campus-badge mono"><span className="campus-live"/> STUDENT PRODUCTIVITY / CAMPUS INTELLIGENCE</div>
       <h1>NEXA<br/><em>CAMPUS</em></h1>
       <p className="campus-tagline">Never Miss What Matters.</p>
       <p className="lead">A centralized student platform that turns scattered academic responsibilities into a clear, intelligent daily workflow.</p>
       <div className="hero-actions"><a className="btn" href="#result">explore_product ↓</a><Link className="btn btn-ghost" to="/experiments">back_to_experiments ↗</Link></div>
     </div>
     <div className="campus-hero-visual panel">
       <div className="campus-visual-glow"/><div className="phone-stack"><div className="phone"><div className="phone-notch"/><div className="phone-head mono">NEXA CAMPUS <span>●</span></div><strong>Good morning.</strong><small>Here’s what matters today.</small><div className="mini-card urgent"><b>ML Assignment</b><span>Due in 4h 12m</span></div><div className="mini-card"><b>UI Prototype</b><span>Tomorrow</span></div><div className="mini-card"><b>Data Mining Quiz</b><span>Friday</span></div></div><div className="float-card fc-one mono">03 TASKS<br/><b>ACTIVE</b></div><div className="float-card fc-two mono">FOCUS<br/><b>72%</b></div><div className="float-card fc-three mono">AI<br/><b>READY</b></div></div>
       <div className="campus-visual-foot mono"><span>student_os / v0.1</span><span>product direction / validated</span></div>
     </div>
   </section>

   <section className="section campus-problem">
    <div><p className="kicker">// the_problem</p><h2 className="section-title">Student life is fragmented.</h2></div>
    <div className="problem-grid">{[['01','MISSED DEADLINES','Assignments are scattered across LMS, WhatsApp, notes, and calendars.'],['02','FRAGMENTED WORKFLOW','Academic activities and campus information live in disconnected places.'],['03','PRIORITY CONFUSION','Students know they have tasks, but not always what deserves attention first.'],['04','NO CAMPUS CONTEXT','Conventional to-do apps do not understand the rhythm of student life.']].map(([n,t,d])=><article className="problem-card panel" key={n}><span className="mono">{n}</span><h3>{t}</h3><p className="dim">{d}</p></article>)}</div>
   </section>

   <section className="section approach-campus">
    <div className="section-heading"><div><p className="kicker">// the_approach</p><h2 className="section-title">Student Needs → Centralized Information → Smart Organization → Action</h2></div><span className="mono dim">campus.pipeline / v1</span></div>
    <div className="campus-flow"><div className="flow-track"/>{[['01','STUDENT NEEDS','Understand the real workflow.'],['02','CENTRALIZED INFO','Bring essential context together.'],['03','SMART ORGANIZATION','Prioritize what matters next.'],['04','ACTION','Turn clarity into progress.']].map(([n,t,d])=><article className="flow-node panel" key={n}><span className="mono">{n}</span><div className="flow-icon">{['⌁','▦','✦','→'][Number(n)-1]}</div><h3>{t}</h3><p className="dim">{d}</p></article>)}</div>
    <div className="feature-grid">{[['ACADEMIC TASKS','Organize assignments, deadlines, and academic responsibilities in one place.'],['DEADLINE INTELLIGENCE','Turn scattered deadlines into a clear timeline of what needs attention.'],['CAMPUS INFORMATION','Bring relevant campus activities and information into a student-oriented experience.'],['PERSONAL DASHBOARD','Give students an at-a-glance view of upcoming tasks and priorities.'],['USER VALIDATION','Validate product direction through early student feedback and real responses.']].map(([t,d],i)=><article className="feature-card panel" key={t}><span className="mono">0{i+1}</span><h3>{t}</h3><p className="dim">{d}</p><i/></article>)}</div>
   </section>

   <section className="section campus-telegram">
    <div className="section-heading"><div><p className="kicker">// contoh_visualisasi</p><h2 className="section-title">Deadlines follow you into chat, not just the app.</h2></div><span className="mono dim">telegram.notify / v1</span></div>
    <p className="lead body-copy" style={{marginBottom:'18px'}}>Simulasi bagaimana NEXA Campus mendorong pengingat deadline langsung ke Telegram, supaya mahasiswa tidak perlu buka aplikasi dulu untuk tahu ada tugas yang mendekati jatuh tempo.</p>
    <TelegramNotifDemo/>
   </section>

   <section className="section campus-result" id="result">
    <div className="section-heading"><div><p className="kicker">// the_result</p><h2 className="section-title">Early User Validation</h2></div><span className="result-chip mono">EARLY SIGNAL / POSITIVE</span></div>
    <div className="validation-grid">{[['23','STUDENT RESPONDENTS','Validation participants'],['9','NEXA TEAM USERS','Active internal users'],['1','CORE PROBLEM VALIDATED','Recurring student pain point']].map(([v,t,d])=><div className="validation-card panel" key={t}><strong>{v}</strong><span className="mono">{t}</span><p className="dim">{d}</p></div>)}</div>
    <p className="result-copy">The initial validation confirmed a recurring student pain point: keeping track of academic deadlines and responsibilities across a fragmented campus workflow.</p>
    <CampusDemo/>
   </section>

   <section className="section built-campus">
    <div className="section-heading"><div><p className="kicker">// what_i_built</p><h2 className="section-title">A student workspace, not another to-do list.</h2></div></div>
    <div className="build-campus-list">{[['01','Student Productivity Platform','Designed a centralized workspace for managing academic responsibilities and campus activities.'],['02','Deadline Management','Built a workflow that makes upcoming deadlines easier to track, prioritize, and act on.'],['03','Student Dashboard','Designed a focused interface that gives students a clear overview of what matters next.'],['04','User Validation','Collected early feedback from students to validate the problem, product direction, and user experience.']].map(([n,t,d])=><article key={n}><span className="mono">{n}</span><div><h3>{t}</h3><p className="dim">{d}</p></div><b>↗</b></article>)}</div>
   </section>

   <section className="section beyond-campus">
    <div className="beyond-campus-visual panel"><div className="campus-orbit"><div className="orbit-ring r1"/><div className="orbit-ring r2"/><div className="orbit-core">NEXA<br/><b>CAMPUS</b></div><span className="orbit-label l1">TASKS</span><span className="orbit-label l2">DEADLINES</span><span className="orbit-label l3">CAMPUS</span><span className="orbit-label l4">AI</span></div></div>
    <div><p className="kicker">// beyond_a_to_do_list</p><h2 className="section-title">Understand what matters next.</h2><div className="campus-questions">{[['What do I need to do?','Academic task management'],['What is due next?','Deadline intelligence'],['What is happening on campus?','Campus information'],['What should I focus on now?','Personalized student dashboard']].map(([q,a])=><div key={q}><span>{q}</span><strong>{a}</strong></div>)}</div></div>
   </section>

   <section className="section campus-vision panel"><div><p className="kicker">// the_vision</p><h2 className="section-title">More than a task manager.</h2><p className="lead">NEXA Campus transforms student productivity from simply <strong>remembering deadlines</strong> into intelligently <strong>understanding what matters next.</strong></p></div><div className="vision-grid"><div><span className="mono">01</span><strong>Centralized</strong><small>Tasks & activities</small></div><div><span className="mono">02</span><strong>AI Prioritization</strong><small>Smarter daily focus</small></div><div><span className="mono">03</span><strong>Campus Intelligence</strong><small>One unified experience</small></div></div></section>

   <section className="section campus-close panel"><div><p className="kicker">// view_project</p><h2 className="section-title">Explore NEXA Campus.</h2><p className="dim">Student Productivity · Dashboard Intelligence · User Validation</p></div><div className="close-stats mono"><span>23 RESPONDENTS</span><span>9 INTERNAL USERS</span><span>MVP</span></div><Link className="btn" to="/experiments">Explore NEXA Campus →</Link></section>
 </div>
}
