import type { Project } from "@/data/projects";

const statusClass: Record<Project["status"], string> = {
  Building: "status-building",
  Ongoing: "status-ongoing",
  Concept: "status-concept",
  "In development": "status-development",
};

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className={`project-card${featured ? " project-card-featured" : ""}`}>
      <div className="project-card-topline">
        <span className="project-number">{project.number} / 06</span>
        <span className={`status-pill ${statusClass[project.status]}`}>
          <span aria-hidden="true" className="status-dot" />
          {project.status}
        </span>
      </div>
      <div className="project-card-copy">
        <p className="project-category">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
      </div>
      {featured ? (
        <div className="pipeline" aria-label="Simplified RAG question-answering flow">
          <div className="pipeline-label"><span className="signal-dot" /> SYSTEM FLOW</div>
          <div className="pipeline-flow">
            <span>DOCUMENT</span><b aria-hidden="true">→</b>
            <span>RETRIEVAL</span><b aria-hidden="true">→</b>
            <span>GROUNDED ANSWER</span>
          </div>
        </div>
      ) : null}
      <div className="project-card-bottom">
        <div className="tag-list" aria-label="Project topics">
          {project.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}
        </div>
        <div className="project-meta">
          <span><span className="meta-label">ROLE</span>{project.role}</span>
          <span className="project-detail">{project.detail}</span>
        </div>
        <div className="project-links">
          {project.github ? (
            <a href={project.github} target="_blank" rel="noreferrer">Repository <span aria-hidden="true">↗</span></a>
          ) : <span className="link-pending">Repository details pending</span>}
          {project.demo ? (
            <a href={project.demo} target="_blank" rel="noreferrer">Live demo <span aria-hidden="true">↗</span></a>
          ) : <span className="link-pending">No public demo yet</span>}
        </div>
      </div>
    </article>
  );
}
