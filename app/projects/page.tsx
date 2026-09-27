import { ProjectCard } from "@/components/project-card";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell archive-page">
        <p className="eyebrow">PORTFOLIO / PROJECT ARCHIVE</p>
        <h1>Projects in progress.</h1>
        <p className="archive-intro">A broader view of projects, product initiatives, and concepts. Status and implementation details are included so each project is represented honestly.</p>
        <div className="project-grid archive-project-grid">
          {projects.map((project, index) => <ProjectCard key={project.title} project={project} featured={index === 0} />)}
        </div>
        <a className="text-link archive-back-link" href="/#projects">← Back to selected work</a>
      </main>
      <footer className="site-footer page-shell"><a className="footer-brand" href="/#top">Z<span>.</span></a><p>AI Engineer in the Making.</p><a className="back-top" href="/#top">HOME <span aria-hidden="true">↗</span></a></footer>
    </>
  );
}
