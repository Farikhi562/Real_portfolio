import { experiences } from "@/data/experience";
import { calculateAge } from "@/data/age";
import { learningPriorities, skillGroups } from "@/data/skills";
import { navigation, profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";

const focusAreas = [
  {
    number: "01",
    title: "AI Engineering",
    description: "Building practical AI applications and learning how retrieval, LLMs, and useful product experiences fit together.",
    signal: "BUILDING",
  },
  {
    number: "02",
    title: "Data Science",
    description: "Developing the foundations to turn raw data into clearer questions, useful insights, and responsible models.",
    signal: "LEARNING",
  },
  {
    number: "03",
    title: "Software",
    description: "Strengthening programming and engineering fundamentals through hands-on projects and iteration.",
    signal: "PRACTICING",
  },
  {
    number: "04",
    title: "Technology ventures",
    description: "Exploring how technology can become useful products through NEXA, NEXCAMP, and entrepreneurship programs.",
    signal: "EXPLORING",
  },
];

const documents = [
  { title: "Curriculum Vitae", type: "PDF · Resume", action: "Not available yet" },
  { title: "Portfolio PDF", type: "PDF · Selected work", action: "Not available yet" },
  { title: "Certificates", type: "Learning · Programs", action: "No documents added yet" },
];

export default function Home() {
  const ragProject = projects[0];
  const otherProjects = projects.slice(1);
  const currentAge = process.env.PROFILE_BIRTH_DATE
    ? calculateAge(process.env.PROFILE_BIRTH_DATE)
    : "TBD";

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main">
        <section className="hero page-shell" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow"><span className="signal-dot" /> INFORMATICS STUDENT <span className="eyebrow-divider">/</span> AI ENGINEERING PATH</p>
            <h1 id="hero-title">Building toward <span>AI Engineering.</span></h1>
            <p className="hero-description">
              I&apos;m Zan, an Informatics student exploring AI, data, and software through projects, competitions, and technology initiatives.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore projects <span aria-hidden="true">↘</span></a>
              <a className="button button-secondary" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
            </div>
            <div className="hero-facts" aria-label="Education summary">
              <div><span className="fact-label">STUDYING</span><span>{profile.program}</span></div>
              <div><span className="fact-label">UNIVERSITY</span><span>{profile.university}</span></div>
              <div><span className="fact-label">COHORT</span><span>{profile.cohort} <span className="fact-separator">·</span> Semester {profile.semester}</span></div>
            </div>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-card" role="img" aria-label="Profile photo placeholder, ready for Zan's portrait">
              <span className="portrait-index">PROFILE / 001</span>
              <span className="portrait-monogram" aria-hidden="true">Z<span>.</span></span>
              <span className="portrait-placeholder">Portrait placeholder</span>
              <span className="portrait-corner portrait-corner-tl" aria-hidden="true" />
              <span className="portrait-corner portrait-corner-tr" aria-hidden="true" />
              <span className="portrait-corner portrait-corner-bl" aria-hidden="true" />
              <span className="portrait-corner portrait-corner-br" aria-hidden="true" />
            </div>
            <span className="portrait-caption"><span className="signal-dot" /> OPEN TO COLLABORATION</span>
            <span className="hero-coordinate">JAKARTA / INDONESIA</span>
          </div>
          <div className="hero-bottomline"><span>LEARN / BUILD / IMPROVE</span><a href="#projects">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a></div>
        </section>

        <section className="intro-strip" aria-label="Personal positioning">
          <div className="page-shell intro-strip-inner">
            <span className="intro-mark">Z<span>.</span></span>
            <p>Curious by nature. <strong>Building with intent.</strong> Learning by shipping.</p>
            <span className="intro-side-note">A WORK IN PROGRESS, BY DESIGN</span>
          </div>
        </section>

        <section className="section page-shell projects-section" id="projects" aria-labelledby="projects-title">
          <SectionHeading
            id="projects-title"
            index="01"
            eyebrow="SELECTED WORK / INITIATIVES"
            title="Ideas in motion."
            description="A mix of projects in development, ongoing initiatives, and concepts. Each status reflects where the work actually is today."
          />
          <div className="project-grid">
            <ProjectCard project={ragProject} featured />
            {otherProjects.map((project) => <ProjectCard key={project.title} project={project} />)}
          </div>
          <p className="section-footnote"><span className="signal-dot" /> Project links and implementation details will appear here when they are ready to share.</p>
        </section>

        <section className="focus-section" aria-labelledby="focus-title">
          <div className="page-shell section">
            <SectionHeading
              id="focus-title"
              index="02"
              eyebrow="CURRENT FOCUS"
              title="What I'm building toward."
              description="The current learning path sits between engineering foundations, applied AI, and products that solve real problems."
            />
            <div className="focus-grid">
              {focusAreas.map((area) => (
                <article className="focus-card" key={area.number}>
                  <div className="focus-card-top"><span>{area.number}</span><span className="focus-signal">{area.signal}</span></div>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                  <span className="focus-rule" aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section page-shell experience-section" id="experience" aria-labelledby="experience-title">
          <SectionHeading
            id="experience-title"
            index="03"
            eyebrow="EXPERIENCE / ACTIVITIES"
            title="Learning beyond the classroom."
            description="Programs, competitions, and team initiatives that shape how I think about technology and building products."
          />
          <div className="experience-list">
            {experiences.map((item, index) => (
              <article className="experience-row" key={item.title}>
                <span className="experience-number">0{index + 1}</span>
                <div className="experience-title-block">
                  <p className="experience-category">{item.category}</p>
                  <h3>{item.title}</h3>
                  <span>{item.organization}</span>
                </div>
                <p className="experience-description">{item.description}</p>
                <div className="experience-contribution">
                  <span className="experience-status"><span className="status-dot" />{item.status}</span>
                  <span>{item.contribution}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills-section" id="skills" aria-labelledby="skills-title">
          <div className="page-shell section">
            <SectionHeading
              id="skills-title"
              index="04"
              eyebrow="SKILLS / LEARNING PATH"
              title="Progress, not posturing."
              description="These labels separate foundations from areas I&apos;m actively building, learning, and exploring. No proficiency percentages, just an honest snapshot."
            />
            <div className="skills-layout">
              <div className="skill-groups">
                {skillGroups.map((group, index) => (
                  <article className="skill-group" key={group.title}>
                    <div className="skill-group-heading">
                      <span className="skill-group-number">0{index + 1}</span>
                      <h3>{group.title}</h3>
                      <span className={`skill-state skill-state-${group.state.toLowerCase()}`}>{group.state}</span>
                    </div>
                    <ul className="skill-tags">
                      {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                    </ul>
                  </article>
                ))}
              </div>
              <aside className="learning-panel" aria-labelledby="learning-title">
                <p className="eyebrow">A LIVING ROADMAP</p>
                <h3 id="learning-title">Currently learning</h3>
                <ol>
                  {learningPriorities.map((priority, index) => (
                    <li key={priority}><span>{String(index + 1).padStart(2, "0")}</span>{priority}</li>
                  ))}
                </ol>
                <span className="learning-panel-note">The order changes as the work evolves.</span>
              </aside>
            </div>
          </div>
        </section>

        <section className="section page-shell about-section" id="about" aria-labelledby="about-title">
          <SectionHeading id="about-title" index="05" eyebrow="A LITTLE ABOUT ME" title="The person behind the projects." />
          <div className="about-layout">
            <div className="about-copy">
              <p className="about-lead">I&apos;m Zan, an Informatics student at Universitas Gunadarma building my path toward AI Engineering.</p>
              <p>With an MIPA background and an interest in mathematics, logic, and technology, I moved deeper into programming, data, and artificial intelligence. Today, I&apos;m focused on turning what I learn into practical projects, from RAG applications and data-driven systems to technology products and entrepreneurship initiatives.</p>
              <p>I&apos;m also exploring IoT as another area I want to understand more deeply. I don&apos;t consider myself an expert yet. I&apos;m building, learning, and improving through every project.</p>
              <a className="text-link" href="#contact">More about my work <span aria-hidden="true">↗</span></a>
            </div>
            <dl className="profile-card">
              <div className="profile-card-heading"><dt>PROFILE / SNAPSHOT</dt><dd>2026</dd></div>
              <div><dt>FULL NAME</dt><dd>{profile.name}</dd></div>
              <div><dt>PREFERRED NAME</dt><dd>{profile.preferredName}</dd></div>
              <div><dt>EDUCATION</dt><dd>{profile.program}<br />{profile.faculty}<br />{profile.university}</dd></div>
              <div className="profile-pair">
                <span><dt>COHORT</dt><dd>{profile.cohort}</dd></span>
                <span><dt>SEMESTER</dt><dd>{profile.semester}</dd></span>
              </div>
              <div className="profile-pair">
                <span><dt>AGE</dt><dd>{currentAge}</dd></span>
                <span><dt>LOCATION</dt><dd>{profile.location}</dd></span>
              </div>
              <div><dt>FOCUS</dt><dd>AI Engineering</dd></div>
              <div><dt>ALSO EXPLORING</dt><dd>Data Science · ML · IoT · Software</dd></div>
            </dl>
          </div>
        </section>

        <section className="documents-section" aria-labelledby="documents-title">
          <div className="page-shell section">
            <SectionHeading
              id="documents-title"
              index="06"
              eyebrow="DOCUMENTS"
              title="More context, when it's ready."
              description="I&apos;ll add verified documents here as they become available."
            />
            <div className="documents-grid">
              {documents.map((document, index) => (
                <article className="document-card" key={document.title}>
                  <span className="document-icon" aria-hidden="true">{index === 2 ? "＋" : "↗"}</span>
                  <span className="document-type">{document.type}</span>
                  <h3>{document.title}</h3>
                  <span className="document-unavailable">{document.action}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="page-shell contact-inner">
            <div className="contact-copy">
              <p className="eyebrow"><span className="signal-dot" /> OPEN TO COLLABORATION</p>
              <h2 id="contact-title">Let&apos;s build<br /><span>something useful.</span></h2>
              <p>Open to collaboration, technology projects, learning opportunities, and thoughtful conversations around AI and software.</p>
              <a className="button button-primary contact-email" href={`mailto:${profile.email}`}>Email me <span aria-hidden="true">↗</span></a>
            </div>
            <div className="contact-links" aria-label="Social and contact links">
              <a href={profile.github} target="_blank" rel="noreferrer"><span>GITHUB</span><strong>GitHub profile</strong><span aria-hidden="true">↗</span></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><span>LINKEDIN</span><strong>LinkedIn profile</strong><span aria-hidden="true">↗</span></a>
              <a href={`mailto:${profile.email}`}><span>EMAIL</span><strong>{profile.email}</strong><span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer page-shell">
        <a className="footer-brand" href="#top" aria-label="Back to top">Z<span>.</span></a>
        <p>AI Engineer in the Making.</p>
        <div className="footer-links">
          {navigation.slice(1).map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
        </div>
        <span className="copyright">© 2026 {profile.name}</span>
        <a className="back-top" href="#top">BACK TO TOP <span aria-hidden="true">↑</span></a>
      </footer>
    </>
  );
}
